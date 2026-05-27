"use client";

import { menu } from "@/public/assets/data/menu";
import { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedSubmenu, setOpenedSubmenu] = useState<string | number>("");
  const [scrolled, setScrolled] = useState(false);

  const handleOpenSubmenu = (id: string | number) => {
    if (id === openedSubmenu) {
      setOpenedSubmenu("");
    } else {
      setOpenedSubmenu(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`overlay ${menuOpen && "overlay--active"}`}></div>

      <header className={`srex-header srex-header--home-one ${scrolled && "sticky-top"}`}>
        <div className="container">
          <nav className="ud-main-menu ud-main-menu--home-one d-flex align-items-center justify-content-between" aria-label="Main Navigation">
            <div className="ud-main-menu__logo">
              <Link href="/">
                <img 
                  src="/images/logo-black.png" 
                  alt="Available4Sale" 
                  style={{ height: "4em", width: "auto", display: "block" }} 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation Links */}
            <ul className="ud-main-menu__links d-none d-lg-flex">
              {menu.map(({ id, title, submenus, url }) => {
                // An item only behaves as a dropdown if it has submenus AND no primary direct link URL
                const isDropdown = submenus && submenus.length > 0 && !url;

                return (
                  <li key={id} className={isDropdown ? "has-dropdown" : ""}>
                    {url ? (
                      <Link href={url}>{title}</Link>
                    ) : (
                      <>
                        <a href="#">
                          {title} <i className="fa-solid fa-angle-down"></i>
                        </a>
                        <ul className="ud-main-menu__sub-menu">
                          {submenus?.map((sub) => (
                            <li key={sub.id}>
                              <Link href={sub.url}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>

            <div onClick={() => setMenuOpen(!menuOpen)} className="ud-hamburger-menu d-block d-lg-none">
              <div className={`ud-hamburger-menu__btn ${menuOpen && "ud-hamburger-menu__btn--active"}`}>
                <span></span>
              </div>
            </div>

            <div className="srex-header__call d-flex align-items-center gap-2 m-0 d-none d-xl-flex">
              <img src="/images/chat.svg" alt="Chat" />
              <div>
                <span>Need help?</span>
                <h4>
                  <a href="tel:+234000000000">0800 000 0000</a>
                </h4>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Sidebar Navigation */}
        <div className={`ud-side-popup ud-side-popup--home-one ${menuOpen && "ud-side-popup--open"}`}>
          <div className="ud-side-popup__header">
            <div className="ud-side-popup__header-logo">
              <img src="/images/logo-black.png" alt="Solarex" />
            </div>
            <button onClick={() => setMenuOpen(false)} className="side-popup-close">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="ud-side-popup__body">
            <ul className="metismenu" id="side-menu">
              {menu.map(({ id, title, submenus, url }) => (
                <li key={id}>
                  {url ? (
                    <Link href={url} onClick={() => setMenuOpen(false)}>{title}</Link>
                  ) : (
                    <>
                      <a href="#" onClick={() => handleOpenSubmenu(id)}>
                        {title} <i className="fa-solid fa-plus"></i>
                      </a>
                      <AnimateHeight height={openedSubmenu === id ? "auto" : 0}>
                        <ul className="sub-menu" aria-expanded="false">
                          {submenus?.map((sub) => (
                            <li key={sub.id}>
                              <Link href={sub.url} onClick={() => setMenuOpen(false)}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </AnimateHeight>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="ud-side-popup__bottom">
            <div className="ud-side-popup__bottom-info">
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-phone"></i>
                <div className="ud-header-info-box__details">
                  <span>Need Help?</span>
                  <h4>
                    <a href="tel:+2340000000000">+2340000000000</a>
                  </h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-paper-plane"></i>
                <div className="ud-header-info-box__details">
                  <span>Lagos, </span>
                  <h4>Nigeria.</h4>
                </div>
              </div>
              <div className="ud-side-popup__bottom-info-box d-flex align-items-center gap-3 py-0 m-0">
                <i className="fa-solid fa-envelope"></i>
                <div className="ud-header-info-box__details">
                  <span>Send email</span>
                  <h4>
                    <a href="mailto:hello@example.com">info@whogetsit.com</a>
                  </h4>
                </div>
              </div>
            </div>
            <ul className="ud-side-popup__bottom-socials">
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
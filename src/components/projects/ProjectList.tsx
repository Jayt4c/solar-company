"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

interface IsotopeInstance {
  arrange: (opts: { filter: string }) => void;
  destroy: () => void;
}

const ProjectList = () => {
  const [isotope, setIsotope] = useState<IsotopeInstance | null>(null);
  const [filterKey, setFilterKey] = useState<string>("*");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const portfolioItems: PortfolioItem[] = [
    { id: 1, category: "solar-pro", title: "Equality and solidarity", image: "/images/portfolio/portfolio-1.png" },
    { id: 2, category: "power", title: "Windward Renewables", image: "/images/portfolio/portfolio-2.png" },
    { id: 3, category: "eco-solar", title: "Sun Breeze Power", image: "/images/portfolio/portfolio-3.png" },
    { id: 4, category: "power", title: "Sun Breeze Power", image: "/images/portfolio/portfolio-2.png" },
    { id: 5, category: "eco-solar", title: "Sun Breeze Power", image: "/images/portfolio/portfolio-3.png" },
    { id: 6, category: "energy", title: "Wind Whisper Energy", image: "/images/portfolio/portfolio-4.png" },
  ];

  useEffect(() => {
    let iso: IsotopeInstance | null = null;

    const init = async () => {
      if (!containerRef.current) return;

      const IsotopeModule = (await import("isotope-layout")).default as unknown as {
        new (
          element: HTMLElement,
          options: { itemSelector: string; layoutMode: string }
        ): IsotopeInstance;
      };

      iso = new IsotopeModule(containerRef.current, {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });

      setIsotope(iso);
    };

    init();

    return () => {
      iso?.destroy();
    };
  }, []);

  useEffect(() => {
    if (!isotope) return;

    const filter = filterKey === "*" ? "*" : `.${filterKey}`;
    isotope.arrange({ filter });
  }, [filterKey, isotope]);

  const handleFilterKeyChange = (key: string) => () => {
    setFilterKey(key);
  };

  return (
    <section className="srex-portfolio srex-section pt-120">
      <div className="container-fluid">
        <div className="srex-portfolio__title">
          <div className="srex-section__head">
            <h5 className="srex-section__head__badge">
              <img src="/images/badge-icon.svg" alt="Badge Icon" />
              latest portfolio
            </h5>
            <h2 className="srex-section__head__title">
              Embrace the power of the sun with solar energy!
            </h2>
          </div>
        </div>

        <div className="controls">
          <ul id="filters">
            {["*", "power", "eco-solar", "solar-pro", "energy"].map((key) => (
              <li
                key={key}
                className={`filter ${filterKey === key ? "active" : ""}`}
                onClick={handleFilterKeyChange(key)}
              >
                {key === "*"
                  ? "All"
                  : key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
              </li>
            ))}
          </ul>
        </div>

        <div className="row" id="srex-ho-filter" ref={containerRef}>
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className={`col-md-6 col-lg-4 col-12 filter-item ${item.category}`}
            >
              <Link href="/project-details">
                <div className="srex-portfolio__item">
                  <img src={item.image} alt={`portfolio-${item.id}`} />
                  <div className="srex-portfolio__item__title">
                    <h2>{item.id.toString().padStart(2, "0")}</h2>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
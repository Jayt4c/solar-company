"use client";

import { useState } from "react";
import Link from "next/link";

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  image: string;
}

const Portfolio = () => {
  const [filterKey, setFilterKey] = useState<string>("*");

  const portfolioItems: PortfolioItem[] = [
    { id: 1, category: "solar-pro", title: "Equality and solidarity", image: "/images/portfolio/portfolio-1.png" },
    { id: 2, category: "power", title: "Windward Renewables", image: "/images/portfolio/portfolio-2.png" },
    { id: 3, category: "eco-solar", title: "Sun Breeze Power", image: "/images/portfolio/portfolio-3.png" },
    { id: 4, category: "energy", title: "Wind Whisper Energy", image: "/images/portfolio/portfolio-4.png" },
  ];

  // Simply filter the array directly in your JavaScript runtime
  const filteredItems = filterKey === "*" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filterKey);

  return (
    <section className="srex-portfolio srex-section">
      <div className="container-fluid">
        <div className="srex-portfolio__title">
          <div className="srex-section__head ">
            <h5 className="srex-section__head__badge">
              <img src="/images/badge-icon.svg" alt="Badge Icon" />
              latest portfolio
            </h5>
            <h2 className="srex-section__head__title">
              Embrace the power of the sun with solar energy!
            </h2>
          </div>
        </div>

        <div className="controls ">
          <ul id="filters">
            {["*", "power", "eco-solar", "solar-pro", "energy"].map((key) => (
              <li 
                key={key} 
                className={`filter ${filterKey === key ? "active" : ""}`} 
                onClick={() => setFilterKey(key)}
              >
                {key === "*" ? "All" : key.charAt(0).toUpperCase() + key.slice(1).replace("-", " ")}
              </li>
            ))}
          </ul>
        </div>

        {/* Standard, reliable Bootstrap row grid layout */}
        <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 col-xl-3 col-12 srex-portfolio__grid-item">
              <Link href="/project-details">
                <div className="srex-portfolio__item ">
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

export default Portfolio;
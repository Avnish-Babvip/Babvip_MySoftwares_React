import { useEffect, useState } from "react";

export default function StickyMenu() {
  const [scrollingUp, setScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingUp(false); // Hide on scroll down
      } else {
        setScrollingUp(true); // Show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section style={{ padding: 0, height: "auto" }}>
      <div className="container mb-4">
        <div className="row" id="tab-custom">
          <div className="col-12">
            <ul
              className={`nav-custom feature-tab-list-2 sticky-menu ${
                scrollingUp ? "visible" : "hidden"
              }`}
              id="nav-tab-2"
            >
              {[
                { href: "#description", label: "Description" },
                { href: "#pricing", label: "Pricing" },
                { href: "#faq", label: "FAQ's" },
                { href: "#specification", label: "Specifications" },
                { href: "#features", label: "Features" },
                { href: "#reviews", label: "Review" },
              ].map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link nav-link-custom" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

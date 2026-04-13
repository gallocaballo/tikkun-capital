"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById("nav");
    const handleScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const u = "danny.greene";
    const d = "gmail.com";
    window.location.href = "mai" + "lto:" + u + "@" + d;
  };

  return (
    <>
      {/* Nav */}
      <nav id="nav">
        <div className="nav-logo">Tikkun Capital</div>
        <ul className="nav-links">
          <li><a href="#thesis">Thesis</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-eyebrow">Real Estate Investment Syndication</div>
        <h1>Building wealth through <em>trusted</em> partnerships</h1>
        <p className="hero-sub">
          Since 2017, Tikkun Capital has syndicated real estate development
          opportunities for a select group of investors, delivering consistent
          returns through disciplined underwriting and long-term developer
          relationships.
        </p>
        <div className="hero-line"></div>
      </section>

      {/* Thesis */}
      <section className="thesis" id="thesis">
        <div className="section-inner">
          <div className="section-label reveal">Investment Thesis</div>
          <div className="section-title reveal">How we invest</div>
          <div className="section-desc reveal">
            We partner with experienced developers on ground-up residential and
            mixed-use projects across the American Southwest, structuring each
            deal to align interests and protect capital.
          </div>
          <div className="thesis-grid">
            <div className="thesis-card reveal">
              <div className="num">01</div>
              <h3>Developer-Led Execution</h3>
              <p>
                We invest alongside developers we&apos;ve worked with for years
                — operators with deep local expertise, proven construction track
                records, and meaningful co-investment in every deal.
              </p>
            </div>
            <div className="thesis-card reveal">
              <div className="num">02</div>
              <h3>Structured Protection</h3>
              <p>
                Every investment features a preferred return to investors before
                any profit split. We charge no management fees — our
                compensation is earned only when investors profit.
              </p>
            </div>
            <div className="thesis-card reveal">
              <div className="num">03</div>
              <h3>Supply-Constrained Markets</h3>
              <p>
                We target high-growth metros with strong demand fundamentals and
                limited new housing supply — Southern California, Arizona, and
                select Southwest markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio">
        <div className="section-inner">
          <div className="section-label reveal">Track Record</div>
          <div className="section-title reveal">Portfolio</div>
          <div className="stats-row reveal">
            <div className="stat">
              <div className="stat-value">6</div>
              <div className="stat-label">Investment Vehicles</div>
            </div>
            <div className="stat">
              <div className="stat-value">10%+</div>
              <div className="stat-label">Historical Annual Returns</div>
            </div>
            <div className="stat">
              <div className="stat-value">2017</div>
              <div className="stat-label">Year Founded</div>
            </div>
          </div>
          <table className="portfolio-table reveal">
            <thead>
              <tr>
                <th>Project</th>
                <th className="hide-mobile">Type</th>
                <th>Status</th>
                <th className="hide-mobile">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="project-name">Tikkun Stringfield</div>
                  <div className="project-sub">Prescott, AZ</div>
                </td>
                <td className="hide-mobile">Luxury Single-Family · 24 Homes</td>
                <td><span className="status-badge status-funding">Funding</span></td>
                <td className="hide-mobile">2025</td>
              </tr>
              <tr>
                <td>
                  <div className="project-name">Tikkun Rancho</div>
                  <div className="project-sub">Rancho Cucamonga, CA</div>
                </td>
                <td className="hide-mobile">Mixed-Use Multifamily · 176 Units</td>
                <td><span className="status-badge status-funding">Funding</span></td>
                <td className="hide-mobile">2024</td>
              </tr>
              <tr>
                <td>
                  <div className="project-name">Tikkun Prescott</div>
                  <div className="project-sub">Prescott, AZ</div>
                </td>
                <td className="hide-mobile">Single-Family · 24 Homes</td>
                <td><span className="status-badge status-active">In Progress</span></td>
                <td className="hide-mobile">2023</td>
              </tr>
              <tr>
                <td>
                  <div className="project-name">Tikkun Greenleaf</div>
                  <div className="project-sub">Whittier, CA</div>
                </td>
                <td className="hide-mobile">Single-Family · 17 Homes</td>
                <td><span className="status-badge status-active">In Progress</span></td>
                <td className="hide-mobile">2022</td>
              </tr>
              <tr>
                <td>
                  <div className="project-name">Tikkun Lexington</div>
                  <div className="project-sub">Hollywood, CA</div>
                </td>
                <td className="hide-mobile">Small Lot Subdivision · 18 Homes</td>
                <td><span className="status-badge status-closed">Closed</span></td>
                <td className="hide-mobile">2020</td>
              </tr>
              <tr>
                <td>
                  <div className="project-name">Tikkun Ventures III</div>
                  <div className="project-sub">Diversified Real Estate Fund</div>
                </td>
                <td className="hide-mobile">Real Estate Fund</td>
                <td><span className="status-badge status-closed">Closed</span></td>
                <td className="hide-mobile">2017</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginTop: "1.5rem", fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
            Past performance is not indicative of future results.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-text">
              <div className="section-label reveal">About</div>
              <div className="section-title reveal">Danny Greene</div>
              <p className="reveal">
                Danny founded Tikkun Capital in 2017 to give friends and family
                access to institutional-quality real estate development
                opportunities — deals typically reserved for larger allocators.
                What started as a single investment alongside a trusted developer
                partner has grown into a six-vehicle portfolio across Southern
                California and Arizona.
              </p>
              <p className="reveal">
                Danny&apos;s career spans growth leadership in technology and
                media, investment management and capital formation, and real
                estate development. He holds an MBA from UCLA Anderson and a BA
                from Stanford University.
              </p>
              <p className="reveal">
                Every deal in the Tikkun portfolio reflects a simple principle:
                invest only alongside operators you trust, in markets where the
                fundamentals are undeniable, with structures that put investor
                capital first.
              </p>
            </div>
            <div className="about-aside">
              <h3 className="reveal">Developer Partners</h3>
              <div className="partner-block reveal">
                <div className="name">Albert Bernal</div>
                <div className="firm">Bernal Capital Group · Newport Beach, CA</div>
                <div className="desc">
                  Private real estate investment firm focused on opportunistic
                  residential and commercial developments throughout Southern
                  California. Albert holds a JD/MBA from UCLA and has 20+ years
                  in real estate investment, development, and finance.
                </div>
              </div>
              <div className="partner-block reveal">
                <div className="name">Cory Nikolaus</div>
                <div className="firm">Southwest Sunset Homes · Prescott, AZ</div>
                <div className="desc">
                  Seasoned single-family developer in the Prescott market with
                  40+ homes sold in the past 24 months. Cory brings 22 years of
                  experience in residential construction, fund formation, and
                  compliance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tikkun Olam */}
      <section className="meaning">
        <div className="meaning-inner reveal">
          <div className="meaning-word">Tikkun Olam</div>
          <blockquote>
            A Hebrew phrase meaning &ldquo;to repair the world.&rdquo; The idea
            that we each carry a responsibility to leave things better than we
            found them. It&apos;s the underlying value in how we operate — and
            the lens through which we approach every partnership, every
            investment, and every commitment we make.
          </blockquote>
          <div className="note">The inspiration behind our name</div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="section-label reveal">Get in Touch</div>
        <div className="section-title reveal">Interested in learning more?</div>
        <p className="section-desc reveal">
          Tikkun Capital invests alongside a select group of accredited
          investors. If you&apos;d like to discuss current or upcoming
          opportunities, we&apos;d welcome the conversation.
        </p>
        <a href="#" onClick={handleContact} className="contact-btn reveal">
          Request Information
        </a>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">Tikkun Capital</div>
        <div className="legal">
          This site is for informational purposes only and does not constitute an
          offer to sell or a solicitation of an offer to buy any securities.
          Investments are available only to accredited investors and are subject
          to the terms of applicable offering documents. Past performance is not
          indicative of future results.
        </div>
      </footer>

      {/* Dedication */}
      <div className="dedication">
        <p>
          In memory of <span className="name">Carson Faris</span> (1982–2024),
          who taught me this business and so much more. Miss you. Love you.
        </p>
      </div>
    </>
  );
}

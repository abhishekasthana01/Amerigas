"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".fade-in-up");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" aria-label="AmeriGas Home">
            <Image
              src="/logo-amerigas-desktop.svg"
              alt="AmeriGas Propane"
              width={214}
              height={31}
              priority
            />
          </a>

          <ul className="navbar-links">
            <li><a href="#services">About Propane</a></li>
            <li><a href="#why">Why AmeriGas</a></li>
            <li><a href="#showcase">Services</a></li>
            <li><a href="#myamerigas">My Account</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="navbar-actions">
            <a href="#" className="btn btn-outline" id="login-btn">Login</a>
            <a href="#cta" className="btn btn-primary" id="get-quote-btn">Get a Quote</a>
          </div>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            id="mobile-menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`} id="mobile-menu">
        <a href="#services" onClick={() => setMobileMenuOpen(false)}>About Propane</a>
        <a href="#why" onClick={() => setMobileMenuOpen(false)}>Why AmeriGas</a>
        <a href="#showcase" onClick={() => setMobileMenuOpen(false)}>Services</a>
        <a href="#myamerigas" onClick={() => setMobileMenuOpen(false)}>My Account</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        <a href="#" onClick={() => setMobileMenuOpen(false)}>Login</a>
      </div>

      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image
            src="/mammoth-lakes-hero-1020x764px.webp"
            alt="AmeriGas bobtail delivering propane in the snow near Mammoth Lakes"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">
            America&apos;s #1 Propane Company
          </div>
          <h1 className="hero-title">
            Switch To The Propane Pros
          </h1>
          <p className="hero-subtitle">
            Don&apos;t take a chance on just any propane company this season. Go
            with the propane pros at AmeriGas &amp; enjoy a low first-fill price
            when you switch.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn btn-white btn-lg" id="hero-quote-btn">
              Get a Quote &amp; Save
            </a>
            <a href="#services" className="btn btn-outline btn-lg" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff" }} id="hero-learn-btn">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">1.8M+</div>
              <div className="hero-stat-label">Customers Served</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">50+</div>
              <div className="hero-stat-label">States Covered</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">24/7</div>
              <div className="hero-stat-label">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS / SERVICES ===== */}
      <section className="section" id="services">
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-label">Quick Links</div>
            <h2 className="section-title">How can we help?</h2>
            <p className="section-desc">
              Select from the options below to get started with your propane needs.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card fade-in-up" id="service-pay-bill">
              <div className="service-card-number">01</div>
              <h3 className="service-card-title">Pay My Bill</h3>
              <p className="service-card-desc">
                Quickly and securely pay your AmeriGas bill online. Multiple payment options available for your convenience.
              </p>
            </div>
            <div className="service-card fade-in-up" id="service-delivery">
              <div className="service-card-number">02</div>
              <h3 className="service-card-title">Propane Delivery</h3>
              <p className="service-card-desc">
                Request a propane delivery online in just a few clicks. Schedule deliveries that work with your timeline.
              </p>
            </div>
            <div className="service-card fade-in-up" id="service-online">
              <div className="service-card-number">03</div>
              <h3 className="service-card-title">Online Services</h3>
              <p className="service-card-desc">
                Order propane, pay your bill online, and chat with agents. Everything you need, right at your fingertips.
              </p>
            </div>
            <div className="service-card fade-in-up" id="service-support">
              <div className="service-card-number">04</div>
              <h3 className="service-card-title">AmeriGas Support</h3>
              <p className="service-card-desc">
                Access our comprehensive support guides and get answers to your propane service questions fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MY AMERIGAS ACCOUNT ===== */}
      <section className="section myamerigas" id="myamerigas">
        <div className="container">
          <div className="myamerigas-grid">
            <div className="myamerigas-content fade-in-up">
              <div className="section-label">MyAmeriGas</div>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Manage your propane services online
              </h2>
              <p className="section-desc" style={{ textAlign: "left", marginBottom: "20px" }}>
                Manage your propane services online with a MyAmeriGas account — order propane, check delivery status, pay your bill, &amp; connect with support agents.
              </p>
              <p className="section-desc" style={{ textAlign: "left", marginBottom: "32px" }}>
                Sign up &amp; log in today to take control of your propane account from anywhere, anytime.
              </p>
              <a href="#" className="btn btn-primary btn-lg" id="myamerigas-btn">
                Take Me to MyAmeriGas
              </a>
            </div>
            <div className="myamerigas-img-wrapper fade-in-up">
              <Image
                src="/propanedelivery_5050_fixedcycle.webp"
                alt="MyAmeriGas Online Account"
                width={640}
                height={420}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY AMERIGAS ===== */}
      <section className="why-section" id="why">
        <div className="why-section-inner">
          <div className="why-left fade-in-up">
            <div className="why-image-container">
              <Image
                src="/aboutpropane_5050_wheredoespropane.webp"
                alt="AmeriGas propane delivery to your home"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="why-image-overlay" />
              <div className="why-image-badge">
                <span className="why-image-badge-number">1.8M+</span>
                <span className="why-image-badge-text">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="why-right fade-in-up">
            <div className="why-right-header">
              <div className="section-label">Why AmeriGas</div>
              <h2 className="why-section-title">
                The propane partner you can trust
              </h2>
              <p className="why-section-desc">
                No matter how you use propane, AmeriGas delivers all the services you need to keep your home, your business, and your life running.
              </p>
            </div>
            <div className="why-benefits">
              <div className="why-benefit" id="why-reliable">
                <div className="why-benefit-marker">
                  <div className="why-benefit-dot" />
                  <div className="why-benefit-line" />
                </div>
                <div className="why-benefit-content">
                  <h3 className="why-benefit-title">A reliable propane partner</h3>
                  <p className="why-benefit-desc">
                    No matter what you need or when you need it, we&apos;re here for
                    you. You can rely on AmeriGas to keep you powered up without
                    interruptions or complications.
                  </p>
                </div>
              </div>
              <div className="why-benefit" id="why-digital">
                <div className="why-benefit-marker">
                  <div className="why-benefit-dot" />
                  <div className="why-benefit-line" />
                </div>
                <div className="why-benefit-content">
                  <h3 className="why-benefit-title">Digital tools at your fingertips</h3>
                  <p className="why-benefit-desc">
                    The MyAmeriGas portal helps you keep track of your usage,
                    schedule deliveries, and stay in-the-know with the important
                    information you need, so you can take action in just a click.
                  </p>
                </div>
              </div>
              <div className="why-benefit why-benefit-last" id="why-safety">
                <div className="why-benefit-marker">
                  <div className="why-benefit-dot" />
                </div>
                <div className="why-benefit-content">
                  <h3 className="why-benefit-title">Your safety. Our promise.</h3>
                  <p className="why-benefit-desc">
                    AmeriGas is there for you whenever you need us. We are committed
                    to providing safe, reliable, and responsive service to all of
                    our customers. This is our promise to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SHOWCASE ===== */}
      <section className="section showcase" id="showcase">
        <div className="container">
          <div className="section-header fade-in-up">
            <div className="section-label">Our Services</div>
            <h2 className="section-title">AmeriGas Services</h2>
            <p className="section-desc">
              From residential delivery to commercial solutions, we provide reliable propane services tailored to your needs.
            </p>
          </div>
          <div className="showcase-grid">
            <div className="showcase-card fade-in-up" id="showcase-automatic">
              <div className="showcase-card-img-wrapper">
                <Image
                  src="/propanedelivery_5050_automatic.webp"
                  alt="AmeriGas automatic propane delivery"
                  width={480}
                  height={220}
                  className="showcase-card-img"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="showcase-card-body">
                <h3 className="showcase-card-title">Automatic Delivery</h3>
                <p className="showcase-card-text">
                  Never worry about running out. We monitor your usage and deliver propane automatically when you need it.
                </p>
              </div>
            </div>
            <div className="showcase-card fade-in-up" id="showcase-willcall">
              <div className="showcase-card-img-wrapper">
                <Image
                  src="/propanedelivery_5050_willcall.webp"
                  alt="AmeriGas will call propane delivery"
                  width={480}
                  height={220}
                  className="showcase-card-img"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="showcase-card-body">
                <h3 className="showcase-card-title">Will-Call Delivery</h3>
                <p className="showcase-card-text">
                  Prefer to order on your own schedule? Request a delivery online whenever you&apos;re ready.
                </p>
              </div>
            </div>
            <div className="showcase-card fade-in-up" id="showcase-converting">
              <div className="showcase-card-img-wrapper">
                <Image
                  src="/aboutpropane_2up_converting.webp"
                  alt="Converting to propane"
                  width={480}
                  height={220}
                  className="showcase-card-img"
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="showcase-card-body">
                <h3 className="showcase-card-title">Switch to Propane</h3>
                <p className="showcase-card-text">
                  Thinking about making the switch? Learn how propane can power your home efficiently and cleanly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" id="cta">
        <div className="cta-bg" />
        <div className="cta-content fade-in-up">
          <h2 className="cta-title">
            Ordering your propane online is even easier with AmeriGas
          </h2>
          <p className="cta-desc">
            Get started today! Whether you&apos;re a new customer ready to make
            the switch, or an existing customer looking to manage your
            account — we&apos;ve got you covered.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-white btn-lg" id="cta-become-btn">
              Become a Customer
            </a>
            <a
              href="#"
              className="btn btn-outline btn-lg"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "#fff" }}
              id="cta-login-btn"
            >
              Login or Register
            </a>
          </div>
        </div>
      </section>

      {/* ===== EMERGENCY BANNER ===== */}
      <section className="emergency-banner" id="emergency">
        <div className="emergency-inner fade-in-up">
          <div className="emergency-label">First Responders</div>
          <h2 className="emergency-title">Emergency Contact</h2>
          <p className="emergency-text">
            If you are a first responder or emergency personnel and need to reach
            us, please call the number below for important contact information.
          </p>
          <a href="tel:1-800-805-0659" className="emergency-phone" id="emergency-phone">
            1-800-805-0659
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/logo-amerigas-desktop.svg"
              alt="AmeriGas Propane"
              width={180}
              height={26}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p>
              America&apos;s propane company. Providing reliable energy solutions
              to homes and businesses across the nation since 1959.
            </p>
          </div>

          <div>
            <h3 className="footer-col-title">About AmeriGas</h3>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Propane Safety</a></li>
              <li><a href="#">Leadership</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">In the Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Find a Location</h3>
            <ul className="footer-links">
              <li><a href="#">Exchange &amp; Refill Locations</a></li>
              <li><a href="#">All Office Locations</a></li>
              <li><a href="#">Services In My Area</a></li>
              <li><a href="#">All Service Areas</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col-title">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Media Relations</a></li>
              <li><a href="#">Accessibility Statement</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 AmeriGas Propane, Inc. All Rights Reserved.</p>
          <ul className="footer-bottom-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
            <li><a href="#">Website Terms of Use</a></li>
            <li><a href="#">California Privacy</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

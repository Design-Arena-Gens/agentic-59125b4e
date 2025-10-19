import { CSSProperties } from "react";
import styles from "./page.module.css";

export default function Home() {
  const features = [
    {
      badge: "AI Insights",
      icon: "AI",
      title: "Unified Account Intelligence",
      description:
        "Aggregate every balance, cash flow, and repayment in a single command center that learns from your habits.",
      meta: "Preview dashboards",
    },
    {
      badge: "Capital",
      icon: "FX",
      title: "Instant Growth Lines",
      description:
        "Unlock collateral-free working capital with dynamic limits that adjust to your revenue and behavior in real time.",
      meta: "Check eligibility",
    },
    {
      badge: "Wealth",
      icon: "IV",
      title: "Guided Investing",
      description:
        "Deploy idle cash into curated portfolios, automated sweep accounts, and treasury ladders managed by Dhani experts.",
      meta: "Explore strategies",
    },
  ];

  const insightRows = [
    { icon: "A", label: "Accounts Automated", value: "64%", copy: "of weekly reconciliations completed by Dhani Co-Pilot." },
    { icon: "T", label: "Faster Lending Decisions", value: "5 min", copy: "average approval time for pre-qualified borrowers." },
    { icon: "S", label: "Risk Coverage", value: "99.2%", copy: "portfolio health score maintained across all borrowers." },
  ];

  const insightBullets = [
    {
      title: "Adaptive underwriting",
      copy: "Blend bureau data with alternative signals for richer lending profiles.",
    },
    {
      title: "Liquidity orchestration",
      copy: "Predictive sweeps keep every rupee earning with zero effort.",
    },
    {
      title: "Customer-centred security",
      copy: "Multi-factor guardrails and biometric recovery built in.",
    },
    {
      title: "Regulatory ready",
      copy: "Realtime audit trails that meet RBI, SEBI, and global compliance.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Dhani Finance helped us collapse four banking relationships into one intelligent operating system. Our treasury visibility is instant and teams love the design.",
      author: "Amit Jain",
      role: "CFO, Meridian Retail Group",
    },
    {
      quote:
        "The lending APIs accelerated our BNPL launch by months. Credit risk stays sharp thanks to Dhani's adaptive scorecards and portfolio alerts.",
      author: "Riya Shetty",
      role: "Head of Growth, NovaPay",
    },
    {
      quote:
        "We achieved a 38% lift in recurring deposits because Dhani curated the right journeys. Every customer feels like they have a private banker.",
      author: "Sameer Kulkarni",
      role: "Chief Digital Officer, Horizon Bank",
    },
  ];

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>D</span>
          <span className={styles.brandName}>
            Dhani Finance
            <span className={styles.brandTag}>Capital. Wealth. Digital.</span>
          </span>
        </div>

        <nav className={styles.navLinks}>
          <a className={styles.navLink} href="#solutions">
            Solutions
          </a>
          <a className={styles.navLink} href="#platform">
            Platform
          </a>
          <a className={styles.navLink} href="#insights">
            Insights
          </a>
          <a className={styles.navLink} href="#testimonials">
            Stories
          </a>
        </nav>

        <div className={styles.navActions}>
          <a className={styles.navGhost} href="#contact">
            Login
          </a>
          <a className={styles.navPrimary} href="#contact">
            Book a strategy demo
          </a>
        </div>
      </header>

      <section className={styles.hero} id="hero">
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} aria-hidden />
            Introducing Dhani Copilot
          </span>
          <h1 className={styles.heroTitle}>
            The digital core for
            <span className={styles.heroHighlight}> modern finance</span>
          </h1>
          <p className={styles.heroDescription}>
            Power lending, wealth, and payments with the Dhani Finance cloud.
            Automate compliance, accelerate credit, and craft customer journeys
            that feel bespoke at scale.
          </p>
          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#solutions">
              Launch your transformation
            </a>
            <a className={styles.secondaryButton} href="#insights">
              View platform blueprint
            </a>
          </div>
          <div className={styles.heroMeta}>
            <span>
              <strong>200+</strong> enterprise deployments
            </span>
            <span>
              <strong>Rs 12,000 Cr</strong> assets orchestrated
            </span>
            <span>
              <strong>ISO 27001</strong> + RBI compliant
            </span>
          </div>
          <div className={styles.trust}>
            <span className={styles.trustLabel}>Trusted by leaders across Asia</span>
            <div className={styles.trustLogos}>
              <span>Axis Partners</span>
              <span>NovaPay</span>
              <span>Cumulus Bank</span>
              <span>IndoLease</span>
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelTitle}>Portfolio Pulse</span>
              <span className={styles.panelStatus}>Live Sync</span>
            </div>
            <div className={styles.panelMetrics}>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Net Interest Yield</span>
                <span className={styles.metricValue}>7.8%</span>
                <span className={`${styles.metricTrend} ${styles.trendUp}`}>
                  Up 18 bps vs last quarter
                </span>
              </div>
              <div className={styles.metricCard}>
                <span className={styles.metricLabel}>Disbursed Today</span>
                <span className={styles.metricValue}>Rs 42.7M</span>
                <span className={`${styles.metricTrend} ${styles.trendFlat}`}>
                  Stable demand
                </span>
              </div>
            </div>
            <div className={styles.panelTimeline}>
              <div className={styles.timelineRow}>
                <span>SME Credit</span>
                <span>92%</span>
              </div>
              <div className={styles.timelineBar}>
                <span
                  className={styles.timelineFill}
                  style={{ "--progress": "92%" } as CSSProperties}
                />
              </div>
              <div className={styles.timelineRow}>
                <span>Retail Lending</span>
                <span>78%</span>
              </div>
              <div className={styles.timelineBar}>
                <span
                  className={styles.timelineFill}
                  style={{ "--progress": "78%" } as CSSProperties}
                />
              </div>
              <div className={styles.timelineRow}>
                <span>Wealth AUM</span>
                <span>88%</span>
              </div>
              <div className={styles.timelineBar}>
                <span
                  className={styles.timelineFill}
                  style={{ "--progress": "88%" } as CSSProperties}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="solutions">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            Reimagine every financial workflow with Dhani modular capabilities.
          </h2>
          <p className={styles.sectionDescription}>
            Deploy the components you need today and expand into a full-stack
            digital bank tomorrow. Native AI bridges teams, reduces risk, and
            elevates customer trust.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <span className={styles.featureBadge}>{feature.badge}</span>
              <span className={styles.featureIcon} role="img" aria-hidden>
                {feature.icon}
              </span>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <span className={styles.featureMeta}>{feature.meta}</span>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section} id="insights">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Platform Intelligence</span>
          <h2 className={styles.sectionTitle}>
            A living digital core that orchestrates data, risk, and customer delight.
          </h2>
          <p className={styles.sectionDescription}>
            Dhani Finance layers composable APIs, secure infrastructure, and a
            design-first cockpit so your teams move faster together.
          </p>
        </div>

        <div className={styles.insightSection}>
          <div className={styles.insightCard}>
            <span className={styles.insightSubtitle}>Performance signal</span>
            <h3 className={styles.insightTitle}>Copilot metrics snapshot</h3>
            <div className={styles.insightList}>
              {insightRows.map((row) => (
                <div className={styles.insightRow} key={row.label}>
                  <span className={styles.insightLabel}>
                    <span className={styles.insightChip} aria-hidden>
                      {row.icon}
                    </span>
                    {row.label}
                  </span>
                  <span className={styles.insightValue}>{row.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.insightDescription}>
              Daily models refresh from your ledgers, payment rails, and partner
              ecosystems - keeping everyone aligned in one glass dashboard.
            </p>
          </div>

          <div className={styles.insightHighlight}>
            <span className={styles.insightSubtitle}>Why Dhani?</span>
            <h3 className={styles.insightTitle}>
              Engineered for Indian compliance, designed for global scale.
            </h3>
            <div className={styles.insightBullets}>
              {insightBullets.map((insight) => (
                <p className={styles.insightBullet} key={insight.title}>
                  <strong>{insight.title}</strong> - {insight.copy}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section} id="testimonials">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Impact</span>
          <h2 className={styles.sectionTitle}>
            Financial innovators scaling with Dhani Finance.
          </h2>
        </div>
        <div className={styles.testimonials}>
          {testimonials.map((testimonial) => (
            <blockquote className={styles.testimonialCard} key={testimonial.author}>
              <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              <span className={styles.testimonialAuthor}>
                {testimonial.author}
                <span className={styles.testimonialRole}>{testimonial.role}</span>
              </span>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection} id="contact">
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>
            Let&apos;s launch your next financial breakthrough together.
          </h2>
          <p className={styles.ctaDescription}>
            Partner with Dhani strategists for a bespoke roadmap that merges your
            vision with our digital finance platform. Design pilots in weeks, not
            quarters.
          </p>
          <div className={styles.ctaActions}>
            <a className={styles.primaryButton} href="mailto:hello@dhanifinance.com">
              Schedule discovery workshop
            </a>
            <a className={styles.ctaSecondary} href="#hero">
              Download Dhani platform overview
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <div className={styles.brand}>
            <span className={styles.brandMark}>D</span>
            <span className={styles.brandName}>Dhani Finance</span>
          </div>
          <p className={styles.footerCopy}>
            Dhani Finance powers lending, wealth, and payments for ambitious
            institutions worldwide. Built in India, trusted globally.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <span className={styles.footerHeading}>Products</span>
          <a className={styles.footerLink} href="#solutions">
            Lending Cloud
          </a>
          <a className={styles.footerLink} href="#solutions">
            Wealth OS
          </a>
          <a className={styles.footerLink} href="#solutions">
            Digital Onboarding
          </a>
        </div>

        <div className={styles.footerColumn}>
          <span className={styles.footerHeading}>Company</span>
          <a className={styles.footerLink} href="#testimonials">
            Customers
          </a>
          <a className={styles.footerLink} href="#insights">
            Platform
          </a>
          <a className={styles.footerLink} href="#contact">
            Partnerships
          </a>
        </div>

        <div className={styles.footerColumn}>
          <span className={styles.footerHeading}>Resources</span>
          <a className={styles.footerLink} href="#insights">
            Blueprint
          </a>
          <a className={styles.footerLink} href="#contact">
            Support
          </a>
          <a className={styles.footerLink} href="mailto:security@dhanifinance.com">
            Security
          </a>
        </div>

        <div className={styles.footerLegal}>
          <span>Copyright {new Date().getFullYear()} Dhani Finance. All rights reserved.</span>
          <span>Privacy | Terms | Disclosures</span>
        </div>
      </footer>
    </div>
  );
}

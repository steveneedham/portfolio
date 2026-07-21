/* @ds-bundle: {"format":4,"namespace":"StevenNeedhamOpsSystemsDesignSystem_aa91fb","components":[{"name":"Footer","sourcePath":"components/core/Footer.jsx"},{"name":"LinkButton","sourcePath":"components/core/LinkButton.jsx"},{"name":"NavBar","sourcePath":"components/core/NavBar.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"StopCard","sourcePath":"components/timeline/StopCard.jsx"},{"name":"TrackLegend","sourcePath":"components/timeline/TrackLegend.jsx"}],"sourceHashes":{"components/core/Footer.jsx":"c76fa6fef10b","components/core/LinkButton.jsx":"19b2b27e92a1","components/core/NavBar.jsx":"e7e2c21a85aa","components/core/SectionHeading.jsx":"a086f423cfc1","components/core/Tag.jsx":"dcaaa6b3f717","components/timeline/StopCard.jsx":"3b44053ae461","components/timeline/TrackLegend.jsx":"c589123a6ff4","ui_kits/portfolio/Home.jsx":"8fff3692375b","ui_kits/portfolio/ProjectDetail.jsx":"d08975a51f84"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StevenNeedhamOpsSystemsDesignSystem_aa91fb = window.StevenNeedhamOpsSystemsDesignSystem_aa91fb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Footer.jsx
try { (() => {
function Footer({
  title,
  links = [],
  note
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-default)',
      padding: '3.5rem clamp(1.5rem, 8vw, 6rem) 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      gap: '2rem'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-h2-footer)',
      maxWidth: '16ch',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-md)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    target: "_blank",
    rel: "noopener",
    style: {
      textDecoration: 'none',
      color: 'var(--text-muted)',
      borderBottom: '1px solid transparent'
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = 'var(--accent-ops)';
      e.currentTarget.style.borderColor = 'var(--accent-ops)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = 'var(--text-muted)';
      e.currentTarget.style.borderColor = 'transparent';
    }
  }, l.label))), note && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      marginTop: '2.5rem',
      paddingTop: '1.5rem',
      borderTop: '1px solid var(--border-default)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-foot)',
      color: 'var(--text-muted-dim)'
    }
  }, note));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Footer.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkButton.jsx
try { (() => {
const variants = {
  ops: {
    color: 'var(--accent-ops)',
    border: 'var(--accent-ops-dim)'
  },
  sys: {
    color: 'var(--accent-sys)',
    border: 'var(--accent-sys-dim)'
  },
  paper: {
    color: 'var(--accent-paper)',
    border: 'var(--accent-paper)'
  }
};
function LinkButton({
  href,
  variant = 'sys',
  children,
  target
}) {
  const v = variants[variant] || variants.sys;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: target,
    rel: target === '_blank' ? 'noopener' : undefined,
    style: {
      display: 'inline-block',
      marginTop: '0.9rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-sm)',
      textDecoration: 'none',
      borderBottom: '1px solid ' + v.border,
      color: v.color
    }
  }, children);
}
Object.assign(__ds_scope, { LinkButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkButton.jsx", error: String((e && e.message) || e) }); }

// components/core/NavBar.jsx
try { (() => {
function NavBar({
  name,
  links = []
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1.4rem clamp(1.5rem, 5vw, 4rem)',
      backdropFilter: 'blur(10px)',
      background: 'rgba(20,23,28,0.72)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.svg",
    alt: "",
    style: {
      height: 14,
      width: 42
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-nav)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '1.8rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-xs)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      color: 'var(--text-muted)',
      textDecoration: 'none',
      transition: 'color .2s'
    },
    onMouseEnter: e => e.currentTarget.style.color = 'var(--text-primary)',
    onMouseLeave: e => e.currentTarget.style.color = 'var(--text-muted)'
  }, l.label))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  size = 'h2'
}) {
  return /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '1.2rem'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.01em',
      color: 'var(--text-primary)',
      fontSize: size === 'h2' ? 'var(--text-h2)' : 'var(--text-h2-footer)',
      lineHeight: 'var(--leading-h2)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-tag)',
      color: 'var(--text-muted-dim)',
      border: '1px solid var(--border-default)',
      padding: '0.22rem 0.55rem',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/timeline/StopCard.jsx
try { (() => {
function StopCard({
  track = 'ops',
  title,
  body,
  tags = [],
  link,
  isFirst,
  isLast
}) {
  const accent = track === 'ops' ? 'var(--accent-ops)' : 'var(--accent-sys)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginBottom: isLast ? 0 : '2.6rem',
      paddingBottom: isLast ? 0 : '2.6rem',
      borderBottom: isLast ? 'none' : '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-2.4rem',
      top: '0.35rem',
      width: 11,
      height: 11,
      borderRadius: '50%',
      background: 'var(--surface-page)',
      border: '2px solid ' + accent
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      marginBottom: '0.55rem',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-sm)',
      maxWidth: '44ch'
    }
  }, body), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.5rem',
      flexWrap: 'wrap',
      marginTop: '0.9rem'
    }
  }, tags.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t))), link && /*#__PURE__*/React.createElement(__ds_scope.LinkButton, {
    href: link.href,
    variant: track === 'ops' ? 'ops' : 'sys',
    target: "_blank"
  }, link.label));
}
Object.assign(__ds_scope, { StopCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/timeline/StopCard.jsx", error: String((e && e.message) || e) }); }

// components/timeline/TrackLegend.jsx
try { (() => {
function TrackLegend({
  items = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '2.5rem',
      padding: '0 clamp(1.5rem, 8vw, 6rem)',
      marginBottom: '0.5rem'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.6rem',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-xs)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: it.track === 'ops' ? 'var(--accent-ops)' : 'var(--accent-sys)'
    }
  }), it.label)));
}
Object.assign(__ds_scope, { TrackLegend });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/timeline/TrackLegend.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  NavBar,
  TrackLegend,
  StopCard,
  SectionHeading,
  Footer
} = window.StevenNeedhamOpsSystemsDesignSystem_aa91fb;
const opsStops = [{
  title: 'Large-event readiness playbooks',
  body: "Built the operational plan for a major citywide festival's multi-day fleet coverage, setting swap targets, staffing windows, and a park-specific deployment strategy from the ground up.",
  tags: ['Event ops', 'Capacity planning']
}, {
  title: 'Community mobility activations',
  body: 'Planned and supported public-facing mobility experiences over seven years, connecting thousands of people with shared transportation through community events, sporting events, civic partnerships, and rider education.',
  tags: ['Community engagement', 'Event operations', 'Public partnerships']
}, {
  title: 'Operator performance & coaching system',
  body: 'Designed a grading framework for a mixed contracted/direct workforce, identifying top performers for shift-lead development and flagging coaching conversations before they became retention problems.',
  tags: ['Workforce development', 'People management']
}, {
  title: 'Competitive market analysis',
  body: "Ran head-to-head service-quality comparisons against a competing operator to sharpen where the team's coverage strategy needed to adjust.",
  tags: ['Market analysis']
}];
const sysStops = [{
  title: 'Live multi-fleet operations dashboard',
  body: 'Built a browser-based dashboard pulling real-time public feeds from two competing mobility fleets alongside internal operational data — with anomaly detection, AI-generated briefings, and a live chat panel.',
  tags: ['React', 'Real-time data', 'Dashboarding']
}, {
  title: 'Vehicle performance analytics',
  body: 'Analyzed roughly six months and 20,000+ rides of fleet data to identify chronic underperforming vehicles and the neighborhoods driving the most demand.',
  tags: ['Data analysis', 'Fleet ops']
}, {
  title: 'Columbus PantryMap',
  body: 'An interactive map of roughly 90 mutual-aid food locations across Central Ohio — little free pantries, blessing boxes, and community fridges.',
  tags: ['Civic tech', 'Maps', 'Leaflet'],
  link: {
    href: '#pantry',
    label: 'View project →'
  },
  internal: true
}, {
  title: 'Community mobility hubs',
  body: 'A civic-tech project mapping out how transit, bike share, and micromobility can converge into real neighborhood hubs.',
  tags: ['Civic tech', 'Transit advocacy']
}];
function Home({
  onOpenPantry
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    name: "Steven Needham",
    links: [{
      href: '#work',
      label: 'Work'
    }, {
      href: '#about',
      label: 'About'
    }, {
      href: '#contact',
      label: 'Contact'
    }]
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '6rem clamp(1.5rem, 8vw, 6rem) 3rem',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.3,
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "../../assets/videos/mobility-clip.mp4",
    type: "video/mp4"
  }), /*#__PURE__*/React.createElement("source", {
    src: "../../assets/urban_.mp4",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-page)',
      opacity: 0.35,
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: '1.6rem'
    }
  }, "Operations & Systems \u2014 Columbus, OH"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 'var(--text-hero)',
      lineHeight: 'var(--leading-hero)',
      maxWidth: '15ch',
      margin: 0
    }
  }, "I build environments \u2014 at work and in life \u2014 where people feel ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-ops)'
    }
  }, "safe, seen,"), " and able to move forward."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: '1.8rem',
      maxWidth: '52ch',
      color: 'var(--text-muted)',
      fontSize: 'var(--text-body-lg)'
    }
  }, "Field operations leadership meets hands-on systems work. Ten-plus years running people-heavy operations in micromobility, now building the dashboards, playbooks, and automation that make those operations legible."))), /*#__PURE__*/React.createElement("div", {
    id: "work"
  }, /*#__PURE__*/React.createElement(TrackLegend, {
    items: [{
      track: 'ops',
      label: 'Ops & Leadership Line'
    }, {
      track: 'sys',
      label: 'Systems & Tools Line'
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '0 clamp(1.5rem, 5vw, 4rem)',
      padding: '2rem clamp(1.5rem, 8vw, 6rem) 3rem'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--accent-ops)',
      marginBottom: '2rem'
    }
  }, "Ops & Leadership"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: '2.4rem'
    }
  }, opsStops.map((s, i) => /*#__PURE__*/React.createElement(StopCard, _extends({
    key: s.title,
    track: "ops"
  }, s, {
    isLast: i === opsStops.length - 1
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--accent-sys)',
      marginBottom: '2rem'
    }
  }, "Systems & Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: '2.4rem'
    }
  }, sysStops.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    onClick: s.internal ? onOpenPantry : undefined,
    style: s.internal ? {
      cursor: 'pointer'
    } : {}
  }, /*#__PURE__*/React.createElement(StopCard, _extends({
    track: "sys"
  }, s, {
    isLast: i === sysStops.length - 1
  }))))))), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '2rem clamp(1.5rem, 8vw, 6rem) 7rem',
      display: 'flex',
      gap: '3rem',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/steven-portrait.jpg",
    alt: "Steven Needham",
    style: {
      width: 180,
      height: 180,
      objectFit: 'cover',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '62ch'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About",
    title: "Two ways of working, one underlying question: how do you make a system feel safe to move through?"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '1.4rem 0 1.1rem'
    }
  }, "Steven spent the past several years leading field operations for a micromobility fleet in Columbus, Ohio \u2014 managing a mixed workforce of contracted and direct operators, running the analytics that told the story of a whole city's rideshare network."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "He's now stepping into a more independent chapter: ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 500
    }
  }, "fractional operations consulting, dashboard and analytics builds, SOP and documentation work, Python automation, and civic tech.")))), /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, /*#__PURE__*/React.createElement(Footer, {
    title: "Let's build something that moves people forward.",
    links: [{
      href: 'https://www.linkedin.com/in/steveneedham',
      label: 'LinkedIn — /in/steveneedham'
    }, {
      href: 'https://www.instagram.com/steveneedham',
      label: 'Instagram — @steveneedham'
    }, {
      href: 'https://github.com/steveneedham',
      label: 'GitHub — steveneedham'
    }],
    note: "Columbus, Ohio \xB7 Portfolio last updated July 2026"
  })));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ProjectDetail.jsx
try { (() => {
const {
  LinkButton
} = window.StevenNeedhamOpsSystemsDesignSystem_aa91fb;
function ProjectDetail({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-paper)',
      color: 'var(--text-paper)',
      fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,sans-serif',
      lineHeight: 1.65,
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: '28px 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      color: 'var(--accent-paper)',
      textDecoration: 'none',
      fontWeight: 600,
      cursor: 'pointer'
    }
  }, "\u2190 All projects")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      letterSpacing: '-0.02em',
      marginBottom: 10
    }
  }, "Columbus PantryMap"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-paper-muted)',
      fontSize: 16,
      maxWidth: 640,
      marginBottom: 18
    }
  }, "An interactive map of ~90 mutual-aid food locations across Central Ohio \u2014 little free pantries, blessing boxes, and community fridges. Take what you need, leave what you can."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      fontSize: '14.5px',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(LinkButton, {
    href: "https://steveneedham.github.io/columbus-pantry-map/",
    variant: "paper",
    target: "_blank"
  }, "Open full-screen \u2197"), /*#__PURE__*/React.createElement(LinkButton, {
    href: "https://github.com/steveneedham/columbus-pantry-map",
    variant: "paper",
    target: "_blank"
  }, "Source on GitHub \u2197")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--border-paper)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: '0 6px 18px rgba(0,0,0,.06)',
      marginBottom: 26,
      height: 320,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#fff',
      color: 'var(--text-paper-muted)',
      fontSize: 14
    }
  }, "[ map embed \u2014 Leaflet + OpenStreetMap ]"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 70,
      fontSize: 15,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 17,
      margin: '18px 0 6px'
    }
  }, "Why"), /*#__PURE__*/React.createElement("p", null, "Inspired by the University of Washington's PantryMap pilot, which mapped Seattle's micropantry network. Columbus has a similar grassroots network, scattered across three separate maps \u2014 this project brings them together."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 17,
      margin: '18px 0 6px'
    }
  }, "How"), /*#__PURE__*/React.createElement("p", null, "Location data compiled from the Mini Pantry Movement map, the Columbus Blessing Boxes Project, and the Bexley Freedge, deduplicated across networks. Built as a single-file HTML app with Leaflet and OpenStreetMap."))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.LinkButton = __ds_scope.LinkButton;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StopCard = __ds_scope.StopCard;

__ds_ns.TrackLegend = __ds_scope.TrackLegend;

})();

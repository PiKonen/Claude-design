// Views.jsx — screen-level compositions

const HomeView = ({ onOpenProject }) => (
  <div className="content">
    <div>
      <div className="page-title">Good morning, Mari.</div>
      <div className="page-subtitle">You left <em>Morning Moodboard</em> open yesterday. Pick up where you left off.</div>
    </div>

    {/* Stats row */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {[
        { label: "Files this week", value: "128", delta: "▲ 14%", tone: "var(--accent-700)" },
        { label: "Open projects",   value: "7",   delta: "2 shared with you", tone: "var(--fg-3)" },
        { label: "Storage used",    value: "4.2 GB", delta: "of 20 GB · Atelier", tone: "var(--fg-3)" },
      ].map((s, i) => (
        <div key={i} className="card-box" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>{s.label}</span>
          <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 44, lineHeight: 1, color: "var(--fg-1)" }}>{s.value}</span>
          <span style={{ fontSize: 12, color: s.tone }}>{s.delta}</span>
        </div>
      ))}
    </div>

    {/* Recent */}
    <div className="row" style={{ justifyContent: "space-between", marginTop: 8 }}>
      <h2 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Recently opened</h2>
      <button className="btn btn-ghost">View all</button>
    </div>
    <div className="project-grid">
      {[
        { name: "Morning Moodboard", updated: "3 hours ago", initial: "M", status: { label: "Draft", tone: "warning" } },
        { name: "Atlas Rebrand",     updated: "Yesterday",   initial: "A", status: { label: "Shared", tone: "sage" } },
        { name: "Kinfolk Cover",     updated: "2 days ago",  initial: "K" },
        { name: "Botanica Icons",    updated: "Last week",   initial: "B", status: { label: "Saved", tone: "success" } },
      ].map((p, i) => (
        <ProjectCard key={i} {...p} tint={PROJECT_TINTS[i % PROJECT_TINTS.length]} onOpen={() => onOpenProject(p)}
          collab={[{ initials: "MK", bg: "#EDC985", fg: "#4A2F0F" }, { initials: "AL", bg: "#A6BC97", fg: "#2B3B26" }]} />
      ))}
    </div>
  </div>
);

const ProjectsView = ({ onOpenProject }) => (
  <div className="content">
    <div className="row" style={{ justifyContent: "space-between" }}>
      <div>
        <div className="page-title">Projects</div>
        <div className="page-subtitle">14 projects · 3 shared</div>
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn btn-secondary">Filter</button>
        <button className="btn btn-secondary">Sort: Recent</button>
      </div>
    </div>
    <div className="tabs">
      <div className="tab active">All</div>
      <div className="tab">Owned by me</div>
      <div className="tab">Shared</div>
      <div className="tab">Archived</div>
    </div>
    <div className="project-grid">
      {[
        "Morning Moodboard","Atlas Rebrand","Kinfolk Cover","Botanica Icons",
        "Cedar Packaging","Soft Serve Site","Field Notes Vol. 3","Hearth Identity",
      ].map((n, i) => (
        <ProjectCard key={i} name={n} updated={["3h ago","Yesterday","2 days ago","Last week","2 weeks ago","3 weeks ago","1 month ago","2 months ago"][i]}
          initial={n[0]} tint={PROJECT_TINTS[i % PROJECT_TINTS.length]}
          onOpen={() => onOpenProject({ name: n })} />
      ))}
    </div>
  </div>
);

const SettingsView = () => {
  const [tab, setTab] = useState("workspace");
  const [notif, setNotif] = useState(true);
  const [weekly, setWeekly] = useState(true);
  const [marketing, setMarketing] = useState(false);
  return (
    <div className="content">
      <div>
        <div className="page-title">Settings</div>
        <div className="page-subtitle">Tune how Lumen feels for you and your team.</div>
      </div>
      <div className="tabs">
        {["workspace","profile","notifications","billing"].map(t => (
          <div key={t} className={`tab ${tab===t?"active":""}`} onClick={() => setTab(t)} style={{ textTransform: "capitalize" }}>{t}</div>
        ))}
      </div>

      {tab === "workspace" && (
        <div className="card-box" style={{ padding: "4px 28px" }}>
          <div className="form-row">
            <div>
              <div className="form-row-title">Workspace name</div>
              <div className="form-row-desc">Visible to members and on shared links.</div>
            </div>
            <div className="form-field" style={{ maxWidth: 360 }}>
              <input className="input" defaultValue="Morning Studio" />
              <span className="form-hint">lumen.studio/morning-studio</span>
            </div>
          </div>
          <div className="form-row">
            <div>
              <div className="form-row-title">Brand color</div>
              <div className="form-row-desc">Used across shared links, embeds, and exports.</div>
            </div>
            <div className="row" style={{ gap: 10 }}>
              {["#D89535","#638356","#8FB2C2","#D99375","#1B1814"].map((c,i) => (
                <div key={i} style={{ width: 36, height: 36, borderRadius: 12, background: c, boxShadow: i===0 ? "0 0 0 3px var(--surface-card), 0 0 0 5px var(--brand-500)" : "none", cursor: "pointer" }} />
              ))}
            </div>
          </div>
          <div className="form-row">
            <div>
              <div className="form-row-title">Default export</div>
              <div className="form-row-desc">New files open with this format.</div>
            </div>
            <div className="form-field" style={{ maxWidth: 360 }}>
              <div className="input" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "var(--fg-1)" }}>PNG · 2x <span style={{ color: "var(--fg-3)" }}>▾</span></div>
            </div>
          </div>
        </div>
      )}

      {tab === "notifications" && (
        <div className="card-box" style={{ padding: "4px 28px" }}>
          {[
            { k: "n1", title: "Product notifications", desc: "Comments, mentions, and shared file activity.", state: notif, set: setNotif },
            { k: "n2", title: "Weekly digest",          desc: "A Monday-morning summary of what your team shipped.", state: weekly, set: setWeekly },
            { k: "n3", title: "Marketing emails",       desc: "Occasional updates about new features and studio tips.", state: marketing, set: setMarketing },
          ].map(r => (
            <div key={r.k} className="form-row">
              <div>
                <div className="form-row-title">{r.title}</div>
                <div className="form-row-desc">{r.desc}</div>
              </div>
              <div className="row"><div className={`toggle ${r.state?"on":""}`} onClick={() => r.set(!r.state)} /></div>
            </div>
          ))}
        </div>
      )}

      {tab === "profile" && (
        <div className="card-box" style={{ padding: "4px 28px" }}>
          <div className="form-row">
            <div>
              <div className="form-row-title">Your name</div>
              <div className="form-row-desc">Shown on comments and shared files.</div>
            </div>
            <div className="form-field" style={{ maxWidth: 360 }}>
              <input className="input" defaultValue="Mari Korhonen" />
            </div>
          </div>
          <div className="form-row">
            <div>
              <div className="form-row-title">Avatar</div>
              <div className="form-row-desc">Square image works best.</div>
            </div>
            <div className="row" style={{ gap: 14 }}>
              <div className="avatar" style={{ width: 56, height: 56, fontSize: 18, background: "var(--brand-200)", color: "var(--brand-800)" }}>MK</div>
              <button className="btn btn-secondary">Upload</button>
              <button className="btn btn-ghost">Remove</button>
            </div>
          </div>
        </div>
      )}

      {tab === "billing" && (
        <div className="card-box">
          <div className="row" style={{ justifyContent: "space-between" }}>
            <div className="col" style={{ gap: 4 }}>
              <div className="row" style={{ gap: 8 }}>
                <span style={{ fontSize: 16, fontWeight: 600 }}>Atelier plan</span>
                <span className="chip chip-brand">Active</span>
              </div>
              <div style={{ color: "var(--fg-3)", fontSize: 13 }}>$18 / member / month · billed annually</div>
            </div>
            <button className="btn btn-secondary">Manage</button>
          </div>
        </div>
      )}
    </div>
  );
};

const EditorView = ({ project, onBack }) => (
  <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 240px", height: "calc(100vh - 64px)" }}>
    {/* Layers */}
    <div style={{ borderRight: "1px solid var(--border-subtle)", background: "var(--surface-card)", padding: 16, overflow: "auto" }}>
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 12 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>Layers</span>
        <button className="btn-icon btn"><Icon name="plus" size={14}/></button>
      </div>
      {["Backdrop","Sun","Hills","Field notes","Signature"].map((l, i) => (
        <div key={l} className="sidebar-item" style={{ background: i===1?"var(--brand-100)":"transparent", color: i===1?"var(--brand-800)":"var(--fg-2)" }}>
          <Icon name={i<2?"image":i===2?"palette":"pencil"} />
          <span>{l}</span>
        </div>
      ))}
    </div>

    {/* Canvas */}
    <div style={{ background: "var(--surface-sunken)", display: "flex", alignItems: "center", justifyContent: "center", padding: 32, position: "relative" }}>
      <button className="btn btn-ghost" style={{ position: "absolute", top: 16, left: 16 }} onClick={onBack}>← {project?.name || "Project"}</button>
      <div style={{
        width: 560, aspectRatio: "4/3", borderRadius: 18,
        background: "radial-gradient(circle at 30% 35%, #FAF0DC 0%, #EDC985 38%, #D89535 72%, #6A4313 100%)",
        boxShadow: "var(--shadow-lg)", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 75% 85%, rgba(163,188,151,0.4) 0%, transparent 55%)" }} />
        <div style={{ position: "absolute", left: 28, bottom: 24, color: "#FBF8F3", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 36, letterSpacing: "-0.01em", textShadow: "0 2px 10px rgba(74,47,15,0.3)" }}>morning, slowly</div>
      </div>
      {/* Floating toolbar */}
      <div style={{ position: "absolute", bottom: 24, display: "flex", gap: 4, padding: 6, background: "var(--surface-card)", borderRadius: 14, boxShadow: "var(--shadow-lg)", border: "1px solid var(--border-subtle)" }}>
        {["pencil","image","palette","sparkle","plus"].map(n => (
          <button key={n} className="btn-icon btn"><Icon name={n} /></button>
        ))}
      </div>
    </div>

    {/* Inspector */}
    <div style={{ borderLeft: "1px solid var(--border-subtle)", background: "var(--surface-card)", padding: 20, overflow: "auto", display: "flex", flexDirection: "column", gap: 18 }}>
      <div>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>Fill</span>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6, marginTop: 10 }}>
          {["#FDF9F1","#FAF0DC","#EDC985","#D89535","#905B18","#4A2F0F","#E3EADD","#A6BC97","#638356","#3B5134","#8FB2C2","#2F5668"].map(c => (
            <div key={c} style={{ aspectRatio: 1, background: c, borderRadius: 8, border: "1px solid rgba(0,0,0,0.05)", cursor: "pointer" }} />
          ))}
        </div>
      </div>
      <div>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>Radius</span>
        <div style={{ height: 6, background: "var(--neutral-200)", borderRadius: 3, marginTop: 14, position: "relative" }}>
          <div style={{ position: "absolute", top: -5, left: "32%", width: 16, height: 16, borderRadius: "50%", background: "var(--brand-500)", boxShadow: "var(--shadow-sm)" }} />
        </div>
        <div className="row" style={{ justifyContent: "space-between", marginTop: 6 }}>
          <span style={{ fontSize: 11, color: "var(--fg-3)" }} className="mono">0</span>
          <span style={{ fontSize: 11, color: "var(--fg-1)" }} className="mono">18 px</span>
        </div>
      </div>
      <div>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--fg-3)" }}>Shadow</span>
        <div className="row" style={{ justifyContent: "space-between", marginTop: 10 }}>
          <span style={{ fontSize: 13 }}>Elevation lg</span>
          <div className="toggle on" />
        </div>
      </div>
      <div className="divider" />
      <button className="btn btn-primary" style={{ justifyContent: "center" }}><Icon name="sparkle" size={14}/> Share</button>
      <button className="btn btn-secondary" style={{ justifyContent: "center" }}>Export PNG · 2x</button>
    </div>
  </div>
);

Object.assign(window, { HomeView, ProjectsView, SettingsView, EditorView });

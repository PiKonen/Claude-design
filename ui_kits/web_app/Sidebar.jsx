// Lumen web app UI kit — Sidebar.jsx
const { useState } = React;

const Icon = ({ name, size = 16 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    home:     <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/></>,
    folder:   <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"/>,
    star:     <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>,
    trash:    <><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></>,
    users:    <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    search:   <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
    plus:     <path d="M12 5v14M5 12h14"/>,
    image:    <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5-11 11"/></>,
    palette:  <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/><circle cx="17" cy="10" r="1.5" fill="currentColor"/><circle cx="17" cy="15" r="1.5" fill="currentColor"/><circle cx="12" cy="17" r="1.5" fill="currentColor"/></>,
    moon:     <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>,
    bell:     <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    chevron:  <path d="m6 9 6 6 6-6"/>,
    check:    <path d="M20 6 9 17l-5-5"/>,
    pencil:   <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>,
    sparkle:  <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>,
  };
  return <svg {...common}>{paths[name] || null}</svg>;
};

const SidebarItem = ({ icon, label, active, count, onClick }) => (
  <div className={`sidebar-item ${active ? "active" : ""}`} onClick={onClick}>
    <Icon name={icon} />
    <span>{label}</span>
    {count !== undefined && <span className="sidebar-count">{count}</span>}
  </div>
);

const Sidebar = ({ activeView, onNav }) => (
  <aside className="sidebar">
    <div className="sidebar-brand">
      <img src="../../assets/logo-lumen.svg" alt="Lumen"/>
    </div>
    <div className="sidebar-section">
      <SidebarItem icon="home" label="Home"      active={activeView==='home'}      onClick={() => onNav('home')} />
      <SidebarItem icon="folder" label="Projects" active={activeView==='projects'} onClick={() => onNav('projects')} count={14} />
      <SidebarItem icon="star" label="Favorites" active={activeView==='favorites'} onClick={() => onNav('favorites')} />
      <SidebarItem icon="image" label="Library"  active={activeView==='library'}  onClick={() => onNav('library')} />
      <SidebarItem icon="trash" label="Trash"    active={activeView==='trash'}    onClick={() => onNav('trash')} />
    </div>
    <div className="sidebar-section">
      <div className="sidebar-label">Workspace</div>
      <SidebarItem icon="users"    label="Members"  active={activeView==='members'}  onClick={() => onNav('members')} />
      <SidebarItem icon="palette"  label="Brand kit" active={activeView==='brand'}   onClick={() => onNav('brand')} />
      <SidebarItem icon="settings" label="Settings" active={activeView==='settings'} onClick={() => onNav('settings')} />
    </div>
    <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ padding: "12px 10px", background: "var(--brand-50)", border: "1px solid var(--brand-200)", borderRadius: 12, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--brand-800)" }}>Upgrade to Atelier</div>
        <div style={{ fontSize: 11, color: "var(--brand-700)", lineHeight: 1.45 }}>Unlimited projects & team brand kits.</div>
        <button className="btn btn-primary" style={{ padding: "6px 10px", fontSize: 12, alignSelf: "flex-start" }}>See plans</button>
      </div>
      <div className="row" style={{ padding: "6px 8px", gap: 10 }}>
        <div className="avatar" style={{ background: "var(--brand-200)", color: "var(--brand-800)" }}>MK</div>
        <div className="col" style={{ gap: 0, flex: 1 }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>Mari Korhonen</span>
          <span style={{ fontSize: 11, color: "var(--fg-3)" }}>Morning Studio</span>
        </div>
      </div>
    </div>
  </aside>
);

Object.assign(window, { Sidebar, Icon, SidebarItem });

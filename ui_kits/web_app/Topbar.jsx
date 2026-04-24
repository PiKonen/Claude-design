// Topbar.jsx — Lumen web app top bar
const Topbar = ({ title, crumbs, right, onNew }) => (
  <header className="topbar">
    <div className="col" style={{ gap: 2 }}>
      {crumbs && <div className="topbar-crumbs">{crumbs}</div>}
      <div className="topbar-title">{title}</div>
    </div>
    <div className="topbar-spacer" />
    <div className="search">
      <Icon name="search" size={14} />
      <input placeholder="Search projects, files, people…" />
      <span className="kbd">⌘ K</span>
    </div>
    <button className="btn-icon btn"><Icon name="bell" /></button>
    <button className="btn-icon btn"><Icon name="moon" /></button>
    {onNew && (
      <button className="btn btn-primary" onClick={onNew}>
        <Icon name="plus" size={14} /> New project
      </button>
    )}
    {right}
  </header>
);

Object.assign(window, { Topbar });

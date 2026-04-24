// ProjectCard.jsx
const ProjectCard = ({ name, updated, tint, collab, status, onOpen, initial }) => (
  <div className="project-card" onClick={onOpen}>
    <div className="project-thumb" style={{ background: tint }}>
      <span style={{ opacity: 0.55 }}>{initial}</span>
    </div>
    <div className="project-meta">
      <div className="row" style={{ justifyContent: "space-between" }}>
        <span className="project-name">{name}</span>
        {status && <span className={`chip chip-${status.tone}`} style={{ padding: "2px 8px", fontSize: 11 }}>{status.label}</span>}
      </div>
      <div className="project-sub">
        <span>{updated}</span>
        {collab && (
          <>
            <span>·</span>
            <div className="row" style={{ gap: 0 }}>
              {collab.map((c, i) => (
                <div key={i} className="avatar sm" style={{ background: c.bg, color: c.fg, marginLeft: i ? -6 : 0, border: "2px solid #fff" }}>{c.initials}</div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  </div>
);

const PROJECT_TINTS = [
  "linear-gradient(135deg,#FAF0DC,#EDC985)",
  "linear-gradient(135deg,#E3EADD,#A6BC97)",
  "linear-gradient(135deg,#FBF8F3,#D9D0BE)",
  "linear-gradient(135deg,#F7E3DA,#D99375)",
  "linear-gradient(135deg,#E3EDF3,#8FB2C2)",
  "linear-gradient(160deg,#FAF0DC 0%,#F4DFB3 50%,#A6BC97 100%)",
];

Object.assign(window, { ProjectCard, PROJECT_TINTS });

import NewsShortCard from "../NewsShortCard/NewsShortCard";
import "./LeftSidebar.css";
export default function LeftSidebar() {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <span className="allCategory">All Caterogy</span>
      </div>
      <div className="text-center">
        <p
          style={{
            borderRadius: "5px",
            padding: "10px",
            border: "1px solid var(--Dark-06, #E7E7E7)",
            background: "var(--Dark-06, #E7E7E7)",
          }}
          className="activeTab"
        >
          National News
        </p>
        <p className="inactiveTab">Breaking News</p>
        <p className="inactiveTab">Regular News</p>
        <p className="inactiveTab">International News</p>
        <p className="inactiveTab">Sports</p>
        <p className="inactiveTab">Entertainment</p>
        <p className="inactiveTab">Culture</p>
        <p className="inactiveTab">Arts</p>
        <p className="inactiveTab">All News</p>
      </div>
      <div>
        <NewsShortCard />
        <NewsShortCard />
        <NewsShortCard />
      </div>
    </div>
  );
}

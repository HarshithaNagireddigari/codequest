import { Link } from "react-router-dom";
import levels from "../data/levels";

function Levels() {
  const currentLevel = Number(localStorage.getItem("currentLevel") || 1);
  const xp = Number(localStorage.getItem("xp") || 0);

  return (
    <div className="container">
      <h1 className="title">🗺️ Choose Your Adventure</h1>

      <p className="subtitle">
        Complete coding challenges and unlock new levels.
      </p>

      <div
        style={{
          textAlign: "center",
          fontSize: "28px",
          color: "#FACC15",
          marginBottom: "40px",
          fontWeight: "bold",
        }}
      >
        ⭐ Total XP: {xp}
      </div>

      <div className="level-grid">
        {levels.map((level) => (
          <div className="level-card" key={level.id}>
            <h2>{level.title}</h2>

            <p style={{ marginTop: "15px" }}>
              {level.mission}
            </p>

            <br />

            <p>⭐ Reward: {level.xp} XP</p>
            <p>🪙 Reward: {level.coins} Coins</p>

            <br />

            {level.id <= currentLevel ? (
              <Link to={`/game/${level.id}`}>
                <button className="btn">
                  ▶ Play
                </button>
              </Link>
            ) : (
              <button className="btn" disabled>
                🔒 Locked
              </button>
            )}
          </div>
        ))}
      </div>

      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Link to="/">
          <button className="btn">
            🏠 Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Levels;
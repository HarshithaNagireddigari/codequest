import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container hero">
      <h1>🎮 CodeQuest</h1>

      <p>
        Learn Programming Through Interactive Adventures.
        <br />
        Complete coding challenges, earn XP, unlock levels,
        and become a coding master!
      </p>

      <Link to="/levels">
        <button className="btn">
          🚀 Start Adventure
        </button>
      </Link>

      <div
        style={{
          marginTop: "80px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        <div className="card">
          <h2>🏕️ Explore Levels</h2>
          <br />
          <p>
            Start with simple coding tasks and unlock more difficult missions as
            you progress.
          </p>
        </div>

        <div className="card">
          <h2>⭐ Earn XP</h2>
          <br />
          <p>
            Complete every challenge to gain experience points and become a
            better programmer.
          </p>
        </div>

        <div className="card">
          <h2>🏆 Become a Hero</h2>
          <br />
          <p>
            Unlock achievements, collect rewards, and complete your coding
            adventure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import levels from "../data/levels";

function Game() {
  const { id } = useParams();

  const level = levels.find((l) => l.id === Number(id));

  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const [xp, setXp] = useState(
    Number(localStorage.getItem("xp")) || 0
  );

  const [coins, setCoins] = useState(
    Number(localStorage.getItem("coins")) || 0
  );

  const [currentLevel, setCurrentLevel] = useState(
    Number(localStorage.getItem("currentLevel")) || 1
  );

  useEffect(() => {
    localStorage.setItem("xp", xp);
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);

  useEffect(() => {
    localStorage.setItem("currentLevel", currentLevel);
  }, [currentLevel]);

  if (!level) {
    return (
      <div className="container">
        <h1>Level Not Found</h1>
      </div>
    );
  }

  // Ignore spaces and blank lines
  function normalize(text) {
    return text
      .replace(/\s+/g, "")
      .trim()
      .toLowerCase();
  }

  function checkAnswer() {
    if (normalize(code) === normalize(level.answer)) {
      const completed = JSON.parse(
        localStorage.getItem("completedLevels") || "[]"
      );

      if (!completed.includes(level.id)) {
        completed.push(level.id);

        localStorage.setItem(
          "completedLevels",
          JSON.stringify(completed)
        );

        setXp((prev) => prev + level.xp);
        setCoins((prev) => prev + level.coins);

        if (currentLevel < level.id + 1) {
          setCurrentLevel(level.id + 1);
        }
      }

      setMessage("🎉 Correct! Level Completed!");
    } else {
      setMessage("❌ Incorrect Answer. Try Again.");
    }
  }

  return (
    <div className="container">
      <h1 className="title">{level.title}</h1>

      <p className="subtitle">{level.mission}</p>

      <div className="card">
        <h2>⭐ XP: {xp}</h2>

        <h2 style={{ marginTop: 10 }}>
          🪙 Coins: {coins}
        </h2>
      </div>

      <br />

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your Python code here..."
      />

      <br />
      <br />

      <button className="btn" onClick={checkAnswer}>
        ▶ Run Code
      </button>

      <br />
      <br />

      <Link to="/levels">
        <button className="btn">
          ⬅ Back to Levels
        </button>
      </Link>

      <br />
      <br />

      {message && (
        <h2
          className={
            message.includes("Correct")
              ? "success"
              : "error"
          }
        >
          {message}
        </h2>
      )}
    </div>
  );
}

export default Game;
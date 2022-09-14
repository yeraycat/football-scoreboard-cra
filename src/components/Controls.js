import { useState } from "react";
import useScoreboard from "../hooks/useScoreboard";

const Controls = () => {
  const { ongoingMatch, startMatch, endMatch, updateScore } = useScoreboard();
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  function resetForm() {
    setHomeTeam();
    setAwayTeam();
    setHomeScore(0);
    setAwayScore(0);
  }
  return (
    <>
      {!ongoingMatch && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            startMatch(homeTeam, awayTeam, 0, 0);
            resetForm();
          }}
        >
          <input
            type="text"
            onChange={(e) => setHomeTeam(e.target.value)}
            required
          />
          <input
            type="text"
            onChange={(e) => setAwayTeam(e.target.value)}
            required
          />
          <button>START GAME</button>
        </form>
      )}
      {ongoingMatch && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateScore(homeScore, awayScore);
          }}
        >
          <input
            type="number"
            value={homeScore}
            onChange={(e) => setHomeScore(e.target.value)}
            required
          />
          <input
            type="number"
            value={awayScore}
            onChange={(e) => setAwayScore(e.target.value)}
            required
          />
          <button>UPDATE SCORE</button>
        </form>
      )}
      <br />
      {ongoingMatch && (
        <button
          onClick={() => {
            endMatch();
            resetForm();
          }}
        >
          END
        </button>
      )}
    </>
  );
};
export default Controls;

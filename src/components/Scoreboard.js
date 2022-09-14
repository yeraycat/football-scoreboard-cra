import useScoreboard from "../hooks/useScoreboard";
import OngoingMatch from "./OngoingMatch";
import Summary from "./Summary";

const ScoreBoard = () => {
  const scoreboardHook = useScoreboard();
  return (
    <div data-testid="scoreboard">
      <OngoingMatch match={scoreboardHook.ongoingMatch} />
      <Summary matchesHistory={scoreboardHook.history} />
      <div></div>
    </div>
  );
};

export default ScoreBoard;

import React, { useContext, useState } from "react";

const ScoreboardContext = React.createContext();

export const ScoreboardProvider = ({ value, children }) => {
  const [state, update] = useState({
    ...value,
  });

  return (
    <ScoreboardContext.Provider value={{ state, update }}>
      {children}
    </ScoreboardContext.Provider>
  );
};

const useScoreboard = () => {
  const { state, update } = useContext(ScoreboardContext);

  function startMatch(homeTeam, awayTeam) {
    const { ongoingMatch } = state;
    if (ongoingMatch) {
      throw new Error("There is already a started match");
    }
    if (!state.ongoingMatch && homeTeam && awayTeam) {
      update({
        ...state,
        ongoingMatch: {
          homeTeam,
          homeScore: 0,
          awayTeam,
          awayScore: 0,
          dateAdded: new Date(),
        },
      });
    }
  }

  function endMatch() {
    const { ongoingMatch } = state;
    if (!ongoingMatch) {
      throw new Error("No match");
    }
    if (ongoingMatch) {
      update({
        history: [...state.history, ongoingMatch],
      });
    }
  }

  function updateScore(homeScore = 0, awayScore = 0) {
    const { ongoingMatch } = state;

    if (
      ongoingMatch &&
      (ongoingMatch.homeScore > homeScore || ongoingMatch.awayScore > awayScore)
    ) {
      throw new Error(
        "Violating space-time causality (either that or this is just an error with the scores input)"
      );
    }
    if (ongoingMatch) {
      update({
        ...state,
        ongoingMatch: {
          ...ongoingMatch,
          homeScore,
          awayScore,
        },
      });
    }
  }

  return {
    ...state,
    startMatch,
    updateScore,
    endMatch,
  };
};

export default useScoreboard;

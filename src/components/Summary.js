const Summary = ({ matchesHistory }) => {
  function sortByAddedDate(matchA, matchB) {
    return matchB.dateAdded - matchA.dateAdded;
  }
  return (
    <div>
      {!matchesHistory && "No history"}
      {matchesHistory &&
        matchesHistory.sort(sortByAddedDate).map((match) => (
          <div
            key={`${match.homeTeam}${match.awayTeam}`}
            className="summary-row"
          >
            {match.homeTeam} {match.homeScore} - {match.awayScore}{" "}
            {match.awayTeam}
          </div>
        ))}
    </div>
  );
};

export default Summary;

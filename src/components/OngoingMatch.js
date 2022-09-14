const OngoingMatch = ({ match }) => {
  return (
    <>
      {match && (
        <div style={{ fontSize: `2rem` }}>
          {match.homeTeam} {match.homeScore}
          {" - "}
          {match.awayScore} {match.awayTeam}
        </div>
      )}
    </>
  );
};

export default OngoingMatch;

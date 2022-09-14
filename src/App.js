import "./App.css";
import Controls from "./components/Controls";
import ScoreBoard from "./components/Scoreboard";
import { ScoreboardProvider } from "./hooks/useScoreboard";
const startingData = {
  history: [
    {
      homeTeam: "Mexico",
      awayTeam: "Canada",
      homeScore: 0,
      awayScore: 5,
      dateAdded: new Date(),
    },
    {
      homeTeam: "Spain",
      awayTeam: "Brazil",
      homeScore: 10,
      awayScore: 2,
      dateAdded: new Date(2022, 8, 11),
    },
    {
      homeTeam: "Germany",
      awayTeam: "France",
      homeScore: 2,
      awayScore: 2,
      dateAdded: new Date(),
    },
    {
      homeTeam: "Uruguay",
      awayTeam: "Italy",
      homeScore: 6,
      awayScore: 6,
      dateAdded: new Date(),
    },
    {
      homeTeam: "Argentina",
      awayTeam: "Australia",
      homeScore: 3,
      awayScore: 1,
      dateAdded: new Date(),
    },
  ],
};
function App() {
  return (
    <div className="App">
      <h1>Live Football Matches</h1>
      <ScoreboardProvider value={startingData}>
        <div>
          <ScoreBoard />
        </div>
        <div style={{ marginTop: `5rem` }}>
          <Controls />
        </div>
      </ScoreboardProvider>
    </div>
  );
}

export default App;

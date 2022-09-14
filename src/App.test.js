import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render the scoreboard", () => {
  render(<App />);
  const scoreboardDivElement = screen.getByTestId("scoreboard");
  expect(scoreboardDivElement).toBeInTheDocument();
});

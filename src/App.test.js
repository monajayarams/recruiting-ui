import { render, screen } from "./testUtils";
import App from "./App";

it("doesn't blow up", () => {
  render(<App />);
});

//Author: Erik Rodriguez
import { render, screen } from "@testing-library/react";
import PlayListMiniatures from "../index";
import "@testing-library/jest-dom";

test("PlayList should render PlayListMiniature component with given children", () => {
  render(<PlayListMiniatures>children expected</PlayListMiniatures>);
  const element = screen.getByText("children expected");
  expect(element).toBeInTheDocument();
});

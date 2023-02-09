import { render, screen, fireEvent } from "@testing-library/react";
import SummaryFrom from "../SummaryForm";

test("renders and checks the terms and condition checkbox", () => {
  render(<SummaryFrom />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
});

test("initial conditions", () => {
  render(<SummaryFrom />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /Confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

test("Checkbox disables button on first click and enables on second click", () => {
  render(<SummaryFrom />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", {
    name: /Confirm order/i,
  });
  expect(confirmButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(confirmButton).toBeEnabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(confirmButton).toBeDisabled();
});

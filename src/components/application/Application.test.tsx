import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name:"Job application form"
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("a person with a laptop");
    expect(imgElement).toBeInTheDocument();

    const divElement = screen.getByTestId("custom-element");
    expect(divElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const submitBtn = screen.getByRole("button");
    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn).toBeDisabled();
  });
});

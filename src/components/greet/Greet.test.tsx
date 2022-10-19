import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Kuria" />);
    const textElement = screen.getByText("Hello Kuria");
    expect(textElement).toBeInTheDocument();
  });
});

// test('Greet renders correctly', () => {
//     render(<Greet/>)
//     const textElement = screen.getByText('Hello')
//     expect(textElement).toBeInTheDocument()
// })

// test('Greet renders with a name', () => {
//     render(<Greet  name = 'Kuria'/>)
//     const textElement = screen.getByText('Hello Kuria')
//     expect(textElement).toBeInTheDocument()

// })

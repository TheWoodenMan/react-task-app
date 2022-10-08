import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders hello from react", () => {
	render(<App />);
	const linkElement = screen.getByText(/hello from react/i);
	expect(linkElement).toBeInTheDocument();
});

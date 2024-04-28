import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Renders a button", async () => {
	it("Should render the button correctly", async () => {
		render(<Button>Vite + React</Button>);
		const buttonElement = await screen.queryByText("Vite + React");
		expect(buttonElement).not.toBeNull();
	});
});

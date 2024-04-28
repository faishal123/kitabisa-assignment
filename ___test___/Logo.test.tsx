import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "../components/Logo/Logo";

describe("Renders Logo component", async () => {
	it("Should render the logo correctly", async () => {
		render(<Logo />);
		const logoElement = await screen.queryByTestId("logo");
		expect(logoElement).not.toBeNull();
	});
});

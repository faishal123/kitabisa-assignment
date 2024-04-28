import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SortAscending from "../assets/icons/sort-asc";

describe("Renders Sort Icon", async () => {
	it("Should render the Sort Icon correctly", async () => {
		render(<SortAscending />);
		const sortElement = await screen.queryByTestId("sort-ascending-icon");
		expect(sortElement).not.toBeNull();
	});
});

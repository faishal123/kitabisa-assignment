import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { sortByDonationGoal } from "../constant";
import Header from "../components/Header/Header";

describe("Renders Header component", async () => {
	it("Should render the header correctly", async () => {
		render(
			<Header
				sortBy={sortByDonationGoal}
				onClickSort={() => {
					return null;
				}}
			/>,
		);
		const headerElement = await screen.queryByTestId("header");
		expect(headerElement).not.toBeNull();
	});
});

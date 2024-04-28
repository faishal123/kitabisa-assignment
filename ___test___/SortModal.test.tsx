import { describe, it, expect } from "vitest";
import { useState } from "react";
import { render, screen } from "@testing-library/react";
import { sortByDonationGoal, sortByDaysLeft } from "../constant";
import userEvent from "@testing-library/user-event";
import SortModal from "../components/SortModal/SortModal";

const DummyComponent = () => {
	const [renderSortModal, setRenderSortModal] = useState(true);
	const [sortBy, setSortBy] = useState(sortByDonationGoal);
	return (
		<>
			<SortModal
				onChoose={(choice) => {
					setSortBy(choice);
				}}
				onClose={() => {
					setRenderSortModal(false);
				}}
				show={renderSortModal}
			/>
			<div data-testid="currentSort">{sortBy}</div>
			<button
				data-testid="toggleSortModal"
				onClick={() => {
					setRenderSortModal((prev) => !prev);
				}}
			>
				Toggle Sort Modal
			</button>
		</>
	);
};

describe("Renders Sort Modal", async () => {
	it("Should render the sort modal correctly", async () => {
		const user = userEvent.setup();
		render(<DummyComponent />);
		const sortModalElement = await screen.queryByTestId("sortModal");
		const currentSortElement = await screen.queryByTestId("currentSort");
		const sortByDaysLeftChoice = await screen.queryByTestId(
			`sort-choice-${sortByDaysLeft}`,
		);
		const toggleSortModalElement = await screen.queryByTestId(
			"toggleSortModal",
		);

		expect(currentSortElement).toHaveTextContent(sortByDonationGoal);
		expect(sortModalElement).not.toBeNull();
		expect(sortByDaysLeftChoice).not.toBeNull();

		await user.click(sortByDaysLeftChoice as HTMLElement);

		expect(currentSortElement).toHaveTextContent(sortByDaysLeft);

		await user.click(toggleSortModalElement as HTMLElement);
		expect(await screen.queryByTestId("sortModal")).not.toBeNull();
		await user.keyboard("a");
		expect(await screen.queryByTestId("sortModal")).not.toBeNull();

		await user.keyboard("{Escape}");
		expect(await screen.queryByTestId("sortModal")).toBeNull();
	});
});

import { useState } from "react";
import { useData } from "../../renderer/useData";
import type { Data } from "./+data";
import CampaignsList from "../../components/CampaignsList/CampaignsList";
import Header from "../../components/Header/Header";
import SortModal from "../../components/SortModal/SortModal";
import { sortByDonationGoal } from "../../constant";

function Page() {
	const [renderSortModal, setRenderSortModal] = useState(false);
	const [sortBy, setSortBy] = useState(sortByDonationGoal);
	const { campaignData } = useData<Data>();

	const campaignsToShow = campaignData.data.sort((a, b) =>
		sortBy === sortByDonationGoal
			? a.donation_target - b.donation_target
			: a.days_remaining - b.days_remaining,
	);

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
			<Header
				sortBy={sortBy}
				onClickSort={() => {
					setRenderSortModal(true);
				}}
			/>
			<CampaignsList campaignData={campaignsToShow} />
		</>
	);
}

export { Page };

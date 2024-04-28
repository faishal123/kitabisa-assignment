import { CampaignResponse } from "./types";

export { data };
export type Data = Awaited<ReturnType<typeof data>>;

const data = async () => {
	const response = await fetch(
		"https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json",
	);
	const campaignData: CampaignResponse = await response.json();

	return { campaignData, title: "Kampanye Kitabisa" };
};

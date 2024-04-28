import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CampaignsList from "../components/CampaignsList/CampaignsList";

const mockData = [
	{
		id: 45695,
		order: 5,
		parent_project_id: 0,
		title: "BANTU KELUARGA KORBAN KEBAKARAN",
		expired: 2147483647,
		image:
			"https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/45695/31__1511333547_84686577928_f.jpg",
		days_remaining: 0,
		donation_received: 742792,
		campaigner: "Bukos Bogor",
		campaigner_type: "PERSONAL",
		campaigner_badge: "",
		campaigner_is_verified: false,
		category_name: "Bencana Alam",
		is_forever_running: true,
		is_open_goal: false,
		request_userdata: false,
		donation_target: 100000000,
		donation_percentage: 0.00742792,
		short_url: "banturumahkebakaran",
		is_featured: 0,
		custom_fb_pixel: "",
	},
	{
		id: 95887,
		order: 8,
		parent_project_id: 95686,
		title: "Rachel Untuk Tsunami Banten dan Lampung",
		expired: 2147483647,
		image:
			"https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/95887/31_95887_1545573085_140965_f.jpg",
		days_remaining: 0,
		donation_received: 522089246,
		campaigner: "Rachel Vennya",
		campaigner_type: "PERSONAL",
		campaigner_badge:
			"https://assets.kitabisa.com/images/icon__verified-user.svg",
		campaigner_is_verified: true,
		category_name: "Bencana Alam",
		is_forever_running: true,
		is_open_goal: false,
		request_userdata: false,
		donation_target: 500000000,
		donation_percentage: 1.0441785,
		short_url: "racheluntukbanten",
		is_featured: 0,
		custom_fb_pixel: "",
	},
	{
		id: 78942,
		order: 3,
		parent_project_id: 0,
		title: "Bantu Korban Gempa dan Tsunami Palu-Donggala",
		expired: 1609433999,
		image:
			"https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/campaign/78942/31_78942_1545049253_878259_f.jpg",
		days_remaining: 85,
		donation_received: 17024031016,
		campaigner: "Dany",
		campaigner_type: "PERSONAL",
		campaigner_badge:
			"https://assets.kitabisa.com/images/icon__verified-user.svg",
		campaigner_is_verified: true,
		category_name: "Bencana Alam",
		is_forever_running: false,
		is_open_goal: false,
		request_userdata: false,
		donation_target: 30000000000,
		donation_percentage: 0.567468,
		short_url: "peduligempadonggala",
		is_featured: 0,
		custom_fb_pixel: "",
	},
];

describe("Renders Campaigns List", async () => {
	it("Should render campaigns list correctly", async () => {
		render(<CampaignsList campaignData={mockData} />);
		const campaignElement = await screen.queryByTestId("single-campaign-45695");
		expect(campaignElement).not.toBeNull();
	});
});

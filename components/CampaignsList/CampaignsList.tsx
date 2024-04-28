import { SingleCampaignType } from "../../pages/index/types";
import styles from "./CampaignsList.module.css";
import SingleCampaign from "../SingleCampaign/SingleCampaign";

const CampaignsList = ({
	campaignData,
}: {
	campaignData: SingleCampaignType[];
}) => {
	console.log(campaignData);
	return (
		<div className={styles.container}>
			{campaignData.map((campaign) => {
				return <SingleCampaign key={campaign.id} campaign={campaign} />;
			})}
		</div>
	);
};

export default CampaignsList;

import { SingleCampaignType } from "../../pages/index/types";
import styles from "./SingleCampaign.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const SingleCampaign = ({ campaign }: { campaign: SingleCampaignType }) => {
	const isForeverCampaign = campaign.is_forever_running;
	return (
		<div
			data-testid={`single-campaign-${campaign.id}`}
			className={styles.container}
		>
			<div>
				<div className={styles.imageContainer}>
					<img src={campaign.image} />
				</div>
				<h4 className={styles.title}>{campaign.title}</h4>
			</div>
			<div>
				<ProgressBar percentage={campaign.donation_percentage} />
				<div className={styles.remainingContainer}>
					<div>
						<div>Terkumpul</div>
						<div className={styles.value}>
							Rp.{" "}
							{new Intl.NumberFormat("id").format(campaign.donation_received)}
						</div>
					</div>
					<div className={styles.remainingDays}>
						<div>Sisa hari</div>
						<div className={`${styles.value}`}>
							{isForeverCampaign ? "Terus Berjalan" : campaign.days_remaining}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleCampaign;

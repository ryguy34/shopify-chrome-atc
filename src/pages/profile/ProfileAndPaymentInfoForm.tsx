import { useState } from "react";

export interface ProfileAndPaymentInfo {
	profileName?: string;
	email?: string;
	phoneNumber?: string;
	ccNumber?: string;
	ccv?: string;
}

const ProfileAndPaymentInfoForm = ({
	handleAddProfileAndPaymentInfo,
	title,
}: any): JSX.Element => {
	const [profileAndPaymentInfo, setProfileAndPaymentInfo] =
		useState<ProfileAndPaymentInfo>();

	const handleOnSubmit = (e: any) => {
		e.preventDefault();

		if (!profileAndPaymentInfo) {
			return;
		}

		handleAddProfileAndPaymentInfo(profileAndPaymentInfo);
		setProfileAndPaymentInfo(undefined);
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<div style={{ border: "1px solid lightgray", padding: "10px" }}>
					<div style={{ textAlign: "center" }}>{title}</div>
					<input
						type="text"
						placeholder="Profile Name"
						value={profileAndPaymentInfo?.profileName}
						onChange={(e) =>
							setProfileAndPaymentInfo({
								...profileAndPaymentInfo,
								profileName: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Email"
						value={profileAndPaymentInfo?.email}
						onChange={(e) =>
							setProfileAndPaymentInfo({
								...profileAndPaymentInfo,
								email: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Phone Number"
						value={profileAndPaymentInfo?.phoneNumber}
						onChange={(e) =>
							setProfileAndPaymentInfo({
								...profileAndPaymentInfo,
								phoneNumber: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="CC Number"
						value={profileAndPaymentInfo?.ccNumber}
						onChange={(e) =>
							setProfileAndPaymentInfo({
								...profileAndPaymentInfo,
								ccNumber: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="CCV"
						value={profileAndPaymentInfo?.ccv}
						onChange={(e) =>
							setProfileAndPaymentInfo({
								...profileAndPaymentInfo,
								ccv: e.target.value,
							})
						}
					/>
					<div style={{ textAlign: "center" }}>
						<button type="submit">Add Profile Info</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default ProfileAndPaymentInfoForm;

import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export interface ProfileAndPaymentInfo {
	profileName?: string;
	email?: string;
	phoneNumber?: string;
	ccNumber?: string;
	ccv?: string;
}

const ProfileAndPaymentInfoForm = ({
	handleAddProfileAndPaymentInfo,
	handleGoBack,
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
			<div style={{ textAlign: "center", fontWeight: "bold" }}>
				Profile Info
			</div>
			<Form.Control
				placeholder="Profile Name"
				type="text"
				onChange={(e) =>
					setProfileAndPaymentInfo({
						...profileAndPaymentInfo,
						profileName: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Email"
				type="text"
				onChange={(e) =>
					setProfileAndPaymentInfo({
						...profileAndPaymentInfo,
						email: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Phone Number"
				type="text"
				onChange={(e) =>
					setProfileAndPaymentInfo({
						...profileAndPaymentInfo,
						phoneNumber: e.target.value,
					})
				}
			/>
			<div style={{ textAlign: "center", fontWeight: "bold" }}>
				Payment Info
			</div>
			<Form.Control
				placeholder="Card Number"
				type="text"
				onChange={(e) =>
					setProfileAndPaymentInfo({
						...profileAndPaymentInfo,
						ccNumber: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="CCV"
				type="text"
				onChange={(e) =>
					setProfileAndPaymentInfo({
						...profileAndPaymentInfo,
						ccv: e.target.value,
					})
				}
			/>
			<div
				style={{
					textAlign: "center",
					marginTop: "10px",
				}}
			>
				<Button variant="success" onClick={handleOnSubmit}>
					Next
				</Button>
			</div>
		</div>
	);
};

export default ProfileAndPaymentInfoForm;

import { useState } from "react";
import ProfileList from "./ProfileList";
import "./ProfilePage.scss";
import AddressForm, { Address } from "./AddressForm";
import ProgressBar from "./ProgressBar";
import { ProfileAndPaymentInfo } from "./ProfileAndPaymentInfoForm";
import ProfileAndPaymentInfoForm from "./ProfileAndPaymentInfoForm";

const ProfilePage = (): JSX.Element => {
	const [page, setPage] = useState(1);
	const [shippingAddress, setShippingAddress] = useState<Address>();
	const [billingAddress, setBillingAddress] = useState<Address>();
	const [profileAndPaymentInfo, setProfileAndPaymentInfo] =
		useState<ProfileAndPaymentInfo>();

	const handleAddProfileAndPaymentInfo = (
		profileAndPaymentInfo: ProfileAndPaymentInfo
	) => {
		setProfileAndPaymentInfo(profileAndPaymentInfo);
		setPage(page + 1);
	};

	const handleAddShippingInfo = (address: Address) => {
		setShippingAddress(address);
		setPage(page + 1);
	};

	const handleAddBillingInfo = (address: Address) => {
		setBillingAddress(address);
		setPage(1);
	};

	return (
		<div className="profile-page">
			<ProfileList />
			<div>
				<div style={{ textAlign: "center" }}>
					<ProgressBar page={page} />
				</div>
				<div>
					{page === 1 && (
						<ProfileAndPaymentInfoForm
							handleAddProfileAndPaymentInfo={
								handleAddProfileAndPaymentInfo
							}
							title={"Profile and Payment Info"}
						/>
					)}
					{page === 2 && (
						<AddressForm
							handleAddShippingInfo={handleAddShippingInfo}
							title={"Shipping info"}
						/>
					)}
					{page === 3 && (
						<AddressForm
							handleAddShippingInfo={handleAddBillingInfo}
							title={"Billing info"}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;

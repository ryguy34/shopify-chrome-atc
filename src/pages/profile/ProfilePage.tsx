import { useState } from "react";
import ProfileList from "./ProfileList";
import "./ProfilePage.scss";
import AddressForm, { Address } from "./AddressForm";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ProfileAndPaymentInfo } from "./ProfileAndPaymentInfoForm";
import ProfileAndPaymentInfoForm from "./ProfileAndPaymentInfoForm";
import { addProfile, useAppDispatch } from "../../reducers/profileListSlice";
import { v4 as uuid } from "uuid";

const ProfilePage = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const [page, setPage] = useState(1);
	const [shippingAddress, setShippingAddress] = useState<Address>();
	const [profileAndPaymentInfo, setProfileAndPaymentInfo] =
		useState<ProfileAndPaymentInfo>();

	const handleAddProfileAndPaymentInfo = (
		profileAndPaymentInfo: ProfileAndPaymentInfo
	) => {
		setProfileAndPaymentInfo(profileAndPaymentInfo);
		setPage(page + 1);
	};

	const handleAddAddressInfo = (
		address: Address,
		isBillingAndShippingSame: boolean
	) => {
		if (page === 3) {
			setPage(1);
			dispatch(
				addProfile({
					id: uuid(),
					profileAndPaymentInfo: profileAndPaymentInfo,
					shippingInfo: shippingAddress,
					billingInfo: address,
				})
			);
		} else if (page === 2) {
			if (isBillingAndShippingSame) {
				dispatch(
					addProfile({
						id: uuid(),
						profileAndPaymentInfo: profileAndPaymentInfo,
						shippingInfo: address,
						billingInfo: address,
					})
				);

				setPage(1);
			} else {
				setShippingAddress(address);
				setPage(page + 1);
			}
		}
	};

	const handleGoBack = () => {
		setPage(page - 1);
	};

	return (
		<div className="profile-page">
			<ProfileList />
			<div>
				<div
					style={{
						textAlign: "center",
						marginBottom: "10px",
					}}
				>
					<ProgressBar
						label={`${page * 33 - 33}%`}
						variant="success"
						animated
						now={page * 33 - 33}
					/>
				</div>
				<div>
					{page === 1 && (
						<ProfileAndPaymentInfoForm
							handleAddProfileAndPaymentInfo={
								handleAddProfileAndPaymentInfo
							}
						/>
					)}
					{page === 2 && (
						<AddressForm
							handleAddAddressInfo={handleAddAddressInfo}
							handleGoBack={handleGoBack}
							title={"Shipping"}
						/>
					)}
					{page === 3 && (
						<AddressForm
							handleAddAddressInfo={handleAddAddressInfo}
							handleGoBack={handleGoBack}
							title={"Billing"}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;

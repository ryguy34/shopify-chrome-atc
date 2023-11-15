import { useState } from "react";
import BillingAddress from "./BillingAddress";
import PaymentInfo from "./ProfileAndPaymentInfoForm";
import ProgressBar from "./ProgressBar";
import ShippingAddressForm, { Address } from "./AddressForm";

const AddProfile = (): JSX.Element => {
	const [page, setPage] = useState("1");

	return (
		<div>
			<ProgressBar />

			{page === "1" && <ShippingAddressForm />}
			{page === "2" && <BillingAddress />}
			{page === "3" && <PaymentInfo />}
		</div>
	);
};

export default AddProfile;

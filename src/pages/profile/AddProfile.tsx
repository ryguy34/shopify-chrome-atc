import { useState } from "react";
import BillingAddress from "./BillingAddress";
import PaymentInfo from "./PaymentInfo";
import ProgressBar from "./ProgressBar";
import ShippingAddress from "./ShippingAddress";

const AddProfile = (): JSX.Element => {
	const [page, setPage] = useState("1");

	return (
		<div>
			<ProgressBar />

			{page === "1" && <ShippingAddress />}
			{page === "2" && <BillingAddress />}
			{page === "3" && <PaymentInfo />}
		</div>
	);
};

export default AddProfile;

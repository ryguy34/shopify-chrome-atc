import { Button, Form } from "react-bootstrap";
import "./ShippingAddress.scss";
import { useState } from "react";
// const stateList = [
// 	"Alabama",
// 	"Alaska",
// 	"Arizona",
// 	"Arkansas",
// 	"California",
// 	"Colorado",
// 	"Connecticut",
// 	"Illinois",
// 	"Texas",
// 	"Tennessee",
// 	"Florida",
// 	"Michigan",
// ];

export interface Address {
	firstName?: string;
	lastName?: string;
	address?: string;
	apartmentNumber?: string;
	state?: string;
	city?: string;
	zipCode?: string;
}

const AddressForm = ({
	handleAddAddressInfo,
	handleGoBack,
	title,
}: any): JSX.Element => {
	const [address, setAddress] = useState<Address>();

	const handleOnSubmit = (e: any) => {
		e.preventDefault();

		if (!address) {
			return;
		}

		handleAddAddressInfo(address);
		setAddress(undefined);
	};

	const handleOnGoBack = (e: any) => {
		e.preventDefault();

		handleGoBack();
	};

	return (
		<div>
			<div style={{ textAlign: "center", fontWeight: "bold" }}>{title}</div>
			<Form.Control
				placeholder="First name"
				type="text"
				onChange={(e) =>
					setAddress({
						...address,
						firstName: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Last name"
				onChange={(e) =>
					setAddress({
						...address,
						lastName: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Address"
				onChange={(e) =>
					setAddress({
						...address,
						address: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Apt #"
				onChange={(e) =>
					setAddress({
						...address,
						apartmentNumber: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="City"
				onChange={(e) =>
					setAddress({
						...address,
						city: e.target.value,
					})
				}
			/>
			<Form.Control
				placeholder="Zip Code"
				onChange={(e) =>
					setAddress({
						...address,
						zipCode: e.target.value,
					})
				}
			/>
			<Form.Check // prettier-ignore
				type="switch"
				id="custom-switch"
				label="Shipping same as billing"
			/>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<Button
					variant="danger"
					onClick={handleOnGoBack}
					style={{ width: "45%" }}
				>
					Go back
				</Button>
				<Button
					variant="success"
					onClick={handleOnSubmit}
					style={{ width: "45%" }}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default AddressForm;

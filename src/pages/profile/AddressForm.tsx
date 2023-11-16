import { Form } from "react-bootstrap";
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

const AddressForm = ({ handleAddAddressInfo, title }: any): JSX.Element => {
	const [address, setAddress] = useState<Address>();

	const handleOnSubmit = (e: any) => {
		e.preventDefault();

		if (!address) {
			return;
		}

		handleAddAddressInfo(address);
		setAddress(undefined);
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<div style={{ border: "1px solid lightgray", padding: "10px" }}>
					<div style={{ textAlign: "center", fontWeight: "bold" }}>
						{title}
					</div>
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
					<div style={{ textAlign: "center" }}>
						<button type="submit">Add {title}</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddressForm;

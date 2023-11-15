import "./ShippingAddress.scss";
import { useState } from "react";
const stateList = [
	"Alabama",
	"Alaska",
	"Arizona",
	"Arkansas",
	"California",
	"Colorado",
	"Connecticut",
	"Illinois",
	"Texas",
	"Tennessee",
	"Florida",
	"Michigan",
];

export interface Address {
	firstName?: string;
	lastName?: string;
	address?: string;
	apartmentNumber?: string;
	state?: string;
	city?: string;
	zipCode?: string;
}

const AddressForm = ({ handleAddShippingInfo, title }: any): JSX.Element => {
	const [address, setAddress] = useState<Address>();

	const handleOnSubmit = (e: any) => {
		e.preventDefault();

		if (!address) {
			return;
		}

		handleAddShippingInfo(address);
		setAddress(undefined);
	};

	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<div style={{ border: "1px solid lightgray", padding: "10px" }}>
					<div style={{ textAlign: "center", fontWeight: "bold" }}>
						{title}
					</div>
					<input
						type="text"
						placeholder="First Name"
						value={address?.firstName}
						onChange={(e) =>
							setAddress({
								...address,
								firstName: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Last Name"
						value={address?.lastName}
						onChange={(e) =>
							setAddress({
								...address,
								lastName: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Address"
						value={address?.address}
						onChange={(e) =>
							setAddress({
								...address,
								address: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Apt #"
						value={address?.apartmentNumber}
						onChange={(e) =>
							setAddress({
								...address,
								apartmentNumber: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="City"
						value={address?.city}
						onChange={(e) =>
							setAddress({
								...address,
								city: e.target.value,
							})
						}
					/>
					<input
						type="text"
						placeholder="Zip Code"
						value={address?.zipCode}
						onChange={(e) =>
							setAddress({
								...address,
								zipCode: e.target.value,
							})
						}
					/>
					<div style={{ textAlign: "center" }}>
						<button type="submit">Add Shipping</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddressForm;

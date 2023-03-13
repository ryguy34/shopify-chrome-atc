import "./AddProfile.scss";
import { useState } from "react";
import { profileAdded } from "../../reducers/profileListSlice";
import { useDispatch } from "react-redux";

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

const AddProfile = (): JSX.Element => {
	const dispatch = useDispatch();
	const [isShippingAndBilling, setIsShippingAndBilling] = useState(false);
	const [userFirstName, setUserFirstName] = useState("");
	const [userLastName, setUserLastName] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [userAptNum, setUserAptNum] = useState("");
	const [userState, setUserState] = useState("");
	const [userCity, setUserCity] = useState("");
	const [userZipCode, setUserZipCode] = useState("");
	const [profileName, setProfileName] = useState("");

	const handleFirstNameChange = (e: any) => setUserFirstName(e.target.value);
	const handleProfileNameChange = (e: any) => setProfileName(e.target.value);

	const onSaveProfile = () => {
		if (userFirstName && profileName) {
			dispatch(profileAdded(profileName));
			setUserFirstName("");
		}
	};

	return (
		<div>
			<div className="delivery-address-container-name">Shipping Address</div>
			<div className="row">
				<div className="col-md">
					<div className="form-floating mb-3">
						<input
							type="name"
							onChange={handleFirstNameChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">First Name</label>
					</div>
				</div>
				<div className="col-md">
					<div className="form-floating mb-3">
						<input
							type="name"
							onChange={handleLastNameChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Last Name</label>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md">
					<div className="form-floating mb-3 address">
						<input
							type="address"
							onChange={handleAddressChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Address</label>
					</div>
				</div>
				<div className="col-md">
					<div className="form-floating mb-3">
						<input
							type="address"
							onChange={handleAptNumChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Apt #</label>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md">
					<div className="form-floating mb-3 address">
						<select
							className="form-select"
							required
							onChange={(e) => {
								setUserState(e.target.value);
							}}
						>
							<option selected disabled value="">
								State
							</option>
							{stateList.map((state: string) => (
								<option>{state}</option>
							))}
						</select>
					</div>
				</div>
				<div className="col-md">
					<div className="form-floating mb-3">
						<input
							type="city"
							onChange={handleCityChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">City</label>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md">
					<div className="form-floating mb-3 address">
						<input
							type="zip"
							onChange={handleZipCodeChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Zip Code</label>
					</div>
				</div>
				<div className="col-md">
					<div className="form-floating mb-3 address">
						<input
							type="profile-name"
							onChange={handleProfileNameChange}
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Profile Name</label>
					</div>
				</div>
			</div>

			<div className="col-md">
				<button
					type="button"
					className="btn btn-outline-success"
					onClick={onSaveProfile}
				>
					Create Profile
				</button>
			</div>
		</div>
	);

	function handleLastNameChange(event: any) {
		setUserLastName(event.target.value);
	}

	function handleAddressChange(event: any) {
		setUserAddress(event.target.value);
	}

	function handleAptNumChange(event: any) {
		setUserAptNum(event.target.value);
	}

	function handleCityChange(event: any) {
		setUserCity(event.target.value);
	}

	function handleZipCodeChange(event: any) {
		setUserZipCode(event.target.value);
	}
};

export default AddProfile;

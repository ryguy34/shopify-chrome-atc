import "./Profiles.scss";

const Profiles = (): JSX.Element => {
	return (
		<div className="container">
			<div className="delivery-address-container-name">Delivery Address</div>
			<div className="row">
				<div className="col-md">
					<div className="form-floating mb-3">
						<input
							type="name"
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
					<div className="form-floating mb-3">
						<input
							type="address"
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Address</label>
					</div>
				</div>
				<div className="col-4">
					<div className="form-floating mb-3">
						<input
							type="address"
							className="form-control"
							id="floatingInput"
							placeholder=""
						/>
						<label htmlFor="floatingInput">Apt #</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profiles;

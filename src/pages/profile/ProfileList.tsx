import { Button, ListGroup } from "react-bootstrap";
import IProfile from "../../interfaces/IProfile";
import {
	profileListSelector,
	useAppDispatch,
	useAppSelector,
	deleteProfile,
} from "../../reducers/profileListSlice";
import "./ProfileList.scss";
import { Pencil, Trash } from "react-bootstrap-icons";

const ProfileList = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const profileList = useAppSelector(profileListSelector);

	const handleEditClick = (index: number) => {
		const chosenProfile = profileList[index];
	};

	const handleDeleteClick = (index: number) => {
		console.log(index);
		dispatch(deleteProfile(profileList[index].id!));
	};

	return (
		<div>
			<div
				style={{
					textAlign: "center",
					fontWeight: "bold",
					fontSize: "16px",
				}}
			>
				Profiles
			</div>
			<div className="profile-list">
				<ListGroup variant="flush">
					{profileList.map((profile: IProfile, index: number) => (
						<ListGroup.Item
							key={index}
							variant="secondary"
							style={{
								borderRadius: "6px",
								margin: "2px",
								fontWeight: "bold",
							}}
						>
							{profile.profileAndPaymentInfo?.profileName}
							<Pencil
								style={{ marginLeft: "20px" }}
								onClick={() => {
									handleEditClick(index);
								}}
							/>
							<Trash
								style={{ marginLeft: "20px" }}
								onClick={() => {
									handleDeleteClick(index);
								}}
							/>
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</div>
	);
};

export default ProfileList;

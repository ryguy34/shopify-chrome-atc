import { ListGroup } from "react-bootstrap";
import IProfile from "../../interfaces/IProfile";
import {
	profileListSelector,
	useAppSelector,
} from "../../reducers/profileListSlice";
import "./ProfileList.scss";
import { Pencil, Trash } from "react-bootstrap-icons";

const ProfileList = (): JSX.Element => {
	const profileList = useAppSelector(profileListSelector);

	const renderProfileList = profileList.map((profile: IProfile) => (
		<article key={profile.id}>
			{profile.profileAndPaymentInfo?.profileName} edit delete
			<hr></hr>
		</article>
	));

	return (
		<div>
			<div style={{ textAlign: "center", fontWeight: "bold" }}>Profiles</div>
			<div className="profile-list">
				<ListGroup variant="flush">
					{profileList.map((profile: IProfile) => (
						<ListGroup.Item
							key={profile.id}
							variant="secondary"
							style={{ borderRadius: "6px", margin: "2px" }}
						>
							{profile.profileAndPaymentInfo?.profileName}
							<Pencil style={{ marginLeft: "20px" }} />
							<Trash style={{ marginLeft: "20px" }} />
						</ListGroup.Item>
					))}
				</ListGroup>
			</div>
		</div>
	);
};

export default ProfileList;

import "./ProfileList.scss";
import { useSelector } from "react-redux";
import { selectAllProfiles } from "../../reducers/profileListSlice";
import IProfile from "../../interfaces/IProfile";

const ProfileList = (): JSX.Element => {
	const profiles = useSelector(selectAllProfiles);

	const renderProfileList = profiles.map((profile: IProfile) => (
		<article>{profile.profileName}</article>
	));

	return (
		<div className="profile-list">
			<section>{renderProfileList}</section>
		</div>
	);
};

export default ProfileList;

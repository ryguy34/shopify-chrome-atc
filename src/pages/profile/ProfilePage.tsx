import AddProfile from "./AddProfile";
import ProfileList from "./ProfileList";
import "./ProfilePage.scss";

const ProfilePage = (): JSX.Element => {
	return (
		<div className="profile-page">
			<ProfileList />
			<AddProfile />
		</div>
	);
};

export default ProfilePage;

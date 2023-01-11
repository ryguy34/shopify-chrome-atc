import "./ProxyGroupEditor.scss";
import classNames from "classnames";

const ProxyGroupEditor = (proxyGroupList: any): JSX.Element => {
	var proxyGroupEditorClass = classNames({
		"proxy-group-empty-list-container": true,
	});

	return (
		<div className="pge-div">
			<div className={proxyGroupEditorClass}>No Proxy Groups</div>
		</div>
	);
};

export default ProxyGroupEditor;

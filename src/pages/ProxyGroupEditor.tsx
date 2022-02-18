import "./ProxyGroupEditor.scss";
import classNames from "classnames";

const ProxyGroupEditor = (): JSX.Element => {
	var proxyGroupEditorClass = classNames({
		"proxy-group-empty-list-container": true,
	});

	//TODO: need to add state and toggle if list isEmpty
	return (
		<div className="pge-div">
			<div className={proxyGroupEditorClass}>No Proxy Groups</div>
		</div>
	);
};

export default ProxyGroupEditor;

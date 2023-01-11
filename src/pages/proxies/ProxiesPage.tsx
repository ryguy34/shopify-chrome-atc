import "./ProxiesPage.scss";
import ProxyGroupEditor from "./ProxyGroupEditor";
import ProxyListEditor from "./ProxyListEditor";
import { useState } from "react";
import IProxyGroup from "../../interfaces/IProxyGroup";

const ProxiesPage = (): JSX.Element => {
	const [proxyGroupList, setProxyGroupList] = useState<IProxyGroup[]>([]);

	return (
		<div className="proxies-page-container">
			<ProxyGroupEditor proxyGroup={proxyGroupList} />
			<ProxyListEditor />
		</div>
	);
	// 	return (
	// 		<div className="proxies-page-container">
	// 			<div className="proxy-group-list-container">
	// 				<h6 className="proxy-group-title">Proxy Groups</h6>
	// 				<ul className="list-group">
	// 					{proxyGroupList.proxyGroups.map((proxyList) => {
	// 						return (
	// 							<div>
	// 								<li className="list-group-item disabled">
	// 									{proxyList.proxyGroupName}
	// 								</li>
	// 							</div>
	// 						);
	// 					})}
	// 				</ul>
	// 			</div>
	// 		</div>
	// 	);
	// }
};

export default ProxiesPage;

import Proxy from "./IProxy";

export default interface IProxyGroup {
	proxyGroupName: string;
	proxyList: Proxy[];
}

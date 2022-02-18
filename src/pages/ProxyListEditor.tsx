import "./ProxyListEditor.scss";

const ProxyListEditor = (): JSX.Element => {
	return (
		<div className="ple-div">
			<div className="mb-3">
				<textarea
					className="form-control"
					id="exampleFormControlTextarea1"
					placeholder="IP:PASSWORD"
				></textarea>
			</div>
		</div>
	);
};

export default ProxyListEditor;

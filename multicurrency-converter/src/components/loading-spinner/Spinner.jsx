import "./spinner.css";

export default function Spinner({ style }) {
	return (
		<div className="lds-ring" style={style}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
}

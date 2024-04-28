const SortAscending = ({
	size = 20,
	color = "#1C274C",
}: {
	size?: number;
	color?: string;
}) => (
	<svg
		data-testid="sort-ascending-icon"
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		fill="none"
		viewBox="0 0 24 24"
	>
		<path
			fill={color}
			fillRule="evenodd"
			d="M17 3.25a.75.75 0 0 1 .75.75v13.75l1.65-2.2a.75.75 0 1 1 1.2.9l-3 4a.75.75 0 0 1-1.35-.45V4a.75.75 0 0 1 .75-.75Z"
			clipRule="evenodd"
		/>
		<path
			fill={color}
			d="M3.25 16a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
		/>
		<path
			fill={color}
			d="M5.25 11a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
			opacity={0.7}
		/>
		<path
			fill={color}
			d="M7.25 6A.75.75 0 0 1 8 5.25h5a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 6Z"
			opacity={0.4}
		/>
	</svg>
);
export default SortAscending;

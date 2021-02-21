const Header = ({ text, color, addTask }) => {
	return (
		<div className="header">
			<h1>{text}</h1>
			<button onClick={addTask} className="header-btn btn">
				Add Task
			</button>
		</div>
	);
};

export default Header;

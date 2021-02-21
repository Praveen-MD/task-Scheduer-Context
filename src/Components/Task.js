import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
const Task = ({ task }) => {
	const [tasks, setTasks] = useContext(DataContext);
	const onDelete = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};
	return (
		<div key={task.id} className={`task  ${task.isReminder ? "reminder" : ""}`}>
			<h2>
				{task.task}
				<button className="btn2" onClick={() => onDelete(task.id)}>
					Delete
				</button>
			</h2>

			<h3>{task.date}</h3>
		</div>
	);
};

export default Task;

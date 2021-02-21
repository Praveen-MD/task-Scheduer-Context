import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
const Addtask = () => {
	const [task, setTask] = useState("");
	const [date, setDate] = useState("");
	const [isReminder, setReminder] = useState(false);
	const [tasks, setTasks] = useContext(DataContext);
	const addNewTask = (task) => {
		var id = Object.keys(tasks).length + 1;
		const newTask = { id, ...task };
		setTasks([...tasks, newTask]);
	};
	const onSubmit = (e) => {
		e.preventDefault();

		if (!task || !date) {
			alert("Task and date is required....");
			return;
		}
		addNewTask({ task, date, isReminder });
		setTask("");
		setDate("");
		setReminder(false);
	};

	return (
		<div className="add-form">
			<form className="form-control" onSubmit={onSubmit}>
				<label>Set Task</label>
				<input
					className="form-input"
					type="text"
					value={task}
					placeholder="Add Task "
					onChange={(e) => setTask(e.target.value)}
				/>
				<label> Set Date</label>
				<input
					className="form-input"
					type="text"
					value={date}
					placeholder="Add Date"
					onChange={(e) => setDate(e.target.value)}
				/>
				<label>Set Reminder</label>
				<input
					value={isReminder}
					checked={isReminder}
					type="checkbox"
					onChange={(e) => setReminder(e.target.checked)}
				/>
				<button className=" btn btn-block">Submit</button>
			</form>
		</div>
	);
};

export default Addtask;

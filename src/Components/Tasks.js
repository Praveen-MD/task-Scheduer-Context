import Task from "./Task";
import React, { createContext, useContext, useState } from "react";
import { DataContext } from "./DataContext";
const Tasks = () => {
	const [tasks, setTasks] = useContext(DataContext);
	return (
		<>
			{tasks.map((task) => {
				return <Task task={task} />;
			})}
		</>
	);
};

export default Tasks;

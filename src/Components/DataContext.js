import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const DataProvider = (props) => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			task: "Pay electricity bill",
			date: 15022021,
			isReminder: true,
		},
		{
			id: 2,
			task: "Pay water bill",
			date: 18022021,
			isReminder: false,
		},
		{
			id: 3,
			task: "Pay phone bill",
			date: 10022021,
			isReminder: true,
		},
	]);
	return (
		<DataContext.Provider value={[tasks, setTasks]}>
			{props.children}
		</DataContext.Provider>
	);
};

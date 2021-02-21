import { useState } from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import Addtask from "./Components/Addtask";
import { DataProvider } from "./Components/DataContext";
function App() {
	const [isShow, setShow] = useState(false);
	const showAddButton = () => {
		setShow(!isShow);
	};
	return (
		<DataProvider>
			<div className="container">
				<Header addTask={showAddButton} text="Task-Scheduler" color="coral" />
				{isShow ? <Addtask /> : null}
				<Tasks />
			</div>
		</DataProvider>
	);
}
export default App;

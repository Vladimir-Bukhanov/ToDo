import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const ToDo = () => {
	const [tasks, setTasks] = useState(['Physical training', 'Walk with my dog'])

	return (
		<>
			<h1 className="text-2xl mb-4">ToDo List</h1>
			<div className="flex flex-col items-start mb-5 sm:w-[85%] md:w-[70%] xl:w-[55%] w-[90%]">
				<input
					className="w-full mb-3 px-3 py-2 outline-0 border border-white rounded-xl"
					placeholder="Write your task"
					type="text"
				/>
				<button className="px-4 py-2 border border-blue-400 rounded-2xl cursor-pointer hover:bg-blue-400 ease duration-300 sm:text-[1rem] text-[0.9rem]">
					Add Task
				</button>
			</div>
			<ol className="list-none p-0 m-0 sm:w-[85%] md:w-[70%] xl:w-[55%] w-[90%]">
				{tasks.map((task, i) => (
					<li
						className="flex justify-between mb-4 border border-blue-400 py-2 px-2 rounded-xl"
						key={i}
					>
						<span className="flex sm:text-xl text-[1rem]">
							<p className="mr-2">{i + 1}.</p> {task}
						</span>
						<span className="flex">
							<div className="flex items-center justify-center mr-3 sm:h-7 sm:w-7  cursor-pointer border border-white hover:border-green-500 ease duration-200">
								<IoCheckmarkSharp className="text-green-500 sm:text-2xl text-xl" />
							</div>
							<div className="flex items-center justify-center sm:h-7 sm:w-7 cursor-pointer border border-white hover:border-red-500 ease duration-200">
								<RxCross2 className="text-red-500 sm:text-xl text-[1.2rem]" />
							</div>
						</span>
					</li>
				))}
			</ol>
		</>
	)
}

function App() {
	return (
		<div className="container flex flex-col items-center justify-start mx-auto">
			<ToDo />
		</div>
	)
}

export default App

import { useState } from 'react'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'
import { completed, defaultBtn, noCompleted } from '../toggleCompleteStyles'
import type { ITasks } from '../types/ToDo.types'

export const ToDo = () => {
	const [tasks, setTasks] = useState<ITasks[]>([
		{ task: 'Physical training', completed: false },
		{ task: 'Walk with my dog', completed: true }
	])

	const [isEmpty, setIsEmpty] = useState<boolean>(false)

	const [inputValue, setInputValue] = useState<string>('')

	const addTask = () => {
		if (inputValue.trim().length === 0) {
			setIsEmpty(true)
			return
		}
		setIsEmpty(false)
		const newTasks: ITasks = {
			task: inputValue,
			completed: false
		}
		setTasks(prev => [...prev, newTasks])
		setInputValue('')
	}

	const toggleComplete = (index: number) => {
		const newTasks = [...tasks]
		newTasks[index].completed = !newTasks[index].completed
		setTasks(newTasks)
	}

	const removeTask = (index: number) => {
		const newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
	}

	return (
		<div className="sm:w-[85%] md:w-[70%] xl:w-[55%] w-[90%]">
			<h1 className="text-2xl mb-4 w-full text-center">ToDo List</h1>
			<div className="flex flex-col items-start mb-5">
				<input
					className="w-full mb-3 px-3 py-2 outline-0 border border-white rounded-xl"
					placeholder="Write your task"
					type="text"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
				/>
				{isEmpty ? (
					<p className="text-red-500 text-xl mb-3">
						You can't add an empty task...
					</p>
				) : (
					<></>
				)}
				<button
					onClick={addTask}
					className="px-4 py-2 border border-blue-400 rounded-2xl cursor-pointer hover:bg-blue-400 ease duration-300 sm:text-[1rem] text-[0.9rem]"
				>
					Add Task
				</button>
			</div>
			{tasks.length === 0 ? (
				<p className="sm:text-2xl text-xl">No tasks...</p>
			) : (
				<ol className="list-none p-0 m-0 w-full">
					{tasks.map((task, i) => (
						<li
							className="flex justify-between mb-4 border border-blue-400 py-2 px-2 rounded-xl"
							key={i}
						>
							<span className="flex sm:text-xl text-[1rem] pointer-events-none">
								<p className="mr-2">{i + 1}.</p>{' '}
								<p className={task.completed ? 'line-through' : ''}>
									{task.task}
								</p>
							</span>
							<span className="flex">
								<div
									onClick={() => toggleComplete(i)}
									className={
										task.completed
											? `${defaultBtn} ${completed}`
											: `${defaultBtn} ${noCompleted}`
									}
								>
									<IoCheckmarkSharp className="sm:text-2xl text-xl" />
								</div>
								<div
									onClick={() => removeTask(i)}
									className="flex items-center justify-center sm:h-7 sm:w-7 cursor-pointer border border-white hover:border-red-500 ease duration-200"
								>
									<RxCross2 className="text-red-500 sm:text-xl text-[1.2rem]" />
								</div>
							</span>
						</li>
					))}
				</ol>
			)}
		</div>
	)
}

'use client'
import Image from 'next/image'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import { Task } from './model/Task'
import TaskList from './components/TaskList'

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])

  return (
    <>
      <main className='bg-white min-h-screen'>
        <TaskForm onUpdateForm={(data: Task) => {
          // console.log(data)
          setTaskList([
            ...taskList,
            data
          ]);
          console.log(taskList.length)
        }} />
        <TaskList taskListData={taskList} />
      </main>
    </>
  )
}

import Image from 'next/image'
import { useState } from 'react'
import TaskForm from './components/TaskForm'
import { Task } from './model/Task'

export default function Home() {
  // const [taskList, setTaskList] = useState(<Task>[])
  return (
    <>
      <main className='bg-white min-h-screen'>
        <TaskForm />
      </main>
    </>
  )
}

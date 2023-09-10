import { Task } from "../model/Task"
import { useState } from 'react'
import moment from 'moment';

export default function TaskList(props: { taskListData: Task[] }) {
    const [taskList, setTaskList] = useState<Task[]>(props.taskListData);
    console.log(props.taskListData)

    // if (taskList.length != 0)
    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2 text-black border">Title</th>
                        <th className="px-4 py-2 text-black border">Due Date</th>
                        <th className="px-4 py-2 text-black border">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        props.taskListData.map((data: Task, index) => {
                            let formattedDate = (moment(data.dueDate)).format('DD-MMM-YYYY')
                            return (
                                <tr key={index}>
                                    <td className="border px-4 py-2 text-black">{data.title}</td>
                                    <td className="border px-4 py-2 text-black">{formattedDate.toString()}</td>
                                    <td className="border px-4 py-2 text-black">{data.category}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
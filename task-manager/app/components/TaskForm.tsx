'use client';
import categories from "../model/categories"
import { useState, useId, FormEvent } from 'react'
import { Task } from "../model/Task"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const validationSchema = z.object({
    title: z.string().min(3, { message: 'Required' }).max(30),
});


export default function TaskForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Task>({
        defaultValues: {
            title: "",
            dueDate: Date.now(),
            category: categories[0],
        },
        resolver: zodResolver(validationSchema),
    })

    const onSubmit: SubmitHandler<Task> = (data) => {
        console.log(data);
    }

    return (
        <div >
            <form className="w-full max-w-lg" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="px-3 mb-6 md:mb-0 pt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Title
                    </label>
                    <input type="text" {...register("title")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" placeholder="title" />
                    { }
                </div>
                <div className="px-3 mb-6 md:mb-0 pt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Due Date
                    </label>
                    <input type="date" {...register("dueDate")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="dueDate" placeholder="Jane" />
                </div>
                <div className="px-3 mb-6 md:mb-0 pt-5">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Category
                    </label>
                    <select {...register("category")} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="category" placeholder="Jane" defaultValue={categories[0]}>
                        {categories.map((c) => <option key={c} value={c} >{c}</option>)}
                    </select>
                </div>
                <button className="py-3 px-4 mb-3 ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline" type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}
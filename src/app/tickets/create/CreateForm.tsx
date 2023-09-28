'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const CreateForm = () => {
    const router = useRouter()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const ticket = {
            title, body, priority, user_email: 'ederAndrew0028@gmail.com'
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tickets`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(ticket)
        })
        
        if(res.status === 201){
            router.refresh()
            router.push('/tickets')
        }
    }

    return(
        <form onSubmit={handleSubmit} className="w-1/2">
           <label>
                <span>Title:</span>
                <input
                    required
                    type="text"
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Body:</span>
                <textarea
                    required
                    onChange={(e)=>setBody(e.target.value)}
                    value={body}
                />
            </label>
            <label>
                <span>Priority:</span>
                <select
                    className="bg-white"
                    onChange={(e)=>setPriority(e.target.value)}
                    value={priority}
                >   
                    <option value=""></option>
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </label>
            <button
                className="btn-primary"
                disabled={isLoading}
            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}


import { notFound } from "next/navigation"
import { Ticket } from "../interfaces/ticket"

export const getTickets = async() => {
    //imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tickets`,{
        next: {
            revalidate: 30
        }
    })

    return res.json()
}

export const getTicket = async(id:string) => {
    //imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tickets/${id}`,{
        next: {
            revalidate: 60
        }
    })

    if(!res.ok){
        notFound()
    }

    return res.json()
}


export const generateStaticParams = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/tickets`)
    const tickets:Ticket[] = await res.json()

    return tickets.map(ticket => ({
        id: ticket.id
    }))
}
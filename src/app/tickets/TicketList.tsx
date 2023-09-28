import Link from "next/link"
import { Ticket } from "../../interfaces/ticket"
import { getTickets } from "../../routes/route"

export const TicketList = async() => {
    const tickets:Ticket[] = await getTickets()

    return(
        <>
            {tickets && tickets.map(ticket => (
                <div key={ticket.id} className="card my-5">
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {tickets.length === 0 && (
                <p className="text-center">There are no open tickets, yay!</p>
            )}
            
        </>
    )
}
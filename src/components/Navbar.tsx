import Image from 'next/image'
import Link from 'next/link'
import Logo from './dojo-logo.png'

export const Navbar = () => {
    return(
        <nav >
            <Image
                src={Logo}
                alt="Dojo Helpesk logo"
                width={70}
                quality={100}
            />
            <h1 >Dojo Helpdesk</h1>
            <Link href="/">Dashboard</Link>
            <Link href="/tickets">Tickets</Link>
        </nav>
    )
}
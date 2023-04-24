import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href='/hospedajes'>Hospedajes</Link>
                <Link href='/hospedajes/new'>New</Link>
                <Link href='/hospedajes/1'>Id</Link>
            </div>
            <div>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </div>
        </nav>
    )
}
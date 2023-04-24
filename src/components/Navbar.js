import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href='http://localhost:3000/hospedajes'>Hospedajes</Link>
                <Link href='http://localhost:3000/hospedajes/new'>New</Link>
                <Link href='http://localhost:3000/hospedajes/1'>Id</Link>
            </div>
            <div>
                <Link href='http://localhost:3000/login'>Login</Link>
                <Link href='http://localhost:3000/register'>Register</Link>
            </div>
        </nav>
    )
}
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between bg-slate-900">
            <div className="flex justify-between">
                <Link className="hover:bg-slate-800 p-2" href='/'>CH</Link>
                <Link className="hover:bg-slate-800 p-2" href='/hospedajes'>Hospedajes</Link>
                <Link className="hover:bg-slate-800 p-2" href='/hospedajes/new'>New</Link>
                <Link className="hover:bg-slate-800 p-2" href='/hospedajes/1'>Id</Link>
            </div>
            <div className="flex justify-between">
                <Link className="hover:bg-slate-800 p-2" href='/login'>Login</Link>
                <Link className="hover:bg-slate-800 p-2" href='/register'>Register</Link>
            </div>
        </nav>
    )
}
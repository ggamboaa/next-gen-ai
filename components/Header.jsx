import Link from "next/link"
import { getUserFromCookie } from "../lib/getUser"
import { logout } from "../actions/userController"

export default async function Header() {
  const user = await getUserFromCookie()

  return (
    <header className="bg-green-100 shadow-md">
      <div className="container mx-auto">
        <div className="navbar">
          <div className="flex-1">
            <Link href="/" className="btn btn-primary text-xl">
              Home
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              {user && (
                <>
                  <li className="mr-3 text-center">
                    <Link href="/create-haiku" className="btn btn-primary">
                      Create Haiku
                    </Link>
                  </li>
                  <li>
                    <form action={logout} className="btn btn-primary">
                      <button>Log Out</button>
                    </form>
                  </li>
                </>
              )}
              {!user && (
                <li className="btn btn-primary">
                  <Link href="/login">Log In</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div className="w-full bg-[#ddd] p-3">
        <div className="w-[1200px] m-auto flex justify-end gap-5">
        <NavLink className="p-3 rounded-lg bg-white text-black text-xl" to="/adduser">Add Contact</NavLink>
        <NavLink className="p-3 rounded-lg bg-white text-black text-xl" to="/">All Contact</NavLink>
        </div>
    </div>
  )
}

export default Header
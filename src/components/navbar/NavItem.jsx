import clsx from "clsx"
import { NavLink } from "react-router-dom"

export default function NavItem({to, children}) {
    return (
        <NavLink
            to={to}
            className={({isActive}) => clsx(isActive ? 'text-primary' : 'text-text', 'font-medium text-xl hover:text-primary duration-200')}
        >
            {children}
        </NavLink>

    )
}
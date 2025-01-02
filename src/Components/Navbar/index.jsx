import { NavLink } from "react-router-dom";


const NavItem = ({ to, children }) => {
	return (
	  // Use la etiqueta NavLink y le pasé las propiedades to y className
	  <NavLink
		to={to}
		className={({ isActive }) => (isActive ? "active" : undefined)}
	  >
		{ children }
	  </NavLink>
	);
  };

const Navbar = () => {
    return (
        <nav className="flex justify-between  items-center fixed z-10 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="text-lg"> <NavItem to="/"> FuncionArte </NavItem> </li>
				<li> <NavItem to="/clothes"> Clothes </NavItem> </li>
				<li> <NavItem to="/electronics"> Electronics </NavItem> </li>
				<li> <NavItem to="/fornitures"> Fornitures </NavItem> </li>
				<li> <NavItem to="/toys"> Toys </NavItem> </li> 
				<li> <NavItem to="/others"> Others </NavItem> </li>
			</ul>

			<ul className="flex items-center gap-3">
				<li> Andrés López </li>
				<li> <NavItem to="/my-orders" > My orders </NavItem> </li>
				<li> <NavItem to="/my-account" > My Account </NavItem> </li>
				<li> <NavItem to="/Sign-out " > Sign Out </NavItem> </li> 
				<li> cart/0   </li>
			</ul>
        </nav>
    )
}

export { Navbar };
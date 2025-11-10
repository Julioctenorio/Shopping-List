import { Link } from "react-router";

export default function Navbar() {
  return (
    <header className="flex flex-col items-center">
      <ul className="flex items-center gap-4 pb-4">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/About">ABOUT US</Link>
        </li>
        {/* <li>  Para pedidos feitos e salvos anteriormente
          <Link to="/Orders">PEDIDOS ANTERIORES</Link>
        </li> */}
      </ul>
    </header>
  );
}

import "../css/Navbar.css"

export default function Navbar() {
  return (
    <nav className="navigation">
      <div>
      <a href="http://localhost:3000/Index" className="brand-name">
        Ekipa14
      </a>
      </div>
      <div className="navigation-menu">
        <ul>
          <li>
            <a href="http://localhost:3000/Index">Domov</a>
          </li>
          <li>
            <a href="http://localhost:3000/Crud">CRUD</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Login</a>
          </li>
          <li>
            <a href="http://localhost:3000/Registration">Registracija</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
import "../css/Navbar.css"

export default function Navbar() {

  var prijavlen = false;
  if (sessionStorage.getItem('idPrijavljenega')) {
    prijavlen = true;
  }

  const odjavi = () => {
    sessionStorage.removeItem('idPrijavljenega')
    window.location.href = 'http://localhost:3000/Prijava'
  }

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
          {prijavlen ? (
            <>
          <li>
            <a href="http://localhost:3000/Crud">CRUD</a>
          </li>
              <li>
                <a href="http://localhost:3000/Mere">Mere</a>
              </li>
              <li>
                <a href="http://localhost:3000/Treningi">Treningi</a>
              </li>
              <li>
                <a href="http://localhost:3000/Index" onClick={odjavi}>Odjavi</a>
              </li>

            </>
          ) : (
            <>
              <li>
                <a href="http://localhost:3000/Prijava">Prijava</a>
              </li>
              {/* <li>
                <a href="http://localhost:3000/">Login</a>
              </li> */}
              <li>
                <a href="http://localhost:3000/Registration">Registracija</a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
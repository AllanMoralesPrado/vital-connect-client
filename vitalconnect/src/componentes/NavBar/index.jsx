import "./style.css";
function NavBar() {
  return (
    <nav>
      <div className="nav primerNavbar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active">About</a>
          </li>
        </ul>
      </div>
      <div className="nav segundoNavbar">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li style={{ float: "right" }}>
            <a className="active">About</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

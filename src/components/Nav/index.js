function Nav() {

    return (
      <header>
    <h2>
      <a href="/">
        <span role="img" aria-label="camera"> 👨🏿‍💻</span>
      </a>
    </h2>
    <nav>
        <h1>Reggie Tenkorang</h1>
      <ul className="flex-row">
        <ol className="mx-2">
          <a href="#about">
            About me
          </a>
        </ol>
        <ol>
          <span>Portfolio</span>
        </ol>
        <ol>
          <span>Contact</span>
        </ol>
      </ul>
    </nav>
  </header>
    );
  }
  
  export default Nav;
  
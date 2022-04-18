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
          <a href="#about" >About Me</a>
        </ol>
        <ol>
          <a href="#portfolio" >Portfolio</a>
        </ol>
        <ol>
         <a href="#contact" >Contact</a>
        </ol>
        <ol>
        <a href="#resume" >Resume</a>
        </ol>
      </ul>
    </nav>
  </header>
    );
  }
  
  export default Nav;
  
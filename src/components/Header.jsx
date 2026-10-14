import formImage from '../assets/logo.jpg'


function Header() {
  
  return  (
    <header>
      <img src={formImage} alt="Atom"></img>
      <h1>
        React Forms
      </h1>
    </header>
  );
}


export default Header;
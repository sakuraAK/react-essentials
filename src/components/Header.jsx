import reactImage from '../assets/react-core-concepts.png';

const descriptons = ["Core", "Fundamental",  "Crucial"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Header() {
  let decsription = descriptons[getRandomInt(3)];
  return  (
    <header>
      <img src={reactImage} alt="Atom"></img>
      <h1>
        React Essentials
      </h1>
      <p>
        {decsription} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}


export default Header;
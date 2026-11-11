import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';


export const MOVIES = [
  // ACTION
  {
    id: 1,
    title: "Live Hard",
    genre: "Action",
    year: 1988,
    description: "An ordinary night turns into an extraordinary battle in a skyscraper.",
    poster: "/images/live-hard.png"
  },
  {
    id: 2,
    title: "Mad Max: Fury Highway",
    genre: "Action",
    year: 2015,
    description: "A high-speed chase through a dangerous post-apocalyptic desert.",
    poster: "/images/mad-max-fury-highway.png"
  },
  {
    id: 3,
    title: "John Quick",
    genre: "Action",
    year: 2014,
    description: "A retired assassin returns to settle an unfinished score.",
    poster: "/images/john-quick.png"
  },
  {
    id: 4,
    title: "Mission: Nearly Impossible",
    genre: "Action",
    year: 1996,
    description: "A secret agent races against time to stop a global conspiracy.",
    poster: "/images/mission-nearly-impossible.png"
  },
  {
    id: 5,
    title: "Top Pilot",
    genre: "Action",
    year: 1986,
    description: "An elite fighter pilot pushes the limits of speed and courage.",
    poster: "/images/top-pilot.png"
  },

  // THRILLER
  {
    id: 6,
    title: "The Silence of the Sheep",
    genre: "Thriller",
    year: 1991,
    description: "An FBI trainee seeks help from a brilliant but terrifying prisoner.",
    poster: "/images/silence-of-the-sheep.png"
  },
  {
    id: 7,
    title: "Closed Island",
    genre: "Thriller",
    year: 2010,
    description: "A detective investigates a mysterious disappearance on a remote island.",
    poster: "/images/closed-island.png"
  },
  {
    id: 8,
    title: "Six",
    genre: "Thriller",
    year: 1995,
    description: "Two detectives hunt a serial killer inspired by the deadly sins.",
    poster: "/images/six.png"
  },
  {
    id: 9,
    title: "Missing Wife",
    genre: "Thriller",
    year: 2014,
    description: "A husband's life turns upside down when his wife mysteriously disappears.",
    poster: "/images/missing-wife.png"
  },
  {
    id: 10,
    title: "The Seventh Sense",
    genre: "Thriller",
    year: 1999,
    description: "A young boy claims to see things that others cannot.",
    poster: "/images/seventh-sense.png"
  },

  // COMEDY
  {
    id: 11,
    title: "House Alone",
    genre: "Comedy",
    year: 1990,
    description: "A kid gets left behind and defends his home from burglars.",
    poster: "/images/house-alone.png"
  },
  {
    id: 12,
    title: "The Morning After",
    genre: "Comedy",
    year: 2009,
    description: "Three friends wake up after a wild night with no memory of what happened.",
    poster: "/images/morning-after.png"
  },
  {
    id: 13,
    title: "Yesterday Again",
    genre: "Comedy",
    year: 1993,
    description: "A man finds himself repeating the same day over and over.",
    poster: "/images/yesterday-again.png"
  },
  {
    id: 14,
    title: "Silly and Sillier",
    genre: "Comedy",
    year: 1994,
    description: "Two not-so-bright friends embark on an unforgettable road trip.",
    poster: "/images/silly-and-sillier.png"
  },
  {
    id: 15,
    title: "Mr. Doubtful",
    genre: "Comedy",
    year: 1993,
    description: "A father disguises himself to spend more time with his children.",
    poster: "/images/mr-doubtful.png"
  },

  // DRAMA
  {
    id: 16,
    title: "The Shawshank Escape",
    genre: "Drama",
    year: 1994,
    description: "A banker sentenced to prison finds hope and friendship behind bars.",
    poster: "/images/shawshank-escape.png"
  },
  {
    id: 17,
    title: "Forest Jump",
    genre: "Drama",
    year: 1994,
    description: "A kind-hearted man unexpectedly becomes part of major historical events.",
    poster: "/images/forest-jump.png"
  },
  {
    id: 18,
    title: "The Green Road",
    genre: "Drama",
    year: 1999,
    description: "A prison guard encounters an inmate with an extraordinary gift.",
    poster: "/images/green-road.png"
  },
  {
    id: 19,
    title: "Atlantic",
    genre: "Drama",
    year: 1997,
    description: "A tragic love story unfolds aboard a legendary ocean liner.",
    poster: "/images/atlantic.png"
  },
  {
    id: 20,
    title: "The Search for Happiness",
    genre: "Drama",
    year: 2006,
    description: "A struggling father fights to build a better life for himself and his son.",
    poster: "/images/search-for-happiness.png"
  }
];



const CORE_CONCEPTS = [
  {
    img: componentsImg,
    title: 'Components',
    desc:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    img: jsxImg,
    title: 'JSX',
    desc:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    img: propsImg,
    title: 'Props',
    desc:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    img: stateImg,
    title: 'State',
    desc:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  }
];
export default CORE_CONCEPTS;
import MarshallEmberton from '../Assets/Images/SpeakersImages/marshall-emberton.jpg';
import JBLIRX115S from '../Assets/Images/SpeakersImages/JBL-IRX115S.png';
import YamahaS215V from '../Assets/Images/SpeakersImages/yamaha-s215v-concert-club-series-carpeted-dual-15-inch-two-way-loudspeaker.jpg';

// Photo resolution for products is 1600x1600.
const speakersData = [
  {
    productName: 'EMBERTON',
    productId: 'marshall-emberton',
    category: 'speakers',
    price: 199,
    currency: 'USD',
    productPhoto: MarshallEmberton,
  },
  {
    productName: 'IRX115 S',
    productId: 'jbl-irx115s',
    category: 'speakers',
    price: 1299,
    currency: 'USD',
    productPhoto: JBLIRX115S,
  },
  {
    productName: 'S215V Dual 15"',
    productId: 'yamaha-s215v-dual-15',
    category: 'speakers',
    price: 719,
    currency: 'USD',
    productPhoto: YamahaS215V,
  },
];

const getSpeakers = () => speakersData;

export default getSpeakers;

import BetronS2 from '../Assets/Images/HeadphonesImages/betronS2.jpg';
import BeyerDynamicDT770PRO from '../Assets/Images/HeadphonesImages/BeyerDynamicDT770PRO.jpg';
import SennheiserHD800S from '../Assets/Images/HeadphonesImages/sennheiserHD800S.jpg';

// Photo resolution for products is 1600x1600.
const headphonesData = [
  {
    productName: 'S2',
    productId: 'betron-s2',
    category: 'headphones',
    price: 59,
    currency: 'USD',
    productPhoto: BetronS2,
  },
  {
    productName: 'DT 770 PRO',
    productId: 'beyerdynamic-dt-770-pro',
    category: 'headphones',
    price: 179,
    currency: 'USD',
    productPhoto: BeyerDynamicDT770PRO,
  },
  {
    productName: 'HD 800 S',
    productId: 'sennheiser-hd800s',
    category: 'headphones',
    price: 1799,
    currency: 'USD',
    productPhoto: SennheiserHD800S,
  },
];

const getHeadphones = () => headphonesData;

export default getHeadphones;

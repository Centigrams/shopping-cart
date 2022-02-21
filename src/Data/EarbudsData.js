import SennheiserMomentumTW2 from '../Assets/Images/EarbudsImages/sennheiser-momentum-true-wireless-2-premium-in-ear.jpg';
import JBLVibe200TWS from '../Assets/Images/EarbudsImages/LD0005912976_1.jpg';
import SonyWF1000XM4 from '../Assets/Images/EarbudsImages/sony-wf-1000xm4.jpg';

// Photo resolution for products is 1600x1600.
const earbudsData = [
  {
    productName: 'MOMENTUM TW2',
    productId: 'sennheiser-momentum-tw2',
    price: 219,
    currency: 'USD',
    productPhoto: SennheiserMomentumTW2,
  },
  {
    productName: 'VIBE 200TWS',
    productId: 'jbl-vibe-200-tws',
    price: 129,
    currency: 'USD',
    productPhoto: JBLVibe200TWS,
  },
  {
    productName: 'WF 1000XM4',
    productId: 'sony-wf-1000xm4',
    price: 319,
    currency: 'USD',
    productPhoto: SonyWF1000XM4,
  },
];

const getEarbuds = () => earbudsData;

export default getEarbuds;

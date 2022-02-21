import React from 'react';
import SectionPhotoHeader from './SectionPhotoHeader';
import HeaderPhoto from '../../Assets/Images/eran-menashri-Odq8y1_BtE8-unsplash.jpg';
import SectionProductSelection from './SectionProductSelection';
import getEarbuds from '../../Data/EarbudsData';

function Earbuds() {
  const photoSectionTextHeader = 'EARBUDS';
  const earbudsData = getEarbuds();
  return (
    <div>
      <SectionPhotoHeader
        textColorObject={{ color: 'white' }}
        headerPhoto={HeaderPhoto}
        textHeader={photoSectionTextHeader}
      />
      <SectionProductSelection inventoryData={earbudsData} />
    </div>
  );
}

export default Earbuds;

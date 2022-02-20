import React from 'react';
import SectionPhotoHeader from './SectionPhotoHeader';
import HeaderPhoto from '../../Assets/Images/kal-visuals-tBne8kdxzbc-unsplash.jpg';
import SectionProductSelection from './SectionProductSelection';
import getHeadphones from '../../Data/HeadphonesData';

function Headphones() {
  const photoSectionTextHeader = 'HEADPHONES';
  const headphonesData = getHeadphones();
  return (
    <div>
      <SectionPhotoHeader
        textColorObject={{ color: 'white' }}
        headerPhoto={HeaderPhoto}
        textHeader={photoSectionTextHeader}
      />
      <SectionProductSelection inventoryData={headphonesData} />
    </div>
  );
}

export default Headphones;

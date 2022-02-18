import React from 'react';
import SectionPhotoHeader from './SectionPhotoHeader';
import HeaderPhoto from '../../Assets/Images/kal-visuals-tBne8kdxzbc-unsplash.jpg';
import SectionProductSelection from './SectionProductSelection';
// import getHeadphones from '../../Data/HeadphonesData';

function Headphones() {
  const photoSectionTextHeader = 'HEADPHONES';
  // const allHeadphones = getHeadphones();
  return (
    <div>
      <SectionPhotoHeader
        textColorObject={{ color: 'white' }}
        headerPhoto={HeaderPhoto}
        textHeader={photoSectionTextHeader}
      />
      <SectionProductSelection />
    </div>
  );
}

export default Headphones;

import React from 'react';
import SectionPhotoHeader from '../SectionPhotoHeader';
import HeaderPhoto from '../../Assets/Images/kal-visuals-tBne8kdxzbc-unsplash.jpg';

function Headphones() {
  const photoSectionTextHeader = 'HEADPHONES';
  return (
    <div>
      <SectionPhotoHeader textColorObject={{ color: 'white' }} headerPhoto={HeaderPhoto} textHeader={photoSectionTextHeader} />
    </div>
  );
}

export default Headphones;

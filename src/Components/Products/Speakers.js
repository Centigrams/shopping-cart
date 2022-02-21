import React from 'react';
import SectionPhotoHeader from './SectionPhotoHeader';
import HeaderPhoto from '../../Assets/Images/john-fornander-yvs7ZH3AZNM-unsplash.jpg';
import SectionProductSelection from './SectionProductSelection';
import getSpeakers from '../../Data/SpeakersData';

function Speakers() {
  const photoSectionTextHeader = 'SPEAKERS';
  const speakersData = getSpeakers();
  return (
    <div>
      <SectionPhotoHeader
        textColorObject={{ color: 'white' }}
        headerPhoto={HeaderPhoto}
        textHeader={photoSectionTextHeader}
      />
      <SectionProductSelection inventoryData={speakersData} />
    </div>
  );
}

export default Speakers;

import React from 'react';
import {
  Button,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import PreviewCardMedia from '../../Styles/CustomComponents/ProductPreviewCard/PreviewCardMedia';
import PreviewCardContent from '../../Styles/CustomComponents/ProductPreviewCard/PreviewCardContent';
import PreviewModelName from '../../Styles/CustomComponents/ProductPreviewCard/PreviewModelName';
import CustomProductPreview from '../../Styles/CustomComponents/ProductPreviewCard/CustomProductPreview';
import BetronS2 from '../../Assets/Images/HeadphonesImages/betronS2.jpg';
import PreviewPrice from '../../Styles/CustomComponents/ProductPreviewCard/PreviewPrice';

// Component for individual products sold.
function ProductPreview() {
  return (
    <CustomProductPreview>
      <PreviewCardMedia
        component="img"
        image={BetronS2}
      />
      <PreviewCardContent>
        <PreviewModelName
          variant="h4"
          component="div"
        >
          S2
        </PreviewModelName>
        <PreviewPrice
          variant="h6"
        >
          $49.99
        </PreviewPrice>
        <Button variant="contained" endIcon={<AddShoppingCart />} color="secondary">
          Add to Cart
        </Button>
      </PreviewCardContent>
    </CustomProductPreview>
  );
}

export default ProductPreview;

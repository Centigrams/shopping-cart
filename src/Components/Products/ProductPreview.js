import React from 'react';
import {
  Button,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import PreviewCardMedia from '../../Styles/CustomComponents/ProductPreviewCard/PreviewCardMedia';
import PreviewCardContent from '../../Styles/CustomComponents/ProductPreviewCard/PreviewCardContent';
import PreviewModelName from '../../Styles/CustomComponents/ProductPreviewCard/PreviewModelName';
import CustomProductPreview from '../../Styles/CustomComponents/ProductPreviewCard/CustomProductPreview';
import PreviewPrice from '../../Styles/CustomComponents/ProductPreviewCard/PreviewPrice';

// Component for individual products sold.
function ProductPreview({
  productName,
  productPhoto,
  price,
}) {
  return (
    <CustomProductPreview>
      <PreviewCardMedia
        component="img"
        image={productPhoto}
      />
      <PreviewCardContent>
        <PreviewModelName
          variant="h5"
          component="div"
        >
          {productName}
        </PreviewModelName>
        <PreviewPrice
          variant="h6"
        >
          $
          {price}
        </PreviewPrice>
        <Button variant="contained" endIcon={<AddShoppingCart />} color="secondary">
          Add to Cart
        </Button>
      </PreviewCardContent>
    </CustomProductPreview>
  );
}

export default ProductPreview;

import { styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppTheme from '../AppTheme';

const CustomShoppingCartIcon = styled(ShoppingCartIcon)({
  color: AppTheme.palette.primary.contrastText,
});

export default CustomShoppingCartIcon;

import { styled, AppBar } from '@mui/material';

const CustomAppBar = styled(AppBar)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.8rem',
  position: 'sticky',
});

export default CustomAppBar;

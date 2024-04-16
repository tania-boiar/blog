import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { alpha, InputBase, Button, Box, Grid, Typography, styled } from '@mui/material';

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#4C6FFF',
          height: '55px',
          textTransform: 'none',
          fontWeight: '500',
          boxShadow: 'none',
        },
        outlined: {
          color: '#6F7C8B',
          textTransform: 'none',
          border: '1px solid #C4C4C4',
          height: '38px',
        },
      },
    },
  },
});

export const CustomLink = styled(NavLink)({
  color: '#4C6FFF',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    color: '#4C6FFF',
  },
});

export const BreadcrumbLink = styled(NavLink)({
  color: '#fff',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
});

export const StyledSocialButton = styled(Button)({
  border: '1px solid #fff',
  borderRadius: '6px',
  padding: '12px 23px',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
});

export const SpacedButtonsContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  gap: '16px',
});

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const DropZoneContainer = styled(Grid)({
  border: '2px dashed #aaaaaa',
  borderRadius: '5px',
  padding: '20px',
  textAlign: 'center',
  marginTop: '20px',
});

export const FileInput = styled('input')({
  display: 'none',
});

export const StyledTypography = styled(Typography)({
  '& p': {
    color: '#4C6FFF',
    fontWeight: 700,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

export const StyledLabel = styled('label')({
  fontWeight: 500,
});

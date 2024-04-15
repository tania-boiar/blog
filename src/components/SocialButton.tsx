import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const StyledSocialButton = styled(Button)({
  border: "1px solid #fff",
  borderRadius: "6px",
  padding: "12px 23px",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
});

interface SocialButtonProps extends ButtonProps {
  iconSrc: string;
  altText: string;
}

export const SocialButton: React.FC<SocialButtonProps> = ({ iconSrc, altText, ...buttonProps }) => {
  return (
    <StyledSocialButton component="a" {...buttonProps}>
      <img src={iconSrc} alt={altText} />
    </StyledSocialButton>
  );
};


export const SpacedButtonsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});
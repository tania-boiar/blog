import React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { StyledSocialButton } from '../theme';

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

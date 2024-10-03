import { TypographyProps } from "@mui/material";

export interface TypographyWrapperProps extends TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'overline';
    color?: string;
    className?: string; 
  }
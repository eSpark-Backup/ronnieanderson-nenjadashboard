import { Card } from '@mui/material';
import React from 'react';
import { styles } from '../../../utils/styles';



const CardLayout: React.FC<{ children: React.ReactNode, className?: string[] }> = ({ children, className }) => {
  const classes = styles.cardStyles({})
  return (
    <Card className={className ? [classes.cardLayout, ...className].join(" ") : classes.cardLayout}>
      {children}
    </Card>
  );
}

export default CardLayout;
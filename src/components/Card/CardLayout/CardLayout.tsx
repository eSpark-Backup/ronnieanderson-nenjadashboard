import { Card } from '@mui/material';
import React from 'react';



const CardLayout: React.FC<{ children: React.ReactNode, sx?: any }> = ({ children, sx}) => {
  return (
    <Card sx={{ py: 1, borderRadius:"15px",  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', ...sx  }}>
      {children}
    </Card>
  );
}

export default CardLayout;
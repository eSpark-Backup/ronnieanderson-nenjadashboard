import { Box, Typography } from '@mui/material';

const ComparisionHeader = ({ image, heading, size }: {
  image?: string;
  heading?: string;
  size?: string;
}) => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ mr: 1 }}>
          <img src={image} alt="logo" />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: size === 'sm' ? '15px' : '20px',
              fontWeight: 600,
            }}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ComparisionHeader;
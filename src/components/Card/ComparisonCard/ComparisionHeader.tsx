import { Box, Stack, Typography } from '@mui/material';

const ComparisionHeader = ({ image, heading, size }: {
  image?: string;
  heading?: string;
  size?: string;
}) => {
  return (
    <>
      <Stack direction="row" alignItems="center">
        <Box mr={1}>
          <img src={image} alt="logo" />
        </Box>
        <Box>
          <Typography fontSize={size === "sm" ? "15px" : "20px"} fontWeight={600}>
            {heading}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default ComparisionHeader;
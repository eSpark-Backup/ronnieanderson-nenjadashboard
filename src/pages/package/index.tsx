import { Box, Stack, Typography } from '@mui/material';
import { CustomSelector, Table } from '../../components'
import { columns } from '../../columns/package';
import { packageData, packageOptions } from '../../constants';
import { styles } from '../../utils/styles';

const Package = () => {
  const classes = styles.packageStyle();
  return (
    <Box>
      <Box className={classes.packageCard}>
        <Typography color="#fff" variant='h4'>PACKAGE</Typography>
        <Stack mt={5} gap={3} direction={{ xs: "column", md: "row" }} alignItems="center" justifyContent="flex-start">
          <CustomSelector
            className={classes.packageSelect}
            options={packageOptions}
            onChange={(e: any) => console.log(e)}
          />
          <Stack className={classes.dailyCapping} direction="row" alignItems="center" justifyContent="center">
            <Typography p={{ xs: 0.5, md: 2 }} variant="h6">Daily Capping</Typography>
            <Box className={classes.dailyCappingCount}><Typography variant="h6" color="#FFF">$2,000</Typography></Box>
          </Stack>
        </Stack>
      </Box>
      <Box mt={3}>
        <Table
          title="History"
          data={packageData}
          columns={columns()}
          isLoading={false}
          total={40}
        />
      </Box>
    </Box>
  )
}

export default Package
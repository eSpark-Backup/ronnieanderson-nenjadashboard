import { Box } from '@mui/material';
import { Table } from '../../../components'
import { columns } from '../../../columns/income-referral'
import { incomeReferralData } from '../../../constants';

const Referral = () => {
  return (
    <Box>
      <Table
        title="Direct Income"
        data={incomeReferralData}
        columns={columns()}
        isLoading={false}
        total={40}
      />
    </Box>
  )
}

export default Referral
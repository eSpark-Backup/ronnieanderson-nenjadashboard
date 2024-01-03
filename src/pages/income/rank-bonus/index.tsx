import { Box } from '@mui/material';
import { Table } from '../../../components'
import { columns } from '../../../columns/income-rank-bonus';
import { rankBonus } from '../../../constants';

const RankBonus = () => {
  return (
    <Box>
      <Table
        title="Rank Reward"
        data={rankBonus}
        columns={columns()}
        isLoading={false}
        total={40}
      />
    </Box>
  )
}

export default RankBonus
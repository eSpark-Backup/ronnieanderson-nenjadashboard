import { Box } from '@mui/material';
import { Table } from '../../../components'
import { columns } from '../../../columns/income-team-bonus'
import { incomeTeamBonusData } from '../../../constants';

const TeamBonus = () => {
  return (
    <Box>
      <Table
        title="Matching"
        data={incomeTeamBonusData}
        columns={columns()}
        isLoading={false}
        total={40}
      />
    </Box>
  )
}

export default TeamBonus
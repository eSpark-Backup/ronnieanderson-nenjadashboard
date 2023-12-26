import { Box } from '@mui/material';
import { DateRangePicker, Table } from '../../../components'
import { columns } from '../../../columns/team-direct';
import { directTeamData } from '../../../constants';

const Direct = () => {
  return (
    <Box>
      <Table
        title="Direct"
        data={directTeamData}
        rightNode={<DateRangePicker />}
        columns={columns()}
        isLoading={false}
        total={40}
      />
    </Box>
  )
}

export default Direct
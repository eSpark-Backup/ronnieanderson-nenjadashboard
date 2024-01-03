import { Box } from '@mui/material'
import React from 'react'
import { Table } from '../../../components'
import { dailyPackageProfitData } from '../../../constants'
import { columns } from '../../../columns/daily-package-profit'

const DailyPackageProfit = () => {
    return (
        <Box>
            <Table title='Daily Package Profit' data={dailyPackageProfitData} columns={columns()} isLoading={false}
                total={40} />
        </Box>
    )
}

export default DailyPackageProfit

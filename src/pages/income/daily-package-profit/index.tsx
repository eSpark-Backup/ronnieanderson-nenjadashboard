import { Box } from '@mui/material'
import { useState, useEffect } from 'react'
import { Table } from '../../../components'
import { dailyPackageProfitData } from '../../../constants'
import { columns } from '../../../columns/daily-package-profit'

const DailyPackageProfit = () => {
    const [width, setWidth] = useState("500px");
    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth >= 600 ? "500px" : "0px"));
        return () => {
            window.removeEventListener('resize', () => setWidth(window.innerWidth >= 600 ? "500px" : "0px"));
        };
    }, []);
    return (
        <Box>
            <Table
                title='Daily Package Profit'
                data={dailyPackageProfitData}
                columns={columns(width)}
                isLoading={false}
                total={40}
            />
        </Box>
    )
}

export default DailyPackageProfit

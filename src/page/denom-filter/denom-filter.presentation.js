import React, { useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { BILL_DETAILS } from '../../constant';

const DenomFilterPage = () => {
  const [minimumDenom, setMinimumDenom] = useState(100000);

  const { billdetails } = BILL_DETAILS.data.response;
  const filteredBillDetail = billdetails.reduce((prev, curr) => {
    const [denom] = curr.body;  
    const denomInNumber = Number(denom.replace(/\D+/g, ''))
    if (denomInNumber >= minimumDenom) {
      if (prev) {
        return [...prev, denomInNumber]
      } 
      return [denomInNumber]  
    }
  }, []);

  return (
    <Box sx={{flexDirection: 'row', display: 'flex'}}>
      <Box sx={{ p: 2, border: '1px dashed grey', width: '60%' }}>
        <Typography>Raw Bill Details</Typography>
        <pre style={{ mt:2, textAlign: 'left' }}>{JSON.stringify(BILL_DETAILS, null, 1)}</pre>
      </Box>
      <Box sx={{ p: 2, border: '1px dashed grey', width: '40%' }}>
      <Typography>Filter Bill Details</Typography>
      <FormControl fullWidth sx={{ mt:2 }}>
        <InputLabel id="demo-simple-select-label">Minimum Denom</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={minimumDenom}
            label="Minimum Denom"
            onChange={(e) => setMinimumDenom(e.target.value)}
          >
            <MenuItem value={50000}>50000</MenuItem>
            <MenuItem value={100000}>100000</MenuItem>
            <MenuItem value={150000}>150000</MenuItem>
          </Select>
        </FormControl>
        <pre>{JSON.stringify(filteredBillDetail)}</pre>
      </Box>
    </Box>
  )
}

export default DenomFilterPage;

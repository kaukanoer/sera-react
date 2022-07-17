/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Box, CircularProgress, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow,
} from '@mui/material';

const MainPage = ({ 
  blogs, onLogoutPressed, onAppear,
  downloadingBlogs,
}) => {
  useEffect(onAppear, [])

  const headCells = [
    'No',
    'Title',
    'Description',
  ]

  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        {headCells.map(item => <TableCell key={item}>{item}</TableCell>)}
      </TableRow>
    </TableHead>
  )

  const renderTabBody = () => {
    if(downloadingBlogs) {
      return (
        <CircularProgress />
      )
    }
    return (
      <TableBody>
        {blogs.map((blog, index) => (
          <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{blog.title}</TableCell>
            <TableCell>{blog.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    )
  }

  return (
    <Box>
      <TableContainer
        sx={{
          width: '100%',
          overflowX: 'auto',
          position: 'relative',
          display: 'block',
          maxWidth: '100%',
          '& td, & th': { whiteSpace: 'nowrap' }
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            '& .MuiTableCell-root:first-child': { pl: 2 },
            '& .MuiTableCell-root:last-child': { pr: 3 }
          }}
        >
          {renderTableHead()}
          {renderTabBody()}
        </Table>
      </TableContainer>
    </Box>
  )
}
export default MainPage;
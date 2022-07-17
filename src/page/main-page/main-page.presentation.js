/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Box, LinearProgress, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, 
} from '@mui/material';
import { Button } from '../../component';
import { useNavigate } from 'react-router-dom';

const MainPage = ({ 
  blogs, onAddBlogPressed, onAppear,
  downloadingBlogs,
}) => {
  const navigate = useNavigate();
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

  const renderTabBody = () => (
    <TableBody>
      {!!blogs && blogs.map((blog, index) => (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={blog.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{blog.title}</TableCell>
          <TableCell>{blog.description}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )

  return (
    <Box sx={{ mt: 1}}>
      <Box sz={{ marginTop: 8 }}>
        <Button 
          caption='Add New Blog' 
          variant="outlined" 
          onPress={() => onAddBlogPressed(navigate)}
        />
      </Box>
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
        {downloadingBlogs ? (
          <Box sx={{ width: '100%' }}>
            <LinearProgress size={16} />
          </Box>
        ) : (<></>)}
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
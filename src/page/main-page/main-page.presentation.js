/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import {
  Box, LinearProgress, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow,
} from '@mui/material';
import { Button, Dialog, TextField } from '../../component';
import { useNavigate } from 'react-router-dom';
import { FIELD_BLOG_DESCRIPTION, FIELD_BLOG_TITLE, MAX_DESCRIPTION_LENGTH, TABLE_HEADER_ARR } from '../../constant';

const MainPage = ({ 
  blogs, onAddBlogPressed, onAppear, detailDialogVisibility,
  downloadingBlogs, onViewPressed, onCloseDialogPressed,
  selectedBlog, onEditPressed,
}) => {
  const navigate = useNavigate();
  useEffect(onAppear, [])

  const renderDialog = () => (
    <Dialog visibility={detailDialogVisibility} onClosePressed={onCloseDialogPressed}>
      <TextField
        name={FIELD_BLOG_TITLE}
        label="Title"
        defaultValue={selectedBlog?.title}
        disabled
      />
      <TextField
        name={FIELD_BLOG_DESCRIPTION}
        label="Description"
        defaultValue={selectedBlog?.description}
        multiline
        disabled
      />
      <Button 
        caption='Edit'
        variant="contained"
        onPress={() => onEditPressed(navigate)}
        fullWidth
      />
      <Button 
        caption='Delete' 
        variant="outlined"
        onPress={() => {}}
        color='error'
        fullWidth
      />
    </Dialog>
  )

  const renderTableHead = () => (
    <TableHead>
      <TableRow>
        {TABLE_HEADER_ARR.map(item => <TableCell key={item}>{item}</TableCell>)}
      </TableRow>
    </TableHead>
  )

  const renderTabBody = () => (
    <TableBody>
      {!!blogs && blogs.map((blog, index) => {
        const sortedDesc = blog.description?.length > MAX_DESCRIPTION_LENGTH 
        ? `${blog.description.substring(0, MAX_DESCRIPTION_LENGTH)}...`
        : blog.description
        return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={blog.id}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{blog.title}</TableCell>
          <TableCell>{sortedDesc}</TableCell>
          <TableCell>
            <Button 
              caption='View' 
              variant="text"
              onPress={() => onViewPressed(blog)}
            />
          </TableCell>
        </TableRow>
      )})}
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
          {renderDialog()}
          {renderTableHead()}
          {renderTabBody()}
        </Table>
      </TableContainer>
    </Box>
  )
}
export default MainPage;
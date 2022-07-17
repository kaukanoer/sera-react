import React from 'react';
import {
  Box, Typography, Container,
} from '@mui/material';
import { Button, TextField } from '../../component';
import { FIELD_BLOG_TITLE, FIELD_BLOG_DESCRIPTION } from '../../constant';
import { useNavigate } from 'react-router-dom';

const AddEditBlogPage = ({ tappedId, addingEditing, onSubmit, selectedBlog }) => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = data.get(FIELD_BLOG_TITLE);
    const description = data.get(FIELD_BLOG_DESCRIPTION);
    onSubmit(title, description, navigate)
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        component="form" onSubmit={handleSubmit}
        sx={{
          mt: 12,
          padding: 4,
          boxShadow: 2,
          borderRadius: 2,
        }}
      > 
        <Typography variant="h6" component="div">
          {tappedId ? "Edit Blog" : "Add New Blog"}
        </Typography>
          <TextField
            name={FIELD_BLOG_TITLE}
            label="Title"
            defaultValue={tappedId ? selectedBlog.title : null}
            required
          />
          <TextField
            name={FIELD_BLOG_DESCRIPTION}
            label="Description"
            defaultValue={tappedId ? selectedBlog.description : null}
            multiline
            rows={6}
            required
          />
          <Button
            type="submit"
            caption={tappedId ? "Save" : "Submit"}
            loading={addingEditing}
            fullWidth
          />
        </Box>
    </Container>
  )
}

export default AddEditBlogPage;

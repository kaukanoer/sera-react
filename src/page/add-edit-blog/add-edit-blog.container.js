import { connect } from 'react-redux';
import { addEditBlogAsync, displayErrorMessage } from '../../redux/action';
import AddEditBlogPage from './add-edit-blog.presentation'

const mapStateToProps = state => ({
  tappedId: state.uiBlog.selectedBlog?.id,
  selectedBlog: state.uiBlog.selectedBlog,
  addingEditing: state.uiBlog.addingEditing,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, description, navigate) => { 
    try {
      dispatch(addEditBlogAsync(title, description, navigate))
    } catch (err) {
      dispatch(displayErrorMessage(err.message));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditBlogPage)

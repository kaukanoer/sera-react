import { connect } from 'react-redux';
import { FIELD_BLOG_DESCRIPTION, FIELD_BLOG_TITLE } from '../../constant';
import { addEditBlogAsync, displayErrorMessage } from '../../redux/action';
import AddEditBlogPage from './add-edit-blog.presentation'

const mapStateToProps = state => ({
  tappedId: state.uiBlog.tappedId,
  addingEditing: state.uiBlog.addingEditing,
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (title, description, navigate) => { 
    try {
      dispatch(addEditBlogAsync(title, description, navigate))
      .catch( err => dispatch(displayErrorMessage(err.message)));
    } catch (err) {
    }

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditBlogPage)

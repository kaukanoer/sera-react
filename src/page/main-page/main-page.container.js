import { connect } from 'react-redux';
import { ROUTE_NAME_ADD_EDIT } from '../../constant';
import { downloadBlogsAsync, displayErrorMessage, showBlogDetailDialogVisibility, setSelectedBlog, deleteBlogAsync } from '../../redux/action';
import MainPage from './main-page.presentation'

const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
  blogs: state.blogs,
  downloadingBlogs: state.uiBlog.downloading,
  detailDialogVisibility: state.uiBlog.detailDialogVisibility,
  selectedBlog: state.uiBlog.selectedBlog,
  deleting: state.uiBlog.deleting,
})

const mapDispatchToProps = (dispatch) => ({
  onAppear: () => {
    dispatch(downloadBlogsAsync())
      .catch((err) => dispatch(displayErrorMessage(err.message)))
  },
  onAddBlogPressed: (navigate) => {
    dispatch(setSelectedBlog(null))
    navigate(`..${ROUTE_NAME_ADD_EDIT}`, { replace: true });
  },
  onEditPressed: (navigate) => {
    navigate(`..${ROUTE_NAME_ADD_EDIT}`, { replace: true });
    dispatch(showBlogDetailDialogVisibility(false));
  },
  onViewPressed: (obj) => {
    dispatch(showBlogDetailDialogVisibility(true));
    dispatch(setSelectedBlog(obj))
  },
  onCloseDialogPressed: () => {
    dispatch(showBlogDetailDialogVisibility(false));
  },
  onDeleteBlogPressed: () => {
    try {
      dispatch(deleteBlogAsync())
    } catch (err) {
      dispatch(displayErrorMessage(err.message))
    }
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(MainPage);

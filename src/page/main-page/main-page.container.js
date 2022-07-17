import { connect } from 'react-redux';
import { ROUTE_NAME_ADD_EDIT } from '../../constant';
import { downloadBlogsAsync, displayErrorMessage } from '../../redux/action';
import MainPage from './main-page.presentation'

const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
  blogs: state.blogs,
  downloadingBlogs: state.uiBlog.downloading,
})

const mapDispatchToProps = (dispatch) => ({
  onAppear: () => {
    dispatch(downloadBlogsAsync())
    .catch((err) => dispatch(displayErrorMessage(err.message)))
  },
  onAddBlogPressed: (navigate) => {
    navigate(`..${ROUTE_NAME_ADD_EDIT}`, { replace: true });
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(MainPage);

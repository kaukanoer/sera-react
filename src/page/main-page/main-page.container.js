import { connect } from 'react-redux';
import { setToken, downloadBlogsAsync, displayErrorMessage } from '../../redux/action';
import MainPage from './main-page.presentation'

export const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
  blogs: state.blogs,
  downloadingBlogs: state.uiBlog.downloading,
})

export const mapDispatchToProps = (dispatch) => ({
  onAppear: () => {
    dispatch(downloadBlogsAsync())
    .catch((err) => dispatch(displayErrorMessage(err.message)))
  },
  onLogoutPressed: () => {
    dispatch(setToken(''))
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(MainPage);

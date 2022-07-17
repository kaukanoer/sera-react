import { connect } from 'react-redux';
import { displayErrorMessage, loginAsync } from '../../redux/action';
import LoginPage from './login.presentation';

const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
  loggingIn: state.uiLoginRegister.loggingIn,
})

const mapDispatchToProps = (dispatch) => ({
  onLoginPressed: async (email, password, navigate) => {
    try {
      await dispatch(loginAsync(email, password, navigate));
    } catch (err) {
      dispatch(displayErrorMessage(err.message))
    }
  }
});

export default  connect(mapStateToProps, mapDispatchToProps)(LoginPage);

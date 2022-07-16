import { connect } from 'react-redux';
import { loginAsync } from '../../redux/action';
import LoginPage from './login.presentation';

export const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
  loggingIn: state.uiLogin.loggingIn,
})

export const mapDispatchToProps = (dispatch) => ({
  onLoginPressed: async (navigate) => {
    try {
      await dispatch(loginAsync());
      navigate('../main', { replace: true });
    } catch (err) {
      console.log('err: ', err)
    }
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(LoginPage);

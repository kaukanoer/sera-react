import { connect } from 'react-redux';
import { displayErrorMessage, registerAsync } from '../../redux/action';
import RegisterPage from './register.presentation';

const mapStateToProps = state => ({
  registering: state.uiLoginRegister.registering,
  errorMessage: state.uiLoginRegister.errorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  onRegisterPressed: async (email, password, navigate) => {
    try {
      await dispatch(registerAsync(email, password, navigate));
    } catch (err) {
      dispatch(displayErrorMessage(err.message))
    }
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

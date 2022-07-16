import { connect } from 'react-redux';
import { setToken } from '../../redux/action';
import MainPage from './main-page.presentation'

export const mapStateToProps = state => ({
  fullName: state.auth.fullName,
  token: state.auth.token,
})

export const mapDispatchToProps = (dispatch) => ({
  onButtonPressed: (text) => {
    dispatch(setToken(text))
  }
});


export default  connect(mapStateToProps, mapDispatchToProps)(MainPage);

import { Button as Btn, CircularProgress} from "@mui/material";
import PropTypes from 'prop-types';

const Button = ({
  caption, onPress, type, loading, disabled,
  fullWidth, variant, ...props
}) => {
  if (loading) {
    return (
      <CircularProgress size={24}  style={{ marginTop: 14 }}/>
    )
  }
  return (
    <Btn 
      variant={variant}
      onClick={onPress}
      sx={{ mt: 3, mb: 2 }}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
      style={{ marginTop: 14 }}
      {...props}
    >
      {caption}
    </Btn>
  )
}

export default Button;

Button.propTypes = {
  caption: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  caption: '',
  onPress: () => {},
  type: 'submit',
  variant: 'contained',
  loading: false,
  disabled: false,
  fullWidth: false,
}
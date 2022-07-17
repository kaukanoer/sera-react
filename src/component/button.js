import { Button as Btn, CircularProgress} from "@mui/material";

const Button = ({
  caption, onPress, type, loading, disabled,
  fullWidth,
}) => {
  if (loading) {
    return (
      <CircularProgress size={24}  style={{ marginTop: 14 }}/>
    )
  }
  return (
    <Btn 
      variant="contained"
      onClick={onPress}
      sx={{ mt: 3, mb: 2 }}
      fullWidth={fullWidth}
      type={type}
      disabled={disabled}
      style={{ marginTop: 14 }}
    >
      {caption}
    </Btn>
  )
}

export default Button;
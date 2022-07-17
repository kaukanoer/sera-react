import { TextField as TxtField } from "@mui/material";

const TextField = ({
  id, autoComplete, label, name, required, type,
  helperText, error, onChangeText,
}) => (
  <TxtField
    margin="normal"
    required={required}
    fullWidth
    id={id}
    label={label}
    name={name}
    autoComplete={autoComplete}
    type={type}
    helperText={helperText}
    autoFocus
    error={error}
    onChange={onChangeText}
  />
)

export default TextField;
import { InputHTMLAttributes } from "react";
import './Input.scss';

export interface InputProps extends InputHTMLAttributes<any> {
  useStyle?: boolean;
  ref?: any;
}

const Input = ({
  value,
  type,
  id,
  onChange,
  onFocus,
  onKeyPress,
  onKeyUp,
  className,
  name,
  placeholder,
  defaultChecked,
  useStyle,
  checked,
  onClick,
  ref,
  required,
  ...props
}: InputProps): JSX.Element => {
  return (
    <>
      <input
        type={type}
        id={id}
        className={className}
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        onKeyPress={onKeyPress}
        onKeyUp={onKeyUp}
        checked={checked}
        ref={ref}
        onClick={onClick}
        required={required}
        {...props}
      />
    </>
  );
};

export default Input;

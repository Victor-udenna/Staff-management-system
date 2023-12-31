import buttonLoaderImg from '../../../assets/loading_1.gif'

type ButtonProps = {
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  classname: string
  isLoading?: boolean
  buttonType?: React.ButtonHTMLAttributes<HTMLButtonElement> | any
}

export const Button: React.FC<ButtonProps> = ({
  value,
  onClick,
  classname,
  buttonType, // Use the new name here
  isLoading,
}: ButtonProps) => {
  return (
    <button className={classname} type={buttonType} onClick={onClick}>
      {isLoading ? (
        <img width={15} src={buttonLoaderImg} alt="Loading" />
      ) : (
        value
      )}
    </button>
  )
}

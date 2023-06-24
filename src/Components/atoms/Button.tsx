

type button = {
    value: string
    onclick: React.MouseEventHandler<HTMLButtonElement>
    classname: string
}

export const Button = ({value, onclick, classname}: button) => {
  return (
    <button className={classname} onClick={onclick}>{value}</button>
  )
}

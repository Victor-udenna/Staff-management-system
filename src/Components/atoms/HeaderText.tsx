type headerTextprop = {
    value: string
    onclick: React.MouseEventHandler<HTMLParagraphElement>
    classname: string
}

const HeaderText = ({value, onclick, classname}: headerTextprop) => {
  return (
    <p className={classname} onClick={onclick}>
    {value}
    </p>
  )
}

export default HeaderText;



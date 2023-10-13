type Text = {
    value: any
    onclick?: React.MouseEventHandler<HTMLParagraphElement>
    classname: string
}

const Text = ({value, onclick, classname}: Text) => {
  return (
    <p className={classname} onClick={onclick}>
    {value}
    </p>
  )
}

export default Text
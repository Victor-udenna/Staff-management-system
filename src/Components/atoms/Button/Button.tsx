import buttonLoaderImg from "../../../assets/loading_1.gif";

type button = {
    value: string
    onclick?: React.MouseEventHandler<HTMLButtonElement>
    classname: string
    isloading?: boolean
}

export const Button = ({value, onclick, classname, isloading}: button) => {
  return (
    <button className={classname} onClick={onclick}>{ isloading ? <img width={15} src={buttonLoaderImg}/> : value}</button>
  )
}

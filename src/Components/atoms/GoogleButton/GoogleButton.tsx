import './GoogleButton.scss'
import googleImg from '../../../assets/icons8-google.svg'
import loadingImg from '../../../assets/loading_1.gif'

type googleButtonProp = {
  onclick: React.MouseEventHandler<HTMLButtonElement> | undefined
  value: string
  isloading?: boolean
}

const GoogleButton = ({ onclick, value, isloading }: googleButtonProp) => {
  return (
    <button className="google_btn" onClick={onclick}>
      {isloading ? (
        <img alt="gif" width="20px" src={loadingImg} />
      ) : (
        <>
          <img alt="icon" className="" src={googleImg} />
          <span>{value}</span>
        </>
      )}
    </button>
  )
}

export default GoogleButton

import { useEffect, useState } from 'react'
import './Login.scss'
import Input from '../../atoms/Input/Input'
import Image from '../../atoms/Image/Image'
import bgImg from '../../../assets/undraw_sign_in_re_o58h.svg'
import { Button } from '../../atoms/Button/Button'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import { Link } from 'react-router-dom'
import GoogleButton from '../../atoms/GoogleButton/GoogleButton'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { auth, googleProvider } from '../../../Config/firebase-config'
import PopupNotification from '../../Molecule/PopupNotification/PopupNotification'
import { AuthUser } from '../../../Config/Authvariable'
import { useDispatch } from 'react-redux'
import { saveAuth } from '../../../redux/actions/SaveAction'
import { TypedDispatch } from '../../../Config/configstore'
import Text from '../../atoms/Text/Text'

const Login = () => {
  const navigate = useNavigate()
  const dispatch: TypedDispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [iserrorPopup, setErrorPopUp] = useState<boolean>(false)
  const [isuccessPopup, setisSuccesspopUP] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const [isclicked, setisClicked] = useState<boolean>(false)
  const [showpassword, setShowpassword] = useState<string>('password')
  const [showpasswordtext, setshowpasswordText] =
    useState<string>('show password')
  const [isloading, setisloading] = useState<boolean>(false)

  let errorMessage
  const AuthVariable = AuthUser

  const saveAuthState = async () => {
    if (auth.currentUser) {
      await dispatch(saveAuth(auth.currentUser))
    }
  }

  const loginFunction = async (e: React.FormEvent) => {
    setisClicked(true)
    e.preventDefault()
    await signInWithEmailAndPassword(auth, email, password)
      .then((userdetails) => {
        setisSuccesspopUP(true)
        const user = userdetails
        if (auth !== null) {
          sessionStorage.setItem('authState', JSON.stringify(AuthVariable))
        }
        setTimeout(() => {
          saveAuthState()
          navigate('/dashboard')
        }, 1000)
        user
      })
      .catch((error) => {
        errorMessage = error.message
        if (errorMessage) {
          if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
            setErrorText('Invalid email or password')
          }
          if (
            errorMessage === 'Firebase: Error (auth/missing-password).' ||
            errorMessage === 'Firebase: Error (auth/wrong-password).'
          ) {
            setErrorText('Invalid password')
          }
          if (
            errorMessage === 'Firebase: Error (auth/network-request-failed).'
          ) {
            setErrorText('Network error, try again')
          }
          if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
            setErrorText('Wrong email / password')
          }
          if (
            errorMessage ===
            'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
          ) {
            setErrorText('Account temporarily disabled, Pls try again later')
          }
          setErrorPopUp(!false)
          setisClicked(!true)
        } else {
          setisSuccesspopUP(!false)
          setisClicked(!true)
        }
      })
  }

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setisloading(true)
      if (auth !== null) {
        sessionStorage.setItem('authState', JSON.stringify(AuthVariable))
      }

      setTimeout(() => {
        saveAuthState()
        navigate('/dashboard')
      }, 2000)
    } catch (error) {
      console.log(error)
      setisloading(false)
    }
  }

  const showPasswordFunc = () => {
    if (showpassword == 'password') {
      setShowpassword('text')
      setshowpasswordText('hide password')
    } else {
      setShowpassword('password')
      setshowpasswordText('show password')
    }
  }

  const errorTimeout = () => {
    setInterval(() => {
      setErrorPopUp(false)
    }, 3000)
  }

  const succesTimeout = () => {
    setInterval(() => {
      setisSuccesspopUP(false)
    }, 2000)
  }

  useEffect(() => {
    errorTimeout()
  }, [errorMessage])

  useEffect(() => {
    succesTimeout()
  }, [errorMessage])

  return (
    <main className="signin__container">
      {iserrorPopup && (
        <PopupNotification popuptext={errorText} popuptype={'error'} />
      )}
      {isuccessPopup && (
        <PopupNotification
          popuptype={'success'}
          popuptext={'Log in successful'}
        />
      )}

      <div className="signin__img__container">
        <Image className="signin__img" image={bgImg} alt="bg-image" />
      </div>

      <div className="sign__in__form__container">
        <HeaderText classname="log_in_header" value="Hello Again!" />
        <div className="header_text">
          <p>Welcome back, Enter your information to log into your</p>
          <p> account.</p>
        </div>
        <form className="sign__in__form" onSubmit={loginFunction}>
          <div className="sign_in_input_container">
            <p className="label">Email Adress</p>
            <Input
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className="sign_in_input_container">
            <p className="label">Password</p>
            <Input
              type={showpassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          
     <div role="button" onClick={showPasswordFunc}>
     <Text
            classname="showpassword"
            value={showpasswordtext}
          />
     </div>
          <Button
            classname="sign_in_button"
            isloading={isclicked}
            value="Log in"
          />
          <div className="log__in__link">
            <span>Don't have an account ?</span>{' '}
            <Link to="/signup">
              <span>Sign up here</span>
            </Link>
          </div>
        </form>
        <GoogleButton
          isloading={isloading}
          value="Continue with Google"
          onclick={loginWithGoogle}
        />
      </div>
    </main>
  )
}

export default Login

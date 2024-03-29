import { useState, useEffect } from 'react'
import './Signup.scss'
import Image from '../../atoms/Image/Image'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import Input from '../../atoms/Input/Input'
import { Button } from '../../atoms/Button/Button'
import bgImg from '../../../assets/create_account_img.svg'
import { Link } from 'react-router-dom'
import GoogleButton from '../../atoms/GoogleButton/GoogleButton'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../../../Config/firebase-config'
import { updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import PopupNotification from '../../Molecule/PopupNotification/PopupNotification'
import { AuthUser } from '../../../Config/Authvariable'

const Signup = () => {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
  const [iserrorPopup, setErrorPopUp] = useState<boolean>(false)
  const [isuccessPopup, setisSuccesspopUP] = useState<boolean>(false)
  const [errorText, setErrorText] = useState<string>('')
  const [isclicked, setisClicked] = useState<boolean>(false)
  const [showpassword, setShowpassword] = useState<string>('password')
  const [showpasswordtext, setshowpasswordText] =
    useState<string>('show password')
  const [isloading, setisloading] = useState<boolean>(false)

  const navigate = useNavigate()
  let errorMessage
  const verifyPassword = confirmpassword
  console.log(verifyPassword)

  const AuthVariable = AuthUser

  const createUser = async (e: React.FormEvent) => {
    setisClicked(true)
    e.preventDefault()
    try {
      if (username.length == 0) {
        setErrorPopUp(!false)
        setErrorText('Username cannot be empty')
      } else {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        await updateProfile(user, {
          displayName: username,
        })
        setisSuccesspopUP(!false)
        setTimeout(() => {
          navigate('/')
        }, 1000)
      }
    } catch (error: any) {
      errorMessage = error.message as any

      if (errorMessage) {
        if (
          errorMessage ===
          'Firebase: Password should be at least 6 characters (auth/weak-password).'
        ) {
          setErrorText('Weak password')
        }
        if (errorMessage === 'Firebase: Error (auth/network-request-failed).') {
          setErrorText('Network error, Try again')
        }
        setErrorPopUp(!false)
        setisClicked(!true)
      } else {
        setisSuccesspopUP(!false)
        setisClicked(!true)
      }
    }
  }

  const showPasswordFunc = (e: any) => {
    if (e.target.checked) {
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

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      setisloading(true)
      if (auth !== null) {
        sessionStorage.setItem('authState', JSON.stringify(AuthVariable))
      }
      setTimeout(() => {
        navigate('/dashboard')
      }, 2000)
    } catch (error) {
      console.log(error)
      setisloading(false)
    }
  }

  return (
    <main className="signup__container">
      {iserrorPopup && (
        <PopupNotification popuptype="error" popuptext={errorText} />
      )}
      {isuccessPopup && (
        <PopupNotification
          popuptype="success"
          popuptext={'Account created successfully'}
        />
      )}
      <div className="signup__img__container">
        <Image className="signup__img" image={bgImg} alt="bg-image" />
      </div>
      <div className="sign__up__form__container">
        <HeaderText classname="sign_up_header" value="Create an account" />
        <form className="sign__up__form" onSubmit={createUser}>
          <div className="sign_up_input_container">
            <p className="label">User name</p>
            <Input
              type="text"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value)
              }}
            />
          </div>
          <div className="sign_up_input_container">
            <p className="label">Email Adress</p>
            <Input
              type="email"
              required={true}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="input_sub_container">
            <div className="sign_up_input_container">
              <p className="label">Password</p>
              <Input
                type={showpassword}
                className="password_input"
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value)
                }}
              />
            </div>
            <div className="sign_up_input_container">
              <p className="label"> Confirm Password</p>
              <Input
                type={showpassword}
                className="password_input"
                required={true}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setConfirmpassword(e.target.value)
                }}
              />
            </div>
          </div>

          <div className="show_password">
            <input
              id="show_password"
              type="checkbox"
              onChange={showPasswordFunc}
            />
            <label htmlFor="show_password">{showpasswordtext}</label>
          </div>
          <Button
            classname="sign_up_button"
            isloading={isclicked}
            value="Create Account"
          />
          <div className="log__in__link">
            <span>Already have an account yet ?</span>{' '}
            <Link to="/">
              <span>Log in here</span>
            </Link>
          </div>
        </form>
        <GoogleButton
          isloading={isloading}
          value="Sign up with Google"
          onclick={loginWithGoogle}
        />
      </div>
    </main>
  )
}

export default Signup

import SideBar from '../../Organism/SideBar/Sidebar'
import SettingsStyle from './SettingsStyle'
import Text from '../../atoms/Text/Text'
import { Button } from '../../atoms/Button/Button'
import Image from '../../atoms/Image/Image'
import Input from '../../atoms/Input/Input'
import EmailVerification from '../../Molecule/EmailVerification/EmailVerification'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'

const Settings = () => {
  const state = useSelector((state: RootStore) => state.saveAuthReducer)
  const userName = state.result.data.displayName
  const userImg = state.result.data.photoURL
  const isverified = state.result.data.emailVerified
  const dateCreated = parseInt(state.result.data.createdAt)
  const lastLogin = parseInt(state.result.data.lastLoginAt)

  const userAvatar = `https://ui-avatars.com/api/?name=${userName}+${''}&background=${'228B22'}&color=fff&font-size=${0.33}&bold=${true}`


  const convertTimestampToDate = (timestamp: number) => {
    const date = new Date(timestamp)
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]
    const dayOfWeek = daysOfWeek[date.getUTCDay()]
    const day = date.getUTCDate().toString().padStart(2, '0')
    const month = months[date.getUTCMonth()]
    const year = date.getUTCFullYear()
    const hours = date.getUTCHours().toString().padStart(2, '0')
    const minutes = date.getUTCMinutes().toString().padStart(2, '0')
    const seconds = date.getUTCSeconds().toString().padStart(2, '0')
    const formattedDate = `${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds} GMT`
    return formattedDate
  }




  return (
    <SettingsStyle>
      <main className="container">
        <SideBar />
        <section className="settings">
          <div className="profile__photo__container">
            <Text classname="section__header__text" value="Profile Photo" />
            <div className="profile__photo__wrapper">
              <div className="user__img__container">
                {userImg ? (
                  <Image className="user__img" alt="" image={userImg} />
                ) : (
                  <Image className="user__img" alt="" image={userAvatar} />
                )}
                <div className="status__icon"></div>
              </div>
              <div>
                <Button value="Remove" classname="remove__picture__btn" />
                <Text
                  classname="image__file__size__text"
                  value="Max size of 10MB."
                />
              </div>
            </div>
          </div>

          <div className="personal__information__container">
            <Text
              classname="section__header__text"
              value="Personal Information"
            />

            <form>
              <div className="personal__information__wrapper">
                <div className="input__container">
                  <label htmlFor="display__name">First Name</label>
                  <Input id="displa__name" type="text" />
                </div>
                <div className="input__container">
                  <label htmlFor="email">Last Name</label>
                  <Input className="email" type="text" />
                </div>
                <div className="input__container">
                  <label htmlFor="">Change Email</label>
                  <div className="change__password__container">
                    <Input className="change__password" type="email" />
                    <Button
                      value="Update"
                      classname="change__password__button"
                    />
                  </div>
                  {<EmailVerification isVerified={isverified} />}
                </div>
              </div>
            </form>
          </div>

          <div className="recent__activity__container">
            <Text classname="section__header__text" value="Activity" />
            <div className="recent__activity__sub__container">
              <div className="recent__activity__wrapper">
                <Text classname="recent__activity__title" value="Last Login" />
                <Text
                  classname="recent__activity__text"
                  value={
                    lastLogin ? convertTimestampToDate(lastLogin) : 'loading..'
                  }
                />
              </div>
              <div className="recent__activity__wrapper">
                <Text
                  classname="recent__activity__title"
                  value="Date created"
                />
                <Text
                  classname="recent__activity__text"
                  value={
                    dateCreated
                      ? convertTimestampToDate(dateCreated)
                      : 'loading..'
                  }
                />
              </div>
              <div className="recent__activity__wrapper">
                <Text classname="recent__activity__title" value="Status" />
                <Text classname="recent__activity__text" value="Active" />
              </div>
              <div className="recent__activity__wrapper">
                <Text
                  classname="recent__activity__title"
                  value="Password Updated at"
                />
                <Text classname="recent__activity__text" value="-- -- --" />
              </div>
            </div>
            <div></div>
          </div>

          <form className="security_container_form">
            <div className="security__container">
              <Text classname="section__header__text" value="Security" />
              <div className="personal__information__wrapper">
                <div className="input__container">
                  <label htmlFor="display__name">Old password</label>
                  <Input id="displa__name" type="text" />
                </div>
                <div className="input__container">
                  <label htmlFor="email">New password</label>
                  <Input className="email" type="text" />
                </div>
                <div className="input__container">
                  <label htmlFor="">Confirm New Password</label>

                  <div className="change__password__container">
                    <Input className="change__password" type="email" />
                    <Button
                      value="Update"
                      classname="change__password__button"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="confirm__changes__container">
            <Button classname="revert__changes__btn" value="Revert Changes" />
            <Button classname="save__changes__btn" value="Save" />
          </div>
        </section>
      </main>
    </SettingsStyle>
  )
}

export default Settings

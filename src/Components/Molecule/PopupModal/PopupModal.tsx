import { useState, useEffect } from 'react'
import PopupModalStyle from './PopupModalStyle'
import Image from '../../atoms/Image/Image'
import successGif from '../../../assets/success-animation.gif'
import HeaderText from '../../atoms/HeaderText/HeaderText'
import Text from '../../atoms/Text/Text'

interface PopupModalprop {
    headerText: string
    text: string
}

const PopupModal = ({headerText, text}: PopupModalprop) => {
  const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsOpen(false);
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <PopupModalStyle>
      <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
        <div className="modal-content">
          <div className="gif__container">
            <Image
              className=""
              image={successGif}
              alt=" success icon animation"
            />
          </div>
          <div>
            <HeaderText value={headerText} classname="success__header__text" />
            <Text
              value={text}
              classname="success__text"
            />
          </div>
        </div>
      </div>
    </PopupModalStyle>
  )
}

export default PopupModal

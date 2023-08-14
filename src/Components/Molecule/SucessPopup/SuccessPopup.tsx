import SuccessPopupStyle from "./SuccessPopupstyle";
import {BsCheckCircle} from "react-icons/bs";
import HeaderText from '../../atoms/HeaderText/HeaderText';


type successPopup = {
  text: string,
}

const SuccessPopup = ({text}: successPopup) => {



  return (
   <SuccessPopupStyle>
     <div className='success_pop_up'>
        <div className='icon_container'>
        <BsCheckCircle size={22} />
        </div>
    <div className=''>
<div className='success_pop_up_text_container'>
<HeaderText classname='success_pop_up_headertext' value={text}/>
</div>
    </div>
     </div>
   </SuccessPopupStyle>
  )
}

export default SuccessPopup;
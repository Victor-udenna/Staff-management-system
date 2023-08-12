import SuccessPopupStyle from "./SuccessPopupstyle";
import {BsCheckCircle} from "react-icons/bs";
import HeaderText from '../../atoms/HeaderText/HeaderText';

const SuccessPopup = () => {



  return (
   <SuccessPopupStyle>
     <div className='error_pop_up'>
        <div className='icon_container'>
        <BsCheckCircle size={22} />
        </div>
    <div className=''>
<div className='error_pop_up_text_container'>
<HeaderText classname='error_pop_up_headertext' value='Request successful'/>
</div>
    </div>
     </div>
   </SuccessPopupStyle>
  )
}

export default SuccessPopup;
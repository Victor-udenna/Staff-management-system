import ErrorPopupStyle from './ErrorPopupStyle';
import {BsXCircle} from "react-icons/bs";
import HeaderText from '../../atoms/HeaderText/HeaderText';
import Text from "../../atoms/Text/Text";

const ErrorPopup = () => {



  return (
   <ErrorPopupStyle>
     <div className='error_pop_up'>
        <div className='icon_container'>
        <BsXCircle size={22} />
        </div>
    <div className=''>
<div className='error_pop_up_text_container'>
<HeaderText classname='error_pop_up_headertext' value='Error'/>
<Text classname="error_pop_up_text" value={"Your email address is invalid"}/>
</div>
    </div>
     </div>
   </ErrorPopupStyle>
  )
}

export default ErrorPopup;
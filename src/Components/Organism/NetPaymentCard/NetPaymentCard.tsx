import NetPaymentCardStyle from './NetPaymentCardStyle';
import Text from '../../atoms/Text/Text'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type NetpaymentCardType  = {
  firstName: string;
  lastName: string;
  role: string;
};


const NetPaymentCard = ({role, firstName, lastName} : NetpaymentCardType) => {
  return (
    <NetPaymentCardStyle>
      <div className="net-card">
        <div className="net-card_header">
        <div className='net-card_subheader'>
        <Gravatar
            className="card_avatar"
            firstname={lastName}
            lastname={firstName}
            size={1}
            background="random"
          />

          <div>
            <Text classname="card-header_text" value={`${firstName} ${lastName}`} />
            <Text classname="card-header_desc" value={role} />
          </div>
        </div>
          <button className='card-edit_button'><MdOutlineKeyboardArrowDown size={17} color='#228b22' /></button>
        </div>

        <div className="card__footer">
          <Text classname="card-amount-title" value={'Net pay:'} />
          <Text classname="card-amount-value" value={'$50,000'} />
        </div>
      </div>
    </NetPaymentCardStyle>
  )
}

export default NetPaymentCard

import GrossPaymentCardStyle from './GrossPaymentCardStyle'
import Text from '../../atoms/Text/Text'
import Gravatar from '../../atoms/Gravatar/Gravatar'
import { BiSolidEditAlt } from "react-icons/bi";

type GrosspaymentCardType  = {
  firstName: string;
  lastName: string;
  role: string;
};


const GrossPaymentCard = ({role, firstName, lastName} : GrosspaymentCardType) => {
  return (
    <GrossPaymentCardStyle>
      <div className="gross-card">
        <div className="gross-card_header">
        <div className='gross-card_subheader'>
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
          <button className='card-edit_button'><BiSolidEditAlt size={15} color='#228b22' /></button>
        </div>

        <div className="card__footer">
          <Text classname="card-amount-title" value={'Gross pay:'} />
          <Text classname="card-amount-value" value={'$50,000'} />
        </div>
      </div>
    </GrossPaymentCardStyle>
  )
}

export default GrossPaymentCard

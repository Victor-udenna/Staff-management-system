import CommunicationStyle from './CommunicationStyle';
import SideBar from '../../Organism/SideBar/Sidebar';
import Chatlist from '../../Organism/Chatlist/Chatlist';
import Chat from '../../Organism/Chat/Chat';
import Text from '../../atoms/Text/Text';

const Communication = () => {
  return (
    <CommunicationStyle>
            <main className="container">
        <SideBar />
<section className='communication'>
  <Text classname="header_text" value="Chats"/>
<section className="communication_sub_container">
          <Chatlist/>
          <Chat/>
        </section>
</section>
      </main>
    </CommunicationStyle>
  )
}

export default Communication
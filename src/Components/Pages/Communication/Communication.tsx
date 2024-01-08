import CommunicationStyle from './CommunicationStyle'
import SideBar from '../../Organism/SideBar/Sidebar'
import Chatlist from '../../Organism/Chatlist/Chatlist'
import Chat from '../../Organism/Chat/Chat'

const Communication = () => {
  return (
    <CommunicationStyle>
      <main className="container">
        <SideBar />
        <section className="communication">
          <Chatlist />
          <Chat />
        </section>
      </main>
    </CommunicationStyle>
  )
}

export default Communication

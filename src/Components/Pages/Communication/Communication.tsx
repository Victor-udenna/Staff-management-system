import CommunicationStyle from './CommunicationStyle';
import Text from "../../atoms/Text/Text";
import SideBar from '../../Organism/SideBar/Sidebar';

const Communication = () => {
  return (
    <CommunicationStyle>
            <main className="container">
        <SideBar />
        <section className="help">
          <Text classname="" value={"Communication"} />
        </section>
      </main>
    </CommunicationStyle>
  )
}

export default Communication
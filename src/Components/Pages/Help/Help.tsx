import HelpStyle from "./HelpStyle";
import SideBar from "../../Organism/SideBar/Sidebar";
import Text from "../../atoms/Text/Text";

const Help = () => {
  return (
    <HelpStyle>
      <main className="container">
        <SideBar />
        <section className="help">
          <Text classname="" value={"Help"} />
        </section>
      </main>
    </HelpStyle>
  );
};

export default Help;

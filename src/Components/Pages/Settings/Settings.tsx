import Text from "../../atoms/Text/Text";
import SideBar from "../../Organism/SideBar/Sidebar";
import SettingsStyle from "./SettingsStyle";

const Settings = () => {
  return (
    <SettingsStyle>
      <main className="container">
        <SideBar />
        <section className="settings">
          <Text classname="" value={"Settings"} />
        </section>
      </main>
    </SettingsStyle>
  );
};

export default Settings;

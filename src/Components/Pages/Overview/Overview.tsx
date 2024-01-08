import OverviewStyle from './OverviewStyle'
import SideBar from '../../Organism/SideBar/Sidebar'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import { RootStore } from '../../../Config/configstore'
import { useSelector } from 'react-redux'

const Overview = () => {

  const state = useSelector((state: RootStore)=> state)
  console.log(state);
  return (
    <OverviewStyle>
      <main className="Dashboard_container">
        <SideBar />
        <section className="overview">
          <DashboardHeader buttonaction={() => {}} />
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde iste
            voluptate laboriosam ab, molestiae nulla dolor optio deserunt quos
            culpa inventore maiores fugiat ullam totam tempora recusandae id
            animi quam quibusdam labore! Iusto odit minima inventore sint! Sint,
            quos iste!
          </div>
        </section>
      </main>
    </OverviewStyle>
  )
}

export default Overview

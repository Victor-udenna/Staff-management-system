import OverviewStyle from './OverviewStyle'
import SideBar from '../../Organism/SideBar/Sidebar'
import DashboardHeader from '../../Organism/DashboardHeader/DashboardHeader'
import { useSelector } from 'react-redux'
import { RootStore } from '../../../Config/configstore'

const Overview = () => {
  const state = useSelector(
    (state: RootStore) => state.saveAuthReducer.result.data
  )

  const displayName = state.displayName

  return (
    <OverviewStyle>
      <main className="Dashboard_container">
        <SideBar />
        <section className="overview">
          <DashboardHeader
            buttontext="Create"
            buttonaction={() => {
              ('')
            }}
          />
          <h1>{`Welcome ${displayName}`}</h1>
        </section>
      </main>
    </OverviewStyle>
  )
}

export default Overview

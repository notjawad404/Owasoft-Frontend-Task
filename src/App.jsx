import './App.css'
import Navbar from './compoents/Navbar'
import Header from './compoents/Header'
import Clients from './compoents/Clients'
import TopFeatures from './compoents/TopFeatures'
import Playbooks from './compoents/Playbooks'
import Compatibility from './compoents/Compatibility'
import Analytics from './compoents/Analytics'
import Workflow from './compoents/Workflow'

function App() {

  return (
    <div>
      <Navbar/>
      <Header/>
      <Clients/>
      <TopFeatures/>
      <Playbooks/>
      <Compatibility/>
      <Analytics/>
      <Workflow/>
    </div>
  )
}

export default App

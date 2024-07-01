import './App.css'
import Navbar from './compoents/Navbar'
import Header from './compoents/Header'
import Clients from './compoents/Clients'
import TopFeatures from './compoents/TopFeatures'
import Playbooks from './compoents/Playbooks'
import Compatibility from './compoents/Compatibility'
import Analytics from './compoents/Analytics'
import Workflow from './compoents/Workflow'
import Faq from './compoents/FAQ'
import Blogs from './compoents/Blogs'

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
      <Faq/>
      <Blogs/>
    </div>
  )
}

export default App

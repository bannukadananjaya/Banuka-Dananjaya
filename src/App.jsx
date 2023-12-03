import Sidenav from './components/Sidebar'
import Main from './components/Main'
import Work from './components/Work'
import Project from './components/Project'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Sidenav/> 
      <Main />
      <Work/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App;

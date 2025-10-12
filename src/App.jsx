import TopMenu from './components/TopMenu'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <TopMenu />
      <Outlet />
    </>
  )
}

export default App

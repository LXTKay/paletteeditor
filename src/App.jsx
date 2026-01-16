import TopMenu from './components/TopMenu'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster expand={true} position="bottom-center" richColors visibleToasts={4} />
      <TopMenu />
      <Outlet />
    </>
  )
}

export default App

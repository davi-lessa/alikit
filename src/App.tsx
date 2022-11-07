import HeaderMenu from './components/HeaderMenu'
import Skeleton from './components/Skeleton'
import GlobalStyles from './styles/GlobalStyles'
import RightBar from './components/RightBar'
import MainFrame from './components/MainFrame'
import { MiddleRow } from './styles/MiddleRow'

function App() {

  return (
    <>
    <Skeleton>
      <HeaderMenu />

      <MiddleRow>
        <MainFrame>

        </MainFrame>
        <RightBar />
        
      </MiddleRow>

      <GlobalStyles />
    </Skeleton>
    </>
  )
}

export default App

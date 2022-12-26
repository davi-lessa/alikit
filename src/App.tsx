import HeaderMenu from "./components/HeaderMenu";
import Skeleton from "./components/Skeleton";
import GlobalStyles from "./styles/GlobalStyles";
import AdBar from "./components/AdBar";
import MainFrame from "./components/MainFrame";
import { MiddleRow } from "./styles/MiddleRow";

function App() {
  return (
    <>
      <Skeleton>
        <HeaderMenu />

        <MiddleRow>
          <MainFrame></MainFrame>
          <AdBar />
        </MiddleRow>

        <GlobalStyles />
      </Skeleton>
    </>
  );
}

export default App;

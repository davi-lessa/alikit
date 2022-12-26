import HeaderMenu from "./components/HeaderMenu";
import Skeleton from "./components/Skeleton";
import GlobalStyles from "./styles/GlobalStyles";
import AdBar from "./components/AdBar";
import MainFrame from "./components/MainFrame";
import { MiddleRow } from "./styles/MiddleRow";

function App() {
  const defaultTitle = "AliKit: easy Aliexpress data getter";
  const defaultDescription =
    "Retrieves data from any Aliexpress product you want. Get organized product media links, pricing, description, reviews, raw json, and so on...";

  return (
    <>
      <Skeleton>
        <HeaderMenu />

        <MiddleRow>
          <MainFrame title={defaultTitle} description={defaultDescription}></MainFrame>
          <AdBar />
        </MiddleRow>

        <GlobalStyles />
      </Skeleton>
    </>
  );
}

export default App;

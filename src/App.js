import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profile from "./components/Profile";
import Repos from "./components/Repos";


function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <Repos />
      </Layout>
    </main>
  );
}

export default App;

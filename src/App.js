import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import GithubProvider from "./providers/github-provider";


function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repos />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;

import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";
import Profile from "./components/Profile";


function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;

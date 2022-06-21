import { ResetCSS } from "./components/global/resetCSS";
import React from 'react'
import Layout from "./components/layout";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import GithubProvider from "./providers/github-provider";
import useGithub from "./hooks/github-hooks";


function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (<p>Loading</p>
        ) : (
          <>
            <Profile />
            <Repos />
          </>
        )}
      </> : <div>Nenhum usuário pesquisado</div>}

    </Layout>
  );
}

export default App;

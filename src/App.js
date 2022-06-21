import React from 'react'
import Layout from "./components/layout";
import Profile from "./components/Profile";
import Repos from "./components/Repos";
import useGithub from "./hooks/github-hooks";
import NoSearch from "./components/noSearch";


function App() {
  const { githubState } = useGithub();

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repos />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
}

export default App;

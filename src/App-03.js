import { FakerTest } from "./components/FakerTest";
import FetchTest from "./components/FetchTest";
import GitHubUser from "./components/GitHubUser";
import RequestGitUser from "./components/RequestGitUser";

function App() {
  return (
    <div className="App">
      {/* <FetchTest/> */}
      {/* <RequestGitUser githubLogin="moonhighway"/> */}
      {/* <GitHubUser login="moonhighway"/> */}
      <FakerTest/>
    </div>
  );
}

export default App;

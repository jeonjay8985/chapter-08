import { FakerTest } from "./components/FakerTest";
import FetchTest from "./components/FetchTest";
import GitHubUser from "./components/GitHubUser";
import RequestGitUser from "./components/RequestGitUser";
import VirtualList from "./components/VirtualList";

function App() {
  return (
    <div className="App">
      {/* <FetchTest/> */}
      {/* <RequestGitUser githubLogin="moonhighway"/> */}
      {/* <GitHubUser login="moonhighway"/> */}
      {/* <FakerTest/> */}
      <VirtualList/>
    </div>
  );
}

export default App;

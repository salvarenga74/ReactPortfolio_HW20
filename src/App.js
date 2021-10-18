import "./App.css";
import PortfolioContainer from "./containers/PortfolioContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faGithub, faLinkedin);
function App() {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;

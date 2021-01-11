import './App.css';
import 'antd/dist/antd.css'
import Home from './Pages/Home'
import { HashRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
       <Router basname="/">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </Router >
    </div>
  );
}

export default App;

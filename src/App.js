import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
// import allReducers from './reducers'

//Components
import Header from './common/Header';
import Dashboard from './components/Dashboard';
import Sidebar from './common/Sidebar';
import Users from './components/Users';

// const store = createStore(allReducers);

class App extends Component {
  render() {
    return (<Provider store={store}><Router>
      <div>
        
        <Header />
        
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/users" exact component={Users} />
              </Switch>
            </div>
          </div>
        </div>
        
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

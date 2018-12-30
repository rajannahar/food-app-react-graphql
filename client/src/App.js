import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SearchInput from './components/SearchInput';
import SearchedMeals from './components/SearchedMeals';
import LatestMeals from './components/LatestMeals';
import Meal from './components/Meal';

import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
})

class App extends Component {
  render() {
    return (
      
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <div className="App">
              <a href="/">
                {/* <img src={} alt="Food app" style={{
                  width: 300,
                  display: 'block', 
                  margin: 'auto'
                }} /> */}
              </a>

              <SearchInput />

              <Route exact path="/" component={LatestMeals} />
              <Route exact path="/search/:search_input" component={SearchedMeals} />
              <Route exact path="/meal/:idMeal" component={Meal} />
            </div>
          </div>
        </Router>
      </ApolloProvider>
      
    );
  }
}

export default App;

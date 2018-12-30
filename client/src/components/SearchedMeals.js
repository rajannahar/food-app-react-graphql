import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MealItem from './MealItem';

const SEARCH_QUERY = gql`
  query SearchQuery($search_input: String!) {
    searchedMeals(search_input: $search_input) {
      idMeal
      strMeal
      strCategory
      strArea
      strMealThumb
      strTags
    }
  }
`;

class SearchedMeals extends Component {
  render() {
    let { search_input } = this.props.match.params;
    console.log('search_input: ', search_input)

    return (
      <Fragment>
        <Query query={SEARCH_QUERY} variables={{search_input}}>
          {
            ({ loading, error, data }) => {
              if (loading) return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
              if (error) console.log(`Error: ${error}`)

              if (data.searchedMeals === null || typeof data.searchedMeals === "undefined") {
                return <div className="row">
                  <h1>No results</h1>
                </div>;
              } else {
                return <div className="row">
                  {
                    data.searchedMeals.map(meal => (
                      <MealItem key={meal.idMeal} props={meal} />
                    ))
                  }
                </div>;
              }
            }
          }
        </Query>
      </Fragment>
    );
  }
}

export default SearchedMeals;
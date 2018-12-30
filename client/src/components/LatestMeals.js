import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import MealItem from './MealItem';

const LATEST_MEAL_QUERY = gql`
  query LatestMealQuery {
    latestMeals {
      idMeal
      strMeal
      strCategory
      strArea
      strMealThumb
      strTags
    }
  }
`;

class LatestMeals extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col">
            <h1 className="display-4 my-3">Latest Meals</h1>
          </div>
        </div>
        <Query query={LATEST_MEAL_QUERY}>
          {
            ({ loading, error, data }) => {
              if(loading) return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
              if(error) console.log(error);

              return <div className="row">
                {
                  data.latestMeals.map(meal => (
                    <MealItem key={meal.idMeal} props={meal} />
                  ))
                }
              </div>;
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default LatestMeals;
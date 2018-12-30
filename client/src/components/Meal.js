import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const MEAL_QUERY = gql`
  query MealQuery($meal_id: Int!) {
    mealDetails(meal_id: $meal_id) {
      idMeal
      strMeal
      strCategory
      strArea
      strMealThumb
      strTags
      strInstructions
      strYoutube
      strIngredient1
      strIngredient2
      strIngredient3
      strIngredient4
      strIngredient5
      strIngredient6
      strIngredient7
      strIngredient8
      strIngredient9
      strIngredient10
      strIngredient11
      strIngredient12
      strIngredient13
      strIngredient14
      strIngredient15
      strIngredient16
      strIngredient17
      strIngredient18
      strIngredient19
      strIngredient20
      strMeasure1
      strMeasure2
      strMeasure3
      strMeasure4
      strMeasure5
      strMeasure6
      strMeasure7
      strMeasure8
      strMeasure9
      strMeasure10
      strMeasure11
      strMeasure12
      strMeasure13
      strMeasure14
      strMeasure15
      strMeasure16
      strMeasure17
      strMeasure18
      strMeasure19
      strMeasure20
      strSource
    }
  }
`;
export default class Meal extends Component {
  render() {
    let meal_id = this.props.match.params.idMeal;
    meal_id = parseInt(meal_id)

    return (
      <Fragment>
        <Query query={MEAL_QUERY} variables={{meal_id}}>
          {
            ({ loading, error, data }) => {
              if (loading) return <div className="spinner-border" role="status"><span className="sr-only">Loading...</span></div>
              if (error) console.log(`Error: ${error}`)

              let { idMeal, strMeal, strCategory, strArea, strMealThumb, strTags, strInstructions, strYoutube, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18, strMeasure19, strMeasure20, strSource } = data.mealDetails[0]
              
              return <Fragment key={idMeal}>
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <img src={strMealThumb} alt={strMeal} style={{maxHeight: "400px"}} />
                  </div>
                  
                  <div className="col-sm-12 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{strMeal}</h5>

                        {strArea ?
                          <h6 className="card-subtitle mb-2 text-muted">
                            Origin: {strArea}
                          </h6>
                          : null
                        }

                        {strCategory ? 
                          <h6 className="card-subtitle mb-2 text-muted">
                            Category: {strCategory}
                          </h6>
                          : null
                        }

                        {strTags ?
                          <h6 className="card-subtitle mb-2 text-muted">
                            Tags: {strTags}
                          </h6>
                          : null
                        }

                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <ul className="list-group" style={{margin: "20px 0"}}>
                      {strIngredient1 ? <li className="list-group-item">{strIngredient1} - {strMeasure1}</li> : null}
                      {strIngredient2 ? <li className="list-group-item">{strIngredient2} - {strMeasure2}</li> : null}
                      {strIngredient3 ? <li className="list-group-item">{strIngredient3} - {strMeasure3}</li> : null}
                      {strIngredient4 ? <li className="list-group-item">{strIngredient4} - {strMeasure4}</li> : null}
                      {strIngredient5 ? <li className="list-group-item">{strIngredient5} - {strMeasure5}</li> : null}
                      {strIngredient6 ? <li className="list-group-item">{strIngredient6} - {strMeasure6}</li> : null}
                      {strIngredient7 ? <li className="list-group-item">{strIngredient7} - {strMeasure7}</li> : null}
                      {strIngredient8 ? <li className="list-group-item">{strIngredient8} - {strMeasure8}</li> : null}
                      {strIngredient9 ? <li className="list-group-item">{strIngredient9} - {strMeasure9}</li> : null}
                      {strIngredient10 ? <li className="list-group-item">{strIngredient10} - {strMeasure10}</li> : null}
                      {strIngredient11 ? <li className="list-group-item">{strIngredient11} - {strMeasure11}</li> : null}
                      {strIngredient12 ? <li className="list-group-item">{strIngredient12} - {strMeasure12}</li> : null}
                      {strIngredient13 ? <li className="list-group-item">{strIngredient13} - {strMeasure13}</li> : null}
                      {strIngredient14 ? <li className="list-group-item">{strIngredient14} - {strMeasure14}</li> : null}
                      {strIngredient15 ? <li className="list-group-item">{strIngredient15} - {strMeasure15}</li> : null}
                      {strIngredient16 ? <li className="list-group-item">{strIngredient16} - {strMeasure16}</li> : null}
                      {strIngredient17 ? <li className="list-group-item">{strIngredient17} - {strMeasure17}</li> : null}
                      {strIngredient18 ? <li className="list-group-item">{strIngredient18} - {strMeasure18}</li> : null}
                      {strIngredient19 ? <li className="list-group-item">{strIngredient19} - {strMeasure19}</li> : null}
                      {strIngredient20 ? <li className="list-group-item">{strIngredient20} - {strMeasure20}</li> : null}
                      {strInstructions ? <li className="list-group-item">{strInstructions}</li> : null}
                      {strYoutube ? 
                        <li className="list-group-item">
                          <span className="font-weight-bold">Video: </span>
                          <a href={strYoutube} target="_blank" rel="noopener noreferrer">
                            {strYoutube}</a>
                        </li> 
                        : null}
                      {strSource ? 
                        <li className="list-group-item"><span className="font-weight-bold">Source: </span>
                          <a href={strSource} target="_blank" rel="noopener noreferrer">
                            {strSource}
                          </a>
                        </li> 
                        : null}
                    </ul>
                  </div>
                </div>

              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

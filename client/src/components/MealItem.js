import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const MealItem = ({ props: { idMeal, strMeal, strCategory, strArea, strMealThumb, strTags } }) => {  

  return (
    <Fragment>
      <div className="col-md-4" key={idMeal}>
        <div className="card" style={{ marginBottom: "25px" }}>
          <img src={strMealThumb} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title" style={{ height: "50px" }}>{strMeal}</h5>
            <p className="card-text" style={{ marginBottom: "10px" }}>{strCategory}</p>
            <Link to={`/meal/${idMeal}`} className="btn btn-secondary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default MealItem;
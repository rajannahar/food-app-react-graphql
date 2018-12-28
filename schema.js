const axios = require("axios");
const { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLList, 
  GraphQLSchema 
} = require("graphql");

const Meals = new GraphQLObjectType({
  name: "Meals",
  fields: () => ({
    idMeal: { type: GraphQLString },
    strMeal: { type: GraphQLString },
    strCategory: { type: GraphQLString },
    strArea: { type: GraphQLString },
    strMealThumb: { type: GraphQLString },
    strTags: { type: GraphQLString }
  })
});

const MealDetails = new GraphQLObjectType({
  name: "MealDetails",
  fields: () => ({
    idMeal: { type: GraphQLString },
    strMeal : { type: GraphQLString },
    strCategory: { type: GraphQLString },
    strArea: { type: GraphQLString },
    strMealThumb: { type: GraphQLString },
    strTags: { type: GraphQLString },
    strInstructions: { type: GraphQLString },
    strYoutube: { type: GraphQLString },
    strIngredient1: { type: GraphQLString },
    strIngredient2: { type: GraphQLString },
    strIngredient3: { type: GraphQLString },
    strIngredient4: { type: GraphQLString },
    strIngredient5: { type: GraphQLString },
    strIngredient6: { type: GraphQLString },
    strIngredient7: { type: GraphQLString },
    strIngredient8: { type: GraphQLString },
    strIngredient9: { type: GraphQLString },
    strIngredient10: { type: GraphQLString },
    strIngredient11: { type: GraphQLString },
    strIngredient12: { type: GraphQLString },
    strIngredient13: { type: GraphQLString },
    strIngredient14: { type: GraphQLString },
    strIngredient15: { type: GraphQLString },
    strIngredient16: { type: GraphQLString },
    strIngredient17: { type: GraphQLString },
    strIngredient18: { type: GraphQLString },
    strIngredient19: { type: GraphQLString },
    strIngredient20: { type: GraphQLString },
    strMeasure1: { type: GraphQLString },
    strMeasure2: { type: GraphQLString },
    strMeasure3: { type: GraphQLString },
    strMeasure4: { type: GraphQLString },
    strMeasure5: { type: GraphQLString },
    strMeasure6: { type: GraphQLString },
    strMeasure7: { type: GraphQLString },
    strMeasure8: { type: GraphQLString },
    strMeasure9: { type: GraphQLString },
    strMeasure10: { type: GraphQLString },
    strMeasure11: { type: GraphQLString },
    strMeasure12: { type: GraphQLString },
    strMeasure13: { type: GraphQLString },
    strMeasure14: { type: GraphQLString },
    strMeasure15: { type: GraphQLString },
    strMeasure16: { type: GraphQLString },
    strMeasure17: { type: GraphQLString },
    strMeasure18: { type: GraphQLString },
    strMeasure19: { type: GraphQLString },
    strMeasure20: { type: GraphQLString },
    strSource: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    
    latestMeals: {
      type: new GraphQLList(Meals),
      resolve(parent, args) {
        return axios.get("https://www.themealdb.com/api/json/v1/1/latest.php")
          .then(res => res.data.meals)
      }
    },

    searchedMeals: {
      type: new GraphQLList(Meals),
      args: {
        search_input: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${args.search_input}`)
          .then(res => res.data.meals)
      }
    },

    mealDetails: {
      type: new GraphQLList(MealDetails),
      args: {
        meal_id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${args.meal_id}`)
          .then(res => res.data.meals)
      }
    }
    
  },

});

module.exports = new GraphQLSchema({
  query: RootQuery
});

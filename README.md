# Food Recipe App


>  A small web application to show a list of recipes, view recipe cards and search for recipes. 



#### Primary technologies in use: 
- Node js (express)
- GraphQL
- Apollo
- React
- Bootstrap


#### Development details:
- REST API source - https://www.themealdb.com/
- Express server - server.js
- GraphQL - schema.js
- Front-end/client-facing - /client (bootstrapped with create-react-app)


#### Heroku deployment
The application can be found on heroku - [https://food-recipe-react.herokuapp.com/](https://food-recipe-react.herokuapp.com/)


#### Commands
```
# Install dependencies (server & client)
npm install
cd client && npm install

# Run server - http://localhost:5000/graphql
npm run start

# Run server in dev mode - nodemon, reloading
npm run server

# Run client
npm run client

# Run server and client - development (using concurrently)
npm run dev

```

#### Structure
| Folder/file     | Description |
| -------------   |:-------------:|
| ./package.json  | Installed dependancies and commands/scripts configured |
| ./server.js     | Server file - express and graphql |
| ./schema.js     | GraphQL schema - queries API returns data I want |
| ./client/       | Directory - created using 'create-react-app |
| ./client/package.json     | Installed dependancies and configured commands/scripts for the React app |
| ./client/src/     | Front-end React app dir - main files in use are index.js, App.js and App.css |
| ./client/src/index.js     | React - appends App to #root in HTML |
| ./client/src/App.js     | React - main commponent which contains all other components |
| ./client/src/components/ | React - contains custom components created for app |
| ./client/src/components/Home.js | React - component for the "Home" link and icon |
| ./client/src/components/SearchInput.js | React - component to search for recipes |
| ./client/src/components/LatestMeals.js | React - component to render latest recipes - initial load |
| ./client/src/components/MealItem.js | React - component to small data card - for search and latest meals |
| ./client/src/components/Meal.js | React - component to show recipe card - more details |
| ./client/src/components/SearchedMeals.js | React - component to show searched recipe results |


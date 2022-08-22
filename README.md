<h1 align="center">e-bookstore app</h1>

### <ins>Description</ins>


### <ins>Live Demo</ins>
[Go to demo](https://e-bookstore.vercel.app)

### <ins>Built with</ins>
This project was built using the __React.js__ framework with __TypeScript__. The supporting tools/libraries that were used are:
- __axios__ for making api requests.
- __react-query__ for handling api requests.
- __react context__ for global management.
- __react router v6__ for routing.
- __cloneDeep__ and __isEqual__ methods from lodash for easier object handling in state changes.
- __classNames__ for easier dynamic class handling.
- __Sass__ preprocessor for styling.

### <ins>Design decisions</ins>

#### State
For the needs of this app __react context__ was more than enough, so 2 main context providers were created:
- __ProductsContextProvider__ which contains:
  - `products` data.
  - `status` of api request in order to dynamically render different UI based on it.
  - `updateStock` function to use when products are added/removed from the basket. 
- __BasketContextProvider__ which contains:
  - a `data` object that contains: 
    - `data.items`, an array of product ids that are currently in the basket.
    - `data.count`, the total number of products in the basket (data.items.length is not good , because more than one product with the same id might be selected).
    - `data.checkout_price`, the current checkout_price including discount if it applies.
    - `data.`


### <ins>Run, test, build and deploy the app</ins>
Clone the repository on your local machine, open a command line and navigate to the repo's top level folder. Make sure that you have npm installed.

#### `npm install`
Start by running this command to install all dependencies.

#### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### Deploy
Whenever new code is pushed to the master branch the app will be deployed in vercel.

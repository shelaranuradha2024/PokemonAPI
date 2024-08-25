# Pokémon Fetch App

A simple React application that fetches and displays information about Pokémon from the PokeAPI. This app shows a list of 10 Pokémon, including their names, images, heights, and weights.

## Features

- Fetches data for 10 Pokémon from the PokeAPI.
- Displays Pokémon names, images, heights, and weights.
- Simple and responsive design.

## Technologies Used

- React
- Axios
- CSS


## Getting Started

Follow these instructions to set up and run the app locally.

### Prerequisites

- Node.js (LTS version recommended) - [Download Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/shelaranuradha2024/PokemonAPI
    cd cd pokemon-api-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

   This will open the app in your default web browser at `http://localhost:3000`.



### Project Structure

- `src/`: Contains the source code of the application.
  - `components/`:
    - `App.js`: Main React component fetching and displaying Pokémon data for 10 pokemon .
    - `App.css`: Styles for the application.
  - `index.js`: Entry point of the React application.
  - `index.css`: Global styles for the application.
  - `reportWebVitals.js`: Web Vitals reporting utility.
  - `setupTests.js`: Configuration for testing.
- `public/`: Contains static assets and the main HTML file.
- `package.json`: Project metadata and dependencies.

### API Usage

The app fetches Pokémon data from the PokeAPI:

- Base URL: `https://pokeapi.co/api/v2/pokemon/`
- Example endpoint for Pokémon with ID 1: `https://pokeapi.co/api/v2/pokemon/1`

### Code Explanation

- `App.js`: Contains the main logic for fetching Pokémon data using Axios and rendering the data.
- `useEffect`: Hook used to fetch data when the component mounts.
- `axios`: Library used for making HTTP requests.
- `useState`: Hook used to manage state (loading, error, and Pokémon data).


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

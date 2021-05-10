The hosted version can be reached via this link: [The Shoppies](https://manecipoglu.github.io/TheShoppies) or at https://manecipoglu.github.io/TheShoppies

# How to use
npm start command will launch a development server on localhost:3000.

# Introduction

This project was made with React utilizing OMDB api. create-react-app bundler is used for easy configuration. Since this is a study case, the api key is stored in a .env file. Please beware that this does not properly hide the api key, and that it is exposed in the dev tools. Therefore, in a real app a safer approach would be to store the api key on key server side.

# State Management

This project uses a combination of Redux, useState hook and local storage for state management. Although it can be argued that Redux might be an overkill for an application of this size; showcasing the implemenetation, building the foundations for scalability and helping with debugging were the main reasons why I still decided to go with it. Not all state is carried to the Redux store and some components preserve their local state. Lastly, nominated movies are stored in the browser's local storage so that the data is persistent between sessions.

# API calls

Since the root of this project comes from calling apis, handling the response and handling the error functions were seperated in the api folder. To keep the app simple instead of using a third party library like axios, fetch api is used. Because Redux is synchronous by nature, Redux-thunk library is used to handle asynchronoous api calls. There are two different actions a user makes to trigger and api call.

1. Search bar:
   The call is only made when the user submits the search form. Even though this actually limits React's power to dynamically render results, the free api service of OMDB is limited. When such restrictions no longer exist, it is advisable to modify this behaviour to debouncing events. A balance between costly server load and seemless UI can be targeted this way.
2. Down Arrow on the left of results:
   The call is made for the single movie the arrow is attached to when clicked. It returns a more detailed information about that movie and it is not connected to the Redux. This call renders a MovieDetails component and the useEffect hook launches the fetch api.

The user is prevented to trigger an api call for the same search term by clicking on the button repeatedly. However, down arraw calls are made with the useEffect hook launched on component mount. using a Memoization method here would be a nice improvement.

# Styling

This app is customized with a combination of custom CSS, semantic-ui-react and inline styling. Custom CSS is used to create an individual touch and showcase implementation, inline styling is used for small utilization while semantic-ui-react is chosen for speedy, convenient styling. I spent the least amount of time for this part and not proud at all from the end result.

# Future Development

The main weaknesses are security, styling and code consistency/readability.

Happy coding!

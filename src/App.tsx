import React from 'react';

import {RepositoriesList} from "./layouts/RepositoriesList";

import './App.css';

const App = () => {
  const request = async () => {
    const response = await fetch('https://api.github.com/orgs/ktsstudio/repos', {
      method: 'GET',
      // headers: 'application/vnd.github.v3+json'
    })
    console.log('appResponse', response)
    const data = await response.json()
    console.log('AppData',data)
  }
  return (
    <div>
      <RepositoriesList/>
      {/*{request()}*/}
    </div>
  );
}

export default App;

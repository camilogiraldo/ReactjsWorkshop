import React, {
  Component
} from 'react';
import './App.css';
import Blog from './Containers/Blog';
import {BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Blog />
    </BrowserRouter>)
  }
}

export default App;
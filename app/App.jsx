import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <div>
        <h1>Obey the Toad</h1>
        <Link to="/users/new">Create New User</Link>
        &nbsp;
        <Link to="/">Home</Link>
        &nbsp;
        <Link to="/recipes">Recipes</Link>
        {this.props.children}
      </div>
    );
  }
}

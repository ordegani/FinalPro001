import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
      return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">title</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Lists</Link>
            </li>
            <li className="navbar-item">
            <Link to="/Create List" className="nav-link">Create List</Link>
            </li>
            <li className="navbar-item">
            <Link to="/Create User" className="nav-link">Create User</Link>
            </li>
          </ul>
          </div>
        </nav>
      );
    }
  }
import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Welcome to Expenses manager</h1>
            <p>Use this manager to manage your expenses, by:</p>
            <ul>
                <li>Show all expenses</li>
                <li>Add a new expense</li>
                <li>Update a expense</li>
                <li>Delete a expense</li>
            </ul>
        </div>
    );
  }
}

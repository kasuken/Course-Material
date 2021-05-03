import React, { Component } from 'react';
import axios from 'axios';

export class ExpensesList extends Component {
    constructor(props) {
        super(props);

        this.onExpenseUpdate = this.onExpenseUpdate.bind(this);
        this.onExpenseDelete = this.onExpenseDelete.bind(this);

        this.state = {
            expenses: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount() {
        this.populateExpensesData();
    }

    onExpenseUpdate(id) {
        const { history } = this.props;
        history.push('/update/' + id);
    }

    onExpenseDelete(id) {
        const { history } = this.props;
        history.push('/delete/' + id);
    }

    populateExpensesData() {
        axios.get("api/Expenses/GetExpenses").then(result => {
            const response = result.data;
            this.setState({ expenses: response, loading: false, failed: false, error: "" });
        }).catch(error => {
            this.setState({ expenses: [], loading: false, failed: true, error: "Expenses could not be loaded" });
        });
    }

    renderAllTripsTable(trips) {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Amout</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.expenses.map(exp => (
                            <tr key={exp.id}>
                                <td>{exp.name}</td>
                                <td>{exp.description}</td>
                                <td>{new Date(exp.date).toISOString().slice(0, 10)}</td>
                                <td>{exp.amount} Euro</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.onExpenseUpdate(exp.id)} className="btn btn-success">
                                            Update
                                    </button>
                                        <button onClick={() => this.onExpenseDelete(exp.id)} className="btn btn-danger">
                                            Delete
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        );
    }

    render() {

        let content = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (this.state.failed ? (
            <div className="text-danger">
                <em>{this.state.error}</em>
            </div>
        ) : (
                this.renderAllTripsTable(this.state.trips))
            )

        return (
            <div>
                <h1>All expenses</h1>
                <p>Here you can see all expenses</p>
                {content}
            </div>
        );
    }
}
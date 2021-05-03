import React, { Component } from 'react';
import axios from 'axios';

export class Delete extends Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name: "",
            description: "",
            date: null,
            amount: 0
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get("api/Expenses/SingleExpense/" + id).then(exp => {
            const response = exp.data;

            this.setState({
                name: response.name,
                description: response.description,
                date: new Date(response.date).toISOString().slice(0, 10),
                amount: response.amount
            })
        })
    }

    onCancel(e) {
        const { history } = this.props;
        history.push('/list');
    }

    onConfirmation(e) {
        const { id } = this.props.match.params;
        const { history } = this.props;

        axios.delete("api/Expenses/DeleteExpense/" + id).then(result => {
            history.push('/list');
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Delete expense confirmation</h2>
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title"> {this.state.name} </h4>
                        <p class="card-text"> {this.state.description} </p>
                        <button onClick={this.onCancel} class="btn btn-default">
                            Cancel
                    </button>
                        <button onClick={this.onConfirmation} class="btn btn-danger">
                            Confirm
                    </button>
                    </div>
                </div>
            </div>
        )
    }
}
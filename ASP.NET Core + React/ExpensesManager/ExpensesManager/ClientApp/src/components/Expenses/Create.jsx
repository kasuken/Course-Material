import React, { Component } from 'react';
import axios from 'axios';

export class Create extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            date: null,
            amout: 0
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let expObject = {
            Id: Math.floor(Math.random() * 1000),
            name: this.state.name,
            description: this.state.description,
            date: this.state.date,
            amount: this.state.amount
        }

        axios.post("api/Expenses/AddExpense", expObject).then(result => {
            history.push('/list');
        })

    }

    render() {
        return (
            <div className="exp-form" >
                <h3>Add new expense</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Expense name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Expense description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="row">
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.date}
                                    onChange={this.onChangeDate}
                                />
                            </div>
                        </div>
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Amount:  </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={this.state.amount}
                                    onChange={this.onChangeAmount}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add expense" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
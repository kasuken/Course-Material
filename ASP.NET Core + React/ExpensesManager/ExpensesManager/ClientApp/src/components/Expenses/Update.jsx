import React, { Component } from 'react';
import axios from 'axios';

export class Update extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            description: '',
            date: null,
            amout: 0
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        axios.get("api/Expenses/SingleExpense/" + id).then(trip => {
            const response = trip.data;

            this.setState({
                name: response.name,
                description: response.description,
                date: new Date(response.date).toISOString().slice(0, 10),
                amount: response.amount
            })
        })
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

    onUpdateCancel() {
        const { history } = this.props;
        history.push('/list');
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        const { id } = this.props.match.params;

        let tripObject = {
            name: this.state.name,
            description: this.state.description,
            date: new Date(this.state.date).toISOString(),
            amount: this.state.amount
        }

        axios.put("api/Expenses/updateExpense/" + id, tripObject).then(result => {
            history.push('/list');
        })
    }

    render() {
        return (
            <div className="expense-form" >
                <h3>Edit expense</h3>
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
                                <label>Date:  </label>
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
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
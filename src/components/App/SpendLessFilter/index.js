import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import "./SpendLessFilter.css";
class SpendLessFilter extends Component {
  state = {
    totalSpending: this.props.totalSpending,
    reducedSpending: 0,
    billsReduction: 0,
    mortgageReduction: 0,
    bills: this.props.bills,
    mortgage: this.props.mortgage,
    generalSpending: this.props.generalSpending,
    generalSpendingReduction: 0,
    thumbUp: false,
    thumbDown: false
  };
  handleThumbUp = () =>
    this.setState({
      thumbUp: !this.state.thumbUp,
      thumbDown: this.state.thumbDown && !this.state.thumbDown
    });
  handleThumbDown = () =>
    this.setState({
      thumbUp: this.state.thumbUp && !this.state.thumbUp,
      thumbDown: !this.state.thumbDown
    });
  handleBillsChange = e => {
    const bills = e.target.value;
    const billsReduction = this.props.bills - +bills;
    this.setState({ bills, billsReduction });
  };
  handleMortgageChange = e => {
    const mortgage = e.target.value;
    const mortgageReduction = this.props.mortgage - +mortgage;
    this.setState({ mortgage, mortgageReduction });
  };
  handleGeneralSpendingChange = e => {
    const generalSpending = e.target.value;
    const generalSpendingReduction =
      this.props.generalSpending - +generalSpending;
    this.setState({ generalSpending, generalSpendingReduction });
  };
  render() {
    const style = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginRight: 0
    }
    const labelStyle = { alignSelf: "center" }
    const inputStyle = { width: "65%", padding: 0 }
    return (
      <Fragment>
        {/* <h1>mortgage: {this.state.mortgage}</h1>
        <h1>bills: {this.state.bills}</h1>
        <h1>generalSpending: {this.state.generalSpending}</h1> */}
        <div className="title">spend less</div>
        <section className="card_body">
        <section className="info">
          Try reducing your monthly spending to see how your forcast could
          improve!{" "}
        </section>
        <main className="spendingrange">
          <div className="form_group" style={style}>
            <label htmlFor="" style={labelStyle}>Mortgage</label>
            <input
              type="range"
              min="0"
              max={this.props.mortgage}
              value={this.state.mortgage}
              onChange={this.handleMortgageChange}
              className="form_control"
              style={inputStyle}
            />
          </div>
          <div
            className="form_group"
            style={style}
          >
            <label htmlFor="" style={labelStyle}>
              Bills
            </label>
            <input
              type="range"
              min="0"
              max={this.props.bills}
              value={this.state.bills}
              onChange={this.handleBillsChange}
              className="form_control"
              style={inputStyle}
            />
          </div>
          <div className="form_group" style={style}>
            <label htmlFor="" style={labelStyle}>General spending</label>
            <input
              type="range"
              min="0"
              max={this.props.generalSpending}
              value={this.state.generalSpending}
              onChange={this.handleGeneralSpendingChange}
              className="form_control"
              style={inputStyle}
            />
          </div>
        </main>
        </section>
        <footer className="review">
          <div className="details">
            {" "}
            This means you are saving{" "}
            <span className="saved_money">
              £
              {this.state.billsReduction +
                this.state.mortgageReduction +
                this.state.generalSpendingReduction}
            </span>
            per month
          </div>
          <a href="#" className="find_ways">
            Find ways to save
          </a>
          <div className="bottom">
            <a href="#">Was this helful?</a>
            <span
              onClick={this.handleThumbUp}
              className={this.state.thumbUp ? "active mr" : "mr"}
            >
              <i className="fa fa-thumbs-o-up" style={{ fontSize: 30 }} />
            </span>
            <span
              onClick={this.handleThumbDown}
              className={this.state.thumbDown ? "active" : null}
            >
              <i className="fa fa-thumbs-o-down" style={{ fontSize: 30 }} />
            </span>
          </div>
        </footer>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ expenditures }) => {
  let totalSpending = 0;
  const { amount: bills } = expenditures.filter(
    expenditure => expenditure.name === "Bills"
  )[0];
  const { amount: mortgage } = expenditures.filter(
    expenditure => expenditure.name === "Mortgage"
  )[0];
  const { amount: generalSpending } = expenditures.filter(
    expenditure => expenditure.name === "General spending"
  )[0];
  expenditures.forEach(expenditure => {
    totalSpending = totalSpending + expenditure.amount;
  });
  return {
    totalSpending,
    bills,
    mortgage,
    generalSpending
  };
};
export default connect(mapStateToProps)(SpendLessFilter);
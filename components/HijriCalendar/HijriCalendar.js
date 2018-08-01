import React, { Component } from "react";
import { Card, Select, Button, Icon } from "antd";

const Option = Select.Option;

export default class HijriCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      day: new Date().getUTCDay(),
      data: []
    };

    this.handleAddYear = this.handleAddYear.bind(this);
    this.handleReduceYear = this.handleReduceYear.bind(this);
    this.handleChangeMonth = this.handleChangeMonth.bind(this);
  }

  async handleAddYear() {
    await this.setState(prevState => ({ year: prevState.year + 1 }));
    this.fetch();
  }

  async handleReduceYear() {
    await this.setState(prevState => ({ year: prevState.year - 1 }));
    this.fetch();
  }

  async handleChangeMonth(value) {
    const { months } = this.state;
    await this.setState({ month: months.indexOf(value) + 1 });
    this.fetch();
  }

  fetch() {
    const { year, month } = this.state;
    const endpoint = `http://api.aladhan.com/v1/calendar?latitude=44.206583&longitude=17.906376&method=2&month=${month}&year=${year}`;

    fetch(endpoint)
      .then(blob => blob.json())
      .then(resp =>
        this.setState({
          data: resp.data
        })
      );
  }

  componentDidMount() {
    this.fetch();
  }

  render() {
    const { year, months, month, data } = this.state;
    const gridStyle = {
      width: "25%",
      height: "140px",
      textAlign: "center",
      isActive: "background-color"
    };
    return (
      <div>
        <Select
          defaultValue={months[month - 1]}
          style={{ width: 120 }}
          onChange={this.handleChangeMonth}
        >
          {months.map(month => (
            <Option key={month} value={month}>
              {month}
            </Option>
          ))}
        </Select>

        <Button.Group>
          <Button type="primary" onClick={this.handleReduceYear}>
            <Icon type="left" />Previous Year
          </Button>
          <Button>{year}</Button>
          <Button type="primary" onClick={this.handleAddYear}>
            Next Year<Icon type="right" />
          </Button>
        </Button.Group>
        <br />
        <br />
        <Card title="Calendar ">
          {data.map(info => (
            <Card.Grid style={gridStyle}>
              {info.date.gregorian.day}. {info.date.gregorian.month.en}, {info.date.gregorian.weekday.en}
              <br />
              Hijri Year: {info.date.hijri.year}
              <br/>
              {info.date.hijri.day}. {info.date.hijri.month.en} / {info.date.hijri.month.ar}
              <br/>
              {info.date.hijri.weekday.en} / {info.date.hijri.weekday.ar}
              <br/>
              {info.date.hijri.holidays}
            </Card.Grid>
          ))}
        </Card>
      </div>
    );
  }
}

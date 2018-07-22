import React, { Component } from 'react'
import { Calendar, Badge } from 'antd';

export default class HijriCalendar extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }

        this.dateCellRender = this.dateCellRender.bind(this)
    }

    fetch(){
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 2;

        console.log(month)
        const endpoint = `http://api.aladhan.com/v1/calendar?latitude=44.206583&longitude=17.906376&method=2&month=${month}&year=${year}`;

        fetch(endpoint).then(blob => blob.json()).then(resp => this.setState({
            data: resp.data
        }))
    }

    componentDidMount(){
        this.fetch()
    }

    getListData(value) {
        let listData;
        switch (value.date()) {
          case 8:
            listData = [
              { type: 'warning', content: 'This is warning event.' },
              { type: 'success', content: 'This is usual event.' },
            ]; break;
          default:
        }
        return listData || [];
      }
      
      dateCellRender(value) {
        const listData = this.getListData(value);
        return (
          <ul className="events">
            {
              listData.map(item => (
                <li key={item.content}>
                  <Badge status={item.type} text={item.content} />
                </li>
              ))
            }
          </ul>
        );
      }
      
      getMonthData(value) {
        if (value.month() === 8) {
          return 1394;
        }
      }
      
      monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
          <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
          </div>
        ) : null;
      }

    render() {
        console.log(this.state.prayers)
        return (
            <div>
                 <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
            </div>
        )
    }
}


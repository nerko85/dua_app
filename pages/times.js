import React, {Component} from 'react';
import Layout from '../components/Layout';
import { Table, Icon, Switch, Radio, Form, Divider, Card  } from 'antd';

export default class Contact extends Component {
    state = {
        options: {
            bordered: false,
            loading: false,
            pagination: false,
            size: 'default',
            title: undefined,
            // rowSelection: {},
            scroll: undefined
        },
        prayers:[],
        data:[],
        prayers: [
            {
                key: 1,
                name: 'John Brown',
                age: `22`,
                address: `New York No. Lake Park`,
                description: `My name is John Brown, I am  years old, living in New York No.`,
              },
              {
                key: 2,
                name: 'John Brown',
                age: `32`,
                address: `New York No.Lake Park`,
                description: `My name is John Brown, I am  years old, living in New York No.`,
              },
              {
                key: 3,
                name: 'John Brown',
                age: `42`,
                address: `New York No. Lake Park`,
                description: `My name is John Brown, I am  years old, living in New York No.`,
              }
        ]
    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData(){
        const { prayers } = this.state;
        console.log(this.state.data)
        prayers.forEach(prayer => {
            this.state.data.push({
                name: prayer.name,
                time: prayer.age,
            })
        });
    }

    render(){
        const FormItem = Form.Item;
        const data = this.state.data;
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: 600,
            className: "test",
            render: text => <a href="javascript:;">{text}</a>,
          }, {
            title: '',
            dataIndex: 'time',
            key: 'time',
            width: 80
          }];
        //   }, {
        //     title: 'Icon',
        //     dataIndex: 'icon',
        //     key: 'icon',
        //   }];
          
        //   }, {
        //     title: 'Action',
        //     key: 'action',
        //     width: 360,
        //     render: (text, record) => (
        //       <span>
        //         <a href="javascript:;">Action 一 {record.name}</a>
        //         <Divider type="vertical" />
        //         <a href="javascript:;">Delete</a>
        //         <Divider type="vertical" />
        //         <a href="javascript:;" className="ant-dropdown-link">
        //           More actions <Icon type="down" />
        //         </a>
        //       </span>
        //     ),
        //   }];
        
        return  (
            <Layout>
                <Card style={{ width: 700 }}>
                    <Table {...this.state.options} columns={columns} dataSource={data} />
                </Card>,
            </Layout>
        )
    }
}
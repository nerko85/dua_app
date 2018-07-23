import React, {Component} from 'react';
import { Layout, Menu, Icon } from 'antd';
import './Sidebar.css';

const { Sider } = Layout;
class  Sidebar extends Component { 
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    }

    render(){
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.state.collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                    <Icon type="user" />
                    <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Sidebar;
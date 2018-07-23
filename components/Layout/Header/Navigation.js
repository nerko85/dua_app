import React from 'react';
import Link from 'next/link';
import { Menu, Icon, Layout } from 'antd';
import './Navigation.css';

class Navigation extends React.Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          {/* <div style={{display:"inline-block", float:"left"}}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          </div> */}
          <Menu.Item>
              <Link href="/"><a>Home</a></Link>
          </Menu.Item>
          <Menu.Item>
              <Link href="/about"><a>About</a></Link>
          </Menu.Item>
          <Menu.Item>
              <Link href="/contact"><a>Contact</a></Link>
          </Menu.Item>
          <Menu.Item>
              <Link href="/login"><a>Log in</a></Link>
          </Menu.Item>
          <Menu.Item>
              <Link href="/times"><a>Prayers</a></Link>
          </Menu.Item>
        </Menu>
    );
  }
}

export default Navigation;
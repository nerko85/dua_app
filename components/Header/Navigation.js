import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
import { Menu, Icon } from 'antd';
// import css from './Navigation.css';
=======
>>>>>>> a4d92ef23bd1822f853b174cb2af4222ce78a94a

// const Navigation = (props) => {
//     return (
//         <ul>
//             <li><Link href="/"><a>Home</a></Link></li>
//             <li><Link href="/about"><a>About</a></Link></li>
//             <li><Link href="/contact"><a>Contact</a></Link></li>
//             <li><Link href="/login"><a>Login</a></Link></li>
//         </ul>
//     );
// };

// export default Navigation;


///

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

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
      </Menu>
    );
  }
}

export default Navigation;
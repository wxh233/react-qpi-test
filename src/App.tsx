import './App.css'
import { Outlet,Link } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { useState } from 'react';
import { Menu, Switch } from 'antd';


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('测试1', 'sub1', <MailOutlined />, [
    getItem(<Link to={`home`}>homePage</Link>, '1'),
    getItem(<Link to={`createContext`}>createContext</Link>, '2'),
    getItem(<Link to={`useContext`}>useContextHook</Link>, '3'),
    getItem(<Link to='useReducer'>useReducer</Link>, '4'),
    getItem(<Link to='tabContainer'>tabContainer</Link>, '5'),
  ]),

  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ]),

  // getItem('Navigation Three', 'sub4', <SettingOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Option 11', '11'),
  //   getItem('Option 12', '12'),
  // ]),
];


function App() {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <>
      <header className='page-header'>Title</header>
      <div className='page-main'>
        <div className='page-menu'>
            {/* <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          <br />
          <br /> */}
          <Menu
            theme={theme}
            onClick={onClick}
            style={{ width: '100%',height:"100%" }}
            defaultOpenKeys={['sub1']}
            selectedKeys={[current]}
            mode="inline"
            items={items}
          />
        </div>
        <div className='page-view'>
           <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App

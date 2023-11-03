import React, { useContext, useState } from 'react';
import { BrowserRouter, Route, Routes as Switch, useNavigate } from 'react-router-dom'

import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu } from 'antd';
import { UserContext } from '../../App';
import Personal from '../../Components/Profile/Personal/Personal';
import ManageChild from '../../Components/Profile/ManageChild/ManageChild';
import Applications from '../../Components/Profile/Applications/Applications';
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Profile = () => {

  const nav = useNavigate()

  const items = [
    getItem(<div onClick={() => nav("/profile/personal")}>
      My Profile
    </div>, '1', <MailOutlined />),
    getItem(<div onClick={() => nav("/profile/applications")}>
      Application
    </div>, '2', <CalendarOutlined />),
    getItem(<div onClick={() => nav("/profile/manageChild")}>
      Manage Child
    </div>, '3', <CalendarOutlined />),
    getItem('Common Form', '4', <CalendarOutlined />),
    getItem('Shortlisted Schools', '5', <CalendarOutlined />),
    getItem('Notification Settings', '6', <CalendarOutlined />),

  ];

  const { user, setUser } = useContext(UserContext)

  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');
  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <div className='w-100 h-100 d-flex p-5 bg-light'>
      <div className='d-flex bg-white w-100 rounded p-2' style={{ height: "500px" }}>
        <Menu
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode={mode}
          theme={theme}
          items={items}
        />

        <Switch>
          <Route path="/" element={<Personal />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/manageChild" element={<ManageChild />} />
          <Route path="/applications" element={<Applications />} />
        </Switch>


      </div>
    </div>
  )
}

export default Profile
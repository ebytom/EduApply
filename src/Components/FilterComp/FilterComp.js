import React, { useState } from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    // getItem('Option 1', '1', <PieChartOutlined />),
    // getItem('Option 2', '2', <DesktopOutlined />),
    // getItem('Option 3', '3', <ContainerOutlined />),
    getItem('Class', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
    ]),
    getItem('Monthly Fee Range', 'sub6', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem('Board', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    // getItem('Distance Range', 'sub3', <AppstoreOutlined />, [
    //     getItem('Option 9', '9'),
    //     // getItem('Option 10', '10'),
    // ]),

    getItem('School Type', 'sub4', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),

    getItem('Admission Range', 'sub5', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
];
const App = ({}) => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div
            style={{
                width: 256,
            }}
        >
            {/* <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{
                    marginBottom: 16,
                }}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};
export default App;
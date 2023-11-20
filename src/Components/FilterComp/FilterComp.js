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
    getItem('Class', 'sub10', <MailOutlined />, [
        getItem('Class 1', '1'),
        getItem('Class 2', '2'),
        getItem('Class 3', '3'),
        getItem('Class 4', '4'),
        getItem('Class 5', '5'),
        getItem('Class 6', '6'),
        getItem('Class 7', '7'),
        getItem('Class 8', '8'),
        getItem('Class 9', '9'),
        getItem('Class 10', '10'),
    ]),
    getItem('Fee Range', 'sub6', <AppstoreOutlined />, [
        getItem('Less than 50,000', '11', <input type="checkbox" />),
        getItem('50,000 - 1,00,000', '12', <input type="checkbox" />),
        getItem('1,00,000 - 1,50,000', '13', <input type="checkbox" />),
        getItem('1,50,000 - 2,00,000', '14', <input type="checkbox" />),
        getItem('2,00,000 & Above', '15', <input type="checkbox" />),
    ]),
    getItem('Board', 'sub2', <AppstoreOutlined />, [
        getItem('CBSE', '16'),
        getItem('ICSE', '17'),
        getItem('IB', '18'),
    ]),

    getItem('School Type', 'sub4', <AppstoreOutlined />, [
        getItem('Private School', '19'),
        getItem('Government-aided schools', '20'),
        getItem('International School', '21'),
        getItem('National Open Schools', '22'),
        getItem('Special-Needs Schools', '23'),
        getItem('Govt School', '24'),
    ]),
];
const App = ({ }) => {
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
import React, { useState } from 'react'
import { Button, Menu } from 'antd';

import {
    AppstoreOutlined,
    MailOutlined,
} from '@ant-design/icons';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const QuestionBank = () => {

    const [collapsed, setCollapsed] = useState(false);

    const items = [
        // getItem('Option 1', '1', <PieChartOutlined />),
        // getItem('Option 2', '2', <DesktopOutlined />),
        // getItem('Option 3', '3', <ContainerOutlined />),
        getItem('Pre-Nursery', 'sub10', <AppstoreOutlined />, [
            getItem('2018', '1'),
            getItem('2019', '2'),
            getItem('2020', '3'),
            getItem('2021', '4'),
            getItem('2022', '5'),
        ]),
        getItem('Nursery', 'sub2', <AppstoreOutlined />, [
            getItem('2018', '6'),
            getItem('2019', '7'),
            getItem('2020', '8'),
            getItem('2021', '9'),
            getItem('2022', '10'),
        ]),
        getItem('LKG', 'sub3', <AppstoreOutlined />, [
            getItem('2018', '12'),
            getItem('2019', '12'),
            getItem('2020', '13'),
            getItem('2021', '14'),
            getItem('2022', '15'),
        ]),

        getItem('UKG', 'sub4', <AppstoreOutlined />, [
            getItem('2018', '16'),
            getItem('2019', '17'),
            getItem('2020', '18'),
            getItem('2021', '19'),
            getItem('2022', '20'),
        ]),
        getItem('Class 1', 'sub5', <AppstoreOutlined />, [
            getItem('2018', '21'),
            getItem('2019', '22'),
            getItem('2020', '23'),
            getItem('2021', '24'),
            getItem('2022', '25'),
        ]),
        getItem('Class 2', 'sub6', <AppstoreOutlined />, [
            getItem('2018', '26'),
            getItem('2019', '27'),
            getItem('2020', '28'),
            getItem('2021', '29'),
            getItem('2022', '30'),
        ]),
        getItem('Class 3', 'sub7', <AppstoreOutlined />, [
            getItem('2018', '31'),
            getItem('2019', '32'),
            getItem('2020', '33'),
            getItem('2021', '34'),
            getItem('2022', '35'),
        ]),
        getItem('Class 4', 'sub8', <AppstoreOutlined />, [
            getItem('2018', '36'),
            getItem('2019', '37'),
            getItem('2020', '38'),
            getItem('2021', '39'),
            getItem('2022', '40'),
        ]),
        getItem('Class 5', 'sub9', <AppstoreOutlined />, [
            getItem('2018', '1'),
            getItem('2019', '2'),
            getItem('2020', '3'),
            getItem('2021', '4'),
            getItem('2022', '5'),
        ]),
    ];

    return (
        <div className="p-4">
            <b className="fs-4">Question Bank</b>
            <div className="d-flex mt-3 gap-4">
                <div className="d-flex flex-column gap-2 w-100">
                    <div className="p-3 rounded" style={{ background: "#001529" }}>
                        <b className="text-white">CBSE</b>
                    </div>
                    <div className="p-3 rounded h-100 w-100" style={{ background: "#001529" }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    </div>
                </div>

                <div className="d-flex flex-column gap-2 w-100">
                    <div className="p-3 rounded" style={{ background: "#001529" }}>
                        <b className="text-white">ICSE</b>
                    </div>
                    <div className="p-3 rounded h-100 w-100" style={{ background: "#001529" }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    </div>
                </div>

                <div className="d-flex flex-column gap-2 w-100">
                    <div className="p-3 rounded" style={{ background: "#001529" }}>
                        <b className="text-white">IB</b>
                    </div>
                    <div className="p-3 rounded h-100 w-100" style={{ background: "#001529" }}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                            inlineCollapsed={collapsed}
                            items={items}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionBank
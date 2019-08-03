import React, { Fragment, } from 'react';
import { List, Avatar } from 'antd';
const SystemManage = (props) => {

    let listData: any = [];
    listData = props.data && props.data.map(item => {
        return {
            avatar: item.group,
            title: item.group,
            description: '部门介绍 bala bala bala bala',
            content: item.list
        };
    });
    const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
    return (
        <Fragment>
            <List
                className="cbkhome-system"
                itemLayout="vertical"
                size="large"
                pagination={false}
                dataSource={listData}
                renderItem={(item: any) => {
                    const num = Math.floor(4 * Math.random());
                    return (
                        <List.Item
                        // key={item.title}
                        >
                            <List.Item.Meta
                                avatar={<Avatar style={{ backgroundColor: colorList[num], verticalAlign: 'middle' }}>{item.avatar}</Avatar>}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            <List
                                size="small"
                                itemLayout="horizontal"
                                bordered={true}
                                dataSource={item.content}
                                renderItem={(item: any) => <List.Item>
                                    <a href={item.linkurl}>{item.name}</a>
                                    <span onClick={() => props.onLinkChange(item.leadername)}
                                        style={{ padding: '0 200px' }} >{item.leadername || '暂无'}</span>
                                    {item.linkurl}
                                </List.Item>}
                            />
                        </List.Item>
                    );

                }}
            />
        </Fragment>
    );
};

export default SystemManage;
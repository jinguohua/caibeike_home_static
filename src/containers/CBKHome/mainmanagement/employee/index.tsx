import React, { useEffect, useState } from 'react';
import { Card, Skeleton } from 'antd';
import { withRouter } from 'react-router-dom';
import '../../index.less';

const { Meta } = Card;
const Employee = (props) => {
    const [SkeletonFlag, setSkeletonFlag] = useState(true);
    useEffect(() => {
        setTimeout((
        ) => setSkeletonFlag(false), 100);
    }, []);
    return (
        <div style={{}}>
            <div style={{ lineHeight: '36px', marginRight: 20, display: 'flex', fontSize: 14, justifyContent: 'center' }}>
                <input
                    onChange={(e) => props.inputEmployee(e.target.value)}
                    placeholder="家门口"
                    className="home-header-input" />
                {props.isLogin
                    && <a
                        style={{ paddingLeft: 30 }}
                        onClick={() => props.history.push('/cbk/cbkhome/employeeinsert')}>人员录入</a>}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 155 }}>
                {props.data && props.data.map((item, index) => {
                    return (
                        <div style={{ width: '50%', padding: 20 }} key={index}>
                            <Skeleton avatar={true} paragraph={{ rows: 4 }} loading={SkeletonFlag}>
                                <div style={{ float: 'left', paddingRight: 20 }}>
                                    <Card
                                        hoverable={true}
                                        style={{ width: 200 }}
                                        cover={<img alt="example" src={item.image || 'https://caibeikehome.oss-cn-shanghai.aliyuncs.com/1564851952856.png'} />}
                                    >
                                        <Meta
                                            title={item.name || '暂无信息'} description={item.departmentName || '暂无信息'} />
                                    </Card>
                                </div>
                                <div style={{ fontSize: '15px', lineHeight: 2, margin: 'auto 0', color: '#a4a4a4' }}>
                                    性别:&nbsp;&nbsp;&nbsp;{item.sexMsg || '暂无信息'}<br />
                                    工号:&nbsp;&nbsp;&nbsp;{item.JobNum || '暂无信息'}<br />
                                    职位:&nbsp;&nbsp;&nbsp;{item.postName || '暂无信息'}<br />
                                    主管:&nbsp;&nbsp;&nbsp;{item.managerName || '暂无信息'}<br />
                                    生日:&nbsp;&nbsp;&nbsp;{item.birthday || '暂无信息'}<br />
                                    星座:&nbsp;&nbsp;&nbsp;{item.constellationMsg || '暂无信息'}<br />
                                    地址:&nbsp;&nbsp;&nbsp;{item.adress || '暂无信息'}
                                </div>
                            </Skeleton>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default withRouter(Employee);
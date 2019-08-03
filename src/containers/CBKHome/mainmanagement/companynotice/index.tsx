import React from 'react';
import { Carousel, Card, Row, Col, List, Typography, Collapse } from 'antd';
import { withRouter } from 'react-router-dom';
import '../../index.less';
const { Panel } = Collapse;
const CompantNotice = (props) => {
    const Imglist = props.data && props.data.noticeWeek && props.data.noticeWeek.filter(item => item.image) || [];
    return (
        <div className="cbkhome-carousel">
            <div>
                <Row>
                    <Col span={6} style={{ border: '1px solid #e8e8e8', height: 360, overflow: 'auto' }}>
                        <List
                            header={<h3 style={{ backgroundColor: '53c7c9' }}>今日公告
                            {props.isLogin
                                    && <a
                                        style={{ paddingLeft: 30 }}
                                        onClick={() => props.history.push('/cbk/cbkhome/noticelist')}>公告编辑</a>}
                            </h3>}
                            bordered={true}
                            dataSource={props.data && props.data.noticeDay}
                            renderItem={(item: any) => (
                                <List.Item>
                                    <Typography.Text mark={true}>[{item.author}]</Typography.Text> <a >{item.title}</a>
                                </List.Item>
                            )}
                        />
                    </Col>
                    <Col span={18}>
                        <Carousel
                            effect="fade"
                            autoplay={true}
                            dotPosition={'left'}>
                            {
                                Imglist.map(
                                    (item, index) => (
                                        <div key={index}>
                                            <Card
                                                hoverable={true}
                                                style={{ width: '100%' }}
                                                cover={<img alt="example" src={item.image} />}
                                            />
                                            <h3>1</h3>
                                        </div>
                                    )
                                )
                            }
                        </Carousel>
                    </Col>
                </Row>
            </div>
            <div style={{ marginTop: 20, border: '1px solid #ccc ', borderRadius: '5px' }} >
                <h2 style={{ paddingLeft: 20, backgroundColor: '#d9f2f3', height: 43, lineHeight: '43px', borderRadius: '5px' }}>本周公告</h2>
                <Collapse
                    bordered={false}
                    accordion={true}
                >
                    {props.data && props.data.noticeWeek && props.data.noticeWeek.map((item, index) => {
                        return (
                            <Panel header={item.title || '暂无信息'} key={index}>
                                <Card

                                    hoverable={true}
                                    style={{ width: '300px', float: "left" }}
                                    cover={<img alt="example" src={item.image} />}
                                />
                                <p>{item.content || '暂无信息'}</p>
                            </Panel>
                        );
                    })}

                </Collapse>
            </div>

        </div >
    );
};
export default withRouter(CompantNotice);
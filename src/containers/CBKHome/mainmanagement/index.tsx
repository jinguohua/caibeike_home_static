import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import MainContent from './content';
import '../index.less';
// import { homeEmployeesBirthday } from '../action/action';
const HomeInfo = (props) => {
    // const [birthDayUser, setBirthDayUser] = useState([]);
    // useEffect(() => {
    //     homeEmployeesBirthday({}).then(res => {
    //         setBirthDayUser(res.result)
    //     })
    // })
    return (
        <div className="cbkhome-container">
            <div style={{ flex: 1 }}>
                <br />
            </div>
            <div style={{ flex: 10, backgroundColor: '#fff', width: 800 }}>
                <MainContent />
            </div>
            <div style={{ flex: 4 }}>
                <Card
                    hoverable={true}
                    style={{ width: 250, marginLeft: 20 }}
                    cover={<img alt="example" src="https://c.caibeike.net/download/attachments/45187465/user-avatar" />}
                >
                    <Meta
                        title="彩贝壳之家"
                        description={
                            <span>
                                入职已满三年啦
                            <br />
                                &nbsp;&nbsp;&nbsp;&nbsp; 坚持做正确的事，而不是容易的事，加油
                        </span>}
                    />
                </Card>
                <Card
                    title="生日提醒"
                    bordered={true}
                    style={{ width: 250, marginLeft: 20, marginTop: 20 }}
                >
                    {/* {birthDayUser.map(item => item)} */}
                    邓金发
                </Card>
            </div>
        </div>

    );
};

export default HomeInfo;
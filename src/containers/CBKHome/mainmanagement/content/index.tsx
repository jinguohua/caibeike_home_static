import React from 'react';
import { Tabs } from 'antd';
import CompanyNotice from '../companynotice';
import Employee from '../employee';
import SystemManage from '../systemManage';
const { TabPane } = Tabs;

// action 
import {
    homeAddressQuery,
    homeEmployeesQuery,
    homeNoticeQuery,
    homeNoticeList
} from '../../action/action';

class MainContent extends React.Component {
    state = {
        isLogin: false,
        keyword: '',
        emploteeData: [],
        systemData: [],
        noticeDay: [],
        noticeWeek: [],
        activeKey: ''
    };
    homeNoticeQueryAction = () => {
        homeNoticeQuery({ id: 1 });
    }
    homeNoticeListAction = () => {
        homeNoticeList({ type: 'day' }).then(res => {
            this.setState({ noticeDay: res.result });
        });
        homeNoticeList({ type: 'week' }).then(res => {
            this.setState({ noticeWeek: res.result });
        });
    }
    homeEmployeesQueryAction = () => {
        const { keyword } = this.state;
        const reg = /[\u4E00-\u9FA5\uF900-\uFA2D]/;
        if (reg.test(keyword) || keyword === '') {
            homeEmployeesQuery({ keyword, searchType: 1, limit: 6 }).then(res => {
                this.setState({ emploteeData: res.result });
            });
        }
    }
    homeAddressQueryAction = () => {
        homeAddressQuery().then(res => {
            this.setState({ systemData: res.result });
        });
    }
    componentDidMount() {
        this.homeNoticeListAction();
        this.homeNoticeQueryAction();
        this.homeAddressQueryAction();
        this.homeEmployeesQueryAction();
    }
    render() {
        const { isLogin, noticeDay, noticeWeek, systemData, emploteeData, activeKey } = this.state;
        return (
            <div>
                <a
                    onClick={() => this.setState({ isLogin: !isLogin })}
                    style={{
                        right: -919,
                        position: 'relative',
                        top: -123,
                        zIndex: 300,
                    }}
                >{isLogin ? '登录中' : '请登录'}</a>
                <Tabs
                    onChange={(e) => { console.log(e, 'eee'); this.setState({ activeKey: e }); }}
                    activeKey={activeKey} >
                    <TabPane tab="公司公告" key="1" >
                        <CompanyNotice data={{ noticeDay, noticeWeek }} isLogin={isLogin} />
                    </TabPane>
                    <TabPane tab="员工信息查询" key="2">
                        <Employee
                            isLogin={isLogin}
                            data={emploteeData}
                            inputEmployee={(keyword) => this.setState({ keyword }, () => {
                                this.homeEmployeesQueryAction();
                            })}
                        />
                    </TabPane>
                    <TabPane tab="系统地址管理" key="3">
                        <SystemManage
                            onLinkChange={(keyword) => this.setState({ keyword, activeKey: '2' })}
                            isLogin={isLogin}
                            data={systemData} />
                    </TabPane>
                    {/* <TabPane tab="会议室预约" key="4">
                        Content of tab 4
                    </TabPane> */}
                </Tabs>
            </div>
        );
    }
}

export default MainContent;
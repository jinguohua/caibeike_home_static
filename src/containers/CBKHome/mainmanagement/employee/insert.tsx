import React, { useState, useEffect } from 'react';
import { Input, Select, Radio, Upload, Button, Icon, DatePicker } from 'antd';
import { homeDepartmentQuery } from '../../action/action';
import { homeEmployeesSave } from '../../action/action';
import '../../index.less';
const { Option } = Select;
const InsertEmployee = (props) => {
    const [param, setParam] = useState({});
    const [department, setDepartment] = useState([]);
    useEffect(() => {
        homeDepartmentQuery({}).then(res => {
            setDepartment(res.result);
        });
    }, []);
    const job = [
        '技术总监',
        'KA大客户总监',
        'HRG',
        '产品经理',
        'Java工程师',
        'Android工程师',
        '营销专家',
        '运营专家',
        '前端工程师',
        'iOS工程师',
        '客服专员',
        'UI设计师',
    ];
    const propsImg: any = {
        action: '/ajax/home/tool/uploadImg',
        listType: 'picture',
    };
    const handleChange = ({ fileList }) => fileList[0].status === "done"
        && setParam(Object.assign({}, param, { image: fileList[0].response }));
    return (
        <div>
            {/* id	否	int	员工id。为空时新增；不为空时修改
            jobNum
            name	是	string	员工姓名
            departmentId	是	int	部门id
            postName	是	string	岗位名称
            sex	是	int	员工性别。1，男；2，女    className="cbknome-label"
            birthday	是	string	员工生日，格式为：10-16
            image	是	string	员工照片URL
            adress	否	string	员工地址 */}
            <label className="cbknome-label" >工号</label><Input style={{ width: 200 }} onChange={e => setParam(Object.assign({}, param, { jobNum: e.target.value }))} /><br /><br />
            <label className="cbknome-label" >姓名</label><Input style={{ width: 200 }} onChange={e => setParam(Object.assign({}, param, { name: e.target.value }))} /><br /><br />

            <label className="cbknome-label">出生年月</label>
            <DatePicker onChange={e => setParam(Object.assign({}, param, { birthday: e.format('MM-DD') }))} /><br /><br />
            <label className="cbknome-label" >性别</label>
            <Radio.Group onChange={(e) => { setParam(Object.assign({}, param, { sex: e.target.value })) }} >
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
            </Radio.Group><br /><br />
            <label className="cbknome-label" >部门</label>
            <Select
                style={{ width: 120 }}
                onChange={(e: any) => setParam(Object.assign({}, param, { departmentId: e }))}>
                {department && department.map((item: any) => <Option value={item.id} key={item.id}>{item.name}</Option>)}
            </Select><br /><br />
            <label className="cbknome-label" >岗位名称</label>
            <Select
                style={{ width: 120 }}
                onChange={(e: any) => setParam(Object.assign({}, param, { postName: e }))}>
                {job && job.map((item: any) => <Option value={item} key={item}>{item}</Option>)}
            </Select><br /><br />
            <label className="cbknome-label" >头像</label>
            <Upload
                {...propsImg}
                onChange={(e) => handleChange(e)}
            // 
            >
                <Button>
                    <Icon type="upload" /> Upload
                </Button>
            </Upload><br /><br />
            <Button
                className="cbknome-label"
                onClick={() => homeEmployeesSave(param)}>
                提交
                </Button>
        </div >
    );
};
export default InsertEmployee;
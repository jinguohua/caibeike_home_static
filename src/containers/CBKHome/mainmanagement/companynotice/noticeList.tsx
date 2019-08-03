import React, { useState } from 'react';
import { Input, Radio, Upload, Button, Icon, DatePicker } from 'antd';
import { homeNoticeCreate } from '../../action/action';
import '../../index.less';
const noticeList = (props) => {
    const [param, setParam] = useState({});
    const propsImg: any = {
        action: '/ajax/home/tool/uploadImg',
        listType: 'picture',
    };

    const handleChange = ({ fileList }) => fileList[0].status === 'done'
        && setParam(Object.assign({}, param, { imageUrl: fileList[0].response }));
    return (
        <div>
            {/* title	是	string	公告标题
                imageUrl	是	string	图片链接
                content	是	string	公告内容
                isTop	是	int	是否置顶 0不置顶 1置顶
                activeTime	是	int	活跃天数
                content */
            }

            <label className="cbknome-label">公告标题</label><Input style={{ width: 200 }} onChange={e => setParam(Object.assign({}, param, { title: e.target.value }))} /><br /><br />
            <label className="cbknome-label">是否置顶</label>
            <Radio.Group onChange={(e) => { setParam(Object.assign({}, param, { isTop: e.target.value })) }} >
                <Radio value={1}>置顶</Radio>
                <Radio value={0}>不置顶</Radio>
            </Radio.Group><br /><br />
            <label className="cbknome-label">公告内容</label>
            <Input.TextArea
                style={{ width: 600 }}
                rows={8}
                onChange={e => setParam(Object.assign({}, param, { content: e.target.value }))}
            /><br /><br />
            <label className="cbknome-label">活跃天数</label>
            起始时间 <DatePicker onChange={e => setParam(Object.assign({}, param, { startTime: e.format('YYYY-MM-DD HH:mm:ss') }))} />
            终止时间 <DatePicker onChange={e => setParam(Object.assign({}, param, { endTime: e.format('YYYY-MM-DD HH:mm:ss') }))} />
            <br /><br />
            <label className="cbknome-label">图片链接</label>
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
                onClick={() => homeNoticeCreate(param)}>
                提交
            </Button>
        </div>
    );
};
export default noticeList;
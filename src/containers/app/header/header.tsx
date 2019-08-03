import React from 'react';
// import { Input } from 'antd';
// import { aLink, random } from '../../../../assets/js/util/util';
// import Address from '../../../../location';
// import { dispatchLoginOut } from '../action/action';
import './header.less';
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

export default function Header(props) {
    // const [personMenus] = useState([]);
    // const [userName] = useState(localStorage.getItem('userName'));

    // function loginOut() {
    //     dispatchLoginOut({}, function (res) {
    //         if (res.code !== 200) {
    //             message.warn(res.message || '服务系统异常', 1.2);
    //         } else {
    //             location.href = `${Address.path}${Address.originPath}/login.html`;
    //         }
    //     });
    // };

    return (
        <div className="navbar" style={{ display: 'flex', justifyContent: 'space-between', height: '100%', zIndex: 300 }} >
            <div>
                <img
                    className="navbar-logo-leaf disInlineBlock"
                    src="data:image/png;base64,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" />
                <div className="navbar-logo-text disInlineBlock"
                // onClick={() => location.href = Address.path + Address.originPath + "/index.html"}
                >
                    {/* &nbsp;&nbsp; 彩贝壳之家 */}
                </div>
            </div>

            {/* <Menu className="disInlineBlock fr"
                mode="horizontal" >
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper" >
                            <img className="navbar-logo-user"
                                src="https://static.caibeike.com/i/0fe8d64e416974d3e128e84d50f18529-jAXuIG" />
                            <span className="navbar-logo-title" > {userName}, 欢迎您 </span>
                        </span>}>
                    <MenuItemGroup>
                        {
                            personMenus.map((item: any) => {
                                return (
                                    <Menu.Item key={random()} onClick={() => {
                                        aLink(item.url);
                                    }
                                    }> {item.title} </Menu.Item>
                                );
                            })
                        }
                        <Menu.Item onClick={loginOut}> 退出 </Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
            </Menu> */}
        </div >
    );
}
import React from 'react';
import { Route } from 'react-router-dom';
import Header from './header/header';
// import Address from './../../../location';
import './index.less';
import './reset_antd.less';

export default function Index(props) {
    // let [accountInfo, setAccountInfo] = useState([]);
    //
    // useEffect(() => {
    //     accountInfo = sessionStorage.getItem('accountInfo') ? JSON.parse(sessionStorage.getItem('accountInfo')) : [];
    //     if (!sessionStorage.getItem('accountInfo') || !accountInfo || !accountInfo.leftMenus || !accountInfo.leftMenus.length) {
    //         location.href = `${Address.path}/login.html`;
    //     } else {
    //         accountInfo ? setAccountInfo() : message.error('授权失败', 2, () => {
    //             location.href = `${Address.path}/login.html`;
    //         });
    //     }
    // }, []);

    return (
        <div className="ops-body">
            <div className="ops-header">
                <Header history={props.history} />
                <div style={{
                    height: 85,
                    position: 'fixed',
                    top: 60,
                    width: '100%',
                    backgroundColor: '#53c7c9',
                    zIndex: 1
                }} />
            </div>
            <div className="ops-main">
                <div className="ops-container">

                    {props.routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={() => (
                                <route.component {...props.routes} routes={route.routes} />
                            )}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import finalCreateStore from '@/store/configureStore';
import reducer from '@/reducer/index';

let store = finalCreateStore(reducer);
import EntryApp from '@/containers/entry';
import '../../assets/css/global.less';
import '../../assets/css/reset_antd.less';
import './index.less';
import 'babel-polyfill';

// 语言包
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

// fundebug
import ErrorBoundary from '../fundebug';

if (module.hot) {
    module.hot.accept();
}

// 错误监控
if (process.env.NODE_LOCATION === 'production') {
    render(
        <ErrorBoundary>
            <Provider store={store}>
                <LocaleProvider locale={zhCN}>
                    <EntryApp />
                </LocaleProvider>
            </Provider>
        </ErrorBoundary>,
        document.getElementById('home-content')
    );
} else {
    render(
        <Provider store={store}>
            <LocaleProvider locale={zhCN}>
                <EntryApp />
            </LocaleProvider>
        </Provider>,
        document.getElementById('home-content')
    );
}


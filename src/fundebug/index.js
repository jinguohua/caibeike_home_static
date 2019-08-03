import React, { Component } from "react"

const _FUNDEBUG = require('fundebug-javascript');
_FUNDEBUG.apikey = 'b992c7bae63089aa53566b2bae4f313d8b230184e0662966ff721c770f69d165';

// 过滤特定类型的错误
_FUNDEBUG.filters = [
    {
        url: /^((?!(ops.caibeike.com)).)*$/
    }
];

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
        // 将component中的报错发送到Fundebug
        _FUNDEBUG.notifyError(error, {
            metaData: {
                info: info
            }
        });
    }

    render() {
        if (this.state.hasError) {
            return null;
            // Note: 也可以在出错的component处展示出错信息，返回自定义的结果。
        }
        return this.props.children;
    }
}


export default ErrorBoundary;

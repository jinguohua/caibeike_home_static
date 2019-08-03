import Loadable from 'react-loadable';
import { Loading } from '../../components/loading/index';

export const oputilRoutes = [
    /**
     * 公告展示
     */
    {
        path: '/cbk/cbkhome/notice',
        exact: false,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'cbkhome' */'./mainmanagement/index'),
            loading: Loading,
            timeout: 10000
        })
    },
     /**
     * 公告新增
     */
    {
        path: '/cbk/cbkhome/noticelist',
        exact: false,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'cbkhomenoticelist' */'./mainmanagement/companynotice/noticeList'),
            loading: Loading,
            timeout: 10000
        })
    },
    /**
     * 人员录入
     */
    {
        path: '/cbk/cbkhome/employeeinsert',
        exact: false,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'cbkhomenoticelist' */'./mainmanagement/employee/insert'),
            loading: Loading,
            timeout: 10000
        })
    },
];

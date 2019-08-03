import App from './../../../containers/app/index';

// 列表
import { oputilRoutes } from './../../CBKHome/routes';
export const AppRoutes = [
    {
        exact: true,
        component: App,
        routes: [
            ...oputilRoutes
        ]
    }
];

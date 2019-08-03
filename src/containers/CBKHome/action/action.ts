import { fetch } from './../../../../assets/js/axios/axios';
// import Address from '../../../../location'

/**
 * 部门查询
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */
export function homeDepartmentQuery(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/department/query',
        type: 'post',
        stringify: true,
        data: data,
    });
}
/**
 * 查询用户信息
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeNoticeQuery(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/notice/query',
        type: 'post',
        stringify: true,
        data: data,
    });
}
/**
 * 查询用户信息
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeNoticeList(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/notice/list',
        type: 'post',
        stringify: true,
        data: data,
    });
}
/**
 * 查询用户信息
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeAddressQuery() {
    return fetch({
        unload: true,
        url: '/ajax/home/address/query',
        type: 'post',
        stringify: true,
        data: {},
    });
}
/**
 * 查询用户信息
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeEmployeesQuery(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/employees/query',
        type: 'post',
        stringify: true,
        data: data,
    });
}

/**
 * 查询用户新增
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeEmployeesSave(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/employees/save',
        type: 'post',
        stringify: true,
        data: data,
    });
}

/**
 * 查询用户新增
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeNoticeCreate(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/notice/create',
        type: 'post',
        stringify: true,
        data: data,
    });
}
/**
 * 生日提醒
 * @param  data.userName	string	 用户名
 * @param  data.status	number	 状态
 * @param  data.offset	number	 分页开始数
 * @param  data.limit	number	 分页数量
 * @return {json}
 */

export function homeEmployeesBirthday(data) {
    return fetch({
        unload: true,
        url: '/ajax/home/employees/birthday',
        type: 'post',
        stringify: true,
        data: data,
    });
}

import 'whatwg-fetch';
import { Toast } from 'antd-mobile';

/**
 * 网络模块
 */

const objectSerialization = (object) => {
    let formData = '';
    Object.keys(object).forEach((key) => {
        formData += (`${key}=${object[key]}&`);
    });
    formData = formData.slice(0, formData.length - 1);
    return formData;
};

const checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        console.log('statusText', response.statusText);
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

const parseJSON = (response) => {
    return response.json();
};

const parseText = (response) => {
    return response.text();
};

const asyncGet = (url, params, callback) => {
    if (Object.prototype.toString.call(params) === '[object Object]') {
        params = objectSerialization(params);
    }
    fetch(`${url}?${params}`, {
        method: 'GET',
        credentials: 'same-origin',
    }).then(checkStatus).then(parseJSON).then((data) => {
        if (data.code === 401) {
            Toast.fail('请登录', 3, null, false);
            return;
        }
        callback(data);
    })
        .catch((ex) => {
            console.log('parsing failed', ex);
            Toast.fail('网络请求异常,请稍后再试', 3, null, false);
        });
};

const getText = (url, params, callback) => {
    if (Object.prototype.toString.call(params) === '[object Object]') {
        params = objectSerialization(params);
    }
    fetch(`${url}?${params}`, {
        method: 'GET',
        credentials: 'same-origin',
    }).then(checkStatus).then(parseText).then((data) => {
        if (data.code === 401) {
            Toast.fail('请登录', 3, null, false);
            return;
        }
        callback(data);
    })
        .catch((ex) => {
            console.log('parsing failed', ex);
            Toast.fail('网络请求异常,请稍后再试', 3, null, false);
        });
};

const asyncPost = (url, params, callback) => {
    if (Object.prototype.toString.call(params) === '[object Object]') {
        params = objectSerialization(params);
    }
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: params,
        credentials: 'same-origin',
    }).then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            if (data.code === 401) {
                Toast.fail('请登录', 3, null, false);
                return;
            }
            callback(data);
        })
        .catch((ex) => {
            console.log('parsing failed', ex);
            Toast.fail('网络请求异常,请稍后再试', 3, null, false);
        });
};

const postJson = (url, params, callback) => {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
        credentials: 'same-origin',
    }).then(checkStatus)
        .then(parseJSON)
        .then((data) => {
            if (data.code === 401) {
                Toast.fail('请登录', 3, null, false);
                return;
            }
            callback(data);
        })
        .catch((ex) => {
            console.log('parsing failed', ex);
            Toast.fail('网络请求异常,请稍后再试', 3, null, false);
        });
};

export { asyncGet, getText, asyncPost, postJson };

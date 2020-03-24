import request from "@/utils/request";

export function getArticleListPaging(params) {
    return request({
        url: '/article',
        method: 'get',
        params
    });
}

export function getArticleLatest() {
    return request({
        url: '/article/latest',
        method: 'get',
    });
}

export function getArticleMaximum() {
    return request({
        url: '/article/maximum',
        method: 'get'
    });
}

export function getArticleArchives() {
    return request({
        url: '/article/archives',
        method: 'get'
    });
}

export function getArticleByID(id) {
    return request({
        url: `/article/${id}`,
        method: 'get'
    });
}


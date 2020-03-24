import service from "@/utils/request";

export function getLabelListAll() {
    return service({
        url: '/label',
        method: 'get',
        params: {'number': 0, 'size': 0}
    });
}

export function getLabelArticlesDetail(name) {
    return service({
        url: `/label/${name}`,
        method: 'get'
    });
}

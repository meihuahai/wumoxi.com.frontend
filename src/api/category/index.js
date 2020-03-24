import service from "@/utils/request";

export function getCategoryArticlesList() {
    return service({
        url: '/category/articles',
        method: 'get'
    });
}

export function getCategoryArticlesDetail(name) {
    return service({
        url: `/category/${name}`,
        method: 'get'
    });
}

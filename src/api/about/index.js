import service from "@/utils/request";

export function getIntroduceDetail() {
    return service({
        url: "/common-detail/introduce",
        method: "get"
    });
}

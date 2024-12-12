const base = {
    get() {
        return {
            url : "http://localhost:8080/logisticsManage/",
            name: "logisticsManage",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/logisticsManage/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "物流管理系统"
        } 
    }
}
export default base

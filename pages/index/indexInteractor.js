import baseInteractor from '../../common/mip/baseInteractor';
import util from '../../utils/util';
import systemService from '../../service/systemService';

export default class indexInteractor extends baseInteractor {

    constructor() {
        super();
    }

    onLoad(options) {
        if (util.getUserInfo()) {
            this.view.setUserInfo(util.getUserInfo());
        } else if (this.page.canIUse('button.open-type.getUserInfo')) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            util.getApplication().userInfoReadyCallback = res => {
                this.view.setUserInfo(util.getUserInfo());
            }
        } else {
            let that = this;
            // 在没有 open-type=getUserInfo 版本的兼容处理
            systemService.getUserInfo()
                .then(res => {
                    util.setUserInfo(res.userInfo);
                    that.view.setUserInfo(res.userInfo)
                });
        }
    }

    onClickUserInfo(e) {
        util.setUserInfo(e.detail.userInfo);
        this.view.setUserInfo(e.detail.userInfo);
    }

    onClickUserAvatar() {
        this.page.navigateTo({url: '../logs/logs'})
    }
}
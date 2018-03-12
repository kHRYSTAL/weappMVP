const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
};

function getUserInfo() {
    return getApp().globalData.userInfo;
}

function setUserInfo(userInfo) {
    getApp().globalData.userInfo = userInfo;
}

function getApplication() {
    return getApp();
}

module.exports = {
    formatTime: formatTime,
    getUserInfo: getUserInfo,
    setUserInfo: setUserInfo,
    getApplication: getApplication
};

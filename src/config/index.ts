// 请求后台API附带的HTTP Header标识
export const AccessToken = 'Authorization'
// 请求后台API时附带的语言标识
export const LangKey = 'language'

// 后台API响应状态码
export const ResponseCode = {
    OK: 10000,
    TOKEN_INVALID: 10114,
}

// OTA升级失败原因
export const OTAFailReason = {
    101: { name: '未知错误', value: 101 },
    102: { name: '启动文件传输服务失败', value: 102 },
    201: { name: '文件不存在', value: 201 },
    202: { name: '打开文件失败', value: 202 },
    203: { name: '读文件失败', value: 203 },
    204: { name: '写文件失败', value: 204 },
    205: { name: 'RAM不足', value: 205 },
    301: { name: '未知的网络错误', value: 301 },
    302: { name: 'URL格式不正确', value: 302 },
    303: { name: '无法解析主机', value: 303 },
    304: { name: '无法连接', value: 304 },
    305: { name: 'HTTP协议返回错误', value: 305 },
    306: { name: '启动上传失败', value: 306 },
    307: { name: '操作超时', value: 307 },
    308: { name: '服务器不支持或接受范围请求', value: 308 },
    309: { name: 'HTTP的post请求失败', value: 309 },
    310: { name: '无法恢复下载', value: 310 },
    311: { name: '被回调中止', value: 311 },
    312: { name: '重定向太多', value: 312 },
    313: { name: '没有从服务器返回任何内容', value: 313 },
    314: { name: '发送网络数据失败', value: 314 },
    315: { name: '接收网络数据失败', value: 315 },
    316: { name: '无法识别的传输编码', value: 316 },
    317: { name: '超出最大文件大小', value: 317 },
    318: { name: '远程服务器拒绝登录', value: 318 },
    319: { name: '服务器上的磁盘空间不足', value: 319 },
    320: { name: 'URL中引用的资源不存在', value: 320 },
    321: { name: 'SSL/TLS握手中出现问题', value: 321 },
    322: { name: '远程服务器的SSL证书异常', value: 322 },
    323: { name: '找不到指定的加密引擎', value: 323 },
    324: { name: '将所选SSL加密引擎设置为默认值失败', value: 324 },
    325: { name: '本地客户端证书的问题', value: 325 },
    326: { name: '无法使用指定的密码', value: 326 },
    327: { name: '同侪凭证不能与已知的CA证书进行身份验证', value: 327 },
    328: { name: '启动SSL引擎失败', value: 328 },
    329: { name: '读取SSL CA证书时出现问题', value: 329 },
    401: { name: '无效的主题', value: 401 },
    402: { name: '请求超时', value: 402 },
    403: { name: '发送消息失败', value: 403 },
    404: { name: '接收消息失败', value: 404 },
    501: { name: '无效的参数', value: 501 },
    502: { name: '无效的设备信息', value: 502 },
    503: { name: '无效的任务', value: 503 },
    504: { name: '无效的配置表', value: 504 },
    601: { name: 'ecu信息不全', value: 601 },
    701: { name: '服务器返回缺少信息', value: 701 },
    702: { name: '服务器未知状态', value: 702 },
    703: { name: '服务器内部异常', value: 703 },
    704: { name: '已经是最新版本', value: 704 },
    705: { name: '设备未注册', value: 705 },
    706: { name: '设备不存在', value: 706 },
    707: { name: '参数Json格式转换异常', value: 707 },
    708: { name: '参数校验失败', value: 708 },
    709: { name: '签名验证失败', value: 709 },
    710: { name: '文件保存异常', value: 710 },
    711: { name: '文件格式非法', value: 711 },
    712: { name: '任务终止', value: 712 },
    801: { name: '状态机异常', value: 801 },
    802: { name: '文件大小校验失败', value: 802 },
    803: { name: '文件sha256校验失败', value: 803 },
    804: { name: '安装前置条件不满足', value: 804 },
    805: { name: '无效的安装依赖', value: 805 },
    806: { name: '安装前校验ECU版本不符合安装策略', value: 806 },
    901: { name: '暂停下载', value: 901 },
    902: { name: '取消下载', value: 902 },
    903: { name: '取消安装', value: 903 },
}

import VKConnect from '@vkontakte/vkui-connect-mock';

class VkService {
    constructor() {
        VKConnect.send('VKWebAppInit', {});
    }

    getUser() {
        return promisify('VKWebAppGetUserInfo');
    }
}

function promisify(eventName, params = {}) {
    return new Promise(resolve => {
        const fn = e => {
            if (e.detail.type === `${eventName}Result`) {
                VKConnect.unsubscribe(fn);
                resolve(e.detail.data);
            }
        };
        VKConnect.subscribe(fn);
        VKConnect.send(eventName, params);
    })
}

const vkService = new VkService();
export default vkService;

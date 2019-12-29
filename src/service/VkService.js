import VKConnect from '@vkontakte/vkui-connect-mock';
import {User} from "../domain/domain";

class VkService {
    constructor() {
        VKConnect.send('VKWebAppInit', {});
    }

    getUser() {
        return promisify('VKWebAppGetUserInfo')
            .then(usr => new User(usr.id, usr.first_name, usr.last_name, usr.photo_200));
    }

    // TODO: externalize params
    getToken() {
        return VKConnect.send("VKWebAppGetAuthToken",
            {
                "app_id": 7260072,
                "scope": "status"
            });
    }

    // TODO: come up with a workaround for VK limitations
    getUsers(offset, filter) {
        return this.getUser()
            .then(user => {
                const usrs = [];
                for (let i = 0; i < 2; i++) {
                    const newUser = JSON.parse(JSON.stringify(user));
                    newUser.surname = Math.random();
                    usrs.push(newUser);
                }
                return usrs;
            });
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

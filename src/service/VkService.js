import connect from "@vkontakte/vk-connect";

class VkService {
    init() {
        connect.send("VKWebAppInit", {});
    }
}

const vkService = new VkService();
export default vkService;

// TODO: implement
class DataService {
    saveReaction() {

    }

    getMatches() {
        return [];
    }
}

const dataService = new DataService();
export const Reactions = {
    'dislike': 0,
    'like': 1
};

Object.freeze(Reactions);

export default dataService;

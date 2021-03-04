export const actionsType = {
    addTracker: 'ADD_TRACKER',
};

const initialState = {
    trackers: {
        data: [
            {
                id: 1,
                name: 'Hello',
            },
            {
                id: 2,
                name: 'fello',
            },
        ],
    },
};

export function reducerTrackers(state = initialState, action) {
    switch (action.type) {
        case actionsType.addTracker:
            return {
                ...state,
                tweets: action.payload,
            };
        default:
            return state;
    }
}

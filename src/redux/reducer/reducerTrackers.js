export const actionTypes = {
    addTracker: 'ADD_TRACKER',
};

const initialState = {
    trackers: [
        {
            id: 1,
            name: 'My new tracker',
        },
        {
            id: 2,
            name: 'Blue sky',
        },
    ],
};

export function reducerTrackers(state = initialState, action) {
    switch (action.type) {
        case actionTypes.addTracker:
            const { name } = action.payload.newTracker;
            const newTrackerAdd = {
                id: 5,
                name: name,
            };
            return {
                ...state,
                trackers: [...state.trackers, newTrackerAdd],
            };
        default:
            return state;
    }
}

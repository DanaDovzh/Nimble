export const actionTypes = {
    addTracker: 'ADD_TRACKER',
};

const allTrackers = {
    trackers: [
        {
            name: 'My new tracker',
            timeTracker: '0:40:43',
        },
        {
            id: 2,
            name: 'Blue sky',
            timeTracker: '1:02:14',
        },
    ],
};

if (!localStorage.getItem('allTrackers')) {
    localStorage.setItem('allTrackers', JSON.stringify(allTrackers));
}

const initialState = JSON.parse(localStorage.getItem('allTrackers'));

export function reducerTrackers(state = initialState, action) {
    switch (action.type) {
        case actionTypes.addTracker:
            const { name } = action.payload.newTracker;
            const newTrackerAdd = {
                name: name,
                timeTracker: '0:00:00',
            };
            const newAllTrackers = {
                ...state,
                trackers: [...state.trackers, newTrackerAdd],
            };
            localStorage.setItem('allTrackers', JSON.stringify(newAllTrackers));
            return newAllTrackers;
        default:
            return state;
    }
}

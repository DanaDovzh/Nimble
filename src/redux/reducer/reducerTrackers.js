import moment from 'moment';
export const actionTypes = {
    addTracker: 'ADD_TRACKER',
    timeTracker: 'TIME_TRACKER_MORE',
};

const allTrackers = {
    trackers: [
        {
            id: 1,
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
                id: state.trackers.length + 1,
                name: name,
                timeTracker: '0:00:00',
            };
            const newAllTrackers = {
                ...state,
                trackers: [...state.trackers, newTrackerAdd],
            };
            localStorage.setItem('allTrackers', JSON.stringify(newAllTrackers));
            return newAllTrackers;
        case actionTypes.timeTracker:
            state.trackers.map((tracker) => {
                if (tracker.id === action.payload.id) {
                    tracker.timeTracker = moment().format('h:mm:ss');
                    localStorage.setItem('allTrackers', JSON.stringify(state));
                }
            });
            return JSON.parse(localStorage.getItem('allTrackers'));
        default:
            return state;
    }
}

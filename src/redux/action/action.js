import { actionTypes } from '../reducer/reducerTrackers';

export const addTracker = (newTracker) => ({
    type: actionTypes.addTracker,
    payload: { newTracker },
});

export const updateTimeTracker = (id) => ({
    type: actionTypes.timeTracker,
    payload: { id },
});

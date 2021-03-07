import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Record from './Record';

const ListRecords = () => {
    const dispatch = useDispatch();
    const trackers = useSelector((state) => state.reducerTrackers.trackers);
    const trackersReversed = [...trackers].reverse();
    return (
        <ul>
            {trackersReversed.map((tracker) => (
                <Record name={tracker.name} timeTracker={tracker.timeTracker} />
            ))}
        </ul>
    );
};
export default ListRecords;

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Record from './Record';

const ListRecords = () => {
    const trackers = useSelector((state) => state.reducerTrackers.trackers);
    const trackersReversed = [...trackers].reverse();

    return (
        <ul>
            {trackersReversed.map((tracker) => (
                <Record
                    name={tracker.name}
                    timeTracker={tracker.timeTracker}
                    id={tracker.id}
                />
            ))}
        </ul>
    );
};
export default ListRecords;

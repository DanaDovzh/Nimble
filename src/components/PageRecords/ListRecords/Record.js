import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import './record.sass';

const Record = ({ name }) => {
    return (
        <li class="record">
            {name}
            <p>
                <IconButton>
                    <PlayCircleOutlineIcon fontSize="small" />
                </IconButton>
                <IconButton>
                    <DeleteOutlineRoundedIcon fontSize="small" />
                </IconButton>
            </p>
        </li>
    );
};

export default Record;

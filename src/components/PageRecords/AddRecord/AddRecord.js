import React from 'react';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';

const AddRecord = () => {
    return (
        <FormControl variant="outlined">
            <InputLabel htmlFor="add-tracker">Add tracker</InputLabel>
            <OutlinedInput
                id="add-tracker"
                type="text"
                placeholder="Enter tracker name"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <PlayCircleFilledRoundedIcon fontSize="large" />
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
    );
};

export default AddRecord;

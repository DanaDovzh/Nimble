import React from 'react';
import Typography from '@material-ui/core/Typography';

const HeadLine = ({ title }) => {
    return (
        <Typography variant="h3" align="center">
            {title}
        </Typography>
    );
};

export default HeadLine;

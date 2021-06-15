import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { varWrapEnter } from './variants';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const MotionContainer = ({ open, children, className, ...other }: any) => {
    const classes = useStyles();

    return (
        <Box
            component={motion.div}
            initial={false}
            animate={open ? 'animate' : 'exit'}
            variants={varWrapEnter}
            className={clsx(classes.root, className)}
            {...other}
        >
            {children}
        </Box>
    );
}

export default MotionContainer;

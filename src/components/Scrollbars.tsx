import React from 'react';
import clsx from 'clsx';
import SimpleBarReact from 'simplebar-react';
import { makeStyles } from '@material-ui/core/styles';
import { alpha } from '../utils/helpers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: '100%',
    overflow: 'hidden'
  },
  scroll: {
    maxHeight: '100%',
    '& .simplebar-scrollbar': {
      '&:before': {
        backgroundColor: alpha(theme.palette.grey[600], 0.48)
      },
      '&.simplebar-visible:before': {
        opacity: 1
      }
    },
    '& .simplebar-vertical': {
      width: 10
    },
    '& .simplebar-horizontal .simplebar-scrollbar': {
      height: 6
    },
    '& .simplebar-mask': {
      zIndex: 'inherit'
    },
    '& .simplebar-content-wrapper::-webkit-scrollbar': {
      display: 'none'
    }
  }
}));

function Scrollbars({ children, className, ...other }: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SimpleBarReact
        timeout={500}
        clickOnTrack={false}
        className={clsx(classes.scroll, className)}
        {...other}
      >
        {children}
      </SimpleBarReact>
    </div>
  );
}

export default Scrollbars;

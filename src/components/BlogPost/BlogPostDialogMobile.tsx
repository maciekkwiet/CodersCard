import React, { FC } from 'react';

import { BlogPostDialogProps } from './BlogPostDialog';
import { IconButton } from '../IconButton/IconButton';
import { Tag } from '../Tag/Tag';

import { X, ChevronLeft, ChevronRight } from 'react-feather';
import { Box, Dialog, makeStyles, Typography } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  buttons: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    opacity: 0.4,
  },
  img: {
    marginTop: theme.spacing(1, 2),
    width: '100%',
    height: 'auto',
  },
  wrapper: { boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.2)' },
  textHeader: { marginBottom: theme.spacing(0.5) },
  subtitle: { margin: theme.spacing(0.5, 0, 1, 0) },
  contentHeader: { marginTop: theme.spacing(2) },
}));

const BlogPostDialogMobile: FC<BlogPostDialogProps> = ({ isOpen, ...props }) => {
  const classes = useStyles();

  return (
    <Box display="inline-block">
      <Dialog className={classes.wrapper} fullScreen={true} open={isOpen} {...props}>
        <Box className={classes.buttons}>
          <Box display="flex">
            <Box mr="15px">
              <IconButton color="inherit" {...props} size={'small'}>
                <ChevronLeft size={20} />
              </IconButton>
            </Box>
            <IconButton color="inherit" {...props} size={'small'}>
              <ChevronRight size={20} />
            </IconButton>
          </Box>
          <IconButton color="inherit" {...props} size={'small'}>
            <X size={20} />
          </IconButton>
        </Box>
        <img className={classes.img} src={props.imgurl} />
        <Box bgcolor="background.light" p={3}>
          <Typography className={classes.textHeader} variant="h4" color="textPrimary">
            {props.title}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2" color="textPrimary">
            {props.subtitle}
          </Typography>
          <Tag label="Teamwork" color="secondary" />
          <Typography className={classes.contentHeader} variant="body1" color="textSecondary">
            {props.contentheader}
          </Typography>
        </Box>
        <Box p={4}>
          {' '}
          <Typography variant="body2" color="textSecondary">
            {props.contentmain}
          </Typography>
        </Box>
      </Dialog>
    </Box>
  );
};

export default BlogPostDialogMobile;

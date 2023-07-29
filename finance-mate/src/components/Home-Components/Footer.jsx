import React from "react";
import { Box, Typography, Link, Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#0a210f',
    color: '#fff',
    padding: theme.spacing(2),
  },
  footerLinks: {
    display: 'flex',
    justifyContent: 'space-evenly',
    listStyle: 'none',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      lineHeight: 2,
    }
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      color: '#ccc'
    }
  }
}));

const Footer = () => {
  const classes = useStyles();

  const FooterLink = ({ url, name }) => (
    <Link href={url} className={classes.link}>
      {name}
    </Link>
  );

  return (
    <Box className={classes.root} component="footer">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="p">
            Made By:
          </Typography>
          <Typography variant="h6" component="p">
            The boys
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <ul className={classes.footerLinks}>
            <li><FooterLink url="/about" name="About Us" /></li>
            <li><FooterLink url="/contact" name="Contact" /></li>
            <li><FooterLink url="/privacy-policy" name="Privacy Policy" /></li>
            <li><FooterLink url="/terms-of-service" name="Terms of Service" /></li>
          </ul>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" component="p">
            &copy; {new Date().getFullYear()} The boys
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

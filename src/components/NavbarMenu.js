import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    color: "white",
  },
}));

const NavbarMenu = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [catFactActive, setCatFactActive] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCatFact = () => {
    setCatFactActive(!catFactActive);
  };

  props.CatFactActivity(catFactActive)
  console.log("catFactActive", catFactActive);

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <IconButton edge="start" aria-label="menu">
          <MenuIcon className={classes.menuButton} />
        </IconButton>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Calculator</MenuItem>
        <MenuItem onClick={handleClose}>Clock</MenuItem>
        <MenuItem onClick={() => {handleCatFact(); handleClose()}}>Cat Fact</MenuItem>
      </Menu>
    </div>
  );
}

export default NavbarMenu
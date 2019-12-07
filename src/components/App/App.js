import React from 'react';
import PropTypes from 'proptypes';
import useStyles from './App.styles';

function App ( {name} ) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {name}
    </div>
  );
}

App.propTypes = {
  name: PropTypes.string,
};

export default App;
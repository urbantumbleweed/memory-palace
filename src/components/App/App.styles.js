import { createUseStyles } from 'react-jss';
import jss from 'jss';

const styles = {
  container: {
      padding: 0,
      backgroundColor: 'rgba(200, 200, 200, 0.9)'
  },
};

export const styleSheet = jss.createStyleSheet(styles);

export default createUseStyles(styles);
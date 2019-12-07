import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reset from 'reset-jss';
import normalize from 'normalize-jss';
import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset());
jss.createStyleSheet(reset).attach();
jss.createStyleSheet(normalize).attach();

export default ReactDOM.render(
    <App name="stephen" />,
    document.getElementById('app')
);
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import { hashHistory } from 'react-router';
import indexRoute from './routes/index';
import './index.css';

/**
 * 入口JS
 */

window.onload = () => {
    hashHistory.push('/app');
};

ReactDOM.render(
    indexRoute,
    document.getElementById('root'),
);

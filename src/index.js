import ReactDOM from 'react-dom/client';
import "./index.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASEURL;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


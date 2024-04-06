import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/root.css';
import AppRouter from './components/AppRouter';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<AppRouter />
);

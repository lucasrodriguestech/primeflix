import RoutesApp from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer outClose={3000}/>
      <RoutesApp />
    </div>
  );
}

export default App;

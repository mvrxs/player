import logo from './logo.svg';
import './App.css';
import Player from './components/Player';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        < Player />
      </header>
      <footer className='fixed bottom-0 w-full text-slate-600 text-right px-2 py-4'>
        <p>mvrxs_dev &copy;</p>
      </footer>
    </div>

  );
}

export default App;

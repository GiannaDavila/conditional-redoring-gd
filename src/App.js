import './App.css';
import Movies from './components/Movies';
import Hero from './components/Hero';

function App() {
  const myName = 'Muñeca'
  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <Movies/>
         {myName
         ? <p>Welcome Back!</p>
         : <p>Please Login above.</p>
         } 
<p>Hello {myName || 'Guest'}.</p>
      </header>
    </div>
  );
}

export default App;

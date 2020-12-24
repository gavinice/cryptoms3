import logo from './logo.svg';

function App() {
  return (
    <div className="text-white bg-black">
      <header className="">
        <img src={logo} className="w-1/2 mx-auto" alt="logo" />
        <div className="flex justify-center">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

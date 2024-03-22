import Navbar from './Navbar';

function App() {
const title = "Welcome to my blog"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default App;

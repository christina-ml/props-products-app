import './App.css';
import RecommendedProducts from './Components/RecommendedProducts';

function App() {
  return (
    <div className="App">
      <h1>Christina is Awesome</h1>
      <h2>These products are great!</h2>
      <RecommendedProducts title={"Christina's recommended shoes"} />
      <RecommendedProducts title={"Younes's recommended shoes"} />
    </div>
  );
}

export default App;

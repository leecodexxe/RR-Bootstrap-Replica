import './App.css';
import TopBar from './component/TopBar';
import Background from './component/Background';
import StoreListings from './component/StoreListing';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
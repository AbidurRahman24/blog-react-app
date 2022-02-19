import './App.css';
import Header from './components/header/Header';
import Home from './components/pages/home/Home';
import Write from './components/pages/Write/Write';
import Single from './components/Single/Single';
import TopBar from './components/topBar/TopBar';

function App() {
  return (
    <>
      <TopBar></TopBar>
      {/* <Header></Header> */}
      {/* <Home></Home> */}
      {/* <Single></Single> */}
      <Write></Write>
    </>
  );
}

export default App;

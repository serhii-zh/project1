import './App.css';
import { Footer } from './components/ui/Footer';
import { Header } from './components/Header';
import { MainContainer } from './containers/MainContainer';

function App() {
  return (
    <>
      <Header />
      <MainContainer />
      <Footer />
    </>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';
import Footerwidget from './components/Footerwidget/Footerwidget'
import Footer from './components/Footer/Footer';
import logo from './assets/images/icon.jpg';

function App() {
  return (
    <div className="App scrollable">
      <div className="app-wrapper">
      <div>
      <Navbar/>
      </div>
      <div className="content-wrapper">
        <img src={logo} id="logo" alt="icon"/>
        <Form className="form-container"/>
      </div>
      <div className="footer-wrapper">
        <Footerwidget/>
        <Footer/></div>
      </div>
      
    </div>
  );
}

export default App;

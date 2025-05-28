import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from'./Components/TextForm.jsx';

function App() {
  return (
    <div>
    <Navbar title ="Section D" home="Hello" About="Welcome to" search={true}Contact_us="My website"/>
    <TextForm />
    </div>
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a>
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

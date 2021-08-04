import logo from './logo.svg';
import './App.css';
import newProfile from './features/NewProfile/pages/newProfile';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        newProfile / >
        <
        /header> < /
        div >
    );
}

export default App;
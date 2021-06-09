import { useEffect } from "react";
import 'bulma/css/bulma.min.css';
import './App.css';
import FlagsData from "./FlagsData";

function App() {
    // When page load complete
    useEffect(() => {
        FlagsData.getAllNationalFlags().then((data) => {
            console.log(data.data);
        });
    }, []);
    
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Hello World
                </p>
            </header>
        </div>
    );
}

export default App;

import MashupFlags from "./MashupFlags";

function App() {
    return (
        <div>
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">[WIP]National Diversity Barcodes</h1>
                    </div>
                </div>
            </section>
            
            <section className="section">
                <div className="container ">
                    <MashupFlags/>
                </div>
            </section>
    
            <footer className="footer">
                <div className="content has-text-centered">
                    ConnectionWorks Inc.
                </div>
            </footer>
        </div>
    );
}

export default App;

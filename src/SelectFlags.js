import { useState, useEffect } from "react";
import FlagsData from "./FlagsData";

function SelectFlags() {
    const [flagsData, setFlagsData] = useState([]);
    
    // When page load complete
    useEffect(() => {
        FlagsData.getAllNationalFlags().then((data) => {
            console.log(data.data[0]);
            setFlagsData(data.data);
        });
    }, []);
    
    return (
        <div className="columns">
            <div className="column">
                <strong>Select name(s)</strong>
                <div className="table-container country-table-container">
                    <table className="table is-bordered is-striped is-narrow is-hoverable">
                        <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                        </thead>
        
                        <tbody>
                        {flagsData.map((flagData) =>
                            <tr key={flagData.alpha3Code}>
                                <td>{flagData.name}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SelectFlags;

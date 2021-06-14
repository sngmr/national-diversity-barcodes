import { useState, useEffect } from "react";
import Canvg from 'canvg';
import FlagsData from "./FlagsData";

function SelectFlags() {
    const [flagsData, setFlagsData] = useState([]);
    const [selectedFlagsData, setSelectedFlagsData] = useState([]);
    
    // When page load complete
    useEffect(() => {
        FlagsData.getAllNationalFlags().then((data) => {
            setFlagsData(data.data);
        });
    }, []);
    
    // When selected flags
    useEffect(() => {
        console.log(selectedFlagsData);
    
        // Draw flag SVG image to the canvas for manipulating
        selectedFlagsData.forEach((flagData) => {
            const canvas = document.getElementById('canvas_' + flagData.alpha3Code);
            const ctx = canvas.getContext('2d');
            Canvg.from(ctx, flagData.flag).then((canvg) => {
                canvg.render();
            });
        });
    }, [selectedFlagsData]);
    
    // Create TR country node
    const createCountryTr = (flagData) => {
        // When countries table selected
        const onCountryRowClick = () => {
            if (selectedFlagsData.indexOf(flagData) >= 0) {
                // Remove
                setSelectedFlagsData(selectedFlagsData.filter(v => flagData !== v));
            } else {
                // Add
                setSelectedFlagsData([...selectedFlagsData, flagData]);
            }
        }
        
        // Check if this country is in selected list
        let isSelected = false;
        if (selectedFlagsData.indexOf(flagData) >= 0) {
            isSelected = true;
        }
    
        return (
            <tr key={flagData.alpha3Code}
                onClick={() => { onCountryRowClick(); }}
                className={isSelected ? 'is-selected' : ''}
            >
                <td>{flagData.name}</td>
            </tr>
        );
    }
    
    const onGeneratePressed = () => {}
    
    return (
        <div className="columns">
            <div className="column">
                <strong>Select countries</strong>
                <div className="table-container country-table-container">
                    <table className="table is-bordered is-striped is-narrow is-hoverable">
                        <tbody>
                        {flagsData.map((flagData) => { return createCountryTr(flagData) })}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="column">
                <strong>Selected countries</strong>
                <div className="columns is-mobile">
                    {selectedFlagsData.map((flagData) =>
                        <div className="column" key={flagData.alpha3Code}>
                            {/*<img className="image flag-image" src={flagData.flag} alt={flagData.name}/>*/}
                            <canvas id={"canvas_" + flagData.alpha3Code} className="flag-image-canvas" />
                        </div>
                    )}
                </div>
            </div>
            
            <div className="column">
                <button className="button is-primary" onClick={onGeneratePressed}>Generate</button>
            </div>
        </div>
    );
}

export default SelectFlags;

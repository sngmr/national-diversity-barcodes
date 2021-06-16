import { useState, useEffect } from "react";
import Canvg from 'canvg';
import ReactGA from 'react-ga';
import FlagsData from "./FlagsData";
import * as ImageDetermine from "./ImageDetermine";
import * as FlagGen from "./FlagGenerator";

const CANVAS_FLAG_WIDTH = 120;

function MashupFlags() {
    const [flagsData, setFlagsData] = useState([]);
    const [selectedFlagsData, setSelectedFlagsData] = useState([]);
    const [selectedFlagsColorData, setSelectedFlagsColorData] = useState([]);
    
    // When page load complete
    useEffect(() => {
        FlagsData.getAllNationalFlags().then((data) => {
            setFlagsData(data.data);
        });
    }, []);
    
    // When selected flags
    useEffect(() => {
        // console.log(selectedFlagsData);
    
        // Draw flag SVG image to the canvas for image manipulating
        selectedFlagsData.forEach((flagData) => {
            const canvas = document.getElementById('canvas_' + flagData.alpha3Code);
            const ctx = canvas.getContext('2d');
            Canvg.from(ctx, flagData.flag).then((canvg) => {
                canvg.render().then(() => { FlagGen.tidyCanvasElement(canvas, CANVAS_FLAG_WIDTH) })
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
    
    // When analyze color button pressed
    const onAnalyzeColorsButtonPressed = () => {
        const newSelectedFlagsColorData  = [];
        selectedFlagsData.forEach((flagData) => {
            newSelectedFlagsColorData.push({
                flagData: flagData,
                colorData: ImageDetermine.getImageColorData(document.getElementById('canvas_' + flagData.alpha3Code)),
            });
        });
        setSelectedFlagsColorData(newSelectedFlagsColorData);
    };
    
    // When generate1 flags button pressed
    const onGenerateFlagsButtonPressed = (isHorizontalBorder = false) => {
        ReactGA.event({
            category: 'Flags',
            action: 'Generate new mashup flags'
        });
        
        const drawCanvas = (canvasId, svg) => {
            const canvas = document.getElementById(canvasId);
            const ctx = canvas.getContext('2d');
            Canvg.from(ctx, svg).then((canvg) => {
                canvg.render().then(() => { FlagGen.tidyCanvasElement(canvas, CANVAS_FLAG_WIDTH) })
            });
        };
        
        // Pattern 1
        const colors = []
        selectedFlagsColorData.map((flagsData) => {
            flagsData.colorData.map((colorData) => {
                colors.push(colorData.color);
            });
        });
        drawCanvas('canvas_generated_1', FlagGen.generate1(isHorizontalBorder, colors));
    };
    
    return (
        <div className="columns">
            <div className="column">
                <strong>Select countries</strong>
                <div className="table-container" style={{height:"18rem",overflowY:"scroll"}}>
                    <table className="table is-bordered is-striped is-narrow is-hoverable">
                        <tbody>
                        {flagsData.map((flagData) => { return createCountryTr(flagData) })}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="column">
                <strong>Selected countries</strong>
                <br/>
                <button
                    onClick={onAnalyzeColorsButtonPressed}
                    className="button is-small is-primary is-outlined">Analyze colors</button>
                
                {selectedFlagsData.map((flagData) =>
                    <div key={"selected_" + flagData.alpha3Code}>
                        <h4>{flagData.name}</h4>
                        <canvas id={"canvas_" + flagData.alpha3Code} />
                    </div>
                )}
            </div>
            
            <div className="column">
                <strong>Selected flags color data</strong>
                <br/>
                <button onClick={() => onGenerateFlagsButtonPressed(true)}
                        className="button is-small is-primary is-outlined">Generate H flags</button>
                <button onClick={() => onGenerateFlagsButtonPressed(false)}
                        className="button is-small is-primary is-outlined">Generate V flags</button>
                
                {selectedFlagsColorData.map((flagDataAndColorData) =>
                    <div key={"selected_analyzed_" + flagDataAndColorData.flagData.alpha3Code}>
                        <h4>{flagDataAndColorData.flagData.name}</h4>
                        <div>
                            {flagDataAndColorData.colorData.map(colorData => (
                                <div key={"color_sample_" + flagDataAndColorData.flagData.alpha3Code + "_" + colorData.color}>
                                    <span style={{border:"1px solid gray", backgroundColor:colorData.color}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <span> {colorData.color}, {colorData.area}%</span>
                                    {/*<span> {colorData.color}, {colorData.area}%({colorData.count}px)</span>*/}
                                </div>
                            ))}
                        </div>
                        <hr style={{margin:0,marginBottom:'1rem'}}/>
                    </div>
                )}
            </div>
            
            <div className="column">
                <strong>Generated mashup flags</strong>
                <br/>
                <button
                    onClick={() => onGenerateFlagsButtonPressed(true)}
                    className="button is-small is-primary is-outlined">Re-generate H</button>
                <button
                    onClick={() => onGenerateFlagsButtonPressed(false)}
                    className="button is-small is-primary is-outlined">Re-generate V</button>
                <div>
                    <div>
                        <h4>Same width/height</h4>
                        <canvas id="canvas_generated_1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MashupFlags;

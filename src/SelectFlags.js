import { useEffect } from "react";
import FlagsData from "./FlagsData";

function SelectFlags() {
    // When page load complete
    useEffect(() => {
        FlagsData.getAllNationalFlags().then((data) => {
            console.log(data.data);
        });
    }, []);
    
    return (
        <div><h1>HEY</h1></div>
    );
}

export default SelectFlags;

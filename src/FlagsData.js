import axios from "axios";

const createFlagsDataInstance = function() {
    return {
        async getAllNationalFlags() {
            return await axios.get('https://restcountries.eu/rest/v2/all');
        }
    }
}

const FlagsData = createFlagsDataInstance();
export default FlagsData;

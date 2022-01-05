// import axios from "axios";

const createFlagsDataInstance = function() {
    return {
        async getAllNationalFlags() {
            return {data: countries};
            // return await axios.get('https://restcountries.eu/rest/v2/all');  API無くなっちゃった...
        }
    }
}

export default createFlagsDataInstance();

// 国一覧
// API無くなったので、適当なAPIからもらってきてローカル保存
const countries =
    [
        {
            "iso2code": "aw",
            "name": "Aruba"
        },
        {
            "iso2code": "af",
            "name": "Afghanistan"
        },
        {
            "iso2code": "ao",
            "name": "Angola"
        },
        {
            "iso2code": "al",
            "name": "Albania"
        },
        {
            "iso2code": "ad",
            "name": "Andorra"
        },
        {
            "iso2code": "ae",
            "name": "United Arab Emirates"
        },
        {
            "iso2code": "ar",
            "name": "Argentina"
        },
        {
            "iso2code": "am",
            "name": "Armenia"
        },
        {
            "iso2code": "as",
            "name": "American Samoa"
        },
        {
            "iso2code": "ag",
            "name": "Antigua and Barbuda"
        },
        {
            "iso2code": "au",
            "name": "Australia"
        },
        {
            "iso2code": "at",
            "name": "Austria"
        },
        {
            "iso2code": "az",
            "name": "Azerbaijan"
        },
        {
            "iso2code": "bi",
            "name": "Burundi"
        },
        {
            "iso2code": "be",
            "name": "Belgium"
        },
        {
            "iso2code": "bj",
            "name": "Benin"
        },
        {
            "iso2code": "bf",
            "name": "Burkina Faso"
        },
        {
            "iso2code": "bd",
            "name": "Bangladesh"
        },
        {
            "iso2code": "bg",
            "name": "Bulgaria"
        },
        {
            "iso2code": "bh",
            "name": "Bahrain"
        },
        {
            "iso2code": "bs",
            "name": "Bahamas, The"
        },
        {
            "iso2code": "ba",
            "name": "Bosnia and Herzegovina"
        },
        {
            "iso2code": "by",
            "name": "Belarus"
        },
        {
            "iso2code": "bz",
            "name": "Belize"
        },
        {
            "iso2code": "bm",
            "name": "Bermuda"
        },
        {
            "iso2code": "bo",
            "name": "Bolivia"
        },
        {
            "iso2code": "br",
            "name": "Brazil"
        },
        {
            "iso2code": "bb",
            "name": "Barbados"
        },
        {
            "iso2code": "bn",
            "name": "Brunei Darussalam"
        },
        {
            "iso2code": "bt",
            "name": "Bhutan"
        },
        {
            "iso2code": "bw",
            "name": "Botswana"
        },
        {
            "iso2code": "cf",
            "name": "Central African Republic"
        },
        {
            "iso2code": "ca",
            "name": "Canada"
        },
        {
            "iso2code": "ch",
            "name": "Switzerland"
        },
        {
            "iso2code": "cl",
            "name": "Chile"
        },
        {
            "iso2code": "cn",
            "name": "China"
        },
        {
            "iso2code": "ci",
            "name": "Cote d'Ivoire"
        },
        {
            "iso2code": "cm",
            "name": "Cameroon"
        },
        {
            "iso2code": "cd",
            "name": "Congo, Dem. Rep."
        },
        {
            "iso2code": "cg",
            "name": "Congo, Rep."
        },
        {
            "iso2code": "co",
            "name": "Colombia"
        },
        {
            "iso2code": "km",
            "name": "Comoros"
        },
        {
            "iso2code": "cv",
            "name": "Cabo Verde"
        },
        {
            "iso2code": "cr",
            "name": "Costa Rica"
        },
        {
            "iso2code": "cu",
            "name": "Cuba"
        },
        {
            "iso2code": "cw",
            "name": "Curacao"
        },
        {
            "iso2code": "ky",
            "name": "Cayman Islands"
        },
        {
            "iso2code": "cy",
            "name": "Cyprus"
        },
        {
            "iso2code": "cz",
            "name": "Czech Republic"
        },
        {
            "iso2code": "de",
            "name": "Germany"
        },
        {
            "iso2code": "dj",
            "name": "Djibouti"
        },
        {
            "iso2code": "dm",
            "name": "Dominica"
        },
        {
            "iso2code": "dk",
            "name": "Denmark"
        },
        {
            "iso2code": "do",
            "name": "Dominican Republic"
        },
        {
            "iso2code": "dz",
            "name": "Algeria"
        },
        {
            "iso2code": "ec",
            "name": "Ecuador"
        },
        {
            "iso2code": "eg",
            "name": "Egypt, Arab Rep."
        },
        {
            "iso2code": "er",
            "name": "Eritrea"
        },
        {
            "iso2code": "es",
            "name": "Spain"
        },
        {
            "iso2code": "ee",
            "name": "Estonia"
        },
        {
            "iso2code": "et",
            "name": "Ethiopia"
        },
        {
            "iso2code": "fi",
            "name": "Finland"
        },
        {
            "iso2code": "fj",
            "name": "Fiji"
        },
        {
            "iso2code": "fr",
            "name": "France"
        },
        {
            "iso2code": "fo",
            "name": "Faroe Islands"
        },
        {
            "iso2code": "fm",
            "name": "Micronesia, Fed. Sts."
        },
        {
            "iso2code": "ga",
            "name": "Gabon"
        },
        {
            "iso2code": "gb",
            "name": "United Kingdom"
        },
        {
            "iso2code": "ge",
            "name": "Georgia"
        },
        {
            "iso2code": "gh",
            "name": "Ghana"
        },
        {
            "iso2code": "gi",
            "name": "Gibraltar"
        },
        {
            "iso2code": "gn",
            "name": "Guinea"
        },
        {
            "iso2code": "gm",
            "name": "Gambia, The"
        },
        {
            "iso2code": "gw",
            "name": "Guinea-Bissau"
        },
        {
            "iso2code": "gq",
            "name": "Equatorial Guinea"
        },
        {
            "iso2code": "gr",
            "name": "Greece"
        },
        {
            "iso2code": "gd",
            "name": "Grenada"
        },
        {
            "iso2code": "gl",
            "name": "Greenland"
        },
        {
            "iso2code": "gt",
            "name": "Guatemala"
        },
        {
            "iso2code": "gu",
            "name": "Guam"
        },
        {
            "iso2code": "gy",
            "name": "Guyana"
        },
        {
            "iso2code": "hk",
            "name": "Hong Kong SAR, China"
        },
        {
            "iso2code": "hn",
            "name": "Honduras"
        },
        {
            "iso2code": "hr",
            "name": "Croatia"
        },
        {
            "iso2code": "ht",
            "name": "Haiti"
        },
        {
            "iso2code": "hu",
            "name": "Hungary"
        },
        {
            "iso2code": "id",
            "name": "Indonesia"
        },
        {
            "iso2code": "im",
            "name": "Isle of Man"
        },
        {
            "iso2code": "in",
            "name": "India"
        },
        {
            "iso2code": "ie",
            "name": "Ireland"
        },
        {
            "iso2code": "ir",
            "name": "Iran, Islamic Rep."
        },
        {
            "iso2code": "iq",
            "name": "Iraq"
        },
        {
            "iso2code": "is",
            "name": "Iceland"
        },
        {
            "iso2code": "il",
            "name": "Israel"
        },
        {
            "iso2code": "it",
            "name": "Italy"
        },
        {
            "iso2code": "jm",
            "name": "Jamaica"
        },
        {
            "iso2code": "jo",
            "name": "Jordan"
        },
        {
            "iso2code": "jp",
            "name": "Japan"
        },
        {
            "iso2code": "kz",
            "name": "Kazakhstan"
        },
        {
            "iso2code": "ke",
            "name": "Kenya"
        },
        {
            "iso2code": "kg",
            "name": "Kyrgyz Republic"
        },
        {
            "iso2code": "kh",
            "name": "Cambodia"
        },
        {
            "iso2code": "ki",
            "name": "Kiribati"
        },
        {
            "iso2code": "kn",
            "name": "St. Kitts and Nevis"
        },
        {
            "iso2code": "kr",
            "name": "Korea, Rep."
        },
        {
            "iso2code": "kw",
            "name": "Kuwait"
        },
        {
            "iso2code": "la",
            "name": "Lao PDR"
        },
        {
            "iso2code": "lb",
            "name": "Lebanon"
        },
        {
            "iso2code": "lr",
            "name": "Liberia"
        },
        {
            "iso2code": "ly",
            "name": "Libya"
        },
        {
            "iso2code": "lc",
            "name": "St. Lucia"
        },
        {
            "iso2code": "li",
            "name": "Liechtenstein"
        },
        {
            "iso2code": "lk",
            "name": "Sri Lanka"
        },
        {
            "iso2code": "ls",
            "name": "Lesotho"
        },
        {
            "iso2code": "lt",
            "name": "Lithuania"
        },
        {
            "iso2code": "lu",
            "name": "Luxembourg"
        },
        {
            "iso2code": "lv",
            "name": "Latvia"
        },
        {
            "iso2code": "mo",
            "name": "Macao SAR, China"
        },
        {
            "iso2code": "mf",
            "name": "St. Martin (French part)"
        },
        {
            "iso2code": "ma",
            "name": "Morocco"
        },
        {
            "iso2code": "mc",
            "name": "Monaco"
        },
        {
            "iso2code": "md",
            "name": "Moldova"
        },
        {
            "iso2code": "mg",
            "name": "Madagascar"
        },
        {
            "iso2code": "mv",
            "name": "Maldives"
        },
        {
            "iso2code": "mx",
            "name": "Mexico"
        },
        {
            "iso2code": "mh",
            "name": "Marshall Islands"
        },
        {
            "iso2code": "mk",
            "name": "North Macedonia"
        },
        {
            "iso2code": "ml",
            "name": "Mali"
        },
        {
            "iso2code": "mt",
            "name": "Malta"
        },
        {
            "iso2code": "mm",
            "name": "Myanmar"
        },
        {
            "iso2code": "me",
            "name": "Montenegro"
        },
        {
            "iso2code": "mn",
            "name": "Mongolia"
        },
        {
            "iso2code": "mp",
            "name": "Northern Mariana Islands"
        },
        {
            "iso2code": "mz",
            "name": "Mozambique"
        },
        {
            "iso2code": "mr",
            "name": "Mauritania"
        },
        {
            "iso2code": "mu",
            "name": "Mauritius"
        },
        {
            "iso2code": "mw",
            "name": "Malawi"
        },
        {
            "iso2code": "my",
            "name": "Malaysia"
        },
        {
            "iso2code": "na",
            "name": "Namibia"
        },
        {
            "iso2code": "nc",
            "name": "New Caledonia"
        },
        {
            "iso2code": "ne",
            "name": "Niger"
        },
        {
            "iso2code": "ng",
            "name": "Nigeria"
        },
        {
            "iso2code": "ni",
            "name": "Nicaragua"
        },
        {
            "iso2code": "nl",
            "name": "Netherlands"
        },
        {
            "iso2code": "no",
            "name": "Norway"
        },
        {
            "iso2code": "np",
            "name": "Nepal"
        },
        {
            "iso2code": "nr",
            "name": "Nauru"
        },
        {
            "iso2code": "nz",
            "name": "New Zealand"
        },
        {
            "iso2code": "om",
            "name": "Oman"
        },
        {
            "iso2code": "pk",
            "name": "Pakistan"
        },
        {
            "iso2code": "pa",
            "name": "Panama"
        },
        {
            "iso2code": "pe",
            "name": "Peru"
        },
        {
            "iso2code": "ph",
            "name": "Philippines"
        },
        {
            "iso2code": "pw",
            "name": "Palau"
        },
        {
            "iso2code": "pg",
            "name": "Papua New Guinea"
        },
        {
            "iso2code": "pl",
            "name": "Poland"
        },
        {
            "iso2code": "pr",
            "name": "Puerto Rico"
        },
        {
            "iso2code": "kp",
            "name": "Korea, Dem. People's Rep."
        },
        {
            "iso2code": "pt",
            "name": "Portugal"
        },
        {
            "iso2code": "py",
            "name": "Paraguay"
        },
        {
            "iso2code": "ps",
            "name": "West Bank and Gaza"
        },
        {
            "iso2code": "pf",
            "name": "French Polynesia"
        },
        {
            "iso2code": "qa",
            "name": "Qatar"
        },
        {
            "iso2code": "ro",
            "name": "Romania"
        },
        {
            "iso2code": "ru",
            "name": "Russian Federation"
        },
        {
            "iso2code": "rw",
            "name": "Rwanda"
        },
        {
            "iso2code": "sa",
            "name": "Saudi Arabia"
        },
        {
            "iso2code": "sd",
            "name": "Sudan"
        },
        {
            "iso2code": "sn",
            "name": "Senegal"
        },
        {
            "iso2code": "sg",
            "name": "Singapore"
        },
        {
            "iso2code": "sb",
            "name": "Solomon Islands"
        },
        {
            "iso2code": "sl",
            "name": "Sierra Leone"
        },
        {
            "iso2code": "sv",
            "name": "El Salvador"
        },
        {
            "iso2code": "sm",
            "name": "San Marino"
        },
        {
            "iso2code": "so",
            "name": "Somalia"
        },
        {
            "iso2code": "rs",
            "name": "Serbia"
        },
        {
            "iso2code": "ss",
            "name": "South Sudan"
        },
        {
            "iso2code": "st",
            "name": "Sao Tome and Principe"
        },
        {
            "iso2code": "sr",
            "name": "Suriname"
        },
        {
            "iso2code": "sk",
            "name": "Slovak Republic"
        },
        {
            "iso2code": "si",
            "name": "Slovenia"
        },
        {
            "iso2code": "se",
            "name": "Sweden"
        },
        {
            "iso2code": "sz",
            "name": "Eswatini"
        },
        {
            "iso2code": "sx",
            "name": "Sint Maarten (Dutch part)"
        },
        {
            "iso2code": "sc",
            "name": "Seychelles"
        },
        {
            "iso2code": "sy",
            "name": "Syrian Arab Republic"
        },
        {
            "iso2code": "tc",
            "name": "Turks and Caicos Islands"
        },
        {
            "iso2code": "td",
            "name": "Chad"
        },
        {
            "iso2code": "tg",
            "name": "Togo"
        },
        {
            "iso2code": "th",
            "name": "Thailand"
        },
        {
            "iso2code": "tj",
            "name": "Tajikistan"
        },
        {
            "iso2code": "tm",
            "name": "Turkmenistan"
        },
        {
            "iso2code": "tl",
            "name": "Timor-Leste"
        },
        {
            "iso2code": "to",
            "name": "Tonga"
        },
        {
            "iso2code": "tt",
            "name": "Trinidad and Tobago"
        },
        {
            "iso2code": "tn",
            "name": "Tunisia"
        },
        {
            "iso2code": "tr",
            "name": "Turkey"
        },
        {
            "iso2code": "tv",
            "name": "Tuvalu"
        },
        {
            "iso2code": "tw",
            "name": "Taiwan, China"
        },
        {
            "iso2code": "tz",
            "name": "Tanzania"
        },
        {
            "iso2code": "ug",
            "name": "Uganda"
        },
        {
            "iso2code": "ua",
            "name": "Ukraine"
        },
        {
            "iso2code": "uy",
            "name": "Uruguay"
        },
        {
            "iso2code": "us",
            "name": "United States"
        },
        {
            "iso2code": "uz",
            "name": "Uzbekistan"
        },
        {
            "iso2code": "vc",
            "name": "St. Vincent and the Grenadines"
        },
        {
            "iso2code": "ve",
            "name": "Venezuela, RB"
        },
        {
            "iso2code": "vg",
            "name": "British Virgin Islands"
        },
        {
            "iso2code": "vi",
            "name": "Virgin Islands (U.S.)"
        },
        {
            "iso2code": "vn",
            "name": "Vietnam"
        },
        {
            "iso2code": "vu",
            "name": "Vanuatu"
        },
        {
            "iso2code": "ws",
            "name": "Samoa"
        },
        {
            "iso2code": "xk",
            "name": "Kosovo"
        },
        {
            "iso2code": "ye",
            "name": "Yemen, Rep."
        },
        {
            "iso2code": "za",
            "name": "South Africa"
        },
        {
            "iso2code": "zm",
            "name": "Zambia"
        },
        {
            "iso2code": "zw",
            "name": "Zimbabwe"
        }
    ];
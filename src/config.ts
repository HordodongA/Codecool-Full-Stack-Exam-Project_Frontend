// Google login URL
const url = "https://accounts.google.com/o/oauth2/v2/auth"
const client_id = "231875441502-e9o5b1ivucareb2r4bplgqpf7326cpe7.apps.googleusercontent.com"
const redirect_URI = "http://localhost:5173/callback"
const scope = "profile%20email%20openid"
const response_type = "code"

export const fullUrl = `${url}?client_id=${client_id}&redirect_uri=${redirect_URI}&scope=${scope}&response_type=${response_type}&prompt=consent%20select_account`

// Landlord backend server URL
export const landlordBackendUrl = "http://localhost:3003"

// OpenApi (Swagger) 3.0 documentation URL
export const landlordApiDocsUrl = "http://localhost:3003/api/docs"

// Backend readme.md GitHub URL
export const landlordBackendReadmeUrl = "https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Backend/blob/main/readme.md"

// Backend readme.md GitHub URL
export const landlordFrontendReadmeUrl = "https://github.com/HordodongA/Codecool-Full-Stack-Exam-Project_Frontend/blob/main/readme.md"

// Test data for assessment process
export const testData = {
    assets: [
        {
            name: "Grove str",
            location: "2nd Grove street, San Andreas",
            details: "living room, 3 bedrooms, garage, garden",
            credentials: "Helyrajzi szám: 75-186/A6/48.265\nKözműszolgáltatók:\nTettye Forrásház: L/134669/21\nPÉTÁV Kft.: 180818900/86211\nE.On Áramszolgáltató Zrt.: 1047398SZ\nFlip: #7406737\nAllianz: AHB9502618\n",
            "notes": "Házmester: Szabó Erik, 20/514-7800\nBérlő: David Tenant, 30/456-1298\nSzomszédok: \n• Larry 20/852-6549\n• Vilma 70/246-4354\n",
            activities: [
                {
                    name: "Villanyszerelés",
                    todos: "• FI relét cseréltetni\n• padlás konnektorokat bekötni\n• villanytűzhely bekötést 3 fázisúra alakítani",
                    _id: "64512a225dd7c20bfb8dd324"
                },
                {
                    name: "ütvefúrás",
                    todos: "3 képkeret - hálószoba\nfűszertartó - konyha\ncsillár - nappali",
                    _id: "64513c905dd7c20bfb8dd434"
                },
                {
                    name: "pillanatragasztás",
                    todos: "- telefontartó\n- szuvenir dísz\n- billentyűzet talp",
                    _id: "645747becac578d21c5eb109"
                },
                {
                    name: "vízszerelés",
                    todos: "WC tartály töltőszelep csere\ngömbcsapcsere a vízmérőnél\n",
                    _id: "6457483ecac578d21c5eb1d6"
                },
                {
                    name: "kert téliesítése",
                    _id: "64574871cac578d21c5eb231"
                },
                {
                    name: "festéshez venni",
                    _id: "64574897cac578d21c5eb261"
                },
                {
                    name: "zsíroldás",
                    _id: "645748a3cac578d21c5eb293"
                },
                {
                    name: "lakógyűlés",
                    todos: "",
                    _id: "645748bccac578d21c5eb2c7"
                }
            ],
            machines: [
                {
                    name: "Daikin air conditioner",
                    unique_id: "687162-28654.164/2015",
                    service: "Vackor Kímaszerviz: 20/988-6746",
                    todos: "porszűrőt csap alatt elmosni\nhepa-filtert cserélni: Daikin HePa 250-300C\nlamellákat befújni: Daikin CL20, 500 ml\ncseppvízcsövet ellenőrizni\ntávirányító elemeket ellenőrizni",
                    _id: "64574905cac578d21c5eb333"
                },
                {
                    name: "Mosógép",
                    unique_id: "099210-433-765WPA",
                    service: "Markó Antal, 30/555-9812",
                    todos: "Szűrőt kipucolni\nmosószeradagoló-nyílást szárazra törölni\nvízszintet beállítani",
                    _id: "6457490acac578d21c5eb36b"
                },
                {
                    name: "Mosogatógép",
                    unique_id: "El-65-2354634-00055",
                    service: "Fromwald Gépszervíz, 20/986-5533",
                    todos: "regenerálósó-tartályt ellenőrizni, tölteni\nöblítőszer-tartályt ellenőrizni, tölteni\nszűrőt kipucolni",
                    _id: "64574915cac578d21c5eb3a5"
                },
                {
                    name: "Tűzjelző és poroltó",
                    unique_id: "",
                    service: "K-Flórián Kft. 72/443-986",
                    todos: "Nyomást és elemeket ellenőrizni",
                    _id: "64574926cac578d21c5eb3e1"
                },
                {
                    name: "Dell laptop",
                    unique_id: "",
                    service: "Mecsek-PC 72-462-866",
                    todos: "3 évenként szétszedetni, kipucoltatni, hővezető pasztát ellenőriztetni",
                    _id: "645749f8cac578d21c5eb494"
                },
                {
                    name: "Samsung TV",
                    unique_id: "",
                    service: "Samsung Márkaszerviz, 20/514-8742",
                    todos: "",
                    _id: "645749fdcac578d21c5eb4d2"
                },
                {
                    name: "Asztali PC",
                    _id: "64574a11cac578d21c5eb551"
                },
                {
                    name: "Daikin légtisztító",
                    _id: "64574a1dcac578d21c5eb593"
                },
                {
                    name: "X-box konzol",
                    _id: "64574a48cac578d21c5eb61a"
                },
                {
                    name: "hűtőszekrény",
                    unique_id: "",
                    service: "",
                    todos: "",
                    _id: "64574a5bcac578d21c5eb660"
                },
                {
                    name: "páraelszívó",
                    unique_id: "",
                    service: "",
                    todos: "aktívszenes szűrőt cserélni 3 évenként\nzsírfogó szűrőpaplant cserélni 1 évenként",
                    _id: "64574a73cac578d21c5eb6ef"
                }
            ],
            _id: "64512a225dd7c20bfb8dd323"
        },
        {
            name: "Kertvárosi lakás",
            notes: "Home sweet home",
            activities: [
                {
                    name: "ssss",
                    _id: "64564ee4cac578d21c5eac14"
                }
            ],
            machines: [
                {
                    name: "machine one",
                    todos: "befújni WD40-nel",
                    _id: "64512a225dd7c20bfb8dd327"
                },
                {
                    name: "machine two",
                    todos: "duct tape!",
                    _id: "64512a225dd7c20bfb8dd328"
                },
                {
                    name: "machine three",
                    _id: "64512a225dd7c20bfb8dd329"
                }
            ],
            _id: "64512a225dd7c20bfb8dd326"
        },
        {
            name: "Kertvárosi garázs",
            activities: [],
            machines: [],
            _id: "64512a225dd7c20bfb8dd32a"
        },
        {
            name: "Belvárosi lakás",
            activities: [],
            machines: [],
            _id: "64512a225dd7c20bfb8dd32b"
        },
        {
            name: "Rózsadombi lakás",
            location: "loc",
            details: "",
            credentials: "",
            notes: "",
            activities: [
                {
                    name: "activity three",
                    _id: "64512a225dd7c20bfb8dd32d"
                }
            ],
            machines: [
                {
                    name: "machine four",
                    _id: "64512a225dd7c20bfb8dd32e"
                }
            ],
            _id: "64512a225dd7c20bfb8dd32c"
        },
        {
            name: "Hétvégi ház, Pellérd",
            activities: [],
            machines: [],
            _id: "64574644cac578d21c5eb036"
        },
        {
            name: "Fiat Punto",
            activities: [
                {
                    name: "autószerelő",
                    todos: "jobb hátsó kerék kanyarban kerreg\nmotor hidegen kattogó hangot ad\nkéziféket nagyon be kell húzni\n",
                    _id: "645893377bd7a7a0e9af417c"
                },
                {
                    name: "autóvillamosság",
                    todos: "A risztó távirányítója csak pár méterről működik\nAz utastér világítása kontakthibás",
                    _id: "645893727bd7a7a0e9af4213"
                }
            ],
            machines: [],
            _id: "64574650cac578d21c5eb058"
        },
        {
            name: "FOFUS Thron 6.9 bringa",
            activities: [
                {
                    name: "tavaszi karbantartás",
                    todos: "Fogas-Kerék 2009:\n- a váltó hidegben nem működik\n- a hátsó kerékben nyolcas van",
                    _id: "645893c07bd7a7a0e9af42af"
                }
            ],
            machines: [],
            _id: "6457468bcac578d21c5eb07c"
        },
        {
            name: "Aprilia Scarabeo V50 2015",
            activities: [],
            machines: [],
            _id: "645746f1cac578d21c5eb0a2"
        },
        {
            name: "Xiaomi roller",
            activities: [],
            machines: [],
            _id: "64574814cac578d21c5eb191"
        },
        {
            name: "Belváros üzethelyiség",
            location: "",
            details: "",
            credentials: "",
            notes: "",
            activities: [],
            machines: [],
            _id: "6457482ecac578d21c5eb1bb"
        }
    ]
}



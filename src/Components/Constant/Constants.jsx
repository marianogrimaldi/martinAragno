import flagArg from "../../assets/flagArg.png"
import flagBra from "../../assets/flagBra.jpg"
import flagUsa from "../../assets/flagUsa.webp"
import flagHaw from "../../assets/flagHaw.png"
import flagChi from "../../assets/flagChi.png"
import flagEsp from "../../assets/esp.png"
import flagMex from "../../assets/flagMex.png"
import flagAle from "../../assets/ale.png"
import flagUru from "../../assets/flagUru.png"
import flagAus from "../../assets/flagAus.png"
import flagSud from "../../assets/flagSud.png"
import flagPar from "../../assets/flagPar.webp"
import medallaOro from "../../assets/medalla1.png"
import medallaBronce from "../../assets/medalla3.png"
import medallaPlata from "../../assets/medalla2.png"

const flags = () => {

    return [
      
        { key: "flagPar", value: flagPar },
        { key: "flagUsa", value: flagUsa },
        { key: "flagArg", value: flagArg },
        { key: "flagBra", value: flagBra },
        { key: "flagHaw", value: flagHaw },
        { key: "flagChi", value: flagChi },
        { key: "flagEsp", value: flagEsp },
        { key: "flagMex", value: flagMex },
        { key: "flagAle", value: flagAle },
        { key: "flagAus", value: flagAus },
        { key: "flagUru", value: flagUru },
        { key: "flagSud", value: flagSud },
    ]
}

const medals = () => {
    return [
        medallaOro,
        medallaPlata,
        medallaBronce
    ]
}

export { flags, medals } 
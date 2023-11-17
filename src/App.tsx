import React, {useEffect, useState} from 'react';
import Gradientdiv from "./components/Gradientdiv";
import GradientBorderDiv from "./components/GradientBorderDiv";
import QuoteAPI from "./components/QuoteAPI";


const App = () =>{

    const [quote , setQuote ] = useState("")

    useEffect(() => {
        QuoteAPI().then( res =>  setQuote(res))
    }, []);

    return (
        <Gradientdiv className={ " w-screen h-screen flex justify-center grid content-center" } >
            <GradientBorderDiv className={"bg-[#0F0F0F] flex justify-center grid content-center p-10"} radius={"rounded-2xl"}>
                <p className={"text-white text-3xl"}>"{quote}"</p>
            </GradientBorderDiv>
        </Gradientdiv>
    );
}
export default App;

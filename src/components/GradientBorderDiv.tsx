import React, {ReactNode, useState} from "react";

const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};


const MouseToCenterTheta = () => {

    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight
    const normalizedX = mousePosition.x - (windowWidth - (windowWidth/2))
    const normalizedY = (mousePosition.y - (windowHeight - (windowHeight/2))) * -1

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    if ( normalizedX >= 0 && normalizedY >= 0 ){

        return Math.atan(normalizedY/normalizedX)

    } else if( normalizedX >= 0 && normalizedY <= 0 ) {

        return (2* Math.PI ) + Math.atan(normalizedY/normalizedX)

    } else if( normalizedX <= 0 && normalizedY <= 0 ) {

        return Math.atan(normalizedY/normalizedX) + (Math.PI)

    } else{
        return Math.PI + Math.atan(normalizedY/normalizedX)

    }
};


const PercentFromCenter = () =>{
    const [ mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const absoluteX = Math.abs( mousePosition.x - (window.innerWidth - (window.innerWidth/2)) )
    const absoluteY = Math.abs( (mousePosition.y - (window.innerHeight - (window.innerHeight/2))) * -1 )

    React.useEffect(() => {
        const updateMousePosition = (ev:any) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    const PercentX = absoluteX/window.innerWidth/2
    const PercentY = absoluteY/window.innerHeight/2
    const PercentTotal = (((PercentX )+(PercentY))) *100

    return PercentTotal
}

interface GradientDivProps{
    children?:ReactNode
    className:string
    radius: string
}

const GradientBorderDiv:React.FC<GradientDivProps> = ({children,className,radius}) =>{

    return(
        <div style={{
            backgroundImage: `linear-gradient( ${(MouseToCenterTheta() - Math.PI/2)* -1 }rad,  black  ${PercentFromCenter()}%, #707070) `
        }} className={` p-[2px] w-[30rem] h-[30rem] rounded-2xl ${radius}` }>
            <div style={{
                backgroundImage: `radial-gradient( circle at ${ GradientPosition().x }px ${ GradientPosition().y }px, #363636 , #0F0F0F) `
            }} className={`${className} w-full h-full ${radius}`}>
                {children}
            </div>
        </div>
    )
}

export default GradientBorderDiv
import React from 'react'
import PrimaryHOC from './PrimaryHOC'
export default function HighOrderComponent() {
    let myStyles={
        textBlue:"yellow",
        textWhite:"#fff",
        bgBlue:"blue",
        bgRed:"red",
        bgGreen:"green",
    }
   function HocBlue(){
       return(
           <PrimaryHOC myStyleDataBg={myStyles.bgBlue} myStyleDataText={myStyles.textWhite} />
       )
   }
    function HocRed() {
        return (
            <PrimaryHOC myStyleDataBg={myStyles.bgRed} myStyleDataText={myStyles.textWhite} />

        )
    }
    function HocGreen() {
        return (
            <PrimaryHOC myStyleDataBg={myStyles.bgGreen} myStyleDataText={myStyles.textBlue} />

        )
    }
    return (
        <div>
            <h1>
                <blockquote className="container">High Order Component</blockquote>
            </h1>
            <HocBlue/>
            <HocRed/>
            <HocGreen/>
        </div>
    )
}

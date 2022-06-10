import React from "react";



export default function HocCounter(Component) {

    class HocCounter extends React.Component { // можно return убрать, и показать displayName внизу. Либо вернуть.
        componentDidUpdate(previous) {
            console.log("next value", this.props);
            console.log("previous value", previous);
        }


        render() {
            return <Component {...this.props}/>
        }

    }

    HocCounter.displayName = `HocCounter(${Component.displayName || Component.name || "Component"})`;
    return HocCounter;


}
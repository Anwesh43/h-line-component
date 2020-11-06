import React from 'react'
import {useStyle} from './hooks'

const HLineComponent = ({scale, w, h}) => {
    const {parentStyle, hlineStyle, midLineStyle} = useStyle(w, h, scale)
    return <div style = {parentStyle()}>
        {[0, 1].map(i => (<div key = {`hline_${i}`} style = {hlineStyle(i)}></div>))}
        <div style = {midLineStyle()}></div>
    </div>
}

export default HLineComponent
import {
    useState, 
    useEffect
} from 'react'
import {
    divideScale, 
    sinify
} from './utils'

export const useAnimatedScale = (scGap = 0.02, delay = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                let currScale = scale 
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    } 
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h
    }
}



export const useStyle = (w, h, scale) => {
    const sf = sinify(scale)
    const size = Math.min(w, h) / 10
    const position = 'absolute'
    const x = w / 2
    const y = h / 2
    const lineWidth = Math.min(w, h) / 90
    const background = 'indigo'
    const sf1 = divideScale(sf, 0, parts)
    const sf2 = divideScale(sf, 1, parts)
    const sf3 = divideScale(sf, 2, parts)
    return {
        parentStyle() {
            const left = `${x}px`
            const top = `${y}px`
            const WebkitTransform = `rotate(${90 * sf3}deg)`
            return {
                left,
                top,
                position,
                WebkitTransform
            }
        },
        midLineStyle() {
          const width = `${lineWidth}px`
          const left = `${-lineWidth / 2}px`
          const top = `${-(size * sf1) / 2}px`
          const height = `${size * sf1}px`
          return {
              background, 
              left, 
              top, 
              position,
              width, 
              height
          }
        },
        hlineStyle(i) {
            const top = `${-size / 2 + size * i}px`
            const left = `${-(size * sf2) / 2}px`
            const width = `${size * sf2}px`
            const height = `${lineWidth}px`
            return {
                position,
                left, 
                top,
                width,
                height,
                background
            }
        }         
    }
}
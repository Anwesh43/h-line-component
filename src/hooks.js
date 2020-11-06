import {
    useState, 
    useEffect
} from 'react'

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

const sinify = (scale) => Math.sin(scale * Math.PI)

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 10
    const position = 'absolute'
    const x = w / 2
    const y = h / 2
    const lineWidth = Math.min(w, h) / 90
    const background = 'indigo'
    return {
        parentStyle() {
            const left = `${x}px`
            const top = `${y}px`
            return {
                left,
                top,
                position
            }
        },
        midLineStyle() {
          const width = `${lineWidth}px`
          const left = `${-wSize / 2}px`
          const top = `${-size / 2}px`
          const height = `${size}px`
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
            const left = `${-size / 2}px`
            const width = `${size}px`
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
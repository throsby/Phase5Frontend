import {useTransition, animated, config } from "react-spring"
import { useState, useEffect } from "react"

export default function TransitionArray() {
    let NUM_ARR = [
        {
        "fig": 1,
        "op": { "range": [ 0.75, 1 ], "output": [ 0, 1 ] }, "trans": {
        "range": [ 0.75, 1 ],
        "output": [ -40, 0 ],
        "extrapolate": "clamp"
        }
        },
        {
        "fig": 2,
        "op": {
            "range": [ 0.25, 0.5 ],
            "output": [ 0, 1 ]
            },
        "trans": {
            "range": [ 0.25, 0.5 ],
            "output": [ -40, 0 ],
            "extrapolate": "clamp"
            }
        },
        {
        "fig": 3,
        "op": {
            "range": [ 0, 0.25 ],
            "output": [ 0, 1 ]
            },
        "trans": {
            "range": [ 0, 0.25 ],
            "output": [ -40, 0 ],
            "extrapolate": "clamp"
            }
        },
        {
        "fig": 4,
        "op": {
            "range": [ 0.5, 0.75 ],
            "output": [ 0, 1 ]
            },
        "trans": {
            "range": [ 0.5, 0.75 ],
            "output": [ -40, 0 ],
            "extrapolate": "clamp"
            }
        }
        ]
      
    const [items, setItems] = useState(NUM_ARR)
  
    const transitions = useTransition(items, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      delay: 200,
      config: config.molasses,
      onRest: () => setItems([]),
    })
  
    useEffect(() => {
      if (items.length === 0) {
        setTimeout(() => {
          setItems(NUM_ARR)
        }, 2000)
      }
    }, [items])
  
    return (
      <div style={{ display: 'flex' }}>
        {transitions(({ opacity }, item) => (
          <animated.div
            style={{
              opacity: opacity.to(item.op),
              transform: opacity
                .to(item.trans)
                .to(y => `translate3d(1,${y}px,0)`),
            }}>
            {item.fig}
          </animated.div>
        ))}
      </div>
    )
  }
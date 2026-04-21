'use client'

import React from 'react'

export function AnimatedNeuralNetwork() {
  return (
    <div className="absolute inset-0 opacity-30">
      <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#C9A84C" strokeWidth="1" fill="none">
          <circle cx="100" cy="120" r="3" />
          <circle cx="220" cy="80" r="3" />
          <circle cx="360" cy="140" r="3" />
          <circle cx="520" cy="90" r="3" />
          <circle cx="680" cy="145" r="3" />
          <circle cx="840" cy="105" r="3" />
          <path d="M100 120L220 80L360 140L520 90L680 145L840 105" />
          <path d="M150 170L260 130L390 180L510 140L670 190L800 150" />
        </g>
      </svg>
    </div>
  )
}
//@ts-nocheck
'use client'

import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import { BorderBeam } from './border-animation'

export function ConfettiStars() {
  const defaults = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#FFE400', '#FFBD00', '#E89400', '#FFCA6C', '#FDFFB8'],
  }

  const shoot = () => {
    confetti({
      ...defaults,
      particleCount: 40,
      scalar: 1.2,
      shapes: ['star'],
    })

    confetti({
      ...defaults,
      particleCount: 10,
      scalar: 0.75,
      shapes: ['circle'],
    })
  }

  useEffect(() => {
    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
    setTimeout(shoot, 300)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    setTimeout(shoot, 0)
    setTimeout(shoot, 100)
    setTimeout(shoot, 200)
    setTimeout(shoot, 300)
    setTimeout(shoot, 400)
    setTimeout(shoot, 500)
  }

  return (
    <div className="relative">
      <Button
        onClick={handleClick}
        className="bg-yellow-400 relative text-yellow-800  rounded-2xl py-12 cursor-pointer hover:bg-yellow-300 transition-colors duration-300"
      >
        <div className="flex items-center gap-3">
          <Star className="h-8 w-8" />
          <div className="text-left">
            <div className="text-2xl font-bold">20% OFF</div>
            <div className="text-sm">All Services for Members</div>
          </div>
        </div>
        <BorderBeam duration={3} size={100} />
      </Button>
    </div>
  )
}

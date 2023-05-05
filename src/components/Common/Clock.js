import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

export const Clock = () => {
  const [days, setDays] = useState('00')
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('00')
  const [seconds, setSeconds] = useState('00')

  const [expire, setExpire] = useState(false)

  let interval = useRef()

  const countDown = () => {
    const destination = new Date('Jan 31, 2023 14:24:00 ').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const different = destination - now

      const days = Math.floor(different / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((different % (1000 * 60)) / 1000)

      if (different <= 0) {
        setExpire(true)
        clearInterval(interval.current)
      } else {
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    countDown()
    return () => {
      clearInterval(interval.current)
    }
  }, [])

  return (
    <div>
      {expire ? (
        <h4>Sales Ended</h4>
      ) : (
        <h3>
          {days}&nbsp;D:&nbsp;{hours}&nbsp;H:&nbsp;{minutes}&nbsp;M:&nbsp;
          {seconds}S
        </h3>
      )}
    </div>
  )
}

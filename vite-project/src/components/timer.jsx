import { useEffect } from "react"

function Timer() {
  useEffect(
    () => {
      //code that has side affects
      const timerID = setInterval(
        () => {
          console.log("foo")
        },
        1000
      )
      return () => {
        // clear up after us
        clearInterval(timerID)
      }
    },
    []
  )

  return (
    <h1>Timer</h1>
  )
}

export default Timer;
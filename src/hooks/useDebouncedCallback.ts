import { useCallback, useRef } from 'react'

function useDebouncedCallback(callback: any, delay: number) {
  const callbackRef = useRef(callback)
  const timeoutRef = useRef(null)

  callbackRef.current = callback

  const debouncedCallback = useCallback(
    (...args: any) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // @ts-ignore
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args)
      }, delay)
    },
    [delay],
  )

  return debouncedCallback
}

export default useDebouncedCallback

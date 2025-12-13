"use client"
import { useEffect } from "react"

function useTitle(title) {
    useEffect(() => {
        document.title = `${title} | Trendify`
    }, [title])
}

export default useTitle
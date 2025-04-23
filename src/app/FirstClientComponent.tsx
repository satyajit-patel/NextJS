"use client"
import { useState } from "react"

export default function FirstClientComponent() {
    const [value, setValue] = useState(0)

    return (
        <div>
            <div>
                <button className="border-2" onClick={() => setValue(value + 1)}>
                click me
                </button>
            </div>
            <h1>
                {value}
            </h1>
        </div>
    )
}
'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
    const [inputSearch, setInputSearch] = useState()
    const router = useRouter()
    
    const handleChange = (event) => {
        setInputSearch(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search?location=${inputSearch}`)
        e.target.reset()
    }
    
    return(
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input type="text" placeholder="Buscar por id de ubicación" className="input input-bordered w-full max-w-xs" onChange={handleChange} />
            <button type="submit" className="btn">Buscar</button>
        </form>
    )
}
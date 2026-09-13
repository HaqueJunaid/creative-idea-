'use client'
import { useContact } from "@/context/ContactContext"

const StartProjectButton = () => {
    const { openContact } = useContact();
    return (
        <button onClick={openContact} className="px-12 py-6 bg-brand-tertiary text-brand-secondary font-label text-xs font-bold tracking-widest hover:bg-transparent border-1 hover:border-brand-tertiary hover:text-brand-tertiary transition-colors duration-300">
            START A PROJECT
        </button>
    )
}

export default StartProjectButton
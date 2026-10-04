"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContactContextType {
    isContactOpen: boolean;
    openContact: () => void;
    closeContact: () => void;
    isJoinOpen: boolean;
    openJoin: () => void;
    closeJoin: () => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export function ContactProvider({ children }: { children: ReactNode }) {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isJoinOpen, setIsJoinOpen] = useState(false);

    const openContact = () => setIsContactOpen(true);
    const closeContact = () => setIsContactOpen(false);

    const openJoin = () => setIsJoinOpen(true);
    const closeJoin = () => setIsJoinOpen(false);

    return (
        <ContactContext.Provider value={{ 
            isContactOpen, 
            openContact, 
            closeContact,
            isJoinOpen,
            openJoin,
            closeJoin
        }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContact() {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error("useContact must be used within a ContactProvider");
    }
    return context;
}

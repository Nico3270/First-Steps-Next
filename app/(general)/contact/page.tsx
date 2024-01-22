import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Contact page',
 keywords: ["Contact Page", "Información"]
};

export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}
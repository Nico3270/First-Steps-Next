import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing',
 description: 'Pricing page',
 keywords: ["Pricing Page", "Información de precios"]
};

export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
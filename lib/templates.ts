export interface Template {
    id: string;
    name: string;
    category: string;
    thumbnail: string;
    previewUrl: string;
}

export interface WeddingCard {
    id: string;
    name: string;
    category: string;
    thumbnail: string;
    pdfUrl: string;
}

export const templates: Template[] = [
    {
        id: "rajasthani-restaurant",
        name: "Maharaja's Kitchen",
        category: "Restaurant",
        thumbnail: "/thumbnails/sites-templates/rajasthani-restaurant.png",
        previewUrl: "/templates/rajasthani-restaurant/index.html",
    },
    {
        id: "indian-cafe",
        name: "Chai & Canvas",
        category: "Café",
        thumbnail: "/thumbnails/sites-templates/indian-cafe.png",
        previewUrl: "/templates/indian-cafe/index.html",
    },
    {
        id: "indochinese-restaurant",
        name: "Wok & Fire",
        category: "Restaurant",
        thumbnail: "/thumbnails/sites-templates/indochinese-restaurant.png",
        previewUrl: "/templates/indochinese-restaurant/index.html",
    },
    {
        id: "pottery-business",
        name: "Mitti & Co.",
        category: "Landing Page",
        thumbnail: "/thumbnails/sites-templates/pottery-business.png",
        previewUrl: "/templates/pottery-business/index.html",
    },
    {
        id: "pathology-centre",
        name: "LifeLine Diagnostics",
        category: "Healthcare",
        thumbnail: "/thumbnails/sites-templates/pathology-centre.png",
        previewUrl: "/templates/pathology-centre/index.html",
    },
    {
        id: "milling-company",
        name: "Bharat Precision Works",
        category: "Industrial",
        thumbnail: "/thumbnails/sites-templates/milling-company.png",
        previewUrl: "/templates/milling-company/index.html",
    },
    {
        id: "atelier-studio",
        name: "Atelier Noor",
        category: "Design Studio",
        thumbnail: "/thumbnails/sites-templates/atelier-studio.png",
        previewUrl: "/templates/atelier-studio/index.html",
    },
];

export const weddingCards: WeddingCard[] = [
    {
        id: "beige-gold-classic",
        name: "Beige & Gold Classic",
        category: "Wedding Invitation",
        thumbnail: "/thumbnails/wedding-cards/Beige-and-Gold-Classic-Wedding-Invitation.png",
        pdfUrl: "/wedding-cards/Beige-and-Gold-Classic-Wedding-Invitation.pdf",
    },
    {
        id: "gold-pink-beige",
        name: "Gold, Pink & Beige",
        category: "Wedding Invitation",
        thumbnail: "/thumbnails/wedding-cards/Gold-Pink-and-Beige-Wedding-Invitation.png",
        pdfUrl: "/wedding-cards/Gold-Pink-and-Beige-Wedding-Invitation.pdf",
    },
    {
        id: "purple-yellow-festive",
        name: "Purple & Yellow Festive",
        category: "Wedding Invitation",
        thumbnail: "/thumbnails/wedding-cards/Purple-and-Yellow-Festive-Wedding-Invitation.png",
        pdfUrl: "/wedding-cards/Purple-and-Yellow-Festive-Wedding-Invitation.pdf",
    },
];

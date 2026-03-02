export interface Template {
    id: string;
    name: string;
    category: string;
    thumbnail: string;
    previewUrl: string;
}

export const templates: Template[] = [
    {
        id: "rajasthani-restaurant",
        name: "Maharaja's Kitchen",
        category: "Restaurant",
        thumbnail: "/thumbnails/rajasthani-restaurant.png",
        previewUrl: "/templates/rajasthani-restaurant/index.html",
    },
    {
        id: "indian-cafe",
        name: "Chai & Canvas",
        category: "Café",
        thumbnail: "/thumbnails/indian-cafe.png",
        previewUrl: "/templates/indian-cafe/index.html",
    },
    {
        id: "indochinese-restaurant",
        name: "Wok & Fire",
        category: "Restaurant",
        thumbnail: "/thumbnails/indochinese-restaurant.png",
        previewUrl: "/templates/indochinese-restaurant/index.html",
    },
    {
        id: "pottery-business",
        name: "Mitti & Co.",
        category: "Landing Page",
        thumbnail: "/thumbnails/pottery-business.png",
        previewUrl: "/templates/pottery-business/index.html",
    },
    {
        id: "pathology-centre",
        name: "LifeLine Diagnostics",
        category: "Healthcare",
        thumbnail: "/thumbnails/pathology-centre.png",
        previewUrl: "/templates/pathology-centre/index.html",
    },
    {
        id: "milling-company",
        name: "Bharat Precision Works",
        category: "Industrial",
        thumbnail: "/thumbnails/milling-company.png",
        previewUrl: "/templates/milling-company/index.html",
    },
    {
        id: "atelier-studio",
        name: "Atelier Noor",
        category: "Design Studio",
        thumbnail: "/thumbnails/atelier-studio.png",
        previewUrl: "/templates/atelier-studio/index.html",
    },
];

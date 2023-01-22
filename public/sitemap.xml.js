const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap(posts) {
    return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
    <loc>https://jsonplaceholder.typicode.com</loc>
    </url>
    <url>
    <loc>https://jsonplaceholder.typicode.com/posts</loc>
    </url>
    ${posts.map(({ id }) => {
        return `
        <url>
        <loc>${EXTERNAL_DATA_URL}/${id}</loc>
        </url>
        `;
    })
            .join('')}
    </urlset>
}`;
}

function SiteMap() {

}

export async function getServerSideProps({ res }) {

    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();

    const sitemap = generateSiteMap(posts);

    res.setHeader('Content-Type', 'text/xml');

    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
}

export default SiteMap;
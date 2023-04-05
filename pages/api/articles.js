export default function handler(req, res) {
    // Define article data with trending counts
    const articlesWithTrendingCount =
        [
            {
                title: "Article 1",
                photo: "https://picsum.photos/id/237/200/300",
                trendingCount: 10
            },
            {
                title: "Article 2",
                photo: "https://picsum.photos/id/238/200/300",
                trendingCount: 20
            },
            {
                title: "Article 3",
                photo: "https://picsum.photos/id/239/200/300",
                trendingCount: 30
            },
            {
                title: "Article 4",
                photo: "https://picsum.photos/id/240/200/300",
                trendingCount: 40
            },
            {
                title: "Article 5",
                photo: "https://picsum.photos/id/241/200/300",
                trendingCount: 50
            }
        ];

    // We will call the trending service API for fetching the trending_count,, but for now hardcoding it
    res.status(200).json({ articles: articlesWithTrendingCount });
}
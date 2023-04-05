export default function handler(req, res) {
    const { query: { article_id } } = req;

    // Fetch trending count for article with ID `article_id` from database or cache
    const trendingCount = 1234; // Replace with actual trending count

    res.status(200).json({ count: trendingCount });
}
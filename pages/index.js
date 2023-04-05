import React from 'react';

const articles = [
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
  },
  {
    title: "Article 6",
    photo: "https://picsum.photos/id/242/200/300",
    trendingCount: 50
  },
  {
    title: "Article 7",
    photo: "https://picsum.photos/id/243/200/300",
    trendingCount: 50
  }
];

const ArticlePage = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px'
    }}>
      <h1 style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>Essentially Animals</h1>
      <img src="https://picsum.photos/id/200/800/400" alt="Article Photo" style={{
        width: '50%',
        marginBottom: '20px'
      }} />
      <p style={{
        marginBottom: '20px'
      }}>Mountain yaks, also known as Himalayan yaks, are large, long-haired, domesticated mammals that are native to the Himalayan region of southern Central Asia. They are a subspecies of the wild yak and are closely related to domestic cattle.

        Mountain yaks are well adapted to living in harsh, high-altitude environments, where temperatures can drop as low as -40°C. They have a thick coat of hair that keeps them warm in cold weather and a broad, flat nose that helps them to breathe in thin air.</p>
      <div style={{
        display: 'flex',
        overflowX: 'auto',
        width: '100%',
        marginBottom: '20px'
      }}>
        {articles.map((article, index) => (
          <div key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '20px'
          }}>
            <img src={article.photo} alt={article.title} style={{
              width: '200px',
              height: '300px',
              objectFit: 'cover',
              marginBottom: '10px'
            }} />
            <h2 style={{
              textAlign: 'center',
              margin: '0',
              marginBottom: '10px'
            }}>{article.title}</h2>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '14px',
                marginRight: '5px'
              }}>Trending Count: {article.trendingCount}</span>
            </div>
          </div>
        ))}
      </div>
      <p style={{
        marginBottom: '20px'
      }}>Mountain yaks are primarily used for their milk, meat, and hides, and are often used as pack animals in the Himalayan region. They are also used for their wool, which is used to make a variety of textiles.

        Mountain yaks are social animals that live in herds, with females and their offspring forming the core of the herd. Males are generally solitary and only join the herd during the mating season. Mountain yaks are herbivores and feed on a variety of grasses, herbs, and shrubs.</p>
      <p style={{
        marginBottom: '20px'
      }}>Mountain yaks are an important part of the culture and economy of the Himalayan region, and are revered by many of the indigenous people who live there. However, their numbers have declined in recent years due to overgrazing, habitat loss, and competition with other livestock. Conservation efforts are underway to protect the remaining populations of mountain yaks and their habitats.</p>
    </div>
  );
};

export default ArticlePage;
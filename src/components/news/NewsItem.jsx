export default function NewsItem({newsItem}) {
  return (
    <div>
      <img src={`https://tmcell.tm/api/api/img/news/${newsItem.news_img}`} alt={newsItem.title_tm} />
      <h1>{newsItem.title_tm}</h1>
      <p dangerouslySetInnerHTML={{__html: newsItem.description_tm}}></p>
    </div>
  )
}
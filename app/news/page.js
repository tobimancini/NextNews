import { DUMMY_NEWS } from "@/dummy-news"
import Link from "next/link"

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {
                    DUMMY_NEWS.map((newsItem)=> {
                        return <li key={newsItem.id}>
                            <Link href={`/news/${newsItem.slug}`}>
                                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
                                <span>{newsItem.title}</span>
                            </Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default NewsPage
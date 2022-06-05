import {useFetchReviews } from '../hooks/useFetchReviews'

 const Reviews = () => {
   const reviews=useFetchReviews()

    return (
            <ul>
                {reviews && reviews.map(({author,content,id}) => <li key={id}>
                    <h2>{author}</h2>
                    <p>{content}</p></li>)}
</ul>
    );}
export default Reviews
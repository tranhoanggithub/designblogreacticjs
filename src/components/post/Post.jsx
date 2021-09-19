import "../post/post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/07/22-960x640.jpg" alt="" />
            <div className="postInfo">
                <div className="postCarts">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nulla facere animi vitae laborum corporis non est molestias, optio tenetur.
            </p>
        </div>
    )
}

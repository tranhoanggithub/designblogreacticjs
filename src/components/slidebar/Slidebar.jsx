import "./slidebar.css"


export default function Slidebar() {
    return (
        <div className="slidebar">
            <div className="slidebarItem">
                <span className="slidebarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minus distinctio esse. Quidem suscipit molestiae corporis consectetur quod, repellendus delectus.</p>
            </div>
            <div className="slidebarItem">
                <span className="slidebarTitle">CATEGORIES</span>
                <ul className="slidebarList">
                    <li className="slidebarListItem">Life</li>
                    <li className="slidebarListItem">Music</li>
                    <li className="slidebarListItem">Style</li>
                    <li className="slidebarListItem">Sport</li>
                    <li className="slidebarListItem">Tech</li> 
                    <li className="slidebarListItem">Cinema</li> 
                </ul> 
            </div>
            <div className="slidebarItem">
                <span className="slidebarTitle">FOLLOW US</span>
                <div className="slidebarSocial">
                    <i className="sliderbarIcon fab fa-facebook-square"></i>
                    <i className="sliderbarIcon fab fa-twitter-square"></i>
                    <i className="sliderbarIcon fab fa-pinterest-square"></i>
                    <i className="sliderbarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

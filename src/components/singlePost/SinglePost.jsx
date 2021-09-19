import "../../components/singlePost/singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit, amet 
                    <div className="singlePostEdit">
                    <i className="singlePostIcon fas fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfor">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostData">1 hour ago</span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nemo eos reiciendis ipsum saepe vero quidem obcaecati ducimus aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nemo eos reiciendis ipsum saepe vero quidem obcaecati ducimus aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nemo eos reiciendis ipsum saepe vero quidem obcaecati ducimus aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nemo eos reiciendis ipsum saepe vero quidem obcaecati ducimus aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia blanditiis nemo eos reiciendis ipsum saepe vero quidem obcaecati ducimus aut?</p>
            </div>
        </div>
    )
}

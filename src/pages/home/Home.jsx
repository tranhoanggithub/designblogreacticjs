    import "./home.css"
    import Posts from "../../components/posts/Posts"
    import Header from "../../components/header/Header"
    import Slidebar from "../../components/slidebar/Slidebar"
    
    export default function Home() {
        return (
                <>
                <Header/> 
               <div className="home">
                <Posts/>
                <Slidebar/>
               </div>
                </> 
        )
    }
    
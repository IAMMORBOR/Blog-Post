import { auth, db,firebaseAuth } from "../../Firebase";
import { onAuthStateChanged,signOut} from 'firebase/auth';
import {
    collection, 
    getDoc,
    getDocs,
    doc,
    deleteDoc
} from "firebase/firestore";
import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './BlogHome.style.scss'
import { async } from "@firebase/util";


const HomePage= ()=>{
    const [PostList, SetPostList]=useState([]);
    const [user, setUser]=useState('');
    const navigate = useNavigate();
    const PostcollectionRef= collection(db, 'Post');
    //const [like, addlike]=useState(4)


useEffect(()=>{
    const getPosts = async()=>{
        const data = await getDocs(PostcollectionRef)
        SetPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };
    getPosts();
});
onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if (currentUser){
      setUser(currentUser);
     
    } 
     else {
      navigate ('/SignIn')
     } 
          
  })


   const deletePost=async(id)=>{
   const PostDoc=( doc(db, 'Post', id))
   await deleteDoc(PostDoc)

  }
 
    return(
        <div>{PostList.map((Post)=>{
        return (
            
            <div className="container ">
            <div className="HomeSection--main">
                <div className="HomeSection">
                    <h3 className="HomeSection--title" >
                        {Post.title}
                    </h3>
                    <div className="HomeSection--Description">
                        {Post.comment}
                    </div>
                </div>
                <div className="HomeSection--small">
                    <div className="HomeSection--writer">
                        <h4>@{Post.author.name}</h4>
                    </div>
                
                    <div className="HomeSection--link-section">
                        <Link to='/CreatePost'>Create a post</Link>
                        <div className="like-section">
                        <button>like</button>
                        </div>
                        <button  onClick={()=>signOut(firebaseAuth)}>signout</button>
                        <button onClick={()=>{deletePost(Post.id)}}>
                        delete</button>
                    </div>
                </div>
            </div>
            </div>
            )
        })} 
        </div>
    )
}
export default HomePage;
//{isAuth & Post.author.id=== auth.currentUser.uid &
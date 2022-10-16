import { auth, db,firebaseAuth } from "../../Firebase";
import swal from 'sweetalert';
import { onAuthStateChanged} from 'firebase/auth';
import {
    collection, 
    getDocs,
    doc,
    deleteDoc
} from "firebase/firestore";
import { useState, useEffect} from "react";
import {FaRegTrashAlt} from 'react-icons/fa';
import './BlogHome.style.scss'
import MainNav from "../NavSection/MainNav.component";







const HomePage = ({isAuth}) => {
    const [PostList, SetPostList] = useState([]);
    const [user, setUser]=useState()

    const PostcollectionRef = collection(db, 'Post');

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(PostcollectionRef)
            SetPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            console.log("here",data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
},[PostList]);
onAuthStateChanged(firebaseAuth,(currentUser)=>{
    setUser(currentUser)
});

    const deletePost =async (id)=>{
        const PostDoc = (doc(db, 'Post', id))
         const willdelete = await swal({
         title: "Are you sure?",
         text: "Are you sure that you want to delete this file?",
         icon: "warning",
         dangerMode: true,
        });
        if (willdelete) {
           await deleteDoc(PostDoc)
            swal("Deleted!", "Your Post has been deleted!", "success");
         }


    }
    return (
    <div className="main-section">
     <MainNav/>
     <div>
     {PostList.map((Post) => {
     return (
            <div className="container " key={Post.id}>
                <div className="HomeSection--main">
                        <div className="HomeSection" >
                            <h3 className="HomeSection--title">
                                {Post.title}
                            </h3>
                        <div className="HomeSection--box">
                            <div className="HomeSection--Description">
                                {Post.comment}
                            </div>
                        </div>
                    </div>
                    <div className="HomeSection--small">
                        <div className="HomeSection--writer">
                            <h4 className="HomeSection--author">@{Post.author.name}</h4> 
                                            
                        </div>
                        {Post.author.id === auth.currentUser.uid ?
                        <button className="HomeSection--btn" onClick={()=>{deletePost(Post.id)}}>
                            <FaRegTrashAlt className="HomeSection--icon"/>
                        </button> : null }
                    </div>
                </div>
            </div>
        )
    })}
    </div>
    </div>
)
}
export default HomePage;

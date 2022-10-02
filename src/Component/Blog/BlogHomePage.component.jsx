import { auth, db,firebaseAuth } from "../../Firebase";
import swal from 'sweetalert';
import { onAuthStateChanged} from 'firebase/auth';
import {
    collection, 
    updateDoc, 
    getDoc,
    getDocs,
    doc,
    deleteDoc
} from "firebase/firestore";
import { useState, useEffect} from "react";
import NavSection from "../NavSection/NavSection.component";
import {FaRegTrashAlt} from 'react-icons/fa';
//import {AiOutlineHeart}from 'react-icons/ai'
import {AiFillEdit}from 'react-icons/ai'
//import Button from "../Button-component/Button.component";
import './BlogHome.style.scss'





const HomePage = ({isAuth}) => {
    const [PostList, SetPostList] = useState([]);
    const [user, setUser]=useState()
    //const [like, setLike]=useState(1);


    const PostcollectionRef = collection(db, 'Post');

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(PostcollectionRef)
            SetPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
},[PostList]);
    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        setUser(currentUser)
    })

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
  
    // const likePost= (id)=>{
    //     setLike(like +1 )
    // }

    // const washingtonRef = doc(db, "cities", "DC");

// Set the "capital" field of the city 'DC'
//  const updatePost=async()=>{
//     await updateDoc(PostcollectionRef, {
//         capital: true
//       });
//  }

        // const updatePost=(id, updatedPost)=>{
        //        const PostDoc=doc(db, "Post", id)
        //         return updateDoc(PostcollectionRef, {PostDoc})
        //   }


    return (
        <div className="main-section">
            <NavSection />
            <div>
                {PostList.map((Post) => {
                    return (
                        <div className="container ">
                            <div className="HomeSection--main">
                                <div className="HomeSection" key={Post.id}>
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

                                        {/* <button className="HomeSection--btn" onClick={()=>{deletePost(Post.id)}}>
                                             <FaRegTrashAlt className="HomeSection--icon"/>
                                        </button> */}
                                         {/* <div className="like-section">
                                        
                                            <button onClick={()=>{likePost(`Post.id`)}}>
                                            <AiOutlineHeart/>
                                            </button>
                                            <span>{like}</span> 
                                        </div>  */}
                                            {/* <button onClick={()=>{updatePost(Post.id)}}>
                                                <AiFillEdit className="HomeSection--icon_edit"/>
                                            </button> */}
                                        
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

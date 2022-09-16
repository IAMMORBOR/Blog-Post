import { async } from '@firebase/util';
import { onAuthStateChanged,signOut} from 'firebase/auth';
import { useState, useEffect} from "react";
import {useNavigate}from 'react-router-dom';
import { db, firebaseAuth ,auth} from '../../Firebase'
import './CreatePost.style.scss'
import { addDoc, collection} from 'firebase/firestore';


const CreatePost=()=>{
    const [title, setTitle]=useState('');
    const [comment, setComment]=useState('');
    const [user,setUser]= useState(undefined);
    const navigate = useNavigate();

    
    const PostcollectionRef= collection(db, 'Post');
    const NewPost = async(newPost)=>{
        await addDoc (PostcollectionRef, {
            title,
            comment,
            author:{
                name:auth.currentUser.displayName,
                id: auth.currentUser.uid
            }

        })
        navigate('/HomePage')
       
    }
    // useEffect(() => {
    //     if (!isAuth) {
    //       navigate("/SignIn");
    //     }
    // }, []);
    
    // onAuthStateChanged(firebaseAuth,(currentUser)=>{
    //     if (currentUser){
    //       setUser(currentUser);
         
    //     } 
    //      else {
    //       navigate ('/SignIn')
    //      } 
              
    //   })
    return(
        <div className='content--MainSection'>
            <div className='content--CommentSection'>
                <div className='content--userProfie'>
                    <img src={localStorage.getItem("profilePicture")}/>
                    {localStorage.getItem("name")}

                </div>
                <div className='content--textSection'>
                    
                        <input className='content--topicBox'
                        type='text' 
                        placeholder="Topic"
                        onChange={(e)=>{setTitle (e.target.value)}}

                        /><br/>
                        <textarea className='content--textArea' 
                        rows="20" cols="70" name="comment"  
                        placeholder="What's on your mind?"
                        onChange={(e)=>{setComment (e.target.value)}}
                        />
                        <div className='content--btnSection'>
                            <button type='submit' onClick={NewPost}>Post</button>
                            <button>like</button>
                            <button>comment</button>
                            <button>delete</button>
                        </div>
       
                </div>
           </div>
           {/* <button onClick={()=>signOut(firebaseAuth)}>
            Sign Out
        </button> */}
        </div>
    )
       
}
export default CreatePost;

// value={title}
// onChange={(e)=>setTitle(e.target.value)}
// value={comment}
// onChange={(e)=>setComment(e.target.value)}
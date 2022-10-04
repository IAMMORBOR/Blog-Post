import { useState} from "react";
import {useNavigate}from 'react-router-dom';
import { db,auth} from '../../Firebase'
import { addDoc, collection} from 'firebase/firestore';
import { onAuthStateChanged} from 'firebase/auth';
import { firebaseAuth } from "../../Firebase";
import './CreatePost.style.scss'
import swal from "sweetalert";
import NavSection from "../NavSection/NavSection.component";


const CreatePost=()=>{
    const [title, setTitle]=useState('');
    const [comment, setComment]=useState('');
    const [user,setUser]= useState(undefined);
    const navigate = useNavigate();

    const PostcollectionRef= collection(db, 'Post');
    const NewPost = async(newPost)=>{
        if(title === '' & comment === ''){
            swal("Title and comment section should be filled");
            return;
        } else{
        await addDoc (PostcollectionRef, {
            title,
            comment,
            author:{
                name:auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
           
           
        })
      
        await swal("Congratulations!","Your post has been posted!", "success");
        navigate('/HomePage')
       
        }}


  

  
    return(
       

        <div className='content--MainSection'>
            <div className='content--CommentSection'>
                <div className='content--textSection'>
                    
                        <input className='content--MainSection--topicBox'
                        type='text' 
                        placeholder="Topic"
                        onChange={(e)=>{setTitle (e.target.value)}}

                        /><br/>
                        <textarea className='content--MainSection--textArea' 
                        rows="" cols="" name="comment"  
                        placeholder="What's on your mind?"
                        onChange={(e)=>{setComment (e.target.value)}}
                        />
                         
                        <div className='content--btnSection'>
                           <button className="content--MainSection--btn" type='submit'
                            onClick={NewPost}>Post</button>
                        </div>
       
                </div>
           </div>
           
        </div>
    )
       
}
export default CreatePost;

// value={title}
// onChange={(e)=>setTitle(e.target.value)}
// value={comment}
// onChange={(e)=>setComment(e.target.value)}
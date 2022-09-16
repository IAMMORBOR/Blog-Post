// import { db } from "../../Firebase";
// import { 
//     collection,
//     getDocs,
//     getDoc,
//     addDoc,
//     updateDoc, 
//     deleteDoc,
//     doc
//  } from "firebase/firestore";
//  const BlogcollectionRef= collection(db, 'Post')

//  const BlogPost=()=>{
//      addPost=(newPost)=>{
//         return addDoc(BlogcollectionRef, newPost);
//     }

//     updatePost=(id, updatedPost)=>{
//         const PostDoc=doc(db, "Post", id)
//         return updateDoc(PostDoc, updatedPost)
//     }

//     deletePost =(id)=>{
//         const PostDoc=doc(db, "Post", id)
//         return deleteDoc(PostDoc)
//     }

//     getallPost=()=>{
//         return getDocs(BlogcollectionRef);
//     }

//     //getting a single document, you will be needing only the db ref
//     getPost=()=>{
//         const PostDoc=doc(db, "Post", id)
//         return getDoc(PostDoc)
//     }

    

//  }

//  export default BlogPost;

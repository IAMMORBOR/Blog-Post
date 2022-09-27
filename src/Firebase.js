import { initializeApp }from 'firebase/app';
import { 
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  //createUserWithEmailAndPassword
} from 'firebase/auth';
import{getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: "AIzaSyAn0kZIjnrVICiGqeLW0lC3PK7JbiJwIOo",
  authDomain: "mo-blog-post.firebaseapp.com",
  projectId: "mo-blog-post",
  storageBucket: "mo-blog-post.appspot.com",
  messagingSenderId: "282226203685",
  appId: "1:282226203685:web:08c6e32550b0356c9873cc"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)


const provider = new GoogleAuthProvider();
// provider.setCustomParameters (
//   {
//       prompt:'Select_account'
//   }
// );
 export const auth= getAuth()
 export const signInWithGooglePopup=()=>{
  signInWithPopup(auth, provider).then((result)=>{
    // const name = result.user.displayName;
    // const profilePicture = result.user.photoURL;

   

    // localStorage.setItem("name", name);
    // localStorage.setItem("profilePicture", profilePicture)

  })
  .catch((error)=>{
    console.log(error)
  })
}
export const db =getFirestore(app)



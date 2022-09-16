import {db} from "../firebase-config";

//Firestore methods
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const bookCollectionRef = collection(db, "Books")
class BookDataService {
  addBooks = (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  };

  updateBook = (id, updateBook) => {
    const bookDoc = doc(db, "Books", id);
    return updateDoc(bookDoc, updateBook);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, "Books", id);
    return deleteDoc(bookDoc);
  }

  getAllBooks = () =>{
    return getDocs(bookCollectionRef);
  }

  getBook = (id) => {
    
  }
}

export default new BookDataService();
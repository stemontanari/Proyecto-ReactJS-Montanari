import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs,  doc, getDoc, query, where} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZx8yDDXVt7YX2kmkoHcOX5QwXp5CFGcw",
  authDomain: "proyecto-react-36e8b.firebaseapp.com",
  projectId: "proyecto-react-36e8b",
  storageBucket: "proyecto-react-36e8b.appspot.com",
  messagingSenderId: "813523285828",
  appId: "1:813523285828:web:64f26bd0fc046dec528911"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getItems () {
const miColleccion = collection (firestore, 'Calzados' )
let respuesta = await getDocs(miColleccion);

let dataDocs = respuesta.docs.map ((documento) => {
  let docFormateado = { ...documento.data(), id: documento.id}
  return docFormateado
});
return dataDocs;
}

export async function getSingleItem (idParams ) {
  const docRef = doc(firestore, 'Calzados', idParams);
  const docSnapshot = await getDoc(docRef)

  return {...docSnapshot.data(), id: docSnapshot.id}
  
}

export async function getItemByCategory(catParams) {
  const collectionRef = collection (firestore, 'Calzados');
  const queryCategory = query(collectionRef, where("category", "==", catParams));

  const respuesta = await getDocs (queryCategory);

  let dataDocs = respuesta.docs.map ((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id}
    return docFormateado
  });
  return dataDocs;
}

export default firestore;
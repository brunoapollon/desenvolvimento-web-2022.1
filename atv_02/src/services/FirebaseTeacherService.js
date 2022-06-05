import {
  collection,
  getDocs,
  onSnapshot,
  query,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default class FirebaseService {
  static unscribe = null;

  static list = (firestore, callback) => {
    getDocs(collection(firestore, "teacher"))
      .then((querySnapshot) => {
        let teachers = [];
        querySnapshot.forEach((doc) => {
          const { name, university, degree } = doc.data();
          teachers.push({ _id: doc.id, name, university, degree });
        });
        callback(teachers);
      })
      .catch((error) => console.log(error));
  };

  static list_onSnapshot(firestore, callback) {
    const q = query(collection(firestore, "teacher"));
    FirebaseService.unscribe = onSnapshot(q, (querySnapshot) => {
      let teachers = [];
      querySnapshot.forEach((doc) => {
        const { name, university, degree } = doc.data();
        teachers.push({ _id: doc.id, name, university, degree });
      });
      callback(teachers);
    });
  }

  static create = (firestore, callback, data) => {
    addDoc(collection(firestore, "teacher"), data)
      .then((doc) => {
        console.log("CREATE:" + doc.id);
        callback();
      })
      .catch((error) => console.log(error));
  };

  static retrieve = async (firestore, callback, _id) => {
    const docRef = doc(firestore, "teacher", _id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      callback(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  static retrieve_promisse = (firestore, callback, _id) => {
    const docRef = doc(firestore, "teacher", _id);
    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists) callback(docSnap.data());
      })
      .catch((error) => console.log(error));
  };

  static update = (firestore, callback, _id, body) => {
    const docRef = doc(firestore, "teacher", _id);
    updateDoc(docRef, body)
      .then(() => {
        callback();
      })
      .catch((error) => console.log(error));
  };

  static delete = (firestore, callback, _id) => {
    const docRef = doc(firestore, "teacher", _id);
    deleteDoc(docRef)
      .then(() => {
        callback();
      })
      .catch((error) => console.log(error));
  };
}

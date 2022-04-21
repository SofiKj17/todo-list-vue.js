import {initializeApp} from "firebase/app";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore";
import {TaskStatus} from "@/model/TaskStatus";

const firebaseConfig = {
    apiKey: "AIzaSyBj4IPhxjfH839EM5d7tfCTm3tn2ieFvfQ",
    authDomain: "todo-list-15ea1.firebaseapp.com",
    projectId: "todo-list-15ea1",
    storageBucket: "todo-list-15ea1.appspot.com",
    messagingSenderId: "225740307615",
    appId: "1:225740307615:web:0778d3d7545aa8036ff6aa",
    measurementId: "G-WVM9DK2H9B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export class RemoteTaskService {

    async findByStatus(status) {
        const q = query(collection(db, 'tasks'), where('status', '==', status));
        return (await getDocs(q)).docs.map(task => Object.assign({id: task.id}, task.data()));
    }

    async create(task) {
        (await addDoc(collection(db, 'tasks'), task));
    }

    async removeById(id) {
        const taskRef = doc(db, 'tasks', id);
        const taskSnap = await getDoc(taskRef);
        const task = Object.assign(taskSnap.data());
        task.status = TaskStatus.REMOVED;
        (await deleteDoc(taskRef));
        (await addDoc(collection(db, 'tasks'), task));
    }
}
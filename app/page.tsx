import Image from "next/image";
import styles from "./page.module.scss";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { AmpleFirestore } from "@/firebase";
import moment from "moment";
import Home from "./Home";
import Page2 from "./page2/page";

export default async function HomePage() {
  const q = query(collection(AmpleFirestore, "ample"));
  // console.log("asdf : ", q);

  const data = await getDocs(q);
  const docSnap1 = await getDoc(doc(AmpleFirestore, "ample", "ample1"));

  // console.log("doc data : ", docSnap1.data());
  // console.log("allData : ", data);

  // const all = await getDocs(q);
  let dataList: any[] = [];
  data.forEach((doc) => {
    // console.log(" doc  :", doc.data());
    dataList.push(doc.data());
  });
  // const collectionRef = collection(AmpleFirestore, "ample");
  // await addDoc(collectionRef, {
  //   red: 178,
  //   green: 155,
  //   blue: 160,
  //   price: 10,
  //   regDt: moment().format("YYYY-MM-DD"),
  // });
  // const docRef = doc(AmpleFirestore, "ample");
  // const docSnap = await getDoc(docRef);
  // console.log("doc : ", docSnap);
  const hello = () => {
    console.log("함수 전달됨");
  };
  return (
    <main className={styles.main}>
      <Home ampleList={dataList || []} />
      <Page2 func={hello} />
    </main>
  );
}

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
import Button from "@/components/Button";

export default async function Home() {
  const q = query(collection(AmpleFirestore, "ample"));
  console.log("asdf : ", q);

  // const data = getDocs(q);
  const docSnap1 = await getDoc(
    doc(AmpleFirestore, "ample", "TLjH8C9ONcCD0nMGwk12")
  );

  console.log("doc data : ", docSnap1.data());

  const all = await getDocs(q);

  all.forEach((doc) => {
    console.log(" doc  :", doc);
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

  return (
    <main className={styles.main}>
      <div>dfs</div>
      <Button />
    </main>
  );
}

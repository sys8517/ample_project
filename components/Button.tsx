"use client";

import { AmpleFirestore } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Button() {
  return (
    <button
      onClick={async () => {
        return setDoc(
          doc(AmpleFirestore, "ample", "apmle1"),
          { red: 103, green: 120, blue: 200 },
          {
            merge: true,
          }
        );
      }}
    >
      데이터 추가
    </button>
  );
}

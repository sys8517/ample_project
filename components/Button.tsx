"use client";

import { AmpleFirestore } from "@/firebase";
import { doc, setDoc } from "firebase/firestore";
import style from "./Button.module.scss";
import React from "react";

// export default function Button() {
//   return (
//     <button
//       className={style.btn}
//       onClick={async () => {
//         return setDoc(
//           doc(AmpleFirestore, "ample", "apmle1"),
//           { red: 103, green: 120, blue: 200 },
//           {
//             merge: true,
//           }
//         );
//       }}
//     >
//       데이터 추가
//     </button>
//   );
// }

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button ref={ref} className={style.btn} {...props} />
));
Button.displayName = "Button";

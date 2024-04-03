"use client";
import { Button } from "@/components/Button";
import style from "./Home.module.scss";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { AmpleFirestore } from "@/firebase";
import { useEffect, useState } from "react";
import Input from "@/components/Input";
import moment from "moment";
import { useRouter } from "next/navigation";

interface HomeProps {
  ampleList: any[];
}

export default function Home({ ampleList }: HomeProps) {
  console.log("ampleList : ", ampleList);

  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [errRange, setErrRange] = useState<number>(0);

  const router = useRouter();

  const MAX_VALUE = 255;
  const MIN_VALUE = 0;

  useEffect(() => {
    console.log("red : ", red);
    console.log("green : ", green);
    console.log("blue : ", blue);
  }, [red, green, blue]);
  const ampleCol = collection(AmpleFirestore, "ample");
  return (
    <>
      <div className={style.all_wrap}>
        <div className={style.home_wrap}>
          <div className={style.item_wrap}>
            <span>R</span>
            <Input
              type={"number"}
              value={red}
              max={255}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value);
                if (MIN_VALUE > value) {
                  alert("0이상 255이하 숫자 입력");
                  setRed(MIN_VALUE);
                } else if (MAX_VALUE < value) {
                  alert("0이상 255이하 숫자 입력");
                  setRed(MAX_VALUE);
                } else {
                  setRed(value);
                }
                // if (1 < Number(value) && Number(value) < 255) {
                //   setRed(Number(value));
                // } else {
                //   alert("0과 255 사이 숫자 입력");
                //   setRed(255);
                // }
              }}
            />
          </div>
          <div className={style.item_wrap}>
            <span>G</span>
            <Input
              type={"number"}
              value={green}
              max={255}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value);
                if (MIN_VALUE > value) {
                  alert("0이상 255이하 숫자 입력");
                  setGreen(MIN_VALUE);
                } else if (MAX_VALUE < value) {
                  alert("0이상 255이하 숫자 입력");
                  setGreen(MAX_VALUE);
                } else {
                  setGreen(value);
                }
              }}
            />
          </div>
          <div className={style.item_wrap}>
            <span>B</span>
            <Input
              type={"number"}
              value={blue}
              max={255}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value);
                if (MIN_VALUE > value) {
                  alert("0이상 255이하 숫자 입력");
                  setBlue(MIN_VALUE);
                } else if (MAX_VALUE < value) {
                  alert("0이상 255이하 숫자 입력");
                  setBlue(MAX_VALUE);
                } else {
                  setBlue(value);
                }
              }}
            />
          </div>
          <div className={style.item_wrap}>
            <span>가격</span>
            <Input
              type={"number"}
              value={price}
              max={255}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value);
                if (MIN_VALUE > value) {
                  alert("0이상 숫자 입력");
                  setPrice(MIN_VALUE);
                } else {
                  setPrice(value);
                }
              }}
            />
          </div>
          <div className={style.item_wrap}>
            <span>오차범위</span>
            <Input
              type={"number"}
              value={errRange}
              max={255}
              min={0}
              onChange={(e) => {
                const value = parseInt(e.currentTarget.value);
                if (MIN_VALUE > value) {
                  alert("0이상 숫자 입력");
                  setErrRange(MIN_VALUE);
                } else {
                  setErrRange(value);
                }
              }}
            />
          </div>
          <div className={style.btn_wrap}>
            <Button
              onClick={async () => {
                if (
                  0 < red &&
                  red < 256 &&
                  0 < green &&
                  green < 256 &&
                  0 < blue &&
                  blue < 256 &&
                  price !== 0
                ) {
                  await setDoc(
                    doc(
                      AmpleFirestore,
                      `ample`,
                      `ample${ampleList.length + 1}`
                    ),
                    {
                      red: red,
                      green: green,
                      blue: blue,
                      price: price,
                      regDt: moment().format("YYYY-MM-DD"),
                    },
                    {
                      merge: true,
                    }
                  ).then((a) => {
                    location.reload();
                  });
                } else if (price == 0) {
                  alert("가격을 입력해주세요.");
                } else {
                  alert("rgb코드 숫자 범위를 확인해주세요.");
                }
              }}
            >
              데이터 추가
            </Button>
          </div>
        </div>
        <table className={style.table}>
          <colgroup></colgroup>
          <thead>
            <tr>
              <td>Red</td>
              <td>Green</td>
              <td>Blue</td>
              <td>가격</td>
              <td>등록일</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {ampleList.map((ample, index) => {
              return (
                <tr key={ample.red + index + ample.green + ample.blue}>
                  <td>{ample.red}</td>
                  <td>{ample.green}</td>
                  <td>{ample.blue}</td>
                  <td>{ample.price}</td>
                  <td>{ample.regDt}</td>
                  <td>
                    <Button
                      onClick={async () => {
                        const delRef = doc(
                          AmpleFirestore,
                          "ample",
                          `ample${index + 1}`
                        );
                        const ok = window.confirm("정말 삭제하시겠습니까?");

                        if (ok) {
                          console.log("ok -> ", delRef);
                          await deleteDoc(delRef).then((res) => {
                            console.log("res is ", res);
                            location.reload();
                          });
                        }
                        // await deleteDoc(
                        //   doc(AmpleFirestore, "apmle", `ample${index + 1}`)
                        // ).then(() => {
                        //   location.reload();
                        //   console.log("성공");
                        // });
                      }}
                    >
                      삭제
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </>
  );
}

export default function Page2({ func }: { func: Function }) {
  console.log("func: ", func);
  func();
  return <>전달됨 </>;
}

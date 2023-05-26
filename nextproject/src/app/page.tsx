import Link from "next/link";

export default function Home() {
  let name = "park";

  return (
    <div>
      <div className="p-5 text-left bg-white navba">
        <Link href="/" className="mr-[10px] text-black">
          홈
        </Link>
        <Link href="/list" className="mr-[10px] text-black">
          List
        </Link>
      </div>
      <h4 className="mt-40 align-center"> 안녕 </h4>
      <p className="align-center">by dev {name}</p>
    </div>
  );
}

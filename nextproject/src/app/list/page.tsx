// lazy loading, 사이즈최적화, layout shift 방지
import Image from "next/image";

export default function List() {
  // DB 데이터 예시
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let prices = ["40$", "50$", "60$"];

  const product = products.map((item: string, i: number) => {
    return (
      <div
        className="food m-5 w-[200px] bg-white text-black p-5 rounded-[5px] mx-auto"
        key={i}
      >
        <h4>
          {/* 외부 이미지는 width, height 속성이 필요함 */}
          <Image
            src={`/food${i}.jpg`}
            alt=""
            className="food-img"
            width={500}
            height={400}
          />
          {item} {prices[i]}
        </h4>
      </div>
    );
  });

  return (
    <div>
      <h4 className="mt-40 align-center"> 상품목록 </h4>
      {product}
    </div>
  );
}

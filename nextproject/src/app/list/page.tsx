export default function List() {
  // DB 데이터
  let products = ["Tomatoes", "Pasta", "Coconut"];
  let prices = ["40$", "50$", "60$"];

  const product = products.map((item, i) => {
    return (
      <div
        className="food m-5 w-[200px] bg-white text-black p-5 rounded-[5px] mx-auto"
        key={i}
      >
        <h4>
          <img src={"/food" + `${i}.jpg`} alt="" className="w-full h-auto" />
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

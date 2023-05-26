import { age } from "./data";

export default function Cart() {
  let food = ["Tomato", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">Cart</h4>
      <CartItem food={food} />
      <Banner content="현대" />
      <Btn color="red" />
      <Btn color="blue" />
    </div>
  );
}

const Banner = (props: any) => {
  return <h5>{props.content}카드 결제 행사중</h5>;
};

export const CartItem = (props: any) => {
  const food = props.food.map((item: string, i: number) => {
    return (
      <div
        className="cart-item p-[10px] flex justify-around rounded-[1px] border-b-2 border-gray-600"
        key={i}
      >
        <p> {item} </p>
        <p> $40 </p>
        <p> 1개 </p>
      </div>
    );
  });
  return <div>{food}</div>;
};

const Btn = (props: any) => {
  return (
    <div className="w-40 mx-auto" style={{ background: props.color }}>
      Button
    </div>
  );
};

// Next.js 컴포넌트의 종류 2개
// 1. server component -> 아무곳이나 만든 곳
// - html에 자바스크립트 기능 넣기 불가능
// - useState, useEffect 등 사용불가
// - 로딩속도가 빠름
// - 검색엔진 노출 유리
// - 큰페이지는 servercomponent

// 2. client component -> 파일 맨 위에 'use client'라고 넣은것(아래 모든것이 client component가 됨)
// - html에 자바스크립트 기능 넣기 가능
// - useState, useEffect 등 사용가능
// - 로딩속도 느림(자바스크립트가 많이 필요, hydration 필요)
// - JS기능이 필요한 곳만 client component

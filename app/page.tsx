"use client";
import Image from "next/image";
import dog from "@/public/images/4.jpg";
import { Metadata } from "next";
import { useState } from "react";
import dynamic from "next/dynamic";
/*import _ from "lodash";*/
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative h-screen">
      <h1 className="font-poppins">Hello World</h1>
      <button onClick={() => setVisible(true)}>Show</button>
      {isVisible && <HeavyComponent />}
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show2
      </button>
      <Image
        src="https://bit.ly/react-cover"
        alt="dog"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}

/*export const metadata: Metadata = {
  title: "....",
};

export async function generateMetadata(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "...",
  };
}*/

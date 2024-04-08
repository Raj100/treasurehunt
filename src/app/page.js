import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to the treasure hunt!</h1>
      <div className="flex flex-col items-center">
        <Image
          src="/treasure.svg"
          alt="Treasure chest"
          width={200}
          height={200}
        />
        <p className="text-xl mt-4">
          Can you find the hidden treasure?
          be careful, there are dragons lurking around!
          and they are hungry!
        </p>
      </div>
    </main>
  );
}

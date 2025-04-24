import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-fuchsia-300">
      <div>
        <h1>Hi Next js</h1>
        <Link href="/team">
          click me to go to team
        </Link>
      </div>
    </div>
  );
}

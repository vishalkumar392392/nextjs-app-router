import { Hello } from "../components/hello";

export default function Home() {
  console.log("What iam doing here!...");
  return (
    <>
      <div className="text-3xl">Welcome to Next.js</div>
      <Hello />
    </>
  );
}

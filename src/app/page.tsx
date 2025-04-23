import FirstClientComponent from "./FirstClientComponent";
import FirstServerComponent from "./FirstServerComponent";


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-fuchsia-700">
      <div>
        <FirstServerComponent />
        <FirstClientComponent />
      </div>
    </div>
  );
}

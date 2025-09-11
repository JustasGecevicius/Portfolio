import { Suspense } from "react";
import ThreeD from "./3D";

export default function TechStack() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col items-center justify-start w-screen p-5 h-fit">
        <h2 className="text-3xl font-bold max-w-prose">Tech</h2>
        <ThreeD />
      </div>
    </Suspense>
  );
}

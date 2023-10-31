"use client";
import React, { lazy, Suspense } from "react";
// import {} from "../_micro/index";

const helloPath = "../_micro/dist/index.js";

const DynamicHello = lazy(() => import(helloPath));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<div>Loadin</div>}>
        <DynamicHello />
      </Suspense>
    </main>
  );
}

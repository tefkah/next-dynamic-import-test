"use client";

import { lazy, Suspense, use } from "react";

async function load(name: string) {
  return lazy(() => import(`../../_micro/dist/${name}.js`));
}

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);

  const path =
    Array.isArray(params.slug) && params.slug.length > 1
      ? params.slug[1]
      : "hello";

  const arg =
    Array.isArray(params.slug) && params.slug.length > 1
      ? params.slug[0]
      : params.slug;

  const Component = use(load(path));

  return (
    <main className="bg-black text-white flex w-full h-screen items-center justify-center">
      <p>
        <Suspense fallback={<p>loadin</p>}>
          <Component name={arg} />
        </Suspense>
      </p>
    </main>
  );
}

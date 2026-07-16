"use client";

import { useEffect, useRef } from "react";

export default function TrustindexWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://cdn.trustindex.io/loader.js?58dc85276d45855e7c264ecf51b";
    script.async = true;
    script.defer = true;

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={widgetRef} className="min-h-[500px] w-full" />;
}
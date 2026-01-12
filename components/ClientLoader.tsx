"use client";

import { useEffect, useState } from "react";
import PreLoader from "./preloader";

export default function ClientLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // ⏱ 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PreLoader />;

  return <>{children}</>;
}

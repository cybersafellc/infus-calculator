import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/dosis";
  }, []);
  return (
    <>
      <div></div>
    </>
  );
}

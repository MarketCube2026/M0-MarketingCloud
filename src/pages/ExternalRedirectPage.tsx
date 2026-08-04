import { useEffect } from "react";

interface ExternalRedirectPageProps {
  to: string;
}

export default function ExternalRedirectPage({ to }: ExternalRedirectPageProps) {
  useEffect(() => {
    window.location.assign(to);
  }, [to]);

  return (
    <div className="flex h-full items-center justify-center text-[13px] text-slate-400">
      正在跳转至外部看板...
    </div>
  );
}

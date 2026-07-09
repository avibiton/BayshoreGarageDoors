import { BUSINESS } from "@/lib/config";
import Link from "next/link";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex">
      <a
        href={`tel:${BUSINESS.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-2 bg-[#e8390e] text-white font-bold py-4 text-base"
      >
        📞 Call Now — {BUSINESS.phone}
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center bg-[#0f1f3d] text-white font-bold px-4 py-4 text-sm border-l border-white/20"
      >
        Request<br />Service
      </Link>
    </div>
  );
}

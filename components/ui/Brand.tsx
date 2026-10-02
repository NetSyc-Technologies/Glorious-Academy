import Image from "next/image";
import Link from "next/link";

export function Brand({ light = false }: { light?: boolean }) {
  return <Link href="/" className={`academy-brand ${light ? "academy-brand-light" : ""}`} aria-label="Glorious Academy home">
    <Image src="/images/galogo.png" width={76} height={46} alt="" className="academy-logo" />
    <span><strong>GLORIOUS<span>ACADEMY</span></strong><small>CLEAR LEARNING. CONFIDENT FUTURES.</small></span>
  </Link>;
}

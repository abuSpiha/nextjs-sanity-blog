import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <Link href={"/"} className="text-3xl font-bold">
        abuSpiha<span className="text-blue-500">Blog</span>
      </Link>
      <ModeToggle />
    </nav>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "500", "300", "400", "700", "900"],
  subsets: ["latin"],
});

const listItemStyle =
  "flex w-16 mx-1 px-2 py-1 rounded-md items-center justify-center transition-colors duration-500 bg-transparent hover:text-brandRed hover:bg-brandWhite";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center position:fixed shadow-lg bg-brandRed px-2 mb-5 h-14">
      <div>
        <Image
          src="/assets/logo/roofus_logo_white.png"
          alt="logo"
          width={56}
          height={56}
        />
      </div>
      <ul
        className={`${roboto} flex text-brandWhite text-sm h-full items-center`}
      >
        <li className={listItemStyle}>
          <Link href="/">Home</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="/pets-for-adoption">Adopt</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="/about">About</Link>
        </li>
        <li className={listItemStyle}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

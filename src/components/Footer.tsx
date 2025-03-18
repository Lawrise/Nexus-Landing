import Link from "next/link";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from "react-icons/pi";
import { Button } from "./ui/button";

const Footer: React.FC = () => {
  const classNameIcon = "rounded-md p-1 hover:bg-neutral-200";
  const classNameLink = "text-neutral-800 hover:underline";
  return (
    <footer className="w-full border-t border-neutral-200 grid grid-cols-1 md:grid-cols-27 justify-center items-start gap-4 pt-20 pb-24 px-8 sm:px-12 md:px-16 xl:px-[8%] 2xl:px-[15%]">
      <div className="col-span-7 space-y-4">
        <Link href="/" className="flex gap-2 items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="30"
            zoomAndPan="magnify"
            viewBox="0 0 150 149.999998"
            height="30"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
          >
            <defs>
              <g />
              <clipPath id="d550435fb2">
                <path
                  d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                  clipRule="nonzero"
                />
              </clipPath>
              <clipPath id="08eddb29a2">
                <path
                  d="M 8.816406 2.066406 L 141.183594 2.066406 C 144.914062 2.066406 147.933594 5.085938 147.933594 8.816406 L 147.933594 141.183594 C 147.933594 144.914062 144.914062 147.933594 141.183594 147.933594 L 8.816406 147.933594 C 5.085938 147.933594 2.066406 144.914062 2.066406 141.183594 L 2.066406 8.816406 C 2.066406 5.085938 5.085938 2.066406 8.816406 2.066406 Z M 8.816406 2.066406 "
                  clipRule="nonzero"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#d550435fb2)">
              <g clipPath="url(#08eddb29a2)">
                <path
                  fill="#000000"
                  d="M 2.066406 2.066406 L 147.933594 2.066406 L 147.933594 147.933594 L 2.066406 147.933594 Z M 2.066406 2.066406 "
                  fillOpacity="1"
                  fillRule="nonzero"
                />
              </g>
            </g>
            <g fill="#ffffff" fillOpacity="1">
              <g transform="translate(20.643752, 101.999996)">
                <g>
                  <path d="M 56.140625 -53.390625 L 56.140625 0 L 43.703125 0 L 20.140625 -28.453125 L 20.140625 0 L 5.34375 0 L 5.34375 -53.390625 L 17.78125 -53.390625 L 41.34375 -24.9375 L 41.34375 -53.390625 Z M 56.140625 -53.390625 " />
                </g>
              </g>
            </g>
            <g fill="#ffffff" fillOpacity="1">
              <g transform="translate(82.123309, 101.999996)">
                <g>
                  <path d="M 30.890625 0 L 23.5 -10.828125 L 15.5625 0 L -0.15625 0 L 15.5625 -20.671875 L 0.3125 -41.34375 L 16.625 -41.34375 L 23.953125 -30.890625 L 31.578125 -41.34375 L 46.90625 -41.34375 L 31.65625 -21.203125 L 47.453125 0 Z M 30.890625 0 " />
                </g>
              </g>
            </g>
          </svg>
          <p className="text-2xl font-bold">Nexus</p>
        </Link>
        {/* Social media */}
        <ul className="flex gap-4 justify-start items-center">
          <li className={classNameIcon}>
            <PiFacebookLogo className="text-2xl" />
          </li>
          <li className={classNameIcon}>
            <PiTwitterLogo className="text-2xl" />
          </li>
          <li className={classNameIcon}>
            <PiInstagramLogo className="text-2xl" />
          </li>
          <li className={classNameIcon}>
            <PiLinkedinLogo className="text-2xl" />
          </li>
        </ul>
        <p>© 2025 Nexus.</p>
      </div>
      <div className="col-span-5 space-y-4">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/about" className={classNameLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className={classNameLink}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog" className={classNameLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/careers" className={classNameLink}>
              Careers
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-5 space-y-4">
        <h3 className="text-xl font-semibold">Support</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/help-center" className={classNameLink}>
              Help Center
            </Link>
          </li>
          <li>
            <Link href="/faqs" className={classNameLink}>
              FAQs
            </Link>
          </li>
          <li>
            <Link href="/contact-support" className={classNameLink}>
              Contact Support
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-5 space-y-4">
        <h3 className="text-xl font-semibold">Legal</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/privacy-policy" className={classNameLink}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms-of-service" className={classNameLink}>
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy" className={classNameLink}>
              Cookie Policy
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-5 space-y-4">
        <h3 className="text-xl font-semibold">Newsletter</h3>
        <form action="/subscribe" method="post" className="space-y-2">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            className="w-full p-2 border border-neutral-300 rounded-md"
          />
          <Button type="submit" variant="cta" className="w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
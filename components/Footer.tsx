import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import InstagramPosts from "./Instagram";

export default function Footer() {
    return (
        <footer className="p-5 text-center bg-gray-200">
            <h1 className="text-3xl font-bold">
                <Link href="/">Jodie Rummer</Link>
            </h1>
            <p className="mb-4">
                Connect with me on&nbsp;
                <Link href="https://www.instagram.com/rummerjodie/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    <FaInstagram />
                    Instagram
                </Link>
                !
            </p>
            <InstagramPosts />
        </footer>
    );
};


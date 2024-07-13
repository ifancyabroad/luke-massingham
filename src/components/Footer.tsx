import Image from "next/image";
import logo from "../../public/logo_dark.svg";
import instagram from "../../public/instagram_dark.svg";

export default function Footer() {
	return (
		<footer className="bg-[#e8e8e8] py-20 text-center text-sm tracking-widest">
			<div className="container mx-auto px-4 md:px-16">
                <div className="flex flex-col items-center">
                    <p className="mb-8">LET&apos;S CHAT</p>
                    <Image className="mb-8" src={logo} alt="logo" />
                    <a className="mb-2" href="mailto:studio@lukemassinghamarchitect.com.au">STUDIO@LUKEMASSINGHAMARCHITECT.COM.AU</a>
                    <a className="mb-5" href="tel:+61429423885">+61 429 423 885</a>

                    <p>BRISBANE, AUSTRALIA</p>
                    <p className="mb-4">MEANJIN, TRADITIONAL LANDS OF THE TURRBAL AND JAGERA PEOPLE</p>
                    <a href="https://www.instagram.com/lukemassinghamarchitect/" target="_blank">
                        <Image src={instagram} alt="instagram" />
                    </a>
                </div>
			</div>
		</footer>
	);
}
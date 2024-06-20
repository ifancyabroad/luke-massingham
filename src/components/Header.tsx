import Image from "next/image";
import logo from "../../public/logo.svg";
import instagram from "../../public/instagram.svg";

export default function Header() {
	return (
		<header className="min-h-screen bg-[#e8e8e8] bg-hero bg-cover bg-center py-4 md:py-16">
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black to-transparent opacity-50" />
			<div className="relative container mx-auto p-4 md:px-16 z-[1]">
				<div className="flex gap-4 justify-between">
					<Image src={logo} alt="logo" className="max-w-[50%]" />

                    <a href="#" target="_blank" className="flex items-center gap-2 md:gap-6">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-white link-underline">LET&apos;S TALK</span>
                        <Image src={instagram} alt="instagram" />
                    </a>
				</div>
			</div>
		</header>
	);
}
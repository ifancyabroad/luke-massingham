import Image from "next/image";
import logo from "../../public/logo.svg";
import instagram from "../../public/instagram.svg";

export default function Header() {
	return (
		<header className="min-h-screen bg-slate-400 py-4 md:py-16">
			<div className="container mx-auto p-4 md:px-16">
				<div className="flex gap-4 justify-between">
					<Image src={logo} alt="logo" className="max-w-[50%]" />

                    <a href="#" target="_blank" className="flex items-center gap-6">
                        <span className="text-xs md:text-sm font-semibold tracking-widest text-white link-underline">LET&apos;S TALK</span>
                        <Image src={instagram} alt="instagram" />
                    </a>
				</div>
			</div>
		</header>
	);
}
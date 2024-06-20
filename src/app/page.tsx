import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
	

	return (
		<main className="min-h-screen bg-drawing bg-[right_45%] bg-no-repeat">
			<Header />

			<section>
				<div className="container mx-auto relative z-[1]">
					<div className="absolute h-[64px] top-0 left-0 bg-[#f9f9f9] hidden md:block w-9/12 rounded-t-lg" />
					<div className="px-4 py-8 md:p-16 md:-mt-16 md:w-9/12">
						<h1 className="text-2xl md:text-4xl mb-6">
							We are a design led Architecture practice based in Brisbane undertaking a broad range of quality residential projects.  Our work is driven by the principles of deep listening, understanding place, and landscape.
						</h1>
						<p className="text-xl font-light mb-6">
							We believe that good design stems from a deep understanding of place and of our clients values. Our approach begins with an innovative briefing process and interrogation of the site’s opportunities and history. Our buildings respond to the climate we live in, offering a close connection to the natural world around us. We value a close connection to the process of making and foster close relationships with trades people and builders.
						</p>
						<p className="text-xl">
							Contact me here <a href="mailto:luke@lmaarchitects.com.au" className="underline font-medium">luke@lmaarchitects.com.au</a>
						</p>
					</div>
				</div>
			</section>

			<section className="py-8">
				<div className="container px-4 md:px-16 mx-auto">
					<h2 className="text-sm font-bold tracking-widest mb-4">PROJECTS</h2>
					<Projects />
				</div>
			</section>

			<Footer />
		</main>
	);
}

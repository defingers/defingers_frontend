import { useNavigate } from "react-router-dom";

const SecondCta = () => {
	const navigate = useNavigate();

	return (
		<section className="bg-[#fcf3e7] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
			<div className="mx-auto max-w-7xl">
				<div className="relative overflow-hidden rounded-[2rem] border border-[#ff9f1a] bg-white px-6 py-12 shadow-[0_12px_28px_rgba(255,159,26,0.08)] sm:px-10 sm:py-14 lg:px-16 lg:py-16">
					<div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(255,159,15,0.4),rgba(255,159,15,0.08)_55%,rgba(255,159,15,0)_75%)]" />

					<div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
						<div className="max-w-2xl text-left">
							<h2 className="font-montserrat text-3xl font-bold leading-tight tracking-tight text-black sm:text-4xl lg:text-3xl">
								Ready to harden your defenses?
							</h2>
							<p className="mt-3 max-w-xl font-montserrat text-lg text-black/80 sm:text-sm lg:text-lg">
								Talk to a Sentinel security architect. We'll walk through your
								environment, threat model, and the fastest path to 24×7
								protection.
							</p>
						</div>

						<div className="lg:shrink-0">
							<button
								type="button"
								onClick={() => navigate("/contact")}
								className="rounded-full bg-[#ff9a15] px-8 py-4 font-outfit text-lg font-bold text-white shadow-[0_12px_24px_rgba(255,154,21,0.25)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f28d00] sm:px-10 sm:py-5 sm:text-xl"
							>
								Book a Consultation
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondCta;

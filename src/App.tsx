import {
	Activity,
	ChevronRight,
	MapPin,
	Shield,
	Sparkles,
	Stethoscope,
} from "lucide-react";
import { docseekAppHomeHref } from "./appUrl";
import { DocSeekAppPreviewClip } from "./DocSeekAppPreviewClip";
import { QuickDemoSection } from "./QuickDemoSection";

const trustAvatars = ["UP", "DS", "PC", "MD", "++"] as const;

const partnerLabels = [
	"Academic medicine",
	"Community hospitals",
	"Outpatient network",
	"Telehealth access",
	"Research institutes",
	"Primary care hubs",
] as const;

export function App() {
	const appHome = docseekAppHomeHref();

	return (
		<div className="relative isolate min-h-screen">
			<div className="doc-grid-bg-layer" aria-hidden />
			<div className="relative z-10 flex flex-col">
				<header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#050816]/95">
					<div className="mx-auto flex max-w-6xl items-center px-4 py-3 sm:px-6">
						<a
							href="#top"
							className="focus-ring flex items-center gap-2 rounded-lg text-lg font-semibold tracking-tight text-white"
						>
							<span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-teal-400/30 to-violet-500/25 ring-1 ring-teal-400/30">
								<Stethoscope className="h-4 w-4 text-teal-300" aria-hidden />
							</span>
							DocSeek
						</a>
					</div>
				</header>

				<main id="top">
					<section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 sm:pt-14">
						<div className="mx-auto mb-10 max-w-3xl text-center">
							<div className="mb-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
								<div className="flex -space-x-2" aria-hidden="true">
									{trustAvatars.map((label, i) => (
										<span
											key={label}
											className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#050816] bg-linear-to-br from-slate-600 to-slate-800 text-[10px] font-semibold text-white/90"
											style={{ zIndex: trustAvatars.length - i }}
										>
											{label}
										</span>
									))}
								</div>
								<div className="text-left sm:text-center">
									<p className="text-sm font-medium text-white/90">
										Built for people navigating UPMC care
									</p>
									<p className="mt-1 text-xs text-doc-muted">
										Excellent search experience — discover physicians by
										specialty, location, and availability signals.
									</p>
								</div>
							</div>

							<h1 className="font-semibold text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
								Find the right{" "}
								<span className="bg-linear-to-r from-teal-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
									UPMC physician
								</span>{" "}
								faster — with clarity, not clutter.
							</h1>
							<p className="mx-auto mt-6 max-w-2xl text-lg text-doc-muted sm:text-xl">
								DocSeek connects what you describe to doctors who match — so you
								can compare specialties, locations, and next steps with
								confidence.
							</p>

							<div className="mt-10 flex justify-center">
								<a
									href={appHome}
									data-testid="cta-primary"
									className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-violet-500 to-teal-400 px-8 py-3.5 text-base font-semibold text-white shadow-[0_0_32px_-6px_rgba(139,92,246,0.6)] transition hover:brightness-110 sm:w-auto"
								>
									Start physician search
									<Sparkles className="h-4 w-4 opacity-90" aria-hidden />
								</a>
							</div>
						</div>

						<div className="mx-auto mb-16 max-w-6xl overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-5 sm:px-8">
							<p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-doc-muted">
								Coverage you can explore
							</p>
							<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
								{partnerLabels.map((label) => (
									<span
										key={label}
										className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/50"
									>
										{label}
									</span>
								))}
							</div>
						</div>

						<QuickDemoSection />

						<div
							id="how-it-works"
							className="scroll-mt-24 rounded-3xl border border-teal-400/20 bg-linear-to-br from-white/[0.06] to-transparent p-6 sm:p-10"
						>
							<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
								<div>
									<p className="text-xs font-semibold uppercase tracking-widest text-teal-300/90">
										Preview
									</p>
									<h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
										Search by what you&apos;re feeling — DocSeek surfaces strong
										UPMC matches.
									</h2>
									<p className="mt-4 text-doc-muted">
										Open the app to describe symptoms or goals in your own
										words, then refine by location and whether physicians are
										accepting new patients.
									</p>
									<a
										href={appHome}
										className="focus-ring mt-6 inline-flex items-center gap-2 font-semibold text-teal-300 hover:text-teal-200"
									>
										Open DocSeek app
										<ChevronRight className="h-4 w-4" aria-hidden />
									</a>
									<p className="mt-4 text-sm text-doc-muted">
										The clip mirrors your live search screen — raised shadow,
										cyan accents, and the same prompt as in the product.
									</p>
								</div>
								<DocSeekAppPreviewClip appHomeHref={appHome} />
							</div>
						</div>
					</section>

					<section
						id="specialties"
						className="scroll-mt-24 border-t border-white/[0.06] bg-black/20 py-16"
					>
						<div className="mx-auto max-w-6xl px-4 sm:px-6">
							<div className="mx-auto mb-10 max-w-2xl text-center">
								<h2 className="text-3xl font-semibold text-white sm:text-4xl">
									Specialties, geography, and access — in one flow
								</h2>
								<p className="mt-3 text-doc-muted">
									Use DocSeek when you need a specialist, a second opinion, or a
									clearer path across the UPMC ecosystem.
								</p>
							</div>
							<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
								{[
									{
										icon: Stethoscope,
										title: "Symptom-smart routing",
										body: "Describe what is going on; get physician suggestions aligned to likely specialties.",
									},
									{
										icon: MapPin,
										title: "Location-aware context",
										body: "Factor in where you can travel for visits when comparing providers.",
									},
									{
										icon: Activity,
										title: "Availability signals",
										body: "Surface accepting-new-patients cues so you spend less time guessing.",
									},
								].map(({ icon: Icon, title, body }) => (
									<div
										key={title}
										className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6"
									>
										<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-teal-400/15 text-teal-300">
											<Icon className="h-5 w-5" aria-hidden />
										</div>
										<h3 className="text-lg font-semibold text-white">
											{title}
										</h3>
										<p className="mt-2 text-sm text-doc-muted">{body}</p>
									</div>
								))}
							</div>
						</div>
					</section>

					<section id="trust" className="scroll-mt-24 py-16">
						<div className="mx-auto max-w-6xl px-4 sm:px-6">
							<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
								<div>
									<h2 className="text-3xl font-semibold text-white">
										Designed for trust and transparency
									</h2>
									<p className="mt-4 text-doc-muted">
										DocSeek is a discovery layer: it helps you narrow the field
										and compare public profile information. Always confirm
										details with the clinic or insurer before booking.
									</p>
									<ul className="mt-8 space-y-4">
										{[
											"No substitute for emergency care — call local emergency services for urgent symptoms.",
											"References UPMC physician directory data you can verify on official profiles.",
											"Saves you time by ranking relevance to what you typed.",
										].map((item) => (
											<li
												key={item}
												className="flex gap-3 text-sm text-white/85"
											>
												<Shield
													className="mt-0.5 h-4 w-4 shrink-0 text-teal-400"
													aria-hidden
												/>
												{item}
											</li>
										))}
									</ul>
								</div>
								<div className="rounded-2xl border border-violet-400/25 bg-linear-to-br from-violet-500/10 to-teal-500/5 p-8">
									<p className="text-sm font-medium text-white/90">
										Ready when you are
									</p>
									<p className="mt-2 text-doc-muted">
										Jump into the search experience — your next visit starts
										with better directions.
									</p>
									<a
										href={appHome}
										className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white py-3 text-sm font-semibold text-slate-900 transition hover:bg-teal-100 sm:w-auto sm:px-8"
									>
										Go to DocSeek
									</a>
								</div>
							</div>
						</div>
					</section>

					<section
						id="faq"
						className="scroll-mt-24 border-t border-white/[0.06] bg-black/25 py-16"
					>
						<div className="mx-auto max-w-3xl px-4 sm:px-6">
							<h2 className="text-center text-3xl font-semibold text-white">
								FAQ
							</h2>
							<dl className="mt-10 space-y-6">
								{[
									{
										q: "Is DocSeek affiliated with UPMC?",
										a: "DocSeek is an independent tool that helps you explore publicly available UPMC physician information. It does not imply endorsement by UPMC.",
									},
									{
										q: "Does this provide medical advice?",
										a: "No. DocSeek helps you find and compare physicians. For medical decisions, consult a licensed clinician.",
									},
									{
										q: "Where does the search run?",
										a: "Primary actions open the DocSeek web app you configure via VITE_DOCSEEK_APP_URL — typically your production or local client URL.",
									},
								].map(({ q, a }) => (
									<div
										key={q}
										className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-4"
									>
										<dt className="font-semibold text-white">{q}</dt>
										<dd className="mt-2 text-sm text-doc-muted">{a}</dd>
									</div>
								))}
							</dl>
						</div>
					</section>
				</main>

				<footer className="border-t border-white/[0.06] py-10">
					<div className="mx-auto max-w-6xl px-4 text-center text-xs text-doc-muted sm:px-6">
						<p>
							DocSeek is a physician discovery assistant, not emergency care. If
							you are experiencing an emergency, call your local emergency
							number.
						</p>
						<p className="mt-3">
							&copy; {new Date().getFullYear()} DocSeek. UPMC name used
							descriptively to identify the health system directory ecosystem;
							DocSeek is not endorsed by or affiliated with UPMC unless
							separately stated in writing.
						</p>
					</div>
				</footer>
			</div>
		</div>
	);
}

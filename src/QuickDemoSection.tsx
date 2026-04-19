import { useEffect, useRef, useState } from "react";
import {
	captionCuesToWebVtt,
	QUICK_DEMO_CAPTION_CUES,
} from "./quickDemoCaptionCues";
import { quickDemoVideoSrc } from "./quickDemoVideoSrc";

export function QuickDemoSection() {
	const demoSrc = quickDemoVideoSrc();
	const sectionRef = useRef<HTMLElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const [captionBlobUrl, setCaptionBlobUrl] = useState<string | null>(null);

	useEffect(() => {
		if (import.meta.env.VITEST) {
			return;
		}
		const vtt = captionCuesToWebVtt(QUICK_DEMO_CAPTION_CUES);
		const url = URL.createObjectURL(new Blob([vtt], { type: "text/vtt" }));
		setCaptionBlobUrl(url);
		return () => {
			URL.revokeObjectURL(url);
		};
	}, []);

	useEffect(() => {
		if (import.meta.env.VITEST || !captionBlobUrl) {
			return;
		}
		const video = videoRef.current;
		if (!video) return;

		const showCaptions = () => {
			for (let i = 0; i < video.textTracks.length; i++) {
				const track = video.textTracks[i];
				if (track.kind === "captions") {
					track.mode = "showing";
					break;
				}
			}
		};

		video.addEventListener("loadstart", showCaptions);
		video.addEventListener("loadedmetadata", showCaptions);
		return () => {
			video.removeEventListener("loadstart", showCaptions);
			video.removeEventListener("loadedmetadata", showCaptions);
		};
	}, [captionBlobUrl]);

	useEffect(() => {
		if (import.meta.env.VITEST) {
			return;
		}
		const section = sectionRef.current;
		const video = videoRef.current;
		if (!section || !video) return;

		const startLoadingAndPlay = () => {
			if (video.preload === "none") {
				video.preload = "auto";
				try {
					video.load();
				} catch {
					/* jsdom: load() not implemented */
				}
			}
			try {
				const result = video.play();
				if (result !== undefined && typeof result.catch === "function") {
					void result.catch(() => {});
				}
			} catch {
				/* jsdom: play() not implemented */
			}
		};

		if (typeof IntersectionObserver === "undefined") {
			startLoadingAndPlay();
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						startLoadingAndPlay();
					} else {
						video.pause();
					}
				}
			},
			{ threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
		);

		observer.observe(section);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			ref={sectionRef}
			id="quick-demo"
			className="scroll-mt-24 border-y border-white/[0.06] bg-black/30 py-14 sm:py-16"
			aria-labelledby="quick-demo-heading"
		>
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="mx-auto mb-8 max-w-2xl text-center">
					<p className="text-xs font-semibold uppercase tracking-widest text-teal-300/90">
						Quick demo
					</p>
					<h2
						id="quick-demo-heading"
						className="mt-2 text-3xl font-semibold text-white sm:text-4xl"
					>
						See DocSeek in action
					</h2>
					<p className="mt-3 text-sm text-doc-muted">
						Recording autoplays (muted) while this section is on screen —
						English captions follow the narration; use the transcript below or
						the player&apos;s CC control. Best playback for{" "}
						<span className="font-mono">.mov</span> is often Safari.
					</p>
				</div>
				<div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 shadow-[0_24px_60px_-20px_rgba(34,211,238,0.25)] ring-1 ring-white/[0.06]">
					<video
						ref={videoRef}
						className="aspect-video w-full object-cover"
						muted
						loop
						playsInline
						preload="none"
						controls
						aria-label="Screen recording of the DocSeek application"
						aria-describedby="quick-demo-transcript"
					>
						<source
							src={demoSrc}
							type={
								demoSrc.toLowerCase().endsWith(".mp4")
									? "video/mp4"
									: "video/quicktime"
							}
						/>
						{captionBlobUrl ? (
							<track
								kind="captions"
								srcLang="en"
								label="English"
								src={captionBlobUrl}
								default
							/>
						) : null}
						Your browser may not support embedded QuickTime video.{" "}
						<a
							href={demoSrc}
							className="text-teal-300 underline underline-offset-2"
						>
							Download the demo
						</a>
						.
					</video>
				</div>
				<div
					id="quick-demo-transcript"
					className="mx-auto mt-6 max-w-4xl rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 sm:p-6"
				>
					<h3 className="text-sm font-semibold uppercase tracking-widest text-teal-300/90">
						Transcript (audio / narration)
					</h3>
					<p className="mt-2 text-xs text-doc-muted">
						Same text as the on-video captions. Edit timings and lines in{" "}
						<code className="rounded bg-black/40 px-1 py-0.5 font-mono text-[11px] text-teal-200/90">
							src/quickDemoCaptionCues.ts
						</code>{" "}
						to match your recording.
					</p>
					<ol className="mt-4 list-none space-y-4 p-0">
						{QUICK_DEMO_CAPTION_CUES.map((cue) => (
							<li
								key={`${cue.start}-${cue.end}`}
								className="border-l-2 border-teal-400/40 pl-4"
							>
								<p className="font-mono text-[11px] text-white/45">
									{cue.start} → {cue.end}
								</p>
								<p className="mt-1 text-sm leading-relaxed text-white/90">
									{cue.text}
								</p>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
}

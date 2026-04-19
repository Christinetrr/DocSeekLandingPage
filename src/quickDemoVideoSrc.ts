/** Absolute or site-relative URL for the screen-recording demo (GitHub blocks files > 100 MB). */
export function quickDemoVideoSrc(): string {
	const raw = import.meta.env.VITE_QUICK_DEMO_VIDEO_URL;
	if (typeof raw === "string" && raw.trim() !== "") {
		return raw.trim();
	}
	return "/quick_demo.mov";
}

/**
 * Timed captions for `public/quick_demo.mov`.
 * Adjust `start` / `end` to match the recording (WebVTT timecode format).
 */
export type CaptionCue = {
	readonly start: string;
	readonly end: string;
	readonly text: string;
};

export const QUICK_DEMO_CAPTION_CUES: readonly CaptionCue[] = [
	{
		start: "00:00:00.000",
		end: "00:00:04.000",
		text: "Welcome to DocSeek — a guided way to find UPMC physicians from what you describe.",
	},
	{
		start: "00:00:04.000",
		end: "00:00:08.500",
		text: "The home screen asks how we can help you today. You describe symptoms or care goals in everyday language.",
	},
	{
		start: "00:00:08.500",
		end: "00:00:13.000",
		text: "DocSeek does not diagnose. It helps narrow the field so you can compare specialties and locations.",
	},
	{
		start: "00:00:13.000",
		end: "00:00:17.500",
		text: "You can refine by location and whether doctors are accepting new patients when that data is available.",
	},
	{
		start: "00:00:17.500",
		end: "00:00:22.000",
		text: "Results show matched physicians with context so you can choose who to research further or contact.",
	},
	{
		start: "00:00:22.000",
		end: "00:00:27.000",
		text: "Always confirm details on official profiles, with your clinic, or your insurer before booking care.",
	},
	{
		start: "00:00:27.000",
		end: "00:00:32.000",
		text: "For emergencies, use your local emergency number — DocSeek is for discovery, not urgent triage.",
	},
	{
		start: "00:00:32.000",
		end: "00:00:40.000",
		text: "Edit the timings and lines in quickDemoCaptionCues.ts so captions stay in sync with your demo audio.",
	},
] as const;

export function captionCuesToWebVtt(cues: readonly CaptionCue[]): string {
	const lines = ["WEBVTT", ""];
	cues.forEach((cue, index) => {
		lines.push(String(index + 1));
		lines.push(`${cue.start} --> ${cue.end}`);
		lines.push(cue.text);
		lines.push("");
	});
	return lines.join("\n");
}

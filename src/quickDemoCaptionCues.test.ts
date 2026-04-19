import { describe, expect, test } from "vitest";
import {
	captionCuesToWebVtt,
	QUICK_DEMO_CAPTION_CUES,
} from "./quickDemoCaptionCues";

describe("captionCuesToWebVtt", () => {
	test("outputs valid WEBVTT header and cue blocks", () => {
		const vtt = captionCuesToWebVtt(QUICK_DEMO_CAPTION_CUES);
		expect(vtt.startsWith("WEBVTT\n")).toBe(true);
		expect(vtt).toContain("00:00:00.000 --> 00:00:04.000");
		expect(vtt).toContain("Welcome to DocSeek");
	});
});

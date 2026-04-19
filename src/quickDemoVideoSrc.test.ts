import { afterEach, describe, expect, test, vi } from "vitest";
import { quickDemoVideoSrc } from "./quickDemoVideoSrc";

afterEach(() => {
	vi.unstubAllEnvs();
});

describe("quickDemoVideoSrc", () => {
	test("uses VITE_QUICK_DEMO_VIDEO_URL when set", () => {
		vi.stubEnv("VITE_QUICK_DEMO_VIDEO_URL", "https://cdn.example.com/demo.mov");
		expect(quickDemoVideoSrc()).toBe("https://cdn.example.com/demo.mov");
	});

	test("trims whitespace from env URL", () => {
		vi.stubEnv("VITE_QUICK_DEMO_VIDEO_URL", "  https://x.test/a.mov  ");
		expect(quickDemoVideoSrc()).toBe("https://x.test/a.mov");
	});

	test("falls back to local public path when unset", () => {
		expect(quickDemoVideoSrc()).toBe("/quick_demo.mov");
	});
});

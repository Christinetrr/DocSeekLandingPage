// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";
import { App } from "./App";

afterEach(() => {
	cleanup();
	vi.unstubAllEnvs();
});

describe("App", () => {
	test("renders brand in header banner", () => {
		render(<App />);
		const banner = screen.getByRole("banner");
		expect(banner.textContent).toContain("DocSeek");
	});

	test("hero headline includes UPMC physician messaging", () => {
		render(<App />);
		expect(
			screen.getByRole("heading", {
				level: 1,
				name: /UPMC physician/i,
			}),
		).toBeTruthy();
	});

	test("quick demo section is present with demo video", () => {
		render(<App />);
		expect(
			screen.getByRole("heading", { name: /See DocSeek in action/i }),
		).toBeTruthy();
		expect(
			screen.getByLabelText(/Screen recording of the DocSeek application/i),
		).toBeTruthy();
	});

	test("quick demo includes transcript for captions", () => {
		render(<App />);
		expect(screen.getByText(/Transcript \(audio/i)).toBeTruthy();
		expect(screen.getByText(/Welcome to DocSeek/i)).toBeTruthy();
	});

	test("primary CTA links to VITE_DOCSEEK_APP_URL with trailing slash", () => {
		vi.stubEnv("VITE_DOCSEEK_APP_URL", "https://app.example.com");
		render(<App />);
		const cta = screen.getByTestId("cta-primary");
		expect(cta.getAttribute("href")).toBe("https://app.example.com/");
	});

	test("app preview clip matches client hero copy and links to app URL", () => {
		vi.stubEnv("VITE_DOCSEEK_APP_URL", "https://app.example.com");
		render(<App />);
		expect(
			screen.getByRole("heading", {
				name: /How can we help you today\?/i,
			}),
		).toBeTruthy();
		const clip = screen.getByTestId("app-preview-clip");
		expect(clip.getAttribute("href")).toBe("https://app.example.com/");
	});
});

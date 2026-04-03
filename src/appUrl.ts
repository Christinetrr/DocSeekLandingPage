/** Resolves the DocSeek app origin for CTAs (trimmed, no trailing slash). */
export function docseekAppOrigin(): string {
	const raw = import.meta.env.VITE_DOCSEEK_APP_URL;
	if (raw === undefined || raw === "") {
		return "http://localhost:5173";
	}
	return raw.replace(/\/$/, "");
}

export function docseekAppHomeHref(): string {
	return `${docseekAppOrigin()}/`;
}

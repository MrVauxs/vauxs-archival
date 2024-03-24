import "./vauxs-archive.postcss";
import { dev } from "$lib/utils.js";

import { registerSettings } from "$lib/settings.js";
import ArchiveApplication from "./view/ArchiveApplication.js";
import { VArchChatLogHook } from "./view/ChatLog.js";

if (dev) Hooks.once("ready", () => new ArchiveApplication().render(true, { focus: true }));

Hooks.once("ready", () => {
	registerSettings();
	VArchChatLogHook();
	if (game.modules.get("df-chat-enhance")?.active) {
		ui.notifications.warn(
			"DF Chat Enhancements is outdated and not compatible with Vauxs' Archives, causing issues when browsing archives. Please disable DF Chat Enhancements.",
			{ permanent: true }
		);
	}
});


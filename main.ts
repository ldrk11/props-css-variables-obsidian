import { MarkdownView, Plugin as ObsidianPlugin, Editor, TFile } from 'obsidian';

function updateCSS(file: TFile){
	if (file.extension !== "md") return
	const props = this.app.metadataCache.getFileCache(file)?.frontmatter
	if (!props) return
	let cssVars = ""
	for (const key in props){
		const value = props[key]
		cssVars = cssVars + `--prop-${key}: ${value}; `
		cssVars = cssVars + `--prop-${key}-string: "${value}"; `
	}
	let editorElement = this.app.workspace.getActiveViewOfType(MarkdownView)?.containerEl
	if (editorElement) editorElement.setAttribute("style", cssVars)
}

export default class Plugin extends ObsidianPlugin {
	async onload() {
		this.registerEvent(this.app.metadataCache.on("changed", updateCSS))
		this.registerEvent(this.app.workspace.on("file-open", updateCSS))
	}
}
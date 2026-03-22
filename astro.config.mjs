// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Agentic Coding Guide',
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'AGENTS.md', slug: 'guides/agents-md' },
						{ label: 'SKILL.md', slug: 'guides/skills-md' },
						{ label: 'MCP', slug: 'guides/mcp' },
						{ label: 'Tools', slug: 'guides/tools' },
						{ label: 'Subagents', slug: 'guides/subagents' },
						{ label: 'Repo Context', slug: 'guides/repo-context' },
						{ label: 'Verification Hooks', slug: 'guides/verification-hooks' },
						{ label: 'Checklists', slug: 'guides/checklists' },
						{ label: 'Commit vs Local', slug: 'guides/commit-vs-local' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Templates', slug: 'reference/templates' },
						{ label: 'Tool Mapping', slug: 'reference/tool-mapping' },
					],
				},
			],
		}),
	],
});

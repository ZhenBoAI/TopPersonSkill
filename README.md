[English](./README.md) | [简体中文](./README.zh-CN.md)

# TopPerson

`TopPerson` is an open-source repository of person-based skills for AI.

It is not a quote collection or a fandom project. It turns biographies, primary works, and credible research into structured skills that AI can use.

The core question is:

`If we handled a real problem in this person's style, how would we judge, decide, and act?`

## Why This Repository

Online content about notable people is often compressed into:

- motivational snippets
- decontextualized “secrets”
- exaggerated personal branding

`TopPerson` does the opposite:

- go back to sources
- extract reusable methods
- define boundaries
- turn them into actionable skills

## Core Principles

- `Source-first`
  Prefer primary materials, use secondary research as support, and downgrade viral quote culture.
- `Method-first`
  Do not stop at biography. Extract reusable judgment frameworks.
- `Modern translation`
  Historical methods must be translated into modern, lawful, non-harmful contexts.
- `Consistent structure`
  Keep skills structured so they can be invoked reliably by AI.

## Current Skills

| Skill | Person | What it does |
| --- | --- | --- |
| `zeng-guofan` | Zeng Guofan | Analyze real-world problems through Zeng Guofan's discipline, leadership, and judgment framework |

Skill files:

- [`zeng-guofan/SKILL.md`](./.agents/skills/zeng-guofan/SKILL.md)
- [`zeng-guofan/references/source-map.md`](./.agents/skills/zeng-guofan/references/source-map.md)
- [`zeng-guofan/references/principles.md`](./.agents/skills/zeng-guofan/references/principles.md)
- Optional guide: [`zeng-guofan/references/overview.en.md`](./.agents/skills/zeng-guofan/references/overview.en.md)
- Optional guide: [`zeng-guofan/references/overview.zh-CN.md`](./.agents/skills/zeng-guofan/references/overview.zh-CN.md)

## Quick Start

### 1. Browse Skills

Browse [`.agents/skills`](./.agents/skills) to see available person skills.

### 2. Use a Skill

In a skill-enabled environment, invoke a skill like this:

```text
Use $zeng-guofan to analyze this situation in 曾国藩式做事风格，并给出可执行建议。
```

### 3. Read a Skill Guide

Skill guides are optional and can live inside each skill directory.

Recommended naming:

- `references/overview.en.md`
- `references/overview.zh-CN.md`

### 4. Validate Locally

Run this before opening a PR:

```bash
python3 scripts/validate_skills.py
```

### 5. Start From the Template

When adding a new person skill, start from:

- [`templates/person-skill/SKILL.md`](./templates/person-skill/SKILL.md)
- [`templates/person-skill/references/source-map.md`](./templates/person-skill/references/source-map.md)
- [`templates/person-skill/references/principles.md`](./templates/person-skill/references/principles.md)
- Optional guide: [`templates/person-skill/references/overview.en.md`](./templates/person-skill/references/overview.en.md)
- Optional guide: [`templates/person-skill/references/overview.zh-CN.md`](./templates/person-skill/references/overview.zh-CN.md)
- [`templates/person-skill/agents/openai.yaml`](./templates/person-skill/agents/openai.yaml)

## Contributing

Contributions are welcome for historical figures, founders, investors, scholars, managers, and outstanding practitioners in specific domains.

Please do not turn this repository into:

- a quote dump
- hero worship
- unsourced self-help
- manipulative, harmful, or pseudoscientific guidance

Before contributing, read:

- English: [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- Chinese: [`CONTRIBUTING.zh-CN.md`](./CONTRIBUTING.zh-CN.md)
- English checklist: [`docs/review-checklist.md`](./docs/review-checklist.md)
- Chinese checklist: [`docs/review-checklist.zh-CN.md`](./docs/review-checklist.zh-CN.md)
- English PR template: [`.github/PULL_REQUEST_TEMPLATE.md`](./.github/PULL_REQUEST_TEMPLATE.md)
- Chinese PR template: [`.github/PULL_REQUEST_TEMPLATE.zh-CN.md`](./.github/PULL_REQUEST_TEMPLATE.zh-CN.md)

## Repository Structure

```text
.agents/skills/
  <skill-name>/
    SKILL.md
    agents/openai.yaml
    references/
      source-map.md
      principles.md
      overview.en.md        # optional
      overview.zh-CN.md     # optional

docs/
  review-checklist.md
  review-checklist.zh-CN.md

scripts/
  validate_skills.py

templates/
  person-skill/
    SKILL.md
    agents/openai.yaml
    references/
      source-map.md
      principles.md
      overview.en.md        # optional
      overview.zh-CN.md     # optional
```

## Validation

The repository includes a local validation script and a GitHub Action.

- local: `python3 scripts/validate_skills.py`
- CI: `.github/workflows/validate-skills.yml`

It checks:

- skill directory naming
- `SKILL.md` frontmatter
- required files
- key `openai.yaml` fields

Optional overview files are not required.

## License

This repository is released under the [`MIT License`](./LICENSE).

This means:

- code, scripts, and repository structure can be reused freely
- only contribute content you have the right to submit
- do not copy long copyrighted source texts into the repository

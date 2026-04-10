# Review Checklist

[English](./review-checklist.md) | [简体中文](./review-checklist.zh-CN.md)

This checklist is for maintainers reviewing submissions and for contributors self-checking before a PR.

## A. Source Review

- Are primary, secondary, and low-confidence sources clearly separated?
- Are core principles grounded mainly in high-confidence sources?
- Are there unsourced “everyone says this” statements?
- Are disputed texts treated with reduced confidence?
- Does the submission avoid turning fiction, self-help, or marketing copy into core evidence?

## B. Method Review

- Does the skill extract a method rather than merely present a biography?
- Can it answer real-world problems instead of just retelling life events?
- Does it present a stable judgment framework?
- Does it give actions instead of only attitudes?
- Does it explain where the method fits and where it does not?

## C. Modern Translation Review

- Is the historical context translated into modern lawful settings?
- Does the skill avoid promoting violence, manipulation, discrimination, humiliation, or oppression?
- Does it clearly reject pseudoscience and harmful practices?
- Does it avoid packaging a person’s flaws as clever tactics?

## D. Structure Review

- Does the directory structure match repository conventions?
- Is `SKILL.md` frontmatter complete?
- Does `agents/openai.yaml` exist with the required fields?
- Does `references/source-map.md` explain source hierarchy clearly?
- Does `references/principles.md` perform real synthesis?
- If overview files exist, are they clear and consistent?
- Does the skill provide an output format and example triggers?

## E. Usability Review

- Can the skill be used immediately to answer real questions?
- Is the output structure stable and understandable?
- Is the language clear rather than performative?
- Does it avoid excessive roleplay or fake archaic prose?
- Is it concise enough not to become an encyclopedia?

## F. Hard Rejection Signals

If any of the following appear, the submission should usually be rejected or sent back for revision:

- Fake sources or fake quotations are treated as core evidence
- The skill encourages unlawful, harmful, deceptive, or manipulative conduct
- It relies heavily on physiognomy, mysticism, essentialism, or fatalism
- The submission is really just a profile, not an invokable skill
- The structure is incomplete and cannot be used reliably

[English](./README.md) | [简体中文](./README.zh-CN.md)

# TopPerson

`TopPerson` is an open-source repository of person-based AI skills.

It helps AI answer a practical question:

`How would a top person judge, decide, and act in this situation?`

## Contents

- [What It Does](#what-it-does)
- [Main Use Cases](#main-use-cases)
- [Current Skills](#current-skills)
- [Distillation Dataset](#distillation-dataset)
- [Distillation Roadmap](#distillation-roadmap)
- [How To Use](#how-to-use)
- [How To Propose A New Skill](#how-to-propose-a-new-skill)
- [Contribution Rules](#contribution-rules)
- [Validation](#validation)
- [License](#license)

## What It Does

TopPerson turns biographies, primary works, letters, speeches, interviews, and credible research into reusable skills.

This repository is for:

- practical judgment
- action planning
- modern translation of historical or modern methods

This repository is not for:

- quote collections
- fandom
- empty motivation
- harmful or manipulative guidance

## Main Use Cases

You can use TopPerson skills to think through:

- `Life`: self-discipline, habits, emotional stability, long-term direction
- `Study`: learning methods, focus, explanation, practice, curiosity
- `Work`: execution, management, communication, product judgment, decision-making
- `Life guidance`: major choices, setbacks, transitions, values, how to act next

## Current Skills

Current repository status: `45` skill directories in [`.agents/skills`](./.agents/skills).

### Reference Skill

- [`zengguofan-skill`](./.agents/skills/zengguofan-skill/SKILL.md): Qing statesman and military leader known for self-discipline, team building, and long-horizon order.

### Other Available Skills

- [`andygrove-skill`](./.agents/skills/andygrove-skill/SKILL.md): Former Intel CEO known for paranoid management and execution systems.
- [`benjaminfranklin-skill`](./.agents/skills/benjaminfranklin-skill/SKILL.md): Statesman, inventor, and writer known for habits, self-improvement, and pragmatism.
- [`caocao-skill`](./.agents/skills/caocao-skill/SKILL.md): Three Kingdoms statesman, warlord, and poet known for strategy and talent use.
- [`caodewang-skill`](./.agents/skills/caodewang-skill/SKILL.md): Founder of Fuyao Glass known for industrial discipline, cost awareness, and pragmatic execution.
- [`charliemunger-skill`](./.agents/skills/charliemunger-skill/SKILL.md): Investor and Buffett's longtime partner known for mental models and avoiding stupidity.
- [`duanyongping-skill`](./.agents/skills/duanyongping-skill/SKILL.md): Chinese entrepreneur and investor known for long-termism, selective focus, and business judgment.
- [`elonmusk-skill`](./.agents/skills/elonmusk-skill/SKILL.md): Entrepreneur known for first-principles thinking, technical boldness, and hard trade-offs.
- [`harukimurakami-skill`](./.agents/skills/harukimurakami-skill/SKILL.md): Japanese novelist known for routine, endurance, and long solitary creative work.
- [`hayaomiyazaki-skill`](./.agents/skills/hayaomiyazaki-skill/SKILL.md): Japanese animator and director known for craft discipline and creative standards.
- [`jackma-skill`](./.agents/skills/jackma-skill/SKILL.md): Entrepreneur and communicator known for market education and organizational energy.
- [`jeffbezos-skill`](./.agents/skills/jeffbezos-skill/SKILL.md): Amazon founder known for customer obsession, flywheel thinking, and long-term building.
- [`jensenhuang-skill`](./.agents/skills/jensenhuang-skill/SKILL.md): NVIDIA founder known for long-term R&D, technical strategy, and founder leadership.
- [`kazuoinamori-skill`](./.agents/skills/kazuoinamori-skill/SKILL.md): Kyocera founder known for management discipline, altruism, and long-term organization building.
- [`kobebryant-skill`](./.agents/skills/kobebryant-skill/SKILL.md): Basketball icon known for discipline, deliberate practice, and competitive standards.
- [`konosukematsushita-skill`](./.agents/skills/konosukematsushita-skill/SKILL.md): Panasonic founder known for management philosophy, people development, and enterprise building.
- [`leekuanyew-skill`](./.agents/skills/leekuanyew-skill/SKILL.md): Founding Prime Minister of Singapore known for institutional design and pragmatic trade-offs.
- [`leijun-skill`](./.agents/skills/leijun-skill/SKILL.md): Entrepreneur and product-minded founder known for product judgment, efficiency, and sincere communication.
- [`luoxiang-skill`](./.agents/skills/luoxiang-skill/SKILL.md): Law professor and public educator known for principled reasoning and clear explanation.
- [`marcusaurelius-skill`](./.agents/skills/marcusaurelius-skill/SKILL.md): Roman emperor and Stoic thinker known for self-command, emotional steadiness, and duty.
- [`napoleon-skill`](./.agents/skills/napoleon-skill/SKILL.md): Military and political leader known for strategy, timing, and concentration of effort.
- [`peterdrucker-skill`](./.agents/skills/peterdrucker-skill/SKILL.md): Foundational management thinker known for objectives and knowledge work effectiveness.
- [`rafaelnadal-skill`](./.agents/skills/rafaelnadal-skill/SKILL.md): Tennis champion known for resilience, consistency, and low-error execution.
- [`raydalio-skill`](./.agents/skills/raydalio-skill/SKILL.md): Bridgewater founder known for principles, systemized decisions, and feedback loops.
- [`renzhengfei-skill`](./.agents/skills/renzhengfei-skill/SKILL.md): Huawei founder known for crisis awareness, survival thinking, and organizational discipline.
- [`richardfeynman-skill`](./.agents/skills/richardfeynman-skill/SKILL.md): Physicist and explainer known for understanding, explanation, and curiosity.
- [`stevejobs-skill`](./.agents/skills/stevejobs-skill/SKILL.md): Apple co-founder known for product taste, focus, and high standards.
- [`sushi-skill`](./.agents/skills/sushi-skill/SKILL.md): Song dynasty writer and statesman known for resilience, emotional balance, and life order under adversity.
- [`wangxing-skill`](./.agents/skills/wangxing-skill/SKILL.md): Founder of Meituan known for competitive judgment, strategic focus, and organizational scaling.
- [`wangyangming-skill`](./.agents/skills/wangyangming-skill/SKILL.md): Ming dynasty thinker and general known for unity of knowledge and action.
- [`warrenbuffett-skill`](./.agents/skills/warrenbuffett-skill/SKILL.md): Long-term investing icon known for circle of competence, patience, and durable decisions.
- [`zhangyiming-skill`](./.agents/skills/zhangyiming-skill/SKILL.md): ByteDance founder known for rational decision-making, information processing, and mechanism design.
- [`zhugeliang-skill`](./.agents/skills/zhugeliang-skill/SKILL.md): Three Kingdoms strategist and statesman known for planning discipline, diligence, and conscientious execution.

### Newly Added Draft Skills

- [`confucius-skill`](./.agents/skills/confucius-skill/SKILL.md): Classical Chinese teacher and thinker known for conduct, learning, role responsibility, and everyday order.
- [`hushi-skill`](./.agents/skills/hushi-skill/SKILL.md): Modern Chinese writer and thinker known for evidence, skepticism, and plain expression.
- [`taoxingzhi-skill`](./.agents/skills/taoxingzhi-skill/SKILL.md): Educator known for learning by doing and practical education.
- [`qianxuesen-skill`](./.agents/skills/qianxuesen-skill/SKILL.md): Scientist and engineer known for systems thinking and complex-project synthesis.
- [`yuanlongping-skill`](./.agents/skills/yuanlongping-skill/SKILL.md): Agricultural scientist known for field-tested persistence and practical science.
- [`tuyouyou-skill`](./.agents/skills/tuyouyou-skill/SKILL.md): Scientist known for evidence extraction, quiet rigor, and patient validation.
- [`mahuateng-skill`](./.agents/skills/mahuateng-skill/SKILL.md): Founder of Tencent known for product restraint, pacing, and platform judgment.
- [`zhangruimin-skill`](./.agents/skills/zhangruimin-skill/SKILL.md): Haier leader known for accountability, self-disruption, and user-facing organizational change.
- [`viktorfrankl-skill`](./.agents/skills/viktorfrankl-skill/SKILL.md): Psychiatrist and thinker known for meaning, agency, and response under suffering.
- [`taiichiohno-skill`](./.agents/skills/taiichiohno-skill/SKILL.md): Toyota production pioneer known for waste reduction, process discipline, and go-to-gemba observation.
- [`satyanadella-skill`](./.agents/skills/satyanadella-skill/SKILL.md): Microsoft CEO known for empathy, learning culture, and strategic renewal.
- [`danielkahneman-skill`](./.agents/skills/danielkahneman-skill/SKILL.md): Psychologist known for bias reduction, decision hygiene, and noise control.

See also:

- English backlog: [`docs/person-backlog.md`](./docs/person-backlog.md)
- Chinese backlog: [`docs/person-backlog.zh-CN.md`](./docs/person-backlog.zh-CN.md)

## Distillation Dataset

For broader person collection beyond the current skill directories:

- English guide: [`docs/person-catalog.md`](./docs/person-catalog.md)
- Chinese guide: [`docs/person-catalog.zh-CN.md`](./docs/person-catalog.zh-CN.md)
- JSON data: [`data/person-catalog.json`](./data/person-catalog.json)

## Distillation Roadmap

If you want the next recommended batches instead of the full raw catalog:

- English roadmap: [`docs/person-roadmap.md`](./docs/person-roadmap.md)
- Chinese roadmap: [`docs/person-roadmap.zh-CN.md`](./docs/person-roadmap.zh-CN.md)

## How To Use

### 1. Browse skills

Open [`.agents/skills`](./.agents/skills) and choose a person.

### 2. Invoke a skill

Example:

```text
Use $zengguofan-skill to analyze this situation and give me actionable advice.
```

### 3. Ask by scenario

Example prompts:

```text
Use $wangyangming-skill to help me stop overthinking and start acting.
Use $richardfeynman-skill to help me learn this topic clearly.
Use $leijun-skill to help me judge this product direction.
Use $duanyongping-skill to help me decide whether this opportunity is worth doing.
```

### 4. Pick a task mode

Most person skills now support four common modes:

- `quick-judgment`
- `action-plan`
- `conversation-draft`
- `30-day-plan`

Examples:

```text
Use $zengguofan-skill to give me a quick judgment on this team problem.
Use $confucius-skill to draft what I should say in this conflict.
Use $richardfeynman-skill to make me a 30-day learning plan for this topic.
```

### 5. Read the built-in examples

Many skills now include extra reference files such as:

- `references/demo.en.md`
- `references/demo.zh-CN.md`
- `references/research.en.md`
- `references/research.zh-CN.md`

Use them to see how to ask better questions and what a stronger output shape looks like.

## How To Propose A New Skill

If you want to add a new person skill, use this simple path:

1. Pick a person with real source material.
2. Explain why ordinary people can use the method.
3. State the main use case.
4. List primary and secondary sources.
5. Open an issue or PR.

Start here:

- [`CONTRIBUTING.md`](./CONTRIBUTING.md)
- [`CONTRIBUTING.zh-CN.md`](./CONTRIBUTING.zh-CN.md)
- [`docs/review-checklist.md`](./docs/review-checklist.md)
- [`docs/review-checklist.zh-CN.md`](./docs/review-checklist.zh-CN.md)

Recommended template files:

- [`templates/person-skill/SKILL.md`](./templates/person-skill/SKILL.md)
- [`templates/person-skill/references/source-map.md`](./templates/person-skill/references/source-map.md)
- [`templates/person-skill/references/principles.md`](./templates/person-skill/references/principles.md)
- [`templates/person-skill/agents/openai.yaml`](./templates/person-skill/agents/openai.yaml)

## Contribution Rules

Good contributions should be:

- source-based
- method-first
- modern and safe
- usable by AI

Please avoid:

- quote dumps
- myth-making
- fake sources
- unlawful, deceptive, or harmful advice

## Validation

Run this before opening a PR:

```bash
python3 scripts/validate_skills.py
python3 scripts/validate_person_catalog.py
python3 scripts/validate_skill_content.py
```

## License

This repository is released under the [`MIT License`](./LICENSE).

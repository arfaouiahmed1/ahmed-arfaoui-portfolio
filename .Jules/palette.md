## 2026-05-18 - Canvas / Horizontal Scroll Telemetry
**Learning:** High-density telemetry displays benefit significantly from horizontal canvas scrolling on desktop/mobile when paired with clear explicit keyboard focus containers (`tabIndex={0}`) and ARIA labels. Removing background concentric orbit circles avoids visual distraction while preserving dark telemetry design language.
**Action:** Always maintain semantic landmark accessibility labels and visible focus indicators when refactoring scroll sequences into horizontal tracks.

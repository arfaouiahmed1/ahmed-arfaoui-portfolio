export const projects = [
  {
    number: "01",
    title: "Open Web Catcher",
    category: "Agentic AI · Browser automation",
    summary:
      "A reviewable multi-agent platform that navigates dynamic websites, activates media players, traces iframe chains, and converts browser evidence into structured intelligence.",
    challenge:
      "Modern streaming pages are hostile to conventional crawlers: content is loaded dynamically, embedded several frames deep, interrupted by pop-ups, and frequently changed.",
    approach:
      "I evolved the system from an n8n and Puppeteer prototype into a typed platform where specialized agents observe the page, choose browser tools through MCP, preserve evidence, and coordinate their loops with LangGraph.",
    outcome:
      "The result is an inspectable workflow with reusable site memory, operator-facing traces, evaluation tooling, and strong measured tool reliability across a broad website set.",
    proof: ["150+ sites reached", "97.6% tool-call success", "126 evaluated runs"],
    stack: ["LangGraph", "LangChain", "MCP", "FastAPI", "Next.js", "PostgreSQL", "Puppeteer"],
  },
  {
    number: "02",
    title: "NEWSBOT AI",
    category: "NLP · Explainable intelligence",
    summary:
      "A news intelligence engine for contextual summarization, bias and sentiment analysis, trend forecasting, and explanations that show what shaped each result.",
    challenge:
      "News analysis becomes much less useful when readers cannot understand why a model labeled an article, which context informed a summary, or how a trend was inferred.",
    approach:
      "I combined semantic search, instruction-tuned language models, LoRA adaptation, forecasting, and two complementary explainability methods so the product could retrieve context and expose model reasoning signals.",
    outcome:
      "The project became a single analytical workflow spanning retrieval, generation, classification, explainability, and forward-looking trend signals.",
    proof: ["LoRA fine-tuning", "LIME + SHAP", "Contextual semantic search"],
    stack: ["FAISS", "FLAN-T5", "Mistral", "Sentence Transformers", "LIME", "SHAP"],
  },
  {
    number: "03",
    title: "FarmWise",
    category: "Computer vision · Agricultural AI",
    summary:
      "An end-to-end advisory platform combining crop diagnostics, weed detection, satellite vegetation signals, and a RAG assistant grounded in more than 1,000 documents.",
    challenge:
      "Agricultural decisions rarely depend on one signal. Farmers need disease identification, field-level vegetation context, weed detection, and practical guidance to work together.",
    approach:
      "I connected ResNet diagnostics, YOLOv8 detection, NDVI signals, and a document-grounded assistant behind a unified Next.js and Django experience.",
    outcome:
      "FarmWise reached strong vision benchmarks while turning several separate AI capabilities into a coherent decision-support product.",
    proof: ["95% disease accuracy", "88% YOLOv8 mAP", "1,000+ RAG documents"],
    stack: ["ResNet", "YOLOv8", "RAG", "Next.js", "Django", "NDVI"],
    href: "https://github.com/arfaouiahmed1/Data-Farmers-FarmWise-4DS3",
  },
  {
    number: "04",
    title: "End-to-End MLOps",
    category: "ML engineering · Delivery",
    summary:
      "A reproducible model lifecycle with versioned data, tracked experiments, containerized serving, automated delivery, and live drift monitoring.",
    challenge:
      "A model is not production-ready if its data cannot be reproduced, its experiments cannot be compared, or its behavior cannot be monitored after release.",
    approach:
      "I designed the workflow around DVC and MLflow for lineage, FastAPI and Docker for serving, CI/CD for repeatable releases, and monitoring for model and data health.",
    outcome:
      "The project shortened delivery cycles while making every important artifact—from data to deployment—reviewable and reproducible.",
    proof: ["80% faster delivery", "Real-time monitoring", "Reproducible runs"],
    stack: ["MLflow", "DVC", "Docker", "FastAPI", "CI/CD", "Elastic"],
  },
  {
    number: "05",
    title: "Speech Emotion Recognition",
    category: "Deep learning · Audio intelligence",
    summary:
      "An audio classification system that learns emotional cues from speech and packages the result as a usable inference workflow.",
    challenge:
      "Emotion is expressed through subtle changes in pitch, energy, rhythm, and spectral texture, all of which vary across speakers and recording conditions.",
    approach:
      "I built a preprocessing and feature pipeline for audio clips, trained deep learning models on time-frequency representations, and evaluated them with class-aware metrics.",
    outcome:
      "The final system achieved 94.3% accuracy and gave me practical experience turning raw audio into a robust learned representation.",
    proof: ["94.3% accuracy", "Audio feature engineering", "Deep neural classification"],
    stack: ["Python", "TensorFlow", "Librosa", "CNN", "Signal Processing"],
  },
  {
    number: "06",
    title: "Telecom Churn Prediction",
    category: "Predictive analytics · Customer intelligence",
    summary:
      "A customer-retention workflow that identifies likely churners and translates model output into actionable business segments.",
    challenge:
      "Churn prediction is valuable only when the model balances accuracy with interpretability and helps teams decide whom to contact and why.",
    approach:
      "I prepared customer data, compared supervised models, analyzed influential features, and structured the predictions for business-facing exploration.",
    outcome:
      "The work connected statistical modeling with an operational retention question and reinforced my interest in explainable, decision-ready data products.",
    proof: ["Model comparison", "Feature importance", "Retention segmentation"],
    stack: ["Python", "Scikit-learn", "Pandas", "Power BI", "Machine Learning"],
  },
];

export const internships = [
  {
    number: "01",
    dates: "DEC 2025 — JUN 2026",
    role: "AI & Agentic Systems Engineer · Graduation Internship",
    company: "Soft Stars",
    context:
      "My final-year internship and the most ambitious engineering chapter of my studies.",
    work: [
      "Designed Open Web Catcher as a multi-agent browser intelligence platform.",
      "Moved the project from an n8n/Puppeteer prototype toward a traceable LangChain, LangGraph, MCP, FastAPI, and Next.js architecture.",
      "Built evaluation, memory, evidence, and operator-console workflows around autonomous browser behavior.",
      "Measured real execution quality instead of relying only on demos.",
    ],
    result:
      "The experience brought together agentic AI, backend engineering, browser automation, data evaluation, and product thinking in one production-minded system.",
  },
  {
    number: "02",
    dates: "AUG — SEP 2025",
    role: "Data Science Intern",
    company: "VERMEG",
    context:
      "Applied generative AI to a difficult legacy-modernization problem in financial software.",
    work: [
      "Automated the conversion of more than 50 legacy security configurations.",
      "Used Spring AI to structure the transformation workflow and connect language-model capabilities to enterprise code.",
      "Validated generated results against expected configurations and iterated on failure cases.",
    ],
    result:
      "The system reached 90% conversion accuracy and showed me how generative AI can reduce repetitive migration work when it is surrounded by validation.",
  },
  {
    number: "03",
    dates: "JUN — AUG 2025",
    role: "Data Science Intern",
    company: "ESPRIT",
    context:
      "A focused machine-learning internship centered on clustering quality and serving performance.",
    work: [
      "Benchmarked six clustering approaches on the same analytical problem.",
      "Compared their behavior with appropriate internal validation metrics.",
      "Packaged the selected model behind a FastAPI service.",
      "Optimized the inference path to stay below 200 ms.",
    ],
    result:
      "This internship strengthened my habit of comparing methods empirically and treating deployment latency as part of model quality.",
  },
  {
    number: "04",
    dates: "JUL — AUG 2024",
    role: "Business Intelligence & Data Science Intern",
    company: "CMR Tunisie",
    context:
      "My first professional bridge between reporting, forecasting, and business decisions.",
    work: [
      "Prepared and modeled commercial data for analysis.",
      "Built Power BI dashboards for sales visibility.",
      "Compared ARIMA-family forecasting methods with Prophet.",
      "Presented trends and projections in a business-readable form.",
    ],
    result:
      "The internship taught me that a correct model still needs a clear visual story before it can support a decision.",
  },
];

export const photos = [
  ["01-fireline.webp", "Fireline", "A sunset arriving like a final lap."],
  ["02-the-long-road.webp", "The Long Road", "Distance, uncertainty, and one visible way forward."],
  ["03-after-hours.webp", "After Hours", "Pool tables sleeping beneath isolated light."],
  ["04-overhead-lines.webp", "Overhead Lines", "The ordinary geometry of a Tunisian evening."],
  ["05-soft-urban-violet.webp", "Soft Urban Violet", "Grain, concrete, and the last pink in the sky."],
  ["06-between-traffic.webp", "Between Traffic", "One still figure while the city keeps moving."],
  ["07-edge-of-the-wind.webp", "Edge of the Wind", "A self-portrait beside a landscape in motion."],
  ["08-small-fire-large-sky.webp", "A Small Fire, A Large Sky", "A tiny warmth under gathering weather."],
  ["09-architecture-holding-sunset.webp", "Architecture Holding Sunset", "A building becomes a hard edge against fire."],
  ["10-wind-line.webp", "Wind Line", "Turbines written across the amber horizon."],
  ["11-street-into-amber.webp", "Street Into Amber", "A familiar road transformed for a few minutes."],
  ["12-framed-sunset.webp", "Framed Sunset", "The sky discovered between walls and wires."],
  ["13-rooftop-visitor.webp", "Rooftop Visitor", "A quiet observer beneath a soft blue evening."],
  ["14-road-home.webp", "Road Home", "Dusk seen through the movement of returning."],
  ["15-horizon-and-me.webp", "The Horizon and Me", "Looking outward before knowing what comes next."],
  ["16-birds-across-the-wire.webp", "Birds Across the Wire", "A small formation crossing a man-made line."],
  ["17-window-of-dusk.webp", "Window of Dusk", "Leaves, shadow, and a narrow opening of color."],
  ["18-stone-passage.webp", "Stone Passage", "History made tactile by afternoon light."],
  ["19-weather-turning.webp", "Weather Turning", "A sky caught between pressure and flame."],
  ["20-moon-over-the-neighborhood.webp", "Moon Over the Neighborhood", "A pale marker suspended above home."],
  ["21-soft-coast.webp", "Soft Coast", "Sea air remembered in pastel grain."],
  ["22-lake-under-blue.webp", "Lake Under Blue", "A clear horizon and an unhurried afternoon."],
  ["23-night-awning.webp", "Night Awning", "Warm structure beneath an almost black sky."],
  ["24-fog-signal.webp", "Fog Signal", "Streetlights trying to draw a path through white."],
  ["25-wind-country.webp", "Wind Country", "Machines, hills, and the Mediterranean distance."],
] as const;

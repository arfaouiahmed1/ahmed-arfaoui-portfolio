export const projects = [
  {
    number: "01",
    title: "Open Web Catcher",
    category: "Agentic AI · Browser automation",
    summary:
      "My graduation project: a multi-agent system that browses dynamic websites, handles media players and iframes, and keeps evidence from each run.",
    challenge:
      "Modern streaming pages are hostile to conventional crawlers: content is loaded dynamically, embedded several frames deep, interrupted by pop-ups, and frequently changed.",
    approach:
      "I started with an n8n and Puppeteer prototype, then rebuilt it around specialized agents, MCP browser tools, LangGraph, FastAPI, and a Next.js operator console.",
    outcome:
      "The current system stores reusable site memory, exposes traces for every run, and includes evaluation tools instead of relying only on demos.",
    proof: ["150+ sites reached", "97.6% tool-call success", "126 evaluated runs"],
    stack: ["LangGraph", "LangChain", "MCP", "FastAPI", "Next.js", "PostgreSQL", "Puppeteer"],
  },
  {
    number: "02",
    title: "NEWSBOT AI",
    category: "NLP · Explainable intelligence",
    summary:
      "A news analysis project for summaries, sentiment, bias analysis, trend forecasting, and explanations of model predictions.",
    challenge:
      "News analysis becomes much less useful when readers cannot understand why a model labeled an article, which context informed a summary, or how a trend was inferred.",
    approach:
      "I combined semantic search, instruction-tuned language models, LoRA fine-tuning, forecasting, LIME, and SHAP in one workflow.",
    outcome:
      "The result brought retrieval, generation, classification, explanations, and forecasting into one application.",
    proof: ["LoRA fine-tuning", "LIME + SHAP", "Contextual semantic search"],
    stack: ["FAISS", "FLAN-T5", "Mistral", "Sentence Transformers", "LIME", "SHAP"],
  },
  {
    number: "03",
    title: "FarmWise",
    category: "Computer vision · Agricultural AI",
    summary:
      "An agricultural platform that combines crop-disease diagnosis, weed detection, satellite vegetation data, and a RAG assistant built from more than 1,000 documents.",
    challenge:
      "Agricultural decisions rarely depend on one signal. Farmers need disease identification, field-level vegetation context, weed detection, and practical guidance to work together.",
    approach:
      "I connected ResNet, YOLOv8, NDVI data, and the document assistant through a Next.js frontend and Django backend.",
    outcome:
      "The vision models reached 95% disease accuracy and 88% YOLOv8 mAP, and the separate features worked together in one product.",
    proof: ["95% disease accuracy", "88% YOLOv8 mAP", "1,000+ RAG documents"],
    stack: ["ResNet", "YOLOv8", "RAG", "Next.js", "Django", "NDVI"],
    href: "https://github.com/arfaouiahmed1/Data-Farmers-FarmWise-4DS3",
  },
  {
    number: "04",
    title: "End-to-End MLOps",
    category: "ML engineering · Delivery",
    summary:
      "A complete ML workflow with versioned data, tracked experiments, a containerized API, automated delivery, and drift monitoring.",
    challenge:
      "A model is not production-ready if its data cannot be reproduced, its experiments cannot be compared, or its behavior cannot be monitored after release.",
    approach:
      "I used DVC and MLflow for data and experiment tracking, FastAPI and Docker for serving, CI/CD for releases, and Elastic for monitoring.",
    outcome:
      "The workflow made runs reproducible and reduced the time needed to move a model from an experiment to a deployed service.",
    proof: ["80% faster delivery", "Real-time monitoring", "Reproducible runs"],
    stack: ["MLflow", "DVC", "Docker", "FastAPI", "CI/CD", "Elastic"],
  },
  {
    number: "05",
    title: "Speech Emotion Recognition",
    category: "Deep learning · Audio intelligence",
    summary:
      "A deep-learning project that classifies emotion from speech recordings.",
    challenge:
      "Emotion is expressed through subtle changes in pitch, energy, rhythm, and spectral texture, all of which vary across speakers and recording conditions.",
    approach:
      "I cleaned the audio, built the feature pipeline, trained models on time-frequency representations, and compared the results with class-aware metrics.",
    outcome:
      "The final model reached 94.3% accuracy. It was also my first serious project working with raw audio and signal processing.",
    proof: ["94.3% accuracy", "Audio feature engineering", "Deep neural classification"],
    stack: ["Python", "TensorFlow", "Librosa", "CNN", "Signal Processing"],
  },
  {
    number: "06",
    title: "Telecom Churn Prediction",
    category: "Predictive analytics · Customer intelligence",
    summary:
      "A churn-prediction project that identifies customers who are likely to leave and groups them for retention work.",
    challenge:
      "Churn prediction is valuable only when the model balances accuracy with interpretability and helps teams decide whom to contact and why.",
    approach:
      "I prepared the customer data, compared supervised models, analyzed feature importance, and built a Power BI view of the results.",
    outcome:
      "The project helped me understand how to present model output in a way that a business team can actually use.",
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
      "This was my final-year internship and the project I spent the most time building.",
    work: [
      "Designed Open Web Catcher as a multi-agent browser intelligence platform.",
      "Moved the project from an n8n/Puppeteer prototype toward a traceable LangChain, LangGraph, MCP, FastAPI, and Next.js architecture.",
      "Built evaluation, memory, evidence, and operator-console workflows around autonomous browser behavior.",
      "Measured real execution quality instead of relying only on demos.",
    ],
    result:
      "This internship brought together agentic AI, backend work, browser automation, evaluation, and frontend work in the same system.",
  },
  {
    number: "02",
    dates: "AUG — SEP 2025",
    role: "Data Science Intern",
    company: "VERMEG",
    context:
      "I worked on using generative AI to automate part of a legacy-modernization process.",
    work: [
      "Automated the conversion of more than 50 legacy platform configurations.",
      "Used Spring AI to structure the transformation workflow and connect language-model capabilities to enterprise code.",
      "Validated generated results against expected configurations and iterated on failure cases.",
    ],
    result:
      "The system reached 90% conversion accuracy. The main lesson for me was that generated output is useful only when the validation around it is solid.",
  },
  {
    number: "03",
    dates: "JUN — AUG 2025",
    role: "Data Science Intern",
    company: "ESPRIT",
    context:
      "I compared clustering methods and then worked on serving the selected model efficiently.",
    work: [
      "Benchmarked six clustering approaches on the same analytical problem.",
      "Compared their behavior with appropriate internal validation metrics.",
      "Packaged the selected model behind a FastAPI service.",
      "Optimized the inference path to stay below 200 ms.",
    ],
    result:
      "This internship made me more disciplined about comparing methods with the same metrics and treating API latency as part of the result.",
  },
  {
    number: "04",
    dates: "JUL — AUG 2024",
    role: "Business Intelligence & Data Science Intern",
    company: "CMR Tunisie",
    context:
      "This was my first internship working with business data, dashboards, and forecasting.",
    work: [
      "Prepared and modeled commercial data for analysis.",
      "Built Power BI dashboards for sales visibility.",
      "Compared ARIMA-family forecasting methods with Prophet.",
      "Presented trends and projections in a business-readable form.",
    ],
    result:
      "I learned that even a correct forecast is not very useful if the people reading it cannot understand the story behind it.",
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

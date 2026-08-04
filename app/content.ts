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
  { file: "01-fireline.webp", title: "Fireline", caption: "The sky doing most of the work.", width: 1543, height: 2063 },
  { file: "02-the-long-road.webp", title: "The Long Road", caption: "One road, a small car, plenty of distance.", width: 909, height: 1616 },
  { file: "03-after-hours.webp", title: "After Hours", caption: "Pool tables under the last lights.", width: 1718, height: 2296 },
  { file: "04-overhead-lines.webp", title: "Overhead Lines", caption: "A normal street on an unusually good evening.", width: 1718, height: 2296 },
  { file: "05-soft-urban-violet.webp", title: "Soft Urban Violet", caption: "Concrete, grain, and the last pink in the sky.", width: 1338, height: 1788 },
  { file: "06-between-traffic.webp", title: "Between Traffic", caption: "One still person while the city keeps moving.", width: 993, height: 1766 },
  { file: "07-edge-of-the-wind.webp", title: "Edge of the Wind", caption: "Me, the turbines, and a lot of open space.", width: 2000, height: 1125 },
  { file: "08-small-fire-large-sky.webp", title: "Small Fire, Large Sky", caption: "A little warmth under heavy weather.", width: 1718, height: 2296 },
  { file: "09-architecture-holding-sunset.webp", title: "Holding Sunset", caption: "The building cut a hard edge into the light.", width: 1023, height: 1819 },
  { file: "10-wind-line.webp", title: "Wind Line", caption: "Turbines across an amber horizon.", width: 2000, height: 1125 },
  { file: "11-street-into-amber.webp", title: "Street Into Amber", caption: "A road I knew, changed for a few minutes.", width: 1096, height: 1462 },
  { file: "12-framed-sunset.webp", title: "Framed Sunset", caption: "The sky between walls and wires.", width: 1058, height: 1880 },
  { file: "13-rooftop-visitor.webp", title: "Rooftop Visitor", caption: "This cat had the better view.", width: 1718, height: 2296 },
  { file: "14-road-home.webp", title: "Road Home", caption: "Dusk from the passenger seat.", width: 1533, height: 2048 },
  { file: "15-horizon-and-me.webp", title: "The Horizon and Me", caption: "Looking outward before knowing what came next.", width: 2000, height: 791 },
  { file: "16-birds-across-the-wire.webp", title: "Across the Wire", caption: "A small formation crossing one straight line.", width: 1292, height: 2295 },
  { file: "17-window-of-dusk.webp", title: "Window of Dusk", caption: "Leaves, shadow, and a narrow opening of colour.", width: 1107, height: 1480 },
  { file: "18-stone-passage.webp", title: "Stone Passage", caption: "A walk through old stone and late light.", width: 1718, height: 2296 },
  { file: "19-weather-turning.webp", title: "Weather Turning", caption: "Pressure above, fire below.", width: 1718, height: 2296 },
  { file: "20-moon-over-the-neighborhood.webp", title: "Moon Over Home", caption: "A pale marker above the neighbourhood.", width: 1216, height: 2161 },
  { file: "21-soft-coast.webp", title: "Soft Coast", caption: "Sea air in pastel grain.", width: 1662, height: 2221 },
  { file: "22-lake-under-blue.webp", title: "Lake Under Blue", caption: "A clear horizon and an unhurried afternoon.", width: 2000, height: 1125 },
  { file: "23-night-awning.webp", title: "Night Awning", caption: "Warm structure under an almost black sky.", width: 2000, height: 2670 },
  { file: "24-fog-signal.webp", title: "Fog Signal", caption: "Streetlights trying to draw a path through white.", width: 2000, height: 2667 },
  { file: "25-wind-country.webp", title: "Wind Country", caption: "Machines, hills, and the Mediterranean in the distance.", width: 2000, height: 2001 },
  { file: "26-night-self-portrait-wide.webp", title: "Night Self-Portrait", caption: "A timer, a low angle, and the last blue in the sky.", width: 2000, height: 1500 },
  { file: "27-shadow-at-blue-hour.webp", title: "Blue-Hour Shadow", caption: "One of the first frames from a quiet night outside.", width: 2000, height: 1500 },
  { file: "28-sunset-through-the-trees.webp", title: "Between the Trees", caption: "The orange only lasted a minute.", width: 1500, height: 2000 },
  { file: "29-looking-up-at-night.webp", title: "Looking Up", caption: "A self-portrait made mostly from shadow.", width: 2000, height: 1500 },
  { file: "30-silhouette-in-motion.webp", title: "In Motion", caption: "A little blur made the frame feel right.", width: 2000, height: 1500 },
  { file: "31-under-the-stars.webp", title: "Under the Stars", caption: "Me in the foreground, a few stars still visible.", width: 1500, height: 2000 },
  { file: "32-lighthouse-on-the-water.webp", title: "The Lighthouse", caption: "A calm evening at the edge of the water.", width: 1500, height: 2000 },
  { file: "33-city-geometry.webp", title: "City Geometry", caption: "Blue sky cut into sharp pieces by the buildings.", width: 1497, height: 2000 },
  { file: "34-coast-under-clouds.webp", title: "Coast Under Clouds", caption: "A wide view from above the bay.", width: 1497, height: 2000 },
  { file: "35-stop-under-the-trees.webp", title: "Stop", caption: "A small street scene under a heavy tree canopy.", width: 1016, height: 1016 },
  { file: "36-stone-and-sky.webp", title: "Stone and Sky", caption: "Old walls, soft clouds, and people in the corner.", width: 1497, height: 2000 },
  { file: "37-lakefront-golden-hour.webp", title: "Lakefront Gold", caption: "Long shadows beside the water.", width: 1062, height: 1886 },
  { file: "38-path-to-the-sea.webp", title: "Path to the Sea", caption: "A bright afternoon and a clear route down.", width: 1497, height: 2000 },
  { file: "39-self-portrait-above-the-sea.webp", title: "Above the Sea", caption: "A rare photo of me on the other side of the camera.", width: 1209, height: 1616 },
  { file: "40-coast-and-mountains.webp", title: "Coast and Mountains", caption: "Three layers: trees, water, hills.", width: 1497, height: 2000 },
  { file: "41-winter-fire-sky.webp", title: "Winter Fire", caption: "A dark morning with one very bright horizon.", width: 1497, height: 2000 },
  { file: "42-plane-overhead.webp", title: "Overhead", caption: "Right place, right second.", width: 2000, height: 1116 },
  { file: "43-open-water-and-rocks.webp", title: "Open Water", caption: "The coast stretched out below the lookout.", width: 1497, height: 2000 },
  { file: "44-stone-fort.webp", title: "The Fort", caption: "Texture, wire, clouds, and a doorway.", width: 1497, height: 2000 },
  { file: "45-night-bus.webp", title: "Night Bus", caption: "Blue light above and orange on the road ahead.", width: 1497, height: 2000 },
  { file: "46-evening-swimmers.webp", title: "Evening Swimmers", caption: "The beach just before everyone went home.", width: 1497, height: 2000 },
  { file: "47-green-study.webp", title: "Green Study", caption: "A small subject with a deep background.", width: 1498, height: 2000 },
  { file: "48-midnight-road.webp", title: "Midnight Road", caption: "Headlights, reflections, and a long exposure.", width: 2000, height: 1125 },
  { file: "49-abstract-window-light.webp", title: "Window Light", caption: "An accidental abstract in blue-grey.", width: 1498, height: 2000 },
  { file: "50-palms-against-blue.webp", title: "Palms Against Blue", caption: "A clean sky and hard afternoon light.", width: 1498, height: 2000 },
  { file: "51-moon-over-wind-hills.webp", title: "Moon Over Wind Hills", caption: "The moon hanging above the turbines.", width: 1498, height: 2000 },
  { file: "52-lamp-at-night.webp", title: "Lamp at Night", caption: "Warm light, old walls, and tangled cables.", width: 1500, height: 2000 },
  { file: "53-bus-at-sunset.webp", title: "Bus at Sunset", caption: "Silhouettes and orange windows on the way back.", width: 1498, height: 2000 },
] as const;

export const motionFrames = [
  {
    file: "54-night-sky-motion.mp4",
    poster: "31-under-the-stars.webp",
    title: "A Few Seconds Under the Night Sky",
    caption: "A short moving frame from the same night as the self-portraits.",
    width: 3840,
    height: 2160,
  },
] as const;

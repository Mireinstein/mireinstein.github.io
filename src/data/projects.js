export const projects = [
  {
    title: "QuantML",
    description:
      "ML pipeline for systematic trading — scikit-learn + PyTorch models (walk-forward validated) trading daily against live market data, with CI/CD (GitHub Actions test + Docker smoke tests), scheduled auto-retraining gated by a quality-regression harness, live inference monitoring (latency, drift), and a multi-turn LLM agent over a RAG layer (TF-IDF + embeddings). Includes a LoRA-fine-tuned transformer for sentiment scoring. Deployed to Azure Container Apps via Terraform.",
    tags: ["Python", "PyTorch", "scikit-learn", "FastAPI", "MLflow", "Docker", "GitHub Actions", "MLOps", "LLM Agents", "LLM Fine-Tuning", "Terraform", "Azure"],
    url: "https://github.com/Mireinstein/QuantML",
  },
  {
    title: "Grey Parrot",
    description:
      "Chrome extension that puts live, translated subtitles on any video in the browser — YouTube, TikTok, anything.",
    tags: ["Chrome Extension", "Deepgram", "Python", "FastAPI"],
    url: "https://github.com/Mireinstein/Grey-Parrot",
  },
  {
    title: "Agnostic LLM Watermarking",
    description:
      "Research on prompt-based and token-level watermarking for LLM output, evaluating detection robustness against paraphrasing attacks.",
    tags: ["Python", "NLP", "Deep Learning", "LLM Fine-Tuning", "MLOps"],
    url: "https://github.com/Mireinstein/Agnostic-LLM-Watermarking",
  },
]

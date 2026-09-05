export const projects = [
  {
    title: "QuantIQ",
    description:
      "Algorithmic trading bot in C++20 — runs strategies against an Alpaca paper account, holding a target position and reconciling against the broker so it only trades the difference, which is what lets it survive a restart or a rejected order. One code path replays years of history in milliseconds or trades live, over a multithreaded market-data pipeline with a drawdown kill switch. The whole system runs offline against a mock venue, and a published dashboard compares every strategy against buy-and-hold.",
    tags: ["C++20", "Concurrency", "CMake", "Catch2", "Alpaca API", "libcurl", "GitHub Actions", "Doxygen"],
    url: "https://github.com/Mireinstein/QuantIQ",
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

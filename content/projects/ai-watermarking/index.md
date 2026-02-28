---
title: Agnostic LLM Watermarking
summary: Watermarking approaches for LLM outputs to address provenance and plagiarism detection.
tags:
  - Python
  - AI
date: '2024-03-01'

links:
  - type: code
    url: 'https://github.com/Mireinstein/Agnostic-LLM-Watermarking'

featured: true
---

Implements dual watermarking paradigms — prompt-based and token-level — for large language model outputs using GPT-3.5-Turbo and Llama-2-7B-Chat. Addresses concerns about provenance, plagiarism, and misinformation by embedding imperceptible, machine-detectable signals into generated text.

Detection uses a BERTa classifier and statistical z-tests, evaluated on OpenAI Evals and WikiText-103 datasets with robustness and ablation experiments.

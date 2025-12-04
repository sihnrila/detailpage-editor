import type { ProductInfo, Tone } from "./productTypes";

function toneText(
  tone: Tone,
  variants: { friendly: string; formal: string; simple: string }
): string {
  if (tone === "friendly") return variants.friendly;
  if (tone === "formal") return variants.formal;
  return variants.simple;
}

function nl2br(text: string): string {
  return text.replace(/\n/g, "<br />");
}

export function renderSmartstoreHtml(info: ProductInfo): string {
  const compositionLines = info.composition
    ? info.composition.split("\n").filter(Boolean)
    : [];

  const pains = info.pains ?? [];
  const benefits = info.benefits ?? [];
  const steps = info.howToUseSteps ?? [];
  const faqs = info.faqs ?? [];

  const recommendTitle = toneText(info.tone, {
    friendly: "이런 분께 특히 잘 맞아요",
    formal: "이런 분께 추천드립니다",
    simple: "이런 분께 추천"
  });

  const recommendSub = toneText(info.tone, {
    friendly: "요즘 이런 생각, 한 번쯤 해보셨다면",
    formal: "다음과 같은 고민이 있으시다면",
    simple: "이런 고민이 있다면"
  });

  const benefitTitle = toneText(info.tone, {
    friendly: "이 상품으로 이렇게 달라져요",
    formal: "이 상품을 통해 기대할 수 있는 변화",
    simple: "이 상품으로 달라지는 점"
  });

  const heroSub = info.headline
    ? info.headline
    : toneText(info.tone, {
        friendly: "오늘 하루를 조금 더 즐겁게 만들어 줄 작은 변화",
        formal: "일상에 새로운 가치를 더해 줄 선택",
        simple: ""
      });

  return `
<div class="sd-root">
  <section class="sd-hero">
    <p class="sd-hero-kicker">${info.category}</p>
    <h1 class="sd-hero-title">${info.name}</h1>
    ${
      heroSub
        ? `<p class="sd-hero-subtitle">${heroSub}</p>`
        : ""
    }
    ${
      info.target
        ? `<p class="sd-hero-target">${info.target}</p>`
        : ""
    }
  </section>

  ${
    pains.length || benefits.length
      ? `
  <section class="sd-section">
    <h2 class="sd-section-title">${recommendTitle}</h2>
    ${
      pains.length
        ? `
    <p class="sd-section-subtitle">${recommendSub}</p>
    <ul class="sd-list sd-list-disc">
      ${pains.map(p => `<li>${p}</li>`).join("")}
    </ul>
    `
        : ""
    }
    ${
      benefits.length
        ? `
    <h3 class="sd-section-subtitle sd-section-subtitle--mt">${benefitTitle}</h3>
    <ul class="sd-list sd-list-disc">
      ${benefits.map(b => `<li>${b}</li>`).join("")}
    </ul>
    `
        : ""
    }
  </section>
  `
      : ""
  }

  ${
    compositionLines.length
      ? `
  <section class="sd-section">
    <h2 class="sd-section-title">구성 안내</h2>
    <ul class="sd-list sd-list-plain">
      ${compositionLines.map(line => `<li>${line}</li>`).join("")}
    </ul>
    ${
      info.options?.length
        ? `
    <ul class="sd-list sd-list-plain sd-list-plain--mt">
      ${info.options
        .map(
          o => `<li><strong>${o.name}</strong> – ${o.description}</li>`
        )
        .join("")}
    </ul>
    `
        : ""
    }
  </section>
  `
      : ""
  }

  ${
    steps.length
      ? `
  <section class="sd-section">
    <h2 class="sd-section-title">사용 방법</h2>
    ${
      info.recommendedFor
        ? `<p class="sd-section-subtitle">${info.recommendedFor}</p>`
        : ""
    }
    <ol class="sd-list sd-list-ordered">
      ${steps
        .map(
          (s, idx) =>
            `<li><span class="sd-step-label">STEP ${
              idx + 1
            }.</span> <span>${s}</span></li>`
        )
        .join("")}
    </ol>
  </section>
  `
      : ""
  }

  ${
    faqs.length
      ? `
  <section class="sd-section">
    <h2 class="sd-section-title">자주 묻는 질문</h2>
    <div class="sd-faq-list">
      ${faqs
        .map(
          f => `
      <div class="sd-faq-item">
        <p class="sd-faq-question">Q. ${f.question}</p>
        <p class="sd-faq-answer">A. ${nl2br(f.answer)}</p>
      </div>
      `
        )
        .join("")}
    </div>
  </section>
  `
      : ""
  }

  <section class="sd-section sd-section--policy">
    ${
      info.priceNote
        ? `
    <div class="sd-policy-block">
      <h3 class="sd-policy-title">결제 안내</h3>
      <p class="sd-policy-text">${nl2br(info.priceNote)}</p>
    </div>
    `
        : ""
    }

    <div class="sd-policy-block">
      <h3 class="sd-policy-title">배송/수령 안내</h3>
      <p class="sd-policy-text">${nl2br(info.delivery)}</p>
    </div>

    <div class="sd-policy-block">
      <h3 class="sd-policy-title">환불/변경 안내</h3>
      <p class="sd-policy-text">${nl2br(info.refund)}</p>
    </div>

    ${
      info.precautions
        ? `
    <div class="sd-policy-block">
      <h3 class="sd-policy-title">유의사항</h3>
      <p class="sd-policy-text">${nl2br(info.precautions)}</p>
    </div>
    `
        : ""
    }
  </section>
</div>
  `.trim();
}

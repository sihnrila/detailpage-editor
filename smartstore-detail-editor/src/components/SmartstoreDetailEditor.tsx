import { useMemo, useState } from "react";
import "./SmartstoreDetailEditor.scss";
import type { ProductInfo, Tone } from "../templates/productTypes";
import { exampleFurniture } from "../templates/productTypes";
import { renderSmartstoreHtml } from "../templates/smartstoreTemplates";
import SmartstorePreview from "./SmartstorePreview";

const toneOptions: { value: Tone; label: string }[] = [
  { value: "friendly", label: "친근하게" },
  { value: "formal", label: "포멀하게" },
  { value: "simple", label: "담백하게" }
];

function textareaToList(value: string): string[] {
  return value
    .split("\n")
    .map(v => v.trim())
    .filter(Boolean);
}

function listToTextarea(list: string[]): string {
  return (list ?? []).join("\n");
}

const SmartstoreDetailEditor = () => {
  const [info, setInfo] = useState<ProductInfo>(exampleFurniture);

  const html = useMemo(() => renderSmartstoreHtml(info), [info]);

  const handleChange = <K extends keyof ProductInfo>(field: K, value: ProductInfo[K]) => {
    setInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const copyHtml = async () => {
    try {
      await navigator.clipboard.writeText(html);
      alert("HTML이 복사되었습니다. 스마트스토어 상세 설명에 붙여넣으세요.");
    } catch {
      alert("클립보드 복사에 실패했습니다. 직접 선택하여 복사해주세요.");
    }
  };

  return (
    <div className="editor-layout">
      <section className="editor-panel editor-panel--form">
        <h2 className="editor-panel__title">상품 정보 입력</h2>

        <div className="editor-field-group">
          <label className="editor-label">스마트스토어 상품번호</label>
          <input
            className="editor-input"
            placeholder="예: 12715931045 (가상값 사용 중)"
            value={info.naverProductId ?? ""}
            onChange={e => handleChange("naverProductId", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">상품명</label>
          <input
            className="editor-input"
            value={info.name}
            onChange={e => handleChange("name", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">카테고리</label>
          <input
            className="editor-input"
            placeholder="예: 가구/리빙 · 식탁/테이블"
            value={info.category}
            onChange={e => handleChange("category", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">타깃 고객</label>
          <textarea
            className="editor-textarea"
            value={info.target}
            onChange={e => handleChange("target", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">한 줄 핵심 메시지</label>
          <textarea
            className="editor-textarea"
            placeholder="예: 좁은 집에도 포기 못 할, 내 취향 가득한 원목 식탁"
            value={info.headline}
            onChange={e => handleChange("headline", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">카피 톤</label>
          <select
            className="editor-select"
            value={info.tone}
            onChange={e => handleChange("tone", e.target.value as Tone)}
          >
            {toneOptions.map(opt => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="editor-field-group">
          <label className="editor-label">핵심 혜택 (줄바꿈으로 구분)</label>
          <textarea
            className="editor-textarea"
            value={listToTextarea(info.benefits)}
            onChange={e => handleChange("benefits", textareaToList(e.target.value))}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">고객 고민/문제 (선택, 줄바꿈으로 구분)</label>
          <textarea
            className="editor-textarea"
            value={listToTextarea(info.pains)}
            onChange={e => handleChange("pains", textareaToList(e.target.value))}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">구성 안내 (줄바꿈으로 구분)</label>
          <textarea
            className="editor-textarea"
            value={info.composition}
            onChange={e => handleChange("composition", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">사용 방법 (STEP별, 줄바꿈으로 구분)</label>
          <textarea
            className="editor-textarea"
            value={listToTextarea(info.howToUseSteps)}
            onChange={e => handleChange("howToUseSteps", textareaToList(e.target.value))}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">추천 대상 설명</label>
          <textarea
            className="editor-textarea"
            value={info.recommendedFor}
            onChange={e => handleChange("recommendedFor", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">결제 안내</label>
          <textarea
            className="editor-textarea"
            value={info.priceNote}
            onChange={e => handleChange("priceNote", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">배송/수령 안내</label>
          <textarea
            className="editor-textarea"
            value={info.delivery}
            onChange={e => handleChange("delivery", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">환불/변경 안내</label>
          <textarea
            className="editor-textarea"
            value={info.refund}
            onChange={e => handleChange("refund", e.target.value)}
          />
        </div>

        <div className="editor-field-group">
          <label className="editor-label">유의사항</label>
          <textarea
            className="editor-textarea"
            value={info.precautions}
            onChange={e => handleChange("precautions", e.target.value)}
          />
        </div>

        <div className="editor-actions">
          <button className="editor-button" onClick={copyHtml}>
            HTML 복사하기
          </button>
        </div>
      </section>

      <SmartstorePreview html={html} />
    </div>
  );
};

export default SmartstoreDetailEditor;

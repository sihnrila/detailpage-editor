import "./SmartstorePreview.scss";

interface SmartstorePreviewProps {
  html: string;
}

const SmartstorePreview = ({ html }: SmartstorePreviewProps) => {
  return (
    <section className="preview-panel">
      <div className="preview-panel__header">
        <h2 className="preview-panel__title">상세페이지 미리보기</h2>
        <p className="preview-panel__subtitle">
          실제 스마트스토어 상세 설명 영역에 붙여넣었을 때의 모습을 가볍게 확인해보세요.
        </p>
      </div>
      <div className="preview-panel__content">
        <div
          className="preview-panel__render"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>

      <div className="preview-panel__code">
        <div className="preview-panel__code-header">생성된 HTML 원본</div>
        <textarea
          className="preview-panel__textarea"
          readOnly
          value={html}
        />
      </div>
    </section>
  );
};

export default SmartstorePreview;

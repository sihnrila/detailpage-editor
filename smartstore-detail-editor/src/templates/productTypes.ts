export type Tone = "friendly" | "formal" | "simple";

export interface ProductOption {
  name: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProductInfo {
  naverProductId?: string;
  name: string;
  category: string;
  target: string;
  headline: string;

  benefits: string[];
  pains: string[];

  composition: string;
  options: ProductOption[];

  howToUseSteps: string[];
  recommendedFor: string;

  priceNote: string;
  delivery: string;
  refund: string;
  precautions: string;

  faqs: FaqItem[];

  tone: Tone;
}

// 가구 가상 상품 예시
export const exampleFurniture: ProductInfo = {
  naverProductId: "0000000000",
  name: "노르딕 무드 2~4인용 원목 식탁 테이블",
  category: "가구/리빙 · 식탁/테이블",
  target:
    "작은 공간에서도 예쁘고 단단한 식탁을 찾는 1~2인 가구, 신혼부부, 홈카페를 즐기는 분들께 잘 어울립니다.",
  headline: "좁은 집에도 포기 못 할, 내 취향 가득한 원목 식탁",

  benefits: [
    "원룸·투룸에도 부담 없는 1200mm 컴팩트 사이즈",
    "이케아 감성의 밝은 오크 컬러로 어떤 인테리어에도 잘 어울리는 디자인",
    "우드패턴 필름이 아닌, 실제 고무나무 집성원목 상판으로 묵직하고 탄탄한 사용감"
  ],
  pains: [
    "식탁 하나 두고 싶은데, 집이 좁아서 항상 포기하게 된다.",
    "저렴한 식탁을 쓰다 보면 상판이 휘거나 필름이 벗겨져서 스트레스를 받는다.",
    "인테리어를 망치지 않을 심플한 디자인을 찾기 어렵다."
  ],

  composition: [
    "· 노르딕 무드 원목 식탁 테이블 1EA",
    "· 컬러: 내추럴 오크 (반광 마감)",
    "· 사이즈: 가로 1200 x 세로 750 x 높이 730 (mm)",
    "· 소재: 고무나무 집성원목 상판, 러버우드 다리",
    "· 권장 사용 인원: 2~4인"
  ].join("\n"),
  options: [
    { name: "기본형", description: "의자 미포함, 테이블 단품 구성" },
    { name: "세트 구성 A", description: "테이블 + 원목 의자 2EA" },
    { name: "세트 구성 B", description: "테이블 + 원목 의자 4EA" }
  ],

  howToUseSteps: [
    "동봉된 설명서를 참고하여 다리 프레임을 먼저 조립합니다.",
    "상판을 뒤집어 부드러운 천 위에 올려놓고, 다리를 위치에 맞게 올려 나사로 고정합니다.",
    "조립 후, 식탁을 세워 사용 위치로 옮겨 주세요. 벽과 너무 밀착시키지 않으면 통풍과 관리에 좋습니다.",
    "처음 1~2주 동안은 뜨거운 냄비/주전자 등은 반드시 러너나 매트를 깔고 사용해주세요."
  ],
  recommendedFor:
    "카페 같은 무드를 집에 들이고 싶은 분, 작은 공간에도 예쁜 식탁을 두고 싶은 분, 자주 이사를 다니지만 튼튼한 식탁을 찾는 분께 추천드립니다.",

  priceNote:
    "세트 옵션에 따라 가격이 달라집니다. 옵션에서 원하시는 구성을 선택해 주세요.\n행사/쿠폰 적용 시 최종 결제 금액을 꼭 확인해 주세요.",
  delivery:
    "· 배송 형태: 설치형 가구 택배\n· 배송 기간: 결제 후 평균 3~5일 (영업일 기준), 지역/물량에 따라 변동 가능\n· 배송 기사 방문 전, 문자/안내 연락이 제공됩니다.",
  refund:
    "· 상품 수령 후 7일 이내 단순 변심 교환/반품 가능 (왕복 배송비 고객 부담)\n· 조립 완료 후 사용감/흠집이 발생한 경우에는 교환/반품이 제한될 수 있습니다.\n· 가구 특성상 엘리베이터 미사용 층고/사다리차 사용 시 추가 비용이 발생할 수 있습니다.",
  precautions:
    "· 원목 특성상 나뭇결, 옹이, 색감 차이가 있을 수 있으며 이는 불량이 아닙니다.\n· 물/음료가 흘렀을 경우 마른 천으로 바로 닦아주시고, 장시간 방치하지 마세요.\n· 직사광선, 난방기 바로 앞은 변형/변색의 원인이 될 수 있으니 피해주세요.",

  faqs: [
    {
      question: "좁은 원룸에서도 사용할 수 있을까요?",
      answer:
        "가로 1200mm 사이즈로 2인 식사에 가장 많이 사용되는 사이즈입니다.\n원룸/투룸, 작은 거실에서도 벽 쪽에 붙여 사용하시면 부담스럽지 않게 쓰실 수 있어요."
    },
    {
      question: "의자 포함 구성인가요?",
      answer:
        "기본 옵션은 테이블 단품이며, 세트 옵션 선택 시 2인/4인 의자 구성이 함께 발송됩니다.\n옵션에서 원하시는 구성을 꼭 확인해 주세요."
    },
    {
      question: "물티슈로 닦아도 되나요?",
      answer:
        "알코올 성분이 강한 물티슈는 마감을 손상시킬 수 있어 마른 천이나 잘 짜낸 부드러운 행주 사용을 권장드립니다.\n필요 시 가구 전용 클리너를 사용해 주세요."
    }
  ],

  tone: "friendly"
};

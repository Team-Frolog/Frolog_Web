export interface ITermsOfUse {
  id: number;
  name: string;
  label: string;
  title?: string;
  view?: string;
}

export const termsOfUse: ITermsOfUse[] = [
  { id: 0, name: 'age', label: '[필수] 만 14세 이상입니다.' },
  {
    id: 1,
    name: 'termsOfUse',
    label: '[필수] 이용약관 동의',
    title: '이용약관 동의',
    view: `1. 약관의 적용 및 변경\n\n1.1 본 약관은 회원이 본 사이트에 가입하여 서비스를 이용하는 경우 적용되며, 회원은 본 약관의 내용을 숙지하고 준수하여야 합니다.\n\n1.2 회사는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 사전에 공지함으로써 효력을 발생합니다. 변경된 약관에 대한 이용자의 동의는 해당 공지 시점 이후 회원가입 시 또는 서비스 이용 시에 이루어집니다.\n\n2. 회원가입 및 계정\n\n2.1 회원가입은 본 사이트의 이용을 원하는 자가 약관에 동의하고 회사가 요구하는 개인정보를 제공하여야 합니다. 회원은 제공하는 정보가 정확하고 최신임을 보증하여야 합니다.\n\n2.2 회원은 본 사이트를 통해 얻은 계정과 비밀번호를 관리하여야 하며, 본인의 계정이나 비밀번호를 타인에게 양도하거나 공유해서는 안 됩니다. 회원은 본인의 계정을 사용하여 이루어지는 모든 활동에 대해 책임을 집니다.\n\n3. 개인정보 보호\n\n3.1 회사는 회원의 개인정보를 보호하기 위해 최선의 노력을 다하며, 개인정보의 보호 및 이용에 관한 사항은 별도의 개인정보 처리방침에 따릅니다.\n\n3.2 회원은 자신의 개인정보를 보호하기 위해 비밀번호를 안전하게 관리하고, 다른 사람에게 공개하지 않아야 합니다.\n\n4. 서비스 이용\n\n4.1 회원은 본 사이트를 통해 다음과 같은 행동을 할 수 있습니다: 리뷰 작성, 댓글 작성, 콘텐츠 공유, 커뮤니티 참여 등.\n\n4.2 회원은 본 사이트를 통해 불법적인 활동을 시도해서는 안 되며, 타인의 권리를 침해하거나 회사의 업무를 방해해서는 안 됩니다.\n\n5. 서비스의 변경 및 중단\n\n5.1 회사는 사전 공지 후 필요한 경우 서비스의 전부 또는 일부를 변경하거나 중단할 수 있습니다. 이로 인해 발생하는 손해에 대해서 회사는 책임을 지지 않습니다.\n\n6. 책임 제한\n\n6.1 회사는 본 사이트를 통해 제공되는 콘텐츠의 진실성, 정확성, 신뢰성 등에 대해 어떠한 보증도 하지 않으며, 회원은 이를 스스로 판단하여야 합니다.\n\n6.2 회원이 본 사이트를 통해 제공하는 콘텐츠의 저작권, 지적재산권 등에 대한 모든 책임은 회원에게 있습니다.\n\n7. 분쟁 해결\n\n7.1 본 약관에 따른 분쟁이 발생할 경우, 회사와 회원은 상호 협의하여 해결하기로 합니다. 협의가 이루어지지 않을 경우, 대한민국의 관할 법원에 소를 제기할 수 있습니다.\n\n8. 기타\n\n8.1 본 약관에서 정하지 않은 사항에 대해서는 관련 법령 및 회사의 정책에 따릅니다.\n\n이상으로, 본 약관에 동의하시면 회원가입을 완료하실 수 있습니다.`,
  },
  {
    id: 2,
    name: 'privacyPolicy',
    label: '[필수] 개인정보 수집 및 이용동의',
    title: '개인정보 수집 및 이용동의',
    view: `1. 개인정보의 수집 및 이용 목적\n\n1.1 회사는 회원가입, 서비스 제공, 고객문의 응대, 이벤트 참여 등을 위해 아래와 같은 개인정보를 수집 및 이용합니다.\n\n이메일 주소: 회원 식별, 공지사항 및 이벤트 안내 등을 위한 연락\n닉네임 또는 실명: 서비스 내에서 회원을 식별하고 서비스 제공\n기타 정보: 서비스 이용에 필요한 정보를 제공하기 위함\n\n2. 개인정보의 보유 및 이용기간\n\n2.1 회사는 회원의 개인정보를 회원탈퇴 시까지 보유 및 이용하며, 탈퇴 시 즉시 파기합니다.\n\n3. 개인정보의 제3자 제공 및 위탁\n\n3.1 회사는 회원의 개인정보를 본 사이트 서비스 제공 목적으로만 사용하며, 회원의 동의 없이 제3자에게 제공하지 않습니다.\n\n3.2 회사는 서비스 제공을 위하여 필요한 경우 회원의 개인정보를 안전하게 처리하기 위한 목적으로 외부 전문 업체에 제공할 수 있습니다. 이 경우에도 회사는 회원의 동의를 받고 안전한 수준에서 개인정보를 관리합니다.\n\n4. 개인정보의 파기\n\n4.1 회사는 개인정보의 수집 및 이용 목적이 달성된 후 즉시 파기하거나 회원의 요청에 의해 파기합니다. 단, 관련 법령에 따라 일정 기간 동안 보관할 필요가 있는 경우에는 해당 기간 동안 보관하고 안전하게 처리합니다.\n\n5. 개인정보의 열람, 정정 및 철회\n\n5.1 회원은 언제든지 자신의 개인정보를 열람하고 정정할 수 있으며, 회원가입 시 제공한 개인정보의 철회 또는 삭제를 요청할 수 있습니다.\n\n6. 개인정보 수집 및 이용 동의의 거부\n\n6.1 회원은 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으나, 이 경우 회원가입 및 서비스 이용이 제한될 수 있습니다.\n\n위 내용을 확인하고 개인정보 수집 및 이용에 동의하실 경우에만 회원가입을 완료하실 수 있습니다.`,
  },
  {
    id: 3,
    name: 'marketing',
    label: '[선택] 마케팅 목적의 개인정보 수집 및 이용동의',
    title: '마케팅 목적의 개인정보 수집 및 이용동의',
    view: `1. 개인정보의 수집 및 이용 목적\n\n1.1 회사는 다음과 같은 목적으로 회원의 개인정보를 수집하고 이용합니다.\n\n이메일 주소, 전화번호 등의 연락처: 이벤트, 프로모션, 할인 혜택 등의 마케팅 정보 제공을 위한 연락\n성별, 연령, 관심사 등의 정보: 개인맞춤형 서비스 제공을 위한 정보 수집 및 분석\n\n2. 개인정보의 보유 및 이용기간\n\n2.1 회사는 마케팅 목적으로 수집한 회원의 개인정보를 회원이 동의한 기간 동안 보유하고 이용합니다.\n\n3. 개인정보의 제3자 제공 및 위탁\n\n3.1 회사는 회원의 개인정보를 마케팅 목적 이외의 다른 목적으로 제3자에게 제공하지 않습니다.\n\n3.2 회사는 회원의 개인정보를 안전하게 처리하기 위하여 외부 전문 업체에 위탁할 수 있습니다.\n\n4. 개인정보의 파기\n\n4.1 회사는 회원의 개인정보를 마케팅 목적을 위해 수집한 경우, 해당 목적이 달성된 후 즉시 파기하거나 회원의 요청에 따라 파기합니다.\n\n5. 개인정보의 열람, 정정 및 철회\n\n5.1 회원은 언제든지 자신의 개인정보를 열람하고 정정할 수 있으며, 개인정보 수집 및 이용에 대한 동의를 철회할 수 있습니다.\n\n6. 개인정보 수집 및 이용 동의의 거부\n\n6.1 회원은 마케팅 목적의 개인정보 수집 및 이용에 대한 동의를 거부할 수 있으나, 이 경우 회원은 마케팅 정보 제공 등 일부 서비스를 받을 수 없을 수 있습니다.\n\n위 내용을 확인하고 마케팅 목적의 개인정보 수집 및 이용에 동의하실 경우에만 해당 서비스를 이용하실 수 있습니다.`,
  },
  { id: 4, name: 'ads', label: '[선택] 광고성 정보 수신 동의' },
];

import { Suspense } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ProfileFeedItem from '@/features/Profile/components/Feed/ProfileFeedItem';

const meta = {
  title: 'Profile/Feed/ProfileFeedItem',
  component: ProfileFeedItem,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Suspense fallback={<div>Loading...</div>}>
        <Story />
      </Suspense>
    ),
  ],
} satisfies Meta<typeof ProfileFeedItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    feedData: {
      memoCount: 0,
      reviewCount: 1,
      book: {
        isbn: '9791140706327',
        category: 'science',
        page: 319,
        title:
          '신은 주사위 놀이를 하지 않는다 (로또부터 진화까지, 우연한 일들의 법칙)',
        author: '데이비드 핸드',
        image:
          'https://shopping-phinf.pstatic.net/main_4279079/42790790619.20230928092017.jpg',
        publisher: '더퀘스트',
        pub_date: '2023-10-11',
        desc: '통계학으로 ‘대영제국훈장’을 받은 데이비드 핸드,\n우연을 필연으로 만드는 다섯 가지 법칙을 말하다!\n\n흔히 로또에 당첨되는 게 ‘하늘의 별 따기’라고 하지만, 로또 1등에 당첨되는 사람은 매주 꼬박꼬박 나온다. 반대로 철없는 아이가 옥상에서 던진 물건에 길을 걷다가 맞는 불행한 사람도 있다. 사람들은 자신들이 좌지우지할 수 없는 ‘우연한’ 일들을 겪으면, 그 배후에 소위 ‘운’이 작용했다고 믿고, 운세를 자신에게 유리하게 바꾸려고 노력한다. \n왕립통계학회 회장을 역임하고 대영제국훈장을 받은 세계적인 통계학자 데이비드 핸드는 《신은 주사위 놀이를 하지 않는다》를 통해 언뜻 보기엔 ‘말도 안 되는 일들’ 배후에 엄밀한 수학, 통계학적 법칙이 존재함을 말한다. 그는 〈신비한 TV, 서프라이즈〉에 등장할 법한 미스터리한 사건들을 예로 들며, 그 뒤에 숨겨진 다섯 가지 ‘우연의 법칙’을 설명한다. 더불어 우리가 점괘나 종교나 미신에 의존하지 않더라도 충분히 세상 돌아가는 원리를 이해하고 대처할 수 있음을 역설한다. 《세상물정의 물리학》의 저자이자 성균관대 물리학과 교수인 김범준과 과학 도서 애호가인 개그맨 이윤석이 강력하게 추천한 이 책은, ‘로또에 100퍼센트 당첨되는 방법(그리고 현명하게 번호 고르는 전략)’을 비롯해 ‘도박이나 스포츠에서 말하는 소위 끗발의 존재’ ‘월드컵의 결과를 맞히는 문어와 노스트라다무스의 예언 비법’ ‘왜 경제 위기는 아무도 예측하지 못하고 주가는 그토록 널뛰기하는지’ ‘생명은 어떻게 우연한 선택을 통해 진화하는지’ ‘창조주가 없이도 지적인 생명체가 나타날 수 있는지’ 등 다양한 영역을 넘나드는 흥미로운 소재들을 다룬다. \n출간 즉시 자연 과학 도서로는 이례적으로 〈아마존〉과 《뉴욕타임스》 베스트셀러가 되었고, 《워싱턴포스트》 《허핑턴포스트》 등 유력 매체의 찬사를 받은 《신은 주사위 놀이를 하지 않는다》는 기이한 사례들로 가득해 흥미진진할 뿐 아니라, 이 우주의 규칙이 얼마나 경이롭고 아름다운지를 보여주는 책이다. 기적은 우연이 아니다.',
        review_cnt: 1,
        avg_rating: 5,
        tags_pos: ['squeeze_time', 'smart'],
        tags_neg: [],
      },
      wellId: 'VJDxDJx',
    },
  },
};

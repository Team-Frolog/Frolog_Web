import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/book/:isbn`, () =>
    HttpResponse.json({
      isbn: '9788936434410',
      category: 'novel',
      page: 215,
      title: '소년이 온다(특별한정판) (한강 소설ㅣ2024년 노벨문학상 수상작가)',
      author: '한강',
      image:
        'https://shopping-phinf.pstatic.net/main_3249182/32491820253.20250101071624.jpg',
      publisher: '창비',
      pub_date: '2020-04-24Z+09:00',
      desc: '말라파르테 문학상, 만해문학상 수상작 \n우리 시대의 소설 『소년이 온다』 출간 10주년 기념 특별한정판 \n\n2014년 만해문학상, 2017년 이탈리아 말라파르테 문학상을 수상하고 전세계 20여개국에 번역 출간되며 세계를 사로잡은 우리 시대의 소설 『소년이 온다』를 출간 10주년을 맞아 특별한정판으로 새롭게 선보인다. 이 작품은 『채식주의자』로 인터내셔널 부커상을 수상한 한강 작가에게 “눈을 뗄 수 없는, 보편적이며 깊은 울림”(뉴욕타임즈), “역사와 인간의 본질을 다룬 충격적이고 도발적인 소설”(가디언), “한강을 뛰어넘은 한강의 소설”(문학평론가 신형철)이라는 찬사를 선사한 작품으로, 그간 많은 독자들에게 광주의 상처를 깨우치고 함께 아파하는 문학적인 헌사로 높은 관심과 찬사를 받아왔다.',
      review_cnt: 0,
      avg_rating: 0,
      tags_pos: ['easy'],
      tags_neg: ['shallow'],
    })
  ),
];

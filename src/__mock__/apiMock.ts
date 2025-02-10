import { DEFAULT_LIMIT } from '@/constants/api';
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/well/userwell/search`,
    ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get('page')) || 1;
      const limit = Number(url.searchParams.get('limit')) || DEFAULT_LIMIT;
      const searchQuery = url.searchParams.get('query');
      const totalData = 50;

      const wellsData = Array.from({ length: totalData }, (_, index) => ({
        id: 'jeLY5v4',
        wells: [
          {
            id: 'zg1GyvV',
            name:
              searchQuery === null
                ? `첫우물 ${index}`
                : `${searchQuery} ${index}`,
            owner: 'jeLY5v4',
            frog: 'default',
            color: 'religion',
            shape: 1,
            date: '2025-02-09T10:10:08.000Z',
            item_cnt: 0,
          },
        ],
      }));

      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedData = wellsData.slice(startIndex, endIndex);

      return HttpResponse.json({
        wells: paginatedData,
        count: totalData,
        limit,
        page,
      });
    }
  ),
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
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/profile/:id`, () =>
    HttpResponse.json({
      id: 'RXgYmgQ',
      reading_preference: '2',
      username: '테스터',
      image:
        'data:image/jpeg;base64,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',
      follow: false,
    })
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/profile/:id/detail`,
    ({ request }) => {
      const splited = request.url.split('/');
      const idx = splited.indexOf('profile') + 1;
      const id = splited[idx];

      if (id === '0') {
        return HttpResponse.json({
          id: 'RXgYmgQ',
          reading_preference: '2',
          username: '테스터',
          follow: false,
          self_intro: '자기소개',
          max_item_cnt: 12,
          following_cnt: 21,
          follower_cnt: 25,
          personal_infos: [
            {
              type: 'occupation',
              value: '학생',
              visibility: true,
            },
            {
              type: 'birth_date',
              value: '2002-10-20',
              visibility: true,
            },
            {
              type: 'gender',
              value: '여성',
              visibility: true,
            },
          ],
        });
      } else {
        return HttpResponse.json({
          id: 'RXgYmgQ',
          reading_preference: null,
          username: '테스터',
          follow: false,
          self_intro: '자기소개',
          max_item_cnt: 12,
          following_cnt: 21,
          follower_cnt: 25,
          personal_infos: [
            {
              type: 'occupation',
              value: '학생',
              visibility: false,
            },
            {
              type: 'birth_date',
              value: '2002-10-20',
              visibility: false,
            },
            {
              type: 'gender',
              value: '여성',
              visibility: false,
            },
          ],
        });
      }
    }
  ),
];

import React from 'react';
import { proTags } from '@/data/tag';
import { textareaType } from '@/data/ui/textareaType';
import ReadOnlyTextarea from '@/components/Form/Input/ReadOnlyTextarea';
import MajorTagList from '@/components/Tag/MajorTagList';
import RatingSelector from '@/components/Rating/RatingSelector';

function ReviewDetail() {
  return (
    <div className='flex-child-layout gap-[36px]'>
      <RatingSelector type='default' rating={4.5} />
      <MajorTagList type='pros' tagData={proTags} />
      <MajorTagList type='cons' tagData={proTags} />
      <ReadOnlyTextarea
        option={textareaType.oneLiner}
        content='예측불허의 긴장된 상태로 성적표를 처음 받아보았을 때를 잊을 수가 없다.'
      />
      <ReadOnlyTextarea
        option={textareaType.review}
        content='성적표를 처음 받아보았을 때를 잊을 수가 없다. 아주 얇은 그 종이에 전교 등수, 반등 수가 적혀 있는데 비교하지 않은 상태에서는 나의 위치가 어느 정도인지 감이 오지 않았다. "야 너 몇 등이야?" "너 이렇게 공부 잘했었어?" 친구들과 비교해 보니 꽤 괜찮다고 여겨졌던 나의 숫자는 형편없는 것이었다. 체력장에서 유연성을 체크하기 위해 앞으로 몸을 숙였을 때는 심지어 마이너스였다. 나의 유연성은 0을 넘지 못했다. 숫자로 설명되던 학창 시절을 벗어나 어떤 때에는 혈액형으로 나 자신이 규정되었고 또 요즘은 MBTI로 서로를 구분 짓는다. "너 T야?" 권정민 작가는 무엇이든 비교하고 수치화하게 만드는 측정의 본질에 주목하여 독특한 형식의 그림책을 만들었다. 이 그림책을 읽는 순간 모두 측정에 참여하게 된다.'
      />
    </div>
  );
}

export default ReviewDetail;

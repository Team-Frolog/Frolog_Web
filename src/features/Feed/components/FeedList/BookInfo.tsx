import React from 'react';
import Image from 'next/image';
import Rating from '@/components/Rating/Rating';
import { IMAGES } from '@/constants/images';
import { useBook } from '@/features/Book';
import { GetMemoRes, GetReviewRes } from '@frolog/frolog-api';
import { isGetMemoRes } from '../../utils/typeGuard';

interface Props {
  isMemo: boolean;
  feedData: GetReviewRes | GetMemoRes;
}

function BookInfo({ feedData, isMemo }: Props) {
  const { bookData } = useBook(feedData.isbn);
  if (!bookData) return <></>;

  const { title, author, publisher, category, image } = bookData;

  return (
    <div className='pt-[30px]'>
      <div
        className={`relative flex h-fit w-full gap-[16px] rounded-t-[20px] bg-category-bg-${category} px-page pt-[24px]`}
      >
        <div className={`tooltip-feed border-b-category-bg-${category}`} />
        <div className='flex'>
          <Image
            src={image || IMAGES.book.cover}
            alt='book cover'
            width={74}
            height={110}
            className='h-full max-w-fit self-end bg-gray-400'
            placeholder='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjRURFRkY0IiBkPSJNMCAwaDEyNnYxODZIMHoiLz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyNiIgaGVpZ2h0PSIxODYiPjxwYXRoIGZpbGw9IiNFREVGRjQiIGQ9Ik0wIDBoMTI2djE4NkgweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBkPSJNNjEuNzI1IDczLjc1NGM3LjAxOCAyLjM5NyAxMC43Ni01LjI4MSAxMC43Ni01LjI4MSAyLjU2NC42ODkgOC4xNy42NjMgMTAuMDg4LTQuOTUxIiBzdHJva2U9IiNCM0I2QzUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgc3Ryb2tlPSIjQjNCNkM1IiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTE1Ny42OTMgMTI3LjY4QzE0OC42NDMgMTEzLjM2OCAxMzIgMTA2LjQ5OSAxMzIgMTA2LjQ5OWM4LjU4Ni04LjcyNiAxOS4xOTUtMzUuMjEgOC41LTU3LTEyLjc2MS0yNi00NC42MDItMTcuOTgtNDQuNjAyLTE3Ljk4Qzc1LjQ0NSAxNi4yMiA2OS40MDEgMTEuMjcgNjAgMTQuNWMtOC4zMDQgMi44NS01Ljg0IDE3LjU3Ny01LjUgMTkuNS0xLjY3Mi0xLjc0Ny0xMi4wMTQtMTAuNTk2LTE5LTYtOC4zMDUgNS40Ni03LjMxNSAxMS43NTctNy43MjEgMzcuMjkzIDAgMC0xOS45MTMgMjcuODc3LTkuMjE4IDQ5LjY2OCAxMC42OTUgMjEuNzkgMzUuNjE0IDI1LjM1IDQ3Ljc3IDIzLjg5NiAwIDAtMTUuODMxIDE2LjE0My02LjMzIDM0LjY0MyAwIDAtMzAuMDAxIDIzLjUgNi4zMyAzNy40MjkgMCAwIDcuNDY1IDExLjg1IDMzLjY3OS0zLjAzNSAwIDAgMy42MjggNS43ODIgOC44NDUgMy4wMzUgNS4yMTgtMi43NDUgMTAuMjc2LTMuMDQ5IDE0LjYyNi0xOS42MWw2Ljg5NS0zLjYxNCA2LjY2OS0zLjM4MmMxNS43NjUgNi42ODggMTkuMDk2IDIuODcyIDI0LjQ2LjQyNiA1LjM2My0yLjQ0OSAzLjAxLTguODU0IDMuMDEtOC44NTQgMjcuODExLTExLjYzMSAxMS4yNTktMTUuMDI1IDExLjI1OS0xNS4wMjUgMTIuNzk2LTI4LjY5Ni0xOC4wODEtMzMuMTg5LTE4LjA4MS0zMy4xODlaIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEzNy44NzEgMTg0LjY2czYuNjI1LTEyLjY1My0yLjk5My0zMi4zOTNjLTExLjM1OC0yMy4zMDctMjUuMjc1LTE3LjU2My0yNS4yNzUtMTcuNTYzcy0xMi40MTggNC43MDktNy4yMjIgMjguNzE0YzQuMzYgMjAuMTUxIDE5LjI5NSAyNy43MjYgMTkuMjk1IDI3LjcyNmwxNi4xOTgtNi40ODUtLjAwMy4wMDFaIi8+PC9nPjxlbGxpcHNlIGN4PSI0OS41IiBjeT0iNTYuNzkiIHJ4PSI3LjYzNiIgcnk9IjguMjczIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjYuMTQyIDQ5LjUgNTYuNzkpIiBmaWxsPSIjQjNCNkM1Ii8+PGNpcmNsZSBjeD0iNTAuOTQ0IiBjeT0iNTMuOTU2IiByPSIyLjU0NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjE0MiA1MC45NDQgNTMuOTU2KSIgZmlsbD0iI0VERUZGNCIvPjxlbGxpcHNlIGN4PSI3NS41IiBjeT0iNDIuNzkiIHJ4PSI3LjYzNiIgcnk9IjguMjczIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjYuMTQyIDc1LjUgNDIuNzkpIiBmaWxsPSIjQjNCNkM1Ii8+PGNpcmNsZSBjeD0iNzYuOTQ0IiBjeT0iMzkuOTU2IiByPSIyLjU0NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjE0MiA3Ni45NDQgMzkuOTU2KSIgZmlsbD0iI0VERUZGNCIvPjwvZz48L3N2Zz4='
            priority
          />
        </div>

        <div
          className={`flex w-full flex-1 flex-col ${isMemo ? 'z-[-1px] mb-[-2px] justify-between gap-[8px]' : 'pb-[8px]'}`}
        >
          <div className='flex w-full flex-col gap-[4px]'>
            <h5
              className={`line-clamp-1 w-full text-body-lg-bold text-category-text-${category}`}
            >
              {title}
            </h5>
            <ul
              className={`line-clamp-1 flex text-caption-bold text-category-text-${category}`}
            >
              <li className="after:content-['|']">
                <span className='pr-[6px]'>{author}</span>
              </li>
              <li>
                <span className='pl-[6px]'>{publisher}</span>
              </li>
            </ul>
          </div>
          <div className='w-full'>
            {isMemo ? (
              <Image
                src={IMAGES.frog.memo_frog}
                alt='memo frog'
                width={252}
                height={56}
                className='mb-[-2px] w-full max-w-[95%]'
                priority
              />
            ) : (
              <Rating
                rating={!isGetMemoRes(feedData) ? feedData.rating : null}
                textClass={`text-heading-lg-bold text-category-text-${category}`}
                categoryId={category}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookInfo;

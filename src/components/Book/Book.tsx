import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { motion } from 'framer-motion';

interface Props {
  imageUrl?: string;
  /** 도서를 클릭하여 도서 상세 페이지로 넘어갈 수 있는지의 여부 */
  canClick: boolean;
}

/** 도서 상세 페이지, 리뷰/메모 리스트 내 도서 커버 컴포넌트 */
function Book({ imageUrl, canClick }: Props) {
  return (
    <motion.div
      whileTap={{ scale: canClick ? 0.95 : 1 }}
      className='relative z-10'
    >
      <Image
        src={IMAGES.book.skin}
        alt='skin'
        width={161}
        height={245}
        className='absolute -left-[9px] -top-[14px] -z-10 h-[245px] w-full'
      />
      <Image
        src={imageUrl || IMAGES.book.cover}
        alt='book cover'
        width={160}
        height={230}
        className='h-[230px] w-auto'
        placeholder='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI2IiBoZWlnaHQ9IjE4NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjRURFRkY0IiBkPSJNMCAwaDEyNnYxODZIMHoiLz48bWFzayBpZD0iYSIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyNiIgaGVpZ2h0PSIxODYiPjxwYXRoIGZpbGw9IiNFREVGRjQiIGQ9Ik0wIDBoMTI2djE4NkgweiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2EpIj48cGF0aCBkPSJNNjEuNzI1IDczLjc1NGM3LjAxOCAyLjM5NyAxMC43Ni01LjI4MSAxMC43Ni01LjI4MSAyLjU2NC42ODkgOC4xNy42NjMgMTAuMDg4LTQuOTUxIiBzdHJva2U9IiNCM0I2QzUiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PGcgc3Ryb2tlPSIjQjNCNkM1IiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0iTTE1Ny42OTMgMTI3LjY4QzE0OC42NDMgMTEzLjM2OCAxMzIgMTA2LjQ5OSAxMzIgMTA2LjQ5OWM4LjU4Ni04LjcyNiAxOS4xOTUtMzUuMjEgOC41LTU3LTEyLjc2MS0yNi00NC42MDItMTcuOTgtNDQuNjAyLTE3Ljk4Qzc1LjQ0NSAxNi4yMiA2OS40MDEgMTEuMjcgNjAgMTQuNWMtOC4zMDQgMi44NS01Ljg0IDE3LjU3Ny01LjUgMTkuNS0xLjY3Mi0xLjc0Ny0xMi4wMTQtMTAuNTk2LTE5LTYtOC4zMDUgNS40Ni03LjMxNSAxMS43NTctNy43MjEgMzcuMjkzIDAgMC0xOS45MTMgMjcuODc3LTkuMjE4IDQ5LjY2OCAxMC42OTUgMjEuNzkgMzUuNjE0IDI1LjM1IDQ3Ljc3IDIzLjg5NiAwIDAtMTUuODMxIDE2LjE0My02LjMzIDM0LjY0MyAwIDAtMzAuMDAxIDIzLjUgNi4zMyAzNy40MjkgMCAwIDcuNDY1IDExLjg1IDMzLjY3OS0zLjAzNSAwIDAgMy42MjggNS43ODIgOC44NDUgMy4wMzUgNS4yMTgtMi43NDUgMTAuMjc2LTMuMDQ5IDE0LjYyNi0xOS42MWw2Ljg5NS0zLjYxNCA2LjY2OS0zLjM4MmMxNS43NjUgNi42ODggMTkuMDk2IDIuODcyIDI0LjQ2LjQyNiA1LjM2My0yLjQ0OSAzLjAxLTguODU0IDMuMDEtOC44NTQgMjcuODExLTExLjYzMSAxMS4yNTktMTUuMDI1IDExLjI1OS0xNS4wMjUgMTIuNzk2LTI4LjY5Ni0xOC4wODEtMzMuMTg5LTE4LjA4MS0zMy4xODlaIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTEzNy44NzEgMTg0LjY2czYuNjI1LTEyLjY1My0yLjk5My0zMi4zOTNjLTExLjM1OC0yMy4zMDctMjUuMjc1LTE3LjU2My0yNS4yNzUtMTcuNTYzcy0xMi40MTggNC43MDktNy4yMjIgMjguNzE0YzQuMzYgMjAuMTUxIDE5LjI5NSAyNy43MjYgMTkuMjk1IDI3LjcyNmwxNi4xOTgtNi40ODUtLjAwMy4wMDFaIi8+PC9nPjxlbGxpcHNlIGN4PSI0OS41IiBjeT0iNTYuNzkiIHJ4PSI3LjYzNiIgcnk9IjguMjczIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjYuMTQyIDQ5LjUgNTYuNzkpIiBmaWxsPSIjQjNCNkM1Ii8+PGNpcmNsZSBjeD0iNTAuOTQ0IiBjeT0iNTMuOTU2IiByPSIyLjU0NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjE0MiA1MC45NDQgNTMuOTU2KSIgZmlsbD0iI0VERUZGNCIvPjxlbGxpcHNlIGN4PSI3NS41IiBjeT0iNDIuNzkiIHJ4PSI3LjYzNiIgcnk9IjguMjczIiB0cmFuc2Zvcm09InJvdGF0ZSgtMjYuMTQyIDc1LjUgNDIuNzkpIiBmaWxsPSIjQjNCNkM1Ii8+PGNpcmNsZSBjeD0iNzYuOTQ0IiBjeT0iMzkuOTU2IiByPSIyLjU0NSIgdHJhbnNmb3JtPSJyb3RhdGUoLTI2LjE0MiA3Ni45NDQgMzkuOTU2KSIgZmlsbD0iI0VERUZGNCIvPjwvZz48L3N2Zz4='
      />
    </motion.div>
  );
}

export default Book;

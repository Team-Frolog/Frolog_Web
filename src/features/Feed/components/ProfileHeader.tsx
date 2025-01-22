'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { runWhenLoggedIn } from '@/utils/runWhenLoggedIn';
import { ChildArrowIcon, MenuIcon } from 'public/icons';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { bottomSheet } from '@/modules/BottomSheet';
import { useReport } from '@/hooks/useReport';
import { useProfile } from '@/hooks/useProfile';
import { useUserId } from '@/store/sessionStore';
import { getImageSrc } from '@/utils/getImageSrc';
import { useFollowUser } from '../hooks/feed/useFollowUser';

interface Props {
  /** 사용 위치 */
  type: 'feed' | 'comment';
  /** 유저 id */
  userId: string;
  /** 삭제 여부 */
  isDeleted?: boolean;
  /** 팔로우 버튼 여부 */
  hasFollow?: boolean;
  /** 자식 댓글의 헤더인지 여부 */
  isChildComment?: boolean;
  /** 삭제 핸들러 */
  onDelete?: () => void;
  /** 프로필 클릭 핸들러 */
  onClick?: () => void;
}

/** 프로필 헤더 컴포넌트
 * - 피드 아이템, 댓글 아이템 등에서 활용됩니다.
 */
function ProfileHeader({
  type,
  userId,
  onDelete,
  onClick,
  isDeleted = false,
  hasFollow = false,
  isChildComment = false,
}: Props) {
  const sessionUserId = useUserId();
  const router = useRouter();
  const isRootUser = sessionUserId === userId;
  const { profile } = useProfile(userId);
  const { handleReport } = useReport(userId);
  const { handleFollow } = useFollowUser();
  const isFeed = type === 'feed';
  const canShowButton =
    (isFeed && !isRootUser) || (!isFeed && !(isDeleted && isRootUser));

  if (!profile) return null;

  const { username, image, follow } = profile;

  const getSheetKey = () => {
    if (isRootUser) {
      return 'delete_this_comment';
    }
    return isFeed ? 'report_this_feed' : 'report_this_comment';
  };

  return (
    <div className='flex w-full items-center justify-between px-page'>
      <button
        type='button'
        onClick={() =>
          runWhenLoggedIn(() => {
            if (onClick) {
              onClick();
            }
            router.push(`/${profile.id}/profile`);
          })
        }
        className='flex items-center gap-[8px]'
      >
        {isChildComment ? (
          <div className='flex items-center gap-[4px]'>
            <ChildArrowIcon />
            <div className='relative flex h-[32px] w-[32px] shrink-0'>
              <Image
                src={
                  image
                    ? getImageSrc(image, 'profile')!
                    : IMAGES.default_profile
                }
                alt='profile image'
                layout='fill'
                unoptimized
                className='rounded-[50%] object-cover'
                placeholder='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyIgdmlld0JveD0iMCAwIDExMyAxMTMiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxjaXJjbGUgY3g9IjU2LjUiIGN5PSI1Ni41IiByPSI1Ni41IiBmaWxsPSIjNkVFRDlDIi8+CjxtYXNrIGlkPSJtYXNrMF8yMzY4XzI2MTM0IiBzdHlsZT0ibWFzay10eXBlOmFscGhhIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTEzIiBoZWlnaHQ9IjExMyI+CjxjaXJjbGUgY3g9IjU2LjUiIGN5PSI1Ni41IiByPSI1Ni41IiBmaWxsPSIjNkVFRDlDIi8+CjwvbWFzaz4KPGcgbWFzaz0idXJsKCNtYXNrMF8yMzY4XzI2MTM0KSI+CjxwYXRoIGQ9Ik0zMS45NDQxIDg1LjQyNDhDMzAuODM2OCA4Ni41NzQ2IDI5LjgxMiA4Ny43OTI2IDI4Ljg2MDkgODkuMDcwN0MyOC44NTU3IDg5LjA3NjcgMjguODUwNiA4OS4wODI2IDI4Ljg0NTcgODkuMDg4NEMyOC43ODMxIDg5LjE2MjQgMjguNzM1NSA4OS4yMzI3IDI4LjcwMDggODkuMjg5NkwyOC42ODQzIDg5LjI5NjVMMjguNDk2OCA4OS42MDgyQzI4LjQxMDQgODkuNzA0IDI4LjM0ODQgODkuNzk0MSAyOC4zMDYxIDg5Ljg2MkMyOC4yNzgyIDg5LjkwNjcgMjguMjU1NiA4OS45NDcgMjguMjM4NSA4OS45NzkxQzI4LjE4MzkgOTAuMDUyOSAyOC4xNDEyIDkwLjEyMzggMjguMTA4MiA5MC4xODU0QzI3Ljk5NzIgOTAuMzEzMiAyNy45MjE3IDkwLjQzNTEgMjcuODcyNCA5MC41MjM3QzI3LjgzODcgOTAuNTg0MiAyNy44MDk0IDkwLjY0NDQgMjcuNzg3NyA5MC42OTFDMjcuNzU3MyA5MC43MjM4IDI3LjczMTQgOTAuNzU0NSAyNy43MDk2IDkwLjc4MTlDMjcuNjg3NSA5MC44MDk4IDI3LjY2NzQgOTAuODM3IDI3LjY0OTMgOTAuODYzTDI3LjU2OTMgOTAuODk0OUwyNy4zNTE0IDkxLjQwMTdDMjcuMjc1MyA5MS40OTY2IDI3LjIyMjUgOTEuNTg0NyAyNy4xODc0IDkxLjY1MDJDMjcuMTgzIDkxLjY1ODMgMjcuMTc4OCA5MS42NjYzIDI3LjE3NDggOTEuNjc0MkMyNy4wOTg5IDkxLjc2NjUgMjcuMDQzMiA5MS44NTQ1IDI3LjAwMjkgOTEuOTI2N0MyNi45NTk4IDkyLjAwMzkgMjYuOTI4MSA5Mi4wNzQxIDI2LjkwNTcgOTIuMTI4OEMyNi44NTMzIDkyLjE5MSAyNi44MTExIDkyLjI1MTEgMjYuNzc3NSA5Mi4zMDQ0TDI2Ljc3MjkgOTIuMzA4MkwyNi43NjQyIDkyLjMyNThDMjYuNzQwNCA5Mi4zNjQ5IDI2LjcyMTUgOTIuMzk5NyAyNi43MDY4IDkyLjQyODJDMjYuNjcyIDkyLjQ5NTggMjYuNjQ3NSA5Mi41NTUxIDI2LjYzMTkgOTIuNTk1MkwyNi42Mjg0IDkyLjYwMjNDMjYuNTk5OCA5Mi42NjA3IDI2LjU3NjUgOTIuNzE0MiAyNi41NTg4IDkyLjc1NzJDMjYuNTQxIDkyLjggMjYuNTI1NyA5Mi44Mzk2IDI2LjUxNDUgOTIuODY5MkwyNi41MDQ2IDkyLjg5NTFDMjYuNDI4MSA5Mi45OTQ2IDI2LjM3NjMgOTMuMDg2NCAyNi4zNDMyIDkzLjE1MTdDMjYuMzI1NCA5My4xODY4IDI2LjMxMDQgOTMuMjE5MyAyNi4yOTgxIDkzLjI0NzlDMjYuMjgzOSA5My4yNzIyIDI2LjI3MTcgOTMuMjk0NSAyNi4yNjEzIDkzLjMxNDNDMjYuMjM3OCA5My4zNTkyIDI2LjIxODkgOTMuNDAwMyAyNi4yMDQxIDkzLjQzNDdDMjYuMTg2NSA5My40NjUyIDI2LjE3MTggOTMuNDkyOSAyNi4xNTk3IDkzLjUxNjhDMjYuMTQzNCA5My41NDkgMjYuMTI5NSA5My41NzkyIDI2LjExNzYgOTMuNjA2NkMyNi4wNzE5IDkzLjY4MTggMjYuMDM5NyA5My43NDYzIDI2LjAxOTcgOTMuNzg3OEMyNi4wMDc1IDkzLjgxMyAyNS45OTYxIDkzLjgzNzkgMjUuOTg1OCA5My44NjFMMjUuODczMSA5My45MzAxTDI1LjcwODcgOTQuNDc4N0MyNS43MDI4IDk0LjQ5ODQgMjUuNjkwMyA5NC41MzIyIDI1LjY1NTUgOTQuNTk4NkMyNS42Mzc0IDk0LjYzMzEgMjUuNjE1NiA5NC42NzIyIDI1LjU4NTcgOTQuNzI0MUMyNS41NzgyIDk0LjczNzIgMjUuNTY2NyA5NC43NTY5IDI1LjU1MzcgOTQuNzc5NEMyNS41MzYzIDk0LjgwOTIgMjUuNTE2MiA5NC44NDM5IDI1LjQ5ODYgOTQuODc0NUMyNS40NDMzIDk0Ljk2NDQgMjUuNDAxOSA5NS4wNDg1IDI1LjM3MTEgOTUuMTE5MUMyNS4zMzM0IDk1LjIwNTMgMjUuMzA2MSA5NS4yODM0IDI1LjI4NjggOTUuMzQzM0MyNS4yNzEzIDk1LjM5MTcgMjUuMjU4NCA5NS40MzY0IDI1LjI0ODcgOTUuNDcxMUMyNS4xODA2IDk1LjU3NDEgMjUuMTMyIDk1LjY3MTggMjUuMDk3IDk1Ljc1NDFDMjUuMDU0MyA5NS44NTQ3IDI1LjAyNyA5NS45NDQxIDI1LjAwOTUgOTYuMDA4OEMyNS4wMDgxIDk2LjAxMzggMjUuMDA2OCA5Ni4wMTg4IDI1LjAwNTUgOTYuMDIzN0MyNC45NTk5IDk2LjEwNDIgMjQuOTI1OSA5Ni4xNzkxIDI0LjkwMDUgOTYuMjQyN0MyNC44NjQxIDk2LjMzMzUgMjQuODQwMyA5Ni40MTQyIDI0LjgyNDcgOTYuNDcyOUwyNC43NzkzIDk2LjU2OTdDMjQuNjk0IDk2Ljc1MTUgMjQuNjQ3NCA5Ni45MTkyIDI0LjYyMTkgOTcuMDE4NkMyNC42MTEgOTcuMDYxMSAyNC42MDE0IDk3LjEwMTcgMjQuNTk0MiA5Ny4xMzI5QzI0LjU3OSA5Ny4xNTU3IDI0LjU2NDggOTcuMTc4MyAyNC41NTE2IDk3LjIwMDdDMjQuNDU4MyA5Ny4zNTc3IDI0LjQwOSA5Ny41MDIyIDI0LjM4MTggOTcuNjAwN0MyNC4zNzgzIDk3LjYxMzQgMjQuMzc1MSA5Ny42MjU5IDI0LjM3MiA5Ny42MzhDMjQuMzMwNCA5Ny43MzA4IDI0LjMwMzcgOTcuODEzNiAyNC4yODYxIDk3Ljg3OEMyNC4yODIyIDk3Ljg5MjQgMjQuMjc4NSA5Ny45MDY1IDI0LjI3NTIgOTcuOTIwMkMyNC4yMjg4IDk4LjAyNTggMjQuMjAxMSA5OC4xMTk1IDI0LjE4MzkgOTguMTg5MkMyNC4xNzcgOTguMjE3IDI0LjE3MTIgOTguMjQzNSAyNC4xNjYzIDk4LjI2ODJMMjQuMTU1IDk4LjMwMjlDMjMuNzA4OCA5OS42Nzk2IDIzLjM5MTkgMTAxLjIxMSAyMy4xMDM4IDEwMi42MDNDMjMuMDMwNCAxMDIuOTU4IDIyLjk1ODggMTAzLjMwNCAyMi44ODc0IDEwMy42MzZDMjIuODQ0OCAxMDMuNjYyIDIyLjc5ODEgMTAzLjY5MiAyMi43NDkgMTAzLjcyNkMyMi43MTUyIDEwMy43NDIgMjIuNjY0MiAxMDMuNzY4IDIyLjYwNTYgMTAzLjgwNEMyMi41Nzc1IDEwMy44MjEgMjIuNTQyMyAxMDMuODQzIDIyLjUwMjYgMTAzLjg3MkwyMi40ODgzIDEwMy44OEwyMi40ODYxIDEwMy44ODFDMjIuNDYxIDEwMy44OTUgMjIuNDA2NyAxMDMuOTI2IDIyLjM0OTMgMTAzLjk2MkMyMi4zMjkgMTAzLjk3NCAyMi4zMDM2IDEwMy45OTEgMjIuMjc0NSAxMDQuMDExQzIxLjk4NjEgMTA0LjE3MiAyMS42NzA2IDEwNC4zNyAyMS4zNzQ1IDEwNC42MTVDMjEuMjI5NSAxMDQuNzA5IDIxLjA4NTggMTA0LjgxNiAyMC45NTUzIDEwNC45MzFDMjAuNzA5OSAxMDUuMTA3IDIwLjQ5MTMgMTA1LjMwNiAyMC4zNjI0IDEwNS40MjRDMjAuMzUwMiAxMDUuNDM1IDIwLjMzODggMTA1LjQ0NSAyMC4zMjgzIDEwNS40NTVMMjAuMzAzNSAxMDUuNDc3QzE5Ljc4MTIgMTA1Ljg2OSAxOS4zNTIgMTA2LjMyNyAxOS4wMDMyIDEwNi43NzJDMTUuNzYzMSAxMTAuMTUgMTQuNTUzNCAxMTQuOTc0IDE1LjIzNDggMTE5LjM2NEMxNS43OTkyIDEyMyAxNy42ODYxIDEyNi40NjIgMjAuOTI4MiAxMjguNTk1QzIwLjM5ODUgMTI5LjEyIDE5LjkxMzMgMTI5Ljc5NCAxOS43Mzk4IDEzMC42QzE5LjUzNTIgMTMxLjU0OSAxOS44MDk3IDEzMi40OCAyMC41MDUzIDEzMy4yMUMyMS4xMzYxIDEzMy44NzEgMjIuMDU0NyAxMzQuMzE1IDIzLjExNzUgMTM0LjYyMUwyMy4xNjY2IDEzNC42MzVMMjMuMjE2NCAxMzQuNjQ2QzI2LjM2NzUgMTM1LjMyNSAyOS41NjAzIDEzNS4wNjQgMzIuNDkxNyAxMzQuNzg0QzMyLjkzNDYgMTM2LjcxOSAzNC4wNDIxIDEzOC4wODggMzUuNjQ2OCAxMzguODM2QzM3LjQyODUgMTM5LjY2NiAzOS41ODMzIDEzOS42MTQgNDEuNTgxNSAxMzkuMTlDNDMuNjE0OSAxMzguNzU4IDQ1LjY5NDMgMTM3Ljg5NyA0Ny40NzQ1IDEzNi44NTdDNDkuMTk3IDEzNS44NTEgNTAuNzYxNyAxMzQuNjA1IDUxLjcyNjIgMTMzLjI5NUM1Mi4yNTg1IDEzMi43MTQgNTIuNjY0IDEzMS45ODYgNTIuNzc1NSAxMzEuMTQxQzUyLjg4NyAxMzAuMjk2IDUyLjY4NjYgMTI5LjQ2MSA1Mi4yMjQzIDEyOC43MDdDNTIuMDU5IDEyOC4yODMgNTEuODcwOCAxMjcuODY5IDUxLjcwMzIgMTI3LjUwMkM1MS42NjUyIDEyNy40MTggNTEuNjI4MiAxMjcuMzM3IDUxLjU5MjggMTI3LjI1OUM1MS4zNzA4IDEyNi43NjcgNTEuMTkxNCAxMjYuMzQzIDUxLjA2NzQgMTI1LjkyMUw1MS4wNTY4IDEyNS44ODVMNTEuMDQ0NCAxMjUuODVDNDkuNDM1OCAxMjEuMjQ3IDQ5LjA0NzYgMTE2LjIxNyA0OS41Nzc3IDExMS4zMThDNDkuNTk2NCAxMTEuMTk4IDQ5LjYxNTEgMTExLjA3OSA0OS42MzM5IDExMC45NThDNTAuMDEzMSAxMDguNTMzIDUwLjQxOCAxMDUuOTQzIDUxLjI2NTQgMTAzLjY0NUM1Mi4xNDA5IDEwMS4yNyA1My40MTM2IDk5LjQyMDQgNTUuNDExMyA5OC40MzA2QzU3LjczMjIgOTcuNjM3NiA1OS41Nzg2IDk4LjEyMDcgNjEuMDI2MiA5OS4yNjcyQzYyLjU1OTMgMTAwLjQ4MSA2My43MzM0IDEwMi41MjQgNjQuMzMzNSAxMDQuODgxTDY0LjM0MDEgMTA0LjkwN0w2NC4zNDc1IDEwNC45MzNDNjYuMzUxNyAxMTEuNzgyIDY2LjQ2NCAxMTkuMjIzIDY0LjE0NjggMTI1LjkxNkw2NC4xNDExIDEyNS45MzJMNjQuMTM1NyAxMjUuOTQ5QzYzLjkzMDMgMTI2LjU5MSA2My42NTc4IDEyNy4xODUgNjMuMzQzIDEyNy44NzFDNjMuMjU1MiAxMjguMDYyIDYzLjE2NCAxMjguMjYxIDYzLjA3MDEgMTI4LjQ3QzYyLjg0ODMgMTI4LjkxIDYyLjU0ODkgMTI5LjU0MSA2Mi40Mzk4IDEzMC4yMzZDNjIuMzIwNyAxMzAuOTk0IDYyLjQyNCAxMzEuODU4IDYzLjAwODggMTMyLjY1QzYzLjkwNTEgMTM0LjA5NCA2NS40ODA0IDEzNS40NTYgNjcuMjI2MSAxMzYuNTUyQzY5LjAyNjcgMTM3LjY4MyA3MS4xNTU4IDEzOC42MjUgNzMuMjQ4NSAxMzkuMTIxQzc1LjMwNTggMTM5LjYwOCA3Ny41Mjg1IDEzOS43MTIgNzkuMzc2NyAxMzguOTEyQzgxLjA2MDkgMTM4LjE4NCA4Mi4yNDA0IDEzNi43OSA4Mi43MTMzIDEzNC43ODNDODUuMzI3OCAxMzUuMDMyIDg4LjA5NDQgMTM1LjIzIDkwLjg3MDkgMTM0Ljg2MUM5My4wMTYzIDEzNC42ODEgOTUuMDM2MSAxMzMuNjU5IDk1LjQwODMgMTMxLjY3NkM5NS42MzI3IDEzMC40ODEgOTUuMTc1MSAxMjkuNDM0IDk0LjM1NDEgMTI4LjYwOEMxMDEuMDkgMTIzLjYyNiAxMDIuMzY0IDExMy41NjcgOTYuMjM4OSAxMDYuODEyQzk1LjgyNTQgMTA2LjI1IDk1LjM0MDggMTA1LjgyNSA5NC45MjIxIDEwNS40OTRDOTQuNzY1NiAxMDUuMzMyIDk0LjYwNzIgMTA1LjIwOCA5NC41MDgzIDEwNS4xMzJDOTQuNDM3MSAxMDUuMDc4IDk0LjM5NDEgMTA1LjA0NiA5NC4zNjM5IDEwNS4wMjNDOTQuMzU0OSAxMDUuMDE2IDk0LjM0NyAxMDUuMDExIDk0LjMzOTkgMTA1LjAwNUM5NC4yNjg3IDEwNC45MzQgOTQuMjAxNCAxMDQuODc5IDk0LjE0NjYgMTA0LjgzNkM5NC4wNTA0IDEwNC43NjIgOTMuOTYxIDEwNC43MDcgOTMuOTE2OCAxMDQuNjhMOTMuOTA5NiAxMDQuNjc2QzkzLjY4OTQgMTA0LjQ3NCA5My40Njg3IDEwNC4zMzQgOTMuMzEzMyAxMDQuMjQxQzkzLjE5MzkgMTA0LjE2OSA5My4xMjkxIDEwNC4xMzIgOTMuMDgyNCAxMDQuMTA2QzkzLjA1ODYgMTA0LjA5MyA5My4wMzk2IDEwNC4wODIgOTMuMDIwNCAxMDQuMDcxQzkyLjk0NiAxMDQuMDEyIDkyLjg3ODQgMTAzLjk2OCA5Mi44MjYyIDEwMy45MzdDOTIuODIyMSAxMDMuOTM0IDkyLjgxOCAxMDMuOTMyIDkyLjgxMzkgMTAzLjkzTDkyLjc2MDkgMTAzLjgxNkw5Mi4zMDggMTAzLjY0NEw5Mi4zMDY2IDEwMy42MzVDOTEuNzkzNyA5OS44MTQgOTAuNTAxOSA5Ni4xNTEyIDg4LjY5NzUgOTIuODA3MkM4Ny4wODkzIDg5Ljc3NjEgODQuOTc1NiA4Ny4wOTcyIDgyLjU4MjMgODQuNzI0OEM5NC44MjY4IDc4LjQ5OTggMTAxLjMwMiA2OS4xMTA3IDEwMS40OTYgNTkuMjcxNEMxMDEuNjk2IDQ5LjA5MzMgOTUuMTYyMiAzOS4wMTc2IDgyLjU3ODQgMzIuMDg2M0M4MS44MTkxIDMxLjQ4NiA4MS4yOTgzIDMwLjU3NTkgODAuNzQ5MyAyOS4zMjc4QzgwLjY0MzMgMjkuMDg2OCA4MC41MzQyIDI4LjgyNjYgODAuNDE5OSAyOC41NTRDNzkuOTg4NCAyNy41MjUxIDc5LjQ4MjggMjYuMzE5NSA3OC43OTA1IDI1LjMwMjFDNzcuMzg5MyAyMi42MjczIDc1Ljc3NzggMTkuOTUxOSA3My42NjM0IDE3LjYwMjFDNzAuNTk3NiAxNC4xMTA2IDY2LjUzMjcgMTIuMTE5OCA2Mi43ODk3IDEyLjU2QzYwLjg5MDcgMTIuNzgzNCA1OS4xMzIxIDEzLjYzNDUgNTcuNzQ1MiAxNS4xNTU4QzU3LjI4NjkgMTUuNjU4NiA1Ni44NzY0IDE2LjIyNjMgNTYuNTE2NSAxNi44NTczQzU1LjIzOTEgMTQuNjIzNiA1My4yNjA1IDEzLjIwNDIgNTAuOTEwMyAxMi43MTE0QzQ3LjM0MjkgMTEuOTYzMyA0My4zMzEzIDEzLjQ0MjIgNDAuMjkyMyAxNi42NDI2QzM2LjE1NjYgMjAuNzM5NCAzMy42Nzk0IDI2LjA4NzUgMzEuNDA3NiAzMC45OTIyQzMxLjM1MTMgMzEuMTEzNyAzMS4yOTUxIDMxLjIzNDkgMzEuMjM5MSAzMS4zNTU4QzMwLjkwOTEgMzEuODE4NiAzMC4zNzQyIDMyLjE5OTEgMjkuNTU1OCAzMi42NDkzQzI5LjM5NTggMzIuNzM3MyAyOS4yMTc3IDMyLjgzMTEgMjkuMDI3OCAzMi45MzExQzI4LjMzNTkgMzMuMjk1NSAyNy40ODcxIDMzLjc0MjYgMjYuNzg2NyAzNC4yOTI1QzE0Ljk5MzIgNDIuMjA3MSAxMC4xODU4IDUyLjUyODggMTEuODAzMSA2Mi4zOTRDMTMuMzMxNiA3MS43MTc1IDIwLjUyNzcgODAuMTY0MyAzMS45NDQxIDg1LjQyNDhaTTIwLjE4MDQgMTA1LjYwOUMyMC4xNzg4IDEwNS42MTEgMjAuMTc5MSAxMDUuNjEgMjAuMTgwOSAxMDUuNjA4TDIwLjE4MDQgMTA1LjYwOVpNMjUuMjM5MiA5Ni4wMDU1TDI1LjIzMjcgOTYuMDEwM0MyNS4yMzQ5IDk2LjAwODcgMjUuMjM3IDk2LjAwNzEgMjUuMjM5MiA5Ni4wMDU1Wk0yNi41ODk5IDkyLjcxNDRDMjYuNTg4OSA5Mi43MTc1IDI2LjU4OTMgOTIuNzE2IDI2LjU5MDQgOTIuNzEyOEwyNi41ODk5IDkyLjcxNDRaTTI4LjU5NTQgODkuODAxN0wyOC41ODQ3IDg5LjgwN0MyOC41ODgyIDg5LjgwNTMgMjguNTkxOCA4OS44MDM1IDI4LjU5NTQgODkuODAxN1oiIHN0cm9rZT0iIzAwQ0U0QyIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxjaXJjbGUgY3g9IjQ4LjQyNSIgY3k9IjMxLjQyNSIgcj0iNC40MjQ5NiIgZmlsbD0iIzAwQ0U0QyIvPgo8Y2lyY2xlIGN4PSI2NS4zODc4IiBjeT0iMzEuNDI1IiByPSI0LjQyNDk2IiBmaWxsPSIjMDBDRTRDIi8+CjxwYXRoIGQ9Ik00OS43MzA1IDQ5LjUyMTVDNTIuOTA3NCA1Mi42OTg0IDU2Ljk5MTkgNDkuNTIxNSA1Ni45OTE5IDQ5LjUyMTVDNTguMjAyMiA1MC41ODA0IDYxLjI1ODEgNTIuMDYzIDYzLjc5OTYgNDkuNTIxNSIgc3Ryb2tlPSIjMDBDRTRDIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI0OS43MzE0IiBjeT0iMzAuMjkiIHI9IjEuODE1MzciIGZpbGw9IiM2RUVEOUMiLz4KPGNpcmNsZSBjeD0iNjYuOTc3NSIgY3k9IjMwLjI5IiByPSIxLjgxNTM3IiBmaWxsPSIjNkVFRDlDIi8+CjwvZz4KPC9zdmc+Cg=='
              />
            </div>
          </div>
        ) : (
          <div className='relative flex h-[40px] w-[40px] shrink-0'>
            <Image
              src={
                image ? getImageSrc(image, 'profile')! : IMAGES.default_profile
              }
              alt='profile image'
              layout='fill'
              className='rounded-[50%] object-cover'
            />
          </div>
        )}

        <h5 className='text-body-lg-bold text-gray-600'>{username}</h5>
      </button>
      <div className='flex items-center gap-[8px]'>
        {hasFollow && !isRootUser && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                handleFollow({ id: userId, value: !follow })
              )
            }
            className={follow ? 'following-tag' : 'not-following-tag'}
          >
            {follow ? '팔로잉' : '팔로우'}
          </button>
        )}
        {canShowButton && (
          <button
            type='button'
            onClick={() =>
              runWhenLoggedIn(() =>
                bottomSheet.open({
                  sheetKey: getSheetKey(),
                  onClick: !isFeed && isRootUser ? onDelete : handleReport,
                })
              )
            }
          >
            <MenuIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProfileHeader;

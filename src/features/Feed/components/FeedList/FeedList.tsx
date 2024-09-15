'use client';

import React from 'react';
import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { AnimatePresence } from 'framer-motion';
import AlertBottomSheet from '@/layouts/AlertBottomSheet';
import { sheetData } from '@/data/ui/bottomSheet';
import { useAlertSheetState } from '@/store/popUpStore';
import { useReport } from '@/hooks/useReport';
import FeedItem from './FeedItem';

function FeedList() {
  const isOpenAlertSheet = useAlertSheetState();
  const { handleReport } = useReport();

  return (
    <div className='flex h-fit w-full flex-col gap-[36px]'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <Image
        src={IMAGES.frog.more_feed}
        alt='more feed'
        width={254}
        height={172}
        className='mx-auto'
      />
      <AnimatePresence>
        {isOpenAlertSheet && (
          <AlertBottomSheet
            sheetData={sheetData.report_this_feed}
            onClick={handleReport}
          >
            <p>{sheetData.report_this_feed.description!()}</p>
          </AlertBottomSheet>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FeedList;

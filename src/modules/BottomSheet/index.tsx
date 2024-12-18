'use client';

import { createRoot } from 'react-dom/client';
import { BottomSheetKeys } from '@/data/ui/bottomSheet';
import BottomSheetContainer from './BottomSheetContainer';

export interface BottomSheetProps {
  sheetKey: BottomSheetKeys;
  children?: React.ReactNode;
  onClick?: () => void;
  onClickSubButton?: () => void;
  onClose?: () => void;
  titleProp?: string;
}

class BottomSheet {
  /** 바텀시트를 렌더링 할 부모 div */
  private portal: HTMLElement | null = null;
  /** 부모 div로 만든 root */
  private root: any = null;
  /** 바텀시트 데이터 */
  private bottomSheet: BottomSheetProps | null = null;

  /** root를 만드는 초기화 함수 */
  private initialize() {
    if (!this.portal) {
      this.portal = document.getElementById('portal');
      if (this.portal) {
        this.root = createRoot(this.portal);
      }
    }
  }

  /** 바텀시트 렌더링 함수 */
  private render() {
    if (this.root) {
      this.root.render(<BottomSheetContainer bottomSheet={this.bottomSheet} />);
    }
  }

  /** 시트 데이터를 세팅하고 렌더링 함수를 호출하는 함수 */
  private setSheet(props: BottomSheetProps | null) {
    if (props === null) {
      this.bottomSheet = null;
    } else {
      this.bottomSheet = props;
    }
    this.render();
  }

  /** 바텀시트 닫힘 핸들러 */
  closeSheet() {
    this.bottomSheet = null;
    this.render();
  }

  /** 바텀시트 오픈 핸들러 */
  open(props: BottomSheetProps) {
    this.initialize();
    this.setSheet(props);
  }
}

/** 바텀시트 컴포넌트
 * @param sheetKey - 바텀시트 데이터 객체 키
 * @param onClick - 메인 버튼 핸들러 (optional)
 * @param onClickSubButton - 서브 버튼 핸들러 (optional)
 * @param onClose - 바텀시트 닫힘 핸들러 (optional)
 * @param titleProp - 동적 타이틀을 위한 props (optional)
 */
const bottomSheet = new BottomSheet();

export { bottomSheet };

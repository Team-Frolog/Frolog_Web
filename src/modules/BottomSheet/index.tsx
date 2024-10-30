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
  private portal: HTMLElement | null = null;
  private root: any = null;
  private bottomSheet: BottomSheetProps | null = null;

  private initialize() {
    if (!this.portal) {
      this.portal = document.getElementById('portal');
      if (this.portal) {
        this.root = createRoot(this.portal);
      }
    }
  }

  private render() {
    if (this.root) {
      this.root.render(<BottomSheetContainer bottomSheet={this.bottomSheet} />);
    }
  }

  private setSheet(props: BottomSheetProps | null) {
    if (props === null) {
      this.bottomSheet = null;
    } else {
      this.bottomSheet = props;
    }
    this.render();
  }

  closeSheet() {
    this.bottomSheet = null;
    this.render();
  }

  open(props: BottomSheetProps) {
    this.initialize();
    this.setSheet(props);
  }
}

const bottomSheet = new BottomSheet();

export { bottomSheet };

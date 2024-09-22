'use client';

import { createRoot } from 'react-dom/client';
import FlashPage from './Flash';

export interface FlashProps {
  flashType: 'review' | 'well';
  callbackUrl: string;
  bookTitle?: string;
}

class Flash {
  private portal: HTMLElement | null = null;
  private root: any = null;
  private flash: FlashProps | null = null;

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
      if (this.flash) {
        document.body.style.overflow = 'hidden';
        document.body.style.pointerEvents = 'none';
        this.root.render(<FlashPage flash={this.flash} />);
      } else {
        document.body.style.overflow = 'auto';
        document.body.style.pointerEvents = 'auto';
        this.root.render(null);
      }
    }
  }

  private setFlash(props: FlashProps | null) {
    if (props === null) {
      this.flash = null;
    } else {
      this.flash = props;

      setTimeout(() => {
        window.location.replace(props.callbackUrl);
        setTimeout(() => {
          this.flash = null;
          this.render();
        }, 500);
      }, 2500);
    }
    this.render();
  }

  open(props: FlashProps) {
    this.initialize();
    this.setFlash(props);
  }
}

const flash = new Flash();

export { flash };

'use client';

import { createRoot } from 'react-dom/client';
import ToastContainer from './ToastContainer';

export interface ToastProps {
  type: 'normal' | 'error';
  text: string;
}

class Toast {
  private toastRoot: HTMLElement | null = null;
  private root: any = null;
  private toast: ToastProps | null = null;
  private isDisplaying: boolean = false;

  private initialize() {
    if (!this.toastRoot) {
      this.toastRoot = document.getElementById('toast-root');
      if (this.toastRoot) {
        this.root = createRoot(this.toastRoot);
      }
    }
  }

  private render() {
    if (this.root) {
      this.root.render(<ToastContainer toast={this.toast} />);
    }
  }

  private setToast(type: 'normal' | 'error' | null, message?: string) {
    if (type === null) {
      this.toast = null;
    } else {
      this.toast = { type, text: message! };
      this.isDisplaying = true;

      setTimeout(() => {
        this.toast = null;
        this.isDisplaying = false;
        this.render();
      }, 3000);
    }
    this.render();
  }

  normal(message: string) {
    this.initialize();
    if (!this.isDisplaying) {
      this.setToast('normal', message);
    }
  }

  error(message: string) {
    this.initialize();
    if (!this.isDisplaying) {
      this.setToast('error', message);
    }
  }
}

const toast = new Toast();

export { toast };

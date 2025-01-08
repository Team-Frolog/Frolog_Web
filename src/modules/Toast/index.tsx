'use client';

import { createRoot } from 'react-dom/client';
import ToastContainer from './ToastContainer';

export interface ToastProps {
  /** 토스트 타입 - 'normal', 'error' */
  type: 'normal' | 'error';
  /** 토스트 메세지 */
  text: string;
}

class Toast {
  /** 토스트를 렌더링 할 부모 div */
  private toastRoot: HTMLElement | null = null;
  /** 부모 div로 만든 root */
  private root: any = null;
  /** 토스트 데이터 */
  private toast: ToastProps | null = null;
  /** 렌더링 여부 */
  private isDisplaying: boolean = false;

  /** root를 만드는 초기화 함수 */
  private initialize() {
    if (!this.toastRoot) {
      this.toastRoot = document.getElementById('toast-root');
      if (this.toastRoot) {
        this.root = createRoot(this.toastRoot);
      }
    }
  }

  /** 토스트를 렌더링하는 함수 */
  private render() {
    if (this.root) {
      this.root.render(<ToastContainer toast={this.toast} />);
    }
  }

  /** 토스트 데이터를 세팅하고 렌더링 함수를 호출하는 함수 */
  private setToast(type: 'normal' | 'error' | null, message?: string) {
    if (type === null) {
      this.toast = null;
    } else {
      this.toast = { type, text: message! };
      this.isDisplaying = true;

      // 3초 뒤 렌더링 제거
      setTimeout(() => {
        this.toast = null;
        this.isDisplaying = false;
        this.render();
      }, 3000);
    }
    this.render();
  }

  /** 체크 표시 아이콘 토스트 */
  normal(message: string) {
    this.initialize();
    if (!this.isDisplaying) {
      this.setToast('normal', message);
    }
  }

  /** 에러 아이콘 토스트 */
  error(message: string) {
    this.initialize();
    if (!this.isDisplaying) {
      this.setToast('error', message);
    }
  }
}

/** toast 모듈
 * @param type - 'normal', 'error'
 * @param text - 토스트 메세지
 */
const toast = new Toast();

export { toast };

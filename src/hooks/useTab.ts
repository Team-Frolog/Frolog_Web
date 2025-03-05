import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export const useTab = (initialTab: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const tab = useSearchParams().get('currentTab') || initialTab;

  const changeTab = (label: string) =>
    router.replace(`${pathname}?currentTab=${label}`);

  return { tab, changeTab };
};

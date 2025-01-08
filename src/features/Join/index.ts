export { default as FinishLight } from './components/FinishLight';
export { default as JoinForm } from './components/JoinForm';
export { checkNickname } from './api/join.api';
export { default as TestStartButton } from './components/TestStartButton';
export {
  consentsKeys,
  defaultValue,
  requiredConsentsKeys,
} from './data/joinForm';
export { useJoin } from './hooks/useJoin';
export type { JoinForm as JoinFormType, InfoName } from './types/form';

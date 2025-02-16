import React from 'react';

interface Props {
  condition: boolean;
  fallback: React.ReactNode;
  children: React.ReactNode;
}

function WithConditionalRendering({ condition, fallback, children }: Props) {
  return <>{condition ? children : fallback}</>;
}

export default WithConditionalRendering;

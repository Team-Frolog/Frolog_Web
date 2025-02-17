import React from 'react';

interface Props {
  condition: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

function WithConditionalRendering({ condition, fallback, children }: Props) {
  return <>{condition ? children : fallback}</>;
}

export default WithConditionalRendering;

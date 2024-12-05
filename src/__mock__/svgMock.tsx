import React, { SVGProps } from 'react';

export const MockIcon = React.forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>((props, ref) => <svg ref={ref} {...props} />);

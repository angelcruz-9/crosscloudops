// TypeAnimationComponent.tsx
import React, { memo } from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationComponent: React.FC = memo(() => (
  <TypeAnimation
    sequence={[
      "Cross Cloud Ops",
      1000, // Wait 1s before next line
      "",
      1000, // Wait 2s before sequence restarts
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
  />
));

export default TypeAnimationComponent;

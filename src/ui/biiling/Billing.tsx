import React from 'react';

export interface BillingProps {
  c: string;
  d: string;
}

const Billing = (props: BillingProps) => {
  return (
    <div>
      C: {props.c}
      D: {props.d}
    </div>
  );
};

export default Billing;

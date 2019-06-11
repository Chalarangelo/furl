import React, { useLayoutEffect, useRef } from 'react';

/* istanbul ignore next */
function useEffectOnUpdate (fn, params) {
  const firstUpdate = useRef(true);

  // Only run if this is not the first update.
  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    fn();
  }, params);
}

export default useEffectOnUpdate;

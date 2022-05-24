import { RefObject, useEffect, useRef } from "react";

interface Ref<T> extends HTMLElement {
  current: T;
}

export function useRefFocusOnMount<T>(): [RefObject<Ref<T>>, () => void] {
  const ref = useRef<Ref<T>>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  function focusOnRef() {
    if (ref.current) {
      ref.current.focus();
    }
  }

  return [ref, focusOnRef];
}

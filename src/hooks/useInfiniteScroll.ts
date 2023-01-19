import { useEffect, useRef } from 'react';

interface Params<T> {
  data: T;
  targetLastIndex: number;
  onIntersect: () => Promise<T>;
  options?: IntersectionObserverInit;
}

const observerCallback =
  (onIntersect: () => Promise<unknown>): IntersectionObserverCallback =>
  async ([entry], observer) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      await onIntersect();
    }
  };

function useInfiniteScroll<T extends Element, U = unknown>({
  data,
  targetLastIndex,
  onIntersect,
  options
}: Params<U>) {
  const target = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback(onIntersect), {
      ...options
    });

    const lastChild = target.current?.lastElementChild;
    if (lastChild && lastChild.tagName === 'LI') {
      const children = [...target.current.children];
      const targetChild = children.at(
        children.length < targetLastIndex ? -1 : -targetLastIndex
      );
      if (targetChild) {
        observer.observe(targetChild);
      }
    }

    return () => observer.disconnect();
  }, [target, onIntersect, targetLastIndex, data, options]);

  return target;
}

export default useInfiniteScroll;

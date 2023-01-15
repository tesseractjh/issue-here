import { createContext } from 'react';

export type FilterContextValue<T = Element> = {
  id: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: React.MouseEventHandler<T>;
};

const FilterContext = createContext<FilterContextValue | null>(null);

export default FilterContext;

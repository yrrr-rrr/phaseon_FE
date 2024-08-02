import React, { createContext, useMemo, useState } from 'react';
import { CategoryContextType } from '../interface';

export const CategoryContext = createContext<CategoryContextType>({
  currentCategory: '',
  setCurrentCategory: () => {},
});

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState('information');
  const value = useMemo(() => ({ currentCategory, setCurrentCategory }), [currentCategory, setCurrentCategory]);

  return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
}

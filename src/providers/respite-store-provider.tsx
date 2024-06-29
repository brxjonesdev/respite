'use client';

import { ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import {
  RespiteStore,
  createRespiteStore,
  initRespiteStore
} from '@/stores/respite-store';

export type RespiteStoreApi = ReturnType<typeof createRespiteStore>;

export const RespiteStoreContext = createContext<RespiteStoreApi | undefined>(
  undefined
);

export interface RespiteStoreProviderProps {
  children: ReactNode;
}

export const RespiteStoreProvider = ({
  children
}: RespiteStoreProviderProps) => {
  const storeRef = useRef<RespiteStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createRespiteStore(initRespiteStore());
  }

  return (
    <RespiteStoreContext.Provider value={storeRef.current}>
      {children}
    </RespiteStoreContext.Provider>
  );
};

export const useRespiteStore = <T,>(
  selector: (store: RespiteStore) => T
): T => {
  const respiteStore = useContext(RespiteStoreContext);

  if (!respiteStore) {
    throw new Error(`useRespiteStore must be used within RespiteStoreProvider`);
  }

  return useStore(respiteStore, selector);
};

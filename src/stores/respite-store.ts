import { createStore } from 'zustand/vanilla';
import { Entry } from '@/components/dashboard/entries';

export type RespiteStoreState = {
  respiteEntries: Entry[];
};

export type RespiteStoreActions = {
  addRespiteEntry: (entry: Entry) => void;
  removeRespiteEntry: (entry: Entry) => void;
  updateRespiteEntry: (entry: Entry) => void;
};

export type RespiteStore = RespiteStoreState & RespiteStoreActions;

export const initRespiteStore = (): RespiteStoreState => {
  // This will be the initial state of the store, we will need to connect this to the database
  return {
    respiteEntries: []
  };
};

export const defaultInitState: RespiteStoreState = {
  respiteEntries: []
};

export const createRespiteStore = (
  initState: RespiteStoreState = defaultInitState
) => {
  return createStore<RespiteStore>()((set) => ({
    ...initState,
    addRespiteEntry: (entry: Entry) =>
      set((state) => ({
        respiteEntries: [...state.respiteEntries, entry]
      })),
    removeRespiteEntry: (entry: Entry) => {
      set((state) => ({
        respiteEntries: state.respiteEntries.filter((e) => e !== entry)
      }));
    },
    updateRespiteEntry: (entry: Entry) => {
      set((state) => ({
        respiteEntries: state.respiteEntries.map((e) =>
          e === entry ? entry : e
        )
      }));
    }
  }));
};

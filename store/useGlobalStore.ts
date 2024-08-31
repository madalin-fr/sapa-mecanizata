import { defineStore } from 'pinia'

interface GlobalState {
  type: string
}

export const useGlobalStore = defineStore('globalStore', {
  state: (): GlobalState => ({
    type: '',  // Initialize with an empty string or handle dynamically
  }),
  actions: {
    setType(newType: string) {
      this.type = newType
    }
  }
})

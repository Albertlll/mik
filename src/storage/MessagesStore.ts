import { create } from "zustand";
import { messageDataProps } from "./interfaces";
import { ImessageStore } from './interfaces'



export const useMessagesStore = create<ImessageStore>()((set) => ({
    messages: [],
    addMessage: (newMessage : messageDataProps) => set((state) => ({messages: [...state.messages, newMessage]})),
}))
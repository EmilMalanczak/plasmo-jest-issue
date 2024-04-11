import { Storage } from "@plasmohq/storage"

export const saveToStorage = async (key: string, value: any) => {
  const storage = new Storage({
    area: "sync"
  })
  await storage.set(key, value)
}

import { describe, expect, it } from "@jest/globals"

import { saveToStorage } from "~contents/storage"

describe("test contents/storage", () => {
  it("should have called a webextension API", async () => {
    await saveToStorage("key", "value")
    expect(chrome.storage.sync.set).toHaveBeenCalled()
  })
})

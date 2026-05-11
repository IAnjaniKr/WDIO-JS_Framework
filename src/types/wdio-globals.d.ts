import type { ChainablePromiseArray, ChainablePromiseElement } from 'webdriverio'

declare global {
    const browser: WebdriverIO.Browser
    const $: (selector: string) => ChainablePromiseElement<WebdriverIO.Element>
    const $$: (selector: string) => ChainablePromiseArray<WebdriverIO.Element[]>
}

export {}

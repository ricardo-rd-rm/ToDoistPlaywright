import type { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  testDir: './e2e_BE',
  
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  use: {
    headless: true,
    screenshot:"on",
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  projects: [

      //API test
     {
        name:'API',
        use:{
          baseURL:'https',
          extraHTTPHeaders:{
            'Authorization': `Bearer ${process.env.API_TOKEN}`
          }
        }
     }

    ],
};

export default config;
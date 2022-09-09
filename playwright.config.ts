import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config()

const config: PlaywrightTestConfig = {
  testDir: './e2e_FE',
  
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /*reporter: [["dot"], ["json",{outputFile: "test-results.json"}],
  ['experimental-allure-playwright']],*/
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  
    headless:false,
    screenshot:"on",
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport:{
          width:1280,
          height:920
        }
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        viewport:{
          width:1280,
          height:920
        }
      },
    },

   /* {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport:{
          width:1280,
          height:920
        }
      },
    },*/
    // Test against mobile viewports. 
   /* {
      name: 'iPad Pro',
      use:{
        ...devices['iPad Pro 11']
      }
    },*/
     {
      name: 'Mobile Chrome',
      use: {
        ...devices['Pixel 5'],
      }
    },
     /* {
      name: 'Samsung',
      use: {
        ...devices['Galaxy S9+ landscape'],
      },
     },*/
  ],
};

export default config;

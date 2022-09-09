import {test as baseTest } from '@playwright/test';
import { CREDENTIALS } from '../data/users';

const users = [
    {username: CREDENTIALS.VALID_USER.USERNAME, password: CREDENTIALS.VALID_USER.PASSWORD },
    {username: CREDENTIALS.INVALID_USER.USERNAME, password: CREDENTIALS.INVALID_USER.PASSWORD}

    
];


/*export const test = baseTest.extend({
  storageState: async ({ browser }, use, testInfo) => {
    // Override storage state, use worker index to look up logged-in info and generate it lazily.
    const fileName = path.join(testInfo.project.outputDir, 'storage-' + testInfo.workerIndex);
    if (!fs.existsSync(fileName)) {
      // Make sure we are not using any other storage state.
      const page = await browser.newPage({ storageState: undefined });
    }
    await use(fileName);
  },
});*/


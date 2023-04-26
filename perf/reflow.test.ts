import {test, expect} from '@playwright/test';

test('no long tasks after button click', async ({page}) => {
    // Navigate to the specified URL
    await page.goto('https://googlesamples.github.io/web-fundamentals/tools/chrome-devtools/rendering-tools/forcedsync.html');

    // Define a function to observe long tasks
    const observeLongTasks = async (): Promise<number> => {
        return await page.evaluate(() => {
            return new Promise<number>((resolve) => {
                let longTaskCount = 0;

                // Create a PerformanceObserver to observe long tasks
                const observer = new PerformanceObserver((entryList) => {
                    for (const entry of entryList.getEntries()) {
                        if (entry.entryType === 'longtask') {
                            longTaskCount++;
                        }
                    }
                });

                // Start observing long tasks
                observer.observe({entryTypes: ['longtask']});

                // Click the button
                const button = document.querySelector('button');
                button.click();

                // Wait for a short time to allow long tasks to be recorded
                setTimeout(() => {
                    // Stop observing and resolve the promise with the count of long tasks
                    observer.disconnect();
                    resolve(longTaskCount);
                }, 3000);
            });
        });
    };

    // Observe long tasks after clicking the button
    const longTaskCount = await observeLongTasks();

    // Expect no long tasks to occur
    expect(longTaskCount).toBe(0);
});

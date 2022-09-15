import { join } from 'path';

describe('Uploading files', () => {
  it('should be able to upload a file', async () => {
    // The name of the file that needs to be uploaded
    const fileName = 'some-file.txt';

    // 1a.  Load the browser
    await browser.url('/upload');

    // 2a.  Upload the file by adding the location to the file on the machine,
    await $('#file-upload').setValue(join(process.cwd(), 'assets', fileName));
    // 2b.  Submit the file upload
    await $('#file-submit').click();

    // 3a.  Wait for the text to be visible, we are now validating it with the uploaded file container to be visible
    await $('#uploaded-files').waitForDisplayed(15000);
    // 3b.  Do the verification
    await expect(await $('#uploaded-files').getText()).toContain(fileName);
  });
});

/**
 * Gaikwad Sardar Wada — contact form backend.
 *
 * Setup:
 * 1. Create a Google Sheet (any name) to collect submissions.
 * 2. In the Sheet: Extensions > Apps Script, delete any placeholder code,
 *    and paste this whole file in.
 * 3. Set NOTIFY_EMAIL below to the address that should receive enquiry emails.
 * 4. Deploy > New deployment > type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy, authorize the requested permissions, then copy the Web
 *    app URL it gives you.
 * 5. Paste that URL into GOOGLE_SCRIPT_URL in src/views/ContactUs.vue.
 *
 * Whenever you change this code, you must create a NEW deployment version
 * (Deploy > Manage deployments > edit > New version) for the changes to
 * take effect on the existing URL.
 */

const NOTIFY_EMAIL = 'gaikwadsardarwada@gmail.com';
const SHEET_NAME = 'Submissions';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Subject', 'Message']);
    }

    const data = e.parameter;
    const timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.firstName || '',
      data.lastName || '',
      data.email || '',
      data.phone || '',
      data.subject || '',
      data.message || ''
    ]);

    const subject = ('New enquiry — ' + (data.firstName || '') + ' ' + (data.lastName || '')).trim();
    const body = [
      'New enquiry from the Gaikwad Sardar Wada website:',
      '',
      'Name: ' + (data.firstName || '') + ' ' + (data.lastName || ''),
      'Email: ' + (data.email || ''),
      'Phone: ' + (data.phone || ''),
      'Subject: ' + (data.subject || ''),
      '',
      'Message:',
      data.message || '(none)',
      '',
      'Submitted: ' + timestamp.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    ].join('\n');

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: data.email || undefined,
      subject: subject,
      body: body
    });

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

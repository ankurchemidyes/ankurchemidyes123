# Update Contact Form Apps Script URL

## Change
Replace the Google Apps Script Web App URL in `src/components/Contact.tsx` with the new endpoint that includes additional email recipients.

- **Current URL:** `https://script.google.com/macros/s/AKfycbwviLrG0x8RQMaUK5zRPpGaTqbcffAkHvDgXoG1XW8ZW1RVCquy_26DUrm1CxiE0OAd/exec`
- **New URL:** `https://script.google.com/macros/s/AKfycbxUqQEfxL6SSr8JiQrw14FIR2buOpPt1axXr-WkTEMFI_Urj4PXYrN2NR7P7LRVdQuj/exec`

## Unchanged
All other form behavior stays identical:
- POST request method
- JSON body (`JSON.stringify({ name, email, requirements })`)
- Header `Content-Type: text/plain;charset=utf-8` (avoids CORS preflight)
- Submit button disabled while sending
- Success/error toast notifications
- Field validation

## Scope
Single line edit in `src/components/Contact.tsx` (the `APPS_SCRIPT_URL` constant).

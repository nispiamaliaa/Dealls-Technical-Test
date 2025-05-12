# 🐞 Bug Report: Wrong Redirection to *.run.app

**Reported By:** Nispi Amalia Adila  
**Date Reported:** 11/05/2025  
**Priority:** High  
**Severity:** Major  

## Environment
- URL: https://dev.dealls.com
- Browser: Chrome 135.0.7049.115
- Device: Macbook Pro M1

## Preconditions:
- Access the dev environment via https://dev.dealls.com/
- No ad blockers, extensions, or VPN interfering with routing

### Investigation Steps:
1. Try the Bug on the Website: Confirm the issue and understand which links are broken.
    - Open https://dev.dealls.com and click all the affected buttons and links.
    - See where they lead — are they redirecting to the wrong domain (*.run.app)?

2. Inspect the Link Code: Goal: Find out if the issue is from how the link is built in the frontend.
    - Right-click a link → “Inspect” → check the href or onClick code.
    - See if the wrong domain is written directly in the code.

3. Use DevTools (Network & Console): Check for redirects and environment variable issues.
    - Go to the DevTools:
    - Network tab: Click a link and see where it sends the request.
    - Console tab: Look for errors or missing values in the logs.

4. Search the Code: Identify the exact line or function building the wrong link.
    - Look for NEXT_PUBLIC_WEB_URL or any hardcoded domain like *.run.app.
    - Check if a default or fallback is being used.

5. Check .env File or CI/CD Config: Ensure the frontend uses the correct domain from the environment.
    - Open .env.development or CI/CD settings.
    - Make sure values like this are set:
    - NEXT_PUBLIC_WEB_URL=https://dev.dealls.com

6. Test the API or CMS (If Links Come from Backend): Find out if the issue is coming from backend or CMS settings.
    - Use Postman or browser tools to call the API.
    - See if it returns links with the wrong domain.

7. Review Deployment Setup: Catch any wrong
    - Check the build config (e.g., next.config.js or runtime config).
    - Make sure no defaults are pointing to *.run.app.

### Information Gathering:
1. Page name/link clicked
    - “Drop Your CV & Wait for Offers”
    - “See More Companies”
    - “See More Jobs”
    - “See All Jobs”
    - “Post Job for Free”
    - “Jobs”
    - “Companies”
    - Any individual job listing
2. Expected result: Each button or link should redirect the user to the correct internal URL: https://dev.dealls.com/...
3. Actual result: Most CTAs redirect to an incorrect domain: https://job-portal-user-dev-skx7zw44dq-et.a.run.app/...
4. Screenshot or screen recording: https://jam.dev/c/7dc854e5-6912-4e1d-b625-1403308a6fcc 

### Potential Root Causes:
1. Wrong or missing environment variable (NEXT_PUBLIC_WEB_URL)
2. Hardcoded the wrong link in code
3. API or CMS returning the wrong URL
4. Wrong build or deployment setting

### Reproduction Strategy: 
1. Open the dev site: Go to https://dev.dealls.com in incognito mode.
2. Click the affected links: Try to open all the links affected
3. Check where the link goes: See if it goes to the wrong domain (like *.run.app) instead of staying on dev.dealls.com
4. Inspect the link: Right-click → Inspect → Check the href. See if the wrong domain is used
5. Open DevTools Console: Look for errors or warnings
6. Check the environment setting: Make sure NEXT_PUBLIC_WEB_URL=https://dev.dealls.com is correctly set in .env or the deployment config.
7. Fix and retest: After the fix, repeat steps 1–4 to confirm the issue is resolved

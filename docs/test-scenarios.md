# Test Scenarios Documentation

This document outlines the key test scenarios to validate the end-to-end functionality, usability, security, and performance of the Dealls Mentoring Platform. These scenarios are structured to cover both typical user flows and edge cases across roles (mentee and mentor), with an emphasis on automation-readiness and maintainability.

---

## 1. Authentication & Access Management

| Test Case | Objective |
|-----------|-----------|
| Register as a mentee or mentor | Ensure successful user registration with valid inputs. |
| Login with valid and invalid credentials | Verify correct access behavior and error messages. |
| Logout and session expiration | Confirm session invalidation on logout and timeout. |
| Password reset & email verification | Validate recovery flow and email-based confirmation. |
| Role-based access control | Restrict access to specific features by user role. |

---

## 2. Mentor Discovery & Filtering

| Test Case | Objective |
|-----------|-----------|
| Search by name, company, role, industry, university, major, or topic | Confirm accurate and relevant search results. |
| Apply sorting and level-based filters | Ensure correct sorting (e.g. most relevant, newest) and filter logic. |
| Filter by career or academic focus (S1/S2) | Validate tailored mentor listings. |
| Combine multiple filters | Test intersectional filtering without conflicts. |
| Handle zero-result queries | Display informative empty state messaging. |

---

## 3. Mentor Profile & Listings

| Test Case | Objective |
|-----------|-----------|
| View mentor list with pagination and sorting | Validate performance and accurate data rendering. |
| Access individual mentor profiles | Ensure all sections (bio, expertise, availability) load correctly. |
| Bookmark/save mentors | Allow users to save or unsave mentors. |
| Handle invalid or deleted profiles | Return appropriate 404 or fallback pages. |

---

## 4. Session Scheduling & Management

| Test Case | Objective |
|-----------|-----------|
| Display available time slots by mentor | Ensure dynamic and up-to-date slot rendering. |
| Book a mentoring session | Validate confirmation flow, data submission, and backend persistence. |
| Prevent double bookings | Block conflicting time selections and parallel requests. |
| Restrict past or unavailable dates | Validate input constraints and error handling. |
| Reschedule or cancel sessions | Ensure logic supports updates and deletions. |
| Enforce blackout periods | Prevent scheduling during restricted hours or holidays. |

---

## 5. Notifications & Reminders

| Test Case | Objective |
|-----------|-----------|
| Send confirmation via email/SMS | Verify trigger after successful booking. |
| Send session reminders (24h or 1h prior) | Confirm timely and accurate reminders. |
| Notify both parties of changes/cancellations | Ensure updates are promptly communicated. |
| Log and handle notification errors | Maintain system logs without user disruption. |

---

## 6. Security & Permissions

| Test Case | Objective |
|-----------|-----------|
| Restrict mentees from mentor-only features | Validate role-based visibility and access control. |
| Prevent mentors from booking their own sessions | Enforce logical restrictions. |
| Block unauthorized API access | Secure backend routes from non-authenticated calls. |
| Sanitize user inputs (XSS, SQL injection) | Prevent security vulnerabilities. |
| Handle token expiration and re-authentication | Ensure seamless re-login experience. |

---

## 7. API Validation

| Test Case | Objective |
|-----------|-----------|
| Validate API responses and status codes | Confirm correct data and error formats. |
| Authenticate requests with secure tokens | Ensure token verification and expiration logic. |
| Validate input structure and rate limits | Enforce backend validation rules. |

---

## 8. Performance & Load Testing

| Test Case | Objective |
|-----------|-----------|
| Load test mentor search functionality | Maintain acceptable latency with 1000+ records. |
| Spike test simultaneous session bookings | Detect bottlenecks and race conditions. |
| Stress test calendar with high session volume | Ensure calendar remains responsive. |
| Monitor API latency under concurrent users | Maintain backend stability. |

---

## 9. Cross-Browser & Device Compatibility

| Test Case | Objective |
|-----------|-----------|
| Browser support: Chrome, Safari, Edge, Firefox | Ensure consistent layout and behavior. |
| Device support: iOS, Android, tablet, desktop | Validate responsive design and interactivity. |
| Responsive UI checks | Confirm layout adaptation across breakpoints. |

---

## Assumptions

- User must be authenticated to access session scheduling features.
- Time slot availability is managed individually by each mentor.
- The system must prevent session conflicts and overlapping bookings.
- RESTful APIs are available for user, mentor, booking, and search modules.

---

## Related Documentation

- [Test Strategy](./test-strategy.md)
- [Bug Report](./bug-report.md)

---

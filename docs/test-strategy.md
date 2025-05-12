# Test Strategy – Dealls Mentoring Platform

## Type of Testing

| Test Type                | Description |
|--------------------------|-------------|
| Functional Testing       | Validate all features work as intended. |
| UI Testing               | Ensure UI renders and behaves correctly. |
| API Testing              | Validate backend endpoints. |
| Integration Testing      | Test integration between services. |
| Regression Testing       | Detect unintended breakage. |
| Security Testing         | Check access control and input sanitization. |
| Performance Testing      | Load and stress testing. |
| Cross-browser/Device     | Chrome, Firefox, Safari, Edge, mobile. |
| End-to-End Testing       | Simulate full user journeys. |

## Test Environments

| Test Type                | Description |
|--------------------------|-------------|
| Development/Staging      | For early integration and unit testing. |
| UAT                      | Final QA and regression testing before release. |
| Production (Post-release)| Run smoke tests post-deployment (monitor mode) |

## Key Areas of Focus
1. Search relevance and filters
2. Schedule creation and availability logic
3. Authentication (login/logout/session)
4. Role-based access (mentee vs mentor)
5. Booking conflicts and double booking
6. Session confirmation/cancellation flows
7. Data validation and error handling

## Assumptions
1. Login is required for scheduling.
2. Time slots are managed per mentor.
3. Session conflicts and duplicate bookings must be prevented.
4. APIs exist for booking, user info, mentor data, etc.

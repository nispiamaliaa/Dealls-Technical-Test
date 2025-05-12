import { test, expect } from '@playwright/test';

// =========================
// Helper Functions for Mentee Registration
// =========================

/**
 * Fills the initial mentee registration form (name, job search status, contact, education, experience level).
 */
async function fillMenteeRegistrationForm(page, { name, phone, email }) {
  await page.click('a[href="/onboarding?step=1"]'); // Start onboarding
  await page.fill('#fullName', name);
  await page.click("button[type='submit']");

  // Select job search status
  await page.click('#jobSearchStatus');
  await page.waitForTimeout(1000);
  await page.getByText('Actively looking for the next 3 months').click();

  // Contact information
  await page.fill('#whatsapp', phone);
  await page.fill('#email', email);

  // Campus selection
  await page.fill('#campus', 'Binus University');
  await page.getByRole('button', { name: 'Add `Binus University`' }).click();

  // Choose experience level
  await page.click('#eligibility');
  await page.getByText('1st Year Student').click();

  await page.click("button[type='submit']");
}

/**
 * Completes the work experience section of the onboarding.
 */
async function completeMenteeExperienceForm(page) {
  // Skip CV upload step
  await page.getByRole('button', { name: 'Skip for now, my CV is not' }).click();
  await page.click("button[type='submit']");

  // Fill in work experience
  await page.fill('#companyName', 'PT SUKSES MAJU');
  await page.getByRole('button', { name: 'Add `PT SUKSES MAJU`' }).click();
  await page.getByLabel('Posisi/Tingkat').click();
  await page.getByText('C-level').click();
  await page.fill('#roleName', 'Product Manager');
  await page.getByText('Product Manager', { exact: true }).click();
  await page.fill('#startDate', '01/2016');
  await page.getByRole('checkbox', { name: 'Masih bekerja pada posisi ini' }).check();
  await page.click("button[type='submit']");

  // Submit specialization step (if any)
  await page.waitForTimeout(1000);
  await page.click("button[type='submit']");
}

/**
 * Sets password and submits the final registration step.
 */
async function setMenteePasswordAndFinish(page, password) {
  await page.fill('#password', password);
  await page.fill('#passwordConfirmation', password);
  await page.getByRole('checkbox', { name: 'Saya telah membaca' }).check(); // Accept terms
  await page.click('#dealls-onboarding-finish');
}

// =========================
// Mentee Registration Tests
// =========================

test.describe('Mentee Register Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-up'); // Navigate to sign-up page
  });

  test('Mentee can register with valid credentials', async ({ page }) => {
    await fillMenteeRegistrationForm(page, {
      name: 'Nispi Mentee 7', // Please change the name if you want to run this test multiple times
      phone: '6289674926680',
      email: 'nispimentee7@hamham.uk', // Please change the email if you want to run this test multiple times
    });

    await completeMenteeExperienceForm(page);
    await setMenteePasswordAndFinish(page, 'nispimentee');

    await expect(page.locator('.ant-message-notice-content')).toContainText('Complete data success!');
  });

  test('Mentee cannot register with already registered email', async ({ page }) => {
    await fillMenteeRegistrationForm(page, {
      name: 'Nispi Mentee 3',
      phone: '6289674926680',
      email: 'nispimentee1@hamham.uk', // Already used email
    });

    await expect(page.locator('.ant-message-notice-content')).toContainText(
      'Sign in with Email to continue, your email was already registered'
    );
  });
});

// =========================
// Mentee Login Tests
// =========================

test.describe('Mentee Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/sign-in'); // Navigate to sign-in page
  });

  test('Mentee can log in with valid credentials', async ({ page }) => {
    await page.fill('#basic_email', 'nispimentee@hamham.uk');
    await page.fill('#basic_password', 'nispimentee');
    await page.click("button[type='submit']");

    await expect(page.locator('.ant-message-notice-content')).toContainText('Sign in success');
    await page.waitForTimeout(1000);

    // Log out
    await page.click('#dropdown-area');
    await page.click('[data-menu-id$="logout"]');
  });

  test('Mentee cannot log in with invalid credentials', async ({ page }) => {
    await page.fill('#basic_email', 'nispimentee@mail.com');
    await page.fill('#basic_password', 'nispiiiii');
    await page.click("button[type='submit']");

    await expect(page.locator('.ant-message-notice-content')).toContainText('Email Not found');
  });

  test('Mentee can reset password', async ({ page }) => {
    await page.click('a[href="/forgot-password"]');
    await page.waitForTimeout(1000);
    await page.fill('#basic_email', 'nispimentee@hamham.uk');
    await page.click("button[type='button']");

    await expect(page.locator('.ant-message-notice-content')).toContainText('Please check your email');
  });
});

// =========================
// Mentor Login Tests
// =========================

test.describe('Mentor Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('mentor/sign-up'); // Navigate to mentor sign-up page
  });

  test('Mentor can log in with valid credentials', async ({ page }) => {
    await page.getByRole('button', { name: 'Mari Masuk' }).click();
    await page.fill('#email', 'nispimentor@hamham.uk');
    await page.fill('#password', 'nispimentor');
    await page.click("button[type='submit']");

    await expect(page.getByText('Hi, Nispi!👋🏻')).toBeVisible();

    // Log out
    await page.click('#dropdown-area');
    await page.click('[data-menu-id$="logout"]');
  });

  test('Mentor cannot log in with invalid credentials', async ({ page }) => {
    await page.getByRole('button', { name: 'Mari Masuk' }).click();
    await page.fill('#email', 'nispimentor@mail.com');
    await page.fill('#password', 'nispimentor');
    await page.click("button[type='submit']");

    await expect(page.locator('.ant-message-notice-content')).toContainText('Email Not found');
  });

  test('Mentor can reset password', async ({ page }) => {
    await page.getByRole('button', { name: 'Mari Masuk' }).click();
    await page.getByRole('button', { name: 'Forgot Password ?' }).click();
    await page.waitForTimeout(1000);
    await page.fill('#email', 'nispimentor@hamham.uk');
    await page.click("button[type='submit']");

    await expect(page.getByText('Create New Password')).toBeVisible();
  });
});

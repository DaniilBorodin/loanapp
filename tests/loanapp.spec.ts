import {expect, test} from '@playwright/test';
import {LoanPage} from "./pages/loan-page";
import {LoanResultPage} from "./pages/loanresult-page";

let loanPage: LoanPage

test.beforeEach(async ({page}) => {
    loanPage = new LoanPage(page);
    loanPage.openLoanPage()
})

test('Base elements is visible', async ({page}) => {
    await expect.soft(loanPage.amountInput).toBeVisible()
    await expect.soft(loanPage.periodSelect).toBeVisible()
    await expect.soft(loanPage.applyButton).toBeVisible()
});

test('Get base loan with login', async ({page}) => {
    await loanPage.amountInput.fill('1000')
    await loanPage.setPeriodOption('24')
    await loanPage.monthlyAmountText.waitFor({ state: 'visible', timeout: 5000 });
    await loanPage.applyButton.click()
    await loanPage.login()
    const loanResultPage = new LoanResultPage(page)
    const loanMonthlyPaymentText = await loanResultPage.finalMonthlyPayment.textContent()
    expect.soft(loanMonthlyPaymentText).toBe('43.87 €')
});

test('Scroll and viewport visible elements', async ({page}) => {
    await loanPage.appyLoanButton2.scrollIntoViewIfNeeded()
    await expect.soft(loanPage.appyLoanButton2).toBeInViewport()
});
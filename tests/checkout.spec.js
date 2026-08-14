import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
const loginData = require('../test-data/loginData.json');

test('Checkout',async({page})=>{

const login = new LoginPage(page);
const inventory = new InventoryPage(page);
const cart = new CartPage(page);
const checkout = new CheckoutPage(page);

await login.goto();

await login.login(loginData.validUser.userName,loginData.validUser.password);

await inventory.addBackpack.click();

await inventory.cart.click();

await cart.checkoutBtn.click();

await checkout.firstName.fill('John');

await checkout.lastName.fill('Doe');

await checkout.postalCode.fill('100001');

await checkout.continueBtn.click();

await expect(page.locator('.summary_info')).toBeVisible();

await checkout.finishBtn.click();

await expect(page.getByText('Thank you for your order!')).toBeVisible();

await expect(page.locator('.complete-header')).toContainText('Thank you');

});
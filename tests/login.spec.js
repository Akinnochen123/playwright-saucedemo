import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
const loginData = require('../testData/loginData.json');

test.describe('Login Tests',()=>{

test('Valid Login',async({page})=>{

const login = new LoginPage(page);

await login.goto();

await login.login(loginData.validUser.userName,loginData.validUser.password);

await expect(page).toHaveURL(/inventory/);

await expect(page.locator('.title')).toHaveText('Products');

await expect(page.locator('.shopping_cart_link')).toBeVisible();

});

test('Invalid Login',async({page})=>{

const login = new LoginPage(page);

await login.goto();

await login.login(loginData.invalidUser.userName,loginData.invalidUser.password);

await expect(login.error).toContainText('Username and password do not match');

await expect(page).toHaveURL('https://www.saucedemo.com/');

});

});
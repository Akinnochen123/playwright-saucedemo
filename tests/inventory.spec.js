import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
const loginData = require('../test-data/loginData.json');

test.beforeEach(async({page})=>{

const login = new LoginPage(page);

await login.goto();

await login.login(loginData.validUser.userName,loginData.validUser.password);

});

test('Product Interaction',async({page})=>{

const inventory = new InventoryPage(page);

await inventory.addBackpack.click();

await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

await inventory.cart.click();

await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();

});

test('Product Sorting',async({page})=>{

const inventory = new InventoryPage(page);

await inventory.sort('za');

const firstItem = page.locator('.inventory_item_name').first();

await expect(firstItem).toHaveText('Test.allTheThings() T-Shirt (Red)');

});
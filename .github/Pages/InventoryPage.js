import { expect } from '@playwright/test';

export class InventoryPage{

    constructor(page){

        this.page = page;

        this.title = page.locator('.title');
        this.sortDropdown = page.locator('.product_sort_container');
        this.backpack = page.getByText('Sauce Labs Backpack');
        this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cart = page.locator('.shopping_cart_link');

    }

    async sort(option){

        await this.sortDropdown.selectOption(option);

    }

}
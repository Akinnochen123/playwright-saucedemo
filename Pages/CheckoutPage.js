export class CheckoutPage{

    constructor(page){

        this.page = page;

        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.postalCode = page.getByPlaceholder('Zip/Postal Code');

        this.continueBtn = page.getByRole('button',{name:'Continue'});
        this.finishBtn = page.getByRole('button',{name:'Finish'});

    }

}
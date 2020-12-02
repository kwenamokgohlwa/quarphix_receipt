class Item {
    constructor(quantity = 0, name = "", price = 0.0, isExempt = false, isImported = false) {
        this.quantity = quantity;
        this.name = name;
        this.price = price;

        this.isExempt = isExempt;
        this.isImported = isImported;

        this.sales_tax = 0.0;
        this.import_duty = 0.0;

        this.adjusted_price = 0.0;
    }

    calc_sales_tax() {
        if(!(this.isExempt)) {
            this.sales_tax = (this.price / 100) * 10;
        }

        return this.sales_tax;
    }

    calc_import_duty() {
        if(this.isImported) {
            this.import_duty = (this.price / 100) * 5;
        }

        return this.import_duty;
    }

    calc_adjusted_price() {
        this.calc_sales_tax();
        this.calc_import_duty();
        this.adjusted_price = this.price + this.sales_tax + this.import_duty;
        
        return this.adjusted_price;
    }

    toString() {
        this.calc_sales_tax();
        this.calc_import_duty();
        this.calc_adjusted_price();
        return this.quantity + " " + this.name  + " " + this.adjusted_price;
    }

}


module.exports.Item = Item;
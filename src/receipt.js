class Receipt {
    constructor(item_list) {
        this.item_list = item_list;

        this.sales_tax = 0.0;
        this.total = 0.0;
    }

    calc_sales_tax() {
        this.item_list.forEach(item => {
            this.sales_tax += item.calc_sales_tax();
        });

        return this.sales_tax;
    }

    calc_total() {
        this.item_list.forEach(item => {
            this.total += item.calc_adjusted_price();
        });

        return this.total;
    }

    toString() {
        this.calc_sales_tax();
        this.calc_total();
        
        var receipt = "";

        this.item_list.forEach(item => {
            receipt += item.toString() + "\n";
        });

        receipt += "Sales Taxes: " + this.sales_tax + "\n";

        receipt += "Total: " + this.total + "\n";

        return receipt;
    }

}

module.exports.Receipt = Receipt;
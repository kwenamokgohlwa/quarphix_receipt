const Item = require("../src/item").Item;
const Receipt = require("../src/receipt").Receipt;

describe("Reciept Generator", function() {
    it("should pass Test Case 1", function() {
        
        let item1 = new Item(1, "book", 12.49, true);
        let item2 = new Item(1, "music CD", 14.99, false);
        let item3  = new Item(1, "chocolate bar", 0.85, true);
        
        let item_list = [item1, item2, item3];

        let receipt = new Receipt(item_list);
        
        expect(receipt.toString()).toEqual("1 book 12.49" + "\n" + "1 music CD 16.489" + "\n" + "1 chocolate bar 0.85" + "\n" + "Sales Taxes: 1.499" + "\n" + "Total: 29.829" + "\n");

    });

    it("should pass Test Case 2", function() {
        
        let item1 = new Item(1, "box of chocolates", 10.00, true, true);
        let item2 = new Item(1, "bottle of perfume", 47.50, false, true);
        
        let item_list = [item1, item2];

        let receipt = new Receipt(item_list);
        
        expect(receipt.toString()).toEqual("1 box of chocolates 10.5" + "\n" + "1 bottle of perfume 54.625" + "\n" + "Sales Taxes: 4.75" + "\n" + "Total: 65.125" + "\n");

    });

    it("should pass Test Case 3", function() {
        
        let item1 = new Item(1, "bottle of perfume", 27.99, false, true);
        let item2 = new Item(1, "bottle of perfume", 18.99, false);
        let item3  = new Item(1, "packet of headache pills", 9.75, true);
        let item4  = new Item(1, "box of chocolates", 11.25, true, true);
        
        let item_list = [item1, item2, item3, item4];

        let receipt = new Receipt(item_list);
        
        expect(receipt.toString()).toEqual("1 bottle of perfume 32.1885" + "\n" + "1 bottle of perfume 20.889" + "\n" + "1 packet of headache pills 9.75" + "\n" + "1 box of chocolates 11.8125" + "\n" + "Sales Taxes: 4.6979999999999995" + "\n" + "Total: 74.64" + "\n");

    });
  });
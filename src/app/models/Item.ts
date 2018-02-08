export class Item {
    _id: string;
    itemName: String;
    itemType: String;
    itemBrand: String;
    itemQuantity: Number;
    invoiceNumber: Number;
    warrantyType: String;
    warrantyQuantity: Number;
    referenceId: Number;
    itemWarehouse: Number;
    itemDescription: String;
    
    constructor(values: Object = {}) {
        Object.assign(this, values)
    }
}
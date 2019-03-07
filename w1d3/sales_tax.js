var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


var output = {};

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  for(var i of companySalesData){
    var salesSum = i['sales'].reduce(function(a, b) { return a + b; }, 0);
    //console.log(salesSum);

    var tRate = salesTaxRates[i['province']];
    var taxes = salesSum * tRate;
    //console.log(taxes)

    if(output.hasOwnProperty(i['name'])){
      let totalSales = 0;
      let totalTaxes = 0;
      totalSales = salesSum + output[i['name']].totalSales;
      totalTaxes = taxes + output[i['name']].totalTaxes;
      output[i['name']] = {
        totalSales: totalSales,
        totalTaxes: totalTaxes
      };

    } else {
      var temp = {
        totalSales: salesSum,
        totalTaxes: taxes
      };
      output[i['name']] = temp;
    }
  }

  console.log(output);
}

calculateSalesTax(companySalesData, salesTaxRates);

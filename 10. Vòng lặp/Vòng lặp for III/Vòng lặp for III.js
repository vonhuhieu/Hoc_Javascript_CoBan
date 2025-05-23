var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders) {
    let totalPrice = 0;
    for (let i = 0; i < orders.length; ++i) {
        totalPrice += orders[i].price;
    }
    return totalPrice;
}

console.log(getTotal(orders));



// Expected results:
getTotal(orders) // Output: 8700000

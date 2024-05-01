const cart = ["shoes","Pants","Kurta"]

api.createOrder(cart,function(){
    api.proceedToPayment(function()
    {
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
}
)






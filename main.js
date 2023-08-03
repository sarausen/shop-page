document.getElementById("canta").style.display = "none";
function produktAnzeigen(nr) {
  if (nr === 1) {
    document.getElementById("paket").style.display = "block";
    document.getElementById("canta").style.display = "none";
  }
  if (nr === 2) {
    document.getElementById("paket").style.display = "none";
    document.getElementById("canta").style.display = "block";
  }
}

function initPayPalButton() {
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'gold',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"T-Shirt","amount":{"currency_code":"EUR","value":1}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Teşekürler kaliteli bir ürün aldığına hiç şüphen olmasın! ' + details.payer.name.given_name + '!');
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-paket');
  paypal.Buttons({
    style: {
      shape: 'pill',
      color: 'gold',
      layout: 'vertical',
      label: 'buynow',
      
    },

    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"description":"canta","amount":{"currency_code":"EUR","value":1}}]
      });
    },

    onApprove: function(data, actions) {
      return actions.order.capture().then(function(details) {
        alert('Teşekürler kaliteli bir ürün aldığına hiç şüphen olmasın! ' + details.payer.name.given_name + '!');
      });
    },

    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-canta');
}
initPayPalButton();

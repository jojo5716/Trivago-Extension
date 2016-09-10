function doScraping(parentElement) {

    var parent = $(parentElement);
    var hotels = parent.find('.hotellist li.hotel');
    var hotelsJSON = [];

    for (var i = 0; i <= hotels.length; i++) {
        var hotel = $(hotels[i]);

        try{
            console.log(i);
            var photo = $(hotel).find('.item__image-wrapper img').attr('src');
            var elementName = $(hotel).find('.item__details .item__name');
            var name = elementName.text().trim();
            console.log(elementName.attr('class'));
            var category = elementName.attr('class').match(/\d/g)[1];
            console.log($(hotel).find('.item__review .icon-ic').attr('class'));
            var rates = $(hotel).find('.item__review .icon-ic').attr('class').match(/\d/g)[1];
            var otherPricesElements = $(hotel).find('.deal-other__top-alternatives li');
            var otherPrices = [];
            var bestPrice = $(hotel).find('.item__best-price').text();

            for (var j = 0; j <= otherPricesElements.length; j++) {
                var buttonContent = $(otherPricesElements[j]).find('button');
                var priceElement = buttonContent.find('strong');
                var price = priceElement.text();
                // Remove element to get later only the name
                priceElement.remove();
                var name = buttonContent.text();

                otherPrices.push({
                    name,
                    price
                });
            }

            hotelsJSON.push({
                name,
                photo,
                category,
                rates,
                otherPrices,
                price: bestPrice
            });
        }catch (err) {
            console.log(err);
            console.log(i);
            console.log("???????????????????????????");
        }

    }

    return hotelsJSON;
}

module.exports = {
    doScraping
};

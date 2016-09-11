function doScraping(parentElement) {

    const CHARACTER = {
        '5': 'darkvader',
        '4': 'r2d2',
        '3': 'pilot',
        '2': 'c3po',
        '1': 'kylo'
    };

    var parent = $(parentElement);
    var hotels = parent.find('.hotellist li.hotel');
    var hotelsJSON = [];

    for (var i = 0; i <= hotels.length; i++) {
        var hotel = $(hotels[i]);

        try{
            var photo = $(hotel).find('.item__image-wrapper img').attr('src');

            if (photo.indexOf('http://') === -1){
                photo = `http://${photo}`;
            }
            
            var elementName = $(hotel).find('.item__details .item__name');
            var name = elementName.text().trim();
            var category = elementName.attr('class').match(/\d/g)[1];
            var rates = $(hotel).find('.item__review .icon-ic').attr('class').match(/\d/g)[1];
            var otherPricesElements = $(hotel).find('.deal-other__top-alternatives li');
            var otherPrices = [];
            var bestPrice = $(hotel).find('.item__best-price').text();
            var coordenatesElement = $(hotel).find('.slideout_content_container');
            var longitude = coordenatesElement.data('lng');
            var latitude = coordenatesElement.data('lat');

            for (var j = 0; j <= otherPricesElements.length; j++) {
                var buttonContent = $(otherPricesElements[j]).find('button');
                var priceElement = buttonContent.find('strong');
                var price = priceElement.text();
                // Remove element to get later only the name
                priceElement.remove();
                var nameOtherPrice = buttonContent.text();

                otherPrices.push({
                    name: nameOtherPrice,
                    price
                });
            }

            hotelsJSON.push({
                name,
                photo,
                category: new Array(parseInt(category, 10)),
                rates: CHARACTER[rates],
                rateInt: rates,
                otherPrices,
                price: bestPrice,
                longitude,
                latitude
            });
        } catch (err) {}
    }

    return hotelsJSON;
}


module.exports = {
    doScraping
};

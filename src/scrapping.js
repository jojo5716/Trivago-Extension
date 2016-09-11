function toTrivago(parentElement) {

    const CHARACTER = {
        '5': 'darkvader',
        '4': 'r2d2',
        '3': 'pilot',
        '2': 'c3po',
        '1': 'kylo'
    };

    const parent = $(parentElement);
    const hotels = parent.find('.hotellist li.hotel');
    let hotelsJSON = [];

    for (let i = 0; i <= hotels.length; i++) {
        const hotel = $(hotels[i]);

        try{
            let photo = $(hotel).find('.item__image-wrapper img').attr('src');

            if (photo.indexOf('http://') === -1){
                photo = `http://${photo}`;
            }
            
            const elementName = $(hotel).find('.item__details .item__name');
            const name = elementName.text().trim();
            const category = elementName.attr('class').match(/\d/g)[1];
            const rates = $(hotel).find('.item__review .icon-ic').attr('class').match(/\d/g)[1];
            const otherPricesElements = $(hotel).find('.deal-other__top-alternatives li');
            let otherPrices = [];
            const bestPrice = $(hotel).find('.item__best-price').text();
            const coordenatesElement = $(hotel).find('.slideout_content_container');
            const longitude = coordenatesElement.data('lng');
            const latitude = coordenatesElement.data('lat');

            for (let j = 0; j <= otherPricesElements.length; j++) {
                const buttonContent = $(otherPricesElements[j]).find('button');
                let priceElement = buttonContent.find('strong');
                const price = priceElement.text();
                // Remove element to get later only the name
                priceElement.remove();
                const nameOtherPrice = buttonContent.text();

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
    toTrivago
};

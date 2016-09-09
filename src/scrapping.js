function doScraping(parentElement) {

    const parent = $(parentElement);
    const hotels = parent.find('.hotellist');
    let hotelsJSON = [];

    for (const key in hotels) {
        const hotel = $(hotels[key]);

        const photo = $(hotel).find('.item__image-wrapper img').attr('src');
        const elementName = $(hotel).find('.item__details .item__name');
        const name = elementName.text().trim()
        const category = elementName.attr('class').match(/\d/g)[1];
        const rates = $(hotel).find('.item__review .icon-ic').attr('class').match(/\d/g)[1];
        const otherPricesElements = $(hotel).find('.deal-other__top-alternatives li');
        let otherPrices = [];
        const bestPrice = $(hotel).find('.item__best-price').text();

        for (const index in otherPricesElements) {
            const buttonContent = $(otherPricesElements[i]).find('button');
            const priceElement = buttonContent.find('strong');
            const price = priceElement.text();
            // Remove element to get later only the name
            priceElement.remove();
            const name = buttonContent.text();

            prices.push({
                name,
                price
            });
        }

        hotelsJSON.push({
            name,
            photo,
            categoy: rates,
            otherPrices,
            price: bestPrice
        });
    }

}


module.exports = {
    doScraping
};

name: 'Tryp Palma Bellver',
    photo: 'http://imgec.trivago.com/itemimages/37/12/37125_v8_isq.jpeg',
    price: '174',
    discount: '40',
    priceBeforeDiscount: '200',
    otherPrices: [],
    rate: '80',
    comments: '1977',
    category: '4'
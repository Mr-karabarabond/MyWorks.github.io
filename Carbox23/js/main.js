//off canvas menu
var $page = $('.page');
var $nav = $('.offMenu');
$('.menu_toggle').on('click', function() {
	$page.toggleClass('shazam'); //add class thet open the menu
	$nav.toggleClass('nav_shazam'); //add class thet show menu btn
})
$('.page').on('click', function() {
	$page.removeClass('shazam');
	$nav.removeClass('nav_shazam');
});

//autocomlete
$(document).ready(function(){
	$('input.mark').autocomplete({
		data: {
			"Acura": null,
			"Alfa Romeo": null,
			"Asia": null,
			"Aston Martin": null,
			"Audi": null,
			"Barkas": null,
			"BAW": null,
			"Bentley": null,
			"BMW": null,
			"Brilliance": null,
			"Buick": null,
			"BYD": null,
			"Cadillac": null,
			"Changan": null,
			"Chery": null,
			"Chevrolet": null,
			"Chrysler": null,
			"Citroen": null,
			"Dacia": null,
			"Daewoo": null,
			"Daihatsu": null,
			"Datsun": null,
			"derway": null,
			"Dodge": null,
			"Dongfeng": null,
			"Doninvest": null,
			"FAW": null,
			"FIAT": null,
			"Ford": null,
			"Foton": null,
			"Geely": null,
			"Genesis": null,
			"Geo": null,
			"Great Wall": null,
			"Hafei": null,
			"Haima": null,
			"Haval": null,
			"Hawtai": null,
			"Honda": null,
			"Hummer": null,
			"Hyundai": null,
			"Infiniti": null,
			"Iran Khodro": null,
			"Isuzu": null,
			"Iveco": null,
			"JAC": null,
			"Jaguar": null,
			"Jeep": null,
			"JMC": null,
			"KIA": null,
			"Lamborghini": null,
			"Lancia": null,
			"Land Rover": null,
			"LDV": null,
			"Lexus": null,
			"LIFAN": null,
			"Lincoln": null,
			"Lotus": null,
			"Luxgen": null,
			"Mahindra": null,
			"Maserati": null,
			"Mazda ": null,
			"Mercedes-Benz": null,
			"Mercury": null,
			"Metrocab": null,
			"MINI": null,
			"Mitsubishi": null,
			"Mitsuoka": null,
			"Nissan": null,
			"Opel": null,
			"Peugeot": null,
			"Plymouth": null,
			"Pontiac": null,
			"Porsche": null,
			"Ravon": null,
			"Renault": null,
			"Rolls-Royce": null,
			"Rover": null,
			"Saab": null,
			"Saturn": null,
			"Scion": null,
			"SEAT": null,
			"Shuanghuan": null,
			"Skoda": null,
			"SMA": null,
			"Smart": null,
			"SsangYong": null,
			"Subaru": null,
			"Suzuki": null,
			"Tesla": null,
			"Tianye": null,
			"Toyota": null,
			"Trabant": null,
			"Volkswagen": null,
			"Volvo": null,
			"Vortex": null,
			"Xin Kai": null,
			"ZOTYE": null,
			"ZX": null
		},
    minLength: 0 // The minimum length of the input for the autocomplete to start. Default: 1.
  });

	$('input.part').autocomplete({
		data: {
			"Автомобиль на запчасти": null,
			"Автосвет": null,
			"Аккумуляторы": null,
			"Двигатель": null,
			"Запчасти для ТО": null,
			"Кузов": null,
			"Подвеска": null,
			"Рулевое управление": null,
			"Салон": null,
			"Система охлаждения": null,
			"Стекла": null,
			"Топливная и выхлопная системы": null,
			"Тормозная система": null,
			"Трансмиссия и привод": null,
			"Электрооборудование": null
		},
		limit: 20,
		minLength: 0
	});
});

//floating action button
$(document).ready(function(){
	$('.fixed-action-btn').floatingActionButton();
});
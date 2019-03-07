var nav = document.getElementById("Nav");

function openNav() {
	$(nav.getElementsByTagName('a')).fadeIn(1000);
	nav.style.width = "30vh";

}

function closeNav() {
	$(nav.getElementsByTagName('a')).fadeOut(100);
	nav.style.width = "0vw";


}
$(function () {
	$(".hamburger").click(function () {
		$(".hamburger").hide();
		$(".cross").show();
	});
	$(".cross").click(function () {
		$(".hamburger").show();
		$(".cross").hide();
	});
});

function sluit() {
	$('.cross').click();
}

var today = new Date();
var dag = today.getDay();
var uur = today.getHours();
if (dag > 0 && dag <= 5) {

	if (uur >= 7 && uur <= 19) {
		$(".open").show();
	} else {
		$(".gesloten").show();
	}
} else {
	$(".gesloten").show();
}

var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1
	}
	slides[slideIndex - 1].style.display = "block";
	setTimeout(showSlides, 3500);
}

$('.icons').hover(
	function () {
		$(this).addClass('animated heartBeat')
	},
	function () {
		$(this).removeClass('animated heartBeat')
	}
)
$(".logo").click(function () {
	$(this).removeClass('animated bounceInRight');
	$(this).addClass("animated rubberBand").delay(1200).queue(function () {
		$(this).removeClass("animated rubberBand").dequeue();
	});

});
$(".knop").click(function () {
	$("article").addClass("animated bounceInRight").delay(1000).queue(function () {
		$(this).removeClass("animated bounceInRight").dequeue();
	});
});
$(window).on('scroll', function () {
	if ($("footer").is(':visible')) {
		$("footer").toggleClass("animated shake");
	}
});

function alert() {
	Swal.fire({
			title: "Hoeveelheid",
			type: 'question',
			input: 'select',
			inputOptions: {
				'een': '1',
				'twee': '2',
				'drie': '3',
				'vier': '4',
				'vijf': '5',
			},
			inputPlaceholder: 'Kies het gewenste aantal',
			showCancelButton: true,
			confirmButtonText: "Voeg Toe",
			cancelButtonText: "Annuleren",
			animation: false,
			customClass: 'animated zoomIn faster',
		})

		.then(function (result) {
			if (result.value) {
				Swal.fire({
					title: "Het item is toegevoegd aan uw winkelmandje",
					text: "Vanaf 25,- gratis verzending!",
					type: 'success',
					showCancelButton: true,
					confirmButtonText: "Afrekenen",
					cancelButtonText: "Verder Winkelen",
					animation: false,
					customClass: 'animated zoomIn faster',
				});
			}
        else if (result.value == false) {
				Swal.fire({
					title: "Toevoegen mislukt",
					text: "Voeg een geldig aantal in",
					type: "error",
				})
			} else {

			}
		});
}

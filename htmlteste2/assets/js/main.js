/*
	Verti by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			speed: 300
		});

	// Nav.

		// Toggle.
			$(
				'<div id="navToggle">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
    loadCases();
});

function loadCases() {
    fetch("motolista.json")
    .then(response => response.json())
    .then(data => {
        const casesList = document.getElementById("casesList");
        casesList.innerHTML = "";

        data.forEach(caseItem => {
            const li = document.createElement("li");
            const whatsLink = `<a class="whatsapp-link" href="https://wa.me/${caseItem.whatsapp}" target="_blank">Fale com o responsável aqui!</a>`;
            li.innerHTML = `<h3>${caseItem.nome}</h3>
                            <p><strong>Descrição do jogo:</strong> ${caseItem.desc}</p>
                            <p><strong>Objetivo do jogo:</strong> ${caseItem.obje}</p>
                            <p><strong>Empresa:</strong> ${caseItem.empre}</p>
                            <p><strong>Preço do plano:</strong> ${caseItem.preco}</p>
                            <p>${whatsLink}</p>`;
            casesList.appendChild(li);
        });
    })
    .catch(error => console.error("Erro ao carregar:", error));
}
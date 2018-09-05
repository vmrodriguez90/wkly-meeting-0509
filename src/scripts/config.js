let typesOfMovement = {
	MOVE_TO: 'moveTo',
	LINE_TO: 'lineTo',
	ARC: 'arc',
	ROTATE: 'rotate'
};
let config = {
	elements: [
		{
			name: 'start',
			x: 400,
			y: 50,
			type: typesOfMovement.MOVE_TO
		},
		{
			name: 'description',
			x: 400,
			y: 800,
			type: typesOfMovement.LINE_TO
		},
		{
			type: typesOfMovement.ARC,
			x: 200,
			y: 1200,
			radius: 400,
			startAngle: -Math.PI/2,
			endAngle: Math.PI/2,
			counterclockwise: true
		},
		{
			name: 'syntax',
			x: 600,
			y: 1600,
			type: typesOfMovement.LINE_TO,
			callback: function() {
				if(!$(".settings").hasClass("highlight")) {
					$(".settings").addClass("highlight");
					setTimeout(function() { $(".settings").removeClass("highlight"); }, 2000);
				}
			}
		},
		{
			name: 'scrollbar',
			x: 1750,
			y: 1600,
			type: typesOfMovement.LINE_TO,
			callback: function() {
				if(!$(".sp-scroll-handle").hasClass("highlight")) {
					$(".sp-scroll-handle").addClass("highlight");
					setTimeout(function() { $(".sp-scroll-handle").removeClass("highlight"); }, 2000);
				}
			}
		},
		{
			type: typesOfMovement.ARC,
			x: 1800,
			y: 1000,
			radius: 600,
			startAngle: Math.PI/2,
			endAngle: 0,
			counterclockwise: true,
			opts: { rotate: Math.PI/2 }
		},
		{
			type: typesOfMovement.LINE_TO,
			x: 2400,
			y: 750,
			name: 'rotations'
		},
		{
			type: typesOfMovement.ROTATE,
			radians: 3*Math.PI/2,
			name: 'rotations-rotated'
		},
		{
			type: typesOfMovement.LINE_TO,
			name: 'source',
			x: 2400,
			y: -700
		},
		{
			type: typesOfMovement.ARC,
			x: 2250,
			y: -700,
			radius: 150,
			startAngle: 0,
			endAngle: -Math.PI/2,
			counterclockwise: true
		},
		{
			type: typesOfMovement.LINE_TO,
			x: 1350,
			y: -850,
			name: 'follow'
		},
		{
			type: typesOfMovement.ARC,
			x: 1300,
			y: 50,
			radius: 900,
			startAngle: -Math.PI/2,
			endAngle: -Math.PI,
			counterclockwise: true,
			opts: { rotate: Math.PI * 2, name: 'end'}
		},

	],
	slides: [
		{
			name:'presentation',
			position: { top: 0, left: 0 },
			content: `
				<h1>Weekly Meeting September 5th</h1>
				<span class="arrow">&darr;</span> Developers in da House <span class="arrow">&darr;</span>
			`
		},
		{
			name:'slide-1',
			position: { top: 740, left: 180 },
			content: `
				<span class="big">SLACK WALL</span>
				<p>A partir de ahora pueden participar uniendose al <b>#sol-ba-wkly-wall</b> y enviando sus emojis/mensajes</p>
			`
		},
		{
			name:'slide-2',
			position: { top: 1510, left: 430 },
			url: 'templates/cto.html',
			content: `
					<span class="big">Who's the CTO Circle?</span>
			`
		},
		{
			name:'slide-3',
			position: { top: 1540, left: 1600 },
			url: 'templates/updates_ex.html',
			content: `
					<span class="big">EX Updates</span>
			`
		},
		{
			name:'slide-4',
			position: { top: 660, left: 2185 },
			url: 'templates/rocks.html',
			content: `
				<span class="big" >Eng. Q1 Objectives</span>
				<span class="upside-down big">THANKS FOR THE PEOPLE WHO PARTICIPATED</span>
			`
		},
		{
			name:'slide-5',
			position: { top: -800, left: 2200 },
			url: 'templates/update_social.html',
			content: `
				<span class="big">Updates SOCIAL COMMITTEE</span>
			`
		},
		{
			name:'slide-8',
			position: { top: -950, left: 1670 },
			url: 'templates/marketing.html',
			content: `
				<span class="big">Updates MARKETING</span>
			`
		},
		{
			name:'slide-6',
			position: { top: -950, left: 1100 },
			content: `
				<span class="big">Updates Generales</span>
			`
		}, {
			name:'slide-7',
			url: 'templates/cheers.html',
			position: { top: -656, left: 490 },
			content: `
				<span class="big">Cheers For Peers</span>
			`
		}
	],
	typesOfMovement: typesOfMovement
};

export { config };

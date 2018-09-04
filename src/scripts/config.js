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
	typesOfMovement: typesOfMovement
};

export { config };

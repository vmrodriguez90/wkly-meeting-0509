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
			name:'slde-2',
			position: { top: 1510, left: 430 },
			content: `
					<span class="big">Who's on the CTO Circle?</span>
					<div class="slider-container">
						<div class="cto">
							<img src="https://pbs.twimg.com/profile_images/444217413253758977/M_WiNltn.jpeg" />
							<span>Henry Oyuela</span>
						</div>
						<div class="cto">
							<img src="https://pbs.twimg.com/profile_images/444217413253758977/M_WiNltn.jpeg" />
							<span>Henry Oyuela</span>
						</div>
						<div class="cto">
							<img src="https://pbs.twimg.com/profile_images/444217413253758977/M_WiNltn.jpeg" />
							<span>Henry Oyuela</span>
						</div>
						<div class="cto">
							<img src="https://pbs.twimg.com/profile_images/444217413253758977/M_WiNltn.jpeg" />
							<span>Henry Oyuela</span>
						</div>
						<div class="cto">
							<img src="https://pbs.twimg.com/profile_images/444217413253758977/M_WiNltn.jpeg" />
							<span>Henry Oyuela</span>
						</div>
					</div>
			`
		},
		{
			name:'slide-3',
			position: { top: 1540, left: 1600 },
			content: `
					<span class="big">EX Updates</span>
					<div class="slider-container">
						<div class="ex-updates">
							<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhMSEhIVEhUVEBYVFxUVFRUVFRUVFxUWFhUSFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0dHR0rLS0rLSstKy0tLS0rLS0tKy0tKzctLS03Ky0tLS0tKy0tLS03LS0tLS0tNy0rKystK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xABMEAABAwIBBgcMBwUHBQEAAAABAAIDBBEhBQYSMUFRByI0YXF0sxMjVHOBkZOhscHR0hYkMjVCUnJTYoOSshQVJTNE4fCChKKjwmT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAwECBAUG/8QAJxEAAgIBBAEEAwADAAAAAAAAAAECAxEEITEyEhMzUXEUIkEFI4H/2gAMAwEAAhEDEQA/ANOzeyFSupaZxpoCTTREkwxkkmNtyTZSP0fpPBaf0MfyoZtckpeqw9m1SSAI36P0ngtP6GP5VH5apsn0sRmlpoAwOaCRAxxu4howDd5ViVN4WB/hz/HQ9q1Vm8RZaCzJIjPpTkbZTRn/ALVg9oSTs7Mk7KJh/wC3i+CzESALpsg3rD68kdP8KBpLs7cmbMns9DCPck3Z2UGzJ0Plji+VUESDeu2zN3+tR+RMn8KsvDs6aTZk6n8scfyrk5zU+ygpR/Cb8qpomb+YICcb0evMt+HWW52cMR1UVJ6BhXTcrMP+lpB0U8fvCqjajVr8xS7as7AUevMPxa/gtkVVG7/T0w6KeH5VcMlZHpnxNc6mpySMT3GIf/KoGSr2HPitNyKe9M6Eyi6U5YZn1lMa4ppEDlijp2SNY2mp2gtv/kRH2tTJ0EQNnU9OP4EPyp/nEe/s/Snlfk8SQaQwe0XB9xVXObk0mEY1xhFtckO2On8Hp/QRfKlWU9P4PT+gi+VV4Vrm4Eajbalm17/y+tL9Wfyavxq/gsTKWm8Gp/QRfKlm0VJ4LT+gj+VV5uUJNwS7MoScyn1pfIuWkj8FhZk6j8Fg9DH8qVbkmj8Fp/Qx/Kq8zKUnN5wlm5Uk3t84VldL5Ey0fwT/APctH4LT+hj+Vdf3HSeC0/oY/lUGzKz/AMzfOEqMqO/OP5h8FdXsW9HImW5ApPBaf0Mfyrr6P0ngtP6GP5VzkOqL2uudKzrYG+wKUWuDysmWUfF4I36P0ngtP6GP5URzfpMPqtP6GP5VJoirFTzZ/ZY/2bP5W/BBLIIA3zNrklL1WHs2qSUbm1ySl6rD2bVJIABVI4Y3WyZIR+2g7Ziu6pfC5FpZNkbvmg9UrSqz4ZevsjAu7u5vOj7u7eE7bk0btiXjyYMMFz3OCOyoTGDag7wlO7u/N6lKtySPypy3JOqzfUlO2AxVyIPu7vzlH3Q/mcrQ3JeA4qOWhAGIUetEv6bKuHH94pfJ7u+s1/a2qbfCBsTRsQD2n94K6mmV8Gi15KdgFqGQj3lqyrJL/shankE3hap0nZmX/I9EQ2X+UN6FNNPeX/pPsUHnCe/t/SpiI96eP3T7FaLxNibF/qiZ/DkMS6TzI8XkkwFrYPcMPMnH0XGvush8yksiNux/jpR/7XKbpdHbrSnyapWeKKvDm03bJJ50/hzRjtcySedTb4RpXBS3drEBWQmdsnwQcWaUR/HJ507ZmdDte/8AmU1DJbYlA66vHBlldZ8kQzNCn3v/AJl2M06f9/8AmKmo12CtEPDG4l3WfI1yXk2OAFsYNibm5vjayfrlhXS0rGNhTbfIERRoipA85IIIIA3zNrklL1WHs2qSUbm1ySl6rD2bVJIACqnCUL0L/Gxdo1WtVfhGH1J/jYu0al3dGMp9xfZk7YBfyJeKIDZtXDHJdvvXn5M9MLsaNyexMuNSZRvTxkmCWwHLWgAb1GVxFk/lOHlUXWuDW6TjYc5VoLLAZSO9iYOfYj9Q9qaV+cDGu4rdMXtfZ5EyZnG0u40TbX2XB9q6MKJYyZJaiCeC3U1YG6K1vNV96dpWLUDo5gDG6/McHD4rZcz2WpmhM08HGZm181KtYIzOV1qhnQfcpNr+9n9J9iic6h9YjPSngk72f0lLb/ZkqOaokLkE8WTHVPL2r1P0zBgTiq3kAAskI8Jm7VymI3kaktsbZDI/mA326EccQBuTfpTB7jtK7i14HFXQn02kSrZglo3qNaw7121zxtVkIlWSjHIaSj2S22ozVhXFeiyVpnXv0pdMcmTaQJ5/cE+W6vqZ5LDAiKNEVcqeckEEEAb5m1ySl6rD2bVJKNza5JS9Vh7NqkkABVbhI5E7xsXaNVpVV4S+Qv8AGRdo1Ku6MZV3X2ZVHqCXDsMeZNYTgumOwxXBa3PSoeMcn0DrAKIjk1J9FJcKskXJKeUBt3EADEk7lm2cmVjK7iniAnR5+cqfz3rrRMj/ADOubbgD71QYsSt+kpWPJnO1Vrz4IUhgJPGUrT0DbarpGNlrDXfYpaieR+Ec4JstFk3/AArVVH+hw5JdYOgeWuBGAOBIWtcGeX3PaaaYaMrcR+9vtv3rPcnvAeDYt5xxmnmKtL6tsZhnYAXNc25brHTzFVqtfluTqKFKGxZs6f8APj6D7kC/iHoPsTTOCrEj4XjU5t/Zguy/i+RIk/2YymP+qJG5Ak73J1mbtHKUY87FA5BedGXD/UzY/wARymopUvI6URZ7jtSgfZNJZ8UkHucdwV0ynhsTMcnOjcSdqY6dhrulBImIS68DgQE7V2GAa1yyWwSDpiVOSii2T2RHAtdb83uClFD5vHiv/V7gphdCvqjl27TYERRoirizzkggggDfM2uSUvVYezapJRubXJKXqsPZtUkgAKpcKB+oP8bF2jVbVUOFM/UH+Nh7RqXb0YyruvsyUHDWu43YJo12pKF2C4jR6SI8iOrpTuldrUdC72pSao0I5H7mk/BRjLwWzhZKpnXXacrgNTOKPeVEUzSjlcCSSrFkLJzRHpSYB3sXTz6cEjlQg7rGyKY14IJBsVOUETb8bDBSkVNERxHaTecbU4rcm6TLjDDWMAkueToQo8VyCnayOzg649Y+K6rMo6g03BItv5wVWZ2PBsb9I2FKPnxjbYaV73F8ennUwhuLm8Iv1PWFzIh+VxtvscbKec/ieRU+hlvo+f1q0PfxUu5YkMq3giJyDUgMlH/6Jj/5lSccpOpQmQgNGTmqJf6ypiByU2NwPCBu2IMJw6UnI5cMed6kjA9kcuI5+dJOJSTmlXTK+JKCYb9i50k3gdxUNLnVsi/AtGbZu1/6vcFNKCzWfdr/ANfuCnV0auqOFf7jAiKNEUwSeckEEEAb5m1ySl6rD2bVJKNza5JS9Vh7NqkkABU/hWP+Hv8AHQ9q1XBU3hY+7n+Oh7VqXb1YyruvsxoPx8iV0jZM74pcHArkNHo0PIXJrl6S0EnPYetKxvUdnJL3q29wU1xzNFbniDK3rc3nNitPyFSBzQLWssvv9k7itLyJWFovzLVqP4I/x+GmS0uT9FtsDjhZoCk5MmXp2jRNjzKv1mUJTYgaQ3blZslZyyOY2PuBcNpwFgNqTFJmy5yil4or0WazQ/Scx9scQcOlVTK0OhWaLcQ0D/hWr0+cILXxuGIvbVq2LJKqo06uR41d0I8xWipbmSyUnH9lgnqCWzt2NvepU5y01rd0G5VuJ17c9/Yqi0K1lakxcLXBbGlZCrYTpMErLvle4XdYcZxIxKm48Da9+g4eQrJqeNug52lZ4cLDG5G1aLkF3eYyTfirNbWo7o002ynyTj34Js5x13shI/BMp5xZJQ/BI93PMUBIbj4phDY7CnLngWsrIjA9ilwKHdd4TanJIK6kfuViGXDM14LJLfnH9IVjVXzFPe5fGj+hqtC6dXRHndT7sgIijRFMEHnJBBBAG+Ztckpeqw9m1SSjc2uSUvVYezapJAAVM4Wz/hz/AB0HatVzVL4Xfu2Tx0HatVLOrGVd19mI3xS2nsTUuxSmkuW0ehTHUblG5yO4rP1H2J7G5Ms4GXYDucpq7oXqN62QLtS0LNKZs0Bvr0QDzc6z1hwIU7mNlHucui77Lrj1LVfDMTFo7PGWPktkNM9psC9+OBa8A26DrU9STVLReMS/9bY7eXFI/wB2OJ4hwOIUxRUUzGnS1Ea1mi0dexrHJWsuvfEx0kpbpltuJgMVSsmnBziddz51K8IGUdOTuTDdrdZ3naofJ/2QN5t5FpojtkwamzMkiZpz9n9PuSmbWaYniE0kgY0mwAF3YGxO4LvJlKHm7naLL2J+Cs1Dm/RsAayeUDXbuuHTZRbLDJrrysvgeU3BtQOZymTSJBudDC2sDBO6rNf+zRt0H91Y2wvqIG8pCpzcvHpUlS8PH4XnSa7m3jpTnIc0zCY6hpFxZwOq35mnUUuT8lhlYxcX5Rl/xkZI0aPxTZ+sWKfZWpjEXNOONwd7TqKiu6LNjDOhBqSyh+zXjuXUj00ZI7SGqyUkkxxUlsDymdcY4IEbk1hI1oOqDqA86sUaL1mC20cu3vo/oarUqlwekmOW/wC1H9DVbV06uiPOar3ZfYERRoimCDzkggggDfM2uSUvVYezapJRubXJKXqsPZtUkgAKk8MH3bJ4+Dtmq7KkcMX3ZJ4+DtmKk+GXq7r7MMSzXYdKbXXYNwVzmjvJjiMoVTNJjm7wkBIALk2TSqysACGY85Uxi29itlkVFpkWwWNkrRtIduxuEiwkm+0qwZNyU6VjXN1i4F9R5lrm8R3ObUsz2LNkPOl7WBrgSQLKQrs6p3sLGAi/4js6FE5OzeqAQQwH/qCm4s25j9otb5brE1hnaTi0slGytCGjHEnWedJ0eHtUpnpQ9yfHGCXEguOGAA1eu6iYXWB5z7MFso6nPvknPYnskBp0hI4tGuw3qxZMoqR92gkk7dN1/JiqG5xLTY2UtkrIkbi3QlLZNeBSbY4eTXp55SSLzSZMnhPen91buceOOg7fKrHRZUcLCePSHOBcKu5EpJ2Os6UG1tmKsH9+NGlHLY8U2NsbpcJIjUwb2xki8+ZA7ubmYtIIvtBuLhVEPN05yjVaRIB1HAdKYmQDalzW4+iKjDx+B6yU35lzPLqJNk2ZUAuFjdHK7jAbMVVLccOqaVx1FdSBxw19P+yQpZxqRunAub2U5Ks0Tg1/y5xumHZtVzVJ4L5Q6GYj9uNfi24q7LqVdEeb1XvS+wIijRFMM55yQQQQBvmbXJKXqsPZtUko3NrklL1WHs2qSQAFSOGP7sk8fB2zFd1R+GQ/4ZJ46DtmKsuGXr7r7MIBXJktigCNyYVcuNtixQj5M61lnggqmcu6E1IRg4roha1FRObKTm9wotfkWhcG72SNdHfjtcXAbC2wWfQjjKQzcytJTTtlYbWOrWCLYghUsXlEZVLxZvNLSWGNvMlpjYE3AAGJ3LnJlSJomSA2Dmg23KNzwqQyllxAuwtx5wsKW5vbMpznyt3ere9p4gGi08w2+UkqOifca8cU2DcLFKwiw8q6EFhGNyyxyHcWykclS98ZjbEX6FDl6dZJkAlbpasR6lWxZQ6mbU0aU2pLXAtfpC+veEqGabw8+VV+hmLSWnEbOhWrIdN3Q4bLebaFz1ydhtRjkpEjuM51/wARQdY467rjL0BhlfEdjiB0awfNZJ0ruJ0H1Fa7I5iYabMT+x9FfSFlzI46Yx2LhkliuXOxWPG5vHLH2ub7VzNMBr9abtcUnO0m18FdIhvY1PgmfeGfrA7NivioPBEO8T9YHZsV+XSr6o81qfdl9gRFGiKuIPOSCCCAN8za5JS9Vh7NqklG5tckpeqw9m1SSAAVRuGb7rk8dB2zFeVReGf7rk8fB2zFWXBaHZGBtUXK7E9KkdP2KKeNaz1cm297Ie0EelLGN7gFP1lGBG4BoBuQNWvRtbpUBkqJ75YmMNnOcA06rHetSgzNpmAd1ElRJpcckuDbn8Q5udRdLDJoWVwUSSna2FwIAcO54bbhvGP/AJKGrNG4LRYaOHkWhZw5u03cZJae7Sy/FucbGzgQehZw8+q6tVLyRF68f4a3mJl6NlK1r3EuvxWNa57jbbZoKr2f2cJneIWhzY2EFwcC0l9tRHMPamnB1lnuUro3HB7bA7juURnBLeeUhwN5HHynUqRhiZdzzDIyLrC/Ou3VN03OIASkUe1akZ8nQXUDsUnI9FE7FQyU9yzZuZROkWOxtq6FouRK7QII8qyDJk2hJpc4821ahkp4cGm6w3R8ZbHX00vUraYpwjZK0mtqmjEcV/R+F3rsqTSu1rYqeFssLo34gjRPRvWUZdpjSzPiLTgTom32hsITa5ZWDL1kIRuAO/3LlzzrOCTiqNIaVrXGpC6ztYZ0YyyhSOSxxTlzhbYo+V3Okg6+sknzKUgcsGw8EjrwT+PHZsV+We8Dh7xUdYHZMWhLoV9Uec1HuyAiKNEVcSeckEEEAb5m1ySl6rD2bVJKNza5JS9Vh7NqkkABUXho+65fHQdsxXpUThp+65PHQds1RLgtDsjz5IdfQo4lSEhw8iYkLPWjTdyWXg4gjfWtZJ+V2jhfGy2TKsWgx7YyA5ws0aruIsLnd0Lz5kjKT6eeOZmtjr47cLELS2Z4wVPGllng1XDGtIbfc8A68daVfBt5NGlnHGGP8rd7pJg5jdPubmucDfEuxPQsnmAuTsVnzmyxE68VLpkON3SPJ03gagOa6qQJTNPDC3F6qalLYdUA740A2xTrKNNoyvGuxvjzgfFMYGEnDclS7jb8E3H7ZFKX64O3lEX2XErkg+RXRTIcj13E5IJaMWxKgE9xYvt5Vfc1MpXY2+5ZpUSqyZoVdrt3G/kSb45jk36G3E/H5NoyPV2TbPbIIqou6NwljBII/E3WW+pRuRqq+1WOCotrWaLaNl9W+UY22YfZceMDtGigbk7lcM+M2xxqmHpc21wDtNtyqRKtPHJNTb2YlINWKMN3I3EJGSUavYoQx4Nd4F3XgqesjsmLRlm/Alyep6yOyjWkLdX1R57Ue4wIijRFXEnnJBBBAG+Ztckpeqw9m1SSjc2uSUvVYezapJAAVD4a/uqTx8HbNV8VD4a/uqTx8HbNUPgtHlHnmTUmhKdyXsUzselJrNFvIm8JxT1Oi0iwN22/36Ui4+RFGFdoSm0Kh5wxJtgMdSMLkIrqyJyPcnuALz+4UjI+xXEL7X5wie65Uf0s5bYA990AEWjdLNFhdWKhxsAxPmSc0t0T3XXEigkRecVJZvzaMo5xZR19eCcZMHHGP2cfMqT4L0NqaZp2S6ktIVxo6gOaCs9oZrhWTJVWdSwPZnpMeUS0tl2GxBwsdyzbOaiEU7mN+zYOHQ7Yr5DNdUjPKW9UBuhA9birR32ESXhuV6Ro/wCFcOk3BKOCQeFZIpI2HgQP1eq60OxjWlLM+A3k9V1odjGtMW6HBwb/AHGBEUaIqwo85IIIIA3zNrklL1WHs2qSUbm1ySl6rD2bVJIACofDX91SePp+2ar4qHw1fdUnj6ftmqHwTHlHnpwwTEghSLkyezE9KRA12oTLlwHJQri179CYzOG0rtqTjK7AUokFkYaumtuu9JSGAxguCbrlzrruykk4XMpXZCTIVSBMp9kdvGP6UxKe5OdZw58FEllF6u5ZMlVIII2tNiPerHQ1CodYHMcJGYb1M5Jy411geKVknDbKO5RqF1lsX+mqcQfOqlnNOHVjzuY0epSkFcALkgCyqU1V3SVzj+JxKrSuSdTJYSQbpBtKRlqBqCN0Q3JJzQNiukhEpM2TgKP1aq62OxjWnLMeAk/V6rrY7GNactkeDjXe4wIijRFWFHnJBBBAG+Ztckpeqw9m1SSjM2uSUvVYezapNAAVE4afuqXx8HbNV6VN4W6GWbJskcMbpXmaEhrAXOsJWkmw3AKHwWjyecyU3lGKsX0Qyh4FUeif8ElJmdlG/Iqj0T/gkxi8mqySa5K8QijtfpFlYTmXlHwKo9E74In5j5RFvqU+/CNx9gTWhCZWiLLoOVgdmXlHwGo9E74LkZlZR8BqPRO+CMEEPA72pNxxU6MzMpeA1HonfBG3MvKO2hqPRO+CMBkgxgjupo5mZSJ5DUeiclG5k5Q8CqD/AAn/AAUolMgmjaUlIVYpcz8pbKGo9E74JL6FZS8BqPROUBlFfASjDipz6F5S8BqfROQGZeUvAaj0TvgpwQnhga64HQmE9J+JnmVijzTygAB/Y59X7J/wRjNOv8EqB/Cf8Fnw0zouUJJZe5XmZQdbRcTuS9IdvMpr6H1p10c/on/BdtzUrhqo5/RP+CmT2wkRFrOZS4IxrjtKSlU19Fq7wOf0T/gkpM2cobKKo9E/4Jai/gfK6GOTTuAfk1V1sdjGtPWdcDGTZ4KepE8L4i6pDgHtLSR3KMXAOy4K0Va48HIteZsCIo0RUizzkgj0UEAIUn+Wzxbf6QlkEEABAa0aCgAyiQQQgDQRIKSQIBBBBAaCJBABoIkEABGgggAIwiQQAESCCgkCNBBAAQRIIQAK5RoKSAIBBBAFLQQQQB//2Q==" />
							<span>Nolan from IT Team, is gonna be here next week</span>
						</div>
						<div class="ex-updates">
							<span>Remind of the Current Openings</span>
						</div>
					</div>
			`
		},
		{
			name:'slide-4',
			position: { top: 660, left: 2185 },
			content: `
					<span class="big">Eng. Q1 Objectives</span>
					<div class="slider-container">
						<div class="eng-obj">
							<span>
								Build a Cloud Native Team & Align Process of Training Assestment
							</span>
						</div>
						<div class="eng-obj">
							<span>
								Build Fullstack Developers in Argentina
							</span>
						</div>
						<div class="eng-obj">
							<span>
								Promote Solstice Engineers and in general in Argentina
							</span>
						</div>
						<div class="eng-obj">
							<span>
								Thanks to: Nacho Brik, Brian Grau, Javier Montagna, Julia Ansaldi, Nicolas Amorosino, Leisho, Agustín Gimeno, Leo D'Antoni, Gonzalo Lomba, Fernando Mirabile, Eric Frick, Luciano Conde, Nicolas Jeremias, David Assen	
							</span>
						</div>
					</div>
			`
		},
		{
			name:'slide-5',
			position: { top: -800, left: 2200 },
			content: `
				<span class="big">It's available with documentation on <a href="https://github.com/JoelBesada/scrollpath">GitHub</a>.</span>
			`
		},
		{
			name:'slide-6',
			position: { top: -950, left: 1100 },
			content: `
				<span class="big">Feel free to <a href="https://twitter.com/JoelBesada">follow me</a> on Twitter. You can also be <span class="count">a kind person and</span> <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Ftwitter.com%2Fabout%2Fresources%2Fbuttons&source=tweetbutton&text=jQuery%20Scroll%20Path%20Plugin&url=http%3A%2F%2Fjoelb.me%2Fscrollpath%2F&via=JoelBesada" class="tweet">tweet</a> this.</span>
			`
		},
	],
	typesOfMovement: typesOfMovement
};

export { config };

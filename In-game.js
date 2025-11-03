

	const _ = Canva.width = Canva.height = innerWidth < innerHeight ? innerWidth : innerHeight;

    	$ = Canva.getContext("2d")
        	$.path()

            	function mapLoad() {
                		const Size = 10;
                        		const Need = 3;
                                		const Board = [];
                                        		for (let y = 0; y < Size; y++) {
                                                			for (let x = 0; x < Size; x++) {
                                                            				Board[10 * y + x] = 10 * x + y
                                                                            			}
                                                                                        		}
                                                                                                		Qnumber.innerText = Board
                                                                                                        	}

                                                                                                            	function clickCanvas(event) {
                                                                                                                		eventCanvas(event.pageX, event.pageY, true);
                                                                                                                        	}

                                                                                                                            	function eventCanvas(x, y, z) {
                                                                                                                                		const X0 = x - Canva.getBoundingClientRect().x;
                                                                                                                                        		const Y0 = y - Canva.getBoundingClientRect().y;
                                                                                                                                                		if (window.former != undefined) $.fillStyle = former.color
                                                                                                                                                        		$.fillRect(X0, Y0, _ / Size, _ / Size)
                                                                                                                                                                	}

                                                                                                                                                                    	function COLOR(latter) {
                                                                                                                                                                        		if (window.former != undefined) former.background = latter.background
                                                                                                                                                                                		latter.background = latter.color
                                                                                                                                                                                        		former = latter
                                                                                                                                                                                                	}
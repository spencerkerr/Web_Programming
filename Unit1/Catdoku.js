window.onload=function() {
	var catTable;
		catTable = "<table border = '1' style=\"margin-right:auto; margin-left:auto; width:50%;\">"
		for (i=0; i<3; i++) {
			catTable = catTable + "<tr>";
			for (j=0; j<3; j++) {
				catTable = catTable + "<tr>";
				for (k=0; k<3; k++) {
					catTable  = catTable + "<td id = \"cat"+i+j+k+"\" align=\"center\"><img src=\"one.jpg\" height=\"30%\" ></td>";
				}
				for (l=0; l<3; l++) {
					catTable  = catTable + "<td id = \"cat"+i+j+l+"\"align=\"center\"><img src=\"two.jpg\" height=\"30%\"></td>";
				}
				for (l=0; l<3; l++) {
					catTable  = catTable + "<td id = \"cat"+i+j+l+"\"align=\"center\"><img src=\"seven.jpg\" height=\"30%\"></td>";
				}
				catTable = catTable + "</tr>";
			}
			catTable = catTable + "</tr>";
		}
		catTable = catTable + "</table>";
		document.write(catTable);
}

function initilize() {
}


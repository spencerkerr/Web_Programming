window.onload=function() {
	var catTable;
		catTable = "<table>"
		for (i=1; i<=3; i++) {
			catTable = catTable + "<tr><td>";
			for (j=0; j<3; j++) {
				catTable = catTable + "<td><table><tr>";
				for (k=0; k<3; k++) {
					catTable  = catTable + "<td><img id=\"cat"+i+j+k+"\" onclick=\"catClick("+i+j+k+")\" src=\"zero.jpg\"></td>";
				}
				catTable = catTable + "</tr><tr>";
				for (l=3; l<6; l++) {
					catTable  = catTable + "<td><img id=\"cat"+i+j+l+"\" onclick=\"catClick("+i+j+l+")\" src=\"zero.jpg\"></td>";
				}
				catTable = catTable + "</tr><tr>";
				for (m=6; m<9; m++) {
					catTable  = catTable + "<td><img id=\"cat"+i+j+m+"\" onclick=\"catClick("+i+j+m+")\" src=\"zero.jpg\"></td>";
				}
				catTable = catTable + "</tr></table></td>";
			}
			catTable = catTable + "</td></tr>";
		}
		catTable = catTable + "</table>";
		document.getElementById("cats").innerHTML = catTable;
}
function initilize() {
}

function catClick(catPos) {
	var img = document.getElementById("cat"+catPos);
	var str = img.src.substring(img.src.lastIndexOf("/")+1,img.src.length);
	switch (str) {
		case "zero.jpg":
			img.src="one.jpg";
			break
		case "one.jpg":
			img.src="two.jpg";
			break;
		case "two.jpg":
			img.src="three.jpg";
			break;
		case "three.jpg":
			img.src="four.jpg";
			break;
		case "four.jpg":
			img.src="five.jpg";
			break;
		case "five.jpg":
			img.src="six.jpg";
			break;
		case "six.jpg":
			img.src="seven.jpg";
			break;
		case "seven.jpg":
			img.src="eight.jpg";
			break;
		case "eight.jpg":
			img.src="nine.jpg";
			break;
		case "nine.jpg":
			img.src="zero.jpg";
			break;
	}
}
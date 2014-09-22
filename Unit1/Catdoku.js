var fixedCats =[];
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
		catTable = catTable + "<input type=\"button\" id=\"myButton\" onclick=\"initialize(fixedCats)\" value=\"Reset Puzzle\"/>";
		catTable = catTable + "<input type=\"button\" id=\"myButton\" onclick=\"initialize(fixedCats)\" value=\"Check Solution\"/>";
		document.getElementById("cats").innerHTML = catTable;
		initialize(fixedCats);
}

function initialize(fixedCats) {
	//upper left block
	document.getElementById("cat100").src="zero.jpg";	//zero
	document.getElementById("cat101").src="four.jpg";
	document.getElementById("cat102").src="five.jpg";
	document.getElementById("cat103").src="eight.jpg";
	document.getElementById("cat104").src="one.jpg";
	document.getElementById("cat105").src="zero.jpg";	//zero
	document.getElementById("cat106").src="seven.jpg";
	document.getElementById("cat107").src="zero.jpg";	//zero
	document.getElementById("cat108").src="nine.jpg";
	//upper middle block
	document.getElementById("cat110").src="eight.jpg";
	document.getElementById("cat111").src="zero.jpg";	//zero
	document.getElementById("cat112").src="three.jpg";
	document.getElementById("cat113").src="zero.jpg";	//zero
	document.getElementById("cat114").src="zero.jpg";	//zero
	document.getElementById("cat115").src="zero.jpg";	//zero
	document.getElementById("cat116").src="zero.jpg";	//zero
	document.getElementById("cat117").src="zero.jpg";	//zero
	document.getElementById("cat118").src="zero.jpg";	//zero
	//upper right block
	document.getElementById("cat120").src="seven.jpg";
	document.getElementById("cat121").src="one.jpg";
	document.getElementById("cat122").src="zero.jpg";	//zero
	document.getElementById("cat123").src="zero.jpg";	//zero
	document.getElementById("cat124").src="two.jpg";
	document.getElementById("cat125").src="four.jpg";
	document.getElementById("cat126").src="five.jpg";
	document.getElementById("cat127").src="zero.jpg";	//zero
	document.getElementById("cat128").src="eight.jpg";
	//middle left block
	document.getElementById("cat200").src="zero.jpg";	//zero
	document.getElementById("cat201").src="zero.jpg";	//zero
	document.getElementById("cat202").src="zero.jpg";	//zero
	document.getElementById("cat203").src="zero.jpg";	//zero
	document.getElementById("cat204").src="zero.jpg";	//zero
	document.getElementById("cat205").src="zero.jpg";	//zero
	document.getElementById("cat206").src="zero.jpg";	//zero
	document.getElementById("cat207").src="zero.jpg";	//zero
	document.getElementById("cat208").src="zero.jpg";	//zero
	//middle middle block
	document.getElementById("cat210").src="nine.jpg";
	document.getElementById("cat211").src="zero.jpg";	//zero
	document.getElementById("cat212").src="seven.jpg";
	document.getElementById("cat213").src="zero.jpg";	//zero
	document.getElementById("cat214").src="six.jpg";
	document.getElementById("cat215").src="zero.jpg";	//zero
	document.getElementById("cat216").src="four.jpg";
	document.getElementById("cat217").src="zero.jpg";	//zero
	document.getElementById("cat218").src="two.jpg";
	//middle right  block
	document.getElementById("cat220").src="zero.jpg";	//zero
	document.getElementById("cat221").src="zero.jpg";	//zero
	document.getElementById("cat222").src="zero.jpg";	//zero
	document.getElementById("cat223").src="zero.jpg";	//zero
	document.getElementById("cat224").src="zero.jpg";	//zero
	document.getElementById("cat225").src="zero.jpg";	//zero
	document.getElementById("cat226").src="zero.jpg";	//zero
	document.getElementById("cat227").src="zero.jpg";	//zero
	document.getElementById("cat228").src="zero.jpg";	//zero
	//lower left block
	document.getElementById("cat300").src="six.jpg";
	document.getElementById("cat301").src="zero.jpg";	//zero
	document.getElementById("cat302").src="four.jpg";
	document.getElementById("cat303").src="three.jpg";
	document.getElementById("cat304").src="two.jpg";
	document.getElementById("cat305").src="zero.jpg";	//zero
	document.getElementById("cat306").src="zero.jpg";	//zero
	document.getElementById("cat307").src="five.jpg";
	document.getElementById("cat308").src="seven.jpg";
	//lower middle block
	document.getElementById("cat310").src="zero.jpg";	//zero
	document.getElementById("cat311").src="zero.jpg";	//zero
	document.getElementById("cat312").src="zero.jpg";	//zero
	document.getElementById("cat313").src="zero.jpg";	//zero
	document.getElementById("cat314").src="zero.jpg";	//zero
	document.getElementById("cat315").src="zero.jpg";	//zero
	document.getElementById("cat316").src="three.jpg";
	document.getElementById("cat317").src="zero.jpg";	//zero
	document.getElementById("cat318").src="eight.jpg";
	//lower right block
	document.getElementById("cat320").src="three.jpg";
	document.getElementById("cat321").src="zero.jpg";	//zero
	document.getElementById("cat322").src="five.jpg";
	document.getElementById("cat323").src="zero.jpg";	//zero
	document.getElementById("cat324").src="eight.jpg";
	document.getElementById("cat325").src="seven.jpg";
	document.getElementById("cat326").src="two.jpg";
	document.getElementById("cat327").src="six.jpg";
	document.getElementById("cat328").src="zero.jpg";	//zero
	var cats = [101,102,103,104,106,108,110,112,120,121,124,125,126,128,210,212,214,216,218,300,302,303,304,307,308,316,318,320,322,324,325,326,327];
	for (i = 0; i < cats.length;i++) {
		fixedCats.push(cats[i]);
	}
}

function catClick(catPos) {
	var img = document.getElementById("cat"+catPos);
	var str = img.src.substring(img.src.lastIndexOf("/")+1,img.src.length);
	if (fixedCats.indexOf(parseInt(catPos))==-1) {
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
}
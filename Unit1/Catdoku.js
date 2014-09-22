var fixedCats =[];
var current =[];
var solution =[2,4,5,8,1,3,7,6,9,8,9,3,5,7,6,2,1,4,7,1,6,9,2,4,5,3,8,5,3,6,4,9,2,1,7,8,9,8,7,1,6,5,4,3,2,1,4,2,8,7,3,6,5,9,6,8,4,3,2,1,9,5,7,7,2,1,6,5,9,3,4,8,3,9,5,4,8,7,2,6,1];
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
		catTable = catTable + "<input type=\"button\" id=\"myButton\" onclick=\"checkSolution(current, solution)\" value=\"Check Solution\"/>";
		document.getElementById("cats").innerHTML = catTable;
		initialize(fixedCats, current);
}

function initialize(fixedCats, current, solution) {
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
	var curr = [0,4,5,8,1,0,7,0,9,8,0,3,0,0,0,0,0,0,7,1,0,0,2,4,5,0,8,0,0,0,0,0,0,0,0,0,9,0,7,0,6,0,4,0,2,0,0,0,0,0,0,0,0,0,6,0,4,3,2,0,0,5,7,0,0,0,0,0,0,3,0,8,3,0,5,0,8,7,2,6,0];
	for (i = 0; i < curr.length;i++) {
		current.push(curr[i]);
	}
}
function checkSolution(current, solution) {
	var correct = false;
	var currentString = current.toString();
	var solutionString = solution.toString();
	if (currentString == solutionString) {
		correct = true;
	}
	if (correct) {
		alert("You got it right!");
	} else {
		alert("You have something wrong");
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
		switch(catPos) {
			//upper left
			case 100:
				current[0] = (current[0] + 1) % 10;
				break;
			case 101:
				current[1] = (current[1] + 1) % 10;
				break;
			case 102:
				current[2] = (current[2] + 1) % 10;
				break;
			case 103:
				current[3] = (current[3] + 1) % 10;
				break;
			case 104:
				current[4] = (current[4] + 1) % 10;
				break;
			case 105:
				current[5] = (current[5] + 1) % 10;
				break;
			case 106:
				current[6] = (current[6] + 1) % 10;
				break;
			case 107:
				current[7] = (current[7] + 1) % 10;
				break;
			case 108:
				current[8] = (current[8] + 1) % 10;
				break;
				
			//upper middle
			case 110:
				current[9] = (current[9] + 1) % 10;
				break;
			case 111:
				current[10] = (current[10] + 1) % 10;
				break;
			case 112:
				current[11] = (current[11] + 1) % 10;
				break;
			case 113:
				current[12] = (current[12] + 1) % 10;
				break;
			case 114:
				current[13] = (current[13] + 1) % 10;
				break;
			case 115:
				current[14] = (current[14] + 1) % 10;
				break;
			case 116:
				current[15] = (current[15] + 1) % 10;
				break;
			case 117:
				current[16] = (current[16] + 1) % 10;
				break;
			case 118:
				current[17] = (current[17] + 1) % 10;
				break;
				
			//upper right
			case 120:
				current[18] = (current[18] + 1) % 10;
				break;
			case 121:
				current[19] = (current[19] + 1) % 10;
				break;
			case 122:
				current[20] = (current[20] + 1) % 10;
				break;
			case 123:
				current[21] = (current[21] + 1) % 10;
				break;
			case 124:
				current[22] = (current[22] + 1) % 10;
				break;
			case 125:
				current[23] = (current[23] + 1) % 10;
				break;
			case 126:
				current[24] = (current[24] + 1) % 10;
				break;
			case 127:
				current[25] = (current[25] + 1) % 10;
				break;
			case 128:
				current[26] = (current[26] + 1) % 10;
				break;
				
			//middle left
			case 200:
				current[27] = (current[27] + 1) % 10;
				break;
			case 201:
				current[28] = (current[28] + 1) % 10;
				break;
			case 202:
				current[29] = (current[29] + 1) % 10;
				break;
			case 203:
				current[30] = (current[30] + 1) % 10;
				break;
			case 204:
				current[31] = (current[31] + 1) % 10;
				break;
			case 205:
				current[32] = (current[32] + 1) % 10;
				break;
			case 206:
				current[33] = (current[33] + 1) % 10;
				break;
			case 207:
				current[34] = (current[34] + 1) % 10;
				break;
			case 208:
				current[35] = (current[35] + 1) % 10;
				break;	
			
			//middle middle
			case 210:
				current[36] = (current[36] + 1) % 10;
				break;
			case 211:
				current[37] = (current[37] + 1) % 10;
				break;
			case 212:
				current[38] = (current[38] + 1) % 10;
				break;
			case 213:
				current[39] = (current[39] + 1) % 10;
				break;
			case 214:
				current[40] = (current[40] + 1) % 10;
				break;
			case 215:
				current[41] = (current[41] + 1) % 10;
				break;
			case 216:
				current[42] = (current[42] + 1) % 10;
				break;
			case 217:
				current[43] = (current[43] + 1) % 10;
				break;
			case 218:
				current[44] = (current[44] + 1) % 10;
				break;
				
			//middle right
			case 220:
				current[45] = (current[45] + 1) % 10;
				break;
			case 221:
				current[46] = (current[46] + 1) % 10;
				break;
			case 222:
				current[47] = (current[47] + 1) % 10;
				break;
			case 223:
				current[48] = (current[48] + 1) % 10;
				break;
			case 224:
				current[49] = (current[49] + 1) % 10;
				break;
			case 225:
				current[50] = (current[50] + 1) % 10;
				break;
			case 226:
				current[51] = (current[51] + 1) % 10;
				break;
			case 227:
				current[52] = (current[52] + 1) % 10;
				break;
			case 228:
				current[53] = (current[53] + 1) % 10;
				break;
			
			//lower left
			case 300:
				current[54] = (current[54] + 1) % 10;
				break;
			case 301:
				current[55] = (current[55] + 1) % 10;
				break;
			case 302:
				current[56] = (current[56] + 1) % 10;
				break;
			case 303:
				current[57] = (current[57] + 1) % 10;
				break;
			case 304:
				current[58] = (current[58] + 1) % 10;
				break;
			case 305:
				current[59] = (current[59] + 1) % 10;
				break;
			case 306:
				current[60] = (current[60] + 1) % 10;
				break;
			case 307:
				current[61] = (current[61] + 1) % 10;
				break;
			case 308:
				current[62] = (current[62] + 1) % 10;
				break;	
				
			//lower middle
			case 310:
				current[63] = (current[63] + 1) % 10;
				break;
			case 311:
				current[64] = (current[64] + 1) % 10;
				break;
			case 312:
				current[65] = (current[65] + 1) % 10;
				break;
			case 313:
				current[66] = (current[66] + 1) % 10;
				break;
			case 314:
				current[67] = (current[67] + 1) % 10;
				break;
			case 315:
				current[68] = (current[68] + 1) % 10;
				break;
			case 316:
				current[69] = (current[69] + 1) % 10;
				break;
			case 317:
				current[70] = (current[70] + 1) % 10;
				break;
			case 318:
				current[71] = (current[71] + 1) % 10;
				break;
				
			//lower right
			case 320:
				current[72] = (current[72] + 1) % 10;
				break;
			case 321:
				current[73] = (current[73] + 1) % 10;
				break;
			case 322:
				current[74] = (current[74] + 1) % 10;
				break;
			case 323:
				current[75] = (current[75] + 1) % 10;
				break;
			case 324:
				current[76] = (current[76] + 1) % 10;
				break;
			case 325:
				current[77] = (current[77] + 1) % 10;
				break;
			case 326:
				current[78] = (current[78] + 1) % 10;
				break;
			case 327:
				current[79] = (current[79] + 1) % 10;
				break;
			case 328:
				current[80] = (current[80] + 1) % 10;
				break;
		}
	}
}
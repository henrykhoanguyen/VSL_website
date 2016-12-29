var auInfo = {
	title: ["Cute Dog",
			"Pretty Cat", 
			"Mina's Lab", 
			"Lovelyz", 
			"Be Dung",
			"Cute","Pretty","Gfriend"],

	time: ["12-2-2016",
			"10-5-2016",
			"7-5-2016",
			"3-15-2016",
			"2-11-2016","blah","blah","2015"],

	description: [

		"<p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p><p>Many people also have their own barometers for what makes a cute dog.</p>",
        
        "<p>Cute cats come in a variety of shapes and sizes. Some cute cats are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p><p>Many people also have their own barometers for what makes a cute cat.</p>",

        "<p>Mina takes many cute pictures of her labrador on her IG.</p><p>click <a href=\"https://www.instagram.com/p/BOb-SidjFJO/?taken-by=kvwowv\">here</a> to see more</p>",

        "<p>Lovelyz is an underappreciated group. Please love them more!</p>",

        "<p>Be Dung is a cutie and that is all.</p>",
        "<p>Lovelyz is an underappreciated group. Please love them more!</p>",
        "<p>Lovelyz is an underappreciated group. Please love them more!</p>",
        "<p>Gfriend is an underappreciated group. Please love them more!</p>"]
};

var nganh = auInfo;
var content = "";
for(var i = 0; i < nganh.title.length; i++){
	content += "<div class=\"column\"><div class=\"ui card\" style=\"margin-right:auto; margin-top:0;\"><div class=\"content\"><div class=\"header\">" + nganh.title[i] + "</div>" +
	      "<div class=\"meta\">" + nganh.time[i] + "</div>" +
	      "<div class=\"description\">" + nganh.description[i] + "</div></div></div></div>";
}

document.getElementById("dis").innerHTML = content;
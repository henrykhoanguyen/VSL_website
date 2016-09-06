function mySongs (pos) {
	var songA, songB;/* songC, songD, songE, songF, songG, songH, songI, songJ, songK, songL, songM, 
		songN, songO, songP, songQ, songR, songS, songT, songU, songV, songW, songX, songY, songZ;*/

	songA = {
		titles: ["Adong Evà", "Ai Cho","Anh Em","Anh Em Ta Về","Ánh Sao Rơi","Ấu Nhi","Ấu Nhi Ca","Ấu Nhi Ca 2","Ấu Nhi Ngoan",
				"Ai Sinh Ai Nuôi","Amazing Grace (Hồng Ân Thiên Chúa)","Awesome God"],

		lyrics: ["Ngày xưa Adong Evà, Thiên Chúa cho làm mẹ cha.<br>Đặt tên muôn loài muôn thú, con này là con gì?",

				"Ai cho em trái chín mọng trên ngày cây?<br>Ai cho tinh tú sáng soi trên vòm trời?<br>Chính Chúa dựng nên trời trăng sao lấp lánh.<br>Chính Chúa ban trái ngọt chín thơm trên cành.",

				"Tôi hỏi anh nhé: tại sao bốn phương một nhà?<br>Tại sao chúng mình lại là anh em?<br>Xin trả lời anh vì ta sống chung trên đời.<br>Vì ta có một người Cha trên trời.",

				"Anh em ta về cùng nhau ta quây quần (nè) một hai ba bốn năm.<br>Anh em ta về cùng nhau ta sum họp nè năm bốn ba hai một.<br>Một đều chân bước nhé. Hai quay nhìn nhau đi.<br>Ba cầm tay chắc nhé không muốn ai chia lìa.<br>Bốn nhớ rằng chúng ta bốn biển anh em một nhà.<br>Năm nhớ mãi tình này trong câu ca.",

				"Ngước mắt lên trời con thấy ánh trăng sao,<br>con hỏi Chúa nơi nào.<br>Mẹ bảo Chúa trên cao.<br>Ngước mắt lên trời con thấy ánh trăng sao,<br>con hỏi Chúa đâu rồi.<br>Trong lòng con con ơi.<br>Phía xa chân trời, mây trắng xóa chơi vơi,<br>con mộng ước lên trời để được đến muôn nơi.<br>Nắng soi bên thềm, như ánh mắt vui thêm,<br>con mộng ước êm đềm, lên trời ru êm êm.",

				"Em là Ấu Nhi, em luôn ngoan hiền.<br>Em là Ấu Nhi, em yêu Giêsu.<br>Em vâng lời em chuyên cần ngày đêm cố gắng.<br>Em vâng lời em vui đùa em luôn chăm ngoan.",

				"Ðoàn em như nhũng mầm mạng non xanh tươi,<br>luôn vui cười luôn ngoan ngoãn sống đời Ấu Nhi.<br>Nguyện bền chí theo gương Chúa Giêsu tuổi thơ,<br>dưới bóng cờ em mang Chúa cho tuổi Ấu thơ.",

				"Như những nụ hoa xuân xinh,<br>em Ấu Nhi luôn hiền hoà,<br>luôn tươi cười tươi như hoa.<br>Đời em nguyện luôn chăm ngoan.<br>Noi theo gương Chúa Hài Đồng.<br>Em yêu đời mến mọi người,<br>và sống mãi tuổi ngây thơ",

				"Ấu Nhi ơi, chóng ngoan nhe.<br>Vì Chúa Trời Ngài thương bé luôn kia.<br>Gắng chăm lo, mến Giê-Su và yêu người Ngài thương bé nhiều.",

				"Ai sinh em trên đời?<br>Là Ba Má em.<br>Ai cho em no đầy?<br>Là chính Chúa Trời.",

				"Amazing Grace, how sweet the sound,<br>That saved a wretch like me.<br>I once was lost but now I'm found,<br>Was blind, but now I see.<br><br>'twas Grace that taught,<br>my heart to fear.<br>And grace, my fears relieved.<br>How precious did that grace appear,<br>the hour I first believed.<br><br>Through many dangers, toils and snares,<br>I have already come.<br>'tis grace that brought me safe thus far,<br>and grace will lead us home.<br>The Lord has promised good to me,<br><br>His word my hope secures.<br>He will my shield and portion be,<br>as long as life endures.<br><br>When we've been there ten thousand years,<br>bright shining as the sun.<br>We've no less days to sing God's praise,<br>than when we first begun.<br><br>Amazing Grace, how sweet the sound,<br>That saved a wretch like me.<br>I once was lost but now am found,<br>Was blind, but now, I see.",

				"When He rolls up His sleeves<br>He ain't just puttin' on the Ritz<br>(our God is an Awesome God)<br>There is thunder in His footsteps<br>And lightning in His fists<br>(our God is an Awesome God)<br>Well the Lord He wasn't jokin'<br>when He kicked 'em out of Eden<br>It wasn't for no reason that He shed His blood<br>His return is very close and so you better be believin'<br>That our God is an Awesome God<br><br>[REFRAIN]<br>Our God (our god) is an Awesome God<br>He Reigns (he reigns) from heaven above<br>With Wisdom (with wisdom) pow'r and love<br>Our God is an Awesome God<br><br>When the sky was starless in the void of the night<br>(our god is an awesome god)<br>He spoke into the darkness and created the light<br>(our god is an awesome god)<br>Judgement and wrath He poured out the Sodom<br>Mercy and grace He gave us at the cross<br>I hope that we have not too quickly forgotten that<br>Our God is an Awesome God<br><br>[REFRAIN x3]"]
	};
	
	songB = {
		titles: ["Bác Ái","Bài Ca Thân Ái","Bà Ngồi Bà Rung Đùi","Bàn Tay Của Bé","Bàn Tay Xây Dựng","Bắt Cua",
				"Bảy Ơn Đức Chúa Thánh Thần","Bé Muốn Lên Thiên Ðàng","Bên Sông Jordan","Bí Bo Xình Xịch","Bốn Phương Trời",
				"Bông Hoa Ðẹp","Bước Chân Cho Ðều 1","Bướm Vàng","Bên Nhau"],
		
		lyrics: ["Bác ái là yêu người, không phân biệt một ai.<br>Không phân biệt sang hèn, giầu nghèo hay khác chí hướng.<br>Bác ái là yêu người, yêu tất cả mọi người.<br>Yêu trong tình yêu Chúa, sẵn sàng vì Chúa yêu thương.",
				
				"Nắm tay nhau chúng ta kết đoàn.<br>Nắm tay nhau mình ca hát vang.<br>Tay cầm tay thân ái muôn người một nhà.<br>Chúng ta nguyện một lòng yêu quê hương ta.<br>Bắc Trung Nam chúng ta kết đoàn.<br>Bắc Trung Nam dù cho cách ngăn.<br>Đây bài ca thân ái chung một nhịp cầu.<br>Lấp đi mọi hận thù ta thương yêu nhau.",
				
				"Bà ngồi bà rung đùi.<br>Bà ngồi bà rung chân.<br>Gian nan không thiếu thở nan.<br>Đấm lưng, đấm lưng cho bà.<br>Ba khen em ngoan.",
		
				"Ai cho em có đôi tay này?<br>Tay xinh ghê, xinh quá là xinh.<br>Đôi bàn tay em 5 ngón búp măng,<br>Xác hồn em Chúa thương tạo thành.",
				
				"Có những bàn tay tô đẹp cuộc đời<br>Có những bàn tay xây dựng tổ quốc.<br>Có những bàn chân đi vào cuộc đời.<br>Không ngại sỏi đá núi cao trên đường.<br><br>Có những bàn tay đem lại hòa bình.<br>Có những bàn tay kết tình bằng hữu.<br>Có những niềm tin chiếu dọi cuộc đời.<br>Đem nguồn vui sống đến trong tâm hồn.",
				
				"Con cua nó ở dưới hang, nói đưa tám cái cảng, hai cái càng,<br>nó đưa cái bùng binh, nó đưa cái sàng xê.<br>Thím Tám thím thấy thím mê,<br>thím thò tay xuống thím bê về nhà.",
				
				"Đức Chúa Thành Thần, Ngài ban ơn xuống trên em:<br>ơn khôn ngoan, ơn hiểu biết, ơn biết lo liệu,<br>ơn không minh, ơn sức mạnh, và đạo đức,<br>ơn biết kính yêu Thiên Chúa là Cha nhân từ.",
				
				"Bé muốn lên thiên đàng nhưng bé hỏng biết làm sao (nè).<br>Bé muốn lên thiên đàng thì bé phải làm thế nào?<br>Bé muốn lên thiên đàng phải mến Chúa à nghen.<br>Bé muốn lên thiên đàng phải yêu hết mọi người.",
				
				"Trên bờ sông Gio-Đan Gioan kêu gọi thống hối.<br>Nước Thánh Hóa Chúa ban. Đem ơn nguồn Tái Sinh.",
				
				"Bí bo xình xịch, bí bo xình xịch<br>Xe tôi đây ai đi kia tránh ra<br>Bí bo xình xịch, bí bo xình xịch<br>Có biết chăng xe vô địch đây mà.<br><br>Xe này mua tận Hoa Kỳ<br>Đèn pha, tay lái cài gì cũng mới toanh<br>Khi no xe chạy rất nhanh<br>Đến khi bụng đói thì phanh khóc nhè.",
				
				"Bốn phương trời ta về đây chung vui.<br>Không phân chia giọng nói tiếng cười.<br>Cùng nắm tay ta kết tình thân ái.<br>Trao cho nhau những gì thiết tha.<br>Trao cho nhau những gì thiết tha.",
				
				"Hoa Nở tươi.<br>Hoa nở tươi em hái về dâng.<br>Bao sắc hương, ôi sướng vui em ca vang lừng.<br>Một bông hoa dâng ba nè, một bông hoa dâng về má.<br>Ngàn công ơn như là biển xa.",
				
				"Mình bước cái chân cho đều là mình bước cái chân cho đều,<br>la lá la,<br>mình bước cái chân cho đều.<br>(nhắp cái chân, nhún cái vai, vẫy cái tay, ngoắc ngón tay, gõ gót chân,...).",
				
				"Kìa con bướm vàng.<br>Kìa con bướm vàng.<br>Xoè đôi cánh.<br>Xoè đôi cánh.<br>Tung cánh bay xa xa kìa.<br>Tung cánh bay xa xa kìa.<br>Em nhìn xem. Em nhìn xem.",
				
				"Gần bên nhau, gần bên nhau, ớ bên nhau<br>Mình trao nhau, mình trao nhau, ớ mình trao nhau<br>Tình thương mến, tình thương mến trao nhau nụ cười<br><br>Cầm tay nhau, cầm tay nhau, ớ cầm tay nhau<br>Mình cùng quay, mình cùng quay, ớ mình cùng quay<br>Mình quay mãi, mình quay mãi quay quay đều đều<br><br>Ngày hôm nay, ngành hôm nay, ớ ngày hôm nay<br>Mình gần nhau, mình gần nhau, ớ mình gần nhau<br>Rồi mai mốt, rồi mai mốt ta xa nhau rồi."]
	};

	songC = {
		titles: ["Ca Tạm Biệt","Ca Tâm Niệm","Cái Nhà","Cánh Của Em","Cành Hoa","Câu Cá","Câu Chuyện Tình Thương","Chải Cái Đầu Cho Láng","Chào Anh Mới Tới ",
				"Chào Lửa Thiêng","Chào Mẹ","Chặt","Chát Chạt Bum","Chia Tay","Chiều Tàn","Chim Con","Cho Nhau Niềm Tin","Cho Tôi Xin","Chúa Bảo Đảm","Chúa Bé Thơ Ơi",
				"Chúa Muốn Thế","Chúa Ở Ðâu","Chúa Tạo Dựng","Chúa Tôi Người Việt Nam","Chứng Tá Tin Mừng","Chúng Ta Xum Vầy","Con Chim Nhỏ","Có Chúa","Con Chim Non",
				"Con Chó","Con Cò","Con Cua","Con Tim Trên Bàn Tay","Con Tim Yêu Thương","Cờ Về Tay","Cục Te Te","Cùng Cười Lên","Cùng Quây Quần","Cuộc Hành Trình","","","",""],

		lyrics: ["Rời tay chúng ta vui lên đường nghĩa vụ.<br>Ban ơi đừng quên nhé phút giây xum gầỵ<br>Tay trong tay mình vui lên nhé.<br>Tim sắt se sầu thương não nề.<br>Vui ra đi sầu vương trên mắt.<br>Xa cách nhau, mình nhớ nhau hoài.",
				
				"",
				
				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				"",

				""]
	};

	/*songD = {
		titles: [],
		lyrics: []
	};

	songE ={
		titles: [],
		lyrics: []
	};

	songF = {
		titles: [],
		lyrics: []
	};

	songG = {
		titles: [],
		lyrics: []
	};

	songH = {
		titles: [],
		lyrics: []
	};

	songI = {
		titles: [],
		lyrics: []
	};

	songJ = {
		titles: [],
		lyrics: []
	};

	songK = {
		titles: [],
		lyrics: []
	};

	songL = {
		titles: [],
		lyrics: []
	};

	songM = {
		titles: [],
		lyrics: []
	};

	songN = {
		titles: [],
		lyrics: []
	};

	songO = {
		titles: [],
		lyrics: []
	};

	songP = {
		titles: [],
		lyrics: []
	};

	songQ = {
		titles: [],
		lyrics: []
	};

	songR = {
		titles: [],
		lyrics: []
	};

	songS = {
		titles: [],
		lyrics: []
	};

	songT = {
		titles: [],
		lyrics: []
	};

	songU = {
		titles: [],
		lyrics: []
	};

	songV = {
		titles: [],
		lyrics: []
	};

	songW = {
		titles: [],
		lyrics: []
	};

	songX = {
		titles: [],
		lyrics: []
	};

	songY = {
		titles: [],
		lyrics: []
	};

	songZ = {
		titles: [],
		lyrics: []
	};*/

	var song = [songA, songB, songC/*, songD, songE, songF, songG, songH, songI, songJ, songK, songL, songM,
				songN, songO, songP, songQ, songR, songS, songT, songU, songV, songW, songX, songY,songZ*/];

	var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	var page = "";

    for(var i = 0; i < song[pos].titles.length; i++){
	    page += "<h3 style='margin:0em;'>" + song[pos].titles[i] + "</h3>" + song[pos].lyrics[i] + "<br><br>";
    }

    document.getElementById("letter").innerHTML = letter[pos];
    document.getElementById("allSongs").innerHTML = page;
}
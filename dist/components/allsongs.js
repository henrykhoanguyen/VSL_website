function mySongs (pos) {
	var songA = {
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
	
	var song = [songA, songB, songC, songD, songE, songF, songG, songH, songI, songJ, songK, songL, songM,
				songN, songO, songP, songQ, songR, songS, songT, songU, songV, songW, songX, songY,songZ];

    for(var i = 0; i < song[pos].titles.length; i++){
	    document.write("<h3 style='margin:0em;'>" + song[pos].titles[i] + "</h3>" + song[pos].lyrics[i] + "<br><br>");
    }

}
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
		titles: ["Ca Tạm Biệt","Ca Tâm Niệm","Cái Nhà","Cánh Của Em","Cành Hoa","Càng Đông Càng Vui","Câu Cá","Câu Chuyện Tình Thương","Cares Chorus","Chải Cái Đầu Cho Láng",
				"Chào Anh Mới Tới ","Chào Anh, Chào Chị","Chào Cha","Chào Lửa Thiêng","Chào Mẹ","Chặt","Chát Chạt Bum","Chia Tay","Chiều Tàn","Chim Con","Cho Nhau Niềm Tin",
				"Cho Tôi Xin","Chúa Bảo Đảm","Chúa Bé Thơ Ơi","Chúa Muốn Thế","Chúa Ở Ðâu","Chúa Tạo Dựng","Chúa Tôi Người Việt Nam","Chúc Bình An","Chúc Mừng","Chứng Tá Tin Mừng","Chúng Ta Xum Vầy",
				"Con Chim Nhỏ","Có Chúa","Con Chim Non","Con Chuồn Chuồn","Con Cóc","Con Chó","Con Cò","Con Cua","Con Tim Trên Bàn Tay","Con Voi","Con Tim Yêu Thương","Cờ Về Tay","Cục Te Te","Cùng Cười Lên",
				"Cùng Quây Quần","Cùng Về Đây Ta Hát Ca","Cuộc Hành Trình"],

		lyrics: ["Rời tay chúng ta vui lên đường nghĩa vụ.<br>Ban ơi đừng quên nhé phút giây xum gầỵ<br>Tay trong tay mình vui lên nhé.<br>Tim sắt se sầu thương não nề.<br>Vui ra đi sầu vương trên mắt.<br>Xa cách nhau, mình nhớ nhau hoài.",
				
				"Ðời ta là vui tươi.<br>Ðời công bình bác ái.<br>Trong trắng luôn hy sinh.<br>Ðời ta là ánh quang minh.",
				
				"Cái nhà là nhà của ta, công khó cha ông lập ra.<br>Cháu con hãy gìn giữ lấy, muôn năm với nước non nhà.",

				"Từ thế gian, trông lên thiên đàng, ôi cao quá là cao, em biết lên làm sao.<br>Từ thế gian, trông lên thiên đàng, nhưng với cánh của em, em gắng lên xem nào.<br>Cánh của em là vâng lời ngoan ngoãn, cánh của em là trong trắng xinh tươi.",

				"Mỗi người là một cành hoa, cùng nhau về đây góp gió<br>Làm thành vườn hoa, muôn màu muôn sắc tươi xinh<br>Mỗi người là một cành hoa, cùng nhau về đây góp gió<br>Làm thành vườn hoa, vươn hoa vườn hoa chúng mình.",

				"Càng đông chúng ta càng vui nhiều, càng vui nhiều, càng vui nhiều<br>Càng đông chúng ta càng vui nhiều, càng biết nhiều càng vui<br>Càng đông nhiều, càng vui nhiều, càng biết nhiều, càng hay<br><br>The more we ge together, together, together<br>The more we get together, the happier we are<br>For my friends are your friends and your friends are my friends<br>The more we get together, the happier we'll be",

				"Chiều nay em đi câu cá và đem rá theo bắt cua.<br>Làm sao em được kha khá về cho má nấu canh cua.<br>Ô kìa con cua! Ô kìa con của!<br>Mình đừng la lớn nó chui xuống hang. Mình đừng la lớn nó chui xuống hang.",

				"Có anh chàng, anh đi (đi) về làng. Anh gặp đàng em bé. Ra đây anh kể cho câu chuyện tình thương.<br>Có một lần, khi xưa (xưa) thật xưa. Do lời Thiên Chúa hứa: Giêsu con một Cha xuống trần làm Người.<br>Suốt cuộc đời, ba mươi năm làm người. Vâng lời theo gương sáng, Ha ba năm về sau, ra đời dạy lời<br>Giữa muôn lời, Lời này thật lạ đời. Nhưng là lời hay nhất: Yêu thương anh chị em như là mình vậỵ<br>Dẫu cho là người mình đầy cảm tình, hay người không ưa thích. Luông yêu thương bằng nhau, ấy là lời Thầỵ<br>Kết câu chuyện, anh em tay cầm tay, ta Nguyện xin Thiên Chúa, luông ban cho tình thương, cho đời đẹp nhiều.<br>Hãy kết thành vòng tròn, tròn thật tròn. Ta cùng vui ca hát. Vang lên muôn lời ca, Ca tụng tình thương.",

				"I cast all my cares upon You<br>I lay all of my burdens down at your feet.<br>And any time, that I don't know what to do<br>I will cast all my cares upon You.",

				"Chải cái đầu cho láng, xách cái quần đi bán<br>Kiếm năm đồng thôi <br>Chải cái đầu cho láng, xách cái quần đi bán<br>Bà con biết anh làm tàng<br><br>Mới cái băng hột mít, ây cái đà biết nguýt<br>Ôi con nhà ai<br>Mới cái bằng hột mít, ấy cái đà biết nguýt<br>Ối chà là duyên ghê.",

				"Chào anh, anh mới tới, tới xem chúng em nơi này<br>Lòng em hân hoan vui xay, khi em thấy anh cười thật hay<br>Ối ối trời trời ơi, mặt anh giống như mặt trời<br>Lòng em hân hoan vui xay khi em thấy anh cười thật hay.",

				"Chào là chào anh, chào là chào chị<br>Và hân hoan ta chào nhau<br>Vui sướng thay ta sống bên nhau<br>Trao nhau mến thương làm quen nhau lần đầu<br>Chào là chào anh, chào là chào chị<br>Và hân hoan ta chào nhau.",

				"Hân hoang mừng, kính chúc cha<br>Đoàn con xin dân lên cha<br>Những bài ca, những bài thơ<br>Vui điệp khúc thái hòa.",

				"Ố ô ô ồ, ố ô ô ồ.<br>Cầm tay nhau quay vòng quanh lửa mới.<br>Lửa bốc cháy tâm hồn ta hăng hái.<br>Ðón ánh lửa thiêng,<br>đây đoàn ta, chung lời ca bên lửa bập bùng.<br>Bập bập bùng lửa thiêng reo vui,<br>nhạc trầm trầm hoà ca chơi vơi,<br>lửa rực sáng chiếu đêm âm u<br>anh em ơi, ta cùng nhau lên tiếng ca rằng (vỗ tay 3 cái).<br>Lửa linh thiêng soi màn đêm u tối.<br>Lửa cháy sáng ấm lòng ai lạnh lẽo.<br>Lửa thiêng muôn đời,<br>ta cùng vui đem lửa thiêng soi lòng mọi người.<br>Ố ô ô ồ, ố ô ô ồ.",

				"(TK) Ðoàn con nay chia tay ra đi mỗi người mỗi phương<br>Ôi đau thương nhớ những ngày chung sống bao yêu thương.<br>Lệ rưng rưng rơi, lòng lưu luyến phút giây không rời.<br>Con say sưa dưới đôi mắt Mẹ đầy âu yếm.<br><br>(ÐK) Maria (ôi Maria), xin Mẹ đoái thương (giữ gìn chúng con) như hương hoa xinh tươi.<br>Maria (ôi Maria), xin Mẹ đoái thương (giữ gìn chúng con), có Mẹ con sá gì.",

				"Chặt phứt cái tay cho rồi.<br>Nếu tay nên dịp vấp phạm.<br>Thà cụt đôi tay còn hơn bị thiêu đốt muôn đời",

				"Chát chạt bum bố lố bùm chát chát.<br>Chát chạt bum bô lố bô lô bùm chạc.<br>Chát chạt bum bố lố bùm chát chát.<br>Chạt chát bum bô lố bô lô bùm chạc.",

				"Gặp nhau đây rồi chia tay<br>Ngày vàng như đã vụt qua trong phút giây<br>Niềm hăng say còn chưa phai<br>Đường trường sông núi hẹn mai ta sum vầy<br>Còn trong ta tình bao la<br>Cuộc đời chinh chiến bừng lên bao ước mơ<br>Lời suy tư, lời hôm qua<br>Dặn lòng hãy nhớ lời yêu thương nhắn về.",

				"Chúa ơi, bóng đêm đã xuống rồi.<br>Giờ vui chơi đã chấm dứt Chúa ơi.<br>Khi bạn bè tản mát, lòng con thấy cô đơn.<br>Khi trái đất lạnh lùng hồn con thêm lo lắng<br>Xin Chúa đến ngủ với con đêm nay.",

				"Một ngày kia tôi thấy chim con,<br>chim nó nhảy nhảy mà tôi kêu chim hỡi chim ơi đừng bay mất mà lại bên tôi.<br>Chim chim chim hãy bay vô lồng xinh xắn này đi mà chim kia lúc lắc đuôi con.",

				"Cho nhau niềm tin sưởi ấm tâm hồn<br>Cho nhau tình thương xóa bỏ hận thù<br>Cho nhau niềm vui hằn lên mắt môi<br>Cho nhau hy vọng thắp sáng quê hương.",

				"Cho em xin một bông hồng cài lên áo mới.<br>Cho em xin cành mai trắng cài trên tóc huyền.<br>Cho em xin lời ru hiền vọng ngân đêm vắng.<br>Cho em xin ngành câu hát yêu thương thắm tình.<br><br>Cho em xinh một đêm dài không nghe tiếng súng.<br>Cho em xin ngày hạnh phúc trên non nước mình.<br>Cho em xin ngày thanh bình về trên thôn xóm.<br>Cho em xin bồ câu trắng tung bay khắp trời.",

				"Có Chúa đi với em, em sẽ không còn sợ chi.<br>Có Chúa đi với em, em sẽ không còn thiếu gì.<br>Dù trời đen tối, bước đi không lo lạc lối.<br>Đường dù nguy nan, không chút vấn vương tâm hồn.",

				"Chúa Bé Thơ ơi! con là em Thiếu Nhi.<br>Nên chẳng có xvgì dâng Chúa Hài Đồng.<br>Con chỉ ước trông: mong được như ánh than hồng<br>để sưởi ấm Chúa đêm đông",

				"Xem bàn tay ngón dài ngón ngắn<br>Trong cành cây nhánh cao nhánh thấp.<br><br>Chúa muốn thế, Chúa đã an bài<br>Chúa muốn thế, ta đừng chê cười.<br><br>Trong trời mây khi mờ khi sáng<br>Trông vầng trăng khi tròn khi méo.<br><br>Chúa muốn thế, ...<br>Con người ta khi cười khi khóc<br>Chúa dựng nên mỗi người mỗi tính.<br><br>Chúa muốn thế,...",

				"Với tay lên trời em thấy bóng trăng sao em hỏi Chúa nơi nào?<br>Mẹ bảo Chúa trên cao.<br>Ngước mắt lên nhìn em thấy bóng trăng trôi.<br>Em hỏi Chúa đâu rồi?",

				"Ai cho em trái chín mọng trên ngàn cây?<br>Ai cho tinh tú sáng soi trên vòm trời?<br>Chính Chúa dựng nên trời trăng sao lấp lánh.<br>Chính Chúa ban trái ngọt chín thơm trên cành.",

				"Chúa tôi người Việt Nam không cửa nhà, không giường nệm, chăn êm.<br>Chúa tôi người Việt Nam không bạc tiền, không đền đài quyền quí.<br>Người ở đó, nông phu già, một buổi sáng trâu ra đồng, mạ lên, lúa xanh.<br>Chúa tôi người Việt Nam không quảng ngại nắng bốn mùa.<br>Chúa tôi là người Việt Nam không quảng ngại gió bốn phương.<br>Chúa tôi dù ở đâu, mang hình hài nào cũng là người Việt Nam tôi (2 lần).",

				"Bình an của Chúa hằng ở với mọi người.<br>Cầm ta thân ái mến chúc nhau bình an.<br>Chúa thương con người, Chúa kết liền với người.<br>Bình an của Chúa mãi mãi trong muôn người",

				"Chúc mừng! Chúc mừng! (Hoan hô)<br>Chúng ta cùng ca a á a á a a à!",

				"Ta đi về miền ruộng nghèo. <br>Ta đi về thành thị buồn. <br>Ta đi cho tiếng nấc đêm đen không còn. <br>Ta đi làm chứng nhân cho Giê-Su đến cùng thế giới. <br>Niềm tin ta mang trong tim là trái tim ngây ngất tình yêu. <br>Ta đi vào lòng cuộc đời. <br>Ta đi rộn đẹp tình người. <br>Ta đi như tiếng hát cao lên vời vợi.<br>Ta đi làm chứng nhân cho yêu thương đi vào thế giới. <br>Niềm tin đi xây tương lai là mắt môi chan chứa niềm tin. <br>Trong lòng con con ơi.",

				"Tình là tình tang chúng ta xum vầy.<br>Muôn phương trời ta gặp nhau đây.<br>Tình là tình tang vui tình thân ái.<br>Tiếng hoan ca lừng vang chốn này.<br>Tình là tình tang chúng ta chung lời.<br>Cho hương đời thắm một niềm vui.<br>Tình là tình tang tâm hồn phơi phới.<br>Chúng ta gieo nguồn vui khắp nơi.",

				"Em chỉ là một con chim nhỏ bé.<br>Sung sướng sống trong tình Mẹ vỗ về.<br>Gió mây quyện vui ca trên ngàn lá.<br>Sống êm đềm anh em chung một nhà.",

				"Nhìn sao lấp lánh trên trời.<br>Nhìn cây xanh tốt muôn nơi.<br>Em tin có Ðấng tác sinh nên đó là chích Chúa Trời.",

				"Có con chim non đậu trên cây lành,<br>Nó hót một mình, nó hót líu lo,<br>Líu lo líu líu líu lo lí",

				"Con chuồn chuồn đậu trên cành trúc, thằng cu tí lom khom đến gần<br>Cu tèo đứng kế bờ ao, giơ tay lên miệng nghêu ngao ca rằng:<br>Chuồn chuồn có cánh thì bay (bay đi mau)(2x)<br>Có thằng cu Tí, cháu bà Cụ Lý thò tay bắt ngay đuôi mày",

				"Anh em ta ơi! Ơi ra kia mà coi con gì nó ngồi trong góc?<br>Nó đưa cái lứng ra ngoài. Đó là con cóc.<br>Con cóc nó ngồi trong góc nó đưa cái lưng ra ngoài đó là con cóc.",

				"Nhà em có nuôi một con chó<br>Trông nó to như con bò<br>Sáng nó kêu gấu gấu gấu<br>Trưa nó kêu gầu gầu gầu<br>Đêm nó kêu gàu gàu gàu.<br><br>Nhà em có nuôi một con dế<br>Trong nó đen như than hầm<br>Nay nó kêu réc réc réc<br>Mai nó kêu rẹc rẹc rẹc<br>Mốt nó kêu rẹc rẹc rẹc.",

				"Con cò (cò) bay lả (lả) bay la,<br>bay qua (qua) ruộng lúa,<br>bay về ( về) đồng xanh.<br>Tình tính tang, tang tính tình,<br>dân làng rằng, dân làng ơi,<br>rằng có nhớ, nhớ hay không,<br>rằng có nhớ, nhớ hay không?",

				"Con cua nó ở dưới hang<br>Nó đưa tám cái cẳng hai cái càng<br>Nó đưa cái bùng binh, nó đưa cái xàng xê<br>Thím Tám thím thấy thím mê<br>Thím thò tay xuống thím đem về nhà.",

				"Con tim trên bàn tay, anh trao trao em này.<br>Ðong đưa nơi bàn tay, tình yêu thương vơi đầy.<br>Hò lơ hó lớ ho lơ. Hò lơ hó lớ ho lơ.<br>Con tim trong lòng em, em trao trao anh này.<br>Lao xao nơi lòng em, tình thương ôi tuyệt vời!<br>Tình tang tính tính tang tang.<br>Tình tang tính tính tang tang.<br>Con tim vẫn còn đây, ta luôn luôn giữ gìn.<br>Cho tim ta sạch trong, và luôn luôn vẹn tuyền.<br>Là la lá lá la la.<br>Là la lá lá la la.",

				"Kìa nhìn xem trên kia  có cái con chi to ghê<br>Trông xa lớn như xe hơi. Đang lăn bánh xe đi chơi<br>À, thì ra con voi. Như vậy mà nghĩ ngợi hoài<br>Đằng sau nó mang một cái đuôi. Và cái đuôi trên đầu...",

				"(ÐK) Này anh này chị này em,<br>Con tim không bao giờ ghen ghét.<br>Này em này chị này anh,<br>Con tim không bao giời ghét ghen.<br>(TK) Tim ghét ghen là tim héo hon.<br>Tim ghen ghét là tim úa tàn.<br>Tim xanh xao là tim thiếu máu.<br>Tim ghen ghét là tim ghét ghen.",

				"Cờ về tay trong tay lá cờ bay!<br>Bao hân hoan reo mừng vui sướng thay!<br>Nguyện từ nay dưới cờ luôn hăng say.<br>Thắng không kiêu, bại không nản mới hay,<br><br>Cờ về tay trong tay khéo rời tay!<br>Vui hôm nay mai buồn đâu có hay!<br>Vì mình vui mất cờ nhưng không sao!<br>Cố vươn lên giựt lại cờ mới hay.",

				"Cục te te có con gà da nâu<br>Gần nhà cụ Lý nó kêu cục te te<br>Cục te te có con gà da nâu<br>Gần ngày đi Tết nó kêu tích tè.",

				"Cùng cười lên ha ha ha<br>Cùng cười lên ha ha ha<br>Cùng cười lên cho rớt cái răng<br>Rắng rớt xuống tay, tay gắn răng vào.",

				"Cùng quây cùng ta vui vui vui<br>Ta hát với nhau chơi chơi chơi<br>Rồi lên tiếng reo cười cười cười<br>Làm vui thú bao người người người<br><br>Kìa trông nàng thật xinh xinh xinh<br>Sao mặt cứ hay vênh vênh vênh<br>Hiền như cái con chằng chằng chằng<br>Rồi cô sẽ ế chồng chồng chồng<br>Này anh chàng đẹp trai trai trai<br>Tóc dựng đứng như gai gai gai<br>Lại ăn nói ngang tàng tàng tàng<br>Tìm sao thấy cô nàng nàng nàng.",

				"Cùng về đây ta hát ta ca, cho bầu trời tươi lên sức sống.<br> Cho ngàn hoa lá luôn reo cười, cho tình ca tươi thắm ngàn nơi.",

				"Cuộc hành trình ta đi về đất hứa, qua bao gian khổ đau thương cuối cùng.<br>Ðường còn xa, đường còn xa, ta cứ đi tới miền an vui.<br>Cuộc hành trình ta đi về đất hứa, băng qua thung lũng non cao suối ngàn.<br>Lời trào dâng, lời trào dâng, ta vẫn tin tin vào tương lai."]
	};

	songD = {
		titles: ["Dập Bi Da","Dấu Chân Lịch Sử","Đây là Đâu","Ðèo Cao","Ðếm Sao","Ði Bộ","Đi Dựng Niềm Tin","Đi Tìm Thiên Chúa","Đi Theo Cột Mây",
				"Ði Tàu Lửa","Đi Tìm Chúa","Đi Vì Sứ Mệnh","Diệt Muỗi","Ðố Ðếm","Đôi Bàn Tay","Đời Nghĩa Sĩ","Đồng Hồ","Đón Nhau Về Hội Ngộ","Ðứng Ngồi",
				"Đường Damas Khi Xưa","Đường Đi Khó","Đường Về Đất Hùa","Ðường Về Sinai","Đường Yêu Thương"],

		lyrics: ["Dập bi đa da da dập bi da<br>Dập bi da da da dập bi da<br>Dấp bi da dấp bi da dập bi da",
				
				"Một bước chân đi lên, hàng ngàn bàn chân bước tới <br>Đi xây đời, đi xây tình, đi xây lòng người hôm nay. <br>Tôi góp một bàn chân <br>Cùng anh góp một bàn chân ta cùng vươn tới <br>Làm dấu chân lịch sử xây dựng quyê hương.",
				
				"Đây là đâu mà lòng mến thương vô bờ, <br>phút tương phùng cùng trao gởi những mến thươngđ đời ta. <br>Trời cao xanh lòng người mênh mông bạn hãy nhớ phút giây gặp nhau. <br>Tình ta tuy rằng chiều hôm sớm sắt đá thua tình ta. <br>Nhớ nhớ nhớ nhớ nhớ nhau bạn đuờng hỡi! <br>Nhớ nhớ nhớ nhớ nay vui cùng nhau. <br>Nhớ đến nhau lòng những mến thương ngày quen biết những khi gặp nhau! <br>Nhớ đến nhau lòng những mến thương ngày quen biết những khi chiều tàn.",
				
				"Đèo cao (dô ta) <br>Thì mặc đèo ca (dô ta) <br>Nhưng lòng yêu nước (dô ta) <br>Còn cao hơn đèo (dô tà là hò dô ta ... dô ta!) <br><br>Non caon (dô ta)<br>Chót vót từng mây (dô ta)<br>Nhưng lòng cương quyết (dô ta)<br>Dù cao cũng trèo (dô tà là hò dô ta ... dô ta!)<br><br>Anh em (dô ta)<br>Hăng hái hò reo (dô ta)<br>Vượt sống vượt núi (dô ta)<br>Vượt bao nhiều đèo (dô tà là hò dô ta ... dô ta!)<br>Đường xa (dô ta)<br>Thì mặc đường xa (dô ta)<br>Nhưng đường xa quá (dô ta)<br>Thì ta đi về (dô tà là hò dô ta ... dô ta!).",
				
				"Ðếm ánh sao đêm tôi gọi người, hồng xanh xanh hồng xanh sáng xanh. <br>Ngôi sao xanh kia chính là anh. Ngôi sao vàng chính là chị đây.<br>Không có ngôi sao nào là ngôi sao đen. Không có ngôi sao nào là ngôi sao đen.",
				
				"Một (2, 3, 4, 5,...) cây số mỏi chân rồi, đường còn xa lắm không? Một (2, 3, 4, 5,...) <br>cây số mỏi chân rồi, tội nghiệp quá đôi giầy! Một, hai (...).",
				
				"1) Bình minh đem theo tiếng ca mặt trời. Hó lơ hò lơ hó lơ hò lơ. Cùng nhau ra đi hát <br>lên người ơi. Hó lơ hò lơ hó lơ hò lơ. <br>ĐK: Đi trong Gia-Vê Thiên Chúa các cơ binh. Ta luôn trung kiên như thấy Đấng vô <br>hình. Đi trọn đời mình. Đi dựng niềm tin. Đi dìu người trần. Đem vào thần linh. <br>2) Và trong khung trưa nắng thiêu mặt người. Hó lơ hò lơ hó lơ hò hơ. Dồn chân ra đi <br>bước nhanh người ơi. Hó lơ hò lơ hó lơ hò lơ.<br>3) Và khi đêm buông tối đen cuộc đời. Hó lơ hò lơ hó lơ hò lơ. Làm như sao xa sáng lên <br>người ơi. Hó lơ hò lơ hó lơ hò lơ. Ðếm ánh sao đêm tôi gọi người, hồng xanh xanh hồng<br> xanh sáng xanh. Ngôi sao xanh kia chính là anh. Ngôi sao vàng chính là chị đây.<br>Không có ngôi sao nào là ngôi sao đen. Không có ngôi sao nào là ngôi sao đen.",
				
				"Tôi đi tìm Thiên Chúa, Người ở đâu mà bấy lâu tôi hằng đi tìm.<br>Tôi đi tìm Thiên Chúa, Người ở đâu mà bấy lâu tôi hằng tìm luôn.",
				
				"Vầng mây che ban ngày khi nắng vàng soi trần gian.<br>Và có ánh đuốc thiêng lúc nắng hồng đã lịm tắt<br>Ta đi theo lời hứa, tiến bước trong niềm tin",
				
				"Nào mời anh em lên tàu lửa chúng mình đi. Ði đi khắp nơi mà không thích sao? Nào <br>mời anh em lên tàu lửa chúng mình đi. Ði đi khắp nơi mà không tốn tiền.<br>(Anh có đi không? - Anh đi đâu?)",
				
				"Kìa đoàn người què rủ nhau đi lang thang, khập khiễng khắp lối xóm, lê bước các<br> nẻo đường. Và một đoàn người mù sống trong âm u, đang dẫn nhau đi tìm, tìm<br> Giê-Su Cứu Thế. <br><br>Kìa đoàn người cùi toàn thân nghe tanh hôi, lở loét khắp mắt mũi, đang bước đi<br> trên đường. Và đoàn người tật nguyền tứ chi run run, chân bước đi xiêu vẹo, tìm <br>Giê-Su cứu chữa.",
				
				"Ngày xưa Chúa đã phán dạy. <br>Hỡi Lê-Vi ơi sao còn tiếc gì. <br>Hãy theo ta đi gánh việc cứu đời lầm than. (Ê đi) <br>Cùng nhau ta đi đi vì sứ mệnh. <br>Cùng nhau ta đi đi cứu đời lầm than. Ngày...",
				
				"Kìa con muỗi vẫn vơ khắp trời<br>Đầ kim nhọn hoắc bay vù đi kiếm chỗ đâm<br>Này anh em ơi. Mình hãy coi chừng.<br>Nó vẫn cắm đẫ đi kiếm chỗ này đâm...Mày Chết!",

				"Một ông sao sáng, 2 ông sáng sao,<br>Tôi đố anh chị nào, 1 hơi đếm hết<br>Từ 1 ông sao sáng đến 10 ông sáng sao. <br>(ly chanh đá - hai ly đá chanh; cô răng sún - hai cô sún răng;<br>anh hay hát - hai anh hát hay; em hay khóc - hai em khóc hay;<br>ông tai điếc - hai ông điếc tai; sân banh đá - hai sân đá banh;<br>đêm băng giá - đêm giá băng; cây xanh lá - hai cây lá xanh;<br>xoong vung méo - xoong méo vung; đêm trăng sáng - hai đêm sáng trăng;<br>cây hoa trắng - hai cây trắng hoa; ao con cá - hai ao cá con; Câu Kinh Thánh – Câu Thánh Kinh...)",

				"Đôi bàn tay em bé tí xíu. Mười ngón tay của em xinh ghê.<br>Đây tay phải, đây tay trái, mười ngón tay xinh đều.<br><br>Đôi bàn tay em bé tí xíu. Những ngón tay của em xinh ghê.<br>Tay giặt quần, tay giặt áo, và bế em quét nhà.",

				"Đời ta như hoa nở trong tin yêu. <br>Tình bao la, Ngài cho ta để ta chung xây cuộc đời vui. <br>Nghĩa Sĩ hiên ngang trở thành chứng nhân giữa thế trần. <br>Dù bao chông gai, dù bao sóng gió, vẫn kiên tâm chinh phục giữ trọn niềm tin.",

				"Mười lăm phút đồng hồ, ngồi nhớ mát thấy mỗ<br>Buồn như con các rô bị bỏ vào tô<br>Mình lên giấy đồng hồ, mừng hết lớn nha bồ<br>Mừng như con các khô mới bước ra hồ.",

				"Đón nhau về hội ngộ, về Đất Hứa hát chung lời ca. <br>Đón nhau về một nhà, nhà Việt Nam, trẻ Việt Nam trên khắp năm châu. <br>Đón nhau về nối lại nhịp cầu cho vòng tay tròn mình lại gặp nhau dây. <br>Đón nhau về tình đầy, tình non nước, xiết chặt vòng tay.<br>Đón nhau về một ngày, một ngày mai, mà tương lai tươi thắm quê hương. <br>Đón nhau về giữa nơi phố phường vang vọng tiếng hò, rộn ràng quê ta.",

				"Ngồi xuống đứng lên ta không biết mệt.<br>Rồi ngồi xuống đứng lên ta chung một vòng.",

				"Đường Damas khi xứa là đường Phaolô ngã<br>Đường Damas hôm nay là đường của hy vọng<br>Ta vẫn cứ vươn lên dù bao ngàn nguy khó<br>Vì đời người Nghĩa Sĩ lả đời đi Chinh Phục!!!",

				"Đường đi khó (đường đi không khó)<br>Không khó vì ngăn sông cách núi <br>Mà khó vì lòng người ngại núi e sông (2x)<br><br>Anh em ta ơi, đường dài con dài <br>Còn nhiều trở ngại, còn nhiều nguy khó <br>Kiên gan, kiên gan<br>Anh em ta ơi, quyết tâm vượt qua.",

				"Đường về Đất Hứa còn xa a á<br>Băng qua sa mạc bao la nhọc nhàn<br>Đường về Thiên Đàng gần ta a á<br>Nghe theo lời Chúa dễ quá khó gì!",

				"Đường trên sa mạc. Đường về Si-nai cùng đi theo Chúa vui lên đường nối vòng<br> tay. Đường đi theo Ngài là đường hy sinh. Vòng tay thương mến vui lên đường<br> dựng tương lai.",

				"Đường gai đá là đường luyện chí khí,<br>đường gian lao là đường rèn tâm trí,<br>thế thì đường hoa lá là đường vào tăm tối,<br>đường êm mát xui đời người vào suy vong.<br><br>ĐK: Ta đi trên đường quê hương ta đi về hướng gió chiều đượm tình người mình thương yêu nhau.<br>Ta đi trên đường quê hương khô thiếu giọt mưa thấm mềm một lần thôi, suốt tận con tim. <br>Đường xưa đó là đường về tin yêu, người về đây là người nhiều tình yêu,<br>Đó là niềm hân hoan người Việt mình thương nhau.<br>Cùng nhau hát muôn lời tình của con tim "]
	};

	songE ={
		titles: ["Em Chỉ Là","Em Đẹp","Em Đi Câu Cá","Em Hát","Em Nhỏ","Em Ra Về","Em Xin","Em Ước Mơ","Em Yêu Nhà Việt Nam"],
		
		lyrics: ["Em chỉ là em Ấu Nhi Ngoan Hiền.<br>Vừa thức dậy em khoanh tay quì gối.<br>Dâng ý tưởng dâng hết mọi việc làm.<br>Khi xế chiều dâng đêm nên trọn ngày.",

				"Em đẹp như Thiên Thần, niềm vui quyện bước chân.<br>Em cười như đóa hoa, nói năng lời thật thà.<br>Em là Ấu Nhi hiền, đời em là sống ngoan,<br>là yêu người yêu Chúa, múa vui và hát ca.",

				"Chiều nay em đi câu cá và mang rá theo bắt cua<br>Làm sao cho được kha khá về cho má nấu canh chua<br>Ới kìa con cua (2x)<br>Mình đừng la lớn nó chui xuống hầm (2x).<br><br>Chiều nay em đi câu cá và đem ná theo bắn chim<br>Làm sao cho chim kha khá về cho má nấu canh chua<br>Ới kìa con chim (2x)<br>Mình đừng la lớn nó bay mất liền (2x).",

				"Bài hát này con hát cho Chúa nghe, một lần thay cho suốt cả đời.<br>Bài hát này con hát sao thích ghê, là bài ca con thương Chúa nhiều",

				"Ðêm qua em nằm mơ.<br>Em mơ làm thiên thần.<br>Em bay về bên Chúa.<br>Em bay về bên Mẹ.<br>Mẹ gọi em khe khẽ.<br>Mẹ dạy phải chăm ngoan.<br>Giê-Su yêu trẻ thơ.<br>Em đang tuổi ngây khờ.<br>Em mong được yêu Chúa.<br>Em mong ở bên Ngài.<br>Ngài nhủ em khe khẽ.<br>Ngài dạy phải chăm ngoan.",

				"Ðã đến giờ, em ra về, em khiêm cung tạ ơn Thiên Chúa.<br>Chúa muốn rằng: Em chuyên cần, hy sinh vâng lời ba má luôn.<br>Ðã đến giờ, con ra về, ôi Giê-Su lòng con yêu mến.<br>Chúa chúc lành: Ban ơn nhiều, ban cho muôn người con mến yêu.",

				"Em xin là đóa hoa, tô bầu trời tươi sáng.<br>Em xin là tiếng ca giúp cho đời thêm vui. <br>Em xin là cánh chim gieo hòa bình muôn hướng.<br>Em xin là trái tim giàu tình thương đồng loại.",

				"Em ước mơ ôm mãi tuổi vô tư... <br>Thênh thang như chim én trong trời chiều...<br>Em thướt tha tháng ngày đẹp sân trường...<br>Ngọt ngào là màu áo trắng ngây thơ.<br>Em ước mơ, ôm mãi tuổi trinh nguyên, <br>Xinh đôi tay ôm ấp bao mộng hiền,<br>Đôi mắt em sáng đẹp tựa sao trời,<br>TuổI ngọc ngà, còn mãi thắm trên môi.<br>Em ước mơ, ôm mãi tuổi ô mai,<br>Không kiêu sa không phấn son nhạt nhòa,<br>Như gió Xuân phớt nhẹ làn mây trời,<br>Từng chiêù vàng , quyện mái tóc ngang vai.",

				"Em Yêu nhà Việt Nam.<br>Yêu dân Việt Nam lam lũ.<br>Yêu đất Mẹ quê hương. <br>Yêu giống dân Lạc Hồng. <br><br>Em yêu dòng Hương Giang. <br>Yêu núi ngự xanh thẳm. <br>Yêu mến bờ đại dương.<br>Yêu núi non chập chùng.<br><br>Em yêu giòng Cửu Long.<br>Em yêu đồng lúa chín.<br>Yêu khớm dừa ven sông.<br>Hương lúa ngon thơm nồng."]
	};

	songF = {
		titles: ["Father Abraham","Father I Adore You"],
		
		lyrics: ["Father Abraham has many sons, many sons <br>have father Abraham<br>I am one of them, and so are you, so let's just praise the Lord<br>1.Right Arm 2.Left Arm 3…..",

				"Father I adore You, lay my life before You.<br>How I Love You<br>Jesus I adore You, lay my life before You.<br>How I Love You<br>Spirit I adore You, lay my life before You.<br>How I Love You"]
	};

	/*songG = {
		titles: ["Gần Bên Nhau","Gần Nhau","Gặp Anh","Gặp Gỡ Đức Kitô","Gặp Nhau Nơi Đây","Giã Gạo","Gia-Kêu","Gồ Ghê","God's Got an Army","Gọi Lửa Thiêng"],

		lyrics: ["Gần bên nhau, gần bên nhau, ở gần bên nhau<br>Mình trao nhau, mình trao nhau, ở mình trao nhau<br>Tình thương mến, tình thương mến trao nhau nụ cười.<br><br>Cầm tay nhau, cầm tay nhau, ở cầm tay nhau<br>Mình cùng quay, mình cùng quay, ở mình cùng quay<br>Mình quay mãi, mình quay mãi quay quay đều đều<br><br>Ngày hôm nay, ngày hôm nay, ở ngày hôm nay<br>Mình gần nhau, mình gần nhau, ở mình gần nhau<br>Rồi mai mốt, rồi mai mốt ta xa nhau rồi.",
				
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

	songH = {
		titles: ["Hai Bàn Tây Nâng","Hai Con Thằn Lằn Con","Hân Hoan Đón Chào","Hai Tay Trên Vai","Hành Trang Tủi Trẻ","Hát To Hát Nhỏ","Hay Là Hay Quá",
				"Hãy Cùng Tôi","Hay Quá Là Hay","Hóa Bông Hoa Hồng","Hóa Bông Hoa Hồng","Hoa Mặt Trời","Hòa Tấu","Hoan Hô","Hò Dô Ta","Hò lơ…","Hò Lục Văn Tiên",
				"Hỏi Mẹ","Họp Nhau Nơi Đây","Hosana","Huấn Luyện Viên Ca","Hừng Đông Sa Mạc","Hướng Tâm Lên","Hy Vọng Đã Vươn Lên","I Have the Joy","I Love You Lord"],
		
		lyrics: ["Đưa hai bàn tay lên nâng tâm hồn cao.<br>Hướng muôn lòng ta về miền quê trời,<br>đưa tay ngang sang bên kết chặt thân ái.<br>Nơi nơi muôn muôn người vào một vòng tay.",
				
				"Hai con thằn lằn con đua nhau cắn nhau đứt đuôi<br>Cha thằn lằn buồn hiu gọi chúng đến mới mắng cho<br>Hai con thằn lằn con đuôi thì to nhưng đã cụt rồi<br>Ôi đớn đau quá trời chúng khóc la tơi bời.",

				"Hân Hoan đón chào bằng con tim yêu mến<br>Hân Hoan chúc mừng bằng câu ca tiếng hát<br>Hân Hoan kính dâng lời ca vang thiết tha",

				"Hai tay trên vai chúng ta bước đều<br>Tay giơ lên cao giúp ta thâu hiểu<br>Tay đặt lên mình nhận ta hèn yếu<br>Ta hướng về đây kết tình trong thương yêu.",

				"Với gói hành trang, tôi lên đường tìm Chúa Ki-Tô.<br>Với gói hành trang, tôi lang thang tìm con Thiên Chúa.<br>Hai ngàn năm đã qua đi rồi.<br>Giờ này Người ở đâu? Giờ này Người ở đâu?<br>Trong rạp hát hay trong phòng trà.<br>Trong cư xá hay đêm màu hồng.<br>Người ở đây giữa chợ đời không cơm áo giữa chợ đời hôm nay.<br><br>Giữ vững niềm tin, tôi đã gặp được Chúa Ki-Tộ Giữ vững niềm tin, tôi hân hoan gặp con Thiên Chúa.<br>Không hề chi với đôi chân gầy.<br>Vì Người là tình thương. Vì Người là tình thương.<br>Không đài cát xa hoa lụa là.<br>Không gươm giáo không gây hận thù.<br>Người ở đây giữa chợ đời không cơm áo giữa chợ đời hôm nay.  ",

				"Ta hát to hát nhỏ nhỏ nhỏ.<br>Rồi mình ngồi kể chuyện cho nhau nghe.<br>Ô ố ô ồ, ô ố ô ồ.<br>Ta vui ta hát, hát cho vui đời ta.",

				"Hay quá hay quá là hay <br>Xin thưởng cho tràng pháo tay<br>Hay quá hay quá là hay<br>Xin thưởng cho một nụ cười hì hì hì.",

				"Anh hay chị hãy cùng tôi, ta đứng lên xây tình tình người<br>Anh hay chị hãy cùng tôi, ta đứng lên xây dựng ngày mai<br>Vớ bàn tay anh xây đắp đời, với tình thương tôi đến với đồi<br>Và chúng ta cùng tiến lên đi dựng ngày maimai",

				"Hay quá hay quá là hay<br>Xin thưởng cho tràng pháo tay<br>Hay quá hay quá là hay<br>Xin thưởng cho một nụ cưởi<br>hì hì hì hà hà hà hồ hồ hồ",

				"Hái bông hoa hồng em cầm em ngắm.<br>Hoa xinh quá nhưng không biết do ai làm ra.<br>Giữ bông hoa hồng em về hỏi má.<br>Má cười bảo em chính Chúa Trời làm đó con à.",

				"Ai muốn cao trọng trên nước thiên đàng hãy nghe rằng nên giống bé thơ, lời Chúa phán xưa còn nghi sâu.<br>Bé bé yêu ơi, ta gắng sống Ngoan và Ðơn Sơ cố sống ngây thơ thì Chúa yêu ta rất nhiều.",

				"Vì Chúa đã gọi con, cho con đi vào đời, đem cho muôn người một bông hoa hướng dương.<br>Vì Chúa đã chọn con, cho con đi vào đời, đem tiếng ca tiếng cười ánh như hoa mặt trời.",

				"Nào anh em cùng ra đây, xem chúng em đua nhau chơi kèn: tò tí tò, tò tí te, tò tí tò tí te te tò.<br>Nào anh em cùng ra đây, xem chúng em đua nhau chơi đàn: tình tính tình, tình tính tang, tình tính tình tính tang tang tình.<br>Nào anh em cùng ra đây, xem chúng em đua nhau chơi tùng: tùng cắc tùng, tùng cắc tung, tùng cắc tùng tắc tung tung tùng.<br>Nào anh em cùng ra đây, xem chúng em đua nhau chơi cò: ò í ò, ò í e, ò í ò í e e ò.",

				"Hoan hô anh (em, cô) này một cái, hoan hô anh (em, cô) này.<br>Nào chúng mình hoan hô, nào chúng mình hoan hô.<br>Nào ta hoan hô, hoan hô!",

				"Đèo ca (dô ta)<br>Thì mặc đèo ca (dô ta)<br>Nhưng lòng yêu nước (dô ta)<br>Còn cao hơn đèo<br>(dô tà dô tà là hò dô ta … dô ố ô ồ ta!)<br><br>Non cao (dô ta)<br>Chót vót từng mây (dô ta)<br>Nhưng lòng cương quyết (dô ta)<br>Dù cao cũng trèo (dô tà …)",

				"Bàu ơi thương lấy bí cùng (a li hò lờ)<br>Tuy rằng khác giống (A li hò lờ)<br>Nhưng chung một giàn<br>(Hò lơ hó lơ lắng tai nghe tiếng ai đang hò lờ, hò lơ hó lơ)",

				"Văn Tiên cõng mẹ chạy ra, đạp phải cái<br>[lá] (vần A) cõng mẹ chạy vô<br>Văn Tiên cõng mẹ chạy vô đạp phải cá<br>[hố] (vần Ô) cõng mẹ chạy ra",

				"Em hỏi Mẹ: Có bao nhiêu Chúa?<br>Chúa trên trời hay Chúa ở đâu?<br>Em hỏi Mẹ: Có bao nhiêu Chúa?<br>Mẹ trả lời có một Chúa thôi.",

				"Họp nhau nơi đây chúng ta cùng vui hát - (vỗ tay).<br>Họp nhau nơi đây ta ca hát reo cười - (vỗ tay).<br>Họp nhau vơi đây giữa mối tình thân ái- (vỗ tay).<br>Tình đây không phai chúng tai ghi muôn đời - (vỗ tay). <br>Tình đây không phai chúng ta ghi muôn đời - (vỗ tay).<br>Ngồi bên nhau ta cùng hòa bài cca, là la la lá la là la la. <br>Tình anh em nhớ muôn đời anh nhé, là la la lá la la lá là.",

				"Ho ho ho hosana. Ha ha halelujah<br>He he he He's risen. I've got the joy of the Lord<br>Hô hô hô hôsana. Ha ha halelujah<br>Hì hì hì mừng Giêsu. Chúa ta nay đã phục sinh",

				"Hừng đông rực sáng khắp trời đông.<br>Hoàng hôn rực rỡ phương trời tây.<br>Anh đến đây từ vạn nẻo xa xăm.<br>Mang trái tim chứa chan tình mến.<br>Câu hát ca ta dâng cho nhau.<br>Thân chúc nhau trọn đời chí hăng say.<br>Chí hăng nồng.<br>Nào ta tiến bước huấn luyện viên.<br>Tuổi trẻ tươi mát đang chờ ta.<br>Anh sẽ đi về thành thị thôn trang.<br>Gieo Phúc âm vào đời người trẻ.<br>Câu mến thương ta dành cho em.<br>Mến chúc em trọn đời.<br>Chí hăng nồng.",

				"Ta vào sa mạc Si-na-i. Trại tươi sáng như hừng đông.<br>Tâm tình trong một lòng yêu thương. Cùng đem Chúa ươm tuổi thơ.<br>Ca lên nào Nghĩa Sĩ (i). Vui chơi đùa với Thiếu Nhi.<br>Hân hoan nào hỡi Ấu Nhi. Vai sánh cùng bước đều đi.<br><br>Ta về đây rừng Si-na-i. Rừng xanh thắm vui thần tiên.<br>Cây cành đua trổ muôn hoa thơm. Rừng xanh thắm như lòng ta.<br>Ca lên cùng với gió mây. Vui chơi đùa với cỏ cây.<br>Anh em nhảy múa đắm say. Vui thú nào sánh bằng đây.",

				"Dù nơi thôn quê an lành, hoặc chốn núi rừng xanh.<br>Bạn hãy hướng tâm lên, bạn hãy hướng tâm hồn lên.<br>Dù nơi sông sâu biển cả, cuộn sóng thét gào.<br>Bạn hãy hướng tâm lên, bạn hãy hướng tâm hồn lên.<br>Dù khi vui chơi học hành, đời ngát hương trời thơm.<br>Bạn hãy hướng tâm lên, bạn hãy hướng tâm hồn lên.<br>Dù khi đau thương hoạn nạn, cuộc sống chán chường.<br>Bạn hãy hướng tâm lên, bạn hãy hướng tâm hồn lên.",

				"Hy vọng đã vươn lên trong màn đêm, bao ưu phiền. <br>Hy vọng đã vươn lên trong lo sợ, muà chinh chiến. <br>Hy vọng đã vươn lên trong nhục nhằn vương trên mắt. <br>Hy vọng đã vươn lên như làn tên, đang rực lên trong màm đêm.<br>Hy vọng đã vươn lên trong nhà hoang, bên ruộng cằn. <br>Hy vọng đã vươn lên trên nương buồng, giòng sông vắng. <br>Hy vọng đã vươn lên trong lòng thuyền còn xa bến. <br>Hy vọng đã vươn lên như triều dâng, cho buồm căng, nuôi trường giang.",

				"I have the joy, joy, joy, joy down in my heart<br>Down in my heart, down in my hear<br>I have the joy, joy, joy, joy down in my heart<br>Down in my heart to stay<br><br>And I'm so happy, so very happy<br>I have the love of Jesus in my heart<br>And I'm so happy, so very happy<br>I have the love of Jesus in my heart<br><br>Lòng tràn niêm vui, vui, vui, vui dâng lên dạt dào<br>Dâng lên dạt dào Sâu trong tâm hồn<br>Lòng tràn niềm vui, vui, vui, vui dâng lên dạt dào<br>Sâu trong tâm hồn mãi luôn<br><br>DK: Hôm nay tôi yêu Ngài, xin luôn yêu thương Ngài<br>Tôi dã mời Ngài vào trong cuộc đời tôi<br>Hôm nay tôi vui mừng, tôi luôn luôn vui mừng<br>Tôi đã được Ngài gọi là bạn thân",

				"I love you, Lord, and I lift my voice<br>To worship you, O my soul, rejoice!<br>Take joy, my king, in what you hear,<br>May it be a sweet, sweet sound in your ear.<br><br>Lạy Cha yêu thương, lòng con yêu mến Chúa<br>Lời hát con dâng, Chúa muôn đồi cao vời<br>Lạy Vua yêu thương, Giờ con vang tiếng hát<br>Nguyện lời ca chúng con, dâng lên Ngài<br>Đẹp hơn ánh mai"]
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

	var song = [songA, songB, songC, songD, songE, songF/*, songG, songH, songI, songJ, songK, songL, songM,
				songN, songO, songP, songQ, songR, songS, songT, songU, songV, songW, songX, songY,songZ*/];

	var letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

	var page = "";

    for(var i = 0; i < song[pos].titles.length; i++){
	    page += "<h3 style='margin:0em;'>" + song[pos].titles[i] + "</h3>" + song[pos].lyrics[i] + "<br><br>";
    }

    document.getElementById("letter").innerHTML = letter[pos];
    document.getElementById("allSongs").innerHTML = page;
}
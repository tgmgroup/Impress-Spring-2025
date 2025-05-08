var ttss = [
		{
			word: "bloom",
			clue: "Flowers (咲く) in spring.",
		},
		{
			word: "",
			clue: "",
		},




		blossom	開花
		{
			word: "",
			clue: "",
		},
		allergies	アレルギー
		{
			word: "",
			clue: "",
		},
		apparent	明らかな		{
			word: "",
			clue: "",
		},
		hay fever	花粉症		{
			word: "",
			clue: "",
		},
		  pollen	花粉		{
			word: "",
			clue: "",
		},
		occur	発生する (happen)		{
			word: "",
			clue: "",
		},
		immune system	免疫系		{
			word: "",
			clue: "",
		},
		react	反応する		{
			word: "",
			clue: "",
		},
		foreign	異物		{
			word: "",
			clue: "",
		},
		substance	物質		{
			word: "",
			clue: "",
		},
		antibodies	抗体		{
			word: "",
			clue: "",
		},
		germs	細菌		{
			word: "",
			clue: "",
		},
		allergens	アレルゲン		{
			word: "",
			clue: "",
		},
		harmful	有害		{
			word: "",
			clue: "",
		},
		leads	原因となる		{
			word: "",
			clue: "",
		},
		symptoms	症状		{
			word: "",
			clue: "",
		},
		avoid	避ける 		{
			word: "",
			clue: "",
		},
		medications	薬 (medicine)		{
			word: "",
			clue: "",
		},
		come at a cost	犠牲を伴う
		


	],
	appdata = { maincolor: "#a3f7a", qcount: 15 };
function saveData() {
	localStorage.setItem("ttsasyik", JSON.stringify(appdata));
}
function startttsgame() {
	for (var e, t = [], o = [], a = 0; a < appdata.qcount; a++) {
		var n = ((e = ttss.length), Math.floor(Math.random() * e)),
			i = ttss[n];
		t.push(i.word), o.push(i.clue), ttss.splice(n, 1);
	}
	var r = new Crossword(t, o),
		s = r.getSquareGrid(10);
	if (null != s) {
		(document.getElementById("crossword").innerHTML = CrosswordUtils.toHtml(
			s,
			!0
		)),
			(function (e) {
				for (var t in e) {
					for (var o = [], a = 0; a < e[t].length; a++)
						o.push(
							"<li><strong>" +
								e[t][a].position +
								".</strong> " +
								e[t][a].clue +
								"</li>"
						);
					document.getElementById(t).innerHTML = o.join("\n");
				}
			})(r.getLegend(s));
	} else {
		var c = r.getBadWords(),
			d = [];
		for (a = 0; a < c.length; a++) d.push(c[a].word);
		location.reload();
	}
}
function setqcount(e) {
	(appdata.qcount = e), saveData(), location.reload();
}
function resetsettings() {
	localStorage.clear(), location.reload();
}
function tsep(e) {
	return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function vtext(e) {
	return !!e.match(/^[A-Za-z0-9]+$/);
}
function toggledrawer() {
	$("#drawer").toggle();
}
function removeads() {
	try {
		Android.removeAds();
	} catch (e) {
		console.log(e);
	}
}
function rateapp() {
	try {
		Android.rateApp();
	} catch (e) {
		console.log(e);
	}
}
null === localStorage.getItem("ttsasyik")
	? saveData()
	: (appdata = JSON.parse(localStorage.getItem("ttsasyik")));
var canswershown = !1;
function toggleAnswer() {
	canswershown
		? ($(".canswer").hide(), $(".uanswer").show(), (canswershown = !1))
		: ($(".canswer").show(), $(".uanswer").hide(), (canswershown = !0)),
		ciihuy.showAd();
}
function activatetts() {
	$("td").click(function () {
		"&nbsp;" != $(this).find(".canswer").html() &&
			null != $(this).find(".canswer").html() &&
			(console.log("Clicked: " + $(this).find(".canswer").html()),
			console.log($(this).find(".uanswer").attr("id")),
			(selectedua = $(this).find(".uanswer").attr("id")),
			$("#vkeyboard").show());
	});
}
var selectedua = -1;
function typechar(e) {
	$("#" + selectedua).html(e), $("#vkeyboard").hide();
}
function initvkeyboard() {
	for (
		var e = [
				"a",
				"b",
				"c",
				"d",
				"e",
				"f",
				"g",
				"h",
				"i",
				"j",
				"k",
				"l",
				"m",
				"n",
				"o",
				"p",
				"q",
				"r",
				"s",
				"t",
				"u",
				"v",
				"w",
				"x",
				"y",
				"z",
				"-",
				"\u00A0",
			],
			t = 0;
		t < e.length;
		t++
	)
		$("#kbtnlist").append(
			"<div class='kbtn' onclick=typechar('" + e[t] + "')>" + e[t] + "</div>"
		);
}
setTimeout(function () {
	startttsgame(),
		activatetts(),
		initvkeyboard(),
		$("#crossword").css({
			width: 32 * $("tbody:eq(0)").find("tr:eq(0)").find("td").length + "px",
		}),
		$("#game").show();
}, 1500);

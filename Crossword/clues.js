var ttss = [
		{
			word: "bloom",
			clue: "Flowers (咲く) in spring.",
		},
		{
			word: "blossom",
			clue: "開花",
		},

		{
			word: "allergies",
			clue: "アレルギー",
		},
		{
			word: "apparent",
			clue: "明らかな",
		},
		{
			word: "hay fever",
			clue: "花粉症",
		},
		{
			word: "pollen",
			clue: "花粉",
		},
		{
			word: "occur",
			clue: "発生する (happen)",
		},
		{
			word: "immune system",
			clue: "免疫系",
		},
		{
			word: "react",
			clue: "反応する",
		},
		{
			word: "foreign",
			clue: "異物",
		},
		{
			word: "substance",
			clue: "物質",
		},
		{
			word: "antibodies",
			clue: "抗体",
		},
		{
			word: "germs",
			clue: "細菌",
		},
		{
			word: "allergens",
			clue: "アレルゲン",
		},
		{
			word: "harmful",
			clue: "有害",
		},
		{
			word: "leads",
			clue: "原因となる",
		},
		{
			word: "symptoms",
			clue: "症状",
		},
		{
			word: "avoid",
			clue: "避ける",
		},
		{
			word: "medications",
			clue: "薬 (medicine)",
		},
		{
			word: "come at a cost",
			clue: "犠牲を伴う",
		},
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

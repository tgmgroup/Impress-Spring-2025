var ttss = [
		{
			word: "stem",
			clue: "The rose had a long (茎).",
		},
		{
			word: "long-stem",
			clue: "(長い茎) roses are a traditional Valentine's Day gift.",
		},
		{
			word: "wear",
			clue: "Actors (着る) interesting clothes.",
		},
		{
			word: "while",
			clue: "Many people eat (しながら) watching TV.",
		},
		{
			word: "problem",
			clue: "There are many (問題) on a test.",
		},
		{
			word: "actually",
			clue: "Valentine's Day is (実際) older than White Day.",
		},
		{
			word: "pretzel",
			clue: "A (🥨) is a snack from Germany.",
		},
		{
			word: "celebrate",
			clue: "We (祝う) Christmas on December 25th.",
		},
		{
			word: "celebrated",
			clue: "New Year's Day is (祝われる) on January 1st.",
		},
		{
			word: "themselves",
			clue: "Students should study for (彼ら自身), not for the teacher.",
		},
		{
			word: "instead",
			clue: "I had an ice cream cake (代わり) of a shortcake fro my birthday.",
		},
		{
			word: "matter",
			clue: "I will go to the park, no (関係) if it rains.",
		},
		{
			word: "of",
			clue: "I want a cheeseburger instead (に) a hot dog.",
		},
		{
			word: "person",
			clue: "We like you for the (人) that you are, not because of your money.",
		},
		{
			word: "for",
			clue: "You can buy a snack (のために) yourself.",
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

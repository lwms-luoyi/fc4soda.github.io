//=====================prepare init data============================
const jsonUrl = 'data.json';
const star6 = '#ff4d4d',
	  star5 = '#fff0b3',
	  star4 = '#99ff99',
	  star3 = '#b3e6ff',
	  star2 = 'white';
let userAvatarSize = 116, userAvatarX = 40, userAvatarY = 44,
	font = 'ubuntu,noto,"WenQuanYi Micro Hei Regular",sans-serif';
// TODO change px to ratio
var UIData = {
	"mod":{
		"background":{
			"sw": 1080,
			"sh": Math.floor(220*1080/850),
			"w": 850,
			"h": 220,
			"x": 0,
			"y": 200,
			"alpha": 0.7
		},
		"adjutant":{
			"x": 300,
			"y": -20,
			"w": 850-300,
			"h": 220+20
		},
		"userAvatar": {
			"x": userAvatarX,
			"y": userAvatarY,
			"w": userAvatarSize,
			"h": userAvatarSize,
			"lineWidth": 1,
			"strokeStyle": "black",
		},
		"collectionRateBox": {
			"x": 590,
			"y": 190,
			"w": 250,
			"h": 9,
		},
		"userName": {
			"x": 30,
			"y": 35,
			"font": '1.25rem '+font,
			"strokeStyle": "black",
			"lineWidth": 3,
			"fillStyle": "white",
			"align": 'left',
			"baseline": 'bottom',
		},
		"userLevel": {
			"x": userAvatarX + userAvatarSize/2,
			"y": userAvatarY + userAvatarSize + 21,
			"font": ".9rem "+font,
			"strokeStyle": "black",
			"lineWidth": 2,
			"fillStyle": "white",
			"align": 'center',
			"baseline": 'bottom',
			"w": 30,
			"h": 16,
		},
		"userServer": {
			"x": userAvatarX + userAvatarSize/2,
			"y": userAvatarY + userAvatarSize + 21 + 20,
			"font": "0.9rem "+font,
			"strokeStyle": "black",
			"lineWidth": 2,
			"fillStyle": "white",
			"align": 'center',
			"baseline": 'bottom',
			"w": 60,
			"h": 16,
		},
		"now": {
			"x": 5,
			"y": 217,
			"font": "0.65rem "+font,
			"strokeStyle": "grey",
			"lineWidth": 0,
			"fillStyle": "white",
			"align": 'left',
			"baseline": 'bottom'
		},
		"collectionRate": {
			"x": 845,
			"y": 190,
			"font": "1.2rem "+font,
			"strokeStyle": "black",
			"lineWidth": 3,
			"fillStyle": "white",
			"align": 'right',
			"baseline": 'alphabetic'
		}, 
		"guns":{
			"x": 250,
			"y": 25,
			"r": 20,
			"limit": 10,
			"alpha": 0.3,
			"gap":0,
			"lineWidth": 0.7,
			"typeText":{
				"offset": -15,
				"font": '1.1rem '+font,
				"fillStyle":"white",
				"lineWidth": 2,
				"strokeStyle":'black',
				"align":'right',
				"baseline":'middle'
			},
			"numText":{
				"offset": 15,
				"font": '.9rem '+font,
				"fillStyle":"white",
				"lineWidth": 2,
				"strokeStyle":'black',
				"align":'left',
				"baseline":'middle'
			}
		}
	},
	"poster":{
		"background":{
			"sw": Math.floor(850*608/510),
			"sh": 608,
			"w": 850,
			"h": 510,
			"x": 0,
			"y": 0,
			"alpha": 0.7
		},
		"adjutant":{
			"x": 300,
			"y": 100,
			"w": 850-300,
			"h": 510-100
		},
		"collectionRateBox": {
			"x": 590,
			"y": 510-20,
			"w": 250,
			"h": 9,
		},
		"userName": {
			"x": 30,
			"y": 30,
			"font": '1.25rem '+font,
			"strokeStyle": "black",
			"lineWidth": 3,
			"fillStyle": "white",
			"align": 'left',
			"baseline": 'bottom',
		},
		"userLevel": {
			"x": 850/2,
			"y": 30,
			"font": ".9rem "+font,
			"strokeStyle": "black",
			"lineWidth": 2,
			"fillStyle": "white",
			"align": 'center',
			"baseline": 'bottom',
			"w": 30,
			"h": 16,
		},
		"userServer": {
			"x": 850-30,
			"y": 30,
			"font": "1.1rem "+font,
			"strokeStyle": "black",
			"lineWidth": 2,
			"fillStyle": "white",
			"align": 'right',
			"baseline": 'bottom',
			"w": 60,
			"h": 16,
		},
		"now": {
			"x": 5,
			"y": 510-3,
			"font": "0.65rem "+font,
			"strokeStyle": "grey",
			"lineWidth": 0,
			"fillStyle": "white",
			"align": 'left',
			"baseline": 'bottom'
		},
		"collectionRate": {
			"x": 845,
			"y": 510-20,
			"font": "1.2rem "+font,
			"strokeStyle": "black",
			"lineWidth": 3,
			"fillStyle": "white",
			"align": 'right',
			"baseline": 'alphabetic'
		}, 
		"guns":{
			"x": 80,
			"y": 30,
			"r": 11,
			"limit": 30,
			"alpha": 0.3,
			"gap": 12*0.8,
			"lineWidth": 0.7,
			"typeText":{
				"offset": -13,
				"font": '.9rem '+font,
				"fillStyle":"white",
				"lineWidth": 2,
				"strokeStyle":'black',
				"align":'right',
				"baseline":'middle'
			},
			"numText":{
				"offset": 13,
				"font": '.8rem '+font,
				"fillStyle":"white",
				"lineWidth": 1,
				"strokeStyle":'black',
				"align":'left',
				"baseline":'middle'
			}
		}
	}
};

var now = new Date().toISOString().split('T')[0];
var selected = {
	"background":"room01.png",
	"adjutant":"055",
	"adjutantDamadged": false,
	"userName": "NONAME",
	"userLevel": "?",
	"userServer": "unknow",
	"now": now,
	"userAvatar":"",
	"currentCanvas": "mod",
	"currentTab": "",
	"mod":{
		"collectionRate":{
			"got": 0,
			"AR":0,
			"SMG":0,
			"RF":0,
			"HG":0,
			"MG":0,
		},
		"guns":{},
		"position":{}
	},
	"poster":{
		"collectionRate":{
			"got": 0,
			"AR":0,
			"SMG":0,
			"RF":0,
			"HG":0,
			"MG":0,
			"SG":0,
		},
		"guns":{},
		"position":{}
	}
};

var getResource = function(url, responseType, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = responseType;
	xhr.onload = function() {
		var status = xhr.status;
		if (status === 200) {
			callback(null, xhr.response);
		} else {
			callback(status, xhr.response);
		}
	};
	xhr.send();
};

function showMsg(text, style){
	$('#message').text(text);
}


var imgLoader = function(callback, ...args) {
	function imageLoaded(t) {
		// function to invoke for loaded image
		showMsg('Loading images: ' + (sum-counter) + '/' + sum)
		counter--; 
		if( counter === 0 ) {
			showMsg('');
			callback(...args)
		}
	}
	let images = $('img');
	let sum = images.length,
		counter = sum;
	
	$('img').each(function() {
		if( this.complete ) {
			imageLoaded.call( $(this) );
		} else {
			$(this).one('load', imageLoaded);
		}
	});
}

var mainFun = function(can, ctx, initData){
	c = UIData.mod.guns;
	//console.log('initData', initData)
	let modGunPosition = initGunPosition(c.x, c.y, c.r, initData.modGunList, c.limit, c.gap);
	selected.mod.position = modGunPosition;
	c = UIData.poster.guns;
	let allGunPosition = initGunPosition(c.x, c.y, c.r, initData.allGunList, c.limit, c.gap);
	selected.poster.position = allGunPosition;
	//console.log('modGunPosition', modGunPosition)
	//console.log('allGunPosition', allGunPosition)
	drawCanvas(can, ctx);

	// dynamic and static jquery events bindings	
	eventBindings(can, ctx, modGunPosition, allGunPosition);
}


//=====================main logic============================
getResource(jsonUrl, 'json',
			function(err, jsonData) {
				if (err !== null) {
				} else {
					// generate gun data by types; generate mod gun data
					var initData = prepareData(jsonData);
					// load tab UI
					//let c = UIData[selected.currentCanvas]['background'];
					//initCanvasContainer('#canvasContainers', c.w, c.h);
					initTeamTab('#teamContent', initData.allGunList);
					initModTab('#modContent', initData.modGunList);
					initPoster('#posterContent', initData.allGunList);

					// init canvas
					var can = document.getElementById('resultCanvas');
					var ctx = can.getContext('2d');
					can.offscreenCanvas = document.createElement('canvas');
					can.offscreenCanvas.width = can.width;
					can.offscreenCanvas.height = can.height;

					// load all images before render images on canvas
					imgLoader(mainFun, can, ctx, initData);

				}
			});

function store(key, value){
	localStorage.setItem(key, value);
}

function restore(key){
	let r = localStorage.getItem(key);
	if(!r){
		return selected;
	}
	return JSON.parse(r);
}

function drawCanvas(can, ctx){
	console.log('drawCanvas')
	let s = selected.currentCanvas,
		uiData = UIData[s],
		position = selected[s]['position'];
	let c = uiData["background"];
	//$('#resultCanvas').css('width', c.w);
	//$('#resultCanvas').css('height', c.h);
	$('#canvasContainers').css('width', c.w);
	$('#canvasContainers').css('height', c.h);
	can.width = c.w;
	can.height = c.h;
	//ctx.clearRect(0, 0, can.width, can.height);
	//$('#resultMask').css('background-image', 'url(' + selected["background"] + ')');
	//$('#resultMask').css('background-size', 'none');
	//$('#resultMask').css('background-position', uiData["background"].x+' -'+uiData["background"].y);
	let background = new Image(),
		adjutant = new Image();
	let count = 2;
	background.onload = adjutant.onload = counter;
	background.src = selected["background"];
	adjutant.src = genImgName(selected["adjutant"], 'tachie', selected.adjutantDamadged);

	function counter(){
		count--;
		if(count === 0) { drawImages(); }
	}

	function drawImages(){
		let c, c2;
		c = uiData["background"];
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.globalAlpha = c.alpha;
		ctx.drawImage(background, c.x, c.y, c.sw, c.sh, 0, 0, c.w, c.h);
		ctx.globalAlpha = 1;
		
		c = uiData["adjutant"];
		ctx.drawImage(adjutant, 0, 0, c.w, c.h, c.x, c.y, c.w, c.h);

		c = uiData["userAvatar"];
		if(c){
			drawUserAvatar(ctx);
			ctx.strokeRect(c.x, c.y, c.w, c.h);
		}

		let R = uiData["guns"]["r"];
		drawGuns(ctx, position, R, can);
		
		c = uiData["collectionRateBox"]
		drawBox(ctx, c.x, c.y, c.w, c.h, c.lineWidth, selected[s]['collectionRate']['got']/position.sum)

		c = uiData["userName"]
		drawText(ctx, selected.userName, c.x, c.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);
		
		c = uiData["userLevel"]
		drawText(ctx, 'Lv. '+selected.userLevel, c.x, c.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);

		c = uiData["userServer"]
		let userServer = $('#userServer option[value='+selected.userServer+']').text();
		drawText(ctx, userServer, c.x, c.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);

		c = uiData["collectionRate"]
		drawText(ctx, percentCalc(selected[s]['collectionRate']['got'], position.sum), c.x, c.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);
		
		c = uiData["now"]
		drawText(ctx, selected.now, c.x, c.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);
	}	
}

function drawBox(ctx, x, y, w, h, lineWidth, percent){
	let grd = ctx.createLinearGradient(x, 0, x+w, 0);
	grd.addColorStop(0, "#b30000");
	grd.addColorStop(0.5, "#ffff00");
	grd.addColorStop(1, "#47d147");
	ctx.fillStyle = grd;
	ctx.lineWidth = lineWidth;
	ctx.fillRect(x, y, Math.floor(percent*w), h);
	ctx.strokeRect(x, y, w, h);
}

function drawGun(ctx, img, gunInfo, R){
	return drawHexagonImg(ctx, img, gunInfo.img, gunInfo.x, gunInfo.y, R, gunInfo.fillColor, 'black', UIData[selected.currentCanvas]["guns"]["lineWidth"]);
}

function drawGunBlank(ctx, gunInfo, R){
	drawHexagon(ctx, gunInfo.x, gunInfo.y, R, gunInfo.fillColor, 'black', UIData[selected.currentCanvas]["guns"]["lineWidth"]);
}

function drawGuns(ctx, position, R, can){
	let s = selected.currentCanvas,
		ui = UIData[s];
	let c = ui.guns.typeText, c2 = ui.guns.numText;
	for(i in position.text){
		let selectedNum = selected[s]['collectionRate'][i];
		let name = position.text[i].name, num = position.text[i].num;
		drawText(ctx, name.text, name.x+c.offset, name.y, c.font, c.fillStyle, c.lineWidth, c.strokeStyle, c.align, c.baseline);
		drawText(ctx, selectedNum+'/'+num.text, num.x+c2.offset, num.y, c2.font, c2.fillStyle, c2.lineWidth, c2.strokeStyle, c2.align, c2.baseline);
	}

	let imgList = [], callbackList = [];
	let count = 0;
	for(no in position.guns){
		drawGunBlank(ctx, position.guns[no], R);
		if(selected[s].guns[no]){
			count++;
			let img = new Image();
			img.onload = counter;
			img.src =  position.guns[no].img;
			let fun = drawGun(ctx, img, position.guns[no], R);
			callbackList.push(fun);
		}
	}

	function counter(){
		count--;
		if(count === 0) { drawImages(); }
	}

	function drawImages(){
		showMsg('Draw images may take a while...Please wait')
		for(let i=0; i<callbackList.length; i++){
			callbackList[i]();
		}
	}	
}

function drawHexagonImg(ctx, image, newSrc, x0, y0, R, fillColor, strokeStyle, lineWidth){
	let numberOfSides = 6,
		size = R,
		x = x0,
		y = y0,
		fx = Math.cos(1 / 6 * Math.PI),
		w = size * 2 * fx,
		h = size * 2,
		Xcenter = fx*size,
		Ycenter = size;


	//ctx.drawImage(image, x-fx*size, y-size)
	let fun = function(){
		ctx.save();
		ctx.lineWidth = lineWidth;
		// outer line
		ctx.beginPath();
		ctx.moveTo( x0 +  Math.floor(size * Math.sin(0)), y0 +  Math.floor(size *  Math.cos(0)) );
		for (let i=1; i<=numberOfSides; i++) {
			ctx.lineTo (x0 + size * Math.sin(i * 2 * Math.PI / numberOfSides), y0 + size * Math.cos(i * 2 * Math.PI / numberOfSides));
		}
		ctx.closePath();
		ctx.clip();
		ctx.drawImage(image, 0, 0, image.width, image.width, Math.floor(x-size), y-size, 2*size, 2*size);
		ctx.strokeStyle = strokeStyle;
		ctx.stroke();
		ctx.restore();
	}
	return fun;
}



function drawHexagon(ctx, Xcenter, Ycenter, size, fillColor, strokeStyle, lineWidth){
	let numberOfSides = 6;

	ctx.lineWidth = lineWidth;
	ctx.globalAlpha = UIData[selected.currentCanvas]["guns"]["alpha"];
	// fill hexagon
	ctx.beginPath();
	ctx.moveTo(Xcenter + size * Math.sin(0), Ycenter + size * Math.cos(0));
	for (let i=1; i<=numberOfSides; i++) {
		ctx.lineTo(Xcenter + size * Math.sin(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(i * 2 * Math.PI / numberOfSides));
	}
	ctx.fillStyle = fillColor;
	ctx.fill();
	// outer line
	ctx.globalAlpha = 1;
	ctx.beginPath();
	ctx.moveTo (Xcenter +  size * Math.sin(0), Ycenter +  size *  Math.cos(0));
	for (let i=1; i<=numberOfSides; i++) {
		ctx.lineTo (Xcenter + size * Math.sin(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.cos(i * 2 * Math.PI / numberOfSides));
	}
	ctx.strokeStyle = strokeStyle;
	ctx.stroke();		
}

function drawUserAvatar(ctx){
	let c = UIData[selected.currentCanvas].userAvatar;
	let img = new Image();
	img.onload = function(){
		// resize and cut to fit avatar box
		let sw=img.width, sh=img.height, 
			dw=c.w, dh=c.h;
		//ctx.clearRect(c.x,c.y,dw,dh);
		let xs=0, ys=0, ws=0, hs=0, f=0;
		if(sw<sh){
			xs=0, ws=sw, f=sw/dw, ys=0.5*(sh-dh*f), hs=dh*f; 
		} else {
			ys=0, hs=sh, f=sh/dh, xs=0.5*(sw-dw*f), ws=dw*f; 
		}
		ctx.drawImage(img, xs, ys, ws, hs, c.x, c.y, dw, dh);
	};
	img.src = selected.userAvatar;
}

function drawText(ctx, content, x, y, font, fillStyle, lineWidth, strokeStyle, align, baseline){
	ctx.font = font;
	ctx.textAlign = align;
	ctx.textBaseline = baseline;
	if(lineWidth > 0){
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeStyle;
		ctx.strokeText(content, x, y);
	}
	ctx.fillStyle = fillStyle;
	ctx.fillText(content, x, y);
}

function prepareData(initData){
	let result = {}
	let hgList=[], arList=[], smgList=[], rfList=[], mgList=[], sgList=[],
		allGun = initData.allGun;
	for(no in allGun){
		let gun = allGun[no],
			item = {
				"name": gun.name,
				"no": no,
				"stars": gun.stars,
				"imgs": gun.imgs,
				"mods": gun.mods,
				"skins": gun.skins,
				"img":gun.imgs[0]["img"]
			};

		if(gun.type=='AR'){
			arList.push(item);
		} else if(gun.type=='SMG'){
			smgList.push(item);
		} else if(gun.type=='RF'){
			rfList.push(item);
		} else if(gun.type=='HG'){
			hgList.push(item);
		} else if(gun.type=='MG'){
			mgList.push(item);
		} else if(gun.type=='SG'){
			sgList.push(item);
		}
	}
	result.allGunList = {
		AR: arList,
		SMG: smgList,
		RF: rfList,
		MG: mgList,
		SG: sgList,
		HG: hgList
	}

	let modHgList=[], modArList=[], modSmgList=[], modRfList=[], modMgList=[], modSgList=[],
		modGun = initData.modGun;
	for(i in modGun){
		let no = modGun[i],
			gun = allGun[no];
		if(!gun){
			continue;
		}
		let item = {
			'name': gun.mods.mod3.name,
			'no': gun.mods.mod3.no,
			'stars': gun.mods.mod3.stars,
			'img': gun.mods.mod3.img
		}
		if(gun.type=='AR'){
			modArList.push(item);
		} else if(gun.type=='SMG'){
			modSmgList.push(item);
		} else if(gun.type=='RF'){
			modRfList.push(item);
		} else if(gun.type=='HG'){
			modHgList.push(item);
		} else if(gun.type=='MG'){
			modMgList.push(item);
		} else if(gun.type=='SG'){
			modSgList.push(item);
		}	
	}

	result.modGunList = {
		AR: modArList,
		SMG: modSmgList,
		RF: modRfList,
		MG: modMgList,
		SG: modSgList,
		HG: modHgList
	}

	return result;
}

function initTeamTab(selector, allGunList){
	let appendTeamHtml = function(gunContainer, no, name, img){
		let gunLiteSeletorInput = $('<input>',
									{'class':'gunLiteSeletor',
									 'name':'allGun',
									 'type':'radio',
									 'id':'team_r'+no,
									 'value':no}),
			gunLiteLabel = $('<label>', {'class':'gunLite',
										 'for':'team_r'+no,
										 'title':name}),
			gunImg = $('<img>', {'src':genImgName(img, 'avatar', false)}),
			gunSpan = $('<span>').text(name),
			damagedToggle = $('<input>', {'class':'damagedToggle',
										  'type':'checkbox',
										  'id':'team_c'+no}),
			damagedLabel = $('<label>', {'class':'damagedContent',
										 'for':'team_c'+no}).text('破');
		gunLiteLabel.append(gunImg, gunSpan, damagedToggle, damagedLabel);
		gunContainer.append(gunLiteSeletorInput, gunLiteLabel);
	}	
	
	for(let gunType in allGunList){
		let list = allGunList[gunType];
		let gunSortLabel = $('<label>', {'class':'gunSort'}).text(gunType),
			gunContainer = $('<container>', {'class':'gunContainer'});
		for(let l in list){
			let skins = list[l].skins,
				imgs = list[l].imgs,
				mods = list[l].mods;
			
			for(let s in imgs){
				appendTeamHtml(gunContainer,
							   imgs[s].no,
							   imgs[s].name,
							   imgs[s].img);
			}
			for(let s in mods){
				appendTeamHtml(gunContainer,
							   mods[s].no,
							   mods[s].name,
							   mods[s].img);
			}
			for(let s in skins){
				appendTeamHtml(gunContainer,
							   skins[s].no,
							   skins[s].name,
							   skins[s].img);
			}
		}
		$(selector).append(gunSortLabel, gunContainer);
	}
}

function initModTab(selector, modGunList, ctx){
	let appendModHtml = function(gunContainer, no, name, img){
		let gunLiteSeletorInput = $('<input>',
									{'class':'gunMod',
									 'name':'modGun',
									 'type':'checkbox',
									 'value':no, 'id':'mod_c'+no}),
			gunLiteLabel = $('<label>', {'class':'gunMod',
										 'title':name, 'for':'mod_c'+no}),
			gunImg = $('<img>', {'src':genImgName(img, 'avatar', false)}),
			gunSpan = $('<span>').text(name);
		gunLiteLabel.append(gunImg, gunSpan);
		gunContainer.append(gunLiteSeletorInput, gunLiteLabel);
	}	
	
	for(let gunType in modGunList){
		let list = modGunList[gunType];
		let gunSortLabel = $('<label>', {'class':'gunSort'}).text(gunType),
			gunContainer = $('<container>', {'class':'gunContainer'});
		for(let l in list){
			appendModHtml(gunContainer, list[l].no, list[l].name, list[l].img);
		}
		$(selector).append(gunSortLabel, gunContainer);
	}
}

function initPoster(selector, allGunList){
	var appendPosterHtml = function(gunContainer, no, name, img){
		var gunLiteSeletorInput = $('<input>',
									{'class':'gunPoster',
									 'name':'gunPoster',
									 'type':'checkbox',
									 'id':'poster_c'+no,
									 'value':no}),
			gunLiteLabel = $('<label>', {'class':'gunPoster',
										 'for':'poster_c'+no,
										 'title':name}),
			gunImg = $('<img>', {'src':genImgName(img, 'avatar', false)}),
			gunSpan = $('<span>').text(name);
		gunLiteLabel.append(gunImg, gunSpan);
		gunContainer.append(gunLiteSeletorInput, gunLiteLabel);
	}	
	

	for(let gunType in allGunList){
		let list = allGunList[gunType];
		let gunSortLabel = $('<label>', {'class':'gunSort'}).text(gunType),
			gunContainer = $('<container>', {'class':'gunContainer'});
		for(let l in list){
			let imgs = list[l].imgs
			
			for(let s in imgs){
				appendPosterHtml(gunContainer,
								 imgs[s].no,
								 imgs[s].name,
								 imgs[s].img);
			}
		}
		$(selector).append(gunSortLabel, gunContainer);

	}
}

function initGunPosition(xPos, yPos, R, gunList, limit, gap){
	let typeSum = Object.keys(gunList).length,
		fx = Math.cos(1/6*Math.PI),
		fy = R,
		fyy = Math.sin(1/6*Math.PI),
		result = {"guns":{}, "text":{}};
	let delta = 1;
	let jPrev = 1, sum=0, tt=0;
	for(t in gunList){
		l = gunList[t].length;
		if(l>0){
			for(let i=0; i<l; i++){
				//x = xPos+fx*R*(2*i+j%2);
				//y = yPos+j*R*(2-fyy);
				let ii = i%limit,
					jj = jPrev+Math.floor(i/limit),
					x = xPos+fx*R*(2*ii+(jj+1)%2),
					y = yPos+jj*R*(2-fyy)+tt*gap;
				let stars = gunList[t][i].stars, fillColor = "";
				switch(stars){
				case 2:
					fillColor = star2;
					break;
				case 3:
					fillColor = star3;
					break;
				case 4:
					fillColor = star4;
					break;
				case 5:
					fillColor = star5;
					break;
				case 6:
					fillColor = star6;
					break;
				default:
					fillColor = star2;
				};
				result.guns[gunList[t][i].no] = {"x":Math.floor(x), "y":Math.floor(y), "fillColor":fillColor, "img":genImgName(gunList[t][i].img, 'avatar')};
				if(i==0){
					result.text[t] = {};
					result.text[t].name = {"x":Math.floor(x-fx*R), "y":Math.floor(y), "text":t };
				}
				if(i==(l-1)){ result.text[t].num = {"x":Math.floor(x+fx*R), "y":Math.floor(y), "text":l }; }
			}
			jPrev += Math.floor((l-1)/limit+1);
			tt ++;
			sum += l;
		}
	}
	result.sum = sum;
	return result;
}

function percentCalc(got, sum){
	return got+"/"+sum+" ("+(got*100/sum).toString().split('.')[0]+"%)";
}

function genImgName(img, type, damaged){
	let r = img;
	switch(type){
	case 'avatar':
		r = 'img_avatar/' + img;
		break;
	case 'tachie':
		r = 'img_tachie/' + img;
		break;
	}
	if(damaged){
		r += '_d'
	}
	r += '.png';
	return r;
}



const b64toBlob = (b64Data, contentType='', sliceSize=512) => {
	const byteCharacters = atob(b64Data.split(',')[1]);
	const byteArrays = [];

	for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
		const slice = byteCharacters.slice(offset, offset + sliceSize);

		const byteNumbers = new Array(slice.length);
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i);
		}

		const byteArray = new Uint8Array(byteNumbers);
		byteArrays.push(byteArray);
	}

	const blob = new Blob(byteArrays, {type: contentType});
	return blob;
}

var saveData = (function () {
	var a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	return function (b64Data, contentType, fileName) {
		var blob = b64toBlob(b64Data, contentType),
			url = window.URL.createObjectURL(blob);
		a.href = url;
		a.download = fileName;
		a.click();
		window.URL.revokeObjectURL(url);
		//a.remove();
	};
}());

function camelize(word){
	return word.charAt(0).toUpperCase() + word.slice(1);
}

function eventBindings(can, ctx, modGunPosition, allGunPosition){
	//TODO: set binding after document.ready

	
	$('input[name="displayBtn"][value='+selected.currentCanvas+']').prop('checked', true);
	
	$('#displayModBtn').click(function(){
		selected.currentCanvas = 'mod';
		drawCanvas(can, ctx);
	});
	$('#displayPosterBtn').click(function(){
		selected.currentCanvas = 'poster';
		drawCanvas(can, ctx);
	});

	$('#userName').change(function(){
		selected.currentTab = "";
		let val = $(this).val();
		selected.userName = val;
		drawCanvas(can, ctx);
	});

	$('#userLevel').change(function(){
		selected.currentTab = "";
		let val = $(this).val();
		selected.userLevel = val;
		drawCanvas(can, ctx);
	});

	$('#userServer').change(function(){
		selected.currentTab = "";
		let val = $("#userServer :selected").val();
		selected.userServer = val;
		drawCanvas(can, ctx);
	});

	$('#userAvatar').change(function(e){
		selected.currentTab = "mod";
		let reader = new FileReader();
		reader.onload = function(event){
			selected.userAvatar = event.target.result;
			conditionDrawCanvas();
		};
		reader.readAsDataURL(e.target.files[0]);
	});

	
	$('.gunSort').on('click', function(){
		$(this).next('container').toggle("slow");
	});

	$('input.gunMod').on('change', function(){
		selected.currentTab = "mod";
		let val = $(this).val(),
			gunInfo = modGunPosition.guns[val];
		let gunType = $(this).parent().prev().text();
		if(this.checked){
			selected.mod.collectionRate[gunType]++;
			selected.mod.collectionRate.got++;
		}else{
			selected.mod.collectionRate[gunType]--;
			selected.mod.collectionRate.got--;
		}
		selected.mod.guns[val] = this.checked;
		conditionDrawCanvas();
	});

	$('input.gunPoster').on('change', function(){
		selected.currentTab = "poster";
		let val = $(this).val(),
			gunInfo = allGunPosition.guns[val];
		let gunType = $(this).parent().prev().text();
		if(this.checked){
			selected.poster.collectionRate[gunType]++;
			selected.poster.collectionRate.got++;
		}else{
			selected.poster.collectionRate[gunType]--;
			selected.poster.collectionRate.got--;
		}
		selected.poster.guns[val] = this.checked;
		conditionDrawCanvas();
	});

	$('#gunModCheckAll').change(function(){
		selected.currentTab = "mod";
		let checked = this.checked;
		$('input.gunMod').prop("checked", checked);
		$('input.gunMod').each(function(idx, ele){
			let no = ele.value;
			selected[selected.currentCanvas]['guns'][no] = checked;
		});
		let s = selected[selected.currentCanvas]['collectionRate'];
		for(let k in s){
			if(checked){
				if(k=='got'){
					s.got = modGunPosition.sum;
				} else {
					s[k] = modGunPosition['text'][k]['num']['text'];
				}
			} else {
				s[k] = 0;
			}
		}
		conditionDrawCanvas();
	});
	
	$('#gunPosterCheckAll').change(function(){
		selected.currentTab = "poster";
		let checked = this.checked;
		$('input.gunPoster').prop("checked", checked);
		$('input.gunPoster').each(function(idx, ele){
			let no = ele.value;
			selected[selected.currentCanvas]['guns'][no] = checked;
		});
		let s = selected[selected.currentCanvas]['collectionRate'];
		for(let k in s){
			if(checked){
				if(k=='got'){
					s.got = allGunPosition.sum;
				} else {
					s[k] = allGunPosition['text'][k]['num']['text'];
				}
			} else {
				s[k] = 0;
			}
		}
		conditionDrawCanvas();
	});

	
	function clearDamagedCheckedStatus(currentToggle){
		var allToggle = $('input[class="damagedToggle"]');
		if(currentToggle!=""){
			for(let i=0; i<allToggle.length; i++){
				if(allToggle[i].id!=currentToggle){
					allToggle[i].checked = false;
				}
			}
		} else {
			for(let i=0; i<allToggle.length; i++){
				allToggle[i].checked = false;
			}
		}
	}

	$('input[name="allGun"]').on('click', function(){
		selected.currentTab = "";
		var currentRadio = $(this)[0].id;
		//var currentCheckbox = $(this)[0].labels[0].children[2].id;
		// 选中头像时清除大破选中状态
		clearDamagedCheckedStatus();
		var val = $(this)[0].value;
		selected.adjutant = val;
		selected.adjutantDamadged = false;
		conditionDrawCanvas();
	});


	$('input[class="damagedToggle"]').on('click', function(){
		selected.currentTab = "";
		var ele = $(this)[0];
		var parentFor = ele.parentElement.htmlFor;
		var val = $('#'+parentFor)[0].value;
		// 选中大破框时选中父头像
		var parentChecked = $('#'+parentFor)[0].checked;
		if(!parentChecked){
			$('#'+parentFor)[0].checked = true;
		}
		// 清其它头像的大破选中状态
		clearDamagedCheckedStatus(ele.id);
		
		selected.adjutant = val;
		selected.adjutantDamadged = ele.checked;
		conditionDrawCanvas();
	});
	
	function conditionDrawCanvas(){
		if(selected.currentTab=="" || selected.currentTab==selected.currentCanvas){
			let s = selected.currentCanvas;
			if(s=='mod'){
				drawCanvas(can, ctx, modGunPosition);
			}else if(s=='poster'){
				drawCanvas(can, ctx, allGunPosition);
			}	
		}
	}

	$('#exportPNG').click(function(){
		let b64 = can.toDataURL("image/png");
		saveData(b64, 'image/png', 'badge');
	});

	$('#saveConfig').click(function(){
		store('selected', JSON.stringify(selected));
	});

	$('#loadConfig').click(function(){
		selected = restore('selected');
		let s = selected.currentCanvas;

		$("#userServer").val(selected.userServer);

		
		$('#display'+camelize(s)+'Btn').click();
	});

}

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 758,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"images/buttonpixel.png", id:"buttonpixel"},
		{src:"images/ll_s_bg_mouth.png", id:"ll_s_bg_mouth"},
		{src:"images/ll_s_board.png", id:"ll_s_board"},
		{src:"images/ll_s_bow_l.png", id:"ll_s_bow_l"},
		{src:"images/ll_s_bow_r.png", id:"ll_s_bow_r"},
		{src:"images/ll_s_bucket_all.png", id:"ll_s_bucket_all"},
		{src:"images/ll_s_eye_L.png", id:"ll_s_eye_L"},
		{src:"images/ll_s_eye_R.png", id:"ll_s_eye_R"},
		{src:"images/ll_s_eyelids.png", id:"ll_s_eyelids"},
		{src:"images/ll_s_goaty.png", id:"ll_s_goaty"},
		{src:"images/ll_s_head_bg.png", id:"ll_s_head_bg"},
		{src:"images/ll_s_jaw.png", id:"ll_s_jaw"},
		{src:"images/ll_s_l_arm.png", id:"ll_s_l_arm"},
		{src:"images/ll_s_l_cheek.png", id:"ll_s_l_cheek"},
		{src:"images/ll_s_l_forearm.png", id:"ll_s_l_forearm"},
		{src:"images/ll_s_l_hand.png", id:"ll_s_l_hand"},
		{src:"images/ll_s_l_lip.png", id:"ll_s_l_lip"},
		{src:"images/ll_s_l_sleeve.png", id:"ll_s_l_sleeve"},
		{src:"images/ll_s_legs.png", id:"ll_s_legs"},
		{src:"images/ll_s_m_lip.png", id:"ll_s_m_lip"},
		{src:"images/ll_s_moustache.png", id:"ll_s_moustache"},
		{src:"images/ll_s_neck.png", id:"ll_s_neck"},
		{src:"images/ll_s_nose.png", id:"ll_s_nose"},
		{src:"images/ll_s_plaque_1.png", id:"ll_s_plaque_1"},
		{src:"images/ll_s_plaque_type_1.png", id:"ll_s_plaque_type_1"},
		{src:"images/ll_s_pole.png", id:"ll_s_pole"},
		{src:"images/ll_s_r_arm.png", id:"ll_s_r_arm"},
		{src:"images/ll_s_r_arm_new.png", id:"ll_s_r_arm_new"},
		{src:"images/ll_s_r_cheek.png", id:"ll_s_r_cheek"},
		{src:"images/ll_s_r_hand.png", id:"ll_s_r_hand"},
		{src:"images/ll_s_r_lip.png", id:"ll_s_r_lip"},
		{src:"images/ll_s_shadow_colonelz.png", id:"ll_s_shadow_colonelz"},
		{src:"images/ll_s_stick.png", id:"ll_s_stick"},
		{src:"images/ll_s_tie_l.png", id:"ll_s_tie_l"},
		{src:"images/ll_s_tie_r.png", id:"ll_s_tie_r"},
		{src:"images/ll_s_torso.png", id:"ll_s_torso"},
		{src:"images/ll_s_torso_shadow.png", id:"ll_s_torso_shadow"},
		{src:"images/ll_smoke_1r_0060.png", id:"ll_smoke_1r_0060"},
		{src:"images/ll_smoke_1r_0061.png", id:"ll_smoke_1r_0061"},
		{src:"images/ll_smoke_1r_0062.png", id:"ll_smoke_1r_0062"},
		{src:"images/ll_smoke_1r_0063.png", id:"ll_smoke_1r_0063"},
		{src:"images/ll_smoke_1r_0064.png", id:"ll_smoke_1r_0064"},
		{src:"images/ll_smoke_1r_0065.png", id:"ll_smoke_1r_0065"},
		{src:"images/ll_smoke_1r_0066.png", id:"ll_smoke_1r_0066"},
		{src:"images/ll_smoke_1r_0067.png", id:"ll_smoke_1r_0067"},
		{src:"images/ll_smoke_1r_0068.png", id:"ll_smoke_1r_0068"},
		{src:"images/ll_smoke_1r_0069.png", id:"ll_smoke_1r_0069"},
		{src:"images/ll_smoke_1r_0070.png", id:"ll_smoke_1r_0070"},
		{src:"images/ll_smoke_1r_0071.png", id:"ll_smoke_1r_0071"},
		{src:"images/ll_smoke_1r_0072.png", id:"ll_smoke_1r_0072"},
		{src:"images/ll_smoke_1r_0073.png", id:"ll_smoke_1r_0073"},
		{src:"images/ll_smoke_1r_0074.png", id:"ll_smoke_1r_0074"},
		{src:"images/ll_spark_01r_0028.png", id:"ll_spark_01r_0028"},
		{src:"images/ll_spark_01r_0029.png", id:"ll_spark_01r_0029"},
		{src:"images/ll_spark_01r_0030.png", id:"ll_spark_01r_0030"},
		{src:"images/ll_spark_01r_0031.png", id:"ll_spark_01r_0031"},
		{src:"images/ll_spark_01r_0032.png", id:"ll_spark_01r_0032"},
		{src:"images/ll_spark_01r_0033.png", id:"ll_spark_01r_0033"},
		{src:"images/ll_spark_01r_0034.png", id:"ll_spark_01r_0034"},
		{src:"images/ll_spark_01r_0035.png", id:"ll_spark_01r_0035"},
		{src:"images/ll_spark_01r_0036.png", id:"ll_spark_01r_0036"}
	]
};



// symbols:



(lib.buttonpixel = function() {
	this.initialize(img.buttonpixel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.ll_s_bg_mouth = function() {
	this.initialize(img.ll_s_bg_mouth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,27);


(lib.ll_s_board = function() {
	this.initialize(img.ll_s_board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,272);


(lib.ll_s_bow_l = function() {
	this.initialize(img.ll_s_bow_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,23);


(lib.ll_s_bow_r = function() {
	this.initialize(img.ll_s_bow_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,23);


(lib.ll_s_bucket_all = function() {
	this.initialize(img.ll_s_bucket_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,179);


(lib.ll_s_eye_L = function() {
	this.initialize(img.ll_s_eye_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,23);


(lib.ll_s_eye_R = function() {
	this.initialize(img.ll_s_eye_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,23);


(lib.ll_s_eyelids = function() {
	this.initialize(img.ll_s_eyelids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,19);


(lib.ll_s_goaty = function() {
	this.initialize(img.ll_s_goaty);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,38);


(lib.ll_s_head_bg = function() {
	this.initialize(img.ll_s_head_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,171);


(lib.ll_s_jaw = function() {
	this.initialize(img.ll_s_jaw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,92);


(lib.ll_s_l_arm = function() {
	this.initialize(img.ll_s_l_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,234);


(lib.ll_s_l_cheek = function() {
	this.initialize(img.ll_s_l_cheek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,49);


(lib.ll_s_l_forearm = function() {
	this.initialize(img.ll_s_l_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,175);


(lib.ll_s_l_hand = function() {
	this.initialize(img.ll_s_l_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,173);


(lib.ll_s_l_lip = function() {
	this.initialize(img.ll_s_l_lip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.ll_s_l_sleeve = function() {
	this.initialize(img.ll_s_l_sleeve);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,23);


(lib.ll_s_legs = function() {
	this.initialize(img.ll_s_legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,447);


(lib.ll_s_m_lip = function() {
	this.initialize(img.ll_s_m_lip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.ll_s_moustache = function() {
	this.initialize(img.ll_s_moustache);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,32);


(lib.ll_s_neck = function() {
	this.initialize(img.ll_s_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,55);


(lib.ll_s_nose = function() {
	this.initialize(img.ll_s_nose);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,41);


(lib.ll_s_plaque_1 = function() {
	this.initialize(img.ll_s_plaque_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,343,74);


(lib.ll_s_plaque_type_1 = function() {
	this.initialize(img.ll_s_plaque_type_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,63);


(lib.ll_s_pole = function() {
	this.initialize(img.ll_s_pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,584);


(lib.ll_s_r_arm = function() {
	this.initialize(img.ll_s_r_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,160);


(lib.ll_s_r_arm_new = function() {
	this.initialize(img.ll_s_r_arm_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,81,160);


(lib.ll_s_r_cheek = function() {
	this.initialize(img.ll_s_r_cheek);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,52);


(lib.ll_s_r_hand = function() {
	this.initialize(img.ll_s_r_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,110);


(lib.ll_s_r_lip = function() {
	this.initialize(img.ll_s_r_lip);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,18,26);


(lib.ll_s_shadow_colonelz = function() {
	this.initialize(img.ll_s_shadow_colonelz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,772);


(lib.ll_s_stick = function() {
	this.initialize(img.ll_s_stick);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,352);


(lib.ll_s_tie_l = function() {
	this.initialize(img.ll_s_tie_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,76);


(lib.ll_s_tie_r = function() {
	this.initialize(img.ll_s_tie_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,75);


(lib.ll_s_torso = function() {
	this.initialize(img.ll_s_torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,380,504);


(lib.ll_s_torso_shadow = function() {
	this.initialize(img.ll_s_torso_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,63);


(lib.ll_smoke_1r_0060 = function() {
	this.initialize(img.ll_smoke_1r_0060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0061 = function() {
	this.initialize(img.ll_smoke_1r_0061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0062 = function() {
	this.initialize(img.ll_smoke_1r_0062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0063 = function() {
	this.initialize(img.ll_smoke_1r_0063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0064 = function() {
	this.initialize(img.ll_smoke_1r_0064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0065 = function() {
	this.initialize(img.ll_smoke_1r_0065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0066 = function() {
	this.initialize(img.ll_smoke_1r_0066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0067 = function() {
	this.initialize(img.ll_smoke_1r_0067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0068 = function() {
	this.initialize(img.ll_smoke_1r_0068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0069 = function() {
	this.initialize(img.ll_smoke_1r_0069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0070 = function() {
	this.initialize(img.ll_smoke_1r_0070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0071 = function() {
	this.initialize(img.ll_smoke_1r_0071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0072 = function() {
	this.initialize(img.ll_smoke_1r_0072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0073 = function() {
	this.initialize(img.ll_smoke_1r_0073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_smoke_1r_0074 = function() {
	this.initialize(img.ll_smoke_1r_0074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,44);


(lib.ll_spark_01r_0028 = function() {
	this.initialize(img.ll_spark_01r_0028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0029 = function() {
	this.initialize(img.ll_spark_01r_0029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0030 = function() {
	this.initialize(img.ll_spark_01r_0030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0031 = function() {
	this.initialize(img.ll_spark_01r_0031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0032 = function() {
	this.initialize(img.ll_spark_01r_0032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0033 = function() {
	this.initialize(img.ll_spark_01r_0033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0034 = function() {
	this.initialize(img.ll_spark_01r_0034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0035 = function() {
	this.initialize(img.ll_spark_01r_0035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.ll_spark_01r_0036 = function() {
	this.initialize(img.ll_spark_01r_0036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,120);


(lib.spark_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// timeline functions:
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(1));

	// Layer 1
	this.instance = new lib.ll_spark_01r_0028();
	this.instance.setTransform(-2,-6,1.127,1.127);

	this.instance_1 = new lib.ll_spark_01r_0029();
	this.instance_1.setTransform(-2,-6,1.127,1.127);

	this.instance_2 = new lib.ll_spark_01r_0030();
	this.instance_2.setTransform(-2,-6,1.127,1.127);

	this.instance_3 = new lib.ll_spark_01r_0031();
	this.instance_3.setTransform(-2,-6,1.127,1.127);

	this.instance_4 = new lib.ll_spark_01r_0032();
	this.instance_4.setTransform(-2,-6,1.127,1.127);

	this.instance_5 = new lib.ll_spark_01r_0033();
	this.instance_5.setTransform(-2,-6,1.127,1.127);

	this.instance_6 = new lib.ll_spark_01r_0034();
	this.instance_6.setTransform(-2,-6,1.127,1.127);

	this.instance_7 = new lib.ll_spark_01r_0035();
	this.instance_7.setTransform(-2,-6,1.127,1.127);

	this.instance_8 = new lib.ll_spark_01r_0036();
	this.instance_8.setTransform(-2,-6,1.127,1.127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-6,135.3,135.3);


(lib.smoke_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_smoke_1r_0060();
	this.instance.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_1 = new lib.ll_smoke_1r_0061();
	this.instance_1.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_2 = new lib.ll_smoke_1r_0062();
	this.instance_2.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_3 = new lib.ll_smoke_1r_0063();
	this.instance_3.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_4 = new lib.ll_smoke_1r_0064();
	this.instance_4.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_5 = new lib.ll_smoke_1r_0065();
	this.instance_5.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_6 = new lib.ll_smoke_1r_0066();
	this.instance_6.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_7 = new lib.ll_smoke_1r_0067();
	this.instance_7.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_8 = new lib.ll_smoke_1r_0068();
	this.instance_8.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_9 = new lib.ll_smoke_1r_0069();
	this.instance_9.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_10 = new lib.ll_smoke_1r_0070();
	this.instance_10.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_11 = new lib.ll_smoke_1r_0071();
	this.instance_11.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_12 = new lib.ll_smoke_1r_0072();
	this.instance_12.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_13 = new lib.ll_smoke_1r_0073();
	this.instance_13.setTransform(-5.2,-4.6,1.212,1.212);

	this.instance_14 = new lib.ll_smoke_1r_0074();
	this.instance_14.setTransform(-5.2,-4.6,1.212,1.212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-4.6,36.4,53.4);


(lib.ll_s_shadow_colonelz_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_shadow_colonelz();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350,772);


(lib.ll_s_pole_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_pole();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,584);


(lib.ll_s_board_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_board();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,272);


(lib.ll_s_r_arm_new_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_r_arm_new();
	this.instance.setTransform(19,24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19,24.6,81,160);


(lib.ll_s_plaque_type_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_plaque_type_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,63);


(lib.ll_s_plaque_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_plaque_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,343,74);


(lib.doesntmatter = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buttonpixel();
	this.instance.setTransform(463.9,7.3,245.004,74.587);

	this.instance_1 = new lib.buttonpixel();
	this.instance_1.setTransform(6.8,7,245.004,372.94);

	this.instance_2 = new lib.buttonpixel();
	this.instance_2.setTransform(910,7,245.004,372.94);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.8,7,1393.2,745.9);


(lib.ll_s_tie_l_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_tie_l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,76);


(lib.ll_s_l_sleeve_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_l_sleeve();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,23);


(lib.ll_s_stick_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_stick();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,352);


(lib.ll_s_l_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_l_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,173);


(lib.ll_s_head_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_head_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,171);


(lib.ll_s_eye_R_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_eye_R();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,23);


(lib.ll_s_torso_shadow_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_torso_shadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,63);


(lib.ll_s_l_forearm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_l_forearm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,175);


(lib.ll_s_l_arm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_l_arm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,107,234);


(lib.ll_s_r_lip_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_r_lip();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,18,26);


(lib.ll_s_r_cheek_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_r_cheek();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,52);


(lib.ll_s_nose_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_nose();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,41);


(lib.ll_s_moustache_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_moustache();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,32);


(lib.ll_s_m_lip_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_m_lip();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.ll_s_l_lip_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_l_lip();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,24);


(lib.ll_s_l_cheek_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_l_cheek();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,49);


(lib.ll_s_jaw_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_jaw();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,92);


(lib.ll_s_goaty_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_goaty();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35,38);


(lib.ll_s_bg_mouth_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_bg_mouth();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,27);


(lib.ll_s_r_hand_1 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.ll_s_r_hand();
	this.instance.setTransform(29,7);

	// Layer 5
	this.instance_1 = new lib.ll_s_bucket_all();
	this.instance_1.setTransform(11,-115);

	// Layer 2
	this.instance_2 = new lib.ll_s_r_arm_new();
	this.instance_2.setTransform(93,-89.8);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,-115,163,232);


(lib.ll_s_neck_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_neck();
	this.instance.setTransform(24.1,7.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(24.1,7.1,80,55);


(lib.ll_s_eye_L_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_eye_L();
	this.instance.setTransform(5,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,2,41,23);


(lib.ll_s_pants = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_legs();
	this.instance.setTransform(70,104);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(70,104,253,447);


(lib.ll_s_tie_R = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_tie_r();
	this.instance.setTransform(50,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(50,2,48,75);


(lib.ll_s_lids = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_eyelids();
	this.instance.setTransform(3,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,0,59,19);


(lib.ll_s_bow_R = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_bow_r();
	this.instance.setTransform(48,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48,0,52,23);


(lib.ll_s_bow_l_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_bow_l();
	this.instance.setTransform(8,2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,2,44,23);


(lib.back_to_hall_area_button = function() {
	this.initialize();

	// Layer 2
	this.hitArea = new lib.doesntmatter();
	this.hitArea.setTransform(700,382.5,1,1,0,0,0,700,382.5);
	this.hitArea.visible = false;

	this.addChild(this.hitArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.8,7,1393.2,745.9);


(lib.ll_s_l_sleeve_2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.ll_s_l_sleeve_1();
	this.instance_1.setTransform(28,11.5,1,1,0,0,0,28,11.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,23);


(lib.ll_s_head_bg_2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.ll_s_head_bg_1();
	this.instance_1.setTransform(71.5,85.5,1,1,0,0,0,71.5,85.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,171);


(lib.ll_s_s_r_arm_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r_hand
	this.instance = new lib.ll_s_r_hand_1();
	this.instance.setTransform(163.7,193,0.973,0.99,0,0,0,156.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:92.5,regY:1,x:101.8,y:151},0).wait(1).to({scaleX:0.97},0).wait(1).to({x:101.9},0).wait(1).to({x:102},0).wait(1).to({x:102.1},0).wait(1).to({x:102.2},0).wait(1).to({x:102.3},0).wait(1).to({scaleX:0.98,x:102.4},0).wait(1).to({scaleY:0.99,x:102.6},0).wait(1).to({x:102.8},0).wait(1).to({scaleX:0.98,x:103},0).wait(1).to({x:103.2},0).wait(1).to({x:103.3},0).wait(1).to({scaleX:0.98,x:103.5},0).wait(1).to({x:103.8},0).wait(1).to({x:103.9},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:104.2},0).wait(1).to({x:104.4},0).wait(1).to({scaleX:0.98,x:104.6},0).wait(1).to({x:104.9},0).wait(1).to({scaleX:0.98,x:105.1},0).wait(1).to({x:105.4},0).wait(1).to({scaleY:0.99,x:105.6},0).wait(1).to({scaleX:0.98,x:105.9},0).wait(1).to({x:106.1},0).wait(1).to({scaleX:0.98,x:106.4},0).wait(1).to({x:106.6},0).wait(1).to({scaleX:0.98,x:106.9},0).wait(1).to({scaleY:0.99,x:107.2},0).wait(1).to({scaleX:0.98,x:107.4},0).wait(1).to({x:107.7},0).wait(1).to({scaleX:0.99,x:108},0).wait(1).to({x:108.2},0).wait(1).to({scaleX:0.99,scaleY:1,x:108.5},0).wait(1).to({x:108.8},0).wait(1).to({scaleX:0.99,x:109},0).wait(1).to({x:109.3},0).wait(1).to({scaleX:0.99,x:109.6},0).wait(1).to({scaleY:1,x:109.9},0).wait(1).to({scaleX:0.99,x:110.2},0).wait(1).to({x:110.5},0).wait(1).to({scaleX:0.99,x:110.7},0).wait(1).to({x:111},0).wait(1).to({scaleX:0.99,x:111.3},0).wait(1).to({scaleY:1,x:111.6},0).wait(1).to({scaleX:0.99,x:111.8},0).wait(1).to({x:112.1},0).wait(1).to({scaleX:0.99,x:112.4},0).wait(1).to({x:112.6},0).wait(1).to({scaleX:0.99,scaleY:1,x:112.9},0).wait(1).to({x:113.2},0).wait(1).to({scaleX:1,x:113.5},0).wait(1).to({x:113.7},0).wait(1).to({x:114},0).wait(1).to({scaleX:1,x:114.2},0).wait(1).to({scaleY:1,x:114.4},0).wait(1).to({scaleX:1,x:114.7},0).wait(1).to({x:114.9},0).wait(1).to({scaleX:1,x:115.2},0).wait(1).to({x:115.4},0).wait(1).to({x:115.6},0).wait(1).to({scaleX:1,scaleY:1,x:115.8},0).wait(1).to({x:116},0).wait(1).to({x:116.1},0).wait(1).to({scaleX:1,x:116.3},0).wait(1).to({x:116.4},0).wait(1).to({x:116.5},0).wait(1).to({regX:156.1,regY:43.5,x:180.1,y:193.5},0).wait(34));

	// r_arm
	this.instance_1 = new lib.ll_s_r_arm_new_1();
	this.instance_1.setTransform(77.9,83.5,0.973,0.99,0,0,0,-4.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:59.5,regY:104.6,x:140.2,y:140.5},0).wait(1).to({scaleX:0.97,x:140.3},0).wait(1).to({x:140.4},0).wait(1).to({x:140.5},0).wait(1).to({x:140.6},0).wait(1).to({x:140.7},0).wait(1).to({x:140.9},0).wait(1).to({scaleX:0.98,x:141.1},0).wait(1).to({scaleY:0.99,x:141.2},0).wait(1).to({x:141.5},0).wait(1).to({scaleX:0.98,x:141.6},0).wait(1).to({x:141.8},0).wait(1).to({x:142.1},0).wait(1).to({scaleX:0.98,x:142.3},0).wait(1).to({x:142.6},0).wait(1).to({x:142.8},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:143.1},0).wait(1).to({x:143.4},0).wait(1).to({scaleX:0.98,x:143.7},0).wait(1).to({x:143.9},0).wait(1).to({scaleX:0.98,x:144.2},0).wait(1).to({x:144.5},0).wait(1).to({scaleY:0.99,x:144.8},0).wait(1).to({scaleX:0.98,x:145.1},0).wait(1).to({x:145.4},0).wait(1).to({scaleX:0.98,x:145.7},0).wait(1).to({x:146},0).wait(1).to({scaleX:0.98,x:146.3,y:140.4},0).wait(1).to({scaleY:0.99,x:146.6,y:140.5},0).wait(1).to({scaleX:0.98,x:146.9},0).wait(1).to({x:147.2,y:140.4},0).wait(1).to({scaleX:0.99,x:147.6,y:140.5},0).wait(1).to({x:147.9,y:140.4},0).wait(1).to({scaleX:0.99,scaleY:1,x:148.2,y:140.5},0).wait(1).to({x:148.5},0).wait(1).to({scaleX:0.99,x:148.9,y:140.4},0).wait(1).to({x:149.2,y:140.5},0).wait(1).to({scaleX:0.99,x:149.5,y:140.4},0).wait(1).to({scaleY:1,x:149.8,y:140.5},0).wait(1).to({scaleX:0.99,x:150.1,y:140.4},0).wait(1).to({x:150.5},0).wait(1).to({scaleX:0.99,x:150.8,y:140.5},0).wait(1).to({x:151.1,y:140.4},0).wait(1).to({scaleX:0.99,x:151.5,y:140.5},0).wait(1).to({scaleY:1,x:151.8,y:140.4},0).wait(1).to({scaleX:0.99,x:152.1},0).wait(1).to({x:152.5},0).wait(1).to({scaleX:0.99,x:152.8},0).wait(1).to({x:153.1,y:140.5},0).wait(1).to({scaleX:0.99,scaleY:1,x:153.4,y:140.4},0).wait(1).to({x:153.7},0).wait(1).to({scaleX:1,x:154},0).wait(1).to({x:154.3},0).wait(1).to({x:154.7},0).wait(1).to({scaleX:1,x:154.9},0).wait(1).to({scaleY:1,x:155.3},0).wait(1).to({scaleX:1,x:155.5},0).wait(1).to({x:155.8},0).wait(1).to({scaleX:1,x:156.1},0).wait(1).to({x:156.3},0).wait(1).to({x:156.6},0).wait(1).to({scaleX:1,scaleY:1,x:156.8},0).wait(1).to({x:157},0).wait(1).to({x:157.2},0).wait(1).to({scaleX:1,x:157.4},0).wait(1).to({x:157.5},0).wait(1).to({x:157.6},0).wait(1).to({regX:-4.5,regY:47,x:93.7,y:82.8},0).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.4,36.1,158.7,229.7);


(lib.ll_s_h_r_arm_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// r_hand
	this.instance = new lib.ll_s_r_hand_1();
	this.instance.setTransform(180.1,193.5,1,1,0,0,0,156.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({regX:92.5,regY:1,x:116.5,y:151},0).wait(2).to({x:116.4},0).wait(1).to({x:116.3},0).wait(1).to({scaleX:1,x:116.2},0).wait(1).to({x:116.1},0).wait(1).to({x:115.9},0).wait(1).to({x:115.8},0).wait(1).to({scaleX:1,scaleY:1,x:115.6},0).wait(1).to({x:115.5},0).wait(1).to({x:115.3},0).wait(1).to({scaleX:1,x:115.1},0).wait(1).to({x:114.9},0).wait(1).to({x:114.7},0).wait(1).to({scaleX:1,x:114.5},0).wait(1).to({scaleY:1,x:114.3},0).wait(1).to({x:114.1},0).wait(1).to({scaleX:1,x:113.8},0).wait(1).to({x:113.6},0).wait(1).to({scaleX:0.99,x:113.4},0).wait(1).to({x:113.1},0).wait(1).to({x:112.9},0).wait(1).to({scaleX:0.99,scaleY:1,x:112.6},0).wait(1).to({x:112.4},0).wait(1).to({scaleX:0.99,x:112.1},0).wait(1).to({x:111.9},0).wait(1).to({scaleX:0.99,x:111.6},0).wait(1).to({x:111.4},0).wait(1).to({scaleX:0.99,scaleY:1,x:111.1},0).wait(1).to({x:110.8},0).wait(1).to({scaleX:0.99,x:110.5},0).wait(1).to({x:110.3},0).wait(1).to({scaleX:0.99,x:110},0).wait(1).to({scaleY:1,x:109.7},0).wait(1).to({scaleX:0.99,x:109.5},0).wait(1).to({x:109.2},0).wait(1).to({scaleX:0.99,x:108.9},0).wait(1).to({x:108.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:108.4},0).wait(1).to({x:108.1},0).wait(1).to({scaleX:0.98,x:107.8},0).wait(1).to({x:107.5},0).wait(1).to({scaleX:0.98,x:107.2},0).wait(1).to({x:107},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:106.7},0).wait(1).to({x:106.4},0).wait(1).to({scaleX:0.98,x:106.2},0).wait(1).to({x:105.9},0).wait(1).to({scaleX:0.98,x:105.6},0).wait(1).to({scaleY:0.99,x:105.3},0).wait(1).to({scaleX:0.98,x:105.1},0).wait(1).to({x:104.8},0).wait(1).to({scaleX:0.98,x:104.5},0).wait(1).to({x:104.3},0).wait(1).to({x:104},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:103.8},0).wait(1).to({x:103.6},0).wait(1).to({scaleX:0.98,x:103.3},0).wait(1).to({x:103.1},0).wait(1).to({scaleX:0.98,x:102.9},0).wait(1).to({x:102.7},0).wait(1).to({scaleY:0.99,x:102.4},0).wait(1).to({scaleX:0.97,x:102.3},0).wait(1).to({x:102.1},0).wait(1).to({x:102},0).wait(1).to({x:101.8},0).wait(2).to({regX:156.1,regY:43.5,scaleX:0.97,x:163.7,y:193},0).wait(34));

	// r_arm
	this.instance_1 = new lib.ll_s_r_arm_new_1();
	this.instance_1.setTransform(93.7,82.8,1,1,0,0,0,-4.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:59.5,regY:104.6,x:157.7,y:140.4},0).wait(1).to({x:157.6},0).wait(2).to({x:157.5},0).wait(1).to({scaleX:1,x:157.3},0).wait(1).to({x:157.2},0).wait(1).to({x:157},0).wait(1).to({x:156.8},0).wait(1).to({scaleX:1,scaleY:1,x:156.7},0).wait(1).to({x:156.5},0).wait(1).to({x:156.3},0).wait(1).to({scaleX:1,x:156.1},0).wait(1).to({x:155.8},0).wait(1).to({x:155.6},0).wait(1).to({scaleX:1,x:155.4},0).wait(1).to({scaleY:1,x:155.1},0).wait(1).to({x:154.8},0).wait(1).to({scaleX:1,x:154.5},0).wait(1).to({x:154.3},0).wait(1).to({scaleX:0.99,x:154},0).wait(1).to({x:153.7},0).wait(1).to({x:153.4},0).wait(1).to({scaleX:0.99,scaleY:1,x:153.2,y:140.5},0).wait(1).to({x:152.8,y:140.4},0).wait(1).to({scaleX:0.99,x:152.6},0).wait(1).to({x:152.2},0).wait(1).to({scaleX:0.99,x:152},0).wait(1).to({x:151.6,y:140.5},0).wait(1).to({scaleX:0.99,scaleY:1,x:151.3,y:140.4},0).wait(1).to({x:151},0).wait(1).to({scaleX:0.99,x:150.7,y:140.5},0).wait(1).to({x:150.4,y:140.4},0).wait(1).to({scaleX:0.99,x:150,y:140.5},0).wait(1).to({scaleY:1,x:149.7,y:140.4},0).wait(1).to({scaleX:0.99,x:149.4},0).wait(1).to({x:149,y:140.5},0).wait(1).to({scaleX:0.99,x:148.7,y:140.4},0).wait(1).to({x:148.4,y:140.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:148.1,y:140.4},0).wait(1).to({x:147.8,y:140.5},0).wait(1).to({scaleX:0.98,x:147.4},0).wait(1).to({x:147.1,y:140.4},0).wait(1).to({scaleX:0.98,x:146.8,y:140.5},0).wait(1).to({x:146.5,y:140.4},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:146.1,y:140.5},0).wait(1).to({x:145.8},0).wait(1).to({scaleX:0.98,x:145.5},0).wait(1).to({x:145.1},0).wait(1).to({scaleX:0.98,x:144.8},0).wait(1).to({scaleY:0.99,x:144.5},0).wait(1).to({scaleX:0.98,x:144.2},0).wait(1).to({x:143.9},0).wait(1).to({scaleX:0.98,x:143.6},0).wait(1).to({x:143.3},0).wait(1).to({x:143},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:142.7},0).wait(1).to({x:142.4},0).wait(1).to({scaleX:0.98,x:142.1},0).wait(1).to({x:141.8},0).wait(1).to({scaleX:0.98,x:141.6},0).wait(1).to({x:141.3},0).wait(1).to({scaleY:0.99,x:141.1},0).wait(1).to({scaleX:0.97,x:140.9},0).wait(1).to({x:140.7},0).wait(1).to({x:140.5},0).wait(1).to({x:140.4},0).wait(1).to({x:140.3},0).wait(1).to({regX:-4.5,regY:47,scaleX:0.97,x:77.9,y:83.5},0).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35,35,163.2,232);


(lib.ll_s_l_hand_all_2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_l_hand_1();
	this.instance.setTransform(31.5,97.5,1,1,0,0,0,26.5,86.5);

	this.instance_1 = new lib.ll_s_stick_1();
	this.instance_1.setTransform(65,317,1,1,0,0,0,24,176);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,11,84,482);


(lib.ll_s_mouth_notalk = function() {
	this.initialize();

	// goaty
	this.instance = new lib.ll_s_goaty_1();
	this.instance.setTransform(81.6,158.1,1,1,0,0,0,19,11.1);

	// r_lip
	this.instance_1 = new lib.ll_s_r_lip_1();
	this.instance_1.setTransform(97.4,154.1,1,1,0,0,0,13.8,17.1);

	// l_lip
	this.instance_2 = new lib.ll_s_l_lip_1();
	this.instance_2.setTransform(66,155.6,1,1,0,0,0,7.4,17.6);

	// m_lip
	this.instance_3 = new lib.ll_s_m_lip_1();
	this.instance_3.setTransform(81.6,158.1,1,1,0,0,0,10,19.1);

	// nose
	this.instance_4 = new lib.ll_s_nose_1();
	this.instance_4.setTransform(79.6,120.5,1,1,0,0,0,15,20.5);

	// moustache
	this.instance_5 = new lib.ll_s_moustache_1();
	this.instance_5.setTransform(80.6,127,1,1,0,0,0,38,11);

	// bg_mouth
	this.instance_6 = new lib.ll_s_bg_mouth_1();
	this.instance_6.setTransform(81.6,140.5,0.688,0.859,0,0,0,27,13.5);

	// l_cheek
	this.instance_7 = new lib.ll_s_l_cheek_1();
	this.instance_7.setTransform(110.1,126.5,1,1,0,0,0,21.5,24.5);

	// r_cheek
	this.instance_8 = new lib.ll_s_r_cheek_1();
	this.instance_8.setTransform(51.1,131,1,1,0,0,0,16.5,26);

	// jaw
	this.instance_9 = new lib.ll_s_jaw_1();
	this.instance_9.setTransform(80.6,134.9,1,1,0,0,0,59,41.9);

	// head_bg
	this.instance_10 = new lib.ll_s_head_bg_2();
	this.instance_10.setTransform(80.1,99.5,1,1,0,0,0,71.5,85.5);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.6,14,143,171);


(lib.ll_s_m_mouth_broken_out = function() {
	this.initialize();

	// goaty
	this.instance = new lib.ll_s_goaty_1();
	this.instance.setTransform(81.6,158.1,1,1,0,0,0,19,11.1);

	// r_lip
	this.instance_1 = new lib.ll_s_r_lip_1();
	this.instance_1.setTransform(97.4,154.1,1,1,0,0,0,13.8,17.1);

	// l_lip
	this.instance_2 = new lib.ll_s_l_lip_1();
	this.instance_2.setTransform(66,155.6,1,1,0,0,0,7.4,17.6);

	// m_lip
	this.instance_3 = new lib.ll_s_m_lip_1();
	this.instance_3.setTransform(81.6,158.1,1,1,0,0,0,10,19.1);

	// nose
	this.instance_4 = new lib.ll_s_nose_1();
	this.instance_4.setTransform(79.6,120.5,1,1,0,0,0,15,20.5);

	// moustache
	this.instance_5 = new lib.ll_s_moustache_1();
	this.instance_5.setTransform(80.6,127,1,1,0,0,0,38,11);

	// bg_mouth
	this.instance_6 = new lib.ll_s_bg_mouth_1();
	this.instance_6.setTransform(81.6,140.5,0.688,0.859,0,0,0,27,13.5);

	// l_cheek
	this.instance_7 = new lib.ll_s_l_cheek_1();
	this.instance_7.setTransform(110.1,126.5,1,1,0,0,0,21.5,24.5);

	// r_cheek
	this.instance_8 = new lib.ll_s_r_cheek_1();
	this.instance_8.setTransform(51.1,131,1,1,0,0,0,16.5,26);

	// jaw
	this.instance_9 = new lib.ll_s_jaw_1();
	this.instance_9.setTransform(80.6,134.9,1,1,0,0,0,59,41.9);

	// head_bg
	this.instance_10 = new lib.ll_s_head_bg_2();
	this.instance_10.setTransform(80.1,99.5,1,1,0,0,0,71.5,85.5);

	this.addChild(this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.6,14,143,171);


(lib.ll_s_m_mouth_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			});;
			tween.wait(0);
			tween.set({
				progress: 0.01743957513138505
			});
			tween.wait(15);
			tween.set({
				progress: 0.01743957513138505
			});
			tween.wait(16);
			tween.set({
				progress: 0.01743957513138505
			});
			tween.wait(18);
			tween.set({
				progress: 0.025851513676587924
			});
			tween.wait(16);
			tween.set({
				progress: 0.07211717567520368
			});
			tween.wait(16);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(16);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.7072185358380206
			});
			tween.wait(16);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(18);
			tween.set({
				progress: 0.8123677676530567
			});
			tween.wait(16);
			tween.set({
				progress: 0.8502214911064696
			});
			tween.wait(16);
			tween.set({
				progress: 0.8586334296516726
			});
			tween.wait(17);
			tween.set({
				progress: 0.8586334296516726
			});
			tween.wait(17);
			tween.set({
				progress: 0.8460155218338682
			});
			tween.wait(17);
			tween.set({
				progress: 0.8081617983804551
			});
			tween.wait(16);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(17);
			tween.set({
				progress: 0.7072185358380206
			});
			tween.wait(17);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(16);
			tween.set({
				progress: 0.48430216439014456
			});
			tween.wait(17);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.2571798236696671
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(16);
			tween.set({
				progress: 0.16885446894503678
			});
			tween.wait(17);
			tween.set({
				progress: 0.16044253039983378
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(16);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(17);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(17);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(16);
			tween.set({
				progress: 0.14782462258202964
			});
			tween.wait(17);
			tween.set({
				progress: 0.14782462258202964
			});
			tween.wait(17);
			tween.set({
				progress: 0.14361865330942805
			});
			tween.wait(16);
			tween.set({
				progress: 0.13941268403682688
			});
			tween.wait(18);
			tween.set({
				progress: 0.13941268403682688
			});
			tween.wait(16);
			tween.set({
				progress: 0.13520671476422527
			});
			tween.wait(16);
			tween.set({
				progress: 0.13520671476422527
			});
			tween.wait(17);
			tween.set({
				progress: 0.13520671476422527
			});
			tween.wait(17);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(17);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(16);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(16);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.593657365477782
			});
			tween.wait(17);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(16);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(17);
			tween.set({
				progress: 0.29923951639568136
			});
			tween.wait(16);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.5305678263887602
			});
			tween.wait(16);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.7618961363818395
			});
			tween.wait(17);
			tween.set({
				progress: 0.8207797061982595
			});
			tween.wait(17);
			tween.set({
				progress: 0.854427460379071
			});
			tween.wait(16);
			tween.set({
				progress: 0.862839398924274
			});
			tween.wait(17);
			tween.set({
				progress: 0.8586334296516726
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(16);
			tween.set({
				progress: 0.7997498598352522
			});
			tween.wait(17);
			tween.set({
				progress: 0.7534841978366364
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(16);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(16);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(17);
			tween.set({
				progress: 0.10576492985601538
			});
			tween.wait(16);
			tween.set({
				progress: 0.06791120640260229
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.0006156980409793047
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(15);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(15);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0.009027636586182178
			});
			tween.wait(16);
			tween.set({
				progress: 0.059499267857399306
			});
			tween.wait(17);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(17);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(16);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.593657365477782
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(16);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(17);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(16);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(16);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(18);
			tween.set({
				progress: 0.21091416167105104
			});
			tween.wait(16);
			tween.set({
				progress: 0.20250222312584826
			});
			tween.wait(17);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(17);
			tween.set({
				progress: 0.22773803876145676
			});
			tween.wait(16);
			tween.set({
				progress: 0.26559176221486985
			});
			tween.wait(17);
			tween.set({
				progress: 0.3412992091216958
			});
			tween.wait(16);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(16);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.6399230274763976
			});
			tween.wait(17);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(16);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(16);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6399230274763976
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(16);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(16);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(16);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(16);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.7534841978366364
			});
			tween.wait(17);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(16);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(17);
			tween.set({
				progress: 0.7576901671092381
			});
			tween.wait(17);
			tween.set({
				progress: 0.7114245051106223
			});
			tween.wait(16);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(16);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.21512013094365262
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.10155896058341378
			});
			tween.wait(16);
			tween.set({
				progress: 0.025851513676587924
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.009027636586182178
			});
			tween.wait(17);
			tween.set({
				progress: 0.10155896058341378
			});
			tween.wait(17);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(16);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(16);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.26559176221486985
			});
			tween.wait(16);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(16);
			tween.set({
				progress: 0.278209670032674
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(16);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(16);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(18);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(16);
			tween.set({
				progress: 0.6777767509298107
			});
			tween.wait(16);
			tween.set({
				progress: 0.6988065972928177
			});
			tween.wait(17);
			tween.set({
				progress: 0.7072185358380206
			});
			tween.wait(17);
			tween.set({
				progress: 0.7114245051106223
			});
			tween.wait(17);
			tween.set({
				progress: 0.7114245051106223
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(16);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.48430216439014456
			});
			tween.wait(16);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(16);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(18);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(16);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(16);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(16);
			tween.set({
				progress: 0.7030125665654194
			});
			tween.wait(17);
			tween.set({
				progress: 0.7030125665654194
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(16);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(17);
			tween.set({
				progress: 0.6399230274763976
			});
			tween.wait(16);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(16);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(16);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(16);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(16);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(16);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(16);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(16);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(16);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(16);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(16);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(16);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(16);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(16);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(17);
			tween.set({
				progress: 0.48430216439014456
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(16);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.7450722592914337
			});
			tween.wait(16);
			tween.set({
				progress: 0.7492782285640351
			});
			tween.wait(17);
			tween.set({
				progress: 0.7492782285640351
			});
			tween.wait(16);
			tween.set({
				progress: 0.719836443655825
			});
			tween.wait(17);
			tween.set({
				progress: 0.6777767509298107
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(16);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(17);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(16);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.7030125665654194
			});
			tween.wait(16);
			tween.set({
				progress: 0.7534841978366364
			});
			tween.wait(17);
			tween.set({
				progress: 0.787131952017448
			});
			tween.wait(17);
			tween.set({
				progress: 0.8207797061982595
			});
			tween.wait(16);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(16);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(16);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(16);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(16);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8418095525612667
			});
			tween.wait(16);
			tween.set({
				progress: 0.8418095525612667
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8249856754708611
			});
			tween.wait(17);
			tween.set({
				progress: 0.8039558291078539
			});
			tween.wait(16);
			tween.set({
				progress: 0.7745140441996436
			});
			tween.wait(17);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(17);
			tween.set({
				progress: 0.593657365477782
			});
			tween.wait(16);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(16);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(16);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.24876788512446413
			});
			tween.wait(16);
			tween.set({
				progress: 0.19409028458064528
			});
			tween.wait(17);
			tween.set({
				progress: 0.1646484996724354
			});
			tween.wait(17);
			tween.set({
				progress: 0.13941268403682688
			});
			tween.wait(16);
			tween.set({
				progress: 0.10997089912861654
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211717567520368
			});
			tween.wait(16);
			tween.set({
				progress: 0.05529329858479792
			});
			tween.wait(17);
			tween.set({
				progress: 0.04688136003959516
			});
			tween.wait(17);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(17);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(16);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(17);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(17);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(17);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(16);
			tween.set({
				progress: 0.059499267857399306
			});
			tween.wait(17);
			tween.set({
				progress: 0.0931470220382108
			});
			tween.wait(17);
			tween.set({
				progress: 0.21091416167105104
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(16);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(16);
			tween.set({
				progress: 0.6777767509298107
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(17);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(16);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.29923951639568136
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.27400370076007285
			});
			tween.wait(16);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.27400370076007285
			});
			tween.wait(16);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(17);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(16);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.6146872118407891
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(16);
			tween.set({
				progress: 0.6988065972928177
			});
			tween.wait(17);
			tween.set({
				progress: 0.7282483822010279
			});
			tween.wait(17);
			tween.set({
				progress: 0.7492782285640351
			});
			tween.wait(17);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(16);
			tween.set({
				progress: 0.7703080749270425
			});
			tween.wait(17);
			tween.set({
				progress: 0.7703080749270425
			});
			tween.wait(17);
			tween.set({
				progress: 0.7703080749270425
			});
			tween.wait(16);
			tween.set({
				progress: 0.7703080749270425
			});
			tween.wait(17);
			tween.set({
				progress: 0.7661021056544407
			});
			tween.wait(17);
			tween.set({
				progress: 0.7576901671092381
			});
			tween.wait(17);
			tween.set({
				progress: 0.7450722592914337
			});
			tween.wait(16);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(16);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(16);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(16);
			tween.set({
				progress: 0.278209670032674
			});
			tween.wait(17);
			tween.set({
				progress: 0.26138579294226827
			});
			tween.wait(17);
			tween.set({
				progress: 0.24876788512446413
			});
			tween.wait(16);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(17);
			tween.set({
				progress: 0.22773803876145676
			});
			tween.wait(17);
			tween.set({
				progress: 0.21091416167105104
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(16);
			tween.set({
				progress: 0.18147237676284114
			});
			tween.wait(17);
			tween.set({
				progress: 0.17726640749023953
			});
			tween.wait(17);
			tween.set({
				progress: 0.16885446894503678
			});
			tween.wait(17);
			tween.set({
				progress: 0.16044253039983378
			});
			tween.wait(16);
			tween.set({
				progress: 0.14782462258202964
			});
			tween.wait(17);
			tween.set({
				progress: 0.13941268403682688
			});
			tween.wait(17);
			tween.set({
				progress: 0.13100074549162388
			});
			tween.wait(16);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(16);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.12258880694642113
			});
			tween.wait(17);
			tween.set({
				progress: 0.12258880694642113
			});
			tween.wait(16);
			tween.set({
				progress: 0.12258880694642113
			});
			tween.wait(17);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.15203059185463103
			});
			tween.wait(16);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(16);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(16);
			tween.set({
				progress: 0.3412992091216958
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.3412992091216958
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(16);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(16);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(16);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(16);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(16);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(16);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(16);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(16);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.534773795661362
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.29923951639568136
			});
			tween.wait(17);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(17);
			tween.set({
				progress: 0.18147237676284114
			});
			tween.wait(16);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(17);
			tween.set({
				progress: 0.059499267857399306
			});
			tween.wait(17);
			tween.set({
				progress: 0.021645544403986434
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(16);
			tween.set({
				progress: 0.11838283767381953
			});
			tween.wait(18);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(16);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(16);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(16);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.23194400803405837
			});
			tween.wait(16);
			tween.set({
				progress: 0.23194400803405837
			});
			tween.wait(17);
			tween.set({
				progress: 0.26138579294226827
			});
			tween.wait(17);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(16);
			tween.set({
				progress: 0.48430216439014456
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.534773795661362
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(16);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(16);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(17);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(16);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(17);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(16);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(16);
			tween.set({
				progress: 0.6777767509298107
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(18);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(16);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(17);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(16);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(16);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(16);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(16);
			tween.set({
				progress: 0.16885446894503678
			});
			tween.wait(17);
			tween.set({
				progress: 0.13941268403682688
			});
			tween.wait(17);
			tween.set({
				progress: 0.10997089912861654
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211717567520368
			});
			tween.wait(16);
			tween.set({
				progress: 0.05529329858479792
			});
			tween.wait(17);
			tween.set({
				progress: 0.04688136003959516
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(16);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(16);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(16);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(16);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(16);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0.059499267857399306
			});
			tween.wait(17);
			tween.set({
				progress: 0.10576492985601538
			});
			tween.wait(16);
			tween.set({
				progress: 0.16885446894503678
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(18);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(16);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(16);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(16);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(16);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(16);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(16);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(16);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(16);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.5642155805695717
			});
			tween.wait(16);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(16);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(16);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(16);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(16);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(18);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(16);
			tween.set({
				progress: 0.5305678263887602
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(16);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(16);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.6146872118407891
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(16);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(16);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(16);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.2235320694888556
			});
			tween.wait(17);
			tween.set({
				progress: 0.13520671476422527
			});
			tween.wait(16);
			tween.set({
				progress: 0.03846942149439218
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.04267539076699367
			});
			tween.wait(17);
			tween.set({
				progress: 0.10997089912861654
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(16);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(16);
			tween.set({
				progress: 0.2571798236696671
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.2571798236696671
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(16);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(16);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(16);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(16);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(16);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6946006280202165
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(16);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(16);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(16);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(17);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(17);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(16);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(16);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(16);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(17);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(16);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(17);
			tween.set({
				progress: 0.5305678263887602
			});
			tween.wait(16);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(16);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(16);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(17);
			tween.set({
				progress: 0.45065441020933306
			});
			tween.wait(16);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(16);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(16);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.6188931811133905
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(16);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(17);
			tween.set({
				progress: 0.6651588431120061
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(16);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.5642155805695717
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(16);
			tween.set({
				progress: 0.6399230274763976
			});
			tween.wait(17);
			tween.set({
				progress: 0.6735707816572092
			});
			tween.wait(16);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.7114245051106223
			});
			tween.wait(17);
			tween.set({
				progress: 0.7324543514736291
			});
			tween.wait(17);
			tween.set({
				progress: 0.7534841978366364
			});
			tween.wait(17);
			tween.set({
				progress: 0.7703080749270425
			});
			tween.wait(16);
			tween.set({
				progress: 0.7829259827448466
			});
			tween.wait(17);
			tween.set({
				progress: 0.795543890562651
			});
			tween.wait(17);
			tween.set({
				progress: 0.8123677676530567
			});
			tween.wait(17);
			tween.set({
				progress: 0.8207797061982595
			});
			tween.wait(16);
			tween.set({
				progress: 0.8249856754708611
			});
			tween.wait(16);
			tween.set({
				progress: 0.8249856754708611
			});
			tween.wait(17);
			tween.set({
				progress: 0.8291916447434624
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(16);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(17);
			tween.set({
				progress: 0.8376035832886655
			});
			tween.wait(16);
			tween.set({
				progress: 0.8333976140160636
			});
			tween.wait(17);
			tween.set({
				progress: 0.8249856754708611
			});
			tween.wait(17);
			tween.set({
				progress: 0.8039558291078539
			});
			tween.wait(16);
			tween.set({
				progress: 0.7745140441996436
			});
			tween.wait(17);
			tween.set({
				progress: 0.719836443655825
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(16);
			tween.set({
				progress: 0.6146872118407891
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.29923951639568136
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.21512013094365262
			});
			tween.wait(16);
			tween.set({
				progress: 0.17306043821763836
			});
			tween.wait(17);
			tween.set({
				progress: 0.11838283767381953
			});
			tween.wait(17);
			tween.set({
				progress: 0.08473508349300804
			});
			tween.wait(16);
			tween.set({
				progress: 0.05529329858479792
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.013233605858783668
			});
			tween.wait(17);
			tween.set({
				progress: 0.004821667313580687
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.009027636586182178
			});
			tween.wait(17);
			tween.set({
				progress: 0.01743957513138505
			});
			tween.wait(17);
			tween.set({
				progress: 0.025851513676587924
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(17);
			tween.set({
				progress: 0.05108732931219654
			});
			tween.wait(16);
			tween.set({
				progress: 0.0931470220382108
			});
			tween.wait(17);
			tween.set({
				progress: 0.1267947762190223
			});
			tween.wait(16);
			tween.set({
				progress: 0.1646484996724354
			});
			tween.wait(17);
			tween.set({
				progress: 0.23194400803405837
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(16);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(16);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.2908275778504786
			});
			tween.wait(17);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(16);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(17);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(17);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(16);
			tween.set({
				progress: 0.2824156393052756
			});
			tween.wait(17);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(16);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(17);
			tween.set({
				progress: 0.6104812425681878
			});
			tween.wait(16);
			tween.set({
				progress: 0.593657365477782
			});
			tween.wait(18);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(16);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(16);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(16);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(16);
			tween.set({
				progress: 0.7072185358380206
			});
			tween.wait(18);
			tween.set({
				progress: 0.719836443655825
			});
			tween.wait(16);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(16);
			tween.set({
				progress: 0.7240424129284266
			});
			tween.wait(17);
			tween.set({
				progress: 0.7156304743832236
			});
			tween.wait(17);
			tween.set({
				progress: 0.6988065972928177
			});
			tween.wait(16);
			tween.set({
				progress: 0.6819827202024121
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(16);
			tween.set({
				progress: 0.5642155805695717
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(16);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(17);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(17);
			tween.set({
				progress: 0.37074099402990573
			});
			tween.wait(16);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(16);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(16);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(16);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(16);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(16);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.669364812384608
			});
			tween.wait(16);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(16);
			tween.set({
				progress: 0.6777767509298107
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(17);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(16);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6861886894750135
			});
			tween.wait(17);
			tween.set({
				progress: 0.7156304743832236
			});
			tween.wait(16);
			tween.set({
				progress: 0.7408662900188321
			});
			tween.wait(17);
			tween.set({
				progress: 0.7787200134722452
			});
			tween.wait(16);
			tween.set({
				progress: 0.7913379212900495
			});
			tween.wait(17);
			tween.set({
				progress: 0.795543890562651
			});
			tween.wait(17);
			tween.set({
				progress: 0.795543890562651
			});
			tween.wait(16);
			tween.set({
				progress: 0.7787200134722452
			});
			tween.wait(17);
			tween.set({
				progress: 0.7576901671092381
			});
			tween.wait(17);
			tween.set({
				progress: 0.7282483822010279
			});
			tween.wait(17);
			tween.set({
				progress: 0.6903946587476151
			});
			tween.wait(16);
			tween.set({
				progress: 0.6273051196585935
			});
			tween.wait(17);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(16);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(17);
			tween.set({
				progress: 0.37074099402990573
			});
			tween.wait(16);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.3412992091216958
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(16);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(17);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(16);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(16);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(16);
			tween.set({
				progress: 0.5642155805695717
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5305678263887602
			});
			tween.wait(16);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(17);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(16);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.29923951639568136
			});
			tween.wait(17);
			tween.set({
				progress: 0.27400370076007285
			});
			tween.wait(16);
			tween.set({
				progress: 0.2571798236696671
			});
			tween.wait(17);
			tween.set({
				progress: 0.24876788512446413
			});
			tween.wait(17);
			tween.set({
				progress: 0.24876788512446413
			});
			tween.wait(17);
			tween.set({
				progress: 0.24876788512446413
			});
			tween.wait(16);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(17);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(17);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(17);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(16);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(16);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(16);
			tween.set({
				progress: 0.48430216439014456
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(16);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(16);
			tween.set({
				progress: 0.5894513962051806
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(16);
			tween.set({
				progress: 0.41700665602852155
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(16);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.2571798236696671
			});
			tween.wait(16);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(17);
			tween.set({
				progress: 0.22773803876145676
			});
			tween.wait(17);
			tween.set({
				progress: 0.21512013094365262
			});
			tween.wait(17);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(16);
			tween.set({
				progress: 0.19409028458064528
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(16);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(16);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(17);
			tween.set({
				progress: 0.19829625385324687
			});
			tween.wait(17);
			tween.set({
				progress: 0.2235320694888556
			});
			tween.wait(16);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(16);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(16);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(17);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(16);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(16);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.5221558878435576
			});
			tween.wait(16);
			tween.set({
				progress: 0.48850813366274615
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(16);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(16);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.5473917034791662
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(16);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.6315110889311947
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(17);
			tween.set({
				progress: 0.6483349660216007
			});
			tween.wait(17);
			tween.set({
				progress: 0.652540935294202
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(16);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(16);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(16);
			tween.set({
				progress: 0.660952873839405
			});
			tween.wait(17);
			tween.set({
				progress: 0.6567469045668036
			});
			tween.wait(17);
			tween.set({
				progress: 0.6441289967489993
			});
			tween.wait(17);
			tween.set({
				progress: 0.6357170582037965
			});
			tween.wait(17);
			tween.set({
				progress: 0.6230991503859922
			});
			tween.wait(16);
			tween.set({
				progress: 0.6062752732955862
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(16);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(16);
			tween.set({
				progress: 0.2235320694888556
			});
			tween.wait(17);
			tween.set({
				progress: 0.16885446894503678
			});
			tween.wait(17);
			tween.set({
				progress: 0.10155896058341378
			});
			tween.wait(16);
			tween.set({
				progress: 0.06370523713000091
			});
			tween.wait(17);
			tween.set({
				progress: 0.030057482949189415
			});
			tween.wait(17);
			tween.set({
				progress: 0.004821667313580687
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0.07632314494780505
			});
			tween.wait(17);
			tween.set({
				progress: 0.16044253039983378
			});
			tween.wait(16);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(16);
			tween.set({
				progress: 0.47589022584494156
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(16);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(16);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5978633347503832
			});
			tween.wait(16);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(17);
			tween.set({
				progress: 0.602069304022985
			});
			tween.wait(16);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(17);
			tween.set({
				progress: 0.534773795661362
			});
			tween.wait(16);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(17);
			tween.set({
				progress: 0.37074099402990573
			});
			tween.wait(17);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(16);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(18);
			tween.set({
				progress: 0.23614997730665976
			});
			tween.wait(16);
			tween.set({
				progress: 0.219326100216254
			});
			tween.wait(17);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(16);
			tween.set({
				progress: 0.20250222312584826
			});
			tween.wait(17);
			tween.set({
				progress: 0.20250222312584826
			});
			tween.wait(17);
			tween.set({
				progress: 0.20250222312584826
			});
			tween.wait(16);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(17);
			tween.set({
				progress: 0.21512013094365262
			});
			tween.wait(17);
			tween.set({
				progress: 0.219326100216254
			});
			tween.wait(17);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(17);
			tween.set({
				progress: 0.278209670032674
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(16);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(18);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(16);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(16);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.5558036420243692
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(16);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(17);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(16);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.26559176221486985
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(17);
			tween.set({
				progress: 0.2529738543970655
			});
			tween.wait(16);
			tween.set({
				progress: 0.26979773148747127
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.5179499185709561
			});
			tween.wait(16);
			tween.set({
				progress: 0.5137439492983547
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(16);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(17);
			tween.set({
				progress: 0.278209670032674
			});
			tween.wait(16);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(17);
			tween.set({
				progress: 0.24035594657926135
			});
			tween.wait(17);
			tween.set({
				progress: 0.26559176221486985
			});
			tween.wait(16);
			tween.set({
				progress: 0.3076514549408843
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(17);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(16);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(16);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5305678263887602
			});
			tween.wait(17);
			tween.set({
				progress: 0.4969200722079487
			});
			tween.wait(17);
			tween.set({
				progress: 0.4632723180271374
			});
			tween.wait(17);
			tween.set({
				progress: 0.4296245638463259
			});
			tween.wait(16);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(16);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(18);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(16);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(17);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.5053320107531517
			});
			tween.wait(17);
			tween.set({
				progress: 0.5389797649339632
			});
			tween.wait(16);
			tween.set({
				progress: 0.5515976727517675
			});
			tween.wait(17);
			tween.set({
				progress: 0.5600096112969706
			});
			tween.wait(17);
			tween.set({
				progress: 0.5684215498421735
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(16);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(16);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(16);
			tween.set({
				progress: 0.5726275191147747
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(17);
			tween.set({
				progress: 0.5810394576599777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(16);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.5852454269325791
			});
			tween.wait(17);
			tween.set({
				progress: 0.576833488387376
			});
			tween.wait(16);
			tween.set({
				progress: 0.5642155805695717
			});
			tween.wait(17);
			tween.set({
				progress: 0.5431857342065646
			});
			tween.wait(17);
			tween.set({
				progress: 0.526361857116159
			});
			tween.wait(16);
			tween.set({
				progress: 0.5095379800257531
			});
			tween.wait(17);
			tween.set({
				progress: 0.5011260414805505
			});
			tween.wait(17);
			tween.set({
				progress: 0.49271410293534756
			});
			tween.wait(17);
			tween.set({
				progress: 0.4800961951175432
			});
			tween.wait(16);
			tween.set({
				progress: 0.4716842565723402
			});
			tween.wait(17);
			tween.set({
				progress: 0.467478287299739
			});
			tween.wait(17);
			tween.set({
				progress: 0.45906634875453606
			});
			tween.wait(17);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(16);
			tween.set({
				progress: 0.4548603794819345
			});
			tween.wait(17);
			tween.set({
				progress: 0.4464484409367317
			});
			tween.wait(16);
			tween.set({
				progress: 0.4422424716641303
			});
			tween.wait(18);
			tween.set({
				progress: 0.4380365023915287
			});
			tween.wait(16);
			tween.set({
				progress: 0.43383053311892733
			});
			tween.wait(17);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(16);
			tween.set({
				progress: 0.42541859457372455
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(17);
			tween.set({
				progress: 0.42121262530112297
			});
			tween.wait(16);
			tween.set({
				progress: 0.4128006867559202
			});
			tween.wait(17);
			tween.set({
				progress: 0.4085947174833188
			});
			tween.wait(17);
			tween.set({
				progress: 0.4043887482107172
			});
			tween.wait(17);
			tween.set({
				progress: 0.4001827789381158
			});
			tween.wait(16);
			tween.set({
				progress: 0.39597680966551446
			});
			tween.wait(17);
			tween.set({
				progress: 0.39177084039291304
			});
			tween.wait(17);
			tween.set({
				progress: 0.38756487112031146
			});
			tween.wait(16);
			tween.set({
				progress: 0.3833589018477101
			});
			tween.wait(18);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(16);
			tween.set({
				progress: 0.3791529325751087
			});
			tween.wait(17);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(16);
			tween.set({
				progress: 0.3749469633025073
			});
			tween.wait(17);
			tween.set({
				progress: 0.37074099402990573
			});
			tween.wait(17);
			tween.set({
				progress: 0.3665350247573043
			});
			tween.wait(17);
			tween.set({
				progress: 0.36232905548470296
			});
			tween.wait(16);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.3581230862121016
			});
			tween.wait(17);
			tween.set({
				progress: 0.35391711693949995
			});
			tween.wait(16);
			tween.set({
				progress: 0.3497111476668986
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(17);
			tween.set({
				progress: 0.34550517839429723
			});
			tween.wait(16);
			tween.set({
				progress: 0.3412992091216958
			});
			tween.wait(17);
			tween.set({
				progress: 0.33709323984909423
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(17);
			tween.set({
				progress: 0.33288727057649287
			});
			tween.wait(16);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.3286813013038912
			});
			tween.wait(17);
			tween.set({
				progress: 0.3244753320312901
			});
			tween.wait(16);
			tween.set({
				progress: 0.3202693627586885
			});
			tween.wait(17);
			tween.set({
				progress: 0.3160633934860871
			});
			tween.wait(17);
			tween.set({
				progress: 0.3118574242134855
			});
			tween.wait(17);
			tween.set({
				progress: 0.3034454856682827
			});
			tween.wait(16);
			tween.set({
				progress: 0.2950335471230798
			});
			tween.wait(17);
			tween.set({
				progress: 0.286621608577877
			});
			tween.wait(17);
			tween.set({
				progress: 0.278209670032674
			});
			tween.wait(16);
			tween.set({
				progress: 0.26559176221486985
			});
			tween.wait(18);
			tween.set({
				progress: 0.24456191585186252
			});
			tween.wait(16);
			tween.set({
				progress: 0.22773803876145676
			});
			tween.wait(16);
			tween.set({
				progress: 0.20670819239844987
			});
			tween.wait(17);
			tween.set({
				progress: 0.18988431530804412
			});
			tween.wait(17);
			tween.set({
				progress: 0.17306043821763836
			});
			tween.wait(17);
			tween.set({
				progress: 0.1562365611272326
			});
			tween.wait(17);
			tween.set({
				progress: 0.12258880694642113
			});
			tween.wait(16);
			tween.set({
				progress: 0.10155896058341378
			});
			tween.wait(17);
			tween.set({
				progress: 0.08052911422040665
			});
			tween.wait(17);
			tween.set({
				progress: 0.034263452221790794
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0.001
			});
			tween.wait(3600);
			tween.set({
				progress: 0
		
			});
		
		
			tween.setPaused(true);
			tween.setPosition(0);
			var that = this;
			tween.addEventListener("change", function (event) {
				var frame = tween.target.progress * (that.timeline.duration - 1);
				that.gotoAndStop(frame);
				var event = new createjs.Event("progress_update", true);
				event.progress = tween.target.progress;
				event.tween = tween;
				that.dispatchEvent(event);
			});
			if (!window._) {
				tween.setPaused(false);
			};
			var createEvent = new createjs.Event("tween_created", true);
			createEvent.tween = tween;
			this.dispatchEvent(createEvent);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// goaty
	this.instance = new lib.ll_s_goaty_1();
	this.instance.setTransform(81.6,158.1,1,1,0,0,0,19,11.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:17.5,regY:19,x:80.1,y:166.1},0).wait(1).to({y:166.4},0).wait(1).to({y:166.8},0).wait(1).to({y:167.2},0).wait(1).to({y:167.7},0).wait(1).to({y:168.3},0).wait(1).to({y:168.8},0).wait(1).to({y:169.4},0).wait(1).to({y:169.9},0).wait(1).to({y:170.5},0).wait(1).to({y:171},0).wait(1).to({y:171.4},0).wait(1).to({y:171.8},0).wait(1).to({regX:19,regY:11.1,x:81.6,y:164},0).wait(1));

	// r_lip
	this.instance_1 = new lib.ll_s_r_lip_1();
	this.instance_1.setTransform(97.4,154.1,1,1,0,0,0,13.8,17.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:9,regY:13,scaleX:1,skewY:-0.4,x:92.6,y:150.1},0).wait(1).to({scaleX:1.01,skewY:-1.3,y:150.4},0).wait(1).to({scaleX:1.03,skewY:-2.7,x:92.7,y:150.7},0).wait(1).to({scaleX:1.05,skewY:-4.3,x:92.8,y:151.2},0).wait(1).to({scaleX:1.06,skewY:-6.1,x:92.9,y:151.7},0).wait(1).to({scaleX:1.09,skewY:-8,y:152.3},0).wait(1).to({scaleX:1.11,skewY:-9.9,x:93.1,y:152.9},0).wait(1).to({scaleX:1.13,skewY:-12,x:93.2,y:153.5},0).wait(1).to({scaleX:1.15,skewY:-13.9,x:93.3,y:154},0).wait(1).to({scaleX:1.17,skewY:-15.9,x:93.4,y:154.7},0).wait(1).to({scaleX:1.19,skewY:-17.6,x:93.6,y:155.2},0).wait(1).to({scaleX:1.2,skewY:-19.2,x:93.7,y:155.7},0).wait(1).to({scaleX:1.22,skewY:-20.3,x:93.8,y:156},0).wait(1).to({regX:13.7,regY:17.1,scaleX:1.22,skewY:-20.8,x:99.3,y:158.2},0).wait(1));

	// l_lip
	this.instance_2 = new lib.ll_s_l_lip_1();
	this.instance_2.setTransform(66,155.6,1,1,0,0,0,7.4,17.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:10,regY:12,scaleX:1,skewY:0.4,x:68.5,y:150.1},0).wait(1).to({scaleX:1.01,skewY:1.3,y:150.3},0).wait(1).to({scaleX:1.03,skewY:2.6,x:68.4,y:150.6},0).wait(1).to({scaleX:1.04,skewY:4.1,x:68.3,y:151},0).wait(1).to({scaleX:1.06,skewY:5.8,x:68.2,y:151.5},0).wait(1).to({scaleX:1.08,skewY:7.7,x:68.1,y:151.9},0).wait(1).to({scaleX:1.1,skewY:9.6,x:68,y:152.4},0).wait(1).to({scaleX:1.12,skewY:11.5,x:67.9,y:152.9},0).wait(1).to({scaleX:1.14,skewY:13.4,x:67.7,y:153.4},0).wait(1).to({scaleX:1.16,skewY:15.2,x:67.6,y:153.8},0).wait(1).to({scaleX:1.18,skewY:16.9,x:67.5,y:154.3},0).wait(1).to({scaleX:1.19,skewY:18.4,x:67.4,y:154.6},0).wait(1).to({scaleX:1.21,skewY:19.5,x:67.3,y:155},0).wait(1).to({regX:7.5,regY:17.6,scaleX:1.21,skewY:20,x:64.4,y:159.7},0).wait(1));

	// m_lip
	this.instance_3 = new lib.ll_s_m_lip_1();
	this.instance_3.setTransform(81.6,158.1,1,1,0,0,0,10,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:12,scaleX:1,scaleY:1,x:81.5,y:151.1},0).wait(1).to({scaleX:1.01,scaleY:0.99,y:151.4},0).wait(1).to({scaleX:1.01,scaleY:0.98,x:81.6,y:151.8},0).wait(1).to({scaleX:1.02,scaleY:0.96,y:152.3},0).wait(1).to({scaleX:1.03,scaleY:0.94,y:152.9},0).wait(1).to({scaleX:1.04,scaleY:0.93,y:153.5},0).wait(1).to({scaleX:1.06,scaleY:0.91,y:154.2},0).wait(1).to({scaleX:1.07,scaleY:0.89,y:154.8},0).wait(1).to({scaleX:1.08,scaleY:0.87,y:155.4},0).wait(1).to({scaleX:1.09,scaleY:0.85,y:156},0).wait(1).to({scaleX:1.1,scaleY:0.84,x:81.7,y:156.5},0).wait(1).to({scaleX:1.11,scaleY:0.82,y:157},0).wait(1).to({scaleX:1.11,scaleY:0.81,y:157.4},0).wait(1).to({regY:19.1,scaleX:1.12,scaleY:0.81,y:163.4},0).wait(1));

	// nose
	this.instance_4 = new lib.ll_s_nose_1();
	this.instance_4.setTransform(79.6,120.5,1,1,0,0,0,15,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({y:120.4},0).wait(3).to({y:120.3},0).wait(3).to({y:120.2},0).wait(5));

	// moustache
	this.instance_5 = new lib.ll_s_moustache_1();
	this.instance_5.setTransform(80.6,127,1,1,0,0,0,38,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:35,regY:16,scaleX:1,x:77.5,y:132},0).wait(1).to({scaleX:1,scaleY:1,x:77.6,y:131.9},0).wait(1).to({scaleX:1.01,scaleY:1,x:77.5},0).wait(1).to({scaleX:1.02,scaleY:1,y:131.8},0).wait(1).to({scaleX:1.02,scaleY:1.01,y:131.6},0).wait(1).to({scaleX:1.03,scaleY:1.01},0).wait(1).to({scaleX:1.04,scaleY:1.01,x:77.4,y:131.5},0).wait(1).to({scaleX:1.05,scaleY:1.01,y:131.3},0).wait(1).to({scaleX:1.05,scaleY:1.02,y:131.2},0).wait(1).to({scaleX:1.06,scaleY:1.02,y:131.1},0).wait(1).to({scaleX:1.07,scaleY:1.02,x:77.3,y:131},0).wait(1).to({scaleX:1.07,scaleY:1.02,y:130.9},0).wait(1).to({scaleX:1.08,scaleY:1.02,y:130.8},0).wait(1).to({regX:38,regY:11,scaleX:1.08,x:80.6,y:125.7},0).wait(1));

	// bg_mouth
	this.instance_6 = new lib.ll_s_bg_mouth_1();
	this.instance_6.setTransform(81.6,140.5,0.688,0.859,0,0,0,27,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleX:0.69},0).wait(1).to({scaleX:0.69,y:140.6},0).wait(1).to({scaleX:0.7,y:140.7},0).wait(1).to({scaleX:0.7},0).wait(1).to({scaleX:0.71,y:140.8},0).wait(1).to({scaleX:0.71,y:141},0).wait(1).to({scaleX:0.72,y:141.1},0).wait(1).to({scaleX:0.73,x:81.7,y:141.2},0).wait(1).to({scaleX:0.73,y:141.3},0).wait(1).to({scaleX:0.74,y:141.4},0).wait(1).to({scaleX:0.74,y:141.5},0).wait(1).to({scaleX:0.75,y:141.6},0).wait(1).to({scaleX:0.75,y:141.7},0).wait(1).to({regX:27.1,scaleX:0.75,x:81.8},0).wait(1));

	// l_cheek
	this.instance_7 = new lib.ll_s_l_cheek_1();
	this.instance_7.setTransform(110.1,126.5,1,1,0,0,0,21.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({scaleX:1,scaleY:1,skewY:-0.1},0).wait(1).to({scaleX:1,scaleY:1,skewY:-0.3},0).wait(1).to({scaleX:1.01,scaleY:1,skewY:-0.6,x:110.2,y:126.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewY:-1,x:110.3,y:126.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,skewY:-1.5,x:110.4},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewY:-1.9,x:110.5,y:126.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,skewY:-2.4,x:110.6},0).wait(1).to({scaleX:1.03,scaleY:1.02,skewY:-2.9,x:110.7},0).wait(1).to({scaleX:1.03,scaleY:1.02,skewY:-3.4,x:110.8,y:126.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,skewY:-3.8,x:110.9},0).wait(1).to({scaleX:1.04,scaleY:1.03,skewY:-4.3,x:111,y:126},0).wait(1).to({scaleX:1.04,scaleY:1.03,skewY:-4.6,x:111.1},0).wait(1).to({scaleX:1.05,scaleY:1.03,skewY:-4.9,x:111.2,y:125.9},0).wait(1).to({scaleX:1.05,scaleY:1.03,skewY:-5,y:126},0).wait(1));

	// r_cheek
	this.instance_8 = new lib.ll_s_r_cheek_1();
	this.instance_8.setTransform(51.1,131,1,1,0,0,0,16.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:1.01,scaleY:1,skewY:0.2},0).wait(1).to({scaleX:1.02,scaleY:1.01,skewY:0.7},0).wait(1).to({scaleX:1.04,scaleY:1.01,skewY:1.4,x:51,y:130.9},0).wait(1).to({scaleX:1.06,scaleY:1.02,skewY:2.2},0).wait(1).to({scaleX:1.09,scaleY:1.03,skewY:3.1},0).wait(1).to({scaleX:1.12,scaleY:1.04,skewY:4.1,x:50.9,y:130.8},0).wait(1).to({scaleX:1.15,scaleY:1.05,skewY:5.1,x:51,y:130.7},0).wait(1).to({scaleX:1.18,scaleY:1.06,skewY:6.2,x:50.9},0).wait(1).to({scaleX:1.21,scaleY:1.07,skewY:7.2},0).wait(1).to({scaleX:1.24,scaleY:1.07,skewY:8.2,y:130.6},0).wait(1).to({scaleX:1.26,scaleY:1.08,skewY:9.1},0).wait(1).to({scaleX:1.29,scaleY:1.09,skewY:9.9,x:50.8,y:130.5},0).wait(1).to({scaleX:1.3,scaleY:1.1,skewY:10.5},0).wait(1).to({scaleX:1.31,scaleY:1.1,skewY:10.8},0).wait(1));

	// jaw
	this.instance_9 = new lib.ll_s_jaw_1();
	this.instance_9.setTransform(80.6,134.9,1,1,0,0,0,59,41.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:46,scaleY:1,x:80.5,y:139},0).wait(1).to({scaleX:1,scaleY:1,y:139.1},0).wait(1).to({scaleX:1,scaleY:1,y:139.2},0).wait(1).to({scaleX:1,scaleY:1.01,x:80.6,y:139.3},0).wait(1).to({scaleX:1,scaleY:1.01,y:139.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:139.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:139.6},0).wait(1).to({scaleX:1.01,scaleY:1.02,y:139.8},0).wait(1).to({scaleX:1.01,scaleY:1.02,y:139.9},0).wait(1).to({scaleX:1.01,scaleY:1.02,y:140},0).wait(1).to({scaleX:1.01,scaleY:1.02,y:140.1},0).wait(1).to({scaleX:1.01,scaleY:1.03,y:140.2},0).wait(1).to({scaleX:1.01,scaleY:1.03,y:140.3},0).wait(1).to({regY:41.9,scaleX:1.02,scaleY:1.03,y:136.1},0).wait(1));

	// head_bg
	this.instance_10 = new lib.ll_s_head_bg_2();
	this.instance_10.setTransform(80.1,99.5,1,1,0,0,0,71.5,85.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.6,14,143,171);


(lib.ll_s_eye_R_2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.ll_s_eye_R_1();
	this.instance_1.setTransform(25.5,13.5,1,1,0,0,0,20.5,11.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5,2,41,23);


(lib.ll_s_torso_shadow_2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.ll_s_torso_shadow_1();
	this.instance_1.setTransform(139.3,37.7,1,1,0,0,0,115.5,31.5);
	this.instance_1.alpha = 0.898;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.8,6.2,231,63);


(lib.ll_s_torso_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.ll_s_torso();
	this.instance.setTransform(0,80.8);

	// Layer 2
	this.instance_1 = new lib.ll_s_torso_shadow_2();
	this.instance_1.setTransform(196.5,501.2,1,1,0,0,0,142.5,28.2);
	this.instance_1.alpha = 0.898;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,80.8,380,504);


(lib.ll_s_tie_L = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_s_tie_l_1();
	this.instance.setTransform(55,41,1,1,0,0,0,45,38);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10,3,90,76);


(lib.ll_s_tieallz = function() {
	this.initialize();

	// ll_s_bow_l
	this.instance = new lib.ll_s_bow_l_1();
	this.instance.setTransform(12.8,10.7,1,1,0,0,0,50.6,4.7);

	// ll_s_tie_L
	this.instance_1 = new lib.ll_s_tie_L();
	this.instance_1.setTransform(7.3,15.8,1,1,0,0,0,45,9.8);

	// ll_s_tie_R
	this.instance_2 = new lib.ll_s_tie_R();
	this.instance_2.setTransform(17.3,18.8,1,1,0,0,0,55,12.8);

	// ll_s_bow_R
	this.instance_3 = new lib.ll_s_bow_R();
	this.instance_3.setTransform(12.8,10.7,1,1,0,0,0,50.6,4.7);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.8,6,92.1,79.1);


(lib.ll_s_s_l_arm_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// l_forearm
	this.instance = new lib.ll_s_l_forearm_1();
	this.instance.setTransform(45.3,253.4,1,1,0,0,0,35,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118));

	// l_hand_all copy
	this.instance_1 = new lib.ll_s_l_hand_all_2();
	this.instance_1.setTransform(64.4,581.3,1,1,0,0,0,51.5,296);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(118));

	// l_sleeve
	this.instance_2 = new lib.ll_s_l_sleeve_2();
	this.instance_2.setTransform(43.3,329.4,1,1,0,0,0,28,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118));

	// l_arm
	this.instance_3 = new lib.ll_s_l_arm_1();
	this.instance_3.setTransform(65.8,119.9,1,1,0,0,0,53.5,117);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(10.3,2.9,109,775.4);


(lib.ll_s_m_l_arm_all = function() {
	this.initialize();

	// l_forearm
	this.instance = new lib.ll_s_l_forearm_1();
	this.instance.setTransform(45.3,253.4,1,1,0,0,0,35,87.5);

	// l_hand_all copy
	this.instance_1 = new lib.ll_s_l_hand_all_2();
	this.instance_1.setTransform(64.4,581.3,1,1,0,0,0,51.5,296);

	// l_sleeve
	this.instance_2 = new lib.ll_s_l_sleeve_2();
	this.instance_2.setTransform(43.3,329.4,1,1,0,0,0,28,11.5);

	// l_arm
	this.instance_3 = new lib.ll_s_l_arm_1();
	this.instance_3.setTransform(65.8,119.9,1,1,0,0,0,53.5,117);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.3,2.9,109,775.4);


(lib.ll_s_s_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(117).call(this.frame_117).wait(1));

	// head
	this.mouth_notalk = new lib.ll_s_mouth_notalk();
	this.mouth_notalk.setTransform(58.1,93.5,1,1,0,0,0,72.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.mouth_notalk).wait(118));

	// lids copy
	this.instance = new lib.ll_s_lids();
	this.instance.setTransform(62.2,86.7,1,1,0,0,0,32.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({x:63,y:98.3},4).wait(3).to({x:62.2,y:86.7},5).wait(67).to({x:63,y:98.3},3).wait(3).to({x:62.2,y:86.7},5).wait(1));

	// eye_R
	this.instance_1 = new lib.ll_s_eye_R_2();
	this.instance_1.setTransform(84,99.1,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({x:84.2,y:101.8},14).wait(13).to({x:81,y:103.4},3).wait(9).to({x:86.2,y:102.7},3).wait(16).to({x:81,y:102.6},2).wait(21).to({x:84,y:99.1},4).wait(19));

	// eye_L
	this.instance_2 = new lib.ll_s_eye_L_1();
	this.instance_2.setTransform(48.3,99.5,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({y:103.3},14).wait(13).to({x:45.1},3).wait(9).to({x:50.5,y:102.5},3).wait(16).to({x:45.1},2).wait(21).to({x:48.3,y:99.5},4).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,14,143,171);


(lib.ll_s_m_face_broken_out = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// head
	this.m_mouth_broken_out = new lib.ll_s_m_mouth_broken_out();
	this.m_mouth_broken_out.setTransform(58.1,93.5,1,1,0,0,0,72.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.m_mouth_broken_out).wait(116));

	// lids copy
	this.instance = new lib.ll_s_lids();
	this.instance.setTransform(62.2,86.7,1,1,0,0,0,32.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({x:63,y:98.3},4).wait(3).to({x:62.2,y:86.7},5).wait(77));

	// eye_R
	this.instance_1 = new lib.ll_s_eye_R_2();
	this.instance_1.setTransform(87,98.3,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:84,y:99.1},12).wait(2).to({x:84.2,y:101.8},14).wait(13).to({x:81,y:103.4},3).wait(9).to({x:86.2,y:102.7},3).wait(13).to({x:81,y:102.6},2).wait(11).to({x:84,y:99.1},4).wait(3).to({x:79},7).wait(1).to({regX:25.5,regY:13.5,x:79.5,y:98},0).wait(1).to({x:79.6,y:97.4},0).wait(1).to({x:79.7,y:96.8},0).wait(1).to({x:79.8,y:96.2},0).wait(1).to({x:79.9,y:95.6},0).wait(1).to({x:80,y:95},0).wait(1).to({regX:25,regY:14,x:79.6},0).wait(1).to({regX:25.5,regY:13.5,x:81,y:94.8},0).wait(1).to({x:81.8,y:95.2},0).wait(1).to({x:82.6,y:95.6},0).wait(1).to({x:83.3,y:95.9},0).wait(1).to({x:84.1,y:96.2},0).wait(1).to({x:84.8,y:96.5},0).wait(1).to({x:85.4,y:96.8},0).wait(1).to({x:86,y:97.1},0).wait(1).to({x:86.6,y:97.3},0).wait(1).to({x:87,y:97.5},0).wait(1).to({x:87.4,y:97.7},0).wait(1).to({regX:25,regY:14,x:87,y:98.3},0).wait(1));

	// eye_L
	this.instance_2 = new lib.ll_s_eye_L_1();
	this.instance_2.setTransform(42.9,105.6,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:48.3,y:99.5},12).wait(1).to({y:103.3},14).wait(13).to({x:45.1},3).wait(9).to({x:50.5,y:102.5},3).wait(13).to({x:45.1},2).wait(11).to({x:48.3,y:99.5},4).wait(3).to({regX:25.5,regY:13.5,x:48.1,y:99},0).wait(1).to({x:47.4},0).wait(1).to({x:46.7},0).wait(1).to({x:45.9},0).wait(1).to({x:45.2},0).wait(1).to({x:44.5},0).wait(1).to({regX:25,regY:14,x:43.3,y:99.5},0).wait(1).to({regX:25.5,regY:13.5,x:43.9,y:98.4},0).wait(1).to({x:44,y:97.8},0).wait(1).to({x:44.1,y:97.2},0).wait(1).to({x:44.2,y:96.6},0).wait(1).to({x:44.3,y:96},0).wait(1).to({x:44.4,y:95.4},0).wait(1).to({regX:25,regY:14,x:44},0).wait(1).to({regX:25.5,regY:13.5,x:44.3,y:96},0).wait(1).to({x:44.2,y:97.2},0).wait(1).to({x:44.1,y:98.3},0).wait(1).to({x:44,y:99.3},0).wait(1).to({x:43.9,y:100.3},0).wait(1).to({x:43.8,y:101.3},0).wait(1).to({x:43.7,y:102.2},0).wait(1).to({x:43.6,y:103},0).wait(1).to({x:43.5,y:103.8},0).wait(1).to({y:104.4},0).wait(1).to({x:43.4,y:104.9},0).wait(1).to({regX:25,regY:14,x:42.9,y:105.6},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,14,143,171);


(lib.ll_s_m_face_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{look_1:2,look_2:20,look_3:42,blink_1:55,out_1:78,in_1:114});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_127 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(18).call(this.frame_27).wait(19).call(this.frame_46).wait(22).call(this.frame_68).wait(37).call(this.frame_105).wait(22).call(this.frame_127).wait(44));

	// head
	this.m_mouth = new lib.ll_s_m_mouth_broken();
	this.m_mouth.setTransform(58.1,93.5,1,1,0,0,0,72.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.m_mouth).wait(171));

	// lids copy
	this.instance = new lib.ll_s_lids();
	this.instance.setTransform(62.2,86.7,1,1,0,0,0,32.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({x:63,y:98.3},4).wait(3).to({x:62.2,y:86.7},6).wait(103));

	// eye_R
	this.instance_1 = new lib.ll_s_eye_R_2();
	this.instance_1.setTransform(84,99.1,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regX:25.5,regY:13.5,x:84.6,y:98.6},0).wait(1).to({x:85},0).wait(1).to({x:85.5,y:98.5},0).wait(1).to({x:86.2},0).wait(1).to({x:86.7,y:98.4},0).wait(1).to({x:87.1},0).wait(1).to({regX:25,regY:14,x:86.8,y:98.9},0).wait(11).to({x:80.5,y:100.5},7).wait(16).to({regX:25.5,regY:13.5,x:81.4,y:99.8},0).wait(1).to({x:82.7,y:99.3},0).wait(1).to({x:83.9,y:98.8},0).wait(1).to({regX:25,regY:14,x:84,y:99.1},0).wait(33).to({x:79},7).wait(1).to({regX:25.5,regY:13.5,x:79.5,y:98},0).wait(1).to({x:79.6,y:97.4},0).wait(1).to({x:79.7,y:96.8},0).wait(1).to({x:79.8,y:96.2},0).wait(1).to({x:79.9,y:95.6},0).wait(1).to({x:80,y:95},0).wait(1).to({regX:25,regY:14,x:79.6},0).wait(1).to({regX:25.5,regY:13.5,x:81,y:94.8},0).wait(1).to({x:81.8,y:95.2},0).wait(1).to({x:82.6,y:95.6},0).wait(1).to({x:83.3,y:95.9},0).wait(1).to({x:84.1,y:96.2},0).wait(1).to({x:84.8,y:96.5},0).wait(1).to({x:85.4,y:96.8},0).wait(1).to({x:86,y:97.1},0).wait(1).to({x:86.6,y:97.3},0).wait(1).to({x:87,y:97.5},0).wait(1).to({x:87.4,y:97.7},0).wait(1).to({regX:25,regY:14,x:87,y:98.3},0).wait(9).to({x:84,y:99.1},12).wait(45));

	// eye_L
	this.instance_2 = new lib.ll_s_eye_L_1();
	this.instance_2.setTransform(48.3,99.5,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({regX:25.5,regY:13.5,x:48.9,y:99},0).wait(1).to({x:49.3,y:98.9},0).wait(1).to({x:49.8},0).wait(1).to({x:50.4,y:98.8},0).wait(1).to({x:51,y:98.7},0).wait(1).to({x:51.4},0).wait(1).to({regX:25,regY:14,x:51,y:99.2},0).wait(11).to({x:44.8,y:100.9},7).wait(16).to({regX:25.5,regY:13.5,x:45.8,y:100.2},0).wait(1).to({x:47,y:99.7},0).wait(1).to({x:48.3,y:99.2},0).wait(1).to({regX:25,regY:14,y:99.5},0).wait(33).to({regX:25.5,regY:13.5,x:48.1,y:99},0).wait(1).to({x:47.4},0).wait(1).to({x:46.7},0).wait(1).to({x:45.9},0).wait(1).to({x:45.2},0).wait(1).to({x:44.5},0).wait(1).to({regX:25,regY:14,x:43.3,y:99.5},0).wait(1).to({regX:25.5,regY:13.5,x:43.9,y:98.4},0).wait(1).to({x:44,y:97.8},0).wait(1).to({x:44.1,y:97.2},0).wait(1).to({x:44.2,y:96.6},0).wait(1).to({x:44.3,y:96},0).wait(1).to({x:44.4,y:95.4},0).wait(1).to({regX:25,regY:14,x:44},0).wait(1).to({regX:25.5,regY:13.5,x:44.3,y:96},0).wait(1).to({x:44.2,y:97.2},0).wait(1).to({x:44.1,y:98.3},0).wait(1).to({x:44,y:99.3},0).wait(1).to({x:43.9,y:100.3},0).wait(1).to({x:43.8,y:101.3},0).wait(1).to({x:43.7,y:102.2},0).wait(1).to({x:43.6,y:103},0).wait(1).to({x:43.5,y:103.8},0).wait(1).to({y:104.4},0).wait(1).to({x:43.4,y:104.9},0).wait(1).to({regX:25,regY:14,x:42.9,y:105.6},0).wait(11).to({x:48.3,y:99.5},12).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,14,143,171);


(lib.ll_s_m_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"look_1":2,"look_2":20,"look_3":42,"blink_1":55,blink_2:71,"out_1":87,out_2:117,"in_1":169});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_27 = function() {
		this.stop();
	}
	this.frame_46 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_80 = function() {
		this.stop();
	}
	this.frame_114 = function() {
		this.stop();
	}
	this.frame_158 = function() {
		this.stop();
	}
	this.frame_182 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(18).call(this.frame_27).wait(19).call(this.frame_46).wait(22).call(this.frame_68).wait(12).call(this.frame_80).wait(34).call(this.frame_114).wait(44).call(this.frame_158).wait(24).call(this.frame_182).wait(1));

	// head
	this.m_mouth = new lib.ll_s_m_mouth_broken();
	this.m_mouth.setTransform(58.1,93.5,1,1,0,0,0,72.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.m_mouth).wait(183));

	// lids copy
	this.instance = new lib.ll_s_lids();
	this.instance.setTransform(62.2,86.7,1,1,0,0,0,32.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({x:63,y:98.3},4).wait(3).to({x:62.2,y:86.7},6).wait(3).to({x:63,y:98.3},3).wait(2).to({x:62.2,y:86.7},4).wait(103));

	// eye_R
	this.instance_1 = new lib.ll_s_eye_R_2();
	this.instance_1.setTransform(84,99.1,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regX:25.5,regY:13.5,x:84.6,y:98.6},0).wait(1).to({x:85},0).wait(1).to({x:85.5,y:98.5},0).wait(1).to({x:86.2},0).wait(1).to({x:86.7,y:98.4},0).wait(1).to({x:87.1},0).wait(1).to({regX:25,regY:14,x:86.8,y:98.9},0).wait(11).to({x:80.5,y:100.5},7).wait(16).to({regX:25.5,regY:13.5,x:81.4,y:99.8},0).wait(1).to({x:82.7,y:99.3},0).wait(1).to({x:83.9,y:98.8},0).wait(1).to({regX:25,regY:14,x:84,y:99.1},0).wait(42).to({x:79},7).wait(1).to({regX:25.5,regY:13.5,x:79.5,y:98},0).wait(1).to({x:79.6,y:97.4},0).wait(1).to({x:79.7,y:96.8},0).wait(1).to({x:79.8,y:96.2},0).wait(1).to({x:79.9,y:95.6},0).wait(1).to({x:80,y:95},0).wait(1).to({regX:25,regY:14,x:79.6},0).wait(1).to({regX:25.5,regY:13.5,x:81,y:94.8},0).wait(1).to({x:81.8,y:95.2},0).wait(1).to({x:82.6,y:95.6},0).wait(1).to({x:83.3,y:95.9},0).wait(1).to({x:84.1,y:96.2},0).wait(1).to({x:84.8,y:96.5},0).wait(1).to({x:85.4,y:96.8},0).wait(1).to({x:86,y:97.1},0).wait(1).to({x:86.6,y:97.3},0).wait(1).to({x:87,y:97.5},0).wait(1).to({x:87.4,y:97.7},0).wait(1).to({regX:25,regY:14,x:87,y:98.3},0).wait(4).to({x:84,y:99.1},0).to({x:79},12).wait(1).to({regX:25.5,regY:13.5,x:79.5,y:98.3},0).wait(1).to({x:79.6,y:97.9},0).wait(1).to({y:97.6},0).wait(1).to({x:79.7,y:97.2},0).wait(1).to({y:96.9},0).wait(1).to({x:79.8,y:96.5},0).wait(1).to({y:96.2},0).wait(1).to({x:79.9,y:95.8},0).wait(1).to({y:95.5},0).wait(1).to({x:80,y:95.1},0).wait(1).to({y:94.8},0).wait(1).to({regX:25,regY:14,x:79.6,y:95},0).wait(1).to({regX:25.5,regY:13.5,x:80.7,y:94.7},0).wait(1).to({x:81.4,y:95},0).wait(1).to({x:82,y:95.3},0).wait(1).to({x:82.6,y:95.6},0).wait(1).to({x:83.1,y:95.8},0).wait(1).to({x:83.7,y:96.1},0).wait(1).to({x:84.2,y:96.3},0).wait(1).to({x:84.8,y:96.5},0).wait(1).to({x:85.3,y:96.7},0).wait(1).to({x:85.7,y:97},0).wait(1).to({x:86.2,y:97.2},0).wait(1).to({x:86.6,y:97.3},0).wait(1).to({x:86.9,y:97.5},0).wait(1).to({x:87.2,y:97.6},0).wait(1).to({x:87.4,y:97.7},0).wait(1).to({regX:25,regY:14,x:87,y:98.3},0).wait(11).to({x:84,y:99.1},12).wait(2));

	// eye_L
	this.instance_2 = new lib.ll_s_eye_L_1();
	this.instance_2.setTransform(48.3,99.5,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({regX:25.5,regY:13.5,x:48.9,y:99},0).wait(1).to({x:49.3,y:98.9},0).wait(1).to({x:49.8},0).wait(1).to({x:50.4,y:98.8},0).wait(1).to({x:51,y:98.7},0).wait(1).to({x:51.4},0).wait(1).to({regX:25,regY:14,x:51,y:99.2},0).wait(11).to({x:44.8,y:100.9},7).wait(16).to({regX:25.5,regY:13.5,x:45.8,y:100.2},0).wait(1).to({x:47,y:99.7},0).wait(1).to({x:48.3,y:99.2},0).wait(1).to({regX:25,regY:14,y:99.5},0).wait(42).to({regX:25.5,regY:13.5,x:48.1,y:99},0).wait(1).to({x:47.4},0).wait(1).to({x:46.7},0).wait(1).to({x:45.9},0).wait(1).to({x:45.2},0).wait(1).to({x:44.5},0).wait(1).to({regX:25,regY:14,x:43.3,y:99.5},0).wait(1).to({regX:25.5,regY:13.5,x:43.9,y:98.4},0).wait(1).to({x:44,y:97.8},0).wait(1).to({x:44.1,y:97.2},0).wait(1).to({x:44.2,y:96.6},0).wait(1).to({x:44.3,y:96},0).wait(1).to({x:44.4,y:95.4},0).wait(1).to({regX:25,regY:14,x:44},0).wait(1).to({regX:25.5,regY:13.5,x:44.3,y:96},0).wait(1).to({x:44.2,y:97.2},0).wait(1).to({x:44.1,y:98.3},0).wait(1).to({x:44,y:99.3},0).wait(1).to({x:43.9,y:100.3},0).wait(1).to({x:43.8,y:101.3},0).wait(1).to({x:43.7,y:102.2},0).wait(1).to({x:43.6,y:103},0).wait(1).to({x:43.5,y:103.8},0).wait(1).to({y:104.4},0).wait(1).to({x:43.4,y:104.9},0).wait(1).to({regX:25,regY:14,x:42.9,y:105.6},0).wait(4).to({x:48.3,y:99.5},0).wait(1).to({regX:25.5,regY:13.5,x:48.4,y:99},0).wait(1).to({x:48},0).wait(1).to({x:47.6},0).wait(1).to({x:47.1},0).wait(1).to({x:46.7},0).wait(1).to({x:46.3},0).wait(1).to({x:45.9},0).wait(1).to({x:45.5},0).wait(1).to({x:45.1},0).wait(1).to({x:44.6},0).wait(1).to({x:44.2},0).wait(1).to({regX:25,regY:14,x:43.3,y:99.5},0).wait(1).to({regX:25.5,regY:13.5,x:43.9,y:98.7},0).wait(1).to({y:98.3},0).wait(1).to({x:44,y:98},0).wait(1).to({y:97.6},0).wait(1).to({x:44.1,y:97.3},0).wait(1).to({y:96.9},0).wait(1).to({x:44.2,y:96.6},0).wait(1).to({y:96.2},0).wait(1).to({x:44.3,y:95.9},0).wait(1).to({y:95.5},0).wait(1).to({x:44.4,y:95.2},0).wait(1).to({regX:25,regY:14,x:44,y:95.4},0).wait(1).to({regX:25.5,regY:13.5,x:44.4,y:95.7},0).wait(1).to({x:44.3,y:96.6},0).wait(1).to({x:44.2,y:97.5},0).wait(1).to({x:44.1,y:98.3},0).wait(1).to({x:44,y:99.1},0).wait(1).to({x:43.9,y:99.8},0).wait(1).to({y:100.6},0).wait(1).to({x:43.8,y:101.3},0).wait(1).to({x:43.7,y:102},0).wait(1).to({y:102.6},0).wait(1).to({x:43.6,y:103.2},0).wait(1).to({x:43.5,y:103.8},0).wait(1).to({y:104.3},0).wait(1).to({x:43.4,y:104.7},0).wait(1).to({y:105},0).wait(1).to({regX:25,regY:14,x:42.9,y:105.6},0).wait(13).to({x:48.3,y:99.5},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,14,143,171);


(lib.ll_s_h_face = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// head
	this.mouth_notalk = new lib.ll_s_mouth_notalk();
	this.mouth_notalk.setTransform(58.1,93.5,1,1,0,0,0,72.5,93.5);

	this.timeline.addTween(cjs.Tween.get(this.mouth_notalk).wait(118));

	// lids copy
	this.instance = new lib.ll_s_lids();
	this.instance.setTransform(62.2,86.7,1,1,0,0,0,32.5,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({x:63,y:98.3},4).wait(3).to({x:62.2,y:86.7},5).wait(67).to({x:63,y:98.3},3).wait(3).to({x:62.2,y:86.7},5).wait(12));

	// eye_R
	this.instance_1 = new lib.ll_s_eye_R_2();
	this.instance_1.setTransform(84,99.1,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({x:84.2,y:101.8},14).wait(13).to({x:81,y:103.4},3).wait(9).to({x:86.2,y:102.7},3).wait(16).to({x:81,y:102.6},2).wait(21).to({x:84,y:99.1},4).wait(30));

	// eye_L
	this.instance_2 = new lib.ll_s_eye_L_1();
	this.instance_2.setTransform(48.3,99.5,1,1,0,0,0,25,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:103.3},14).wait(13).to({x:45.1},3).wait(9).to({x:50.5,y:102.5},3).wait(16).to({x:45.1},2).wait(21).to({x:48.3,y:99.5},4).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,14,143,171);


(lib.ll_s_main_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":1,click_sequence_1:907,click_sequence_2:959,click_sequence_3:1008,click_sequence_4:1070,click_sequence_5:1117,click_sequence_6:1177,click_sequence_7:1217});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.m_face.gotoAndPlay('blink_1');
	}
	this.frame_60 = function() {
		this.m_face.gotoAndPlay('blink_2');
	}
	this.frame_120 = function() {
		this.m_face.gotoAndPlay('blink_1');
	}
	this.frame_226 = function() {
		this.m_face.gotoAndPlay('blink_1');
	}
	this.frame_356 = function() {
		this.m_face.gotoAndPlay('look_1');
	}
	this.frame_382 = function() {
		this.m_face.gotoAndPlay('look_2');
	}
	this.frame_423 = function() {
		this.m_face.gotoAndPlay('look_3');
	}
	this.frame_476 = function() {
		this.m_face.gotoAndPlay('blink_1');
	}
	this.frame_561 = function() {
		this.m_face.gotoAndPlay('blink_2');
	}
	this.frame_653 = function() {
		this.m_face.gotoAndPlay('blink_1');
	}
	this.frame_662 = function() {
		this.m_face.gotoAndPlay('blink_2');
	}
	this.frame_760 = function() {
		this.m_face.gotoAndPlay('out_2');
	}
	this.frame_807 = function() {
		this.spark_01.gotoAndPlay('start');
	}
	this.frame_813 = function() {
		this.spark_02.gotoAndPlay('start');
	}
	this.frame_831 = function() {
		this.spark_03.gotoAndPlay('start');
		this.smoke_01.gotoAndPlay('start');
	}
	this.frame_871 = function() {
		window.project_colonel_archive_canvas.colonelOutOforder();
	}
	this.frame_899 = function() {
		this.stop();
		var event = new createjs.Event('mainComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_907 = function() {
		this.m_face_2.gotoAndPlay('in_1');
	}
	this.frame_921 = function() {
		this.m_face_2.gotoAndPlay('blink_1');
	}
	this.frame_928 = function() {
		this.spark_04.gotoAndPlay('start');
	}
	this.frame_939 = function() {
		this.spark_03.gotoAndPlay('start');
		this.smoke_01.gotoAndPlay('start');
	}
	this.frame_958 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_959 = function() {
		this.m_face_2.gotoAndPlay('in_1');
	}
	this.frame_971 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_984 = function() {
		this.spark_04.gotoAndPlay('start');
	}
	this.frame_985 = function() {
		this.spark_01.gotoAndPlay('start');
	}
	this.frame_1007 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_1008 = function() {
		this.m_face_2.gotoAndPlay('in_1');
	}
	this.frame_1015 = function() {
		this.spark_03.gotoAndPlay('start');
		this.smoke_01.gotoAndPlay('start');
	}
	this.frame_1027 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_1039 = function() {
		this.spark_04.gotoAndPlay('start');
	}
	this.frame_1061 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_1070 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_1071 = function() {
		this.spark_69.gotoAndPlay('start');
	}
	this.frame_1106 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_1129 = function() {
		this.m_face_2.gotoAndPlay('blink_1');
	}
	this.frame_1131 = function() {
		this.smoke_01.gotoAndPlay('start');
	}
	this.frame_1146 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_1176 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_1177 = function() {
		this.m_face_2.gotoAndPlay('in_1');
	}
	this.frame_1192 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_1216 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}
	this.frame_1228 = function() {
		this.m_face_2.gotoAndPlay('out_1');
	}
	this.frame_1270 = function() {
		this.stop();
		var event = new createjs.Event('secondaryComplete', true);
		this.dispatchEvent(event);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(44).call(this.frame_60).wait(60).call(this.frame_120).wait(106).call(this.frame_226).wait(130).call(this.frame_356).wait(26).call(this.frame_382).wait(41).call(this.frame_423).wait(53).call(this.frame_476).wait(85).call(this.frame_561).wait(92).call(this.frame_653).wait(9).call(this.frame_662).wait(98).call(this.frame_760).wait(47).call(this.frame_807).wait(6).call(this.frame_813).wait(18).call(this.frame_831).wait(40).call(this.frame_871).wait(28).call(this.frame_899).wait(8).call(this.frame_907).wait(14).call(this.frame_921).wait(7).call(this.frame_928).wait(11).call(this.frame_939).wait(19).call(this.frame_958).wait(1).call(this.frame_959).wait(12).call(this.frame_971).wait(13).call(this.frame_984).wait(1).call(this.frame_985).wait(22).call(this.frame_1007).wait(1).call(this.frame_1008).wait(7).call(this.frame_1015).wait(12).call(this.frame_1027).wait(12).call(this.frame_1039).wait(22).call(this.frame_1061).wait(9).call(this.frame_1070).wait(1).call(this.frame_1071).wait(35).call(this.frame_1106).wait(23).call(this.frame_1129).wait(2).call(this.frame_1131).wait(15).call(this.frame_1146).wait(30).call(this.frame_1176).wait(1).call(this.frame_1177).wait(15).call(this.frame_1192).wait(24).call(this.frame_1216).wait(12).call(this.frame_1228).wait(42).call(this.frame_1270).wait(1));

	// spark_03
	this.spark_03 = new lib.spark_01();
	this.spark_03.setTransform(909.3,903.1,1.599,1.599,-170,0,0,32.8,50);
	this.spark_03._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spark_03).wait(831).to({_off:false},0).to({_off:true},11).wait(173).to({_off:false,x:939.6,y:896},0).to({_off:true},11).wait(245));

	// smoke_01
	this.smoke_01 = new lib.smoke_01();
	this.smoke_01.setTransform(902.1,901.4,1.6,1.6,0,0,0,25.7,34.6);

	this.spark_01 = new lib.spark_01();
	this.spark_01.setTransform(914.1,899,1.6,1.6,121,0,0,32.8,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.smoke_01,p:{x:902.1,y:901.4}}]},831).to({state:[]},15).to({state:[{t:this.smoke_01,p:{x:902.1,y:901.4}}]},93).to({state:[]},15).to({state:[{t:this.spark_01}]},31).to({state:[]},11).to({state:[{t:this.smoke_01,p:{x:932.4,y:894.3}}]},19).to({state:[]},15).wait(241));

	// spark_02 copy
	this.spark_04 = new lib.spark_01();
	this.spark_04.setTransform(1023.3,901,2,2,0,0,0,32.8,49.9);

	this.smoke_01_1 = new lib.smoke_01();
	this.smoke_01_1.setTransform(959.5,897.4,1.8,1.8,0,0,180,25.7,34.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.spark_04,p:{x:1023.3,y:901}}]},928).to({state:[]},11).to({state:[{t:this.spark_04,p:{x:1003.1,y:901}}]},45).to({state:[]},11).to({state:[{t:this.spark_04,p:{x:965.6,y:899}}]},44).to({state:[]},11).to({state:[{t:this.smoke_01_1}]},81).to({state:[]},15).wait(125));

	// spark_69
	this.spark_69 = new lib.spark_01();
	this.spark_69.setTransform(966.6,903.8,2,2,0,0,0,32.8,49.9);
	this.spark_69._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spark_69).wait(1071).to({_off:false},0).to({_off:true},10).wait(190));

	// spark_02
	this.spark_02 = new lib.spark_01();
	this.spark_02.setTransform(863.5,908,0.699,0.699,130.1,0,0,32.8,50.1);
	this.spark_02._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spark_02).wait(813).to({_off:false},0).to({_off:true},11).wait(447));

	// spark_01
	this.spark_01_1 = new lib.spark_01();
	this.spark_01_1.setTransform(949.5,896.9,1.6,1.6,0,0,0,32.8,49.9);
	this.spark_01_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.spark_01_1).wait(807).to({_off:false},0).to({_off:true},11).wait(453));

	// ll_s_board
	this.instance = new lib.ll_s_board_1();
	this.instance.setTransform(943.5,1648.6,1,1,0,0,0,106.5,136);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(871).to({_off:false},0).wait(1).to({y:1637.1},0).wait(1).to({y:1607.7},0).wait(1).to({y:1566.4},0).wait(1).to({y:1516.8},0).wait(1).to({y:1462.1},0).wait(1).to({y:1404.8},0).wait(1).to({y:1347.4},0).wait(1).to({y:1292.8},0).wait(1).to({y:1244.5},0).wait(1).to({y:1207.7},0).wait(1).to({y:1191.9},0).wait(1).to({y:1193.5},0).wait(1).to({y:1196.7},0).wait(1).to({y:1200.1},0).wait(1).to({y:1202},0).wait(1).to({y:1201.7},0).wait(1).to({y:1201.1},0).wait(1).to({y:1200.4},0).wait(1).to({y:1200},0).wait(1).to({y:1200.3},0).wait(1).to({y:1200.9},0).wait(1).to({y:1201.6},0).wait(1).to({y:1202},0).wait(377));

	// ll_s_pole
	this.instance_1 = new lib.ll_s_pole_1();
	this.instance_1.setTransform(942,1869.6,1,1,0,0,0,100,292);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(871).to({_off:false},0).wait(1).to({y:1858.1},0).wait(1).to({y:1828.7},0).wait(1).to({y:1787.4},0).wait(1).to({y:1737.8},0).wait(1).to({y:1683.1},0).wait(1).to({y:1625.8},0).wait(1).to({y:1568.4},0).wait(1).to({y:1513.8},0).wait(1).to({y:1465.5},0).wait(1).to({y:1428.7},0).wait(1).to({y:1412.9},0).wait(1).to({y:1414.5},0).wait(1).to({y:1417.7},0).wait(1).to({y:1421.1},0).wait(1).to({y:1423},0).wait(1).to({y:1422.7},0).wait(1).to({y:1422.1},0).wait(1).to({y:1421.4},0).wait(1).to({y:1421},0).wait(1).to({y:1421.3},0).wait(1).to({y:1421.9},0).wait(1).to({y:1422.6},0).wait(1).to({y:1423},0).wait(377));

	// m_face
	this.m_face = new lib.ll_s_m_face();
	this.m_face.setTransform(939.4,904.5,1,1,0,0,0,79,156.5);

	this.timeline.addTween(cjs.Tween.get(this.m_face).wait(1).to({regX:65.6,regY:102.5,rotation:-0.3,x:923.9,y:850.7},0).wait(1).to({rotation:-0.7,x:921.5,y:850.9},0).wait(1).to({rotation:-1,x:919.2,y:851.2},0).wait(1).to({regX:79,regY:156.6,rotation:-1.2,x:932.3,y:905.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-1,x:918.7,y:851.2},0).wait(1).to({rotation:-0.5,x:920.9,y:851},0).wait(1).to({rotation:0.3,x:924,y:850.7},0).wait(1).to({rotation:1.2,x:927.8,y:850.5},0).wait(1).to({rotation:2.1,x:931.9,y:850.2},0).wait(1).to({rotation:3.2,x:936.2,y:849.8},0).wait(1).to({rotation:4.2,x:940.6,y:849.5},0).wait(1).to({rotation:5.3,x:945,y:849.3},0).wait(1).to({rotation:6.2,x:949.2,y:849},0).wait(1).to({rotation:7.1,x:952.6,y:848.9},0).wait(1).to({regX:79,regY:156.6,rotation:7.5,x:960.7,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,x:954.4,y:848.7},0).wait(2).to({x:954.5},0).wait(1).to({rotation:7.6},0).wait(2).to({x:954.6,y:848.6},0).wait(1).to({rotation:7.7},0).wait(1).to({y:848.7},0).wait(1).to({regX:79,regY:156.6,x:960.7,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:7.4,x:953.7,y:848.7},0).wait(1).to({rotation:6.7,x:951.2,y:848.9},0).wait(1).to({rotation:5.7,x:947.8,y:849.1},0).wait(1).to({rotation:4.5,x:943.7,y:849.4},0).wait(1).to({rotation:3.1,x:939,y:849.8},0).wait(1).to({rotation:1.6,x:934.1,y:850.2},0).wait(1).to({rotation:0.1,x:929.1,y:850.7},0).wait(1).to({rotation:-1.4,x:924,y:851.2},0).wait(1).to({rotation:-2.9,x:919,y:851.7},0).wait(1).to({rotation:-4.2,x:914.3,y:852.2},0).wait(1).to({rotation:-5.4,x:910.5,y:852.7},0).wait(1).to({regX:79,regY:156.7,rotation:-5.9,x:927.6,y:905.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-5.8,x:909.3,y:852.7},0).wait(1).to({rotation:-5.4,x:910.9,y:852.6},0).wait(1).to({rotation:-4.9,x:913.4,y:852.3},0).wait(1).to({regX:79,regY:156.7,rotation:-4.3,x:933.8,y:905.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-4.1,x:915.5,y:852},0).wait(1).to({rotation:-3.9,x:914.7},0).wait(1).to({rotation:-3.8,x:913.8},0).wait(1).to({rotation:-3.6,x:913},0).wait(1).to({rotation:-3.4,x:912.2},0).wait(1).to({regX:79.1,regY:156.6,rotation:-3.2,x:927.6,y:905.3},0).wait(1).to({regX:65.6,regY:102.5,x:911,y:852.1},0).wait(1).to({rotation:-3.3},0).wait(1).to({y:852},0).wait(1).to({rotation:-3.5,x:910.8,y:852.1},0).wait(1).to({rotation:-3.6,x:910.6,y:852.2},0).wait(1).to({rotation:-3.8,x:910.5},0).wait(1).to({rotation:-4,x:910.3,y:852.3},0).wait(1).to({rotation:-4.2,x:910.1},0).wait(1).to({rotation:-4.5,x:909.9,y:852.4},0).wait(1).to({rotation:-4.8,x:909.6,y:852.5},0).wait(1).to({rotation:-5.1,x:909.4,y:852.6},0).wait(1).to({rotation:-5.4,x:909,y:852.7},0).wait(1).to({rotation:-5.7,x:908.7,y:852.8},0).wait(1).to({rotation:-6.1,x:908.4,y:852.9},0).wait(1).to({rotation:-6.5,x:908.1,y:853.1},0).wait(1).to({rotation:-6.8,x:907.7,y:853.2},0).wait(1).to({rotation:-7.2,x:907.3,y:853.3},0).wait(1).to({rotation:-7.7,x:907,y:853.5},0).wait(1).to({rotation:-8.1,x:906.5,y:853.7},0).wait(1).to({rotation:-8.6,x:906.1,y:853.9},0).wait(1).to({rotation:-9,x:905.8,y:854},0).wait(1).to({rotation:-9.5,x:905.3,y:854.2},0).wait(1).to({regX:79,regY:156.7,rotation:-10,x:927.5,y:905.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-9.4,x:904.7,y:854.2},0).wait(1).to({rotation:-8.1,x:904.4,y:853.8},0).wait(1).to({rotation:-6.5,x:904.1,y:853.4},0).wait(1).to({rotation:-5,x:903.7,y:853.1},0).wait(1).to({regX:79,regY:156.6,rotation:-4,x:920.7,y:906.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-3.9,x:904.2,y:852.9},0).wait(1).to({rotation:-3.5,x:906,y:852.7},0).wait(1).to({rotation:-2.9,x:908.6,y:852.5},0).wait(1).to({rotation:-2.2,x:911.8,y:852.1},0).wait(1).to({rotation:-1.3,x:915.4,y:851.8},0).wait(1).to({rotation:-0.4,x:919.5,y:851.4},0).wait(1).to({rotation:0.6,x:923.9,y:851},0).wait(1).to({rotation:1.6,x:928.4,y:850.7},0).wait(1).to({rotation:2.6,x:933,y:850.3},0).wait(1).to({rotation:3.7,x:937.6,y:849.9},0).wait(1).to({rotation:4.7,x:942.1,y:849.6},0).wait(1).to({rotation:5.7,x:946.4,y:849.3},0).wait(1).to({rotation:6.5,x:950.2,y:849.1},0).wait(1).to({rotation:7.2,x:953.1,y:848.9},0).wait(1).to({regX:79,regY:156.6,rotation:7.5,x:960.7,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:7.4,x:954.2,y:848.7},0).wait(1).to({rotation:7.3,x:953.6},0).wait(1).to({rotation:7.1,x:952.9,y:848.8},0).wait(1).to({rotation:6.9,x:951.9},0).wait(1).to({rotation:6.6,x:950.9,y:848.9},0).wait(1).to({rotation:6.4,x:949.8},0).wait(1).to({rotation:6.1,x:948.7,y:849},0).wait(1).to({rotation:5.8,x:947.6,y:849.1},0).wait(1).to({rotation:5.6,x:946.5},0).wait(1).to({rotation:5.4,x:945.7},0).wait(1).to({regX:79,regY:156.6,rotation:5.3,x:953.8,y:904.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:5.6,x:948,y:849.1},0).wait(1).to({rotation:5.9,x:950.5},0).wait(1).to({rotation:6.3,x:953.2},0).wait(1).to({rotation:6.6,x:955.7,y:849},0).wait(1).to({rotation:6.9,x:958.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.2,x:960.8},0).wait(1).to({rotation:7.6,x:963.3,y:848.9},0).wait(1).to({rotation:7.9,x:965.8},0).wait(1).to({regX:79,regY:156.6,rotation:8.2,x:973.8,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,x:968.3,y:848.9},0).wait(1).to({x:968.2},0).wait(1).to({rotation:8.1,y:849},0).wait(5).to({regX:79,regY:156.7,x:973.9,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:8.5,x:968.5,y:848.8},0).wait(1).to({rotation:8.9,x:968.9},0).wait(1).to({rotation:9.3,x:969.4},0).wait(1).to({rotation:9.7,x:969.7},0).wait(1).to({rotation:10.1,x:970.1,y:848.7},0).wait(1).to({rotation:10.5,x:970.5},0).wait(1).to({rotation:10.8,x:970.8},0).wait(1).to({rotation:11.2,x:971.2},0).wait(1).to({rotation:11.6,x:971.6},0).wait(1).to({rotation:12,x:971.9},0).wait(1).to({rotation:12.3,x:972.3,y:848.6},0).wait(1).to({rotation:12.7,x:972.6},0).wait(1).to({rotation:13,x:973},0).wait(1).to({rotation:13.4,x:973.3},0).wait(1).to({rotation:13.7,x:973.7},0).wait(1).to({rotation:14.1,x:973.9},0).wait(1).to({rotation:14.4,x:974.3},0).wait(1).to({rotation:14.7,x:974.5},0).wait(1).to({regX:79,regY:156.6,rotation:15,x:973.8,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:14.9,x:974.4,y:848.6},0).wait(1).to({rotation:14.5,x:973.2,y:848.7},0).wait(1).to({rotation:14,x:971.4},0).wait(1).to({rotation:13.4,x:969.2},0).wait(1).to({rotation:12.7,x:966.7,y:848.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.9,x:963.8,y:848.9},0).wait(1).to({rotation:11,x:960.8},0).wait(1).to({rotation:10.1,x:957.5,y:849},0).wait(1).to({rotation:9.1,x:954.2,y:849.1},0).wait(1).to({rotation:8.1,x:950.7,y:849.3},0).wait(1).to({rotation:7.1,x:947.1,y:849.4},0).wait(1).to({rotation:6.1,x:943.6,y:849.6},0).wait(1).to({rotation:5,x:939.9,y:849.8},0).wait(1).to({rotation:4,x:936.2,y:850},0).wait(1).to({rotation:3,x:932.6,y:850.3},0).wait(1).to({rotation:1.9,x:929,y:850.5},0).wait(1).to({rotation:1,x:925.6,y:850.8},0).wait(1).to({rotation:0,x:922.2,y:851.1},0).wait(1).to({rotation:-0.9,x:919.1,y:851.3},0).wait(1).to({rotation:-1.7,x:916.2,y:851.6},0).wait(1).to({rotation:-2.4,x:913.8,y:851.8},0).wait(1).to({rotation:-3,x:912,y:851.9},0).wait(1).to({regX:79.1,regY:156.6,rotation:-3.2,x:927.6,y:905.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:-3,x:912.9,y:851.9},0).wait(1).to({rotation:-2.7,x:916.7,y:851.6},0).wait(1).to({rotation:-2.4,x:921.5,y:851.3},0).wait(1).to({rotation:-2,x:926.7,y:850.9},0).wait(1).to({rotation:-1.6,x:932.1,y:850.5},0).wait(1).to({rotation:-1.2,x:936.7,y:850.1},0).wait(1).to({regX:79,regY:156.5,rotation:-1,x:953.9,y:903.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.7,x:938.6,y:850.1},0).wait(1).to({rotation:-0.2,x:936.6},0).wait(1).to({rotation:0.5,x:934.3},0).wait(1).to({rotation:1.2,x:931.6},0).wait(1).to({rotation:2,x:929},0).wait(1).to({rotation:2.6,x:926.7},0).wait(1).to({regX:79,regY:156.6,rotation:3,x:935.9,y:904.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:2.8,x:925.4,y:850.1},0).wait(1).to({rotation:2.4,x:925.7},0).wait(1).to({rotation:1.9,x:926},0).wait(1).to({rotation:1.3,x:926.4},0).wait(1).to({rotation:0.8,x:926.7,y:850.3},0).wait(1).to({rotation:0.3,x:927.1},0).wait(1).to({regX:79,regY:156.5,rotation:0,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.1,x:927,y:850.5},0).wait(1).to({rotation:-0.4,x:926.4},0).wait(1).to({rotation:-0.8,x:925.5,y:850.7},0).wait(1).to({rotation:-1.2,x:924.4,y:850.8},0).wait(1).to({rotation:-1.8,x:923.2,y:851},0).wait(1).to({rotation:-2.4,x:921.8,y:851.3},0).wait(1).to({rotation:-3.1,x:920.3,y:851.5},0).wait(1).to({rotation:-3.8,x:918.7,y:851.8},0).wait(1).to({rotation:-4.5,x:917.1,y:852.1},0).wait(1).to({rotation:-5.3,x:915.3,y:852.4},0).wait(1).to({rotation:-6.1,x:913.6,y:852.7},0).wait(1).to({rotation:-6.9,x:911.8,y:853.1},0).wait(1).to({rotation:-7.7,x:910,y:853.5},0).wait(1).to({rotation:-8.5,x:908.3,y:853.9},0).wait(1).to({rotation:-9.3,x:906.5,y:854.2},0).wait(1).to({rotation:-10.1,x:904.8,y:854.6},0).wait(1).to({rotation:-10.8,x:903.1,y:855},0).wait(1).to({rotation:-11.6,x:901.4,y:855.3},0).wait(1).to({rotation:-12.2,x:899.9,y:855.7},0).wait(1).to({rotation:-12.9,x:898.5,y:856.1},0).wait(1).to({rotation:-13.4,x:897.4,y:856.3},0).wait(1).to({rotation:-13.8,x:896.5,y:856.6},0).wait(1).to({regX:79,regY:156.5,rotation:-14,x:922.2,y:905.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:-13.9,x:896.2,y:856.6},0).wait(1).to({rotation:-13.6,x:896.4,y:856.5},0).wait(1).to({rotation:-13.2,x:896.8,y:856.3},0).wait(1).to({rotation:-12.8,x:897.2,y:856.1},0).wait(1).to({rotation:-12.3,x:897.7,y:855.9},0).wait(1).to({rotation:-11.7,x:898.2,y:855.7},0).wait(1).to({rotation:-11,x:898.8,y:855.4},0).wait(1).to({rotation:-10.4,x:899.3,y:855.1},0).wait(1).to({rotation:-9.7,x:899.9,y:854.8},0).wait(1).to({rotation:-9,x:900.6,y:854.6},0).wait(1).to({rotation:-8.3,x:901.2,y:854.4},0).wait(1).to({rotation:-7.7,x:901.8,y:854.1},0).wait(1).to({rotation:-7,x:902.5,y:853.8},0).wait(1).to({rotation:-6.3,x:903.1,y:853.6},0).wait(1).to({rotation:-5.7,x:903.7,y:853.4},0).wait(1).to({rotation:-5.1,x:904.2,y:853.2},0).wait(1).to({rotation:-4.6,x:904.7,y:853.1},0).wait(1).to({rotation:-4.2,x:905.1,y:853},0).wait(1).to({regX:79,regY:156.5,rotation:-4,x:922.4,y:905.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:-3.6,x:905.7,y:852.8},0).wait(1).to({rotation:-2.7,x:906.5,y:852.5},0).wait(1).to({rotation:-1.6,x:907.5,y:852.3},0).wait(1).to({rotation:-0.3,x:908.8,y:851.9},0).wait(1).to({rotation:1,x:910,y:851.6},0).wait(1).to({rotation:2.3,x:911.2,y:851.4},0).wait(1).to({rotation:3.4,x:912.3,y:851.2},0).wait(1).to({regX:79,regY:156.6,rotation:4,x:922.5,y:905.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:3.7,x:912.6,y:851.1},0).wait(1).to({rotation:3.1,x:912,y:851.2},0).wait(1).to({rotation:2.4,x:911.3,y:851.3},0).wait(1).to({regX:79,regY:156.5,rotation:2,x:922.5,y:905.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.2,x:908.2,y:851.9},0).wait(1).to({rotation:-3.3,x:902.6,y:853.1},0).wait(1).to({rotation:-7.5,x:896.1,y:854.8},0).wait(1).to({rotation:-11.5,x:890.1,y:856.6},0).wait(1).to({regX:79,regY:156.6,rotation:-14,x:912.5,y:907.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-13.8,x:887.2,y:857.6},0).wait(1).to({rotation:-13.4,x:889.3,y:857.4},0).wait(1).to({rotation:-12.8,x:892.3,y:857},0).wait(1).to({rotation:-12.1,x:895.9,y:856.5},0).wait(1).to({rotation:-11.3,x:900,y:855.9},0).wait(1).to({rotation:-10.4,x:904.5,y:855.4},0).wait(1).to({rotation:-9.5,x:909.2,y:854.8},0).wait(1).to({rotation:-8.5,x:914.2,y:854.1},0).wait(1).to({rotation:-7.5,x:919.2,y:853.6},0).wait(1).to({rotation:-6.5,x:924.3,y:853},0).wait(1).to({rotation:-5.5,x:929.5,y:852.4},0).wait(1).to({rotation:-4.5,x:934.5,y:851.8},0).wait(1).to({rotation:-3.5,x:939.3,y:851.4},0).wait(1).to({rotation:-2.7,x:943.8,y:850.8},0).wait(1).to({rotation:-1.9,x:947.8,y:850.4},0).wait(1).to({rotation:-1.3,x:950.9,y:850.2},0).wait(1).to({regX:79,regY:156.5,rotation:-1,x:966.7,y:903.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.8,x:951.3,y:850.1},0).wait(1).to({rotation:-0.3,x:949.2,y:850},0).wait(1).to({rotation:0.3,x:946.2},0).wait(1).to({rotation:1,x:942.9,y:849.9},0).wait(1).to({rotation:1.7,x:939.4,y:849.8},0).wait(1).to({rotation:2.4,x:935.9},0).wait(1).to({rotation:3.1,x:932.5},0).wait(1).to({rotation:3.7,x:929.7,y:849.7},0).wait(1).to({regX:79,regY:156.7,rotation:4,x:937.7,y:904.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:3.4,x:928.1,y:849.6},0).wait(1).to({rotation:2,y:849.9},0).wait(1).to({rotation:0.3,y:850.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,x:928.2,y:850.6},0).wait(1).to({rotation:-3.4,y:851.1},0).wait(1).to({rotation:-5.1,y:851.6},0).wait(1).to({regX:79,regY:156.6,rotation:-6,x:947.3,y:904.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:-5.2,x:929.7,y:851.6},0).wait(1).to({rotation:-3.6,x:932.5,y:851},0).wait(1).to({rotation:-1.6,x:936.1,y:850.2},0).wait(1).to({rotation:0.7,x:940,y:849.5},0).wait(1).to({rotation:2.9,x:943.9,y:848.9},0).wait(1).to({rotation:4.9,x:947.4,y:848.5},0).wait(1).to({regX:78.9,regY:156.7,rotation:6,x:957,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:5.5,x:949,y:848.2},0).wait(1).to({rotation:4.6,x:948.1,y:848.4},0).wait(1).to({rotation:3.5,x:947,y:848.5},0).wait(1).to({rotation:2.4,x:946,y:848.7},0).wait(1).to({regX:79,regY:156.7,rotation:1.8,x:957,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:2.2,x:946.2,y:848.7},0).wait(1).to({rotation:3.3,x:948.1,y:848.6},0).wait(1).to({rotation:4.6,x:950.6,y:848.3},0).wait(1).to({rotation:6,x:953.4,y:848.1},0).wait(1).to({rotation:7.6,x:956.3,y:847.9},0).wait(1).to({rotation:9,x:959.1,y:847.8},0).wait(1).to({rotation:10.3,x:961.5,y:847.7},0).wait(1).to({regX:79,regY:156.7,rotation:11,x:965.7,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:10.1,x:961.2,y:847.7},0).wait(1).to({rotation:8.2,x:957.9,y:847.9},0).wait(1).to({rotation:5.9,x:954,y:848.1},0).wait(1).to({rotation:3.5,x:949.7,y:848.5},0).wait(1).to({rotation:1.3,x:945.9,y:848.9},0).wait(1).to({regX:79,regY:156.7,rotation:0,x:957,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.5,x:944,y:849.1},0).wait(1).to({rotation:1.4,x:944.8,y:848.9},0).wait(1).to({rotation:2.4,x:945.7,y:848.7},0).wait(1).to({regX:79,regY:156.7,rotation:3,x:956.9,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:2.9,x:946.3,y:848.6},0).wait(1).to({rotation:2.6,x:946,y:848.7},0).wait(1).to({rotation:2.3,x:945.7},0).wait(1).to({rotation:2,x:945.4,y:848.8},0).wait(1).to({regX:79,regY:156.7,rotation:1.8,x:957,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,x:945.3,y:848.8},0).wait(1).to({x:945.2},0).wait(1).to({rotation:1.7},0).wait(1).to({x:945.1},0).wait(2).to({rotation:1.6,x:945},0).wait(1).to({x:944.9},0).wait(2).to({x:944.8},0).wait(1).to({regX:79,regY:156.7,x:956.7,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,x:944.7,y:848.9},0).wait(1).to({rotation:1.5,y:848.8},0).wait(1).to({x:944.6,y:848.9},0).wait(1).to({x:944.5},0).wait(2).to({regX:79,regY:156.7,x:956.4,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,x:945.1,y:848.9},0).wait(1).to({rotation:1.4,x:946.6},0).wait(1).to({x:948.7,y:849},0).wait(1).to({rotation:1.3,x:951},0).wait(1).to({rotation:1.2,x:953.6},0).wait(1).to({rotation:1.1,x:956.3,y:849.1},0).wait(1).to({x:959.1},0).wait(1).to({rotation:1,x:961.7,y:849.2},0).wait(1).to({rotation:0.9,x:964.2,y:849.3},0).wait(1).to({rotation:0.8,x:966.2},0).wait(1).to({regX:79,regY:156.8,x:979.9,y:903.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:1.1,x:966.6,y:849.2},0).wait(1).to({rotation:1.7,x:965.4,y:849},0).wait(1).to({rotation:2.4,x:963.9,y:848.8},0).wait(1).to({rotation:3.1,x:962.5,y:848.6},0).wait(1).to({regX:79.1,regY:156.7,rotation:3.6,x:971.6,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:3.7,x:962.9,y:848.5},0).wait(1).to({rotation:4.1,x:965.6,y:848.6},0).wait(1).to({rotation:4.4,x:968.8,y:848.7},0).wait(1).to({rotation:4.8,x:971.9,y:848.8},0).wait(1).to({regX:79,regY:156.8,scaleX:1,scaleY:1,rotation:5,x:982.5,y:903.9},0).wait(3).to({regX:65.6,regY:102.5,rotation:5.4,x:974.6,y:848.7},0).wait(1).to({rotation:6.4,x:976.2,y:848.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.6,x:978.4,y:848.5},0).wait(1).to({rotation:8.9,x:980.7,y:848.3},0).wait(1).to({rotation:10.3,x:983.2,y:848.2},0).wait(1).to({rotation:11.7,x:985.5},0).wait(1).to({rotation:12.8,x:987.5},0).wait(1).to({regX:79,regY:156.7,rotation:13.5,x:989.2,y:904},0).wait(1).to({regX:65.6,regY:102.5,rotation:13.6,x:988.8,y:848.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.9,x:989},0).wait(1).to({rotation:14.2,x:989.2},0).wait(1).to({rotation:14.5,x:989.4},0).wait(1).to({rotation:14.8,x:989.6,y:848.4},0).wait(1).to({regX:79,regY:156.7,rotation:15,x:988.6,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:15.2,x:989.8,y:848.4},0).wait(1).to({rotation:15.6,x:990.1},0).wait(1).to({rotation:16.2,x:990.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:16.8,x:991.2,y:848.5},0).wait(1).to({rotation:17.5,x:991.7},0).wait(1).to({rotation:18.1,x:992.2,y:848.6},0).wait(1).to({rotation:18.7,x:992.8},0).wait(1).to({regX:79,regY:156.8,rotation:19,x:988.1,y:904.2},0).wait(1).to({regX:65.6,regY:102.5,x:994.4,y:848.7},0).wait(1).to({rotation:19.1,x:996.9,y:849.1},0).wait(1).to({rotation:19.2,x:999.6,y:849.4},0).wait(1).to({regX:79,regY:156.8,x:996.2,y:905.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:19.1,x:1000.8,y:849.6},0).wait(1).to({rotation:18.7,x:999.6,y:849.5},0).wait(1).to({rotation:18.2,x:997.9},0).wait(1).to({rotation:17.6,x:995.5},0).wait(1).to({rotation:16.8,x:992.9,y:849.4},0).wait(1).to({rotation:15.9,x:989.9,y:849.3},0).wait(1).to({rotation:15,x:986.6},0).wait(1).to({rotation:14,x:983.1},0).wait(1).to({rotation:13,x:979.5,y:849.2},0).wait(1).to({rotation:11.9,x:975.6},0).wait(1).to({rotation:10.7,x:971.7,y:849.3},0).wait(1).to({rotation:9.6,x:967.6},0).wait(1).to({rotation:8.4,x:963.4,y:849.4},0).wait(1).to({rotation:7.2,x:959.2,y:849.5},0).wait(1).to({rotation:5.9,x:955,y:849.7},0).wait(1).to({rotation:4.7,x:950.7,y:849.8},0).wait(1).to({rotation:3.5,x:946.4,y:850},0).wait(1).to({rotation:2.2,x:942.1,y:850.2},0).wait(1).to({rotation:1,x:937.9,y:850.4},0).wait(1).to({rotation:-0.2,x:933.8,y:850.6},0).wait(1).to({rotation:-1.3,x:929.8,y:850.9},0).wait(1).to({rotation:-2.4,x:925.9,y:851.2},0).wait(1).to({rotation:-3.5,x:922.2,y:851.5},0).wait(1).to({rotation:-4.5,x:918.9,y:851.7},0).wait(1).to({rotation:-5.4,x:915.8,y:852},0).wait(1).to({rotation:-6.1,x:913.2,y:852.2},0).wait(1).to({rotation:-6.7,x:911.4,y:852.4},0).wait(1).to({regX:79,regY:156.8,rotation:-6.9,x:930.3,y:904.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:-6.3,x:911.7,y:852.2},0).wait(1).to({rotation:-5,x:914.1,y:851.7},0).wait(1).to({rotation:-3.4,x:917.3,y:851.2},0).wait(1).to({rotation:-1.6,x:920.8,y:850.6},0).wait(1).to({rotation:0.4,x:924.4,y:850},0).wait(1).to({rotation:2.2,x:928.1,y:849.5},0).wait(1).to({rotation:3.8,x:931.2,y:849.1},0).wait(1).to({regX:79,regY:156.8,rotation:4.7,x:941.8,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:4,x:932.3,y:849.2},0).wait(1).to({rotation:2.8,x:931.1,y:849.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.4,x:929.8,y:849.7},0).wait(1).to({regX:79,regY:156.8,rotation:0.5,x:941.9,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.4,x:928.2,y:850.1},0).wait(1).to({regX:79,regY:156.8,rotation:-1.4,x:941.9,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-1.1,x:927.5,y:850.2},0).wait(1).to({rotation:-0.3,x:928.2,y:850},0).wait(1).to({rotation:0.7,x:929.2,y:849.8},0).wait(1).to({rotation:1.8,x:930.1,y:849.6},0).wait(1).to({rotation:2.8,x:931.1,y:849.4},0).wait(1).to({rotation:3.8,x:932.1,y:849.3},0).wait(1).to({regX:79,regY:156.8,rotation:4.3,x:941.8,y:904.2},0).wait(1).to({regX:65.6,regY:102.5,x:932.6,y:849.2},0).wait(3).to({y:849.3},0).wait(1).to({regX:79,regY:156.8,x:941.9,y:904.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.2,x:932.2,y:849.3},0).wait(1).to({rotation:4,x:930.9,y:849.4},0).wait(1).to({rotation:3.8,x:929.3,y:849.6},0).wait(1).to({rotation:3.6,x:927.3,y:849.8},0).wait(1).to({rotation:3.3,x:925.1,y:850},0).wait(1).to({rotation:3,x:922.6,y:850.3},0).wait(1).to({rotation:2.6,x:920,y:850.5},0).wait(1).to({rotation:2.3,x:917.4,y:850.8},0).wait(1).to({rotation:1.9,x:914.7,y:851},0).wait(1).to({rotation:1.6,x:912,y:851.4},0).wait(1).to({rotation:1.2,x:909.3,y:851.6},0).wait(1).to({rotation:0.9,x:906.7,y:851.9},0).wait(1).to({rotation:0.6,x:904.3,y:852.2},0).wait(1).to({rotation:0.3,x:902.2,y:852.4},0).wait(1).to({rotation:0.1,x:900.5,y:852.6},0).wait(1).to({regX:79,regY:156.7,rotation:0,x:913,y:906.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.4,x:900,y:852.7},0).wait(1).to({rotation:1.2,x:900.9,y:852.5},0).wait(1).to({rotation:2.3,x:902,y:852.2},0).wait(1).to({rotation:3.6,x:903.2,y:852},0).wait(1).to({rotation:4.8,x:904.5,y:851.8},0).wait(1).to({rotation:6.1,x:905.7,y:851.6},0).wait(1).to({rotation:7.2,x:906.8,y:851.5},0).wait(1).to({regX:79,regY:156.7,rotation:7.7,x:913.3,y:906.7},0).wait(1).to({regX:65.6,regY:102.5,x:907.4,y:851.4},0).wait(4).to({x:907.5},0).wait(1).to({y:851.3},0).wait(1).to({y:851.4},0).wait(1).to({rotation:7.6,x:907.6},0).wait(3).to({x:907.7},0).wait(1).to({rotation:7.5,x:907.8},0).wait(2).to({x:907.9,y:851.3},0).wait(1).to({x:908,y:851.4},0).wait(1).to({rotation:7.4,y:851.3},0).wait(1).to({x:908.1,y:851.4},0).wait(2).to({x:908.2},0).wait(1).to({rotation:7.3},0).wait(1).to({x:908.3},0).wait(1).to({x:908.4},0).wait(1).to({y:851.3},0).wait(1).to({rotation:7.2,x:908.5},0).wait(2).to({x:908.6,y:851.4},0).wait(2).to({rotation:7.1,x:908.7},0).wait(1).to({x:908.8},0).wait(1).to({y:851.3},0).wait(1).to({x:908.9,y:851.4},0).wait(1).to({y:851.3},0).wait(1).to({rotation:7},0).wait(2).to({regX:79,regY:156.8,x:915.6,y:906.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:6.9,x:908.2,y:851.3},0).wait(1).to({rotation:6.7,x:906.8,y:851.4},0).wait(1).to({rotation:6.4,x:905,y:851.5},0).wait(1).to({rotation:6.2,x:903.1},0).wait(1).to({rotation:5.9,x:901.4,y:851.6},0).wait(1).to({regX:79,regY:156.8,rotation:5.8,x:908.3,y:906.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:5.4,x:902.3,y:851.6},0).wait(1).to({rotation:4.5,x:906.8,y:851.5},0).wait(1).to({rotation:3.4,x:913},0).wait(1).to({rotation:2.1,x:920.1,y:851.6},0).wait(1).to({rotation:0.6,x:927.9,y:851.7},0).wait(1).to({rotation:-0.9,x:936,y:851.8},0).wait(1).to({rotation:-2.4,x:944.2,y:851.9},0).wait(1).to({rotation:-3.9,x:952.2,y:852.1},0).wait(1).to({rotation:-5.3,x:959.7,y:852.3},0).wait(1).to({rotation:-6.4,x:965.8,y:852.5},0).wait(1).to({regX:79,regY:156.7,rotation:-7,x:988.8,y:904.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:-6.8,x:967.9,y:852.8},0).wait(1).to({rotation:-6.3,x:965.3,y:852.7},0).wait(1).to({rotation:-5.6,x:962.1,y:852.5},0).wait(1).to({rotation:-4.9,x:958.4,y:852.4},0).wait(1).to({rotation:-4.2,x:954.7,y:852.3},0).wait(1).to({rotation:-3.5,x:951,y:852.2},0).wait(1).to({rotation:-2.9,x:947.8,y:852.1},0).wait(1).to({regX:79,regY:156.8,rotation:-2.6,x:961.8,y:905.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-2.7,x:947.1,y:852.1},0).wait(1).to({rotation:-3.1,x:949.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.6,x:951.6,y:852.2},0).wait(1).to({rotation:-4.1,x:954.3},0).wait(1).to({rotation:-4.5,x:956.7,y:852.3},0).wait(1).to({regX:79,regY:156.7,rotation:-4.8,x:975.9,y:905.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:-5,x:959.3,y:852.5},0).wait(1).to({rotation:-5.5,x:961.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.1,x:964.6,y:852.6},0).wait(1).to({rotation:-6.7,x:967.3,y:852.7},0).wait(1).to({regX:79,regY:156.7,rotation:-7,x:988.8,y:904.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:-6.9,x:969.1,y:852.8},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:79,regY:156.7,rotation:-6.8,x:988.7,y:904.8},0).wait(1).to({regX:65.6,regY:102.5,rotation:-6.6,x:967.9,y:852.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.2,x:965.1,y:852.5},0).wait(1).to({rotation:-5.6,x:961.3,y:852.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.8,x:956.9,y:852},0).wait(1).to({rotation:-4.1,x:952.2,y:851.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:947.2,y:851.4},0).wait(1).to({rotation:-2.4,x:942.2,y:851.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,x:937.4,y:850.8},0).wait(1).to({rotation:-0.9,x:932.9,y:850.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:929.1,y:850.4},0).wait(1).to({regX:79,regY:156.5,rotation:0,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,x:927.3,y:850.4},0).wait(3).to({regX:79,regY:156.5,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,x:927.3,y:850.4},0).wait(4).to({regX:79,regY:156.5,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,x:927.3,y:850.4},0).wait(3).to({regX:79,regY:156.5,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.1,x:927.2,y:850.4},0).wait(1).to({rotation:-0.3,x:926.9,y:850.5},0).wait(1).to({rotation:-0.7,x:926.6,y:850.6},0).wait(1).to({rotation:-1.1,x:926.2,y:850.7},0).wait(1).to({rotation:-1.6,x:925.7,y:850.8},0).wait(1).to({rotation:-2.2,x:925.2,y:851},0).wait(1).to({rotation:-2.7,x:924.7,y:851.1},0).wait(1).to({rotation:-3.3,x:924.1,y:851.3},0).wait(1).to({rotation:-3.9,x:923.6,y:851.5},0).wait(1).to({rotation:-4.6,x:923,y:851.7},0).wait(1).to({rotation:-5.2,x:922.4,y:851.8},0).wait(1).to({rotation:-5.8,x:921.8,y:852},0).wait(1).to({rotation:-6.4,x:921.3,y:852.3},0).wait(1).to({rotation:-7,x:920.7,y:852.4},0).wait(1).to({rotation:-7.5,x:920.3,y:852.6},0).wait(1).to({rotation:-8,x:919.8,y:852.8},0).wait(1).to({rotation:-8.4,x:919.5,y:852.9},0).wait(1).to({regX:79,regY:156.6,rotation:-8.5,x:940.7,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-7.8,x:920.1,y:852.7},0).wait(1).to({rotation:-6.1,x:921.7,y:852.1},0).wait(1).to({rotation:-3.9,x:923.7,y:851.4},0).wait(1).to({rotation:-1.3,x:926,y:850.7},0).wait(1).to({rotation:1.3,x:928.5,y:850.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:4,x:931.1,y:849.6},0).wait(1).to({rotation:6.6,x:933.6,y:849.2},0).wait(1).to({rotation:8.8,x:935.7,y:849},0).wait(1).to({regX:79,regY:156.6,rotation:9.9,x:940.7,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:10.3,x:938.5,y:848.8},0).wait(1).to({rotation:11.3,x:942.2,y:848.7},0).wait(1).to({rotation:12.4,x:946.8,y:848.5},0).wait(1).to({rotation:13.7,x:951.8,y:848.4},0).wait(1).to({rotation:15,x:956.8,y:848.3},0).wait(1).to({rotation:16.1,x:961.3},0).wait(1).to({regX:79,regY:156.6,rotation:16.8,x:961,y:903.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:15.6,x:960.7,y:848.3},0).wait(1).to({rotation:13,x:954,y:848.4},0).wait(1).to({rotation:9.8,x:945.8,y:848.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.3,x:936.8,y:849.4},0).wait(1).to({rotation:2.9,x:927.8,y:850.2},0).wait(1).to({rotation:-0.3,x:919.9,y:851.1},0).wait(1).to({regX:79,regY:156.6,rotation:-2,x:930.8,y:905.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:-1.5,x:918,y:851.5},0).wait(1).to({rotation:-0.5,x:923.1,y:851.1},0).wait(1).to({rotation:0.8,x:929.4,y:850.7},0).wait(1).to({rotation:2.1,x:936.1,y:850.3},0).wait(1).to({rotation:3.3,x:942.2,y:849.9},0).wait(1).to({regX:79,regY:156.7,rotation:4,x:955.3,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.5,x:945.3,y:849.5},0).wait(1).to({rotation:5.4,x:944.4,y:849.4},0).wait(1).to({rotation:6.6,x:943.5,y:849.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.8,x:942.4},0).wait(1).to({rotation:8.9,x:941.5,y:849.2},0).wait(1).to({regX:79,regY:156.6,rotation:9.5,x:945.2,y:904.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:9.3,x:941,y:849.3},0).wait(1).to({rotation:8.8,x:941.1},0).wait(1).to({rotation:8.2,x:941.2,y:849.4},0).wait(1).to({rotation:7.4,x:941.5},0).wait(1).to({rotation:6.5,x:941.7,y:849.5},0).wait(1).to({rotation:5.6,x:941.9,y:849.6},0).wait(1).to({rotation:4.6,x:942.1,y:849.7},0).wait(1).to({rotation:3.7,x:942.4,y:849.8},0).wait(1).to({rotation:2.7,x:942.7,y:850},0).wait(1).to({rotation:1.8,x:942.8,y:850.1},0).wait(1).to({rotation:1,x:943.1,y:850.3},0).wait(1).to({rotation:0.3,x:943.3,y:850.4},0).wait(1).to({regX:79,regY:156.7,rotation:0,x:956.7,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,x:943,y:850.4},0).wait(1).to({rotation:-0.1,x:942.3},0).wait(1).to({rotation:-0.2,x:941.3,y:850.5},0).wait(1).to({rotation:-0.4,x:940.1,y:850.6},0).wait(1).to({rotation:-0.5,x:938.8,y:850.7},0).wait(1).to({rotation:-0.7,x:937.4,y:850.8},0).wait(1).to({rotation:-0.9,x:936},0).wait(1).to({rotation:-1.1,x:934.5,y:850.9},0).wait(1).to({rotation:-1.2,x:933,y:851},0).wait(1).to({rotation:-1.4,x:931.6,y:851.1},0).wait(1).to({rotation:-1.6,x:930.4},0).wait(1).to({rotation:-1.7,x:929.4,y:851.2},0).wait(1).to({regX:79,regY:156.7,x:943.9,y:904.8},0).wait(1).to({regX:65.6,regY:102.5,x:929.3,y:851.2},0).wait(1).to({rotation:-1.5,x:930.2,y:851.1},0).wait(1).to({rotation:-1.4,x:931.3,y:851},0).wait(1).to({rotation:-1.2,x:932.7,y:850.9},0).wait(1).to({rotation:-1,x:934.1,y:850.8},0).wait(1).to({rotation:-0.7,x:935.6,y:850.7},0).wait(1).to({rotation:-0.5,x:937.1,y:850.6},0).wait(1).to({rotation:-0.3,x:938.5,y:850.5},0).wait(1).to({rotation:-0.1,x:939.7,y:850.4},0).wait(1).to({regX:79,regY:156.7,rotation:0,x:953.7,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.4,x:939.9,y:850.5},0).wait(1).to({rotation:-1.1,x:939.2,y:850.7},0).wait(1).to({rotation:-2.1,x:938.2,y:850.9},0).wait(1).to({rotation:-3.3,x:937,y:851.3},0).wait(1).to({rotation:-4.5,x:935.8,y:851.6},0).wait(1).to({rotation:-5.8,x:934.6,y:852},0).wait(1).to({rotation:-7.1,x:933.3,y:852.4},0).wait(1).to({rotation:-8.2,x:932.2,y:852.9},0).wait(1).to({rotation:-9.2,x:931.2,y:853.2},0).wait(1).to({regX:79,regY:156.7,rotation:-9.7,x:953.1,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,x:930.7,y:853.4},0).wait(1).to({rotation:-9.6},0).wait(1).to({rotation:-9.5,y:853.3},0).wait(1).to({rotation:-9.4,x:930.8},0).wait(1).to({regX:79,regY:156.7,rotation:-9.3,x:952.7,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-9.9,x:930.2,y:853.5},0).wait(1).to({rotation:-11,x:929.2,y:854},0).wait(1).to({rotation:-12.2,x:928,y:854.6},0).wait(1).to({regX:79,regY:156.6,rotation:-13,x:952.5,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-12.8,x:927.5,y:854.8},0).wait(1).to({rotation:-12.1,x:928.1,y:854.6},0).wait(1).to({rotation:-11.2,x:928.8,y:854.2},0).wait(1).to({rotation:-10.1,x:929.7,y:853.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.9,x:930.8,y:853.3},0).wait(1).to({rotation:-7.6,x:931.8,y:852.8},0).wait(1).to({rotation:-6.2,x:933,y:852.3},0).wait(1).to({rotation:-4.7,x:934.2,y:851.9},0).wait(1).to({rotation:-3.2,x:935.5,y:851.4},0).wait(1).to({rotation:-1.7,x:936.8,y:851},0).wait(1).to({rotation:-0.3,x:938.1,y:850.7},0).wait(1).to({rotation:1.1,x:939.3,y:850.3},0).wait(1).to({rotation:2.5,x:940.5,y:850.1},0).wait(1).to({rotation:3.7,x:941.5,y:849.9},0).wait(1).to({rotation:4.6,x:942.3,y:849.7},0).wait(1).to({regX:78.9,regY:156.6,rotation:5,x:951.3,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.7,x:942.5,y:849.8},0).wait(1).to({rotation:4,x:941.8},0).wait(1).to({rotation:3.2,x:941,y:850},0).wait(1).to({rotation:2.2,x:940.1,y:850.2},0).wait(1).to({rotation:1.3,x:939.2,y:850.3},0).wait(1).to({rotation:0.5,x:938.5,y:850.5},0).wait(1).to({regX:78.9,regY:156.6,rotation:0,x:951.3,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.1,x:938.2,y:850.6},0).wait(1).to({rotation:0.2,x:938.7},0).wait(1).to({rotation:0.5,x:939.5,y:850.5},0).wait(1).to({rotation:0.8,x:940.5,y:850.4},0).wait(1).to({rotation:1.2,x:941.6},0).wait(1).to({rotation:1.6,x:942.8,y:850.3},0).wait(1).to({rotation:2.1,x:944.2,y:850.2},0).wait(1).to({rotation:2.6,x:945.6,y:850.1},0).wait(1).to({rotation:3.1,x:947.1,y:850},0).wait(1).to({rotation:3.6,x:948.7,y:849.9},0).wait(1).to({rotation:4.2,x:950.3,y:849.8},0).wait(1).to({rotation:4.7,x:951.9},0).wait(1).to({rotation:5.3,x:953.5,y:849.7},0).wait(1).to({rotation:5.8,x:955.1,y:849.6},0).wait(1).to({rotation:6.4,x:956.8},0).wait(1).to({rotation:7,x:958.5,y:849.5},0).wait(1).to({rotation:7.5,x:960.1,y:849.4},0).wait(1).to({rotation:8,x:961.6},0).wait(1).to({rotation:8.5,x:963.2,y:849.3},0).wait(1).to({rotation:9,x:964.6},0).wait(1).to({rotation:9.5,x:965.9},0).wait(1).to({rotation:9.8,x:967,y:849.2},0).wait(1).to({rotation:10.1,x:967.8},0).wait(1).to({regX:78.9,regY:156.7,rotation:10.2,x:971.6,y:904.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:9.4,x:967.6,y:849.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.5,x:966.6,y:849.4},0).wait(1).to({rotation:5.1,x:965.3,y:849.7},0).wait(1).to({rotation:2.5,x:963.8,y:850.1},0).wait(1).to({rotation:-0.3,x:962.4,y:850.7},0).wait(1).to({rotation:-2.9,x:960.9,y:851.4},0).wait(1).to({rotation:-5.3,x:959.7,y:852.1},0).wait(1).to({regX:78.9,regY:156.6,rotation:-6.5,x:978.5,y:904.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:-6.1,x:958.7,y:852.5},0).wait(1).to({rotation:-5.2,x:958,y:852.1},0).wait(1).to({rotation:-3.9,x:956.8,y:851.7},0).wait(1).to({rotation:-2.3,x:955.4,y:851.3},0).wait(1).to({rotation:-0.6,x:953.9,y:850.8},0).wait(1).to({rotation:1.2,x:952.4,y:850.4},0).wait(1).to({rotation:3.1,x:950.7,y:850},0).wait(1).to({rotation:5,x:949.1,y:849.7},0).wait(1).to({rotation:6.9,x:947.5,y:849.4},0).wait(1).to({rotation:8.7,x:946,y:849.2},0).wait(1).to({rotation:10.3,x:944.6,y:849.1},0).wait(1).to({rotation:11.6,x:943.5,y:849},0).wait(1).to({regX:78.8,regY:156.6,rotation:12.2,x:944.5,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:11.9,x:943.2,y:848.9},0).wait(1).to({rotation:11.1,x:943.5,y:849},0).wait(1).to({rotation:10,x:943.9},0).wait(1).to({rotation:8.6,x:944.5,y:849.2},0).wait(1).to({rotation:7,x:945.1,y:849.3},0).wait(1).to({rotation:5.3,x:945.7,y:849.5},0).wait(1).to({rotation:3.5,x:946.5,y:849.8},0).wait(1).to({rotation:1.7,x:947.3,y:850.2},0).wait(1).to({rotation:-0.3,x:948.1,y:850.7},0).wait(1).to({rotation:-2.2,x:948.9,y:851.2},0).wait(1).to({rotation:-4.1,x:949.7,y:851.7},0).wait(1).to({rotation:-6,x:950.5,y:852.3},0).wait(1).to({rotation:-7.8,x:951.3,y:853},0).wait(1).to({rotation:-9.5,x:952.1,y:853.6},0).wait(1).to({rotation:-11,x:952.9,y:854.2},0).wait(1).to({rotation:-12.2,x:953.4,y:854.7},0).wait(1).to({regX:78.9,regY:156.5,rotation:-12.7,x:978.4,y:904.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:-12.4,x:953,y:855},0).wait(1).to({rotation:-12.1,x:952.4,y:854.8},0).wait(1).to({rotation:-11.8,x:951.7,y:854.6},0).wait(1).to({rotation:-11.5,x:951.1},0).wait(1).to({rotation:-11.2,x:950.5,y:854.4},0).wait(1).to({rotation:-10.9,x:949.9,y:854.3},0).wait(1).to({rotation:-10.6,x:949.3,y:854.1},0).wait(1).to({rotation:-10.3,x:948.7,y:854},0).wait(1).to({rotation:-10,x:948.1,y:853.9},0).wait(1).to({rotation:-9.7,x:947.5,y:853.8},0).wait(1).to({rotation:-9.4,x:946.9,y:853.6},0).wait(1).to({rotation:-9.1,x:946.2,y:853.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.8,x:945.6,y:853.4},0).wait(1).to({rotation:-8.5,x:945,y:853.3},0).wait(1).to({rotation:-8.2,x:944.4,y:853.2},0).wait(1).to({rotation:-7.9,x:943.8,y:853.1},0).wait(1).to({rotation:-7.6,x:943.2,y:852.9},0).wait(1).to({rotation:-7.3,x:942.6,y:852.8},0).wait(1).to({rotation:-7,x:942,y:852.7},0).wait(1).to({rotation:-6.7,x:941.4,y:852.6},0).wait(1).to({rotation:-6.4,x:940.8,y:852.5},0).wait(1).to({rotation:-6.1,x:940.2,y:852.4},0).wait(1).to({rotation:-5.8,x:939.6,y:852.3},0).wait(1).to({rotation:-5.5,x:939,y:852.2},0).wait(1).to({rotation:-5.2,x:938.4,y:852.1},0).wait(1).to({rotation:-4.9,x:937.8,y:852},0).wait(1).to({rotation:-4.6,x:937.2,y:851.9},0).wait(1).to({rotation:-4.3,x:936.6,y:851.8},0).wait(1).to({regX:79,regY:156.4,rotation:-4,x:953.1,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-4.8,x:937.5,y:852},0).wait(1).to({rotation:-5.5,x:939.1,y:852.2},0).wait(1).to({rotation:-6.3,x:940.7,y:852.5},0).wait(1).to({rotation:-7,x:942.4,y:852.7},0).wait(1).to({regX:78.9,regY:156.5,scaleX:1,scaleY:1,rotation:-7.8,x:964.5,y:904.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-7.5,x:943.3,y:852.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.2,x:942.6,y:852.7},0).wait(1).to({rotation:-6.8,x:941.9,y:852.6},0).wait(1).to({rotation:-6.5,x:941.2,y:852.5},0).wait(1).to({rotation:-6.2,x:940.5,y:852.4},0).wait(1).to({rotation:-5.9,x:939.8,y:852.2},0).wait(1).to({rotation:-5.5,x:939.1,y:852.1},0).wait(1).to({rotation:-5.2,x:938.4,y:852},0).wait(1).to({rotation:-4.9,x:937.7,y:851.9},0).wait(1).to({rotation:-4.6,x:937,y:851.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.2,x:936.4,y:851.6},0).wait(1).to({rotation:-3.9,x:935.6},0).wait(1).to({rotation:-3.6,x:935,y:851.4},0).wait(1).to({rotation:-3.3,x:934.2},0).wait(1).to({rotation:-2.9,x:933.6,y:851.3},0).wait(1).to({rotation:-2.6,x:932.8,y:851.2},0).wait(1).to({rotation:-2.3,x:932.2,y:851.1},0).wait(1).to({rotation:-2,x:931.5,y:850.9},0).wait(1).to({rotation:-1.6,x:930.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.3,x:930.1,y:850.8},0).wait(1).to({rotation:-1,x:929.4,y:850.7},0).wait(1).to({rotation:-0.7,x:928.7,y:850.6},0).wait(1).to({rotation:-0.3,x:928.1},0).wait(1).to({regX:79,regY:156.5,rotation:0,x:940.7,y:904.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.3,x:925.4,y:850.5},0).wait(1).to({rotation:0.7,x:922.2,y:850.6},0).wait(1).to({rotation:1.3,x:918.6,y:850.7},0).wait(1).to({regX:79,regY:156.5,rotation:1.7,x:927.3,y:905.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:0.4,x:913.2,y:851.1},0).wait(1).to({rotation:-2,x:908.7,y:851.4},0).wait(1).to({rotation:-4.9,x:903.5,y:851.8},0).wait(1).to({rotation:-8,x:897.9,y:852.6},0).wait(1).to({rotation:-11.2,x:892.4,y:853.4},0).wait(1).to({regX:79.2,regY:156.3,rotation:-13.6,x:913.8,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-12.7,x:889.1,y:853.9},0).wait(1).to({rotation:-11.2,x:891.2,y:853.3},0).wait(1).to({rotation:-9.3,x:893.5,y:852.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.4,x:896.1,y:851.9},0).wait(1).to({regX:79.1,regY:156.4,rotation:-5.9,x:917.2,y:903.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-7.6,x:895.6,y:851.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.7,x:891.2,y:852.8},0).wait(1).to({rotation:-14.2,x:886.4,y:854.1},0).wait(1).to({regX:79,regY:156.3,rotation:-17.1,x:911,y:903},0).wait(1).to({regX:65.6,regY:102.5,rotation:-16.8,x:883.8,y:855.4},0).wait(1).to({rotation:-16.1,x:887.1,y:855.1},0).wait(1).to({rotation:-15.2,x:891.4,y:854.7},0).wait(1).to({rotation:-14.1,x:896.3,y:854.3},0).wait(1).to({rotation:-13,x:901.6,y:853.9},0).wait(1).to({rotation:-11.8,x:907.3,y:853.5},0).wait(1).to({rotation:-10.5,x:913.3,y:853.1},0).wait(1).to({rotation:-9.3,x:919.4,y:852.7},0).wait(1).to({rotation:-8,x:925.5,y:852.3},0).wait(1).to({rotation:-6.6,x:931.7,y:852},0).wait(1).to({rotation:-5.4,x:937.8,y:851.7},0).wait(1).to({rotation:-4.2,x:943.4,y:851.4},0).wait(1).to({regX:79,regY:156.5,rotation:-3.4,x:963.9,y:904.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:-2.6,x:948.2,y:851.2},0).wait(1).to({rotation:-0.9,x:949.9,y:851.4},0).wait(1).to({rotation:1,x:952.1,y:851.6},0).wait(1).to({rotation:3.2,x:954.5,y:852},0).wait(1).to({rotation:5.4,x:957,y:852.5},0).wait(1).to({rotation:7.6,x:959.4,y:853.1},0).wait(1).to({regX:79,regY:156.5,rotation:9.2,x:965.8,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:8.8,x:960.8,y:853.6},0).wait(1).to({rotation:8,x:960.1,y:853.4},0).wait(1).to({rotation:7.1,x:959.2,y:853.3},0).wait(1).to({rotation:6.1,x:958.2,y:853.2},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.8},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).to({_off:true},60).wait(364));

	// m_face_broken
	this.m_face_2 = new lib.ll_s_m_face_broken();
	this.m_face_2.setTransform(965.9,909.1,1,1,5.3,0,0,79,156.5);
	this.m_face_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.m_face_2).wait(907).to({_off:false},0).wait(1).to({regX:65.6,regY:102.5,rotation:5.5,x:959,y:854.1},0).wait(1).to({rotation:5.9,x:961.9,y:854.2},0).wait(1).to({rotation:6.3,x:965.4},0).wait(1).to({rotation:6.8,x:969.2},0).wait(1).to({rotation:7.4,x:973.3,y:854.3},0).wait(1).to({rotation:7.9,x:977.2,y:854.4},0).wait(1).to({regX:79,regY:156.5,rotation:8.3,x:985.7,y:909.8},0).wait(1).to({regX:65.6,regY:102.5,x:980.5,y:854.5},0).wait(1).to({rotation:8.4,x:981.1},0).wait(1).to({rotation:8.5,x:981.9,y:854.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.6,x:982.9,y:854.7},0).wait(1).to({rotation:8.7,x:983.8,y:854.8},0).wait(1).to({rotation:8.8,x:984.8},0).wait(1).to({rotation:9,x:985.8,y:854.9},0).wait(1).to({rotation:9.1,x:986.9,y:855},0).wait(1).to({rotation:9.2,x:987.8,y:855.1},0).wait(1).to({regX:79,regY:156.5,rotation:9.3,x:993,y:910.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:6.4,x:985.8,y:854.2},0).wait(1).to({rotation:1.4,x:981.2,y:852.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.2,x:976.1,y:851.8},0).wait(1).to({regX:79,regY:156.5,rotation:-8.9,x:993.5,y:902.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:-8.3,x:969.1,y:851.3},0).wait(1).to({rotation:-7.2,x:964,y:851.2},0).wait(1).to({rotation:-5.9,x:958.3,y:851.1},0).wait(1).to({rotation:-4.5,x:952.2},0).wait(1).to({regX:79,regY:156.5,rotation:-3.4,x:963.9,y:904.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:-2.8,x:947.9,y:851.3},0).wait(1).to({rotation:-1.7,x:949.2,y:851.6},0).wait(1).to({rotation:-0.4,x:950.8,y:852},0).wait(1).to({rotation:1.1,x:952.5,y:852.5},0).wait(1).to({rotation:2.6,x:954.3,y:853},0).wait(1).to({rotation:4.1,x:956.1,y:853.6},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:854},0).wait(1).to({y:853.8},0).wait(1).to({y:853.5},0).wait(1).to({y:853.3},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.8},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(11).to({regX:65.6,regY:102.5,x:957.5,y:853.5},0).wait(1).to({y:852.5},0).wait(1).to({y:851.3},0).wait(1).to({y:850.1},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:904.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:851.2},0).wait(1).to({y:854.7},0).wait(1).to({y:858.7},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:917.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:5,x:957.2,y:861.7},0).wait(1).to({rotation:4.5,x:956.7,y:860.9},0).wait(1).to({regX:79,regY:156.6,rotation:4,x:966,y:915.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.5,x:956.8,y:860.9},0).wait(1).to({rotation:5.3,x:957.5,y:861.9},0).wait(1).to({regX:79,regY:156.5,rotation:6,x:965.9,y:918.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:6.9,x:959,y:861.6},0).wait(1).to({regX:79,regY:156.6,rotation:8,x:966,y:915.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:7.5,x:959.7,y:860.4},0).wait(1).to({rotation:6.7,x:959,y:861.7},0).wait(1).to({regX:79,regY:156.5,rotation:6,x:965.9,y:918.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.9,x:956.9,y:859.5},0).wait(1).to({rotation:3,x:954.7,y:853.3},0).wait(1).to({rotation:0.8,x:952.1,y:846.1},0).wait(1).to({rotation:-1.5,x:949.4,y:838.8},0).wait(1).to({regX:79,regY:156.5,rotation:-3.4,x:963.9,y:886},0).wait(1).to({regX:65.6,regY:102.5,rotation:-2.7,x:948.1,y:834.6},0).wait(1).to({rotation:-1.3,x:949.7,y:837.9},0).wait(1).to({rotation:0.4,x:951.7,y:841.9},0).wait(1).to({rotation:2.1,x:953.7,y:846.2},0).wait(1).to({rotation:3.9,x:955.8,y:850.6},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:854},0).wait(1).to({y:853.8},0).wait(1).to({y:853.5},0).wait(1).to({y:853.3},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.8},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(10).to({regX:65.6,regY:102.5,rotation:5.6,x:960.3,y:854.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.3,x:965.1,y:854.3},0).wait(1).to({rotation:6.9,x:970.4,y:854.5},0).wait(1).to({regX:79.2,regY:156.5,rotation:7.5,x:981.4,y:910},0).wait(1).to({regX:65.6,regY:102.5,rotation:10.2,x:981,y:854.6},0).wait(1).to({rotation:14.6,x:990.8,y:854.7},0).wait(1).to({regX:79,regY:156.5,scaleX:1,scaleY:1,rotation:18.7,x:995.4,y:910.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:16.5,x:997.9,y:855},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.9,x:994.4},0).wait(1).to({regX:79,regY:156.5,rotation:9.6,x:995.5,y:910.6},0).wait(14).to({scaleX:1,scaleY:1,rotation:9.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:8.2,x:985.4,y:854.6},0).wait(1).to({rotation:5.1,x:973.8,y:853.9},0).wait(1).to({rotation:1.4,x:959.8,y:853.3},0).wait(1).to({rotation:-2.7,x:944.6,y:852.8},0).wait(1).to({rotation:-6.9,x:928.8,y:852.5},0).wait(1).to({rotation:-11,x:913.4,y:852.6},0).wait(1).to({regX:79,regY:156.5,rotation:-14.2,x:928,y:901.9},0).wait(1).to({regX:65.6,regY:102.5,rotation:-12.6,x:906.4,y:852.7},0).wait(1).to({rotation:-9.5,x:915.1,y:852.5},0).wait(1).to({rotation:-5.8,x:925.6,y:852.6},0).wait(1).to({rotation:-1.8,x:937,y:852.9},0).wait(1).to({rotation:2.2,x:948.5,y:853.4},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:854},0).wait(1).to({y:853.9},0).wait(1).to({y:853.7},0).wait(1).to({y:853.5},0).wait(1).to({y:853.3},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.8},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(15).to({regX:79.1,rotation:1.1,x:937.9,y:909.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:-1.7,x:919.7,y:855.4},0).wait(1).to({rotation:-6.5,x:909.6,y:855.9},0).wait(1).to({regX:79.1,regY:156.6,rotation:-10.4,x:924.8,y:907.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:-7.6,x:907.3,y:856},0).wait(1).to({rotation:-2.8,x:917.4,y:855.5},0).wait(1).to({regX:79.1,regY:156.5,rotation:1.1,x:937.9,y:909.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.9,x:920.5,y:855.3},0).wait(1).to({rotation:-4.7,x:911,y:855.4},0).wait(1).to({rotation:-9,x:900.4,y:855.8},0).wait(1).to({regX:79,regY:156.6,rotation:-12,x:917.7,y:906.3},0).wait(1).to({regX:65.6,regY:102.5,rotation:-11.1,x:896.8,y:856},0).wait(1).to({rotation:-9.2,x:904.7,y:855.5},0).wait(1).to({rotation:-6.5,x:915.3,y:855},0).wait(1).to({rotation:-3.6,x:927.4,y:854.6},0).wait(1).to({rotation:-0.4,x:940.2,y:854.3},0).wait(1).to({rotation:2.7,x:953,y:854.1},0).wait(1).to({rotation:5.5,x:964.4},0).wait(1).to({regX:79,regY:156.6,rotation:7,x:977.4,y:909.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:6.9,x:969.7,y:854.1},0).wait(1).to({rotation:6.6,x:967.5,y:853.9},0).wait(1).to({rotation:6.2,x:964.8,y:853.7},0).wait(1).to({rotation:5.9,x:961.9,y:853.4},0).wait(1).to({rotation:5.5,x:959.1,y:853.2},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.9},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(20).to({regX:65.6,regY:102.5,rotation:3.7,x:953.7,y:854.4},0).wait(1).to({rotation:0,x:945,y:855.4},0).wait(1).to({rotation:-4.9,x:933.7,y:857.1},0).wait(1).to({rotation:-10.4,x:921,y:859.5},0).wait(1).to({rotation:-16.2,x:907.7,y:862.5},0).wait(1).to({rotation:-22,x:894.9,y:866},0).wait(1).to({rotation:-27.2,x:883.8,y:869.4},0).wait(1).to({regX:79.2,regY:156.5,rotation:-30,x:916.4,y:911.5},0).wait(1).to({regX:65.6,regY:102.5,rotation:-29,x:879.8,y:870.6},0).wait(1).to({rotation:-27.3,x:883.5,y:869.1},0).wait(1).to({regX:79,regY:156.5,rotation:-26,x:922.4,y:910.6},0).wait(25).to({regX:65.6,regY:102.5,rotation:-24.6,x:889.7,y:866.9},0).wait(1).to({rotation:-21.3,x:896.8,y:864.8},0).wait(1).to({rotation:-17,x:906.3,y:862.2},0).wait(1).to({rotation:-12.1,x:917.2,y:859.5},0).wait(1).to({rotation:-6.9,x:929.1,y:857.1},0).wait(1).to({rotation:-1.8,x:940.9,y:855.1},0).wait(1).to({rotation:2.8,x:951.6,y:853.7},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:908.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:853.3},0).wait(1).to({y:853.5},0).wait(1).to({y:853.9},0).wait(1).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(14).to({regX:65.6,regY:102.5,rotation:5.2,x:956.4,y:854},0).wait(1).to({x:954.3},0).wait(1).to({rotation:5.1,x:951.9,y:853.8},0).wait(1).to({x:949.3,y:853.7},0).wait(1).to({regX:79,regY:156.5,rotation:5,x:956,y:908.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.7,x:948.1,y:853.7},0).wait(1).to({rotation:4.1,x:949.5,y:853.9},0).wait(1).to({rotation:3.3,x:951.2,y:854.2},0).wait(1).to({rotation:2.6,x:952.9,y:854.4},0).wait(1).to({regX:79.1,regY:156.5,rotation:2,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:2.3,x:953.4,y:854.5},0).wait(1).to({rotation:2.8,x:951.9,y:854.4},0).wait(1).to({rotation:3.4,x:950.2,y:854.1},0).wait(1).to({rotation:4,x:948.3,y:853.9},0).wait(1).to({regX:79,regY:156.5,rotation:4.5,x:956.1,y:908.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.2,x:947.7,y:853.8},0).wait(1).to({rotation:3.7,x:949.2,y:854},0).wait(1).to({rotation:3.1,x:951.1,y:854.2},0).wait(1).to({rotation:2.5,x:952.9,y:854.4},0).wait(1).to({regX:79.1,regY:156.5,rotation:2,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,rotation:2.4,x:953.1,y:854.5},0).wait(1).to({rotation:3.1,x:951.1,y:854.2},0).wait(1).to({rotation:3.8,x:948.8,y:854},0).wait(1).to({regX:79,regY:156.5,rotation:4.5,x:956.1,y:908.6},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.6,x:947.5,y:853.8},0).wait(1).to({rotation:4.7,x:948.9},0).wait(1).to({rotation:4.8,x:950.6},0).wait(1).to({rotation:4.9,x:952.4,y:853.9},0).wait(1).to({rotation:5,x:954.2},0).wait(1).to({rotation:5.2,x:956.1,y:854},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:909.1},0).wait(10).to({regX:65.6,regY:102.5,x:957.2,y:854},0).wait(1).to({rotation:5.2,x:956.3,y:853.9},0).wait(1).to({x:954.9,y:853.7},0).wait(1).to({rotation:5.1,x:953.1,y:853.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:5,x:950.9,y:853},0).wait(1).to({rotation:4.8,x:948.2,y:852.6},0).wait(1).to({rotation:4.7,x:945.3,y:852.1},0).wait(1).to({regX:79,regY:156.5,rotation:4.5,x:951.2,y:906.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:4.4,x:938.5,y:852.7},0).wait(1).to({rotation:4.3,x:934.7,y:854.1},0).wait(1).to({rotation:4.1,x:930.7,y:855.4},0).wait(1).to({regX:79,regY:156.5,rotation:4,x:936,y:911.7},0).wait(1).to({regX:65.6,regY:102.5,x:926.4,y:856.3},0).wait(1).to({y:855.6},0).wait(1).to({regX:79,regY:156.5,x:936,y:909.7},0).wait(1).to({regX:65.6,regY:102.5,x:926.4,y:854.9},0).wait(5).to({regX:79,regY:156.5,x:936,y:909.7},0).wait(1).to({regX:65.6,regY:102.5,rotation:3.4,x:928.4,y:854.3},0).wait(1).to({rotation:2.7,x:930.5,y:853.7},0).wait(1).to({rotation:2,x:932.5,y:853.1},0).wait(1).to({rotation:1.4,x:934.7,y:852.6},0).wait(1).to({rotation:0.7,x:936.8,y:851.9},0).wait(1).to({regX:79.1,regY:156.6,rotation:0,x:952.4,y:905.4},0).wait(1).to({regX:65.6,regY:102.5,rotation:-0.8,x:941.1,y:853.2},0).wait(1).to({rotation:-1.5,x:943.2,y:855.1},0).wait(1).to({rotation:-2.2,x:945.4,y:857},0).wait(1).to({regX:79.2,regY:156.6,rotation:-3,x:964.1,y:912.2},0).wait(1).to({regX:65.6,regY:102.5,x:947.6,y:857.9},0).wait(1).to({y:856.9},0).wait(1).to({regX:79.2,regY:156.6,x:964.1,y:909.2},0).wait(1).to({regX:65.6,regY:102.5,x:947.6,y:855.9},0).wait(4).to({regX:79.2,regY:156.6,x:964.1,y:909.2},0).wait(1).to({regX:65.6,regY:102.5,rotation:-2.1,x:948.6,y:855.1},0).wait(1).to({rotation:-1.3,x:949.7,y:854.4},0).wait(1).to({rotation:-0.4,x:950.7,y:853.8},0).wait(1).to({rotation:0.5,x:951.8,y:853},0).wait(1).to({rotation:1.4,x:952.8,y:852.3},0).wait(1).to({regX:79.2,regY:156.6,rotation:2.3,x:965.3,y:906.1},0).wait(1).to({regX:65.6,regY:102.5,scaleX:1,scaleY:1,rotation:3.3,x:955,y:852.3},0).wait(1).to({rotation:4.3,x:956.2,y:853.1},0).wait(1).to({regX:79,regY:156.5,rotation:5.3,x:965.9,y:909.1},0).wait(1).to({regX:65.6,regY:102.5,x:957.5,y:854.1},0).wait(2).to({regX:79,regY:156.5,x:965.9,y:909.1},0).wait(3));

	// ll_s_r_hand
	this.instance_2 = new lib.ll_s_r_hand_1();
	this.instance_2.setTransform(1129.9,1066.5,1,1,0,0,0,156.1,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:92.5,regY:1,rotation:-0.3,x:1064.9,y:1023.6},0).wait(1).to({rotation:-0.7,x:1063.5,y:1023.1},0).wait(1).to({rotation:-1,x:1062.1,y:1022.7},0).wait(1).to({regX:156.1,regY:43.5,rotation:-1.2,x:1125.7,y:1063.5},0).wait(1).to({regX:92.5,regY:1,rotation:-1.1,x:1061.6,y:1022.5},0).wait(1).to({rotation:-0.7,x:1062.6,y:1023},0).wait(1).to({rotation:-0.2,x:1064.1,y:1023.8},0).wait(1).to({rotation:0.3,x:1065.7,y:1024.7},0).wait(1).to({rotation:1,x:1067.6,y:1025.6},0).wait(1).to({rotation:1.6,x:1069.6,y:1026.7},0).wait(1).to({rotation:2.3,x:1071.6,y:1027.7},0).wait(1).to({rotation:3,x:1073.6,y:1028.8},0).wait(1).to({rotation:3.6,x:1075.6,y:1029.8},0).wait(1).to({rotation:4.2,x:1077.2,y:1030.7},0).wait(1).to({regX:156.1,regY:43.4,rotation:4.5,x:1138.1,y:1078.4},0).wait(1).to({regX:92.5,regY:1,rotation:4.4,x:1077.9,y:1031.2},0).wait(1).to({x:1078.1},0).wait(1).to({rotation:4.3,x:1078.2,y:1031.1},0).wait(1).to({x:1078.3},0).wait(1).to({rotation:4.2,x:1078.4},0).wait(1).to({rotation:4.1,x:1078.6,y:1031},0).wait(1).to({rotation:4,x:1078.7},0).wait(1).to({x:1078.8},0).wait(1).to({regX:156.1,regY:43.5,rotation:3.9,x:1139.4,y:1077.7},0).wait(1).to({regX:92.5,regY:1,x:1078.3,y:1030.7},0).wait(1).to({rotation:3.7,x:1076.9,y:1030.3},0).wait(1).to({rotation:3.4,x:1075.1,y:1029.6},0).wait(1).to({rotation:3.1,x:1072.8,y:1028.9},0).wait(1).to({rotation:2.8,x:1070.2,y:1028},0).wait(1).to({rotation:2.4,x:1067.5,y:1027.1},0).wait(1).to({rotation:2.1,x:1064.7,y:1026.2},0).wait(1).to({rotation:1.7,x:1061.9,y:1025.2},0).wait(1).to({rotation:1.3,x:1059.2,y:1024.3},0).wait(1).to({rotation:1,x:1056.6,y:1023.5},0).wait(1).to({rotation:0.7,x:1054.5,y:1022.8},0).wait(1).to({regX:156,regY:43.5,rotation:0.5,x:1116.6,y:1065.5},0).wait(1).to({regX:92.5,regY:1,x:1054,y:1022.5},0).wait(1).to({x:1055.3,y:1022.7},0).wait(1).to({x:1057.2,y:1023.2},0).wait(1).to({regX:156,regY:43.5,x:1122.5,y:1066.8},0).wait(1).to({regX:92.5,regY:1,rotation:-0.2,x:1059.8,y:1023},0).wait(1).to({rotation:-1,x:1060.2,y:1022.3},0).wait(1).to({rotation:-1.9,x:1060.7,y:1021.6},0).wait(1).to({rotation:-2.7,x:1061.2,y:1020.9},0).wait(1).to({rotation:-3.5,x:1061.6,y:1020.3},0).wait(1).to({regX:156,regY:43.6,rotation:-4.4,x:1128.8,y:1057.1},0).wait(1).to({regX:92.5,regY:1,x:1062.2,y:1019.5},0).wait(1).to({rotation:-4.2,x:1062,y:1019.6},0).wait(1).to({rotation:-4,x:1061.7},0).wait(1).to({rotation:-3.8,x:1061.3,y:1019.8},0).wait(1).to({rotation:-3.5,x:1060.8,y:1020},0).wait(1).to({rotation:-3.1,x:1060.3,y:1020.1},0).wait(1).to({rotation:-2.6,x:1059.7,y:1020.4},0).wait(1).to({rotation:-2.1,x:1059,y:1020.6},0).wait(1).to({regX:156.1,regY:43.6,rotation:-1.5,x:1122.9,y:1061.8},0).wait(1).to({regX:92.5,regY:1,rotation:-1.7,x:1058.4,y:1020.8},0).wait(1).to({rotation:-1.8,x:1058.6,y:1020.7},0).wait(1).to({rotation:-2,x:1058.8},0).wait(1).to({rotation:-2.1,x:1059,y:1020.6},0).wait(1).to({rotation:-2.3,x:1059.3,y:1020.5},0).wait(1).to({rotation:-2.5,x:1059.6,y:1020.4},0).wait(1).to({rotation:-2.7,x:1059.8,y:1020.3},0).wait(1).to({rotation:-2.9,x:1060.2,y:1020.2},0).wait(1).to({rotation:-3.1,x:1060.5,y:1020.1},0).wait(1).to({rotation:-3.3,x:1060.8,y:1020},0).wait(1).to({rotation:-3.6,x:1061.1,y:1019.9},0).wait(1).to({rotation:-3.8,x:1061.5,y:1019.7},0).wait(1).to({rotation:-4,x:1061.8,y:1019.6},0).wait(1).to({regX:156,regY:43.6,rotation:-4.3,x:1128.8,y:1057.2},0).wait(1).to({regX:92.5,regY:1,rotation:-4.4,x:1061.9,y:1019.3},0).wait(1).to({rotation:-4.6,x:1060.9,y:1019},0).wait(1).to({rotation:-4.9,x:1059.6,y:1018.5},0).wait(1).to({rotation:-5.1,x:1058.3,y:1018.1},0).wait(1).to({regX:156,regY:43.6,rotation:-5.3,x:1124.7,y:1054.3},0).wait(1).to({regX:92.5,regY:1,rotation:-5.2,x:1057.8,y:1018},0).wait(1).to({rotation:-4.8,x:1058.5,y:1018.4},0).wait(1).to({rotation:-4.3,x:1059.5,y:1019.1},0).wait(1).to({rotation:-3.7,x:1060.7,y:1019.9},0).wait(1).to({rotation:-3,x:1062.2,y:1020.8},0).wait(1).to({rotation:-2.2,x:1063.8,y:1021.9},0).wait(1).to({rotation:-1.4,x:1065.5,y:1022.9},0).wait(1).to({rotation:-0.5,x:1067.4,y:1024.1},0).wait(1).to({rotation:0.4,x:1069.2,y:1025.3},0).wait(1).to({rotation:1.2,x:1071.1,y:1026.5},0).wait(1).to({rotation:2.1,x:1072.9,y:1027.7},0).wait(1).to({rotation:2.9,x:1074.7,y:1028.9},0).wait(1).to({rotation:3.6,x:1076.3,y:1029.9},0).wait(1).to({rotation:4.2,x:1077.5,y:1030.7},0).wait(1).to({regX:156.1,regY:43.4,rotation:4.5,x:1138.1,y:1078.4},0).wait(1).to({regX:92.5,regY:1,rotation:4.4,x:1077.8,y:1031.1},0).wait(1).to({rotation:4.3,x:1077.7,y:1031},0).wait(1).to({rotation:4.1,x:1077.4,y:1030.8},0).wait(1).to({rotation:3.9,x:1077,y:1030.5},0).wait(1).to({rotation:3.7,x:1076.6,y:1030.2},0).wait(1).to({rotation:3.5,x:1076.2,y:1029.9},0).wait(1).to({rotation:3.2,x:1075.8,y:1029.6},0).wait(1).to({rotation:3,x:1075.3,y:1029.3},0).wait(1).to({rotation:2.8,x:1074.9,y:1029.1},0).wait(1).to({rotation:2.6,x:1074.7,y:1028.8},0).wait(1).to({regX:156,regY:43.6,rotation:2.5,x:1136.1,y:1074},0).wait(1).to({regX:92.5,regY:1,rotation:2.9,x:1076.1,y:1029.3},0).wait(1).to({rotation:3.2,x:1077.7,y:1030},0).wait(1).to({rotation:3.5,x:1079.2,y:1030.7},0).wait(1).to({rotation:3.9,x:1080.7,y:1031.4},0).wait(1).to({rotation:4.2,x:1082.2,y:1032.1},0).wait(1).to({rotation:4.5,x:1083.6,y:1032.8},0).wait(1).to({rotation:4.8,x:1085.1,y:1033.5},0).wait(1).to({rotation:5.1,x:1086.6,y:1034.1},0).wait(1).to({regX:156.1,regY:43.6,rotation:5.4,x:1147.3,y:1083.2},0).wait(1).to({regX:92.5,regY:1,x:1088,y:1034.8},0).wait(2).to({scaleX:1,scaleY:1,y:1034.9},0).wait(3).to({rotation:5.3},0).wait(2).to({regX:156.1,regY:43.6,x:1147.4,y:1083.2},0).wait(1).to({regX:92.5,regY:1,x:1088,y:1034.9},0).wait(6).to({rotation:5.4},0).wait(2).to({y:1034.8},0).wait(2).to({y:1034.9},0).wait(1).to({y:1034.8},0).wait(2).to({scaleX:1,scaleY:1},0).wait(5).to({regX:156.1,regY:43.6,x:1147.3,y:1083.2},0).wait(1).to({regX:92.5,regY:1,x:1087.8,y:1034.6},0).wait(1).to({rotation:5.2,x:1087.3,y:1034.3},0).wait(1).to({rotation:4.9,x:1086.5,y:1033.9},0).wait(1).to({rotation:4.6,x:1085.6,y:1033.3},0).wait(1).to({rotation:4.2,x:1084.6,y:1032.7},0).wait(1).to({rotation:3.7,x:1083.4,y:1032},0).wait(1).to({rotation:3.3,x:1082.1,y:1031.3},0).wait(1).to({rotation:2.8,x:1080.8,y:1030.5},0).wait(1).to({rotation:2.3,x:1079.4,y:1029.7},0).wait(1).to({rotation:1.7,x:1078,y:1028.8},0).wait(1).to({rotation:1.2,x:1076.6,y:1028},0).wait(1).to({rotation:0.6,x:1075.1,y:1027.1},0).wait(1).to({rotation:0.1,x:1073.6,y:1026.2},0).wait(1).to({rotation:-0.5,x:1072.2,y:1025.4},0).wait(1).to({rotation:-1.1,x:1070.6,y:1024.5},0).wait(1).to({rotation:-1.6,x:1069.3,y:1023.7},0).wait(1).to({rotation:-2.2,x:1067.9,y:1022.8},0).wait(1).to({rotation:-2.7,x:1066.5,y:1022},0).wait(1).to({rotation:-3.2,x:1065.3,y:1021.3},0).wait(1).to({rotation:-3.6,x:1064.1,y:1020.6},0).wait(1).to({rotation:-4,x:1063.1,y:1020.1},0).wait(1).to({rotation:-4.3,x:1062.4,y:1019.6},0).wait(1).to({regX:156,regY:43.6,rotation:-4.4,x:1128.8,y:1057.1},0).wait(1).to({regX:92.5,regY:1,rotation:-4,x:1063,y:1020},0).wait(1).to({rotation:-3.1,x:1064.9,y:1021.2},0).wait(1).to({rotation:-2.1,x:1067.2,y:1022.7},0).wait(1).to({rotation:-0.9,x:1069.8,y:1024.2},0).wait(1).to({rotation:0.3,x:1072.4,y:1025.9},0).wait(1).to({rotation:1.4,x:1074.7,y:1027.3},0).wait(1).to({regX:156.1,regY:43.6,rotation:2,x:1138.1,y:1072.9},0).wait(1).to({regX:92.5,regY:1,rotation:1.8,x:1075.2,y:1027.9},0).wait(1).to({rotation:1.4,x:1073.5,y:1027.2},0).wait(1).to({rotation:1,x:1071.4,y:1026.3},0).wait(1).to({rotation:0.5,x:1069.1,y:1025.3},0).wait(1).to({rotation:0,x:1066.8,y:1024.4},0).wait(1).to({rotation:-0.5,x:1064.7,y:1023.6},0).wait(1).to({regX:156,regY:43.6,rotation:-0.7,x:1127.8,y:1065},0).wait(1).to({regX:92.5,regY:1,x:1063.9,y:1023.3},0).wait(1).to({rotation:-0.6,x:1064.4,y:1023.4},0).wait(1).to({rotation:-0.4,x:1065,y:1023.7},0).wait(1).to({rotation:-0.3,x:1065.6,y:1023.9},0).wait(1).to({rotation:-0.2,x:1066.2,y:1024.1},0).wait(1).to({rotation:-0.1,x:1066.8,y:1024.3},0).wait(1).to({regX:156.1,regY:43.5,rotation:0,x:1130.6,y:1067},0).wait(1).to({regX:92.5,regY:1,x:1066.9,y:1024.4},0).wait(1).to({rotation:-0.1,x:1066.7},0).wait(1).to({x:1066.3,y:1024.2},0).wait(1).to({rotation:-0.2,x:1065.8,y:1024.1},0).wait(1).to({rotation:-0.3,x:1065.3,y:1023.9},0).wait(1).to({rotation:-0.5,x:1064.7,y:1023.7},0).wait(1).to({rotation:-0.6,x:1064.1,y:1023.5},0).wait(1).to({rotation:-0.7,x:1063.5,y:1023.2},0).wait(1).to({rotation:-0.9,x:1062.8,y:1023},0).wait(1).to({rotation:-1,x:1062.1,y:1022.7},0).wait(1).to({rotation:-1.2,x:1061.4,y:1022.5},0).wait(1).to({rotation:-1.3,x:1060.6,y:1022.2},0).wait(1).to({rotation:-1.5,x:1059.9,y:1021.9},0).wait(1).to({rotation:-1.6,x:1059.2,y:1021.7},0).wait(1).to({rotation:-1.8,x:1058.4,y:1021.4},0).wait(1).to({rotation:-2,x:1057.7,y:1021.1},0).wait(1).to({rotation:-2.1,x:1057,y:1020.9},0).wait(1).to({rotation:-2.2,x:1056.3,y:1020.6},0).wait(1).to({rotation:-2.4,x:1055.6,y:1020.4},0).wait(1).to({rotation:-2.5,x:1055.1,y:1020.2},0).wait(1).to({rotation:-2.6,x:1054.6,y:1020},0).wait(1).to({rotation:-2.7,x:1054.2,y:1019.9},0).wait(1).to({regX:156.1,regY:43.5,x:1119.6,y:1059.3},0).wait(1).to({regX:92.5,regY:1,rotation:-2.4,x:1053.6,y:1019.9},0).wait(1).to({rotation:-1.8,x:1052.7,y:1020.2},0).wait(1).to({rotation:-1,x:1051.6,y:1020.5},0).wait(1).to({rotation:-0.1,x:1050.3,y:1020.8},0).wait(1).to({rotation:0.8,x:1049.1,y:1021.2},0).wait(1).to({rotation:1.6,x:1048,y:1021.5},0).wait(1).to({regX:156,regY:43.5,rotation:2,x:1109.5,y:1066.4},0).wait(1).to({regX:92.5,regY:1,rotation:1.5,x:1048.2,y:1021.5},0).wait(1).to({rotation:0.4,x:1049.7,y:1021},0).wait(1).to({rotation:-0.8,x:1051.4,y:1020.5},0).wait(1).to({rotation:-2,x:1053.1,y:1020.1},0).wait(1).to({regX:156.1,regY:43.5,rotation:-2.7,x:1119.6,y:1059.3},0).wait(1).to({regX:92.5,regY:1,x:1054.1,y:1019.8},0).wait(5).to({y:1019.7},0).wait(1).to({y:1019.8},0).wait(1).to({y:1019.7},0).wait(1).to({rotation:-2.6,x:1054.2},0).wait(6).to({x:1054.3},0).wait(1).to({y:1019.6},0).wait(2).to({y:1019.7},0).wait(1).to({regX:156.1,regY:43.5,x:1119.7,y:1059.3},0).wait(1).to({regX:92.5,regY:1,rotation:-2.7,x:1053.5,y:1019.4},0).wait(1).to({rotation:-3,x:1051.8,y:1018.9},0).wait(1).to({rotation:-3.4,x:1050,y:1018.3},0).wait(1).to({rotation:-3.8,x:1048.2,y:1017.7},0).wait(1).to({regX:156.1,regY:43.5,rotation:-4,x:1113.6,y:1055.3},0).wait(1).to({regX:92.5,regY:1,rotation:-3.9,x:1047.6,y:1017.5},0).wait(1).to({rotation:-3.7,x:1048.8,y:1018},0).wait(1).to({rotation:-3.3,x:1050.5,y:1018.6},0).wait(1).to({rotation:-2.9,x:1052.5,y:1019.4},0).wait(1).to({rotation:-2.4,x:1054.9,y:1020.3},0).wait(1).to({rotation:-1.8,x:1057.5,y:1021.2},0).wait(1).to({rotation:-1.2,x:1060.1,y:1022.3},0).wait(1).to({rotation:-0.6,x:1062.9,y:1023.3},0).wait(1).to({rotation:0,x:1065.9,y:1024.4},0).wait(1).to({rotation:0.6,x:1068.8,y:1025.6},0).wait(1).to({rotation:1.2,x:1071.7,y:1026.7},0).wait(1).to({rotation:1.8,x:1074.6,y:1027.8},0).wait(1).to({rotation:2.4,x:1077.4,y:1028.8},0).wait(1).to({rotation:2.9,x:1080,y:1029.9},0).wait(1).to({rotation:3.4,x:1082.3,y:1030.7},0).wait(1).to({rotation:3.8,x:1084.1,y:1031.4},0).wait(1).to({regX:156.2,regY:43.5,rotation:4,x:1145.4,y:1078.6},0).wait(1).to({regX:92.5,regY:1,rotation:3.8,x:1083.9,y:1031.4},0).wait(1).to({rotation:3.4,x:1082.1,y:1030.7},0).wait(1).to({rotation:2.9,x:1079.7,y:1029.7},0).wait(1).to({rotation:2.3,x:1076.9,y:1028.5},0).wait(1).to({rotation:1.6,x:1074,y:1027.3},0).wait(1).to({rotation:1,x:1071.1,y:1026.1},0).wait(1).to({rotation:0.4,x:1068.3,y:1025},0).wait(1).to({rotation:-0.2,x:1065.9,y:1024},0).wait(1).to({regX:156,regY:43.4,rotation:-0.4,x:1128.7,y:1065.5},0).wait(1).to({regX:92.5,regY:1,x:1065.3,y:1023.7},0).wait(1).to({rotation:-0.2,x:1066.1,y:1024.1},0).wait(1).to({rotation:0,x:1067.2,y:1024.6},0).wait(1).to({rotation:0.3,x:1068.4,y:1025.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5,x:1069.6,y:1025.7},0).wait(1).to({rotation:0.7,x:1070.7,y:1026.2},0).wait(1).to({regX:156,regY:43.4,rotation:0.8,x:1134.1,y:1069.8},0).wait(1).to({regX:92.5,regY:1,rotation:0.9,x:1071.7,y:1026.6},0).wait(1).to({rotation:1,x:1072.7,y:1026.9},0).wait(1).to({rotation:1.2,x:1073.9,y:1027.1},0).wait(1).to({rotation:1.4,x:1075.3,y:1027.5},0).wait(1).to({rotation:1.6,x:1076.6,y:1027.8},0).wait(1).to({rotation:1.8,x:1077.8,y:1028.1},0).wait(1).to({regX:156,regY:43.4,rotation:1.9,x:1140.6,y:1072.7},0).wait(1).to({regX:92.5,regY:1,rotation:1.8,x:1078.4,y:1028.3},0).wait(2).to({x:1078.5},0).wait(1).to({y:1028.4},0).wait(1).to({regX:156.1,regY:43.4,x:1140.7,y:1072.8},0).wait(1).to({regX:92.5,regY:1,rotation:1.6,x:1079.1,y:1028.5},0).wait(1).to({rotation:1.2,x:1080.5},0).wait(1).to({rotation:0.7,x:1082.3,y:1028.6},0).wait(1).to({rotation:0.2,x:1084.3,y:1028.7},0).wait(1).to({rotation:-0.4,x:1086.4,y:1028.8},0).wait(1).to({rotation:-0.9,x:1088.5,y:1028.9},0).wait(1).to({rotation:-1.4,x:1090.3,y:1029},0).wait(1).to({regX:156,regY:43.4,rotation:-1.7,x:1156,y:1069.5},0).wait(1).to({regX:92.5,regY:1,rotation:-1.4,x:1090.3,y:1029},0).wait(1).to({rotation:-0.8,x:1088.1,y:1028.9},0).wait(1).to({rotation:-0.1,x:1085.4,y:1028.7},0).wait(1).to({rotation:0.7,x:1082.6,y:1028.6},0).wait(1).to({rotation:1.4,x:1080,y:1028.5},0).wait(1).to({regX:156.1,regY:43.4,rotation:1.8,x:1140.7,y:1072.8},0).wait(1).to({regX:92.5,regY:1,rotation:1.5,x:1078.8,y:1028.3},0).wait(1).to({rotation:1.1,x:1079.5,y:1028.1},0).wait(1).to({rotation:0.6,x:1080.1,y:1027.9},0).wait(1).to({regX:156.1,regY:43.4,rotation:0.3,x:1144,y:1070.5},0).wait(1).to({regX:92.5,regY:1,rotation:0.4,x:1080.4,y:1027.9},0).wait(1).to({rotation:0.8,x:1079.9,y:1028},0).wait(1).to({rotation:1.2,x:1079.3,y:1028.2},0).wait(1).to({rotation:1.5,x:1078.8,y:1028.4},0).wait(1).to({regX:156.1,regY:43.4,rotation:1.8,x:1140.7,y:1072.8},0).wait(1).to({regX:92.5,regY:1,x:1078.4,y:1028.4},0).wait(1).to({y:1028.5},0).wait(1).to({rotation:1.7,x:1078.3},0).wait(2).to({x:1078.2},0).wait(1).to({rotation:1.6},0).wait(1).to({x:1078.1},0).wait(2).to({y:1028.6},0).wait(1).to({regX:156.1,regY:43.4,x:1140.5,y:1072.7},0).wait(1).to({regX:92.5,regY:1,x:1078,y:1028.5},0).wait(1).to({rotation:1.5},0).wait(1).to({x:1077.9},0).wait(2).to({x:1077.8},0).wait(1).to({regX:156.1,regY:43.4,x:1140.2,y:1072.5},0).wait(1).to({regX:92.5,regY:1,rotation:1.6,x:1078.2,y:1028.7},0).wait(1).to({rotation:1.8,x:1079.3,y:1029.2},0).wait(1).to({rotation:2.1,x:1080.7,y:1029.9},0).wait(1).to({rotation:2.5,x:1082.3,y:1030.6},0).wait(1).to({rotation:2.8,x:1084.1,y:1031.5},0).wait(1).to({rotation:3.2,x:1085.9,y:1032.4},0).wait(1).to({rotation:3.6,x:1087.8,y:1033.3},0).wait(1).to({rotation:4,x:1089.6,y:1034.2},0).wait(1).to({rotation:4.4,x:1091.3,y:1035},0).wait(1).to({rotation:4.6,x:1092.7,y:1035.7},0).wait(1).to({regX:156.1,regY:43.4,rotation:4.8,x:1153.2,y:1083.5},0).wait(1).to({regX:92.5,regY:1,rotation:4.7,x:1092.8,y:1035.7},0).wait(1).to({rotation:4.4,x:1091.5,y:1035.1},0).wait(1).to({rotation:4.1,x:1090.1,y:1034.4},0).wait(1).to({rotation:3.8,x:1088.7,y:1033.7},0).wait(1).to({regX:156.1,regY:43.4,rotation:3.6,x:1148.6,y:1079.5},0).wait(1).to({regX:92.5,regY:1,rotation:3.7,x:1088.6,y:1033.7},0).wait(1).to({rotation:4.1,x:1090.2,y:1034.6},0).wait(1).to({rotation:4.4,x:1092,y:1035.6},0).wait(1).to({rotation:4.8,x:1093.8,y:1036.5},0).wait(1).to({regX:156.1,regY:43.4,scaleX:1,scaleY:1,rotation:5,x:1154.5,y:1084.9},0).wait(3).to({regX:92.5,regY:1,rotation:5.1,x:1095.2,y:1037.2},0).wait(1).to({rotation:5.2,x:1095.7,y:1037.5},0).wait(1).to({rotation:5.3,x:1096.3,y:1037.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:1097,y:1038.1},0).wait(1).to({rotation:5.6,x:1097.7,y:1038.5},0).wait(1).to({rotation:5.8,x:1098.4,y:1038.9},0).wait(1).to({rotation:5.9,x:1099,y:1039.1},0).wait(1).to({regX:156,regY:43.5,rotation:6,x:1158.1,y:1088.1},0).wait(1).to({regX:92.5,regY:1,x:1099.4,y:1039.3},0).wait(1).to({x:1099.3},0).wait(1).to({rotation:5.9,x:1099.2,y:1039.2},0).wait(1).to({scaleX:1,scaleY:1,x:1099.1},0).wait(1).to({rotation:5.8,x:1099},0).wait(1).to({regX:156.1,regY:43.4,x:1157.8,y:1087.8},0).wait(1).to({regX:92.5,regY:1,x:1098.9,y:1039.2},0).wait(1).to({x:1098.8},0).wait(1).to({rotation:5.7},0).wait(1).to({x:1098.7,y:1039.3},0).wait(1).to({rotation:5.6},0).wait(1).to({x:1098.6},0).wait(1).to({x:1098.5},0).wait(1).to({regX:156.1,regY:43.4,x:1157.6,y:1087.6},0).wait(1).to({regX:92.5,regY:1,rotation:5.8,x:1099.2,y:1039.9},0).wait(1).to({rotation:6.2,x:1100.6,y:1041},0).wait(1).to({rotation:6.7,x:1102.1,y:1042.2},0).wait(1).to({regX:156.1,regY:43.5,rotation:7,x:1160.9,y:1092.9},0).wait(1).to({regX:92.5,regY:1,x:1102.9,y:1042.9},0).wait(1).to({rotation:6.8,x:1102.3,y:1042.6},0).wait(1).to({rotation:6.6,x:1101.4,y:1042.2},0).wait(1).to({rotation:6.4,x:1100.3,y:1041.6},0).wait(1).to({rotation:6.1,x:1099,y:1040.9},0).wait(1).to({rotation:5.7,x:1097.5,y:1040.2},0).wait(1).to({rotation:5.4,x:1096,y:1039.4},0).wait(1).to({rotation:5,x:1094.3,y:1038.6},0).wait(1).to({rotation:4.6,x:1092.5,y:1037.7},0).wait(1).to({rotation:4.1,x:1090.7,y:1036.7},0).wait(1).to({rotation:3.7,x:1088.8,y:1035.8},0).wait(1).to({rotation:3.2,x:1086.9,y:1034.8},0).wait(1).to({rotation:2.8,x:1084.9,y:1033.8},0).wait(1).to({rotation:2.3,x:1082.9,y:1032.8},0).wait(1).to({rotation:1.8,x:1080.8,y:1031.8},0).wait(1).to({rotation:1.4,x:1078.9,y:1030.8},0).wait(1).to({rotation:0.9,x:1076.8,y:1029.7},0).wait(1).to({rotation:0.4,x:1074.8,y:1028.8},0).wait(1).to({rotation:-0.1,x:1072.8,y:1027.7},0).wait(1).to({rotation:-0.5,x:1070.9,y:1026.8},0).wait(1).to({rotation:-1,x:1069,y:1025.8},0).wait(1).to({rotation:-1.4,x:1067.1,y:1024.9},0).wait(1).to({rotation:-1.8,x:1065.4,y:1024.1},0).wait(1).to({rotation:-2.2,x:1063.8,y:1023.2},0).wait(1).to({rotation:-2.6,x:1062.4,y:1022.5},0).wait(1).to({rotation:-2.9,x:1061.2,y:1021.9},0).wait(1).to({rotation:-3.1,x:1060.3,y:1021.5},0).wait(1).to({regX:156.1,regY:43.5,rotation:-3.2,x:1125.6,y:1060.2},0).wait(1).to({regX:92.5,regY:1,rotation:-3.1,x:1060.2,y:1021.5},0).wait(1).to({rotation:-2.9,x:1061.1,y:1021.9},0).wait(1).to({rotation:-2.6,x:1062.1,y:1022.5},0).wait(1).to({rotation:-2.3,x:1063.2,y:1023.1},0).wait(1).to({rotation:-1.9,x:1064.5,y:1023.7},0).wait(1).to({rotation:-1.6,x:1065.6,y:1024.3},0).wait(1).to({rotation:-1.3,x:1066.6,y:1024.9},0).wait(1).to({regX:156.1,regY:43.5,rotation:-1.2,x:1131.6,y:1066.3},0).wait(1).to({regX:92.5,regY:1,x:1067.2,y:1025.1},0).wait(1).to({y:1025.2},0).wait(1).to({x:1067.3},0).wait(2).to({y:1025.1},0).wait(1).to({y:1025.2},0).wait(1).to({rotation:-1.1},0).wait(1).to({y:1025.1},0).wait(1).to({y:1025.2},0).wait(1).to({y:1025.1},0).wait(1).to({y:1025.2},0).wait(1).to({y:1025.1},0).wait(2).to({y:1025.2},0).wait(1).to({y:1025.1},0).wait(1).to({rotation:-1},0).wait(2).to({regX:156.1,regY:43.5,x:1131.5,y:1066.4},0).wait(1).to({regX:92.5,regY:1,rotation:-1.1,x:1067,y:1025},0).wait(1).to({rotation:-1.2,x:1066.2,y:1024.8},0).wait(1).to({rotation:-1.4,x:1065.2,y:1024.4},0).wait(1).to({rotation:-1.7,x:1064,y:1024},0).wait(1).to({rotation:-2,x:1062.6,y:1023.5},0).wait(1).to({rotation:-2.3,x:1061.1,y:1022.9},0).wait(1).to({rotation:-2.6,x:1059.5,y:1022.3},0).wait(1).to({rotation:-2.9,x:1057.9,y:1021.8},0).wait(1).to({rotation:-3.2,x:1056.2,y:1021.2},0).wait(1).to({rotation:-3.6,x:1054.5,y:1020.6},0).wait(1).to({rotation:-3.9,x:1052.9,y:1020},0).wait(1).to({rotation:-4.2,x:1051.3,y:1019.4},0).wait(1).to({rotation:-4.5,x:1049.8,y:1018.9},0).wait(1).to({rotation:-4.8,x:1048.6,y:1018.4},0).wait(1).to({rotation:-5,x:1047.5,y:1018.1},0).wait(1).to({regX:156.1,regY:43.4,rotation:-5.1,x:1114,y:1054.5},0).wait(1).to({regX:92.5,regY:1,x:1047.1,y:1017.9},0).wait(2).to({rotation:-5,y:1018},0).wait(3).to({x:1047.2},0).wait(3).to({x:1047.3},0).wait(1).to({y:1018.1},0).wait(1).to({x:1047.4},0).wait(2).to({rotation:-4.9,x:1047.5},0).wait(2).to({x:1047.6},0).wait(1).to({y:1018.2},0).wait(1).to({x:1047.7},0).wait(2).to({rotation:-4.8,x:1047.8},0).wait(1).to({x:1047.9,y:1018.3},0).wait(2).to({x:1048},0).wait(1).to({x:1048.1},0).wait(2).to({rotation:-4.7,x:1048.2},0).wait(1).to({x:1048.3,y:1018.4},0).wait(2).to({x:1048.4},0).wait(2).to({x:1048.5,y:1018.5},0).wait(1).to({rotation:-4.6,x:1048.6,y:1018.4},0).wait(1).to({y:1018.5},0).wait(1).to({x:1048.7},0).wait(2).to({x:1048.8},0).wait(1).to({y:1018.6},0).wait(1).to({x:1048.9},0).wait(1).to({rotation:-4.5},0).wait(1).to({x:1049},0).wait(4).to({regX:156.2,regY:43.4,x:1115.7,y:1055.8},0).wait(1).to({regX:92.5,regY:1,rotation:-4.6,x:1048.6,y:1018.4},0).wait(1).to({rotation:-4.8,x:1047.7,y:1017.9},0).wait(1).to({rotation:-5.1,x:1046.7,y:1017.3},0).wait(1).to({rotation:-5.4,x:1045.7,y:1016.7},0).wait(1).to({rotation:-5.6,x:1044.6,y:1016.1},0).wait(1).to({regX:156.2,regY:43.4,rotation:-5.8,x:1111.5,y:1051.5},0).wait(1).to({regX:92.5,regY:1,rotation:-5.4,x:1045.6,y:1016.4},0).wait(1).to({rotation:-4.6,x:1049.1,y:1018},0).wait(1).to({rotation:-3.5,x:1053.8,y:1020.2},0).wait(1).to({rotation:-2.2,x:1059.5,y:1022.6},0).wait(1).to({rotation:-0.8,x:1065.6,y:1025.3},0).wait(1).to({rotation:0.7,x:1072.1,y:1028.2},0).wait(1).to({rotation:2.2,x:1078.6,y:1031.1},0).wait(1).to({rotation:3.6,x:1085,y:1034},0).wait(1).to({rotation:5,x:1091,y:1036.6},0).wait(1).to({rotation:6.1,x:1096,y:1038.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:6.6,x:1156.8,y:1089.4},0).wait(1).to({regX:92.5,regY:1,rotation:6.4,x:1097.5,y:1039.7},0).wait(1).to({rotation:5.9,x:1095.4,y:1038.7},0).wait(1).to({rotation:5.3,x:1092.7,y:1037.6},0).wait(1).to({rotation:4.6,x:1089.7,y:1036.3},0).wait(1).to({rotation:3.9,x:1086.7,y:1034.9},0).wait(1).to({rotation:3.2,x:1083.7,y:1033.6},0).wait(1).to({rotation:2.6,x:1081.2,y:1032.5},0).wait(1).to({regX:156.3,regY:43.4,rotation:2.3,x:1141.7,y:1076.7},0).wait(1).to({regX:92.5,regY:1,rotation:2.5,x:1080.6,y:1032.2},0).wait(1).to({rotation:2.9,x:1082.2,y:1032.9},0).wait(1).to({rotation:3.3,x:1084.2,y:1033.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.8,x:1086.3,y:1034.8},0).wait(1).to({rotation:4.3,x:1088.3,y:1035.7},0).wait(1).to({regX:156.2,regY:43.4,rotation:4.5,x:1149.5,y:1083.3},0).wait(1).to({regX:92.5,regY:1,rotation:4.7,x:1090.5,y:1036.6},0).wait(1).to({rotation:5.2,x:1092.5,y:1037.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:1094.8,y:1038.5},0).wait(1).to({rotation:6.3,x:1097,y:1039.5},0).wait(1).to({regX:156.3,regY:43.4,rotation:6.6,x:1156.8,y:1089.4},0).wait(1).to({regX:92.5,regY:1,x:1098.4,y:1040.1},0).wait(1).to({scaleX:1,scaleY:1,x:1098.3,y:1040.2},0).wait(1).to({regX:156.3,regY:43.4,rotation:6.5,x:1156.7,y:1089.4},0).wait(1).to({regX:92.5,regY:1,rotation:6.3,x:1097.4,y:1039.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:1095.3,y:1038.7},0).wait(1).to({rotation:5.3,x:1092.4,y:1037.2},0).wait(1).to({rotation:4.6,x:1089.1,y:1035.6},0).wait(1).to({rotation:3.9,x:1085.5,y:1033.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.1,x:1081.8,y:1032},0).wait(1).to({rotation:2.3,x:1078,y:1030.1},0).wait(1).to({rotation:1.6,x:1074.3,y:1028.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:1071,y:1026.6},0).wait(1).to({rotation:0.3,x:1068.2,y:1025.3},0).wait(1).to({regX:156.1,regY:43.5,rotation:0,x:1130.6,y:1067},0).wait(1).to({regX:92.5,regY:1,rotation:-0.4,x:1067.7,y:1024.2},0).wait(1).to({rotation:-1.3,x:1069,y:1023.7},0).wait(1).to({rotation:-2.2,x:1070.4,y:1023.1},0).wait(1).to({regX:156.1,regY:43.5,rotation:-2.7,x:1136.9,y:1062.2},0).wait(1).to({regX:92.5,regY:1,rotation:-1.3,x:1068.9,y:1023.2},0).wait(1).to({rotation:1.4,x:1064.4,y:1024.3},0).wait(1).to({rotation:4.6,x:1059.2,y:1025.6},0).wait(1).to({rotation:7.8,x:1054.3,y:1027},0).wait(1).to({regX:156,regY:43.5,rotation:9.7,x:1106.9,y:1080.6},0).wait(1).to({regX:92.5,regY:1,rotation:9.5,x:1051.7,y:1027.9},0).wait(1).to({rotation:9.2,x:1052.2},0).wait(1).to({rotation:8.8,x:1052.8,y:1027.8},0).wait(1).to({regX:156,regY:43.5,rotation:8.5,x:1109.7,y:1079.2},0).wait(1).to({regX:92.5,regY:1,x:1053.2,y:1027.8},0).wait(1).to({y:1027.7},0).wait(1).to({x:1053.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.4},0).wait(2).to({rotation:8.3,x:1053.4},0).wait(1).to({x:1053.5},0).wait(1).to({rotation:8.2},0).wait(1).to({x:1053.6},0).wait(1).to({rotation:8.1},0).wait(1).to({x:1053.7},0).wait(1).to({rotation:8},0).wait(1).to({x:1053.8},0).wait(1).to({rotation:7.9,x:1053.9},0).wait(1).to({y:1027.6},0).wait(1).to({rotation:7.8},0).wait(1).to({x:1054},0).wait(1).to({regX:156,regY:43.6,x:1111.1,y:1078.4},0).wait(1).to({regX:92.5,regY:1,x:1054,y:1027.6},0).wait(1).to({rotation:7.7},0).wait(1).to({x:1054.1},0).wait(1).to({rotation:7.6,x:1054.2},0).wait(1).to({rotation:7.5},0).wait(2).to({rotation:7.4,x:1054.3},0).wait(1).to({rotation:7.3,x:1054.4},0).wait(1).to({regX:156,regY:43.6,x:1111.9,y:1077.9},0).wait(1).to({regX:92.5,regY:1,rotation:7.5,x:1055.3,y:1027.9},0).wait(1).to({rotation:7.8,x:1057.2,y:1028.6},0).wait(1).to({rotation:8.3,x:1059.6,y:1029.5},0).wait(1).to({rotation:8.8,x:1062.2,y:1030.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.3,x:1064.9,y:1031.4},0).wait(1).to({rotation:9.7,x:1067.3,y:1032.3},0).wait(1).to({regX:155.9,regY:43.6,rotation:10,x:1123.6,y:1085.6},0).wait(1).to({regX:92.5,regY:1,rotation:9.7,x:1067.4,y:1032.3},0).wait(1).to({rotation:9.1,x:1064.6,y:1031.3},0).wait(1).to({rotation:8.2,x:1061.2,y:1029.9},0).wait(1).to({rotation:7.4,x:1057.4,y:1028.5},0).wait(1).to({rotation:6.5,x:1053.7,y:1027.2},0).wait(1).to({rotation:5.7,x:1050.4,y:1025.9},0).wait(1).to({regX:155.9,regY:43.6,rotation:5.3,x:1107.7,y:1073.4},0).wait(1).to({regX:92.5,regY:1,rotation:5.6,x:1049.9,y:1025.7},0).wait(1).to({rotation:6.2,x:1052.7,y:1026.8},0).wait(1).to({rotation:7,x:1056.1,y:1028.2},0).wait(1).to({rotation:7.8,x:1059.7,y:1029.6},0).wait(1).to({rotation:8.6,x:1063,y:1030.8},0).wait(1).to({regX:155.9,regY:43.6,rotation:9,x:1120.8,y:1083.4},0).wait(1).to({regX:92.5,regY:1,rotation:8.8,x:1064.5,y:1031.4},0).wait(1).to({rotation:8.6,x:1063.3,y:1030.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.2,x:1061.9,y:1030.3},0).wait(1).to({rotation:7.8,x:1060.4,y:1029.7},0).wait(1).to({rotation:7.5,x:1059.1,y:1029.2},0).wait(1).to({regX:155.9,regY:43.6,rotation:7.3,x:1115.7,y:1079.1},0).wait(1).to({regX:92.5,regY:1,x:1058.5,y:1029},0).wait(1).to({rotation:7.4,x:1058.9,y:1029.1},0).wait(1).to({x:1059.5,y:1029.3},0).wait(1).to({rotation:7.5,x:1060.2,y:1029.5},0).wait(1).to({rotation:7.7,x:1061,y:1029.8},0).wait(1).to({rotation:7.8,x:1061.9,y:1030.1},0).wait(1).to({rotation:7.9,x:1062.7,y:1030.4},0).wait(1).to({rotation:8,x:1063.6,y:1030.6},0).wait(1).to({rotation:8.1,x:1064.4,y:1030.9},0).wait(1).to({rotation:8.3,x:1065.3,y:1031.1},0).wait(1).to({rotation:8.4,x:1066,y:1031.4},0).wait(1).to({rotation:8.5,x:1066.6,y:1031.6},0).wait(1).to({regX:155.9,regY:43.5,x:1123.2,y:1083},0).wait(1).to({regX:92.5,regY:1,rotation:8.4,x:1066.8,y:1031.7},0).wait(1).to({rotation:8.3,x:1066.3,y:1031.5},0).wait(1).to({rotation:8.2,x:1065.8,y:1031.2},0).wait(1).to({rotation:8,x:1065.1,y:1030.9},0).wait(1).to({rotation:7.7,x:1064.3,y:1030.6},0).wait(1).to({rotation:7.5,x:1063.6,y:1030.3},0).wait(1).to({rotation:7.3,x:1062.7,y:1030},0).wait(1).to({rotation:7,x:1061.9,y:1029.6},0).wait(1).to({rotation:6.8,x:1061.1,y:1029.3},0).wait(1).to({rotation:6.5,x:1060.3,y:1029},0).wait(1).to({rotation:6.3,x:1059.6,y:1028.6},0).wait(1).to({rotation:6.1,x:1059,y:1028.4},0).wait(1).to({regX:155.9,regY:43.5,x:1117.2,y:1077.1},0).wait(1).to({regX:92.5,regY:1,x:1059.1,y:1028.4},0).wait(1).to({rotation:6.2,x:1059.6,y:1028.6},0).wait(1).to({rotation:6.3,x:1060.4,y:1028.9},0).wait(1).to({rotation:6.4,x:1061.3,y:1029.2},0).wait(1).to({rotation:6.5,x:1062.2,y:1029.5},0).wait(1).to({rotation:6.6,x:1063.2,y:1029.8},0).wait(1).to({rotation:6.8,x:1064.1,y:1030.1},0).wait(1).to({rotation:6.9,x:1065,y:1030.4},0).wait(1).to({rotation:7,x:1065.7,y:1030.7},0).wait(1).to({regX:155.8,regY:43.5,x:1123.6,y:1080.5},0).wait(1).to({regX:92.5,regY:1,rotation:6.3,x:1067.2,y:1030.6},0).wait(1).to({rotation:4.9,x:1069.1,y:1030.2},0).wait(1).to({rotation:3.2,x:1071.7,y:1029.7},0).wait(1).to({rotation:1.5,x:1074.3,y:1029.4},0).wait(1).to({rotation:-0.2,x:1076.9,y:1029},0).wait(1).to({regX:155.9,regY:43.5,scaleX:1,scaleY:1,rotation:-1.2,x:1142.4,y:1069.9},0).wait(1).to({regX:92.5,regY:1,rotation:-0.8,x:1077.6,y:1029},0).wait(1).to({rotation:0,x:1076.3,y:1029.3},0).wait(1).to({rotation:0.8,x:1075,y:1029.6},0).wait(1).to({regX:155.8,regY:43.5,rotation:1.3,x:1136.2,y:1073.6},0).wait(1).to({regX:92.5,regY:1,x:1074.1,y:1029.7},0).wait(1).to({scaleX:1,scaleY:1},0).wait(2).to({x:1074},0).wait(3).to({x:1073.9,y:1029.6},0).wait(2).to({x:1073.8},0).wait(2).to({regX:155.8,regY:43.5,x:1135.9,y:1073.3},0).wait(1).to({regX:92.5,regY:1,rotation:1.1,x:1074.2,y:1029.5},0).wait(1).to({rotation:0.7,x:1074.9,y:1029.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:1075.6,y:1029.3},0).wait(1).to({regX:155.9,regY:43.5,rotation:0,x:1139.3,y:1071.7},0).wait(1).to({regX:92.5,regY:1,rotation:0.8,x:1074.8,y:1029.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:1072.2,y:1029.6},0).wait(1).to({rotation:4.6,x:1069.1,y:1030},0).wait(1).to({rotation:6.8,x:1066,y:1030.4},0).wait(1).to({rotation:8.8,x:1063.2,y:1030.9},0).wait(1).to({regX:155.9,regY:43.6,rotation:10,x:1116.5,y:1083.8},0).wait(1).to({regX:92.5,regY:1,rotation:9.5,x:1062.3,y:1031},0).wait(1).to({rotation:8.6,x:1063.7,y:1030.9},0).wait(1).to({rotation:7.6,x:1065.2,y:1030.8},0).wait(1).to({regX:155.8,regY:43.5,rotation:7,x:1123.6,y:1080.5},0).wait(1).to({regX:92.5,regY:1,x:1066.2,y:1030.7},0).wait(1).to({rotation:6.9},0).wait(1).to({rotation:6.8},0).wait(2).to({rotation:6.7,x:1066.1,y:1030.6},0).wait(1).to({rotation:6.6},0).wait(1).to({regX:155.8,regY:43.5,x:1124,y:1079.9},0).wait(1).to({regX:92.5,regY:1,x:1066.2,y:1030.7},0).wait(1).to({x:1066.4},0).wait(1).to({x:1066.7,y:1030.8},0).wait(1).to({rotation:6.7,x:1067.1,y:1031},0).wait(1).to({rotation:6.8,x:1067.6,y:1031.2},0).wait(1).to({rotation:6.9,x:1068,y:1031.4},0).wait(1).to({rotation:7,x:1068.6,y:1031.6},0).wait(1).to({rotation:7.1,x:1069.2,y:1031.8},0).wait(1).to({rotation:7.2,x:1069.9,y:1032.1},0).wait(1).to({rotation:7.3,x:1070.5,y:1032.3},0).wait(1).to({rotation:7.4,x:1071.2,y:1032.6},0).wait(1).to({rotation:7.5,x:1071.9,y:1032.9},0).wait(1).to({rotation:7.6,x:1072.7,y:1033.1},0).wait(1).to({rotation:7.8,x:1073.4,y:1033.4},0).wait(1).to({rotation:7.9,x:1074.2,y:1033.7},0).wait(1).to({rotation:8,x:1075,y:1034},0).wait(1).to({rotation:8.1,x:1075.8,y:1034.3},0).wait(1).to({rotation:8.3,x:1076.5,y:1034.7},0).wait(1).to({rotation:8.4,x:1077.4,y:1035},0).wait(1).to({rotation:8.5,x:1078.2,y:1035.3},0).wait(1).to({rotation:8.7,x:1079,y:1035.6},0).wait(1).to({rotation:8.8,x:1079.7,y:1035.9},0).wait(1).to({rotation:8.9,x:1080.5,y:1036.2},0).wait(1).to({rotation:9.1,x:1081.3,y:1036.5},0).wait(1).to({rotation:9.2,x:1082,y:1036.8},0).wait(1).to({rotation:9.3,x:1082.7,y:1037},0).wait(1).to({rotation:9.4,x:1083.3,y:1037.3},0).wait(1).to({rotation:9.5,x:1084,y:1037.5},0).wait(1).to({rotation:9.6,x:1084.5,y:1037.7},0).wait(1).to({rotation:9.7,x:1085,y:1037.9},0).wait(1).to({x:1085.3,y:1038},0).wait(1).to({regX:155.8,regY:43.5,x:1140.4,y:1090.5},0).wait(1).to({regX:92.5,regY:1,rotation:9.6,x:1085,y:1037.8},0).wait(1).to({rotation:9.3,x:1083.9,y:1037.3},0).wait(1).to({rotation:8.9,x:1082.4,y:1036.4},0).wait(1).to({rotation:8.4,x:1080.7,y:1035.5},0).wait(1).to({rotation:7.8,x:1078.8,y:1034.4},0).wait(1).to({rotation:7.2,x:1076.8,y:1033.3},0).wait(1).to({rotation:6.6,x:1074.7,y:1032.1},0).wait(1).to({rotation:6,x:1072.6,y:1031},0).wait(1).to({rotation:5.3,x:1070.5,y:1029.9},0).wait(1).to({rotation:4.8,x:1068.5,y:1028.8},0).wait(1).to({rotation:4.2,x:1066.8,y:1027.8},0).wait(1).to({rotation:3.8,x:1065.3,y:1027},0).wait(1).to({regX:155.9,regY:43.6,rotation:3.6,x:1125,y:1072.9},0).wait(1).to({regX:92.5,regY:1,rotation:3.5,x:1065.6,y:1026.7},0).wait(1).to({rotation:3.3,x:1067.7,y:1027.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:3,x:1070.3,y:1027.6},0).wait(1).to({rotation:2.7,x:1073,y:1028.2},0).wait(1).to({rotation:2.5,x:1075.5,y:1028.7},0).wait(1).to({regX:156,regY:43.6,rotation:2.3,x:1138.5,y:1073.9},0).wait(1).to({regX:92.5,regY:1,rotation:2.6,x:1077,y:1029.2},0).wait(1).to({rotation:3.4,x:1077.1,y:1029.8},0).wait(1).to({rotation:4.4,x:1077.2,y:1030.6},0).wait(1).to({rotation:5.5,x:1077.5,y:1031.5},0).wait(1).to({rotation:6.8,x:1077.7,y:1032.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.1,x:1078,y:1033.7},0).wait(1).to({rotation:9.5,x:1078.4,y:1034.8},0).wait(1).to({rotation:10.8,x:1078.7,y:1036},0).wait(1).to({rotation:12,x:1079.1,y:1037},0).wait(1).to({rotation:13,x:1079.4,y:1038},0).wait(1).to({regX:155.8,regY:43.5,rotation:13.5,x:1131.1,y:1094.5},0).wait(1).to({regX:92.5,regY:1,rotation:12.9,x:1079.8,y:1038.3},0).wait(1).to({rotation:12.3,x:1080,y:1037.9},0).wait(1).to({rotation:11.8,x:1080.2,y:1037.7},0).wait(1).to({rotation:11.2,x:1080.5,y:1037.4},0).wait(1).to({rotation:10.6,x:1080.6,y:1037.1},0).wait(1).to({rotation:10.1,x:1080.9,y:1036.8},0).wait(1).to({rotation:9.5,x:1081.2,y:1036.5},0).wait(1).to({rotation:8.9,x:1081.4,y:1036.2},0).wait(1).to({rotation:8.4,x:1081.6,y:1035.9},0).wait(1).to({regX:155.8,regY:43.5,rotation:7.8,x:1138.6,y:1086.2},0).wait(1).to({regX:92.5,regY:1,rotation:7.5,x:1081.4,y:1035.3},0).wait(1).to({rotation:7.3,x:1080.9,y:1034.9},0).wait(1).to({rotation:7,x:1080.5,y:1034.6},0).wait(1).to({rotation:6.8,x:1080,y:1034.2},0).wait(1).to({rotation:6.5,x:1079.5,y:1033.9},0).wait(1).to({rotation:6.3,x:1079,y:1033.5},0).wait(1).to({rotation:6,x:1078.5,y:1033.2},0).wait(1).to({rotation:5.8,x:1078.1,y:1032.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:1077.6,y:1032.5},0).wait(1).to({rotation:5.3,x:1077.1,y:1032.2},0).wait(1).to({rotation:5,x:1076.6,y:1031.8},0).wait(1).to({rotation:4.8,x:1076.1,y:1031.5},0).wait(1).to({rotation:4.5,x:1075.7,y:1031.1},0).wait(1).to({rotation:4.3,x:1075.3,y:1030.8},0).wait(1).to({rotation:4,x:1074.8,y:1030.4},0).wait(1).to({rotation:3.8,x:1074.3,y:1030.1},0).wait(1).to({rotation:3.5,x:1073.8,y:1029.8},0).wait(1).to({rotation:3.3,x:1073.4,y:1029.4},0).wait(1).to({regX:155.8,regY:43.4,rotation:3,x:1133.8,y:1074.7},0).wait(1).to({regX:92.5,regY:1,rotation:3.6,x:1074,y:1030},0).wait(1).to({rotation:4.1,x:1075.1,y:1030.9},0).wait(1).to({rotation:4.7,x:1076.1,y:1031.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.2,x:1077.2,y:1032.6},0).wait(1).to({regX:155.9,regY:43.5,rotation:5.8,x:1136.9,y:1081.9},0).wait(1).to({regX:92.5,regY:1,rotation:5.6,x:1077.8,y:1033},0).wait(1).to({rotation:5.3,x:1077.3,y:1032.6},0).wait(1).to({rotation:5.1,x:1076.8,y:1032.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.8,x:1076.3,y:1031.9},0).wait(1).to({rotation:4.6,x:1075.9,y:1031.5},0).wait(1).to({rotation:4.4,x:1075.4,y:1031.1},0).wait(1).to({rotation:4.1,x:1075,y:1030.7},0).wait(1).to({rotation:3.9,x:1074.5,y:1030.4},0).wait(1).to({rotation:3.6,x:1074,y:1030},0).wait(1).to({rotation:3.4,x:1073.6,y:1029.6},0).wait(1).to({rotation:3.1,x:1073.1,y:1029.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.9,x:1072.6,y:1028.9},0).wait(1).to({rotation:2.7,x:1072.2,y:1028.5},0).wait(1).to({rotation:2.4,x:1071.7,y:1028.2},0).wait(1).to({rotation:2.2,x:1071.2,y:1027.8},0).wait(1).to({rotation:1.9,x:1070.8,y:1027.4},0).wait(1).to({rotation:1.7,x:1070.3,y:1027.1},0).wait(1).to({rotation:1.5,x:1069.8,y:1026.7},0).wait(1).to({rotation:1.2,x:1069.4,y:1026.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,x:1069,y:1026},0).wait(1).to({rotation:0.7,x:1068.5,y:1025.6},0).wait(1).to({rotation:0.5,x:1068,y:1025.3},0).wait(1).to({rotation:0.2,x:1067.6,y:1024.9},0).wait(1).to({regX:156.1,regY:43.5,rotation:0,x:1130.6,y:1067},0).wait(1).to({regX:92.5,regY:1,rotation:-0.3,x:1065.5,y:1023.9},0).wait(1).to({rotation:-0.9,x:1063,y:1022.9},0).wait(1).to({rotation:-1.5,x:1060.2,y:1021.8},0).wait(1).to({regX:156.1,regY:43.5,rotation:-2,x:1122.8,y:1061.2},0).wait(1).to({regX:92.5,regY:1,rotation:-2.1,x:1057.1,y:1020.7},0).wait(1).to({rotation:-2.4,x:1055.7,y:1020.3},0).wait(1).to({rotation:-2.7,x:1054.2,y:1019.7},0).wait(1).to({rotation:-3.1,x:1052.5,y:1019.2},0).wait(1).to({rotation:-3.4,x:1050.8,y:1018.6},0).wait(1).to({regX:156.1,regY:43.5,rotation:-3.7,x:1115.7,y:1056.4},0).wait(1).to({regX:92.5,regY:1,x:1049.6,y:1018.1},0).wait(1).to({rotation:-3.6,x:1049.9,y:1018.2},0).wait(1).to({rotation:-3.5,x:1050.2},0).wait(1).to({rotation:-3.4,x:1050.5,y:1018.3},0).wait(1).to({regX:156.1,regY:43.5,rotation:-3.3,x:1116.6,y:1057},0).wait(1).to({regX:92.5,regY:1,rotation:-3.5,x:1049.9,y:1018},0).wait(1).to({rotation:-3.8,x:1048.7,y:1017.7},0).wait(1).to({rotation:-4.1,x:1047.3,y:1017.3},0).wait(1).to({regX:156.1,regY:43.5,rotation:-4.4,x:1112.9,y:1054.5},0).wait(1).to({regX:92.5,regY:1,rotation:-4.2,x:1047,y:1017.4},0).wait(1).to({rotation:-3.8,x:1048.8,y:1018.2},0).wait(1).to({rotation:-3.3,x:1051.1,y:1019.2},0).wait(1).to({rotation:-2.8,x:1053.7,y:1020.5},0).wait(1).to({rotation:-2.1,x:1056.6,y:1021.8},0).wait(1).to({rotation:-1.4,x:1059.7,y:1023.3},0).wait(1).to({rotation:-0.7,x:1062.8,y:1024.7},0).wait(1).to({rotation:0,x:1066.1,y:1026.3},0).wait(1).to({rotation:0.7,x:1069.5,y:1027.8},0).wait(1).to({rotation:1.4,x:1072.8,y:1029.4},0).wait(1).to({rotation:2.2,x:1076.1,y:1030.9},0).wait(1).to({rotation:2.8,x:1079.2,y:1032.3},0).wait(1).to({regX:156.3,regY:43.5,rotation:3.3,x:1142.3,y:1079.4},0).wait(1).to({regX:92.5,regY:1,x:1081.1,y:1033.6},0).wait(1).to({x:1081.4,y:1034},0).wait(1).to({rotation:3.4,x:1081.8,y:1034.5},0).wait(1).to({rotation:3.5,x:1082.1,y:1035.1},0).wait(1).to({x:1082.5,y:1035.7},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1036},0).wait(1).to({y:1035.8},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.4},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(62).to({regX:92.5,regY:1,rotation:3.7,x:1083.7,y:1036.6},0).wait(1).to({rotation:4.1,x:1085.3,y:1037.5},0).wait(1).to({rotation:4.6,x:1087.3,y:1038.5},0).wait(1).to({rotation:5.1,x:1089.5,y:1039.6},0).wait(1).to({rotation:5.6,x:1091.9,y:1040.8},0).wait(1).to({rotation:6.1,x:1094.1,y:1042},0).wait(1).to({regX:156.3,regY:43.5,rotation:6.5,x:1154.4,y:1092.4},0).wait(1).to({regX:92.5,regY:1,rotation:6.6,x:1095.9,y:1042.9},0).wait(1).to({x:1096.2,y:1043.1},0).wait(1).to({rotation:6.7,x:1096.6,y:1043.3},0).wait(1).to({rotation:6.8,x:1097,y:1043.6},0).wait(1).to({rotation:6.9,x:1097.5,y:1043.8},0).wait(1).to({rotation:7.1,x:1098.1,y:1044.1},0).wait(1).to({rotation:7.2,x:1098.6,y:1044.5},0).wait(1).to({rotation:7.3,x:1099.1,y:1044.8},0).wait(1).to({rotation:7.4,x:1099.6,y:1045.1},0).wait(1).to({rotation:7.6,x:1100.2,y:1045.4},0).wait(1).to({rotation:7.7,x:1100.7,y:1045.8},0).wait(1).to({rotation:7.8,x:1101.3,y:1046.1},0).wait(1).to({rotation:7.9,x:1101.8,y:1046.3},0).wait(1).to({regX:156.3,regY:43.5,rotation:8,x:1159.4,y:1097.5},0).wait(1).to({regX:92.5,regY:1,rotation:7.5,x:1099.7,y:1045},0).wait(1).to({rotation:6.5,x:1095.4,y:1042.3},0).wait(1).to({rotation:5.4,x:1090.4,y:1039.1},0).wait(1).to({rotation:4.2,x:1085.2,y:1035.8},0).wait(1).to({regX:156.3,regY:43.5,rotation:3.3,x:1142.3,y:1079.4},0).wait(1).to({regX:92.5,regY:1,x:1081.1,y:1033.6},0).wait(1).to({x:1081.4,y:1034},0).wait(1).to({rotation:3.4,x:1081.8,y:1034.5},0).wait(1).to({rotation:3.5,x:1082.1,y:1035.1},0).wait(1).to({x:1082.5,y:1035.7},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1036},0).wait(1).to({y:1035.8},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.4},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(12).to({regX:92.5,regY:1,x:1082.8,y:1035.8},0).wait(1).to({y:1035.2},0).wait(1).to({y:1034.5},0).wait(1).to({y:1033.8},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1079.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1034.6},0).wait(1).to({y:1037},0).wait(1).to({y:1039.8},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1088.4},0).wait(12).to({regX:92.5,regY:1,x:1082.6,y:1041.2},0).wait(1).to({x:1082.2,y:1039.4},0).wait(1).to({rotation:3.4,x:1081.8,y:1037.3},0).wait(1).to({rotation:3.3,x:1081.4,y:1035.1},0).wait(1).to({regX:156.3,regY:43.5,x:1142.3,y:1079.4},0).wait(1).to({regX:92.5,regY:1,x:1081.2,y:1033.6},0).wait(1).to({rotation:3.4,x:1081.6,y:1034.2},0).wait(1).to({x:1081.9,y:1034.9},0).wait(1).to({rotation:3.5,x:1082.4,y:1035.6},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1036},0).wait(1).to({y:1035.8},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.4},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(11).to({regX:92.5,regY:1,rotation:4.1,x:1083.6,y:1036.9},0).wait(1).to({rotation:5.2,x:1085,y:1038.4},0).wait(1).to({rotation:6.6,x:1086.9,y:1040.2},0).wait(1).to({rotation:8.1,x:1088.9,y:1042.2},0).wait(1).to({rotation:9.6,x:1091.1,y:1044.3},0).wait(1).to({rotation:11.1,x:1093.2,y:1046.4},0).wait(1).to({regX:156.3,regY:43.4,rotation:12.2,x:1148.2,y:1103},0).wait(1).to({regX:92.5,regY:1,rotation:12,x:1095.3,y:1048},0).wait(1).to({rotation:11.4,x:1096.1,y:1047.8},0).wait(1).to({rotation:10.9,x:1096.9,y:1047.6},0).wait(1).to({rotation:10.2,x:1097.9,y:1047.5},0).wait(1).to({regX:156.3,regY:43.4,rotation:9.7,x:1154.4,y:1099.9},0).wait(1).to({regX:92.5,regY:1,rotation:9.9,x:1098.5,y:1047.4},0).wait(1).to({rotation:10.2,x:1097.9,y:1047.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.6,x:1097.2,y:1047.7},0).wait(1).to({rotation:11,x:1096.6,y:1047.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:11.3,x:1150.4,y:1102},0).wait(1).to({regX:92.5,regY:1,rotation:11.2,x:1096.3,y:1047.9},0).wait(1).to({rotation:11,x:1096.6,y:1047.8},0).wait(1).to({rotation:10.8,x:1097,y:1047.7},0).wait(1).to({rotation:10.5,x:1097.5,y:1047.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.2,x:1097.9,y:1047.5},0).wait(1).to({rotation:9.9,x:1098.4,y:1047.4},0).wait(1).to({regX:156.3,regY:43.4,rotation:9.7,x:1154.4,y:1099.9},0).wait(1).to({regX:92.5,regY:1,rotation:9.2,x:1096.1,y:1046.1},0).wait(1).to({rotation:8,x:1090.9,y:1043.7},0).wait(1).to({rotation:6.6,x:1084.8,y:1040.8},0).wait(1).to({rotation:5.1,x:1078.1,y:1037.6},0).wait(1).to({rotation:3.5,x:1071.2,y:1034.4},0).wait(1).to({rotation:2,x:1064.3,y:1031.3},0).wait(1).to({regX:156.3,regY:43.4,rotation:0.8,x:1122.5,y:1072.2},0).wait(1).to({regX:92.5,regY:1,rotation:1,x:1061.2,y:1029.5},0).wait(1).to({rotation:1.5,x:1064.9,y:1030.6},0).wait(1).to({rotation:2,x:1069.4,y:1032},0).wait(1).to({rotation:2.5,x:1074.2,y:1033.5},0).wait(1).to({rotation:3.1,x:1079,y:1035},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1036},0).wait(1).to({y:1035.8},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.4},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(16).to({rotation:-0.7,x:1128,y:1069.4},0).wait(1).to({regX:92.5,regY:1,rotation:-1,x:1062.4,y:1027.2},0).wait(1).to({rotation:-1.5,x:1060,y:1026.3},0).wait(1).to({regX:156.3,regY:43.4,rotation:-1.9,x:1123.3,y:1065.8},0).wait(1).to({regX:92.5,regY:1,rotation:-1.6,x:1059.5,y:1026.1},0).wait(1).to({rotation:-1.1,x:1061.8,y:1027},0).wait(1).to({regX:156.3,regY:43.4,rotation:-0.7,x:1128,y:1069.4},0).wait(1).to({regX:92.5,regY:1,rotation:-0.9,x:1062.9,y:1027.4},0).wait(1).to({rotation:-1.2,x:1061.2,y:1026.8},0).wait(1).to({rotation:-1.6,x:1059.4,y:1026.1},0).wait(1).to({regX:156.3,regY:43.4,rotation:-1.9,x:1123.3,y:1065.8},0).wait(1).to({regX:92.5,regY:1,rotation:-1.6,x:1059.6,y:1026.2},0).wait(1).to({rotation:-0.8,x:1062.8,y:1027.7},0).wait(1).to({rotation:0.2,x:1067.3,y:1029.7},0).wait(1).to({rotation:1.3,x:1072.3,y:1031.9},0).wait(1).to({rotation:2.5,x:1077.7,y:1034.3},0).wait(1).to({rotation:3.7,x:1083,y:1036.7},0).wait(1).to({rotation:4.7,x:1087.7,y:1038.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:5.3,x:1150,y:1088.2},0).wait(1).to({regX:92.5,regY:1,rotation:5.1,x:1089.6,y:1039.6},0).wait(1).to({rotation:4.7,x:1087.9,y:1038.5},0).wait(1).to({rotation:4.3,x:1086,y:1037.2},0).wait(1).to({rotation:3.8,x:1084,y:1036},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(21).to({regX:92.5,regY:1,rotation:3.2,x:1081.3,y:1035.6},0).wait(1).to({rotation:2.4,x:1077.6,y:1034.1},0).wait(1).to({rotation:1.4,x:1072.9,y:1032.1},0).wait(1).to({rotation:0.2,x:1067.6,y:1030},0).wait(1).to({rotation:-1,x:1061.9,y:1027.8},0).wait(1).to({rotation:-2.2,x:1056.4,y:1025.5},0).wait(1).to({rotation:-3.3,x:1051.5,y:1023.6},0).wait(1).to({regX:156.3,regY:43.5,rotation:-3.9,x:1115.4,y:1060.5},0).wait(1).to({regX:92.5,regY:1,rotation:-3.6,x:1050.2,y:1022.8},0).wait(1).to({rotation:-3.1,x:1052.6,y:1023.7},0).wait(1).to({regX:156.3,regY:43.5,rotation:-2.7,x:1120.3,y:1063.8},0).wait(25).to({regX:92.5,regY:1,rotation:-2.3,x:1056.1,y:1025},0).wait(1).to({rotation:-1.5,x:1059.8,y:1026.3},0).wait(1).to({rotation:-0.5,x:1064.4,y:1028.1},0).wait(1).to({rotation:0.7,x:1069.6,y:1030.1},0).wait(1).to({rotation:1.9,x:1075,y:1032.2},0).wait(1).to({rotation:2.9,x:1079.9,y:1034},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1081.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1035.3},0).wait(1).to({y:1035.6},0).wait(1).to({y:1035.9},0).wait(1).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(15).to({regX:92.5,regY:1,rotation:3.4,x:1082.1,y:1035.7},0).wait(1).to({rotation:3,x:1080.9,y:1034.9},0).wait(1).to({rotation:2.6,x:1079.5,y:1034},0).wait(1).to({rotation:2.2,x:1078,y:1032.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:1.8,x:1139.2,y:1076.5},0).wait(1).to({regX:92.5,regY:1,rotation:2,x:1077.4,y:1032.6},0).wait(1).to({rotation:2.4,x:1078.6,y:1033.4},0).wait(1).to({rotation:2.8,x:1080,y:1034.3},0).wait(1).to({rotation:3.2,x:1081.6,y:1035.3},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,rotation:3.4,x:1082.1,y:1035.7},0).wait(1).to({rotation:3,x:1080.9,y:1034.9},0).wait(1).to({rotation:2.6,x:1079.5,y:1034},0).wait(1).to({rotation:2.2,x:1078,y:1032.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:1.8,x:1139.2,y:1076.5},0).wait(1).to({regX:92.5,regY:1,rotation:2,x:1077.4,y:1032.6},0).wait(1).to({rotation:2.4,x:1078.6,y:1033.4},0).wait(1).to({rotation:2.8,x:1080,y:1034.3},0).wait(1).to({rotation:3.2,x:1081.6,y:1035.3},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,rotation:3.3,x:1081.9,y:1035.5},0).wait(1).to({rotation:2.8,x:1080.2,y:1034.4},0).wait(1).to({rotation:2.3,x:1078.3,y:1033.2},0).wait(1).to({regX:156.3,regY:43.4,rotation:1.8,x:1139.2,y:1076.5},0).wait(1).to({regX:92.5,regY:1,rotation:1.9,x:1077.1,y:1032.4},0).wait(1).to({rotation:2.2,x:1077.9,y:1032.9},0).wait(1).to({rotation:2.4,x:1078.8,y:1033.5},0).wait(1).to({rotation:2.7,x:1079.8,y:1034.2},0).wait(1).to({rotation:3,x:1080.9,y:1034.9},0).wait(1).to({rotation:3.3,x:1081.9,y:1035.6},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1082.4},0).wait(10).to({regX:92.5,regY:1,x:1082.6,y:1036.1},0).wait(1).to({x:1081.9,y:1035.7},0).wait(1).to({rotation:3.4,x:1080.8,y:1035.1},0).wait(1).to({rotation:3.3,x:1079.4,y:1034.3},0).wait(1).to({rotation:3.1,x:1077.7,y:1033.4},0).wait(1).to({rotation:2.9,x:1075.7,y:1032.3},0).wait(1).to({rotation:2.8,x:1073.4,y:1031},0).wait(1).to({regX:156.3,regY:43.5,scaleX:1,scaleY:1,rotation:2.5,x:1132.6,y:1074.9},0).wait(1).to({regX:92.5,regY:1,scaleX:1,scaleY:1,rotation:2.4,x:1068.1,y:1029.8},0).wait(1).to({rotation:2.2,x:1065.2,y:1030.1},0).wait(1).to({rotation:2,x:1062,y:1030.3},0).wait(1).to({regX:156.3,regY:43.5,rotation:1.8,x:1121.1,y:1075},0).wait(1).to({regX:92.5,regY:1,x:1058.7,y:1029.9},0).wait(1).to({y:1029.3},0).wait(1).to({regX:156.3,regY:43.5,x:1121.1,y:1073},0).wait(1).to({regX:92.5,regY:1,x:1058.7,y:1028.6},0).wait(5).to({regX:156.3,regY:43.5,x:1121.1,y:1073},0).wait(1).to({regX:92.5,regY:1,rotation:1.6,x:1061.1,y:1028.4},0).wait(1).to({rotation:1.5,x:1063.7,y:1028.3},0).wait(1).to({rotation:1.4,x:1066.3,y:1028.2},0).wait(1).to({rotation:1.3,x:1069,y:1028.1},0).wait(1).to({rotation:1.1,x:1071.7,y:1028},0).wait(1).to({regX:156.3,regY:43.5,scaleX:1,scaleY:1,rotation:1,x:1137.5,y:1071.4},0).wait(1).to({regX:92.5,regY:1,rotation:0.9,x:1077.2,y:1030.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.8,x:1080,y:1032.5},0).wait(1).to({rotation:0.6,x:1082.9,y:1034.8},0).wait(1).to({regX:156.4,regY:43.5,rotation:0.5,x:1149.1,y:1080.3},0).wait(1).to({regX:92.5,regY:1,x:1085.6,y:1036.3},0).wait(1).to({y:1035.3},0).wait(1).to({regX:156.4,regY:43.5,x:1149.1,y:1077.3},0).wait(1).to({regX:92.5,regY:1,x:1085.6,y:1034.2},0).wait(4).to({regX:156.4,regY:43.5,x:1149.1,y:1077.3},0).wait(1).to({regX:92.5,regY:1,rotation:0.8,x:1085.3,y:1033.9},0).wait(1).to({rotation:1.2,x:1085,y:1033.7},0).wait(1).to({rotation:1.5,x:1084.7,y:1033.3},0).wait(1).to({rotation:1.8,x:1084.3,y:1033.1},0).wait(1).to({rotation:2.2,x:1084,y:1032.8},0).wait(1).to({regX:156.3,regY:43.5,rotation:2.5,x:1145.6,y:1077.8},0).wait(1).to({regX:92.5,regY:1,rotation:2.9,x:1083.4,y:1033.7},0).wait(1).to({rotation:3.2,x:1083.1,y:1034.9},0).wait(1).to({regX:156.3,regY:43.4,rotation:3.5,x:1143.8,y:1082.4},0).wait(1).to({regX:92.5,regY:1,x:1082.8,y:1036.1},0).wait(2).to({regX:156.3,regY:43.4,x:1143.8,y:1082.4},0).wait(3));

	// ll_s_tie
	this.instance_3 = new lib.ll_s_tieallz();
	this.instance_3.setTransform(934.8,940.7,1,1,0,0,0,14.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:16.2,regY:45.5,rotation:-0.3,x:934.7,y:970.9},0).wait(1).to({rotation:-0.7,x:933.1,y:971.1},0).wait(1).to({rotation:-1,x:931.4,y:971.2},0).wait(1).to({regX:14.8,regY:15.4,rotation:-1.2,x:928.4,y:941.3},0).wait(1).to({regX:16.2,regY:45.5,x:931,y:971.3},0).wait(1).to({rotation:-1.1,x:932.6},0).wait(1).to({rotation:-1,x:934.6,y:971.2},0).wait(1).to({rotation:-0.9,x:937.1},0).wait(1).to({rotation:-0.8,x:939.8,y:971.1},0).wait(1).to({rotation:-0.6,x:942.7,y:971},0).wait(1).to({rotation:-0.5,x:945.6,y:970.9},0).wait(1).to({rotation:-0.3,x:948.5},0).wait(1).to({rotation:-0.2,x:951.3,y:970.8},0).wait(1).to({rotation:-0.1,x:953.6,y:970.7},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:953.3,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,rotation:0.1,x:954.7,y:970.7},0).wait(1).to({rotation:0.2,x:954.6},0).wait(1).to({rotation:0.4,x:954.5},0).wait(1).to({rotation:0.7,x:954.3},0).wait(1).to({rotation:0.9,x:954.2},0).wait(1).to({regX:14.8,regY:15.4,rotation:1,x:953.3,y:940.6},0).wait(3).to({x:953.8},0).wait(1).to({regX:16.2,regY:45.5,x:954,y:970.7},0).wait(1).to({x:952.3},0).wait(1).to({x:950},0).wait(1).to({x:947.3},0).wait(1).to({x:944.2},0).wait(1).to({x:940.9},0).wait(1).to({x:937.5},0).wait(1).to({x:934.1},0).wait(1).to({x:930.8},0).wait(1).to({x:927.7},0).wait(1).to({x:925.1},0).wait(1).to({regX:14.8,regY:15.4,x:923,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:924.4,y:970.7},0).wait(1).to({rotation:1.2,x:926,y:970.6},0).wait(1).to({rotation:1.3,x:928.3,y:970.5},0).wait(1).to({regX:14.8,regY:15.4,rotation:1.5,x:930.3,y:940.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:1.3,x:929.8,y:970.4},0).wait(1).to({rotation:1,x:928.8,y:970.5},0).wait(1).to({rotation:0.8,x:927.7},0).wait(1).to({rotation:0.5,x:926.6,y:970.6},0).wait(1).to({rotation:0.3,x:925.5,y:970.7},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:923,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:924.4,y:970.7},0).wait(22).to({regX:14.8,regY:15.4,x:923,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.1,x:923.8,y:970.7},0).wait(1).to({rotation:-0.3,x:922.6,y:970.9},0).wait(1).to({rotation:-0.6,x:921.1,y:971.1},0).wait(1).to({rotation:-0.8,x:919.6,y:971.3},0).wait(1).to({regX:14.8,regY:15.4,rotation:-1,x:916.8,y:941.4},0).wait(1).to({regX:16.2,regY:45.5,x:919.2,y:971.4},0).wait(1).to({x:920.4},0).wait(1).to({rotation:-0.9,x:922.3},0).wait(1).to({rotation:-0.8,x:924.6,y:971.3},0).wait(1).to({x:927.2},0).wait(1).to({rotation:-0.7,x:930.1,y:971.2},0).wait(1).to({rotation:-0.6,x:933.2,y:971.1},0).wait(1).to({rotation:-0.5,x:936.3},0).wait(1).to({rotation:-0.4,x:939.6,y:971},0).wait(1).to({rotation:-0.3,x:942.8,y:970.9},0).wait(1).to({rotation:-0.2,x:946},0).wait(1).to({x:949,y:970.8},0).wait(1).to({rotation:-0.1,x:951.7},0).wait(1).to({rotation:0,x:953.7,y:970.7},0).wait(1).to({regX:14.8,regY:15.4,x:953.3,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:954.5,y:970.7},0).wait(1).to({x:954.2},0).wait(1).to({x:953.6},0).wait(1).to({x:953},0).wait(1).to({x:952.3},0).wait(1).to({x:951.5},0).wait(1).to({x:950.7},0).wait(1).to({x:949.9},0).wait(1).to({x:949.2},0).wait(1).to({x:948.6},0).wait(1).to({regX:14.8,regY:15.4,x:947,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:950.4,y:970.7},0).wait(1).to({x:952.5,y:970.6},0).wait(1).to({x:954.5},0).wait(1).to({x:956.6},0).wait(1).to({x:958.6,y:970.5},0).wait(1).to({x:960.6},0).wait(1).to({x:962.6},0).wait(1).to({x:964.5,y:970.4},0).wait(1).to({regX:14.8,regY:15.4,x:965.1,y:940.3},0).wait(1).to({regX:16.2,regY:45.5,x:966.5,y:970.4},0).wait(7).to({regX:14.8,regY:15.3,x:965.1,y:940.3},0).wait(1).to({regX:16.2,regY:45.5,x:966.5,y:970.5},0).wait(18).to({regX:14.8,regY:15.4,x:965.1,y:940.3},0).wait(1).to({regX:16.2,regY:45.5,x:966.2,y:970.4},0).wait(1).to({x:965.4},0).wait(1).to({x:964.2},0).wait(1).to({x:962.8},0).wait(1).to({x:961.1},0).wait(1).to({x:959.2,y:970.5},0).wait(1).to({x:957.2},0).wait(1).to({x:955.1},0).wait(1).to({x:952.9},0).wait(1).to({x:950.6},0).wait(1).to({x:948.2},0).wait(1).to({x:945.8},0).wait(1).to({x:943.4,y:970.6},0).wait(1).to({x:941},0).wait(1).to({x:938.6},0).wait(1).to({x:936.2},0).wait(1).to({x:933.9},0).wait(1).to({x:931.7},0).wait(1).to({x:929.6,y:970.7},0).wait(1).to({x:927.7},0).wait(1).to({x:926.1},0).wait(1).to({x:924.9},0).wait(1).to({regX:14.8,regY:15.4,x:923,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:925.8,y:970.7},0).wait(1).to({x:929.1},0).wait(1).to({x:933.1},0).wait(1).to({x:937.5},0).wait(1).to({x:941.9},0).wait(1).to({x:945.9},0).wait(1).to({regX:14.8,regY:15.4,x:946.7,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:947.1,y:970.7},0).wait(1).to({x:944.9},0).wait(1).to({x:942.2},0).wait(1).to({x:939.3},0).wait(1).to({x:936.3},0).wait(1).to({x:933.7},0).wait(1).to({regX:14.8,regY:15.4,x:930.9,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:932.6,y:970.7},0).wait(1).to({x:933.3},0).wait(1).to({x:934.1},0).wait(1).to({x:935.1},0).wait(1).to({x:936},0).wait(1).to({x:936.9},0).wait(1).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.2,y:970.7},0).wait(1).to({x:936.9},0).wait(1).to({x:936.4,y:970.8},0).wait(1).to({x:935.9},0).wait(1).to({x:935.2,y:970.9},0).wait(1).to({x:934.5,y:971},0).wait(1).to({x:933.7,y:971.1},0).wait(1).to({x:932.8},0).wait(1).to({x:931.9,y:971.2},0).wait(1).to({x:931,y:971.3},0).wait(1).to({x:930.1,y:971.4},0).wait(1).to({x:929.1,y:971.5},0).wait(1).to({x:928.2,y:971.6},0).wait(1).to({x:927.2,y:971.7},0).wait(1).to({x:926.3,y:971.8},0).wait(1).to({x:925.3,y:971.9},0).wait(1).to({x:924.4,y:972},0).wait(1).to({x:923.5,y:972.1},0).wait(1).to({x:922.7},0).wait(1).to({x:921.9,y:972.2},0).wait(1).to({x:921.3,y:972.3},0).wait(1).to({x:920.8},0).wait(1).to({regX:14.8,regY:15.5,x:919.2,y:942.3},0).wait(1).to({regX:16.2,regY:45.5,x:920.6,y:972.3},0).wait(8).to({x:920.7},0).wait(10).to({x:920.8},0).wait(12).to({regX:14.9,regY:15.4,x:919.5,y:942.3},0).wait(1).to({regX:16.2,regY:45.5,x:919.8,y:972.5},0).wait(1).to({x:917.8,y:972.8},0).wait(1).to({x:915.4,y:973.1},0).wait(1).to({x:913.1,y:973.4},0).wait(1).to({regX:14.9,regY:15.5,x:910.4,y:943.6},0).wait(1).to({regX:16.2,regY:45.5,x:912.3,y:973.5},0).wait(1).to({x:913.9,y:973.4},0).wait(1).to({x:916.2,y:973.2},0).wait(1).to({x:918.9,y:973},0).wait(1).to({x:922,y:972.8},0).wait(1).to({x:925.3,y:972.5},0).wait(1).to({x:928.9,y:972.2},0).wait(1).to({x:932.5,y:971.9},0).wait(1).to({x:936.3,y:971.6},0).wait(1).to({x:940.1,y:971.4},0).wait(1).to({x:943.9,y:971.1},0).wait(1).to({x:947.7,y:970.8},0).wait(1).to({x:951.3,y:970.5},0).wait(1).to({x:954.6,y:970.2},0).wait(1).to({x:957.6,y:970},0).wait(1).to({x:959.9,y:969.8},0).wait(1).to({regX:14.8,regY:15.4,x:959.6,y:939.7},0).wait(1).to({regX:16.2,regY:45.5,x:959.9,y:969.8},0).wait(1).to({x:957.4,y:969.9},0).wait(1).to({x:954.3,y:970.1},0).wait(1).to({x:950.7,y:970.2},0).wait(1).to({x:946.9,y:970.4},0).wait(1).to({x:943,y:970.5},0).wait(1).to({x:939.4,y:970.7},0).wait(1).to({x:936.2,y:970.8},0).wait(1).to({regX:14.8,regY:15.3,scaleX:1,scaleY:1,x:933.2,y:940.8},0).wait(1).to({regX:16.2,regY:45.5,x:935.1,y:971},0).wait(1).to({x:936.2,y:970.9},0).wait(1).to({x:937.7},0).wait(1).to({x:939.2,y:970.8},0).wait(1).to({x:940.7,y:970.7},0).wait(1).to({x:942.1,y:970.6},0).wait(1).to({regX:14.9,regY:15.3,x:941.5,y:940.5},0).wait(1).to({regX:16.2,regY:45.5,x:943.3,y:970.5},0).wait(1).to({x:944.5,y:970.4},0).wait(1).to({x:945.9,y:970.3},0).wait(1).to({x:947.5,y:970.1},0).wait(1).to({x:949,y:969.9},0).wait(1).to({x:950.4,y:969.8},0).wait(1).to({regX:14.9,regY:15.3,x:949.9,y:939.6},0).wait(1).to({regX:16.2,regY:45.5,x:951.1,y:969.7},0).wait(1).to({x:951},0).wait(1).to({x:950.9},0).wait(1).to({x:950.7},0).wait(1).to({regX:14.9,regY:15.4,x:949.4,y:939.6},0).wait(1).to({regX:16.2,regY:45.5,x:951.1,y:969.6},0).wait(1).to({x:952.1},0).wait(1).to({x:953.3},0).wait(1).to({x:954.7,y:969.5},0).wait(1).to({x:956.2},0).wait(1).to({x:957.6},0).wait(1).to({x:958.8,y:969.4},0).wait(1).to({regX:14.9,regY:15.3,x:958.1,y:939.3},0).wait(1).to({regX:16.2,regY:45.5,x:958.8,y:969.5},0).wait(1).to({x:957.5},0).wait(1).to({x:956,y:969.6},0).wait(1).to({x:954.4},0).wait(1).to({x:953,y:969.7},0).wait(1).to({regX:14.9,regY:15.4,x:950.9,y:939.6},0).wait(1).to({regX:16.2,regY:45.5,x:952.1,y:969.6},0).wait(3).to({regX:14.9,regY:15.4,x:950.8,y:939.6},0).wait(1).to({regX:16.2,regY:45.5,x:952.1,y:969.6},0).wait(4).to({regX:14.9,regY:15.4,x:950.9,y:939.6},0).wait(1).to({regX:16.2,regY:45.5,x:952.1,y:969.7},0).wait(1).to({x:951.9},0).wait(1).to({x:951.8,y:969.8},0).wait(1).to({x:951.5},0).wait(1).to({x:951.3,y:969.9},0).wait(1).to({x:951.1},0).wait(1).to({x:950.8,y:970},0).wait(1).to({x:950.6,y:970.1},0).wait(1).to({x:950.4},0).wait(1).to({regX:14.9,regY:15.4,x:949.1,y:940.1},0).wait(1).to({regX:16.2,regY:45.5,x:950.4,y:970.2},0).wait(5).to({regX:14.9,regY:15.4,x:949.1,y:940.1},0).wait(1).to({regX:16.2,regY:45.5,x:950.9,y:970.1},0).wait(1).to({x:952.3},0).wait(1).to({x:954.2,y:970},0).wait(1).to({x:956.3,y:969.9},0).wait(1).to({x:958.7},0).wait(1).to({x:961.1,y:969.8},0).wait(1).to({x:963.6,y:969.7},0).wait(1).to({x:966,y:969.6},0).wait(1).to({x:968.2,y:969.5},0).wait(1).to({x:970.1},0).wait(1).to({regX:14.9,regY:15.4,x:969.7,y:939.4},0).wait(1).to({regX:16.2,regY:45.5,x:970.1,y:969.5},0).wait(1).to({x:968.4,y:969.6},0).wait(1).to({x:966.4,y:969.7},0).wait(1).to({x:964.5,y:969.8},0).wait(1).to({regX:14.9,regY:15.4,x:962.1,y:939.8},0).wait(1).to({regX:16.2,regY:45.5,x:964.4,y:969.9},0).wait(1).to({x:966.5,y:970.1},0).wait(1).to({x:969,y:970.3},0).wait(1).to({scaleX:1,scaleY:1,x:971.4,y:970.5},0).wait(1).to({regX:14.9,regY:15.4,x:971.6,y:940.6},0).wait(3).to({regX:16.2,regY:45.5,x:973.1,y:970.6},0).wait(1).to({x:973.7},0).wait(1).to({x:974.6},0).wait(1).to({x:975.5},0).wait(1).to({scaleX:1,scaleY:1,x:976.4},0).wait(1).to({x:977.3},0).wait(1).to({x:978},0).wait(1).to({regX:15,regY:15.4,x:977.2,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:978.3,y:970.6},0).wait(1).to({scaleX:1,scaleY:1,x:978},0).wait(1).to({x:977.7},0).wait(1).to({x:977.3},0).wait(1).to({x:977},0).wait(1).to({regX:15,regY:15.4,x:975.7,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:976.8,y:970.6},0).wait(1).to({x:976.6},0).wait(1).to({x:976.4},0).wait(1).to({x:976.2},0).wait(1).to({x:975.9},0).wait(1).to({x:975.7},0).wait(1).to({x:975.5},0).wait(1).to({regX:15,regY:15.5,x:974.2,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:976.3,y:970.7},0).wait(1).to({x:978.2,y:970.9},0).wait(1).to({x:980.2,y:971.1},0).wait(1).to({regX:15.1,regY:15.4,x:980.3,y:941.4},0).wait(1).to({regX:16.2,regY:45.5,x:981.1,y:971.4},0).wait(1).to({x:980.3},0).wait(1).to({x:979.1,y:971.5},0).wait(1).to({x:977.6,y:971.6},0).wait(1).to({x:975.9},0).wait(1).to({x:973.9,y:971.7},0).wait(1).to({x:971.8,y:971.8},0).wait(1).to({x:969.5,y:971.9},0).wait(1).to({x:967.2,y:972},0).wait(1).to({x:964.7,y:972.2},0).wait(1).to({x:962.1,y:972.3},0).wait(1).to({x:959.4,y:972.4},0).wait(1).to({x:956.7,y:972.5},0).wait(1).to({x:953.9,y:972.6},0).wait(1).to({x:951.2,y:972.8},0).wait(1).to({x:948.4,y:972.9},0).wait(1).to({x:945.6,y:973},0).wait(1).to({x:942.8,y:973.2},0).wait(1).to({x:940,y:973.3},0).wait(1).to({x:937.3,y:973.4},0).wait(1).to({x:934.7,y:973.5},0).wait(1).to({x:932.1,y:973.6},0).wait(1).to({x:929.7,y:973.7},0).wait(1).to({x:927.4,y:973.9},0).wait(1).to({x:925.4},0).wait(1).to({x:923.7,y:974},0).wait(1).to({x:922.5,y:974.1},0).wait(1).to({regX:15.1,regY:15.4,x:920.9,y:944},0).wait(1).to({regX:16.2,regY:45.5,x:922.4,y:974},0).wait(1).to({x:923.5,y:973.9},0).wait(1).to({x:924.9},0).wait(1).to({x:926.4,y:973.7},0).wait(1).to({x:928,y:973.6},0).wait(1).to({x:929.6,y:973.5},0).wait(1).to({x:930.9,y:973.4},0).wait(1).to({regX:15.1,regY:15.4,x:930.6,y:943.4},0).wait(1).to({regX:16.2,regY:45.5,x:931.7,y:973.4},0).wait(3).to({x:931.8},0).wait(3).to({x:931.9},0).wait(3).to({x:932},0).wait(3).to({x:932.1},0).wait(3).to({x:932.2},0).wait(2).to({regX:15.1,regY:15.4,x:931.1,y:943.4},0).wait(1).to({regX:16.2,regY:45.5,x:931.9,y:973.4},0).wait(1).to({x:931,y:973.5},0).wait(1).to({x:929.8,y:973.7},0).wait(1).to({x:928.3,y:973.9},0).wait(1).to({x:926.7,y:974.1},0).wait(1).to({x:924.9,y:974.3},0).wait(1).to({x:923,y:974.5},0).wait(1).to({x:921,y:974.7},0).wait(1).to({x:919.1,y:975},0).wait(1).to({x:917.1,y:975.2},0).wait(1).to({x:915.1,y:975.5},0).wait(1).to({x:913.2,y:975.7},0).wait(1).to({x:911.4,y:975.9},0).wait(1).to({x:909.9,y:976.1},0).wait(1).to({x:908.6,y:976.2},0).wait(1).to({regX:15.1,regY:15.3,x:906.9,y:946.3},0).wait(1).to({regX:16.2,regY:45.5,x:908,y:976.4},0).wait(3).to({x:908.1},0).wait(2).to({x:908.2},0).wait(3).to({x:908.3},0).wait(1).to({x:908.4},0).wait(2).to({x:908.5},0).wait(2).to({x:908.6},0).wait(1).to({x:908.7},0).wait(2).to({x:908.8},0).wait(1).to({x:908.9},0).wait(1).to({x:909},0).wait(2).to({x:909.1},0).wait(1).to({x:909.2},0).wait(1).to({x:909.3},0).wait(2).to({x:909.4},0).wait(1).to({x:909.5},0).wait(1).to({x:909.6},0).wait(1).to({x:909.7},0).wait(2).to({x:909.8},0).wait(1).to({x:909.9},0).wait(2).to({x:910},0).wait(1).to({x:910.1},0).wait(1).to({x:910.2},0).wait(2).to({x:910.3},0).wait(2).to({x:910.4},0).wait(2).to({x:910.5},0).wait(2).to({regX:15.1,regY:15.3,x:909.4,y:946.3},0).wait(1).to({regX:16.2,regY:45.5,x:910.1,y:976.3},0).wait(1).to({x:909.1,y:976},0).wait(1).to({x:908,y:975.7},0).wait(1).to({x:906.8,y:975.3},0).wait(1).to({x:905.7,y:975},0).wait(1).to({regX:15.2,regY:15.3,x:904,y:944.7},0).wait(1).to({regX:16.2,regY:45.5,x:907.2,y:974.7},0).wait(1).to({x:912.2,y:974.4},0).wait(1).to({x:919,y:974},0).wait(1).to({x:927,y:973.5},0).wait(1).to({x:935.6,y:973},0).wait(1).to({x:944.6,y:972.5},0).wait(1).to({x:953.6,y:971.9},0).wait(1).to({x:962.5,y:971.4},0).wait(1).to({x:970.7,y:970.9},0).wait(1).to({x:977.5,y:970.5},0).wait(1).to({regX:15.2,regY:15.4,x:979.9,y:940.2},0).wait(1).to({regX:16.2,regY:45.5,x:979.6,y:970.3},0).wait(1).to({x:976.9,y:970.4},0).wait(1).to({x:973.5,y:970.5},0).wait(1).to({x:969.6,y:970.7},0).wait(1).to({x:965.6,y:970.8},0).wait(1).to({x:961.7,y:971},0).wait(1).to({x:958.3,y:971.1},0).wait(1).to({regX:15.2,regY:15.2,x:955.5,y:941.1},0).wait(1).to({regX:16.2,regY:45.5,x:957.5,y:971.3},0).wait(1).to({x:959.7,y:971.2},0).wait(1).to({scaleX:1,scaleY:1,x:962.3,y:971.1},0).wait(1).to({x:965.1,y:971},0).wait(1).to({x:967.7,y:970.9},0).wait(1).to({regX:15.2,regY:15.3,x:968.2,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:970.5,y:970.7},0).wait(1).to({x:973.1,y:970.6},0).wait(1).to({scaleX:1,scaleY:1,x:976.1,y:970.5},0).wait(1).to({x:979,y:970.4},0).wait(1).to({regX:15.2,regY:15.4,x:979.9,y:940.2},0).wait(1).to({regX:16.2,regY:45.5,x:980.8,y:970.3},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({regX:15.2,regY:15.3,x:979.8,y:940.2},0).wait(1).to({regX:16.2,regY:45.5,x:979.6,y:970.4},0).wait(1).to({scaleX:1,scaleY:1,x:976.6},0).wait(1).to({x:972.7},0).wait(1).to({x:968.1,y:970.5},0).wait(1).to({x:963.1},0).wait(1).to({scaleX:1,scaleY:1,x:958,y:970.6},0).wait(1).to({x:952.7},0).wait(1).to({x:947.6,y:970.7},0).wait(1).to({scaleX:1,scaleY:1,x:942.9,y:970.8},0).wait(1).to({x:939},0).wait(1).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.4,y:970.7},0).wait(3).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.4,y:970.7},0).wait(4).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.4,y:970.7},0).wait(3).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.4,y:970.7},0).wait(17).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:937.4,y:970.7},0).wait(8).to({regX:14.8,regY:15.4,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:938.5,y:970.6},0).wait(1).to({x:941,y:970.5},0).wait(1).to({x:944.2,y:970.4},0).wait(1).to({x:947.6,y:970.2},0).wait(1).to({x:951,y:970.1},0).wait(1).to({x:954.1,y:969.9},0).wait(1).to({regX:14.8,regY:15.5,x:954.4,y:939.8},0).wait(1).to({regX:16.2,regY:45.5,x:954.1,y:969.9},0).wait(1).to({x:950.3,y:970.1},0).wait(1).to({x:945.7,y:970.4},0).wait(1).to({x:940.6,y:970.8},0).wait(1).to({x:935.5,y:971.1},0).wait(1).to({x:930.9,y:971.4},0).wait(1).to({regX:14.8,regY:15.4,x:927,y:941.5},0).wait(1).to({regX:16.2,regY:45.5,x:930.2,y:971.5},0).wait(1).to({x:934,y:971.3},0).wait(1).to({x:938.7,y:971.1},0).wait(1).to({x:943.6,y:970.9},0).wait(1).to({x:948.1,y:970.7},0).wait(1).to({regX:14.8,regY:15.5,x:949.3,y:940.5},0).wait(1).to({regX:16.2,regY:45.5,x:949.9,y:970.5},0).wait(1).to({x:948.3},0).wait(1).to({x:946.4,y:970.6},0).wait(1).to({x:944.4,y:970.7},0).wait(1).to({x:942.5,y:970.8},0).wait(1).to({regX:14.8,regY:15.5,x:940,y:940.8},0).wait(1).to({regX:16.2,regY:45.5,x:941.6,y:970.8},0).wait(1).to({x:942.2},0).wait(1).to({x:942.9,y:970.7},0).wait(1).to({x:943.8},0).wait(1).to({x:944.7,y:970.6},0).wait(1).to({x:945.7},0).wait(1).to({x:946.8,y:970.5},0).wait(1).to({x:947.8},0).wait(1).to({x:948.9,y:970.4},0).wait(1).to({x:949.9},0).wait(1).to({x:950.8,y:970.3},0).wait(1).to({x:951.5},0).wait(1).to({regX:14.8,regY:15.4,x:950.6,y:940.3},0).wait(1).to({regX:16.2,regY:45.5,x:951.7,y:970.4},0).wait(1).to({x:951.1},0).wait(1).to({x:950.3},0).wait(1).to({x:949.3,y:970.5},0).wait(1).to({x:948.3},0).wait(1).to({x:947.2,y:970.6},0).wait(1).to({x:946},0).wait(1).to({x:944.8,y:970.7},0).wait(1).to({x:943.6},0).wait(1).to({x:942.5,y:970.8},0).wait(1).to({x:941.5},0).wait(1).to({x:940.7,y:970.9},0).wait(1).to({regX:14.8,regY:15.4,x:938.9,y:940.8},0).wait(1).to({regX:16.2,regY:45.5,x:940.6,y:970.9},0).wait(1).to({x:941.3,y:970.8},0).wait(1).to({x:942.2},0).wait(1).to({x:943.3,y:970.7},0).wait(1).to({x:944.4},0).wait(1).to({x:945.6,y:970.6},0).wait(1).to({x:946.8},0).wait(1).to({x:947.9,y:970.5},0).wait(1).to({x:948.8},0).wait(1).to({regX:14.8,regY:15.5,x:947.9,y:940.4},0).wait(1).to({regX:16.2,regY:45.5,x:949.2,y:970.4},0).wait(4).to({x:949.1},0).wait(2).to({x:949},0).wait(2).to({x:948.9},0).wait(2).to({x:948.8},0).wait(1).to({x:948.7},0).wait(2).to({x:948.6},0).wait(1).to({x:948.5},0).wait(1).to({x:948.4},0).wait(1).to({x:948.3},0).wait(2).to({x:948.2},0).wait(1).to({x:948.1},0).wait(1).to({x:948},0).wait(1).to({x:947.9},0).wait(2).to({x:947.8},0).wait(1).to({x:947.7},0).wait(1).to({x:947.6},0).wait(1).to({x:947.5},0).wait(1).to({x:947.4},0).wait(2).to({x:947.3},0).wait(1).to({x:947.2},0).wait(1).to({x:947.1},0).wait(2).to({x:947},0).wait(1).to({x:946.9},0).wait(1).to({x:946.8},0).wait(2).to({x:946.7},0).wait(2).to({x:946.6},0).wait(2).to({regX:14.8,regY:15.5,x:945.2,y:940.5},0).wait(1).to({regX:16.2,regY:45.5,x:946.6,y:970.4},0).wait(1).to({x:946.9},0).wait(1).to({x:947.3},0).wait(1).to({x:947.8},0).wait(1).to({x:948.4},0).wait(1).to({x:949},0).wait(1).to({x:949.7},0).wait(1).to({x:950.5},0).wait(1).to({x:951.3},0).wait(1).to({x:952.2},0).wait(1).to({x:953.1},0).wait(1).to({x:954,y:970.3},0).wait(1).to({x:955},0).wait(1).to({x:955.9},0).wait(1).to({x:956.9},0).wait(1).to({x:957.9},0).wait(1).to({x:958.9},0).wait(1).to({x:960},0).wait(1).to({x:961,y:970.2},0).wait(1).to({x:962},0).wait(1).to({x:963},0).wait(1).to({x:964},0).wait(1).to({x:965},0).wait(1).to({x:965.9},0).wait(1).to({x:966.9},0).wait(1).to({x:967.7,y:970.1},0).wait(1).to({x:968.6},0).wait(1).to({x:969.4},0).wait(1).to({x:970},0).wait(1).to({x:970.6},0).wait(1).to({x:971},0).wait(1).to({regX:14.8,regY:15.4,x:969.9,y:940.1},0).wait(1).to({regX:16.2,regY:45.5,x:970.6,y:970.2},0).wait(1).to({x:969.1},0).wait(1).to({x:967,y:970.3},0).wait(1).to({x:964.5},0).wait(1).to({x:961.7},0).wait(1).to({x:958.8,y:970.4},0).wait(1).to({x:955.7},0).wait(1).to({x:952.7},0).wait(1).to({x:949.6,y:970.5},0).wait(1).to({x:946.7},0).wait(1).to({x:944.1,y:970.6},0).wait(1).to({x:942},0).wait(1).to({regX:14.7,regY:15.4,scaleX:1,scaleY:1,x:939.5,y:940.5},0).wait(1).to({regX:16.2,regY:45.5,x:941.4,y:970.6},0).wait(1).to({scaleX:1,scaleY:1,x:942.4},0).wait(1).to({x:943.7},0).wait(1).to({x:945.4,y:970.5},0).wait(1).to({x:947.3},0).wait(1).to({x:949.4},0).wait(1).to({x:951.6},0).wait(1).to({x:953.8,y:970.4},0).wait(1).to({x:956.2},0).wait(1).to({x:958.5},0).wait(1).to({x:960.9,y:970.3},0).wait(1).to({x:963.1},0).wait(1).to({x:965.4},0).wait(1).to({x:967.4},0).wait(1).to({x:969.2,y:970.2},0).wait(1).to({x:970.7},0).wait(1).to({regX:14.8,regY:15.4,x:969.9,y:940.1},0).wait(1).to({regX:16.2,regY:45.5,rotation:0.1,x:970.4,y:970.2},0).wait(1).to({x:969.6},0).wait(1).to({rotation:0.2,x:968.8},0).wait(1).to({x:968},0).wait(1).to({rotation:0.3,x:967.2},0).wait(1).to({x:966.4,y:970.3},0).wait(1).to({rotation:0.4,x:965.6},0).wait(1).to({x:964.7},0).wait(1).to({rotation:0.5,x:964},0).wait(1).to({x:963.1},0).wait(1).to({rotation:0.6,x:962.3},0).wait(1).to({x:961.5,y:970.4},0).wait(1).to({rotation:0.7,x:960.7},0).wait(1).to({x:959.9},0).wait(1).to({rotation:0.8,x:959.1},0).wait(1).to({x:958.3},0).wait(1).to({rotation:0.9,x:957.4},0).wait(1).to({x:956.6},0).wait(1).to({rotation:1,x:955.8,y:970.5},0).wait(1).to({x:955},0).wait(1).to({rotation:1.1,x:954.2},0).wait(1).to({rotation:1.2,x:953.4},0).wait(1).to({x:952.6},0).wait(1).to({rotation:1.3,x:951.8},0).wait(1).to({x:950.9},0).wait(1).to({rotation:1.4,x:950.1},0).wait(1).to({x:949.3},0).wait(1).to({rotation:1.5,x:948.5},0).wait(1).to({regX:14.8,regY:15.4,x:947.1,y:940.5},0).wait(1).to({regX:16.2,regY:45.5,rotation:1.8,x:949.6,y:970.5},0).wait(1).to({rotation:2.1,x:951.4},0).wait(1).to({rotation:2.4,x:953.4},0).wait(1).to({rotation:2.7,x:955.2,y:970.4},0).wait(1).to({regX:14.8,regY:15.4,rotation:3,x:957.3,y:940.3},0).wait(1).to({regX:16.2,regY:45.5,rotation:2.9,x:956.2,y:970.3},0).wait(1).to({rotation:2.8,x:955.4,y:970.4},0).wait(1).to({rotation:2.6,x:954.6},0).wait(1).to({rotation:2.5,x:953.8},0).wait(1).to({rotation:2.4,x:953,y:970.5},0).wait(1).to({rotation:2.3,x:952.2},0).wait(1).to({rotation:2.1,x:951.3},0).wait(1).to({rotation:2,x:950.5},0).wait(1).to({rotation:1.9,x:949.7},0).wait(1).to({rotation:1.8,x:948.9},0).wait(1).to({rotation:1.6,x:948.1},0).wait(1).to({rotation:1.5,x:947.2,y:970.6},0).wait(1).to({rotation:1.4,x:946.4},0).wait(1).to({rotation:1.3,x:945.6},0).wait(1).to({rotation:1.1,x:944.8},0).wait(1).to({rotation:1,x:944,y:970.7},0).wait(1).to({rotation:0.9,x:943.1},0).wait(1).to({rotation:0.8,x:942.3},0).wait(1).to({rotation:0.6,x:941.5},0).wait(1).to({rotation:0.5,x:940.7},0).wait(1).to({rotation:0.4,x:939.9},0).wait(1).to({rotation:0.3,x:939},0).wait(1).to({rotation:0.1,x:938.2,y:970.8},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:936,y:940.6},0).wait(1).to({regX:16.2,regY:45.5,x:935.3,y:970.9},0).wait(1).to({x:931.7,y:971.3},0).wait(1).to({x:927.6,y:971.8},0).wait(1).to({regX:14.8,regY:15.4,x:922.8,y:942.1},0).wait(1).to({regX:16.2,regY:45.5,x:923.3,y:972.3},0).wait(1).to({x:921.6,y:972.6},0).wait(1).to({x:919.6,y:972.8},0).wait(1).to({x:917.5,y:973.2},0).wait(1).to({x:915.3,y:973.5},0).wait(1).to({regX:14.8,regY:15.4,x:912.2,y:943.6},0).wait(1).to({regX:16.2,regY:45.5,x:913.9,y:973.7},0).wait(1).to({x:914.4},0).wait(1).to({x:915},0).wait(1).to({x:915.6},0).wait(1).to({regX:14.8,regY:15.4,x:914.8,y:943.6},0).wait(1).to({regX:16.2,regY:45.5,x:915.3,y:973.8},0).wait(1).to({x:913.7,y:973.9},0).wait(1).to({x:912.1,y:974.1},0).wait(1).to({regX:14.8,regY:15.4,x:909.2,y:944.1},0).wait(1).to({regX:16.2,regY:45.5,x:911.7,y:974.2},0).wait(1).to({x:914,y:974.1},0).wait(1).to({x:917.1,y:973.9},0).wait(1).to({x:920.6,y:973.8},0).wait(1).to({x:924.5,y:973.6},0).wait(1).to({x:928.6,y:973.4},0).wait(1).to({x:932.8,y:973.2},0).wait(1).to({x:937.2,y:973.1},0).wait(1).to({x:941.6,y:972.9},0).wait(1).to({x:946,y:972.7},0).wait(1).to({x:950.3,y:972.5},0).wait(1).to({x:954.3,y:972.3},0).wait(1).to({regX:14.8,regY:15.4,x:955.7,y:942.1},0).wait(1).to({regX:16.2,regY:45.5,x:957.2,y:972.4},0).wait(1).to({x:957.4,y:972.7},0).wait(1).to({x:957.7,y:973.1},0).wait(1).to({x:958,y:973.5},0).wait(1).to({x:958.3,y:973.9},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.1},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:974.1},0).wait(1).to({y:973.9},0).wait(1).to({y:973.7},0).wait(1).to({y:973.4},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:943.2},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.4},0).wait(1).to({y:973.7},0).wait(1).to({y:974},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(62).to({regX:16.2,regY:45.5,rotation:0.1,x:959.7,y:974.2},0).wait(1).to({rotation:0.2,x:961.9,y:974.1},0).wait(1).to({rotation:0.3,x:964.5},0).wait(1).to({rotation:0.5,x:967.5,y:974},0).wait(1).to({rotation:0.7,x:970.5,y:973.9},0).wait(1).to({rotation:0.9,x:973.4,y:973.8},0).wait(1).to({regX:14.8,regY:15.4,rotation:1,x:974.9,y:943.6},0).wait(1).to({regX:16.2,regY:45.5,x:975.9,y:973.8},0).wait(1).to({rotation:0.9,x:976.4},0).wait(1).to({x:977,y:973.9},0).wait(1).to({rotation:0.8,x:977.7,y:974},0).wait(1).to({rotation:0.7,x:978.4},0).wait(1).to({x:979.3,y:974.1},0).wait(1).to({rotation:0.6,x:980.1,y:974.2},0).wait(1).to({rotation:0.5,x:980.9,y:974.3},0).wait(1).to({rotation:0.4,x:981.9},0).wait(1).to({rotation:0.3,x:982.7,y:974.5},0).wait(1).to({rotation:0.2,x:983.7},0).wait(1).to({rotation:0.1,x:984.5,y:974.6},0).wait(1).to({x:985.3,y:974.7},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:984.5,y:944.7},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.3,x:983.5,y:974.5},0).wait(1).to({rotation:-0.8,x:978.7,y:974.1},0).wait(1).to({rotation:-1.5,x:972.7,y:973.5},0).wait(1).to({rotation:-2.2,x:966.1,y:972.8},0).wait(1).to({regX:14.7,regY:15.3,rotation:-3,x:956.2,y:942.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:-2.6,x:959.1,y:972.4},0).wait(1).to({rotation:-1.8,x:958.8,y:972.8},0).wait(1).to({rotation:-0.8,x:958.5,y:973.1},0).wait(1).to({rotation:0.2,x:958.2,y:973.6},0).wait(1).to({rotation:1.2,x:957.9,y:974},0).wait(1).to({regX:14.8,regY:15.4,rotation:2,x:957.2,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:1.8,x:957.6,y:974.2},0).wait(1).to({rotation:1.4,x:957.8,y:974},0).wait(1).to({rotation:0.9,x:958.1,y:973.7},0).wait(1).to({rotation:0.4,x:958.4,y:973.4},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:943.1},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.4},0).wait(1).to({y:973.7},0).wait(1).to({y:974},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(12).to({regX:16.2,regY:45.5,scaleY:1,x:958.6,y:973.9},0).wait(1).to({scaleY:1,y:973.2},0).wait(1).to({scaleY:0.99,y:972.4},0).wait(1).to({scaleY:0.99,y:971.6},0).wait(1).to({regX:14.8,regY:15.4,scaleY:0.99,x:957.2,y:941.1},0).wait(1).to({regX:16.2,regY:45.5,scaleY:1,x:958.6,y:972.5},0).wait(1).to({scaleY:1.01,y:975.3},0).wait(1).to({scaleY:1.02,y:978.5},0).wait(1).to({regX:14.8,regY:15.5,scaleY:1.03,x:957.2,y:950.2},0).to({regY:15.4,scaleY:1,y:950.1},4).wait(8).to({regX:16.2,regY:45.5,x:958.4,y:979.3},0).wait(1).to({x:958.1,y:977.7},0).wait(1).to({x:957.7,y:975.8},0).wait(1).to({x:957.4,y:973.8},0).wait(1).to({regX:14.8,regY:15.4,x:955.7,y:942.1},0).wait(1).to({regX:16.2,regY:45.5,x:957.2,y:972.4},0).wait(1).to({x:957.5,y:972.8},0).wait(1).to({x:957.9,y:973.3},0).wait(1).to({x:958.2,y:973.8},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.1},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:974.1},0).wait(1).to({y:973.9},0).wait(1).to({y:973.6},0).wait(1).to({y:973.4},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:943.1},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.4},0).wait(1).to({y:973.7},0).wait(1).to({y:974},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(11).to({regX:16.2,regY:45.5,rotation:0.1,x:960.3,y:974.3},0).wait(1).to({rotation:0.4,x:963.8,y:974.2},0).wait(1).to({rotation:0.7,x:968.1,y:974.3},0).wait(1).to({rotation:1,x:972.7},0).wait(1).to({rotation:1.4,x:977.5},0).wait(1).to({rotation:1.7,x:982.2},0).wait(1).to({regX:14.9,regY:15.4,rotation:2,x:985.5,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:1.5,x:986,y:974.3},0).wait(1).to({rotation:0.7,x:986.4},0).wait(1).to({rotation:-0.2,x:986.9},0).wait(1).to({regX:14.8,regY:15.3,rotation:-1,x:985.5,y:944.1},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.9,x:987.4,y:974.3},0).wait(1).to({rotation:-0.8,x:987.3},0).wait(1).to({rotation:-0.6,x:987.2},0).wait(1).to({rotation:-0.4,x:987.1},0).wait(1).to({rotation:-0.2,x:987},0).wait(1).to({regX:14.9,regY:15.3,rotation:0,x:985.5,y:944.1},0).wait(7).to({regX:14.8,regY:15.4},0).wait(1).to({regX:16.2,regY:45.5,rotation:0.1,x:983.2,y:974.3},0).wait(1).to({rotation:0.4,x:976,y:974.5},0).wait(1).to({rotation:0.7,x:967.3,y:974.8},0).wait(1).to({rotation:1,x:957.8,y:975},0).wait(1).to({rotation:1.4,x:947.9,y:975.3},0).wait(1).to({rotation:1.7,x:938.1,y:975.6},0).wait(1).to({regX:14.8,regY:15.4,rotation:2,x:930.4,y:945.7},0).wait(1).to({regX:16.2,regY:45.5,rotation:1.7,x:933.1,y:975.8},0).wait(1).to({rotation:1.3,x:937.6,y:975.6},0).wait(1).to({rotation:0.7,x:943,y:975.4},0).wait(1).to({rotation:0.1,x:948.8,y:975.2},0).wait(1).to({rotation:-0.5,x:954.5,y:974.9},0).wait(1).to({regX:14.8,regY:15.5,rotation:-1,x:957.2,y:944.7},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.9,x:959,y:974.6},0).wait(1).to({rotation:-0.7,x:958.9,y:974.4},0).wait(1).to({rotation:-0.4,x:958.8,y:974.1},0).wait(1).to({rotation:-0.2,x:958.6,y:973.9},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:943.7},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.8},0).wait(1).to({y:974},0).wait(1).to({y:974.1},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(16).to({rotation:-4.2,x:931.7,y:945.3},0).wait(1).to({regX:16.2,regY:45.5,rotation:-4.5,x:933.7,y:975.3},0).wait(1).to({rotation:-5,x:930.8,y:975.6},0).wait(1).to({regX:14.8,regY:15.4,rotation:-5.4,x:924.3,y:946},0).wait(1).to({regX:16.2,regY:45.5,rotation:-5.2,x:930.2,y:975.6},0).wait(1).to({rotation:-4.6,x:933,y:975.4},0).wait(1).to({regX:14.8,regY:15.4,rotation:-4.2,x:931.7,y:945.3},0).wait(1).to({regX:16.2,regY:45.5,rotation:-4.4,x:934.3,y:975.3},0).wait(1).to({rotation:-4.8,x:932.3,y:975.5},0).wait(1).to({rotation:-5.2,x:930.1,y:975.7},0).wait(1).to({regX:14.8,regY:15.4,rotation:-5.4,x:924.3,y:946},0).wait(1).to({regX:16.2,regY:45.5,rotation:-5.2,x:930.4,y:975.8},0).wait(1).to({rotation:-4.5,x:934.6,y:975.7},0).wait(1).to({rotation:-3.7,x:940,y:975.5},0).wait(1).to({rotation:-2.7,x:946.4,y:975.4},0).wait(1).to({rotation:-1.7,x:953,y:975.3},0).wait(1).to({rotation:-0.7,x:959.6,y:975.1},0).wait(1).to({rotation:0.2,x:965.4,y:974.9},0).wait(1).to({regX:14.8,regY:15.5,rotation:0.7,x:967.6,y:944.8},0).wait(1).to({regX:16.2,regY:45.5,y:974.7},0).wait(1).to({rotation:0.5,x:965.4,y:974.5},0).wait(1).to({rotation:0.3,x:962.8,y:974.2},0).wait(1).to({rotation:0.1,x:960.2,y:973.9},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:943.7},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.8},0).wait(1).to({y:974},0).wait(1).to({y:974.1},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(21).to({regX:16.2,regY:45.5,rotation:-0.3,x:956.7,y:974.4},0).wait(1).to({rotation:-1.1,x:952.4,y:974.7},0).wait(1).to({rotation:-2.1,x:946.8,y:975.1},0).wait(1).to({rotation:-3.3,x:940.3,y:975.6},0).wait(1).to({rotation:-4.6,x:933.5,y:976.1},0).wait(1).to({rotation:-5.8,x:926.8,y:976.5},0).wait(1).to({rotation:-6.9,x:920.9,y:976.9},0).wait(1).to({regX:14.8,regY:15.4,rotation:-7.5,x:912.2,y:947.5},0).wait(1).to({regX:16.2,regY:45.5,rotation:-7.2,x:919.1,y:977},0).wait(1).to({rotation:-6.6,x:922,y:976.6},0).wait(1).to({regX:14.8,regY:15.4,rotation:-6.2,x:919.6,y:946.5},0).wait(25).to({regX:16.2,regY:45.5,rotation:-5.9,x:926.2,y:976.1},0).wait(1).to({rotation:-5.1,x:930.7,y:975.8},0).wait(1).to({rotation:-4,x:936.3,y:975.4},0).wait(1).to({rotation:-2.9,x:942.8,y:975},0).wait(1).to({rotation:-1.7,x:949.2,y:974.5},0).wait(1).to({rotation:-0.6,x:955.2,y:974},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:943.7},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:973.8},0).wait(1).to({y:974},0).wait(1).to({y:974.1},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(15).to({regX:16.2,regY:45.5,rotation:-0.2,x:957.7,y:974.2},0).wait(1).to({rotation:-0.5,x:956.1},0).wait(1).to({rotation:-1,x:954.2,y:974.1},0).wait(1).to({rotation:-1.4,x:952.3,y:974},0).wait(1).to({regX:14.8,regY:15.4,rotation:-1.7,x:948.4,y:943.9},0).wait(1).to({regX:16.2,regY:45.5,rotation:-1.5,x:951.5,y:974},0).wait(1).to({rotation:-1.2,x:953.2},0).wait(1).to({rotation:-0.8,x:955,y:974.1},0).wait(1).to({rotation:-0.3,x:957,y:974.2},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.2,x:957.7,y:974.2},0).wait(1).to({rotation:-0.5,x:956.1},0).wait(1).to({rotation:-1,x:954.2,y:974.1},0).wait(1).to({rotation:-1.4,x:952.3,y:974},0).wait(1).to({regX:14.8,regY:15.4,rotation:-1.7,x:948.4,y:943.9},0).wait(1).to({regX:16.2,regY:45.5,rotation:-1.5,x:951.5,y:974},0).wait(1).to({rotation:-1.2,x:953.2},0).wait(1).to({rotation:-0.8,x:955,y:974.1},0).wait(1).to({rotation:-0.3,x:957,y:974.2},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,rotation:-0.3,x:957.3,y:974.2},0).wait(1).to({rotation:-0.7,x:955.1,y:974.1},0).wait(1).to({rotation:-1.3,x:952.7,y:974},0).wait(1).to({regX:14.8,regY:15.4,rotation:-1.7,x:948.4,y:943.9},0).wait(1).to({regX:16.2,regY:45.5,rotation:-1.6,x:951.2,y:974},0).wait(1).to({rotation:-1.4,x:952.2},0).wait(1).to({rotation:-1.1,x:953.4,y:974.1},0).wait(1).to({rotation:-0.8,x:954.7},0).wait(1).to({rotation:-0.5,x:956.1,y:974.2},0).wait(1).to({rotation:-0.2,x:957.5},0).wait(1).to({regX:14.8,regY:15.4,rotation:0,x:957.2,y:944.2},0).wait(10).to({regX:16.2,regY:45.5,x:958.3,y:974.2},0).wait(1).to({x:957.5,y:974.1},0).wait(1).to({x:956.4,y:973.8},0).wait(1).to({x:954.8,y:973.6},0).wait(1).to({x:952.9,y:973.2},0).wait(1).to({x:950.6,y:972.8},0).wait(1).to({x:948.1,y:972.3},0).wait(1).to({regX:14.8,regY:15.4,x:943.9,y:941.7},0).wait(1).to({regX:16.2,regY:45.5,x:942.2,y:973.1},0).wait(1).to({x:938.8,y:974.4},0).wait(1).to({x:935.3,y:975.9},0).wait(1).to({regX:14.9,regY:15.4,x:930.2,y:947.3},0).wait(1).to({regX:16.2,regY:45.5,x:931.5,y:976.8},0).wait(1).to({y:976.1},0).wait(1).to({regX:14.9,regY:15.4,x:930.2,y:945.3},0).wait(1).to({regX:16.2,regY:45.5,x:931.5,y:975.4},0).wait(5).to({regX:14.9,regY:15.4,x:930.2,y:945.3},0).wait(1).to({regX:16.2,regY:45.5,x:933.8,y:974.7},0).wait(1).to({x:936.3,y:973.9},0).wait(1).to({x:938.7,y:973.1},0).wait(1).to({x:941.2,y:972.3},0).wait(1).to({x:943.7,y:971.6},0).wait(1).to({regX:14.8,regY:15.4,x:945,y:940.7},0).wait(1).to({regX:16.2,regY:45.5,x:948.9,y:972.3},0).wait(1).to({x:951.6,y:974},0).wait(1).to({x:954.2,y:975.6},0).wait(1).to({regX:14.9,regY:15.5,x:955.6,y:947.2},0).wait(1).to({regX:16.2,regY:45.5,x:956.9,y:976.2},0).wait(1).to({y:975.2},0).wait(1).to({regX:14.9,regY:15.5,x:955.6,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,x:956.9,y:974.2},0).wait(4).to({regX:14.9,regY:15.5,x:955.6,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,x:957,y:973.7},0).wait(1).to({x:957.2,y:973.2},0).wait(1).to({x:957.4,y:972.7},0).wait(1).to({x:957.6,y:972.2},0).wait(1).to({x:957.8,y:971.7},0).wait(1).to({regX:14.9,regY:15.5,x:956.7,y:941.2},0).wait(1).to({regX:16.2,regY:45.5,x:958.1,y:972.1},0).wait(1).to({x:958.3,y:973.1},0).wait(1).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(1).to({regX:16.2,regY:45.5,x:958.6,y:974.3},0).wait(2).to({regX:14.8,regY:15.4,x:957.2,y:944.2},0).wait(3));

	// ll_s_torso
	this.instance_4 = new lib.ll_s_torso_1();
	this.instance_4.setTransform(962,1294.5,1,1,0,0,0,200,489.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:190,regY:332.8,rotation:-0.3,x:951.1,y:1137.5},0).wait(1).to({rotation:-0.7,x:950.1,y:1137.6},0).wait(1).to({rotation:-1,x:949.2,y:1137.7},0).wait(1).to({regX:200,regY:489.8,rotation:-1.2,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:-1.1,x:948.9,y:1137.7},0).wait(1).to({rotation:-0.9,x:949.6,y:1137.6},0).wait(1).to({rotation:-0.5,x:950.6},0).wait(1).to({rotation:-0.1,x:951.7,y:1137.5},0).wait(1).to({rotation:0.4,x:953},0).wait(1).to({rotation:0.9,x:954.4,y:1137.4},0).wait(1).to({rotation:1.4,x:955.7},0).wait(1).to({rotation:1.9,x:957.1},0).wait(1).to({rotation:2.4,x:958.3},0).wait(1).to({rotation:2.8,x:959.4},0).wait(1).to({regX:200,regY:489.8,rotation:3,x:961.9,y:1294.7},0).wait(1).to({regX:190,regY:332.8,x:959.9,y:1137.3},0).wait(8).to({regX:200,regY:489.8,x:961.9,y:1294.7},0).wait(1).to({regX:190,regY:332.8,rotation:2.9,x:959.7,y:1137.4},0).wait(1).to({rotation:2.6,x:959,y:1137.3},0).wait(1).to({rotation:2.2,x:958},0).wait(1).to({rotation:1.8,x:956.8},0).wait(1).to({rotation:1.3,x:955.5},0).wait(1).to({rotation:0.8,x:954.1,y:1137.4},0).wait(1).to({rotation:0.2,x:952.7},0).wait(1).to({rotation:-0.3,x:951.2,y:1137.5},0).wait(1).to({rotation:-0.8,x:949.8,y:1137.6},0).wait(1).to({rotation:-1.3,x:948.5},0).wait(1).to({rotation:-1.7,x:947.4,y:1137.7},0).wait(1).to({regX:200,regY:489.8,rotation:-2,x:962.2,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-1.9,x:947.1,y:1137.8},0).wait(1).to({rotation:-1.6,x:947.7,y:1137.7},0).wait(1).to({rotation:-1.2,x:948.8},0).wait(1).to({regX:200,regY:489.8,rotation:-0.8,x:962.2,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:-1,x:949.5,y:1137.8},0).wait(1).to({rotation:-1.2,x:949,y:1137.7},0).wait(1).to({rotation:-1.4,x:948.4,y:1137.8},0).wait(1).to({rotation:-1.6,x:947.9,y:1137.7},0).wait(1).to({rotation:-1.7,x:947.4,y:1137.8},0).wait(1).to({regX:200,regY:489.8,rotation:-2,x:962.2,y:1294.4},0).wait(1).to({regX:190,regY:332.8,x:946.8,y:1137.8},0).wait(1).to({rotation:-1.9},0).wait(2).to({x:946.9},0).wait(1).to({x:946.8},0).wait(1).to({x:946.9},0).wait(5).to({x:947},0).wait(6).to({x:947.1},0).wait(2).to({rotation:-1.8},0).wait(1).to({x:947.2},0).wait(3).to({regX:200,regY:489.8,x:962.2,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-1.9,x:947,y:1137.9},0).wait(1).to({rotation:-2.1,x:946.4,y:1138},0).wait(1).to({rotation:-2.4,x:945.6},0).wait(1).to({rotation:-2.6,x:945,y:1138.1},0).wait(1).to({regX:200,regY:489.8,rotation:-2.8,x:962.2,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:-2.7,x:944.7,y:1138.1},0).wait(1).to({rotation:-2.5,x:945.3},0).wait(1).to({rotation:-2.2,x:946,y:1138},0).wait(1).to({rotation:-1.9,x:947,y:1137.9},0).wait(1).to({rotation:-1.4,x:948.2,y:1137.8},0).wait(1).to({rotation:-1,x:949.3,y:1137.7},0).wait(1).to({rotation:-0.5,x:950.7,y:1137.6},0).wait(1).to({rotation:0,x:952.1},0).wait(1).to({rotation:0.5,x:953.5,y:1137.5},0).wait(1).to({rotation:1.1,x:954.9},0).wait(1).to({rotation:1.6,x:956.2,y:1137.4},0).wait(1).to({rotation:2.1,x:957.5},0).wait(1).to({rotation:2.5,x:958.6},0).wait(1).to({rotation:2.8,x:959.5},0).wait(1).to({regX:200,regY:489.8,rotation:3,x:961.9,y:1294.7},0).wait(1).to({regX:190,regY:332.8,rotation:2.9,x:959.9,y:1137.3},0).wait(1).to({x:959.7},0).wait(1).to({rotation:2.8,x:959.4},0).wait(1).to({rotation:2.7,x:959.1,y:1137.4},0).wait(1).to({rotation:2.5,x:958.7,y:1137.3},0).wait(1).to({rotation:2.4,x:958.4,y:1137.4},0).wait(1).to({rotation:2.2,x:957.9,y:1137.3},0).wait(1).to({rotation:2.1,x:957.6,y:1137.4},0).wait(1).to({rotation:2,x:957.2,y:1137.3},0).wait(1).to({rotation:1.9,x:956.9,y:1137.4},0).wait(1).to({regX:200,regY:489.8,rotation:1.8,x:961.9,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:2.1,x:957.7,y:1137.4},0).wait(1).to({rotation:2.5,x:958.6,y:1137.3},0).wait(1).to({rotation:2.8,x:959.5},0).wait(1).to({rotation:3.1,x:960.4},0).wait(1).to({rotation:3.4,x:961.3},0).wait(1).to({rotation:3.8,x:962.2},0).wait(1).to({rotation:4.1,x:963.1},0).wait(1).to({rotation:4.4,x:964,y:1137.4},0).wait(1).to({regX:200,regY:489.8,rotation:4.7,x:961.9,y:1294.7},0).wait(1).to({regX:190,regY:332.8,x:964.7,y:1137.4},0).wait(2).to({rotation:4.6,x:964.6,y:1137.3},0).wait(1).to({y:1137.4},0).wait(2).to({x:964.5},0).wait(2).to({regX:200,regY:489.8,x:961.9,y:1294.6},0).wait(1).to({regX:190,regY:332.8,x:964.4,y:1137.4},0).wait(2).to({x:964.5},0).wait(4).to({x:964.6},0).wait(5).to({rotation:4.7,x:964.7},0).wait(6).to({x:964.8},0).wait(1).to({regX:200,regY:489.8,x:961.9,y:1294.7},0).wait(1).to({regX:190,regY:332.8,x:964.7,y:1137.4},0).wait(1).to({rotation:4.5,x:964.3},0).wait(1).to({rotation:4.3,x:963.8,y:1137.3},0).wait(1).to({rotation:4.1,x:963.2},0).wait(1).to({rotation:3.8,x:962.5},0).wait(1).to({rotation:3.6,x:961.7},0).wait(1).to({rotation:3.2,x:960.8,y:1137.2},0).wait(1).to({rotation:2.9,x:959.9},0).wait(1).to({rotation:2.5,x:959},0).wait(1).to({rotation:2.2,x:958},0).wait(1).to({rotation:1.8,x:957,y:1137.3},0).wait(1).to({rotation:1.4,x:956},0).wait(1).to({rotation:1.1,x:955},0).wait(1).to({rotation:0.7,x:953.9},0).wait(1).to({rotation:0.3,x:952.9,y:1137.4},0).wait(1).to({rotation:-0.1,x:951.9},0).wait(1).to({rotation:-0.4,x:950.9},0).wait(1).to({rotation:-0.8,x:950,y:1137.5},0).wait(1).to({rotation:-1.1,x:949.1,y:1137.6},0).wait(1).to({rotation:-1.4,x:948.3},0).wait(1).to({rotation:-1.7,x:947.6,y:1137.7},0).wait(1).to({rotation:-1.9,x:947.1},0).wait(1).to({regX:200,regY:489.8,rotation:-2,x:962.2,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-1.7,x:947.5,y:1137.7},0).wait(1).to({rotation:-1.2,x:948.9,y:1137.6},0).wait(1).to({rotation:-0.5,x:950.7,y:1137.4},0).wait(1).to({rotation:0.2,x:952.6,y:1137.3},0).wait(1).to({rotation:0.9,x:954.6,y:1137.2},0).wait(1).to({rotation:1.6,x:956.3,y:1137.1},0).wait(1).to({regX:200.1,regY:489.7,rotation:2,x:962,y:1294.3},0).wait(1).to({regX:190,regY:332.8,rotation:1.8,x:956.7,y:1137.2},0).wait(1).to({rotation:1.4,x:955.7},0).wait(1).to({rotation:1,x:954.5,y:1137.3},0).wait(1).to({rotation:0.5,x:953.2},0).wait(1).to({rotation:0,x:951.9,y:1137.5},0).wait(1).to({rotation:-0.5,x:950.7},0).wait(1).to({regX:200,regY:489.7,rotation:-0.7,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,x:950.2,y:1137.6},0).wait(1).to({rotation:-0.6,x:950.5,y:1137.5},0).wait(1).to({rotation:-0.4,x:950.8},0).wait(1).to({rotation:-0.3,x:951.1},0).wait(1).to({rotation:-0.2,x:951.5},0).wait(1).to({rotation:-0.1,x:951.8},0).wait(1).to({regX:200,regY:489.8,rotation:0,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:951.9,y:1137.5},0).wait(1).to({rotation:-0.1,x:951.8,y:1137.4},0).wait(1).to({x:951.6,y:1137.5},0).wait(1).to({rotation:-0.2,x:951.3},0).wait(1).to({rotation:-0.3,x:951.1},0).wait(1).to({rotation:-0.5,x:950.7,y:1137.6},0).wait(1).to({rotation:-0.6,x:950.4},0).wait(1).to({rotation:-0.7,x:950},0).wait(1).to({rotation:-0.9,x:949.6},0).wait(1).to({rotation:-1,x:949.1,y:1137.7},0).wait(1).to({rotation:-1.2,x:948.7},0).wait(1).to({rotation:-1.3,x:948.3},0).wait(1).to({rotation:-1.5,x:947.9,y:1137.8},0).wait(1).to({rotation:-1.6,x:947.5},0).wait(1).to({rotation:-1.8,x:947,y:1137.9},0).wait(1).to({rotation:-2,x:946.7},0).wait(1).to({rotation:-2.1,x:946.2},0).wait(1).to({rotation:-2.2,x:945.8,y:1138},0).wait(1).to({rotation:-2.4,x:945.5},0).wait(1).to({rotation:-2.5,x:945.1,y:1138.1},0).wait(1).to({rotation:-2.6,x:944.8},0).wait(1).to({rotation:-2.7,x:944.6},0).wait(1).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:944.6,y:1138.1},0).wait(7).to({x:944.7},0).wait(4).to({x:944.8},0).wait(3).to({rotation:-2.6},0).wait(3).to({x:944.9},0).wait(3).to({x:945},0).wait(4).to({x:945.1},0).wait(2).to({y:1138},0).wait(1).to({y:1138.1},0).wait(2).to({rotation:-2.5},0).wait(1).to({regX:200,regY:489.8,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-2.7,x:944.7,y:1138},0).wait(1).to({rotation:-3,x:943.7,y:1138.2},0).wait(1).to({rotation:-3.4,x:942.7,y:1138.3},0).wait(1).to({rotation:-3.8,x:941.7,y:1138.4},0).wait(1).to({regX:200,regY:489.8,rotation:-4,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-3.9,x:941.3,y:1138.5},0).wait(1).to({rotation:-3.7,x:942.1,y:1138.4},0).wait(1).to({rotation:-3.3,x:943.1,y:1138.3},0).wait(1).to({rotation:-2.9,x:944.3,y:1138.1},0).wait(1).to({rotation:-2.4,x:945.6,y:1138},0).wait(1).to({rotation:-1.8,x:947.1,y:1137.8},0).wait(1).to({rotation:-1.2,x:948.7,y:1137.7},0).wait(1).to({rotation:-0.6,x:950.3,y:1137.5},0).wait(1).to({rotation:0,x:952},0).wait(1).to({rotation:0.6,x:953.7,y:1137.3},0).wait(1).to({rotation:1.2,x:955.4},0).wait(1).to({rotation:1.8,x:957.1,y:1137.2},0).wait(1).to({rotation:2.4,x:958.7,y:1137.1},0).wait(1).to({rotation:2.9,x:960.2},0).wait(1).to({rotation:3.4,x:961.5},0).wait(1).to({rotation:3.8,x:962.6},0).wait(1).to({regX:200.1,regY:489.8,rotation:4,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:3.8,x:962.4,y:1137.1},0).wait(1).to({rotation:3.4,x:961.3},0).wait(1).to({rotation:2.9,x:959.9,y:1137.2},0).wait(1).to({rotation:2.3,x:958.2},0).wait(1).to({rotation:1.6,x:956.5},0).wait(1).to({rotation:1,x:954.7,y:1137.3},0).wait(1).to({rotation:0.4,x:953.1,y:1137.4},0).wait(1).to({rotation:-0.2,x:951.6,y:1137.5},0).wait(1).to({regX:200,regY:489.8,rotation:-0.4,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,x:951.2,y:1137.6},0).wait(1).to({rotation:-0.2,x:951.6,y:1137.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:952.2},0).wait(1).to({rotation:0.3,x:952.8},0).wait(1).to({rotation:0.5,x:953.4,y:1137.4},0).wait(1).to({rotation:0.7,x:954,y:1137.5},0).wait(1).to({regX:200,regY:489.8,rotation:0.8,x:962.1,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:0.9,x:954.6,y:1137.4},0).wait(1).to({rotation:1,x:955.3,y:1137.3},0).wait(1).to({rotation:1.2,x:956.1,y:1137.2},0).wait(1).to({rotation:1.4,x:957,y:1137.1},0).wait(1).to({rotation:1.6,x:957.9,y:1137},0).wait(1).to({rotation:1.8,x:958.7,y:1136.9},0).wait(1).to({regX:200,regY:489.9,rotation:1.9,x:964,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:1.8,x:959.1,y:1136.9},0).wait(1).to({y:1136.8},0).wait(1).to({x:959,y:1136.9},0).wait(1).to({x:958.9},0).wait(1).to({regX:200,regY:489.8,x:964,y:1294},0).wait(1).to({regX:190,regY:332.8,x:959,y:1136.9},0).wait(1).to({rotation:2,x:959.4},0).wait(1).to({rotation:2.2,x:959.9},0).wait(1).to({rotation:2.4,x:960.4},0).wait(1).to({rotation:2.6,x:961},0).wait(1).to({rotation:2.8,x:961.6},0).wait(1).to({rotation:2.9,x:962,y:1136.8},0).wait(1).to({regX:200,regY:489.9,rotation:3,x:964,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:2.9,x:962,y:1136.8},0).wait(1).to({rotation:2.7,x:961.4},0).wait(1).to({rotation:2.4,x:960.7},0).wait(1).to({rotation:2.2,x:960},0).wait(1).to({rotation:1.9,x:959.3},0).wait(1).to({regX:200,regY:489.8,rotation:1.8,x:964,y:1294},0).wait(1).to({regX:190,regY:332.8,x:958.8,y:1136.9},0).wait(2).to({y:1137},0).wait(1).to({regX:200,regY:489.9,x:964,y:1294.1},0).wait(1).to({regX:190,regY:332.8,x:958.8,y:1136.9},0).wait(1).to({x:958.9},0).wait(1).to({x:958.8},0).wait(1).to({y:1136.8},0).wait(1).to({regX:200,regY:489.8,x:964,y:1294},0).wait(1).to({regX:190,regY:332.8,x:958.9,y:1136.9},0).wait(1).to({x:958.8},0).wait(1).to({rotation:1.7,x:958.7,y:1137},0).wait(2).to({x:958.6,y:1136.9},0).wait(1).to({rotation:1.6,x:958.5},0).wait(1).to({x:958.4},0).wait(1).to({x:958.3,y:1137},0).wait(1).to({x:958.2},0).wait(1).to({regX:200,regY:489.8,x:963.9,y:1294},0).wait(1).to({regX:190,regY:332.8,x:958.2,y:1137},0).wait(1).to({rotation:1.5},0).wait(2).to({x:958.1},0).wait(1).to({x:958},0).wait(1).to({regX:200,regY:489.8,x:963.9,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:1.6,x:958.3,y:1137},0).wait(1).to({rotation:1.8,x:958.8},0).wait(1).to({rotation:2.1,x:959.6},0).wait(1).to({rotation:2.5,x:960.6,y:1136.9},0).wait(1).to({rotation:2.8,x:961.6,y:1137},0).wait(1).to({rotation:3.2,x:962.7},0).wait(1).to({rotation:3.6,x:963.7},0).wait(1).to({rotation:4,x:964.8},0).wait(1).to({rotation:4.4,x:965.8},0).wait(1).to({rotation:4.6,x:966.6},0).wait(1).to({regX:200,regY:489.9,rotation:4.8,x:963.8,y:1294.3},0).wait(1).to({regX:190,regY:332.8,rotation:4.7,x:966.6,y:1137},0).wait(1).to({rotation:4.4,x:965.8},0).wait(1).to({rotation:4.1,x:965},0).wait(1).to({rotation:3.8,x:964.1,y:1136.9},0).wait(1).to({regX:200.1,regY:489.9,rotation:3.6,x:963.9,y:1294.2},0).wait(1).to({regX:190,regY:332.8,rotation:3.7,x:964,y:1137},0).wait(1).to({rotation:4.1,x:964.9},0).wait(1).to({rotation:4.4,x:965.9},0).wait(1).to({rotation:4.8,x:966.9,y:1137.1},0).wait(1).to({regX:200.1,regY:489.9,scaleX:1,scaleY:1,rotation:5,x:963.8,y:1294.3},0).wait(3).to({regX:190,regY:332.8,rotation:5.1,x:967.6,y:1137},0).wait(1).to({rotation:5.2,x:967.9,y:1137.1},0).wait(1).to({rotation:5.3,x:968.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:968.7},0).wait(1).to({rotation:5.6,x:969.2},0).wait(1).to({rotation:5.8,x:969.6},0).wait(1).to({rotation:5.9,x:969.9},0).wait(1).to({regX:200,regY:489.9,rotation:6,x:963.8,y:1294.2},0).wait(1).to({regX:190,regY:332.8,x:970.3,y:1137.1},0).wait(1).to({x:970.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:970},0).wait(1).to({x:969.9},0).wait(1).to({rotation:5.8,x:969.8},0).wait(1).to({regX:200,regY:489.9,x:963.9,y:1294.2},0).wait(1).to({regX:190,regY:332.8,x:969.7,y:1137.1},0).wait(1).to({x:969.6,y:1137.2},0).wait(1).to({rotation:5.7,x:969.5,y:1137.1},0).wait(1).to({x:969.4},0).wait(1).to({x:969.3},0).wait(1).to({rotation:5.6,x:969.1},0).wait(1).to({x:969},0).wait(1).to({regX:199.9,regY:489.9,x:963.7,y:1294.2},0).wait(1).to({regX:190,regY:332.8,rotation:5.8,x:969.4,y:1137.2},0).wait(1).to({rotation:6.2,x:970,y:1137.4},0).wait(1).to({rotation:6.7,x:970.7,y:1137.5},0).wait(1).to({regX:200,regY:489.9,rotation:7,x:961.9,y:1294.4},0).wait(1).to({regX:190,regY:332.8,x:971,y:1137.6},0).wait(1).to({rotation:6.8,x:970.7,y:1137.5},0).wait(1).to({rotation:6.6,x:970.2},0).wait(1).to({rotation:6.4,x:969.6,y:1137.4},0).wait(1).to({rotation:6.1,x:968.9},0).wait(1).to({rotation:5.7,x:968.1,y:1137.3},0).wait(1).to({rotation:5.4,x:967.3},0).wait(1).to({rotation:5,x:966.3,y:1137.2},0).wait(1).to({rotation:4.6,x:965.4,y:1137.1},0).wait(1).to({rotation:4.1,x:964.3},0).wait(1).to({rotation:3.7,x:963.3},0).wait(1).to({rotation:3.2,x:962.2,y:1137},0).wait(1).to({rotation:2.8,x:961.1},0).wait(1).to({rotation:2.3,x:960,y:1137.1},0).wait(1).to({rotation:1.8,x:958.9,y:1137},0).wait(1).to({rotation:1.4,x:957.7},0).wait(1).to({rotation:0.9,x:956.6,y:1137.1},0).wait(1).to({rotation:0.4,x:955.4},0).wait(1).to({rotation:-0.1,x:954.3,y:1137.2},0).wait(1).to({rotation:-0.5,x:953.3},0).wait(1).to({rotation:-1,x:952.1},0).wait(1).to({rotation:-1.4,x:951.1,y:1137.3},0).wait(1).to({rotation:-1.8,x:950.2,y:1137.4},0).wait(1).to({rotation:-2.2,x:949.3},0).wait(1).to({rotation:-2.6,x:948.4,y:1137.5},0).wait(1).to({rotation:-2.9,x:947.7,y:1137.6},0).wait(1).to({rotation:-3.1,x:947.2},0).wait(1).to({regX:200,regY:489.9,rotation:-3.2,x:965.6,y:1293.7},0).wait(1).to({regX:190,regY:332.8,rotation:-3.1,x:947.1,y:1137.8},0).wait(1).to({rotation:-2.9,x:947.5,y:1137.7},0).wait(1).to({rotation:-2.6,x:948},0).wait(1).to({rotation:-2.3,x:948.6},0).wait(1).to({rotation:-1.9,x:949.1},0).wait(1).to({rotation:-1.6,x:949.7},0).wait(1).to({rotation:-1.3,x:950.1},0).wait(1).to({regX:200,regY:489.9,rotation:-1.2,x:963.7,y:1294.3},0).wait(1).to({regX:190,regY:332.8,x:950.5,y:1137.7},0).wait(1).to({x:950.4},0).wait(2).to({x:950.5},0).wait(3).to({rotation:-1.1},0).wait(1).to({x:950.6},0).wait(2).to({y:1137.6},0).wait(3).to({x:950.7},0).wait(3).to({rotation:-1},0).wait(2).to({regX:199.9,regY:489.8,x:963.6,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:-1.1,x:950.7,y:1137.7},0).wait(1).to({rotation:-1.2,x:950.3},0).wait(1).to({rotation:-1.4,x:949.7},0).wait(1).to({rotation:-1.7,x:949,y:1137.8},0).wait(1).to({rotation:-2,x:948.2,y:1137.9},0).wait(1).to({rotation:-2.3,x:947.5},0).wait(1).to({rotation:-2.6,x:946.6,y:1138},0).wait(1).to({rotation:-2.9,x:945.7,y:1138.1},0).wait(1).to({rotation:-3.2,x:944.8,y:1138.2},0).wait(1).to({rotation:-3.6,x:943.9,y:1138.3},0).wait(1).to({rotation:-3.9,x:943,y:1138.4},0).wait(1).to({rotation:-4.2,x:942.1,y:1138.5},0).wait(1).to({rotation:-4.5,x:941.3,y:1138.6},0).wait(1).to({rotation:-4.8,x:940.6,y:1138.7},0).wait(1).to({rotation:-5,x:940.1,y:1138.8},0).wait(1).to({regX:199.9,regY:489.8,rotation:-5.1,x:963.5,y:1294.1},0).wait(1).to({regX:190,regY:332.8,x:939.8,y:1138.9},0).wait(2).to({rotation:-5},0).wait(3).to({x:939.9},0).wait(4).to({x:940},0).wait(2).to({x:940.1},0).wait(1).to({rotation:-4.9,y:1138.8},0).wait(3).to({x:940.2},0).wait(2).to({y:1138.9},0).wait(1).to({rotation:-4.8,x:940.3},0).wait(1).to({y:1138.8},0).wait(3).to({x:940.4},0).wait(1).to({x:940.5},0).wait(1).to({rotation:-4.7},0).wait(1).to({x:940.6},0).wait(3).to({x:940.7},0).wait(2).to({rotation:-4.6},0).wait(2).to({x:940.8},0).wait(2).to({x:940.9},0).wait(1).to({x:941,y:1138.7},0).wait(2).to({rotation:-4.5},0).wait(4).to({x:941.1,y:1138.8},0).wait(1).to({regX:199.9,regY:489.8,x:963.3,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:-4.6,x:940.8,y:1138.7},0).wait(1).to({rotation:-4.8,x:940.5,y:1138.6},0).wait(1).to({rotation:-5.1,x:940,y:1138.5},0).wait(1).to({rotation:-5.4,x:939.5,y:1138.4},0).wait(1).to({rotation:-5.6,x:939,y:1138.3},0).wait(1).to({regX:199.9,regY:489.8,rotation:-5.8,x:964.4,y:1293.1},0).wait(1).to({regX:190,regY:332.8,rotation:-5.4,x:939.7,y:1138.2},0).wait(1).to({rotation:-4.6,x:941.7,y:1137.8},0).wait(1).to({rotation:-3.5,x:944.4,y:1137.6},0).wait(1).to({rotation:-2.2,x:947.7,y:1137.2},0).wait(1).to({rotation:-0.8,x:951.2,y:1137},0).wait(1).to({rotation:0.7,x:954.9,y:1136.9},0).wait(1).to({rotation:2.2,x:958.6},0).wait(1).to({rotation:3.6,x:962.3},0).wait(1).to({rotation:5,x:965.6,y:1137.1},0).wait(1).to({rotation:6.1,x:968.4,y:1137.3},0).wait(1).to({regX:199.9,regY:489.8,rotation:6.6,x:961.6,y:1294.2},0).wait(1).to({regX:190,regY:332.8,rotation:6.4,x:969.2,y:1137.4},0).wait(1).to({rotation:5.9,x:968,y:1137.3},0).wait(1).to({rotation:5.3,x:966.5,y:1137.2},0).wait(1).to({rotation:4.6,x:964.8,y:1137.1},0).wait(1).to({rotation:3.9,x:963,y:1137},0).wait(1).to({rotation:3.2,x:961.2,y:1136.9},0).wait(1).to({rotation:2.6,x:959.7},0).wait(1).to({regX:199.9,regY:489.8,rotation:2.3,x:962.5,y:1293.8},0).wait(1).to({regX:190,regY:332.8,rotation:2.5,x:959.3,y:1136.9},0).wait(1).to({rotation:2.9,x:960.3},0).wait(1).to({rotation:3.3,x:961.5,y:1137},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.8,x:962.7},0).wait(1).to({rotation:4.3,x:963.8},0).wait(1).to({regX:199.9,regY:489.8,rotation:4.5,x:962,y:1294},0).wait(1).to({regX:190,regY:332.8,rotation:4.7,x:965.1,y:1137.2},0).wait(1).to({rotation:5.2,x:966.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:967.6,y:1137.3},0).wait(1).to({rotation:6.3,x:969},0).wait(1).to({regX:199.9,regY:489.8,rotation:6.6,x:961.6,y:1294.2},0).wait(1).to({regX:190,regY:332.8,x:969.7,y:1137.5},0).wait(1).to({scaleX:1,scaleY:1,x:969.6},0).wait(1).to({regX:199.9,regY:489.8,rotation:6.5,x:961.6,y:1294.1},0).wait(1).to({regX:190,regY:332.8,rotation:6.3,x:969.1,y:1137.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:967.9,y:1137.4},0).wait(1).to({rotation:5.3,x:966.3,y:1137.3},0).wait(1).to({rotation:4.6,x:964.5,y:1137.2},0).wait(1).to({rotation:3.9,x:962.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.1,x:960.5},0).wait(1).to({rotation:2.3,x:958.4},0).wait(1).to({rotation:1.6,x:956.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:954.5,y:1137.3},0).wait(1).to({rotation:0.3,x:952.8},0).wait(1).to({regX:200,regY:489.8,rotation:0,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:952,y:1137.5},0).wait(3).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:952,y:1137.5},0).wait(4).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:952,y:1137.5},0).wait(3).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:952,y:1137.5},0).wait(17).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:952,y:1137.5},0).wait(8).to({regX:200,regY:489.8,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:0.2,x:952.5,y:1137.4},0).wait(1).to({rotation:0.6,x:953.7,y:1137.3},0).wait(1).to({rotation:1.1,x:955},0).wait(1).to({rotation:1.7,x:956.5,y:1137.2},0).wait(1).to({rotation:2.2,x:958.1},0).wait(1).to({rotation:2.7,x:959.4},0).wait(1).to({regX:200.1,regY:489.8,rotation:3,x:962.1,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:2.7,x:959.4,y:1137.2},0).wait(1).to({rotation:2.1,x:957.7},0).wait(1).to({rotation:1.3,x:955.6,y:1137.3},0).wait(1).to({rotation:0.5,x:953.3,y:1137.4},0).wait(1).to({rotation:-0.3,x:951,y:1137.5},0).wait(1).to({rotation:-1.1,x:949,y:1137.7},0).wait(1).to({regX:200,regY:489.7,rotation:-1.5,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:-1.2,x:948.7,y:1137.8},0).wait(1).to({rotation:-0.6,x:950.4,y:1137.7},0).wait(1).to({rotation:0.1,x:952.4,y:1137.5},0).wait(1).to({rotation:0.9,x:954.5,y:1137.4},0).wait(1).to({rotation:1.6,x:956.4,y:1137.3},0).wait(1).to({regX:200.1,regY:489.7,rotation:2,x:962.1,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:1.9,x:957.2,y:1137.3},0).wait(1).to({rotation:1.6,x:956.5},0).wait(1).to({rotation:1.3,x:955.6,y:1137.4},0).wait(1).to({rotation:1,x:954.6},0).wait(1).to({rotation:0.7,x:953.8},0).wait(1).to({regX:199.9,regY:489.7,rotation:0.5,x:961.9,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:953.5,y:1137.5},0).wait(1).to({rotation:0.6,x:953.7},0).wait(1).to({rotation:0.7,x:954},0).wait(1).to({rotation:0.8,x:954.3,y:1137.4},0).wait(1).to({rotation:1,x:954.7,y:1137.5},0).wait(1).to({rotation:1.1,x:955.2,y:1137.4},0).wait(1).to({rotation:1.3,x:955.5},0).wait(1).to({rotation:1.4,x:956},0).wait(1).to({rotation:1.6,x:956.4,y:1137.3},0).wait(1).to({rotation:1.7,x:956.8,y:1137.4},0).wait(1).to({rotation:1.9,x:957.2,y:1137.3},0).wait(1).to({rotation:2,x:957.4,y:1137.4},0).wait(1).to({regX:199.9,regY:489.7,x:961.9,y:1294.5},0).wait(1).to({regX:190,regY:332.8,x:957.5,y:1137.3},0).wait(1).to({rotation:1.9,x:957.2,y:1137.4},0).wait(1).to({rotation:1.8,x:956.9},0).wait(1).to({rotation:1.6,x:956.4},0).wait(1).to({rotation:1.4,x:955.9},0).wait(1).to({rotation:1.2,x:955.3},0).wait(1).to({rotation:1,x:954.8,y:1137.5},0).wait(1).to({rotation:0.8,x:954.3},0).wait(1).to({rotation:0.6,x:953.8},0).wait(1).to({rotation:0.4,x:953.2,y:1137.6},0).wait(1).to({rotation:0.3,x:952.8},0).wait(1).to({rotation:0.1,x:952.4},0).wait(1).to({regX:199.8,regY:489.7,x:961.9,y:1294.6},0).wait(1).to({regX:190,regY:332.8,x:952.4,y:1137.7},0).wait(1).to({rotation:0.2,x:952.7,y:1137.6},0).wait(1).to({rotation:0.4,x:953.1},0).wait(1).to({rotation:0.5,x:953.6,y:1137.7},0).wait(1).to({rotation:0.7,x:954,y:1137.6},0).wait(1).to({rotation:0.9,x:954.5},0).wait(1).to({rotation:1.1,x:955},0).wait(1).to({rotation:1.3,x:955.5},0).wait(1).to({rotation:1.4,x:956,y:1137.5},0).wait(1).to({regX:199.8,regY:489.6,rotation:1.5,x:961.9,y:1294.6},0).wait(1).to({regX:190,regY:332.8,x:956.1,y:1137.6},0).wait(1).to({x:956.2},0).wait(1).to({x:956.1},0).wait(4).to({x:956},0).wait(2).to({rotation:1.4},0).wait(2).to({x:955.9},0).wait(4).to({x:955.8},0).wait(2).to({rotation:1.3,x:955.7},0).wait(3).to({x:955.6},0).wait(2).to({x:955.5},0).wait(2).to({rotation:1.2},0).wait(1).to({x:955.4},0).wait(1).to({y:1137.7},0).wait(2).to({x:955.3},0).wait(3).to({rotation:1.1,x:955.2},0).wait(1).to({y:1137.6},0).wait(3).to({x:955.1,y:1137.7},0).wait(2).to({x:955,y:1137.6},0).wait(2).to({y:1137.7},0).wait(1).to({rotation:1,y:1137.6},0).wait(2).to({regX:199.9,regY:489.6,x:962,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:1.1,x:954.9,y:1137.6},0).wait(1).to({x:955.1,y:1137.7},0).wait(1).to({rotation:1.2,x:955.2},0).wait(1).to({x:955.5,y:1137.6},0).wait(1).to({rotation:1.3,x:955.7},0).wait(1).to({rotation:1.4,x:956},0).wait(1).to({rotation:1.6,x:956.4},0).wait(1).to({rotation:1.7,x:956.6},0).wait(1).to({rotation:1.8,x:957},0).wait(1).to({rotation:1.9,x:957.4,y:1137.5},0).wait(1).to({rotation:2.1,x:957.8,y:1137.6},0).wait(1).to({rotation:2.2,x:958.2,y:1137.5},0).wait(1).to({rotation:2.4,x:958.6},0).wait(1).to({rotation:2.5,x:959,y:1137.6},0).wait(1).to({rotation:2.7,x:959.5,y:1137.5},0).wait(1).to({rotation:2.9,x:959.9},0).wait(1).to({rotation:3,x:960.4},0).wait(1).to({rotation:3.2,x:960.8},0).wait(1).to({rotation:3.4,x:961.3},0).wait(1).to({rotation:3.5,x:961.7},0).wait(1).to({rotation:3.7,x:962.1},0).wait(1).to({rotation:3.8,x:962.6},0).wait(1).to({rotation:4,x:963},0).wait(1).to({rotation:4.1,x:963.5},0).wait(1).to({rotation:4.3,x:963.8},0).wait(1).to({rotation:4.4,x:964.3},0).wait(1).to({rotation:4.6,x:964.6},0).wait(1).to({rotation:4.7,x:964.9,y:1137.6},0).wait(1).to({rotation:4.8,x:965.3},0).wait(1).to({rotation:4.9,x:965.5},0).wait(1).to({rotation:5,x:965.7},0).wait(1).to({regX:199.9,regY:489.6,x:962,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:4.9,x:965.5,y:1137.6},0).wait(1).to({rotation:4.6,x:965,y:1137.5},0).wait(1).to({rotation:4.2,x:964.2},0).wait(1).to({rotation:3.7,x:963.2,y:1137.4},0).wait(1).to({rotation:3.2,x:962.2},0).wait(1).to({rotation:2.7,x:961,y:1137.3},0).wait(1).to({rotation:2.1,x:960},0).wait(1).to({rotation:1.5,x:958.8,y:1137.4},0).wait(1).to({rotation:1,x:957.7,y:1137.3},0).wait(1).to({rotation:0.4,x:956.6,y:1137.4},0).wait(1).to({rotation:-0.1,x:955.6},0).wait(1).to({rotation:-0.5,x:954.8,y:1137.5},0).wait(1).to({regX:199.9,regY:489.6,rotation:-0.6,x:966.1,y:1294.1},0).wait(1).to({regX:190,regY:332.8,x:954.6,y:1137.4},0).wait(1).to({rotation:-0.4,x:954.9,y:1137.5},0).wait(1).to({rotation:-0.1,x:955.4,y:1137.4},0).wait(1).to({rotation:0.2,x:956.1},0).wait(1).to({rotation:0.5,x:956.8},0).wait(1).to({rotation:0.9,x:957.5,y:1137.3},0).wait(1).to({rotation:1.3,x:958.3},0).wait(1).to({rotation:1.7,x:959.2},0).wait(1).to({rotation:2.2,x:960.1},0).wait(1).to({rotation:2.6,x:961,y:1137.4},0).wait(1).to({rotation:3,x:961.8,y:1137.3},0).wait(1).to({rotation:3.5,x:962.7},0).wait(1).to({rotation:3.9,x:963.5,y:1137.5},0).wait(1).to({rotation:4.3,x:964.3,y:1137.4},0).wait(1).to({rotation:4.6,x:965,y:1137.5},0).wait(1).to({rotation:4.9,x:965.5,y:1137.6},0).wait(1).to({regX:199.9,regY:489.6,rotation:5,x:962,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:4.9,x:965.4,y:1137.6},0).wait(1).to({rotation:4.8,x:965.1,y:1137.5},0).wait(1).to({rotation:4.6,x:964.7},0).wait(1).to({rotation:4.5,x:964.4},0).wait(1).to({rotation:4.4,x:964.1},0).wait(1).to({rotation:4.3,x:963.8},0).wait(1).to({rotation:4.2,x:963.5},0).wait(1).to({rotation:4,x:963.1},0).wait(1).to({rotation:3.9,x:962.8},0).wait(1).to({rotation:3.8,x:962.5},0).wait(1).to({rotation:3.7,x:962.1},0).wait(1).to({rotation:3.6,x:961.8},0).wait(1).to({rotation:3.4,x:961.5},0).wait(1).to({rotation:3.3,x:961.2},0).wait(1).to({rotation:3.2,x:960.8},0).wait(1).to({rotation:3.1,x:960.5},0).wait(1).to({rotation:3,x:960.2},0).wait(1).to({rotation:2.8,x:959.9},0).wait(1).to({rotation:2.7,x:959.5},0).wait(1).to({rotation:2.6,x:959.2},0).wait(1).to({rotation:2.5,x:958.8},0).wait(1).to({rotation:2.4,x:958.6},0).wait(1).to({rotation:2.2,x:958.2},0).wait(1).to({rotation:2.1,x:957.9},0).wait(1).to({rotation:2,x:957.6},0).wait(1).to({rotation:1.9,x:957.2},0).wait(1).to({rotation:1.8,x:956.9,y:1137.6},0).wait(1).to({rotation:1.6,x:956.6},0).wait(1).to({regX:199.9,regY:489.7,rotation:1.5,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:1.8,x:957.1,y:1137.4},0).wait(1).to({rotation:2.1,x:958},0).wait(1).to({rotation:2.4,x:958.8,y:1137.5},0).wait(1).to({rotation:2.7,x:959.6,y:1137.4},0).wait(1).to({regX:199.9,regY:489.7,rotation:3,x:962.1,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:2.9,x:960.1,y:1137.5},0).wait(1).to({rotation:2.8,x:959.8},0).wait(1).to({rotation:2.6,x:959.4},0).wait(1).to({rotation:2.5,x:959.1,y:1137.4},0).wait(1).to({rotation:2.4,x:958.7,y:1137.5},0).wait(1).to({rotation:2.3,x:958.4},0).wait(1).to({rotation:2.1,x:958,y:1137.4},0).wait(1).to({rotation:2,x:957.7,y:1137.5},0).wait(1).to({rotation:1.9,x:957.3,y:1137.4},0).wait(1).to({rotation:1.8,x:957},0).wait(1).to({rotation:1.6,x:956.7,y:1137.5},0).wait(1).to({rotation:1.5,x:956.3,y:1137.4},0).wait(1).to({rotation:1.4,x:955.9,y:1137.5},0).wait(1).to({rotation:1.3,x:955.5},0).wait(1).to({rotation:1.1,x:955.3},0).wait(1).to({rotation:1,x:954.9},0).wait(1).to({rotation:0.9,x:954.5},0).wait(1).to({rotation:0.8,x:954.2},0).wait(1).to({rotation:0.6,x:953.8},0).wait(1).to({rotation:0.5,x:953.5},0).wait(1).to({rotation:0.4,x:953.2},0).wait(1).to({rotation:0.3,x:952.8,y:1137.6},0).wait(1).to({rotation:0.1,x:952.4,y:1137.5},0).wait(1).to({regX:200,regY:489.8,rotation:0,x:962,y:1294.5},0).wait(1).to({regX:190,regY:332.8,rotation:-0.3,x:951.2,y:1137.5},0).wait(1).to({rotation:-0.9,x:949.7,y:1137.6},0).wait(1).to({rotation:-1.5,x:948.2,y:1137.7},0).wait(1).to({regX:200.1,regY:489.9,rotation:-2,x:962.3,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-2.1,x:946.3,y:1137.8},0).wait(1).to({rotation:-2.4,x:945.6},0).wait(1).to({rotation:-2.7,x:944.7,y:1137.9},0).wait(1).to({rotation:-3.1,x:943.8,y:1138},0).wait(1).to({rotation:-3.4,x:942.8,y:1138.1},0).wait(1).to({regX:200.1,regY:489.8,rotation:-3.7,x:962.3,y:1294.3},0).wait(1).to({regX:190,regY:332.8,x:942.1,y:1138.2},0).wait(1).to({rotation:-3.6,x:942.4,y:1138.3},0).wait(1).to({rotation:-3.5,x:942.7},0).wait(1).to({rotation:-3.4,x:943,y:1138.2},0).wait(1).to({regX:200.1,regY:489.9,rotation:-3.3,x:962.4,y:1294.4},0).wait(1).to({regX:190,regY:332.8,rotation:-3.5,x:942.7,y:1138.2},0).wait(1).to({rotation:-3.8,x:941.9,y:1138.3},0).wait(1).to({rotation:-4.1,x:941},0).wait(1).to({regX:200.1,regY:489.8,rotation:-4.4,x:962.4,y:1294.3},0).wait(1).to({regX:190,regY:332.8,rotation:-4.2,x:940.7,y:1138.5},0).wait(1).to({rotation:-3.8,x:941.7},0).wait(1).to({rotation:-3.3,x:943},0).wait(1).to({rotation:-2.8,x:944.5},0).wait(1).to({rotation:-2.1,x:946.1},0).wait(1).to({rotation:-1.4,x:947.8,y:1138.6},0).wait(1).to({rotation:-0.7,x:949.6,y:1138.7},0).wait(1).to({rotation:0,x:951.5,y:1138.8},0).wait(1).to({rotation:0.7,x:953.4,y:1139},0).wait(1).to({rotation:1.4,x:955.3,y:1139.1},0).wait(1).to({rotation:2.2,x:957.1,y:1139.3},0).wait(1).to({rotation:2.8,x:958.8,y:1139.5},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.3,x:961.1,y:1296.9},0).wait(1).to({regX:190,regY:332.8,x:960,y:1139.7},0).wait(1).to({x:960.1,y:1140},0).wait(1).to({rotation:3.4,x:960.2,y:1140.3},0).wait(1).to({rotation:3.5,x:960.4,y:1140.7},0).wait(1).to({x:960.5,y:1141},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1141.2},0).wait(1).to({y:1141},0).wait(1).to({y:1140.8},0).wait(1).to({y:1140.5},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(62).to({regX:190,regY:332.8,rotation:3.7,x:961.2,y:1141.3},0).wait(1).to({rotation:4.1,x:962.1},0).wait(1).to({rotation:4.6,x:963.4},0).wait(1).to({rotation:5.1,x:964.7},0).wait(1).to({rotation:5.6,x:966,y:1141.4},0).wait(1).to({rotation:6.1,x:967.3},0).wait(1).to({regX:200.2,regY:489.9,rotation:6.5,x:960.6,y:1298.7},0).wait(1).to({regX:190,regY:332.8,rotation:6.6,x:968.4,y:1141.5},0).wait(1).to({x:968.6},0).wait(1).to({rotation:6.7,x:968.8,y:1141.6},0).wait(1).to({rotation:6.8,x:969.1,y:1141.5},0).wait(1).to({rotation:6.9,x:969.4,y:1141.6},0).wait(1).to({rotation:7.1,x:969.7},0).wait(1).to({rotation:7.2,x:970},0).wait(1).to({rotation:7.3,x:970.3},0).wait(1).to({rotation:7.4,x:970.6,y:1141.7},0).wait(1).to({rotation:7.6,x:971},0).wait(1).to({rotation:7.7,x:971.3},0).wait(1).to({rotation:7.8,x:971.6,y:1141.8},0).wait(1).to({rotation:7.9,x:972},0).wait(1).to({regX:200.2,regY:489.9,rotation:8,x:960.4,y:1298.8},0).wait(1).to({regX:190,regY:332.8,rotation:7.5,x:970.8,y:1141.5},0).wait(1).to({rotation:6.5,x:968.3,y:1141},0).wait(1).to({rotation:5.4,x:965.4,y:1140.4},0).wait(1).to({rotation:4.2,x:962.3,y:1139.8},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.3,x:961.1,y:1296.9},0).wait(1).to({regX:190,regY:332.8,x:960,y:1139.7},0).wait(1).to({x:960.1,y:1140},0).wait(1).to({rotation:3.4,x:960.2,y:1140.3},0).wait(1).to({rotation:3.5,x:960.4,y:1140.7},0).wait(1).to({x:960.5,y:1141},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1141.2},0).wait(1).to({y:1141},0).wait(1).to({y:1140.8},0).wait(1).to({y:1140.5},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(12).to({regX:190,regY:332.8,x:960.6,y:1141},0).wait(1).to({y:1140.4},0).wait(1).to({y:1139.7},0).wait(1).to({y:1139},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1295.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1139.8},0).wait(1).to({y:1142.2},0).wait(1).to({y:1145},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1304.8},0).wait(12).to({regX:190,regY:332.8,x:960.6,y:1146.4},0).wait(1).to({x:960.4,y:1144.8},0).wait(1).to({rotation:3.4,x:960.2,y:1143},0).wait(1).to({rotation:3.3,x:960,y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1296.9},0).wait(1).to({regX:190,regY:332.8,x:960,y:1139.7},0).wait(1).to({rotation:3.4,x:960.1,y:1140.1},0).wait(1).to({x:960.3,y:1140.5},0).wait(1).to({rotation:3.5,x:960.5,y:1141},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1141.2},0).wait(1).to({y:1141},0).wait(1).to({y:1140.8},0).wait(1).to({y:1140.5},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(11).to({regX:190,regY:332.8,rotation:3.8,x:961.4,y:1141.3},0).wait(1).to({rotation:4.4,x:962.9},0).wait(1).to({rotation:5.1,x:964.7,y:1141.4},0).wait(1).to({rotation:5.9,x:966.6,y:1141.5},0).wait(1).to({rotation:6.6,x:968.7,y:1141.6},0).wait(1).to({rotation:7.4,x:970.7,y:1141.7},0).wait(1).to({regX:200.2,regY:489.9,rotation:8,x:960.4,y:1298.7},0).wait(18).to({regX:190,regY:332.8,rotation:7.4,x:970.7,y:1141.6},0).wait(1).to({rotation:6.3,x:967.7,y:1141.4},0).wait(1).to({rotation:4.9,x:964.1,y:1141.3},0).wait(1).to({rotation:3.4,x:960.2},0).wait(1).to({rotation:1.8,x:956.1,y:1141.4},0).wait(1).to({rotation:0.2,x:952.1,y:1141.6},0).wait(1).to({regX:200.2,regY:489.9,rotation:-0.9,x:961.8,y:1298.7},0).wait(1).to({regX:190,regY:332.8,rotation:-0.6,x:950,y:1141.7},0).wait(1).to({rotation:0.2,x:951.8,y:1141.6},0).wait(1).to({rotation:1,x:954,y:1141.4},0).wait(1).to({rotation:1.9,x:956.4},0).wait(1).to({rotation:2.8,x:958.8,y:1141.3},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1141.2},0).wait(1).to({y:1141},0).wait(1).to({y:1140.8},0).wait(1).to({y:1140.5},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(16).to({rotation:-0.7,x:961.8,y:1298.6},0).wait(1).to({regX:190,regY:332.8,rotation:-1,x:949,y:1141.8},0).wait(1).to({rotation:-1.5,x:947.6},0).wait(1).to({regX:200.2,regY:489.9,rotation:-1.9,x:962,y:1298.6},0).wait(1).to({regX:190,regY:332.8,rotation:-1.6,x:947.3,y:1141.8},0).wait(1).to({rotation:-1.1,x:948.6,y:1141.7},0).wait(1).to({regX:200.2,regY:489.9,rotation:-0.7,x:961.8,y:1298.6},0).wait(1).to({regX:190,regY:332.8,rotation:-0.9,x:949.3,y:1141.7},0).wait(1).to({rotation:-1.2,x:948.3,y:1141.8},0).wait(1).to({rotation:-1.6,x:947.3,y:1141.9},0).wait(1).to({regX:200.2,regY:489.9,rotation:-1.9,x:962,y:1298.6},0).wait(1).to({regX:190,regY:332.8,rotation:-1.6,x:947.4,y:1141.8},0).wait(1).to({rotation:-0.8,x:949.3,y:1141.7},0).wait(1).to({rotation:0.2,x:951.9,y:1141.5},0).wait(1).to({rotation:1.3,x:954.8,y:1141.4},0).wait(1).to({rotation:2.5,x:957.9,y:1141.3},0).wait(1).to({rotation:3.7,x:960.9},0).wait(1).to({rotation:4.7,x:963.6,y:1141.4},0).wait(1).to({regX:200.1,regY:489.9,rotation:5.3,x:960.8,y:1298.8},0).wait(1).to({regX:190,regY:332.8,rotation:5.1,x:964.7,y:1141.4},0).wait(1).to({rotation:4.7,x:963.7,y:1141.1},0).wait(1).to({rotation:4.3,x:962.6,y:1140.8},0).wait(1).to({rotation:3.8,x:961.4,y:1140.5},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(21).to({regX:190,regY:332.8,rotation:3.2,x:959.8,y:1141.3},0).wait(1).to({rotation:2.4,x:957.8},0).wait(1).to({rotation:1.4,x:955.1,y:1141.4},0).wait(1).to({rotation:0.2,x:952.1,y:1141.5},0).wait(1).to({rotation:-1,x:948.9,y:1141.7},0).wait(1).to({rotation:-2.2,x:945.7,y:1142},0).wait(1).to({rotation:-3.3,x:942.9,y:1142.4},0).wait(1).to({regX:200.2,regY:489.9,rotation:-3.9,x:962.3,y:1298.6},0).wait(1).to({regX:190,regY:332.8,rotation:-3.6,x:942.1,y:1142.5},0).wait(1).to({rotation:-3.1,x:943.4,y:1142.3},0).wait(1).to({regX:200.2,regY:489.9,rotation:-2.7,x:962.1,y:1298.6},0).wait(25).to({regX:190,regY:332.8,rotation:-2.3,x:945.4,y:1142},0).wait(1).to({rotation:-1.5,x:947.5,y:1141.7},0).wait(1).to({rotation:-0.5,x:950.2,y:1141.3},0).wait(1).to({rotation:0.7,x:953.2,y:1140.9},0).wait(1).to({rotation:1.9,x:956.2,y:1140.7},0).wait(1).to({rotation:2.9,x:959,y:1140.4},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1297.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1140.5},0).wait(1).to({y:1140.8},0).wait(1).to({y:1141.1},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(15).to({regX:190,regY:332.8,rotation:3.4,x:960.4,y:1141.3},0).wait(1).to({rotation:3,x:959.8,y:1141.2},0).wait(1).to({rotation:2.6,x:959.1,y:1141.1},0).wait(1).to({rotation:2.2,x:958.4,y:1141},0).wait(1).to({regX:200.2,regY:489.9,rotation:1.8,x:963.1,y:1298.3},0).wait(1).to({regX:190,regY:332.8,rotation:2,x:958.2,y:1140.9},0).wait(1).to({rotation:2.4,x:958.7,y:1141.1},0).wait(1).to({rotation:2.8,x:959.4,y:1141.2},0).wait(1).to({rotation:3.2,x:960.1},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,rotation:3.4,x:960.4,y:1141.3},0).wait(1).to({rotation:3,x:959.8,y:1141.2},0).wait(1).to({rotation:2.6,x:959.1,y:1141.1},0).wait(1).to({rotation:2.2,x:958.4,y:1141},0).wait(1).to({regX:200.2,regY:489.9,rotation:1.8,x:963.1,y:1298.3},0).wait(1).to({regX:190,regY:332.8,rotation:2,x:958.2,y:1140.9},0).wait(1).to({rotation:2.4,x:958.7,y:1141.1},0).wait(1).to({rotation:2.8,x:959.4,y:1141.2},0).wait(1).to({rotation:3.2,x:960.1},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,rotation:3.3,x:960.2,y:1141.3},0).wait(1).to({rotation:2.8,x:959.4,y:1141.1},0).wait(1).to({rotation:2.3,x:958.6,y:1141},0).wait(1).to({regX:200.2,regY:489.9,rotation:1.8,x:963.1,y:1298.3},0).wait(1).to({regX:190,regY:332.8,rotation:1.9,x:958,y:1141},0).wait(1).to({rotation:2.2,x:958.3},0).wait(1).to({rotation:2.4,x:958.8},0).wait(1).to({rotation:2.7,x:959.3,y:1141.1},0).wait(1).to({rotation:3,x:959.8,y:1141.2},0).wait(1).to({rotation:3.3,x:960.3,y:1141.3},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.5,x:961.1,y:1298.8},0).wait(10).to({regX:190,regY:332.8,x:960.5,y:1141.3},0).wait(1).to({rotation:3.4,x:960.2,y:1141.1},0).wait(1).to({rotation:3.2,x:959.7,y:1140.8},0).wait(1).to({rotation:2.9,x:959,y:1140.5},0).wait(1).to({rotation:2.6,x:958.1,y:1140.1},0).wait(1).to({rotation:2.2,x:957.1,y:1139.6},0).wait(1).to({rotation:1.8,x:956,y:1139},0).wait(1).to({regX:200.2,regY:489.9,rotation:1.3,x:961.4,y:1295.7},0).wait(1).to({regX:190,regY:332.8,rotation:0.8,x:953.3,y:1139.6},0).wait(1).to({rotation:0.2,x:951.9,y:1140.9},0).wait(1).to({rotation:-0.4,x:950.4,y:1142.2},0).wait(1).to({regX:200.2,regY:489.9,rotation:-1,x:961.7,y:1300.5},0).wait(1).to({regX:190,regY:332.8,x:948.8,y:1143},0).wait(1).to({y:1142.3},0).wait(1).to({regX:200.2,regY:489.9,x:961.7,y:1298.5},0).wait(1).to({regX:190,regY:332.8,x:948.8,y:1141.6},0).wait(5).to({regX:200.2,regY:489.9,x:961.7,y:1298.5},0).wait(1).to({regX:190,regY:332.8,rotation:-0.6,x:949.8,y:1140.9},0).wait(1).to({rotation:-0.2,x:950.9,y:1140.3},0).wait(1).to({rotation:0.1,x:951.9,y:1139.5},0).wait(1).to({rotation:0.5,x:953,y:1138.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:954,y:1138.1},0).wait(1).to({regX:200.3,regY:489.9,rotation:1.3,x:961.8,y:1294.6},0).wait(1).to({regX:190,regY:332.8,rotation:1.8,x:956.3,y:1139},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:957.6,y:1140.7},0).wait(1).to({rotation:2.8,x:958.9,y:1142.5},0).wait(1).to({regX:200.2,regY:489.9,rotation:3.3,x:961.7,y:1301.7},0).wait(1).to({regX:190,regY:332.8,x:960.3,y:1143.3},0).wait(1).to({y:1142.3},0).wait(1).to({regX:200.2,regY:489.9,x:961.7,y:1298.7},0).wait(1).to({regX:190,regY:332.8,x:960.3,y:1141.2},0).wait(4).to({regX:200.2,regY:489.9,x:961.7,y:1298.7},0).wait(1).to({regX:190,regY:332.8,x:960.3,y:1140.8},0).wait(1).to({x:960.2,y:1140.4},0).wait(1).to({y:1139.9},0).wait(1).to({x:960.1,y:1139.4},0).wait(1).to({y:1138.9},0).wait(1).to({regX:200.1,regY:489.9,x:961.1,y:1295.7},0).wait(1).to({regX:190,regY:332.8,rotation:3.4,x:960.3,y:1139.4},0).wait(1).to({rotation:3.5,x:960.5,y:1140.4},0).wait(1).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(1).to({regX:190,regY:332.8,x:960.6,y:1141.3},0).wait(2).to({regX:200.2,regY:489.9,x:961.1,y:1298.8},0).wait(3));

	// ll_s_m_l_arm_all
	this.instance_5 = new lib.ll_s_m_l_arm_all("synched",0,false);
	this.instance_5.setTransform(808.5,960.3,1,1,0,0,0,72,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:64.8,regY:390.6,rotation:-0.3,x:802,y:1327.3},0).wait(1).to({rotation:-0.7,x:802.4,y:1328.1},0).wait(1).to({rotation:-1,x:802.8,y:1329},0).wait(1).to({regX:72,regY:24.4,rotation:-1.2,x:802.4,y:963.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.8,x:801,y:1329},0).wait(1).to({rotation:0.3,x:796.2,y:1327.7},0).wait(1).to({rotation:1.7,x:789.9,y:1326},0).wait(1).to({rotation:3.2,x:782.8,y:1323.7},0).wait(1).to({rotation:4.9,x:775.2,y:1321},0).wait(1).to({rotation:6.6,x:767.9,y:1318.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:8,x:761.3,y:1315.2},0).wait(1).to({regX:72,regY:24.4,rotation:8.8,x:821.1,y:953},0).wait(1).to({regX:64.8,regY:390.6,scaleX:1,scaleY:1,rotation:9.2,x:756.8,y:1313},0).wait(1).to({rotation:9.9,x:755,y:1312.1},0).wait(1).to({regX:72,regY:24.4,rotation:10.4,x:826.9,y:952.5},0).wait(1).to({regX:64.8,regY:390.6,x:753.9,y:1311.4},0).wait(1).to({rotation:10.3,x:754.4,y:1311.5},0).wait(1).to({rotation:10.2,x:755.1,y:1311.7},0).wait(1).to({rotation:10,x:756,y:1311.8},0).wait(1).to({rotation:9.9,x:756.9,y:1312},0).wait(1).to({rotation:9.7,x:757.8,y:1312.2},0).wait(1).to({rotation:9.6,x:758.7,y:1312.4},0).wait(1).to({rotation:9.5,x:759.4,y:1312.5},0).wait(1).to({regX:72,regY:24.4,rotation:9.4,x:826.9,y:952.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:9.3,x:760,y:1313.1},0).wait(1).to({rotation:9,x:760.5,y:1314.1},0).wait(1).to({rotation:8.5,x:761.2,y:1315.5},0).wait(1).to({rotation:8,x:761.9,y:1317.2},0).wait(1).to({rotation:7.4,x:762.7,y:1319},0).wait(1).to({rotation:6.8,x:763.7,y:1320.9},0).wait(1).to({rotation:6.2,x:764.7,y:1322.8},0).wait(1).to({rotation:5.5,x:765.6,y:1324.7},0).wait(1).to({rotation:4.9,x:766.6,y:1326.5},0).wait(1).to({rotation:4.3,x:767.5,y:1328.1},0).wait(1).to({rotation:3.8,x:768.2,y:1329.5},0).wait(1).to({regX:72.1,regY:24.4,rotation:3.5,x:798.5,y:965.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.6,x:768.6,y:1329.9},0).wait(1).to({rotation:3.8,x:768.7,y:1329.2},0).wait(1).to({rotation:4,x:768.8,y:1328.4},0).wait(1).to({regX:72.1,regY:24.3,rotation:4.3,x:803.8,y:962.7},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.2,x:768.9,y:1327.7},0).wait(1).to({rotation:4.1,y:1328.2},0).wait(1).to({rotation:3.9,x:768.8,y:1328.7},0).wait(1).to({rotation:3.8,x:768.7,y:1329.2},0).wait(1).to({rotation:3.7,x:768.6,y:1329.7},0).wait(1).to({regX:72.1,regY:24.4,rotation:3.5,x:798.5,y:965.1},0).wait(1).to({regX:64.8,regY:390.6,x:768.6,y:1330.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:768.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:768.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:1330.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:768.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:72,regY:24.4,x:798.4,y:965.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.4,x:768.8,y:1330.4},0).wait(1).to({rotation:3.2,x:769,y:1331.1},0).wait(1).to({rotation:2.9,x:769.2,y:1332},0).wait(1).to({rotation:2.7,x:769.3,y:1332.9},0).wait(1).to({regX:72,regY:24.4,rotation:2.5,x:792.7,y:968},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.6,x:769.2,y:1333.2},0).wait(1).to({rotation:2.9,x:768.7,y:1332.5},0).wait(1).to({rotation:3.3,x:767.9,y:1331.5},0).wait(1).to({rotation:3.8,x:766.8,y:1330.3},0).wait(1).to({rotation:4.4,x:765.6,y:1328.9},0).wait(1).to({rotation:5,x:764.3,y:1327.2},0).wait(1).to({rotation:5.7,x:763,y:1325.5},0).wait(1).to({rotation:6.4,x:761.6,y:1323.5},0).wait(1).to({rotation:7.1,x:760.1,y:1321.5},0).wait(1).to({rotation:7.8,x:758.7,y:1319.5},0).wait(1).to({rotation:8.5,x:757.3,y:1317.4},0).wait(1).to({rotation:9.2,x:756,y:1315.4},0).wait(1).to({rotation:9.8,x:754.8,y:1313.5},0).wait(1).to({rotation:10.2,x:754,y:1312.1},0).wait(1).to({regX:72,regY:24.4,rotation:10.4,x:826.9,y:952.5},0).wait(1).to({regX:64.8,regY:390.6,x:753.7,y:1311.5},0).wait(1).to({rotation:10.3,x:754,y:1311.7},0).wait(1).to({rotation:10.1,x:754.4,y:1312.1},0).wait(1).to({rotation:10,x:754.8,y:1312.6},0).wait(1).to({rotation:9.8,x:755.2,y:1313},0).wait(1).to({rotation:9.6,x:755.7,y:1313.6},0).wait(1).to({rotation:9.4,x:756.3,y:1314.1},0).wait(1).to({rotation:9.2,x:756.8,y:1314.6},0).wait(1).to({rotation:9,x:757.2,y:1315.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.9,x:757.7,y:1315.5},0).wait(1).to({regX:72,regY:24.4,rotation:8.8,x:821,y:955.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:9.5,x:755.3,y:1314.1},0).wait(1).to({rotation:10.3,x:752.7,y:1312.5},0).wait(1).to({rotation:11,x:750.3,y:1310.7},0).wait(1).to({rotation:11.7,x:747.8,y:1308.9},0).wait(1).to({rotation:12.4,x:745.4,y:1307.2},0).wait(1).to({rotation:13.1,x:743,y:1305.3},0).wait(1).to({rotation:13.8,x:740.7,y:1303.4},0).wait(1).to({rotation:14.5,x:738.4,y:1301.5},0).wait(1).to({regX:72,regY:24.4,rotation:15.1,x:838.6,y:948.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:14.6,x:739.3,y:1300.5},0).wait(1).to({rotation:14.1,x:742.5,y:1301.4},0).wait(1).to({rotation:13.6,x:745.6,y:1302.2},0).wait(1).to({rotation:13.1,x:748.7,y:1302.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.6,x:751.9,y:1303.7},0).wait(1).to({rotation:12.1,x:755,y:1304.4},0).wait(1).to({rotation:11.6,x:758.1,y:1305},0).wait(1).to({regX:72,regY:24.3,rotation:11.1,x:838.6,y:948.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:11.3,x:760.2,y:1305.5},0).wait(1).to({rotation:11.4,x:759.2,y:1305.2},0).wait(1).to({rotation:11.6,x:758.1,y:1305},0).wait(1).to({rotation:11.7,x:757.1,y:1304.8},0).wait(1).to({rotation:11.9,x:756.1,y:1304.5},0).wait(1).to({rotation:12.1,x:755.2,y:1304.2},0).wait(1).to({regX:72,regY:24.3,rotation:12.2,x:838.5,y:948.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:12,x:755.4,y:1304.3},0).wait(1).to({rotation:11.8,x:756.5,y:1304.5},0).wait(1).to({rotation:11.7,x:757.6,y:1304.8},0).wait(1).to({rotation:11.5,x:758.6,y:1305},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:759.6,y:1305.2},0).wait(1).to({rotation:11.2,x:760.6,y:1305.4},0).wait(1).to({regX:72,regY:24.4,rotation:11,x:838.6,y:948.4},0).wait(1).to({regX:64.8,regY:390.6,scaleX:1,scaleY:1,rotation:11.2,x:760.7,y:1305.4},0).wait(1).to({rotation:11.3,x:759.8},0).wait(1).to({rotation:11.4,x:759,y:1305.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.6,x:758.1,y:1305.2},0).wait(1).to({regX:72,regY:24.4,rotation:11.7,x:838.6,y:948.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:11.6,x:757.4,y:1305.3},0).wait(1).to({rotation:11.5,x:757.6,y:1305.8},0).wait(1).to({rotation:11.3,x:757.9,y:1306.7},0).wait(1).to({rotation:11,x:758.3,y:1307.6},0).wait(1).to({rotation:10.7,x:758.7,y:1308.7},0).wait(1).to({rotation:10.3,x:759.2,y:1309.9},0).wait(1).to({rotation:9.9,x:759.7,y:1311.2},0).wait(1).to({rotation:9.5,x:760.3,y:1312.6},0).wait(1).to({rotation:9.1,x:760.9,y:1314},0).wait(1).to({rotation:8.6,x:761.5,y:1315.4},0).wait(1).to({rotation:8.2,x:762.1,y:1316.8},0).wait(1).to({rotation:7.7,x:762.8,y:1318.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.2,x:763.4,y:1319.7},0).wait(1).to({rotation:6.8,x:764,y:1321.1},0).wait(1).to({rotation:6.3,x:764.7,y:1322.5},0).wait(1).to({rotation:5.8,x:765.4,y:1323.8},0).wait(1).to({rotation:5.4,x:766,y:1325.1},0).wait(1).to({rotation:5,x:766.7,y:1326.3},0).wait(1).to({rotation:4.6,x:767.3,y:1327.4},0).wait(1).to({rotation:4.2,x:767.7,y:1328.4},0).wait(1).to({rotation:3.9,x:768.2,y:1329.3},0).wait(1).to({rotation:3.6,x:768.6,y:1329.8},0).wait(1).to({regX:72.1,regY:24.4,rotation:3.5,x:798.5,y:965.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.4,x:770.6,y:1329.6},0).wait(1).to({rotation:3.2,x:775.1,y:1328.3},0).wait(1).to({rotation:3,x:780.6,y:1326.6},0).wait(1).to({rotation:2.7,x:786.7,y:1324.8},0).wait(1).to({rotation:2.4,x:792.7,y:1323},0).wait(1).to({rotation:2.1,x:798.1,y:1321.4},0).wait(1).to({regX:72,regY:24.4,rotation:2,x:820.8,y:954.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.8,x:801.2,y:1320.9},0).wait(1).to({rotation:1.4,x:801.5,y:1322},0).wait(1).to({rotation:1,x:801.7,y:1323.4},0).wait(1).to({rotation:0.5,x:802.1,y:1324.8},0).wait(1).to({rotation:0,x:802.3,y:1326.1},0).wait(1).to({rotation:-0.5,x:802.6,y:1327.3},0).wait(1).to({regX:72,regY:24.4,rotation:-0.7,x:805.5,y:961.7},0).wait(1).to({regX:64.8,regY:390.6,x:802.7,y:1327.9},0).wait(1).to({rotation:-0.6,y:1327.6},0).wait(1).to({rotation:-0.4,x:802.6,y:1327.3},0).wait(1).to({rotation:-0.3,x:802.5,y:1326.9},0).wait(1).to({rotation:-0.2,y:1326.5},0).wait(1).to({rotation:-0.1,x:802.4,y:1326.2},0).wait(1).to({regX:72,regY:24.4,rotation:0,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,x:802.4,y:1326.1},0).wait(1).to({rotation:-0.1,y:1326.2},0).wait(1).to({y:1326.4},0).wait(1).to({rotation:-0.2,x:802.5,y:1326.7},0).wait(1).to({rotation:-0.3,x:802.6,y:1327},0).wait(1).to({rotation:-0.5,y:1327.4},0).wait(1).to({rotation:-0.6,x:802.7,y:1327.7},0).wait(1).to({rotation:-0.7,x:802.8,y:1328.1},0).wait(1).to({rotation:-0.9,x:802.9,y:1328.5},0).wait(1).to({rotation:-1,x:803,y:1329},0).wait(1).to({rotation:-1.2,x:803.1,y:1329.3},0).wait(1).to({rotation:-1.3,x:803.2,y:1329.8},0).wait(1).to({rotation:-1.5,x:803.3,y:1330.2},0).wait(1).to({rotation:-1.6,y:1330.7},0).wait(1).to({rotation:-1.8,x:803.5,y:1331.1},0).wait(1).to({rotation:-2,y:1331.5},0).wait(1).to({rotation:-2.1,x:803.7,y:1331.9},0).wait(1).to({rotation:-2.2,y:1332.3},0).wait(1).to({rotation:-2.4,x:803.8,y:1332.6},0).wait(1).to({rotation:-2.5,x:803.9,y:1332.9},0).wait(1).to({rotation:-2.6,x:804,y:1333.2},0).wait(1).to({rotation:-2.7,y:1333.4},0).wait(1).to({regX:72,regY:24.4,x:793.8,y:967.4},0).wait(1).to({regX:64.8,regY:390.6,x:804,y:1333.5},0).wait(1).to({startPosition:0},0).wait(1).to({x:803.9},0).wait(1).to({x:803.8},0).wait(1).to({x:803.7},0).wait(1).to({rotation:-2.6,x:803.5},0).wait(1).to({x:803.4},0).wait(1).to({x:803.3},0).wait(1).to({x:803.2},0).wait(1).to({x:803.1},0).wait(1).to({rotation:-2.5,x:803},0).wait(1).to({regX:72,regY:24.4,x:794,y:967.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:-2.4,x:802.1,y:1333.6},0).wait(1).to({rotation:-2,x:799.7,y:1333.5},0).wait(1).to({rotation:-1.6,x:796.7,y:1333.6},0).wait(1).to({rotation:-1,x:793.3},0).wait(1).to({rotation:-0.4,x:789.6},0).wait(1).to({rotation:0.2,x:785.8,y:1333.5},0).wait(1).to({rotation:0.7,x:782.1,y:1333.4},0).wait(1).to({rotation:1.3,x:778.5,y:1333.2},0).wait(1).to({rotation:1.8,x:775.5,y:1333.1},0).wait(1).to({regX:72,regY:24.3,rotation:2,x:794.1,y:967.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.8,x:775.3,y:1333.1},0).wait(1).to({rotation:1.4,x:777.9,y:1333.2},0).wait(1).to({rotation:0.8,x:781.5,y:1333.4},0).wait(1).to({rotation:0.2,x:785.4,y:1333.5},0).wait(1).to({rotation:-0.4,x:789.7,y:1333.6},0).wait(1).to({rotation:-1.1,x:793.9},0).wait(1).to({rotation:-1.7,x:797.9},0).wait(1).to({rotation:-2.3,x:801.5,y:1333.5},0).wait(1).to({regX:72,regY:24.4,rotation:-2.5,x:794.1,y:967.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-2.7,x:803.3,y:1333.9},0).wait(1).to({rotation:-3,x:803.5,y:1334.8},0).wait(1).to({rotation:-3.4,x:803.8,y:1335.9},0).wait(1).to({rotation:-3.8,x:804.1,y:1337},0).wait(1).to({regX:72,regY:24.4,rotation:-4,x:785.7,y:971.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.9,x:804.2,y:1337.3},0).wait(1).to({rotation:-3.7,x:804,y:1336.7},0).wait(1).to({rotation:-3.3,x:803.8,y:1335.8},0).wait(1).to({rotation:-2.9,x:803.5,y:1334.7},0).wait(1).to({rotation:-2.4,x:803.3,y:1333.5},0).wait(1).to({rotation:-1.8,x:803,y:1332.1},0).wait(1).to({rotation:-1.2,x:802.6,y:1330.6},0).wait(1).to({rotation:-0.6,x:802.3,y:1328.9},0).wait(1).to({rotation:0,x:801.9,y:1327.2},0).wait(1).to({rotation:0.6,x:801.6,y:1325.4},0).wait(1).to({rotation:1.2,x:801.2,y:1323.6},0).wait(1).to({rotation:1.8,x:800.8,y:1321.8},0).wait(1).to({rotation:2.4,x:800.6,y:1320},0).wait(1).to({rotation:2.9,x:800.2,y:1318.4},0).wait(1).to({rotation:3.4,x:799.9,y:1316.8},0).wait(1).to({rotation:3.8,x:799.8,y:1315.7},0).wait(1).to({regX:72,regY:24.4,rotation:4,x:832.2,y:950.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.8,x:799.8,y:1315.6},0).wait(1).to({rotation:3.4,x:800,y:1316.7},0).wait(1).to({rotation:2.9,x:800.3,y:1318.2},0).wait(1).to({rotation:2.3,x:800.7,y:1319.9},0).wait(1).to({rotation:1.6,x:801.1,y:1321.7},0).wait(1).to({rotation:1,x:801.5,y:1323.4},0).wait(1).to({rotation:0.4,x:801.9,y:1324.9},0).wait(1).to({rotation:-0.2,x:802.2,y:1326.2},0).wait(1).to({regX:72,regY:24.4,rotation:-0.4,x:806.9,y:960.9},0).wait(1).to({regX:64.8,regY:390.6,x:802.5,y:1326.7},0).wait(1).to({rotation:-0.2,y:1326.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:802.6,y:1325.6},0).wait(1).to({rotation:0.3,x:802.7,y:1324.9},0).wait(1).to({rotation:0.5,x:802.8,y:1324.2},0).wait(1).to({rotation:0.7,y:1323.6},0).wait(1).to({regX:72,regY:24.4,rotation:0.8,x:815.2,y:957.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.9,x:803,y:1323},0).wait(1).to({rotation:1,x:803.2,y:1322.5},0).wait(1).to({rotation:1.2,x:803.5,y:1321.8},0).wait(1).to({rotation:1.4,x:803.9,y:1321.1},0).wait(1).to({rotation:1.6,x:804.2,y:1320.4},0).wait(1).to({rotation:1.8,x:804.5,y:1319.7},0).wait(1).to({regX:72,regY:24.4,rotation:1.9,x:823.7,y:954},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.8,x:804.7,y:1319.4},0).wait(1).to({x:804.8},0).wait(1).to({x:804.9},0).wait(1).to({x:805},0).wait(1).to({regX:72,regY:24.4,x:823.7,y:954},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.1,x:803.3,y:1319.1},0).wait(1).to({rotation:2.9,x:799.2,y:1318.4},0).wait(1).to({rotation:3.9,x:794,y:1317.5},0).wait(1).to({rotation:5,x:788.1,y:1316.4},0).wait(1).to({rotation:6.1,x:782.1,y:1315},0).wait(1).to({rotation:7.2,x:776.3,y:1313.6},0).wait(1).to({rotation:8.2,x:771.2,y:1312.2},0).wait(1).to({regX:72,regY:24.4,rotation:8.7,x:831.1,y:950.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:8.1,x:771.5,y:1312.2},0).wait(1).to({rotation:7,x:777.7,y:1313.9},0).wait(1).to({rotation:5.5,x:785.4,y:1315.7},0).wait(1).to({rotation:4,x:793.4,y:1317.4},0).wait(1).to({rotation:2.6,x:800.8,y:1318.7},0).wait(1).to({regX:72,regY:24.4,rotation:1.8,x:823.7,y:954},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.1,x:803.3,y:1319.3},0).wait(1).to({rotation:2.6,x:800,y:1319.1},0).wait(1).to({rotation:3.1,x:796.4,y:1318.8},0).wait(1).to({regX:72,regY:24.6,rotation:3.5,x:823.6,y:954},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.3,x:795.2,y:1318.5},0).wait(1).to({rotation:2.9,x:797.6,y:1318.7},0).wait(1).to({rotation:2.5,x:800.5,y:1319},0).wait(1).to({rotation:2,x:803.4,y:1319.1},0).wait(1).to({regX:72,regY:24.4,rotation:1.8,x:823.7,y:954},0).wait(1).to({regX:64.8,regY:390.6,x:805.1,y:1319.4},0).wait(1).to({x:805.2},0).wait(1).to({rotation:1.7,x:805.3},0).wait(1).to({x:805.5,y:1319.5},0).wait(1).to({x:805.6,y:1319.4},0).wait(1).to({rotation:1.6,x:805.7},0).wait(1).to({x:805.9,y:1319.5},0).wait(1).to({x:806},0).wait(1).to({x:806.1},0).wait(1).to({regX:72,regY:24.4,x:823.4,y:954},0).wait(1).to({regX:64.8,regY:390.6,x:806.2,y:1319.5},0).wait(1).to({rotation:1.5},0).wait(1).to({x:806.3,y:1319.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:72,regY:24.4,x:823.2,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.6,x:806.3,y:1319.3},0).wait(1).to({rotation:1.8,y:1318.7},0).wait(1).to({rotation:2.1,y:1317.9},0).wait(1).to({rotation:2.5,x:806.2,y:1317},0).wait(1).to({rotation:2.8,y:1315.9},0).wait(1).to({rotation:3.2,y:1314.8},0).wait(1).to({rotation:3.6,x:806.1,y:1313.7},0).wait(1).to({rotation:4,y:1312.5},0).wait(1).to({rotation:4.4,y:1311.5},0).wait(1).to({rotation:4.6,y:1310.6},0).wait(1).to({regX:72,regY:24.4,rotation:4.8,x:843.8,y:946.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.7,x:806.1,y:1310.6},0).wait(1).to({rotation:4.4,x:806.2,y:1311.3},0).wait(1).to({rotation:4.1,x:806.3,y:1312.2},0).wait(1).to({rotation:3.8,x:806.4,y:1313.1},0).wait(1).to({regX:72,regY:24.4,rotation:3.6,x:836.4,y:948.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.7,x:806.5,y:1313.1},0).wait(1).to({rotation:4.1,x:806.6,y:1312.1},0).wait(1).to({rotation:4.4,x:806.7,y:1311},0).wait(1).to({rotation:4.8,x:806.8,y:1309.8},0).wait(1).to({regX:72,regY:24.4,scaleX:1,scaleY:1,rotation:5,x:846.2,y:945.5},0).wait(2).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.1,x:807,y:1308.9},0).wait(1).to({rotation:5.2,y:1308.7},0).wait(1).to({rotation:5.3,y:1308.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:806.9,y:1307.9},0).wait(1).to({rotation:5.6,y:1307.4},0).wait(1).to({rotation:5.8,x:806.8,y:1307},0).wait(1).to({rotation:5.9,y:1306.6},0).wait(1).to({regX:72,regY:24.4,rotation:6,x:852.1,y:943.5},0).wait(1).to({regX:64.8,regY:390.6,x:806.7,y:1306.4},0).wait(1).to({x:806.8,y:1306.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:807},0).wait(1).to({x:807.2,y:1306.6},0).wait(1).to({rotation:5.8,x:807.3},0).wait(1).to({regX:72,regY:24.4,x:851.6,y:943.8},0).wait(1).to({regX:64.8,regY:390.6,x:807.5,y:1306.7},0).wait(1).to({x:807.6,y:1306.8},0).wait(1).to({rotation:5.7,x:807.8},0).wait(1).to({x:808},0).wait(1).to({x:808.1,y:1306.9},0).wait(1).to({rotation:5.6,x:808.3},0).wait(1).to({x:808.5,y:1307},0).wait(1).to({regX:72,regY:24.4,x:851.2,y:943.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.8,x:808.3,y:1306.4},0).wait(1).to({rotation:6.2,x:807.6,y:1305.3},0).wait(1).to({rotation:6.7,x:806.9,y:1304.1},0).wait(1).to({regX:72,regY:24.4,rotation:7,x:858.2,y:941.4},0).wait(1).to({regX:64.8,regY:390.6,x:806.5,y:1303.5},0).wait(1).to({rotation:6.8,y:1303.9},0).wait(1).to({rotation:6.6,x:806.7,y:1304.5},0).wait(1).to({rotation:6.4,x:806.9,y:1305.3},0).wait(1).to({rotation:6.1,x:807.1,y:1306.2},0).wait(1).to({rotation:5.7,x:807.4,y:1307.3},0).wait(1).to({rotation:5.4,x:807.6,y:1308.4},0).wait(1).to({rotation:5,x:807.9,y:1309.5},0).wait(1).to({rotation:4.6,x:808.2,y:1310.7},0).wait(1).to({rotation:4.1,x:808.5,y:1312},0).wait(1).to({rotation:3.7,x:808.9,y:1313.2},0).wait(1).to({rotation:3.2,x:809.2,y:1314.5},0).wait(1).to({rotation:2.8,x:809.5,y:1315.8},0).wait(1).to({rotation:2.3,x:809.9,y:1317.1},0).wait(1).to({rotation:1.8,x:810.3,y:1318.3},0).wait(1).to({rotation:1.4,x:810.6,y:1319.6},0).wait(1).to({rotation:0.9,x:810.9,y:1320.8},0).wait(1).to({rotation:0.4,x:811.3,y:1322},0).wait(1).to({rotation:-0.1,x:811.6,y:1323.1},0).wait(1).to({rotation:-0.5,x:812,y:1324.3},0).wait(1).to({rotation:-1,x:812.4,y:1325.3},0).wait(1).to({rotation:-1.4,x:812.7,y:1326.3},0).wait(1).to({rotation:-1.8,x:813,y:1327.2},0).wait(1).to({rotation:-2.2,x:813.3,y:1328.1},0).wait(1).to({rotation:-2.6,x:813.6,y:1328.8},0).wait(1).to({rotation:-2.9,x:813.8,y:1329.4},0).wait(1).to({rotation:-3.1,x:813.9,y:1329.8},0).wait(1).to({regX:72,regY:24.4,rotation:-3.2,x:801,y:964.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.1,x:813.9,y:1329.8},0).wait(1).to({rotation:-2.9,x:813.5,y:1329.3},0).wait(1).to({rotation:-2.6,x:813.1,y:1328.6},0).wait(1).to({rotation:-2.3,x:812.6,y:1327.8},0).wait(1).to({rotation:-1.9,x:812.1,y:1327},0).wait(1).to({rotation:-1.6,x:811.6,y:1326.3},0).wait(1).to({rotation:-1.3,x:811.2,y:1325.6},0).wait(1).to({regX:72,regY:24.4,rotation:-1.2,x:810.5,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,x:810.9,y:1325.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:810.8},0).wait(1).to({y:1325.3},0).wait(1).to({x:810.7,y:1325.2},0).wait(1).to({rotation:-1.1,x:810.6},0).wait(1).to({x:810.5},0).wait(1).to({y:1325.3},0).wait(1).to({x:810.4,y:1325.2},0).wait(1).to({x:810.3},0).wait(1).to({x:810.2},0).wait(1).to({x:810.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:810},0).wait(1).to({rotation:-1,x:809.9},0).wait(1).to({y:1325.3},0).wait(1).to({regX:72,regY:24.5,x:810.5,y:959.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-1.1,x:809.9,y:1325.3},0).wait(1).to({rotation:-1.2,y:1325.8},0).wait(1).to({rotation:-1.4,x:810,y:1326.4},0).wait(1).to({rotation:-1.7,x:810.1,y:1327.1},0).wait(1).to({rotation:-2,y:1328},0).wait(1).to({rotation:-2.3,x:810.2,y:1328.9},0).wait(1).to({rotation:-2.6,x:810.3,y:1329.8},0).wait(1).to({rotation:-2.9,x:810.4,y:1330.7},0).wait(1).to({rotation:-3.2,x:810.5,y:1331.6},0).wait(1).to({rotation:-3.6,x:810.6,y:1332.6},0).wait(1).to({rotation:-3.9,x:810.7,y:1333.4},0).wait(1).to({rotation:-4.2,x:810.8,y:1334.3},0).wait(1).to({rotation:-4.5,x:810.9,y:1335.1},0).wait(1).to({rotation:-4.8,x:811,y:1335.8},0).wait(1).to({rotation:-5,y:1336.3},0).wait(1).to({regX:72,regY:24.4,rotation:-5.1,x:786,y:972},0).wait(1).to({regX:64.8,regY:390.6,rotation:-5,x:810.9,y:1336.6},0).wait(1).to({x:810.7},0).wait(1).to({rotation:-4.9,x:810.4,y:1336.4},0).wait(1).to({rotation:-4.8,x:810.1},0).wait(1).to({regX:72,regY:24.4,x:786.7,y:971.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-4.6,x:808.5,y:1336.5},0).wait(1).to({rotation:-4,x:804.8,y:1336.6},0).wait(1).to({rotation:-3.1,x:799.6,y:1336.8},0).wait(1).to({rotation:-2.2,x:793.5,y:1337},0).wait(1).to({rotation:-1.1,x:786.7},0).wait(1).to({rotation:0,x:779.6,y:1336.9},0).wait(1).to({rotation:1.2,x:772.1,y:1336.6},0).wait(1).to({rotation:2.4,x:764.7,y:1336.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.5,x:757.3,y:1335.6},0).wait(1).to({rotation:4.7,x:750.2,y:1334.9},0).wait(1).to({rotation:5.7,x:743.8,y:1334.2},0).wait(1).to({rotation:6.5,x:738.6,y:1333.5},0).wait(1).to({regX:72,regY:24.4,rotation:6.9,x:787.2,y:971.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:6.6,x:738,y:1333.5},0).wait(1).to({rotation:6,x:741.9,y:1334},0).wait(1).to({rotation:5.2,x:746.6,y:1334.6},0).wait(1).to({rotation:4.4,x:751.6,y:1335.1},0).wait(1).to({rotation:3.7,x:756.2,y:1335.5},0).wait(1).to({regX:72,regY:24.5,rotation:3.3,x:787.1,y:971.6},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.4,x:758,y:1335.5},0).wait(1).to({rotation:3.7,x:756.1,y:1335.4},0).wait(1).to({rotation:4.1,x:753.8,y:1335.1},0).wait(1).to({rotation:4.5,x:751.3,y:1334.9},0).wait(1).to({rotation:4.8,x:749.1,y:1334.6},0).wait(1).to({regX:72,regY:24.4,rotation:5,x:787,y:971.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.9,x:748.7,y:1334.6},0).wait(1).to({rotation:4.6,x:750.6,y:1334.9},0).wait(1).to({rotation:4.2,x:752.9,y:1335.1},0).wait(1).to({rotation:3.8,x:755.3,y:1335.4},0).wait(1).to({rotation:3.5,x:757.6,y:1335.6},0).wait(1).to({regX:72,regY:24.5,rotation:3.3,x:787.1,y:971.6},0).wait(1).to({regX:64.8,regY:390.6,x:759.1,y:1335.7},0).wait(1).to({rotation:3.2,x:759.3,y:1335.6},0).wait(1).to({x:759.6},0).wait(1).to({x:760},0).wait(1).to({rotation:3.1,x:760.3},0).wait(1).to({x:760.6,y:1335.5},0).wait(1).to({regX:72,regY:24.5,x:787.5,y:971.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:3,x:761,y:1335.9},0).wait(1).to({rotation:2.7,x:761.3,y:1336.5},0).wait(1).to({rotation:2.5,x:761.8,y:1337.2},0).wait(1).to({rotation:2.2,x:762.2,y:1337.9},0).wait(1).to({rotation:1.9,x:762.7,y:1338.6},0).wait(1).to({regX:72,regY:24.5,rotation:1.8,x:781.5,y:974.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.9,x:764.3,y:1338.1},0).wait(1).to({rotation:2.1,x:767.4,y:1336},0).wait(1).to({rotation:2.4,x:771.7,y:1333.1},0).wait(1).to({rotation:2.8,x:776.7,y:1329.8},0).wait(1).to({rotation:3.2,x:782.1,y:1326.1},0).wait(1).to({rotation:3.6,x:787.7,y:1322.3},0).wait(1).to({rotation:4,x:793.4,y:1318.5},0).wait(1).to({rotation:4.4,x:799,y:1314.7},0).wait(1).to({rotation:4.7,x:804.1,y:1311.1},0).wait(1).to({rotation:5,x:808.4,y:1308.2},0).wait(1).to({regX:72,regY:24.6,rotation:5.2,x:850.8,y:943.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.1,x:809.8,y:1307.2},0).wait(1).to({rotation:5,x:808,y:1308.4},0).wait(1).to({rotation:4.8,x:805.8,y:1310},0).wait(1).to({rotation:4.7,x:803.3,y:1311.7},0).wait(1).to({rotation:4.5,x:800.8,y:1313.5},0).wait(1).to({rotation:4.3,x:798.3,y:1315.2},0).wait(1).to({rotation:4.1,x:796.2,y:1316.7},0).wait(1).to({regX:72,regY:24.4,rotation:4,x:827.7,y:954},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.1,x:795.7,y:1317.1},0).wait(1).to({x:797.1,y:1316.2},0).wait(1).to({rotation:4.3,x:798.8,y:1315.1},0).wait(1).to({rotation:4.4,x:800.7,y:1313.9},0).wait(1).to({rotation:4.5,x:802.3,y:1312.8},0).wait(1).to({regX:72,regY:24.6,x:839.3,y:948.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.6,x:804.1,y:1311.4},0).wait(1).to({rotation:4.8,x:805.7,y:1310.2},0).wait(1).to({rotation:4.9,x:807.6,y:1308.8},0).wait(1).to({rotation:5.1,x:809.4,y:1307.5},0).wait(1).to({regX:72,regY:24.6,rotation:5.2,x:850.8,y:943.9},0).wait(1).to({regX:64.8,regY:390.6,x:810.8,y:1306.6},0).wait(1).to({rotation:5.1,x:811.2},0).wait(1).to({regX:72,regY:24.5,rotation:5,x:850.8,y:943.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.9,x:811.2,y:1307.2},0).wait(1).to({rotation:4.6,x:810.6,y:1308.6},0).wait(1).to({rotation:4.1,x:809.7,y:1310.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.6,x:808.8,y:1312.5},0).wait(1).to({rotation:3,x:807.8,y:1314.7},0).wait(1).to({rotation:2.4,x:806.7,y:1317},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.8,x:805.6,y:1319.3},0).wait(1).to({rotation:1.2,x:804.6,y:1321.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.7,x:803.6,y:1323.4},0).wait(1).to({rotation:0.2,x:802.8,y:1325.1},0).wait(1).to({regX:72,regY:24.4,rotation:0,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.2,x:800.8,y:1326},0).wait(1).to({rotation:0.7,x:798,y:1325.8},0).wait(1).to({rotation:1.2,x:794.9,y:1325.7},0).wait(1).to({regX:72,regY:24.4,rotation:1.5,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.7,x:797.7,y:1325.9},0).wait(1).to({rotation:-0.8,x:807.2,y:1326.1},0).wait(1).to({rotation:-2.5,x:818.3,y:1326},0).wait(1).to({rotation:-4.2,x:829.1,y:1325.5},0).wait(1).to({regX:72,regY:24.4,rotation:-5.2,x:809.5,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-5,x:834,y:1325.3},0).wait(1).to({rotation:-4.5,x:830.8,y:1325.5},0).wait(1).to({rotation:-3.9,x:827.4,y:1325.6},0).wait(1).to({regX:72,regY:24.4,rotation:-3.6,x:809.6,y:959.9},0).wait(1).to({regX:64.8,regY:390.6,x:825.1,y:1325.8},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-3.5,x:825},0).wait(1).to({x:824.9,y:1325.7},0).wait(1).to({x:824.8,y:1325.8},0).wait(1).to({x:824.6,y:1325.7},0).wait(1).to({x:824.5,y:1325.8},0).wait(1).to({rotation:-3.4,x:824.4,y:1325.7},0).wait(1).to({x:824.2,y:1325.8},0).wait(1).to({x:824.1,y:1325.7},0).wait(1).to({x:824,y:1325.8},0).wait(1).to({x:823.8,y:1325.7},0).wait(1).to({rotation:-3.3,x:823.7},0).wait(1).to({x:823.5},0).wait(1).to({x:823.4},0).wait(1).to({x:823.3,y:1325.8},0).wait(1).to({x:823.2},0).wait(1).to({regX:72,regY:24.3,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,x:823.2,y:1325.8},0).wait(1).to({rotation:-3.2,x:823},0).wait(1).to({x:822.8},0).wait(1).to({x:822.6},0).wait(1).to({rotation:-3.1,x:822.4},0).wait(1).to({x:822.2},0).wait(1).to({x:822},0).wait(1).to({rotation:-3,x:821.8},0).wait(1).to({regX:72,regY:24.3,scaleX:1,scaleY:1,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-2.8,x:821.6,y:1325.3},0).wait(1).to({rotation:-2.4,x:821.2,y:1324.4},0).wait(1).to({rotation:-1.8,x:820.7,y:1323.2},0).wait(1).to({rotation:-1.2,x:820.1,y:1321.8},0).wait(1).to({rotation:-0.6,x:819.5,y:1320.4},0).wait(1).to({rotation:-0.1,x:819,y:1319.1},0).wait(1).to({regX:72,regY:24.3,rotation:0.2,x:827.2,y:952.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.1,x:818.9,y:1319.1},0).wait(1).to({rotation:-0.7,x:819.2,y:1320.7},0).wait(1).to({rotation:-1.4,x:819.5,y:1322.7},0).wait(1).to({rotation:-2.3,x:819.9,y:1324.7},0).wait(1).to({rotation:-3.1,x:820.2,y:1326.7},0).wait(1).to({rotation:-3.8,x:820.6,y:1328.4},0).wait(1).to({regX:71.9,regY:24.3,rotation:-4.2,x:801,y:963.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.9,x:820.6,y:1328.7},0).wait(1).to({rotation:-3.3,x:820.3,y:1327.3},0).wait(1).to({rotation:-2.5,x:819.9,y:1325.6},0).wait(1).to({rotation:-1.7,x:819.4,y:1323.6},0).wait(1).to({rotation:-1,x:819,y:1321.9},0).wait(1).to({regX:72,regY:24.3,rotation:-0.5,x:822.4,y:954.7},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.6,x:818.6,y:1321},0).wait(1).to({rotation:-0.9,x:818.4,y:1321.8},0).wait(1).to({rotation:-1.1,x:818.3,y:1322.5},0).wait(1).to({rotation:-1.4,x:818.1,y:1323.3},0).wait(1).to({rotation:-1.7,x:818,y:1324.1},0).wait(1).to({regX:72,regY:24.3,rotation:-1.8,x:813.6,y:958.4},0).wait(1).to({regX:64.8,regY:390.6,x:817.9,y:1324.3},0).wait(1).to({rotation:-1.7,x:817.8,y:1324.1},0).wait(1).to({rotation:-1.5,x:817.6,y:1323.9},0).wait(1).to({rotation:-1.4,x:817.3,y:1323.5},0).wait(1).to({rotation:-1.2,x:817.1,y:1323.1},0).wait(1).to({rotation:-1,x:816.8,y:1322.7},0).wait(1).to({rotation:-0.8,x:816.6,y:1322.3},0).wait(1).to({rotation:-0.6,x:816.3,y:1321.8},0).wait(1).to({rotation:-0.4,x:816,y:1321.4},0).wait(1).to({rotation:-0.2,x:815.7,y:1321},0).wait(1).to({rotation:0,x:815.5,y:1320.6},0).wait(1).to({rotation:0.1,x:815.3,y:1320.3},0).wait(1).to({regX:72,regY:24.4,rotation:0.2,x:823.6,y:954.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.1,x:815.2,y:1320.1},0).wait(1).to({x:815.3,y:1320.5},0).wait(1).to({rotation:-0.1,y:1320.8},0).wait(1).to({rotation:-0.2,x:815.4,y:1321.2},0).wait(1).to({rotation:-0.4,x:815.5,y:1321.6},0).wait(1).to({rotation:-0.6,y:1322.1},0).wait(1).to({rotation:-0.8,x:815.6,y:1322.6},0).wait(1).to({rotation:-1,x:815.7,y:1323.1},0).wait(1).to({rotation:-1.2,x:815.8,y:1323.5},0).wait(1).to({rotation:-1.3,y:1324},0).wait(1).to({rotation:-1.5,x:815.9,y:1324.4},0).wait(1).to({rotation:-1.6,y:1324.7},0).wait(1).to({regX:72,regY:24.3,rotation:-1.7,x:812.4,y:958.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-1.6,x:816,y:1324.8},0).wait(1).to({rotation:-1.5,x:815.8,y:1324.5},0).wait(1).to({rotation:-1.3,x:815.6,y:1324.2},0).wait(1).to({rotation:-1.1,x:815.3,y:1323.7},0).wait(1).to({rotation:-0.9,x:815.1,y:1323.3},0).wait(1).to({rotation:-0.7,x:814.8,y:1322.8},0).wait(1).to({rotation:-0.5,x:814.5,y:1322.3},0).wait(1).to({rotation:-0.3,x:814.2,y:1321.8},0).wait(1).to({rotation:-0.1,x:814,y:1321.4},0).wait(1).to({regX:71.9,regY:24.4,rotation:0,x:820.9,y:955.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.6,x:810,y:1321.1},0).wait(1).to({rotation:1.9,x:801.7,y:1320.8},0).wait(1).to({rotation:3.4,x:791.7,y:1320.2},0).wait(1).to({rotation:5.1,x:781.2,y:1319.2},0).wait(1).to({rotation:6.6,x:771.5,y:1318.1},0).wait(1).to({regX:72,regY:24.3,rotation:7.5,x:820.5,y:955.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:7.2,x:767.6,y:1317.6},0).wait(1).to({rotation:6.7,x:770.9,y:1318},0).wait(1).to({rotation:6.1,x:774.4,y:1318.6},0).wait(1).to({regX:72,regY:24.3,rotation:5.7,x:820.5,y:955.4},0).wait(1).to({regX:64.8,regY:390.6,x:776.8,y:1318.8},0).wait(1).to({x:777},0).wait(1).to({x:777.2,y:1318.9},0).wait(1).to({rotation:5.6,x:777.4,y:1319},0).wait(1).to({x:777.7,y:1318.9},0).wait(1).to({rotation:5.5,x:778,y:1319},0).wait(1).to({x:778.2,y:1319.1},0).wait(1).to({rotation:5.4,x:778.5},0).wait(1).to({x:778.7,y:1319.2},0).wait(1).to({rotation:5.3,x:778.9},0).wait(1).to({regX:72,regY:24.4,x:820,y:955.6},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.5,x:777.8,y:1318.9},0).wait(1).to({rotation:5.9,x:775.6,y:1318.6},0).wait(1).to({rotation:6.3,x:773.2,y:1318.3},0).wait(1).to({regX:71.9,regY:24.3,rotation:6.5,x:820.4,y:955.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.9,x:775.7,y:1318.6},0).wait(1).to({rotation:4.6,x:784,y:1319.5},0).wait(1).to({rotation:3,x:794.2,y:1320.4},0).wait(1).to({rotation:1.4,x:804.8,y:1321},0).wait(1).to({rotation:-0.1,x:814.7,y:1321.3},0).wait(1).to({regX:71.9,regY:24.3,rotation:-1,x:820.9,y:955.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.9,x:819.4,y:1321.3},0).wait(1).to({rotation:-0.6,x:817.4},0).wait(1).to({rotation:-0.2,x:815.4},0).wait(1).to({regX:71.9,regY:24.4,rotation:0,x:820.9,y:955.4},0).wait(1).to({regX:64.8,regY:390.6,x:813.9,y:1321.2},0).wait(1).to({startPosition:0},0).wait(1).to({x:813.7,y:1321.3},0).wait(1).to({x:813.6},0).wait(1).to({x:813.5,y:1321.4},0).wait(1).to({x:813.4},0).wait(1).to({regX:71.9,regY:24.4,x:820.4,y:955.6},0).wait(1).to({regX:64.8,regY:390.6,x:813.3,y:1321.3},0).wait(1).to({rotation:0.1,y:1321.2},0).wait(1).to({y:1321.1},0).wait(1).to({rotation:0.2,x:813.2,y:1320.9},0).wait(1).to({rotation:0.3,x:813.1,y:1320.7},0).wait(1).to({rotation:0.4,x:813,y:1320.4},0).wait(1).to({rotation:0.5,x:812.9,y:1320.2},0).wait(1).to({rotation:0.7,x:812.8,y:1319.9},0).wait(1).to({rotation:0.8,x:812.7,y:1319.5},0).wait(1).to({rotation:1,x:812.6,y:1319.2},0).wait(1).to({rotation:1.1,x:812.5,y:1318.8},0).wait(1).to({rotation:1.3,x:812.4,y:1318.4},0).wait(1).to({rotation:1.4,x:812.2,y:1318},0).wait(1).to({rotation:1.6,x:812.1,y:1317.6},0).wait(1).to({rotation:1.8,x:811.9,y:1317.3},0).wait(1).to({rotation:1.9,x:811.8,y:1316.8},0).wait(1).to({rotation:2.1,x:811.7,y:1316.4},0).wait(1).to({rotation:2.3,x:811.6,y:1316},0).wait(1).to({rotation:2.5,x:811.4,y:1315.6},0).wait(1).to({rotation:2.6,x:811.3,y:1315.1},0).wait(1).to({rotation:2.8,x:811.1,y:1314.6},0).wait(1).to({rotation:3,x:811,y:1314.2},0).wait(1).to({rotation:3.1,x:810.9,y:1313.8},0).wait(1).to({rotation:3.3,x:810.8,y:1313.4},0).wait(1).to({rotation:3.5,x:810.7,y:1313},0).wait(1).to({rotation:3.6,x:810.5,y:1312.6},0).wait(1).to({rotation:3.8,x:810.4,y:1312.2},0).wait(1).to({rotation:3.9,x:810.3,y:1311.9},0).wait(1).to({rotation:4,x:810.2,y:1311.6},0).wait(1).to({rotation:4.1,y:1311.3},0).wait(1).to({rotation:4.2,x:810.1,y:1311},0).wait(1).to({regX:72,regY:24.3,x:844.1,y:946.6},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.4,x:807.9,y:1311.4},0).wait(1).to({rotation:4.8,x:803.4,y:1312.1},0).wait(1).to({rotation:5.2,x:797.7,y:1312.9},0).wait(1).to({rotation:5.8,x:791.4,y:1313.8},0).wait(1).to({rotation:6.3,x:785.2,y:1314.7},0).wait(1).to({rotation:6.7,x:779.7,y:1315.4},0).wait(1).to({regX:72,regY:24.4,rotation:7,x:828.3,y:953.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:6.2,x:780.6,y:1316.9},0).wait(1).to({rotation:4.5,x:789.2,y:1319.1},0).wait(1).to({rotation:2.4,x:799.7,y:1321.4},0).wait(1).to({rotation:0.2,x:810.7,y:1323.3},0).wait(1).to({rotation:-1.8,x:820.9,y:1324.5},0).wait(1).to({regX:71.9,regY:24.3,rotation:-3,x:814.8,y:959.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-2.9,x:826.7,y:1325},0).wait(1).to({rotation:-2.7,x:826.1,y:1324.7},0).wait(1).to({rotation:-2.3,x:825.4,y:1324.1},0).wait(1).to({rotation:-1.9,x:824.4,y:1323.5},0).wait(1).to({rotation:-1.5,x:823.4,y:1322.7},0).wait(1).to({rotation:-1,x:822.2,y:1321.8},0).wait(1).to({rotation:-0.5,x:821,y:1320.9},0).wait(1).to({rotation:0.1,x:819.8,y:1319.9},0).wait(1).to({rotation:0.6,x:818.4,y:1318.8},0).wait(1).to({rotation:1.2,x:817.2,y:1317.7},0).wait(1).to({rotation:1.7,x:815.8,y:1316.6},0).wait(1).to({rotation:2.3,x:814.6,y:1315.4},0).wait(1).to({rotation:2.8,x:813.3,y:1314.3},0).wait(1).to({rotation:3.3,x:812.2,y:1313.2},0).wait(1).to({rotation:3.7,x:811.2,y:1312.3},0).wait(1).to({rotation:4.1,x:810.4,y:1311.5},0).wait(1).to({regX:72,regY:24.3,rotation:4.2,x:844.1,y:946.6},0).wait(1).to({regX:64.8,regY:390.6,rotation:4.1,x:809.9,y:1311.4},0).wait(1).to({rotation:4,x:809.7,y:1311.8},0).wait(1).to({rotation:3.9,x:809.5,y:1312.1},0).wait(1).to({rotation:3.8,x:809.4,y:1312.5},0).wait(1).to({rotation:3.7,x:809.2,y:1312.9},0).wait(1).to({rotation:3.6,x:809.1,y:1313.2},0).wait(1).to({rotation:3.5,x:809,y:1313.6},0).wait(1).to({rotation:3.4,x:808.8,y:1314},0).wait(1).to({rotation:3.3,x:808.6,y:1314.3},0).wait(1).to({rotation:3.2,x:808.5,y:1314.7},0).wait(1).to({rotation:3.1,x:808.3,y:1315.1},0).wait(1).to({rotation:3,x:808.2,y:1315.5},0).wait(1).to({rotation:2.9,x:808.1,y:1315.7},0).wait(1).to({rotation:2.8,x:807.9,y:1316.1},0).wait(1).to({rotation:2.7,x:807.8,y:1316.5},0).wait(1).to({rotation:2.6,x:807.6,y:1316.8},0).wait(1).to({rotation:2.5,x:807.5,y:1317.2},0).wait(1).to({rotation:2.4,x:807.3,y:1317.5},0).wait(1).to({rotation:2.3,x:807.1,y:1317.9},0).wait(1).to({rotation:2.2,x:807,y:1318.2},0).wait(1).to({rotation:2.1,x:806.8,y:1318.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:2,x:806.7,y:1318.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.9,x:806.6,y:1319.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.8,x:806.4,y:1319.6},0).wait(1).to({rotation:1.7,x:806.2,y:1320},0).wait(1).to({rotation:1.6,x:806.1,y:1320.3},0).wait(1).to({rotation:1.5,x:805.9,y:1320.6},0).wait(1).to({rotation:1.4,x:805.8,y:1321},0).wait(1).to({regX:72,regY:24.4,rotation:1.3,x:820.9,y:955.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:1.5,x:806.1,y:1320.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.8,x:806.6,y:1319.5},0).wait(1).to({rotation:2,x:807,y:1318.6},0).wait(1).to({rotation:2.3,x:807.5,y:1317.7},0).wait(1).to({regX:72,regY:24.4,rotation:2.5,x:831.3,y:951.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.4,x:807.7,y:1317.2},0).wait(1).to({rotation:2.3,x:807.5,y:1317.5},0).wait(1).to({rotation:2.2,x:807.3,y:1318},0).wait(1).to({rotation:2.1,x:807,y:1318.3},0).wait(1).to({rotation:2,x:806.8,y:1318.8},0).wait(1).to({rotation:1.9,x:806.6,y:1319.1},0).wait(1).to({rotation:1.8,x:806.4,y:1319.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.7,x:806.1,y:1319.9},0).wait(1).to({rotation:1.6,x:805.9,y:1320.3},0).wait(1).to({rotation:1.5,x:805.6,y:1320.7},0).wait(1).to({rotation:1.4,x:805.4,y:1321.1},0).wait(1).to({rotation:1.3,x:805.2,y:1321.4},0).wait(1).to({rotation:1.2,x:804.9,y:1321.9},0).wait(1).to({rotation:1,x:804.7,y:1322.2},0).wait(1).to({rotation:0.9,x:804.5,y:1322.6},0).wait(1).to({rotation:0.8,x:804.3,y:1323},0).wait(1).to({rotation:0.7,x:804,y:1323.4},0).wait(1).to({rotation:0.6,x:803.8,y:1323.7},0).wait(1).to({rotation:0.5,x:803.6,y:1324.1},0).wait(1).to({rotation:0.4,x:803.3,y:1324.5},0).wait(1).to({rotation:0.3,x:803.1,y:1324.9},0).wait(1).to({rotation:0.2,x:802.9,y:1325.2},0).wait(1).to({rotation:0.1,x:802.6,y:1325.6},0).wait(1).to({regX:72,regY:24.4,rotation:0,x:809.6,y:959.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.3,x:802.6,y:1326.9},0).wait(1).to({rotation:-0.9,x:802.9,y:1328.4},0).wait(1).to({rotation:-1.5,x:803.3,y:1330},0).wait(1).to({regX:72,regY:24.4,rotation:-2,x:798.2,y:965.2},0).wait(1).to({regX:64.8,regY:390.6,x:803,y:1331.8},0).wait(1).to({x:801.7,y:1332.6},0).wait(1).to({rotation:-2.1,x:800.2,y:1333.6},0).wait(1).to({rotation:-2.2,x:798.6,y:1334.6},0).wait(1).to({x:797,y:1335.6},0).wait(1).to({regX:72,regY:24.4,rotation:-2.3,x:788.4,y:970.2},0).wait(1).to({regX:64.8,regY:390.6,x:796.4,y:1336.1},0).wait(1).to({rotation:-2.5,x:797.7,y:1335.4},0).wait(1).to({rotation:-2.6,x:799.2,y:1334.7},0).wait(1).to({rotation:-2.8,x:800.8,y:1334},0).wait(1).to({regX:72,regY:24.4,rotation:-2.9,x:790.6,y:967.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.2,x:802.7,y:1334.1},0).wait(1).to({rotation:-3.6,x:803.6,y:1335.4},0).wait(1).to({rotation:-4,x:804.7,y:1336.8},0).wait(1).to({regX:72,regY:24.4,rotation:-4.4,x:784.6,y:972.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-4.2,x:805.4,y:1337.6},0).wait(1).to({rotation:-3.8,x:805.1,y:1336.8},0).wait(1).to({rotation:-3.3,x:804.7,y:1335.8},0).wait(1).to({rotation:-2.8,x:804.3,y:1334.5},0).wait(1).to({rotation:-2.1,x:803.8,y:1333.1},0).wait(1).to({rotation:-1.4,x:803.3,y:1331.6},0).wait(1).to({rotation:-0.7,x:802.8,y:1329.9},0).wait(1).to({rotation:0,x:802.2,y:1328.2},0).wait(1).to({rotation:0.7,x:801.7,y:1326.3},0).wait(1).to({rotation:1.4,x:801.1,y:1324.4},0).wait(1).to({rotation:2.2,x:800.6,y:1322.5},0).wait(1).to({rotation:2.8,x:800.1,y:1320.7},0).wait(1).to({regX:72.1,regY:24.4,rotation:3.3,x:828,y:954.3},0).wait(1).to({regX:64.8,regY:390.6,x:799.8,y:1319.5},0).wait(1).to({x:799.9,y:1319.6},0).wait(1).to({rotation:3.4,x:800,y:1319.7},0).wait(1).to({rotation:3.5,x:800.2,y:1319.9},0).wait(1).to({x:800.3,y:1320},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.9},0).wait(1).to({y:1319.7},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.2},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.2},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.7},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(61).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.7,x:800.4,y:1319.5},0).wait(1).to({rotation:4.1,x:800.2,y:1318.5},0).wait(1).to({rotation:4.6,x:800,y:1317.2},0).wait(1).to({rotation:5.1,x:799.7,y:1315.8},0).wait(1).to({rotation:5.6,x:799.5,y:1314.3},0).wait(1).to({rotation:6.1,x:799.3,y:1312.8},0).wait(1).to({regX:72.2,regY:24.4,rotation:6.5,x:848.1,y:948.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:6.7,x:798.3,y:1311.3},0).wait(1).to({rotation:7.1,x:796.8,y:1310.7},0).wait(1).to({rotation:7.5,x:795,y:1310},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.9,x:793.2,y:1309.2},0).wait(1).to({regX:72.2,regY:24.4,rotation:8.3,x:851.9,y:947.6},0).wait(1).to({regX:64.8,regY:390.6,rotation:8.1,x:793.5,y:1308.6},0).wait(1).to({rotation:7.8,x:796.1,y:1308.7},0).wait(1).to({regX:72.1,regY:24.4,rotation:7.5,x:853.5,y:946.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:8,x:795.5,y:1308},0).wait(1).to({rotation:8.9,x:790.5,y:1306.8},0).wait(1).to({regX:72,regY:24.4,rotation:9.8,x:855.1,y:946.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:8.8,x:791.9,y:1307},0).wait(1).to({rotation:7.1,x:801.8,y:1308.9},0).wait(1).to({regX:72.1,regY:24.4,rotation:5.5,x:853.5,y:947},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.3,x:809.7,y:1311.4},0).wait(1).to({rotation:4.8,x:807.4,y:1313.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:804.7,y:1315.5},0).wait(1).to({rotation:3.7,x:802,y:1317.7},0).wait(1).to({regX:72.1,regY:24.4,rotation:3.3,x:828,y:954.3},0).wait(1).to({regX:64.8,regY:390.6,x:799.8,y:1319.5},0).wait(1).to({x:799.9,y:1319.6},0).wait(1).to({rotation:3.4,x:800,y:1319.7},0).wait(1).to({rotation:3.5,x:800.2,y:1319.9},0).wait(1).to({x:800.3,y:1320},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.9},0).wait(1).to({y:1319.7},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.2},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.2},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.7},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(11).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.7},0).wait(1).to({y:1319.1},0).wait(1).to({y:1318.3},0).wait(1).to({y:1317.6},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:952.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1318.4},0).wait(1).to({y:1320.9},0).wait(1).to({y:1323.6},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:961.1},0).wait(11).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1325.3},0).wait(1).to({x:800.2,y:1323.9},0).wait(1).to({rotation:3.4,x:800,y:1322.3},0).wait(1).to({rotation:3.3,x:799.8,y:1320.7},0).wait(1).to({regX:72.1,regY:24.4,x:828,y:954.3},0).wait(1).to({regX:64.8,regY:390.6,x:799.8,y:1319.5},0).wait(1).to({rotation:3.4,x:800,y:1319.6},0).wait(1).to({x:800.1,y:1319.8},0).wait(1).to({rotation:3.5,x:800.3,y:1319.9},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.9},0).wait(1).to({y:1319.7},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.2},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.2},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.7},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(10).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.8,x:800.7,y:1319.3},0).wait(1).to({rotation:4.2,x:801.2,y:1317.9},0).wait(1).to({rotation:4.8,x:801.9,y:1316.1},0).wait(1).to({rotation:5.4,x:802.6,y:1314.1},0).wait(1).to({rotation:6,x:803.3,y:1312},0).wait(1).to({rotation:6.6,x:804,y:1309.9},0).wait(1).to({regX:72.2,regY:24.4,rotation:7.1,x:857,y:945.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:7.2,x:803.9,y:1308.2},0).wait(1).to({rotation:7.4,x:802.7,y:1308},0).wait(1).to({rotation:7.6,x:801.3,y:1307.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.8,x:799.9,y:1307.4},0).wait(1).to({regX:72.2,regY:24.4,rotation:8,x:857,y:945.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:7.9,x:799.4,y:1307.3},0).wait(1).to({rotation:7.7,x:800.7,y:1307.4},0).wait(1).to({rotation:7.5,x:802.2,y:1307.6},0).wait(1).to({rotation:7.2,x:803.8,y:1307.8},0).wait(1).to({regX:72.1,regY:24.4,rotation:7,x:857,y:945.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:7.1,x:804.7,y:1308},0).wait(1).to({rotation:7.2,x:803.9,y:1307.9},0).wait(1).to({rotation:7.4,x:802.8},0).wait(1).to({rotation:7.5,x:801.8,y:1307.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.7,x:800.7,y:1307.6},0).wait(1).to({rotation:7.9,x:799.5,y:1307.5},0).wait(1).to({regX:72.2,regY:24.4,rotation:8,x:857,y:945.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:7.4,x:798.9,y:1309.2},0).wait(1).to({rotation:6.3,x:799.5,y:1312.9},0).wait(1).to({rotation:4.9,x:800.1,y:1317.1},0).wait(1).to({rotation:3.4,x:800.9,y:1321.5},0).wait(1).to({rotation:1.8,x:801.8,y:1325.7},0).wait(1).to({rotation:0.2,x:802.7,y:1329.6},0).wait(1).to({regX:72.2,regY:24.4,rotation:-0.9,x:804.7,y:966.3},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.6,x:803.1,y:1331.5},0).wait(1).to({rotation:0.2,x:802.6,y:1329.6},0).wait(1).to({rotation:1,x:802,y:1327.4},0).wait(1).to({rotation:1.9,x:801.5,y:1324.9},0).wait(1).to({rotation:2.8,x:800.9,y:1322.2},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.9},0).wait(1).to({y:1319.7},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.2},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.2},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.7},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(16).to({rotation:-0.7,x:806.2,y:965.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:-1,x:803.3,y:1332.5},0).wait(1).to({rotation:-1.5,x:803.6,y:1333.9},0).wait(1).to({regX:72.2,regY:24.4,rotation:-1.9,x:799.3,y:968.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-1.6,x:803.8,y:1334.3},0).wait(1).to({rotation:-1.1,x:803.4,y:1332.8},0).wait(1).to({regX:72.2,regY:24.4,rotation:-0.7,x:806.2,y:965.5},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.9,x:803.2,y:1332.2},0).wait(1).to({rotation:-1.2,x:803.4,y:1333.1},0).wait(1).to({rotation:-1.6,x:803.7,y:1334.3},0).wait(1).to({regX:72.2,regY:24.4,rotation:-1.9,x:799.3,y:968.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-1.6,x:803.8,y:1334.2},0).wait(1).to({rotation:-0.8,x:803.4,y:1332.4},0).wait(1).to({rotation:0.2,x:802.7,y:1329.9},0).wait(1).to({rotation:1.3,x:802,y:1326.9},0).wait(1).to({rotation:2.5,x:801.2,y:1323.6},0).wait(1).to({rotation:3.7,x:800.5,y:1320.2},0).wait(1).to({rotation:4.7,x:799.9,y:1317},0).wait(1).to({regX:72.1,regY:24.4,rotation:5.3,x:840.6,y:951.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:5.1,x:799.7,y:1315.7},0).wait(1).to({rotation:4.7,x:799.9,y:1316.6},0).wait(1).to({rotation:4.3,x:800.1,y:1317.5},0).wait(1).to({rotation:3.8,x:800.4,y:1318.5},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.1},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.8},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(20).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.1,x:801.3,y:1321.1},0).wait(1).to({rotation:2.1,x:803.3,y:1323.6},0).wait(1).to({rotation:0.8,x:806,y:1326.7},0).wait(1).to({rotation:-0.7,x:809,y:1330},0).wait(1).to({rotation:-2.3,x:812.2,y:1333.2},0).wait(1).to({rotation:-3.9,x:815.4,y:1336.1},0).wait(1).to({rotation:-5.3,x:818.2,y:1338.4},0).wait(1).to({regX:72.1,regY:24.5,rotation:-6.1,x:788,y:974.9},0).wait(1).to({regX:64.8,regY:390.6,rotation:-5.6,x:817.7,y:1339.3},0).wait(1).to({rotation:-4.7,x:813.8,y:1338.6},0).wait(1).to({rotation:-3.7,x:809.4,y:1337.8},0).wait(1).to({regX:72.2,regY:24.4,rotation:-2.9,x:794.9,y:971.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.1,x:807.3,y:1337.2},0).wait(1).to({rotation:-3.5,x:809.6,y:1337.1},0).wait(1).to({rotation:-3.9,x:812.5,y:1337},0).wait(1).to({rotation:-4.3,x:815.2,y:1336.8},0).wait(1).to({regX:72.2,regY:24.4,rotation:-4.6,x:794.9,y:971.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:-4.5,x:815.9,y:1336.7},0).wait(1).to({rotation:-4.1,x:813.6,y:1336.9},0).wait(1).to({rotation:-3.7,x:810.8,y:1337},0).wait(1).to({rotation:-3.2,x:808,y:1337.1},0).wait(1).to({regX:72.2,regY:24.4,rotation:-2.9,x:794.9,y:971.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:-3.1,x:807.3,y:1337.2},0).wait(1).to({rotation:-3.5,x:809.6,y:1337.1},0).wait(1).to({rotation:-3.9,x:812.5,y:1337},0).wait(1).to({rotation:-4.3,x:815.2,y:1336.8},0).wait(1).to({regX:72.2,regY:24.4,rotation:-4.6,x:794.9,y:971.2},0).wait(1).to({regX:64.8,regY:390.6,x:817,y:1336.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:72.2,regY:24.4,x:794.9,y:971.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:-4.2,x:816,y:1335.9},0).wait(1).to({rotation:-3.1,x:813.9,y:1334},0).wait(1).to({rotation:-1.7,x:811.1,y:1331.3},0).wait(1).to({rotation:-0.2,x:808,y:1328.1},0).wait(1).to({rotation:1.3,x:804.9,y:1324.6},0).wait(1).to({rotation:2.7,x:802,y:1321.1},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:830.5,y:954.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1319.1},0).wait(1).to({y:1319.4},0).wait(1).to({y:1319.8},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(14).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,x:799.9,y:1320.5},0).wait(1).to({rotation:3.4,x:798.9,y:1321.2},0).wait(1).to({rotation:3.2,x:797.8,y:1322.2},0).wait(1).to({rotation:3.1,x:796.5,y:1323.1},0).wait(1).to({regX:72.2,regY:24.4,rotation:3,x:822.1,y:958.7},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.9,x:797.2,y:1323.5},0).wait(1).to({rotation:2.7,x:800.2,y:1323},0).wait(1).to({rotation:2.4,x:803.7,y:1322.1},0).wait(1).to({rotation:2.2,x:807.4,y:1321.4},0).wait(1).to({regX:72.2,regY:24.4,rotation:2,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.1,x:808.7,y:1321.1},0).wait(1).to({rotation:2.3,x:805.6,y:1321.7},0).wait(1).to({rotation:2.6,x:802.1,y:1322.5},0).wait(1).to({rotation:2.8,x:798.5,y:1323.3},0).wait(1).to({regX:72.2,regY:24.4,rotation:3,x:822.1,y:958.7},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.9,x:797.2,y:1323.5},0).wait(1).to({rotation:2.7,x:800.2,y:1323},0).wait(1).to({rotation:2.4,x:803.8,y:1322.1},0).wait(1).to({rotation:2.2,x:807.4,y:1321.4},0).wait(1).to({regX:72.2,regY:24.4,rotation:2,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:809,y:1321.2},0).wait(1).to({x:806.7,y:1322.2},0).wait(1).to({x:804.1,y:1323.4},0).wait(1).to({regX:72.2,regY:24.4,x:822.1,y:958.7},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.1,x:801.8,y:1324.1},0).wait(1).to({rotation:2.3,x:801.6,y:1323.5},0).wait(1).to({rotation:2.5,x:801.4,y:1322.9},0).wait(1).to({rotation:2.8,x:801.1,y:1322.1},0).wait(1).to({rotation:3.1,x:800.9,y:1321.4},0).wait(1).to({rotation:3.3,x:800.6,y:1320.7},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:830.5,y:955.1},0).wait(9).to({startPosition:0},0).wait(1).to({regX:64.8,regY:390.6,x:800.3,y:1320.1},0).wait(1).to({x:799.9,y:1320.2},0).wait(1).to({rotation:3.4,x:799.2,y:1320.4},0).wait(1).to({rotation:3.3,x:798.3,y:1320.7},0).wait(1).to({rotation:3.2,x:797.2,y:1321.2},0).wait(1).to({rotation:3.1,x:796,y:1321.6},0).wait(1).to({rotation:2.9,x:794.5,y:1322.1},0).wait(1).to({regX:72.2,regY:24.4,scaleX:1,scaleY:1,rotation:2.8,x:817.9,y:957.5},0).wait(1).to({regX:64.8,regY:390.6,scaleX:1,scaleY:1,rotation:2.6,x:790.9,y:1325.1},0).wait(1).to({rotation:2.4,x:788.9,y:1327.7},0).wait(1).to({rotation:2.2,x:786.7,y:1330.6},0).wait(1).to({regX:72.3,regY:24.4,rotation:2,x:804.7,y:968.1},0).wait(1).to({regX:64.8,regY:390.6,x:784.4,y:1333.1},0).wait(1).to({y:1332.4},0).wait(1).to({regX:72.3,regY:24.4,x:804.7,y:966.1},0).wait(1).to({regX:64.8,regY:390.6,x:784.4,y:1331.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:72.3,regY:24.4,x:804.7,y:966.1},0).wait(1).to({regX:64.8,regY:390.6,x:786.7,y:1330.1},0).wait(1).to({x:789.1,y:1328.4},0).wait(1).to({x:791.4,y:1326.7},0).wait(1).to({x:793.8,y:1325},0).wait(1).to({scaleX:1,scaleY:1,x:796.2,y:1323.3},0).wait(1).to({regX:72.3,regY:24.4,x:818.9,y:956.1},0).wait(1).to({regX:64.8,regY:390.6,scaleX:1,scaleY:1,x:801.1,y:1322.3},0).wait(1).to({x:803.7,y:1323},0).wait(1).to({x:806.2,y:1323.7},0).wait(1).to({regX:72.2,regY:24.4,x:829.1,y:958.8},0).wait(1).to({regX:64.8,regY:390.6,x:808.9,y:1323.4},0).wait(1).to({y:1322.4},0).wait(1).to({regX:72.2,regY:24.4,x:829.1,y:955.8},0).wait(1).to({regX:64.8,regY:390.6,x:808.9,y:1321.3},0).wait(1).to({y:1321.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:809},0).wait(1).to({regX:72.2,regY:24.4,x:829,y:955.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:2.2,x:807.9,y:1320.8},0).wait(1).to({rotation:2.3,x:807,y:1320.2},0).wait(1).to({rotation:2.5,x:806.1,y:1319.5},0).wait(1).to({rotation:2.7,x:805.2,y:1318.8},0).wait(1).to({rotation:2.8,x:804.3,y:1318.2},0).wait(1).to({regX:72.2,regY:24.3,rotation:3,x:830,y:952.4},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.2,x:802.4,y:1318.4},0).wait(1).to({rotation:3.4,x:801.4,y:1319.3},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:830.5,y:955.1},0).wait(1).to({regX:64.8,regY:390.6,x:800.4,y:1320},0).wait(1).to({startPosition:0},0).wait(1).to({regX:72.2,regY:24.4,x:830.5,y:955.1},0).wait(3));

	// ll_s_neck
	this.instance_6 = new lib.ll_s_neck_1();
	this.instance_6.setTransform(933.3,915.6,1,1,0,0,0,69,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:64.1,regY:34.5,rotation:-0.3,x:926.6,y:909.3},0).wait(1).to({rotation:-0.7,x:924.5,y:909.5},0).wait(1).to({rotation:-1,x:922.6,y:909.7},0).wait(1).to({regX:69,regY:41,rotation:-1.2,x:926.4,y:916.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.1,x:922,y:909.8},0).wait(1).to({rotation:-0.9,x:923.7,y:909.7},0).wait(1).to({rotation:-0.5,x:926.1,y:909.5},0).wait(1).to({rotation:-0.1,x:928.9,y:909.3},0).wait(1).to({rotation:0.4,x:932.1,y:909.2},0).wait(1).to({rotation:0.9,x:935.4,y:908.9},0).wait(1).to({rotation:1.4,x:938.8,y:908.7},0).wait(1).to({rotation:1.9,x:942.1,y:908.5},0).wait(1).to({rotation:2.4,x:945.3,y:908.3},0).wait(1).to({rotation:2.8,x:948,y:908.1},0).wait(1).to({regX:69,regY:41,rotation:3,x:954,y:914.9},0).wait(1).to({regX:64.1,regY:34.5,x:949.3,y:908.1},0).wait(8).to({regX:69,regY:41,x:954,y:914.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.9,x:948.7,y:908.2},0).wait(1).to({rotation:2.6,x:946.9,y:908.3},0).wait(1).to({rotation:2.2,x:944.5,y:908.4},0).wait(1).to({rotation:1.8,x:941.5,y:908.6},0).wait(1).to({rotation:1.3,x:938.3,y:908.8},0).wait(1).to({rotation:0.8,x:934.9,y:909.1},0).wait(1).to({rotation:0.2,x:931.2,y:909.3},0).wait(1).to({rotation:-0.3,x:927.6,y:909.5},0).wait(1).to({rotation:-0.8,x:924,y:909.8},0).wait(1).to({rotation:-1.3,x:920.8,y:910},0).wait(1).to({rotation:-1.7,x:918,y:910.2},0).wait(1).to({regX:69,regY:41,rotation:-2,x:921.7,y:916.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.9,x:917.1,y:910.2},0).wait(1).to({rotation:-1.6,x:918.5,y:910.1},0).wait(1).to({rotation:-1.2,x:920.5,y:909.9},0).wait(1).to({regX:69,regY:41,rotation:-0.8,x:927.8,y:916.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1,x:921.8,y:909.8},0).wait(1).to({rotation:-1.2,x:920.8,y:909.9},0).wait(1).to({rotation:-1.4,x:919.8,y:910},0).wait(1).to({rotation:-1.6,x:918.7,y:910.1},0).wait(1).to({rotation:-1.7,x:917.6,y:910.2},0).wait(1).to({regX:69,regY:41,rotation:-2,x:921.7,y:916.6},0).wait(1).to({regX:64.1,regY:34.5,x:916.5,y:910.2},0).wait(1).to({rotation:-1.9,x:916.6},0).wait(2).to({y:910.3},0).wait(7).to({y:910.2},0).wait(2).to({y:910.3},0).wait(3).to({y:910.2},0).wait(2).to({y:910.3},0).wait(1).to({rotation:-1.8},0).wait(1).to({y:910.2},0).wait(3).to({regX:69,regY:41,x:921.8,y:916.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.9,x:916,y:910.3},0).wait(1).to({rotation:-2.1,x:914.5,y:910.5},0).wait(1).to({rotation:-2.4,x:912.8,y:910.7},0).wait(1).to({rotation:-2.6,x:911,y:910.9},0).wait(1).to({regX:69,regY:41,rotation:-2.8,x:915.1,y:917.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:-2.7,x:910.4,y:911},0).wait(1).to({rotation:-2.5,x:911.8,y:910.9},0).wait(1).to({rotation:-2.2,x:913.8,y:910.7},0).wait(1).to({rotation:-1.9,x:916.3,y:910.6},0).wait(1).to({rotation:-1.4,x:919.2,y:910.4},0).wait(1).to({rotation:-1,x:922.4,y:910.1},0).wait(1).to({rotation:-0.5,x:925.7,y:909.9},0).wait(1).to({rotation:0,x:929.2,y:909.6},0).wait(1).to({rotation:0.5,x:932.7,y:909.3},0).wait(1).to({rotation:1.1,x:936.3,y:909.1},0).wait(1).to({rotation:1.6,x:939.8,y:908.8},0).wait(1).to({rotation:2.1,x:943,y:908.6},0).wait(1).to({rotation:2.5,x:946,y:908.4},0).wait(1).to({rotation:2.8,x:948.2,y:908.2},0).wait(1).to({regX:69,regY:41,rotation:3,x:954,y:914.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.9,x:949.2,y:908.1},0).wait(1).to({x:948.8},0).wait(1).to({rotation:2.8,x:948.2,y:908.2},0).wait(1).to({rotation:2.7,x:947.6},0).wait(1).to({rotation:2.5,x:946.8,y:908.3},0).wait(1).to({rotation:2.4,x:945.9},0).wait(1).to({rotation:2.2,x:945.1,y:908.4},0).wait(1).to({rotation:2.1,x:944.3,y:908.5},0).wait(1).to({rotation:2,x:943.5,y:908.6},0).wait(1).to({rotation:1.9,x:942.9},0).wait(1).to({regX:69,regY:41,rotation:1.8,x:947.3,y:915.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.1,x:944.8,y:908.5},0).wait(1).to({rotation:2.5,x:947.1},0).wait(1).to({rotation:2.8,x:949.3,y:908.4},0).wait(1).to({rotation:3.1,x:951.5},0).wait(1).to({rotation:3.4,x:953.7,y:908.3},0).wait(1).to({rotation:3.8,x:955.9,y:908.2},0).wait(1).to({rotation:4.1,x:958},0).wait(1).to({rotation:4.4,x:960.2,y:908.1},0).wait(1).to({regX:69,regY:41,rotation:4.7,x:966.8,y:915},0).wait(1).to({regX:64.1,regY:34.5,x:962.4,y:908.1},0).wait(2).to({rotation:4.6,x:962.3},0).wait(2).to({x:962.4},0).wait(1).to({x:962.3},0).wait(2).to({regX:69,regY:41,x:966.7,y:915},0).wait(1).to({regX:64.1,regY:34.5,x:962.3,y:908.1},0).wait(3).to({y:908},0).wait(1).to({y:908.1},0).wait(1).to({x:962.4},0).wait(1).to({y:908},0).wait(1).to({x:962.3,y:908.1},0).wait(4).to({rotation:4.7,x:962.4},0).wait(3).to({y:908},0).wait(1).to({y:908.1},0).wait(3).to({regX:69,regY:41,x:966.8,y:915},0).wait(1).to({regX:64.1,regY:34.5,x:962,y:908.1},0).wait(1).to({rotation:4.5,x:961.2},0).wait(1).to({rotation:4.3,x:959.9,y:908.2},0).wait(1).to({rotation:4.1,x:958.3,y:908.3},0).wait(1).to({rotation:3.8,x:956.5},0).wait(1).to({rotation:3.6,x:954.5,y:908.4},0).wait(1).to({rotation:3.2,x:952.3,y:908.5},0).wait(1).to({rotation:2.9,x:950,y:908.7},0).wait(1).to({rotation:2.5,x:947.6,y:908.8},0).wait(1).to({rotation:2.2,x:945.1,y:908.9},0).wait(1).to({rotation:1.8,x:942.5,y:909},0).wait(1).to({rotation:1.4,x:939.9,y:909.1},0).wait(1).to({rotation:1.1,x:937.3,y:909.3},0).wait(1).to({rotation:0.7,x:934.7,y:909.4},0).wait(1).to({rotation:0.3,x:932.1,y:909.5},0).wait(1).to({rotation:-0.1,x:929.5,y:909.6},0).wait(1).to({rotation:-0.4,x:927,y:909.7},0).wait(1).to({rotation:-0.8,x:924.6,y:909.8},0).wait(1).to({rotation:-1.1,x:922.4,y:910},0).wait(1).to({rotation:-1.4,x:920.3,y:910.1},0).wait(1).to({rotation:-1.7,x:918.5,y:910.2},0).wait(1).to({rotation:-1.9,x:917.2},0).wait(1).to({regX:69,regY:41,rotation:-2,x:921.7,y:916.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.7,x:918.2,y:910.1},0).wait(1).to({rotation:-1.2,x:921.8,y:909.8},0).wait(1).to({rotation:-0.5,x:926.2,y:909.5},0).wait(1).to({rotation:0.2,x:931,y:909.1},0).wait(1).to({rotation:0.9,x:935.9,y:908.7},0).wait(1).to({rotation:1.6,x:940.2,y:908.3},0).wait(1).to({regX:69,regY:41,rotation:2,x:947.2,y:914.8},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.8,x:941.4,y:908.2},0).wait(1).to({rotation:1.4,x:939,y:908.3},0).wait(1).to({rotation:1,x:936,y:908.6},0).wait(1).to({rotation:0.5,x:932.7,y:908.8},0).wait(1).to({rotation:0,x:929.4,y:909.1},0).wait(1).to({rotation:-0.5,x:926.5,y:909.3},0).wait(1).to({regX:69,regY:41,rotation:-0.7,x:929.8,y:915.9},0).wait(1).to({regX:64.1,regY:34.5,x:925.1,y:909.4},0).wait(1).to({rotation:-0.6,x:925.8,y:909.3},0).wait(1).to({rotation:-0.4,x:926.6},0).wait(1).to({rotation:-0.3,x:927.5,y:909.2},0).wait(1).to({rotation:-0.2,x:928.3,y:909.1},0).wait(1).to({rotation:-0.1,x:929.1},0).wait(1).to({regX:69,regY:41,rotation:0,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.4,y:909},0).wait(1).to({rotation:-0.1,x:929.1},0).wait(1).to({x:928.6,y:909.1},0).wait(1).to({rotation:-0.2,x:927.9,y:909.2},0).wait(1).to({rotation:-0.3,x:927.2},0).wait(1).to({rotation:-0.5,x:926.4,y:909.3},0).wait(1).to({rotation:-0.6,x:925.5,y:909.5},0).wait(1).to({rotation:-0.7,x:924.6,y:909.6},0).wait(1).to({rotation:-0.9,x:923.7},0).wait(1).to({rotation:-1,x:922.7,y:909.7},0).wait(1).to({rotation:-1.2,x:921.6,y:909.9},0).wait(1).to({rotation:-1.3,x:920.6,y:910},0).wait(1).to({rotation:-1.5,x:919.6,y:910.1},0).wait(1).to({rotation:-1.6,x:918.5,y:910.2},0).wait(1).to({rotation:-1.8,x:917.5,y:910.3},0).wait(1).to({rotation:-2,x:916.5,y:910.4},0).wait(1).to({rotation:-2.1,x:915.4,y:910.5},0).wait(1).to({rotation:-2.2,x:914.5,y:910.6},0).wait(1).to({rotation:-2.4,x:913.6,y:910.7},0).wait(1).to({rotation:-2.5,x:912.8,y:910.8},0).wait(1).to({rotation:-2.6,x:912.1,y:910.9},0).wait(1).to({rotation:-2.7,x:911.5},0).wait(1).to({regX:69,regY:41,x:916.5,y:917.2},0).wait(1).to({regX:64.1,regY:34.5,x:911.3,y:910.9},0).wait(5).to({y:911},0).wait(3).to({y:910.9},0).wait(3).to({x:911.4},0).wait(1).to({y:911},0).wait(2).to({rotation:-2.6,y:910.9},0).wait(7).to({x:911.5},0).wait(8).to({rotation:-2.5},0).wait(1).to({regX:69,regY:41,x:916.7,y:917.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:-2.7,x:910.4,y:911.1},0).wait(1).to({rotation:-3,x:908.2,y:911.4},0).wait(1).to({rotation:-3.4,x:905.6,y:911.8},0).wait(1).to({rotation:-3.8,x:903.1,y:912.2},0).wait(1).to({regX:69.1,regY:41,rotation:-4,x:907,y:918.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-3.9,x:902.2,y:912.3},0).wait(1).to({rotation:-3.7,x:904,y:912.2},0).wait(1).to({rotation:-3.3,x:906.4,y:912},0).wait(1).to({rotation:-2.9,x:909.4,y:911.7},0).wait(1).to({rotation:-2.4,x:912.7,y:911.4},0).wait(1).to({rotation:-1.8,x:916.4,y:911.1},0).wait(1).to({rotation:-1.2,x:920.2,y:910.8},0).wait(1).to({rotation:-0.6,x:924.3,y:910.4},0).wait(1).to({rotation:0,x:928.4,y:910},0).wait(1).to({rotation:0.6,x:932.6,y:909.7},0).wait(1).to({rotation:1.2,x:936.6,y:909.3},0).wait(1).to({rotation:1.8,x:940.7,y:909},0).wait(1).to({rotation:2.4,x:944.7,y:908.6},0).wait(1).to({rotation:2.9,x:948.3,y:908.3},0).wait(1).to({rotation:3.4,x:951.5,y:908.1},0).wait(1).to({rotation:3.8,x:954,y:907.8},0).wait(1).to({regX:69,regY:41,rotation:4,x:959.7,y:914.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:3.8,x:954.1,y:907.8},0).wait(1).to({rotation:3.4,x:951.4,y:907.9},0).wait(1).to({rotation:2.9,x:948,y:908.1},0).wait(1).to({rotation:2.3,x:944.1,y:908.3},0).wait(1).to({rotation:1.6,x:939.9,y:908.5},0).wait(1).to({rotation:1,x:935.7,y:908.8},0).wait(1).to({rotation:0.4,x:931.7,y:909},0).wait(1).to({rotation:-0.2,x:928.3,y:909.1},0).wait(1).to({regX:69.1,regY:41.1,rotation:-0.4,x:931.6,y:915.8},0).wait(1).to({regX:64.1,regY:34.5,x:927.1,y:909.2},0).wait(1).to({rotation:-0.2,x:928.4,y:909.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:930},0).wait(1).to({rotation:0.3,x:931.8,y:909},0).wait(1).to({rotation:0.5,x:933.5,y:908.9},0).wait(1).to({rotation:0.7,x:935.1,y:908.8},0).wait(1).to({regX:69.1,regY:41.1,rotation:0.8,x:940.9,y:915.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:0.9,x:936.6,y:908.7},0).wait(1).to({rotation:1,x:937.9,y:908.5},0).wait(1).to({rotation:1.2,x:939.5,y:908.3},0).wait(1).to({rotation:1.4,x:941.3,y:908},0).wait(1).to({rotation:1.6,x:943.1,y:907.8},0).wait(1).to({rotation:1.8,x:944.6,y:907.6},0).wait(1).to({regX:69.1,regY:40.9,rotation:1.9,x:950.3,y:914.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.8,x:945.5,y:907.7},0).wait(2).to({x:945.4},0).wait(2).to({regX:69.1,regY:40.9,x:950.3,y:914.3},0).wait(1).to({regX:64.1,regY:34.5,x:945.9,y:907.7},0).wait(1).to({rotation:2,x:946.8},0).wait(1).to({rotation:2.2,x:948},0).wait(1).to({rotation:2.4,x:949.4},0).wait(1).to({rotation:2.6,x:950.8,y:907.6},0).wait(1).to({rotation:2.8,x:952.1},0).wait(1).to({rotation:2.9,x:953.3,y:907.5},0).wait(1).to({regX:69.1,regY:40.9,rotation:3,x:958.7,y:914.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.9,x:953.3,y:907.5},0).wait(1).to({rotation:2.7,x:951.8,y:907.6},0).wait(1).to({rotation:2.4,x:950.1},0).wait(1).to({rotation:2.2,x:948.2,y:907.7},0).wait(1).to({rotation:1.9,x:946.4},0).wait(1).to({regX:69.1,regY:40.9,rotation:1.8,x:950.3,y:914.3},0).wait(1).to({regX:64.1,regY:34.5,x:945.4,y:907.8},0).wait(1).to({y:907.7},0).wait(2).to({regX:69.2,regY:40.9,x:950.3,y:914.3},0).wait(1).to({regX:64.1,regY:34.5,x:945.4,y:907.7},0).wait(4).to({regX:69.1,regY:40.9,x:950.3,y:914.3},0).wait(1).to({regX:64.1,regY:34.5,x:945.4,y:907.8},0).wait(1).to({y:907.7},0).wait(1).to({rotation:1.7,x:945.3,y:907.8},0).wait(2).to({y:907.7},0).wait(1).to({rotation:1.6,x:945.2,y:907.8},0).wait(2).to({x:945.1},0).wait(2).to({regX:69.1,regY:41,x:949.9,y:914.4},0).wait(1).to({regX:64.1,regY:34.5,x:945,y:907.8},0).wait(1).to({rotation:1.5},0).wait(1).to({y:907.7},0).wait(2).to({x:944.9},0).wait(1).to({regX:69.1,regY:41,x:949.7,y:914.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.6,x:945.6,y:907.7},0).wait(1).to({rotation:1.8,x:947.1},0).wait(1).to({rotation:2.1,x:949.2},0).wait(1).to({rotation:2.5,x:951.6,y:907.6},0).wait(1).to({rotation:2.8,x:954.2,y:907.5},0).wait(1).to({rotation:3.2,x:957},0).wait(1).to({rotation:3.6,x:959.8},0).wait(1).to({rotation:4,x:962.4,y:907.4},0).wait(1).to({rotation:4.4,x:965},0).wait(1).to({rotation:4.6,x:967},0).wait(1).to({regX:69.1,regY:41,rotation:4.8,x:972.6,y:914.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:4.7,x:967.1,y:907.3},0).wait(1).to({rotation:4.4,x:965.3},0).wait(1).to({rotation:4.1,x:963.1},0).wait(1).to({rotation:3.8,x:961.1},0).wait(1).to({regX:69.1,regY:41,rotation:3.6,x:964.4,y:914.1},0).wait(1).to({regX:64.1,regY:34.5,rotation:3.7,x:961,y:907.3},0).wait(1).to({rotation:4.1,x:963.4},0).wait(1).to({rotation:4.4,x:966.2,y:907.4},0).wait(1).to({rotation:4.8,x:969,y:907.5},0).wait(1).to({regX:69.1,regY:41,scaleX:1,scaleY:1,rotation:5,x:975,y:914.5},0).wait(3).to({regX:64.1,regY:34.5,rotation:5.1,x:971,y:907.5},0).wait(1).to({rotation:5.2,x:971.7},0).wait(1).to({rotation:5.3,x:972.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:973.6},0).wait(1).to({rotation:5.6,x:974.7,y:907.6},0).wait(1).to({rotation:5.8,x:975.8,y:907.5},0).wait(1).to({rotation:5.9,x:976.7},0).wait(1).to({regX:69,regY:40.9,rotation:6,x:981.5,y:914.5},0).wait(1).to({regX:64.1,regY:34.5,x:977.2,y:907.6},0).wait(1).to({x:977.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:977},0).wait(1).to({x:976.9},0).wait(1).to({rotation:5.8,x:976.7},0).wait(1).to({regX:69,regY:40.9,x:980.9,y:914.4},0).wait(1).to({regX:64.1,regY:34.5,x:976.7,y:907.6},0).wait(1).to({x:976.6},0).wait(1).to({rotation:5.7,x:976.5},0).wait(1).to({x:976.4},0).wait(1).to({x:976.3},0).wait(1).to({rotation:5.6},0).wait(1).to({x:976.2},0).wait(1).to({regX:69,regY:41,x:980.5,y:914.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:5.8,x:977.4,y:907.7},0).wait(1).to({rotation:6.2,x:979.9,y:908},0).wait(1).to({rotation:6.7,x:982.5,y:908.1},0).wait(1).to({regX:69.1,regY:41,rotation:7,x:988.3,y:915.3},0).wait(1).to({regX:64.1,regY:34.5,x:983.8,y:908.3},0).wait(1).to({rotation:6.8,x:982.9},0).wait(1).to({rotation:6.6,x:981.6,y:908.4},0).wait(1).to({rotation:6.4,x:980},0).wait(1).to({rotation:6.1,x:978},0).wait(1).to({rotation:5.7,x:975.9,y:908.5},0).wait(1).to({rotation:5.4,x:973.6},0).wait(1).to({rotation:5,x:971.1,y:908.6},0).wait(1).to({rotation:4.6,x:968.5},0).wait(1).to({rotation:4.1,x:965.7,y:908.7},0).wait(1).to({rotation:3.7,x:962.9,y:908.8},0).wait(1).to({rotation:3.2,x:960},0).wait(1).to({rotation:2.8,x:957.1,y:908.9},0).wait(1).to({rotation:2.3,x:954,y:909},0).wait(1).to({rotation:1.8,x:951},0).wait(1).to({rotation:1.4,x:947.9,y:909.1},0).wait(1).to({rotation:0.9,x:944.9},0).wait(1).to({rotation:0.4,x:941.8,y:909.2},0).wait(1).to({rotation:-0.1,x:938.8,y:909.3},0).wait(1).to({rotation:-0.5,x:935.8,y:909.4},0).wait(1).to({rotation:-1,x:932.9},0).wait(1).to({rotation:-1.4,x:930.1,y:909.5},0).wait(1).to({rotation:-1.8,x:927.4,y:909.6},0).wait(1).to({rotation:-2.2,x:925},0).wait(1).to({rotation:-2.6,x:922.8,y:909.7},0).wait(1).to({rotation:-2.9,x:920.9,y:909.8},0).wait(1).to({rotation:-3.1,x:919.6,y:909.7},0).wait(1).to({regX:69.1,regY:40.9,rotation:-3.2,x:924.4,y:916},0).wait(1).to({regX:64.1,regY:34.5,rotation:-3.1,x:919.6,y:909.8},0).wait(1).to({rotation:-2.9,x:920.8,y:909.7},0).wait(1).to({rotation:-2.6,x:922.5},0).wait(1).to({rotation:-2.3,x:924.2,y:909.5},0).wait(1).to({rotation:-1.9,x:926.1,y:909.4},0).wait(1).to({rotation:-1.6,x:927.9,y:909.2},0).wait(1).to({rotation:-1.3,x:929.5,y:909.1},0).wait(1).to({regX:69.1,regY:40.9,rotation:-1.2,x:935.5,y:915.3},0).wait(1).to({regX:64.1,regY:34.5,x:930.3,y:908.9},0).wait(2).to({y:909},0).wait(4).to({rotation:-1.1},0).wait(9).to({rotation:-1},0).wait(2).to({regX:69.2,regY:40.9,x:935.5,y:915.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.1,x:929.9,y:909.1},0).wait(1).to({rotation:-1.2,x:928.9,y:909.2},0).wait(1).to({rotation:-1.4,x:927.4,y:909.4},0).wait(1).to({rotation:-1.7,x:925.7,y:909.6},0).wait(1).to({rotation:-2,x:923.7,y:909.8},0).wait(1).to({rotation:-2.3,x:921.6,y:910.1},0).wait(1).to({rotation:-2.6,x:919.4,y:910.4},0).wait(1).to({rotation:-2.9,x:917.2,y:910.6},0).wait(1).to({rotation:-3.2,x:914.8,y:910.9},0).wait(1).to({rotation:-3.6,x:912.5,y:911.2},0).wait(1).to({rotation:-3.9,x:910.1,y:911.5},0).wait(1).to({rotation:-4.2,x:907.9,y:911.8},0).wait(1).to({rotation:-4.5,x:905.8,y:912},0).wait(1).to({rotation:-4.8,x:903.9,y:912.3},0).wait(1).to({rotation:-5,x:902.5,y:912.5},0).wait(1).to({regX:69.1,regY:40.9,rotation:-5.1,x:907.4,y:918.5},0).wait(1).to({regX:64.1,regY:34.5,x:901.9,y:912.5},0).wait(2).to({rotation:-5},0).wait(1).to({y:912.6},0).wait(2).to({x:902,y:912.5},0).wait(2).to({x:902.1},0).wait(1).to({x:902.2},0).wait(2).to({x:902.3},0).wait(2).to({rotation:-4.9,x:902.4},0).wait(1).to({x:902.5},0).wait(1).to({x:902.6},0).wait(1).to({x:902.7},0).wait(1).to({x:902.8},0).wait(2).to({rotation:-4.8,x:902.9},0).wait(1).to({x:903,y:912.4},0).wait(1).to({x:903.1},0).wait(1).to({x:903.2},0).wait(2).to({x:903.3},0).wait(1).to({rotation:-4.7,x:903.4},0).wait(1).to({x:903.5},0).wait(1).to({x:903.6},0).wait(1).to({x:903.7},0).wait(1).to({x:903.8},0).wait(2).to({rotation:-4.6,x:903.9,y:912.3},0).wait(1).to({x:904},0).wait(1).to({x:904.1},0).wait(2).to({x:904.2},0).wait(1).to({x:904.3},0).wait(1).to({x:904.4},0).wait(1).to({rotation:-4.5},0).wait(1).to({x:904.5},0).wait(2).to({x:904.6},0).wait(2).to({regX:69.1,regY:40.9,x:910.1,y:918.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:-4.6,x:904,y:912.3},0).wait(1).to({rotation:-4.8,x:902.8,y:912.4},0).wait(1).to({rotation:-5.1,x:901.3,y:912.5},0).wait(1).to({rotation:-5.4,x:899.7},0).wait(1).to({rotation:-5.6,x:898.3,y:912.7},0).wait(1).to({regX:69.2,regY:40.9,rotation:-5.8,x:903.1,y:918.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-5.4,x:899.6,y:912.6},0).wait(1).to({rotation:-4.6,x:904.9,y:912.3},0).wait(1).to({rotation:-3.5,x:912.1,y:911.8},0).wait(1).to({rotation:-2.2,x:920.3,y:911.4},0).wait(1).to({rotation:-0.8,x:929.4,y:910.9},0).wait(1).to({rotation:0.7,x:938.8,y:910.3},0).wait(1).to({rotation:2.2,x:948.4,y:909.8},0).wait(1).to({rotation:3.6,x:957.7,y:909.3},0).wait(1).to({rotation:5,x:966.3,y:908.8},0).wait(1).to({rotation:6.1,x:973.4,y:908.4},0).wait(1).to({regX:69.2,regY:40.9,rotation:6.6,x:981.2,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:6.4,x:975.6,y:908.3},0).wait(1).to({rotation:5.9,x:972.6,y:908.5},0).wait(1).to({rotation:5.3,x:968.8,y:908.7},0).wait(1).to({rotation:4.6,x:964.6,y:908.9},0).wait(1).to({rotation:3.9,x:960.2,y:909.2},0).wait(1).to({rotation:3.2,x:955.9,y:909.4},0).wait(1).to({rotation:2.6,x:952.2,y:909.6},0).wait(1).to({regX:69.1,regY:40.9,rotation:2.3,x:955.1,y:916.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.5,x:951.5,y:909.7},0).wait(1).to({rotation:2.9,x:953.8,y:909.5},0).wait(1).to({rotation:3.3,x:956.7,y:909.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.8,x:959.8,y:909.2},0).wait(1).to({rotation:4.3,x:962.6,y:909.1},0).wait(1).to({regX:69.2,regY:40.9,rotation:4.5,x:968.7,y:915.8},0).wait(1).to({regX:64.1,regY:34.5,rotation:4.7,x:965.5,y:908.9},0).wait(1).to({rotation:5.2,x:968.4,y:908.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:971.7,y:908.5},0).wait(1).to({rotation:6.3,x:974.9,y:908.4},0).wait(1).to({regX:69.2,regY:40.9,rotation:6.6,x:981.2,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,x:976.9,y:908.3},0).wait(1).to({scaleX:1,scaleY:1,x:976.8},0).wait(1).to({regX:69.2,regY:40.9,rotation:6.5,x:981.2,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:6.3,x:975.5,y:908.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.9,x:972.3,y:908.4},0).wait(1).to({rotation:5.3,x:968.1},0).wait(1).to({rotation:4.6,x:963.1,y:908.5},0).wait(1).to({rotation:3.9,x:957.7,y:908.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.1,x:952,y:908.7},0).wait(1).to({rotation:2.3,x:946.4,y:908.8},0).wait(1).to({rotation:1.6,x:940.9,y:908.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:935.7,y:909.1},0).wait(1).to({rotation:0.3,x:931.5},0).wait(1).to({regX:69,regY:41,rotation:0,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.6,y:909},0).wait(3).to({regX:69,regY:41,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.6,y:909},0).wait(4).to({regX:69,regY:41,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.6,y:909},0).wait(3).to({regX:69,regY:41,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.6,y:909},0).wait(17).to({regX:69,regY:41,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,x:929.6,y:909},0).wait(8).to({regX:69,regY:41,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:0.2,x:930.8,y:908.9},0).wait(1).to({rotation:0.6,x:933.6,y:908.8},0).wait(1).to({rotation:1.1,x:937,y:908.6},0).wait(1).to({rotation:1.7,x:940.7,y:908.4},0).wait(1).to({rotation:2.2,x:944.4,y:908.2},0).wait(1).to({rotation:2.7,x:947.8,y:908},0).wait(1).to({regX:69,regY:41.1,rotation:3,x:954.2,y:914.7},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.7,x:947.8,y:907.9},0).wait(1).to({rotation:2.1,x:943.7,y:908.3},0).wait(1).to({rotation:1.3,x:938.6,y:908.7},0).wait(1).to({rotation:0.5,x:933.1,y:909},0).wait(1).to({rotation:-0.3,x:927.5,y:909.5},0).wait(1).to({rotation:-1.1,x:922.5,y:909.8},0).wait(1).to({regX:69,regY:41.1,rotation:-1.5,x:924.8,y:916.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.2,x:921.7,y:909.9},0).wait(1).to({rotation:-0.6,x:925.9,y:909.6},0).wait(1).to({rotation:0.1,x:931,y:909.3},0).wait(1).to({rotation:0.9,x:936.3,y:909},0).wait(1).to({rotation:1.6,x:941.2,y:908.7},0).wait(1).to({regX:69,regY:41.1,rotation:2,x:948.7,y:915.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.9,x:943.2,y:908.6},0).wait(1).to({rotation:1.6,x:941.4,y:908.8},0).wait(1).to({rotation:1.3,x:939.3,y:908.9},0).wait(1).to({rotation:1,x:937.2},0).wait(1).to({rotation:0.7,x:935.1,y:909},0).wait(1).to({regX:69,regY:41.1,rotation:0.5,x:938.9,y:915.7},0).wait(1).to({regX:64.1,regY:34.5,x:934.3,y:909.1},0).wait(1).to({rotation:0.6,x:934.8,y:909},0).wait(1).to({rotation:0.7,x:935.6},0).wait(1).to({rotation:0.8,x:936.5,y:908.9},0).wait(1).to({rotation:1,x:937.6},0).wait(1).to({rotation:1.1,x:938.6,y:908.8},0).wait(1).to({rotation:1.3,x:939.7},0).wait(1).to({rotation:1.4,x:940.9,y:908.7},0).wait(1).to({rotation:1.6,x:942},0).wait(1).to({rotation:1.7,x:943.1,y:908.6},0).wait(1).to({rotation:1.9,x:944.1,y:908.5},0).wait(1).to({rotation:2,x:944.9,y:908.4},0).wait(1).to({regX:69,regY:41.1,x:950,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,x:945.1,y:908.4},0).wait(1).to({rotation:1.9,x:944.4},0).wait(1).to({rotation:1.8,x:943.5,y:908.5},0).wait(1).to({rotation:1.6,x:942.5,y:908.6},0).wait(1).to({rotation:1.4,x:941.3,y:908.7},0).wait(1).to({rotation:1.2,x:940.1},0).wait(1).to({rotation:1,x:938.8,y:908.8},0).wait(1).to({rotation:0.8,x:937.6},0).wait(1).to({rotation:0.6,x:936.3,y:908.9},0).wait(1).to({rotation:0.4,x:935.1,y:909},0).wait(1).to({rotation:0.3,x:934},0).wait(1).to({rotation:0.1,x:933.1,y:909.1},0).wait(1).to({regX:69,regY:41.1,x:937.5,y:915.7},0).wait(1).to({regX:64.1,regY:34.5,x:933,y:909.1},0).wait(1).to({rotation:0.2,x:933.7,y:909},0).wait(1).to({rotation:0.4,x:934.7},0).wait(1).to({rotation:0.5,x:935.9,y:908.9},0).wait(1).to({rotation:0.7,x:937.1,y:908.8},0).wait(1).to({rotation:0.9,x:938.4,y:908.7},0).wait(1).to({rotation:1.1,x:939.7},0).wait(1).to({rotation:1.3,x:940.9,y:908.6},0).wait(1).to({rotation:1.4,x:941.8,y:908.5},0).wait(1).to({regX:69,regY:41.1,rotation:1.5,x:947.1,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,x:942.3,y:908.5},0).wait(2).to({x:942.2},0).wait(3).to({x:942.1},0).wait(1).to({x:942},0).wait(2).to({rotation:1.4},0).wait(1).to({x:941.9},0).wait(1).to({x:941.8,y:908.6},0).wait(1).to({x:941.7,y:908.5},0).wait(1).to({x:941.6},0).wait(1).to({x:941.5,y:908.6},0).wait(2).to({x:941.4,y:908.5},0).wait(1).to({rotation:1.3,x:941.3,y:908.6},0).wait(1).to({x:941.2},0).wait(1).to({x:941.1,y:908.5},0).wait(1).to({x:941,y:908.6},0).wait(2).to({x:940.9,y:908.5},0).wait(1).to({x:940.8,y:908.6},0).wait(1).to({rotation:1.2,x:940.7},0).wait(1).to({x:940.6},0).wait(1).to({x:940.5},0).wait(2).to({x:940.4},0).wait(1).to({x:940.3},0).wait(1).to({x:940.2},0).wait(1).to({rotation:1.1,x:940.1},0).wait(1).to({x:940},0).wait(1).to({x:939.9},0).wait(2).to({x:939.8},0).wait(1).to({x:939.7},0).wait(1).to({x:939.6},0).wait(2).to({x:939.5},0).wait(1).to({rotation:1,x:939.4},0).wait(2).to({regX:69.1,regY:41.1,x:944.3,y:915.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.1,x:939.5,y:908.6},0).wait(1).to({x:939.8},0).wait(1).to({rotation:1.2,x:940.2},0).wait(1).to({x:940.7},0).wait(1).to({rotation:1.3,x:941.4},0).wait(1).to({rotation:1.4,x:942.1,y:908.5},0).wait(1).to({rotation:1.6,x:942.9},0).wait(1).to({rotation:1.7,x:943.7},0).wait(1).to({rotation:1.8,x:944.6,y:908.4},0).wait(1).to({rotation:1.9,x:945.6},0).wait(1).to({rotation:2.1,x:946.6},0).wait(1).to({rotation:2.2,x:947.6},0).wait(1).to({rotation:2.4,x:948.6},0).wait(1).to({rotation:2.5,x:949.6,y:908.3},0).wait(1).to({rotation:2.7,x:950.7},0).wait(1).to({rotation:2.9,x:951.8},0).wait(1).to({rotation:3,x:953},0).wait(1).to({rotation:3.2,x:954.1,y:908.2},0).wait(1).to({rotation:3.4,x:955.1},0).wait(1).to({rotation:3.5,x:956.3},0).wait(1).to({rotation:3.7,x:957.4,y:908.1},0).wait(1).to({rotation:3.8,x:958.5},0).wait(1).to({rotation:4,x:959.5},0).wait(1).to({rotation:4.1,x:960.5},0).wait(1).to({rotation:4.3,x:961.6},0).wait(1).to({rotation:4.4,x:962.6,y:908},0).wait(1).to({rotation:4.6,x:963.5},0).wait(1).to({rotation:4.7,x:964.3},0).wait(1).to({rotation:4.8,x:965.1,y:907.9},0).wait(1).to({rotation:4.9,x:965.7,y:908},0).wait(1).to({rotation:5,x:966.1,y:907.9},0).wait(1).to({regX:69.1,regY:41.1,x:970.7,y:914.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:4.9,x:965.6,y:907.9},0).wait(1).to({rotation:4.6,x:964,y:908},0).wait(1).to({rotation:4.2,x:961.6},0).wait(1).to({rotation:3.7,x:958.8},0).wait(1).to({rotation:3.2,x:955.8,y:908.2},0).wait(1).to({rotation:2.7,x:952.6,y:908.3},0).wait(1).to({rotation:2.1,x:949.2},0).wait(1).to({rotation:1.5,x:945.8,y:908.4},0).wait(1).to({rotation:1,x:942.4,y:908.5},0).wait(1).to({rotation:0.4,x:939.3,y:908.6},0).wait(1).to({rotation:-0.1,x:936.4,y:908.7},0).wait(1).to({rotation:-0.5,x:934,y:908.8},0).wait(1).to({regX:69.1,regY:41.1,rotation:-0.6,x:938,y:915.4},0).wait(1).to({regX:64.1,regY:34.5,x:933.3,y:908.8},0).wait(1).to({rotation:-0.4,x:934.4},0).wait(1).to({rotation:-0.1,x:935.9,y:908.7},0).wait(1).to({rotation:0.2,x:937.8},0).wait(1).to({rotation:0.5,x:939.9,y:908.6},0).wait(1).to({rotation:0.9,x:942.1},0).wait(1).to({rotation:1.3,x:944.5,y:908.5},0).wait(1).to({rotation:1.7,x:947.1,y:908.4},0).wait(1).to({rotation:2.2,x:949.7},0).wait(1).to({rotation:2.6,x:952.2,y:908.3},0).wait(1).to({rotation:3,x:954.8,y:908.2},0).wait(1).to({rotation:3.5,x:957.3},0).wait(1).to({rotation:3.9,x:959.8,y:908.1},0).wait(1).to({rotation:4.3,x:962.1,y:908},0).wait(1).to({rotation:4.6,x:964.1},0).wait(1).to({rotation:4.9,x:965.6,y:907.9},0).wait(1).to({regX:69.1,regY:41.1,rotation:5,x:970.7,y:914.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:4.9,x:965.5,y:907.9},0).wait(1).to({rotation:4.8,x:964.6},0).wait(1).to({rotation:4.6,x:963.7,y:908},0).wait(1).to({rotation:4.5,x:963},0).wait(1).to({rotation:4.4,x:962.1},0).wait(1).to({rotation:4.3,x:961.2,y:908.1},0).wait(1).to({rotation:4.2,x:960.3},0).wait(1).to({rotation:4,x:959.5},0).wait(1).to({rotation:3.9,x:958.7},0).wait(1).to({rotation:3.8,x:957.8},0).wait(1).to({rotation:3.7,x:957},0).wait(1).to({rotation:3.6,x:956.1,y:908.2},0).wait(1).to({rotation:3.4,x:955.2},0).wait(1).to({rotation:3.3,x:954.4},0).wait(1).to({rotation:3.2,x:953.6},0).wait(1).to({rotation:3.1,x:952.7,y:908.3},0).wait(1).to({rotation:3,x:951.8},0).wait(1).to({rotation:2.8,x:951},0).wait(1).to({rotation:2.7,x:950.1},0).wait(1).to({rotation:2.6,x:949.3,y:908.4},0).wait(1).to({rotation:2.5,x:948.4},0).wait(1).to({rotation:2.4,x:947.6},0).wait(1).to({rotation:2.2,x:946.7},0).wait(1).to({rotation:2.1,x:945.8},0).wait(1).to({rotation:2,x:945,y:908.5},0).wait(1).to({rotation:1.9,x:944.1},0).wait(1).to({rotation:1.8,x:943.3},0).wait(1).to({rotation:1.6,x:942.4,y:908.6},0).wait(1).to({regX:69.2,regY:41.2,rotation:1.5,x:946.5,y:915.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.8,x:943.8,y:908.5},0).wait(1).to({rotation:2.1,x:946,y:908.4},0).wait(1).to({rotation:2.4,x:948.2,y:908.3},0).wait(1).to({rotation:2.7,x:950.4},0).wait(1).to({regX:69.1,regY:41.2,rotation:3,x:957.3,y:915.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:2.9,x:951.7,y:908.3},0).wait(1).to({rotation:2.8,x:950.7},0).wait(1).to({rotation:2.6,x:949.7},0).wait(1).to({rotation:2.5,x:948.8},0).wait(1).to({rotation:2.4,x:947.8,y:908.4},0).wait(1).to({rotation:2.3,x:946.9},0).wait(1).to({rotation:2.1,x:945.9},0).wait(1).to({rotation:2,x:944.9},0).wait(1).to({rotation:1.9,x:943.9},0).wait(1).to({rotation:1.8,x:943,y:908.5},0).wait(1).to({rotation:1.6,x:942},0).wait(1).to({rotation:1.5,x:941.1},0).wait(1).to({rotation:1.4,x:940.1},0).wait(1).to({rotation:1.3,x:939.1,y:908.6},0).wait(1).to({rotation:1.1,x:938.2},0).wait(1).to({rotation:1,x:937.2},0).wait(1).to({rotation:0.9,x:936.2},0).wait(1).to({rotation:0.8,x:935.3,y:908.7},0).wait(1).to({rotation:0.6,x:934.3},0).wait(1).to({rotation:0.5,x:933.3},0).wait(1).to({rotation:0.4,x:932.3},0).wait(1).to({rotation:0.3,x:931.4,y:908.8},0).wait(1).to({rotation:0.1,x:930.4},0).wait(1).to({regX:69,regY:41,rotation:0,x:934.5,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:-0.3,x:927.5,y:909.2},0).wait(1).to({rotation:-0.9,x:923.9,y:909.6},0).wait(1).to({rotation:-1.5,x:919.9,y:909.9},0).wait(1).to({regX:69,regY:41,rotation:-2,x:921.5,y:916.6},0).wait(1).to({regX:64.1,regY:34.5,rotation:-2.1,x:915.4,y:910.4},0).wait(1).to({rotation:-2.4,x:913.6,y:910.6},0).wait(1).to({rotation:-2.7,x:911.5,y:910.9},0).wait(1).to({rotation:-3.1,x:909.1,y:911.3},0).wait(1).to({rotation:-3.4,x:906.7,y:911.6},0).wait(1).to({regX:69,regY:41.1,rotation:-3.7,x:910.2,y:918.1},0).wait(1).to({regX:64.1,regY:34.5,x:905,y:911.8},0).wait(1).to({rotation:-3.6,x:905.3},0).wait(1).to({rotation:-3.5,x:905.7,y:911.7},0).wait(1).to({rotation:-3.4,x:906.1},0).wait(1).to({regX:69,regY:41.1,rotation:-3.3,x:911.6,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:-3.5,x:905.4,y:911.8},0).wait(1).to({rotation:-3.8,x:903.7,y:912},0).wait(1).to({rotation:-4.1,x:901.9,y:912.2},0).wait(1).to({regX:69,regY:41.1,rotation:-4.4,x:905.7,y:918.7},0).wait(1).to({regX:64.1,regY:34.5,rotation:-4.2,x:901.4,y:912.4},0).wait(1).to({rotation:-3.8,x:904,y:912.3},0).wait(1).to({rotation:-3.3,x:907.3,y:912.1},0).wait(1).to({rotation:-2.8,x:911.2,y:911.9},0).wait(1).to({rotation:-2.1,x:915.3,y:911.8},0).wait(1).to({rotation:-1.4,x:919.8,y:911.6},0).wait(1).to({rotation:-0.7,x:924.4,y:911.4},0).wait(1).to({rotation:0,x:929.1,y:911.2},0).wait(1).to({rotation:0.7,x:933.9,y:911},0).wait(1).to({rotation:1.4,x:938.7,y:910.8},0).wait(1).to({rotation:2.2,x:943.3,y:910.5},0).wait(1).to({rotation:2.8,x:947.7,y:910.4},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.3,x:955.3,y:917.1},0).wait(1).to({regX:64.1,regY:34.5,x:950.8,y:910.4},0).wait(1).to({x:951.2,y:910.7},0).wait(1).to({rotation:3.4,x:951.7,y:911},0).wait(1).to({rotation:3.5,x:952.3,y:911.3},0).wait(1).to({x:952.9,y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.9},0).wait(1).to({y:911.7},0).wait(1).to({y:911.4},0).wait(1).to({y:911.2},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.2},0).wait(1).to({y:911.4},0).wait(1).to({y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(62).to({regX:64.1,regY:34.5,rotation:3.7,x:954.6,y:912},0).wait(1).to({rotation:4.1,x:957.1},0).wait(1).to({rotation:4.6,x:960.2,y:912.1},0).wait(1).to({rotation:5.1,x:963.5},0).wait(1).to({rotation:5.6,x:967},0).wait(1).to({rotation:6.1,x:970.4},0).wait(1).to({regX:69.2,regY:41.1,rotation:6.5,x:977.3,y:919.2},0).wait(1).to({regX:64.1,regY:34.5,rotation:6.6,x:973.2,y:912.1},0).wait(1).to({x:973.6},0).wait(1).to({rotation:6.7,x:974.2,y:912.2},0).wait(1).to({rotation:6.8,x:974.9},0).wait(1).to({rotation:6.9,x:975.6,y:912.3},0).wait(1).to({rotation:7.1,x:976.4},0).wait(1).to({rotation:7.2,x:977.2},0).wait(1).to({rotation:7.3,x:978},0).wait(1).to({rotation:7.4,x:978.9,y:912.4},0).wait(1).to({rotation:7.6,x:979.7,y:912.5},0).wait(1).to({rotation:7.7,x:980.6},0).wait(1).to({rotation:7.8,x:981.4},0).wait(1).to({rotation:7.9,x:982.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:8,x:986.9,y:919.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:7.5,x:979.1,y:912.3},0).wait(1).to({rotation:6.5,x:972.5,y:911.9},0).wait(1).to({rotation:5.4,x:964.9,y:911.3},0).wait(1).to({rotation:4.2,x:956.9,y:910.7},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.3,x:955.3,y:917.1},0).wait(1).to({regX:64.1,regY:34.5,x:950.8,y:910.4},0).wait(1).to({x:951.2,y:910.7},0).wait(1).to({rotation:3.4,x:951.7,y:911},0).wait(1).to({rotation:3.5,x:952.3,y:911.3},0).wait(1).to({x:952.9,y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.9},0).wait(1).to({y:911.7},0).wait(1).to({y:911.4},0).wait(1).to({y:911.2},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.2},0).wait(1).to({y:911.4},0).wait(1).to({y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(12).to({regX:64.1,regY:34.5,x:953.2,y:911.7},0).wait(1).to({y:911.1},0).wait(1).to({y:910.3},0).wait(1).to({y:909.6},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:915.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:910.4},0).wait(1).to({y:912.9},0).wait(1).to({y:915.6},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:924.9},0).wait(12).to({regX:64.1,regY:34.5,x:953,y:917.2},0).wait(1).to({x:952.3,y:915.5},0).wait(1).to({rotation:3.4,x:951.7,y:913.7},0).wait(1).to({rotation:3.3,x:951,y:911.8},0).wait(1).to({regX:69.2,regY:41.1,x:955.3,y:917.1},0).wait(1).to({regX:64.1,regY:34.5,x:950.8,y:910.4},0).wait(1).to({rotation:3.4,x:951.4,y:910.8},0).wait(1).to({x:952.1,y:911.2},0).wait(1).to({rotation:3.5,x:952.8,y:911.6},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.9},0).wait(1).to({y:911.7},0).wait(1).to({y:911.4},0).wait(1).to({y:911.2},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.2},0).wait(1).to({y:911.4},0).wait(1).to({y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(11).to({regX:64.1,regY:34.5,rotation:3.8,x:955.2,y:912},0).wait(1).to({rotation:4.4,x:959,y:912.1},0).wait(1).to({rotation:5.1,x:963.6},0).wait(1).to({rotation:5.9,x:968.6,y:912.2},0).wait(1).to({rotation:6.6,x:973.7,y:912.3},0).wait(1).to({rotation:7.4,x:978.8,y:912.4},0).wait(1).to({regX:69.2,regY:41.1,rotation:8,x:986.9,y:919.8},0).wait(18).to({regX:64.1,regY:34.5,rotation:7.4,x:978.9,y:912.6},0).wait(1).to({rotation:6.3,x:971.3,y:912.7},0).wait(1).to({rotation:4.9,x:962.1,y:912.9},0).wait(1).to({rotation:3.4,x:952.1,y:913.1},0).wait(1).to({rotation:1.8,x:941.7,y:913.3},0).wait(1).to({rotation:0.2,x:931.5,y:913.6},0).wait(1).to({regX:69.1,regY:41.1,rotation:-0.9,x:928.8,y:920.3},0).wait(1).to({regX:64.1,regY:34.5,rotation:-0.6,x:926.3,y:913.6},0).wait(1).to({rotation:0.2,x:931,y:913.3},0).wait(1).to({rotation:1,x:936.5,y:913},0).wait(1).to({rotation:1.9,x:942.6,y:912.6},0).wait(1).to({rotation:2.8,x:948.6,y:912.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.9},0).wait(1).to({y:911.7},0).wait(1).to({y:911.4},0).wait(1).to({y:911.2},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.2},0).wait(1).to({y:911.4},0).wait(1).to({y:911.7},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(16).to({rotation:-0.7,x:930.7,y:920.1},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1,x:923.6,y:913.7},0).wait(1).to({rotation:-1.5,x:920.1,y:914.1},0).wait(1).to({regX:69.2,regY:41.1,rotation:-1.9,x:922.7,y:920.8},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.6,x:919.3,y:914.2},0).wait(1).to({rotation:-1.1,x:922.7,y:913.8},0).wait(1).to({regX:69.2,regY:41.1,rotation:-0.7,x:930.7,y:920.1},0).wait(1).to({regX:64.1,regY:34.5,rotation:-0.9,x:924.3,y:913.6},0).wait(1).to({rotation:-1.2,x:921.9,y:913.9},0).wait(1).to({rotation:-1.6,x:919.3,y:914.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:-1.9,x:922.7,y:920.8},0).wait(1).to({regX:64.1,regY:34.5,rotation:-1.6,x:919.5,y:914.3},0).wait(1).to({rotation:-0.8,x:924.5,y:914},0).wait(1).to({rotation:0.2,x:931,y:913.7},0).wait(1).to({rotation:1.3,x:938.4,y:913.3},0).wait(1).to({rotation:2.5,x:946.2,y:912.9},0).wait(1).to({rotation:3.7,x:954,y:912.5},0).wait(1).to({rotation:4.7,x:960.8,y:912.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:5.3,x:969.2,y:919},0).wait(1).to({regX:64.1,regY:34.5,rotation:5.1,x:963.6,y:911.9},0).wait(1).to({rotation:4.7,x:961.1,y:911.7},0).wait(1).to({rotation:4.3,x:958.1,y:911.4},0).wait(1).to({rotation:3.8,x:955.2,y:911.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.1},0).wait(1).to({y:911.4},0).wait(1).to({y:911.8},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(21).to({regX:64.1,regY:34.5,rotation:3.2,x:951.1,y:912.2},0).wait(1).to({rotation:2.4,x:946,y:912.6},0).wait(1).to({rotation:1.4,x:939.2,y:913.2},0).wait(1).to({rotation:0.2,x:931.5,y:913.8},0).wait(1).to({rotation:-1,x:923.4,y:914.5},0).wait(1).to({rotation:-2.2,x:915.4,y:915.2},0).wait(1).to({rotation:-3.3,x:908.3,y:915.8},0).wait(1).to({regX:69.3,regY:41.1,rotation:-3.9,x:909.8,y:922.4},0).wait(1).to({regX:64.1,regY:34.5,rotation:-3.6,x:906.1,y:915.8},0).wait(1).to({rotation:-3.1,x:909.5,y:915.4},0).wait(1).to({regX:69.3,regY:41.1,rotation:-2.7,x:917.8,y:921.4},0).wait(25).to({regX:64.1,regY:34.5,rotation:-2.3,x:914.6,y:914.8},0).wait(1).to({rotation:-1.5,x:919.8,y:914.3},0).wait(1).to({rotation:-0.5,x:926.7,y:913.6},0).wait(1).to({rotation:0.7,x:934.3,y:912.8},0).wait(1).to({rotation:1.9,x:942.1,y:912},0).wait(1).to({rotation:2.9,x:949.2,y:911.4},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:917.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:911.1},0).wait(1).to({y:911.4},0).wait(1).to({y:911.8},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(15).to({regX:64.1,regY:34.5,rotation:3.4,x:952.2,y:912},0).wait(1).to({rotation:3,x:950.2},0).wait(1).to({rotation:2.6,x:947.9},0).wait(1).to({rotation:2.2,x:945.5,y:911.9},0).wait(1).to({regX:69.2,regY:41.1,rotation:1.8,x:948.4,y:918.7},0).wait(1).to({regX:64.1,regY:34.5,rotation:2,x:944.6,y:911.9},0).wait(1).to({rotation:2.4,x:946.6},0).wait(1).to({rotation:2.8,x:948.9},0).wait(1).to({rotation:3.2,x:951.3,y:912},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:3.4,x:952.2,y:912},0).wait(1).to({rotation:3,x:950.2},0).wait(1).to({rotation:2.6,x:947.9},0).wait(1).to({rotation:2.2,x:945.5,y:911.9},0).wait(1).to({regX:69.2,regY:41.1,rotation:1.8,x:948.4,y:918.7},0).wait(1).to({regX:64.1,regY:34.5,rotation:2,x:944.6,y:911.9},0).wait(1).to({rotation:2.4,x:946.6},0).wait(1).to({rotation:2.8,x:948.9},0).wait(1).to({rotation:3.2,x:951.3,y:912},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,rotation:3.3,x:951.8,y:912},0).wait(1).to({rotation:2.8,x:949},0).wait(1).to({rotation:2.3,x:946.1},0).wait(1).to({regX:69.2,regY:41.1,rotation:1.8,x:948.4,y:918.7},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.9,x:944.2,y:911.9},0).wait(1).to({rotation:2.2,x:945.4},0).wait(1).to({rotation:2.4,x:946.9},0).wait(1).to({rotation:2.7,x:948.5},0).wait(1).to({rotation:3,x:950.3},0).wait(1).to({rotation:3.3,x:952},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.5,x:958,y:918.9},0).wait(10).to({regX:64.1,regY:34.5,x:953,y:912},0).wait(1).to({rotation:3.4,x:952.1,y:911.8},0).wait(1).to({rotation:3.2,x:950.9,y:911.6},0).wait(1).to({rotation:2.9,x:949.2,y:911.4},0).wait(1).to({rotation:2.6,x:947,y:911.1},0).wait(1).to({rotation:2.2,x:944.6,y:910.7},0).wait(1).to({rotation:1.8,x:941.8,y:910.2},0).wait(1).to({regX:69.2,regY:41.1,rotation:1.3,x:943.7,y:916.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:0.8,x:935.3,y:911.1},0).wait(1).to({rotation:0.2,x:931.6,y:912.5},0).wait(1).to({rotation:-0.4,x:927.8,y:914},0).wait(1).to({regX:69.2,regY:41.1,rotation:-1,x:928.9,y:922},0).wait(1).to({regX:64.1,regY:34.5,x:923.7,y:914.9},0).wait(1).to({y:914.3},0).wait(1).to({regX:69.2,regY:41.1,x:928.9,y:920},0).wait(1).to({regX:64.1,regY:34.5,x:923.7,y:913.5},0).wait(5).to({regX:69.2,regY:41.1,x:928.9,y:920},0).wait(1).to({regX:64.1,regY:34.5,rotation:-0.6,x:926.3,y:912.8},0).wait(1).to({rotation:-0.2,x:928.9,y:912},0).wait(1).to({rotation:0.1,x:931.6,y:911.2},0).wait(1).to({rotation:0.5,x:934.4,y:910.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:937.1,y:909.6},0).wait(1).to({regX:69.2,regY:41.1,rotation:1.3,x:944.9,y:915.5},0).wait(1).to({regX:64.1,regY:34.5,rotation:1.8,x:942.7,y:910.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:945.6,y:911.9},0).wait(1).to({rotation:2.8,x:948.5,y:913.5},0).wait(1).to({regX:69.2,regY:41.1,rotation:3.3,x:956.2,y:921.9},0).wait(1).to({regX:64.1,regY:34.5,x:951.4,y:914.1},0).wait(1).to({y:913.1},0).wait(1).to({regX:69.2,regY:41.1,x:956.2,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:951.4,y:912},0).wait(4).to({regX:69.2,regY:41.1,x:956.2,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:951.6,y:911.5},0).wait(1).to({x:951.8,y:911},0).wait(1).to({x:952,y:910.5},0).wait(1).to({x:952.2,y:910},0).wait(1).to({x:952.4,y:909.5},0).wait(1).to({regX:69.2,regY:41.1,x:957.4,y:915.8},0).wait(1).to({regX:64.1,regY:34.5,rotation:3.4,x:952.8,y:909.9},0).wait(1).to({rotation:3.5,x:953,y:910.9},0).wait(1).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(1).to({regX:64.1,regY:34.5,x:953.2,y:912},0).wait(2).to({regX:69.2,regY:41.1,x:958,y:918.9},0).wait(3));

	// pants
	this.instance_7 = new lib.ll_s_pants();
	this.instance_7.setTransform(949.5,1598.6,1,1,0,0,0,175.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1271));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747,762,400.8,953.1);


(lib.ll_s_s_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	// head_all
	this.s_face = new lib.ll_s_s_face();
	this.s_face.setTransform(176.7,200.4,1,1,0,0,0,79,156.5);

	this.timeline.addTween(cjs.Tween.get(this.s_face).wait(13).to({regX:65.6,regY:99.5,x:163.3,y:143.3},0).wait(1).to({y:143.2},0).wait(1).to({y:143},0).wait(1).to({y:142.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:199.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:142.8},0).wait(1).to({y:143.1},0).wait(1).to({y:143.5},0).wait(1).to({y:143.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:201},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.9},0).wait(1).to({y:143.7},0).wait(1).to({y:143.4},0).wait(1).to({y:143.1},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.1},0).wait(1).to({y:143.3},0).wait(1).to({y:143.6},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.7},0).wait(1).to({y:143.5},0).wait(1).to({y:143.4},0).wait(1).to({y:143.3},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.2},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.2},0).wait(1).to({y:143.3},0).wait(1).to({y:143.4},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.4},0).wait(39).to({regX:65.6,regY:99.5,x:163.3,y:143.3},0).wait(1).to({y:143.2},0).wait(1).to({y:143},0).wait(1).to({y:142.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:199.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:142.8},0).wait(1).to({y:143.1},0).wait(1).to({y:143.5},0).wait(1).to({y:143.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:201},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.9},0).wait(1).to({y:143.7},0).wait(1).to({y:143.4},0).wait(1).to({y:143.1},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.1},0).wait(1).to({y:143.3},0).wait(1).to({y:143.6},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.7},0).wait(1).to({y:143.5},0).wait(1).to({y:143.4},0).wait(1).to({y:143.3},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.2},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.2},0).wait(1).to({y:143.3},0).wait(1).to({y:143.4},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.4},0).wait(6));

	// r_arm_all
	this.instance = new lib.ll_s_s_r_arm_all();
	this.instance.setTransform(270.5,216.5,1,1,0,0,0,84,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({regX:110.3,regY:151,x:296.8,y:320.4},0).wait(1).to({y:320.2},0).wait(1).to({y:319.8},0).wait(1).to({y:319.6},0).wait(1).to({regX:84,regY:47,x:270.5,y:215.5},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:319.7},0).wait(1).to({y:320.2},0).wait(1).to({y:320.8},0).wait(1).to({y:321.3},0).wait(1).to({regX:84,regY:47,x:270.5,y:217.5},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:321.4},0).wait(1).to({y:321.1},0).wait(1).to({y:320.7},0).wait(1).to({y:320.4},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.3},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4},0).wait(1).to({y:320.7},0).wait(1).to({y:320.9},0).wait(1).to({regX:84,regY:47,x:270.5,y:217},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.9},0).wait(1).to({y:320.7},0).wait(1).to({y:320.3},0).wait(1).to({y:320.1},0).wait(1).to({regX:84,regY:47,x:270.5,y:216},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.1},0).wait(1).to({y:320.3},0).wait(1).to({y:320.4},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.5},0).wait(39).to({regX:110.3,regY:151,x:296.8,y:320.4},0).wait(1).to({y:320.2},0).wait(1).to({y:319.8},0).wait(1).to({y:319.6},0).wait(1).to({regX:84,regY:47,x:270.5,y:215.5},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:319.7},0).wait(1).to({y:320.2},0).wait(1).to({y:320.8},0).wait(1).to({y:321.3},0).wait(1).to({regX:84,regY:47,x:270.5,y:217.5},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:321.4},0).wait(1).to({y:321.1},0).wait(1).to({y:320.7},0).wait(1).to({y:320.4},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.3},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4},0).wait(1).to({y:320.7},0).wait(1).to({y:320.9},0).wait(1).to({regX:84,regY:47,x:270.5,y:217},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.9},0).wait(1).to({y:320.7},0).wait(1).to({y:320.3},0).wait(1).to({y:320.1},0).wait(1).to({regX:84,regY:47,x:270.5,y:216},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.1},0).wait(1).to({y:320.3},0).wait(1).to({y:320.4},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.5},0).wait(8));

	// bow_L
	this.instance_1 = new lib.ll_s_bow_l_1();
	this.instance_1.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:0.2,x:149.4,y:240.6},0).wait(1).to({rotation:0.6,x:149.3,y:240.5},0).wait(1).to({rotation:1,x:149.2,y:240.4},0).wait(1).to({rotation:1.4,y:240.2},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.7,x:149.3,y:240.5},0).wait(1).to({rotation:0.2,x:149.4,y:240.7},0).wait(1).to({rotation:-0.3,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.3,x:149.4,y:240.8},0).wait(1).to({rotation:0.3,x:149.3,y:240.6},0).wait(1).to({rotation:0.9,x:149.2,y:240.4},0).wait(1).to({rotation:1.3,y:240.3},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.8,x:149.3,y:240.5},0).wait(1).to({rotation:0.4,y:240.6},0).wait(1).to({rotation:0,x:149.4,y:240.8},0).wait(1).to({rotation:-0.4,x:149.5,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.3,x:149.4,y:240.8},0).wait(1).to({rotation:0.3,x:149.3,y:240.6},0).wait(1).to({rotation:0.9,x:149.2,y:240.4},0).wait(1).to({rotation:1.3,y:240.3},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.3,x:149.2,y:240.2},0).wait(1).to({rotation:0.8,x:149.3,y:240.4},0).wait(1).to({rotation:0.2,x:149.4,y:240.6},0).wait(1).to({rotation:-0.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.9,x:149.3,y:240.4},0).wait(1).to({rotation:0.6,y:240.5},0).wait(1).to({rotation:0.2,x:149.4,y:240.7},0).wait(1).to({rotation:-0.2,y:240.8},0).wait(1).to({rotation:-0.4,x:149.5,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.6,x:149.4,y:240.9},0).wait(1).to({rotation:-0.7,y:241},0).wait(1).to({rotation:-0.8,x:149.5},0).wait(1).to({rotation:-1,y:241.1},0).wait(1).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.7,x:149.5,y:241},0).wait(1).to({rotation:0,x:149.4,y:240.7},0).wait(1).to({rotation:0.7,x:149.3,y:240.4},0).wait(1).to({rotation:1.3,x:149.2,y:240.2},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.6,x:149.3,y:240.5},0).wait(1).to({rotation:-0.1,x:149.4,y:240.8},0).wait(1).to({rotation:-0.7,x:149.6,y:241},0).wait(1).to({regX:50.6,regY:4.7,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:241},0).wait(1).to({rotation:-0.4,x:149.4,y:240.9},0).wait(1).to({rotation:0,x:149.3,y:240.7},0).wait(1).to({rotation:0.4,x:149.2,y:240.6},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.4,x:149.3,y:240.6},0).wait(1).to({rotation:0.2,x:149.4},0).wait(1).to({rotation:0.1,y:240.7},0).wait(1).to({regX:50.6,regY:4.7,rotation:0,x:170,y:231.9},0).wait(7));

	// tie_L
	this.instance_2 = new lib.ll_s_tie_L();
	this.instance_2.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({regY:41,y:268.2},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({y:267.7},0).wait(1).to({regY:48,y:274.7},0).wait(1).to({regY:41,y:267.7},0).wait(1).to({y:267.8},0).wait(1).to({y:267.9},0).wait(1).to({y:268},0).wait(1).to({regY:48,y:275.1},0).wait(1).to({regY:41,y:268.1},0).wait(4).to({regY:48,y:275.2},0).wait(1).to({regY:41,y:268.2},0).wait(3).to({regY:48,y:275.3},0).wait(1).to({regY:41,y:268.2},0).wait(1).to({y:268.1},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({regY:48,y:274.9},0).wait(1).to({regY:41,y:267.9},0).wait(1).to({y:268.1},0).wait(1).to({y:268.2},0).wait(1).to({regY:48,y:275.3},0).wait(39).to({regY:41,y:268.2},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({y:267.7},0).wait(1).to({regY:48,y:274.7},0).wait(1).to({regY:41,y:267.7},0).wait(1).to({y:267.8},0).wait(1).to({y:267.9},0).wait(1).to({y:268},0).wait(1).to({regY:48,y:275.1},0).wait(1).to({regY:41,y:268.1},0).wait(4).to({regY:48,y:275.2},0).wait(1).to({regY:41,y:268.2},0).wait(3).to({regY:48,y:275.3},0).wait(1).to({regY:41,y:268.2},0).wait(1).to({y:268.1},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({regY:48,y:274.9},0).wait(1).to({regY:41,y:267.9},0).wait(1).to({y:268.1},0).wait(1).to({y:268.2},0).wait(1).to({regY:48,y:275.3},0).wait(6));

	// tie_R
	this.instance_3 = new lib.ll_s_tie_R();
	this.instance_3.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({y:266.2},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.7},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.2},0).wait(1).to({y:266.3},0).wait(1).to({y:266.4},0).wait(1).to({y:266.5},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.1},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.6},0).wait(4).to({regX:55,regY:48,x:174.5,y:275.2},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(3).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.6},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.9},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.4},0).wait(1).to({y:266.6},0).wait(1).to({y:266.7},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(39).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({y:266.2},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.7},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.2},0).wait(1).to({y:266.3},0).wait(1).to({y:266.4},0).wait(1).to({y:266.5},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.1},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.6},0).wait(4).to({regX:55,regY:48,x:174.5,y:275.2},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(3).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.6},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.9},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.4},0).wait(1).to({y:266.6},0).wait(1).to({y:266.7},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(6));

	// bow_R
	this.instance_4 = new lib.ll_s_bow_R();
	this.instance_4.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-0.2,x:193.4,y:238.6},0).wait(1).to({rotation:-0.6,x:193.5,y:238.4},0).wait(1).to({rotation:-1,y:238.2},0).wait(1).to({rotation:-1.4,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.7,x:193.4,y:238.4},0).wait(1).to({rotation:-0.2,y:238.6},0).wait(1).to({rotation:0.3,x:193.3,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.3,x:193.4,y:238.8},0).wait(1).to({rotation:-0.3,y:238.6},0).wait(1).to({rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.8,x:193.4,y:238.3},0).wait(1).to({rotation:-0.4,y:238.5},0).wait(1).to({rotation:0,x:193.3,y:238.7},0).wait(1).to({rotation:0.4,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.3,x:193.4,y:238.8},0).wait(1).to({rotation:-0.3,y:238.6},0).wait(1).to({rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.3,x:193.6,y:238.2},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({rotation:-0.2,x:193.4,y:238.7},0).wait(1).to({rotation:0.4,x:193.3,y:238.9},0).wait(1).to({rotation:0.8,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-0.6,x:193.4,y:238.4},0).wait(1).to({rotation:-0.2,y:238.6},0).wait(1).to({rotation:0.2,x:193.3,y:238.7},0).wait(1).to({rotation:0.4,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.6,x:193.4,y:238.9},0).wait(1).to({rotation:0.7,x:193.3,y:239},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.7,x:193.3,y:239},0).wait(1).to({rotation:0,x:193.4,y:238.7},0).wait(1).to({rotation:-0.7,x:193.5,y:238.4},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.6,x:193.4,y:238.4},0).wait(1).to({rotation:0.1,y:238.7},0).wait(1).to({rotation:0.7,x:193.3,y:238.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239},0).wait(1).to({rotation:0.4,y:238.9},0).wait(1).to({rotation:0,x:193.4,y:238.7},0).wait(1).to({rotation:-0.4,y:238.5},0).wait(1).to({regX:50.5,regY:4.7,rotation:-0.5,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.4,x:193.5,y:238.6},0).wait(1).to({rotation:-0.2,y:238.7},0).wait(1).to({rotation:-0.1,x:193.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:0,x:170,y:231.9},0).wait(7));

	// torso
	this.instance_5 = new lib.ll_s_torso_1();
	this.instance_5.setTransform(194,380.2,1,1,0,0,0,196,279.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112));

	// torso_shadow
	this.instance_6 = new lib.ll_s_torso_shadow_2();
	this.instance_6.setTransform(195,612.3,1,1,0,0,0,142.5,38.5);
	this.instance_6.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({regX:139.3,regY:37.7,x:191.8,y:611.7},0).wait(1).to({y:612.3},0).wait(1).to({y:613.1},0).wait(1).to({y:613.8},0).wait(1).to({regX:142.5,regY:38.6,x:195,y:615},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:613.8},0).wait(1).to({y:613},0).wait(1).to({y:612.1},0).wait(1).to({y:611.3},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.3},0).wait(1).to({y:611.6},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.9},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.7},0).wait(1).to({y:611.4},0).wait(1).to({y:611.1},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.2},0).wait(1).to({y:611.4},0).wait(1).to({y:611.7},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.9},0).wait(1).to({y:611.7},0).wait(1).to({y:611.6},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.3},0).wait(36).to({regX:139.3,regY:37.7,x:191.8,y:611.8},0).wait(1).to({y:612.3},0).wait(1).to({y:613},0).wait(1).to({y:613.6},0).wait(1).to({regX:142.5,regY:38.6,x:195,y:615},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:613.8},0).wait(1).to({y:613},0).wait(1).to({y:612.1},0).wait(1).to({y:611.3},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.3},0).wait(1).to({y:611.6},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.9},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.7},0).wait(1).to({y:611.4},0).wait(1).to({y:611.1},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.2},0).wait(1).to({y:611.4},0).wait(1).to({y:611.7},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.9},0).wait(1).to({y:611.7},0).wait(1).to({y:611.6},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.3},0).wait(4));

	// neck
	this.instance_7 = new lib.ll_s_neck_1();
	this.instance_7.setTransform(170.5,211.5,1,1,0,0,0,69,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({regX:64.1,regY:34.5,x:165.6,y:205},0).wait(1).to({y:204.9},0).wait(1).to({y:204.8},0).wait(1).to({y:204.7},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.2},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.8},0).wait(1).to({y:204.9},0).wait(1).to({y:205.1},0).wait(1).to({y:205.2},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.8},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.3},0).wait(1).to({y:205.2},0).wait(1).to({y:205.1},0).wait(1).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(1).to({y:205},0).wait(1).to({y:205.1},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.6},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.1},0).wait(1).to({y:205},0).wait(2).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(2).to({y:205},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.5},0).wait(39).to({regX:64.1,regY:34.5,x:165.6,y:205},0).wait(1).to({y:204.9},0).wait(1).to({y:204.8},0).wait(1).to({y:204.7},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.2},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.8},0).wait(1).to({y:204.9},0).wait(1).to({y:205.1},0).wait(1).to({y:205.2},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.8},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.3},0).wait(1).to({y:205.2},0).wait(1).to({y:205.1},0).wait(1).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(1).to({y:205},0).wait(1).to({y:205.1},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.6},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.1},0).wait(1).to({y:205},0).wait(2).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(2).to({y:205},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.5},0).wait(7));

	// l_arm_all
	this.instance_8 = new lib.ll_s_s_l_arm_all("synched",0,false);
	this.instance_8.setTransform(45.6,255.8,1,1,0,0,0,72,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({startPosition:11},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.1,x:38.1,y:622,startPosition:12},0).wait(1).to({rotation:0.2,x:37.4,y:621.9,startPosition:13},0).wait(1).to({rotation:0.3,x:36.6,startPosition:14},0).wait(1).to({rotation:0.4,x:35.8,startPosition:15},0).wait(1).to({regX:72,regY:24.3,rotation:0.5,x:45.6,y:255.8,startPosition:16},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.4,x:35.9,y:622,startPosition:17},0).wait(1).to({rotation:0.2,x:37.2,startPosition:18},0).wait(1).to({rotation:-0.1,x:38.8,y:622.1,startPosition:19},0).wait(1).to({rotation:-0.3,x:40.5,startPosition:20},0).wait(1).to({regX:72,regY:24.4,rotation:-0.5,x:45.6,y:255.8,startPosition:21},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.4,x:41.1,y:622,startPosition:22},0).wait(1).to({rotation:-0.3,x:40.1,startPosition:23},0).wait(1).to({rotation:-0.1,x:38.9,startPosition:24},0).wait(1).to({rotation:0.1,x:37.6,startPosition:25},0).wait(1).to({regX:72,regY:24.4,rotation:0.3,x:45.6,y:255.8,startPosition:26},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.2,x:37,y:622,startPosition:27},0).wait(1).to({rotation:0.1,x:37.6,startPosition:28},0).wait(1).to({rotation:0,x:38.3,startPosition:29},0).wait(1).to({regX:72,regY:24.3,x:45.6,y:255.8,startPosition:30},0).wait(1).to({regX:64.8,regY:390.6,x:38.7,y:622,startPosition:31},0).wait(1).to({x:38.5,y:622.1,startPosition:32},0).wait(1).to({x:38.3,y:622,startPosition:33},0).wait(1).to({x:38.2,y:622.1,startPosition:34},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8,startPosition:35},0).wait(1).to({regX:64.8,regY:390.6,x:38.1,y:622,startPosition:36},0).wait(1).to({x:38.2,startPosition:37},0).wait(1).to({x:38.3,startPosition:38},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8,startPosition:39},0).wait(38).to({startPosition:77},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.1,x:38.1,y:622,startPosition:78},0).wait(1).to({rotation:0.2,x:37.4,y:621.9,startPosition:79},0).wait(1).to({rotation:0.3,x:36.6,startPosition:80},0).wait(1).to({rotation:0.4,x:35.8,startPosition:81},0).wait(1).to({regX:72,regY:24.3,rotation:0.5,x:45.6,y:255.8,startPosition:82},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.4,x:35.9,y:622,startPosition:83},0).wait(1).to({rotation:0.2,x:37.2,startPosition:84},0).wait(1).to({rotation:-0.1,x:38.8,y:622.1,startPosition:85},0).wait(1).to({rotation:-0.3,x:40.5,startPosition:86},0).wait(1).to({regX:72,regY:24.4,rotation:-0.5,x:45.6,y:255.8,startPosition:87},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.4,x:41.1,y:622,startPosition:88},0).wait(1).to({rotation:-0.3,x:40.1,startPosition:89},0).wait(1).to({rotation:-0.1,x:38.9,startPosition:90},0).wait(1).to({rotation:0.1,x:37.6,startPosition:91},0).wait(1).to({regX:72,regY:24.4,rotation:0.3,x:45.6,y:255.8,startPosition:92},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.2,x:37,y:622,startPosition:93},0).wait(1).to({rotation:0.1,x:37.6,startPosition:94},0).wait(1).to({rotation:0,x:38.3,startPosition:95},0).wait(1).to({regX:72,regY:24.3,x:45.6,y:255.8,startPosition:96},0).wait(1).to({regX:64.8,regY:390.6,x:38.7,y:622,startPosition:97},0).wait(1).to({x:38.5,y:622.1,startPosition:98},0).wait(1).to({x:38.3,y:622,startPosition:99},0).wait(1).to({x:38.2,y:622.1,startPosition:100},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8,startPosition:101},0).wait(1).to({regX:64.8,regY:390.6,x:38.1,y:622,startPosition:102},0).wait(1).to({x:38.2,startPosition:103},0).wait(1).to({x:38.3,startPosition:104},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8,startPosition:105},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,57.9,394.2,951.8);


(lib.ll_s_h_torso_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// m_face
	this.m_face_broken_out = new lib.ll_s_m_face_broken_out();
	this.m_face_broken_out.setTransform(200.9,205.1,1,1,5.3,0,0,79,156.5);

	this.timeline.addTween(cjs.Tween.get(this.m_face_broken_out).wait(13).to({regX:65.6,regY:99.5,x:192.8,y:147},0).wait(1).to({y:146.8},0).wait(1).to({y:146.5},0).wait(1).to({y:146.2},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.2},0).wait(1).to({y:146.4},0).wait(1).to({y:146.7},0).wait(1).to({y:147},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:147},0).wait(1).to({y:146.8},0).wait(1).to({y:146.5},0).wait(1).to({y:146.2},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.2},0).wait(1).to({y:146.6},0).wait(1).to({y:146.9},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:147.1},0).wait(1).to({y:146.9},0).wait(1).to({y:146.8},0).wait(1).to({y:146.7},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.6},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.7},0).wait(1).to({y:146.8},0).wait(1).to({y:147},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(39).to({regX:65.6,regY:99.5,x:192.8,y:147},0).wait(1).to({y:146.8},0).wait(1).to({y:146.5},0).wait(1).to({y:146.2},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.2},0).wait(1).to({y:146.4},0).wait(1).to({y:146.7},0).wait(1).to({y:147},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:147},0).wait(1).to({y:146.8},0).wait(1).to({y:146.5},0).wait(1).to({y:146.2},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.2},0).wait(1).to({y:146.6},0).wait(1).to({y:146.9},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:147.1},0).wait(1).to({y:146.9},0).wait(1).to({y:146.8},0).wait(1).to({y:146.7},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:204.6},0).wait(1).to({regX:65.6,regY:99.5,x:192.8,y:146.7},0).wait(1).to({y:146.8},0).wait(1).to({y:147},0).wait(1).to({regX:79,regY:156.5,x:200.9,y:205.1},0).wait(10));

	// ll_s_r_hand
	this.instance = new lib.ll_s_r_hand_1();
	this.instance.setTransform(378.8,378.4,1,1,3.5,0,0,156.3,43.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116));

	// new arm
	this.instance_1 = new lib.ll_s_r_arm();
	this.instance_1.setTransform(323.9,241.2,1,1,3.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116));

	// ll_s_tieallz
	this.instance_2 = new lib.ll_s_tieallz();
	this.instance_2.setTransform(192.2,240.2,1,1,0,0,0,14.8,15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(116));

	// ll_s_torso
	this.instance_3 = new lib.ll_s_torso_1();
	this.instance_3.setTransform(196.1,594.8,1,1,3.5,0,0,200.2,489.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(116));

	// ll_s_neck
	this.instance_4 = new lib.ll_s_neck_1();
	this.instance_4.setTransform(193,214.9,1,1,3.5,0,0,69.2,41.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(116));

	// ll_s_m_l_arm_all
	this.instance_5 = new lib.ll_s_m_l_arm_all();
	this.instance_5.setTransform(65.5,251.1,1,1,3.5,0,0,72.2,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({regX:64.8,regY:390.6,rotation:3.6,x:35.2,y:616},0).wait(1).to({rotation:3.7,x:34.6,y:615.9},0).wait(1).to({rotation:3.8,x:33.9},0).wait(1).to({rotation:3.9,x:33.2},0).wait(1).to({regX:72.2,regY:24.5,rotation:4,x:65.5,y:251.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.9,x:33.3,y:615.8},0).wait(1).to({rotation:3.7,x:34.6,y:615.9},0).wait(1).to({rotation:3.4,x:36.2,y:616},0).wait(1).to({rotation:3.2,x:37.9,y:616.1},0).wait(1).to({regX:72.3,regY:24.4,rotation:3,x:65.6,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.1,x:38.5,y:616.3},0).wait(1).to({rotation:3.2,x:37.5,y:616.2},0).wait(1).to({rotation:3.4,x:36.2,y:616.1},0).wait(1).to({rotation:3.6,x:34.9,y:616},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.8,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.7,x:34.3,y:615.8},0).wait(1).to({x:34.7,y:615.9},0).wait(1).to({rotation:3.6,x:35.2},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,x:35.5,y:616},0).wait(4).to({regX:72.2,regY:24.4,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,x:35.5,y:616},0).wait(3).to({regX:72.2,regY:24.4,x:65.5,y:251.1},0).wait(39).to({regX:64.8,regY:390.6,rotation:3.6,x:35.2,y:616},0).wait(1).to({rotation:3.7,x:34.6,y:615.9},0).wait(1).to({rotation:3.8,x:33.9},0).wait(1).to({rotation:3.9,x:33.2},0).wait(1).to({regX:72.2,regY:24.5,rotation:4,x:65.5,y:251.2},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.9,x:33.3,y:615.8},0).wait(1).to({rotation:3.7,x:34.6,y:615.9},0).wait(1).to({rotation:3.4,x:36.2,y:616},0).wait(1).to({rotation:3.2,x:37.9,y:616.1},0).wait(1).to({regX:72.3,regY:24.4,rotation:3,x:65.6,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.1,x:38.5,y:616.3},0).wait(1).to({rotation:3.2,x:37.5,y:616.2},0).wait(1).to({rotation:3.4,x:36.2,y:616.1},0).wait(1).to({rotation:3.6,x:34.9,y:616},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.8,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,rotation:3.7,x:34.3,y:615.8},0).wait(1).to({x:34.7,y:615.9},0).wait(1).to({rotation:3.6,x:35.2},0).wait(1).to({regX:72.2,regY:24.4,rotation:3.5,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,x:35.5,y:616},0).wait(4).to({regX:72.2,regY:24.4,x:65.5,y:251.1},0).wait(1).to({regX:64.8,regY:390.6,x:35.5,y:616},0).wait(3).to({regX:72.2,regY:24.4,x:65.5,y:251.1},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,55.4,421,949.8);


(lib.ll_s_h_torso = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_111 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(111).call(this.frame_111).wait(1));

	// head_all
	this.h_face = new lib.ll_s_h_face();
	this.h_face.setTransform(176.7,200.4,1,1,0,0,0,79,156.5);

	this.timeline.addTween(cjs.Tween.get(this.h_face).wait(13).to({regX:65.6,regY:99.5,x:163.3,y:143.3},0).wait(1).to({y:143.2},0).wait(1).to({y:143},0).wait(1).to({y:142.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:199.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:142.8},0).wait(1).to({y:143.1},0).wait(1).to({y:143.5},0).wait(1).to({y:143.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:201},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.9},0).wait(1).to({y:143.7},0).wait(1).to({y:143.4},0).wait(1).to({y:143.1},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.1},0).wait(1).to({y:143.3},0).wait(1).to({y:143.6},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.7},0).wait(1).to({y:143.5},0).wait(1).to({y:143.4},0).wait(1).to({y:143.3},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.2},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.2},0).wait(1).to({y:143.3},0).wait(1).to({y:143.4},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.4},0).wait(39).to({regX:65.6,regY:99.5,x:163.3,y:143.3},0).wait(1).to({y:143.2},0).wait(1).to({y:143},0).wait(1).to({y:142.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:199.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:142.8},0).wait(1).to({y:143.1},0).wait(1).to({y:143.5},0).wait(1).to({y:143.8},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:201},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.9},0).wait(1).to({y:143.7},0).wait(1).to({y:143.4},0).wait(1).to({y:143.1},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.1},0).wait(1).to({y:143.3},0).wait(1).to({y:143.6},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.7},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.7},0).wait(1).to({y:143.5},0).wait(1).to({y:143.4},0).wait(1).to({y:143.3},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.2},0).wait(1).to({regX:65.6,regY:99.5,x:163.3,y:143.2},0).wait(1).to({y:143.3},0).wait(1).to({y:143.4},0).wait(1).to({regX:79,regY:156.5,x:176.7,y:200.4},0).wait(6));

	// r_arm_all
	this.instance = new lib.ll_s_h_r_arm_all("synched",0,false);
	this.instance.setTransform(270.5,216.5,1,1,0,0,0,84,47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:10},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4,startPosition:11},0).wait(1).to({y:320.2,startPosition:12},0).wait(1).to({y:319.8,startPosition:13},0).wait(1).to({y:319.6,startPosition:14},0).wait(1).to({regX:84,regY:47,x:270.5,y:215.5,startPosition:15},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:319.7,startPosition:16},0).wait(1).to({y:320.2,startPosition:17},0).wait(1).to({y:320.8,startPosition:18},0).wait(1).to({y:321.3,startPosition:19},0).wait(1).to({regX:84,regY:47,x:270.5,y:217.5,startPosition:20},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:321.4,startPosition:21},0).wait(1).to({y:321.1,startPosition:22},0).wait(1).to({y:320.7,startPosition:23},0).wait(1).to({y:320.4,startPosition:24},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.3,startPosition:25},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4,startPosition:26},0).wait(1).to({y:320.7,startPosition:27},0).wait(1).to({y:320.9,startPosition:28},0).wait(1).to({regX:84,regY:47,x:270.5,y:217,startPosition:29},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.9,startPosition:30},0).wait(1).to({y:320.7,startPosition:31},0).wait(1).to({y:320.3,startPosition:32},0).wait(1).to({y:320.1,startPosition:33},0).wait(1).to({regX:84,regY:47,x:270.5,y:216,startPosition:34},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.1,startPosition:35},0).wait(1).to({y:320.3,startPosition:36},0).wait(1).to({y:320.4,startPosition:37},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.5,startPosition:38},0).wait(38).to({startPosition:76},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4,startPosition:77},0).wait(1).to({y:320.2,startPosition:78},0).wait(1).to({y:319.8,startPosition:79},0).wait(1).to({y:319.6,startPosition:80},0).wait(1).to({regX:84,regY:47,x:270.5,y:215.5,startPosition:81},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:319.7,startPosition:82},0).wait(1).to({y:320.2,startPosition:83},0).wait(1).to({y:320.8,startPosition:84},0).wait(1).to({y:321.3,startPosition:85},0).wait(1).to({regX:84,regY:47,x:270.5,y:217.5,startPosition:86},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:321.4,startPosition:87},0).wait(1).to({y:321.1,startPosition:88},0).wait(1).to({y:320.7,startPosition:89},0).wait(1).to({y:320.4,startPosition:90},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.3,startPosition:91},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.4,startPosition:92},0).wait(1).to({y:320.7,startPosition:93},0).wait(1).to({y:320.9,startPosition:94},0).wait(1).to({regX:84,regY:47,x:270.5,y:217,startPosition:95},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.9,startPosition:96},0).wait(1).to({y:320.7,startPosition:97},0).wait(1).to({y:320.3,startPosition:98},0).wait(1).to({y:320.1,startPosition:99},0).wait(1).to({regX:84,regY:47,x:270.5,y:216,startPosition:100},0).wait(1).to({regX:110.3,regY:151,x:296.8,y:320.1,startPosition:101},0).wait(1).to({y:320.3,startPosition:102},0).wait(1).to({y:320.4,startPosition:103},0).wait(1).to({regX:84,regY:47,x:270.5,y:216.5,startPosition:104},0).wait(8));

	// bow_L
	this.instance_1 = new lib.ll_s_bow_l_1();
	this.instance_1.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:0.2,x:149.4,y:240.6},0).wait(1).to({rotation:0.6,x:149.3,y:240.5},0).wait(1).to({rotation:1,x:149.2,y:240.4},0).wait(1).to({rotation:1.4,y:240.2},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.7,x:149.3,y:240.5},0).wait(1).to({rotation:0.2,x:149.4,y:240.7},0).wait(1).to({rotation:-0.3,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.3,x:149.4,y:240.8},0).wait(1).to({rotation:0.3,x:149.3,y:240.6},0).wait(1).to({rotation:0.9,x:149.2,y:240.4},0).wait(1).to({rotation:1.3,y:240.3},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.8,x:149.3,y:240.5},0).wait(1).to({rotation:0.4,y:240.6},0).wait(1).to({rotation:0,x:149.4,y:240.8},0).wait(1).to({rotation:-0.4,x:149.5,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.3,x:149.4,y:240.8},0).wait(1).to({rotation:0.3,x:149.3,y:240.6},0).wait(1).to({rotation:0.9,x:149.2,y:240.4},0).wait(1).to({rotation:1.3,y:240.3},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.3,x:149.2,y:240.2},0).wait(1).to({rotation:0.8,x:149.3,y:240.4},0).wait(1).to({rotation:0.2,x:149.4,y:240.6},0).wait(1).to({rotation:-0.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.9,x:149.3,y:240.4},0).wait(1).to({rotation:0.6,y:240.5},0).wait(1).to({rotation:0.2,x:149.4,y:240.7},0).wait(1).to({rotation:-0.2,y:240.8},0).wait(1).to({rotation:-0.4,x:149.5,y:240.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:-0.5,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.6,x:149.4,y:240.9},0).wait(1).to({rotation:-0.7,y:241},0).wait(1).to({rotation:-0.8,x:149.5},0).wait(1).to({rotation:-1,y:241.1},0).wait(1).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:30,regY:13.5,rotation:-0.7,x:149.5,y:241},0).wait(1).to({rotation:0,x:149.4,y:240.7},0).wait(1).to({rotation:0.7,x:149.3,y:240.4},0).wait(1).to({rotation:1.3,x:149.2,y:240.2},0).wait(1).to({regX:50.6,regY:4.8,rotation:1.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:1.2,x:149.2,y:240.3},0).wait(1).to({rotation:0.5,x:149.3,y:240.5},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:-0.8,x:149.5,y:241},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:240.9},0).wait(1).to({rotation:-0.2,x:149.4,y:240.8},0).wait(1).to({rotation:0.4,x:149.3,y:240.5},0).wait(1).to({rotation:0.8,x:149.2,y:240.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.6,x:149.3,y:240.5},0).wait(1).to({rotation:-0.1,x:149.4,y:240.8},0).wait(1).to({rotation:-0.7,x:149.6,y:241},0).wait(1).to({regX:50.6,regY:4.7,rotation:-1,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:-0.8,x:149.5,y:241},0).wait(1).to({rotation:-0.4,x:149.4,y:240.9},0).wait(1).to({rotation:0,x:149.3,y:240.7},0).wait(1).to({rotation:0.4,x:149.2,y:240.6},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:232},0).wait(1).to({regX:30,regY:13.5,rotation:0.4,x:149.3,y:240.6},0).wait(1).to({rotation:0.2,x:149.4},0).wait(1).to({rotation:0.1,y:240.7},0).wait(1).to({regX:50.6,regY:4.7,rotation:0,x:170,y:231.9},0).wait(7));

	// tie_L
	this.instance_2 = new lib.ll_s_tie_L();
	this.instance_2.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({regY:41,y:268.2},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({y:267.7},0).wait(1).to({regY:48,y:274.7},0).wait(1).to({regY:41,y:267.7},0).wait(1).to({y:267.8},0).wait(1).to({y:267.9},0).wait(1).to({y:268},0).wait(1).to({regY:48,y:275.1},0).wait(1).to({regY:41,y:268.1},0).wait(4).to({regY:48,y:275.2},0).wait(1).to({regY:41,y:268.2},0).wait(3).to({regY:48,y:275.3},0).wait(1).to({regY:41,y:268.2},0).wait(1).to({y:268.1},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({regY:48,y:274.9},0).wait(1).to({regY:41,y:267.9},0).wait(1).to({y:268.1},0).wait(1).to({y:268.2},0).wait(1).to({regY:48,y:275.3},0).wait(39).to({regY:41,y:268.2},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({y:267.7},0).wait(1).to({regY:48,y:274.7},0).wait(1).to({regY:41,y:267.7},0).wait(1).to({y:267.8},0).wait(1).to({y:267.9},0).wait(1).to({y:268},0).wait(1).to({regY:48,y:275.1},0).wait(1).to({regY:41,y:268.1},0).wait(4).to({regY:48,y:275.2},0).wait(1).to({regY:41,y:268.2},0).wait(3).to({regY:48,y:275.3},0).wait(1).to({regY:41,y:268.2},0).wait(1).to({y:268.1},0).wait(1).to({y:268},0).wait(1).to({y:267.9},0).wait(1).to({regY:48,y:274.9},0).wait(1).to({regY:41,y:267.9},0).wait(1).to({y:268.1},0).wait(1).to({y:268.2},0).wait(1).to({regY:48,y:275.3},0).wait(6));

	// tie_R
	this.instance_3 = new lib.ll_s_tie_R();
	this.instance_3.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({y:266.2},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.7},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.2},0).wait(1).to({y:266.3},0).wait(1).to({y:266.4},0).wait(1).to({y:266.5},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.1},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.6},0).wait(4).to({regX:55,regY:48,x:174.5,y:275.2},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(3).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.6},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.9},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.4},0).wait(1).to({y:266.6},0).wait(1).to({y:266.7},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(39).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({y:266.2},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.7},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.2},0).wait(1).to({y:266.3},0).wait(1).to({y:266.4},0).wait(1).to({y:266.5},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.1},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.6},0).wait(4).to({regX:55,regY:48,x:174.5,y:275.2},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(3).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.7},0).wait(1).to({y:266.6},0).wait(1).to({y:266.5},0).wait(1).to({y:266.4},0).wait(1).to({regX:55,regY:48,x:174.5,y:274.9},0).wait(1).to({regX:74,regY:39.5,x:193.5,y:266.4},0).wait(1).to({y:266.6},0).wait(1).to({y:266.7},0).wait(1).to({regX:55,regY:48,x:174.5,y:275.3},0).wait(6));

	// bow_R
	this.instance_4 = new lib.ll_s_bow_R();
	this.instance_4.setTransform(174.5,275.3,1,1,0,0,0,55,48);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-0.2,x:193.4,y:238.6},0).wait(1).to({rotation:-0.6,x:193.5,y:238.4},0).wait(1).to({rotation:-1,y:238.2},0).wait(1).to({rotation:-1.4,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.7,x:193.4,y:238.4},0).wait(1).to({rotation:-0.2,y:238.6},0).wait(1).to({rotation:0.3,x:193.3,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.3,x:193.4,y:238.8},0).wait(1).to({rotation:-0.3,y:238.6},0).wait(1).to({rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.8,x:193.4,y:238.3},0).wait(1).to({rotation:-0.4,y:238.5},0).wait(1).to({rotation:0,x:193.3,y:238.7},0).wait(1).to({rotation:0.4,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.3,x:193.4,y:238.8},0).wait(1).to({rotation:-0.3,y:238.6},0).wait(1).to({rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.3,x:193.6,y:238.2},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({rotation:-0.2,x:193.4,y:238.7},0).wait(1).to({rotation:0.4,x:193.3,y:238.9},0).wait(1).to({rotation:0.8,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.9,x:193.5,y:238.3},0).wait(1).to({rotation:-0.6,x:193.4,y:238.4},0).wait(1).to({rotation:-0.2,y:238.6},0).wait(1).to({rotation:0.2,x:193.3,y:238.7},0).wait(1).to({rotation:0.4,y:238.8},0).wait(1).to({regX:50.6,regY:4.7,rotation:0.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.6,x:193.4,y:238.9},0).wait(1).to({rotation:0.7,x:193.3,y:239},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:1,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.7,x:193.3,y:239},0).wait(1).to({rotation:0,x:193.4,y:238.7},0).wait(1).to({rotation:-0.7,x:193.5,y:238.4},0).wait(1).to({rotation:-1.3,x:193.6,y:238.1},0).wait(1).to({regX:50.6,regY:4.6,rotation:-1.5,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:-1.2,x:193.6,y:238.2},0).wait(1).to({rotation:-0.5,x:193.5,y:238.5},0).wait(1).to({rotation:0.2,x:193.4,y:238.9},0).wait(1).to({rotation:0.8,x:193.3,y:239.1},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239.1},0).wait(1).to({rotation:0.2,x:193.4,y:238.8},0).wait(1).to({rotation:-0.4,y:238.6},0).wait(1).to({rotation:-0.8,x:193.5,y:238.4},0).wait(1).to({regX:50.6,regY:4.8,rotation:-1,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.6,x:193.4,y:238.4},0).wait(1).to({rotation:0.1,y:238.7},0).wait(1).to({rotation:0.7,x:193.3,y:238.9},0).wait(1).to({regX:50.6,regY:4.7,rotation:1,x:170,y:231.9},0).wait(1).to({regX:74,regY:11.5,rotation:0.8,x:193.3,y:239},0).wait(1).to({rotation:0.4,y:238.9},0).wait(1).to({rotation:0,x:193.4,y:238.7},0).wait(1).to({rotation:-0.4,y:238.5},0).wait(1).to({regX:50.5,regY:4.7,rotation:-0.5,x:170,y:232},0).wait(1).to({regX:74,regY:11.5,rotation:-0.4,x:193.5,y:238.6},0).wait(1).to({rotation:-0.2,y:238.7},0).wait(1).to({rotation:-0.1,x:193.4},0).wait(1).to({regX:50.6,regY:4.7,rotation:0,x:170,y:231.9},0).wait(7));

	// torso
	this.instance_5 = new lib.ll_s_torso_1();
	this.instance_5.setTransform(194,380.2,1,1,0,0,0,196,279.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(112));

	// torso_shadow
	this.instance_6 = new lib.ll_s_torso_shadow_2();
	this.instance_6.setTransform(195,612.3,1,1,0,0,0,142.5,38.5);
	this.instance_6.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(12).to({regX:139.3,regY:37.7,x:191.8,y:611.7},0).wait(1).to({y:612.3},0).wait(1).to({y:613.1},0).wait(1).to({y:613.8},0).wait(1).to({regX:142.5,regY:38.6,x:195,y:615},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:613.8},0).wait(1).to({y:613},0).wait(1).to({y:612.1},0).wait(1).to({y:611.3},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.3},0).wait(1).to({y:611.6},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.9},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.7},0).wait(1).to({y:611.4},0).wait(1).to({y:611.1},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.2},0).wait(1).to({y:611.4},0).wait(1).to({y:611.7},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.9},0).wait(1).to({y:611.7},0).wait(1).to({y:611.6},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.3},0).wait(36).to({regX:139.3,regY:37.7,x:191.8,y:611.8},0).wait(1).to({y:612.3},0).wait(1).to({y:613},0).wait(1).to({y:613.6},0).wait(1).to({regX:142.5,regY:38.6,x:195,y:615},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:613.8},0).wait(1).to({y:613},0).wait(1).to({y:612.1},0).wait(1).to({y:611.3},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.3},0).wait(1).to({y:611.6},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.9},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.7},0).wait(1).to({y:611.4},0).wait(1).to({y:611.1},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:611.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:611.1},0).wait(1).to({y:611.2},0).wait(1).to({y:611.4},0).wait(1).to({y:611.7},0).wait(1).to({y:611.9},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.8},0).wait(1).to({regX:139.3,regY:37.7,x:191.8,y:612},0).wait(1).to({y:611.9},0).wait(1).to({y:611.7},0).wait(1).to({y:611.6},0).wait(1).to({regX:142.5,regY:38.5,x:195,y:612.3},0).wait(4));

	// neck
	this.instance_7 = new lib.ll_s_neck_1();
	this.instance_7.setTransform(170.5,211.5,1,1,0,0,0,69,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({regX:64.1,regY:34.5,x:165.6,y:205},0).wait(1).to({y:204.9},0).wait(1).to({y:204.8},0).wait(1).to({y:204.7},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.2},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.8},0).wait(1).to({y:204.9},0).wait(1).to({y:205.1},0).wait(1).to({y:205.2},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.8},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.3},0).wait(1).to({y:205.2},0).wait(1).to({y:205.1},0).wait(1).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(1).to({y:205},0).wait(1).to({y:205.1},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.6},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.1},0).wait(1).to({y:205},0).wait(2).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(2).to({y:205},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.5},0).wait(39).to({regX:64.1,regY:34.5,x:165.6,y:205},0).wait(1).to({y:204.9},0).wait(1).to({y:204.8},0).wait(1).to({y:204.7},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.2},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.8},0).wait(1).to({y:204.9},0).wait(1).to({y:205.1},0).wait(1).to({y:205.2},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.8},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.3},0).wait(1).to({y:205.2},0).wait(1).to({y:205.1},0).wait(1).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(1).to({y:205},0).wait(1).to({y:205.1},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.6},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:205.1},0).wait(1).to({y:205},0).wait(2).to({y:204.9},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.4},0).wait(1).to({regX:64.1,regY:34.5,x:165.6,y:204.9},0).wait(2).to({y:205},0).wait(1).to({regX:69,regY:41,x:170.5,y:211.5},0).wait(7));

	// l_arm_all
	this.instance_8 = new lib.ll_s_m_l_arm_all();
	this.instance_8.setTransform(45.6,255.8,1,1,0,0,0,72,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({regX:64.8,regY:390.6,rotation:0.1,x:38.1,y:622},0).wait(1).to({rotation:0.2,x:37.4,y:621.9},0).wait(1).to({rotation:0.3,x:36.6},0).wait(1).to({rotation:0.4,x:35.8},0).wait(1).to({regX:72,regY:24.3,rotation:0.5,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.4,x:35.8,y:622},0).wait(1).to({rotation:0.2,x:37.1},0).wait(1).to({rotation:-0.1,x:38.7,y:622.1},0).wait(1).to({rotation:-0.3,x:40.4},0).wait(1).to({regX:72,regY:24.4,rotation:-0.5,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.4,x:41.1,y:622.1},0).wait(1).to({rotation:-0.3,x:40.1},0).wait(1).to({rotation:-0.1,x:38.9,y:622},0).wait(1).to({rotation:0.1,x:37.6},0).wait(1).to({regX:72,regY:24.4,rotation:0.3,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.2,x:37,y:622},0).wait(1).to({rotation:0.1,x:37.6},0).wait(1).to({rotation:0,x:38.3},0).wait(1).to({regX:72,regY:24.3,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,x:38.7,y:622},0).wait(1).to({x:38.5,y:622.1},0).wait(1).to({x:38.3,y:622},0).wait(1).to({x:38.2,y:622.1},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,x:38.1,y:622},0).wait(1).to({x:38.2},0).wait(1).to({x:38.3},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8},0).wait(39).to({regX:64.8,regY:390.6,rotation:0.1,x:38.1,y:622},0).wait(1).to({rotation:0.2,x:37.4,y:621.9},0).wait(1).to({rotation:0.3,x:36.6},0).wait(1).to({rotation:0.4,x:35.8},0).wait(1).to({regX:72,regY:24.3,rotation:0.5,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.4,x:35.8,y:622},0).wait(1).to({rotation:0.2,x:37.1},0).wait(1).to({rotation:-0.1,x:38.7,y:622.1},0).wait(1).to({rotation:-0.3,x:40.4},0).wait(1).to({regX:72,regY:24.4,rotation:-0.5,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:-0.4,x:41.1,y:622.1},0).wait(1).to({rotation:-0.3,x:40.1},0).wait(1).to({rotation:-0.1,x:38.9,y:622},0).wait(1).to({rotation:0.1,x:37.6},0).wait(1).to({regX:72,regY:24.4,rotation:0.3,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,rotation:0.2,x:37,y:622},0).wait(1).to({rotation:0.1,x:37.6},0).wait(1).to({rotation:0,x:38.3},0).wait(1).to({regX:72,regY:24.3,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,x:38.7,y:622},0).wait(1).to({x:38.5,y:622.1},0).wait(1).to({x:38.3,y:622},0).wait(1).to({x:38.2,y:622.1},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8},0).wait(1).to({regX:64.8,regY:390.6,x:38.1,y:622},0).wait(1).to({x:38.2},0).wait(1).to({x:38.3},0).wait(1).to({regX:72,regY:24.4,x:45.6,y:255.8},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.1,57.9,400.8,951.8);


(lib.ll_s_s_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_116 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(1));

	// torso_all
	this.s_torso = new lib.ll_s_s_torso();
	this.s_torso.setTransform(257,444.5,1,1,0,0,0,196,279.5);

	this.timeline.addTween(cjs.Tween.get(this.s_torso).wait(10).to({regX:181,regY:533.7,x:242,y:698.1},0).wait(1).to({y:697.6},0).wait(1).to({x:241.9,y:697.1},0).wait(1).to({regX:196,regY:279.5,x:256.9,y:442.2},0).wait(1).to({regX:181,regY:533.7,x:241.9,y:697.3},0).wait(1).to({y:697.9},0).wait(1).to({x:242,y:698.6},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.3},0).wait(1).to({y:697.3},0).wait(1).to({y:696.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:696},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:695.8},0).wait(1).to({y:696.6},0).wait(1).to({y:697.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:697.6},0).wait(1).to({y:696.8},0).wait(1).to({y:696},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.3},0).wait(1).to({y:697.3},0).wait(1).to({y:696.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:696},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.2},0).wait(1).to({y:697},0).wait(1).to({y:695.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:439.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:695.4},0).wait(1).to({y:696.5},0).wait(1).to({y:697.8},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.6},0).wait(1).to({y:697.8},0).wait(1).to({y:697},0).wait(1).to({regX:196,regY:279.5,x:257,y:441.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.5},0).wait(1).to({y:697.1},0).wait(1).to({y:697.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.9,222.9,394.2,951.8);


(lib.ll_s_h_upper_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_116 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(116).call(this.frame_116).wait(1));

	// torso_all
	this.h_torso_broken = new lib.ll_s_h_torso_broken();
	this.h_torso_broken.setTransform(257,444.5,1,1,0,0,0,196,279.5);

	this.timeline.addTween(cjs.Tween.get(this.h_torso_broken).wait(10).to({regX:178.7,regY:530.3,x:239.7,y:694.7},0).wait(1).to({y:694.2},0).wait(1).to({x:239.6,y:693.7},0).wait(1).to({regX:196,regY:279.5,x:256.9,y:442.2},0).wait(1).to({regX:178.7,regY:530.3,x:239.6,y:693.9},0).wait(1).to({y:694.5},0).wait(1).to({x:239.7,y:695.2},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:695},0).wait(1).to({y:694},0).wait(1).to({y:693},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.7},0).wait(1).to({y:693.7},0).wait(1).to({y:694.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:695},0).wait(1).to({y:694},0).wait(1).to({y:693},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.7},0).wait(1).to({y:693.7},0).wait(1).to({y:694.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:694.9},0).wait(1).to({y:693.9},0).wait(1).to({y:692.9},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.6},0).wait(1).to({y:693.7},0).wait(1).to({y:694.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:695},0).wait(1).to({y:694},0).wait(1).to({y:693},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.4},0).wait(1).to({y:693.2},0).wait(1).to({y:694},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:694.2},0).wait(1).to({y:693.4},0).wait(1).to({y:692.6},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.7},0).wait(1).to({y:693.7},0).wait(1).to({y:694.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:694.9},0).wait(1).to({y:693.9},0).wait(1).to({y:692.9},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692.6},0).wait(1).to({y:693.7},0).wait(1).to({y:694.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:694.8},0).wait(1).to({y:693.6},0).wait(1).to({y:692.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:439.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:692},0).wait(1).to({y:693.1},0).wait(1).to({y:694.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:695.2},0).wait(1).to({y:694.4},0).wait(1).to({y:693.6},0).wait(1).to({regX:196,regY:279.5,x:257,y:441.6},0).wait(1).to({regX:178.7,regY:530.3,x:239.7,y:693.1},0).wait(1).to({y:693.7},0).wait(1).to({y:694.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.8,220.4,421,949.8);


(lib.ll_s_h_upper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// torso_all
	this.h_torso = new lib.ll_s_h_torso();
	this.h_torso.setTransform(257,444.5,1,1,0,0,0,196,279.5);

	this.timeline.addTween(cjs.Tween.get(this.h_torso).wait(10).to({regX:181,regY:533.7,x:242,y:698.1},0).wait(1).to({y:697.6},0).wait(1).to({x:241.9,y:697.1},0).wait(1).to({regX:196,regY:279.5,x:256.9,y:442.2},0).wait(1).to({regX:181,regY:533.7,x:241.9,y:697.3},0).wait(1).to({y:697.9},0).wait(1).to({x:242,y:698.6},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.3},0).wait(1).to({y:697.3},0).wait(1).to({y:696.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:696},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.4},0).wait(1).to({y:697.4},0).wait(1).to({y:696.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:695.8},0).wait(1).to({y:696.6},0).wait(1).to({y:697.4},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:697.6},0).wait(1).to({y:696.8},0).wait(1).to({y:696},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.1},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.3},0).wait(1).to({y:697.3},0).wait(1).to({y:696.3},0).wait(1).to({regX:196,regY:279.5,x:257,y:440.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:696},0).wait(1).to({y:697.1},0).wait(1).to({y:698.1},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.2},0).wait(1).to({y:697},0).wait(1).to({y:695.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:439.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:695.4},0).wait(1).to({y:696.5},0).wait(1).to({y:697.8},0).wait(1).to({regX:196,regY:279.5,x:257,y:445.5},0).wait(1).to({regX:181,regY:533.7,x:242,y:698.6},0).wait(1).to({y:697.8},0).wait(1).to({y:697},0).wait(1).to({regX:196,regY:279.5,x:257,y:441.6},0).wait(1).to({regX:181,regY:533.7,x:242,y:696.5},0).wait(1).to({y:697.1},0).wait(1).to({y:697.7},0).wait(1).to({regX:196,regY:279.5,x:257,y:444.5},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.9,222.9,400.8,951.8);


(lib.ll_s_show_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(117).call(this.frame_117).wait(1));

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(961.5,1693.7,0.96,0.96,0,0,0,75.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118));

	// ll_s_board
	this.board = new lib.ll_s_board_1();
	this.board.setTransform(943.5,1202,1,1,0,0,0,106.5,136);

	this.timeline.addTween(cjs.Tween.get(this.board).wait(10).to({y:1199},4).to({y:1204},5).to({y:1200},5).to({y:1204},5).to({y:1201},6).to({y:1202},5).wait(41).to({y:1199},5).to({y:1204},5).to({y:1200},5).to({y:1202},5).wait(17));

	// ll_s_pole
	this.pole = new lib.ll_s_pole_1();
	this.pole.setTransform(942,1423,1,1,0,0,0,100,292);

	this.timeline.addTween(cjs.Tween.get(this.pole).wait(10).to({y:1421},4).to({y:1424},5).to({y:1422},5).to({y:1424},5).to({y:1422},6).to({y:1423},5).wait(41).to({y:1422},5).to({y:1424},5).to({y:1422},5).to({y:1423},5).wait(17));

	// upper
	this.s_upper_broken = new lib.ll_s_h_upper_broken();
	this.s_upper_broken.setTransform(961,1174.6,1,1,0,0,0,258,635.6);

	this.timeline.addTween(cjs.Tween.get(this.s_upper_broken).wait(11).to({regX:239.7,regY:693.4,x:942.7,y:1231.8},0).wait(1).to({y:1230.5},0).wait(1).to({y:1229.1},0).wait(1).to({regX:258,regY:635.6,x:961,y:1170.6},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1228.9},0).wait(1).to({y:1230.2},0).wait(1).to({y:1231.8},0).wait(1).to({y:1233.3},0).wait(1).to({regX:258,regY:635.6,x:961,y:1176.1},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1233.6},0).wait(1).to({y:1232.9},0).wait(1).to({y:1232},0).wait(1).to({y:1231.2},0).wait(1).to({regX:258,regY:635.6,x:961,y:1173.1},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1231.1},0).wait(1).to({y:1231.6},0).wait(1).to({y:1232.3},0).wait(1).to({y:1232.8},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1233},0).wait(1).to({y:1232.8},0).wait(1).to({y:1232.5},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1231.9},0).wait(1).to({y:1232.1},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232.3},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(42).to({regX:239.7,regY:693.4,x:942.7,y:1232},0).wait(1).to({y:1231.4},0).wait(1).to({y:1230.7},0).wait(1).to({y:1229.9},0).wait(1).to({regX:258,regY:635.6,x:961,y:1171.6},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1229.9},0).wait(1).to({y:1230.7},0).wait(1).to({y:1231.5},0).wait(1).to({y:1232.4},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1232.9},0).wait(1).to({y:1232.7},0).wait(1).to({y:1232.4},0).wait(1).to({y:1232.1},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:239.7,regY:693.4,x:942.7,y:1232},0).wait(1).to({y:1232.1},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232.3},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(17));

	// pants
	this.instance_1 = new lib.ll_s_pants();
	this.instance_1.setTransform(949.5,1598.6,1,1,0,0,0,175.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491.3},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1.01,y:1490.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1.01,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1.01,x:970.5,y:1490.6},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1492},0).wait(1).to({regX:175.5,regY:434.6,scaleY:0.99,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:0.99,x:970.5,y:1492.1},0).wait(1).to({scaleY:1,y:1491.8},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.1},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491},0).wait(1).to({scaleY:1,y:1491.2},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,x:970.5,y:1491.7},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1491.5},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({regX:175.5,regY:434.6,x:949.5,y:1598.6},0).wait(84));

	// ll_s_plaque_1
	this.instance_2 = new lib.ll_s_plaque_1_1();
	this.instance_2.setTransform(951.7,1713,0.96,0.96,0,0,0,171.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747.8,759.4,421,989.1);


(lib.ll_s_show = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_117 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(117).call(this.frame_117).wait(1));

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(961.5,1693.7,0.96,0.96,0,0,0,75.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118));

	// upper
	this.s_upper = new lib.ll_s_s_upper();
	this.s_upper.setTransform(961,1174.6,1,1,0,0,0,258,635.6);

	this.timeline.addTween(cjs.Tween.get(this.s_upper).wait(11).to({regX:241.9,regY:696.8,x:944.9,y:1235.2},0).wait(1).to({y:1233.9},0).wait(1).to({y:1232.5},0).wait(1).to({regX:258,regY:635.6,x:961,y:1170.6},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1232.3},0).wait(1).to({y:1233.6},0).wait(1).to({y:1235.2},0).wait(1).to({y:1236.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1176.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1237},0).wait(1).to({y:1236.3},0).wait(1).to({y:1235.4},0).wait(1).to({y:1234.6},0).wait(1).to({regX:258,regY:635.6,x:961,y:1173.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1234.5},0).wait(1).to({y:1235},0).wait(1).to({y:1235.7},0).wait(1).to({y:1236.2},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1236.4},0).wait(1).to({y:1236.2},0).wait(1).to({y:1235.9},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.4},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1235.3},0).wait(1).to({y:1235.5},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(42).to({regX:241.9,regY:696.8,x:944.9,y:1235.4},0).wait(1).to({y:1234.8},0).wait(1).to({y:1234.1},0).wait(1).to({y:1233.3},0).wait(1).to({regX:258,regY:635.6,x:961,y:1171.6},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1233.3},0).wait(1).to({y:1234.1},0).wait(1).to({y:1234.9},0).wait(1).to({y:1235.8},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1236.3},0).wait(1).to({y:1236.1},0).wait(1).to({y:1235.8},0).wait(1).to({y:1235.5},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1235.4},0).wait(1).to({y:1235.5},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(17));

	// pants
	this.instance_1 = new lib.ll_s_pants();
	this.instance_1.setTransform(949.5,1598.6,1,1,0,0,0,175.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491.3},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1.01,y:1490.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1.01,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1.01,x:970.5,y:1490.6},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1492},0).wait(1).to({regX:175.5,regY:434.6,scaleY:0.99,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:0.99,x:970.5,y:1492.1},0).wait(1).to({scaleY:1,y:1491.8},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.1},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491},0).wait(1).to({scaleY:1,y:1491.2},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,x:970.5,y:1491.7},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1491.5},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({regX:175.5,regY:434.6,x:949.5,y:1598.6},0).wait(84));

	// ll_s_plaque_1
	this.instance_2 = new lib.ll_s_plaque_1_1();
	this.instance_2.setTransform(951.7,1713,0.96,0.96,0,0,0,171.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747.9,761.9,394.2,986.6);


(lib.ll_s_hide_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(961.5,1693.7,0.96,0.96,0,0,0,75.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118));

	// ll_s_board
	this.board = new lib.ll_s_board_1();
	this.board.setTransform(943.5,1202,1,1,0,0,0,106.5,136);

	this.timeline.addTween(cjs.Tween.get(this.board).wait(10).to({y:1199},5).to({y:1204},5).to({y:1200},5).to({y:1202},5).wait(41).to({y:1199},4).to({y:1204},5).to({y:1200},5).to({y:1204},5).to({y:1201},6).to({y:1202},5).wait(17));

	// ll_s_pole
	this.pole = new lib.ll_s_pole_1();
	this.pole.setTransform(942,1423,1,1,0,0,0,100,292);

	this.timeline.addTween(cjs.Tween.get(this.pole).wait(10).to({y:1422},5).to({y:1424},5).to({y:1422},5).to({y:1423},5).wait(41).to({y:1421},4).to({y:1424},5).to({y:1422},5).to({y:1424},5).to({y:1422},6).to({y:1423},5).wait(17));

	// upper
	this.h_upper_broken = new lib.ll_s_h_upper_broken();
	this.h_upper_broken.setTransform(962,1174.6,1,1,0,0,0,258,635.6);

	this.timeline.addTween(cjs.Tween.get(this.h_upper_broken).wait(11).to({regX:239.7,regY:693.4,x:943.7,y:1232},0).wait(1).to({y:1231.4},0).wait(1).to({y:1230.7},0).wait(1).to({y:1229.9},0).wait(1).to({regX:258,regY:635.6,x:962,y:1171.6},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1229.9},0).wait(1).to({y:1230.7},0).wait(1).to({y:1231.5},0).wait(1).to({y:1232.4},0).wait(1).to({regX:258,regY:635.6,x:962,y:1175.3},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1232.9},0).wait(1).to({y:1232.7},0).wait(1).to({y:1232.4},0).wait(1).to({y:1232.1},0).wait(1).to({regX:258,regY:635.6,x:962,y:1174.1},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1232},0).wait(1).to({y:1232.1},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232.3},0).wait(1).to({regX:258,regY:635.6,x:962,y:1174.6},0).wait(42).to({regX:239.7,regY:693.4,x:943.7,y:1231.8},0).wait(1).to({y:1230.5},0).wait(1).to({y:1229.1},0).wait(1).to({regX:258,regY:635.6,x:962,y:1170.6},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1228.9},0).wait(1).to({y:1230.2},0).wait(1).to({y:1231.8},0).wait(1).to({y:1233.3},0).wait(1).to({regX:258,regY:635.6,x:962,y:1176.1},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1233.6},0).wait(1).to({y:1232.9},0).wait(1).to({y:1232},0).wait(1).to({y:1231.2},0).wait(1).to({regX:258,regY:635.6,x:962,y:1173.1},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1231.1},0).wait(1).to({y:1231.6},0).wait(1).to({y:1232.3},0).wait(1).to({y:1232.8},0).wait(1).to({regX:258,regY:635.6,x:962,y:1175.3},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1233},0).wait(1).to({y:1232.8},0).wait(1).to({y:1232.5},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232},0).wait(1).to({regX:258,regY:635.6,x:962,y:1174.1},0).wait(1).to({regX:239.7,regY:693.4,x:943.7,y:1231.9},0).wait(1).to({y:1232.1},0).wait(1).to({y:1232.2},0).wait(1).to({y:1232.3},0).wait(1).to({regX:258,regY:635.6,x:962,y:1174.6},0).wait(17));

	// pants
	this.instance_1 = new lib.ll_s_pants();
	this.instance_1.setTransform(949.5,1598.6,1,1,0,0,0,175.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491.3},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1.01,y:1490.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1.01,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1.01,x:970.5,y:1490.6},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1492},0).wait(1).to({regX:175.5,regY:434.6,scaleY:0.99,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:0.99,x:970.5,y:1492.1},0).wait(1).to({scaleY:1,y:1491.8},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.1},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491},0).wait(1).to({scaleY:1,y:1491.2},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,x:970.5,y:1491.7},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1491.5},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({regX:175.5,regY:434.6,x:949.5,y:1598.6},0).wait(23));

	// ll_s_plaque_1
	this.instance_2 = new lib.ll_s_plaque_1_1();
	this.instance_2.setTransform(951.7,1713,0.96,0.96,0,0,0,171.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(748.8,759.4,421,989.1);


(lib.ll_s_hide = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(961.5,1693.7,0.96,0.96,0,0,0,75.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(118));

	// upper
	this.h_upper = new lib.ll_s_h_upper();
	this.h_upper.setTransform(961,1174.6,1,1,0,0,0,258,635.6);

	this.timeline.addTween(cjs.Tween.get(this.h_upper).wait(11).to({regX:241.9,regY:696.8,x:944.9,y:1235.4},0).wait(1).to({y:1234.8},0).wait(1).to({y:1234.1},0).wait(1).to({y:1233.3},0).wait(1).to({regX:258,regY:635.6,x:961,y:1171.6},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1233.3},0).wait(1).to({y:1234.1},0).wait(1).to({y:1234.9},0).wait(1).to({y:1235.8},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1236.3},0).wait(1).to({y:1236.1},0).wait(1).to({y:1235.8},0).wait(1).to({y:1235.5},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1235.4},0).wait(1).to({y:1235.5},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(42).to({regX:241.9,regY:696.8,x:944.9,y:1235.2},0).wait(1).to({y:1233.9},0).wait(1).to({y:1232.5},0).wait(1).to({regX:258,regY:635.6,x:961,y:1170.6},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1232.3},0).wait(1).to({y:1233.6},0).wait(1).to({y:1235.2},0).wait(1).to({y:1236.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1176.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1237},0).wait(1).to({y:1236.3},0).wait(1).to({y:1235.4},0).wait(1).to({y:1234.6},0).wait(1).to({regX:258,regY:635.6,x:961,y:1173.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1234.5},0).wait(1).to({y:1235},0).wait(1).to({y:1235.7},0).wait(1).to({y:1236.2},0).wait(1).to({regX:258,regY:635.6,x:961,y:1175.3},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1236.4},0).wait(1).to({y:1236.2},0).wait(1).to({y:1235.9},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.4},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.1},0).wait(1).to({regX:241.9,regY:696.8,x:944.9,y:1235.3},0).wait(1).to({y:1235.5},0).wait(1).to({y:1235.6},0).wait(1).to({y:1235.7},0).wait(1).to({regX:258,regY:635.6,x:961,y:1174.6},0).wait(17));

	// pants
	this.instance_1 = new lib.ll_s_pants();
	this.instance_1.setTransform(949.5,1598.6,1,1,0,0,0,175.5,434.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491.3},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1.01,y:1490.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1.01,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1.01,x:970.5,y:1490.6},0).wait(1).to({scaleY:1,y:1491},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1492},0).wait(1).to({regX:175.5,regY:434.6,scaleY:0.99,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:0.99,x:970.5,y:1492.1},0).wait(1).to({scaleY:1,y:1491.8},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.1},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,scaleY:1,x:970.5,y:1491},0).wait(1).to({scaleY:1,y:1491.2},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({regX:175.5,regY:434.6,scaleY:1,x:949.5,y:1598.6},0).wait(1).to({regX:196.5,regY:327.5,x:970.5,y:1491.7},0).wait(1).to({scaleY:1,y:1491.6},0).wait(1).to({scaleY:1,y:1491.5},0).wait(1).to({scaleY:1,y:1491.4},0).wait(1).to({regX:175.5,regY:434.6,x:949.5,y:1598.6},0).wait(23));

	// ll_s_plaque_1
	this.instance_2 = new lib.ll_s_plaque_1_1();
	this.instance_2.setTransform(951.7,1713,0.96,0.96,0,0,0,171.5,37);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(747.9,761.9,400.9,986.6);


(lib.AColonel_loose_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{move_forward:1,move_forward_broken:118,main_sequence:236,hide:318,hide_norm:433});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		window.project_colonel_archive_canvas.movingColonelToFront('AColonel_loose_lips');
	}
	this.frame_70 = function() {
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_loose_lips');
	}
	this.frame_117 = function() {
		this.stop();
		window.project_colonel_archive_canvas.showBackButton();
		this.dispatchEvent('move_forward_complete');
	}
	this.frame_118 = function() {
		window.project_colonel_archive_canvas.movingColonelToFront('AColonel_loose_lips');
	}
	this.frame_198 = function() {
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_loose_lips');
	}
	this.frame_235 = function() {
		this.stop();
		window.project_colonel_archive_canvas.showBackButton();
		this.dispatchEvent('move_forward_complete');
	}
	this.frame_318 = function() {
		window.project_colonel_archive_canvas.movingColonelToBack(this,'AColonel_loose_lips');
	}
	this.frame_398 = function() {
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_loose_lips');
	}
	this.frame_432 = function() {
		this.stop();
		this.dispatchEvent('hideComplete');
	}
	this.frame_433 = function() {
		window.project_colonel_archive_canvas.movingColonelToBack(this,'AColonel_loose_lips');
	}
	this.frame_516 = function() {
		this.stop();
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_loose_lips');
		this.dispatchEvent('hideComplete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(69).call(this.frame_70).wait(47).call(this.frame_117).wait(1).call(this.frame_118).wait(80).call(this.frame_198).wait(37).call(this.frame_235).wait(83).call(this.frame_318).wait(80).call(this.frame_398).wait(34).call(this.frame_432).wait(1).call(this.frame_433).wait(83).call(this.frame_516).wait(1));

	// show_intro
	this.show = new lib.ll_s_show();
	this.show.setTransform(130.5,489.7,0.52,0.52,0,0,0,951,1699.5);

	this.timeline.addTween(cjs.Tween.get(this.show).to({_off:true},1).wait(516));

	// show_intro_broken
	this.show_broken = new lib.ll_s_show_broken();
	this.show_broken.setTransform(130,490.2,0.52,0.52,0,0,0,951,1699.5);
	this.show_broken._off = true;

	this.timeline.addTween(cjs.Tween.get(this.show_broken).wait(118).to({_off:false},0).to({regY:1699.6,scaleX:1,scaleY:1,x:126,y:785.6},80,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.99,x:126.3,y:781.4},3).to({_off:true},35).wait(281));

	// show_intro
	this.show_1 = new lib.ll_s_show();
	this.show_1.setTransform(130,490.2,0.52,0.52,0,0,0,951,1699.5);
	this.show_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.show_1).wait(1).to({_off:false},0).to({regY:1699.6,scaleX:1,scaleY:1,x:126,y:785.6},80,cjs.Ease.get(-1)).to({scaleX:0.99,scaleY:0.99,x:126.3,y:781.4},3).to({_off:true},34).wait(399));

	// main copy
	this.main = new lib.ll_s_main_new();
	this.main.setTransform(126.4,781.4,0.99,0.99,0,0,0,951.1,1699.6);
	this.main._off = true;

	this.timeline.addTween(cjs.Tween.get(this.main).wait(236).to({_off:false},0).to({_off:true},82).wait(199));

	// hide_outro_broken
	this.hide_norm = new lib.ll_s_hide_broken();
	this.hide_norm.setTransform(126.3,781.5,0.99,0.99,0,0,0,951,1699.7);
	this.hide_norm._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hide_norm).wait(318).to({_off:false},0).to({regY:1699.6,scaleX:1,scaleY:1,x:126,y:785.6},3).to({regY:1699.7,scaleX:0.52,scaleY:0.52,x:130,y:490.3},77,cjs.Ease.get(1)).to({_off:true},35).wait(84));

	// hide_outro
	this.hide_norm_1 = new lib.ll_s_hide();
	this.hide_norm_1.setTransform(126.3,781.5,0.99,0.99,0,0,0,951,1699.7);
	this.hide_norm_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.hide_norm_1).wait(433).to({_off:false},0).to({regY:1699.6,scaleX:1,scaleY:1,x:126,y:785.6},3).to({regY:1699.7,scaleX:0.52,scaleY:0.52,x:130,y:490.3},80,cjs.Ease.get(1)).wait(1));

	// ll_s_shadow_colonelz
	this.instance = new lib.ll_s_shadow_colonelz_1();
	this.instance.setTransform(115.3,257.9,0.659,0.658,0,0,0,175,386.1);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regY:386,y:257.8,alpha:0.8},0).wait(1).to({x:115.1,alpha:0.797},0).wait(1).to({x:114.9,alpha:0.793},0).wait(1).to({x:114.7,alpha:0.788},0).wait(1).to({x:114.3,alpha:0.781},0).wait(1).to({x:113.9,y:257.7,alpha:0.773},0).wait(1).to({x:113.5,alpha:0.764},0).wait(1).to({x:113,y:257.6,alpha:0.754},0).wait(1).to({x:112.4,alpha:0.743},0).wait(1).to({x:111.8,y:257.5,alpha:0.731},0).wait(1).to({x:111.1,y:257.4,alpha:0.718},0).wait(1).to({x:110.5,alpha:0.704},0).wait(1).to({x:109.7,y:257.3,alpha:0.689},0).wait(1).to({x:109,alpha:0.674},0).wait(1).to({x:108.2,y:257.2,alpha:0.658},0).wait(1).to({x:107.3,y:257.1,alpha:0.642},0).wait(1).to({x:106.5,y:257,alpha:0.624},0).wait(1).to({x:105.6,y:256.9,alpha:0.607},0).wait(1).to({x:104.7,alpha:0.589},0).wait(1).to({x:103.8,y:256.8,alpha:0.57},0).wait(1).to({x:102.8,y:256.7,alpha:0.551},0).wait(1).to({x:101.9,y:256.6,alpha:0.532},0).wait(1).to({x:100.9,y:256.5,alpha:0.512},0).wait(1).to({x:99.9,alpha:0.492},0).wait(1).to({x:98.9,y:256.4,alpha:0.472},0).wait(1).to({x:97.9,y:256.3,alpha:0.452},0).wait(1).to({x:96.8,y:256.2,alpha:0.431},0).wait(1).to({x:95.8,y:256,alpha:0.41},0).wait(1).to({x:94.7,alpha:0.389},0).wait(1).to({x:93.7,y:255.9,alpha:0.368},0).wait(1).to({x:92.6,y:255.8,alpha:0.347},0).wait(1).to({x:91.6,y:255.7,alpha:0.326},0).wait(1).to({x:90.5,y:255.6,alpha:0.305},0).wait(1).to({x:89.5,y:255.5,alpha:0.284},0).wait(1).to({x:88.5,y:255.4,alpha:0.263},0).wait(1).to({x:87.4,y:255.3,alpha:0.243},0).wait(1).to({x:86.4,y:255.2,alpha:0.223},0).wait(1).to({x:85.4,y:255.1,alpha:0.202},0).wait(1).to({x:84.4,alpha:0.183},0).wait(1).to({x:83.5,y:255,alpha:0.163},0).wait(1).to({x:82.5,y:254.9,alpha:0.144},0).wait(1).to({x:81.6,y:254.8,alpha:0.126},0).wait(1).to({x:80.7,y:254.7,alpha:0.109},0).wait(1).to({x:79.9,y:254.6,alpha:0.092},0).wait(1).to({scaleY:0.66,x:79.1,alpha:0.076},0).wait(1).to({x:78.3,y:254.5,alpha:0.061},0).wait(1).to({x:77.6,y:254.4,alpha:0.047},0).wait(1).to({x:77,alpha:0.034},0).wait(1).to({x:76.4,y:254.3,alpha:0.023},0).wait(1).to({x:76,alpha:0.014},0).wait(1).to({x:75.6,y:254.2,alpha:0.006},0).wait(1).to({x:75.4,alpha:0.002},0).wait(1).to({regY:386.1,x:75.3,y:254.3,alpha:0},0).to({_off:true},1).wait(63).to({_off:false,scaleY:0.66,x:115.3,y:257.9,alpha:0.801},0).wait(1).to({regY:386,y:257.8,alpha:0.8},0).wait(1).to({x:115.1,alpha:0.797},0).wait(1).to({x:114.9,alpha:0.793},0).wait(1).to({x:114.7,alpha:0.788},0).wait(1).to({x:114.3,alpha:0.781},0).wait(1).to({x:113.9,y:257.7,alpha:0.773},0).wait(1).to({x:113.5,alpha:0.764},0).wait(1).to({x:113,y:257.6,alpha:0.754},0).wait(1).to({x:112.4,alpha:0.743},0).wait(1).to({x:111.8,y:257.5,alpha:0.731},0).wait(1).to({x:111.1,y:257.4,alpha:0.718},0).wait(1).to({x:110.5,alpha:0.704},0).wait(1).to({x:109.7,y:257.3,alpha:0.689},0).wait(1).to({x:109,alpha:0.674},0).wait(1).to({x:108.2,y:257.2,alpha:0.658},0).wait(1).to({x:107.3,y:257.1,alpha:0.642},0).wait(1).to({x:106.5,y:257,alpha:0.624},0).wait(1).to({x:105.6,y:256.9,alpha:0.607},0).wait(1).to({x:104.7,alpha:0.589},0).wait(1).to({x:103.8,y:256.8,alpha:0.57},0).wait(1).to({x:102.8,y:256.7,alpha:0.551},0).wait(1).to({x:101.9,y:256.6,alpha:0.532},0).wait(1).to({x:100.9,y:256.5,alpha:0.512},0).wait(1).to({x:99.9,alpha:0.492},0).wait(1).to({x:98.9,y:256.4,alpha:0.472},0).wait(1).to({x:97.9,y:256.3,alpha:0.452},0).wait(1).to({x:96.8,y:256.2,alpha:0.431},0).wait(1).to({x:95.8,y:256,alpha:0.41},0).wait(1).to({x:94.7,alpha:0.389},0).wait(1).to({x:93.7,y:255.9,alpha:0.368},0).wait(1).to({x:92.6,y:255.8,alpha:0.347},0).wait(1).to({x:91.6,y:255.7,alpha:0.326},0).wait(1).to({x:90.5,y:255.6,alpha:0.305},0).wait(1).to({x:89.5,y:255.5,alpha:0.284},0).wait(1).to({x:88.5,y:255.4,alpha:0.263},0).wait(1).to({x:87.4,y:255.3,alpha:0.243},0).wait(1).to({x:86.4,y:255.2,alpha:0.223},0).wait(1).to({x:85.4,y:255.1,alpha:0.202},0).wait(1).to({x:84.4,alpha:0.183},0).wait(1).to({x:83.5,y:255,alpha:0.163},0).wait(1).to({x:82.5,y:254.9,alpha:0.144},0).wait(1).to({x:81.6,y:254.8,alpha:0.126},0).wait(1).to({x:80.7,y:254.7,alpha:0.109},0).wait(1).to({x:79.9,y:254.6,alpha:0.092},0).wait(1).to({scaleY:0.66,x:79.1,alpha:0.076},0).wait(1).to({x:78.3,y:254.5,alpha:0.061},0).wait(1).to({x:77.6,y:254.4,alpha:0.047},0).wait(1).to({x:77,alpha:0.034},0).wait(1).to({x:76.4,y:254.3,alpha:0.023},0).wait(1).to({x:76,alpha:0.014},0).wait(1).to({x:75.6,y:254.2,alpha:0.006},0).wait(1).to({x:75.4,alpha:0.002},0).wait(1).to({regY:386.1,x:75.3,y:254.3,alpha:0},0).to({_off:true},1).wait(173).to({_off:false},0).wait(1).to({regY:386,y:254.2,alpha:0.001},0).wait(1).to({x:75.5,alpha:0.003},0).wait(1).to({x:75.7,alpha:0.007},0).wait(1).to({x:75.9,y:254.3,alpha:0.013},0).wait(1).to({x:76.3,alpha:0.02},0).wait(1).to({x:76.7,alpha:0.028},0).wait(1).to({x:77.1,y:254.4,alpha:0.037},0).wait(1).to({x:77.6,alpha:0.047},0).wait(1).to({x:78.2,y:254.5,alpha:0.058},0).wait(1).to({x:78.8,y:254.6,alpha:0.07},0).wait(1).to({scaleY:0.66,x:79.5,alpha:0.083},0).wait(1).to({x:80.1,alpha:0.097},0).wait(1).to({x:80.9,y:254.7,alpha:0.112},0).wait(1).to({x:81.6,y:254.8,alpha:0.127},0).wait(1).to({x:82.4,y:254.9,alpha:0.143},0).wait(1).to({x:83.3,alpha:0.159},0).wait(1).to({x:84.1,y:255,alpha:0.176},0).wait(1).to({x:85,y:255.1,alpha:0.194},0).wait(1).to({x:85.9,y:255.2,alpha:0.212},0).wait(1).to({x:86.8,y:255.3,alpha:0.231},0).wait(1).to({x:87.8,alpha:0.25},0).wait(1).to({x:88.7,y:255.4,alpha:0.269},0).wait(1).to({x:89.7,y:255.5,alpha:0.289},0).wait(1).to({x:90.7,y:255.6,alpha:0.309},0).wait(1).to({x:91.7,y:255.7,alpha:0.329},0).wait(1).to({x:92.7,y:255.8,alpha:0.349},0).wait(1).to({x:93.8,y:255.9,alpha:0.37},0).wait(1).to({x:94.8,y:256,alpha:0.391},0).wait(1).to({x:95.9,y:256.1,alpha:0.412},0).wait(1).to({x:96.9,y:256.2,alpha:0.433},0).wait(1).to({x:98,y:256.3,alpha:0.454},0).wait(1).to({x:99,y:256.4,alpha:0.475},0).wait(1).to({x:100.1,y:256.5,alpha:0.496},0).wait(1).to({x:101.1,alpha:0.517},0).wait(1).to({x:102.1,y:256.6,alpha:0.537},0).wait(1).to({x:103.2,y:256.7,alpha:0.558},0).wait(1).to({x:104.2,y:256.8,alpha:0.578},0).wait(1).to({x:105.2,y:256.9,alpha:0.598},0).wait(1).to({x:106.2,y:257,alpha:0.618},0).wait(1).to({x:107.1,y:257.1,alpha:0.637},0).wait(1).to({x:108.1,y:257.2,alpha:0.656},0).wait(1).to({x:109,y:257.3,alpha:0.675},0).wait(1).to({x:109.9,y:257.4,alpha:0.692},0).wait(1).to({x:110.7,alpha:0.709},0).wait(1).to({x:111.5,y:257.5,alpha:0.725},0).wait(1).to({x:112.3,alpha:0.74},0).wait(1).to({x:113,y:257.6,alpha:0.754},0).wait(1).to({x:113.6,y:257.7,alpha:0.767},0).wait(1).to({x:114.2,alpha:0.778},0).wait(1).to({x:114.6,y:257.8,alpha:0.787},0).wait(1).to({x:115,alpha:0.794},0).wait(1).to({x:115.2,alpha:0.799},0).wait(1).to({regY:386.1,x:115.3,y:257.9,alpha:0.801},0).to({_off:true},35).wait(30).to({_off:false,scaleY:0.66,x:75.3,y:254.3,alpha:0},0).wait(1).to({regY:386,y:254.2,alpha:0.001},0).wait(1).to({x:75.5,alpha:0.003},0).wait(1).to({x:75.7,alpha:0.007},0).wait(1).to({x:75.9,y:254.3,alpha:0.013},0).wait(1).to({x:76.3,alpha:0.02},0).wait(1).to({x:76.7,alpha:0.028},0).wait(1).to({x:77.1,y:254.4,alpha:0.037},0).wait(1).to({x:77.6,alpha:0.047},0).wait(1).to({x:78.2,y:254.5,alpha:0.058},0).wait(1).to({x:78.8,y:254.6,alpha:0.07},0).wait(1).to({scaleY:0.66,x:79.5,alpha:0.083},0).wait(1).to({x:80.1,alpha:0.097},0).wait(1).to({x:80.9,y:254.7,alpha:0.112},0).wait(1).to({x:81.6,y:254.8,alpha:0.127},0).wait(1).to({x:82.4,y:254.9,alpha:0.143},0).wait(1).to({x:83.3,alpha:0.159},0).wait(1).to({x:84.1,y:255,alpha:0.176},0).wait(1).to({x:85,y:255.1,alpha:0.194},0).wait(1).to({x:85.9,y:255.2,alpha:0.212},0).wait(1).to({x:86.8,y:255.3,alpha:0.231},0).wait(1).to({x:87.8,alpha:0.25},0).wait(1).to({x:88.7,y:255.4,alpha:0.269},0).wait(1).to({x:89.7,y:255.5,alpha:0.289},0).wait(1).to({x:90.7,y:255.6,alpha:0.309},0).wait(1).to({x:91.7,y:255.7,alpha:0.329},0).wait(1).to({x:92.7,y:255.8,alpha:0.349},0).wait(1).to({x:93.8,y:255.9,alpha:0.37},0).wait(1).to({x:94.8,y:256,alpha:0.391},0).wait(1).to({x:95.9,y:256.1,alpha:0.412},0).wait(1).to({x:96.9,y:256.2,alpha:0.433},0).wait(1).to({x:98,y:256.3,alpha:0.454},0).wait(1).to({x:99,y:256.4,alpha:0.475},0).wait(1).to({x:100.1,y:256.5,alpha:0.496},0).wait(1).to({x:101.1,alpha:0.517},0).wait(1).to({x:102.1,y:256.6,alpha:0.537},0).wait(1).to({x:103.2,y:256.7,alpha:0.558},0).wait(1).to({x:104.2,y:256.8,alpha:0.578},0).wait(1).to({x:105.2,y:256.9,alpha:0.598},0).wait(1).to({x:106.2,y:257,alpha:0.618},0).wait(1).to({x:107.1,y:257.1,alpha:0.637},0).wait(1).to({x:108.1,y:257.2,alpha:0.656},0).wait(1).to({x:109,y:257.3,alpha:0.675},0).wait(1).to({x:109.9,y:257.4,alpha:0.692},0).wait(1).to({x:110.7,alpha:0.709},0).wait(1).to({x:111.5,y:257.5,alpha:0.725},0).wait(1).to({x:112.3,alpha:0.74},0).wait(1).to({x:113,y:257.6,alpha:0.754},0).wait(1).to({x:113.6,y:257.7,alpha:0.767},0).wait(1).to({x:114.2,alpha:0.778},0).wait(1).to({x:114.6,y:257.8,alpha:0.787},0).wait(1).to({x:115,alpha:0.794},0).wait(1).to({x:115.2,alpha:0.799},0).wait(1).to({regY:386.1,x:115.3,y:257.9,alpha:0.801},0).wait(1));

	// mc_back_to_hall_hitarea
	this.mc_back_to_hall_hitarea = new lib.back_to_hall_area_button();
	this.mc_back_to_hall_hitarea.setTransform(111.8,160,1,1,0,0,0,700,378);

	this.timeline.addTween(cjs.Tween.get(this.mc_back_to_hall_hitarea).wait(517));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-581.4,-211,1393.2,745.9);


// stage content:
(lib.loose_lipped = function() {
	this.initialize();

	// AColonel_loose_lips
	this.instance = new lib.AColonel_loose_lips();
	this.instance.setTransform(587,215);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(705.6,383,1393.2,745.9);

})(lib.loose_lipped = lib.loose_lipped||{}, images.loose_lipped = images.loose_lipped||{}, createjs = createjs||{});
var lib, images, createjs;
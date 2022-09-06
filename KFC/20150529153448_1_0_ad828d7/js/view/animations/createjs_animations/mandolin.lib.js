(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 758,
	fps: 30,
	color: "#000000",
	manifest: [
		{src:"images/_8bit_hide1.png", id:"_8bit_hide1"},
		{src:"images/_8bit_hide2.png", id:"_8bit_hide2"},
		{src:"images/_8bit_hide3.png", id:"_8bit_hide3"},
		{src:"images/_8bit_part1.png", id:"_8bit_part1"},
		{src:"images/_8bit_part2.png", id:"_8bit_part2"},
		{src:"images/_8bit_part3.png", id:"_8bit_part3"},
		{src:"images/_8bit_part4.png", id:"_8bit_part4"},
		{src:"images/_8bit_part5.png", id:"_8bit_part5"},
		{src:"images/_8bit_part5_1.png", id:"_8bit_part5_1"},
		{src:"images/_8bit_part6.png", id:"_8bit_part6"},
		{src:"images/_8bit_part7.png", id:"_8bit_part7"},
		{src:"images/_8bit_part8.png", id:"_8bit_part8"},
		{src:"images/_8bit_part9.png", id:"_8bit_part9"},
		{src:"images/_8bit_plaque.png", id:"_8bit_plaque"},
		{src:"images/_8bit_stand.png", id:"_8bit_stand"},
		{src:"images/_8bitbod.png", id:"_8bitbod"},
		{src:"images/backCurtain1.png", id:"backCurtain1"},
		{src:"images/backCurtain_d.png", id:"backCurtain_d"},
		{src:"images/Bitmap9.jpg", id:"Bitmap9"},
		{src:"images/bucketChicken.png", id:"bucketChicken"},
		{src:"images/buttonpixel.png", id:"buttonpixel"},
		{src:"images/c1.png", id:"c1"},
		{src:"images/c2.png", id:"c2"},
		{src:"images/c4.png", id:"c4"},
		{src:"images/c5.png", id:"c5"},
		{src:"images/c6.png", id:"c6"},
		{src:"images/curtain_shad.png", id:"curtain_shad"},
		{src:"images/departed_bust.png", id:"departed_bust"},
		{src:"images/departed_bust_head.png", id:"departed_bust_head"},
		{src:"images/departed_goatee.png", id:"departed_goatee"},
		{src:"images/departed_head_d.png", id:"departed_head_d"},
		{src:"images/departed_mo.png", id:"departed_mo"},
		{src:"images/departed_pillar.png", id:"departed_pillar"},
		{src:"images/departed_pillar_d.png", id:"departed_pillar_d"},
		{src:"images/Departed_Plaque.png", id:"Departed_Plaque"},
		{src:"images/departed_plaque_d.png", id:"departed_plaque_d"},
		{src:"images/departed_platform.png", id:"departed_platform"},
		{src:"images/departed_platform_d.png", id:"departed_platform_d"},
		{src:"images/departedHead.png", id:"departedHead"},
		{src:"images/departedPillar.png", id:"departedPillar"},
		{src:"images/early_eyel.png", id:"early_eyel"},
		{src:"images/early_eyer.png", id:"early_eyer"},
		{src:"images/early_face2.png", id:"early_face2"},
		{src:"images/early_face3.png", id:"early_face3"},
		{src:"images/early_face4.png", id:"early_face4"},
		{src:"images/early_head1.png", id:"early_head1"},
		{src:"images/early_head.png", id:"early_head"},
		{src:"images/early_head_d.png", id:"early_head_d"},
		{src:"images/early_head_d_1.png", id:"early_head_d_1"},
		{src:"images/early_head_d_2.png", id:"early_head_d_2"},
		{src:"images/early_l_arm_down.png", id:"early_l_arm_down"},
		{src:"images/early_l_arm_down_d.png", id:"early_l_arm_down_d"},
		{src:"images/early_l_hand.png", id:"early_l_hand"},
		{src:"images/early_l_hand_d.png", id:"early_l_hand_d"},
		{src:"images/early_lids.png", id:"early_lids"},
		{src:"images/early_neck.png", id:"early_neck"},
		{src:"images/early_neck_d.png", id:"early_neck_d"},
		{src:"images/early_pants1.png", id:"early_pants1"},
		{src:"images/early_pants_d.png", id:"early_pants_d"},
		{src:"images/early_plaque.png", id:"early_plaque"},
		{src:"images/early_platform.png", id:"early_platform"},
		{src:"images/early_r_forearm.png", id:"early_r_forearm"},
		{src:"images/early_r_forearm_d.png", id:"early_r_forearm_d"},
		{src:"images/early_r_hand.png", id:"early_r_hand"},
		{src:"images/early_r_hand_d.png", id:"early_r_hand_d"},
		{src:"images/early_r_upperarm.png", id:"early_r_upperarm"},
		{src:"images/early_r_upperarm_d.png", id:"early_r_upperarm_d"},
		{src:"images/early_shoes.png", id:"early_shoes"},
		{src:"images/early_shoes_d.png", id:"early_shoes_d"},
		{src:"images/early_vest.png", id:"early_vest"},
		{src:"images/early_vest_d.png", id:"early_vest_d"},
		{src:"images/edgeshad.png", id:"edgeshad"},
		{src:"images/embedButt.png", id:"embedButt"},
		{src:"images/gamesColonel.png", id:"gamesColonel"},
		{src:"images/gamesPlaque.png", id:"gamesPlaque"},
		{src:"images/gun_face1.png", id:"gun_face1"},
		{src:"images/gun_face2.png", id:"gun_face2"},
		{src:"images/gun_face3.png", id:"gun_face3"},
		{src:"images/gun_face4.png", id:"gun_face4"},
		{src:"images/gunfight_head.png", id:"gunfight_head"},
		{src:"images/gunfight_head_1.png", id:"gunfight_head_1"},
		{src:"images/gunfight_head_d.png", id:"gunfight_head_d"},
		{src:"images/gunfight_head_d_1.png", id:"gunfight_head_d_1"},
		{src:"images/gunfight_plaque.png", id:"gunfight_plaque"},
		{src:"images/gunfight_platform.png", id:"gunfight_platform"},
		{src:"images/gunfight_shared_upperleft.png", id:"gunfight_shared_upperleft"},
		{src:"images/hall_bucket.png", id:"hall_bucket"},
		{src:"images/hall_bucket_d.png", id:"hall_bucket_d"},
		{src:"images/hall_chicken_d.png", id:"hall_chicken_d"},
		{src:"images/hall_light.png", id:"hall_light"},
		{src:"images/head.png", id:"head"},
		{src:"images/line_1.png", id:"line_1"},
		{src:"images/line_1_red.png", id:"line_1_red"},
		{src:"images/line_2.png", id:"line_2"},
		{src:"images/line_2_red.png", id:"line_2_red"},
		{src:"images/line_3.png", id:"line_3"},
		{src:"images/line_3_red.png", id:"line_3_red"},
		{src:"images/line_4.png", id:"line_4"},
		{src:"images/line_4_red.png", id:"line_4_red"},
		{src:"images/line_5.png", id:"line_5"},
		{src:"images/line_5_red.png", id:"line_5_red"},
		{src:"images/line_6.png", id:"line_6"},
		{src:"images/line_6_red.png", id:"line_6_red"},
		{src:"images/line_7.png", id:"line_7"},
		{src:"images/line_7_red.png", id:"line_7_red"},
		{src:"images/line_8.png", id:"line_8"},
		{src:"images/line_8_red.png", id:"line_8_red"},
		{src:"images/ll_eye_L.png", id:"ll_eye_L"},
		{src:"images/ll_eye_L_d.png", id:"ll_eye_L_d"},
		{src:"images/ll_eye_R.png", id:"ll_eye_R"},
		{src:"images/ll_eye_R_d.png", id:"ll_eye_R_d"},
		{src:"images/ll_head_all.png", id:"ll_head_all"},
		{src:"images/ll_head_all_d.png", id:"ll_head_all_d"},
		{src:"images/ll_l_arm.png", id:"ll_l_arm"},
		{src:"images/ll_l_arm_d.png", id:"ll_l_arm_d"},
		{src:"images/ll_l_forearm.png", id:"ll_l_forearm"},
		{src:"images/ll_l_forearm_d.png", id:"ll_l_forearm_d"},
		{src:"images/ll_l_forearm_d_1.png", id:"ll_l_forearm_d_1"},
		{src:"images/ll_l_hand_all.png", id:"ll_l_hand_all"},
		{src:"images/ll_l_hand_all_d.png", id:"ll_l_hand_all_d"},
		{src:"images/ll_legs.png", id:"ll_legs"},
		{src:"images/ll_legs_d.png", id:"ll_legs_d"},
		{src:"images/ll_plinth.png", id:"ll_plinth"},
		{src:"images/ll_plinth_1.png", id:"ll_plinth_1"},
		{src:"images/ll_plinth_d.png", id:"ll_plinth_d"},
		{src:"images/ll_r_arm_all.png", id:"ll_r_arm_all"},
		{src:"images/ll_r_arm_all_d.png", id:"ll_r_arm_all_d"},
		{src:"images/ll_s_board.png", id:"ll_s_board"},
		{src:"images/ll_s_plaque_type_1.png", id:"ll_s_plaque_type_1"},
		{src:"images/ll_s_pole.png", id:"ll_s_pole"},
		{src:"images/ll_s_shadow_colonelz.png", id:"ll_s_shadow_colonelz"},
		{src:"images/ll_tie_all.png", id:"ll_tie_all"},
		{src:"images/ll_tie_all_d.png", id:"ll_tie_all_d"},
		{src:"images/ll_torso.png", id:"ll_torso"},
		{src:"images/ll_torso_d.png", id:"ll_torso_d"},
		{src:"images/ll_torso_shadow.png", id:"ll_torso_shadow"},
		{src:"images/ll_torso_shadow_d.png", id:"ll_torso_shadow_d"},
		{src:"images/looselipPlaque.png", id:"looselipPlaque"},
		{src:"images/looseLipsColonel.png", id:"looseLipsColonel"},
		{src:"images/mandnolin_legs.png", id:"mandnolin_legs"},
		{src:"images/mandnolin_torso.png", id:"mandnolin_torso"},
		{src:"images/mando_feet.png", id:"mando_feet"},
		{src:"images/mando_jacket.png", id:"mando_jacket"},
		{src:"images/mando_l_cuff.png", id:"mando_l_cuff"},
		{src:"images/mando_l_cuff_1.png", id:"mando_l_cuff_1"},
		{src:"images/mando_l_forearm.png", id:"mando_l_forearm"},
		{src:"images/mando_larm.png", id:"mando_larm"},
		{src:"images/mando_left_hand.png", id:"mando_left_hand"},
		{src:"images/mando_mandolin.png", id:"mando_mandolin"},
		{src:"images/mando_night_bg.jpg", id:"mando_night_bg"},
		{src:"images/mando_pants.png", id:"mando_pants"},
		{src:"images/mando_pants_shad.png", id:"mando_pants_shad"},
		{src:"images/mando_plaque.png", id:"mando_plaque"},
		{src:"images/mando_platform.png", id:"mando_platform"},
		{src:"images/mando_r_forearm.png", id:"mando_r_forearm"},
		{src:"images/mando_r_hand.png", id:"mando_r_hand"},
		{src:"images/mando_rarm_1.png", id:"mando_rarm_1"},
		{src:"images/mando_s_eyel.png", id:"mando_s_eyel"},
		{src:"images/mando_s_eyer.png", id:"mando_s_eyer"},
		{src:"images/mando_s_face.png", id:"mando_s_face"},
		{src:"images/mando_s_face_side1.png", id:"mando_s_face_side1"},
		{src:"images/mando_s_face_side2.png", id:"mando_s_face_side2"},
		{src:"images/mando_s_feet.png", id:"mando_s_feet"},
		{src:"images/mando_s_head.png", id:"mando_s_head"},
		{src:"images/mando_s_head_1.png", id:"mando_s_head_1"},
		{src:"images/mando_s_head_neck.png", id:"mando_s_head_neck"},
		{src:"images/mando_s_jacketback_bot.png", id:"mando_s_jacketback_bot"},
		{src:"images/mando_s_jacketback_top.png", id:"mando_s_jacketback_top"},
		{src:"images/mando_s_jacketfront_bot.png", id:"mando_s_jacketfront_bot"},
		{src:"images/mando_s_jacketfront_top.png", id:"mando_s_jacketfront_top"},
		{src:"images/mando_s_jaw.png", id:"mando_s_jaw"},
		{src:"images/mando_s_l_cuff.png", id:"mando_s_l_cuff"},
		{src:"images/mando_s_l_cuff_1.png", id:"mando_s_l_cuff_1"},
		{src:"images/mando_s_l_finger1.png", id:"mando_s_l_finger1"},
		{src:"images/mando_s_l_finger2.png", id:"mando_s_l_finger2"},
		{src:"images/mando_s_l_finger3.png", id:"mando_s_l_finger3"},
		{src:"images/mando_s_l_finger4.png", id:"mando_s_l_finger4"},
		{src:"images/mando_s_l_forearm.png", id:"mando_s_l_forearm"},
		{src:"images/mando_s_larm.png", id:"mando_s_larm"},
		{src:"images/mando_s_left_hand.png", id:"mando_s_left_hand"},
		{src:"images/mando_s_left_hand_1.png", id:"mando_s_left_hand_1"},
		{src:"images/mando_s_lids.png", id:"mando_s_lids"},
		{src:"images/mando_s_mandolin.png", id:"mando_s_mandolin"},
		{src:"images/mando_s_mouth1.png", id:"mando_s_mouth1"},
		{src:"images/mando_s_mouth2.png", id:"mando_s_mouth2"},
		{src:"images/mando_s_mouth3.png", id:"mando_s_mouth3"},
		{src:"images/mando_s_pants.png", id:"mando_s_pants"},
		{src:"images/mando_s_pants_shad.png", id:"mando_s_pants_shad"},
		{src:"images/mando_s_plaque.png", id:"mando_s_plaque"},
		{src:"images/mando_s_platform.png", id:"mando_s_platform"},
		{src:"images/mando_s_r_forearm.png", id:"mando_s_r_forearm"},
		{src:"images/mando_s_r_hand.png", id:"mando_s_r_hand"},
		{src:"images/mando_s_rarm.png", id:"mando_s_rarm"},
		{src:"images/mando_s_rarm_1.png", id:"mando_s_rarm_1"},
		{src:"images/mando_s_shad.png", id:"mando_s_shad"},
		{src:"images/mando_s_tie.png", id:"mando_s_tie"},
		{src:"images/mando_shad.png", id:"mando_shad"},
		{src:"images/mando_stars.png", id:"mando_stars"},
		{src:"images/mando_tie.png", id:"mando_tie"},
		{src:"images/mandolinBG.jpg", id:"mandolinBG"},
		{src:"images/mandolinPlaque.png", id:"mandolinPlaque"},
		{src:"images/mouth.png", id:"mouth"},
		{src:"images/shared_gunfight_eyeL.png", id:"shared_gunfight_eyeL"},
		{src:"images/shared_gunfight_eyeR.png", id:"shared_gunfight_eyeR"},
		{src:"images/shared_gunfight_left_forearm.png", id:"shared_gunfight_left_forearm"},
		{src:"images/shared_gunfight_left_forearm_D.png", id:"shared_gunfight_left_forearm_D"},
		{src:"images/shared_gunfight_left_hand.png", id:"shared_gunfight_left_hand"},
		{src:"images/shared_gunfight_left_hand_D.png", id:"shared_gunfight_left_hand_D"},
		{src:"images/shared_gunfight_leftupper_arm.png", id:"shared_gunfight_leftupper_arm"},
		{src:"images/shared_gunfight_leftupper_arm_D.png", id:"shared_gunfight_leftupper_arm_D"},
		{src:"images/shared_gunfight_lid.png", id:"shared_gunfight_lid"},
		{src:"images/shared_gunfight_neck.png", id:"shared_gunfight_neck"},
		{src:"images/shared_gunfight_neck_d.png", id:"shared_gunfight_neck_d"},
		{src:"images/shared_gunfight_pants.png", id:"shared_gunfight_pants"},
		{src:"images/shared_gunfight_pants_D.png", id:"shared_gunfight_pants_D"},
		{src:"images/shared_gunfight_right_forearm.png", id:"shared_gunfight_right_forearm"},
		{src:"images/shared_gunfight_right_forearm_D.png", id:"shared_gunfight_right_forearm_D"},
		{src:"images/shared_gunfight_right_hand.png", id:"shared_gunfight_right_hand"},
		{src:"images/shared_gunfight_right_hand_D.png", id:"shared_gunfight_right_hand_D"},
		{src:"images/shared_gunfight_right_upper_arm.png", id:"shared_gunfight_right_upper_arm"},
		{src:"images/shared_gunfight_right_upper_arm_D.png", id:"shared_gunfight_right_upper_arm_D"},
		{src:"images/shared_gunfight_right_upperarm.png", id:"shared_gunfight_right_upperarm"},
		{src:"images/shared_gunfight_shoes.png", id:"shared_gunfight_shoes"},
		{src:"images/shared_gunfight_shoes_D.png", id:"shared_gunfight_shoes_D"},
		{src:"images/shared_gunfight_torso.png", id:"shared_gunfight_torso"},
		{src:"images/shared_gunfight_torso_D.png", id:"shared_gunfight_torso_D"},
		{src:"images/tuninglids.png", id:"tuninglids"},
		{src:"sounds/mandolin_song.mp3", id:"mandolin_song"},
		{src:"sounds/mandolin_tuning.mp3", id:"mandolin_tuning"},
		{src:"sounds/random20_encoreWade.mp3", id:"random20_encoreWade"}
	]
};



// symbols:



(lib._8bit_hide1 = function() {
	this.initialize(img._8bit_hide1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,490);


(lib._8bit_hide2 = function() {
	this.initialize(img._8bit_hide2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,409);


(lib._8bit_hide3 = function() {
	this.initialize(img._8bit_hide3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib._8bit_part1 = function() {
	this.initialize(img._8bit_part1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,173,67);


(lib._8bit_part2 = function() {
	this.initialize(img._8bit_part2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,48);


(lib._8bit_part3 = function() {
	this.initialize(img._8bit_part3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,99,3);


(lib._8bit_part4 = function() {
	this.initialize(img._8bit_part4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,3);


(lib._8bit_part5 = function() {
	this.initialize(img._8bit_part5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,3);


(lib._8bit_part5_1 = function() {
	this.initialize(img._8bit_part5_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,3);


(lib._8bit_part6 = function() {
	this.initialize(img._8bit_part6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,3);


(lib._8bit_part7 = function() {
	this.initialize(img._8bit_part7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,3);


(lib._8bit_part8 = function() {
	this.initialize(img._8bit_part8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,3);


(lib._8bit_part9 = function() {
	this.initialize(img._8bit_part9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,3);


(lib._8bit_plaque = function() {
	this.initialize(img._8bit_plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib._8bit_stand = function() {
	this.initialize(img._8bit_stand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,33);


(lib._8bitbod = function() {
	this.initialize(img._8bitbod);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,169,443);


(lib.backCurtain1 = function() {
	this.initialize(img.backCurtain1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1401,628);


(lib.backCurtain_d = function() {
	this.initialize(img.backCurtain_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,126);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,53);


(lib.bucketChicken = function() {
	this.initialize(img.bucketChicken);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,587,129);


(lib.buttonpixel = function() {
	this.initialize(img.buttonpixel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.c1 = function() {
	this.initialize(img.c1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,197);


(lib.c2 = function() {
	this.initialize(img.c2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,203);


(lib.c4 = function() {
	this.initialize(img.c4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,65,204);


(lib.c5 = function() {
	this.initialize(img.c5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,205);


(lib.c6 = function() {
	this.initialize(img.c6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,191);


(lib.curtain_shad = function() {
	this.initialize(img.curtain_shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,90);


(lib.departed_bust = function() {
	this.initialize(img.departed_bust);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,138);


(lib.departed_bust_head = function() {
	this.initialize(img.departed_bust_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,144);


(lib.departed_goatee = function() {
	this.initialize(img.departed_goatee);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,26);


(lib.departed_head_d = function() {
	this.initialize(img.departed_head_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,144);


(lib.departed_mo = function() {
	this.initialize(img.departed_mo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,10);


(lib.departed_pillar = function() {
	this.initialize(img.departed_pillar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,422);


(lib.departed_pillar_d = function() {
	this.initialize(img.departed_pillar_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,422);


(lib.Departed_Plaque = function() {
	this.initialize(img.Departed_Plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,35);


(lib.departed_plaque_d = function() {
	this.initialize(img.departed_plaque_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,35);


(lib.departed_platform = function() {
	this.initialize(img.departed_platform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,30);


(lib.departed_platform_d = function() {
	this.initialize(img.departed_platform_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,152,30);


(lib.departedHead = function() {
	this.initialize(img.departedHead);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,126);


(lib.departedPillar = function() {
	this.initialize(img.departedPillar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,273);


(lib.early_eyel = function() {
	this.initialize(img.early_eyel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_eyer = function() {
	this.initialize(img.early_eyer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_face2 = function() {
	this.initialize(img.early_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,65);


(lib.early_face3 = function() {
	this.initialize(img.early_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,42);


(lib.early_face4 = function() {
	this.initialize(img.early_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,20);


(lib.early_head1 = function() {
	this.initialize(img.early_head1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_head = function() {
	this.initialize(img.early_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,76);


(lib.early_head_d = function() {
	this.initialize(img.early_head_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_head_d_1 = function() {
	this.initialize(img.early_head_d_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,91);


(lib.early_head_d_2 = function() {
	this.initialize(img.early_head_d_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_l_arm_down = function() {
	this.initialize(img.early_l_arm_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.early_l_arm_down_d = function() {
	this.initialize(img.early_l_arm_down_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.early_l_hand = function() {
	this.initialize(img.early_l_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_l_hand_d = function() {
	this.initialize(img.early_l_hand_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_lids = function() {
	this.initialize(img.early_lids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,9);


(lib.early_neck = function() {
	this.initialize(img.early_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,34);


(lib.early_neck_d = function() {
	this.initialize(img.early_neck_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,34);


(lib.early_pants1 = function() {
	this.initialize(img.early_pants1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,220);


(lib.early_pants_d = function() {
	this.initialize(img.early_pants_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,106,220);


(lib.early_plaque = function() {
	this.initialize(img.early_plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.early_platform = function() {
	this.initialize(img.early_platform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,32);


(lib.early_r_forearm = function() {
	this.initialize(img.early_r_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,66);


(lib.early_r_forearm_d = function() {
	this.initialize(img.early_r_forearm_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,66);


(lib.early_r_hand = function() {
	this.initialize(img.early_r_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_hand_d = function() {
	this.initialize(img.early_r_hand_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_upperarm = function() {
	this.initialize(img.early_r_upperarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_r_upperarm_d = function() {
	this.initialize(img.early_r_upperarm_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_shoes = function() {
	this.initialize(img.early_shoes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,33);


(lib.early_shoes_d = function() {
	this.initialize(img.early_shoes_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,35);


(lib.early_vest = function() {
	this.initialize(img.early_vest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,168);


(lib.early_vest_d = function() {
	this.initialize(img.early_vest_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,168);


(lib.edgeshad = function() {
	this.initialize(img.edgeshad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1434,60);


(lib.embedButt = function() {
	this.initialize(img.embedButt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,34);


(lib.gamesColonel = function() {
	this.initialize(img.gamesColonel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,498);


(lib.gamesPlaque = function() {
	this.initialize(img.gamesPlaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.gun_face1 = function() {
	this.initialize(img.gun_face1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,67);


(lib.gun_face2 = function() {
	this.initialize(img.gun_face2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,60);


(lib.gun_face3 = function() {
	this.initialize(img.gun_face3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,37);


(lib.gun_face4 = function() {
	this.initialize(img.gun_face4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,14);


(lib.gunfight_head = function() {
	this.initialize(img.gunfight_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.gunfight_head_1 = function() {
	this.initialize(img.gunfight_head_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,98);


(lib.gunfight_head_d = function() {
	this.initialize(img.gunfight_head_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.gunfight_head_d_1 = function() {
	this.initialize(img.gunfight_head_d_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.gunfight_plaque = function() {
	this.initialize(img.gunfight_plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.gunfight_platform = function() {
	this.initialize(img.gunfight_platform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,34);


(lib.gunfight_shared_upperleft = function() {
	this.initialize(img.gunfight_shared_upperleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,96);


(lib.hall_bucket = function() {
	this.initialize(img.hall_bucket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.hall_bucket_d = function() {
	this.initialize(img.hall_bucket_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.hall_chicken_d = function() {
	this.initialize(img.hall_chicken_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,587,134);


(lib.hall_light = function() {
	this.initialize(img.hall_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,404);


(lib.head = function() {
	this.initialize(img.head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,239);


(lib.line_1 = function() {
	this.initialize(img.line_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,25);


(lib.line_1_red = function() {
	this.initialize(img.line_1_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,254,25);


(lib.line_2 = function() {
	this.initialize(img.line_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,30);


(lib.line_2_red = function() {
	this.initialize(img.line_2_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,299,30);


(lib.line_3 = function() {
	this.initialize(img.line_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,32);


(lib.line_3_red = function() {
	this.initialize(img.line_3_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,407,32);


(lib.line_4 = function() {
	this.initialize(img.line_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,24);


(lib.line_4_red = function() {
	this.initialize(img.line_4_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,253,24);


(lib.line_5 = function() {
	this.initialize(img.line_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,30);


(lib.line_5_red = function() {
	this.initialize(img.line_5_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,220,30);


(lib.line_6 = function() {
	this.initialize(img.line_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,30);


(lib.line_6_red = function() {
	this.initialize(img.line_6_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,243,30);


(lib.line_7 = function() {
	this.initialize(img.line_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,30);


(lib.line_7_red = function() {
	this.initialize(img.line_7_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,688,30);


(lib.line_8 = function() {
	this.initialize(img.line_8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,30);


(lib.line_8_red = function() {
	this.initialize(img.line_8_red);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,408,30);


(lib.ll_eye_L = function() {
	this.initialize(img.ll_eye_L);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_eye_L_d = function() {
	this.initialize(img.ll_eye_L_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_eye_R = function() {
	this.initialize(img.ll_eye_R);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_eye_R_d = function() {
	this.initialize(img.ll_eye_R_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_head_all = function() {
	this.initialize(img.ll_head_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,89);


(lib.ll_head_all_d = function() {
	this.initialize(img.ll_head_all_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,89);


(lib.ll_l_arm = function() {
	this.initialize(img.ll_l_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,122);


(lib.ll_l_arm_d = function() {
	this.initialize(img.ll_l_arm_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,122);


(lib.ll_l_forearm = function() {
	this.initialize(img.ll_l_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,91);


(lib.ll_l_forearm_d = function() {
	this.initialize(img.ll_l_forearm_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,91);


(lib.ll_l_forearm_d_1 = function() {
	this.initialize(img.ll_l_forearm_d_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,91);


(lib.ll_l_hand_all = function() {
	this.initialize(img.ll_l_hand_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,250);


(lib.ll_l_hand_all_d = function() {
	this.initialize(img.ll_l_hand_all_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,250);


(lib.ll_legs = function() {
	this.initialize(img.ll_legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,233);


(lib.ll_legs_d = function() {
	this.initialize(img.ll_legs_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,233);


(lib.ll_plinth = function() {
	this.initialize(img.ll_plinth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,34);


(lib.ll_plinth_1 = function() {
	this.initialize(img.ll_plinth_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,38);


(lib.ll_plinth_d = function() {
	this.initialize(img.ll_plinth_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,34);


(lib.ll_r_arm_all = function() {
	this.initialize(img.ll_r_arm_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,122);


(lib.ll_r_arm_all_d = function() {
	this.initialize(img.ll_r_arm_all_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,85,122);


(lib.ll_s_board = function() {
	this.initialize(img.ll_s_board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,272);


(lib.ll_s_plaque_type_1 = function() {
	this.initialize(img.ll_s_plaque_type_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,63);


(lib.ll_s_pole = function() {
	this.initialize(img.ll_s_pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,584);


(lib.ll_s_shadow_colonelz = function() {
	this.initialize(img.ll_s_shadow_colonelz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,350,772);


(lib.ll_tie_all = function() {
	this.initialize(img.ll_tie_all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,41);


(lib.ll_tie_all_d = function() {
	this.initialize(img.ll_tie_all_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,48,41);


(lib.ll_torso = function() {
	this.initialize(img.ll_torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,264);


(lib.ll_torso_d = function() {
	this.initialize(img.ll_torso_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,264);


(lib.ll_torso_shadow = function() {
	this.initialize(img.ll_torso_shadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.ll_torso_shadow_d = function() {
	this.initialize(img.ll_torso_shadow_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.looselipPlaque = function() {
	this.initialize(img.looselipPlaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,25);


(lib.looseLipsColonel = function() {
	this.initialize(img.looseLipsColonel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,494);


(lib.mandnolin_legs = function() {
	this.initialize(img.mandnolin_legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,251);


(lib.mandnolin_torso = function() {
	this.initialize(img.mandnolin_torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,230,292);


(lib.mando_feet = function() {
	this.initialize(img.mando_feet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,38);


(lib.mando_jacket = function() {
	this.initialize(img.mando_jacket);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,225);


(lib.mando_l_cuff = function() {
	this.initialize(img.mando_l_cuff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,47);


(lib.mando_l_cuff_1 = function() {
	this.initialize(img.mando_l_cuff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,19);


(lib.mando_l_forearm = function() {
	this.initialize(img.mando_l_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,75,46);


(lib.mando_larm = function() {
	this.initialize(img.mando_larm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,35,87);


(lib.mando_left_hand = function() {
	this.initialize(img.mando_left_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,44);


(lib.mando_mandolin = function() {
	this.initialize(img.mando_mandolin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170,128);


(lib.mando_night_bg = function() {
	this.initialize(img.mando_night_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1382,584);


(lib.mando_pants = function() {
	this.initialize(img.mando_pants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,191);


(lib.mando_pants_shad = function() {
	this.initialize(img.mando_pants_shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,16);


(lib.mando_plaque = function() {
	this.initialize(img.mando_plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,31);


(lib.mando_platform = function() {
	this.initialize(img.mando_platform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,36);


(lib.mando_r_forearm = function() {
	this.initialize(img.mando_r_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,81);


(lib.mando_r_hand = function() {
	this.initialize(img.mando_r_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,38);


(lib.mando_rarm_1 = function() {
	this.initialize(img.mando_rarm_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,59,79);


(lib.mando_s_eyel = function() {
	this.initialize(img.mando_s_eyel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,18);


(lib.mando_s_eyer = function() {
	this.initialize(img.mando_s_eyer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,18);


(lib.mando_s_face = function() {
	this.initialize(img.mando_s_face);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,82);


(lib.mando_s_face_side1 = function() {
	this.initialize(img.mando_s_face_side1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,49,101);


(lib.mando_s_face_side2 = function() {
	this.initialize(img.mando_s_face_side2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,88,138);


(lib.mando_s_feet = function() {
	this.initialize(img.mando_s_feet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,61);


(lib.mando_s_head = function() {
	this.initialize(img.mando_s_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,163,164);


(lib.mando_s_head_1 = function() {
	this.initialize(img.mando_s_head_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,138);


(lib.mando_s_head_neck = function() {
	this.initialize(img.mando_s_head_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,45);


(lib.mando_s_jacketback_bot = function() {
	this.initialize(img.mando_s_jacketback_bot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,142,184);


(lib.mando_s_jacketback_top = function() {
	this.initialize(img.mando_s_jacketback_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,216);


(lib.mando_s_jacketfront_bot = function() {
	this.initialize(img.mando_s_jacketfront_bot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,136,165);


(lib.mando_s_jacketfront_top = function() {
	this.initialize(img.mando_s_jacketfront_top);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,164,223);


(lib.mando_s_jaw = function() {
	this.initialize(img.mando_s_jaw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,56);


(lib.mando_s_l_cuff = function() {
	this.initialize(img.mando_s_l_cuff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,75);


(lib.mando_s_l_cuff_1 = function() {
	this.initialize(img.mando_s_l_cuff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,29);


(lib.mando_s_l_finger1 = function() {
	this.initialize(img.mando_s_l_finger1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.mando_s_l_finger2 = function() {
	this.initialize(img.mando_s_l_finger2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.mando_s_l_finger3 = function() {
	this.initialize(img.mando_s_l_finger3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,23);


(lib.mando_s_l_finger4 = function() {
	this.initialize(img.mando_s_l_finger4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,20);


(lib.mando_s_l_forearm = function() {
	this.initialize(img.mando_s_l_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,74);


(lib.mando_s_larm = function() {
	this.initialize(img.mando_s_larm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,140);


(lib.mando_s_left_hand = function() {
	this.initialize(img.mando_s_left_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,61);


(lib.mando_s_left_hand_1 = function() {
	this.initialize(img.mando_s_left_hand_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib.mando_s_lids = function() {
	this.initialize(img.mando_s_lids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,15);


(lib.mando_s_mandolin = function() {
	this.initialize(img.mando_s_mandolin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,274,203);


(lib.mando_s_mouth1 = function() {
	this.initialize(img.mando_s_mouth1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,15);


(lib.mando_s_mouth2 = function() {
	this.initialize(img.mando_s_mouth2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,17);


(lib.mando_s_mouth3 = function() {
	this.initialize(img.mando_s_mouth3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,18);


(lib.mando_s_pants = function() {
	this.initialize(img.mando_s_pants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,175,307);


(lib.mando_s_pants_shad = function() {
	this.initialize(img.mando_s_pants_shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,174,26);


(lib.mando_s_plaque = function() {
	this.initialize(img.mando_s_plaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,49);


(lib.mando_s_platform = function() {
	this.initialize(img.mando_s_platform);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,270,58);


(lib.mando_s_r_forearm = function() {
	this.initialize(img.mando_s_r_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,130);


(lib.mando_s_r_hand = function() {
	this.initialize(img.mando_s_r_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,73,63);


(lib.mando_s_rarm = function() {
	this.initialize(img.mando_s_rarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,126);


(lib.mando_s_rarm_1 = function() {
	this.initialize(img.mando_s_rarm_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,95,126);


(lib.mando_s_shad = function() {
	this.initialize(img.mando_s_shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,361,830);


(lib.mando_s_tie = function() {
	this.initialize(img.mando_s_tie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,58);


(lib.mando_shad = function() {
	this.initialize(img.mando_shad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,517);


(lib.mando_stars = function() {
	this.initialize(img.mando_stars);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1302,543);


(lib.mando_tie = function() {
	this.initialize(img.mando_tie);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,36);


(lib.mandolinBG = function() {
	this.initialize(img.mandolinBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1382,584);


(lib.mandolinPlaque = function() {
	this.initialize(img.mandolinPlaque);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,24);


(lib.mouth = function() {
	this.initialize(img.mouth);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,61);


(lib.shared_gunfight_eyeL = function() {
	this.initialize(img.shared_gunfight_eyeL);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.shared_gunfight_eyeR = function() {
	this.initialize(img.shared_gunfight_eyeR);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.shared_gunfight_left_forearm = function() {
	this.initialize(img.shared_gunfight_left_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,70);


(lib.shared_gunfight_left_forearm_D = function() {
	this.initialize(img.shared_gunfight_left_forearm_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,70);


(lib.shared_gunfight_left_hand = function() {
	this.initialize(img.shared_gunfight_left_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.shared_gunfight_left_hand_D = function() {
	this.initialize(img.shared_gunfight_left_hand_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.shared_gunfight_leftupper_arm = function() {
	this.initialize(img.shared_gunfight_leftupper_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,88);


(lib.shared_gunfight_leftupper_arm_D = function() {
	this.initialize(img.shared_gunfight_leftupper_arm_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,38,88);


(lib.shared_gunfight_lid = function() {
	this.initialize(img.shared_gunfight_lid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,6);


(lib.shared_gunfight_neck = function() {
	this.initialize(img.shared_gunfight_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,36);


(lib.shared_gunfight_neck_d = function() {
	this.initialize(img.shared_gunfight_neck_d);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,36);


(lib.shared_gunfight_pants = function() {
	this.initialize(img.shared_gunfight_pants);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,295);


(lib.shared_gunfight_pants_D = function() {
	this.initialize(img.shared_gunfight_pants_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,121,295);


(lib.shared_gunfight_right_forearm = function() {
	this.initialize(img.shared_gunfight_right_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,72);


(lib.shared_gunfight_right_forearm_D = function() {
	this.initialize(img.shared_gunfight_right_forearm_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,39,72);


(lib.shared_gunfight_right_hand = function() {
	this.initialize(img.shared_gunfight_right_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.shared_gunfight_right_hand_D = function() {
	this.initialize(img.shared_gunfight_right_hand_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.shared_gunfight_right_upper_arm = function() {
	this.initialize(img.shared_gunfight_right_upper_arm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,90);


(lib.shared_gunfight_right_upper_arm_D = function() {
	this.initialize(img.shared_gunfight_right_upper_arm_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,90);


(lib.shared_gunfight_right_upperarm = function() {
	this.initialize(img.shared_gunfight_right_upperarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,56,90);


(lib.shared_gunfight_shoes = function() {
	this.initialize(img.shared_gunfight_shoes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,72);


(lib.shared_gunfight_shoes_D = function() {
	this.initialize(img.shared_gunfight_shoes_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,72);


(lib.shared_gunfight_torso = function() {
	this.initialize(img.shared_gunfight_torso);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,141);


(lib.shared_gunfight_torso_D = function() {
	this.initialize(img.shared_gunfight_torso_D);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,109,141);


(lib.tuninglids = function() {
	this.initialize(img.tuninglids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,11);


(lib.tuninglins = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tuninglids();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,11);


(lib.shared_gunfight_torsoD = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_torso_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,109,141);


(lib.ll_s_shadow_colonelz_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_shadow_colonelz();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,350,772);


(lib.rollover_light_g = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hall_light();
	this.instance.setTransform(0,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,30,211,404);


(lib.nightStars = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_stars();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1302,543);


(lib.mando_s_face_side2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_face_side2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,88,138);


(lib.mando_s_face_side1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_face_side1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49,101);


(lib.mando_s_face_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_face();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,82);


(lib.mando_night_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_night_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1382,584);


(lib.mando_ll_pole = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.mando_ll_board = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.looseLips_hide = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75,205);


(lib.looseLips_encore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// Layer 1
	this.instance = new lib.c5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1).to({y:-15},0).wait(1).to({y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75,205);


(lib.karaokereddot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#E30428").beginStroke().moveTo(-5.4,5.4).curveTo(-7.6,3.2,-7.6,-0).curveTo(-7.6,-3.1,-5.4,-5.4).curveTo(-3.1,-7.6,-0,-7.6).curveTo(3.2,-7.6,5.4,-5.4).curveTo(7.6,-3.1,7.6,-0).curveTo(7.6,3.2,5.4,5.4).curveTo(3.2,7.6,-0,7.6).curveTo(-3.1,7.6,-5.4,5.4).closePath();
	this.shape.setTransform(7.6,7.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.2,15.2);


(lib.line_8_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_8_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,408,30);


(lib.line_8_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,408,30);


(lib.line_7_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_7_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,688,30);


(lib.line_7_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,688,30);


(lib.line_6_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_6_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243,30);


(lib.line_6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,243,30);


(lib.line_5_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_5_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,30);


(lib.line_5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,220,30);


(lib.line_4_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_4_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,253,24);


(lib.line_4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,253,24);


(lib.line_3_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_3_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,407,32);


(lib.line_3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,407,32);


(lib.line_2_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_2_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299,30);


(lib.line_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,299,30);


(lib.line_1_red_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_1_red();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,25);


(lib.line_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.line_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,254,25);


(lib.gunFightPlaque = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gunfight_plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.ll_s_plaque_type_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_s_plaque_type_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,151,63);


(lib.gunFight_hide = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,203);


(lib.gunFight_encore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// Layer 1
	this.instance = new lib.c2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:3.9,x:17.1,y:-12.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-17.3,y:-6.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,77,203);


(lib.games_hide = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65,204);


(lib.games_encore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// Layer 1
	this.instance = new lib.c4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-4.2,x:-22.3,y:-12.3},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:4.9,x:24,y:-17.4},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65,204);


(lib.edgeshad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.edgeshad();
	this.instance.setTransform(0,0,1,1.601);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1434,96.1);


(lib.earlyYears_hide = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,197);


(lib.earlyYears_encore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// Layer 1
	this.instance = new lib.c1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8.2,x:29.5,y:-18.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-12,x:-34.8,y:-6.7},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,197);


(lib.early_plaque_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.doesntmatter = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buttonpixel();
	this.instance.setTransform(1400.4,-2.6,385.002,124.311,90);

	this.instance_1 = new lib.buttonpixel();
	this.instance_1.setTransform(246.2,-2.6,385.002,124.311,90);

	this.instance_2 = new lib.buttonpixel();
	this.instance_2.setTransform(0,0,700,124.311);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.6,1402.9,770);


(lib.departed_hide = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,191);


(lib.departed_encore = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57));

	// Layer 1
	this.instance = new lib.c6();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:-5.9,x:-19.5,y:4.5},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1).to({rotation:8,x:26.8,y:-2.8},0).wait(1).to({rotation:0,x:0,y:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,191);


(lib.curtain_shad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.curtain_shad();
	this.instance.setTransform(0,0,6.982,7.024);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1396.3,632.2);


(lib.curtain_d = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.backCurtain_d();
	this.instance.setTransform(0,0,5,5.305);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1400,668.4);


(lib.mando_s_tie_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_tie();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,58);


(lib.mando_s_shad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_shad();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,361,830);


(lib.mando_s_rarm_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_rarm_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,126);


(lib.mando_s_rarm_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_rarm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,126);


(lib.mando_s_r_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_r_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73,63);


(lib.mando_s_r_forearm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_r_forearm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,130);


(lib.mando_s_platform_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_platform();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,270,58);


(lib.mando_s_plaque_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119,49);


(lib.mando_s_pants_shad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_pants_shad();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,174,26);


(lib.mando_s_pants_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_pants();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,175,307);


(lib.mando_s_mandolin_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_mandolin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,274,203);


(lib.mando_s_larm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_larm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,140);


(lib.mando_s_l_forearm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_forearm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,120,74);


(lib.mando_s_l_cuff_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_cuff_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,29);


(lib.mando_s_l_cuff_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_cuff();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,75);


(lib.mando_s_jacketfront_top_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_jacketfront_top();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,164,223);


(lib.mando_s_jacketfront_bot_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_jacketfront_bot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,136,165);


(lib.mando_s_jacketback_bot_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_jacketback_bot();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142,184);


(lib.mando_s_feet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_feet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,61);


(lib.mando_s_mouth3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_mouth3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,18);


(lib.mando_s_mouth2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_mouth2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,17);


(lib.mando_s_mouth1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_mouth1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13,15);


(lib.mando_s_lids_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_lids();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,15);


(lib.mando_s_jaw_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_jaw();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,56);


(lib.mando_s_head_neck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_head_neck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,71,45);


(lib.mando_s_head_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_head_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,118,138);


(lib.mando_s_eyer_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_eyer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,18);


(lib.mando_s_eyel_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_eyel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,18);


(lib.mando_s_left_hand_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_left_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,61);


(lib.mando_s_l_finger4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_finger4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,20);


(lib.mando_s_l_finger3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_finger3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,23);


(lib.mando_s_l_finger2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_finger2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.mando_s_l_finger1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_l_finger1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,31);


(lib.Departed_Plaque_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Departed_Plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,35);


(lib.departed_mo_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_mo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,10);


(lib.departed_goatee_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_goatee();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,26);


(lib.departed_bust_head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_bust_head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,144);


(lib.departed_platform_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_platform_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,30);


(lib.departed_pillar_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_pillar_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,422);


(lib.departed_head_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.departed_head_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,144);


(lib.ll_tie_all_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_tie_all();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48,41);


(lib.ll_torso_shadow_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_torso_shadow_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.ll_torso_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_torso_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,264);


(lib.ll_r_arm_all_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_r_arm_all_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,122);


(lib.ll_plinth_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_plinth_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,34);


(lib.ll_legs_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_legs_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,233);


(lib.ll_l_hand_all_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_l_hand_all_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,250);


(lib.ll_l_forearm_d_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_l_forearm_d_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,91);


(lib.ll_l_arm_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_l_arm_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,122);


(lib.ll_head_all_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_head_all_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,89);


(lib.ll_eye_R_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_eye_R_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_eye_L_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ll_eye_L_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.shared_gunfight_shoes_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_shoes_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,72);


(lib.shared_gunfight_right_upper_arm_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_right_upper_arm_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,90);


(lib.shared_gunfight_right_hand_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_right_hand_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.shared_gunfight_right_forearm_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_right_forearm_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,72);


(lib.shared_gunfight_pants_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_pants_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,295);


(lib.shared_gunfight_leftupper_arm_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_leftupper_arm_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38,88);


(lib.shared_gunfight_left_hand_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_left_hand_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.shared_gunfight_left_forearm_D_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_left_forearm_D();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,70);


(lib.shared_gunfight_neck_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_neck_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,36);


(lib.shared_gunfight_neck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_neck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,36);


(lib.shared_gunfight_eyeR_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_eyeR();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.shared_gunfight_eyeL_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.shared_gunfight_eyeL();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,11);


(lib.gunfight_head_d_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gunfight_head_d_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.gunfight_head_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.gunfight_head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.early_neck_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_neck_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,34);


(lib.early_head_d_3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_head_d_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_eyer_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_eyer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_eyel_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_eyel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_vest_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_vest_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,97,168);


(lib.early_shoes_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_shoes_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,35);


(lib.early_r_upperarm_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_upperarm_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_r_hand_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_hand_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_forearm_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_forearm_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,66);


(lib.early_pants_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_pants_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,220);


(lib.early_l_hand_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_l_hand_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_l_arm_down_d_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_l_arm_down_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.bucketDark = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hall_bucket_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.bucket_chicken_d = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hall_chicken_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,587,134);


(lib.Atest = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib._8bit_part9_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,3);


(lib._8bit_part8_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132,3);


(lib._8bit_part7_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,3);


(lib._8bit_part6g = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111,3);


(lib._8bit_part5G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,3);


(lib._8bit_part5_1G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part5_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,3);


(lib._8bit_part4G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,3);


(lib._8bit_part3G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,3);


(lib._8bit_part2G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,48);


(lib._8bit_part1G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,67);


(lib._8bit_hide3G = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_hide3();
	this.instance.setTransform(0,0,0.97,0.97);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib._8bit_stand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_stand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,33);


(lib._8bit_plaque_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib._8bit_hide2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_hide2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,409);


(lib._8bit_hide1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_hide1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,490);


(lib._8bit_bod_g_main = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bitbod();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,443);


(lib.rollover_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.rollover_light_g();
	this.instance.setTransform(105.5,202,1,1,0,0,0,105.5,202);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:200,alpha:0.949},2).to({y:202,alpha:1},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,30,211,404);


(lib.mandolin__karaoke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_988 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(988).call(this.frame_988).wait(1));

	// Layer 38
	this.instance = new lib.karaokereddot();
	this.instance.setTransform(486.2,570.2,1,1,0,0,0,7.6,7.6);
	this.instance._off = true;
	this.instance.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(875).to({_off:false},0).wait(1).to({x:503.9,y:571.9},0).wait(1).to({x:518.5,y:582},0).wait(1).to({x:528.2,y:597.2},0).wait(1).to({x:541.6,y:589.3},0).wait(1).to({x:556.9,y:586.3},0).wait(1).to({x:572.1,y:589.4},0).wait(1).to({x:585.7,y:597.2},0).wait(1).to({x:597.4,y:587.8},0).wait(1).to({x:611.2,y:581.6},0).wait(1).to({x:626.1,y:581.2},0).wait(1).to({x:639.9,y:587.2},0).wait(1).to({x:651.2,y:597.2},0).wait(1).to({x:674.7,y:580.5},0).wait(1).to({x:703.3,y:581.2},0).wait(1).to({x:727.7,y:597.2},0).wait(1).to({x:742,y:579.3},0).wait(1).to({x:763.4,y:580},0).wait(1).to({x:778.7,y:597.2},0).wait(1).to({x:784.7,y:584.8},0).wait(1).to({x:795.6,y:577.6},0).wait(1).to({x:806.5,y:585.4},0).wait(1).to({x:813.7,y:597.2},0).wait(1).to({x:819.4,y:585.2},0).wait(1).to({x:827.3,y:574.5},0).wait(1).to({x:839.2,y:573.7},0).wait(1).to({x:846.6,y:584.7},0).wait(1).to({x:851.2,y:597.2},0).wait(1).to({x:852.9,y:585.8},0).wait(1).to({x:855,y:574.5},0).wait(1).to({x:857.6,y:563.3},0).wait(1).to({x:863.2,y:553.6},0).wait(1).to({x:868.7,y:563.2},0).wait(1).to({x:871.2,y:574.4},0).wait(1).to({x:873.1,y:585.7},0).wait(1).to({x:874.7,y:597.2},0).wait(1).to({x:876.3,y:586.2},0).wait(1).to({x:878,y:575.3},0).wait(1).to({x:880.1,y:564.4},0).wait(1).to({x:884.7,y:554.8},0).wait(1).to({x:889.5,y:564.7},0).wait(1).to({x:892.2,y:575.4},0).wait(1).to({x:894.6,y:586.2},0).wait(1).to({x:896.7,y:597.2},0).wait(1).to({x:906.7,y:576.1},0).wait(1).to({x:918.6,y:556.1},0).wait(1).to({x:933.9,y:538.5},0).wait(1).to({x:954.6,y:528.9},0).wait(1).to({x:976.2,y:536.3},0).wait(1).to({x:992,y:553.3},0).wait(1).to({x:1004.3,y:573.1},0).wait(1).to({x:1014.4,y:594.1},0).wait(1).to({x:1023.3,y:615.6},0).wait(1).to({x:1031.2,y:637.6},0).wait(1).to({x:1038.3,y:659.7},0).wait(1).to({x:1045,y:682.1},0).wait(1).to({x:1051.1,y:704.5},0).wait(1).to({x:1056.9,y:727.1},0).wait(1).to({x:1062.3,y:749.8},0).wait(1).to({x:1067.5,y:772.5},0).wait(1).to({x:1072.4,y:795.3},0).wait(1).to({x:1077.1,y:818.1},0).wait(1).to({x:1081.7,y:841},0).wait(1).to({x:1086,y:863.9},0).wait(1).to({x:1090.1,y:886.8},0).wait(1).to({x:1094.2,y:909.8},0).wait(1).to({x:1098,y:932.8},0).wait(1).to({x:1101.8,y:955.8},0).wait(1).to({x:1105.4,y:978.8},0).wait(1).to({x:1108.9,y:1001.8},0).wait(1).to({x:1112.2,y:1024.9},0).wait(1).to({x:1115.5,y:1048},0).wait(1).to({x:1118.7,y:1071.1},0).wait(1).to({x:1121.7,y:1094.2},0).wait(1).to({x:1124.8,y:1117.3},0).to({_off:true},1).wait(39));

	// Layer 37
	this.instance_1 = new lib.karaokereddot();
	this.instance_1.setTransform(345.1,569.7,1,1,0,0,0,7.6,7.6);
	this.instance_1._off = true;
	this.instance_1.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(820).to({_off:false},0).wait(1).to({x:354,y:569.9},0).wait(1).to({x:362.5,y:572.5},0).wait(1).to({x:370.2,y:577.1},0).wait(1).to({x:376.8,y:583},0).wait(1).to({x:382.6,y:589.8},0).wait(1).to({x:387.6,y:597.2},0).wait(1).to({x:400.5,y:584},0).wait(1).to({x:417.9,y:583.5},0).wait(1).to({x:430.1,y:597.2},0).wait(1).to({x:449.8,y:583.5},0).wait(1).to({x:473.4},0).wait(1).to({x:493.2,y:597.2},0).wait(1).to({x:500.1,y:590.4},0).wait(1).to({x:507.9,y:584.5},0).wait(1).to({x:516.6,y:580.3},0).wait(1).to({x:526.1,y:578.5},0).wait(1).to({x:535.7,y:579.9},0).wait(1).to({x:544.4,y:584.1},0).wait(1).to({x:552,y:590.1},0).wait(1).to({x:558.7,y:597.2},0).wait(1).to({x:568.1,y:587.7},0).wait(1).to({x:579.3,y:580.3},0).wait(1).to({x:592.2,y:577.2},0).wait(1).to({x:605.2,y:580.1},0).wait(1).to({x:616.4,y:587.5},0).wait(1).to({x:625.7,y:597.2},0).wait(1).to({x:646.3,y:589.5},0).wait(1).to({x:668.2,y:586.6},0).wait(1).to({x:690,y:589.3},0).wait(1).to({x:710.7,y:597.2},0).wait(1).to({x:720.3,y:587.3},0).wait(1).to({x:733.3,y:583.3},0).wait(1).to({x:746.2,y:588},0).wait(1).to({x:756.7,y:597.2},0).wait(1).to({x:771.4,y:586},0).wait(1).to({x:789,y:580.4},0).wait(1).to({x:806.7,y:585},0).wait(1).to({x:820.7,y:597.2},0).wait(1).to({x:833.5,y:585.8},0).wait(1).to({x:849.2,y:578.8},0).wait(1).to({x:866.3,y:579.1},0).wait(1).to({x:881.8,y:586.2},0).wait(1).to({x:895.2,y:597.2},0).wait(1).to({x:916.9,y:588.9},0).wait(1).to({x:940.1,y:588.6},0).wait(1).to({x:961.7,y:597.2},0).wait(1).to({x:978.6,y:584.3},0).wait(1).to({x:999.6,y:585},0).wait(1).to({x:1017.2,y:597.2},0).wait(1).to({x:1022.6,y:582.8},0).wait(1).to({x:1034.9,y:574.3},0).wait(1).to({x:1050.2,y:575.2},0).wait(2).to({_off:true},1).wait(114));

	// Layer 36
	this.instance_2 = new lib.karaokereddot();
	this.instance_2.setTransform(550.7,572.2,1,1,0,0,0,7.6,7.6);
	this.instance_2._off = true;
	this.instance_2.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(765).to({_off:false},0).wait(1).to({x:560.4,y:574.5},0).wait(1).to({x:568.6,y:580.3},0).wait(1).to({x:574.9,y:588.2},0).wait(1).to({x:579.7,y:597.2},0).wait(1).to({x:586.4,y:592.6},0).wait(1).to({x:593.7,y:588.9},0).wait(1).to({x:601.6,y:586.6},0).wait(1).to({x:609.7,y:586.2},0).wait(1).to({x:617.7,y:588.1},0).wait(1).to({x:624.9,y:591.9},0).wait(1).to({x:631.2,y:597.2},0).wait(1).to({x:639.9,y:590},0).wait(1).to({x:649.5,y:584.1},0).wait(1).to({x:659.9,y:579.9},0).wait(1).to({x:671.1,y:578.2},0).wait(1).to({x:682.2,y:579.5},0).wait(1).to({x:692.7,y:583.6},0).wait(1).to({x:702.2,y:589.7},0).wait(1).to({x:710.7,y:597.2},0).wait(1).to({x:716.2,y:591.8},0).wait(1).to({x:722.3,y:587.2},0).wait(1).to({x:729,y:583.6},0).wait(1).to({x:736.4,y:581.6},0).wait(1).to({x:744},0).wait(1).to({x:751.4,y:583.6},0).wait(1).to({x:758.1,y:587.1},0).wait(1).to({x:764.2,y:591.8},0).wait(1).to({x:769.7,y:597.2},0).wait(1).to({x:771.2,y:586.4},0).wait(1).to({x:772.9,y:575.6},0).wait(1).to({x:775,y:564.9},0).wait(1).to({x:777.6,y:554.3},0).wait(1).to({x:782,y:543.9},0).wait(1).to({x:790.1,y:544.5},0).wait(1).to({x:794.7,y:554.8},0).wait(1).to({x:797.8,y:565.2},0).wait(1).to({x:800.4,y:575.8},0).wait(1).to({x:802.7,y:586.4},0).wait(1).to({x:804.7,y:597.2},0).wait(1).to({x:805.5,y:592.5},0).wait(1).to({x:806.9,y:588},0).wait(1).to({x:808.9,y:583.7},0).wait(1).to({x:811.6,y:579.8},0).wait(1).to({x:815,y:576.6},0).wait(1).to({x:819,y:574.1},0).wait(1).to({x:823.4,y:572.5},0).wait(1).to({x:828,y:571.5},0).wait(1).to({x:832.7,y:571.2},0).wait(3).to({_off:true},1).wait(172));

	// Layer 35
	this.instance_3 = new lib.karaokereddot();
	this.instance_3.setTransform(566.7,573.2,1,1,0,0,0,7.6,7.6);
	this.instance_3._off = true;
	this.instance_3.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(704).to({_off:false},0).wait(1).to({x:573.2,y:574.2},0).wait(1).to({x:579.4,y:576.7},0).wait(1).to({x:584.7,y:580.6},0).wait(1).to({x:589.2,y:585.6},0).wait(1).to({x:592.8,y:591.2},0).wait(1).to({x:595.7,y:597.2},0).wait(1).to({x:602.5,y:588.2},0).wait(1).to({x:611.7,y:581.8},0).wait(1).to({x:622.8,y:582},0).wait(1).to({x:632,y:588.4},0).wait(1).to({x:639.2,y:597.2},0).wait(1).to({x:642.6,y:590},0).wait(1).to({x:646.6,y:583.2},0).wait(1).to({x:651.4,y:576.9},0).wait(1).to({x:657.9,y:572.1},0).wait(1).to({x:665.4,y:571.9},0).wait(1).to({x:671.9,y:576.6},0).wait(1).to({x:676.6,y:583},0).wait(1).to({x:680.4,y:589.9},0).wait(1).to({x:683.7,y:597.2},0).wait(1).to({x:686.5,y:589.3},0).wait(1).to({x:689.9,y:581.6},0).wait(1).to({x:693.8,y:574.2},0).wait(1).to({x:699,y:567.6},0).wait(1).to({x:706.4,y:564.1},0).wait(1).to({x:713.9,y:567.6},0).wait(1).to({x:719,y:574.2},0).wait(1).to({x:723,y:581.6},0).wait(1).to({x:726.3,y:589.3},0).wait(1).to({x:729.2,y:597.2},0).wait(1).to({x:731.8,y:591},0).wait(1).to({x:734.7,y:584.9},0).wait(1).to({x:738.2,y:579.1},0).wait(1).to({x:742.3,y:573.8},0).wait(1).to({x:747.7,y:569.7},0).wait(1).to({x:754.1,y:568.3},0).wait(1).to({x:760.4,y:570.5},0).wait(1).to({x:765.6,y:574.7},0).wait(1).to({x:770,y:579.8},0).wait(1).to({x:773.7,y:585.4},0).wait(1).to({x:777.1,y:591.2},0).wait(1).to({x:780.2,y:597.2},0).wait(1).to({x:782.8,y:590.2},0).wait(1).to({x:786.2,y:583.5},0).wait(1).to({x:790.7,y:577.6},0).wait(1).to({x:796.4,y:572.7},0).wait(1).to({x:803.1,y:569.6},0).wait(1).to({x:810.4,y:568.3},0).wait(1).to({x:817.9,y:568.6},0).wait(1).to({x:825.2,y:570.2},0).wait(7).to({_off:true},1).wait(227));

	// Layer 34
	this.instance_4 = new lib.karaokereddot();
	this.instance_4.setTransform(540.2,574.2,1,1,0,0,0,7.6,7.6);
	this.instance_4._off = true;
	this.instance_4.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(650).to({_off:false},0).wait(1).to({x:550,y:574.3},0).wait(1).to({x:559.5,y:576.7},0).wait(1).to({x:568.1,y:581.5},0).wait(1).to({x:575,y:588.5},0).wait(1).to({x:579.7,y:597.2},0).wait(1).to({x:585.7,y:591.9},0).wait(1).to({x:592.5,y:587.7},0).wait(1).to({x:600.2,y:585.2},0).wait(1).to({x:608.1},0).wait(1).to({x:615.8,y:587.6},0).wait(1).to({x:622.6,y:591.9},0).wait(1).to({x:628.7,y:597.2},0).wait(1).to({x:635.9,y:590.2},0).wait(1).to({x:644.4,y:585},0).wait(1).to({x:654.2,y:582.9},0).wait(1).to({x:663.9,y:585},0).wait(1).to({x:672.5,y:590.2},0).wait(1).to({x:679.7,y:597.2},0).wait(1).to({x:688,y:588.4},0).wait(1).to({x:697.5,y:581.1},0).wait(1).to({x:708.6,y:576.5},0).wait(1).to({x:720.6,y:576.3},0).wait(1).to({x:731.7,y:580.8},0).wait(1).to({x:741.2,y:588.2},0).wait(1).to({x:749.2,y:597.2},0).wait(1).to({x:751.1,y:589},0).wait(1).to({x:753.1,y:580.8},0).wait(1).to({x:755.4,y:572.7},0).wait(1).to({x:758.1,y:564.8},0).wait(1).to({x:761.5,y:557.1},0).wait(1).to({x:766.5,y:550.2},0).wait(1).to({x:774},0).wait(1).to({x:779,y:557},0).wait(1).to({x:782.3,y:564.8},0).wait(1).to({x:785,y:572.7},0).wait(1).to({x:787.3,y:580.8},0).wait(1).to({x:789.4,y:588.9},0).wait(1).to({x:791.2,y:597.2},0).wait(1).to({x:793.9,y:592.1},0).wait(1).to({x:797.1,y:587.3},0).wait(1).to({x:800.9,y:582.9},0).wait(1).to({x:805.3,y:579.1},0).wait(1).to({x:810.2,y:576.1},0).wait(1).to({x:815.5,y:573.9},0).wait(1).to({x:821.2,y:572.7},0).wait(1).to({x:826.9,y:572.3},0).wait(1).to({x:832.7,y:572.7},0).wait(3).to({_off:true},1).wait(288));

	// Layer 33
	this.instance_5 = new lib.karaokereddot();
	this.instance_5.setTransform(479.2,570.2,1,1,0,0,0,7.6,7.6);
	this.instance_5._off = true;
	this.instance_5.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(580).to({_off:false},0).wait(1).to({x:494.1,y:570},0).wait(1).to({x:509.1,y:571.6},0).wait(1).to({x:523.7,y:574.8},0).wait(1).to({x:537.8,y:579.9},0).wait(1).to({x:550.8,y:587.3},0).wait(1).to({x:562.2,y:597.2},0).wait(1).to({x:569,y:590.5},0).wait(1).to({x:576.3,y:582.9},0).wait(1).to({x:583.1,y:575.2},0).wait(1).to({x:589.3,y:569.5},0).wait(1).to({x:600,y:564.6},0).wait(1).to({x:609.6,y:565.6},0).wait(1).to({x:616.9,y:570.7},0).wait(1).to({x:626.5,y:577.4},0).wait(1).to({x:634.3,y:582.9},0).wait(1).to({x:642.3,y:590},0).wait(1).to({x:648.7,y:597.2},0).wait(1).to({x:656.5,y:591.2},0).wait(1).to({x:665.2,y:586.9},0).wait(1).to({x:674.8,y:584.8},0).wait(1).to({x:684.5,y:585.9},0).wait(1).to({x:693.1,y:590.3},0).wait(1).to({x:700.2,y:597.2},0).wait(1).to({x:710.6,y:591.9},0).wait(1).to({x:721.6,y:588.1},0).wait(1).to({x:733.1,y:586.2},0).wait(1).to({x:744.7,y:586.7},0).wait(1).to({x:755.7,y:590.4},0).wait(1).to({x:765.2,y:597.2},0).wait(1).to({x:773.9,y:593.5},0).wait(1).to({x:777.8,y:588.1},0).wait(1).to({x:783.4,y:581.1},0).wait(1).to({x:789.3,y:574.9},0).wait(1).to({x:795.6,y:569.2},0).wait(1).to({x:802.5,y:564.2},0).wait(1).to({x:810.1,y:560.9},0).wait(1).to({x:818.2,y:562.2},0).wait(1).to({x:825.8,y:566.2},0).wait(1).to({x:832.6,y:571.4},0).wait(1).to({x:838.7,y:577.2},0).wait(1).to({x:844.5,y:583.5},0).wait(1).to({x:849.7,y:590.1},0).wait(1).to({x:854.3,y:597.2},0).wait(1).to({x:856.6,y:592.8},0).wait(1).to({x:859.1,y:588.5},0).wait(1).to({x:861.9,y:584.4},0).wait(1).to({x:864.8,y:580.5},0).wait(1).to({x:868,y:576.7},0).wait(1).to({x:871.5,y:573.2},0).wait(1).to({x:875.3,y:570.1},0).wait(1).to({x:879.5,y:567.4},0).wait(1).to({x:883.9,y:565.3},0).wait(1).to({x:888.7,y:564.1},0).wait(1).to({x:893.7,y:563.8},0).wait(1).to({x:898.5,y:564.7},0).wait(1).to({x:903.1,y:566.5},0).wait(1).to({x:907.3,y:569},0).wait(1).to({x:911.3,y:572.2},0).to({_off:true},1).wait(350));

	// Layer 32
	this.instance_6 = new lib.karaokereddot();
	this.instance_6.setTransform(526.1,566.1,1,1,0,0,0,7.6,7.6);
	this.instance_6._off = true;
	this.instance_6.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(524).to({_off:false},0).wait(1).to({x:538.3,y:569.4},0).wait(1).to({x:550.2,y:573.9},0).wait(1).to({x:561.4,y:579.8},0).wait(1).to({x:571.6,y:587.4},0).wait(1).to({x:579.7,y:597.2},0).wait(1).to({x:587.6,y:588.9},0).wait(1).to({x:597.6,y:583.3},0).wait(1).to({x:608.6,y:579.9},0).wait(1).to({x:620,y:578.6},0).wait(1).to({x:631.5,y:579.3},0).wait(1).to({x:642.6,y:582.1},0).wait(1).to({x:652.8,y:587.4},0).wait(1).to({x:660.7,y:595.7},0).wait(1).to({x:668.3,y:588.3},0).wait(1).to({x:677.4,y:582.8},0).wait(1).to({x:687.5,y:579.8},0).wait(1).to({x:698.1,y:579.3},0).wait(1).to({x:708.6,y:581.2},0).wait(1).to({x:718.6,y:584.7},0).wait(1).to({x:728,y:589.6},0).wait(1).to({x:736.7,y:595.7},0).wait(1).to({x:743.3,y:590},0).wait(1).to({x:750.8,y:585.6},0).wait(1).to({x:759,y:582.7},0).wait(1).to({x:767.6,y:582.2},0).wait(1).to({x:776,y:584.6},0).wait(1).to({x:783.2,y:589.3},0).wait(1).to({x:789.2,y:595.7},0).wait(1).to({x:791.4,y:592.5},0).wait(1).to({x:793.7,y:590},0).wait(1).to({x:796.5,y:587.8},0).wait(1).to({x:799.7,y:586.3},0).wait(1).to({x:803.1,y:585.5},0).wait(1).to({x:806.7},0).wait(1).to({x:810.2,y:586.2},0).wait(1).to({x:813.5,y:587.5},0).wait(1).to({x:816.7,y:589.1},0).wait(1).to({x:819.7,y:591.1},0).wait(1).to({x:822.6,y:593.2},0).wait(1).to({x:825.2,y:595.7},0).wait(1).to({x:827.8,y:590.3},0).wait(1).to({x:831.4,y:585.5},0).wait(1).to({x:835.7,y:581.4},0).wait(1).to({x:840.6,y:578},0).wait(1).to({x:846,y:575.3},0).wait(1).to({x:851.6,y:573.3},0).wait(1).to({x:857.4,y:571.9},0).wait(1).to({x:863.3,y:571},0).wait(1).to({x:869.3,y:570.7},0).wait(1).to({_off:true},1).wait(414));

	// Layer 20
	this.instance_7 = new lib.karaokereddot();
	this.instance_7.setTransform(547.1,579.2,1,1,0,0,0,7.6,7.6);
	this.instance_7._off = true;
	this.instance_7.cache(-2,-2,19,19);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(461).to({_off:false},0).wait(1).to({x:554.5,y:581},0).wait(1).to({x:561.6,y:583.7},0).wait(1).to({x:568.3,y:587.2},0).wait(1).to({x:574.3,y:591.7},0).wait(1).to({x:579.7,y:597.2},0).wait(1).to({x:584.7,y:593.4},0).wait(1).to({x:590.2,y:590.4},0).wait(1).to({x:596.1,y:588.4},0).wait(1).to({x:602.3,y:587.8},0).wait(1).to({x:608.6,y:589.2},0).wait(1).to({x:613.9,y:592.5},0).wait(1).to({x:618.2,y:597.2},0).wait(1).to({x:623.8,y:593.1},0).wait(1).to({x:629.8,y:589.6},0).wait(1).to({x:636.2,y:586.7},0).wait(1).to({x:642.8,y:584.7},0).wait(1).to({x:649.7,y:583.8},0).wait(1).to({x:656.6,y:584.5},0).wait(1).to({x:663,y:587.2},0).wait(1).to({x:668.4,y:591.6},0).wait(1).to({x:672.7,y:597.2},0).wait(1).to({x:679.2,y:592},0).wait(1).to({x:686.1,y:587.6},0).wait(1).to({x:693.5,y:583.9},0).wait(1).to({x:701.3,y:581.2},0).wait(1).to({x:709.5,y:580},0).wait(1).to({x:717.7,y:581},0).wait(1).to({x:725.1,y:584.6},0).wait(1).to({x:731.1,y:590.2},0).wait(1).to({x:735.7,y:597.2},0).wait(1).to({x:739.1,y:593.7},0).wait(1).to({x:742.8,y:590.6},0).wait(1).to({x:746.7,y:587.7},0).wait(1).to({x:750.8,y:585.1},0).wait(1).to({x:755.1,y:582.9},0).wait(1).to({x:759.7,y:581.1},0).wait(1).to({x:764.4,y:580},0).wait(1).to({x:769.2,y:579.6},0).wait(1).to({x:774,y:580},0).wait(1).to({x:778.6,y:581.3},0).wait(1).to({x:783.1,y:583.4},0).wait(1).to({x:787.1,y:586.2},0).wait(1).to({x:790.7,y:589.5},0).wait(1).to({x:793.9,y:593.2},0).wait(1).to({x:796.7,y:597.2},0).wait(1).to({x:800.2,y:593.9},0).wait(1).to({x:803.9,y:590.9},0).wait(1).to({x:807.8,y:588.1},0).wait(1).to({x:811.9,y:585.6},0).wait(1).to({x:816.1,y:583.4},0).wait(1).to({x:820.5,y:581.5},0).wait(1).to({x:824.9,y:580},0).wait(1).to({x:829.7,y:578.7},0).wait(1).to({x:834.4,y:578},0).wait(1).to({x:839.1,y:577.6},0).wait(1).to({x:843.9,y:577.7},0).wait(1).to({x:848.7,y:578.2},0).to({_off:true},1).wait(470));

	// Layer 21 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_466 = new cjs.Graphics().moveTo(185.5,324.8).lineTo(185.5,274.3).lineTo(283.1,274.3).lineTo(283.1,324.8).closePath();
	var mask_graphics_467 = new cjs.Graphics().moveTo(182.8,324.8).lineTo(182.8,274.3).lineTo(285.8,274.3).lineTo(285.8,324.8).closePath();
	var mask_graphics_468 = new cjs.Graphics().moveTo(180.1,324.8).lineTo(180.1,274.3).lineTo(288.5,274.3).lineTo(288.5,324.8).closePath();
	var mask_graphics_469 = new cjs.Graphics().moveTo(177.4,324.8).lineTo(177.4,274.3).lineTo(291.2,274.3).lineTo(291.2,324.8).closePath();
	var mask_graphics_470 = new cjs.Graphics().moveTo(174.7,324.8).lineTo(174.7,274.3).lineTo(293.9,274.3).lineTo(293.9,324.8).closePath();
	var mask_graphics_471 = new cjs.Graphics().moveTo(172,324.8).lineTo(172,274.3).lineTo(296.6,274.3).lineTo(296.6,324.8).closePath();
	var mask_graphics_472 = new cjs.Graphics().moveTo(169.3,324.8).lineTo(169.3,274.3).lineTo(299.3,274.3).lineTo(299.3,324.8).closePath();
	var mask_graphics_473 = new cjs.Graphics().moveTo(166.6,324.8).lineTo(166.6,274.3).lineTo(302,274.3).lineTo(302,324.8).closePath();
	var mask_graphics_474 = new cjs.Graphics().moveTo(163.9,324.8).lineTo(163.9,274.3).lineTo(304.7,274.3).lineTo(304.7,324.8).closePath();
	var mask_graphics_475 = new cjs.Graphics().moveTo(161.2,324.8).lineTo(161.2,274.3).lineTo(307.4,274.3).lineTo(307.4,324.8).closePath();
	var mask_graphics_476 = new cjs.Graphics().moveTo(158.5,324.8).lineTo(158.5,274.3).lineTo(310.1,274.3).lineTo(310.1,324.8).closePath();
	var mask_graphics_477 = new cjs.Graphics().moveTo(155.8,324.8).lineTo(155.8,274.3).lineTo(312.8,274.3).lineTo(312.8,324.8).closePath();
	var mask_graphics_478 = new cjs.Graphics().moveTo(153.1,324.8).lineTo(153.1,274.3).lineTo(315.5,274.3).lineTo(315.5,324.8).closePath();
	var mask_graphics_479 = new cjs.Graphics().moveTo(150.4,324.8).lineTo(150.4,274.3).lineTo(318.2,274.3).lineTo(318.2,324.8).closePath();
	var mask_graphics_480 = new cjs.Graphics().moveTo(147.7,324.8).lineTo(147.7,274.3).lineTo(320.9,274.3).lineTo(320.9,324.8).closePath();
	var mask_graphics_481 = new cjs.Graphics().moveTo(145,324.8).lineTo(145,274.3).lineTo(323.6,274.3).lineTo(323.6,324.8).closePath();
	var mask_graphics_482 = new cjs.Graphics().moveTo(142.3,324.8).lineTo(142.3,274.3).lineTo(326.3,274.3).lineTo(326.3,324.8).closePath();
	var mask_graphics_483 = new cjs.Graphics().moveTo(139.6,324.8).lineTo(139.6,274.3).lineTo(329,274.3).lineTo(329,324.8).closePath();
	var mask_graphics_484 = new cjs.Graphics().moveTo(136.9,324.8).lineTo(136.9,274.3).lineTo(331.7,274.3).lineTo(331.7,324.8).closePath();
	var mask_graphics_485 = new cjs.Graphics().moveTo(134.2,324.8).lineTo(134.2,274.3).lineTo(334.4,274.3).lineTo(334.4,324.8).closePath();
	var mask_graphics_486 = new cjs.Graphics().moveTo(131.5,324.8).lineTo(131.5,274.3).lineTo(337.1,274.3).lineTo(337.1,324.8).closePath();
	var mask_graphics_487 = new cjs.Graphics().moveTo(128.8,324.8).lineTo(128.8,274.3).lineTo(339.8,274.3).lineTo(339.8,324.8).closePath();
	var mask_graphics_488 = new cjs.Graphics().moveTo(126.1,324.8).lineTo(126.1,274.3).lineTo(342.5,274.3).lineTo(342.5,324.8).closePath();
	var mask_graphics_489 = new cjs.Graphics().moveTo(123.4,324.8).lineTo(123.4,274.3).lineTo(345.2,274.3).lineTo(345.2,324.8).closePath();
	var mask_graphics_490 = new cjs.Graphics().moveTo(120.7,324.8).lineTo(120.7,274.3).lineTo(347.9,274.3).lineTo(347.9,324.8).closePath();
	var mask_graphics_491 = new cjs.Graphics().moveTo(118,324.8).lineTo(118,274.3).lineTo(350.6,274.3).lineTo(350.6,324.8).closePath();
	var mask_graphics_492 = new cjs.Graphics().moveTo(115.3,324.8).lineTo(115.3,274.3).lineTo(353.3,274.3).lineTo(353.3,324.8).closePath();
	var mask_graphics_493 = new cjs.Graphics().moveTo(112.6,324.8).lineTo(112.6,274.3).lineTo(356,274.3).lineTo(356,324.8).closePath();
	var mask_graphics_494 = new cjs.Graphics().moveTo(109.9,324.8).lineTo(109.9,274.3).lineTo(358.7,274.3).lineTo(358.7,324.8).closePath();
	var mask_graphics_495 = new cjs.Graphics().moveTo(107.2,324.8).lineTo(107.2,274.3).lineTo(361.4,274.3).lineTo(361.4,324.8).closePath();
	var mask_graphics_496 = new cjs.Graphics().moveTo(104.5,324.8).lineTo(104.5,274.3).lineTo(364.1,274.3).lineTo(364.1,324.8).closePath();
	var mask_graphics_497 = new cjs.Graphics().moveTo(101.8,324.8).lineTo(101.8,274.3).lineTo(366.8,274.3).lineTo(366.8,324.8).closePath();
	var mask_graphics_498 = new cjs.Graphics().moveTo(99.1,324.8).lineTo(99.1,274.3).lineTo(369.5,274.3).lineTo(369.5,324.8).closePath();
	var mask_graphics_499 = new cjs.Graphics().moveTo(96.4,324.8).lineTo(96.4,274.3).lineTo(372.2,274.3).lineTo(372.2,324.8).closePath();
	var mask_graphics_500 = new cjs.Graphics().moveTo(93.7,324.8).lineTo(93.7,274.3).lineTo(374.9,274.3).lineTo(374.9,324.8).closePath();
	var mask_graphics_501 = new cjs.Graphics().moveTo(91,324.8).lineTo(91,274.3).lineTo(377.6,274.3).lineTo(377.6,324.8).closePath();
	var mask_graphics_502 = new cjs.Graphics().moveTo(88.3,324.8).lineTo(88.3,274.3).lineTo(380.3,274.3).lineTo(380.3,324.8).closePath();
	var mask_graphics_503 = new cjs.Graphics().moveTo(85.6,324.8).lineTo(85.6,274.3).lineTo(383,274.3).lineTo(383,324.8).closePath();
	var mask_graphics_504 = new cjs.Graphics().moveTo(82.9,324.8).lineTo(82.9,274.3).lineTo(385.7,274.3).lineTo(385.7,324.8).closePath();
	var mask_graphics_505 = new cjs.Graphics().moveTo(80.2,324.8).lineTo(80.2,274.3).lineTo(388.4,274.3).lineTo(388.4,324.8).closePath();
	var mask_graphics_506 = new cjs.Graphics().moveTo(77.5,324.8).lineTo(77.5,274.3).lineTo(391.1,274.3).lineTo(391.1,324.8).closePath();
	var mask_graphics_507 = new cjs.Graphics().moveTo(74.8,324.8).lineTo(74.8,274.3).lineTo(393.8,274.3).lineTo(393.8,324.8).closePath();
	var mask_graphics_508 = new cjs.Graphics().moveTo(72.1,324.8).lineTo(72.1,274.3).lineTo(396.5,274.3).lineTo(396.5,324.8).closePath();
	var mask_graphics_509 = new cjs.Graphics().moveTo(69.4,324.8).lineTo(69.4,274.3).lineTo(399.2,274.3).lineTo(399.2,324.8).closePath();
	var mask_graphics_510 = new cjs.Graphics().moveTo(66.7,324.8).lineTo(66.7,274.3).lineTo(401.9,274.3).lineTo(401.9,324.8).closePath();
	var mask_graphics_511 = new cjs.Graphics().moveTo(64,324.8).lineTo(64,274.3).lineTo(404.6,274.3).lineTo(404.6,324.8).closePath();
	var mask_graphics_512 = new cjs.Graphics().moveTo(61.3,324.8).lineTo(61.3,274.3).lineTo(407.3,274.3).lineTo(407.3,324.8).closePath();
	var mask_graphics_513 = new cjs.Graphics().moveTo(58.6,324.8).lineTo(58.6,274.3).lineTo(410,274.3).lineTo(410,324.8).closePath();
	var mask_graphics_514 = new cjs.Graphics().moveTo(55.9,324.8).lineTo(55.9,274.3).lineTo(412.7,274.3).lineTo(412.7,324.8).closePath();
	var mask_graphics_515 = new cjs.Graphics().moveTo(53.3,324.8).lineTo(53.3,274.3).lineTo(415.3,274.3).lineTo(415.3,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(466).to({graphics:mask_graphics_466,x:283.1,y:324.8}).wait(1).to({graphics:mask_graphics_467,x:285.8,y:324.8}).wait(1).to({graphics:mask_graphics_468,x:288.5,y:324.8}).wait(1).to({graphics:mask_graphics_469,x:291.2,y:324.8}).wait(1).to({graphics:mask_graphics_470,x:293.9,y:324.8}).wait(1).to({graphics:mask_graphics_471,x:296.6,y:324.8}).wait(1).to({graphics:mask_graphics_472,x:299.3,y:324.8}).wait(1).to({graphics:mask_graphics_473,x:302,y:324.8}).wait(1).to({graphics:mask_graphics_474,x:304.7,y:324.8}).wait(1).to({graphics:mask_graphics_475,x:307.4,y:324.8}).wait(1).to({graphics:mask_graphics_476,x:310.1,y:324.8}).wait(1).to({graphics:mask_graphics_477,x:312.8,y:324.8}).wait(1).to({graphics:mask_graphics_478,x:315.5,y:324.8}).wait(1).to({graphics:mask_graphics_479,x:318.2,y:324.8}).wait(1).to({graphics:mask_graphics_480,x:320.9,y:324.8}).wait(1).to({graphics:mask_graphics_481,x:323.6,y:324.8}).wait(1).to({graphics:mask_graphics_482,x:326.3,y:324.8}).wait(1).to({graphics:mask_graphics_483,x:329,y:324.8}).wait(1).to({graphics:mask_graphics_484,x:331.7,y:324.8}).wait(1).to({graphics:mask_graphics_485,x:334.4,y:324.8}).wait(1).to({graphics:mask_graphics_486,x:337.1,y:324.8}).wait(1).to({graphics:mask_graphics_487,x:339.8,y:324.8}).wait(1).to({graphics:mask_graphics_488,x:342.5,y:324.8}).wait(1).to({graphics:mask_graphics_489,x:345.2,y:324.8}).wait(1).to({graphics:mask_graphics_490,x:347.9,y:324.8}).wait(1).to({graphics:mask_graphics_491,x:350.6,y:324.8}).wait(1).to({graphics:mask_graphics_492,x:353.3,y:324.8}).wait(1).to({graphics:mask_graphics_493,x:356,y:324.8}).wait(1).to({graphics:mask_graphics_494,x:358.7,y:324.8}).wait(1).to({graphics:mask_graphics_495,x:361.4,y:324.8}).wait(1).to({graphics:mask_graphics_496,x:364.1,y:324.8}).wait(1).to({graphics:mask_graphics_497,x:366.8,y:324.8}).wait(1).to({graphics:mask_graphics_498,x:369.5,y:324.8}).wait(1).to({graphics:mask_graphics_499,x:372.2,y:324.8}).wait(1).to({graphics:mask_graphics_500,x:374.9,y:324.8}).wait(1).to({graphics:mask_graphics_501,x:377.6,y:324.8}).wait(1).to({graphics:mask_graphics_502,x:380.3,y:324.8}).wait(1).to({graphics:mask_graphics_503,x:383,y:324.8}).wait(1).to({graphics:mask_graphics_504,x:385.7,y:324.8}).wait(1).to({graphics:mask_graphics_505,x:388.4,y:324.8}).wait(1).to({graphics:mask_graphics_506,x:391.1,y:324.8}).wait(1).to({graphics:mask_graphics_507,x:393.8,y:324.8}).wait(1).to({graphics:mask_graphics_508,x:396.5,y:324.8}).wait(1).to({graphics:mask_graphics_509,x:399.2,y:324.8}).wait(1).to({graphics:mask_graphics_510,x:401.9,y:324.8}).wait(1).to({graphics:mask_graphics_511,x:404.6,y:324.8}).wait(1).to({graphics:mask_graphics_512,x:407.3,y:324.8}).wait(1).to({graphics:mask_graphics_513,x:410,y:324.8}).wait(1).to({graphics:mask_graphics_514,x:412.7,y:324.8}).wait(1).to({graphics:mask_graphics_515,x:415.4,y:324.8}).wait(4).to({graphics:null,x:0,y:0}).wait(470));

	// line_1_red
	this.instance_8 = new lib.line_1_red_1();
	this.instance_8.setTransform(701,624.5,1,1,0,0,0,127,12.5);
	this.instance_8._off = true;

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(466).to({_off:false},0).to({_off:true},53).wait(470));

	// line_1
	this.instance_9 = new lib.line_1_1();
	this.instance_9.setTransform(701,624.5,1,1,0,0,0,127,12.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(464).to({_off:false},0).to({_off:true},55).wait(470));

	// Layer 23 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_524 = new cjs.Graphics().moveTo(193.2,324.8).lineTo(193.2,274.3).lineTo(275.4,274.3).lineTo(275.4,324.8).closePath();
	var mask_1_graphics_525 = new cjs.Graphics().moveTo(189.6,324.8).lineTo(189.6,274.3).lineTo(279,274.3).lineTo(279,324.8).closePath();
	var mask_1_graphics_526 = new cjs.Graphics().moveTo(186.1,324.8).lineTo(186.1,274.3).lineTo(282.5,274.3).lineTo(282.5,324.8).closePath();
	var mask_1_graphics_527 = new cjs.Graphics().moveTo(182.5,324.8).lineTo(182.5,274.3).lineTo(286.1,274.3).lineTo(286.1,324.8).closePath();
	var mask_1_graphics_528 = new cjs.Graphics().moveTo(178.9,324.8).lineTo(178.9,274.3).lineTo(289.7,274.3).lineTo(289.7,324.8).closePath();
	var mask_1_graphics_529 = new cjs.Graphics().moveTo(175.4,324.8).lineTo(175.4,274.3).lineTo(293.2,274.3).lineTo(293.2,324.8).closePath();
	var mask_1_graphics_530 = new cjs.Graphics().moveTo(171.8,324.8).lineTo(171.8,274.3).lineTo(296.8,274.3).lineTo(296.8,324.8).closePath();
	var mask_1_graphics_531 = new cjs.Graphics().moveTo(168.3,324.8).lineTo(168.3,274.3).lineTo(300.3,274.3).lineTo(300.3,324.8).closePath();
	var mask_1_graphics_532 = new cjs.Graphics().moveTo(164.7,324.8).lineTo(164.7,274.3).lineTo(303.9,274.3).lineTo(303.9,324.8).closePath();
	var mask_1_graphics_533 = new cjs.Graphics().moveTo(161.1,324.8).lineTo(161.1,274.3).lineTo(307.5,274.3).lineTo(307.5,324.8).closePath();
	var mask_1_graphics_534 = new cjs.Graphics().moveTo(157.6,324.8).lineTo(157.6,274.3).lineTo(311,274.3).lineTo(311,324.8).closePath();
	var mask_1_graphics_535 = new cjs.Graphics().moveTo(154,324.8).lineTo(154,274.3).lineTo(314.6,274.3).lineTo(314.6,324.8).closePath();
	var mask_1_graphics_536 = new cjs.Graphics().moveTo(150.5,324.8).lineTo(150.5,274.3).lineTo(318.1,274.3).lineTo(318.1,324.8).closePath();
	var mask_1_graphics_537 = new cjs.Graphics().moveTo(146.9,324.8).lineTo(146.9,274.3).lineTo(321.7,274.3).lineTo(321.7,324.8).closePath();
	var mask_1_graphics_538 = new cjs.Graphics().moveTo(143.3,324.8).lineTo(143.3,274.3).lineTo(325.3,274.3).lineTo(325.3,324.8).closePath();
	var mask_1_graphics_539 = new cjs.Graphics().moveTo(139.8,324.8).lineTo(139.8,274.3).lineTo(328.8,274.3).lineTo(328.8,324.8).closePath();
	var mask_1_graphics_540 = new cjs.Graphics().moveTo(136.2,324.8).lineTo(136.2,274.3).lineTo(332.4,274.3).lineTo(332.4,324.8).closePath();
	var mask_1_graphics_541 = new cjs.Graphics().moveTo(132.7,324.8).lineTo(132.7,274.3).lineTo(335.9,274.3).lineTo(335.9,324.8).closePath();
	var mask_1_graphics_542 = new cjs.Graphics().moveTo(129.1,324.8).lineTo(129.1,274.3).lineTo(339.5,274.3).lineTo(339.5,324.8).closePath();
	var mask_1_graphics_543 = new cjs.Graphics().moveTo(125.5,324.8).lineTo(125.5,274.3).lineTo(343.1,274.3).lineTo(343.1,324.8).closePath();
	var mask_1_graphics_544 = new cjs.Graphics().moveTo(122,324.8).lineTo(122,274.3).lineTo(346.6,274.3).lineTo(346.6,324.8).closePath();
	var mask_1_graphics_545 = new cjs.Graphics().moveTo(118.4,324.8).lineTo(118.4,274.3).lineTo(350.2,274.3).lineTo(350.2,324.8).closePath();
	var mask_1_graphics_546 = new cjs.Graphics().moveTo(114.8,324.8).lineTo(114.8,274.3).lineTo(353.8,274.3).lineTo(353.8,324.8).closePath();
	var mask_1_graphics_547 = new cjs.Graphics().moveTo(111.3,324.8).lineTo(111.3,274.3).lineTo(357.3,274.3).lineTo(357.3,324.8).closePath();
	var mask_1_graphics_548 = new cjs.Graphics().moveTo(107.7,324.8).lineTo(107.7,274.3).lineTo(360.9,274.3).lineTo(360.9,324.8).closePath();
	var mask_1_graphics_549 = new cjs.Graphics().moveTo(104.2,324.8).lineTo(104.2,274.3).lineTo(364.4,274.3).lineTo(364.4,324.8).closePath();
	var mask_1_graphics_550 = new cjs.Graphics().moveTo(100.6,324.8).lineTo(100.6,274.3).lineTo(368,274.3).lineTo(368,324.8).closePath();
	var mask_1_graphics_551 = new cjs.Graphics().moveTo(97,324.8).lineTo(97,274.3).lineTo(371.6,274.3).lineTo(371.6,324.8).closePath();
	var mask_1_graphics_552 = new cjs.Graphics().moveTo(93.5,324.8).lineTo(93.5,274.3).lineTo(375.1,274.3).lineTo(375.1,324.8).closePath();
	var mask_1_graphics_553 = new cjs.Graphics().moveTo(89.9,324.8).lineTo(89.9,274.3).lineTo(378.7,274.3).lineTo(378.7,324.8).closePath();
	var mask_1_graphics_554 = new cjs.Graphics().moveTo(86.4,324.8).lineTo(86.4,274.3).lineTo(382.2,274.3).lineTo(382.2,324.8).closePath();
	var mask_1_graphics_555 = new cjs.Graphics().moveTo(82.8,324.8).lineTo(82.8,274.3).lineTo(385.8,274.3).lineTo(385.8,324.8).closePath();
	var mask_1_graphics_556 = new cjs.Graphics().moveTo(79.2,324.8).lineTo(79.2,274.3).lineTo(389.4,274.3).lineTo(389.4,324.8).closePath();
	var mask_1_graphics_557 = new cjs.Graphics().moveTo(75.7,324.8).lineTo(75.7,274.3).lineTo(392.9,274.3).lineTo(392.9,324.8).closePath();
	var mask_1_graphics_558 = new cjs.Graphics().moveTo(72.1,324.8).lineTo(72.1,274.3).lineTo(396.5,274.3).lineTo(396.5,324.8).closePath();
	var mask_1_graphics_559 = new cjs.Graphics().moveTo(68.6,324.8).lineTo(68.6,274.3).lineTo(400,274.3).lineTo(400,324.8).closePath();
	var mask_1_graphics_560 = new cjs.Graphics().moveTo(65,324.8).lineTo(65,274.3).lineTo(403.6,274.3).lineTo(403.6,324.8).closePath();
	var mask_1_graphics_561 = new cjs.Graphics().moveTo(61.4,324.8).lineTo(61.4,274.3).lineTo(407.2,274.3).lineTo(407.2,324.8).closePath();
	var mask_1_graphics_562 = new cjs.Graphics().moveTo(57.9,324.8).lineTo(57.9,274.3).lineTo(410.7,274.3).lineTo(410.7,324.8).closePath();
	var mask_1_graphics_563 = new cjs.Graphics().moveTo(54.3,324.8).lineTo(54.3,274.3).lineTo(414.3,274.3).lineTo(414.3,324.8).closePath();
	var mask_1_graphics_564 = new cjs.Graphics().moveTo(50.8,324.8).lineTo(50.8,274.3).lineTo(417.8,274.3).lineTo(417.8,324.8).closePath();
	var mask_1_graphics_565 = new cjs.Graphics().moveTo(47.2,324.8).lineTo(47.2,274.3).lineTo(421.4,274.3).lineTo(421.4,324.8).closePath();
	var mask_1_graphics_566 = new cjs.Graphics().moveTo(43.6,324.8).lineTo(43.6,274.3).lineTo(425,274.3).lineTo(425,324.8).closePath();
	var mask_1_graphics_567 = new cjs.Graphics().moveTo(40.1,324.8).lineTo(40.1,274.3).lineTo(428.5,274.3).lineTo(428.5,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(524).to({graphics:mask_1_graphics_524,x:275.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_525,x:279,y:324.8}).wait(1).to({graphics:mask_1_graphics_526,x:282.5,y:324.8}).wait(1).to({graphics:mask_1_graphics_527,x:286.1,y:324.8}).wait(1).to({graphics:mask_1_graphics_528,x:289.7,y:324.8}).wait(1).to({graphics:mask_1_graphics_529,x:293.2,y:324.8}).wait(1).to({graphics:mask_1_graphics_530,x:296.8,y:324.8}).wait(1).to({graphics:mask_1_graphics_531,x:300.3,y:324.8}).wait(1).to({graphics:mask_1_graphics_532,x:303.9,y:324.8}).wait(1).to({graphics:mask_1_graphics_533,x:307.5,y:324.8}).wait(1).to({graphics:mask_1_graphics_534,x:311,y:324.8}).wait(1).to({graphics:mask_1_graphics_535,x:314.6,y:324.8}).wait(1).to({graphics:mask_1_graphics_536,x:318.1,y:324.8}).wait(1).to({graphics:mask_1_graphics_537,x:321.7,y:324.8}).wait(1).to({graphics:mask_1_graphics_538,x:325.3,y:324.8}).wait(1).to({graphics:mask_1_graphics_539,x:328.8,y:324.8}).wait(1).to({graphics:mask_1_graphics_540,x:332.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_541,x:335.9,y:324.8}).wait(1).to({graphics:mask_1_graphics_542,x:339.5,y:324.8}).wait(1).to({graphics:mask_1_graphics_543,x:343.1,y:324.8}).wait(1).to({graphics:mask_1_graphics_544,x:346.6,y:324.8}).wait(1).to({graphics:mask_1_graphics_545,x:350.2,y:324.8}).wait(1).to({graphics:mask_1_graphics_546,x:353.8,y:324.8}).wait(1).to({graphics:mask_1_graphics_547,x:357.3,y:324.8}).wait(1).to({graphics:mask_1_graphics_548,x:360.9,y:324.8}).wait(1).to({graphics:mask_1_graphics_549,x:364.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_550,x:368,y:324.8}).wait(1).to({graphics:mask_1_graphics_551,x:371.6,y:324.8}).wait(1).to({graphics:mask_1_graphics_552,x:375.1,y:324.8}).wait(1).to({graphics:mask_1_graphics_553,x:378.7,y:324.8}).wait(1).to({graphics:mask_1_graphics_554,x:382.2,y:324.8}).wait(1).to({graphics:mask_1_graphics_555,x:385.8,y:324.8}).wait(1).to({graphics:mask_1_graphics_556,x:389.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_557,x:392.9,y:324.8}).wait(1).to({graphics:mask_1_graphics_558,x:396.5,y:324.8}).wait(1).to({graphics:mask_1_graphics_559,x:400,y:324.8}).wait(1).to({graphics:mask_1_graphics_560,x:403.6,y:324.8}).wait(1).to({graphics:mask_1_graphics_561,x:407.2,y:324.8}).wait(1).to({graphics:mask_1_graphics_562,x:410.7,y:324.8}).wait(1).to({graphics:mask_1_graphics_563,x:414.3,y:324.8}).wait(1).to({graphics:mask_1_graphics_564,x:417.8,y:324.8}).wait(1).to({graphics:mask_1_graphics_565,x:421.4,y:324.8}).wait(1).to({graphics:mask_1_graphics_566,x:425,y:324.8}).wait(1).to({graphics:mask_1_graphics_567,x:428.5,y:324.8}).wait(8).to({graphics:null,x:0,y:0}).wait(414));

	// line_2_red
	this.instance_10 = new lib.line_2_red_1();
	this.instance_10.setTransform(700.5,627,1,1,0,0,0,149.5,15);
	this.instance_10._off = true;

	this.instance_10.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(524).to({_off:false},0).to({_off:true},51).wait(414));

	// line_2
	this.instance_11 = new lib.line_2_1();
	this.instance_11.setTransform(700.5,627,1,1,0,0,0,149.5,15);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(524).to({_off:false},0).to({_off:true},51).wait(414));

	// Layer 24 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_578 = new cjs.Graphics().moveTo(221.5,324.8).lineTo(221.5,274.3).lineTo(247.1,274.3).lineTo(247.1,324.8).closePath();
	var mask_2_graphics_579 = new cjs.Graphics().moveTo(218.2,324.8).lineTo(218.2,274.3).lineTo(250.4,274.3).lineTo(250.4,324.8).closePath();
	var mask_2_graphics_580 = new cjs.Graphics().moveTo(215,324.8).lineTo(215,274.3).lineTo(253.6,274.3).lineTo(253.6,324.8).closePath();
	var mask_2_graphics_581 = new cjs.Graphics().moveTo(211.8,324.8).lineTo(211.8,274.3).lineTo(256.8,274.3).lineTo(256.8,324.8).closePath();
	var mask_2_graphics_582 = new cjs.Graphics().moveTo(208.6,324.8).lineTo(208.6,274.3).lineTo(260,274.3).lineTo(260,324.8).closePath();
	var mask_2_graphics_583 = new cjs.Graphics().moveTo(205.3,324.8).lineTo(205.3,274.3).lineTo(263.3,274.3).lineTo(263.3,324.8).closePath();
	var mask_2_graphics_584 = new cjs.Graphics().moveTo(202.1,324.8).lineTo(202.1,274.3).lineTo(266.5,274.3).lineTo(266.5,324.8).closePath();
	var mask_2_graphics_585 = new cjs.Graphics().moveTo(198.9,324.8).lineTo(198.9,274.3).lineTo(269.7,274.3).lineTo(269.7,324.8).closePath();
	var mask_2_graphics_586 = new cjs.Graphics().moveTo(195.7,324.8).lineTo(195.7,274.3).lineTo(272.9,274.3).lineTo(272.9,324.8).closePath();
	var mask_2_graphics_587 = new cjs.Graphics().moveTo(192.4,324.8).lineTo(192.4,274.3).lineTo(276.2,274.3).lineTo(276.2,324.8).closePath();
	var mask_2_graphics_588 = new cjs.Graphics().moveTo(189.2,324.8).lineTo(189.2,274.3).lineTo(279.4,274.3).lineTo(279.4,324.8).closePath();
	var mask_2_graphics_589 = new cjs.Graphics().moveTo(186,324.8).lineTo(186,274.3).lineTo(282.6,274.3).lineTo(282.6,324.8).closePath();
	var mask_2_graphics_590 = new cjs.Graphics().moveTo(182.8,324.8).lineTo(182.8,274.3).lineTo(285.8,274.3).lineTo(285.8,324.8).closePath();
	var mask_2_graphics_591 = new cjs.Graphics().moveTo(179.5,324.8).lineTo(179.5,274.3).lineTo(289.1,274.3).lineTo(289.1,324.8).closePath();
	var mask_2_graphics_592 = new cjs.Graphics().moveTo(176.3,324.8).lineTo(176.3,274.3).lineTo(292.3,274.3).lineTo(292.3,324.8).closePath();
	var mask_2_graphics_593 = new cjs.Graphics().moveTo(173.1,324.8).lineTo(173.1,274.3).lineTo(295.5,274.3).lineTo(295.5,324.8).closePath();
	var mask_2_graphics_594 = new cjs.Graphics().moveTo(169.9,324.8).lineTo(169.9,274.3).lineTo(298.7,274.3).lineTo(298.7,324.8).closePath();
	var mask_2_graphics_595 = new cjs.Graphics().moveTo(166.6,324.8).lineTo(166.6,274.3).lineTo(302,274.3).lineTo(302,324.8).closePath();
	var mask_2_graphics_596 = new cjs.Graphics().moveTo(163.4,324.8).lineTo(163.4,274.3).lineTo(305.2,274.3).lineTo(305.2,324.8).closePath();
	var mask_2_graphics_597 = new cjs.Graphics().moveTo(160.2,324.8).lineTo(160.2,274.3).lineTo(308.4,274.3).lineTo(308.4,324.8).closePath();
	var mask_2_graphics_598 = new cjs.Graphics().moveTo(157,324.8).lineTo(157,274.3).lineTo(311.6,274.3).lineTo(311.6,324.8).closePath();
	var mask_2_graphics_599 = new cjs.Graphics().moveTo(153.7,324.8).lineTo(153.7,274.3).lineTo(314.9,274.3).lineTo(314.9,324.8).closePath();
	var mask_2_graphics_600 = new cjs.Graphics().moveTo(150.5,324.8).lineTo(150.5,274.3).lineTo(318.1,274.3).lineTo(318.1,324.8).closePath();
	var mask_2_graphics_601 = new cjs.Graphics().moveTo(147.3,324.8).lineTo(147.3,274.3).lineTo(321.3,274.3).lineTo(321.3,324.8).closePath();
	var mask_2_graphics_602 = new cjs.Graphics().moveTo(144.1,324.8).lineTo(144.1,274.3).lineTo(324.5,274.3).lineTo(324.5,324.8).closePath();
	var mask_2_graphics_603 = new cjs.Graphics().moveTo(140.8,324.8).lineTo(140.8,274.3).lineTo(327.8,274.3).lineTo(327.8,324.8).closePath();
	var mask_2_graphics_604 = new cjs.Graphics().moveTo(137.6,324.8).lineTo(137.6,274.3).lineTo(331,274.3).lineTo(331,324.8).closePath();
	var mask_2_graphics_605 = new cjs.Graphics().moveTo(134.4,324.8).lineTo(134.4,274.3).lineTo(334.2,274.3).lineTo(334.2,324.8).closePath();
	var mask_2_graphics_606 = new cjs.Graphics().moveTo(131.2,324.8).lineTo(131.2,274.3).lineTo(337.4,274.3).lineTo(337.4,324.8).closePath();
	var mask_2_graphics_607 = new cjs.Graphics().moveTo(127.9,324.8).lineTo(127.9,274.3).lineTo(340.7,274.3).lineTo(340.7,324.8).closePath();
	var mask_2_graphics_608 = new cjs.Graphics().moveTo(124.7,324.8).lineTo(124.7,274.3).lineTo(343.9,274.3).lineTo(343.9,324.8).closePath();
	var mask_2_graphics_609 = new cjs.Graphics().moveTo(121.5,324.8).lineTo(121.5,274.3).lineTo(347.1,274.3).lineTo(347.1,324.8).closePath();
	var mask_2_graphics_610 = new cjs.Graphics().moveTo(118.3,324.8).lineTo(118.3,274.3).lineTo(350.3,274.3).lineTo(350.3,324.8).closePath();
	var mask_2_graphics_611 = new cjs.Graphics().moveTo(115,324.8).lineTo(115,274.3).lineTo(353.6,274.3).lineTo(353.6,324.8).closePath();
	var mask_2_graphics_612 = new cjs.Graphics().moveTo(111.8,324.8).lineTo(111.8,274.3).lineTo(356.8,274.3).lineTo(356.8,324.8).closePath();
	var mask_2_graphics_613 = new cjs.Graphics().moveTo(108.6,324.8).lineTo(108.6,274.3).lineTo(360,274.3).lineTo(360,324.8).closePath();
	var mask_2_graphics_614 = new cjs.Graphics().moveTo(105.4,324.8).lineTo(105.4,274.3).lineTo(363.2,274.3).lineTo(363.2,324.8).closePath();
	var mask_2_graphics_615 = new cjs.Graphics().moveTo(102.1,324.8).lineTo(102.1,274.3).lineTo(366.5,274.3).lineTo(366.5,324.8).closePath();
	var mask_2_graphics_616 = new cjs.Graphics().moveTo(98.9,324.8).lineTo(98.9,274.3).lineTo(369.7,274.3).lineTo(369.7,324.8).closePath();
	var mask_2_graphics_617 = new cjs.Graphics().moveTo(95.7,324.8).lineTo(95.7,274.3).lineTo(372.9,274.3).lineTo(372.9,324.8).closePath();
	var mask_2_graphics_618 = new cjs.Graphics().moveTo(92.5,324.8).lineTo(92.5,274.3).lineTo(376.1,274.3).lineTo(376.1,324.8).closePath();
	var mask_2_graphics_619 = new cjs.Graphics().moveTo(89.3,324.8).lineTo(89.3,274.3).lineTo(379.3,274.3).lineTo(379.3,324.8).closePath();
	var mask_2_graphics_620 = new cjs.Graphics().moveTo(86,324.8).lineTo(86,274.3).lineTo(382.6,274.3).lineTo(382.6,324.8).closePath();
	var mask_2_graphics_621 = new cjs.Graphics().moveTo(82.8,324.8).lineTo(82.8,274.3).lineTo(385.8,274.3).lineTo(385.8,324.8).closePath();
	var mask_2_graphics_622 = new cjs.Graphics().moveTo(79.6,324.8).lineTo(79.6,274.3).lineTo(389,274.3).lineTo(389,324.8).closePath();
	var mask_2_graphics_623 = new cjs.Graphics().moveTo(76.4,324.8).lineTo(76.4,274.3).lineTo(392.2,274.3).lineTo(392.2,324.8).closePath();
	var mask_2_graphics_624 = new cjs.Graphics().moveTo(73.1,324.8).lineTo(73.1,274.3).lineTo(395.5,274.3).lineTo(395.5,324.8).closePath();
	var mask_2_graphics_625 = new cjs.Graphics().moveTo(69.9,324.8).lineTo(69.9,274.3).lineTo(398.7,274.3).lineTo(398.7,324.8).closePath();
	var mask_2_graphics_626 = new cjs.Graphics().moveTo(66.7,324.8).lineTo(66.7,274.3).lineTo(401.9,274.3).lineTo(401.9,324.8).closePath();
	var mask_2_graphics_627 = new cjs.Graphics().moveTo(63.5,324.8).lineTo(63.5,274.3).lineTo(405.1,274.3).lineTo(405.1,324.8).closePath();
	var mask_2_graphics_628 = new cjs.Graphics().moveTo(60.2,324.8).lineTo(60.2,274.3).lineTo(408.4,274.3).lineTo(408.4,324.8).closePath();
	var mask_2_graphics_629 = new cjs.Graphics().moveTo(57,324.8).lineTo(57,274.3).lineTo(411.6,274.3).lineTo(411.6,324.8).closePath();
	var mask_2_graphics_630 = new cjs.Graphics().moveTo(53.8,324.8).lineTo(53.8,274.3).lineTo(414.8,274.3).lineTo(414.8,324.8).closePath();
	var mask_2_graphics_631 = new cjs.Graphics().moveTo(50.6,324.8).lineTo(50.6,274.3).lineTo(418,274.3).lineTo(418,324.8).closePath();
	var mask_2_graphics_632 = new cjs.Graphics().moveTo(47.3,324.8).lineTo(47.3,274.3).lineTo(421.3,274.3).lineTo(421.3,324.8).closePath();
	var mask_2_graphics_633 = new cjs.Graphics().moveTo(44.1,324.8).lineTo(44.1,274.3).lineTo(424.5,274.3).lineTo(424.5,324.8).closePath();
	var mask_2_graphics_634 = new cjs.Graphics().moveTo(40.9,324.8).lineTo(40.9,274.3).lineTo(427.7,274.3).lineTo(427.7,324.8).closePath();
	var mask_2_graphics_635 = new cjs.Graphics().moveTo(37.7,324.8).lineTo(37.7,274.3).lineTo(430.9,274.3).lineTo(430.9,324.8).closePath();
	var mask_2_graphics_636 = new cjs.Graphics().moveTo(34.4,324.8).lineTo(34.4,274.3).lineTo(434.2,274.3).lineTo(434.2,324.8).closePath();
	var mask_2_graphics_637 = new cjs.Graphics().moveTo(31.2,324.8).lineTo(31.2,274.3).lineTo(437.4,274.3).lineTo(437.4,324.8).closePath();
	var mask_2_graphics_638 = new cjs.Graphics().moveTo(28,324.8).lineTo(28,274.3).lineTo(440.6,274.3).lineTo(440.6,324.8).closePath();
	var mask_2_graphics_639 = new cjs.Graphics().moveTo(24.8,324.8).lineTo(24.8,274.3).lineTo(443.8,274.3).lineTo(443.8,324.8).closePath();
	var mask_2_graphics_640 = new cjs.Graphics().moveTo(21.5,324.8).lineTo(21.5,274.3).lineTo(447.1,274.3).lineTo(447.1,324.8).closePath();
	var mask_2_graphics_641 = new cjs.Graphics().moveTo(18.3,324.8).lineTo(18.3,274.3).lineTo(450.3,274.3).lineTo(450.3,324.8).closePath();
	var mask_2_graphics_642 = new cjs.Graphics().moveTo(15.1,324.8).lineTo(15.1,274.3).lineTo(453.5,274.3).lineTo(453.5,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(578).to({graphics:mask_2_graphics_578,x:247.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_579,x:250.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_580,x:253.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_581,x:256.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_582,x:260,y:324.8}).wait(1).to({graphics:mask_2_graphics_583,x:263.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_584,x:266.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_585,x:269.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_586,x:272.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_587,x:276.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_588,x:279.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_589,x:282.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_590,x:285.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_591,x:289.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_592,x:292.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_593,x:295.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_594,x:298.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_595,x:302,y:324.8}).wait(1).to({graphics:mask_2_graphics_596,x:305.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_597,x:308.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_598,x:311.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_599,x:314.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_600,x:318.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_601,x:321.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_602,x:324.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_603,x:327.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_604,x:331,y:324.8}).wait(1).to({graphics:mask_2_graphics_605,x:334.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_606,x:337.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_607,x:340.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_608,x:343.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_609,x:347.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_610,x:350.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_611,x:353.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_612,x:356.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_613,x:360,y:324.8}).wait(1).to({graphics:mask_2_graphics_614,x:363.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_615,x:366.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_616,x:369.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_617,x:372.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_618,x:376.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_619,x:379.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_620,x:382.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_621,x:385.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_622,x:389,y:324.8}).wait(1).to({graphics:mask_2_graphics_623,x:392.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_624,x:395.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_625,x:398.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_626,x:401.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_627,x:405.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_628,x:408.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_629,x:411.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_630,x:414.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_631,x:418,y:324.8}).wait(1).to({graphics:mask_2_graphics_632,x:421.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_633,x:424.5,y:324.8}).wait(1).to({graphics:mask_2_graphics_634,x:427.7,y:324.8}).wait(1).to({graphics:mask_2_graphics_635,x:430.9,y:324.8}).wait(1).to({graphics:mask_2_graphics_636,x:434.2,y:324.8}).wait(1).to({graphics:mask_2_graphics_637,x:437.4,y:324.8}).wait(1).to({graphics:mask_2_graphics_638,x:440.6,y:324.8}).wait(1).to({graphics:mask_2_graphics_639,x:443.8,y:324.8}).wait(1).to({graphics:mask_2_graphics_640,x:447.1,y:324.8}).wait(1).to({graphics:mask_2_graphics_641,x:450.3,y:324.8}).wait(1).to({graphics:mask_2_graphics_642,x:453.5,y:324.8}).wait(3).to({graphics:null,x:0,y:0}).wait(344));

	// line_3_red
	this.instance_12 = new lib.line_3_red_1();
	this.instance_12.setTransform(700.5,628,1,1,0,0,0,203.5,16);
	this.instance_12._off = true;

	this.instance_12.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(578).to({_off:false},0).to({_off:true},67).wait(344));

	// line_3
	this.instance_13 = new lib.line_3_1();
	this.instance_13.setTransform(700.5,628,1,1,0,0,0,203.5,16);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(578).to({_off:false},0).to({_off:true},67).wait(344));

	// Layer 25 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_650 = new cjs.Graphics().moveTo(183.1,324.8).lineTo(183.1,274.3).lineTo(285.5,274.3).lineTo(285.5,324.8).closePath();
	var mask_3_graphics_651 = new cjs.Graphics().moveTo(180.3,324.8).lineTo(180.3,274.3).lineTo(288.3,274.3).lineTo(288.3,324.8).closePath();
	var mask_3_graphics_652 = new cjs.Graphics().moveTo(177.6,324.8).lineTo(177.6,274.3).lineTo(291,274.3).lineTo(291,324.8).closePath();
	var mask_3_graphics_653 = new cjs.Graphics().moveTo(174.9,324.8).lineTo(174.9,274.3).lineTo(293.7,274.3).lineTo(293.7,324.8).closePath();
	var mask_3_graphics_654 = new cjs.Graphics().moveTo(172.2,324.8).lineTo(172.2,274.3).lineTo(296.4,274.3).lineTo(296.4,324.8).closePath();
	var mask_3_graphics_655 = new cjs.Graphics().moveTo(169.5,324.8).lineTo(169.5,274.3).lineTo(299.1,274.3).lineTo(299.1,324.8).closePath();
	var mask_3_graphics_656 = new cjs.Graphics().moveTo(166.7,324.8).lineTo(166.7,274.3).lineTo(301.9,274.3).lineTo(301.9,324.8).closePath();
	var mask_3_graphics_657 = new cjs.Graphics().moveTo(164,324.8).lineTo(164,274.3).lineTo(304.6,274.3).lineTo(304.6,324.8).closePath();
	var mask_3_graphics_658 = new cjs.Graphics().moveTo(161.3,324.8).lineTo(161.3,274.3).lineTo(307.3,274.3).lineTo(307.3,324.8).closePath();
	var mask_3_graphics_659 = new cjs.Graphics().moveTo(158.6,324.8).lineTo(158.6,274.3).lineTo(310,274.3).lineTo(310,324.8).closePath();
	var mask_3_graphics_660 = new cjs.Graphics().moveTo(155.8,324.8).lineTo(155.8,274.3).lineTo(312.8,274.3).lineTo(312.8,324.8).closePath();
	var mask_3_graphics_661 = new cjs.Graphics().moveTo(153.1,324.8).lineTo(153.1,274.3).lineTo(315.5,274.3).lineTo(315.5,324.8).closePath();
	var mask_3_graphics_662 = new cjs.Graphics().moveTo(150.4,324.8).lineTo(150.4,274.3).lineTo(318.2,274.3).lineTo(318.2,324.8).closePath();
	var mask_3_graphics_663 = new cjs.Graphics().moveTo(147.7,324.8).lineTo(147.7,274.3).lineTo(320.9,274.3).lineTo(320.9,324.8).closePath();
	var mask_3_graphics_664 = new cjs.Graphics().moveTo(144.9,324.8).lineTo(144.9,274.3).lineTo(323.7,274.3).lineTo(323.7,324.8).closePath();
	var mask_3_graphics_665 = new cjs.Graphics().moveTo(142.2,324.8).lineTo(142.2,274.3).lineTo(326.4,274.3).lineTo(326.4,324.8).closePath();
	var mask_3_graphics_666 = new cjs.Graphics().moveTo(139.5,324.8).lineTo(139.5,274.3).lineTo(329.1,274.3).lineTo(329.1,324.8).closePath();
	var mask_3_graphics_667 = new cjs.Graphics().moveTo(136.8,324.8).lineTo(136.8,274.3).lineTo(331.8,274.3).lineTo(331.8,324.8).closePath();
	var mask_3_graphics_668 = new cjs.Graphics().moveTo(134.1,324.8).lineTo(134.1,274.3).lineTo(334.5,274.3).lineTo(334.5,324.8).closePath();
	var mask_3_graphics_669 = new cjs.Graphics().moveTo(131.3,324.8).lineTo(131.3,274.3).lineTo(337.3,274.3).lineTo(337.3,324.8).closePath();
	var mask_3_graphics_670 = new cjs.Graphics().moveTo(128.6,324.8).lineTo(128.6,274.3).lineTo(340,274.3).lineTo(340,324.8).closePath();
	var mask_3_graphics_671 = new cjs.Graphics().moveTo(125.9,324.8).lineTo(125.9,274.3).lineTo(342.7,274.3).lineTo(342.7,324.8).closePath();
	var mask_3_graphics_672 = new cjs.Graphics().moveTo(123.2,324.8).lineTo(123.2,274.3).lineTo(345.4,274.3).lineTo(345.4,324.8).closePath();
	var mask_3_graphics_673 = new cjs.Graphics().moveTo(120.4,324.8).lineTo(120.4,274.3).lineTo(348.2,274.3).lineTo(348.2,324.8).closePath();
	var mask_3_graphics_674 = new cjs.Graphics().moveTo(117.7,324.8).lineTo(117.7,274.3).lineTo(350.9,274.3).lineTo(350.9,324.8).closePath();
	var mask_3_graphics_675 = new cjs.Graphics().moveTo(115,324.8).lineTo(115,274.3).lineTo(353.6,274.3).lineTo(353.6,324.8).closePath();
	var mask_3_graphics_676 = new cjs.Graphics().moveTo(112.3,324.8).lineTo(112.3,274.3).lineTo(356.3,274.3).lineTo(356.3,324.8).closePath();
	var mask_3_graphics_677 = new cjs.Graphics().moveTo(109.5,324.8).lineTo(109.5,274.3).lineTo(359.1,274.3).lineTo(359.1,324.8).closePath();
	var mask_3_graphics_678 = new cjs.Graphics().moveTo(106.8,324.8).lineTo(106.8,274.3).lineTo(361.8,274.3).lineTo(361.8,324.8).closePath();
	var mask_3_graphics_679 = new cjs.Graphics().moveTo(104.1,324.8).lineTo(104.1,274.3).lineTo(364.5,274.3).lineTo(364.5,324.8).closePath();
	var mask_3_graphics_680 = new cjs.Graphics().moveTo(101.4,324.8).lineTo(101.4,274.3).lineTo(367.2,274.3).lineTo(367.2,324.8).closePath();
	var mask_3_graphics_681 = new cjs.Graphics().moveTo(98.7,324.8).lineTo(98.7,274.3).lineTo(369.9,274.3).lineTo(369.9,324.8).closePath();
	var mask_3_graphics_682 = new cjs.Graphics().moveTo(95.9,324.8).lineTo(95.9,274.3).lineTo(372.7,274.3).lineTo(372.7,324.8).closePath();
	var mask_3_graphics_683 = new cjs.Graphics().moveTo(93.2,324.8).lineTo(93.2,274.3).lineTo(375.4,274.3).lineTo(375.4,324.8).closePath();
	var mask_3_graphics_684 = new cjs.Graphics().moveTo(90.5,324.8).lineTo(90.5,274.3).lineTo(378.1,274.3).lineTo(378.1,324.8).closePath();
	var mask_3_graphics_685 = new cjs.Graphics().moveTo(87.8,324.8).lineTo(87.8,274.3).lineTo(380.8,274.3).lineTo(380.8,324.8).closePath();
	var mask_3_graphics_686 = new cjs.Graphics().moveTo(85,324.8).lineTo(85,274.3).lineTo(383.6,274.3).lineTo(383.6,324.8).closePath();
	var mask_3_graphics_687 = new cjs.Graphics().moveTo(82.3,324.8).lineTo(82.3,274.3).lineTo(386.3,274.3).lineTo(386.3,324.8).closePath();
	var mask_3_graphics_688 = new cjs.Graphics().moveTo(79.6,324.8).lineTo(79.6,274.3).lineTo(389,274.3).lineTo(389,324.8).closePath();
	var mask_3_graphics_689 = new cjs.Graphics().moveTo(76.9,324.8).lineTo(76.9,274.3).lineTo(391.7,274.3).lineTo(391.7,324.8).closePath();
	var mask_3_graphics_690 = new cjs.Graphics().moveTo(74.1,324.8).lineTo(74.1,274.3).lineTo(394.5,274.3).lineTo(394.5,324.8).closePath();
	var mask_3_graphics_691 = new cjs.Graphics().moveTo(71.4,324.8).lineTo(71.4,274.3).lineTo(397.2,274.3).lineTo(397.2,324.8).closePath();
	var mask_3_graphics_692 = new cjs.Graphics().moveTo(68.7,324.8).lineTo(68.7,274.3).lineTo(399.9,274.3).lineTo(399.9,324.8).closePath();
	var mask_3_graphics_693 = new cjs.Graphics().moveTo(66,324.8).lineTo(66,274.3).lineTo(402.6,274.3).lineTo(402.6,324.8).closePath();
	var mask_3_graphics_694 = new cjs.Graphics().moveTo(63.3,324.8).lineTo(63.3,274.3).lineTo(405.3,274.3).lineTo(405.3,324.8).closePath();
	var mask_3_graphics_695 = new cjs.Graphics().moveTo(60.5,324.8).lineTo(60.5,274.3).lineTo(408.1,274.3).lineTo(408.1,324.8).closePath();
	var mask_3_graphics_696 = new cjs.Graphics().moveTo(57.8,324.8).lineTo(57.8,274.3).lineTo(410.8,274.3).lineTo(410.8,324.8).closePath();
	var mask_3_graphics_697 = new cjs.Graphics().moveTo(55.1,324.8).lineTo(55.1,274.3).lineTo(413.5,274.3).lineTo(413.5,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(650).to({graphics:mask_3_graphics_650,x:285.5,y:324.8}).wait(1).to({graphics:mask_3_graphics_651,x:288.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_652,x:291,y:324.8}).wait(1).to({graphics:mask_3_graphics_653,x:293.7,y:324.8}).wait(1).to({graphics:mask_3_graphics_654,x:296.4,y:324.8}).wait(1).to({graphics:mask_3_graphics_655,x:299.1,y:324.8}).wait(1).to({graphics:mask_3_graphics_656,x:301.9,y:324.8}).wait(1).to({graphics:mask_3_graphics_657,x:304.6,y:324.8}).wait(1).to({graphics:mask_3_graphics_658,x:307.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_659,x:310,y:324.8}).wait(1).to({graphics:mask_3_graphics_660,x:312.8,y:324.8}).wait(1).to({graphics:mask_3_graphics_661,x:315.5,y:324.8}).wait(1).to({graphics:mask_3_graphics_662,x:318.2,y:324.8}).wait(1).to({graphics:mask_3_graphics_663,x:320.9,y:324.8}).wait(1).to({graphics:mask_3_graphics_664,x:323.7,y:324.8}).wait(1).to({graphics:mask_3_graphics_665,x:326.4,y:324.8}).wait(1).to({graphics:mask_3_graphics_666,x:329.1,y:324.8}).wait(1).to({graphics:mask_3_graphics_667,x:331.8,y:324.8}).wait(1).to({graphics:mask_3_graphics_668,x:334.5,y:324.8}).wait(1).to({graphics:mask_3_graphics_669,x:337.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_670,x:340,y:324.8}).wait(1).to({graphics:mask_3_graphics_671,x:342.7,y:324.8}).wait(1).to({graphics:mask_3_graphics_672,x:345.4,y:324.8}).wait(1).to({graphics:mask_3_graphics_673,x:348.2,y:324.8}).wait(1).to({graphics:mask_3_graphics_674,x:350.9,y:324.8}).wait(1).to({graphics:mask_3_graphics_675,x:353.6,y:324.8}).wait(1).to({graphics:mask_3_graphics_676,x:356.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_677,x:359.1,y:324.8}).wait(1).to({graphics:mask_3_graphics_678,x:361.8,y:324.8}).wait(1).to({graphics:mask_3_graphics_679,x:364.5,y:324.8}).wait(1).to({graphics:mask_3_graphics_680,x:367.2,y:324.8}).wait(1).to({graphics:mask_3_graphics_681,x:369.9,y:324.8}).wait(1).to({graphics:mask_3_graphics_682,x:372.7,y:324.8}).wait(1).to({graphics:mask_3_graphics_683,x:375.4,y:324.8}).wait(1).to({graphics:mask_3_graphics_684,x:378.1,y:324.8}).wait(1).to({graphics:mask_3_graphics_685,x:380.8,y:324.8}).wait(1).to({graphics:mask_3_graphics_686,x:383.6,y:324.8}).wait(1).to({graphics:mask_3_graphics_687,x:386.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_688,x:389,y:324.8}).wait(1).to({graphics:mask_3_graphics_689,x:391.7,y:324.8}).wait(1).to({graphics:mask_3_graphics_690,x:394.5,y:324.8}).wait(1).to({graphics:mask_3_graphics_691,x:397.2,y:324.8}).wait(1).to({graphics:mask_3_graphics_692,x:399.9,y:324.8}).wait(1).to({graphics:mask_3_graphics_693,x:402.6,y:324.8}).wait(1).to({graphics:mask_3_graphics_694,x:405.3,y:324.8}).wait(1).to({graphics:mask_3_graphics_695,x:408.1,y:324.8}).wait(1).to({graphics:mask_3_graphics_696,x:410.8,y:324.8}).wait(1).to({graphics:mask_3_graphics_697,x:413.5,y:324.8}).wait(6).to({graphics:null,x:0,y:0}).wait(286));

	// line_4_red
	this.instance_14 = new lib.line_4_red_1();
	this.instance_14.setTransform(700.5,624,1,1,0,0,0,126.5,12);
	this.instance_14._off = true;

	this.instance_14.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(650).to({_off:false},0).to({_off:true},53).wait(286));

	// line_4
	this.instance_15 = new lib.line_4_1();
	this.instance_15.setTransform(700.5,624,1,1,0,0,0,126.5,12);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(650).to({_off:false},0).to({_off:true},53).wait(286));

	// Layer 26 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_704 = new cjs.Graphics().moveTo(173.7,324.8).lineTo(173.7,274.3).lineTo(294.9,274.3).lineTo(294.9,324.8).closePath();
	var mask_4_graphics_705 = new cjs.Graphics().moveTo(171.2,324.8).lineTo(171.2,274.3).lineTo(297.4,274.3).lineTo(297.4,324.8).closePath();
	var mask_4_graphics_706 = new cjs.Graphics().moveTo(168.8,324.8).lineTo(168.8,274.3).lineTo(299.8,274.3).lineTo(299.8,324.8).closePath();
	var mask_4_graphics_707 = new cjs.Graphics().moveTo(166.4,324.8).lineTo(166.4,274.3).lineTo(302.2,274.3).lineTo(302.2,324.8).closePath();
	var mask_4_graphics_708 = new cjs.Graphics().moveTo(164,324.8).lineTo(164,274.3).lineTo(304.6,274.3).lineTo(304.6,324.8).closePath();
	var mask_4_graphics_709 = new cjs.Graphics().moveTo(161.5,324.8).lineTo(161.5,274.3).lineTo(307.1,274.3).lineTo(307.1,324.8).closePath();
	var mask_4_graphics_710 = new cjs.Graphics().moveTo(159.1,324.8).lineTo(159.1,274.3).lineTo(309.5,274.3).lineTo(309.5,324.8).closePath();
	var mask_4_graphics_711 = new cjs.Graphics().moveTo(156.7,324.8).lineTo(156.7,274.3).lineTo(311.9,274.3).lineTo(311.9,324.8).closePath();
	var mask_4_graphics_712 = new cjs.Graphics().moveTo(154.2,324.8).lineTo(154.2,274.3).lineTo(314.4,274.3).lineTo(314.4,324.8).closePath();
	var mask_4_graphics_713 = new cjs.Graphics().moveTo(151.8,324.8).lineTo(151.8,274.3).lineTo(316.8,274.3).lineTo(316.8,324.8).closePath();
	var mask_4_graphics_714 = new cjs.Graphics().moveTo(149.4,324.8).lineTo(149.4,274.3).lineTo(319.2,274.3).lineTo(319.2,324.8).closePath();
	var mask_4_graphics_715 = new cjs.Graphics().moveTo(147,324.8).lineTo(147,274.3).lineTo(321.6,274.3).lineTo(321.6,324.8).closePath();
	var mask_4_graphics_716 = new cjs.Graphics().moveTo(144.5,324.8).lineTo(144.5,274.3).lineTo(324.1,274.3).lineTo(324.1,324.8).closePath();
	var mask_4_graphics_717 = new cjs.Graphics().moveTo(142.1,324.8).lineTo(142.1,274.3).lineTo(326.5,274.3).lineTo(326.5,324.8).closePath();
	var mask_4_graphics_718 = new cjs.Graphics().moveTo(139.7,324.8).lineTo(139.7,274.3).lineTo(328.9,274.3).lineTo(328.9,324.8).closePath();
	var mask_4_graphics_719 = new cjs.Graphics().moveTo(137.2,324.8).lineTo(137.2,274.3).lineTo(331.4,274.3).lineTo(331.4,324.8).closePath();
	var mask_4_graphics_720 = new cjs.Graphics().moveTo(134.8,324.8).lineTo(134.8,274.3).lineTo(333.8,274.3).lineTo(333.8,324.8).closePath();
	var mask_4_graphics_721 = new cjs.Graphics().moveTo(132.4,324.8).lineTo(132.4,274.3).lineTo(336.2,274.3).lineTo(336.2,324.8).closePath();
	var mask_4_graphics_722 = new cjs.Graphics().moveTo(130,324.8).lineTo(130,274.3).lineTo(338.6,274.3).lineTo(338.6,324.8).closePath();
	var mask_4_graphics_723 = new cjs.Graphics().moveTo(127.5,324.8).lineTo(127.5,274.3).lineTo(341.1,274.3).lineTo(341.1,324.8).closePath();
	var mask_4_graphics_724 = new cjs.Graphics().moveTo(125.1,324.8).lineTo(125.1,274.3).lineTo(343.5,274.3).lineTo(343.5,324.8).closePath();
	var mask_4_graphics_725 = new cjs.Graphics().moveTo(122.7,324.8).lineTo(122.7,274.3).lineTo(345.9,274.3).lineTo(345.9,324.8).closePath();
	var mask_4_graphics_726 = new cjs.Graphics().moveTo(120.2,324.8).lineTo(120.2,274.3).lineTo(348.4,274.3).lineTo(348.4,324.8).closePath();
	var mask_4_graphics_727 = new cjs.Graphics().moveTo(117.8,324.8).lineTo(117.8,274.3).lineTo(350.8,274.3).lineTo(350.8,324.8).closePath();
	var mask_4_graphics_728 = new cjs.Graphics().moveTo(115.4,324.8).lineTo(115.4,274.3).lineTo(353.2,274.3).lineTo(353.2,324.8).closePath();
	var mask_4_graphics_729 = new cjs.Graphics().moveTo(112.9,324.8).lineTo(112.9,274.3).lineTo(355.7,274.3).lineTo(355.7,324.8).closePath();
	var mask_4_graphics_730 = new cjs.Graphics().moveTo(110.5,324.8).lineTo(110.5,274.3).lineTo(358.1,274.3).lineTo(358.1,324.8).closePath();
	var mask_4_graphics_731 = new cjs.Graphics().moveTo(108.1,324.8).lineTo(108.1,274.3).lineTo(360.5,274.3).lineTo(360.5,324.8).closePath();
	var mask_4_graphics_732 = new cjs.Graphics().moveTo(105.7,324.8).lineTo(105.7,274.3).lineTo(362.9,274.3).lineTo(362.9,324.8).closePath();
	var mask_4_graphics_733 = new cjs.Graphics().moveTo(103.2,324.8).lineTo(103.2,274.3).lineTo(365.4,274.3).lineTo(365.4,324.8).closePath();
	var mask_4_graphics_734 = new cjs.Graphics().moveTo(100.8,324.8).lineTo(100.8,274.3).lineTo(367.8,274.3).lineTo(367.8,324.8).closePath();
	var mask_4_graphics_735 = new cjs.Graphics().moveTo(98.4,324.8).lineTo(98.4,274.3).lineTo(370.2,274.3).lineTo(370.2,324.8).closePath();
	var mask_4_graphics_736 = new cjs.Graphics().moveTo(95.9,324.8).lineTo(95.9,274.3).lineTo(372.7,274.3).lineTo(372.7,324.8).closePath();
	var mask_4_graphics_737 = new cjs.Graphics().moveTo(93.5,324.8).lineTo(93.5,274.3).lineTo(375.1,274.3).lineTo(375.1,324.8).closePath();
	var mask_4_graphics_738 = new cjs.Graphics().moveTo(91.1,324.8).lineTo(91.1,274.3).lineTo(377.5,274.3).lineTo(377.5,324.8).closePath();
	var mask_4_graphics_739 = new cjs.Graphics().moveTo(88.7,324.8).lineTo(88.7,274.3).lineTo(379.9,274.3).lineTo(379.9,324.8).closePath();
	var mask_4_graphics_740 = new cjs.Graphics().moveTo(86.2,324.8).lineTo(86.2,274.3).lineTo(382.4,274.3).lineTo(382.4,324.8).closePath();
	var mask_4_graphics_741 = new cjs.Graphics().moveTo(83.8,324.8).lineTo(83.8,274.3).lineTo(384.8,274.3).lineTo(384.8,324.8).closePath();
	var mask_4_graphics_742 = new cjs.Graphics().moveTo(81.4,324.8).lineTo(81.4,274.3).lineTo(387.2,274.3).lineTo(387.2,324.8).closePath();
	var mask_4_graphics_743 = new cjs.Graphics().moveTo(78.9,324.8).lineTo(78.9,274.3).lineTo(389.7,274.3).lineTo(389.7,324.8).closePath();
	var mask_4_graphics_744 = new cjs.Graphics().moveTo(76.5,324.8).lineTo(76.5,274.3).lineTo(392.1,274.3).lineTo(392.1,324.8).closePath();
	var mask_4_graphics_745 = new cjs.Graphics().moveTo(74.1,324.8).lineTo(74.1,274.3).lineTo(394.5,274.3).lineTo(394.5,324.8).closePath();
	var mask_4_graphics_746 = new cjs.Graphics().moveTo(71.7,324.8).lineTo(71.7,274.3).lineTo(396.9,274.3).lineTo(396.9,324.8).closePath();
	var mask_4_graphics_747 = new cjs.Graphics().moveTo(69.2,324.8).lineTo(69.2,274.3).lineTo(399.4,274.3).lineTo(399.4,324.8).closePath();
	var mask_4_graphics_748 = new cjs.Graphics().moveTo(66.8,324.8).lineTo(66.8,274.3).lineTo(401.8,274.3).lineTo(401.8,324.8).closePath();
	var mask_4_graphics_749 = new cjs.Graphics().moveTo(64.4,324.8).lineTo(64.4,274.3).lineTo(404.2,274.3).lineTo(404.2,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(704).to({graphics:mask_4_graphics_704,x:294.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_705,x:297.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_706,x:299.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_707,x:302.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_708,x:304.6,y:324.8}).wait(1).to({graphics:mask_4_graphics_709,x:307.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_710,x:309.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_711,x:311.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_712,x:314.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_713,x:316.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_714,x:319.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_715,x:321.6,y:324.8}).wait(1).to({graphics:mask_4_graphics_716,x:324.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_717,x:326.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_718,x:328.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_719,x:331.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_720,x:333.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_721,x:336.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_722,x:338.6,y:324.8}).wait(1).to({graphics:mask_4_graphics_723,x:341.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_724,x:343.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_725,x:345.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_726,x:348.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_727,x:350.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_728,x:353.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_729,x:355.7,y:324.8}).wait(1).to({graphics:mask_4_graphics_730,x:358.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_731,x:360.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_732,x:362.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_733,x:365.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_734,x:367.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_735,x:370.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_736,x:372.7,y:324.8}).wait(1).to({graphics:mask_4_graphics_737,x:375.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_738,x:377.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_739,x:379.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_740,x:382.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_741,x:384.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_742,x:387.2,y:324.8}).wait(1).to({graphics:mask_4_graphics_743,x:389.7,y:324.8}).wait(1).to({graphics:mask_4_graphics_744,x:392.1,y:324.8}).wait(1).to({graphics:mask_4_graphics_745,x:394.5,y:324.8}).wait(1).to({graphics:mask_4_graphics_746,x:396.9,y:324.8}).wait(1).to({graphics:mask_4_graphics_747,x:399.4,y:324.8}).wait(1).to({graphics:mask_4_graphics_748,x:401.8,y:324.8}).wait(1).to({graphics:mask_4_graphics_749,x:404.2,y:324.8}).wait(1).to({graphics:null,x:0,y:0}).wait(239));

	// line_5_red
	this.instance_16 = new lib.line_5_red_1();
	this.instance_16.setTransform(700,627,1,1,0,0,0,110,15);
	this.instance_16._off = true;

	this.instance_16.mask = mask_4;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(704).to({_off:false},0).to({_off:true},50).wait(235));

	// line_5
	this.instance_17 = new lib.line_5_1();
	this.instance_17.setTransform(700,627,1,1,0,0,0,110,15);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(704).to({_off:false},0).to({_off:true},50).wait(235));

	// Layer 27 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_758 = new cjs.Graphics().moveTo(179.1,324.8).lineTo(179.1,274.3).lineTo(289.5,274.3).lineTo(289.5,324.8).closePath();
	var mask_5_graphics_759 = new cjs.Graphics().moveTo(176.7,324.8).lineTo(176.7,274.3).lineTo(291.9,274.3).lineTo(291.9,324.8).closePath();
	var mask_5_graphics_760 = new cjs.Graphics().moveTo(174.4,324.8).lineTo(174.4,274.3).lineTo(294.2,274.3).lineTo(294.2,324.8).closePath();
	var mask_5_graphics_761 = new cjs.Graphics().moveTo(172.1,324.8).lineTo(172.1,274.3).lineTo(296.5,274.3).lineTo(296.5,324.8).closePath();
	var mask_5_graphics_762 = new cjs.Graphics().moveTo(169.7,324.8).lineTo(169.7,274.3).lineTo(298.9,274.3).lineTo(298.9,324.8).closePath();
	var mask_5_graphics_763 = new cjs.Graphics().moveTo(167.4,324.8).lineTo(167.4,274.3).lineTo(301.2,274.3).lineTo(301.2,324.8).closePath();
	var mask_5_graphics_764 = new cjs.Graphics().moveTo(165.1,324.8).lineTo(165.1,274.3).lineTo(303.5,274.3).lineTo(303.5,324.8).closePath();
	var mask_5_graphics_765 = new cjs.Graphics().moveTo(162.7,324.8).lineTo(162.7,274.3).lineTo(305.9,274.3).lineTo(305.9,324.8).closePath();
	var mask_5_graphics_766 = new cjs.Graphics().moveTo(160.4,324.8).lineTo(160.4,274.3).lineTo(308.2,274.3).lineTo(308.2,324.8).closePath();
	var mask_5_graphics_767 = new cjs.Graphics().moveTo(158,324.8).lineTo(158,274.3).lineTo(310.6,274.3).lineTo(310.6,324.8).closePath();
	var mask_5_graphics_768 = new cjs.Graphics().moveTo(155.7,324.8).lineTo(155.7,274.3).lineTo(312.9,274.3).lineTo(312.9,324.8).closePath();
	var mask_5_graphics_769 = new cjs.Graphics().moveTo(153.4,324.8).lineTo(153.4,274.3).lineTo(315.2,274.3).lineTo(315.2,324.8).closePath();
	var mask_5_graphics_770 = new cjs.Graphics().moveTo(151,324.8).lineTo(151,274.3).lineTo(317.6,274.3).lineTo(317.6,324.8).closePath();
	var mask_5_graphics_771 = new cjs.Graphics().moveTo(148.7,324.8).lineTo(148.7,274.3).lineTo(319.9,274.3).lineTo(319.9,324.8).closePath();
	var mask_5_graphics_772 = new cjs.Graphics().moveTo(146.4,324.8).lineTo(146.4,274.3).lineTo(322.2,274.3).lineTo(322.2,324.8).closePath();
	var mask_5_graphics_773 = new cjs.Graphics().moveTo(144,324.8).lineTo(144,274.3).lineTo(324.6,274.3).lineTo(324.6,324.8).closePath();
	var mask_5_graphics_774 = new cjs.Graphics().moveTo(141.7,324.8).lineTo(141.7,274.3).lineTo(326.9,274.3).lineTo(326.9,324.8).closePath();
	var mask_5_graphics_775 = new cjs.Graphics().moveTo(139.4,324.8).lineTo(139.4,274.3).lineTo(329.2,274.3).lineTo(329.2,324.8).closePath();
	var mask_5_graphics_776 = new cjs.Graphics().moveTo(137,324.8).lineTo(137,274.3).lineTo(331.6,274.3).lineTo(331.6,324.8).closePath();
	var mask_5_graphics_777 = new cjs.Graphics().moveTo(134.7,324.8).lineTo(134.7,274.3).lineTo(333.9,274.3).lineTo(333.9,324.8).closePath();
	var mask_5_graphics_778 = new cjs.Graphics().moveTo(132.3,324.8).lineTo(132.3,274.3).lineTo(336.3,274.3).lineTo(336.3,324.8).closePath();
	var mask_5_graphics_779 = new cjs.Graphics().moveTo(130,324.8).lineTo(130,274.3).lineTo(338.6,274.3).lineTo(338.6,324.8).closePath();
	var mask_5_graphics_780 = new cjs.Graphics().moveTo(127.7,324.8).lineTo(127.7,274.3).lineTo(340.9,274.3).lineTo(340.9,324.8).closePath();
	var mask_5_graphics_781 = new cjs.Graphics().moveTo(125.3,324.8).lineTo(125.3,274.3).lineTo(343.3,274.3).lineTo(343.3,324.8).closePath();
	var mask_5_graphics_782 = new cjs.Graphics().moveTo(123,324.8).lineTo(123,274.3).lineTo(345.6,274.3).lineTo(345.6,324.8).closePath();
	var mask_5_graphics_783 = new cjs.Graphics().moveTo(120.7,324.8).lineTo(120.7,274.3).lineTo(347.9,274.3).lineTo(347.9,324.8).closePath();
	var mask_5_graphics_784 = new cjs.Graphics().moveTo(118.3,324.8).lineTo(118.3,274.3).lineTo(350.3,274.3).lineTo(350.3,324.8).closePath();
	var mask_5_graphics_785 = new cjs.Graphics().moveTo(116,324.8).lineTo(116,274.3).lineTo(352.6,274.3).lineTo(352.6,324.8).closePath();
	var mask_5_graphics_786 = new cjs.Graphics().moveTo(113.7,324.8).lineTo(113.7,274.3).lineTo(354.9,274.3).lineTo(354.9,324.8).closePath();
	var mask_5_graphics_787 = new cjs.Graphics().moveTo(111.3,324.8).lineTo(111.3,274.3).lineTo(357.3,274.3).lineTo(357.3,324.8).closePath();
	var mask_5_graphics_788 = new cjs.Graphics().moveTo(109,324.8).lineTo(109,274.3).lineTo(359.6,274.3).lineTo(359.6,324.8).closePath();
	var mask_5_graphics_789 = new cjs.Graphics().moveTo(106.6,324.8).lineTo(106.6,274.3).lineTo(362,274.3).lineTo(362,324.8).closePath();
	var mask_5_graphics_790 = new cjs.Graphics().moveTo(104.3,324.8).lineTo(104.3,274.3).lineTo(364.3,274.3).lineTo(364.3,324.8).closePath();
	var mask_5_graphics_791 = new cjs.Graphics().moveTo(102,324.8).lineTo(102,274.3).lineTo(366.6,274.3).lineTo(366.6,324.8).closePath();
	var mask_5_graphics_792 = new cjs.Graphics().moveTo(99.6,324.8).lineTo(99.6,274.3).lineTo(369,274.3).lineTo(369,324.8).closePath();
	var mask_5_graphics_793 = new cjs.Graphics().moveTo(97.3,324.8).lineTo(97.3,274.3).lineTo(371.3,274.3).lineTo(371.3,324.8).closePath();
	var mask_5_graphics_794 = new cjs.Graphics().moveTo(95,324.8).lineTo(95,274.3).lineTo(373.6,274.3).lineTo(373.6,324.8).closePath();
	var mask_5_graphics_795 = new cjs.Graphics().moveTo(92.6,324.8).lineTo(92.6,274.3).lineTo(376,274.3).lineTo(376,324.8).closePath();
	var mask_5_graphics_796 = new cjs.Graphics().moveTo(90.3,324.8).lineTo(90.3,274.3).lineTo(378.3,274.3).lineTo(378.3,324.8).closePath();
	var mask_5_graphics_797 = new cjs.Graphics().moveTo(87.9,324.8).lineTo(87.9,274.3).lineTo(380.7,274.3).lineTo(380.7,324.8).closePath();
	var mask_5_graphics_798 = new cjs.Graphics().moveTo(85.6,324.8).lineTo(85.6,274.3).lineTo(383,274.3).lineTo(383,324.8).closePath();
	var mask_5_graphics_799 = new cjs.Graphics().moveTo(83.3,324.8).lineTo(83.3,274.3).lineTo(385.3,274.3).lineTo(385.3,324.8).closePath();
	var mask_5_graphics_800 = new cjs.Graphics().moveTo(80.9,324.8).lineTo(80.9,274.3).lineTo(387.7,274.3).lineTo(387.7,324.8).closePath();
	var mask_5_graphics_801 = new cjs.Graphics().moveTo(78.6,324.8).lineTo(78.6,274.3).lineTo(390,274.3).lineTo(390,324.8).closePath();
	var mask_5_graphics_802 = new cjs.Graphics().moveTo(76.3,324.8).lineTo(76.3,274.3).lineTo(392.3,274.3).lineTo(392.3,324.8).closePath();
	var mask_5_graphics_803 = new cjs.Graphics().moveTo(73.9,324.8).lineTo(73.9,274.3).lineTo(394.7,274.3).lineTo(394.7,324.8).closePath();
	var mask_5_graphics_804 = new cjs.Graphics().moveTo(71.6,324.8).lineTo(71.6,274.3).lineTo(397,274.3).lineTo(397,324.8).closePath();
	var mask_5_graphics_805 = new cjs.Graphics().moveTo(69.3,324.8).lineTo(69.3,274.3).lineTo(399.3,274.3).lineTo(399.3,324.8).closePath();
	var mask_5_graphics_806 = new cjs.Graphics().moveTo(66.9,324.8).lineTo(66.9,274.3).lineTo(401.7,274.3).lineTo(401.7,324.8).closePath();
	var mask_5_graphics_807 = new cjs.Graphics().moveTo(64.6,324.8).lineTo(64.6,274.3).lineTo(404,274.3).lineTo(404,324.8).closePath();
	var mask_5_graphics_808 = new cjs.Graphics().moveTo(62.2,324.8).lineTo(62.2,274.3).lineTo(406.4,274.3).lineTo(406.4,324.8).closePath();
	var mask_5_graphics_809 = new cjs.Graphics().moveTo(59.9,324.8).lineTo(59.9,274.3).lineTo(408.7,274.3).lineTo(408.7,324.8).closePath();
	var mask_5_graphics_810 = new cjs.Graphics().moveTo(57.6,324.8).lineTo(57.6,274.3).lineTo(411,274.3).lineTo(411,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(758).to({graphics:mask_5_graphics_758,x:289.5,y:324.8}).wait(1).to({graphics:mask_5_graphics_759,x:291.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_760,x:294.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_761,x:296.5,y:324.8}).wait(1).to({graphics:mask_5_graphics_762,x:298.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_763,x:301.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_764,x:303.5,y:324.8}).wait(1).to({graphics:mask_5_graphics_765,x:305.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_766,x:308.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_767,x:310.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_768,x:312.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_769,x:315.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_770,x:317.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_771,x:319.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_772,x:322.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_773,x:324.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_774,x:326.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_775,x:329.2,y:324.8}).wait(1).to({graphics:mask_5_graphics_776,x:331.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_777,x:333.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_778,x:336.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_779,x:338.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_780,x:340.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_781,x:343.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_782,x:345.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_783,x:347.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_784,x:350.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_785,x:352.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_786,x:354.9,y:324.8}).wait(1).to({graphics:mask_5_graphics_787,x:357.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_788,x:359.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_789,x:362,y:324.8}).wait(1).to({graphics:mask_5_graphics_790,x:364.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_791,x:366.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_792,x:369,y:324.8}).wait(1).to({graphics:mask_5_graphics_793,x:371.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_794,x:373.6,y:324.8}).wait(1).to({graphics:mask_5_graphics_795,x:376,y:324.8}).wait(1).to({graphics:mask_5_graphics_796,x:378.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_797,x:380.7,y:324.8}).wait(1).to({graphics:mask_5_graphics_798,x:383,y:324.8}).wait(1).to({graphics:mask_5_graphics_799,x:385.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_800,x:387.7,y:324.8}).wait(1).to({graphics:mask_5_graphics_801,x:390,y:324.8}).wait(1).to({graphics:mask_5_graphics_802,x:392.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_803,x:394.7,y:324.8}).wait(1).to({graphics:mask_5_graphics_804,x:397,y:324.8}).wait(1).to({graphics:mask_5_graphics_805,x:399.3,y:324.8}).wait(1).to({graphics:mask_5_graphics_806,x:401.7,y:324.8}).wait(1).to({graphics:mask_5_graphics_807,x:404,y:324.8}).wait(1).to({graphics:mask_5_graphics_808,x:406.4,y:324.8}).wait(1).to({graphics:mask_5_graphics_809,x:408.7,y:324.8}).wait(1).to({graphics:mask_5_graphics_810,x:411,y:324.8}).wait(7).to({graphics:null,x:0,y:0}).wait(172));

	// line_6_red
	this.instance_18 = new lib.line_6_red_1();
	this.instance_18.setTransform(700.5,627,1,1,0,0,0,121.5,15);
	this.instance_18._off = true;

	this.instance_18.mask = mask_5;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(758).to({_off:false},0).to({_off:true},59).wait(172));

	// line_6
	this.instance_19 = new lib.line_6_1();
	this.instance_19.setTransform(700.5,627,1,1,0,0,0,121.5,15);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(758).to({_off:false},0).to({_off:true},59).wait(172));

	// Layer 28 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_822 = new cjs.Graphics().moveTo(174.7,324.8).lineTo(174.7,274.3).lineTo(178.9,274.3).lineTo(178.9,324.8).closePath();
	var mask_6_graphics_823 = new cjs.Graphics().moveTo(168,324.8).lineTo(168,274.3).lineTo(185.6,274.3).lineTo(185.6,324.8).closePath();
	var mask_6_graphics_824 = new cjs.Graphics().moveTo(161.2,324.8).lineTo(161.2,274.3).lineTo(192.4,274.3).lineTo(192.4,324.8).closePath();
	var mask_6_graphics_825 = new cjs.Graphics().moveTo(154.5,324.8).lineTo(154.5,274.3).lineTo(199.1,274.3).lineTo(199.1,324.8).closePath();
	var mask_6_graphics_826 = new cjs.Graphics().moveTo(147.8,324.8).lineTo(147.8,274.3).lineTo(205.8,274.3).lineTo(205.8,324.8).closePath();
	var mask_6_graphics_827 = new cjs.Graphics().moveTo(141,324.8).lineTo(141,274.3).lineTo(212.6,274.3).lineTo(212.6,324.8).closePath();
	var mask_6_graphics_828 = new cjs.Graphics().moveTo(134.3,324.8).lineTo(134.3,274.3).lineTo(219.3,274.3).lineTo(219.3,324.8).closePath();
	var mask_6_graphics_829 = new cjs.Graphics().moveTo(127.6,324.8).lineTo(127.6,274.3).lineTo(226,274.3).lineTo(226,324.8).closePath();
	var mask_6_graphics_830 = new cjs.Graphics().moveTo(120.9,324.8).lineTo(120.9,274.3).lineTo(232.7,274.3).lineTo(232.7,324.8).closePath();
	var mask_6_graphics_831 = new cjs.Graphics().moveTo(114.1,324.8).lineTo(114.1,274.3).lineTo(239.5,274.3).lineTo(239.5,324.8).closePath();
	var mask_6_graphics_832 = new cjs.Graphics().moveTo(107.4,324.8).lineTo(107.4,274.3).lineTo(246.2,274.3).lineTo(246.2,324.8).closePath();
	var mask_6_graphics_833 = new cjs.Graphics().moveTo(100.7,324.8).lineTo(100.7,274.3).lineTo(252.9,274.3).lineTo(252.9,324.8).closePath();
	var mask_6_graphics_834 = new cjs.Graphics().moveTo(94,324.8).lineTo(94,274.3).lineTo(259.7,274.3).lineTo(259.7,324.8).closePath();
	var mask_6_graphics_835 = new cjs.Graphics().moveTo(87.2,324.8).lineTo(87.2,274.3).lineTo(266.4,274.3).lineTo(266.4,324.8).closePath();
	var mask_6_graphics_836 = new cjs.Graphics().moveTo(80.5,324.8).lineTo(80.5,274.3).lineTo(273.1,274.3).lineTo(273.1,324.8).closePath();
	var mask_6_graphics_837 = new cjs.Graphics().moveTo(73.8,324.8).lineTo(73.8,274.3).lineTo(279.8,274.3).lineTo(279.8,324.8).closePath();
	var mask_6_graphics_838 = new cjs.Graphics().moveTo(67,324.8).lineTo(67,274.3).lineTo(286.6,274.3).lineTo(286.6,324.8).closePath();
	var mask_6_graphics_839 = new cjs.Graphics().moveTo(60.3,324.8).lineTo(60.3,274.3).lineTo(293.3,274.3).lineTo(293.3,324.8).closePath();
	var mask_6_graphics_840 = new cjs.Graphics().moveTo(53.6,324.8).lineTo(53.6,274.3).lineTo(300,274.3).lineTo(300,324.8).closePath();
	var mask_6_graphics_841 = new cjs.Graphics().moveTo(46.9,324.8).lineTo(46.9,274.3).lineTo(306.7,274.3).lineTo(306.7,324.8).closePath();
	var mask_6_graphics_842 = new cjs.Graphics().moveTo(40.1,324.8).lineTo(40.1,274.3).lineTo(313.5,274.3).lineTo(313.5,324.8).closePath();
	var mask_6_graphics_843 = new cjs.Graphics().moveTo(33.4,324.8).lineTo(33.4,274.3).lineTo(320.2,274.3).lineTo(320.2,324.8).closePath();
	var mask_6_graphics_844 = new cjs.Graphics().moveTo(26.7,324.8).lineTo(26.7,274.3).lineTo(326.9,274.3).lineTo(326.9,324.8).closePath();
	var mask_6_graphics_845 = new cjs.Graphics().moveTo(20,324.8).lineTo(20,274.3).lineTo(333.7,274.3).lineTo(333.7,324.8).closePath();
	var mask_6_graphics_846 = new cjs.Graphics().moveTo(13.2,324.8).lineTo(13.2,274.3).lineTo(340.4,274.3).lineTo(340.4,324.8).closePath();
	var mask_6_graphics_847 = new cjs.Graphics().moveTo(6.5,324.8).lineTo(6.5,274.3).lineTo(347.1,274.3).lineTo(347.1,324.8).closePath();
	var mask_6_graphics_848 = new cjs.Graphics().moveTo(-0.2,324.8).lineTo(-0.2,274.3).lineTo(353.8,274.3).lineTo(353.8,324.8).closePath();
	var mask_6_graphics_849 = new cjs.Graphics().moveTo(-7,324.8).lineTo(-7,274.3).lineTo(360.6,274.3).lineTo(360.6,324.8).closePath();
	var mask_6_graphics_850 = new cjs.Graphics().moveTo(-13.7,324.8).lineTo(-13.7,274.3).lineTo(367.3,274.3).lineTo(367.3,324.8).closePath();
	var mask_6_graphics_851 = new cjs.Graphics().moveTo(-20.4,324.8).lineTo(-20.4,274.3).lineTo(374,274.3).lineTo(374,324.8).closePath();
	var mask_6_graphics_852 = new cjs.Graphics().moveTo(-27.1,324.8).lineTo(-27.1,274.3).lineTo(380.7,274.3).lineTo(380.7,324.8).closePath();
	var mask_6_graphics_853 = new cjs.Graphics().moveTo(-33.9,324.8).lineTo(-33.9,274.3).lineTo(387.5,274.3).lineTo(387.5,324.8).closePath();
	var mask_6_graphics_854 = new cjs.Graphics().moveTo(-40.6,324.8).lineTo(-40.6,274.3).lineTo(394.2,274.3).lineTo(394.2,324.8).closePath();
	var mask_6_graphics_855 = new cjs.Graphics().moveTo(-47.3,324.8).lineTo(-47.3,274.3).lineTo(400.9,274.3).lineTo(400.9,324.8).closePath();
	var mask_6_graphics_856 = new cjs.Graphics().moveTo(-54.1,324.8).lineTo(-54.1,274.3).lineTo(407.6,274.3).lineTo(407.6,324.8).closePath();
	var mask_6_graphics_857 = new cjs.Graphics().moveTo(-60.8,324.8).lineTo(-60.8,274.3).lineTo(414.4,274.3).lineTo(414.4,324.8).closePath();
	var mask_6_graphics_858 = new cjs.Graphics().moveTo(-67.5,324.8).lineTo(-67.5,274.3).lineTo(421.1,274.3).lineTo(421.1,324.8).closePath();
	var mask_6_graphics_859 = new cjs.Graphics().moveTo(-74.2,324.8).lineTo(-74.2,274.3).lineTo(427.8,274.3).lineTo(427.8,324.8).closePath();
	var mask_6_graphics_860 = new cjs.Graphics().moveTo(-81,324.8).lineTo(-81,274.3).lineTo(434.6,274.3).lineTo(434.6,324.8).closePath();
	var mask_6_graphics_861 = new cjs.Graphics().moveTo(-87.7,324.8).lineTo(-87.7,274.3).lineTo(441.3,274.3).lineTo(441.3,324.8).closePath();
	var mask_6_graphics_862 = new cjs.Graphics().moveTo(-94.4,324.8).lineTo(-94.4,274.3).lineTo(448,274.3).lineTo(448,324.8).closePath();
	var mask_6_graphics_863 = new cjs.Graphics().moveTo(-101.1,324.8).lineTo(-101.1,274.3).lineTo(454.7,274.3).lineTo(454.7,324.8).closePath();
	var mask_6_graphics_864 = new cjs.Graphics().moveTo(-107.9,324.8).lineTo(-107.9,274.3).lineTo(461.5,274.3).lineTo(461.5,324.8).closePath();
	var mask_6_graphics_865 = new cjs.Graphics().moveTo(-114.6,324.8).lineTo(-114.6,274.3).lineTo(468.2,274.3).lineTo(468.2,324.8).closePath();
	var mask_6_graphics_866 = new cjs.Graphics().moveTo(-121.3,324.8).lineTo(-121.3,274.3).lineTo(474.9,274.3).lineTo(474.9,324.8).closePath();
	var mask_6_graphics_867 = new cjs.Graphics().moveTo(-128.1,324.8).lineTo(-128.1,274.3).lineTo(481.7,274.3).lineTo(481.7,324.8).closePath();
	var mask_6_graphics_868 = new cjs.Graphics().moveTo(-134.8,324.8).lineTo(-134.8,274.3).lineTo(488.4,274.3).lineTo(488.4,324.8).closePath();
	var mask_6_graphics_869 = new cjs.Graphics().moveTo(-141.5,324.8).lineTo(-141.5,274.3).lineTo(495.1,274.3).lineTo(495.1,324.8).closePath();
	var mask_6_graphics_870 = new cjs.Graphics().moveTo(-148.2,324.8).lineTo(-148.2,274.3).lineTo(501.8,274.3).lineTo(501.8,324.8).closePath();
	var mask_6_graphics_871 = new cjs.Graphics().moveTo(-155,324.8).lineTo(-155,274.3).lineTo(508.6,274.3).lineTo(508.6,324.8).closePath();
	var mask_6_graphics_872 = new cjs.Graphics().moveTo(-161.7,324.8).lineTo(-161.7,274.3).lineTo(515.3,274.3).lineTo(515.3,324.8).closePath();
	var mask_6_graphics_873 = new cjs.Graphics().moveTo(-168.4,324.8).lineTo(-168.4,274.3).lineTo(522,274.3).lineTo(522,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(822).to({graphics:mask_6_graphics_822,x:178.9,y:324.8}).wait(1).to({graphics:mask_6_graphics_823,x:185.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_824,x:192.4,y:324.8}).wait(1).to({graphics:mask_6_graphics_825,x:199.1,y:324.8}).wait(1).to({graphics:mask_6_graphics_826,x:205.8,y:324.8}).wait(1).to({graphics:mask_6_graphics_827,x:212.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_828,x:219.3,y:324.8}).wait(1).to({graphics:mask_6_graphics_829,x:226,y:324.8}).wait(1).to({graphics:mask_6_graphics_830,x:232.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_831,x:239.5,y:324.8}).wait(1).to({graphics:mask_6_graphics_832,x:246.2,y:324.8}).wait(1).to({graphics:mask_6_graphics_833,x:252.9,y:324.8}).wait(1).to({graphics:mask_6_graphics_834,x:259.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_835,x:266.4,y:324.8}).wait(1).to({graphics:mask_6_graphics_836,x:273.1,y:324.8}).wait(1).to({graphics:mask_6_graphics_837,x:279.8,y:324.8}).wait(1).to({graphics:mask_6_graphics_838,x:286.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_839,x:293.3,y:324.8}).wait(1).to({graphics:mask_6_graphics_840,x:300,y:324.8}).wait(1).to({graphics:mask_6_graphics_841,x:306.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_842,x:313.5,y:324.8}).wait(1).to({graphics:mask_6_graphics_843,x:320.2,y:324.8}).wait(1).to({graphics:mask_6_graphics_844,x:326.9,y:324.8}).wait(1).to({graphics:mask_6_graphics_845,x:333.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_846,x:340.4,y:324.8}).wait(1).to({graphics:mask_6_graphics_847,x:347.1,y:324.8}).wait(1).to({graphics:mask_6_graphics_848,x:353.8,y:324.8}).wait(1).to({graphics:mask_6_graphics_849,x:360.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_850,x:367.3,y:324.8}).wait(1).to({graphics:mask_6_graphics_851,x:374,y:324.8}).wait(1).to({graphics:mask_6_graphics_852,x:380.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_853,x:387.5,y:324.8}).wait(1).to({graphics:mask_6_graphics_854,x:394.2,y:324.8}).wait(1).to({graphics:mask_6_graphics_855,x:400.9,y:324.8}).wait(1).to({graphics:mask_6_graphics_856,x:407.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_857,x:414.4,y:324.8}).wait(1).to({graphics:mask_6_graphics_858,x:421.1,y:324.8}).wait(1).to({graphics:mask_6_graphics_859,x:427.8,y:324.8}).wait(1).to({graphics:mask_6_graphics_860,x:434.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_861,x:441.3,y:324.8}).wait(1).to({graphics:mask_6_graphics_862,x:448,y:324.8}).wait(1).to({graphics:mask_6_graphics_863,x:454.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_864,x:461.5,y:324.8}).wait(1).to({graphics:mask_6_graphics_865,x:468.2,y:324.8}).wait(1).to({graphics:mask_6_graphics_866,x:474.9,y:324.8}).wait(1).to({graphics:mask_6_graphics_867,x:481.7,y:324.8}).wait(1).to({graphics:mask_6_graphics_868,x:488.4,y:324.8}).wait(1).to({graphics:mask_6_graphics_869,x:495.1,y:324.8}).wait(1).to({graphics:mask_6_graphics_870,x:501.8,y:324.8}).wait(1).to({graphics:mask_6_graphics_871,x:508.6,y:324.8}).wait(1).to({graphics:mask_6_graphics_872,x:515.3,y:324.8}).wait(1).to({graphics:mask_6_graphics_873,x:522,y:324.8}).wait(2).to({graphics:null,x:0,y:0}).wait(114));

	// line_7_red
	this.instance_20 = new lib.line_7_red_1();
	this.instance_20.setTransform(700,627,1,1,0,0,0,344,15);
	this.instance_20._off = true;

	this.instance_20.mask = mask_6;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(822).to({_off:false},0).to({_off:true},53).wait(114));

	// line_7
	this.instance_21 = new lib.line_7_1();
	this.instance_21.setTransform(700,627,1,1,0,0,0,344,15);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(822).to({_off:false},0).to({_off:true},53).wait(114));

	// Layer 29 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_875 = new cjs.Graphics().moveTo(245.6,324.8).lineTo(245.6,274.3).lineTo(250,274.3).lineTo(250,324.8).closePath();
	var mask_7_graphics_876 = new cjs.Graphics().moveTo(237,324.8).lineTo(237,274.3).lineTo(258.6,274.3).lineTo(258.6,324.8).closePath();
	var mask_7_graphics_877 = new cjs.Graphics().moveTo(228.6,324.8).lineTo(228.6,274.3).lineTo(267,274.3).lineTo(267,324.8).closePath();
	var mask_7_graphics_878 = new cjs.Graphics().moveTo(220.4,324.8).lineTo(220.4,274.3).lineTo(275.2,274.3).lineTo(275.2,324.8).closePath();
	var mask_7_graphics_879 = new cjs.Graphics().moveTo(212.4,324.8).lineTo(212.4,274.3).lineTo(283.3,274.3).lineTo(283.3,324.8).closePath();
	var mask_7_graphics_880 = new cjs.Graphics().moveTo(204.5,324.8).lineTo(204.5,274.3).lineTo(291.1,274.3).lineTo(291.1,324.8).closePath();
	var mask_7_graphics_881 = new cjs.Graphics().moveTo(196.8,324.8).lineTo(196.8,274.3).lineTo(298.8,274.3).lineTo(298.8,324.8).closePath();
	var mask_7_graphics_882 = new cjs.Graphics().moveTo(189.4,324.8).lineTo(189.4,274.3).lineTo(306.2,274.3).lineTo(306.2,324.8).closePath();
	var mask_7_graphics_883 = new cjs.Graphics().moveTo(182.1,324.8).lineTo(182.1,274.3).lineTo(313.5,274.3).lineTo(313.5,324.8).closePath();
	var mask_7_graphics_884 = new cjs.Graphics().moveTo(175,324.8).lineTo(175,274.3).lineTo(320.6,274.3).lineTo(320.6,324.8).closePath();
	var mask_7_graphics_885 = new cjs.Graphics().moveTo(168,324.8).lineTo(168,274.3).lineTo(327.6,274.3).lineTo(327.6,324.8).closePath();
	var mask_7_graphics_886 = new cjs.Graphics().moveTo(161.3,324.8).lineTo(161.3,274.3).lineTo(334.3,274.3).lineTo(334.3,324.8).closePath();
	var mask_7_graphics_887 = new cjs.Graphics().moveTo(154.7,324.8).lineTo(154.7,274.3).lineTo(340.9,274.3).lineTo(340.9,324.8).closePath();
	var mask_7_graphics_888 = new cjs.Graphics().moveTo(148.4,324.8).lineTo(148.4,274.3).lineTo(347.2,274.3).lineTo(347.2,324.8).closePath();
	var mask_7_graphics_889 = new cjs.Graphics().moveTo(142.2,324.8).lineTo(142.2,274.3).lineTo(353.4,274.3).lineTo(353.4,324.8).closePath();
	var mask_7_graphics_890 = new cjs.Graphics().moveTo(136.2,324.8).lineTo(136.2,274.3).lineTo(359.4,274.3).lineTo(359.4,324.8).closePath();
	var mask_7_graphics_891 = new cjs.Graphics().moveTo(130.4,324.8).lineTo(130.4,274.3).lineTo(365.2,274.3).lineTo(365.2,324.8).closePath();
	var mask_7_graphics_892 = new cjs.Graphics().moveTo(124.7,324.8).lineTo(124.7,274.3).lineTo(370.9,274.3).lineTo(370.9,324.8).closePath();
	var mask_7_graphics_893 = new cjs.Graphics().moveTo(119.3,324.8).lineTo(119.3,274.3).lineTo(376.3,274.3).lineTo(376.3,324.8).closePath();
	var mask_7_graphics_894 = new cjs.Graphics().moveTo(114,324.8).lineTo(114,274.3).lineTo(381.6,274.3).lineTo(381.6,324.8).closePath();
	var mask_7_graphics_895 = new cjs.Graphics().moveTo(109,324.8).lineTo(109,274.3).lineTo(386.6,274.3).lineTo(386.6,324.8).closePath();
	var mask_7_graphics_896 = new cjs.Graphics().moveTo(104.1,324.8).lineTo(104.1,274.3).lineTo(391.5,274.3).lineTo(391.5,324.8).closePath();
	var mask_7_graphics_897 = new cjs.Graphics().moveTo(99.4,324.8).lineTo(99.4,274.3).lineTo(396.2,274.3).lineTo(396.2,324.8).closePath();
	var mask_7_graphics_898 = new cjs.Graphics().moveTo(94.8,324.8).lineTo(94.8,274.3).lineTo(400.8,274.3).lineTo(400.8,324.8).closePath();
	var mask_7_graphics_899 = new cjs.Graphics().moveTo(90.5,324.8).lineTo(90.5,274.3).lineTo(405.1,274.3).lineTo(405.1,324.8).closePath();
	var mask_7_graphics_900 = new cjs.Graphics().moveTo(86.3,324.8).lineTo(86.3,274.3).lineTo(409.3,274.3).lineTo(409.3,324.8).closePath();
	var mask_7_graphics_901 = new cjs.Graphics().moveTo(82.4,324.8).lineTo(82.4,274.3).lineTo(413.2,274.3).lineTo(413.2,324.8).closePath();
	var mask_7_graphics_902 = new cjs.Graphics().moveTo(78.6,324.8).lineTo(78.6,274.3).lineTo(417,274.3).lineTo(417,324.8).closePath();
	var mask_7_graphics_903 = new cjs.Graphics().moveTo(75,324.8).lineTo(75,274.3).lineTo(420.6,274.3).lineTo(420.6,324.8).closePath();
	var mask_7_graphics_904 = new cjs.Graphics().moveTo(71.6,324.8).lineTo(71.6,274.3).lineTo(424,274.3).lineTo(424,324.8).closePath();
	var mask_7_graphics_905 = new cjs.Graphics().moveTo(68.3,324.8).lineTo(68.3,274.3).lineTo(427.3,274.3).lineTo(427.3,324.8).closePath();
	var mask_7_graphics_906 = new cjs.Graphics().moveTo(65.3,324.8).lineTo(65.3,274.3).lineTo(430.3,274.3).lineTo(430.3,324.8).closePath();
	var mask_7_graphics_907 = new cjs.Graphics().moveTo(62.4,324.8).lineTo(62.4,274.3).lineTo(433.2,274.3).lineTo(433.2,324.8).closePath();
	var mask_7_graphics_908 = new cjs.Graphics().moveTo(59.8,324.8).lineTo(59.8,274.3).lineTo(435.8,274.3).lineTo(435.8,324.8).closePath();
	var mask_7_graphics_909 = new cjs.Graphics().moveTo(57.3,324.8).lineTo(57.3,274.3).lineTo(438.3,274.3).lineTo(438.3,324.8).closePath();
	var mask_7_graphics_910 = new cjs.Graphics().moveTo(55,324.8).lineTo(55,274.3).lineTo(440.6,274.3).lineTo(440.6,324.8).closePath();
	var mask_7_graphics_911 = new cjs.Graphics().moveTo(52.8,324.8).lineTo(52.8,274.3).lineTo(442.8,274.3).lineTo(442.8,324.8).closePath();
	var mask_7_graphics_912 = new cjs.Graphics().moveTo(50.9,324.8).lineTo(50.9,274.3).lineTo(444.7,274.3).lineTo(444.7,324.8).closePath();
	var mask_7_graphics_913 = new cjs.Graphics().moveTo(49.1,324.8).lineTo(49.1,274.3).lineTo(446.5,274.3).lineTo(446.5,324.8).closePath();
	var mask_7_graphics_914 = new cjs.Graphics().moveTo(47.6,324.8).lineTo(47.6,274.3).lineTo(448,274.3).lineTo(448,324.8).closePath();
	var mask_7_graphics_915 = new cjs.Graphics().moveTo(46.2,324.8).lineTo(46.2,274.3).lineTo(449.4,274.3).lineTo(449.4,324.8).closePath();
	var mask_7_graphics_916 = new cjs.Graphics().moveTo(45,324.8).lineTo(45,274.3).lineTo(450.6,274.3).lineTo(450.6,324.8).closePath();
	var mask_7_graphics_917 = new cjs.Graphics().moveTo(44,324.8).lineTo(44,274.3).lineTo(451.6,274.3).lineTo(451.6,324.8).closePath();
	var mask_7_graphics_918 = new cjs.Graphics().moveTo(43.1,324.8).lineTo(43.1,274.3).lineTo(452.5,274.3).lineTo(452.5,324.8).closePath();
	var mask_7_graphics_919 = new cjs.Graphics().moveTo(42.5,324.8).lineTo(42.5,274.3).lineTo(453.1,274.3).lineTo(453.1,324.8).closePath();
	var mask_7_graphics_920 = new cjs.Graphics().moveTo(42,324.8).lineTo(42,274.3).lineTo(453.6,274.3).lineTo(453.6,324.8).closePath();
	var mask_7_graphics_921 = new cjs.Graphics().moveTo(41.8,324.8).lineTo(41.8,274.3).lineTo(453.8,274.3).lineTo(453.8,324.8).closePath();
	var mask_7_graphics_922 = new cjs.Graphics().moveTo(41.7,324.8).lineTo(41.7,274.3).lineTo(453.9,274.3).lineTo(453.9,324.8).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(875).to({graphics:mask_7_graphics_875,x:250,y:324.8}).wait(1).to({graphics:mask_7_graphics_876,x:258.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_877,x:267,y:324.8}).wait(1).to({graphics:mask_7_graphics_878,x:275.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_879,x:283.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_880,x:291.1,y:324.8}).wait(1).to({graphics:mask_7_graphics_881,x:298.8,y:324.8}).wait(1).to({graphics:mask_7_graphics_882,x:306.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_883,x:313.5,y:324.8}).wait(1).to({graphics:mask_7_graphics_884,x:320.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_885,x:327.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_886,x:334.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_887,x:340.9,y:324.8}).wait(1).to({graphics:mask_7_graphics_888,x:347.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_889,x:353.4,y:324.8}).wait(1).to({graphics:mask_7_graphics_890,x:359.4,y:324.8}).wait(1).to({graphics:mask_7_graphics_891,x:365.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_892,x:370.9,y:324.8}).wait(1).to({graphics:mask_7_graphics_893,x:376.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_894,x:381.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_895,x:386.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_896,x:391.5,y:324.8}).wait(1).to({graphics:mask_7_graphics_897,x:396.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_898,x:400.8,y:324.8}).wait(1).to({graphics:mask_7_graphics_899,x:405.1,y:324.8}).wait(1).to({graphics:mask_7_graphics_900,x:409.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_901,x:413.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_902,x:417,y:324.8}).wait(1).to({graphics:mask_7_graphics_903,x:420.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_904,x:424,y:324.8}).wait(1).to({graphics:mask_7_graphics_905,x:427.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_906,x:430.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_907,x:433.2,y:324.8}).wait(1).to({graphics:mask_7_graphics_908,x:435.8,y:324.8}).wait(1).to({graphics:mask_7_graphics_909,x:438.3,y:324.8}).wait(1).to({graphics:mask_7_graphics_910,x:440.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_911,x:442.8,y:324.8}).wait(1).to({graphics:mask_7_graphics_912,x:444.7,y:324.8}).wait(1).to({graphics:mask_7_graphics_913,x:446.5,y:324.8}).wait(1).to({graphics:mask_7_graphics_914,x:448,y:324.8}).wait(1).to({graphics:mask_7_graphics_915,x:449.4,y:324.8}).wait(1).to({graphics:mask_7_graphics_916,x:450.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_917,x:451.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_918,x:452.5,y:324.8}).wait(1).to({graphics:mask_7_graphics_919,x:453.1,y:324.8}).wait(1).to({graphics:mask_7_graphics_920,x:453.6,y:324.8}).wait(1).to({graphics:mask_7_graphics_921,x:453.8,y:324.8}).wait(1).to({graphics:mask_7_graphics_922,x:453.9,y:324.8}).wait(33).to({graphics:null,x:0,y:0}).wait(34));

	// line_8_red
	this.instance_22 = new lib.line_8_red_1();
	this.instance_22.setTransform(704,627,1,1,0,0,0,204,15);
	this.instance_22._off = true;

	this.instance_22.mask = mask_7;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(875).to({_off:false},0).to({_off:true},80).wait(34));

	// line_8
	this.instance_23 = new lib.line_8_1();
	this.instance_23.setTransform(704,627,1,1,0,0,0,204,15);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(875).to({_off:false},0).to({_off:true},80).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mando_s_lids_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		if(Math.random()> .8){
			this.play();
			}else{
				this.gotoAndPlay(1);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(22));

	// Layer 1
	this.instance_1 = new lib.mando_s_lids_1();
	this.instance_1.setTransform(28,7.5,1,1,0,0,0,28,7.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:15},7).wait(6).to({y:7.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mando_s_eyes_tuning = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mando_s_eyer
	this.instance = new lib.mando_s_eyer_1();
	this.instance.setTransform(38,11,1,1,0,0,0,8.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({x:37.3},0).wait(57).to({x:37.5,y:10.8},0).wait(46).to({x:38.5,y:11},0).wait(54).to({x:38,y:11.5},0).wait(73).to({x:37.5,y:10.8},0).wait(77));

	// mando_s_eyel
	this.instance_1 = new lib.mando_s_eyel_1();
	this.instance_1.setTransform(8,13,1,1,0,0,0,8.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({x:7.3},0).wait(57).to({x:7.5,y:12.8},0).wait(46).to({x:8.5,y:13},0).wait(54).to({x:8,y:13.5},0).wait(73).to({x:7.5,y:12.8},0).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,2,47,20);


(lib.mando_s_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mando_s_eyer
	this.instance = new lib.mando_s_eyer_1();
	this.instance.setTransform(38.5,9,1,1,0,0,0,8.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({x:37.8},0).wait(57).to({x:38,y:8.8},0).wait(46).to({x:39,y:9},0).wait(54).to({x:38.5,y:9.5},0).wait(73).to({x:38,y:8.8},0).wait(77));

	// mando_s_eyel
	this.instance_1 = new lib.mando_s_eyel_1();
	this.instance_1.setTransform(8.5,11,1,1,0,0,0,8.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({x:7.8},0).wait(57).to({x:8,y:10.8},0).wait(46).to({x:9,y:11},0).wait(54).to({x:8.5,y:11.5},0).wait(73).to({x:8,y:10.8},0).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,20);


(lib.mando_stars_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.nightStars();
	this.instance.setTransform(651,271.5,1,1,0,0,0,651,271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.898},3).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1302,543);


(lib.mando_head = function() {
	this.initialize();

	// mando_s_jaw
	this.instance = new lib.mando_s_jaw_1();
	this.instance.setTransform(38,54,1,1,0,0,0,39.5,28);

	// mando_s_mouth1
	this.instance_1 = new lib.mando_s_mouth1_1();
	this.instance_1.setTransform(21,48.5,1,1,0,0,0,6.5,7.5);

	// mando_s_mouth2
	this.instance_2 = new lib.mando_s_mouth2_1();
	this.instance_2.setTransform(32.5,48.5,1,1,0,0,0,7,8.5);

	// mando_s_mouth3
	this.instance_3 = new lib.mando_s_mouth3_1();
	this.instance_3.setTransform(45,49,1,1,0,0,0,7.5,9);

	// mando_s_head
	this.instance_4 = new lib.mando_s_head_2();
	this.instance_4.setTransform(62,26,1,1,0,0,0,81.5,82);

	// mando_s_lids
	this.instance_5 = new lib.mando_s_lids_1();
	this.instance_5.setTransform(37.5,1.5,1,1,0,0,0,28,7.5);

	// mando_s_eyer
	this.instance_6 = new lib.mando_s_eyer_1();
	this.instance_6.setTransform(49,11,1,1,0,0,0,8.5,9);

	// mando_s_eyel
	this.instance_7 = new lib.mando_s_eyel_1();
	this.instance_7.setTransform(19,13,1,1,0,0,0,8.5,9);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.5,-56,118,138);


(lib.ll_s_pole_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.mando_ll_pole();
	this.instance.setTransform(100,292,1,1,0,0,0,100,292);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_s_pole();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200,584);


(lib.ll_s_board_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.mando_ll_board();
	this.instance.setTransform(106.5,136,1,1,0,0,0,106.5,136);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_s_board();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,272);


(lib.ll_sign = function() {
	this.initialize();

	// Layer 1
	this.board = new lib.ll_s_board_1();
	this.board.setTransform(55.4,70.8,0.52,0.52,0,0,0,106.5,136.1);

	this.pole = new lib.ll_s_pole_1();
	this.pole.setTransform(54.6,185.7,0.52,0.52,0,0,0,100,292.1);

	this.addChild(this.pole,this.board);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110.8,337.5);


(lib.intro_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.030277826485812537
			}).wait(14).set({
				progress: 0.030277826485812537
			}).wait(16).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.22129623066135565
			}).wait(16).set({
				progress: 0.2552550580703408
			}).wait(18).set({
				progress: 0.2764793252009567
			}).wait(16).set({
				progress: 0.2849690320532031
			}).wait(21).set({
				progress: 0.26798961834871043
			}).wait(16).set({
				progress: 0.2297859375136019
			}).wait(29).set({
				progress: 0.12366460186052253
			}).wait(16).set({
				progress: 0.06423665389479795
			}).wait(17).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0.004808705929073477
			}).wait(17).set({
				progress: 0.0005638525029503536
			}).wait(16).set({
				progress: 0.03452267991193566
			}).wait(18).set({
				progress: 0.08970577445153712
			}).wait(34).set({
				progress: 0.2467653512180946
			}).wait(16).set({
				progress: 0.2807241786270798
			}).wait(16).set({
				progress: 0.2934587389054494
			}).wait(18).set({
				progress: 0.2849690320532031
			}).wait(15).set({
				progress: 0.2297859375136019
			}).wait(18).set({
				progress: 0.17035798954787731
			}).wait(16).set({
				progress: 0.1066851881560296
			}).wait(16).set({
				progress: 0.059991800468674826
			}).wait(17).set({
				progress: 0.026032973059689414
			}).wait(16).set({
				progress: 0.026032973059689414
			}).wait(18).set({
				progress: 0.07697121417316753
			}).wait(17).set({
				progress: 0.14064401556501524
			}).wait(16).set({
				progress: 0.20856167038298606
			}).wait(17).set({
				progress: 0.27223447177483356
			}).wait(32).set({
				progress: 0.2764793252009567
			}).wait(23).set({
				progress: 0.24252049779197127
			}).wait(28).set({
				progress: 0.1363991621388921
			}).wait(34).set({
				progress: 0.06423665389479795
			}).wait(17).set({
				progress: 0.07697121417316753
			}).wait(16).set({
				progress: 0.12790945528664566
			}).wait(16).set({
				progress: 0.22554108408747878
			}).wait(18).set({
				progress: 0.28921388547932625
			}).wait(16).set({
				progress: 0.3443969800189277
			}).wait(16).set({
				progress: 0.3741109540017898
			}).wait(17).set({
				progress: 0.3783558074279129
			}).wait(16).set({
				progress: 0.3443969800189277
			}).wait(18).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.20856167038298606
			}).wait(16).set({
				progress: 0.12366460186052253
			}).wait(18).set({
				progress: 0.04725724019030524
			}).wait(15).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0.11093004158215294
			}).wait(18).set({
				progress: 0.19582711010461626
			}).wait(32).set({
				progress: 0.23827564436584814
			}).wait(18).set({
				progress: 0.22554108408747878
			}).wait(33).set({
				progress: 0.09395062787766024
			}).wait(16).set({
				progress: 0.03452267991193566
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.0005638525029503536
			}).wait(17).set({
				progress: 0.059991800468674826
			}).wait(17).set({
				progress: 0.1363991621388921
			}).wait(16).set({
				progress: 0.21705137723523232
			}).wait(16).set({
				progress: 0.2764793252009567
			}).wait(17).set({
				progress: 0.3104381526099423
			}).wait(17).set({
				progress: 0.30194844575769586
			}).wait(17).set({
				progress: 0.2637447649225873
			}).wait(16).set({
				progress: 0.20431681695686274
			}).wait(17).set({
				progress: 0.09819548130378336
			}).wait(17).set({
				progress: 0.04725724019030524
			}).wait(16).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0.03452267991193566
			}).wait(16).set({
				progress: 0.07697121417316753
			}).wait(17).set({
				progress: 0.19582711010461626
			}).wait(16).set({
				progress: 0.2764793252009567
			}).wait(17).set({
				progress: 0.33166241974055816
			}).wait(17).set({
				progress: 0.36137639372342023
			}).wait(16).set({
				progress: 0.35288668687117397
			}).wait(17).set({
				progress: 0.3104381526099423
			}).wait(17).set({
				progress: 0.24252049779197127
			}).wait(16).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.08546092102541378
			}).wait(16).set({
				progress: 0.026032973059689414
			}).wait(18).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(33).set({
				progress: 0.04725724019030524
			}).wait(17).set({
				progress: 0.15762342926950773
			}).wait(16).set({
				progress: 0.2297859375136019
			}).wait(17).set({
				progress: 0.2849690320532031
			}).wait(17).set({
				progress: 0.3104381526099423
			}).wait(33).set({
				progress: 0.2594999114964642
			}).wait(17).set({
				progress: 0.19582711010461626
			}).wait(33).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0
			}).wait(33).set({
				progress: 0
			}).wait(32).set({
				progress: 0.08546092102541378
			}).wait(17).set({
				progress: 0.1830925498262469
			}).wait(16).set({
				progress: 0.27223447177483356
			}).wait(17).set({
				progress: 0.3571315402972971
			}).wait(17).set({
				progress: 0.4377837553936375
			}).wait(16).set({
				progress: 0.46325287595037645
			}).wait(17).set({
				progress: 0.4674977293764998
			}).wait(16).set({
				progress: 0.4590080225242533
			}).wait(18).set({
				progress: 0.4377837553936375
			}).wait(16).set({
				progress: 0.39958007455852895
			}).wait(16).set({
				progress: 0.35288668687117397
			}).wait(17).set({
				progress: 0.26798961834871043
			}).wait(16).set({
				progress: 0.19582711010461626
			}).wait(19).set({
				progress: 0.11941974843439919
			}).wait(16).set({
				progress: 0.04301238676418212
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0.013298412781319937
			}).wait(32).set({
				progress: 0.14064401556501524
			}).wait(17).set({
				progress: 0.2297859375136019
			}).wait(17).set({
				progress: 0.26798961834871043
			}).wait(16).set({
				progress: 0.2807241786270798
			}).wait(16).set({
				progress: 0.2849690320532031
			}).wait(17).set({
				progress: 0.2637447649225873
			}).wait(17).set({
				progress: 0.22129623066135565
			}).wait(16).set({
				progress: 0.1321543087127688
			}).wait(17).set({
				progress: 0.08546092102541378
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(17).set({
				progress: 0.1066851881560296
			}).wait(16).set({
				progress: 0.17035798954787731
			}).wait(18).set({
				progress: 0.2467653512180946
			}).wait(31).set({
				progress: 0.39958007455852895
			}).wait(20).set({
				progress: 0.4165594882630217
			}).wait(15).set({
				progress: 0.4038249279846521
			}).wait(18).set({
				progress: 0.3571315402972971
			}).wait(16).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.16611313612175418
			}).wait(16).set({
				progress: 0.1066851881560296
			}).wait(17).set({
				progress: 0.07697121417316753
			}).wait(17).set({
				progress: 0.07697121417316753
			}).wait(16).set({
				progress: 0.11941974843439919
			}).wait(17).set({
				progress: 0.18733740325237003
			}).wait(18).set({
				progress: 0.2637447649225873
			}).wait(16).set({
				progress: 0.36562124714954336
			}).wait(17).set({
				progress: 0.4080697814107752
			}).wait(16).set({
				progress: 0.4165594882630217
			}).wait(16).set({
				progress: 0.4038249279846521
			}).wait(17).set({
				progress: 0.3231727128883117
			}).wait(17).set({
				progress: 0.24252049779197127
			}).wait(16).set({
				progress: 0.16611313612175418
			}).wait(16).set({
				progress: 0.06848150732092108
			}).wait(17).set({
				progress: 0.030277826485812537
			}).wait(17).set({
				progress: 0.013298412781319937
			}).wait(17).set({
				progress: 0.013298412781319937
			}).wait(16).set({
				progress: 0.04301238676418212
			}).wait(17).set({
				progress: 0.10244033472990649
			}).wait(16).set({
				progress: 0.22554108408747878
			}).wait(17).set({
				progress: 0.26798961834871043
			}).wait(17).set({
				progress: 0.3783558074279129
			}).wait(17).set({
				progress: 0.4250491951152679
			}).wait(18).set({
				progress: 0.4590080225242533
			}).wait(16).set({
				progress: 0.4590080225242533
			}).wait(16).set({
				progress: 0.4335389019675144
			}).wait(17).set({
				progress: 0.3783558074279129
			}).wait(16).set({
				progress: 0.306193299183819
			}).wait(17).set({
				progress: 0.22129623066135565
			}).wait(19).set({
				progress: 0.08970577445153712
			}).wait(31).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.06848150732092108
			}).wait(18).set({
				progress: 0.16611313612175418
			}).wait(33).set({
				progress: 0.3953352211324058
			}).wait(32).set({
				progress: 0.5099462636377317
			}).wait(16).set({
				progress: 0.5311705307683473
			}).wait(17).set({
				progress: 0.5311705307683473
			}).wait(18).set({
				progress: 0.522680823916101
			}).wait(16).set({
				progress: 0.46325287595037645
			}).wait(18).set({
				progress: 0.3953352211324058
			}).wait(16).set({
				progress: 0.31892785946218855
			}).wait(16).set({
				progress: 0.23827564436584814
			}).wait(17).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.059991800468674826
			}).wait(16).set({
				progress: 0.0005638525029503536
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.021788119633566184
			}).wait(16).set({
				progress: 0.11517489500827607
			}).wait(17).set({
				progress: 0.18733740325237003
			}).wait(17).set({
				progress: 0.27223447177483356
			}).wait(17).set({
				progress: 0.3571315402972971
			}).wait(16).set({
				progress: 0.42929404854139125
			}).wait(17).set({
				progress: 0.48023228965486936
			}).wait(17).set({
				progress: 0.5099462636377317
			}).wait(17).set({
				progress: 0.501456556785485
			}).wait(17).set({
				progress: 0.4717425828026231
			}).wait(33).set({
				progress: 0.3443969800189277
			}).wait(16).set({
				progress: 0.26798961834871043
			}).wait(16).set({
				progress: 0.17035798954787731
			}).wait(18).set({
				progress: 0.1363991621388921
			}).wait(17).set({
				progress: 0.1321543087127688
			}).wait(16).set({
				progress: 0.19582711010461626
			}).wait(18).set({
				progress: 0.2764793252009567
			}).wait(16).set({
				progress: 0.36562124714954336
			}).wait(16).set({
				progress: 0.44627346224588377
			}).wait(17).set({
				progress: 0.5099462636377317
			}).wait(16).set({
				progress: 0.5099462636377317
			}).wait(18).set({
				progress: 0.48023228965486936
			}).wait(17).set({
				progress: 0.42080434168914477
			}).wait(16).set({
				progress: 0.3104381526099423
			}).wait(16).set({
				progress: 0.22554108408747878
			}).wait(17).set({
				progress: 0.14064401556501524
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(17).set({
				progress: 0.04301238676418212
			}).wait(16).set({
				progress: 0.051502093616428476
			}).wait(16).set({
				progress: 0.1066851881560296
			}).wait(17).set({
				progress: 0.19158225667849316
			}).wait(17).set({
				progress: 0.3359072731666813
			}).wait(16).set({
				progress: 0.42929404854139125
			}).wait(17).set({
				progress: 0.5057014102116083
			}).wait(18).set({
				progress: 0.5736190650295792
			}).wait(32).set({
				progress: 0.594843332160195
			}).wait(17).set({
				progress: 0.5821087718818254
			}).wait(17).set({
				progress: 0.5311705307683473
			}).wait(16).set({
				progress: 0.4717425828026231
			}).wait(16).set({
				progress: 0.3953352211324058
			}).wait(17).set({
				progress: 0.29770359233157273
			}).wait(17).set({
				progress: 0.19582711010461626
			}).wait(16).set({
				progress: 0.0557469470425517
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(19).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(15).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.08121606759929066
			}).wait(17).set({
				progress: 0.19582711010461626
			}).wait(18).set({
				progress: 0.34864183344505084
			}).wait(33).set({
				progress: 0.44202860881976064
			}).wait(16).set({
				progress: 0.44202860881976064
			}).wait(16).set({
				progress: 0.4038249279846521
			}).wait(17).set({
				progress: 0.30194844575769586
			}).wait(16).set({
				progress: 0.2128065238091092
			}).wait(17).set({
				progress: 0.14488886899113837
			}).wait(18).set({
				progress: 0.11093004158215294
			}).wait(33).set({
				progress: 0.17884769640012377
			}).wait(16).set({
				progress: 0.2594999114964642
			}).wait(16).set({
				progress: 0.3443969800189277
			}).wait(17).set({
				progress: 0.42929404854139125
			}).wait(16).set({
				progress: 0.5269256773422242
			}).wait(17).set({
				progress: 0.5651293581773327
			}).wait(17).set({
				progress: 0.5778639184557023
			}).wait(16).set({
				progress: 0.5736190650295792
			}).wait(18).set({
				progress: 0.5523947978989631
			}).wait(17).set({
				progress: 0.5141911170638546
			}).wait(16).set({
				progress: 0.44627346224588377
			}).wait(18).set({
				progress: 0.39958007455852895
			}).wait(32).set({
				progress: 0.25101020464421775
			}).wait(18).set({
				progress: 0.1066851881560296
			}).wait(33).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.0557469470425517
			}).wait(17).set({
				progress: 0.15762342926950773
			}).wait(17).set({
				progress: 0.3274175663144348
			}).wait(16).set({
				progress: 0.42080434168914477
			}).wait(17).set({
				progress: 0.49296684993323875
			}).wait(16).set({
				progress: 0.5354153841944707
			}).wait(17).set({
				progress: 0.5396602376205936
			}).wait(18).set({
				progress: 0.501456556785485
			}).wait(16).set({
				progress: 0.4335389019675144
			}).wait(17).set({
				progress: 0.2807241786270798
			}).wait(16).set({
				progress: 0.16611313612175418
			}).wait(16).set({
				progress: 0.06423665389479795
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(33).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0.1533785758433846
			}).wait(16).set({
				progress: 0.2637447649225873
			}).wait(16).set({
				progress: 0.3443969800189277
			}).wait(17).set({
				progress: 0.38260066085403627
			}).wait(17).set({
				progress: 0.36986610057566666
			}).wait(16).set({
				progress: 0.31892785946218855
			}).wait(17).set({
				progress: 0.234030790939725
			}).wait(17).set({
				progress: 0.1363991621388921
			}).wait(16).set({
				progress: 0.013298412781319937
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0.06423665389479795
			}).wait(17).set({
				progress: 0.11941974843439919
			}).wait(16).set({
				progress: 0.1830925498262469
			}).wait(17).set({
				progress: 0.25101020464421775
			}).wait(17).set({
				progress: 0.3783558074279129
			}).wait(16).set({
				progress: 0.47598743622874606
			}).wait(18).set({
				progress: 0.569374211603456
			}).wait(16).set({
				progress: 0.6839852541087816
			}).wait(17).set({
				progress: 0.7391683486483831
			}).wait(17).set({
				progress: 0.7731271760573682
			}).wait(33).set({
				progress: 0.7773720294834916
			}).wait(16).set({
				progress: 0.7264337883700135
			}).wait(16).set({
				progress: 0.6839852541087816
			}).wait(17).set({
				progress: 0.6542712801259194
			}).wait(19).set({
				progress: 0.6330470129953035
			}).wait(33).set({
				progress: 0.5778639184557023
			}).wait(32).set({
				progress: 0.501456556785485
			}).wait(18).set({
				progress: 0.4505183156720069
			}).wait(33).set({
				progress: 0.39958007455852895
			}).wait(16).set({
				progress: 0.4250491951152679
			}).wait(17).set({
				progress: 0.47598743622874606
			}).wait(16).set({
				progress: 0.5396602376205936
			}).wait(17).set({
				progress: 0.6075778924385645
			}).wait(16).set({
				progress: 0.6160675992908108
			}).wait(17).set({
				progress: 0.6033330390124413
			}).wait(16).set({
				progress: 0.569374211603456
			}).wait(18).set({
				progress: 0.522680823916101
			}).wait(15).set({
				progress: 0.5099462636377317
			}).wait(17).set({
				progress: 0.5141911170638546
			}).wait(17).set({
				progress: 0.5439050910467169
			}).wait(17).set({
				progress: 0.5863536253079488
			}).wait(16).set({
				progress: 0.6288021595691802
			}).wait(17).set({
				progress: 0.6500264266997965
			}).wait(17).set({
				progress: 0.6500264266997965
			}).wait(16).set({
				progress: 0.594843332160195
			}).wait(18).set({
				progress: 0.5311705307683473
			}).wait(17).set({
				progress: 0.44202860881976064
			}).wait(16).set({
				progress: 0.3274175663144348
			}).wait(17).set({
				progress: 0.14913372241726147
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08546092102541378
			}).wait(16).set({
				progress: 0.2000719635307396
			}).wait(17).set({
				progress: 0.306193299183819
			}).wait(16).set({
				progress: 0.3910903677062825
			}).wait(17).set({
				progress: 0.4547631690981302
			}).wait(17).set({
				progress: 0.501456556785485
			}).wait(16).set({
				progress: 0.5354153841944707
			}).wait(17).set({
				progress: 0.5651293581773327
			}).wait(17).set({
				progress: 0.569374211603456
			}).wait(16).set({
				progress: 0.5523947978989631
			}).wait(18).set({
				progress: 0.4972117033593621
			}).wait(17).set({
				progress: 0.4547631690981302
			}).wait(16).set({
				progress: 0.4038249279846521
			}).wait(17).set({
				progress: 0.3443969800189277
			}).wait(16).set({
				progress: 0.234030790939725
			}).wait(17).set({
				progress: 0.15762342926950773
			}).wait(16).set({
				progress: 0.09395062787766024
			}).wait(19).set({
				progress: 0.06848150732092108
			}).wait(14).set({
				progress: 0.09395062787766024
			}).wait(17).set({
				progress: 0.1533785758433846
			}).wait(17).set({
				progress: 0.234030790939725
			}).wait(17).set({
				progress: 0.306193299183819
			}).wait(17).set({
				progress: 0.3443969800189277
			}).wait(17).set({
				progress: 0.35288668687117397
			}).wait(16).set({
				progress: 0.3146830060360654
			}).wait(18).set({
				progress: 0.2552550580703408
			}).wait(16).set({
				progress: 0.17884769640012377
			}).wait(16).set({
				progress: 0.09395062787766024
			}).wait(16).set({
				progress: 0.026032973059689414
			}).wait(18).set({
				progress: 0.0090535593551966
			}).wait(17).set({
				progress: 0.051502093616428476
			}).wait(32).set({
				progress: 0.20856167038298606
			}).wait(17).set({
				progress: 0.29770359233157273
			}).wait(16).set({
				progress: 0.31892785946218855
			}).wait(17).set({
				progress: 0.3146830060360654
			}).wait(18).set({
				progress: 0.2764793252009567
			}).wait(16).set({
				progress: 0.17460284297400064
			}).wait(16).set({
				progress: 0.08970577445153712
			}).wait(17).set({
				progress: 0.013298412781319937
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(17).set({
				progress: 0.059991800468674826
			}).wait(32).set({
				progress: 0.2849690320532031
			}).wait(17).set({
				progress: 0.3443969800189277
			}).wait(16).set({
				progress: 0.3783558074279129
			}).wait(18).set({
				progress: 0.3868455142801594
			}).wait(33).set({
				progress: 0.3274175663144348
			}).wait(16).set({
				progress: 0.22129623066135565
			}).wait(16).set({
				progress: 0.1363991621388921
			}).wait(17).set({
				progress: 0.0557469470425517
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0.0005638525029503536
			}).wait(17).set({
				progress: 0.07697121417316753
			}).wait(17).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.2297859375136019
			}).wait(18).set({
				progress: 0.2934587389054494
			}).wait(32).set({
				progress: 0.29770359233157273
			}).wait(17).set({
				progress: 0.26798961834871043
			}).wait(16).set({
				progress: 0.22129623066135565
			}).wait(17).set({
				progress: 0.16611313612175418
			}).wait(16).set({
				progress: 0.11517489500827607
			}).wait(17).set({
				progress: 0.07697121417316753
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(17).set({
				progress: 0.11093004158215294
			}).wait(17).set({
				progress: 0.17460284297400064
			}).wait(16).set({
				progress: 0.2467653512180946
			}).wait(16).set({
				progress: 0.34864183344505084
			}).wait(17).set({
				progress: 0.39958007455852895
			}).wait(16).set({
				progress: 0.4335389019675144
			}).wait(18).set({
				progress: 0.44627346224588377
			}).wait(17).set({
				progress: 0.44202860881976064
			}).wait(32).set({
				progress: 0.3953352211324058
			}).wait(18).set({
				progress: 0.3104381526099423
			}).wait(32).set({
				progress: 0.14913372241726147
			}).wait(18).set({
				progress: 0.07697121417316753
			}).wait(32).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(34).set({
				progress: 0.0557469470425517
			}).wait(16).set({
				progress: 0.12366460186052253
			}).wait(16).set({
				progress: 0.20431681695686274
			}).wait(18).set({
				progress: 0.31892785946218855
			}).wait(17).set({
				progress: 0.3783558074279129
			}).wait(16).set({
				progress: 0.4165594882630217
			}).wait(16).set({
				progress: 0.42929404854139125
			}).wait(17).set({
				progress: 0.41231463483689834
			}).wait(17).set({
				progress: 0.36562124714954336
			}).wait(16).set({
				progress: 0.29770359233157273
			}).wait(16).set({
				progress: 0.22129623066135565
			}).wait(18).set({
				progress: 0.11517489500827607
			}).wait(16).set({
				progress: 0.09395062787766024
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(17).set({
				progress: 0.09819548130378336
			}).wait(16).set({
				progress: 0.15762342926950773
			}).wait(17).set({
				progress: 0.23827564436584814
			}).wait(17).set({
				progress: 0.31892785946218855
			}).wait(32).set({
				progress: 0.4717425828026231
			}).wait(18).set({
				progress: 0.5057014102116083
			}).wait(32).set({
				progress: 0.5439050910467169
			}).wait(17).set({
				progress: 0.5439050910467169
			}).wait(16).set({
				progress: 0.5439050910467169
			}).wait(17).set({
				progress: 0.5396602376205936
			}).wait(17).set({
				progress: 0.5311705307683473
			}).wait(17).set({
				progress: 0.5141911170638546
			}).wait(16).set({
				progress: 0.48023228965486936
			}).wait(16).set({
				progress: 0.42929404854139125
			}).wait(17).set({
				progress: 0.306193299183819
			}).wait(18).set({
				progress: 0.21705137723523232
			}).wait(16).set({
				progress: 0.14064401556501524
			}).wait(18).set({
				progress: 0.0727263607470442
			}).wait(16).set({
				progress: 0.021788119633566184
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.059991800468674826
			}).wait(17).set({
				progress: 0.14488886899113837
			}).wait(16).set({
				progress: 0.2297859375136019
			}).wait(17).set({
				progress: 0.31892785946218855
			}).wait(18).set({
				progress: 0.35288668687117397
			}).wait(16).set({
				progress: 0.36562124714954336
			}).wait(16).set({
				progress: 0.34864183344505084
			}).wait(17).set({
				progress: 0.3104381526099423
			}).wait(16).set({
				progress: 0.2552550580703408
			}).wait(18).set({
				progress: 0.19158225667849316
			}).wait(16).set({
				progress: 0.08970577445153712
			}).wait(16).set({
				progress: 0.030277826485812537
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08970577445153712
			}).wait(17).set({
				progress: 0.16186828269563105
			}).wait(16).set({
				progress: 0.21705137723523232
			}).wait(18).set({
				progress: 0.2467653512180946
			}).wait(17).set({
				progress: 0.25101020464421775
			}).wait(32).set({
				progress: 0.17035798954787731
			}).wait(17).set({
				progress: 0.1066851881560296
			}).wait(17).set({
				progress: 0.01754326620744306
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.004808705929073477
			}).wait(16).set({
				progress: 0.1066851881560296
			}).wait(17).set({
				progress: 0.18733740325237003
			}).wait(18).set({
				progress: 0.2552550580703408
			}).wait(33).set({
				progress: 0.34015212659280436
			}).wait(17).set({
				progress: 0.34015212659280436
			}).wait(16).set({
				progress: 0.3104381526099423
			}).wait(17).set({
				progress: 0.2637447649225873
			}).wait(18).set({
				progress: 0.20431681695686274
			}).wait(32).set({
				progress: 0.0727263607470442
			}).wait(17).set({
				progress: 0.013298412781319937
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.0005638525029503536
			}).wait(17).set({
				progress: 0.038767533338059
			}).wait(17).set({
				progress: 0.10244033472990649
			}).wait(16).set({
				progress: 0.17035798954787731
			}).wait(17).set({
				progress: 0.2637447649225873
			}).wait(18).set({
				progress: 0.306193299183819
			}).wait(33).set({
				progress: 0.3571315402972971
			}).wait(32).set({
				progress: 0.36562124714954336
			}).wait(17).set({
				progress: 0.3571315402972971
			}).wait(16).set({
				progress: 0.3274175663144348
			}).wait(18).set({
				progress: 0.25101020464421775
			}).wait(16).set({
				progress: 0.18733740325237003
			}).wait(16).set({
				progress: 0.12366460186052253
			}).wait(17).set({
				progress: 0.06423665389479795
			}).wait(16).set({
				progress: 0.0090535593551966
			}).wait(18).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.06423665389479795
			}).wait(18).set({
				progress: 0.14913372241726147
			}).wait(17).set({
				progress: 0.2764793252009567
			}).wait(15).set({
				progress: 0.35288668687117397
			}).wait(18).set({
				progress: 0.41231463483689834
			}).wait(33).set({
				progress: 0.5099462636377317
			}).wait(15).set({
				progress: 0.5311705307683473
			}).wait(18).set({
				progress: 0.5439050910467169
			}).wait(16).set({
				progress: 0.5523947978989631
			}).wait(17).set({
				progress: 0.5608845047512098
			}).wait(16).set({
				progress: 0.5608845047512098
			}).wait(17).set({
				progress: 0.569374211603456
			}).wait(16).set({
				progress: 0.5778639184557023
			}).wait(17).set({
				progress: 0.5863536253079488
			}).wait(17).set({
				progress: 0.5905984787340717
			}).wait(16).set({
				progress: 0.594843332160195
			}).wait(17).set({
				progress: 0.5990881855863183
			}).wait(17).set({
				progress: 0.5990881855863183
			}).wait(16).set({
				progress: 0.6033330390124413
			}).wait(17).set({
				progress: 0.6075778924385645
			}).wait(16).set({
				progress: 0.6203124527169339
			}).wait(17).set({
				progress: 0.6245573061430573
			}).wait(18).set({
				progress: 0.6288021595691802
			}).wait(32).set({
				progress: 0.6457815732736731
			}).wait(19).set({
				progress: 0.6500264266997965
			}).wait(32).set({
				progress: 0.6500264266997965
			}).wait(18).set({
				progress: 0.6415367198475498
			}).wait(33).set({
				progress: 0.5990881855863183
			}).wait(16).set({
				progress: 0.5184359704899779
			}).wait(16).set({
				progress: 0.4335389019675144
			}).wait(17).set({
				progress: 0.3231727128883117
			}).wait(16).set({
				progress: 0.20431681695686274
			}).wait(18).set({
				progress: 0.026032973059689414
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08546092102541378
			}).wait(16).set({
				progress: 0.2637447649225873
			}).wait(17).set({
				progress: 0.36562124714954336
			}).wait(16).set({
				progress: 0.4377837553936375
			}).wait(17).set({
				progress: 0.47598743622874606
			}).wait(17).set({
				progress: 0.48023228965486936
			}).wait(16).set({
				progress: 0.42080434168914477
			}).wait(17).set({
				progress: 0.3443969800189277
			}).wait(17).set({
				progress: 0.25101020464421775
			}).wait(17).set({
				progress: 0.14913372241726147
			}).wait(17).set({
				progress: 0.06848150732092108
			}).wait(16).set({
				progress: 0.021788119633566184
			}).wait(16).set({
				progress: 0.01754326620744306
			}).wait(18).set({
				progress: 0.059991800468674826
			}).wait(15).set({
				progress: 0.1363991621388921
			}).wait(17).set({
				progress: 0.2297859375136019
			}).wait(17).set({
				progress: 0.34015212659280436
			}).wait(17).set({
				progress: 0.3741109540017898
			}).wait(18).set({
				progress: 0.3741109540017898
			}).wait(16).set({
				progress: 0.34015212659280436
			}).wait(16).set({
				progress: 0.24252049779197127
			}).wait(18).set({
				progress: 0.14064401556501524
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0.0090535593551966
			}).wait(17).set({
				progress: 0.14913372241726147
			}).wait(16).set({
				progress: 0.23827564436584814
			}).wait(17).set({
				progress: 0.3104381526099423
			}).wait(17).set({
				progress: 0.36137639372342023
			}).wait(16).set({
				progress: 0.3910903677062825
			}).wait(17).set({
				progress: 0.39958007455852895
			}).wait(18).set({
				progress: 0.36986610057566666
			}).wait(32).set({
				progress: 0.2594999114964642
			}).wait(17).set({
				progress: 0.20431681695686274
			}).wait(17).set({
				progress: 0.1321543087127688
			}).wait(17).set({
				progress: 0.08970577445153712
			}).wait(32).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0.01754326620744306
			}).wait(16).set({
				progress: 0.013298412781319937
			}).wait(18).set({
				progress: 0.013298412781319937
			}).wait(16).set({
				progress: 0.0090535593551966
			}).wait(17).set({
				progress: 0.0005638525029503536
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08970577445153712
			}).wait(16).set({
				progress: 0.2000719635307396
			}).wait(16).set({
				progress: 0.31892785946218855
			}).wait(19).set({
				progress: 0.4335389019675144
			}).wait(32).set({
				progress: 0.5736190650295792
			}).wait(17).set({
				progress: 0.5821087718818254
			}).wait(16).set({
				progress: 0.5651293581773327
			}).wait(17).set({
				progress: 0.4590080225242533
			}).wait(16).set({
				progress: 0.35288668687117397
			}).wait(18).set({
				progress: 0.2297859375136019
			}).wait(16).set({
				progress: 0.12366460186052253
			}).wait(17).set({
				progress: 0.030277826485812537
			}).wait(18).set({
				progress: 0.021788119633566184
			}).wait(32).set({
				progress: 0.2128065238091092
			}).wait(17).set({
				progress: 0.3274175663144348
			}).wait(17).set({
				progress: 0.42929404854139125
			}).wait(16).set({
				progress: 0.501456556785485
			}).wait(18).set({
				progress: 0.5269256773422242
			}).wait(16).set({
				progress: 0.501456556785485
			}).wait(16).set({
				progress: 0.44202860881976064
			}).wait(17).set({
				progress: 0.35288668687117397
			}).wait(16).set({
				progress: 0.2467653512180946
			}).wait(18).set({
				progress: 0.14064401556501524
			}).wait(17).set({
				progress: 0.03452267991193566
			}).wait(15).set({
				progress: 0.021788119633566184
			}).wait(17).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(16).set({
				progress: 0.15762342926950773
			}).wait(18).set({
				progress: 0.3146830060360654
			}).wait(33).set({
				progress: 0.4887219965071156
			}).wait(17).set({
				progress: 0.5269256773422242
			}).wait(33).set({
				progress: 0.4887219965071156
			}).wait(16).set({
				progress: 0.42080434168914477
			}).wait(16).set({
				progress: 0.3359072731666813
			}).wait(17).set({
				progress: 0.2000719635307396
			}).wait(17).set({
				progress: 0.12790945528664566
			}).wait(16).set({
				progress: 0.08121606759929066
			}).wait(18).set({
				progress: 0.059991800468674826
			}).wait(31).set({
				progress: 0.11517489500827607
			}).wait(18).set({
				progress: 0.19158225667849316
			}).wait(16).set({
				progress: 0.2934587389054494
			}).wait(17).set({
				progress: 0.3953352211324058
			}).wait(17).set({
				progress: 0.48023228965486936
			}).wait(16).set({
				progress: 0.522680823916101
			}).wait(19).set({
				progress: 0.5141911170638546
			}).wait(16).set({
				progress: 0.46325287595037645
			}).wait(16).set({
				progress: 0.3783558074279129
			}).wait(18).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.1830925498262469
			}).wait(16).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.17460284297400064
			}).wait(17).set({
				progress: 0.2297859375136019
			}).wait(16).set({
				progress: 0.35288668687117397
			}).wait(17).set({
				progress: 0.42929404854139125
			}).wait(17).set({
				progress: 0.47598743622874606
			}).wait(16).set({
				progress: 0.4844771430809925
			}).wait(16).set({
				progress: 0.4717425828026231
			}).wait(18).set({
				progress: 0.3953352211324058
			}).wait(16).set({
				progress: 0.33166241974055816
			}).wait(17).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.26798961834871043
			}).wait(17).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.3359072731666813
			}).wait(17).set({
				progress: 0.41231463483689834
			}).wait(18).set({
				progress: 0.42080434168914477
			}).wait(32).set({
				progress: 0.26798961834871043
			}).wait(17).set({
				progress: 0.059991800468674826
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(32).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(15).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0.001
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
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// mando_s_jaw
	this.instance = new lib.mando_s_jaw_1();
	this.instance.setTransform(34.5,41.8,1,1,0,0,0,36,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.12,y:42.3},59).wait(1));

	// mando_s_mouth1
	this.instance_1 = new lib.mando_s_mouth1_1();
	this.instance_1.setTransform(18.5,45.5,1,1,0,0,0,4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,skewY:35.2,x:17.3,y:47},59).wait(1));

	// mando_s_mouth2
	this.instance_2 = new lib.mando_s_mouth2_1();
	this.instance_2.setTransform(32.5,48.5,1,1,0,0,0,7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.36,y:54},59).wait(1));

	// mando_s_mouth3
	this.instance_3 = new lib.mando_s_mouth3_1();
	this.instance_3.setTransform(47.5,45.3,1,1,0,0,0,10,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9,skewY:-39.7,y:45.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,26,79,56);


(lib.mando_s_bucketChicken = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.bucket_chicken_d();
	this.instance.setTransform(273.5,58,1,1,0,0,0,293.5,67);

	// Layer 1
	this.instance_1 = new lib.bucketChicken();
	this.instance_1.setTransform(-20,-9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-9,587,134);


(lib.madolin_bucketMain = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.bucketDark();
	this.instance.setTransform(311.5,321.3,1,1,0,0,0,327.5,321.5);
	this.instance.alpha = 0.789;

	// Layer 2
	this.instance_1 = new lib.hall_bucket();
	this.instance_1.setTransform(-16,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-0.2,655,643.2);


(lib.backCurtain_mando = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.curtain_d();
	this.instance.setTransform(700,312.2,1,0.922,0,0,0,700,334.2);

	// Layer 1
	this.instance_1 = new lib.backCurtain1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1401,628);


(lib.gunfight_platform_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_plinth_d_1();
	this.instance.setTransform(77.9,15.8,0.929,0.926,0,0,0,82.5,17);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.gunfight_platform();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,34);


(lib.gunfight_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shared_gunfight_eyeR_1();
	this.instance.setTransform(19.5,6.5,1,1,0,0,0,5.5,5.5);

	this.instance_1 = new lib.shared_gunfight_eyeL_1();
	this.instance_1.setTransform(5.5,5.5,1,1,0,0,0,5.5,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:5.5,y:5.5}},{t:this.instance,p:{x:19.5,y:6.5}}]}).to({state:[{t:this.instance_1,p:{x:4.5,y:5.5}},{t:this.instance,p:{x:18.5,y:6.5}}]},26).to({state:[{t:this.instance_1,p:{x:6,y:5.8}},{t:this.instance,p:{x:20,y:6.8}}]},11).to({state:[{t:this.instance_1,p:{x:5,y:5.8}},{t:this.instance,p:{x:19,y:6.8}}]},21).to({state:[{t:this.instance_1,p:{x:5,y:5.3}},{t:this.instance,p:{x:19,y:6.3}}]},25).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,12);


(lib.encore_animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.004808705929073477
			}).wait(17).set({
				progress: 0.004808705929073477
			}).wait(17).set({
				progress: 0.004808705929073477
			}).wait(17).set({
				progress: 0.12366460186052253
			}).wait(16).set({
				progress: 0.20856167038298606
			}).wait(17).set({
				progress: 0.28921388547932625
			}).wait(16).set({
				progress: 0.36137639372342023
			}).wait(17).set({
				progress: 0.38260066085403627
			}).wait(17).set({
				progress: 0.3868455142801594
			}).wait(16).set({
				progress: 0.38260066085403627
			}).wait(17).set({
				progress: 0.3274175663144348
			}).wait(17).set({
				progress: 0.2552550580703408
			}).wait(16).set({
				progress: 0.16186828269563105
			}).wait(17).set({
				progress: 0.0727263607470442
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.0557469470425517
			}).wait(18).set({
				progress: 0.14913372241726147
			}).wait(15).set({
				progress: 0.234030790939725
			}).wait(17).set({
				progress: 0.30194844575769586
			}).wait(16).set({
				progress: 0.34015212659280436
			}).wait(17).set({
				progress: 0.33166241974055816
			}).wait(17).set({
				progress: 0.29770359233157273
			}).wait(16).set({
				progress: 0.19158225667849316
			}).wait(17).set({
				progress: 0.1066851881560296
			}).wait(17).set({
				progress: 0.026032973059689414
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.06848150732092108
			}).wait(17).set({
				progress: 0.17035798954787731
			}).wait(16).set({
				progress: 0.2764793252009567
			}).wait(19).set({
				progress: 0.42929404854139125
			}).wait(16).set({
				progress: 0.5057014102116083
			}).wait(16).set({
				progress: 0.5523947978989631
			}).wait(17).set({
				progress: 0.5736190650295792
			}).wait(16).set({
				progress: 0.5736190650295792
			}).wait(17).set({
				progress: 0.5566396513250864
			}).wait(17).set({
				progress: 0.48023228965486936
			}).wait(17).set({
				progress: 0.3953352211324058
			}).wait(16).set({
				progress: 0.2849690320532031
			}).wait(17).set({
				progress: 0.16186828269563105
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(19).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08546092102541378
			}).wait(17).set({
				progress: 0.21705137723523232
			}).wait(17).set({
				progress: 0.38260066085403627
			}).wait(17).set({
				progress: 0.46325287595037645
			}).wait(16).set({
				progress: 0.5141911170638546
			}).wait(16).set({
				progress: 0.5354153841944707
			}).wait(17).set({
				progress: 0.5311705307683473
			}).wait(17).set({
				progress: 0.49296684993323875
			}).wait(17).set({
				progress: 0.3741109540017898
			}).wait(15).set({
				progress: 0.2764793252009567
			}).wait(18).set({
				progress: 0.17035798954787731
			}).wait(16).set({
				progress: 0.06423665389479795
			}).wait(18).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0.021788119633566184
			}).wait(17).set({
				progress: 0.18733740325237003
			}).wait(17).set({
				progress: 0.2849690320532031
			}).wait(16).set({
				progress: 0.34864183344505084
			}).wait(17).set({
				progress: 0.38260066085403627
			}).wait(16).set({
				progress: 0.3741109540017898
			}).wait(17).set({
				progress: 0.3274175663144348
			}).wait(16).set({
				progress: 0.2552550580703408
			}).wait(17).set({
				progress: 0.16611313612175418
			}).wait(18).set({
				progress: 0.030277826485812537
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.08970577445153712
			}).wait(16).set({
				progress: 0.20856167038298606
			}).wait(17).set({
				progress: 0.38260066085403627
			}).wait(16).set({
				progress: 0.47598743622874606
			}).wait(17).set({
				progress: 0.5311705307683473
			}).wait(16).set({
				progress: 0.5608845047512098
			}).wait(18).set({
				progress: 0.569374211603456
			}).wait(17).set({
				progress: 0.5566396513250864
			}).wait(18).set({
				progress: 0.5311705307683473
			}).wait(15).set({
				progress: 0.44202860881976064
			}).wait(16).set({
				progress: 0.3571315402972971
			}).wait(17).set({
				progress: 0.2552550580703408
			}).wait(18).set({
				progress: 0.14064401556501524
			}).wait(16).set({
				progress: 0.026032973059689414
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(16).set({
				progress: 0.001
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
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// mando_s_jaw
	this.instance = new lib.mando_s_jaw_1();
	this.instance.setTransform(34.5,41.8,1,1,0,0,0,36,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.12,y:42.3},59).wait(1));

	// mando_s_mouth1
	this.instance_1 = new lib.mando_s_mouth1_1();
	this.instance_1.setTransform(18.5,45.5,1,1,0,0,0,4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,skewY:35.2,x:17.3,y:47},59).wait(1));

	// mando_s_mouth2
	this.instance_2 = new lib.mando_s_mouth2_1();
	this.instance_2.setTransform(32.5,48.5,1,1,0,0,0,7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.36,y:54},59).wait(1));

	// mando_s_mouth3
	this.instance_3 = new lib.mando_s_mouth3_1();
	this.instance_3.setTransform(47.5,45.3,1,1,0,0,0,10,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9,skewY:-39.7,y:45.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,26,79,56);


(lib.early_years_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.early_eyel_1();
	this.instance.setTransform(5.5,6,1,1,0,0,0,5.5,6);

	this.instance_1 = new lib.early_eyer_1();
	this.instance_1.setTransform(20.5,7,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:20.5,y:7}},{t:this.instance,p:{x:5.5,y:6}}]}).to({state:[{t:this.instance_1,p:{x:20.1,y:7}},{t:this.instance,p:{x:5.1,y:6}}]},5).to({state:[{t:this.instance_1,p:{x:21.4,y:7}},{t:this.instance,p:{x:6.4,y:6}}]},19).to({state:[{t:this.instance_1,p:{x:21.4,y:7.6}},{t:this.instance,p:{x:6.4,y:6.6}}]},7).to({state:[{t:this.instance_1,p:{x:20.5,y:7.6}},{t:this.instance,p:{x:5.5,y:6.6}}]},10).to({state:[{t:this.instance_1,p:{x:20.8,y:7.8}},{t:this.instance,p:{x:5.8,y:6.8}}]},19).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,13);


(lib.early_platform_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_plinth_d_1();
	this.instance.setTransform(74.1,15.2,0.868,0.904,0,0,0,82.5,17.1);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_platform();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.2,148,32.3);


(lib.departed_head = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.departed_head_d_1();
	this.instance.setTransform(55,72,1,1,0,0,0,55,72);
	this.instance.alpha = 0.699;

	// Layer 1
	this.instance_1 = new lib.departed_mo_1();
	this.instance_1.setTransform(53,65,1,1,0,0,0,18,5);

	this.instance_2 = new lib.departed_goatee_1();
	this.instance_2.setTransform(54,79,1,1,0,0,0,12,13);

	this.instance_3 = new lib.departed_bust_head_1();
	this.instance_3.setTransform(55,72,1,1,0,0,0,55,72);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,110,144);


(lib.mando_s_left_hand_tuning = function() {
	this.initialize();

	// mando_s_l_finger1
	this.instance = new lib.mando_s_l_finger1_1();
	this.instance.setTransform(26,39.3,1,1,0,0,0,26,23.3);

	// mando_s_l_finger2
	this.instance_1 = new lib.mando_s_l_finger2_1();
	this.instance_1.setTransform(35,31.5,1,1,0,0,0,25,20.5);

	// mando_s_l_finger3
	this.instance_2 = new lib.mando_s_l_finger3_1();
	this.instance_2.setTransform(40.5,24.5,1,1,0,0,0,24.5,18.5);

	// mando_s_l_finger4
	this.instance_3 = new lib.mando_s_l_finger4_1();
	this.instance_3.setTransform(49.5,17.8,1,1,0,0,0,28.5,17.8);

	// mando_s_left_hand
	this.instance_4 = new lib.mando_s_left_hand_2();
	this.instance_4.setTransform(44,39.5,1,1,0,0,0,23,30.5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib.mando_s_left_hand_static = function() {
	this.initialize();

	// mando_s_l_finger1
	this.instance = new lib.mando_s_l_finger1_1();
	this.instance.setTransform(26,39.3,1,1,0,0,0,26,23.3);

	// mando_s_l_finger2
	this.instance_1 = new lib.mando_s_l_finger2_1();
	this.instance_1.setTransform(35,31.5,1,1,0,0,0,25,20.5);

	// mando_s_l_finger3
	this.instance_2 = new lib.mando_s_l_finger3_1();
	this.instance_2.setTransform(40.5,24.5,1,1,0,0,0,24.5,18.5);

	// mando_s_l_finger4
	this.instance_3 = new lib.mando_s_l_finger4_1();
	this.instance_3.setTransform(49.5,17.8,1,1,0,0,0,28.5,17.8);

	// mando_s_left_hand
	this.instance_4 = new lib.mando_s_left_hand_2();
	this.instance_4.setTransform(44,39.5,1,1,0,0,0,23,30.5);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib.mando_s_left_hand_fingering = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mando_s_l_finger1
	this.instance = new lib.mando_s_l_finger1_1();
	this.instance.setTransform(26,39.3,1,1,0,0,0,26,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({scaleX:1.01,skewY:-6},3).wait(7).to({regX:26.1,scaleX:0.87,scaleY:0.85,rotation:-18.7,skewY:0,x:26.1},3).wait(11).to({regX:26,scaleX:1,scaleY:1,rotation:0,x:26},3).wait(1));

	// mando_s_l_finger2
	this.instance_1 = new lib.mando_s_l_finger2_1();
	this.instance_1.setTransform(35,31.5,1,1,0,0,0,25,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({regY:20.6,scaleX:0.99,scaleY:1.01,skewX:-9.7,skewY:-7.8,y:31.6},3).wait(11).to({scaleX:0.98,scaleY:1.02,skewX:-19.7,skewY:-14.7},3).wait(5).to({regY:20.5,scaleX:1,scaleY:1,skewX:0,skewY:0,y:31.5},3).wait(1));

	// mando_s_l_finger3
	this.instance_2 = new lib.mando_s_l_finger3_1();
	this.instance_2.setTransform(40.5,24.5,1,1,0,0,0,24.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({regY:18.4,scaleY:1.02,skewX:7.2,skewY:-4.5},4).wait(13).to({scaleY:1,rotation:-15,skewX:0,skewY:0,y:24.4},4).wait(7).to({regY:18.5,rotation:0,y:24.5},3).wait(1));

	// mando_s_l_finger4
	this.instance_3 = new lib.mando_s_l_finger4_1();
	this.instance_3.setTransform(49.5,17.8,1,1,0,0,0,28.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({regX:28.6,regY:17.7,scaleX:0.84,scaleY:1.02,skewX:3,skewY:-11.9,x:49.6},4).wait(10).to({regX:28.5,regY:17.8,scaleX:1,scaleY:1,rotation:-20.5,skewX:0,skewY:0},3).wait(8).to({rotation:0,x:49.5},3).wait(1));

	// mando_s_left_hand
	this.instance_4 = new lib.mando_s_left_hand_2();
	this.instance_4.setTransform(44,39.5,1,1,0,0,0,23,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib.mando_s_left_hand_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mando_s_l_finger1
	this.instance_1 = new lib.mando_s_l_finger1_1();
	this.instance_1.setTransform(26,39.3,1,1,0,0,0,26,23.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({scaleX:1.01,skewY:-6},3).wait(7).to({regX:26.1,scaleX:0.87,scaleY:0.85,rotation:-18.7,skewY:0,x:26.1},3).wait(11).to({regX:26,scaleX:1,scaleY:1,rotation:0,x:26},3).wait(1));

	// mando_s_l_finger2
	this.instance_2 = new lib.mando_s_l_finger2_1();
	this.instance_2.setTransform(35,31.5,1,1,0,0,0,25,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({regY:20.6,scaleX:0.99,scaleY:1.01,skewX:-9.7,skewY:-7.8,y:31.6},3).wait(11).to({scaleX:0.98,scaleY:1.02,skewX:-19.7,skewY:-14.7},3).wait(5).to({regY:20.5,scaleX:1,scaleY:1,skewX:0,skewY:0,y:31.5},3).wait(1));

	// mando_s_l_finger3
	this.instance_3 = new lib.mando_s_l_finger3_1();
	this.instance_3.setTransform(40.5,24.5,1,1,0,0,0,24.5,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({regY:18.4,scaleY:1.02,skewX:7.2,skewY:-4.5},4).wait(13).to({scaleY:1,rotation:-15,skewX:0,skewY:0,y:24.4},4).wait(7).to({regY:18.5,rotation:0,y:24.5},3).wait(1));

	// mando_s_l_finger4
	this.instance_4 = new lib.mando_s_l_finger4_1();
	this.instance_4.setTransform(49.5,17.8,1,1,0,0,0,28.5,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({regX:28.6,regY:17.7,scaleX:0.84,scaleY:1.02,skewX:3,skewY:-11.9,x:49.6},4).wait(10).to({regX:28.5,regY:17.8,scaleX:1,scaleY:1,rotation:-20.5,skewX:0,skewY:0},3).wait(8).to({rotation:0,x:49.5},3).wait(1));

	// mando_s_left_hand
	this.instance_5 = new lib.mando_s_left_hand_2();
	this.instance_5.setTransform(44,39.5,1,1,0,0,0,23,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67,70);


(lib.mando_s_jacketback_top_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mando_s_jacketback_top();

	// Layer 2
	this.instance_1 = new lib.mando_s_head_neck_1();
	this.instance_1.setTransform(110.5,6.7,1,1,0,0,0,35.5,22.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-15.8,154,231.8);


(lib.departed_platform_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.departed_platform_d_1();
	this.instance.setTransform(76,15,1,1,0,0,0,76,15);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.departed_platform();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,152,30);


(lib.departed_pillar_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.departed_pillar_d_1();
	this.instance.setTransform(61,211,1,1,0,0,0,61,211);
	this.instance.alpha = 0.711;

	// Layer 1
	this.instance_1 = new lib.departed_pillar();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,422);


(lib.ll_torso_shadow_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_torso_shadow_d_1();
	this.instance.setTransform(60.5,17,1,1,0,0,0,60.5,17);

	// Layer 1
	this.instance_1 = new lib.ll_torso_shadow();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,34);


(lib.ll_torso_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_torso_d_1();
	this.instance.setTransform(99,132,1,1,0,0,0,99,132);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_torso();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,198,264);


(lib.ll_r_arm_all_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_r_arm_all_d_1();
	this.instance.setTransform(42.5,61,1,1,0,0,0,42.5,61);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_r_arm_all();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,122);


(lib.ll_plinth_2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_plinth_d_1();
	this.instance.setTransform(82.5,17,1,1,0,0,0,82.5,17);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_plinth_1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,165,38);


(lib.ll_legs_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_legs_d_1();
	this.instance.setTransform(65.5,116.5,1,1,0,0,0,65.5,116.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_legs();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,131,233);


(lib.ll_l_hand_all_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_l_hand_all_d_1();
	this.instance.setTransform(22.5,125,1,1,0,0,0,22.5,125);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_l_hand_all();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,250);


(lib.ll_l_forearm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_l_forearm_d_2();
	this.instance.setTransform(18.5,45.5,1,1,0,0,0,18.5,45.5);
	this.instance.alpha = 0.66;

	// Layer 1
	this.instance_1 = new lib.ll_l_forearm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,91);


(lib.ll_l_arm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_l_arm_d_1();
	this.instance.setTransform(27.5,61,1,1,0,0,0,27.5,61);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.ll_l_arm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,55,122);


(lib.ll_eye_R_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{label_show:2,label_hide:12});

	// timeline functions:
	this.frame_0 = function() {
		window.project_colonel_archive_canvas.defineDarkenClip(this);
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(10).call(this.frame_21).wait(1));

	// Layer 2
	this.instance = new lib.ll_eye_R_d_1();
	this.instance.setTransform(11,6,1,1,0,0,0,11,6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},11,cjs.Ease.get(1)).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.ll_eye_R();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.ll_eye_L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"label_show":2,"label_hide":12});

	// timeline functions:
	this.frame_0 = function() {
		window.project_colonel_archive_canvas.defineDarkenClip(this);
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(10).call(this.frame_21).wait(1));

	// Layer 2
	this.instance = new lib.ll_eye_L_d_1();
	this.instance.setTransform(11,6,1,1,0,0,0,11,6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.5},11,cjs.Ease.get(1)).to({alpha:0},9,cjs.Ease.get(1)).to({_off:true},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.ll_eye_L();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,12);


(lib.shared_gunfight_torso_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_torsoD();
	this.instance.setTransform(54.5,70.5,1,1,0,0,0,54.5,70.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_torso();

	// shared_gunfight_neck_d
	this.instance_2 = new lib.shared_gunfight_neck_d_1();
	this.instance_2.setTransform(52,12.8,1,1,0,0,0,22.5,18);
	this.instance_2.alpha = 0.5;

	// shared_gunfight_neck
	this.instance_3 = new lib.shared_gunfight_neck_1();
	this.instance_3.setTransform(52,12.8,1,1,0,0,0,22.5,18);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-5.2,109,146.3);


(lib.shared_gunfight_shoes_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_shoes_D_1();
	this.instance.setTransform(71.5,36,1,1,0,0,0,71.5,36);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_shoes();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,143,72);


(lib.shared_gunfight_right_upper_arm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_right_upper_arm_D_1();
	this.instance.setTransform(21,45,1,1,0,0,0,21,45);
	this.instance.alpha = 0.5;

	// Layer 5
	this.instance_1 = new lib.shared_gunfight_right_upperarm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,90);


(lib.shared_gunfight_right_hand_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_right_hand_D_1();
	this.instance.setTransform(14,19.5,1,1,0,0,0,14,19.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_right_hand();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.shared_gunfight_right_forearm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_right_forearm_D_1();
	this.instance.setTransform(19.5,36,1,1,0,0,0,19.5,36);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_right_forearm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,39,72);


(lib.shared_gunfight_pants_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_pants_D_1();
	this.instance.setTransform(60.5,147.5,1,1,0,0,0,60.5,147.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_pants();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,121,295);


(lib.shared_gunfight_leftupper_arm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_leftupper_arm_D_1();
	this.instance.setTransform(19,44,1,1,0,0,0,19,44);
	this.instance.alpha = 0.5;

	// Layer 5
	this.instance_1 = new lib.gunfight_shared_upperleft();
	this.instance_1.setTransform(-15,-7);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15,-7,55,96);


(lib.shared_gunfight_left_hand_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_left_hand_D_1();
	this.instance.setTransform(15,20,1,1,0,0,0,15,20);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_left_hand();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.shared_gunfight_left_forearm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.shared_gunfight_left_forearm_D_1();
	this.instance.setTransform(18,35,1,1,0,0,0,18,35);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.shared_gunfight_left_forearm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,70);


(lib.early_vest_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_vest_d_1();
	this.instance.setTransform(48.5,84,1,1,0,0,0,48.5,84);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_vest();

	// early_neck_d
	this.instance_2 = new lib.early_neck_d_1();
	this.instance_2.setTransform(53.5,8.7,1,1,0,0,0,26.5,17);
	this.instance_2.alpha = 0.5;

	// early_neck.png
	this.instance_3 = new lib.early_neck();
	this.instance_3.setTransform(27,-8.3);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-8.3,97,176.3);


(lib.early_shoes_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_shoes_d_1();
	this.instance.setTransform(65,17.5,1,1,0,0,0,65,17.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_shoes();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,35);


(lib.early_r_upperarm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_r_upperarm_d_1();
	this.instance.setTransform(25.5,44,1,1,0,0,0,25.5,44);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_r_upperarm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_r_hand_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_r_hand_d_1();
	this.instance.setTransform(16,17.5,1,1,0,0,0,16,17.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_r_hand();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_forearm_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_r_forearm_d_1();
	this.instance.setTransform(21.5,33,1,1,0,0,0,21.5,33);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_r_forearm();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,66);


(lib.early_pants = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_pants_d_1();
	this.instance.setTransform(53,110,1,1,0,0,0,53,110);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_pants1();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,220);


(lib.early_l_hand_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_l_hand_d_1();
	this.instance.setTransform(9.5,22.5,1,1,0,0,0,9.5,22.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_l_hand();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_l_arm_down_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_l_arm_down_d_1();
	this.instance.setTransform(14.5,77.5,1,1,0,0,0,14.5,77.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_l_arm_down();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.early_head_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.early_head_d_3();
	this.instance.setTransform(26,33.5,1,1,0,0,0,26,33.5);
	this.instance.alpha = 0.5;

	// Layer 1
	this.instance_1 = new lib.early_head1();

	// early_years_eyes
	this.instance_2 = new lib.early_years_eyes();
	this.instance_2.setTransform(31.6,36.6,1,1,0,0,0,13,6.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.back_to_hall_area_button = function() {
	this.initialize();

	// Layer 2
	this.hitArea = new lib.doesntmatter();
	this.hitArea.setTransform(700,382.5,1,1,0,0,0,700,382.5);
	this.hitArea.visible = false;

	this.addChild(this.hitArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.6,1402.9,770);


(lib.animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			});
			tween.wait(0);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(33);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(37);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(30);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(16);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(16);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(21);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(13);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(18);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(33);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(32);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(16);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(18);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(16);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(18);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(15);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(18);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(15);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(18);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(32);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(18);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(32);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(16);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(18);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(33);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(18);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(17);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(18);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(32);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(18);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(16);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(16);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(17);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
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
			tween.wait(33);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(34);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(16);
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
			tween.wait(38);
			tween.set({
				progress: 0
			});
			tween.wait(13);
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
			tween.wait(32);
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
			tween.wait(18);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(17);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(17);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(17);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(16);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(17);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(17);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(17);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(17);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(17);
			tween.set({
				progress: 0.1791776401641871
			});
			tween.wait(18);
			tween.set({
				progress: 0.1915314960994066
			});
			tween.wait(32);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(17);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(17);
			tween.set({
				progress: 0.21623920796984553
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(17);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(32);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(18);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(15);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(32);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(17);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(32);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(17);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.220357159948252
			});
			tween.wait(17);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(33);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(17);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(16);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(18);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(32);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(18);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(16);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(16);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(34);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(17);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(17);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(16);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(18);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(33);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(32);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(18);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(32);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(18);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(33);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(18);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(16);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(19);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(18);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(18);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(18);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(33);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(18);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(18);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(18);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(32);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(18);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(32);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(18);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(16);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(18);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(16);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(16);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(32);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(32);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(32);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(32);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(16);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(19);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(16);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(17);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(18);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(32);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(17);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
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
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(32);
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
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(33);
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
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(32);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(18);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(18);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(32);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(32);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(18);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(32);
			tween.set({
				progress: 0.01034160904952108
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.002105705092708098
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
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(16);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(18);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(33);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(16);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(18);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(16);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(16);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(17);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(18);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(33);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(32);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(17);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(17);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(17);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(16);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(18);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(32);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(18);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(15);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(18);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(32);
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
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(19);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
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
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(19);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(16);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
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
			tween.wait(32);
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
			tween.wait(33);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(16);
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
			tween.wait(32);
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
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(16);
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
			tween.wait(16);
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
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(33);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
				progress: 0.002105705092708098
			});
			tween.wait(16);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(18);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(32);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(18);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(18);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(16);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(16);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(18);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(32);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(17);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(18);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(32);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(33);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(32);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(18);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(18);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(16);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(17);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(17);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(16);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(19);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(32);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(17);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(17);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(17);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(17);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(16);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(17);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(18);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(32);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(18);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(32);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(18);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(32);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(16);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(32);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(33);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(16);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(17);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(17);
			tween.set({
				progress: 0.24506487181869097
			});
			tween.wait(18);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(32);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(16);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(17);
			tween.set({
				progress: 0.24094691984028446
			});
			tween.wait(18);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(32);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(17);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(16);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(17);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(16);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(17);
			tween.set({
				progress: 0.24506487181869097
			});
			tween.wait(16);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(17);
			tween.set({
				progress: 0.38095728710610516
			});
			tween.wait(17);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(16);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(17);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(17);
			tween.set({
				progress: 0.5456753662423646
			});
			tween.wait(16);
			tween.set({
				progress: 0.5456753662423646
			});
			tween.wait(18);
			tween.set({
				progress: 0.5292035583287387
			});
			tween.wait(16);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(16);
			tween.set({
				progress: 0.47155223063104795
			});
			tween.wait(17);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(16);
			tween.set({
				progress: 0.356249575235666
			});
			tween.wait(18);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(17);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(32);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(16);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(18);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(17);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(18);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(32);
			tween.set({
				progress: 0.30271619951638185
			});
			tween.wait(16);
			tween.set({
				progress: 0.33565981534363354
			});
			tween.wait(17);
			tween.set({
				progress: 0.4386086148037958
			});
			tween.wait(17);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(16);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(17);
			tween.set({
				progress: 0.582736934048023
			});
			tween.wait(17);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(16);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(18);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(33);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(16);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(17);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(18);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(32);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(16);
			tween.set({
				progress: 0.5786189820696167
			});
			tween.wait(17);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(17);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(17);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(16);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(16);
			tween.set({
				progress: 0.29859824753797537
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(17);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(18);
			tween.set({
				progress: 0.2656546317107234
			});
			tween.wait(32);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(16);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(18);
			tween.set({
				progress: 0.4386086148037958
			});
			tween.wait(16);
			tween.set({
				progress: 0.4591983746958283
			});
			tween.wait(16);
			tween.set({
				progress: 0.463316326674235
			});
			tween.wait(19);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(16);
			tween.set({
				progress: 0.4221368068901701
			});
			tween.wait(17);
			tween.set({
				progress: 0.34801367127885324
			});
			tween.wait(16);
			tween.set({
				progress: 0.29036234358116236
			});
			tween.wait(16);
			tween.set({
				progress: 0.236828967861878
			});
			tween.wait(17);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(17);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(16);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(17);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(16);
			tween.set({
				progress: 0.23271101588347148
			});
			tween.wait(17);
			tween.set({
				progress: 0.3191880074300078
			});
			tween.wait(16);
			tween.set({
				progress: 0.34801367127885324
			});
			tween.wait(18);
			tween.set({
				progress: 0.4180188549117634
			});
			tween.wait(17);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(17);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(17);
			tween.set({
				progress: 0.47155223063104795
			});
			tween.wait(33);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(16);
			tween.set({
				progress: 0.38919319106291816
			});
			tween.wait(16);
			tween.set({
				progress: 0.33977776732204024
			});
			tween.wait(17);
			tween.set({
				progress: 0.28212643962434936
			});
			tween.wait(16);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(17);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(33);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(32);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(18);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(33);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(17);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(18);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(32);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(17);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(16);
			tween.set({
				progress: 0.3974290950197309
			});
			tween.wait(17);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(16);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(18);
			tween.set({
				progress: 0.47155223063104795
			});
			tween.wait(32);
			tween.set({
				progress: 0.47567018260945426
			});
			tween.wait(18);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(33);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(17);
			tween.set({
				progress: 0.4921419905230802
			});
			tween.wait(16);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(17);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(18);
			tween.set({
				progress: 0.5127317504151129
			});
			tween.wait(16);
			tween.set({
				progress: 0.5209676543719256
			});
			tween.wait(16);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(16);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(17);
			tween.set({
				progress: 0.5415574142639581
			});
			tween.wait(16);
			tween.set({
				progress: 0.5415574142639581
			});
			tween.wait(17);
			tween.set({
				progress: 0.5415574142639581
			});
			tween.wait(18);
			tween.set({
				progress: 0.5415574142639581
			});
			tween.wait(32);
			tween.set({
				progress: 0.5374394622855518
			});
			tween.wait(17);
			tween.set({
				progress: 0.5250856063503323
			});
			tween.wait(17);
			tween.set({
				progress: 0.5127317504151129
			});
			tween.wait(17);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(34);
			tween.set({
				progress: 0.3974290950197309
			});
			tween.wait(17);
			tween.set({
				progress: 0.3521316232572597
			});
			tween.wait(31);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(17);
			tween.set({
				progress: 0.2656546317107234
			});
			tween.wait(17);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(17);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(17);
			tween.set({
				progress: 0.3727213831492922
			});
			tween.wait(17);
			tween.set({
				progress: 0.47567018260945426
			});
			tween.wait(32);
			tween.set({
				progress: 0.5868548860264295
			});
			tween.wait(17);
			tween.set({
				progress: 0.6239164538320879
			});
			tween.wait(16);
			tween.set({
				progress: 0.6445062137241204
			});
			tween.wait(18);
			tween.set({
				progress: 0.6568600696593399
			});
			tween.wait(32);
			tween.set({
				progress: 0.6609780216377461
			});
			tween.wait(18);
			tween.set({
				progress: 0.6568600696593399
			});
			tween.wait(17);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(16);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(16);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(17);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(17);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(17);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(16);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(17);
			tween.set({
				progress: 0.6486241657025271
			});
			tween.wait(16);
			tween.set({
				progress: 0.6486241657025271
			});
			tween.wait(17);
			tween.set({
				progress: 0.6445062137241204
			});
			tween.wait(17);
			tween.set({
				progress: 0.6362703097673076
			});
			tween.wait(16);
			tween.set({
				progress: 0.6321523577889009
			});
			tween.wait(18);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(33);
			tween.set({
				progress: 0.5292035583287387
			});
			tween.wait(32);
			tween.set({
				progress: 0.38095728710610516
			});
			tween.wait(18);
			tween.set({
				progress: 0.24918282379709744
			});
			tween.wait(33);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(18);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(15);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(16);
			tween.set({
				progress: 0.02269546498474055
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(18);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(17);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(16);
			tween.set({
				progress: 0.24094691984028446
			});
			tween.wait(17);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(16);
			tween.set({
				progress: 0.4015470469981376
			});
			tween.wait(18);
			tween.set({
				progress: 0.4427265667822025
			});
			tween.wait(17);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(33);
			tween.set({
				progress: 0.43449066282538956
			});
			tween.wait(17);
			tween.set({
				progress: 0.38095728710610516
			});
			tween.wait(16);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(17);
			tween.set({
				progress: 0.24506487181869097
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(18);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(32);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.1915314960994066
			});
			tween.wait(17);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(18);
			tween.set({
				progress: 0.34801367127885324
			});
			tween.wait(32);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(16);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(18);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(16);
			tween.set({
				progress: 0.38919319106291816
			});
			tween.wait(16);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(18);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(33);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(16);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(17);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(17);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(17);
			tween.set({
				progress: 0.3521316232572597
			});
			tween.wait(16);
			tween.set({
				progress: 0.38507523908451163
			});
			tween.wait(16);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(16);
			tween.set({
				progress: 0.38507523908451163
			});
			tween.wait(17);
			tween.set({
				progress: 0.356249575235666
			});
			tween.wait(17);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(16);
			tween.set({
				progress: 0.24918282379709744
			});
			tween.wait(18);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(16);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(18);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(18);
			tween.set({
				progress: 0.05152112883358599
			});
			tween.wait(17);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(32);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(16);
			tween.set({
				progress: 0.4097829509549506
			});
			tween.wait(17);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(18);
			tween.set({
				progress: 0.5456753662423646
			});
			tween.wait(32);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(33);
			tween.set({
				progress: 0.5868548860264295
			});
			tween.wait(33);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(17);
			tween.set({
				progress: 0.5662651261343973
			});
			tween.wait(15);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(17);
			tween.set({
				progress: 0.5209676543719256
			});
			tween.wait(17);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(16);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(17);
			tween.set({
				progress: 0.356249575235666
			});
			tween.wait(17);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(16);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(18);
			tween.set({
				progress: 0.21623920796984553
			});
			tween.wait(18);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(32);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(17);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(15);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(18);
			tween.set({
				progress: 0.37683933512769846
			});
			tween.wait(16);
			tween.set({
				progress: 0.463316326674235
			});
			tween.wait(17);
			tween.set({
				progress: 0.5456753662423646
			});
			tween.wait(16);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(16);
			tween.set({
				progress: 0.6609780216377461
			});
			tween.wait(17);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(17);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7103934453786243
			});
			tween.wait(18);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(17);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(18);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(32);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(18);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(32);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(18);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(17);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(17);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(18);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(16);
			tween.set({
				progress: 0.6980395894434047
			});
			tween.wait(18);
			tween.set({
				progress: 0.6774498295513726
			});
			tween.wait(32);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(17);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(16);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(17);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(17);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(16);
			tween.set({
				progress: 0.21623920796984553
			});
			tween.wait(19);
			tween.set({
				progress: 0.1915314960994066
			});
			tween.wait(33);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(16);
			tween.set({
				progress: 0.14623402433693516
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(18);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(15);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(18);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(32);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(18);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(16);
			tween.set({
				progress: 0.23271101588347148
			});
			tween.wait(16);
			tween.set({
				progress: 0.32742391138682075
			});
			tween.wait(18);
			tween.set({
				progress: 0.38095728710610516
			});
			tween.wait(17);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(33);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(16);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(17);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(16);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(17);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(18);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(17);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(32);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(16);
			tween.set({
				progress: 0.24918282379709744
			});
			tween.wait(17);
			tween.set({
				progress: 0.30271619951638185
			});
			tween.wait(18);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(32);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(16);
			tween.set({
				progress: 0.3603675272140727
			});
			tween.wait(18);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(17);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(16);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(18);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(32);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(18);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(17);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(32);
			tween.set({
				progress: 0.220357159948252
			});
			tween.wait(17);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(16);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(17);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(18);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.059757032790398866
			});
			tween.wait(16);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(17);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(16);
			tween.set({
				progress: 0.026813416963146937
			});
			tween.wait(18);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(16);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(16);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(17);
			tween.set({
				progress: 0.3233059594084143
			});
			tween.wait(19);
			tween.set({
				progress: 0.3521316232572597
			});
			tween.wait(16);
			tween.set({
				progress: 0.37683933512769846
			});
			tween.wait(17);
			tween.set({
				progress: 0.38919319106291816
			});
			tween.wait(16);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(16);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(18);
			tween.set({
				progress: 0.4180188549117634
			});
			tween.wait(32);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(17);
			tween.set({
				progress: 0.4221368068901701
			});
			tween.wait(16);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(17);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(16);
			tween.set({
				progress: 0.3686034311708857
			});
			tween.wait(17);
			tween.set({
				progress: 0.33565981534363354
			});
			tween.wait(17);
			tween.set({
				progress: 0.29859824753797537
			});
			tween.wait(16);
			tween.set({
				progress: 0.24094691984028446
			});
			tween.wait(17);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(17);
			tween.set({
				progress: 0.1791776401641871
			});
			tween.wait(16);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(17);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(17);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(16);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(19);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(32);
			tween.set({
				progress: 0.2780084876459429
			});
			tween.wait(18);
			tween.set({
				progress: 0.3191880074300078
			});
			tween.wait(16);
			tween.set({
				progress: 0.3603675272140727
			});
			tween.wait(15);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(18);
			tween.set({
				progress: 0.463316326674235
			});
			tween.wait(15);
			tween.set({
				progress: 0.4921419905230802
			});
			tween.wait(17);
			tween.set({
				progress: 0.5168497023935191
			});
			tween.wait(17);
			tween.set({
				progress: 0.5374394622855518
			});
			tween.wait(18);
			tween.set({
				progress: 0.5580292221775841
			});
			tween.wait(33);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(33);
			tween.set({
				progress: 0.5868548860264295
			});
			tween.wait(18);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(32);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(16);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(18);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(31);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(17);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(16);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(17);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(16);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(17);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(17);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(16);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(18);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(16);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(18);
			tween.set({
				progress: 0.6074446459184621
			});
			tween.wait(18);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(32);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(16);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(18);
			tween.set({
				progress: 0.38507523908451163
			});
			tween.wait(17);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(33);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(33);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(17);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(16);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(16);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(17);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(16);
			tween.set({
				progress: 0.3974290950197309
			});
			tween.wait(18);
			tween.set({
				progress: 0.3727213831492922
			});
			tween.wait(17);
			tween.set({
				progress: 0.32742391138682075
			});
			tween.wait(16);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(18);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(32);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(17);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(16);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(17);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(17);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(16);
			tween.set({
				progress: 0.3727213831492922
			});
			tween.wait(18);
			tween.set({
				progress: 0.4015470469981376
			});
			tween.wait(15);
			tween.set({
				progress: 0.3974290950197309
			});
			tween.wait(18);
			tween.set({
				progress: 0.3686034311708857
			});
			tween.wait(17);
			tween.set({
				progress: 0.2862443916027559
			});
			tween.wait(16);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(16);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(17);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
				progress: 0.006223657071114482
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(17);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(17);
			tween.set({
				progress: 0.24918282379709744
			});
			tween.wait(16);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(17);
			tween.set({
				progress: 0.4427265667822025
			});
			tween.wait(16);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(18);
			tween.set({
				progress: 0.5456753662423646
			});
			tween.wait(32);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(17);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(16);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.5868548860264295
			});
			tween.wait(33);
			tween.set({
				progress: 0.5374394622855518
			});
			tween.wait(18);
			tween.set({
				progress: 0.4962599425014869
			});
			tween.wait(16);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(17);
			tween.set({
				progress: 0.38095728710610516
			});
			tween.wait(16);
			tween.set({
				progress: 0.33977776732204024
			});
			tween.wait(16);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(17);
			tween.set({
				progress: 0.220357159948252
			});
			tween.wait(16);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(32);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(18);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(16);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(17);
			tween.set({
				progress: 0.03916727289836641
			});
			tween.wait(33);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.23271101588347148
			});
			tween.wait(17);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(17);
			tween.set({
				progress: 0.4015470469981376
			});
			tween.wait(16);
			tween.set({
				progress: 0.48390608656626743
			});
			tween.wait(17);
			tween.set({
				progress: 0.582736934048023
			});
			tween.wait(16);
			tween.set({
				progress: 0.6280344058104944
			});
			tween.wait(18);
			tween.set({
				progress: 0.6609780216377461
			});
			tween.wait(16);
			tween.set({
				progress: 0.6856857335081853
			});
			tween.wait(16);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(18);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(32);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(18);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(32);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(16);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(17);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(17);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(16);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(19);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(15);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(18);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(16);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(16);
			tween.set({
				progress: 0.6856857335081853
			});
			tween.wait(18);
			tween.set({
				progress: 0.6815677815297788
			});
			tween.wait(32);
			tween.set({
				progress: 0.615680549875275
			});
			tween.wait(17);
			tween.set({
				progress: 0.5621471741559906
			});
			tween.wait(16);
			tween.set({
				progress: 0.4921419905230802
			});
			tween.wait(18);
			tween.set({
				progress: 0.4097829509549506
			});
			tween.wait(17);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(32);
			tween.set({
				progress: 0.10093655257446378
			});
			tween.wait(16);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(17);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(33);
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
			tween.wait(16);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(18);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(17);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(16);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(17);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(32);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(18);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(16);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(18);
			tween.set({
				progress: 0.47567018260945426
			});
			tween.wait(32);
			tween.set({
				progress: 0.29448029555956884
			});
			tween.wait(17);
			tween.set({
				progress: 0.21623920796984553
			});
			tween.wait(16);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(17);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(18);
			tween.set({
				progress: 0.030931368941553534
			});
			tween.wait(15);
			tween.set({
				progress: 0.018577513006333955
			});
			tween.wait(18);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(32);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(16);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(18);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(16);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(16);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(17);
			tween.set({
				progress: 0.5662651261343973
			});
			tween.wait(17);
			tween.set({
				progress: 0.6815677815297788
			});
			tween.wait(16);
			tween.set({
				progress: 0.7268652532922502
			});
			tween.wait(18);
			tween.set({
				progress: 0.743337061205876
			});
			tween.wait(17);
			tween.set({
				progress: 0.743337061205876
			});
			tween.wait(34);
			tween.set({
				progress: 0.6939216374649982
			});
			tween.wait(32);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(18);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(15);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(17);
			tween.set({
				progress: 0.29859824753797537
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(16);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(16);
			tween.set({
				progress: 0.06387498476880557
			});
			tween.wait(17);
			tween.set({
				progress: 0.05563908081199238
			});
			tween.wait(17);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(16);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(18);
			tween.set({
				progress: 0.3727213831492922
			});
			tween.wait(18);
			tween.set({
				progress: 0.4591983746958283
			});
			tween.wait(32);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(16);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(17);
			tween.set({
				progress: 0.3727213831492922
			});
			tween.wait(18);
			tween.set({
				progress: 0.24094691984028446
			});
			tween.wait(32);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(17);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(17);
			tween.set({
				progress: 0.33977776732204024
			});
			tween.wait(16);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(18);
			tween.set({
				progress: 0.463316326674235
			});
			tween.wait(16);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(16);
			tween.set({
				progress: 0.5209676543719256
			});
			tween.wait(17);
			tween.set({
				progress: 0.5209676543719256
			});
			tween.wait(16);
			tween.set({
				progress: 0.5127317504151129
			});
			tween.wait(17);
			tween.set({
				progress: 0.4962599425014869
			});
			tween.wait(18);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(32);
			tween.set({
				progress: 0.4427265667822025
			});
			tween.wait(16);
			tween.set({
				progress: 0.4180188549117634
			});
			tween.wait(17);
			tween.set({
				progress: 0.38919319106291816
			});
			tween.wait(17);
			tween.set({
				progress: 0.33977776732204024
			});
			tween.wait(16);
			tween.set({
				progress: 0.3068341514947883
			});
			tween.wait(18);
			tween.set({
				progress: 0.2656546317107234
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(16);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(19);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(32);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(17);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(16);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(17);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(18);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(16);
			tween.set({
				progress: 0.2780084876459429
			});
			tween.wait(16);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(17);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(16);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(18);
			tween.set({
				progress: 0.5292035583287387
			});
			tween.wait(16);
			tween.set({
				progress: 0.5539112701991777
			});
			tween.wait(17);
			tween.set({
				progress: 0.5703830781128035
			});
			tween.wait(17);
			tween.set({
				progress: 0.5703830781128035
			});
			tween.wait(17);
			tween.set({
				progress: 0.5539112701991777
			});
			tween.wait(16);
			tween.set({
				progress: 0.5292035583287387
			});
			tween.wait(16);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(17);
			tween.set({
				progress: 0.4180188549117634
			});
			tween.wait(16);
			tween.set({
				progress: 0.3686034311708857
			});
			tween.wait(18);
			tween.set({
				progress: 0.3191880074300078
			});
			tween.wait(16);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(16);
			tween.set({
				progress: 0.23271101588347148
			});
			tween.wait(18);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(16);
			tween.set({
				progress: 0.15858788027215465
			});
			tween.wait(18);
			tween.set({
				progress: 0.1421160723585287
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(18);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(32);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(17);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(16);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(17);
			tween.set({
				progress: 0.12152631246649623
			});
			tween.wait(17);
			tween.set({
				progress: 0.11329040850968325
			});
			tween.wait(16);
			tween.set({
				progress: 0.10917245653127676
			});
			tween.wait(18);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(18);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(16);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(17);
			tween.set({
				progress: 0.20800330401303255
			});
			tween.wait(18);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(32);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(18);
			tween.set({
				progress: 0.4509624707390155
			});
			tween.wait(16);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(17);
			tween.set({
				progress: 0.4921419905230802
			});
			tween.wait(32);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(17);
			tween.set({
				progress: 0.463316326674235
			});
			tween.wait(16);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(17);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(18);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(32);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(17);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(17);
			tween.set({
				progress: 0.21623920796984553
			});
			tween.wait(17);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(16);
			tween.set({
				progress: 0.34801367127885324
			});
			tween.wait(17);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(17);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(16);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(17);
			tween.set({
				progress: 0.5374394622855518
			});
			tween.wait(16);
			tween.set({
				progress: 0.5168497023935191
			});
			tween.wait(17);
			tween.set({
				progress: 0.47155223063104795
			});
			tween.wait(17);
			tween.set({
				progress: 0.4097829509549506
			});
			tween.wait(17);
			tween.set({
				progress: 0.3109521034731948
			});
			tween.wait(16);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(17);
			tween.set({
				progress: 0.20800330401303255
			});
			tween.wait(16);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(17);
			tween.set({
				progress: 0.1915314960994066
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.28212643962434936
			});
			tween.wait(16);
			tween.set({
				progress: 0.38919319106291816
			});
			tween.wait(16);
			tween.set({
				progress: 0.4221368068901701
			});
			tween.wait(17);
			tween.set({
				progress: 0.5209676543719256
			});
			tween.wait(17);
			tween.set({
				progress: 0.5703830781128035
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(17);
			tween.set({
				progress: 0.5621471741559906
			});
			tween.wait(17);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(16);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(18);
			tween.set({
				progress: 0.33977776732204024
			});
			tween.wait(32);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(16);
			tween.set({
				progress: 0.08446474466083803
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(16);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(18);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(17);
			tween.set({
				progress: 0.24094691984028446
			});
			tween.wait(16);
			tween.set({
				progress: 0.37683933512769846
			});
			tween.wait(17);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(33);
			tween.set({
				progress: 0.582736934048023
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(16);
			tween.set({
				progress: 0.582736934048023
			});
			tween.wait(18);
			tween.set({
				progress: 0.5250856063503323
			});
			tween.wait(17);
			tween.set({
				progress: 0.4674342786526415
			});
			tween.wait(32);
			tween.set({
				progress: 0.2862443916027559
			});
			tween.wait(16);
			tween.set({
				progress: 0.24918282379709744
			});
			tween.wait(18);
			tween.set({
				progress: 0.16682378422896763
			});
			tween.wait(16);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(17);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(17);
			tween.set({
				progress: 0.2780084876459429
			});
			tween.wait(17);
			tween.set({
				progress: 0.3686034311708857
			});
			tween.wait(16);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(17);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(18);
			tween.set({
				progress: 0.582736934048023
			});
			tween.wait(32);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(16);
			tween.set({
				progress: 0.4880240385446737
			});
			tween.wait(17);
			tween.set({
				progress: 0.3644854791924792
			});
			tween.wait(16);
			tween.set({
				progress: 0.3191880074300078
			});
			tween.wait(17);
			tween.set({
				progress: 0.20388535203462604
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.12564426444490273
			});
			tween.wait(18);
			tween.set({
				progress: 0.13799812038012219
			});
			tween.wait(16);
			tween.set({
				progress: 0.18329559214259358
			});
			tween.wait(16);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(17);
			tween.set({
				progress: 0.34389571930044677
			});
			tween.wait(17);
			tween.set({
				progress: 0.4221368068901701
			});
			tween.wait(17);
			tween.set({
				progress: 0.47978813458786096
			});
			tween.wait(18);
			tween.set({
				progress: 0.5168497023935191
			});
			tween.wait(16);
			tween.set({
				progress: 0.5127317504151129
			});
			tween.wait(16);
			tween.set({
				progress: 0.48390608656626743
			});
			tween.wait(17);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(16);
			tween.set({
				progress: 0.3233059594084143
			});
			tween.wait(17);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(17);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(16);
			tween.set({
				progress: 0.17094173620737413
			});
			tween.wait(17);
			tween.set({
				progress: 0.1750596881857806
			});
			tween.wait(16);
			tween.set({
				progress: 0.1915314960994066
			});
			tween.wait(17);
			tween.set({
				progress: 0.29859824753797537
			});
			tween.wait(17);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(16);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(17);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(17);
			tween.set({
				progress: 0.7021575414218111
			});
			tween.wait(16);
			tween.set({
				progress: 0.7392191092274697
			});
			tween.wait(18);
			tween.set({
				progress: 0.7515729651626891
			});
			tween.wait(16);
			tween.set({
				progress: 0.7515729651626891
			});
			tween.wait(16);
			tween.set({
				progress: 0.7268652532922502
			});
			tween.wait(17);
			tween.set({
				progress: 0.6609780216377461
			});
			tween.wait(16);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(17);
			tween.set({
				progress: 0.5292035583287387
			});
			tween.wait(17);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(16);
			tween.set({
				progress: 0.33565981534363354
			});
			tween.wait(17);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(17);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(18);
			tween.set({
				progress: 0.10505450455287027
			});
			tween.wait(17);
			tween.set({
				progress: 0.11740836048808974
			});
			tween.wait(32);
			tween.set({
				progress: 0.2656546317107234
			});
			tween.wait(17);
			tween.set({
				progress: 0.4221368068901701
			});
			tween.wait(16);
			tween.set({
				progress: 0.5333215103071451
			});
			tween.wait(17);
			tween.set({
				progress: 0.6280344058104944
			});
			tween.wait(17);
			tween.set({
				progress: 0.7021575414218111
			});
			tween.wait(17);
			tween.set({
				progress: 0.743337061205876
			});
			tween.wait(17);
			tween.set({
				progress: 0.7556909171410956
			});
			tween.wait(16);
			tween.set({
				progress: 0.7351011572490632
			});
			tween.wait(17);
			tween.set({
				progress: 0.689803685486592
			});
			tween.wait(16);
			tween.set({
				progress: 0.6239164538320879
			});
			tween.wait(17);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(18);
			tween.set({
				progress: 0.42625475886857633
			});
			tween.wait(33);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(16);
			tween.set({
				progress: 0.1874135441210001
			});
			tween.wait(16);
			tween.set({
				progress: 0.1297622164233092
			});
			tween.wait(17);
			tween.set({
				progress: 0.07622884070402483
			});
			tween.wait(17);
			tween.set({
				progress: 0.06799293674721185
			});
			tween.wait(16);
			tween.set({
				progress: 0.07211088872561834
			});
			tween.wait(18);
			tween.set({
				progress: 0.09681860059605728
			});
			tween.wait(34);
			tween.set({
				progress: 0.25741872775391045
			});
			tween.wait(31);
			tween.set({
				progress: 0.4468445187606088
			});
			tween.wait(18);
			tween.set({
				progress: 0.5250856063503323
			});
			tween.wait(16);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(17);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(18);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(32);
			tween.set({
				progress: 0.5127317504151129
			});
			tween.wait(16);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(18);
			tween.set({
				progress: 0.3603675272140727
			});
			tween.wait(16);
			tween.set({
				progress: 0.30271619951638185
			});
			tween.wait(16);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(17);
			tween.set({
				progress: 0.24506487181869097
			});
			tween.wait(16);
			tween.set({
				progress: 0.26977258368912993
			});
			tween.wait(18);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(17);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(16);
			tween.set({
				progress: 0.5003778944798932
			});
			tween.wait(16);
			tween.set({
				progress: 0.6115625978968684
			});
			tween.wait(18);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(17);
			tween.set({
				progress: 0.6650959736161528
			});
			tween.wait(16);
			tween.set({
				progress: 0.6527421176809334
			});
			tween.wait(16);
			tween.set({
				progress: 0.6239164538320879
			});
			tween.wait(17);
			tween.set({
				progress: 0.5786189820696167
			});
			tween.wait(16);
			tween.set({
				progress: 0.5168497023935191
			});
			tween.wait(18);
			tween.set({
				progress: 0.4139009029333571
			});
			tween.wait(32);
			tween.set({
				progress: 0.29448029555956884
			});
			tween.wait(17);
			tween.set({
				progress: 0.2533007757755039
			});
			tween.wait(16);
			tween.set({
				progress: 0.2244751119266585
			});
			tween.wait(18);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(32);
			tween.set({
				progress: 0.24506487181869097
			});
			tween.wait(18);
			tween.set({
				progress: 0.3233059594084143
			});
			tween.wait(33);
			tween.set({
				progress: 0.4015470469981376
			});
			tween.wait(17);
			tween.set({
				progress: 0.4097829509549506
			});
			tween.wait(16);
			tween.set({
				progress: 0.39331114304132464
			});
			tween.wait(17);
			tween.set({
				progress: 0.3603675272140727
			});
			tween.wait(16);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(17);
			tween.set({
				progress: 0.236828967861878
			});
			tween.wait(17);
			tween.set({
				progress: 0.19564944807781307
			});
			tween.wait(16);
			tween.set({
				progress: 0.16270583225056115
			});
			tween.wait(17);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(16);
			tween.set({
				progress: 0.20800330401303255
			});
			tween.wait(18);
			tween.set({
				progress: 0.2738905356675364
			});
			tween.wait(16);
			tween.set({
				progress: 0.3521316232572597
			});
			tween.wait(18);
			tween.set({
				progress: 0.43449066282538956
			});
			tween.wait(17);
			tween.set({
				progress: 0.5086137984367064
			});
			tween.wait(16);
			tween.set({
				progress: 0.599208741961649
			});
			tween.wait(17);
			tween.set({
				progress: 0.6445062137241204
			});
			tween.wait(16);
			tween.set({
				progress: 0.6774498295513726
			});
			tween.wait(17);
			tween.set({
				progress: 0.7062754934002178
			});
			tween.wait(17);
			tween.set({
				progress: 0.7227473013138437
			});
			tween.wait(16);
			tween.set({
				progress: 0.7351011572490632
			});
			tween.wait(18);
			tween.set({
				progress: 0.743337061205876
			});
			tween.wait(16);
			tween.set({
				progress: 0.7515729651626891
			});
			tween.wait(16);
			tween.set({
				progress: 0.7598088691195023
			});
			tween.wait(16);
			tween.set({
				progress: 0.7803986290115346
			});
			tween.wait(17);
			tween.set({
				progress: 0.7927524849467541
			});
			tween.wait(17);
			tween.set({
				progress: 0.8009883889035668
			});
			tween.wait(16);
			tween.set({
				progress: 0.8133422448387863
			});
			tween.wait(18);
			tween.set({
				progress: 0.8256961007740058
			});
			tween.wait(15);
			tween.set({
				progress: 0.833932004730819
			});
			tween.wait(18);
			tween.set({
				progress: 0.8462858606660384
			});
			tween.wait(16);
			tween.set({
				progress: 0.8586397166012579
			});
			tween.wait(16);
			tween.set({
				progress: 0.8668756205580707
			});
			tween.wait(19);
			tween.set({
				progress: 0.8792294764932903
			});
			tween.wait(32);
			tween.set({
				progress: 0.8957012844069161
			});
			tween.wait(18);
			tween.set({
				progress: 0.9080551403421356
			});
			tween.wait(32);
			tween.set({
				progress: 0.9162910442989488
			});
			tween.wait(16);
			tween.set({
				progress: 0.9162910442989488
			});
			tween.wait(17);
			tween.set({
				progress: 0.9039371883637293
			});
			tween.wait(17);
			tween.set({
				progress: 0.8833474284716967
			});
			tween.wait(17);
			tween.set({
				progress: 0.850403812644445
			});
			tween.wait(16);
			tween.set({
				progress: 0.7762806770331281
			});
			tween.wait(17);
			tween.set({
				progress: 0.7021575414218111
			});
			tween.wait(16);
			tween.set({
				progress: 0.6197985018536817
			});
			tween.wait(17);
			tween.set({
				progress: 0.5374394622855518
			});
			tween.wait(17);
			tween.set({
				progress: 0.4427265667822025
			});
			tween.wait(16);
			tween.set({
				progress: 0.4056649989765439
			});
			tween.wait(18);
			tween.set({
				progress: 0.3686034311708857
			});
			tween.wait(17);
			tween.set({
				progress: 0.3315418633652273
			});
			tween.wait(17);
			tween.set({
				progress: 0.28212643962434936
			});
			tween.wait(16);
			tween.set({
				progress: 0.2615366797323169
			});
			tween.wait(16);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(17);
			tween.set({
				progress: 0.19564944807781307
			});
			tween.wait(16);
			tween.set({
				progress: 0.1338801684017157
			});
			tween.wait(17);
			tween.set({
				progress: 0.0885826966392443
			});
			tween.wait(18);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(33);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(32);
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
			tween.wait(19);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(16);
			tween.set({
				progress: 0.002105705092708098
			});
			tween.wait(17);
			tween.set({
				progress: 0.014459561027927571
			});
			tween.wait(17);
			tween.set({
				progress: 0.035049320919959916
			});
			tween.wait(16);
			tween.set({
				progress: 0.043285224876773006
			});
			tween.wait(18);
			tween.set({
				progress: 0.04740317685517939
			});
			tween.wait(32);
			tween.set({
				progress: 0.09270064861765079
			});
			tween.wait(18);
			tween.set({
				progress: 0.15035197631534167
			});
			tween.wait(16);
			tween.set({
				progress: 0.228593063905065
			});
			tween.wait(17);
			tween.set({
				progress: 0.3150700554516013
			});
			tween.wait(16);
			tween.set({
				progress: 0.43449066282538956
			});
			tween.wait(17);
			tween.set({
				progress: 0.5044958464582997
			});
			tween.wait(16);
			tween.set({
				progress: 0.5621471741559906
			});
			tween.wait(17);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(17);
			tween.set({
				progress: 0.6239164538320879
			});
			tween.wait(16);
			tween.set({
				progress: 0.6280344058104944
			});
			tween.wait(16);
			tween.set({
				progress: 0.6197985018536817
			});
			tween.wait(18);
			tween.set({
				progress: 0.6033266939400554
			});
			tween.wait(16);
			tween.set({
				progress: 0.590972838004836
			});
			tween.wait(17);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(16);
			tween.set({
				progress: 0.5497933182207713
			});
			tween.wait(17);
			tween.set({
				progress: 0.4921419905230802
			});
			tween.wait(16);
			tween.set({
				progress: 0.43037271084698303
			});
			tween.wait(18);
			tween.set({
				progress: 0.3603675272140727
			});
			tween.wait(16);
			tween.set({
				progress: 0.2862443916027559
			});
			tween.wait(16);
			tween.set({
				progress: 0.21212125599143902
			});
			tween.wait(19);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(32);
			tween.set({
				progress: 0.29448029555956884
			});
			tween.wait(16);
			tween.set({
				progress: 0.455080422717422
			});
			tween.wait(17);
			tween.set({
				progress: 0.57450103009121
			});
			tween.wait(17);
			tween.set({
				progress: 0.6733318775729659
			});
			tween.wait(16);
			tween.set({
				progress: 0.7309832052706565
			});
			tween.wait(17);
			tween.set({
				progress: 0.7392191092274697
			});
			tween.wait(16);
			tween.set({
				progress: 0.7103934453786243
			});
			tween.wait(17);
			tween.set({
				progress: 0.5950907899832427
			});
			tween.wait(18);
			tween.set({
				progress: 0.48390608656626743
			});
			tween.wait(33);
			tween.set({
				progress: 0.19976740005621957
			});
			tween.wait(17);
			tween.set({
				progress: 0.15446992829374817
			});
			tween.wait(17);
			tween.set({
				progress: 0.08034679268243132
			});
			tween.wait(17);
			tween.set({
				progress: 0.006223657071114482
			});
			tween.wait(33);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(17);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
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
			tween.wait(18);
			tween.set({
				progress: 0
			});
			tween.wait(32);
			tween.set({
				progress: 0.001
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
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59).call(this.frame_59).wait(1));

	// mando_s_jaw
	this.instance = new lib.mando_s_jaw_1();
	this.instance.setTransform(34.5,41.8,1,1,0,0,0,36,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1.12,y:42.3},59).wait(1));

	// mando_s_mouth1
	this.instance_1 = new lib.mando_s_mouth1_1();
	this.instance_1.setTransform(18.5,45.5,1,1,0,0,0,4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.85,skewY:35.2,x:17.3,y:47},59).wait(1));

	// mando_s_mouth2
	this.instance_2 = new lib.mando_s_mouth2_1();
	this.instance_2.setTransform(32.5,48.5,1,1,0,0,0,7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.36,y:54},59).wait(1));

	// mando_s_mouth3
	this.instance_3 = new lib.mando_s_mouth3_1();
	this.instance_3.setTransform(47.5,45.3,1,1,0,0,0,10,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.9,skewY:-39.7,y:45.9},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,26,79,56);


(lib.AMandolin_karaoke = function() {
	this.initialize();

	// Layer 1
	this.karaoke = new lib.mandolin__karaoke();
	this.karaoke.setTransform(160.5,19.5,1,1,0,0,0,160.5,19.5);

	this.addChild(this.karaoke);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib._8bit_overglow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8bit_hide1_1();
	this.instance.setTransform(86.5,245,1,1,0,0,0,86.5,245);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.66},3).to({alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,173,490);


(lib._8bit_part9_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib._8bit_part9_1();
	this.instance_1.setTransform(50.5,1.5,1,1,0,0,0,50.5,1.5);
	this.instance_1.alpha = 0.801;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,101,3);


(lib._8bit_part8_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib._8bit_part8_1();
	this.instance_1.setTransform(66,1.5,1,1,0,0,0,66,1.5);
	this.instance_1.alpha = 0.801;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,132,3);


(lib._8bit_part7_2 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib._8bit_part7_1();
	this.instance_1.setTransform(84.5,1.5,1,1,0,0,0,84.5,1.5);
	this.instance_1.alpha = 0.801;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,3);


(lib._8bit_part6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part6g();
	this.instance.setTransform(55.5,1.5,1,1,0,0,0,55.5,1.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,111,3);


(lib._8bit_part5_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part5_1G();
	this.instance.setTransform(52.5,1.5,1,1,0,0,0,52.5,1.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,105,3);


(lib._8bit_part5_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part5G();
	this.instance.setTransform(51,1.5,1,1,0,0,0,51,1.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102,3);


(lib._8bit_part4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part4G();
	this.instance.setTransform(42.5,1.5,1,1,0,0,0,42.5,1.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,85,3);


(lib._8bit_part3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part3G();
	this.instance.setTransform(49.5,1.5,1,1,0,0,0,49.5,1.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,3);


(lib._8bit_part2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part2G();
	this.instance.setTransform(46.5,24,1,1,0,0,0,46.5,24);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,48);


(lib._8bit_part1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_part1G();
	this.instance.setTransform(86.5,33.5,1,1,0,0,0,86.5,33.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,173,67);


(lib._8bit_hide3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8bit_hide3();

	this.instance_1 = new lib._8bit_hide3G();
	this.instance_1.setTransform(16.5,16.5,1,1,0,0,0,16,16);
	this.instance_1.alpha = 0.648;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib._8bit_bodG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._8bit_bod_g_main();
	this.instance.setTransform(84.5,221.5,1,1,0,0,0,84.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.949},3).to({alpha:1},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169,443);


(lib.tuningbod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_349 = function() {
		this.stop();
		var event = new createjs.Event('tuningComplete', true);
		this.dispatchEvent(event);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(349).call(this.frame_349).wait(1));

	// mando_s_jaw
	this.instance = new lib.mando_s_jaw_1();
	this.instance.setTransform(179.5,97.6,1,1,0,0,0,36,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:15.7,scaleY:0.98,skewY:0.7,y:96.5},3).to({regY:15.8,scaleY:1,skewY:0,y:97.6},3).to({regY:15.7,scaleY:0.98,skewY:-1.7,y:97.5},5).to({regY:15.8,scaleY:1,skewY:0,y:97.6},6).wait(15).to({x:178.5,y:100.3},24).wait(148).to({y:100.6},3).to({y:100.3},3).to({y:100.9},4).to({y:100.3},2).wait(1).to({scaleY:0.96,y:104.8},3).to({scaleY:1,y:100.3},4).to({y:102.6},3).to({y:100.3},5,cjs.Ease.get(1)).wait(7).to({y:100.5},7).to({y:100.3},4).wait(13).to({y:100.5},7).to({y:100.3},4).wait(38).to({y:100.6},5).to({y:100.3},5).to({y:101.4},4).to({y:100.3},1).wait(6).to({x:179.5,y:97.6},16,cjs.Ease.get(1)).wait(1));

	// mando_s_mouth1
	this.instance_1 = new lib.mando_s_mouth1_1();
	this.instance_1.setTransform(163.5,101.3,1,1,0,0,0,4,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:99.8},3).to({y:101.3},3).to({y:100.8},5).to({y:101.3},6).wait(15).to({x:162.5,y:105.3},24).wait(148).to({scaleX:1.01,skewY:4,y:105.9},3).to({scaleX:1,skewY:0,y:105.3},3).to({scaleX:1.01,skewY:4,y:106.2},4).to({scaleX:1,skewY:0,y:105.3},2).wait(1).to({y:109.8},3).to({y:105.3},4).to({y:107.5},3).to({y:105.3},5,cjs.Ease.get(1)).wait(7).to({scaleX:1,skewY:1.5,x:162.4,y:105.5},7).to({scaleX:1,skewY:0,x:162.5,y:105.3},4).wait(13).to({scaleX:1,skewY:1.5,x:162.4,y:105.5},7).to({scaleX:1,skewY:0,x:162.5,y:105.3},4).wait(38).to({scaleX:1.01,skewY:4,y:105.9},5).to({scaleX:1,skewY:0,y:105.3},5).to({scaleX:1.01,skewY:4,x:163,y:106.7},4).to({scaleX:1,skewY:0,x:162.5,y:105.3},1).wait(6).to({x:163.5,y:101.3},16,cjs.Ease.get(1)).wait(1));

	// mando_s_mouth2
	this.instance_2 = new lib.mando_s_mouth2_1();
	this.instance_2.setTransform(177.5,104.3,1,1,0,0,0,7,8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:102.6},3).to({y:104.3},3).to({y:103.6},5).to({y:104.3},6).wait(15).to({x:176.5,y:108.3},24).wait(148).to({y:109.7},3).to({y:108.3},3).to({y:110},4).to({y:108.3},2).wait(1).to({y:112.8},3).to({y:108.3},4).to({y:110.5},3).to({y:108.3},5,cjs.Ease.get(1)).wait(7).to({y:108.8},7).to({y:108.3},4).wait(13).to({y:108.8},7).to({y:108.3},4).wait(38).to({y:109.7},5).to({y:108.3},5).to({y:110.8},4).to({y:108.3},1).wait(6).to({x:177.5,y:104.3},16,cjs.Ease.get(1)).wait(1));

	// mando_s_mouth3
	this.instance_3 = new lib.mando_s_mouth3_1();
	this.instance_3.setTransform(192.5,101.1,1,1,0,0,0,10,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:99.6},3).to({y:101.1},3).to({y:100.6},5).to({y:101.1},6).wait(15).to({x:191.5,y:105.1},24).wait(148).to({scaleX:1.02,skewY:-6.5,y:105.7},3).to({scaleX:1,skewY:0,y:105.1},3).to({scaleX:1.02,skewY:-6.5,y:106},4).to({scaleX:1,skewY:0,y:105.1},2).wait(1).to({y:109.6},3).to({y:105.1},4).to({y:107.3},3).to({y:105.1},5,cjs.Ease.get(1)).wait(7).to({scaleX:1.01,skewY:-2.5,x:191.4,y:105.3},7).to({scaleX:1,skewY:0,x:191.5,y:105.1},4).wait(13).to({scaleX:1.01,skewY:-2.5,x:191.4,y:105.3},7).to({scaleX:1,skewY:0,x:191.5,y:105.1},4).wait(38).to({scaleX:1.02,skewY:-6.5,y:105.7},5).to({scaleX:1,skewY:0,y:105.1},5).to({scaleX:1.02,skewY:-6.5,x:190.8,y:106.5},4).to({scaleX:1,skewY:0,x:191.5,y:105.1},1).wait(6).to({x:192.5,y:101.1},16,cjs.Ease.get(1)).wait(1));

	// Layer 4
	this.instance_4 = new lib.tuninglins();
	this.instance_4.setTransform(178.4,68.5,1,0.682,0,0,0,22,5.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(52).to({_off:false},0).to({scaleY:1},4).wait(153).to({scaleY:0.68},3).to({_off:true},1).wait(137));

	// mando_s_face
	this.instance_5 = new lib.mando_s_face_1();
	this.instance_5.setTransform(177,76.8,1,1,0,0,0,35.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:75.8},3).to({y:76.8},3).to({y:75.8},5).to({y:76.8},6).wait(15).to({x:176,y:80.8},24).wait(161).to({y:85.3},3).to({y:80.8},4).to({y:83.3},3).to({y:80.8},5,cjs.Ease.get(1)).wait(101).to({x:177,y:76.8},16,cjs.Ease.get(1)).wait(1));

	// mando_s_face_side2
	this.instance_6 = new lib.mando_s_face_side2_1();
	this.instance_6.setTransform(170.6,69,1,1,0,0,0,44,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({y:68},3).to({y:69},3).to({y:68},5).to({y:69},6).wait(15).to({x:169.6,y:71.5},24).wait(161).to({y:75},3).to({y:71.5},4).to({y:73},3).to({y:71.5},5,cjs.Ease.get(1)).wait(101).to({x:170.6,y:69},16,cjs.Ease.get(1)).wait(1));

	// mando_s_face_side1
	this.instance_7 = new lib.mando_s_face_side1_1();
	this.instance_7.setTransform(219.1,74.5,1,1,0,0,0,24.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({y:73.5},3).to({y:74.5},3).to({y:73.5},5).to({y:74.5},6).wait(15).to({scaleX:0.98,skewY:-0.5,x:218.4,y:76.4},24).wait(161).to({y:79.9},3).to({y:76.4},4).to({y:77.9},3).to({y:76.4},5,cjs.Ease.get(1)).wait(101).to({scaleX:1,skewY:0,x:219.1,y:74.5},16,cjs.Ease.get(1)).wait(1));

	// mando_s_lids
	this.instance_8 = new lib.mando_s_lids_2();
	this.instance_8.setTransform(182.5,57.3,1,1,0,0,0,28,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:56.3},3).to({y:57.3},3).to({y:56.3},5).to({y:57.3},6).wait(15).to({x:181.5,y:60.8},24).wait(161).to({y:65.3},3).to({y:60.8},4).to({y:63.3},3).to({y:60.8},5,cjs.Ease.get(1)).wait(101).to({x:182.5,y:57.3},16,cjs.Ease.get(1)).wait(1));

	// mando_s_eyes
	this.instance_9 = new lib.mando_s_eyes_tuning();
	this.instance_9.setTransform(179,67.8,1,1,0,0,0,23.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:66.8},3).to({y:67.8},3).to({y:66.8},5).to({y:67.8},6).wait(15).to({x:178,y:72.3},24).wait(161).to({y:71.3},0).to({y:75.8},3).to({y:71.3},4).to({y:73.8},3).to({y:71.3},5,cjs.Ease.get(1)).wait(101).to({x:179,y:67.8},16,cjs.Ease.get(1)).wait(1));

	// mando_s_l_forearm
	this.instance_10 = new lib.mando_s_l_forearm_1();
	this.instance_10.setTransform(28.3,234.1,1,1,0,0,0,28.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({skewY:-1.2,y:233},3).to({skewY:0,y:234.1},3).to({skewY:-1.2,y:233},5).to({skewY:0,y:234.1},6).wait(9).to({rotation:-2,x:26.2,y:233.9},10).to({rotation:-4.2,x:25.7,y:233.6},5).wait(3).to({regX:28.4,rotation:2,x:18.8,y:227.4},13).to({regX:28.3,rotation:-0.3,x:21.5,y:229.8},5).wait(1).to({rotation:-0.3},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).to({rotation:-6.1,x:20.4,y:229.1},4).to({rotation:-3.8,x:20.7,y:229},7,cjs.Ease.get(1)).wait(15).to({rotation:-0.3,x:21.5,y:229.8},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).wait(10).to({rotation:-0.3,x:21.5,y:229.8},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(3).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).wait(1).to({rotation:-6.1,x:20.4,y:229.1},4).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).wait(7).to({rotation:-0.3,x:21.5,y:229.8},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(8).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).wait(7).to({regX:28.4,rotation:-15.1,x:41.9,y:225.7},7,cjs.Ease.get(1)).to({rotation:-15.1,y:227.7},3).to({y:225.7},4).to({y:227.7},3).to({y:225.7},5,cjs.Ease.get(1)).wait(4).to({regX:60,regY:37,rotation:-14.3,x:75.1,y:232.3},0).wait(1).to({rotation:-12.1,x:71.6,y:234.8},0).wait(1).to({rotation:-8.6,x:66.2,y:238.6},0).wait(1).to({rotation:-4.5,x:59.6,y:242.9},0).wait(1).to({rotation:-0.7,x:53.4,y:246.9},0).wait(1).to({rotation:2.2,x:48.6,y:249.8},0).wait(1).to({rotation:3.8,x:45.7,y:251.5},0).wait(1).to({regX:28.3,regY:22.4,rotation:4.4,x:14.3,y:235.2},0).wait(1).to({regX:60,regY:37,rotation:4.1,x:45.2,y:251.7},0).wait(1).to({rotation:3.1,x:46.2,y:250.5},0).wait(1).to({rotation:1.6,x:47.7,y:248.6},0).wait(1).to({rotation:-0.1,x:49.5,y:246.3},0).wait(1).to({rotation:-1.7,x:51.1,y:244.3},0).wait(1).to({rotation:-2.9,x:52.3,y:242.7},0).wait(1).to({rotation:-3.6,x:53.1,y:241.8},0).wait(1).to({regX:28.3,regY:22.4,rotation:-3.8,x:20.7,y:229},0).wait(14).to({rotation:-0.3,x:21.5,y:229.8},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},6,cjs.Ease.get(1)).wait(1).to({rotation:-0.3,x:21.5,y:229.8},0).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},4,cjs.Ease.get(1)).wait(3).to({rotation:-6.1,x:20.4,y:229.1},2).to({rotation:-3.8,x:20.7,y:229},9,cjs.Ease.get(1)).wait(31).to({rotation:0,x:28.3,y:234.1},16,cjs.Ease.get(1)).wait(1));

	// mando_s_r_hand
	this.instance_11 = new lib.mando_s_r_hand_1();
	this.instance_11.setTransform(103.6,238.7,1,1,0,0,0,13.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({skewY:-1.2,y:236},3).to({skewY:0,y:238.7},3).to({skewY:-1.2,y:236},5).to({skewY:0,y:238.7},6).wait(9).to({rotation:-2,x:101.6,y:235.9},10).to({rotation:-4.2,x:101.2,y:232.7},5).wait(3).to({regX:13.5,rotation:2,x:93.8,y:234.6},13).to({regY:33.9,rotation:-0.3,x:96.7,y:233.8},5).wait(1).to({rotation:-0.3},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(2).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},4).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},7,cjs.Ease.get(1)).wait(15).to({regX:13.5,rotation:-0.3,x:96.7,y:233.8},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(2).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).wait(10).to({regX:13.5,rotation:-0.3,x:96.7,y:233.8},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(3).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).wait(1).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},4).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).wait(7).to({regX:13.5,rotation:-0.3,x:96.7,y:233.8},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(8).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).wait(7).to({regY:34,rotation:-15.1,x:118.2,y:211.4},7,cjs.Ease.get(1)).to({rotation:-15.1,y:213.4},3).to({y:211.4},4).to({y:213.4},3).to({y:211.4},5,cjs.Ease.get(1)).wait(4).to({regX:36.5,regY:31.5,rotation:-14.3,x:138.6,y:204.6},0).wait(1).to({rotation:-12.1,x:135.6,y:209.7},0).wait(1).to({rotation:-8.6,x:130.7,y:217.5},0).wait(1).to({rotation:-4.5,x:124.9,y:226.6},0).wait(1).to({rotation:-0.7,x:119.5,y:235.1},0).wait(1).to({rotation:2.2,x:115.2,y:241.5},0).wait(1).to({rotation:3.8,x:112.8,y:245.4},0).wait(1).to({regX:13.5,regY:33.9,rotation:4.4,x:89,y:247.3},0).wait(1).to({regX:36.5,regY:31.5,rotation:4.6,x:112.4,y:246},0).wait(1).to({rotation:5.4,x:113.2,y:244.1},0).wait(1).to({rotation:6.7,x:114.4,y:241.2},0).wait(1).to({rotation:8.1,x:115.9,y:237.8},0).wait(1).to({rotation:9.4,x:117.3,y:234.6},0).wait(1).to({rotation:10.4,x:118.3,y:232.3},0).wait(1).to({rotation:11,x:118.9,y:230.8},0).wait(1).to({regX:13.6,regY:33.9,rotation:11.2,x:96.1,y:228.3},0).wait(14).to({regX:13.5,rotation:-0.3,x:96.7,y:233.8},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(2).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},6,cjs.Ease.get(1)).wait(1).to({regX:13.5,rotation:-0.3,x:96.7,y:233.8},0).to({rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},4,cjs.Ease.get(1)).wait(3).to({rotation:11.2},0).to({regX:13.5,rotation:-6.1,x:95.6,y:225.5},2).to({regX:13.6,rotation:11.2,x:96.1,y:228.3},9,cjs.Ease.get(1)).wait(31).to({regY:34,rotation:0,x:103.6,y:238.7},16,cjs.Ease.get(1)).wait(1));

	// mando_s_l_cuff
	this.instance_12 = new lib.mando_s_l_cuff_2();
	this.instance_12.setTransform(103.2,247.2,1,1,0,0,0,-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewY:-1.2,y:244.5},3).to({skewY:0,y:247.2},3).to({skewY:-1.2,y:244.5},5).to({skewY:0,y:247.2},6).wait(9).to({rotation:-2,x:101.4,y:244.4},10).to({rotation:-4.2,y:241.2},5).wait(3).to({regY:37.6,rotation:2,x:93.1,y:243.1},13).to({rotation:-0.3,x:96.4,y:242.4},5).wait(1).to({rotation:-0.3},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).to({rotation:-6.1,x:96.1,y:234.2},4).to({rotation:-3.8,x:96.2,y:236.9},7,cjs.Ease.get(1)).wait(15).to({rotation:-0.3,x:96.4,y:242.4},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).wait(10).to({rotation:-0.3,x:96.4,y:242.4},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(3).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).wait(1).to({rotation:-6.1,x:96.1,y:234.2},4).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).wait(7).to({rotation:-0.3,x:96.4,y:242.4},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(8).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).wait(7).to({rotation:-15.1,x:117.5,y:218.8},7,cjs.Ease.get(1)).to({rotation:-15.1,y:220.8},3).to({y:218.8},4).to({y:220.8},3).to({y:218.8},5,cjs.Ease.get(1)).wait(4).to({regX:8.5,regY:37.5,rotation:-14.3,x:126.4,y:217.5},0).wait(1).to({rotation:-12.1,x:123,y:221.9},0).wait(1).to({rotation:-8.6,x:117.8,y:228.9},0).wait(1).to({rotation:-4.5,x:111.7,y:237},0).wait(1).to({rotation:-0.7,x:106,y:244.4},0).wait(1).to({rotation:2.2,x:101.6,y:250},0).wait(1).to({rotation:3.8,x:99.1,y:253.4},0).wait(1).to({regX:-1.8,regY:37.6,rotation:4.4,x:88,y:253.8},0).wait(1).to({regX:8.5,regY:37.5,rotation:4.1,x:98.6},0).wait(1).to({rotation:3.1,x:99.5,y:251.7},0).wait(1).to({rotation:1.6,x:101,y:248.4},0).wait(1).to({rotation:-0.1,x:102.7,y:244.5},0).wait(1).to({rotation:-1.7,x:104.3,y:240.9},0).wait(1).to({rotation:-2.9,x:105.6,y:238.2},0).wait(1).to({rotation:-3.6,x:106.3,y:236.6},0).wait(1).to({regX:-1.8,regY:37.6,rotation:-3.8,x:96.2,y:236.9},0).wait(14).to({rotation:-0.3,x:96.4,y:242.4},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(2).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},6,cjs.Ease.get(1)).wait(1).to({rotation:-0.3,x:96.4,y:242.4},0).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},4,cjs.Ease.get(1)).wait(3).to({rotation:-6.1,x:96.1,y:234.2},2).to({rotation:-3.8,x:96.2,y:236.9},9,cjs.Ease.get(1)).wait(31).to({regY:37.5,rotation:0,x:103.2,y:247.2},16,cjs.Ease.get(1)).wait(1));

	// mando_s_r_forearm
	this.instance_13 = new lib.mando_s_r_forearm_1();
	this.instance_13.setTransform(302.3,289.8,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({skewX:0.4,x:302.4,y:288.8},3).to({skewX:0,x:302.3,y:289.8},3).to({skewX:0.4,x:302.4,y:288.8},5).to({skewX:0,x:302.3,y:289.8},6).wait(9).to({x:304.3,y:292.3},10).to({x:303.3,y:291.8},5).wait(3).to({regX:78.2,rotation:-2,x:297.6,y:291.3},13).to({regX:78.3,rotation:-1,x:299.9,y:291.5},5).to({rotation:1.9,x:299.8,y:292.6},4).wait(13).to({rotation:5.9,x:307.7,y:293.8},6).wait(45).to({rotation:3.7,x:307.8,y:296.6},3,cjs.Ease.get(-1)).wait(43).to({rotation:1.5,x:307.1,y:295.6},3).wait(38).to({y:297.6},3).to({y:295.6},4).to({y:297.6},3).to({y:295.6},5,cjs.Ease.get(1)).wait(53).to({rotation:-2.2,x:302,y:300.3},3).wait(45).to({rotation:0,x:302.3,y:289.8},16,cjs.Ease.get(1)).wait(1));

	// mando_s_left_hand_tuning
	this.instance_14 = new lib.mando_s_left_hand_tuning("single",0);
	this.instance_14.setTransform(256.9,215.6,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:0.4,x:257.5,y:214.6},3).to({skewX:0,x:256.9,y:215.6},3).to({skewX:0.4,x:257.5,y:214.6},5).to({skewX:0,x:256.9,y:215.6},6).wait(9).to({startPosition:0},0).to({x:258.9,y:218.1},10).to({x:257.9,y:217.6},5).wait(3).to({startPosition:0},0).to({regX:62.8,rotation:-2,x:249.7,y:218.7},13).to({rotation:-1,x:253,y:218.2},5).to({rotation:1.9,x:256.8,y:216.9},4).wait(13).to({startPosition:0},0).to({regX:62.9,regY:60,rotation:5.9,x:270,y:215.4},6).wait(45).to({startPosition:0},0).to({rotation:3.7,x:267.1,y:219.7},3,cjs.Ease.get(-1)).wait(43).to({startPosition:0},0).to({regY:59.9,rotation:1.5,x:263.6,y:220.4},3).wait(38).to({startPosition:0},0).to({y:222.4},3).to({y:220.4},4).to({y:222.4},3).to({y:220.4},5,cjs.Ease.get(1)).wait(53).to({startPosition:0},0).to({rotation:-2.2,x:253.7,y:228.1},3).wait(45).to({startPosition:0},0).to({rotation:0,x:256.9,y:215.6},16,cjs.Ease.get(1)).wait(1));

	// mando_s_l_cuff_1
	this.instance_15 = new lib.mando_s_l_cuff_1_1();
	this.instance_15.setTransform(251.6,223.6,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({skewX:0.4,x:252.2,y:222.6},3).to({skewX:0,x:251.6,y:223.6},3).to({skewX:0.4,x:252.2,y:222.6},5).to({skewX:0,x:251.6,y:223.6},6).wait(9).to({x:253.6,y:226.1},10).to({x:252.6,y:225.6},5).wait(3).to({regX:27.7,rotation:-2,x:244.9,y:226.9},13).to({regX:27.6,rotation:-1,x:247.9,y:226.4},5).to({regY:17,rotation:1.9,x:251.3,y:224.9},4).wait(13).to({rotation:5.9,x:264,y:222.8},6).wait(45).to({regX:27.7,rotation:3.7,x:261.4,y:227.4},3,cjs.Ease.get(-1)).wait(43).to({rotation:1.5,x:258.1,y:228.4},3).wait(38).to({y:230.4},3).to({y:228.4},4).to({y:230.4},3).to({y:228.4},5,cjs.Ease.get(1)).wait(53).to({regY:16.9,rotation:-2.2,x:248.7,y:236.3},3).wait(45).to({regX:27.6,rotation:0,x:251.6,y:223.6},16,cjs.Ease.get(1)).wait(1));

	// mando_s_mandolin
	this.instance_16 = new lib.mando_s_mandolin_1();
	this.instance_16.setTransform(165.5,208.1,1,1,0,0,0,93.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:164,y:205.1},3).to({x:165.5,y:208.1},3).to({x:164,y:205.1},5).to({x:165.5,y:208.1},6).wait(9).to({rotation:4.7,x:165.6,y:209.1},10).to({y:208.1},4).wait(4).to({x:159.1,y:209.6},13).to({x:159.6,y:210.1},5).wait(5).to({y:210.6},0).wait(1).to({y:210.1},0).wait(8).to({y:210.6},0).wait(1).to({y:210.1},0).wait(11).to({y:210.6},0).wait(1).to({y:210.1},0).wait(20).to({y:210.6},0).wait(1).to({y:210.1},0).wait(8).to({y:210.6},0).wait(1).to({y:210.1},0).wait(20).to({y:210.6},0).wait(1).to({y:210.1},0).wait(8).to({y:210.6},0).wait(1).to({y:210.1},0).wait(14).to({y:210.6},0).wait(1).to({y:210.1},0).wait(17).to({y:210.6},0).wait(1).to({y:210.1},0).wait(13).to({y:210.6},0).wait(1).to({y:210.1},0).wait(21).to({y:212.1},3).to({y:210.1},4).to({y:212.1},3).to({y:210.1},5,cjs.Ease.get(1)).wait(101).to({rotation:0,x:165.5,y:208.1},16,cjs.Ease.get(1)).wait(1));

	// mando_s_tie
	this.instance_17 = new lib.mando_s_tie_1();
	this.instance_17.setTransform(179.5,150.1,1,1,0,0,0,34.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({y:149.1},3).to({y:150.1},3).to({y:149.1},5).to({y:150.1},6).wait(200).to({y:152.1},3).to({y:150.1},4).to({y:152.1},3).to({y:150.1},5,cjs.Ease.get(1)).wait(118));

	// mando_s_jacketfront_top
	this.instance_18 = new lib.mando_s_jacketfront_top_1();
	this.instance_18.setTransform(201.9,231.6,1,1,0,0,0,63.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({scaleX:1,scaleY:1.01,y:231.1},3).to({scaleX:1,scaleY:1,y:231.6},3).to({scaleX:1,scaleY:1.01,y:231.1},5).to({scaleX:1,scaleY:1,y:231.6},6).wait(9).to({scaleX:1},10).wait(4).to({scaleX:1},0).wait(177).to({y:233.6},3).to({y:231.6},4).to({y:233.6},3).to({y:231.6},5,cjs.Ease.get(1)).wait(118));

	// mando_s_jacketback_top
	this.instance_19 = new lib.mando_s_jacketback_top_1();
	this.instance_19.setTransform(141.7,225.2,1,1,0,0,0,70.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({regY:109.4,scaleY:1.01,y:224.6},3).to({regY:109.5,scaleY:1,y:225.2},3).to({regY:109.4,scaleY:1.01,y:224.6},5).to({regY:109.5,scaleY:1,y:225.2},6).wait(200).to({y:227.2},3).to({y:225.2},4).to({y:227.2},3).to({y:225.2},5,cjs.Ease.get(1)).wait(118));

	// mando_s_rarm_1
	this.instance_20 = new lib.mando_s_rarm_1_1();
	this.instance_20.setTransform(89.5,172,1,1,0,0,0,89.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({y:171},3).to({y:172},3).to({y:171},5).to({y:172},6).wait(9).to({scaleY:1,skewX:2.1},10).to({scaleY:0.99,skewX:2},5).wait(3).to({skewX:7.7,skewY:5.7},13).to({regY:30.2,skewX:5.3,skewY:3.3,x:89.6,y:171.9},5).wait(148).to({regY:30.3,scaleY:0.89,skewX:-14.9,skewY:-11.7,x:90.5,y:168.9},7,cjs.Ease.get(1)).to({skewX:-14.9,y:170.9},3).to({y:168.9},4).to({y:170.9},3).to({y:168.9},5,cjs.Ease.get(1)).wait(4).to({regX:47.5,regY:63,scaleY:0.89,skewX:-14,skewY:-11.1,x:56.4,y:205.5},0).wait(1).to({scaleY:0.91,skewX:-11.3,skewY:-9.4,x:54.8,y:205.4},0).wait(1).to({scaleY:0.94,skewX:-7,skewY:-6.7,x:52.3,y:205.2},0).wait(1).to({scaleY:0.97,skewX:-2.1,skewY:-3.5,x:49.3,y:204.7},0).wait(1).to({scaleY:1,skewX:2.5,skewY:-0.6,x:46.4,y:204},0).wait(1).to({scaleY:1.02,skewX:6,skewY:1.6,x:44.3,y:203.4},0).wait(1).to({scaleY:1.03,skewX:8,skewY:2.9,x:43,y:203},0).wait(1).to({regX:89.6,regY:30.2,scaleY:1.03,skewX:8.7,skewY:3.3,x:89.7,y:171.9},0).wait(1).to({regX:47.5,regY:63,scaleY:1.03,skewX:8.5,x:42.6,y:202.9},0).wait(1).to({scaleY:1.03,skewX:8.1,x:42.8},0).wait(1).to({scaleY:1.02,skewX:7.5,x:43.2,y:202.7},0).wait(1).to({scaleY:1.01,skewX:6.8,x:43.6,y:202.5},0).wait(1).to({scaleY:1,skewX:6.2,x:44,y:202.3},0).wait(1).to({scaleY:1,skewX:5.7,x:44.3,y:202.1},0).wait(1).to({scaleY:1,skewX:5.4,x:44.5,y:202},0).wait(1).to({regX:89.5,regY:30.2,scaleY:0.99,skewX:5.3,x:89.6,y:171.9},0).wait(82).to({regY:30.3,scaleY:1,skewX:0,skewY:0,x:89.5,y:172},16,cjs.Ease.get(1)).wait(1));

	// mando_s_larm
	this.instance_21 = new lib.mando_s_larm_1();
	this.instance_21.setTransform(284.3,187.3,1,1,0,0,0,18.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:186.3},3).to({y:187.3},3).to({y:186.3},5).to({y:187.3},6).wait(9).to({rotation:-1.3},10).to({regX:18.2,rotation:-0.5,x:284.2},5).wait(3).to({rotation:2.4,x:284.3},13).to({rotation:1.1,x:284.2},5).wait(17).to({rotation:-1.9},6).wait(45).to({rotation:-0.5},3,cjs.Ease.get(-1)).wait(43).to({rotation:1},3).wait(38).to({y:189.3},3).to({y:187.3},4).to({y:189.3},3).to({y:187.3},5,cjs.Ease.get(1)).wait(53).to({regY:21.5,scaleY:1.04,rotation:3.5,y:187.2},3).wait(45).to({regX:18.3,regY:21.6,scaleY:1,rotation:0,x:284.3,y:187.3},16,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346,338.7);


(lib.mandolin_move_G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0,loop:10});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1));

	// Layer 2
	this.instance = new lib.mando_head();
	this.instance.setTransform(229.2,120.2,1,1,0,0,0,33.8,83.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:39.5,regY:13,x:237.3,y:49.3},0).wait(1).to({regX:33.8,regY:83.7,x:238.9,y:119.4},0).wait(1).to({regX:39.5,regY:13,x:241.9,y:48.9},0).wait(1).to({x:238.1,y:49.2},0).wait(1).to({x:233.1,y:49.7},0).wait(1).to({regX:33.8,regY:83.7,x:221.2,y:121},0).wait(1).to({regX:39.5,regY:13,x:227.3,y:50.2},0).wait(1).to({x:228.8,y:50.1},0).wait(1).to({x:231.3,y:49.8},0).wait(1).to({regX:33.8,regY:83.7,x:229.2,y:120.2},0).to({y:122.8},3,cjs.Ease.get(-0.29)).to({regX:33.9,regY:83.9,x:229.3,y:120.2},3,cjs.Ease.get(-0.29)).to({regX:33.8,regY:83.7,x:229.2,y:122.8},3,cjs.Ease.get(-0.29)).to({y:120.2},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_l_forearm
	this.instance_1 = new lib.mando_s_l_forearm_1();
	this.instance_1.setTransform(80.3,211.4,1,1,0,0,0,28.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:60,regY:37,rotation:0.2,x:114.2,y:225.9},0).wait(1).to({regX:28.3,regY:22.4,rotation:0.9,x:89.6,y:210.6},0).wait(1).to({regX:60,regY:37,rotation:0.6,x:118.8,y:226.1},0).wait(1).to({rotation:0.1,x:115.7,y:226.7},0).wait(1).to({rotation:-0.6,x:111.7,y:227.4},0).wait(1).to({regX:28.2,regY:22.3,rotation:-1.4,x:74.5,y:214.6},0).wait(1).to({regX:60,regY:37,x:107,y:228.3},0).wait(1).to({rotation:-1.1,x:107.9,y:227.9},0).wait(1).to({rotation:-0.7,x:109.6,y:227.1},0).wait(1).to({regX:28.3,regY:22.4,rotation:0,x:80.3,y:211.4},0).to({x:80.4,y:215.8},3,cjs.Ease.get(-0.29)).to({x:80.3,y:211.4},3,cjs.Ease.get(-0.29)).to({x:80.4,y:215.8},3,cjs.Ease.get(-0.29)).to({x:80.3,y:211.4},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_plaque
	this.instance_2 = new lib.mando_s_plaque_1();
	this.instance_2.setTransform(245.5,773.5,1,1,0,0,0,59.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({y:773.9},3,cjs.Ease.get(-0.29)).to({y:773.5},3,cjs.Ease.get(-0.29)).to({y:773.9},3,cjs.Ease.get(-0.29)).to({y:773.5},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_r_hand
	this.instance_3 = new lib.mando_s_r_hand_1();
	this.instance_3.setTransform(155.6,216,1,1,0,0,0,13.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:36.5,regY:31.5,rotation:0.2,x:180.7,y:213.7},0).wait(1).to({regX:13.5,regY:34,rotation:0.9,x:164.7,y:216.5},0).wait(1).to({regX:36.5,regY:31.5,rotation:0.6,x:185.5,y:214.4},0).wait(1).to({rotation:0.1,x:182.3,y:214.3},0).wait(1).to({rotation:-0.6,x:178.1},0).wait(1).to({regX:13.6,regY:34,rotation:-1.4,x:150,y:217.4},0).wait(1).to({regX:36.5,regY:31.5,x:173.1,y:214.3},0).wait(1).to({rotation:-1.1,x:174.1,y:214.1},0).wait(1).to({rotation:-0.7,x:175.9,y:213.9},0).wait(1).to({regX:13.6,regY:34,rotation:0,x:155.6,y:216},0).to({x:155.7,y:220.8},3,cjs.Ease.get(-0.29)).to({x:155.6,y:216},3,cjs.Ease.get(-0.29)).to({rotation:-3.2,y:220.8},3,cjs.Ease.get(-0.29)).to({rotation:0,y:216},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_l_cuff
	this.instance_4 = new lib.mando_s_l_cuff_2();
	this.instance_4.setTransform(155.2,224.5,1,1,0,0,0,-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:8.5,rotation:0.2,x:167.7,y:224.7},0).wait(1).to({regX:-1.8,rotation:0.9,x:164.3,y:224.9},0).wait(1).to({regX:8.5,rotation:0.6,x:172.4,y:225.2},0).wait(1).to({rotation:0.1,x:169.3,y:225.3},0).wait(1).to({rotation:-0.6,x:165.2,y:225.4},0).wait(1).to({regX:-1.8,rotation:-1.4,x:149.8,y:225.9},0).wait(1).to({regX:8.5,x:160.4,y:225.6},0).wait(1).to({rotation:-1.1,x:161.4,y:225.4},0).wait(1).to({rotation:-0.7,x:163.1,y:225},0).wait(1).to({regX:-1.8,rotation:0,x:155.2,y:224.5},0).to({x:155.3,y:229.3},3,cjs.Ease.get(-0.29)).to({x:155.2,y:224.5},3,cjs.Ease.get(-0.29)).to({x:155.3,y:229.3},3,cjs.Ease.get(-0.29)).to({x:155.2,y:224.5},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_r_forearm
	this.instance_5 = new lib.mando_s_r_forearm_1();
	this.instance_5.setTransform(354.3,267.1,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:45,regY:65,rotation:0.2,x:323.2,y:227.8},0).wait(1).to({regX:78.3,regY:105.1,rotation:0.9,x:362.6,y:270.9},0).wait(1).to({regX:45,regY:65,rotation:0.6,x:327.8,y:229.3},0).wait(1).to({rotation:0.1,x:324.7,y:228},0).wait(1).to({rotation:-0.6,x:320.6,y:226.3},0).wait(1).to({regX:78.3,regY:105.1,rotation:-1.4,x:349.9,y:263.4},0).wait(1).to({regX:45,regY:65,x:315.9,y:224.3},0).wait(1).to({rotation:-1.1,x:316.9,y:224.8},0).wait(1).to({rotation:-0.7,x:318.6,y:225.7},0).wait(1).to({regX:78.3,regY:105.1,rotation:0,x:354.3,y:267.1},0).to({x:354.5,y:271.7},3,cjs.Ease.get(-0.29)).to({x:354.3,y:267.1},3,cjs.Ease.get(-0.29)).to({x:354.5,y:271.7},3,cjs.Ease.get(-0.29)).to({x:354.3,y:267.1},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_left_hand
	this.instance_6 = new lib.mando_s_left_hand_3("single",0);
	this.instance_6.setTransform(308.9,192.9,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:32.6,regY:34.8,rotation:0.2,x:281,y:168.4},0).wait(1).to({regX:62.9,regY:59.6,rotation:0.9,x:318.4,y:195.7},0).wait(1).to({regX:32.6,regY:34.8,rotation:0.6,x:286,y:169.7},0).wait(1).to({rotation:0.1,x:282.4,y:168.9},0).wait(1).to({rotation:-0.6,x:277.6,y:167.7},0).wait(1).to({regX:63,regY:59.9,rotation:-1.4,x:302.7,y:190.4},0).wait(1).to({regX:32.6,regY:34.8,x:272.1,y:166.2},0).wait(1).to({rotation:-1.1,x:273.3,y:166.5},0).wait(1).to({rotation:-0.7,x:275.4,y:167},0).wait(1).to({regX:62.9,regY:59.9,rotation:0,x:308.9,y:192.9},0).to({x:309.2,y:197.7},3,cjs.Ease.get(-0.29)).to({x:308.9,y:192.9},3,cjs.Ease.get(-0.29)).to({rotation:2.5,x:309.2,y:197.7},3,cjs.Ease.get(-0.29)).to({rotation:0,x:308.9,y:192.9},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_l_cuff_1
	this.instance_7 = new lib.mando_s_l_cuff_1_1();
	this.instance_7.setTransform(303.6,200.9,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:10,regY:14.5,rotation:0.2,x:288.3,y:199.1},0).wait(1).to({regX:27.6,regY:17,rotation:0.9,x:313,y:203.9},0).wait(1).to({regX:10,regY:14.5,rotation:0.6,x:293.1,y:200.4},0).wait(1).to({rotation:0.1,x:289.8,y:199.4},0).wait(1).to({rotation:-0.6,x:285.4,y:198.1},0).wait(1).to({regX:27.7,regY:16.9,rotation:-1.4,x:297.7,y:198.5},0).wait(1).to({regX:10,regY:14.5,x:280.2,y:196.6},0).wait(1).to({rotation:-1.1,x:281.3,y:197},0).wait(1).to({rotation:-0.7,x:283.2,y:197.6},0).wait(1).to({regX:27.6,regY:16.9,rotation:0,x:303.6,y:200.9},0).to({x:303.9,y:205.7},3,cjs.Ease.get(-0.29)).to({x:303.6,y:200.9},3,cjs.Ease.get(-0.29)).to({x:303.9,y:205.7},3,cjs.Ease.get(-0.29)).to({x:303.6,y:200.9},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_mandolin
	this.instance_8 = new lib.mando_s_mandolin_1();
	this.instance_8.setTransform(217.5,185.4,1,1,0,0,0,93.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:137,regY:101.5,rotation:0.2,x:263.4,y:181},0).wait(1).to({regX:93.5,regY:106.4,rotation:0.9,x:227.2,y:186.9},0).wait(1).to({regX:137,regY:101.5,rotation:0.6,x:268.3,y:182.2},0).wait(1).to({rotation:0.1,x:264.8,y:181.4},0).wait(1).to({rotation:-0.6,x:260.2,y:180.5},0).wait(1).to({regX:93.5,regY:106.5,rotation:-1.4,x:211.1,y:185.3},0).wait(1).to({regX:137,regY:101.5,x:254.8,y:179.2},0).wait(1).to({rotation:-1.1,x:255.9,y:179.5},0).wait(1).to({rotation:-0.7,x:258,y:179.9},0).wait(1).to({regX:93.5,regY:106.4,rotation:0,x:217.5,y:185.4},0).to({y:190},3,cjs.Ease.get(-0.29)).to({y:185.4},3,cjs.Ease.get(-0.29)).to({rotation:1.2,y:190.1},3,cjs.Ease.get(-0.29)).to({rotation:0,y:185.4},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_tie
	this.instance_9 = new lib.mando_s_tie_1();
	this.instance_9.setTransform(231.5,127.4,1,1,0,0,0,34.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:33.5,regY:29,rotation:0.2,x:233,y:148.4},0).wait(1).to({regX:34.5,regY:8.5,rotation:0.9,x:242.1,y:129.2},0).wait(1).to({regX:33.5,regY:29,rotation:0.6,x:238.1,y:149.4},0).wait(1).to({rotation:0.1,x:234.3,y:148.9},0).wait(1).to({rotation:-0.6,x:229.3,y:148.2},0).wait(1).to({regX:34.5,regY:8.5,rotation:-1.4,x:223.6,y:127},0).wait(1).to({regX:33.5,regY:29,y:147.5},0).wait(1).to({rotation:-1.1,x:224.9,y:147.6},0).wait(1).to({rotation:-0.7,x:227.2,y:147.7},0).wait(1).to({regX:34.5,regY:8.4,rotation:0,x:231.5,y:127.4},0).to({y:131.7},3,cjs.Ease.get(-0.29)).to({y:127.4},3,cjs.Ease.get(-0.29)).to({skewX:1.2,y:131.4},3,cjs.Ease.get(-0.29)).to({skewX:0,y:127.4},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_jacketfront_top
	this.instance_10 = new lib.mando_s_jacketfront_top_1();
	this.instance_10.setTransform(253.9,208.9,1,1,0,0,0,63.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:82,regY:111.5,rotation:0.2,x:274.3,y:205.1},0).wait(1).to({regX:64,regY:115.9,rotation:0.9,x:263.3,y:211},0).wait(1).to({regX:82,regY:111.5,rotation:0.6,x:279,y:206.3},0).wait(1).to({rotation:0.1,x:275.7,y:205.5},0).wait(1).to({rotation:-0.6,x:271.4,y:204.4},0).wait(1).to({regX:63.9,regY:116,rotation:-1.4,x:248.1,y:207.9},0).wait(1).to({regX:82,regY:111.5,x:266.4,y:203},0).wait(1).to({rotation:-1.1,x:267.5,y:203.3},0).wait(1).to({rotation:-0.7,x:269.3,y:203.7},0).wait(1).to({regX:63.9,regY:115.9,rotation:0,x:253.9,y:208.9},0).to({y:213.2},3,cjs.Ease.get(-0.29)).to({y:208.9},3,cjs.Ease.get(-0.29)).to({y:213.2},3,cjs.Ease.get(-0.29)).to({y:208.9},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_jacketfront_bot
	this.instance_11 = new lib.mando_s_jacketfront_bot_1();
	this.instance_11.setTransform(243.1,295.3,1,1,0,0,0,64.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:68,regY:82.5,rotation:0.2,x:248.6,y:373},0).wait(1).to({regX:64,regY:5.3,rotation:0.9,x:250.9,y:297.2},0).wait(1).to({regX:68,regY:82.5,rotation:0.6,x:252.3,y:374},0).wait(1).to({rotation:0.1,x:250.6,y:373.3},0).wait(1).to({rotation:-0.6,x:248.2,y:372.5},0).wait(1).to({regX:64,regY:5.3,rotation:-1.4,x:239.4,y:294.4},0).wait(1).to({regX:68,regY:82.5,x:245.4,y:371.6},0).wait(1).to({rotation:-1.1,x:245.8,y:371.7},0).wait(1).to({rotation:-0.7,x:246.3,y:372.1},0).wait(1).to({regX:64.1,regY:5.3,rotation:0,x:243.1,y:295.3},0).to({y:299.6},3,cjs.Ease.get(-0.29)).to({y:295.3},3,cjs.Ease.get(-0.29)).to({y:299.6},3,cjs.Ease.get(-0.29)).to({y:295.3},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_jacketback_top
	this.instance_12 = new lib.mando_s_jacketback_top_1();
	this.instance_12.setTransform(193.7,202.5,1,1,0,0,0,70.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:77,regY:100.1,rotation:0.2,x:202.3,y:193.4},0).wait(1).to({regX:70.6,regY:109.4,rotation:0.9,x:203,y:203.5},0).wait(1).to({regX:77,regY:100.1,rotation:0.6,x:207.2,y:194.2},0).wait(1).to({rotation:0.1,x:203.8,y:194},0).wait(1).to({rotation:-0.6,x:199.3,y:193.7},0).wait(1).to({regX:70.7,regY:109.5,rotation:-1.4,x:187.7,y:202.9},0).wait(1).to({regX:77,regY:100.1,x:194.2,y:193.3},0).wait(1).to({rotation:-1.1,x:195.3},0).wait(1).to({rotation:-0.7,x:197.2,y:193.2},0).wait(1).to({regX:70.7,regY:109.5,rotation:0,x:193.7,y:202.5},0).to({y:206.8},3,cjs.Ease.get(-0.29)).to({y:202.5},3,cjs.Ease.get(-0.29)).to({y:206.8},3,cjs.Ease.get(-0.29)).to({y:202.5},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_jacketback_bot
	this.instance_13 = new lib.mando_s_jacketback_bot_1();
	this.instance_13.setTransform(169,289.6,1,1,0,0,0,49,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:71,regY:92,rotation:0.2,x:192.7,y:358.3},0).wait(1).to({regX:49,regY:23.6,rotation:0.9,x:177,y:290.3},0).wait(1).to({regX:71,regY:92,rotation:0.6,x:196.5,y:358.9},0).wait(1).to({rotation:0.1,x:194.6,y:358.8},0).wait(1).to({rotation:-0.6,x:192.1,y:358.6},0).wait(1).to({regX:49,regY:23.6,rotation:-1.4,x:165.3,y:290.6},0).wait(1).to({regX:71,regY:92,x:189.1,y:358.3},0).wait(1).to({rotation:-1.1,x:189.4},0).wait(1).to({rotation:-0.7,x:190.1,y:358.2},0).wait(1).to({regX:49,regY:23.6,rotation:0,x:169,y:289.6},0).to({y:293.9},3,cjs.Ease.get(-0.29)).to({y:289.6},3,cjs.Ease.get(-0.29)).to({y:293.9},3,cjs.Ease.get(-0.29)).to({y:289.6},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_rarm_1
	this.instance_14 = new lib.mando_s_rarm_1_1();
	this.instance_14.setTransform(141.5,149.3,1,1,0,0,0,89.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:47.5,regY:63,rotation:0.2,x:101.9,y:181.9},0).wait(1).to({regX:89.5,regY:30.3,rotation:0.9,x:151.8,y:149.6},0).wait(1).to({regX:47.5,regY:63,rotation:0.6,x:106.8,y:182},0).wait(1).to({rotation:0.1,x:103.3,y:182.7},0).wait(1).to({rotation:-0.6,x:98.7,y:183.6},0).wait(1).to({regX:89.5,regY:30.3,rotation:-1.4,x:134.2,y:151.1},0).wait(1).to({regX:47.5,regY:63,x:93.4,y:184.6},0).wait(1).to({rotation:-1.1,x:94.6,y:184.1},0).wait(1).to({rotation:-0.7,x:96.6,y:183.2},0).wait(1).to({regX:89.5,regY:30.3,rotation:0,x:141.5,y:149.3},0).to({regY:30.2,y:153.5},3,cjs.Ease.get(-0.29)).to({regY:30.3,y:149.3},3,cjs.Ease.get(-0.29)).to({regY:30.2,y:153.5},3,cjs.Ease.get(-0.29)).to({regY:30.3,y:149.3},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_larm
	this.instance_15 = new lib.mando_s_larm_1();
	this.instance_15.setTransform(336.3,164.6,1,1,0,0,0,18.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:28,regY:70,rotation:0.2,x:348.2,y:213.9},0).wait(1).to({regX:18.2,regY:21.6,rotation:0.9,x:346.2,y:168.1},0).wait(1).to({regX:28,regY:70,rotation:0.6,x:353,y:215.6},0).wait(1).to({rotation:0.1,x:349.7,y:214},0).wait(1).to({rotation:-0.6,x:345.5,y:212},0).wait(1).to({regX:18.3,regY:21.6,rotation:-1.4,x:329.3,y:161.4},0).wait(1).to({regX:28,regY:70,x:340.5,y:209.8},0).wait(1).to({rotation:-1.1,x:341.6,y:210.4},0).wait(1).to({rotation:-0.7,x:343.4,y:211.5},0).wait(1).to({regX:18.3,regY:21.6,rotation:0,x:336.3,y:164.6},0).to({y:168.9},3,cjs.Ease.get(-0.29)).to({y:164.6},3,cjs.Ease.get(-0.29)).to({y:168.9},3,cjs.Ease.get(-0.29)).to({y:164.6},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_pants_shad
	this.instance_16 = new lib.mando_s_pants_shad_1();
	this.instance_16.setTransform(227,449,1,1,0,0,0,87,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({x:227.3,y:449.3},0).wait(1).to({x:228.3,y:450.3},0).wait(1).to({rotation:-0.2,x:228.1,y:450},0).wait(1).to({rotation:-0.5,x:227.9,y:449.6},0).wait(1).to({rotation:-0.9,x:227.6,y:449.1},0).wait(1).to({rotation:-1.4,x:227.3,y:448.5},0).wait(2).to({rotation:-1.1,x:227.2,y:448.6},0).wait(1).to({rotation:-0.7,x:227.1,y:448.7},0).wait(1).to({rotation:0,x:227,y:449},0).to({y:453.2},3,cjs.Ease.get(-0.29)).to({y:449},3,cjs.Ease.get(-0.29)).to({y:453.2},3,cjs.Ease.get(-0.29)).to({y:449},3,cjs.Ease.get(-0.29)).wait(1));

	// mando_s_pants
	this.instance_17 = new lib.mando_s_pants_1();
	this.instance_17.setTransform(219.2,447.8,1,1,0,0,0,79.2,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:87.5,regY:153.5,skewX:0.1,x:227.9,y:589.5},0).wait(1).to({regX:79.2,regY:11.8,skewX:0.6,x:222.3,y:447.8},0).wait(1).to({regX:87.5,regY:153.5,skewX:0.5,x:228.8,y:589.5},0).wait(1).to({skewX:0.4,x:228.5},0).wait(1).to({skewX:0.2,x:228},0).wait(1).to({regX:79.2,regY:11.8,skewX:0,x:219.2,y:447.8},0).wait(1).to({regX:87.5,regY:153.5,x:227.5,y:589.5},0).wait(3).to({regX:79.2,regY:11.8,x:219.2,y:447.8},0).wait(13));

	// mando_s_feet
	this.instance_18 = new lib.mando_s_feet_1();
	this.instance_18.setTransform(245.5,757.5,1,1,0,0,0,94.5,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(23));

	// mando_s_platform
	this.instance_19 = new lib.mando_s_platform_1();
	this.instance_19.setTransform(240,789,1,1,0,0,0,135,29);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(23));

	// mando_s_shad
	this.instance_20 = new lib.mando_s_shad_1();
	this.instance_20.setTransform(180.5,415,1,1,0,0,0,180.5,415);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-19.5,398,849.6);


(lib.mandoBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1773 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1773).call(this.frame_1773).wait(1));

	// Layer 3
	this.instance = new lib.edgeshad_1();
	this.instance.setTransform(697,89.2,0.972,2.062,0,0,0,717,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1774));

	// mando_stars
	this.instance_1 = new lib.mando_stars_1();
	this.instance_1.setTransform(731,271.5,1,1,0,0,0,651,271.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1700).to({_off:false},0).to({alpha:1},73).wait(1));

	// mando_night_bg
	this.instance_2 = new lib.mando_night_bg_1();
	this.instance_2.setTransform(691,292,1,1,0,0,0,691,292);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(236).to({_off:false},0).to({alpha:1},1537).wait(1));

	// Layer 1
	this.instance_3 = new lib.mandolinBG();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1773).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10,1394,594);


(lib.mando_s_Leftarm_move = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mando_s_r_forearm
	this.instance = new lib.mando_s_r_forearm_1();
	this.instance.setTransform(108.3,134.1,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15).to({regX:78.2,rotation:5.9,x:107.9,y:135.6},3).wait(19).to({rotation:-3.7,x:106.7,y:135},3).wait(3).to({rotation:-3.7},0).wait(20).to({regX:78.3,rotation:2.5,x:109.4,y:133.6},5).wait(18).to({regX:78.2,rotation:4.2,x:109.3,y:134.1},4).wait(27).to({regX:78.3,rotation:0,x:108.3},4).wait(5));

	// mando_s_left_hand_fingering
	this.instance_1 = new lib.mando_s_left_hand_fingering();
	this.instance_1.setTransform(62.9,59.9,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({rotation:3.5,x:70.6,y:57.1},3).to({rotation:5.9,x:70.5},3).wait(16).to({rotation:2.8,x:56.6,y:69.7},3).to({rotation:-3.7,y:63.8},3).wait(20).to({rotation:-9.2,x:67.3,y:57.6},5).to({rotation:2.5},5).wait(13).to({rotation:-2.1,x:69.5,y:56.8},4).to({rotation:4.2},4).wait(23).to({rotation:6.2,x:60.9,y:62.5},4).to({rotation:0,x:62.9,y:59.9},4).wait(1));

	// mando_s_l_cuff_1
	this.instance_2 = new lib.mando_s_l_cuff_1_1();
	this.instance_2.setTransform(57.6,67.9,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({rotation:5.9,x:64.4,y:64.5},3).wait(19).to({rotation:-3.7,x:51.9,y:72.2},3).wait(3).to({rotation:-3.7},0).wait(20).to({rotation:2.5,x:61.6,y:65.3},5).wait(18).to({regX:27.4,regY:17.1,rotation:4.2,x:63.5,y:64.5},4).wait(27).to({regX:27.6,regY:16.9,rotation:0,x:57.6,y:67.9},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,120,159);


(lib.mando_introhead = function() {
	this.initialize();

	// mc_animation
	this.mc_animation = new lib.intro_animation();
	this.mc_animation.setTransform(50.9,102.4,1,1,0,0,0,31.9,46.4);

	// mando_s_face
	this.instance = new lib.mando_s_face_1();
	this.instance.setTransform(50.4,76.8,1,1,0,0,0,35.5,41);

	// mando_s_face_side2
	this.instance_1 = new lib.mando_s_face_side2_1();
	this.instance_1.setTransform(44,69,1,1,0,0,0,44,69);

	// mando_s_face_side1
	this.instance_2 = new lib.mando_s_face_side1_1();
	this.instance_2.setTransform(92.5,74.5,1,1,0,0,0,24.5,50.5);

	// mando_s_lids
	this.instance_3 = new lib.mando_s_lids_2();
	this.instance_3.setTransform(55.9,57.3,1,1,0,0,0,28,7.5);

	// mando_s_eyes
	this.instance_4 = new lib.mando_s_eyes();
	this.instance_4.setTransform(52.4,67.8,1,1,0,0,0,23.5,10);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.mc_animation);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117,138);


(lib.mando_head_singer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mc_animation
	this.mc_animation = new lib.animation();
	this.mc_animation.setTransform(32.1,46.5,1,1,0,0,0,31.9,46.4);

	this.timeline.addTween(cjs.Tween.get(this.mc_animation).to({x:33.2,y:46.9},19).wait(25).to({skewY:-0.3,x:31.1,y:44.3},25).wait(35).to({skewY:0,x:32.1,y:46.5},26).wait(53));

	// mando_s_face
	this.instance = new lib.mando_s_face_1();
	this.instance.setTransform(32.2,21.1,1,1,0,0,0,35.5,41);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:33.3,y:21.5},19).wait(25).to({regY:41.1,skewY:-0.3,x:31.2,y:19},25).wait(35).to({regY:41,skewY:0,x:32.2,y:21.1},26).wait(53));

	// mando_s_face_side2
	this.instance_1 = new lib.mando_s_face_side2_1();
	this.instance_1.setTransform(25.8,13.3,1,1,0,0,0,44,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.01,skewY:0.3,x:26.3,y:13.6},19).wait(25).to({regX:44.1,scaleX:1.03,scaleY:0.99,skewY:0.5,x:25.3,y:11.5},25).wait(35).to({regX:44,scaleX:1,scaleY:1,skewY:0,x:25.8,y:13.3},26).wait(53));

	// mando_s_face_side1
	this.instance_2 = new lib.mando_s_face_side1_1();
	this.instance_2.setTransform(74.3,18.8,1,1,0,0,0,24.5,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.93,skewY:-1.5,x:74.5,y:18.9},19).wait(25).to({scaleX:0.91,scaleY:1,skewX:0.8,skewY:1.8,x:72.8,y:17.5},25).wait(35).to({skewY:1.8},0).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:74.3,y:18.8},26).wait(53));

	// mando_s_eyes
	this.instance_3 = new lib.mando_s_lids_2();
	this.instance_3.setTransform(37.7,1.6,1,1,0,0,0,28,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:38.8,y:2},19).wait(25).to({x:36.7,y:-0.3},25).wait(35).to({x:37.7,y:1.6},26).wait(53));

	// mando_s_eyes
	this.instance_4 = new lib.mando_s_eyes();
	this.instance_4.setTransform(34.2,12.1,1,1,0,0,0,23.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:35.3,y:12.5},19).wait(25).to({x:33.2,y:10.2},25).wait(35).to({x:34.2,y:12.1},26).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.2,-55.7,117,138);


(lib.mando_encorehead = function() {
	this.initialize();

	// mc_animation
	this.mc_animation = new lib.encore_animation();
	this.mc_animation.setTransform(50.9,102.4,1,1,0,0,0,31.9,46.4);

	// mando_s_face
	this.instance = new lib.mando_s_face_1();
	this.instance.setTransform(50.4,76.8,1,1,0,0,0,35.5,41);

	// mando_s_face_side2
	this.instance_1 = new lib.mando_s_face_side2_1();
	this.instance_1.setTransform(44,69,1,1,0,0,0,44,69);

	// mando_s_face_side1
	this.instance_2 = new lib.mando_s_face_side1_1();
	this.instance_2.setTransform(92.5,74.5,1,1,0,0,0,24.5,50.5);

	// mando_s_lids
	this.instance_3 = new lib.mando_s_lids_2();
	this.instance_3.setTransform(55.9,57.3,1,1,0,0,0,28,7.5);

	// mando_s_eyes
	this.instance_4 = new lib.mando_s_eyes();
	this.instance_4.setTransform(52.4,67.8,1,1,0,0,0,23.5,10);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.mc_animation);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117,138);


(lib.ll_eyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ll_eye_R_1();
	this.instance.setTransform(30,6,1,1,0,0,0,11,6);

	this.instance_1 = new lib.ll_eye_L_1();
	this.instance_1.setTransform(11,7,1,1,0,0,0,11,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:11,y:7}},{t:this.instance,p:{x:30,y:6}}]}).to({state:[{t:this.instance_1,p:{x:10.3,y:7}},{t:this.instance,p:{x:29.3,y:6}}]},27).to({state:[{t:this.instance_1,p:{x:11.3,y:7}},{t:this.instance,p:{x:30.3,y:6}}]},41).to({state:[{t:this.instance_1,p:{x:11.3,y:7.8}},{t:this.instance,p:{x:30.3,y:6.8}}]},29).to({state:[{t:this.instance_1,p:{x:10.3,y:7.5}},{t:this.instance,p:{x:29.3,y:6.5}}]},31).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41,13);


(lib.introbod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"play":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_431 = function() {
		this.stop();
		var event = new createjs.Event('introComplete', true);
		this.dispatchEvent(event);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(431).call(this.frame_431).wait(1));

	// mando_encorehead
	this.introhead = new lib.mando_introhead();
	this.introhead.setTransform(179.6,113,1,1,0,0,0,53,113);

	this.timeline.addTween(cjs.Tween.get(this.introhead).to({rotation:4.4},12,cjs.Ease.get(1)).to({regY:113.1,rotation:-5.9,x:172.7,y:112},10,cjs.Ease.get(1)).to({regY:113,rotation:2.8,y:111.9},12).to({regY:113.1,rotation:-2.1,y:112},18).wait(19).to({rotation:-2.1},0).to({rotation:4.9,x:164.2,y:114},7,cjs.Ease.get(1)).to({regX:52.9,rotation:-9.3,x:163.7,y:114.1},10).to({regX:53,rotation:-1.9,y:114},10).wait(6).to({rotation:-1.9},0).to({rotation:3.1,y:114.1},4,cjs.Ease.get(1)).wait(6).to({rotation:-4.6},3,cjs.Ease.get(1)).wait(4).to({regY:113,rotation:3.6,y:114},4,cjs.Ease.get(1)).wait(1).to({rotation:3.6},0).to({rotation:0,x:179.6,y:113},19,cjs.Ease.get(0.01)).wait(13).to({regX:53.1,regY:113.1,rotation:-3.2,x:185.8,y:113.4},5).to({regY:113,rotation:2},5).wait(6).to({x:186.8,y:117.9},2).to({regX:53,regY:113.1,rotation:5.5,x:186.7,y:111.9},7).to({regX:53.1,regY:113,rotation:2,x:185.8,y:114.4},9).to({y:113.4},8).wait(13).to({regX:53,rotation:0,x:179.6,y:113},13,cjs.Ease.get(1)).wait(11).to({rotation:3.7},15,cjs.Ease.get(1)).wait(9).to({rotation:-2.5},5,cjs.Ease.get(1)).wait(8).to({regX:52.9,rotation:5.3,y:113.1},5,cjs.Ease.get(1)).wait(9).to({rotation:-1.7},8,cjs.Ease.get(1)).wait(28).to({rotation:-1.7},0).wait(1).to({regX:58.5,regY:71.6,x:183.9,y:71.5},0).wait(1).to({rotation:-1.8,x:183.7},0).wait(1).to({rotation:-1.9,x:183.4},0).wait(1).to({rotation:-2.1,x:183,y:71.6},0).wait(1).to({rotation:-2.3,x:182.5},0).wait(1).to({rotation:-2.6,x:181.8,y:71.7},0).wait(1).to({rotation:-2.9,x:181},0).wait(1).to({rotation:-3.3,x:179.9,y:71.8},0).wait(1).to({rotation:-3.8,x:178.7,y:71.9},0).wait(1).to({rotation:-4.3,x:177.5,y:72},0).wait(1).to({rotation:-4.8,x:176.2,y:72.1},0).wait(1).to({rotation:-5.3,x:174.8,y:72.3},0).wait(1).to({rotation:-5.9,x:173.5,y:72.4},0).wait(1).to({rotation:-6.4,x:172.2,y:72.5},0).wait(1).to({rotation:-6.9,x:171,y:72.6},0).wait(1).to({rotation:-7.3,x:169.9,y:72.8},0).wait(1).to({rotation:-7.7,x:168.9,y:72.9},0).wait(1).to({rotation:-8,x:168.1,y:73},0).wait(1).to({rotation:-8.3,x:167.3,y:73.1},0).wait(1).to({rotation:-8.6,x:166.7},0).wait(1).to({rotation:-8.8,x:166.1,y:73.2},0).wait(1).to({rotation:-9,x:165.7},0).wait(1).to({rotation:-9.1,x:165.2,y:73.3},0).wait(1).to({rotation:-9.2,x:165},0).wait(1).to({rotation:-9.3,x:164.8},0).wait(1).to({rotation:-9.4,x:164.6},0).wait(1).to({x:164.5},0).wait(1).to({regX:52.9,regY:113,x:165.8,y:115.1},0).to({rotation:-1.7},9).wait(8).to({rotation:-1.7},0).to({rotation:0.3,x:187.6,y:114.4},13).to({regX:53.1,rotation:4.5,x:179.7,y:113.1},11).to({regX:53,regY:113.1,rotation:-5.7,x:179.6},10).to({regY:113,rotation:0,y:113},21).wait(8));

	// mando_s_l_forearm
	this.instance = new lib.mando_s_l_forearm_1();
	this.instance.setTransform(28.3,234.1,1,1,0,0,0,28.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.4,x:33.4,y:236.1},12,cjs.Ease.get(1)).to({regY:22.3,rotation:-2,x:25.6,y:238},10,cjs.Ease.get(1)).wait(49).to({regY:22.4,rotation:-4.4,x:22.6,y:246.4},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:28.3,y:234.1},19,cjs.Ease.get(0.01)).wait(13).to({rotation:2,x:30.3,y:229.1},5).wait(11).to({x:31.3,y:230.1},2).to({y:228.1},7).to({rotation:-0.7,x:30.2,y:226.1},9).to({rotation:2,x:30.3,y:229.1},8).wait(13).to({rotation:0,x:28.3,y:234.1},13,cjs.Ease.get(1)).wait(99).to({regX:60,regY:37,x:60,y:248.7},0).wait(1).to({y:248.8},0).wait(1).to({rotation:-0.1,x:59.9,y:248.9},0).wait(1).to({rotation:-0.2,x:59.8,y:249.2},0).wait(1).to({rotation:-0.3,x:59.6,y:249.5},0).wait(1).to({rotation:-0.4,x:59.4,y:249.9},0).wait(1).to({rotation:-0.6,x:59.1,y:250.3},0).wait(1).to({rotation:-0.8,x:58.8,y:250.9},0).wait(1).to({rotation:-1.1,x:58.5,y:251.6},0).wait(1).to({rotation:-1.3,x:58.1,y:252.3},0).wait(1).to({rotation:-1.6,x:57.7,y:253},0).wait(1).to({rotation:-1.9,x:57.2,y:253.8},0).wait(1).to({rotation:-2.1,x:56.8,y:254.5},0).wait(1).to({rotation:-2.4,x:56.4,y:255.3},0).wait(1).to({rotation:-2.6,x:56,y:255.9},0).wait(1).to({rotation:-2.9,x:55.7,y:256.6},0).wait(1).to({rotation:-3.1,x:55.4,y:257.1},0).wait(1).to({rotation:-3.2,x:55.1,y:257.6},0).wait(1).to({rotation:-3.4,x:54.9,y:258.1},0).wait(1).to({rotation:-3.5,x:54.7,y:258.4},0).wait(1).to({rotation:-3.6,x:54.5,y:258.8},0).wait(1).to({rotation:-3.7,x:54.3,y:259},0).wait(1).to({rotation:-3.8,x:54.2,y:259.1},0).wait(1).to({rotation:-3.9,x:54.1,y:259.3},0).wait(1).to({x:54,y:259.4},0).wait(1).to({y:259.5},0).wait(1).to({rotation:-4,y:259.6},0).wait(1).to({regX:28.3,regY:22.4,x:21.3,y:247.3},0).wait(17).to({rotation:-1,x:29.5,y:226.8},13).to({rotation:0,x:28.3,y:234.1},11).wait(39));

	// mando_s_r_hand
	this.instance_1 = new lib.mando_s_r_hand_1();
	this.instance_1.setTransform(103.6,238.7,1,1,0,0,0,13.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:33.9,rotation:5.4,x:108,y:247.8},12,cjs.Ease.get(1)).to({rotation:-2,x:101,y:240.1},10,cjs.Ease.get(1)).wait(49).to({regY:34,rotation:-4.4,x:98,y:245.1},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:103.6,y:238.7},19,cjs.Ease.get(0.01)).wait(13).to({regY:33.9,rotation:2,x:105.4,y:236.3},5).wait(11).to({x:106.4,y:237.3},2).to({y:235.3},7).to({rotation:-0.7,x:105.5,y:229.7},9).to({rotation:2,x:105.4,y:236.3},8).wait(13).to({regY:34,rotation:0,x:103.6,y:238.7},13,cjs.Ease.get(1)).wait(99).to({regX:36.5,regY:31.5,x:126.5,y:236.2},0).wait(1).to({x:126.4},0).wait(1).to({rotation:-0.1,x:126.3,y:236.3},0).wait(1).to({rotation:-0.2,x:126.2,y:236.5},0).wait(1).to({rotation:-0.3,x:126,y:236.6},0).wait(1).to({rotation:-0.4,x:125.7,y:236.8},0).wait(1).to({rotation:-0.6,x:125.4,y:237.1},0).wait(1).to({rotation:-0.8,x:125,y:237.5},0).wait(1).to({rotation:-1.1,x:124.7,y:237.9},0).wait(1).to({rotation:-1.3,x:124.2,y:238.2},0).wait(1).to({rotation:-1.6,x:123.7,y:238.7},0).wait(1).to({rotation:-1.9,x:123.2,y:239.1},0).wait(1).to({rotation:-2.1,x:122.7,y:239.6},0).wait(1).to({rotation:-2.4,x:122.2,y:240},0).wait(1).to({rotation:-2.6,x:121.8,y:240.4},0).wait(1).to({rotation:-2.9,x:121.4,y:240.8},0).wait(1).to({rotation:-3.1,x:121,y:241.1},0).wait(1).to({rotation:-3.2,x:120.7,y:241.4},0).wait(1).to({rotation:-3.4,x:120.4,y:241.6},0).wait(1).to({rotation:-3.5,x:120.2,y:241.8},0).wait(1).to({rotation:-3.6,x:120,y:242.1},0).wait(1).to({rotation:-3.7,x:119.8,y:242.2},0).wait(1).to({rotation:-3.8,x:119.7,y:242.3},0).wait(1).to({rotation:-3.9,x:119.6,y:242.4},0).wait(1).to({x:119.5,y:242.5},0).wait(1).to({x:119.4},0).wait(1).to({rotation:-4,y:242.6},0).wait(1).to({regX:13.6,regY:34,x:96.7,y:246.6},0).wait(17).to({regX:13.5,rotation:-1,x:104.7,y:230.2},13).to({regX:13.6,rotation:0,x:103.6,y:238.7},11).wait(39));

	// mando_s_l_cuff
	this.instance_2 = new lib.mando_s_l_cuff_2();
	this.instance_2.setTransform(103.2,247.2,1,1,0,0,0,-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:37.6,rotation:5.4,x:106.8,y:256.4},12,cjs.Ease.get(1)).to({regX:-1.9,regY:37.5,rotation:-2,x:100.9,y:248.7},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:98.3,y:253.7},7,cjs.Ease.get(1)).wait(48).to({regX:-1.8,rotation:0,x:103.2,y:247.2},19,cjs.Ease.get(0.01)).wait(13).to({regX:-1.9,regY:37.6,rotation:2,x:104.7,y:244.9},5).wait(11).to({x:105.7,y:245.9},2).to({y:243.9},7).to({rotation:-0.7,x:105.2,y:238.3},9).to({rotation:2,x:104.7,y:244.9},8).wait(13).to({regX:-1.8,regY:37.5,rotation:0,x:103.2,y:247.2},13,cjs.Ease.get(1)).wait(99).to({regX:8.5,x:113.5},0).wait(2).to({rotation:-0.1,x:113.3,y:247.3},0).wait(1).to({rotation:-0.2,x:113.2,y:247.5},0).wait(1).to({rotation:-0.3,x:113,y:247.7},0).wait(1).to({rotation:-0.4,x:112.8,y:248},0).wait(1).to({rotation:-0.6,x:112.5,y:248.3},0).wait(1).to({rotation:-0.8,x:112.2,y:248.7},0).wait(1).to({rotation:-1.1,x:111.8,y:249.1},0).wait(1).to({rotation:-1.3,x:111.4,y:249.5},0).wait(1).to({rotation:-1.6,x:111,y:250},0).wait(1).to({rotation:-1.9,x:110.5,y:250.5},0).wait(1).to({rotation:-2.1,x:110.1,y:251},0).wait(1).to({rotation:-2.4,x:109.7,y:251.5},0).wait(1).to({rotation:-2.6,x:109.3,y:251.9},0).wait(1).to({rotation:-2.9,x:108.9,y:252.4},0).wait(1).to({rotation:-3.1,x:108.6,y:252.7},0).wait(1).to({rotation:-3.2,x:108.3,y:253},0).wait(1).to({rotation:-3.4,x:108.1,y:253.4},0).wait(1).to({rotation:-3.5,x:107.9,y:253.6},0).wait(1).to({rotation:-3.6,x:107.7,y:253.8},0).wait(1).to({rotation:-3.7,x:107.6,y:253.9},0).wait(1).to({rotation:-3.8,x:107.4,y:254.1},0).wait(1).to({rotation:-3.9,y:254.2},0).wait(1).to({x:107.3},0).wait(1).to({x:107.2,y:254.3},0).wait(1).to({rotation:-4},0).wait(1).to({regX:-1.8,x:96.9,y:255.1},0).wait(17).to({rotation:-1,x:104.5,y:238.7},13).to({rotation:0,x:103.2,y:247.2},11).wait(39));

	// mando_s_r_forearm
	this.instance_3 = new lib.mando_s_r_forearm_1();
	this.instance_3.setTransform(302.3,289.8,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-5.7,x:320,y:291.6},12,cjs.Ease.get(1)).to({regX:78.2,rotation:-2,x:301.3,y:284.4},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:300,y:280.8},7,cjs.Ease.get(1)).wait(48).to({regX:78.3,rotation:0,x:302.3,y:289.8},19,cjs.Ease.get(0.01)).wait(13).to({rotation:2,x:302.2,y:294.3},5).wait(11).to({x:303.2,y:295.3},2).to({y:293.3},7).to({rotation:-0.2,x:307.1,y:288.7},9).to({rotation:2,x:302.2,y:294.3},8).wait(13).to({rotation:0,x:302.3,y:289.8},13,cjs.Ease.get(1)).wait(99).to({regX:45,regY:65,x:269,y:249.6},0).wait(1).to({x:268.9},0).wait(1).to({rotation:-0.1,x:268.8,y:249.5},0).wait(1).to({rotation:-0.2,x:268.7},0).wait(1).to({rotation:-0.3,x:268.5,y:249.4},0).wait(1).to({rotation:-0.4,x:268.3,y:249.2},0).wait(1).to({rotation:-0.6,x:268,y:249.1},0).wait(1).to({rotation:-0.8,x:267.7,y:248.9},0).wait(1).to({rotation:-1.1,x:267.3,y:248.7},0).wait(1).to({rotation:-1.3,x:266.9,y:248.5},0).wait(1).to({rotation:-1.6,x:266.4,y:248.2},0).wait(1).to({rotation:-1.9,x:266,y:248},0).wait(1).to({rotation:-2.1,x:265.4,y:247.8},0).wait(1).to({rotation:-2.4,x:265,y:247.5},0).wait(1).to({rotation:-2.6,x:264.7,y:247.3},0).wait(1).to({rotation:-2.9,x:264.3,y:247.1},0).wait(1).to({rotation:-3.1,x:263.9,y:246.9},0).wait(1).to({rotation:-3.2,x:263.7,y:246.8},0).wait(1).to({rotation:-3.4,x:263.4,y:246.7},0).wait(1).to({rotation:-3.5,x:263.2,y:246.5},0).wait(1).to({rotation:-3.6,x:263,y:246.4},0).wait(1).to({rotation:-3.7,x:262.9,y:246.3},0).wait(1).to({rotation:-3.8,x:262.7,y:246.2},0).wait(1).to({rotation:-3.9},0).wait(1).to({x:262.6},0).wait(1).to({x:262.5,y:246.1},0).wait(1).to({rotation:-4},0).wait(1).to({regX:78.3,regY:105.1,x:298.4,y:283.9},0).wait(17).to({regX:78.2,rotation:-1.5,x:312.8,y:287.5},13).to({regX:78.3,rotation:0,x:302.3,y:289.8},11).wait(39));

	// mando_s_left_hand_static
	this.instance_4 = new lib.mando_s_left_hand_static("single",0);
	this.instance_4.setTransform(256.9,215.6,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:62.8,rotation:-5.7,x:267.4,y:222.4},12,cjs.Ease.get(1)).to({regX:62.9,rotation:-2,x:253.5,y:211.8},10,cjs.Ease.get(1)).wait(49).to({startPosition:0},0).to({regX:62.8,rotation:-4.4,x:249.1,y:210.3},7,cjs.Ease.get(1)).wait(48).to({startPosition:0},0).to({regX:62.9,rotation:0,x:256.9,y:215.6},19,cjs.Ease.get(0.01)).wait(13).to({startPosition:0},0).to({rotation:2,x:259.4,y:218.6},5).wait(11).to({startPosition:0},0).to({x:260.4,y:219.6},2).to({y:217.6},7).to({rotation:-0.2,x:261.4,y:214.7},9).to({rotation:2,x:259.4,y:218.6},8).wait(13).to({startPosition:0},0).to({rotation:0,x:256.9,y:215.6},13,cjs.Ease.get(1)).wait(98).to({startPosition:0},0).wait(1).to({regX:33.5,regY:35,x:227.5,y:190.7},0).wait(1).to({x:227.4,y:190.6},0).wait(1).to({rotation:-0.1,x:227.2},0).wait(1).to({rotation:-0.2,x:227},0).wait(1).to({rotation:-0.3,x:226.7},0).wait(1).to({rotation:-0.4,x:226.3},0).wait(1).to({rotation:-0.6,x:225.8},0).wait(1).to({rotation:-0.8,x:225.3,y:190.5},0).wait(1).to({rotation:-1.1,x:224.7},0).wait(1).to({rotation:-1.3,x:224},0).wait(1).to({rotation:-1.6,x:223.3},0).wait(1).to({rotation:-1.9,x:222.6,y:190.4},0).wait(1).to({rotation:-2.1,x:221.9},0).wait(1).to({rotation:-2.4,x:221.1,y:190.3},0).wait(1).to({rotation:-2.6,x:220.5},0).wait(1).to({rotation:-2.9,x:219.9},0).wait(1).to({rotation:-3.1,x:219.3},0).wait(1).to({rotation:-3.2,x:218.9},0).wait(1).to({rotation:-3.4,x:218.5},0).wait(1).to({rotation:-3.5,x:218.1},0).wait(1).to({rotation:-3.6,x:217.8,y:190.2},0).wait(1).to({rotation:-3.7,x:217.6},0).wait(1).to({rotation:-3.8,x:217.4},0).wait(1).to({rotation:-3.9,x:217.2},0).wait(1).to({x:217.1},0).wait(1).to({x:217},0).wait(1).to({rotation:-4},0).wait(1).to({regX:62.9,regY:59.9,x:248.1,y:213},0).wait(17).to({startPosition:0},0).to({rotation:-1.5,x:265.7,y:214.5},13).to({rotation:0,x:256.9,y:215.6},11).wait(39));

	// mando_s_l_cuff_1
	this.instance_5 = new lib.mando_s_l_cuff_1_1();
	this.instance_5.setTransform(251.6,223.6,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-5.7,x:263,y:230.9},12,cjs.Ease.get(1)).to({rotation:-2,x:248.5,y:220},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:244.5,y:218.7},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:251.6,y:223.6},19,cjs.Ease.get(0.01)).wait(13).to({regY:17,rotation:2,x:253.9,y:226.4},5).wait(11).to({x:254.9,y:227.4},2).to({y:225.4},7).to({rotation:-0.2,x:256.2,y:222.8},9).to({rotation:2,x:253.9,y:226.4},8).wait(13).to({regY:16.9,rotation:0,x:251.6,y:223.6},13,cjs.Ease.get(1)).wait(99).to({regX:10,regY:14.5,x:234,y:221.1},0).wait(1).to({x:233.9},0).wait(1).to({rotation:-0.1,x:233.8},0).wait(1).to({rotation:-0.2,x:233.6},0).wait(1).to({rotation:-0.3,x:233.3},0).wait(1).to({rotation:-0.4,x:233.1,y:221},0).wait(1).to({rotation:-0.6,x:232.7},0).wait(1).to({rotation:-0.8,x:232.2,y:220.9},0).wait(1).to({rotation:-1.1,x:231.7},0).wait(1).to({rotation:-1.3,x:231.2,y:220.8},0).wait(1).to({rotation:-1.6,x:230.6,y:220.7},0).wait(1).to({rotation:-1.9,x:230},0).wait(1).to({rotation:-2.1,x:229.5,y:220.6},0).wait(1).to({rotation:-2.4,x:228.9},0).wait(1).to({rotation:-2.6,x:228.4,y:220.5},0).wait(1).to({rotation:-2.9,x:227.9,y:220.4},0).wait(1).to({rotation:-3.1,x:227.5},0).wait(1).to({rotation:-3.2,x:227.1,y:220.3},0).wait(1).to({rotation:-3.4,x:226.8,y:220.2},0).wait(1).to({rotation:-3.5,x:226.5},0).wait(1).to({rotation:-3.6,x:226.3},0).wait(1).to({rotation:-3.7,x:226.1},0).wait(1).to({rotation:-3.8,x:225.9},0).wait(1).to({rotation:-3.9,x:225.8},0).wait(1).to({x:225.7,y:220.1},0).wait(2).to({rotation:-4,x:225.6},0).wait(1).to({regX:27.6,regY:16.9,x:243.3,y:221.3},0).wait(17).to({regX:27.7,rotation:-1.5,x:260.6,y:222.7},13).to({regX:27.6,rotation:0,x:251.6,y:223.6},11).wait(39));

	// mando_s_mandolin
	this.instance_6 = new lib.mando_s_mandolin_1();
	this.instance_6.setTransform(165.5,208.1,1,1,0,0,0,93.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:106.5,rotation:2.2,x:164.6,y:213.6},12,cjs.Ease.get(1)).to({regY:106.4,rotation:-2,x:161.8,y:207.4},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:157.4,y:209.9},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:165.5,y:208.1},19,cjs.Ease.get(0.01)).wait(13).to({rotation:2,x:168.4,y:207.9},5).wait(11).to({x:169.4,y:208.9},2).to({y:206.9},7).to({x:168.9,y:205.4},9).to({x:168.4,y:207.9},8).wait(13).to({rotation:0,x:165.5,y:208.1},13,cjs.Ease.get(1)).wait(99).to({regX:137,regY:101.5,x:209,y:203.2},0).wait(1).to({x:208.9},0).wait(1).to({rotation:-0.1,x:208.8},0).wait(1).to({rotation:-0.2,x:208.5},0).wait(1).to({rotation:-0.3,x:208.3},0).wait(1).to({rotation:-0.4,x:208},0).wait(1).to({rotation:-0.6,x:207.5,y:203.3},0).wait(1).to({rotation:-0.8,x:207},0).wait(1).to({rotation:-1.1,x:206.5,y:203.4},0).wait(1).to({rotation:-1.3,x:205.8,y:203.3},0).wait(1).to({rotation:-1.6,x:205.2,y:203.4},0).wait(1).to({rotation:-1.9,x:204.6,y:203.5},0).wait(1).to({rotation:-2.1,x:203.8},0).wait(1).to({rotation:-2.4,x:203.3,y:203.6},0).wait(1).to({rotation:-2.6,x:202.6},0).wait(1).to({rotation:-2.9,x:202.1},0).wait(1).to({rotation:-3.1,x:201.6,y:203.7},0).wait(1).to({rotation:-3.2,x:201.2,y:203.8},0).wait(1).to({rotation:-3.4,x:200.8},0).wait(1).to({rotation:-3.5,x:200.5},0).wait(1).to({rotation:-3.6,x:200.2},0).wait(1).to({rotation:-3.7,x:199.9,y:203.9},0).wait(1).to({rotation:-3.8,x:199.8},0).wait(1).to({rotation:-3.9,x:199.6,y:203.8},0).wait(1).to({y:203.9},0).wait(1).to({x:199.5},0).wait(1).to({rotation:-4,x:199.4},0).wait(1).to({regX:93.5,regY:106.4,x:156.4,y:211.8},0).wait(17).to({rotation:2,x:172.2,y:205.9},13).to({rotation:0,x:165.5,y:208.1},11).wait(39));

	// mando_s_tie
	this.instance_7 = new lib.mando_s_tie_1();
	this.instance_7.setTransform(179.5,150.1,1,1,0,0,0,34.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({regX:34.6,regY:8.5,rotation:-2,x:174,y:149},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:167,y:151},7,cjs.Ease.get(1)).wait(48).to({regX:34.5,regY:8.4,rotation:0,x:179.5,y:150.1},19,cjs.Ease.get(0.01)).wait(13).to({rotation:2,x:184.4,y:150.4},5).wait(11).to({x:185.4,y:151.4},2).to({y:149.4},7).to({x:184.4,y:151.4},9).to({y:150.4},8).wait(13).to({rotation:0,x:179.5,y:150.1},13,cjs.Ease.get(1)).wait(99).to({regX:33.5,regY:29,x:178.5,y:170.7},0).wait(1).to({x:178.4,y:170.6},0).wait(1).to({rotation:-0.1,x:178.3,y:170.7},0).wait(1).to({rotation:-0.2,x:178.1,y:170.8},0).wait(1).to({rotation:-0.3,x:177.8},0).wait(1).to({rotation:-0.4,x:177.4,y:170.9},0).wait(1).to({rotation:-0.6,x:177,y:171},0).wait(1).to({rotation:-0.8,x:176.5},0).wait(1).to({rotation:-1.1,x:175.9,y:171.2},0).wait(1).to({rotation:-1.3,x:175.3,y:171.3},0).wait(1).to({rotation:-1.6,x:174.6,y:171.5},0).wait(1).to({rotation:-1.9,x:174,y:171.6},0).wait(1).to({rotation:-2.1,x:173.3,y:171.7},0).wait(1).to({rotation:-2.4,x:172.6,y:171.8},0).wait(1).to({rotation:-2.6,x:172,y:171.9},0).wait(1).to({rotation:-2.9,x:171.4,y:172.1},0).wait(1).to({rotation:-3.1,x:171,y:172.2},0).wait(1).to({rotation:-3.2,x:170.5,y:172.3},0).wait(1).to({rotation:-3.4,x:170.1},0).wait(1).to({rotation:-3.5,x:169.8,y:172.4},0).wait(1).to({rotation:-3.6,x:169.6},0).wait(1).to({rotation:-3.7,x:169.3,y:172.5},0).wait(1).to({rotation:-3.8,x:169.2},0).wait(1).to({rotation:-3.9,x:168.9,y:172.6},0).wait(2).to({x:168.8},0).wait(1).to({rotation:-4,x:168.7},0).wait(1).to({regX:34.5,regY:8.5,x:168.3,y:152.1},0).wait(17).to({regY:8.4,rotation:2,x:186.2,y:151.4},13).to({rotation:0,x:179.5,y:150.1},11).wait(39));

	// mando_s_jacketfront_top
	this.instance_8 = new lib.mando_s_jacketfront_top_1();
	this.instance_8.setTransform(201.9,231.6,1,1,0,0,0,63.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(12).to({regX:64,rotation:-2,x:199.1,y:229.7},10,cjs.Ease.get(1)).wait(49).to({regX:63.9,rotation:-4.4,x:195.5,y:230.5},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:201.9,y:231.6},19,cjs.Ease.get(0.01)).wait(13).to({regX:64,rotation:2,x:204,y:232.7},5).wait(11).to({x:205,y:233.7},2).to({y:231.7},7).to({x:204,y:233.7},9).to({y:232.7},8).wait(13).to({regX:63.9,rotation:0,x:201.9,y:231.6},13,cjs.Ease.get(1)).wait(99).to({regX:82,regY:111.5,x:220,y:227.2},0).wait(1).to({y:227.1},0).wait(1).to({rotation:-0.1,x:219.9},0).wait(1).to({rotation:-0.2,x:219.7},0).wait(1).to({rotation:-0.3,x:219.6},0).wait(1).to({rotation:-0.4,x:219.3,y:227},0).wait(1).to({rotation:-0.6,x:219.1},0).wait(1).to({rotation:-0.8,x:218.8},0).wait(1).to({rotation:-1.1,x:218.4,y:226.9},0).wait(1).to({rotation:-1.3,x:218.1,y:226.8},0).wait(1).to({rotation:-1.6,x:217.6,y:226.7},0).wait(1).to({rotation:-1.9,x:217.2},0).wait(1).to({rotation:-2.1,x:216.8,y:226.6},0).wait(1).to({rotation:-2.4,x:216.4,y:226.5},0).wait(1).to({rotation:-2.6,x:216},0).wait(1).to({rotation:-2.9,x:215.7,y:226.4},0).wait(1).to({rotation:-3.1,x:215.4,y:226.3},0).wait(1).to({rotation:-3.2,x:215.1},0).wait(1).to({rotation:-3.4,x:214.9},0).wait(1).to({rotation:-3.5,x:214.7,y:226.2},0).wait(1).to({rotation:-3.6,x:214.5},0).wait(1).to({rotation:-3.7,x:214.4,y:226.1},0).wait(1).to({rotation:-3.8,x:214.2},0).wait(1).to({rotation:-3.9,x:214.1},0).wait(2).to({x:214},0).wait(1).to({rotation:-4},0).wait(1).to({regX:63.9,regY:116,x:196.3,y:231.8},0).wait(17).to({regX:64,regY:115.9,rotation:2,x:205.8,y:233.6},13).to({regX:63.9,rotation:0,x:201.9,y:231.6},11).wait(39));

	// mando_s_jacketback_top
	this.instance_9 = new lib.mando_s_jacketback_top_1();
	this.instance_9.setTransform(141.7,225.2,1,1,0,0,0,70.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(12).to({regX:70.6,regY:109.4,rotation:-2,x:138.5,y:225.3},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:134.9,y:228.7},7,cjs.Ease.get(1)).wait(48).to({regX:70.7,regY:109.5,rotation:0,x:141.7,y:225.2},19,cjs.Ease.get(0.01)).wait(13).to({regY:109.4,rotation:2,x:144,y:224.1},5).wait(11).to({x:145,y:225.1},2).to({y:223.1},7).to({x:144,y:225.1},9).to({y:224.1},8).wait(13).to({regY:109.5,rotation:0,x:141.7,y:225.2},13,cjs.Ease.get(1)).wait(99).to({regX:77,regY:100.1,x:148,y:215.8},0).wait(1).to({x:147.9},0).wait(1).to({rotation:-0.1,x:147.8},0).wait(1).to({rotation:-0.2,x:147.7,y:215.9},0).wait(1).to({rotation:-0.3,x:147.5,y:216},0).wait(1).to({rotation:-0.4,x:147.3,y:216.2},0).wait(1).to({rotation:-0.6,x:147,y:216.4},0).wait(1).to({rotation:-0.8,x:146.7,y:216.6},0).wait(1).to({rotation:-1.1,x:146.3,y:216.8},0).wait(1).to({rotation:-1.3,x:145.9,y:217},0).wait(1).to({rotation:-1.6,x:145.3,y:217.3},0).wait(1).to({rotation:-1.9,x:144.9,y:217.6},0).wait(1).to({rotation:-2.1,x:144.4,y:217.9},0).wait(1).to({rotation:-2.4,x:144.1,y:218.1},0).wait(1).to({rotation:-2.6,x:143.6,y:218.4},0).wait(1).to({rotation:-2.9,x:143.2,y:218.6},0).wait(1).to({rotation:-3.1,x:142.9,y:218.8},0).wait(1).to({rotation:-3.2,x:142.6,y:219},0).wait(1).to({rotation:-3.4,x:142.3,y:219.2},0).wait(1).to({rotation:-3.5,x:142.1},0).wait(1).to({rotation:-3.6,x:141.9,y:219.4},0).wait(1).to({rotation:-3.7,x:141.8,y:219.5},0).wait(1).to({rotation:-3.8,x:141.7,y:219.6},0).wait(1).to({rotation:-3.9,x:141.6},0).wait(1).to({x:141.5},0).wait(1).to({x:141.4},0).wait(1).to({rotation:-4,y:219.7},0).wait(1).to({regX:70.6,regY:109.5,x:135.7,y:229.5},0).wait(17).to({regX:70.7,rotation:2,x:145.8,y:225.2},13).to({rotation:0,x:141.7},11).wait(39));

	// mando_s_rarm_1
	this.instance_10 = new lib.mando_s_rarm_1_1();
	this.instance_10.setTransform(89.5,172,1,1,0,0,0,89.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:89.6,scaleY:1,skewX:-3.3,x:89.6},12,cjs.Ease.get(1)).to({regX:89.5,scaleY:1,rotation:-2,skewX:0,x:84.7,y:173.9},10,cjs.Ease.get(1)).wait(49).to({regX:89.6,rotation:-4.4,x:79,y:179.6},7,cjs.Ease.get(1)).wait(48).to({regX:89.5,rotation:0,x:89.5,y:172},19,cjs.Ease.get(0.01)).wait(13).to({rotation:2,x:93.7,y:169.2},5).wait(11).to({x:94.7,y:170.2},2).to({y:168.2},7).to({regX:89.7,scaleY:0.97,x:93.8,y:170.2},9).to({regX:89.5,scaleY:1,x:93.7,y:169.2},8).wait(13).to({rotation:0,x:89.5,y:172},13,cjs.Ease.get(1)).wait(99).to({regX:47.5,regY:63,x:47.5,y:204.7},0).wait(1).to({x:47.4,y:204.8},0).wait(1).to({x:47.3,y:204.9},0).wait(1).to({x:47.1,y:205},0).wait(1).to({rotation:-0.1,x:46.9,y:205.3},0).wait(1).to({x:46.5,y:205.6},0).wait(1).to({rotation:-0.2,x:46.2,y:206},0).wait(1).to({x:45.7,y:206.5},0).wait(1).to({rotation:-0.3,x:45.2,y:207},0).wait(1).to({x:44.6,y:207.6},0).wait(1).to({rotation:-0.4,x:44,y:208.2},0).wait(1).to({rotation:-0.5,x:43.4,y:208.8},0).wait(1).to({x:42.8,y:209.4},0).wait(1).to({rotation:-0.6,x:42.2,y:210},0).wait(1).to({rotation:-0.7,x:41.6,y:210.5},0).wait(1).to({x:41.2,y:211},0).wait(1).to({rotation:-0.8,x:40.7,y:211.5},0).wait(1).to({x:40.3,y:211.9},0).wait(1).to({x:39.9,y:212.2},0).wait(1).to({rotation:-0.9,x:39.6,y:212.5},0).wait(1).to({x:39.4,y:212.8},0).wait(1).to({x:39.2,y:213},0).wait(1).to({x:39,y:213.1},0).wait(1).to({rotation:-1,x:38.9,y:213.3},0).wait(1).to({x:38.8,y:213.4},0).wait(1).to({x:38.7},0).wait(1).to({y:213.5},0).wait(1).to({regX:89.6,regY:30.3,x:80.1,y:180.1},0).wait(17).to({regX:89.5,rotation:5,x:95.5,y:170.2},13).to({rotation:0,x:89.5,y:172},11).wait(39));

	// mando_s_larm
	this.instance_11 = new lib.mando_s_larm_1();
	this.instance_11.setTransform(284.3,187.3,1,1,0,0,0,18.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regY:21.7,rotation:-8},12,cjs.Ease.get(1)).to({regY:21.6,rotation:-2,x:279.9,y:182.6},10,cjs.Ease.get(1)).wait(49).to({rotation:-4.4,x:274.3,y:180},7,cjs.Ease.get(1)).wait(48).to({rotation:0,x:284.3,y:187.3},19,cjs.Ease.get(0.01)).wait(13).to({regY:21.7,rotation:2,x:287.8,y:191.4},5).wait(11).to({x:288.8,y:192.4},2).to({y:190.4},7).to({rotation:-1,x:287.8,y:192.3},9).to({rotation:2,y:191.4},8).wait(13).to({regY:21.6,rotation:0,x:284.3,y:187.3},13,cjs.Ease.get(1)).wait(99).to({regX:28,regY:70,x:294,y:235.6},0).wait(1).to({x:293.9},0).wait(1).to({x:293.8,y:235.5},0).wait(1).to({rotation:-0.1,x:293.7,y:235.4},0).wait(1).to({x:293.4,y:235.2},0).wait(1).to({rotation:-0.2,x:293.2,y:235},0).wait(1).to({x:292.8,y:234.8},0).wait(1).to({rotation:-0.3,x:292.4,y:234.5},0).wait(1).to({rotation:-0.4,x:292,y:234.2},0).wait(1).to({rotation:-0.5,x:291.5,y:233.8},0).wait(1).to({rotation:-0.6,x:291,y:233.4},0).wait(1).to({rotation:-0.7,x:290.4,y:233},0).wait(1).to({rotation:-0.8,x:289.9,y:232.6},0).wait(1).to({rotation:-0.9,x:289.4,y:232.3},0).wait(1).to({rotation:-1,x:289,y:231.9},0).wait(1).to({rotation:-1.1,x:288.5,y:231.6},0).wait(1).to({rotation:-1.2,x:288.2,y:231.4},0).wait(1).to({x:287.8,y:231.1},0).wait(1).to({rotation:-1.3,x:287.5,y:230.8},0).wait(1).to({x:287.2,y:230.7},0).wait(1).to({rotation:-1.4,x:287,y:230.5},0).wait(1).to({x:286.9,y:230.4},0).wait(1).to({rotation:-1.5,x:286.7,y:230.3},0).wait(1).to({x:286.6,y:230.2},0).wait(1).to({x:286.5,y:230.1},0).wait(2).to({x:286.4},0).wait(1).to({regX:18.3,regY:21.7,x:275.4,y:182},0).wait(17).to({rotation:-2,x:289.7,y:192.2},13).to({regY:21.6,rotation:0,x:284.3,y:187.3},11).wait(39));

	// mando_s_jacketfront_bot
	this.instance_12 = new lib.mando_s_jacketfront_bot_1();
	this.instance_12.setTransform(191.1,318,1,1,0,0,0,64.1,5.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(432));

	// mando_s_jacketback_bot
	this.instance_13 = new lib.mando_s_jacketback_bot_1();
	this.instance_13.setTransform(117,312.3,1,1,0,0,0,49,23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(432));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346,477.7);


(lib.gunfight_head_main = function() {
	this.initialize();

	// gunfight_head_d
	this.instance = new lib.gunfight_head_d_2();
	this.instance.setTransform(28.5,33.5,1,1,0,0,0,28.5,33.5);
	this.instance.alpha = 0.5;

	// gunfight_head
	this.instance_1 = new lib.gunfight_head_2();
	this.instance_1.setTransform(24.5,63,1,1,0,0,0,24.5,63);

	// gunfight_eyes
	this.instance_2 = new lib.gunfight_eyes();
	this.instance_2.setTransform(21.5,35,1,1,0,0,0,12.5,6);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,67);


(lib.encorebod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"play":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
		var event = new createjs.Event('encoreComplete', true);
		this.dispatchEvent(event);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(68).call(this.frame_68).wait(1));

	// mando_encorehead
	this.encorehead = new lib.mando_encorehead();
	this.encorehead.setTransform(179.6,113,1,1,0,0,0,53,113);

	this.timeline.addTween(cjs.Tween.get(this.encorehead).to({regX:53.1,regY:113.1,rotation:2,x:172.1,y:113.5},14,cjs.Ease.get(1)).to({regY:113,rotation:-2,x:172.2,y:113.4},10).wait(6).to({regX:53,rotation:-3.5,x:181,y:114.8},10,cjs.Ease.get(1)).to({regX:53.1,rotation:4.2,x:172.2,y:113.5},12,cjs.Ease.get(1)).to({regY:113.1,rotation:-3.4,x:179.6,y:113.1},11,cjs.Ease.get(1)).to({regX:53,regY:113,rotation:0,y:113},5).wait(1));

	// mando_s_l_forearm
	this.instance = new lib.mando_s_l_forearm_1();
	this.instance.setTransform(28.3,234.1,1,1,0,0,0,28.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-2,x:25.1,y:239.6},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:28.2,y:233.8},10,cjs.Ease.get(1)).to({rotation:-2,x:25.1,y:239.6},12,cjs.Ease.get(1)).to({rotation:0,x:28.3,y:234.1},11,cjs.Ease.get(1)).wait(6));

	// mando_s_r_hand
	this.instance_1 = new lib.mando_s_r_hand_1();
	this.instance_1.setTransform(103.6,238.7,1,1,0,0,0,13.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-2,x:100.5,y:241.7},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:103.5,y:239.4},10,cjs.Ease.get(1)).to({rotation:-2,x:100.5,y:241.7},12,cjs.Ease.get(1)).to({rotation:0,x:103.6,y:238.7},11,cjs.Ease.get(1)).wait(6));

	// mando_s_l_cuff
	this.instance_2 = new lib.mando_s_l_cuff_2();
	this.instance_2.setTransform(103.2,247.2,1,1,0,0,0,-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:-1.9,rotation:-2,x:100.4,y:250.2},14,cjs.Ease.get(1)).wait(16).to({regX:-1.8,rotation:0.7,x:103,y:248},10,cjs.Ease.get(1)).to({regX:-1.9,rotation:-2,x:100.4,y:250.2},12,cjs.Ease.get(1)).to({regX:-1.8,rotation:0,x:103.2,y:247.2},11,cjs.Ease.get(1)).wait(6));

	// mando_s_r_forearm
	this.instance_3 = new lib.mando_s_r_forearm_1();
	this.instance_3.setTransform(302.3,289.8,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-2,x:300.8,y:285.9},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:301.5,y:293.1},10,cjs.Ease.get(1)).to({rotation:-2,x:300.8,y:285.9},12,cjs.Ease.get(1)).to({rotation:0,x:302.3,y:289.8},11,cjs.Ease.get(1)).wait(6));

	// mando_s_left_hand_static
	this.instance_4 = new lib.mando_s_left_hand_static("single",0);
	this.instance_4.setTransform(256.9,215.6,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-2,x:252.9,y:213.2},14,cjs.Ease.get(1)).wait(16).to({startPosition:0},0).to({rotation:0.7,x:257.1,y:218.3},10,cjs.Ease.get(1)).to({rotation:-2,x:252.9,y:213.2},12,cjs.Ease.get(1)).to({rotation:0,x:256.9,y:215.6},11,cjs.Ease.get(1)).wait(6));

	// mando_s_l_cuff_1
	this.instance_5 = new lib.mando_s_l_cuff_1_1();
	this.instance_5.setTransform(251.6,223.6,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-2,x:248,y:221.5},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:251.7,y:226.2},10,cjs.Ease.get(1)).to({rotation:-2,x:248,y:221.5},12,cjs.Ease.get(1)).to({rotation:0,x:251.6,y:223.6},11,cjs.Ease.get(1)).wait(6));

	// mando_s_mandolin
	this.instance_6 = new lib.mando_s_mandolin_1();
	this.instance_6.setTransform(165.5,208.1,1,1,0,0,0,93.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:106.5,rotation:-2,x:161.3,y:209},14,cjs.Ease.get(1)).wait(16).to({regY:106.4,rotation:0.7,x:165.8,y:209.7},10,cjs.Ease.get(1)).to({regY:106.5,rotation:-2,x:161.3,y:209},12,cjs.Ease.get(1)).to({regY:106.4,rotation:0,x:165.5,y:208.1},11,cjs.Ease.get(1)).wait(6));

	// mando_s_tie
	this.instance_7 = new lib.mando_s_tie_1();
	this.instance_7.setTransform(179.5,150.1,1,1,0,0,0,34.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:34.6,rotation:-2,x:173.5,y:150.4},14,cjs.Ease.get(1)).wait(16).to({regX:34.5,rotation:0.7,x:180.5,y:151.8},10,cjs.Ease.get(1)).to({regX:34.6,rotation:-2,x:173.5,y:150.4},12,cjs.Ease.get(1)).to({regX:34.5,rotation:0,x:179.5,y:150.1},11,cjs.Ease.get(1)).wait(6));

	// mando_s_jacketfront_top
	this.instance_8 = new lib.mando_s_jacketfront_top_1();
	this.instance_8.setTransform(201.9,231.6,1,1,0,0,0,63.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:64,rotation:-2,x:198.6,y:231.2},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:202,y:233.6},10,cjs.Ease.get(1)).to({rotation:-2,x:198.6,y:231.2},12,cjs.Ease.get(1)).to({regX:63.9,rotation:0,x:201.9,y:231.6},11,cjs.Ease.get(1)).wait(6));

	// mando_s_jacketback_top
	this.instance_9 = new lib.mando_s_jacketback_top_1();
	this.instance_9.setTransform(141.7,225.2,1,1,0,0,0,70.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:70.6,regY:109.4,rotation:-2,x:138,y:226.7},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:141.7,y:226.3},10,cjs.Ease.get(1)).to({rotation:-2,x:138,y:226.7},12,cjs.Ease.get(1)).to({regX:70.7,regY:109.5,rotation:0,x:141.7,y:225.2},11,cjs.Ease.get(1)).wait(6));

	// mando_s_rarm_1
	this.instance_10 = new lib.mando_s_rarm_1_1();
	this.instance_10.setTransform(89.5,172,1,1,0,0,0,89.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({rotation:-2,x:84.2,y:175.4},14,cjs.Ease.get(1)).wait(16).to({regX:89.6,regY:30.2,rotation:0.7,x:90.3,y:172.5},10,cjs.Ease.get(1)).to({regX:89.5,regY:30.3,rotation:-2,x:84.2,y:175.4},12,cjs.Ease.get(1)).to({rotation:0,x:89.5,y:172},11,cjs.Ease.get(1)).wait(6));

	// mando_s_larm
	this.instance_11 = new lib.mando_s_larm_1();
	this.instance_11.setTransform(284.3,187.3,1,1,0,0,0,18.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({rotation:-2,x:279.4,y:184},14,cjs.Ease.get(1)).wait(16).to({rotation:0.7,x:284.8,y:190.4},10,cjs.Ease.get(1)).to({rotation:-2,x:279.4,y:184},12,cjs.Ease.get(1)).to({rotation:0,x:284.3,y:187.3},11,cjs.Ease.get(1)).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346,338.7);


(lib.earlyYears_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// early_plaque
	this.instance = new lib.early_plaque_1();
	this.instance.setTransform(116.1,433.6,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// early_head
	this.instance_1 = new lib.early_head_1();
	this.instance_1.setTransform(102.3,51.2,1,1,0,0,0,27,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:27.1,regY:55.6,rotation:3},0).to({regX:27,regY:55.4,rotation:2.8,x:97.3,y:51.6},7).to({regY:55.5,rotation:-7.8,x:101,y:51.4},7).to({regY:55.6,rotation:-7,x:108.7,y:51.2},8).to({regX:27.1,rotation:3,x:102.3},6).wait(1));

	// early_vest
	this.instance_2 = new lib.early_vest_1();
	this.instance_2.setTransform(112.5,209,1,1,0,0,0,56.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:56.6,rotation:-2,x:113,y:208.9},7).to({regX:56.5,rotation:2.5,x:112.2,y:209.2},15).to({rotation:0,x:112.5,y:209},6).wait(1));

	// early_l_arm_down
	this.instance_3 = new lib.early_l_arm_down_1();
	this.instance_3.setTransform(143.5,102.5,1,1,0,0,0,2.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-2.9,x:140.3,y:101.5},7).to({regY:18.1,rotation:1,x:147.7,y:104.2},15).to({regY:18,rotation:0,x:143.5,y:102.5},6).wait(1));

	// early_l_hand
	this.instance_4 = new lib.early_l_hand_1();
	this.instance_4.setTransform(157,234,1,1,0,0,0,10,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:1.7,x:161,y:232.7},7).to({regX:10.1,regY:-0.6,rotation:-9.8,x:160.1,y:236.6},15).to({regX:10,regY:-0.5,rotation:0,x:157,y:234},6).wait(1));

	// early_r_forearm
	this.instance_5 = new lib.early_r_forearm_1();
	this.instance_5.setTransform(33,160.5,1,1,0,0,0,12,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-5.7,x:29.8,y:162.2},7).to({regX:11.9,rotation:4.9,x:38.5,y:158.1},15).to({regX:12,rotation:0,x:33,y:160.5},6).wait(1));

	// early_r_upperarm
	this.instance_6 = new lib.early_r_upperarm_1();
	this.instance_6.setTransform(59.5,93,1,1,0,0,0,38.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:0.1,x:56,y:94.9},7).to({rotation:-0.3,x:64.2,y:91.1},15).to({rotation:0,x:59.5,y:93},6).wait(1));

	// early_r_hand
	this.instance_7 = new lib.early_r_hand_1();
	this.instance_7.setTransform(56,210.5,1,1,0,0,0,9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30));

	// early_pants
	this.instance_8 = new lib.early_pants();
	this.instance_8.setTransform(111,219,1,1,0,0,0,49,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30));

	// early_shoes
	this.instance_9 = new lib.early_shoes_1();
	this.instance_9.setTransform(113,430,1,1,0,0,0,65,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// early_platform
	this.instance_10 = new lib.early_platform_1();
	this.instance_10.setTransform(113.1,446.6,1,1,0,0,0,74,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,-4.3,166.1,466.9);


(lib.departed_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Departed_Plaque
	this.instance = new lib.Departed_Plaque_1();
	this.instance.setTransform(73.9,372.3,0.952,0.952,0,0,0,40,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// departed_head
	this.instance_1 = new lib.departed_head();
	this.instance_1.setTransform(96.5,110.5,1,1,0,0,0,80,139.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.7,x:96.6,y:110.6},8,cjs.Ease.get(1)).wait(1).to({regX:55,regY:72,x:74.8,y:42},0).wait(1).to({rotation:2.5,x:74.5,y:42.1},0).wait(1).to({rotation:2.2,x:74.2,y:42.2},0).wait(1).to({rotation:1.9,x:73.8,y:42.3},0).wait(1).to({rotation:1.6,x:73.4,y:42.4},0).wait(1).to({regX:80,regY:139.5,rotation:1.5,x:96.5,y:110.5},0).wait(1).to({regX:55,regY:72,x:73.3,y:42.4},0).wait(1).to({rotation:1.6,x:73.4,y:42.3},0).wait(1).to({rotation:1.8,x:73.6},0).wait(1).to({rotation:2,x:73.9,y:42.2},0).wait(1).to({rotation:2.3,x:74.2,y:42.1},0).wait(1).to({rotation:2.5,x:74.5,y:42},0).wait(1).to({rotation:2.7,x:74.7,y:41.9},0).wait(1).to({regX:80,regY:139.5,x:96.6,y:110.6},0).wait(1).to({regX:55,regY:72,rotation:2.6,x:74.7,y:42},0).wait(1).to({rotation:2.4,x:74.3,y:42.1},0).wait(1).to({rotation:1.9,x:73.7,y:42.3},0).wait(1).to({rotation:1.2,x:73,y:42.6},0).wait(1).to({rotation:0.6,x:72.3,y:42.8},0).wait(1).to({rotation:0.2,x:71.8,y:43},0).wait(1).to({regX:80,regY:139.5,rotation:0,x:96.5,y:110.5},0).wait(1).to({regX:32,regY:141,x:48.5,y:112},0).to({regX:31.9,regY:141.1,rotation:-2,y:112.1},7,cjs.Ease.get(1)).to({regX:32,regY:141,rotation:0,y:112},7,cjs.Ease.get(-1)).wait(16));

	// departed_pillar
	this.instance_2 = new lib.departed_pillar_1();
	this.instance_2.setTransform(70,183.3,0.952,0.952,0,0,0,61,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

	// departed_platform
	this.instance_3 = new lib.departed_platform_1();
	this.instance_3.setTransform(70,384.2,0.952,0.952,0,0,0,76,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-29,144.7,427.5);


(lib.ll_head_all_1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ll_head_all_d_1();
	this.instance.setTransform(37,44.5,1,1,0,0,0,37,44.5);
	this.instance.alpha = 0.5;

	// ll_head_all
	this.instance_1 = new lib.ll_head_all();

	// ll_eyes
	this.instance_2 = new lib.ll_eyes();
	this.instance_2.setTransform(37,45.3,1,1,0,0,0,20.5,6.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,89);


(lib.AColonel_early_years = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start_song:1,start_encore:29,hide:39,out:52,over:61,down:77,wobble_off_screen:92,wobble_on_screen:102,bounceToHalt:111});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}
	this.frame_51 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_76 = function() {
		this.stop();
	}
	this.frame_91 = function() {
		this.stop();
	}
	this.frame_101 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_110 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_151 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(28).call(this.frame_29).wait(10).call(this.frame_39).wait(11).call(this.frame_50).wait(1).call(this.frame_51).wait(9).call(this.frame_60).wait(16).call(this.frame_76).wait(15).call(this.frame_91).wait(10).call(this.frame_101).wait(9).call(this.frame_110).wait(41).call(this.frame_151).wait(1));

	// Layer 5
	this.main = new lib.earlyYears_main();
	this.main.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);

	this.encore = new lib.earlyYears_encore();
	this.encore.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.encore.alpha = 0;

	this.hide = new lib.earlyYears_hide();
	this.hide.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.hide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.main}]},1).to({state:[{t:this.encore}]},28).to({state:[{t:this.hide}]},10).to({state:[]},11).to({state:[]},99).wait(3));

	// Layer 9
	this.instance = new lib.rollover_light();
	this.instance.setTransform(110.6,-30.5,1,1,0,0,0,105.5,202);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({scaleX:0.75,y:-50.5,alpha:0},8).wait(1).to({scaleX:1,y:-30.5,alpha:0.801},4).wait(12).to({scaleX:0.88,y:-40.5,alpha:0.398},4).to({scaleX:0.75,y:-50.5,alpha:0},4).to({_off:true},1).wait(66));

	// early_plaque
	this.instance_1 = new lib.early_plaque_1();
	this.instance_1.setTransform(116.1,433.6,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(28).to({_off:false},0).wait(123));

	// early_head
	this.instance_2 = new lib.early_head_1();
	this.instance_2.setTransform(102.3,51.2,1,1,0,0,0,27,55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({regX:26.9,regY:55.6,rotation:-1.2,y:49.8},0).to({rotation:-5.8,x:102.2,y:50.2},2).to({regX:27,regY:55.5,rotation:0,x:102.3,y:51.2},6).wait(1).to({rotation:4.5,y:48.2},4).to({regX:26.9,regY:55.6,rotation:-4.7,x:102.2,y:49.8},4).to({rotation:-1.2,x:102.3},7).wait(16).to({regX:27,regY:55.5,rotation:0,y:51.2},0).to({y:52.7},4,cjs.Ease.get(1)).to({y:51.2},4,cjs.Ease.get(1)).wait(2).to({y:52.7},4,cjs.Ease.get(1)).to({y:51.2},4,cjs.Ease.get(1)).wait(1).to({regX:25.8,regY:57.8,x:101.1,y:53.5},0).to({regY:57.7,rotation:3,x:75.3,y:57.2},2).to({regY:57.8,rotation:-17.5,x:112.1,y:54.3},9,cjs.Ease.get(1)).wait(1).to({regX:26,regY:33.5,rotation:-17.3,x:104.9,y:31},0).wait(1).to({rotation:-16.6,x:104.8,y:30.9},0).wait(1).to({rotation:-15.3,y:30.7},0).wait(1).to({rotation:-13.3,x:104.6,y:30.4},0).wait(1).to({rotation:-10.7,x:104.5,y:30.1},0).wait(1).to({rotation:-7.7,x:104.2,y:29.8},0).wait(1).to({rotation:-4.4,x:104,y:29.6},0).wait(1).to({rotation:-1.3,x:103.9,y:29.5},0).wait(1).to({rotation:1.3,x:103.7,y:29.4},0).wait(1).to({rotation:3.2,x:103.6},0).wait(1).to({rotation:4.5,x:103.5},0).wait(1).to({rotation:5.2,y:29.3},0).wait(1).to({regX:25.8,regY:57.8,rotation:5.5,x:101.1,y:53.5},0).to({rotation:0},5).wait(12));

	// early_vest
	this.instance_3 = new lib.early_vest_1();
	this.instance_3.setTransform(112.5,209,1,1,0,0,0,56.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({y:207.5},0).to({y:209},8).wait(1).to({y:205.5},4).to({y:207.5},4).wait(23).to({y:209},0).to({y:209.5},4,cjs.Ease.get(1)).to({y:209},4,cjs.Ease.get(1)).wait(2).to({y:209.5},4,cjs.Ease.get(1)).to({y:209},4,cjs.Ease.get(1)).wait(1).to({rotation:-8,x:108.8,y:208.5},2).to({rotation:3,x:113.5,y:209},9,cjs.Ease.get(1)).wait(1).to({regX:48.5,regY:79.8,x:109.3,y:136},0).wait(1).to({rotation:2.9,x:109.2},0).wait(1).to({rotation:2.7,x:108.9},0).wait(1).to({rotation:2.5,x:108.5,y:136.1},0).wait(1).to({rotation:2.1,x:107.9},0).wait(1).to({rotation:1.7,x:107.3},0).wait(1).to({rotation:1.3,x:106.6,y:136.2},0).wait(1).to({rotation:0.9,x:105.9},0).wait(1).to({rotation:0.5,x:105.4},0).wait(1).to({rotation:0.3,x:105,y:136.3},0).wait(1).to({rotation:0.1,x:104.7},0).wait(1).to({rotation:0,x:104.5},0).wait(1).to({regX:56.5,regY:152.5,x:112.5,y:209},0).wait(17));

	// early_l_arm_down
	this.instance_4 = new lib.early_l_arm_down_1();
	this.instance_4.setTransform(143.5,102.5,1,1,0,0,0,2.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({rotation:1,y:101},0).to({rotation:0,y:102.5},8).wait(1).to({rotation:-5.4,y:99},4).to({rotation:-3.2,y:101},4).to({rotation:1},7).wait(16).to({rotation:0,y:102.5},0).to({y:103},4,cjs.Ease.get(1)).to({y:102.5},4,cjs.Ease.get(1)).wait(2).to({y:103},4,cjs.Ease.get(1)).to({y:102.5},4,cjs.Ease.get(1)).wait(1).to({rotation:-11.7,x:124.7,y:98.8},2).to({regY:17.9,rotation:5.5,x:150.1,y:104.2},9,cjs.Ease.get(1)).wait(1).to({regX:14.5,regY:77.5,rotation:5.4,x:156.4,y:164.6},0).wait(1).to({rotation:5.2,x:156.3},0).wait(1).to({rotation:4.9,y:164.4},0).wait(1).to({rotation:4.5,x:156.2,y:164.2},0).wait(1).to({rotation:3.9,x:156.1,y:164},0).wait(1).to({rotation:3.1,x:156,y:163.6},0).wait(1).to({rotation:2.3,x:155.9,y:163.3},0).wait(1).to({rotation:1.6,x:155.7,y:162.9},0).wait(1).to({rotation:1,y:162.6},0).wait(1).to({rotation:0.5,x:155.6,y:162.3},0).wait(1).to({rotation:0.2,x:155.5,y:162.2},0).wait(1).to({rotation:0.1,y:162.1},0).wait(1).to({regX:2.5,regY:18,rotation:0,x:143.5,y:102.5},0).wait(17));

	// early_l_hand
	this.instance_5 = new lib.early_l_hand_1();
	this.instance_5.setTransform(157,234,1,1,0,0,0,10,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({rotation:5.7,x:157.5,y:233.5},0).to({rotation:0,x:157,y:234},8).wait(1).to({rotation:5.7,x:172,y:230},4).to({regY:-0.6,rotation:-16.4,x:166,y:230.4},4).to({regY:-0.5,rotation:5.7,x:157.5,y:233.5},7).wait(16).to({rotation:0,x:157,y:234},0).wait(19).to({regX:10.1,rotation:11.6,x:166.4,y:226.6},2).to({regY:-0.6,rotation:-16.9,x:152.8,y:237.3},9,cjs.Ease.get(1)).wait(1).to({regX:9.5,regY:22.5,rotation:-16.8,x:158.9,y:259.5},0).wait(1).to({rotation:-16.2,x:158.8,y:259.4},0).wait(1).to({rotation:-15.3,x:158.7},0).wait(1).to({rotation:-13.8,x:158.5,y:259.2},0).wait(1).to({rotation:-11.9,x:158.2,y:259},0).wait(1).to({rotation:-9.7,x:157.9,y:258.7},0).wait(1).to({rotation:-7.3,x:157.5,y:258.3},0).wait(1).to({rotation:-5,x:157.2,y:257.9},0).wait(1).to({rotation:-3.1,x:156.9,y:257.6},0).wait(1).to({rotation:-1.7,x:156.7,y:257.4},0).wait(1).to({rotation:-0.7,x:156.6,y:257.2},0).wait(1).to({rotation:-0.2,x:156.5,y:257.1},0).wait(1).to({regX:10,regY:-0.5,rotation:0,x:157,y:234},0).wait(17));

	// early_r_forearm
	this.instance_6 = new lib.early_r_forearm_1();
	this.instance_6.setTransform(33,160.5,1,1,0,0,0,12,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({regY:10.1,rotation:2.2,x:35.5,y:159.1},0).to({regY:10,rotation:0,x:33,y:160.5},8).wait(1).to({regY:10.1,rotation:4,x:38,y:159.4},4).to({rotation:2.2,x:35.5,y:159.1},4).wait(23).to({regY:10,rotation:0,x:33,y:160.5},0).to({y:161},4,cjs.Ease.get(1)).to({y:160.5},4,cjs.Ease.get(1)).wait(2).to({y:161},4,cjs.Ease.get(1)).to({y:160.5},4,cjs.Ease.get(1)).wait(1).to({regY:9.9,rotation:-20,x:14.4,y:168.5},2).to({regY:10,rotation:5.7,x:40.4,y:157.8},9,cjs.Ease.get(1)).wait(1).to({regX:21.5,regY:33,rotation:5.7,x:47.5,y:181.6},0).wait(1).to({rotation:5.5,x:47.3,y:181.7},0).wait(1).to({rotation:5.2,x:47,y:181.8},0).wait(1).to({rotation:4.7,x:46.6,y:182},0).wait(1).to({rotation:4,x:46,y:182.1},0).wait(1).to({rotation:3.3,x:45.3,y:182.5},0).wait(1).to({rotation:2.5,x:44.7,y:182.7},0).wait(1).to({rotation:1.7,x:43.9,y:183},0).wait(1).to({rotation:1.1,x:43.4,y:183.2},0).wait(1).to({rotation:0.6,x:43,y:183.3},0).wait(1).to({rotation:0.2,x:42.6,y:183.4},0).wait(1).to({rotation:0.1,x:42.5,y:183.5},0).wait(1).to({regX:12,regY:10,rotation:0,x:33,y:160.5},0).wait(17));

	// early_r_upperarm
	this.instance_7 = new lib.early_r_upperarm_1();
	this.instance_7.setTransform(59.5,93,1,1,0,0,0,38.5,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(28).to({_off:false},0).wait(23).to({rotation:-2.2,y:91.5},0).to({rotation:0,y:93},8).wait(1).to({rotation:-4.4,x:59.6,y:89.5},4).to({rotation:-2.2,x:59.5,y:91.5},4).wait(23).to({rotation:0,y:93},0).to({y:93.5},4,cjs.Ease.get(1)).to({y:93},4,cjs.Ease.get(1)).wait(2).to({y:93.5},4,cjs.Ease.get(1)).to({y:93},4,cjs.Ease.get(1)).wait(1).to({regX:38.6,rotation:-0.5,x:40.2,y:101.1},2).to({regX:38.5,x:66.7,y:90.4},9,cjs.Ease.get(1)).wait(1).to({regX:25.5,regY:44,x:53.9,y:121},0).wait(1).to({rotation:-0.4,x:53.7,y:121.1},0).wait(1).to({x:53.2,y:121.2},0).wait(1).to({x:52.6,y:121.5},0).wait(1).to({rotation:-0.3,x:51.8,y:121.7},0).wait(1).to({x:50.8,y:122.1},0).wait(1).to({rotation:-0.2,x:49.7,y:122.4},0).wait(1).to({rotation:-0.1,x:48.7,y:122.8},0).wait(1).to({x:47.8,y:123.1},0).wait(1).to({rotation:0,x:47.2,y:123.3},0).wait(1).to({x:46.8,y:123.5},0).wait(1).to({x:46.6},0).wait(1).to({regX:38.5,regY:13.5,x:59.5,y:93},0).wait(17));

	// early_r_hand
	this.instance_8 = new lib.early_r_hand_1();
	this.instance_8.setTransform(56,210.5,1,1,0,0,0,9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(28).to({_off:false},0).wait(63).to({y:211},4,cjs.Ease.get(1)).to({y:210.5},4,cjs.Ease.get(1)).wait(2).to({y:211},4,cjs.Ease.get(1)).to({y:210.5},4,cjs.Ease.get(1)).wait(1).to({x:51.5},2).to({x:56},9,cjs.Ease.get(1)).wait(1).to({regX:16,regY:17.5,x:63,y:216},0).wait(12).to({regX:9,regY:12,x:56,y:210.5},0).wait(17));

	// early_pants
	this.instance_9 = new lib.early_pants();
	this.instance_9.setTransform(111,219,1,1,0,0,0,49,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(28).to({_off:false},0).wait(82).to({regX:49.1,skewX:-1.4,x:106},2).to({regX:49,skewX:0,x:111},9,cjs.Ease.get(1)).wait(1).to({regX:53,regY:110,x:115,y:313.5},0).wait(12).to({regX:49,regY:15.5,x:111,y:219},0).wait(17));

	// early_shoes
	this.instance_10 = new lib.early_shoes_1();
	this.instance_10.setTransform(113,430,1,1,0,0,0,65,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(28).to({_off:false},0).wait(94).to({regY:17.5,y:431},0).wait(12).to({regY:16.5,y:430},0).wait(17));

	// early_platform
	this.instance_11 = new lib.early_platform_1();
	this.instance_11.setTransform(113.1,446.6,1,1,0,0,0,74,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(28).to({_off:false},0).wait(123));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,-4.3,166.1,466.9);


(lib.AColonel_departed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"start_encore":10,"hide":20,"out":31,"over":38,"down":57,"wobble_off_screen":66,"wobble_on_screen":83,"bounceToHalt":100});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		this.stop();
	}
	this.frame_56 = function() {
		this.stop();
	}
	this.frame_65 = function() {
		this.stop();
	}
	this.frame_82 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_99 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_125 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(10).call(this.frame_20).wait(10).call(this.frame_30).wait(7).call(this.frame_37).wait(19).call(this.frame_56).wait(9).call(this.frame_65).wait(17).call(this.frame_82).wait(17).call(this.frame_99).wait(26).call(this.frame_125).wait(1));

	// MOVIECLIPS
	this.main = new lib.departed_main();
	this.main.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);

	this.encore = new lib.departed_encore();
	this.encore.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.encore.alpha = 0;

	this.hide = new lib.departed_hide();
	this.hide.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.hide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.main}]},1).to({state:[{t:this.encore}]},9).to({state:[{t:this.hide}]},10).to({state:[]},11).wait(95));

	// Departed_Plaque
	this.instance = new lib.rollover_light();
	this.instance.setTransform(70.6,-94.5,1,1,0,0,0,105.5,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({scaleX:0.75,y:-114.5,alpha:0},6).wait(1).to({scaleX:1,y:-94.5,alpha:0.801},4).wait(16).to({scaleX:0.75,y:-114.5,alpha:0},6).to({_off:true},1).wait(61));

	// Departed_Plaque
	this.instance_1 = new lib.Departed_Plaque_1();
	this.instance_1.setTransform(73.9,372.3,0.952,0.952,0,0,0,40,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(9).to({_off:false},0).wait(116));

	// departed_mo
	this.instance_2 = new lib.departed_head();
	this.instance_2.setTransform(92,112,1,1,0,0,0,75.5,141);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(9).to({_off:false},0).wait(28).to({regX:28,regY:142,x:44.5,y:113},0).to({regX:27.9,rotation:-2.5,x:45.4},3).to({x:45.9},3).wait(1).to({regX:75.5,regY:141,rotation:0,x:94,y:112},0).to({rotation:3.7,x:91,y:110},5).to({rotation:0,x:92,y:112},4).wait(12).to({regX:28,regY:142,x:44.5,y:113},0).to({regX:27.9,rotation:-2.5,x:44.9},3).to({x:45.9},3).wait(1).to({regX:75.5,regY:141,rotation:0,x:94,y:112},0).to({rotation:3.7,x:91,y:110},5).to({rotation:0,x:92,y:112},4).wait(1).to({regX:28,regY:142,x:44.5,y:113},0).to({regX:27.9,rotation:-2.5,x:44.9},3).wait(4).to({regX:75.5,regY:141,rotation:0,x:93,y:112},0).to({rotation:3.7,x:91,y:109},5).to({rotation:0,x:92,y:112},4).wait(1).to({regX:29.5,regY:140.5,rotation:-10.2,x:26.6,y:110.5},0).to({x:41.6,y:111.5},4).to({rotation:0,x:46,y:111},3).wait(1).to({regX:75.5,regY:141,x:92,y:112},0).to({rotation:9.7,y:110},5).wait(2).to({rotation:0,y:112},6).wait(5));

	// departed_pillar
	this.instance_3 = new lib.departed_pillar_1();
	this.instance_3.setTransform(70,183.3,0.952,0.952,0,0,0,61,211);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(9).to({_off:false},0).wait(28).to({rotation:-0.7,x:67.6,y:182.7},0).to({rotation:0,x:70,y:183.3},3).to({rotation:0.3,x:71.1,y:183},4).to({rotation:0,x:70,y:183.3},5).wait(16).to({rotation:-0.7,x:67.6,y:182.7},0).to({rotation:0,x:70,y:183.3},3).to({rotation:0.3,x:71.1,y:183},4).to({rotation:0,x:70,y:183.3},5).to({rotation:-0.7,x:67.6,y:182.7},4).wait(1).to({rotation:0,x:70,y:183.3},3).to({rotation:0.3,x:71.1,y:183},4).to({rotation:0,x:70,y:183.3},5).to({rotation:-0.7,x:67.6,y:182.7},4).wait(1).to({rotation:-2.7,x:60.6,y:180.9},0).to({rotation:0,x:70,y:183.3},4).wait(1).to({rotation:0.7,x:72.5,y:182.6},0).to({rotation:0,x:70,y:183.3},2).wait(19));

	// departed_platform
	this.instance_4 = new lib.departed_platform_1();
	this.instance_4.setTransform(70,384.2,0.952,0.952,0,0,0,76,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(9).to({_off:false},0).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,-29,144.7,427.5);


(lib.ABucket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show:1,"hide":136});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_37 = function() {
		window.project_colonel_archive_canvas.slideBucket(this,'up')
	}
	this.frame_64 = function() {
		window.project_colonel_archive_canvas.isLifting();
		window.project_colonel_archive_canvas.openCurtains();
	}
	this.frame_135 = function() {
		this.stop();
		window.project_colonel_archive_canvas.showBackButton();
	}
	this.frame_145 = function() {
		window.project_colonel_archive_canvas.slideBucket(this,'down') ;
	}
	this.frame_189 = function() {
		window.project_colonel_archive_canvas.bucketHitsFloor();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(37).call(this.frame_37).wait(27).call(this.frame_64).wait(71).call(this.frame_135).wait(10).call(this.frame_145).wait(44).call(this.frame_189).wait(1));

	// mc_back_to_hall_hitarea
	this.mc_back_to_hall_hitarea = new lib.back_to_hall_area_button();
	this.mc_back_to_hall_hitarea.setTransform(700,378,1,1,0,0,0,700,378);

	this.timeline.addTween(cjs.Tween.get(this.mc_back_to_hall_hitarea).wait(190));

	// bucketMain
	this.instance = new lib.madolin_bucketMain();
	this.instance.setTransform(699.5,374.5,1,1,0,0,0,311.5,320.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37).to({scaleY:1,x:699.4,y:346.1},9,cjs.Ease.get(-1)).to({regX:311.6,regY:320.4,scaleY:0.95,rotation:-2.2,x:697.6,y:-283.6},26,cjs.Ease.get(-1)).to({_off:true},1).wait(72).to({_off:false,regY:320.5,scaleY:1,rotation:4.7,x:577.3,y:-313.8},0).to({regY:320.4,rotation:-0.2,x:789.2,y:-136.3},11).to({scaleX:1,scaleY:1,rotation:4.7,x:723.7,y:78.9},10).to({regX:311.5,regY:320.5,rotation:6,x:725.8,y:235.1},8).to({scaleX:1,scaleY:1,rotation:6.5,x:738,y:339.6},3).wait(1).to({rotation:0.3,x:702,y:372.3},10,cjs.Ease.get(1)).to({rotation:0,x:699.5,y:374.5},1).wait(1));

	// bucketChicken
	this.instance_1 = new lib.mando_s_bucketChicken();
	this.instance_1.setTransform(700,100.5,1,1,0,0,0,272,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37).to({x:700.1,y:78.9},9,cjs.Ease.get(-1)).to({x:702,y:-399.6},26,cjs.Ease.get(-1)).to({_off:true},1).wait(72).to({_off:false,rotation:4.7,x:600.2,y:-586.8},0).to({regX:271.9,rotation:-0.2,x:789.1,y:-410.3},11).to({scaleX:1,scaleY:1,rotation:4.7,x:747.5,y:-193.8},10).to({regX:272,rotation:6,x:755.9,y:2.7},8).to({regX:272.1,scaleX:1,scaleY:1,rotation:6.5,x:769.4,y:73.5},3).wait(1).to({rotation:0.3,x:704.4,y:98.5},10,cjs.Ease.get(1)).to({regX:272,rotation:0,x:700,y:100.5},1).wait(1));

	// backCurtain
	this.instance_2 = new lib.backCurtain_mando();
	this.instance_2.setTransform(764,314,1,1,0,0,0,764,314);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({y:291.2},0).to({y:282.1},4,cjs.Ease.get(-0.56)).to({regY:313.9,scaleX:1,skewY:0.8,y:109.7},13,cjs.Ease.get(-0.56)).to({skewY:1.8,y:-62.6},11,cjs.Ease.get(-0.56)).to({skewY:2.5,x:764.1,y:-213.3},9,cjs.Ease.get(-0.56)).to({regY:314,scaleX:1,skewY:3.6,x:764,y:-364.1},10).to({_off:true},1).wait(33).to({_off:false,scaleX:1,skewY:0,y:-306},0).to({y:-228.7},4,cjs.Ease.get(-1)).to({y:-80.7},6).to({y:116.7},9).to({y:314},7).wait(19));

	// Layer 4
	this.instance_3 = new lib.curtain_shad_1();
	this.instance_3.setTransform(698.1,436.1,1,0.646,0,0,0,698.1,316.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(92).to({regY:316,scaleY:0.67,y:378},0).to({regY:316.1,scaleY:0.84,y:239.4,alpha:0.609},16).to({scaleY:1,y:56.1,alpha:0},25).to({_off:true},1).wait(3).to({_off:false,scaleY:0.77,y:240.1},0).to({regY:315.9,scaleY:0.88,y:234.2,alpha:1},6).to({regY:316,scaleY:0.86,y:298.9},6).to({regY:316.1,scaleY:0.65,y:436.1},10).wait(31));

	// mandolinBG.jpg
	this.instance_4 = new lib.mandolinBG();
	this.instance_4.setTransform(8,0);

	this.instance_5 = new lib.mandoBG();
	this.instance_5.setTransform(699,292,1,1,0,0,0,691,292);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},37).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.6,1403.5,770);


(lib._8bitbod_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._8bit_bodG();
	this.instance.setTransform(84.5,221.5,1,1,0,0,0,84.5,221.5);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,169,443);


(lib.mando_s_upperBod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"loop":60,end:94});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.gotoAndPlay("loop");
	}
	this.frame_131 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(93).call(this.frame_93).wait(38).call(this.frame_131).wait(1));

	// mando_s_l_forearm
	this.instance = new lib.mando_s_l_forearm_1();
	this.instance.setTransform(28.3,134.2,1,1,0,0,0,28.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(57).to({regX:28.2,rotation:-15,x:27,y:132.6},3).to({regX:28.3,rotation:0,x:28.3,y:134.2},3).to({rotation:2.2,x:28.1},3).to({regX:28.2,rotation:-15,x:27,y:132.6},4).to({regX:28.3,rotation:0,x:28.3,y:134.2},3).to({y:135.2},4).to({regX:28.2,rotation:-15,x:27,y:132.6},3).to({regX:28.3,rotation:0,x:28.3,y:134.2},3).to({y:135.7},3).to({rotation:-4,x:28.2,y:133.7},2).to({regX:28.2,rotation:-1,x:26.7,y:134.8},3).to({rotation:-15,x:27,y:132.6},2).wait(1).to({regX:28.3,rotation:0,x:28.3,y:134.2},0).to({rotation:19.9,x:32.3},4).to({rotation:-19.5,x:26.5,y:131.6},13).to({rotation:0,x:28.3,y:134.2},13,cjs.Ease.get(1)).wait(8));

	// mando_s_r_hand
	this.instance_1 = new lib.mando_s_r_hand_1();
	this.instance_1.setTransform(103.6,138.8,1,1,0,0,0,13.6,34);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({regY:33.9,rotation:-15,x:100.9,y:117.5},3).to({regY:34,rotation:-4.5,x:107.1,y:141.8},3).to({regX:13.5,regY:33.9,scaleX:1,rotation:0,skewX:14.8,skewY:18.7,x:103.1,y:144.2},3).to({regX:13.6,regY:34,scaleX:1,rotation:-2.6,skewX:0,skewY:0,x:100.9,y:117.5},4).to({rotation:-9.9,x:106.9,y:143.8},3).to({regX:13.5,regY:33.9,scaleX:1,rotation:0,skewX:15,skewY:18.8,x:103.6,y:139.8},4).to({scaleX:1,rotation:-0.8,skewX:0,skewY:0,x:100.9,y:120},3).to({regX:13.6,regY:34,rotation:-10.7,x:106.1,y:144.3},3).to({regX:13.5,regY:33.9,scaleX:1,rotation:0,skewX:15,skewY:18.8,x:103.6,y:140.3},3).to({regX:13.6,regY:34,scaleX:1,rotation:-4,skewX:0,skewY:0,y:133},2).to({regX:13.5,regY:33.9,scaleX:1,rotation:0,skewX:14,skewY:17.8,x:102.1,y:138.1},3).to({regX:13.6,scaleX:1,rotation:-15,skewX:0,skewY:0,x:100.9,y:117.5},2).wait(1).to({regY:34,rotation:0,x:103.6,y:138.8},0).to({rotation:-0.8,x:102.6,y:174.2},4).to({rotation:-4.5,x:98.9,y:110.9},13).to({rotation:0,x:103.6,y:138.8},13,cjs.Ease.get(1)).wait(8));

	// mando_s_l_cuff
	this.instance_2 = new lib.mando_s_l_cuff_2();
	this.instance_2.setTransform(103.2,147.3,1,1,0,0,0,-1.8,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(57).to({rotation:-15,x:102.7,y:125.8},3).to({rotation:0,x:103.2,y:147.3},3).to({regY:37.6,rotation:2.2,x:102.4,y:150.3},3).to({regY:37.5,rotation:-15,x:102.7,y:125.8},4).to({rotation:0,x:103.2,y:147.3},3).to({y:148.3},4).to({rotation:-15,x:102.7,y:125.8},3).to({rotation:0,x:103.2,y:147.3},3).to({y:148.8},3).to({rotation:-4,x:103.8,y:141.5},2).to({rotation:-1,x:101.9,y:146.6},3).to({rotation:-15,x:102.7,y:125.8},2).wait(1).to({rotation:0,x:103.2,y:147.3},0).to({rotation:19.9,x:98.2,y:172.1},4).to({regY:37.6,rotation:-19.5,x:101.5,y:119.1},13).to({regY:37.5,rotation:0,x:103.2,y:147.3},13,cjs.Ease.get(1)).wait(8));

	// mando_s_r_forearm
	this.instance_3 = new lib.mando_s_r_forearm_1();
	this.instance_3.setTransform(302.3,189.9,1,1,0,0,0,78.3,105.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},57).wait(37).to({_off:false},0).to({rotation:-9.2,x:298.5,y:186.6},4).to({rotation:3.5,x:302.4,y:190.3},13).to({rotation:0,x:302.3,y:189.9},13).wait(8));

	// mando_s_Leftarm_move
	this.instance_4 = new lib.mando_s_Leftarm_move();
	this.instance_4.setTransform(254,135.3,1,1,0,0,0,60,79.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(57).to({_off:false},0).to({_off:true},37).wait(38));

	// mando_s_left_hand
	this.instance_5 = new lib.mando_s_left_hand_3("single",0);
	this.instance_5.setTransform(256.9,115.7,1,1,0,0,0,62.9,59.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},57).wait(37).to({_off:false},0).to({rotation:0.8,x:240.3,y:128.6},4).to({rotation:-5.3,x:261.6,y:113.5},13).to({rotation:0,x:256.9,y:115.7},13).wait(8));

	// mando_s_l_cuff_1
	this.instance_6 = new lib.mando_s_l_cuff_1_1();
	this.instance_6.setTransform(251.6,123.7,1,1,0,0,0,27.6,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},57).wait(37).to({_off:false},0).to({regX:27.7,rotation:-9.2,x:238,y:129.4},4).to({regX:27.6,rotation:3.5,x:255.8,y:121.1},13).to({rotation:0,x:251.6,y:123.7},13).wait(8));

	// mando_s_mandolin
	this.instance_7 = new lib.mando_s_mandolin_1();
	this.instance_7.setTransform(165.5,108.2,1,1,0,0,0,93.5,106.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(57).to({y:108.7},0).to({y:108.2},3).wait(5).to({y:108.7},0).to({y:108.2},3).wait(6).to({y:108.7},0).to({y:108.2},3).wait(6).to({y:108.7},0).to({y:108.2},3).wait(3).to({y:108.7},0).to({y:108.2},3).wait(40));

	// mando_s_tie
	this.instance_8 = new lib.mando_s_tie_1();
	this.instance_8.setTransform(179.5,50.2,1,1,0,0,0,34.5,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(57).to({scaleX:1,skewY:-3.1},17).to({scaleX:1,skewY:0},19).wait(39));

	// mando_s_jacketfront_top
	this.instance_9 = new lib.mando_s_jacketfront_top_1();
	this.instance_9.setTransform(201.9,131.7,1,1,0,0,0,63.9,115.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(132));

	// mando_s_jacketback_top
	this.instance_10 = new lib.mando_s_jacketback_top_1();
	this.instance_10.setTransform(141.7,125.3,1,1,0,0,0,70.7,109.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(132));

	// mando_s_rarm_1
	this.instance_11 = new lib.mando_s_rarm_1_1();
	this.instance_11.setTransform(89.5,72.1,1,1,0,0,0,89.5,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(57).to({scaleY:0.97,skewX:-2.4,y:71.3},3).to({scaleY:1,skewX:0,y:72.1},3).to({skewY:-0.8},3).to({scaleY:0.97,skewX:-2.4,skewY:0,y:71.3},4).to({scaleY:1,skewX:0,y:72.1},3).to({regX:89.6,scaleY:1,skewX:-1.3,skewY:-1,x:89.6,y:72.2},4).to({regX:89.5,scaleY:0.97,skewX:-2.4,skewY:0,x:89.5,y:71.3},3).to({scaleY:1,skewX:0,y:72.1},3).to({regY:30.2,scaleY:1.02,skewY:-1.1,y:72},3).to({regY:30.3,scaleY:0.97,skewX:-2.4,skewY:0,y:71.3},2).to({scaleY:1,skewX:0,y:72.1},3).to({scaleY:0.97,skewX:-2.4,y:71.3},2).wait(1).to({scaleY:1,skewX:0,y:72.1},0).wait(38));

	// mando_s_larm
	this.instance_12 = new lib.mando_s_larm_1();
	this.instance_12.setTransform(284.3,87.4,1,1,0,0,0,18.3,21.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(94).to({rotation:6.2},4).to({rotation:0},13).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,346,238.8);


(lib.looseLips_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(136,486.7,0.499,0.499,0,0,0,75.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// ll_head_all
	this.instance_1 = new lib.ll_head_all_1();
	this.instance_1.setTransform(118,73,1,1,3.5,0,0,37,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.3,x:113.2,y:73.4},8).to({rotation:-3.4,x:117.3,y:73.2},5).to({rotation:-2,x:123,y:72.8},7).to({rotation:3.5,x:118,y:73},9).wait(1));

	// ll_r_arm_all
	this.instance_2 = new lib.ll_r_arm_all_1();
	this.instance_2.setTransform(208.5,144.7,0.97,1,0,0,0,68.3,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-1.4,x:205.5,y:142.8},8).to({rotation:1.4,x:211.7,y:146.7},12).to({rotation:0,x:208.5,y:144.7},9).wait(1));

	// ll_tie_all
	this.instance_3 = new lib.ll_tie_all_1();
	this.instance_3.setTransform(120.5,95,1,1,0,0,0,21.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-1.4,x:116.2,y:95.3},8).to({rotation:1.4,x:124.9,y:94.9},12).to({rotation:0,x:120.5,y:95},9).wait(1));

	// ll_torso
	this.instance_4 = new lib.ll_torso_1();
	this.instance_4.setTransform(126.5,251,1,1,0,0,0,94.5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1.4,x:126.2,y:251.2},8).to({rotation:1.4,x:127,y:251},12).to({rotation:0,x:126.5},9).wait(1));

	// ll_l_forearm
	this.instance_5 = new lib.ll_l_forearm_1();
	this.instance_5.setTransform(43.5,193.5,1,1,0,0,0,19.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-1.4,x:41.8,y:195.8},8).to({rotation:1.4,x:45.5,y:191.4},12).to({rotation:0,x:43.5,y:193.5},9).wait(1));

	// ll_l_hand_all
	this.instance_6 = new lib.ll_l_hand_all_1();
	this.instance_6.setTransform(43,264.5,1,1,0,0,0,16,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30));

	// ll_l_arm
	this.instance_7 = new lib.ll_l_arm_1();
	this.instance_7.setTransform(61,124,1,1,0,0,0,36,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-1.4,x:57.5,y:125.8},8).to({rotation:1.4,x:64.7,y:122.4},12).to({rotation:0,x:61,y:124},9).wait(1));

	// ll_torso_shadow
	this.instance_8 = new lib.ll_torso_shadow_1();
	this.instance_8.setTransform(132.5,291,1,1,0,0,0,60.5,17);
	this.instance_8.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:-1.4,x:133.3},8).to({rotation:1.4,x:132,y:291.1},12).to({rotation:0,x:132.5,y:291},9).wait(1));

	// ll_legs
	this.instance_9 = new lib.ll_legs_1();
	this.instance_9.setTransform(140.5,381.5,1,1,0,0,0,65.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// ll_plinth
	this.instance_10 = new lib.ll_plinth_2();
	this.instance_10.setTransform(130.5,495.5,1,1,0,0,0,82.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

	// ll_s_shadow_colonelz
	this.instance_11 = new lib.ll_s_shadow_colonelz_1();
	this.instance_11.setTransform(115.3,257.9,0.659,0.658,0,0,0,175,386.1);
	this.instance_11.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.9,230.5,515.6);


(lib.ll_broken_song = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// ll_s_plaque_type_1
	this.instance = new lib.ll_s_plaque_type_1_1();
	this.instance.setTransform(136,485.2,0.499,0.499,0,0,0,75.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// ll_sign
	this.instance_1 = new lib.ll_sign();
	this.instance_1.setTransform(126.2,328,1,1,0,0,0,55.4,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

	// ll_head_all
	this.instance_2 = new lib.ll_head_all_1();
	this.instance_2.setTransform(132.2,77,1,1,4,0,0,38.6,74.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:0.5,x:119.5,y:77.2},4,cjs.Ease.get(-1)).to({rotation:-7.7},5,cjs.Ease.get(0.39)).to({rotation:-9.2,x:132.2,y:77},5,cjs.Ease.get(-1)).to({rotation:13.5,x:129.1,y:77.1},4,cjs.Ease.get(-1)).to({rotation:-7.7,x:129},5).to({rotation:4,x:132.2,y:77},6).wait(1));

	// ll_r_arm_all
	this.instance_3 = new lib.ll_r_arm_all_1();
	this.instance_3.setTransform(193.6,133.6,0.97,1,4,0,0,34.5,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:0.5,x:184.2,y:129.9},4,cjs.Ease.get(-1)).wait(5).to({rotation:4,x:193.6,y:133.6},5,cjs.Ease.get(-1)).to({regX:34.6,rotation:3,x:191.3,y:132.6},4,cjs.Ease.get(-1)).wait(5).to({regX:34.5,rotation:4,x:193.6,y:133.6},6).wait(1));

	// ll_tie_all
	this.instance_4 = new lib.ll_tie_all_1();
	this.instance_4.setTransform(133.3,111.2,1,1,4,0,0,24.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:24,rotation:0.5,x:122.6},4,cjs.Ease.get(-1)).wait(5).to({regX:24.1,rotation:4,x:133.3},5,cjs.Ease.get(-1)).to({regX:24,regY:20.4,rotation:3,x:130.5,y:111},4,cjs.Ease.get(-1)).wait(5).to({regX:24.1,regY:20.5,rotation:4,x:133.3,y:111.2},6).wait(1));

	// ll_torso
	this.instance_5 = new lib.ll_torso_1();
	this.instance_5.setTransform(127.6,263.5,1,1,4,0,0,96,198.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:0.5,x:126.3,y:263.6},4,cjs.Ease.get(-1)).wait(5).to({rotation:4,x:127.6,y:263.5},5,cjs.Ease.get(-1)).to({rotation:3,x:127.3,y:263.6},4,cjs.Ease.get(-1)).wait(5).to({rotation:4,x:127.6,y:263.5},6).wait(1));

	// ll_l_forearm
	this.instance_6 = new lib.ll_l_forearm_1();
	this.instance_6.setTransform(47.5,181.3,1,1,4,0,0,18.4,8.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:18.3,rotation:4.7,x:36.5,y:184.8},4,cjs.Ease.get(-1)).wait(5).to({regX:18.4,rotation:4,x:47.5,y:181.3},5,cjs.Ease.get(-1)).to({x:44.8,y:182.2},4,cjs.Ease.get(-1)).wait(5).to({x:47.5,y:181.3},6).wait(1));

	// ll_l_hand_all
	this.instance_7 = new lib.ll_l_hand_all_1();
	this.instance_7.setTransform(40.6,262.5,1,1,2.7,0,0,13.6,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:17.1,rotation:-0.2,x:28.6,y:261.6},4,cjs.Ease.get(-1)).to({rotation:-0.2},5,cjs.Ease.get(0.39)).to({regY:17,rotation:2.7,x:40.6,y:262.5},5,cjs.Ease.get(-1)).to({regY:17.1,rotation:2,x:37.6,y:262.4},4,cjs.Ease.get(-1)).wait(5).to({regY:17,rotation:2.7,x:40.6,y:262.5},6).wait(1));

	// ll_l_arm
	this.instance_8 = new lib.ll_l_arm_1();
	this.instance_8.setTransform(71.9,109.7,1,1,4,0,0,36.7,20.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({rotation:4.7,x:61.8,y:113.6},4,cjs.Ease.get(-1)).wait(5).to({rotation:4,x:71.9,y:109.7},5,cjs.Ease.get(-1)).to({regY:20.2,x:69.3,y:110.6},4,cjs.Ease.get(-1)).wait(5).to({regY:20.3,x:71.9,y:109.7},6).wait(1));

	// ll_torso_shadow
	this.instance_9 = new lib.ll_torso_shadow_1();
	this.instance_9.setTransform(130.2,290.9,1,1,4,0,0,60.5,17);
	this.instance_9.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regY:16.9,rotation:0.5,x:130.5,y:290.7},4,cjs.Ease.get(-1)).wait(5).to({regY:17,rotation:4,x:130.2,y:290.9},5,cjs.Ease.get(-1)).to({rotation:3,x:130.3,y:290.8},4,cjs.Ease.get(-1)).wait(5).to({rotation:4,x:130.2,y:290.9},6).wait(1));

	// ll_legs
	this.instance_10 = new lib.ll_legs_1();
	this.instance_10.setTransform(140.5,380,1,1,0,0,0,65.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

	// ll_plinth
	this.instance_11 = new lib.ll_plinth_2();
	this.instance_11.setTransform(130.5,494,1,1,0,0,0,82.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

	// ll_s_shadow_colonelz
	this.instance_12 = new lib.ll_s_shadow_colonelz_1();
	this.instance_12.setTransform(115.3,256.4,0.659,0.658,0,0,0,175,386.1);
	this.instance_12.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,246,515);


(lib.gunFight_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"loop":0});

	// timeline functions:
	this.frame_29 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// gunFightPlaque
	this.instance = new lib.gunFightPlaque();
	this.instance.setTransform(140.3,469.7,1,1,0,0,0,57,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// gunfight_head_main
	this.instance_1 = new lib.gunfight_head_main();
	this.instance_1.setTransform(109.3,63.1,1.02,1.02,2.5,0,0,24.6,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2.3,y:61.5},5,cjs.Ease.get(1)).to({y:61.8},4,cjs.Ease.get(1)).wait(5).to({rotation:2.5,y:64.6},5).to({rotation:2.3,y:63.8},5).to({rotation:2.5,y:63.1},5).wait(1));

	// shared_gunfight_torso
	this.instance_2 = new lib.shared_gunfight_torso_1();
	this.instance_2.setTransform(110.7,197.9,1,1,0,0,0,48.9,136.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:1.02},5,cjs.Ease.get(1)).to({scaleY:1.01,y:198},4,cjs.Ease.get(1)).wait(5).to({scaleY:0.99,y:197.9},5).to({regY:136,scaleY:0.99,y:197.8},5).to({regY:136.1,scaleY:1,y:197.9},5).wait(1));

	// shared_gunfight_leftupper_arm
	this.instance_3 = new lib.shared_gunfight_leftupper_arm_1();
	this.instance_3.setTransform(167.5,105.4,1,1,0,0,0,3.7,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:168.5,y:103.9},5,cjs.Ease.get(1)).to({regX:3.8,regY:22.5,rotation:-7,x:169.1,y:104.2},4,cjs.Ease.get(1)).wait(5).to({regX:3.7,regY:22.6,rotation:-3.2,x:167.7,y:107.1},5).to({rotation:-1.5,x:167.6,y:106.2},5).to({rotation:0,x:167.5,y:105.4},5).wait(1));

	// shared_gunfight_left_hand
	this.instance_4 = new lib.shared_gunfight_left_hand_1();
	this.instance_4.setTransform(196.2,220.9,1,1,0,0,0,21.4,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:197.2,y:219.4},5,cjs.Ease.get(1)).to({rotation:11.2,x:200.2,y:218.1},4,cjs.Ease.get(1)).wait(5).to({rotation:-3.2,x:202.8,y:220.8},5).to({rotation:-7.2,x:199.5,y:220.9},5).to({rotation:0,x:196.2},5).wait(1));

	// shared_gunfight_left_forearm
	this.instance_5 = new lib.shared_gunfight_left_forearm_1();
	this.instance_5.setTransform(184,161,1,1,0,0,0,10.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:185,y:159.5},5,cjs.Ease.get(1)).to({regY:2.1,rotation:4,x:192.2,y:157.5},4,cjs.Ease.get(1)).wait(5).to({regY:2.3,rotation:-3.2,x:187.3,y:161.8},5).to({regY:2.2,rotation:-1.5,x:185.7,y:161.4},5).to({rotation:0,x:184,y:161},5).wait(1));

	// shared_gunfight_right_upper_arm
	this.instance_6 = new lib.shared_gunfight_right_upper_arm_1();
	this.instance_6.setTransform(66.4,102.4,1,1,0,0,0,35.6,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:65.9,y:100.4},5,cjs.Ease.get(1)).to({regY:18.7,rotation:9.1,x:66.5,y:100.8},4,cjs.Ease.get(1)).wait(5).to({rotation:4.7,x:66.6,y:104.1},5).to({rotation:2.3,x:66.4,y:103.3},5).to({regY:18.6,rotation:0,y:102.4},5).wait(1));

	// shared_gunfight_right_hand
	this.instance_7 = new lib.shared_gunfight_right_hand_1();
	this.instance_7.setTransform(29.4,221.8,1,1,0,0,0,8.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:28.9,y:219.8},5,cjs.Ease.get(1)).to({regX:8.4,rotation:-10.6,x:23.4,y:217.4},4,cjs.Ease.get(1)).wait(5).to({regX:8.5,rotation:4.7,x:19.8,y:220},5).to({rotation:8.5,x:24.7,y:220.9},5).to({regX:8.6,rotation:0,x:29.4,y:221.8},5).wait(1));

	// shared_gunfight_right_forearm
	this.instance_8 = new lib.shared_gunfight_right_forearm_1();
	this.instance_8.setTransform(48.6,163.1,1,1,0,0,0,27.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({x:48.1,y:161.1},5,cjs.Ease.get(1)).to({regX:27.9,regY:6.2,rotation:-3.3,x:39.4,y:157.7},4,cjs.Ease.get(1)).wait(5).to({regX:27.8,regY:6.3,rotation:4.7,x:43.9,y:163.1},5).to({rotation:2.3,x:46.2},5).to({rotation:0,x:48.6},5).wait(1));

	// shared_gunfight_pants
	this.instance_9 = new lib.shared_gunfight_pants_1();
	this.instance_9.setTransform(112.4,206.2,1,1,0,0,0,58.6,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30));

	// shared_gunfight_shoes
	this.instance_10 = new lib.shared_gunfight_shoes_1();
	this.instance_10.setTransform(122.3,450.8,1,1,0,0,0,71.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30));

	// gunfight_platform
	this.instance_11 = new lib.gunfight_platform_1();
	this.instance_11.setTransform(120.1,485.6,1,1,0,0,0,78.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.8,4.1,189,498.6);


(lib.games_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 8bit_plaque
	this.instance = new lib._8bit_plaque_1();
	this.instance.setTransform(92,471,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 8bit_part9
	this.instance_1 = new lib._8bit_part9_2();
	this.instance_1.setTransform(84.5,56.5,1,1,0,0,0,50.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({x:82.5},0).wait(15).to({x:86.5},0).wait(6).to({x:84.5},0).wait(1));

	// 8bit_part8
	this.instance_2 = new lib._8bit_part8_2();
	this.instance_2.setTransform(69,243.5,1,1,0,0,0,66,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:67},0).wait(14).to({x:71},0).wait(7).to({x:69},0).wait(1));

	// 8bit_part7
	this.instance_3 = new lib._8bit_part7_2();
	this.instance_3.setTransform(84.5,175.5,1,1,0,0,0,84.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({x:82.5},0).wait(14).to({x:86.5},0).wait(7).to({x:84.5},0).wait(1));

	// 8bit_part6
	this.instance_4 = new lib._8bit_part6_1();
	this.instance_4.setTransform(74.5,359.5,1,1,0,0,0,55.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({x:72.5},0).wait(14).to({x:76.5},0).wait(6).to({x:74.5},0).wait(1));

	// 8bit_part5
	this.instance_5 = new lib._8bit_part5_2();
	this.instance_5.setTransform(79,349.5,1,1,0,0,0,51,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({x:77},0).wait(15).to({x:81},0).wait(6).to({x:79},0).wait(1));

	// 8bit_part5_1
	this.instance_6 = new lib._8bit_part5_1_1();
	this.instance_6.setTransform(84.5,355.5,1,1,0,0,0,52.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({x:82.5},0).wait(14).to({x:86.5},0).wait(7).to({x:84.5},0).wait(1));

	// 8bit_part4
	this.instance_7 = new lib._8bit_part4_1();
	this.instance_7.setTransform(76.5,410.5,1,1,0,0,0,42.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(8).to({x:74.5},0).wait(14).to({x:78.5},0).wait(7).to({x:76.5},0).wait(1));

	// 8bit_part3
	this.instance_8 = new lib._8bit_part3_1();
	this.instance_8.setTransform(87.5,70.5,1,1,0,0,0,49.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({x:85.5},0).wait(14).to({x:89.5},0).wait(7).to({x:87.5},0).wait(1));

	// 8bit_part2
	this.instance_9 = new lib._8bit_part2_1();
	this.instance_9.setTransform(80.5,31,1,1,0,0,0,46.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({x:78.5},0).wait(15).to({x:82.5},0).wait(7).to({x:80.5},0).wait(1));

	// 8bit_part1
	this.instance_10 = new lib._8bit_part1_1();
	this.instance_10.setTransform(86.5,209.5,1,1,0,0,0,86.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({x:84.5},0).wait(15).to({x:88.5},0).wait(8).to({x:86.5},0).wait(1));

	// 8bitbod
	this.instance_11 = new lib._8bitbod_1();
	this.instance_11.setTransform(84.5,275.5,1,1,0,0,0,84.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30));

	// 8bit_stand
	this.instance_12 = new lib._8bit_stand_1();
	this.instance_12.setTransform(83.5,480.5,1,1,0,0,0,78.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,173,490);


(lib.AColonel_mandolin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{move_forward:1,intro:69,"start_song":106,start_tuning:1101,"start_encore":1111,end_song:1126,"hide":1136});

	// timeline functions:
	this.frame_0 = function() {
		this.mando_move.gotoAndPlay("start");
		this.stop();
	}
	this.frame_1 = function() {
		window.project_colonel_archive_canvas.movingColonelToFront('AColonel_mandolin');
	}
	this.frame_53 = function() {
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_mandolin');
	}
	this.frame_68 = function() {
		this.stop();
		this.dispatchEvent('move_forward_complete');
	}
	this.frame_105 = function() {
		this.stop();
		this.dispatchEvent('intro_complete');
	}
	this.frame_1100 = function() {
		this.stop();
		this.dispatchEvent('mainComplete');
	}
	this.frame_1110 = function() {
		this.stop();
		this.dispatchEvent('encoreComplete');
	}
	this.frame_1125 = function() {
		this.stop();
		this.dispatchEvent('encoreComplete');
	}
	this.frame_1136 = function() {
		this.mando_move.gotoAndPlay("loop");
		window.project_colonel_archive_canvas.movingColonelToBack(this,'AColonel_mandolin');
	}
	this.frame_1183 = function() {
		window.project_colonel_archive_canvas.stoppedOffScreen(this, 'AColonel_mandolin');
	}
	this.frame_1186 = function() {
		this.dispatchEvent('hideComplete');
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(52).call(this.frame_53).wait(15).call(this.frame_68).wait(37).call(this.frame_105).wait(995).call(this.frame_1100).wait(10).call(this.frame_1110).wait(15).call(this.frame_1125).wait(11).call(this.frame_1136).wait(47).call(this.frame_1183).wait(3).call(this.frame_1186).wait(2));

	// mando_s_l_forearm
	this.mando_move = new lib.mandolin_move_G();
	this.mando_move.setTransform(128.4,269.2,0.623,0.623,0,0,0,199.1,415);
	this.mando_move._off = true;

	this.instance = new lib.mando_head();
	this.instance.setTransform(147.1,85.5,0.623,0.623,0,0,0,33.8,83.7);

	this.instance_1 = new lib.mando_s_l_forearm_1();
	this.instance_1.setTransform(74.1,151.5,0.623,0.623,0,0,0,60,37);

	this.instance_2 = new lib.mando_s_plaque_1();
	this.instance_2.setTransform(157.3,492.6,0.623,0.623,0,0,0,59.5,24.6);

	this.instance_3 = new lib.mando_s_r_hand_1();
	this.instance_3.setTransform(115.5,143.6,0.623,0.623,0,0,0,36.5,31.4);

	this.instance_4 = new lib.mando_s_l_cuff_2();
	this.instance_4.setTransform(107.4,150.5,0.623,0.623,0,0,0,8.5,37.5);

	this.instance_5 = new lib.mando_s_r_forearm_1();
	this.instance_5.setTransform(204.4,152.1,0.623,0.623,0,0,0,45.1,65);

	this.instance_6 = new lib.mando_s_left_hand_3();
	this.instance_6.setTransform(178.4,115.3,0.623,0.623,0,0,0,33.5,35);

	this.instance_7 = new lib.mando_s_l_cuff_1_1();
	this.instance_7.setTransform(182.5,134.4,0.623,0.623,0,0,0,10,14.5);

	this.instance_8 = new lib.mando_s_mandolin_1();
	this.instance_8.setTransform(166.9,123.2,0.623,0.623,0,0,0,137,101.6);

	this.instance_9 = new lib.mando_s_rarm_2();
	this.instance_9.setTransform(61.6,123.4,0.623,0.623,0,0,0,40,63);

	this.instance_10 = new lib.mando_s_tie_1();
	this.instance_10.setTransform(147.9,102.8,0.623,0.623,0,0,0,33.5,28.9);

	this.instance_11 = new lib.mando_s_jacketfront_top_1();
	this.instance_11.setTransform(173.8,138.1,0.623,0.623,0,0,0,82,111.5);

	this.instance_12 = new lib.mando_s_jacketback_top_1();
	this.instance_12.setTransform(128.9,135.9,0.623,0.623,0,0,0,77,108);

	this.instance_13 = new lib.mando_s_jacketfront_bot_1();
	this.instance_13.setTransform(158.2,242.7,0.623,0.623,0,0,0,68,82.5);

	this.instance_14 = new lib.mando_s_jacketback_bot_1();
	this.instance_14.setTransform(123.3,233.7,0.623,0.623,0,0,0,71,92);

	this.instance_15 = new lib.mando_s_rarm_1_1();
	this.instance_15.setTransform(66.3,124.1,0.623,0.623,0,0,0,47.5,63);

	this.instance_16 = new lib.mando_s_larm_1();
	this.instance_16.setTransform(219.9,143.4,0.623,0.623,0,0,0,28,70);

	this.instance_17 = new lib.mando_s_pants_shad_1();
	this.instance_17.setTransform(145.7,290.4,0.623,0.623,0,0,0,87,13);

	this.instance_18 = new lib.mando_s_pants_1();
	this.instance_18.setTransform(146,378,0.623,0.623,0,0,0,87.5,153.6);

	this.instance_19 = new lib.mando_s_feet_1();
	this.instance_19.setTransform(157.2,482.6,0.623,0.623,0,0,0,94.5,30.5);

	this.instance_20 = new lib.mando_s_platform_1();
	this.instance_20.setTransform(153.8,502.3,0.623,0.623,0,0,0,135,29.1);

	this.instance_21 = new lib.mando_s_shad_1();
	this.instance_21.setTransform(116.8,269.2,0.623,0.623,0,0,0,180.5,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mando_move}]},1).to({state:[{t:this.mando_move}]},15).to({state:[{t:this.mando_move}]},24).to({state:[{t:this.mando_move}]},13).to({state:[{t:this.mando_move}]},2).to({state:[]},1).to({state:[{t:this.mando_move}]},1080).to({state:[{t:this.mando_move}]},2).to({state:[{t:this.mando_move}]},39).to({state:[{t:this.mando_move}]},6).to({state:[{t:this.mando_move}]},2).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.mando_move).wait(1).to({_off:false},0).to({regX:199,scaleX:0.68,scaleY:0.68,x:126.1,y:272.2},15,cjs.Ease.get(-1)).to({regY:415.1,scaleX:0.93,scaleY:0.93,x:116.3,y:285.4},24).to({regY:415,scaleX:0.99,scaleY:0.99,x:113.8,y:288.6},13,cjs.Ease.get(-0.31)).to({scaleX:1.01,scaleY:1.01,x:113.3,y:290.2},2).to({_off:true},1).wait(1080).to({_off:false,regX:199.1,scaleX:1,scaleY:1,x:113.4},0).to({regX:199,scaleX:1.01,scaleY:1.01,x:113.3},2).to({scaleX:0.66,scaleY:0.66,x:127,y:271},39).to({regX:198.8,regY:414.9,scaleX:0.62,scaleY:0.62,x:128.2,y:269.2},6,cjs.Ease.get(1)).to({regX:199.1,regY:415,scaleX:0.62,scaleY:0.62,x:128.4},2).to({_off:true},1).wait(2));

	// mando_s_l_forearm
	this.instance_22 = new lib.mando_head();
	this.instance_22.setTransform(147.1,85.5,0.623,0.623,0,0,0,33.8,83.7);

	this.instance_23 = new lib.mando_s_l_forearm_1();
	this.instance_23.setTransform(54.4,142.3,0.623,0.623,0,0,0,28.3,22.3);

	this.instance_24 = new lib.mando_s_plaque_1();
	this.instance_24.setTransform(157.3,492.6,0.623,0.623,0,0,0,59.5,24.6);

	this.instance_25 = new lib.mando_s_r_hand_1();
	this.instance_25.setTransform(101.2,145.3,0.623,0.623,0,0,0,13.6,34);

	this.instance_26 = new lib.mando_s_l_cuff_2();
	this.instance_26.setTransform(101,150.5,0.623,0.623,0,0,0,-1.8,37.5);

	this.instance_27 = new lib.mando_s_r_forearm_1();
	this.instance_27.setTransform(225.1,177.1,0.623,0.623,0,0,0,78.3,105.2);

	this.instance_28 = new lib.mando_s_left_hand_3();
	this.instance_28.setTransform(196.8,130.8,0.623,0.623,0,0,0,62.9,59.9);

	this.instance_29 = new lib.mando_s_l_cuff_1_1();
	this.instance_29.setTransform(193.5,135.9,0.623,0.623,0,0,0,27.6,16.9);

	this.instance_30 = new lib.mando_s_mandolin_1();
	this.instance_30.setTransform(139.8,126.2,0.623,0.623,0,0,0,93.5,106.4);

	this.instance_31 = new lib.mando_s_tie_1();
	this.instance_31.setTransform(148.6,90.1,0.623,0.623,0,0,0,34.5,8.4);

	this.instance_32 = new lib.mando_s_jacketfront_top_1();
	this.instance_32.setTransform(162.5,140.8,0.623,0.623,0,0,0,64,115.9);

	this.instance_33 = new lib.mando_s_jacketfront_bot_1();
	this.instance_33.setTransform(155.8,194.6,0.623,0.623,0,0,0,64.2,5.3);

	this.instance_34 = new lib.mando_s_jacketback_top_1();
	this.instance_34.setTransform(125,136.8,0.623,0.623,0,0,0,70.7,109.4);

	this.instance_35 = new lib.mando_s_jacketback_bot_1();
	this.instance_35.setTransform(109.7,191.1,0.623,0.623,0,0,0,49.1,23.6);

	this.instance_36 = new lib.mando_s_rarm_1_1();
	this.instance_36.setTransform(92.5,103.7,0.623,0.623,0,0,0,89.5,30.3);

	this.instance_37 = new lib.mando_s_larm_1();
	this.instance_37.setTransform(213.8,113.2,0.623,0.623,0,0,0,18.3,21.6);

	this.instance_38 = new lib.mando_s_pants_shad_1();
	this.instance_38.setTransform(145.7,290.4,0.623,0.623,0,0,0,87,13);

	this.instance_39 = new lib.mando_s_pants_1();
	this.instance_39.setTransform(140.9,289.6,0.623,0.623,0,0,0,79.2,11.8);

	this.instance_40 = new lib.mando_s_feet_1();
	this.instance_40.setTransform(157.2,482.6,0.623,0.623,0,0,0,94.5,30.5);

	this.instance_41 = new lib.mando_s_platform_1();
	this.instance_41.setTransform(153.8,502.3,0.623,0.623,0,0,0,135,29.1);

	this.instance_42 = new lib.mando_s_shad_1();
	this.instance_42.setTransform(116.8,269.2,0.623,0.623,0,0,0,180.5,415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22}]}).to({state:[]},1).to({state:[]},1186).wait(1));

	// mando_s_plaque
	this.instance_43 = new lib.mando_s_plaque_1();
	this.instance_43.setTransform(159.8,651.3,1,1,0,0,0,59.5,24.5);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(56).to({_off:false},0).to({y:647.7},5).wait(45).to({_off:true},1030).wait(52));

	// Layer 2
	this.encore = new lib.encorebod();
	this.encore.setTransform(138.5,90,1,1,0,0,0,173,238.8);
	this.encore._off = true;

	this.timeline.addTween(cjs.Tween.get(this.encore).wait(1111).to({_off:false},0).to({_off:true},15).wait(62));

	// tuning bod
	this.tuning = new lib.tuningbod();
	this.tuning.setTransform(138.5,90,1,1,0,0,0,173,238.8);
	this.tuning._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tuning).wait(1101).to({_off:false},0).to({_off:true},10).wait(77));

	// mando_head_singer
	this.instance_44 = new lib.mando_head_singer();
	this.instance_44.setTransform(145.9,-35.5,1,1,0,0,0,34.8,57.2);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(106).to({_off:false},0).wait(55).to({rotation:0.5,x:142.4,y:-34.4},5,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(7).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},4).wait(4).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).wait(7).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:146.9,y:-36.5},4).to({regY:57.3,rotation:4,x:142.3,y:-35.3},4,cjs.Ease.get(-1)).to({regY:57.1,rotation:0.8,x:142.4,y:-34.4},5).to({regY:57.2,rotation:-5.7},5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},4).wait(4).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:7.4,x:147.6,y:-34.7},4).to({regX:34.9,rotation:10.8,x:147.7},4).to({regX:34.8,regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).wait(7).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},4).wait(4).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).to({regY:57.1,rotation:-11.4,x:142.3},7).to({regX:34.9,regY:57.2,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:7.4,x:147.6,y:-34.7},4).to({regY:57.2,rotation:5.4,x:147.7,y:-34.6},6).to({regY:57.3,scaleX:1,scaleY:1,rotation:-9.5,x:145.9,y:-35.5},5).to({regX:34.9,regY:57.2,rotation:6.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({regX:34.8,rotation:-5.7},5).to({rotation:-5.7},5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},4).to({regY:57.1,rotation:0.1},4).to({regX:34.9,regY:57.2,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).wait(7).to({scaleX:1,scaleY:1,rotation:6.9,x:147.7,y:-34.6},5).to({regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({regY:57.1,rotation:4.3},5).to({regY:57.2,rotation:-5.7},5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},4).to({rotation:2.3,x:142.3},4).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,rotation:4.6},4).to({regY:57.1,rotation:-2.3,y:-34.7},4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).to({regY:57.1,rotation:3.3},7).to({regX:34.9,regY:57.2,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).wait(5).to({scaleX:1,scaleY:1,rotation:6.9,x:147.7,y:-34.6},4).to({regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).to({rotation:-12.7},5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(5).to({regY:57.2,scaleX:1,scaleY:1,rotation:-9.2,x:145.9,y:-35.6},4).to({rotation:0.5,x:142.4,y:-35.4},4,cjs.Ease.get(-1)).to({rotation:9.3,y:-34.4},4).to({rotation:-5.7},4).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({rotation:-5.7},5).wait(7).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},5).to({regX:34.8,regY:57.1,rotation:-2.3,y:-34.7},4).wait(6).to({regY:57.2,scaleX:1,scaleY:1,rotation:0,x:145.9,y:-35.5},5).to({regX:34.9,regY:57.3,rotation:6.3,x:142.4,y:-34.3},4,cjs.Ease.get(-1)).to({regX:34.8,regY:57.2,rotation:-5.7,y:-34.4},5).to({rotation:1.3,y:-34.3},5).to({regX:34.9,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,scaleX:1,scaleY:1,rotation:3.9},4).to({regY:57.2,rotation:-6.8},5).to({rotation:0,x:145.9,y:-35.5},4).to({rotation:0.5,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({rotation:-5.7},5).to({regY:57.1,rotation:2.5,x:142.3},5).to({regX:34.9,regY:57.2,scaleX:1,scaleY:1,rotation:-8.1,x:147.7,y:-34.6},4).to({regX:34.8,regY:57.1,scaleX:1,scaleY:1,rotation:3.1},4).to({scaleX:1,scaleY:1,rotation:-2.3,y:-34.7},5).to({regY:57.2,scaleX:1,scaleY:1,rotation:4.4,x:145.9,y:-35.5},4).to({rotation:-4.7,x:142.4,y:-34.4},4,cjs.Ease.get(-1)).to({regY:57.1,rotation:5},4).to({rotation:-10.4},4).to({regX:34.9,scaleX:1,scaleY:1,rotation:0.9,x:147.7,y:-34.7},4).to({regX:34.8,rotation:-2.3},4).wait(4).to({regY:57.2,scaleX:1,scaleY:1,rotation:0.5,x:142.4,y:-34.4},4).to({regY:57.1,rotation:-6.8,x:112.5,y:-31.6},22,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,rotation:-10.3,x:140.8,y:-33.8},6).to({regX:34.9,regY:57.2,scaleX:1,scaleY:1,rotation:7.2,x:145.9,y:-35.5},5).to({regX:34.8,rotation:0},8).wait(1).to({y:-36.9},4).to({y:-35.5},3).to({y:-36.9},4).to({y:-35.5},3).to({_off:true},25).wait(25).to({_off:false},0).to({_off:true},10).wait(52));

	// mando_head_singer
	this.intro = new lib.introbod();
	this.intro.setTransform(139.1,90.1,1,1,0,0,0,173,238.8);
	this.intro._off = true;

	this.timeline.addTween(cjs.Tween.get(this.intro).wait(69).to({_off:false},0).to({_off:true},37).wait(1082));

	// head
	this.instance_45 = new lib.mando_head();
	this.instance_45.setTransform(144.9,-4,1,1,0,0,0,33.8,83.7);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(56).to({_off:false},0).to({y:-9},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_upperBod
	this.upperbod = new lib.mando_s_upperBod();
	this.upperbod.setTransform(139.3,140.3,1,1,0,0,0,173,188.9);
	this.upperbod._off = true;

	this.timeline.addTween(cjs.Tween.get(this.upperbod).wait(106).to({_off:false},0).wait(55).to({rotation:-0.6,x:138,y:141.4},5,cjs.Ease.get(-1)).wait(12).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({rotation:-0.6},5).wait(7).to({rotation:0.5,x:139.4,y:140.9},5).to({rotation:0.5},4).wait(6).to({rotation:0,x:139.3,y:140.3},5).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(10).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(5).to({rotation:0,x:139.3,y:140.3},4).to({rotation:-0.6,x:138,y:141.4},4,cjs.Ease.get(-1)).wait(8).to({rotation:0.5,x:139.4,y:140.9},4).to({rotation:0.5},4).wait(4).to({rotation:-0.6,x:138,y:141.4},4).to({regY:188.8,rotation:-7.8,x:130.5,y:143.1},22,cjs.Ease.get(1)).to({rotation:-0.8,x:136.9,y:141.2},6).to({regY:188.9,rotation:0,x:139.3,y:140.3},5).wait(9).to({y:139},3).wait(2).to({y:140.3},0).wait(2).to({y:139},3).wait(2).to({y:140.3},0).to({_off:true},27).wait(25).to({_off:false},0).to({_off:true},10).wait(52));

	// mando_s_l_forearm
	this.instance_46 = new lib.mando_s_l_forearm_1();
	this.instance_46.setTransform(-5.4,92.2,1,1,0,0,0,28.3,22.4);
	this.instance_46._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(56).to({_off:false},0).to({y:85.1},5).to({y:85.6},7).to({_off:true},1).wait(1119));

	// mando_s_r_hand
	this.instance_47 = new lib.mando_s_r_hand_1();
	this.instance_47.setTransform(69.8,96.7,1,1,-2.5,0,0,13.6,33.9);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(56).to({_off:false},0).to({regX:13.5,regY:34,rotation:4,y:89.7},5).to({regX:13.6,rotation:0,x:69.9,y:90.2},7).to({_off:true},1).wait(1119));

	// mando_s_l_cuff
	this.instance_48 = new lib.mando_s_l_cuff_2();
	this.instance_48.setTransform(69.5,105.3,1,1,0,0,0,-1.8,37.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(56).to({_off:false},0).to({y:98.2},5).to({y:98.7},7).to({_off:true},1).wait(1119));

	// mando_s_r_forearm
	this.instance_49 = new lib.mando_s_r_forearm_1();
	this.instance_49.setTransform(268.6,147.9,1,1,0,0,0,78.3,105.1);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(56).to({_off:false},0).to({y:140.8},5).to({y:141.3},7).to({_off:true},1).wait(1119));

	// mando_s_left_hand
	this.instance_50 = new lib.mando_s_left_hand_3("single",0);
	this.instance_50.setTransform(223.2,73.6,1,1,2,0,0,62.9,59.8);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(56).to({_off:false},0).to({regY:59.9,rotation:-2.5,y:66.6},5).to({rotation:0,y:67.1},7).to({_off:true},1).wait(1119));

	// mando_s_l_cuff_1
	this.instance_51 = new lib.mando_s_l_cuff_1_1();
	this.instance_51.setTransform(217.9,81.7,1,1,0,0,0,27.6,16.9);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(56).to({_off:false},0).to({y:74.6},5).to({y:75.1},7).to({_off:true},1).wait(1119));

	// mando_s_mandolin
	this.instance_52 = new lib.mando_s_mandolin_1();
	this.instance_52.setTransform(131.8,66.2,1,1,0,0,0,93.5,106.4);
	this.instance_52._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(56).to({_off:false},0).to({y:57.1},5).to({y:59.6},7).to({_off:true},1).wait(1119));

	// mando_s_tie
	this.instance_53 = new lib.mando_s_tie_1();
	this.instance_53.setTransform(145.8,8.2,1,1,0,0,0,34.5,8.4);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(56).to({_off:false},0).to({y:1.6},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_jacketfront_top
	this.instance_54 = new lib.mando_s_jacketfront_top_1();
	this.instance_54.setTransform(168.2,89.2,1,1,0,0,0,63.9,115.9);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(56).to({_off:false},0).to({y:83.1},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_jacketfront_bot
	this.instance_55 = new lib.mando_s_jacketfront_bot_1();
	this.instance_55.setTransform(157.4,174.5,1,0.994,0,0,0,64.1,5.2);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(56).to({_off:false},0).to({regY:5.3,scaleY:1,y:169.5},5).wait(100).to({skewY:-0.5,x:156.6,y:169.6},5,cjs.Ease.get(-1)).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).wait(12).to({regX:64,rotation:-0.3,skewY:0,x:157.1},5).wait(10).to({regX:64.1,rotation:0,x:157.4,y:169.5},5).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(10).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(9).to({regX:64.1,rotation:0,x:157.4,y:169.5},4).to({skewY:-0.5,x:156.6,y:169.6},4,cjs.Ease.get(-1)).wait(8).to({regX:64,rotation:-0.3,skewY:0,x:157.1},4).wait(8).to({regX:64.1,rotation:0,skewY:-0.5,x:156.6},4).to({regX:64.2,skewX:-1.3,x:153.1,y:169.7},22,cjs.Ease.get(1)).to({regX:64.1,regY:5.4,skewX:-0.3,skewY:0,x:155.9,y:169.6},6).to({regY:5.3,skewX:0,x:157.4,y:169.5},5).wait(9).to({scaleY:1.01,y:168.5},3).wait(2).to({scaleY:1,y:169.5},0).wait(2).to({scaleY:1.01,y:168.5},3).wait(2).to({scaleY:1,y:169.5},0).to({_off:true},62).wait(52));

	// mando_s_jacketback_top
	this.instance_56 = new lib.mando_s_jacketback_top_1();
	this.instance_56.setTransform(108,82.8,1,1,0,0,0,70.7,109.5);
	this.instance_56._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(56).to({_off:false},0).to({y:76.7},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_jacketback_bot
	this.instance_57 = new lib.mando_s_jacketback_bot_1();
	this.instance_57.setTransform(83.3,168.9,1,0.994,0,0,0,49,23.6);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(56).to({_off:false},0).to({scaleY:1,y:163.8},5).wait(100).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},5,cjs.Ease.get(-1)).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).wait(12).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},5).wait(10).to({skewX:0,x:83.3,y:163.8},5).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(10).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(9).to({skewX:0,x:83.3,y:163.8},4).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4,cjs.Ease.get(-1)).wait(8).to({scaleX:1,skewX:-0.8,skewY:0,x:82.7,y:164.3},4).wait(8).to({scaleX:1,skewX:-0.5,skewY:0.3,x:82.4,y:164.5},4).to({scaleY:1,skewX:-3.3,x:77.1,y:164.6},22,cjs.Ease.get(1)).to({regY:23.5,scaleX:1,scaleY:1,skewX:-1,skewY:0,x:81.2,y:164},6).to({regY:23.6,scaleY:1,skewX:0,x:83.3,y:163.8},5).wait(9).to({scaleY:1.01,y:162.8},3).wait(2).to({scaleY:1,y:163.8},0).wait(2).to({scaleY:1.01,y:162.8},3).wait(2).to({scaleY:1,y:163.8},0).to({_off:true},62).wait(52));

	// mando_s_rarm_1
	this.instance_58 = new lib.mando_s_rarm_1_1();
	this.instance_58.setTransform(55.8,29.1,1,1,0,0,0,89.5,30.3);
	this.instance_58._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_58).wait(56).to({_off:false},0).to({y:23.5},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_larm
	this.instance_59 = new lib.mando_s_larm_1();
	this.instance_59.setTransform(250.6,44.4,1,1,0,0,0,18.3,21.6);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(56).to({_off:false},0).to({y:38.8},5).wait(7).to({_off:true},1).wait(1119));

	// mando_s_pants_shad
	this.instance_60 = new lib.mando_s_pants_shad_1();
	this.instance_60.setTransform(141.3,327.8,1,1,0,0,0,87,13);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(56).to({_off:false},0).to({y:323.2},5).wait(715).to({_off:true},360).wait(52));

	// mando_s_pants
	this.instance_61 = new lib.mando_s_pants_1();
	this.instance_61.setTransform(133.5,325.6,1,1,0,0,0,79.2,11.8);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(56).to({_off:false},0).to({y:322},5).wait(45).to({_off:true},1030).wait(52));

	// mando_s_feet
	this.instance_62 = new lib.mando_s_feet_1();
	this.instance_62.setTransform(159.8,635.3,1,1,0,0,0,94.5,30.5);
	this.instance_62._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_62).wait(56).to({_off:false},0).to({y:631.7},5).wait(45).to({_off:true},1030).wait(52));

	// mando_s_platform
	this.instance_63 = new lib.mando_s_platform_1();
	this.instance_63.setTransform(154.3,666.8,1,1,0,0,0,135,29);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(56).to({_off:false},0).to({y:663.2},5).wait(45).to({_off:true},1030).wait(52));

	// mando_s_shad
	this.instance_64 = new lib.mando_s_shad_1();
	this.instance_64.setTransform(94.8,289.2,1,1,0,0,0,180.5,415);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(56).to({_off:false},0).wait(12).to({_off:true},1068).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.3,-1.5,248,529.3);


(lib.AColonel_loose_lips_broken = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"start_encore":9,"hide":19,"out":31,"over":40,"down":69,"wobble_off_screen":78,"wobble_on_screen":87,"bounceToHalt":96});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_95 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(1).call(this.frame_30).wait(9).call(this.frame_39).wait(29).call(this.frame_68).wait(9).call(this.frame_77).wait(9).call(this.frame_86).wait(9).call(this.frame_95).wait(17).call(this.frame_112).wait(1));

	// Layer 6
	this.instance = new lib.ll_broken_song();
	this.instance.setTransform(123,259,1,1,0,0,0,123,257.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},8).wait(104));

	// ll_s_plaque_type_1
	this.instance_1 = new lib.ll_s_plaque_type_1_1();
	this.instance_1.setTransform(136,486.7,0.499,0.499,0,0,0,75.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// Layer 5
	this.instance_2 = new lib.ll_sign();
	this.instance_2.setTransform(126.2,329.5,1,1,0,0,0,55.4,168.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_head_all
	this.instance_3 = new lib.ll_head_all_1();
	this.instance_3.setTransform(132.7,48.5,1,1,4,0,0,37,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:49.3},3).to({y:48.5},5).wait(1).to({y:49.3},3).to({y:48.5},5).wait(1).to({rotation:7,x:128.7,y:48.4},2).to({rotation:1,x:136.6,y:48.6},7).to({rotation:5.7,x:133.1,y:48.5},7).to({rotation:4,x:132.7},6).wait(4));

	// ll_r_arm_all
	this.instance_4 = new lib.ll_r_arm_all_1();
	this.instance_4.setTransform(200.6,145.4,0.97,1,4,0,0,42.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({rotation:3.5,y:146.2},3).to({rotation:4,y:145.4},5).wait(1).to({rotation:3.5,y:146.2},3).to({rotation:4,y:145.4},5).wait(1).to({rotation:2.8,x:198.1,y:144},2).to({rotation:5.4,x:203.6,y:147.2},7).to({rotation:4,x:200.6,y:145.4},7).wait(10));

	// ll_tie_all
	this.instance_5 = new lib.ll_tie_all_1();
	this.instance_5.setTransform(133.3,112.7,1,1,4,0,0,24.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:113.2},3).to({y:112.7},5).wait(1).to({y:113.2},3).to({y:112.7},5).wait(1).to({regX:24,regY:20.4,rotation:2.8,x:129.9,y:112.6},2).to({regX:24.1,rotation:5.4,x:137.1,y:112.7},7).to({regY:20.5,rotation:4,x:133.3},7).wait(10));

	// ll_torso
	this.instance_6 = new lib.ll_torso_1();
	this.instance_6.setTransform(135.2,198.5,1,1,4,0,0,99,131.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:199},3).to({y:198.5},5).wait(1).to({y:199},3).to({y:198.5},5).wait(1).to({rotation:2.8,x:133.9,y:198.3},2).to({rotation:5.4,x:136.9,y:198.6},7).to({rotation:4,x:135.2,y:198.5},7).wait(10));

	// ll_l_forearm
	this.instance_7 = new lib.ll_l_forearm_1();
	this.instance_7.setTransform(45,219.9,1,1,4,0,0,18.4,45.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:220.4},3).to({y:219.9},5).wait(1).to({y:220.4},3).to({y:219.9},5).wait(1).to({rotation:2.8,x:44.1,y:221.6},2).to({regX:18.5,rotation:5.4,x:46.2,y:217.7},7).to({regX:18.4,rotation:4,x:45,y:219.9},7).wait(10));

	// ll_l_hand_all
	this.instance_8 = new lib.ll_l_hand_all_1();
	this.instance_8.setTransform(40.6,264,1,1,2.7,0,0,13.6,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_l_arm
	this.instance_9 = new lib.ll_l_arm_1();
	this.instance_9.setTransform(59.8,151.1,1,1,4,0,0,27.4,61);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:151.6},3).to({y:151.1},5).wait(1).to({y:151.6},3).to({y:151.1},5).wait(1).to({rotation:2.8,x:57.4,y:152.6},2).to({regX:27.5,rotation:5.4,x:62.7,y:149.4},7).to({regX:27.4,rotation:4,x:59.8,y:151.1},7).wait(10));

	// ll_torso_shadow
	this.instance_10 = new lib.ll_torso_shadow_1();
	this.instance_10.setTransform(130.2,292.4,1,1,4,0,0,60.5,17);
	this.instance_10.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(8).to({_off:false},0).wait(60).to({y:292.9},3).to({y:292.4},5).wait(1).to({y:292.9},3).to({y:292.4},5).wait(1).to({regY:16.9,rotation:2.8,x:130.9,y:292.3},2).to({regY:17,rotation:5.4,x:129.6},7).to({rotation:4,x:130.2,y:292.4},7).wait(10));

	// ll_legs
	this.instance_11 = new lib.ll_legs_1();
	this.instance_11.setTransform(140.5,381.5,1,1,0,0,0,65.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_plinth
	this.instance_12 = new lib.ll_plinth_2();
	this.instance_12.setTransform(130.5,495.5,1,1,0,0,0,82.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_s_shadow_colonelz
	this.instance_13 = new lib.ll_s_shadow_colonelz_1();
	this.instance_13.setTransform(115.3,257.9,0.659,0.658,0,0,0,175,386.1);
	this.instance_13.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.5,246,515);


(lib.AColonel_loose_lips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"start_encore":9,"hide":19,"out":31,"over":40,"down":69,"wobble_off_screen":78,"wobble_on_screen":87,"bounceToHalt":96});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_29 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}
	this.frame_86 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_95 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_112 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(10).call(this.frame_29).wait(1).call(this.frame_30).wait(9).call(this.frame_39).wait(29).call(this.frame_68).wait(9).call(this.frame_77).wait(9).call(this.frame_86).wait(9).call(this.frame_95).wait(17).call(this.frame_112).wait(1));

	// Layer 1
	this.main = new lib.looseLips_main();
	this.main.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);

	this.encore = new lib.looseLips_encore();
	this.encore.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.encore.alpha = 0;

	this.hide = new lib.looseLips_hide();
	this.hide.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.hide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.main}]},1).to({state:[{t:this.encore}]},8).to({state:[{t:this.hide}]},10).to({state:[]},11).to({state:[]},64).wait(19));

	// Layer 2
	this.instance = new lib.rollover_light();
	this.instance.setTransform(130.6,-6.5,1,1,0,0,0,105.5,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({scaleX:0.75,y:-26.5,alpha:0},8).wait(1).to({scaleX:1,y:-6.5,alpha:1},4).wait(25).to({scaleX:0.75,y:-26.5,alpha:0},7).to({_off:true},1).wait(36));

	// ll_s_plaque_type_1
	this.instance_1 = new lib.ll_s_plaque_type_1_1();
	this.instance_1.setTransform(136,486.7,0.499,0.499,0,0,0,75.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_head_all
	this.instance_2 = new lib.ll_head_all_1();
	this.instance_2.setTransform(118,73,1,1,0,0,0,37,70);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({rotation:3.2,x:128.1,y:72},0).to({rotation:0,x:118,y:73},7).wait(2).to({rotation:3.2,x:127.7,y:71.8},4).wait(16).to({x:129.1,y:72},2).to({x:128.1},5).wait(10).to({regY:44.5,rotation:0,x:118,y:47.5},0).wait(1).to({y:49},4).to({y:47.5},4).wait(1).to({y:49},4).to({y:47.5},4).wait(1).to({regX:37.1,rotation:1.8,x:107.2,y:47.2},2).to({rotation:-0.8,x:123.2,y:45.2},5).to({regX:37,rotation:0,x:118,y:47.5},5).wait(5));

	// ll_r_arm_all
	this.instance_3 = new lib.ll_r_arm_all_1();
	this.instance_3.setTransform(208.5,144.7,0.97,1,0,0,0,68.3,66);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({regY:65.9,rotation:3.2,x:214.1,y:148.3},0).to({regY:66,rotation:0,x:208.5,y:144.7},7).wait(2).to({regY:65.9,rotation:3.2,x:214.1,y:148.3},4).wait(33).to({regX:42.5,regY:61,rotation:0,x:183.5,y:139.7},0).wait(1).to({y:141.2},4).to({y:139.7},4).wait(1).to({y:141.2},4).to({y:139.7},4).wait(1).to({rotation:-6.7,x:177.5,y:133.9},2).to({rotation:0,x:187.7,y:138},5).to({x:183.5,y:139.7},5).wait(5));

	// ll_tie_all
	this.instance_4 = new lib.ll_tie_all_1();
	this.instance_4.setTransform(120.5,95,1,1,0,0,0,21.5,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({regX:21.4,rotation:3.2,x:128.9,y:93.9},0).to({regX:21.5,rotation:0,x:120.5,y:95},7).wait(2).to({regX:21.4,rotation:3.2,x:128.9,y:93.9},4).wait(33).to({regX:24,regY:20.5,rotation:0,x:123,y:111.5},0).wait(1).to({y:112.5},4).to({y:111.5},4).wait(1).to({y:112.5},4).to({y:111.5},4).wait(1).to({regX:24.1,rotation:-2.5,x:112.5,y:110.4},2).to({regX:24,regY:20.6,rotation:1.5,x:126.7,y:109.2},5).to({regY:20.5,rotation:0,x:123,y:111.5},5).wait(5));

	// ll_torso
	this.instance_5 = new lib.ll_torso_1();
	this.instance_5.setTransform(126.5,251,1,1,0,0,0,94.5,186);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({rotation:3.2,x:126.3,y:250},0).to({rotation:0,x:126.5,y:251},7).wait(2).to({rotation:3.2,x:126.3,y:250},4).wait(33).to({regX:99,regY:132,rotation:0,x:131,y:197},0).wait(1).to({y:198},4).to({y:197},4).wait(1).to({y:198},4).to({y:197},4).wait(1).to({rotation:-2.5,x:124.1,y:195.5},2).to({regY:131.9,rotation:1.5,x:132.4,y:194.5},5).to({regY:132,rotation:0,x:131,y:197},5).wait(5));

	// ll_l_forearm
	this.instance_6 = new lib.ll_l_forearm_1();
	this.instance_6.setTransform(43.5,193.5,1,1,0,0,0,19.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({regX:19.6,regY:14.6,rotation:3.2,x:46.7,y:188.1},0).to({regX:19.5,regY:14.5,rotation:0,x:43.5,y:193.5},7).wait(2).to({regX:19.6,regY:14.6,rotation:3.2,x:46.7,y:188.1},4).to({rotation:-3.8,x:36.6,y:180.5},4).wait(2).to({rotation:3.2,x:46.7,y:188.1},4).wait(2).to({rotation:-3.8,x:36.6,y:180.5},4).wait(2).to({rotation:3.2,x:46.7,y:188.1},5).wait(10).to({regX:18.5,regY:45.5,rotation:0,x:42.5,y:224.5},0).wait(19).to({rotation:-2.5,x:36.9,y:226.7},2).to({rotation:1.5,x:45.7,y:220.9},5).to({rotation:0,x:42.5,y:224.5},5).wait(5));

	// ll_l_hand_all
	this.instance_7 = new lib.ll_l_hand_all_1();
	this.instance_7.setTransform(43,264.5,1,1,0,0,0,16,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(8).to({_off:false},0).wait(35).to({x:39.5,y:257},4).wait(2).to({x:43,y:264.5},4).wait(2).to({x:39.5,y:257},4).wait(2).to({x:43,y:264.5},5).wait(10).to({regX:22.5,regY:125,x:49.5,y:372},0).wait(19).to({skewX:-1,x:47.3},2).to({regX:22.6,skewX:0.3,x:50.4},5).to({regX:22.5,skewX:0,x:49.5},5).wait(5));

	// ll_l_arm
	this.instance_8 = new lib.ll_l_arm_1();
	this.instance_8.setTransform(61,124,1,1,0,0,0,36,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({regX:36.1,rotation:3.2,x:68.1,y:119.5},0).to({regX:36,rotation:0,x:61,y:124},7).wait(2).to({regX:36.1,rotation:3.2,x:68.1,y:119.5},4).to({regX:36,scaleY:0.94,rotation:11.6,x:68,y:119.6},4).wait(2).to({rotation:11.6},0).to({regX:36.1,scaleY:1,rotation:3.2,x:68.1,y:119.5},4).to({rotation:3.2},2).to({regX:36,scaleY:0.94,rotation:11.6,x:68,y:119.6},4).to({rotation:11.6},2).to({regX:36.1,scaleY:1,rotation:3.2,x:68.1,y:119.5},5).wait(10).to({regX:27.5,regY:61,rotation:0,x:52.5,y:155},0).wait(1).to({y:156},4).to({y:155},4).wait(1).to({y:156},4).to({y:155},4).wait(1).to({regY:61.1,rotation:-2.5,x:43.9,y:156.9},2).to({rotation:0.1,x:56.5,y:151.3},5).to({regY:61,rotation:0,x:52.5,y:155},5).wait(5));

	// ll_torso_shadow
	this.instance_9 = new lib.ll_torso_shadow_1();
	this.instance_9.setTransform(132.5,291,1,1,0,0,0,60.5,17);
	this.instance_9.alpha = 0.898;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({regX:60.6,regY:17.1,rotation:3.2,x:130.1,y:290.3},0).to({regX:60.5,regY:17,rotation:0,x:132.5,y:291},7).wait(2).to({regX:60.6,regY:17.1,rotation:3.2,x:130.1,y:290.3},4).wait(33).to({regX:60.5,regY:17,rotation:0,x:132.5,y:291},0).wait(1).to({y:291.5},4).to({y:291},4).wait(1).to({y:291.5},4).to({y:291},4).wait(1).to({x:127,y:290},2).to({x:130.3,y:290.6},5).to({x:132.5,y:291},5).wait(5));

	// ll_legs
	this.instance_10 = new lib.ll_legs_1();
	this.instance_10.setTransform(140.5,381.5,1,1,0,0,0,65.5,116.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({skewX:0.4,x:141.3},0).to({skewX:0,x:140.5},7).wait(2).to({skewX:0.4,x:141.3},4).wait(33).to({skewX:0,x:140.5},0).wait(19).to({scaleY:1,skewX:-2.2,x:136},2).to({scaleY:1,skewX:-0.8,x:138.8},5).to({skewX:0,x:140.5},5).wait(5));

	// ll_plinth
	this.instance_11 = new lib.ll_plinth_2();
	this.instance_11.setTransform(130.5,495.5,1,1,0,0,0,82.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(8).to({_off:false},0).wait(104));

	// ll_s_shadow_colonelz
	this.instance_12 = new lib.ll_s_shadow_colonelz_1();
	this.instance_12.setTransform(115.3,257.9,0.659,0.658,0,0,0,175,386.1);
	this.instance_12.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(8).to({_off:false},0).wait(22).to({skewX:0.6,x:117.8},0).to({skewX:0,x:115.3},7).wait(2).to({skewX:0.6,x:117.8},4).wait(33).to({skewX:0,x:115.3},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,230.5,513.5);


(lib.AColonel_gun_fight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"start_encore":9,"hide":19,"out":32,"over":40,"down":69,"wobble_off_screen":78,"wobble_on_screen":85,"bounceToHalt":92});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_68 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}
	this.frame_84 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_91 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_138 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(12).call(this.frame_31).wait(8).call(this.frame_39).wait(29).call(this.frame_68).wait(9).call(this.frame_77).wait(7).call(this.frame_84).wait(7).call(this.frame_91).wait(47).call(this.frame_138).wait(1));

	// Layer 15
	this.main = new lib.gunFight_main();
	this.main.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);

	this.encore = new lib.gunFight_encore();
	this.encore.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.encore.alpha = 0;

	this.hide = new lib.gunFight_hide();
	this.hide.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.hide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.main}]},1).to({state:[{t:this.encore}]},8).to({state:[{t:this.hide}]},10).to({state:[]},12).wait(108));

	// Layer 5
	this.instance = new lib.rollover_light();
	this.instance.setTransform(116.6,-10.5,1,1,0,0,0,105.5,202);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32).to({_off:false},0).to({scaleX:0.75,y:-30.5,alpha:0},7).wait(1).to({scaleX:1,y:-10.5,alpha:0.801},4).wait(25).to({scaleX:0.75,y:-30.5,alpha:0},6).to({_off:true},1).wait(63));

	// gunFightPlaque 
	this.instance_1 = new lib.gunFightPlaque();
	this.instance_1.setTransform(140.3,469.7,1,1,0,0,0,57,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(8).to({_off:false},0).wait(130));

	// gunfight_head_main
	this.instance_2 = new lib.gunfight_head_main();
	this.instance_2.setTransform(109.3,63,1.02,1.02,0,0,0,24.5,56.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({regY:56.7,scaleX:1.01,scaleY:1.01,rotation:-3.7},0).to({regY:56.8,rotation:0},4,cjs.Ease.get(1)).wait(4).to({regX:24.6,rotation:-4,x:109.4,y:60.6},6,cjs.Ease.get(0.01)).wait(4).to({regX:24.5,regY:56.7,rotation:-3.7,x:109.3,y:63},9,cjs.Ease.get(-1)).to({regX:24.4,regY:56.8,rotation:-3.8,x:109.2,y:61.8},4,cjs.Ease.get(-1)).to({regX:24.5,regY:56.7,rotation:-3.7,x:109.3,y:63},4).wait(11).to({regY:56.8,rotation:0},0).to({y:63.5},3).to({y:63},3).wait(1).to({y:63.5},3).to({y:63},3).wait(1).to({regX:24.6,rotation:5.7,x:95.1,y:64.5},3,cjs.Ease.get(-1)).to({rotation:-10.6,x:118.4,y:64},11).wait(1).to({regX:28.5,regY:33.5,rotation:-10.4,x:117.9,y:40.1},0).wait(1).to({rotation:-10},0).wait(1).to({rotation:-9.2,x:117.7},0).wait(1).to({rotation:-8,x:117.5,y:40},0).wait(1).to({rotation:-6.3,x:117.3,y:39.9},0).wait(1).to({rotation:-4.4,x:116.9,y:39.8},0).wait(1).to({rotation:-2.4,x:116.6},0).wait(1).to({rotation:-0.5,x:116.3},0).wait(1).to({rotation:1,x:116.1,y:39.9},0).wait(1).to({rotation:2.2,x:115.8,y:39.8},0).wait(1).to({rotation:3.1,x:115.7,y:39.9},0).wait(1).to({rotation:3.8,x:115.6},0).wait(1).to({rotation:4.4,x:115.5},0).wait(1).to({rotation:4.8},0).wait(1).to({rotation:5,x:115.4},0).wait(1).to({rotation:5.1,x:115.3,y:40},0).wait(1).to({regX:24.5,regY:56.8,rotation:5.2,x:109.3,y:63.1},0).wait(1).to({regX:28.5,regY:33.5,rotation:5.1,x:115.3,y:39.9},0).wait(1).to({rotation:4.7,x:115.2},0).wait(1).to({rotation:4,x:114.9,y:39.8},0).wait(1).to({rotation:3,x:114.5,y:39.7},0).wait(1).to({rotation:2,x:114.1},0).wait(1).to({rotation:1.3,x:113.8,y:39.6},0).wait(1).to({rotation:0.7,x:113.6,y:39.5},0).wait(1).to({rotation:0.4,x:113.5},0).wait(1).to({rotation:0.2,x:113.4},0).wait(1).to({rotation:0,x:113.3},0).wait(1).to({regX:24.5,regY:56.8,x:109.3,y:63},0).wait(5));

	// shared_gunfight_torso
	this.instance_3 = new lib.shared_gunfight_torso_1();
	this.instance_3.setTransform(110.7,197.9,1,1,0,0,0,48.9,136.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({scaleY:1.01},0).to({scaleY:1},4,cjs.Ease.get(1)).wait(4).to({scaleY:1.03},6,cjs.Ease.get(0.01)).wait(4).to({scaleY:1.01},9,cjs.Ease.get(-1)).to({scaleY:1.02},4,cjs.Ease.get(-1)).to({scaleY:1.01},4).wait(11).to({scaleY:1},0).wait(1).to({regX:54.5,regY:67.9,x:116.3,y:129.8},0).wait(1).to({y:130.2},0).wait(1).to({regX:48.9,regY:136.1,x:110.7,y:198.9},0).wait(1).to({regX:54.5,regY:67.9,x:116.3,y:130.2},0).wait(1).to({y:129.8},0).wait(1).to({regX:48.9,regY:136.1,x:110.7,y:197.9},0).wait(2).to({regX:54.5,regY:67.9,x:116.3,y:129.8},0).wait(1).to({y:130.2},0).wait(1).to({regX:48.9,regY:136.1,x:110.7,y:198.9},0).wait(1).to({regX:54.5,regY:67.9,x:116.3,y:130.2},0).wait(1).to({y:129.8},0).wait(1).to({regX:48.9,regY:136.1,x:110.7,y:197.9},0).wait(1).to({skewX:-4,skewY:-3.8,x:104.9,y:200.6},3,cjs.Ease.get(-1)).to({regY:136,rotation:2.5,skewX:0,skewY:0,x:111.1,y:197.9},11).wait(1).to({regX:54.5,regY:67.9,x:119.6,y:130.1},0).wait(1).to({rotation:2.4,x:119.5},0).wait(1).to({rotation:2.3,x:119.4,y:130},0).wait(1).to({rotation:2.1,x:119.1},0).wait(1).to({rotation:1.8,x:118.7},0).wait(1).to({rotation:1.5,x:118.3},0).wait(1).to({rotation:1.2,x:117.9,y:129.9},0).wait(1).to({rotation:0.9,x:117.6,y:129.8},0).wait(1).to({rotation:0.7,x:117.2},0).wait(1).to({rotation:0.5,x:117},0).wait(1).to({rotation:0.3,x:116.7},0).wait(1).to({rotation:0.2,x:116.6},0).wait(1).to({rotation:0.1,x:116.5,y:129.7},0).wait(1).to({x:116.4},0).wait(1).to({rotation:0,x:116.3,y:129.8},0).wait(1).to({y:129.7},0).wait(1).to({regX:48.9,regY:136.1,x:110.7,y:197.9},0).wait(16));

	// shared_gunfight_leftupper_arm
	this.instance_4 = new lib.shared_gunfight_leftupper_arm_1();
	this.instance_4.setTransform(167.5,105.4,1,1,0,0,0,3.7,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({regX:3.6,scaleX:1.07,rotation:-5.2,x:168.4,y:104.4},0).to({regX:3.7,scaleX:1,rotation:0,x:167.5,y:105.4},4,cjs.Ease.get(1)).wait(4).to({regX:3.8,rotation:-18.2,x:167.6,y:100.4},6,cjs.Ease.get(0.01)).to({y:99.4},4,cjs.Ease.get(-1)).to({regX:3.6,scaleX:1.07,rotation:-5.2,x:168.4,y:104.4},9,cjs.Ease.get(-1)).to({regX:3.7,scaleX:1.07,rotation:-11,y:103.2},4,cjs.Ease.get(-1)).to({regX:3.6,scaleX:1.07,rotation:-5.2,y:104.4},4).wait(11).to({regX:3.7,scaleX:1,rotation:0,x:167.5,y:105.4},0).wait(1).to({regX:12.5,regY:41,x:176.3,y:123.9},0).wait(1).to({y:124.3},0).wait(1).to({regX:3.7,regY:22.6,x:167.5,y:106.4},0).wait(1).to({regX:12.5,regY:41,x:176.3,y:124.3},0).wait(1).to({y:123.9},0).wait(1).to({regX:3.7,regY:22.6,x:167.5,y:105.4},0).wait(2).to({regX:12.5,regY:41,x:176.3,y:123.9},0).wait(1).to({y:124.3},0).wait(1).to({regX:3.7,regY:22.6,x:167.5,y:106.4},0).wait(1).to({regX:12.5,regY:41,x:176.3,y:124.3},0).wait(1).to({y:123.9},0).wait(1).to({regX:3.7,regY:22.6,x:167.5,y:105.4},0).wait(1).to({skewX:-4,skewY:-3.8,x:155.1,y:104.9},3,cjs.Ease.get(-1)).to({regX:3.6,rotation:4.2,skewX:0,skewY:0,x:171.8,y:108},11).wait(1).to({regX:12.5,regY:41,x:179.2,y:127},0).wait(1).to({rotation:4.1,x:179.1,y:126.9},0).wait(1).to({rotation:3.8,x:179,y:126.7},0).wait(1).to({rotation:3.5,x:178.8,y:126.4},0).wait(1).to({rotation:3.1,x:178.5,y:126.1},0).wait(1).to({rotation:2.5,x:178.2,y:125.7},0).wait(1).to({rotation:2,x:177.7,y:125.3},0).wait(1).to({rotation:1.5,x:177.4,y:125},0).wait(1).to({rotation:1.1,x:177.1,y:124.6},0).wait(1).to({rotation:0.8,x:176.9,y:124.4},0).wait(1).to({rotation:0.6,x:176.7,y:124.2},0).wait(1).to({rotation:0.4,x:176.6,y:124.1},0).wait(1).to({rotation:0.2,x:176.5,y:123.9},0).wait(1).to({rotation:0.1,x:176.4},0).wait(1).to({rotation:0,y:123.8},0).wait(2).to({regX:3.7,regY:22.6,x:167.5,y:105.4},0).wait(16));

	// shared_gunfight_left_hand
	this.instance_5 = new lib.shared_gunfight_left_hand_1();
	this.instance_5.setTransform(196.2,220.9,1,1,0,0,0,21.4,-2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({regY:-2.8,rotation:17.5,x:185.2,y:218},0).to({regY:-2.9,rotation:13.7,x:190.5,y:222.7},4,cjs.Ease.get(1)).to({rotation:0,x:196.2,y:220.9},3).wait(1).to({regY:-2.8,rotation:-8.2,x:211.7,y:209},6,cjs.Ease.get(0.01)).to({y:208},4,cjs.Ease.get(-1)).to({rotation:17.5,x:185.2,y:218},9,cjs.Ease.get(-1)).to({regY:-2.9,scaleX:1,scaleY:1,rotation:23.5,x:192.2,y:214},4,cjs.Ease.get(-1)).to({regY:-2.8,scaleX:1,scaleY:1,rotation:17.5,x:185.2,y:218},4).wait(11).to({regY:-2.9,rotation:0,x:196.2,y:220.9},0).wait(1).to({regX:15,regY:20,x:189.9,y:243.9},0).wait(1).to({rotation:0.1,x:190,y:244.2},0).wait(1).to({regX:21.4,regY:-2.9,rotation:0.3,x:196.7,y:221.8},0).wait(1).to({regX:15,regY:20,rotation:0.2,x:190,y:244.2},0).wait(1).to({rotation:0,x:189.9,y:243.9},0).wait(1).to({regX:21.4,regY:-2.9,x:196.2,y:220.9},0).wait(2).to({regX:15,regY:20,x:189.9,y:243.9},0).wait(1).to({rotation:0.1,x:190,y:244.2},0).wait(1).to({regX:21.4,regY:-2.9,rotation:0.3,x:196.7,y:221.8},0).wait(1).to({regX:15,regY:20,rotation:0.2,x:190,y:244.2},0).wait(1).to({rotation:0,x:189.9,y:243.9},0).wait(1).to({regX:21.4,regY:-2.9,x:196.2,y:220.9},0).wait(1).to({skewX:-0.8,skewY:-0.5,x:191.6,y:217.8},3,cjs.Ease.get(-1)).to({regY:-2.8,rotation:-6.3,skewX:0,skewY:0,x:191.9,y:225.4},11).wait(1).to({regX:15,regY:20,rotation:-6.2,x:188,y:248.7},0).wait(1).to({rotation:-6.1,x:188.1,y:248.6},0).wait(1).to({rotation:-5.8,x:188.2,y:248.3},0).wait(1).to({rotation:-5.3,x:188.3,y:247.9},0).wait(1).to({rotation:-4.6,x:188.5,y:247.4},0).wait(1).to({rotation:-3.8,x:188.7,y:246.8},0).wait(1).to({rotation:-3,x:188.9,y:246.1},0).wait(1).to({rotation:-2.3,x:189.1,y:245.6},0).wait(1).to({rotation:-1.7,x:189.3,y:245.1},0).wait(1).to({rotation:-1.2,x:189.4,y:244.7},0).wait(1).to({rotation:-0.8,x:189.5,y:244.4},0).wait(1).to({rotation:-0.5,x:189.6,y:244.1},0).wait(1).to({rotation:-0.3,y:244},0).wait(1).to({rotation:-0.2,x:189.7,y:243.8},0).wait(1).to({rotation:-0.1,x:189.8},0).wait(1).to({rotation:0,x:189.7,y:243.7},0).wait(1).to({regX:21.4,regY:-2.9,x:196.2,y:220.9},0).wait(16));

	// shared_gunfight_left_forearm
	this.instance_6 = new lib.shared_gunfight_left_forearm_1();
	this.instance_6.setTransform(184,161,1,1,0,0,0,10.2,2.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({regY:2.3,rotation:14.9,x:191,y:157.6},0).to({regY:2.2,rotation:5.2,x:183.8,y:161.9},4,cjs.Ease.get(1)).to({rotation:0,x:184,y:161},3).wait(1).to({rotation:1.4,x:199,y:147},6,cjs.Ease.get(0.01)).to({y:146},4,cjs.Ease.get(-1)).to({regY:2.3,rotation:14.9,x:191,y:157.6},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:13.5,x:196,y:153.6},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:14.9,x:191,y:157.6},4).wait(11).to({regY:2.2,rotation:0,x:184,y:161},0).wait(1).to({regX:18,regY:35,x:191.8,y:193.9},0).wait(1).to({rotation:-0.1,x:191.9,y:194.2},0).wait(1).to({regX:10.2,regY:2.2,rotation:-0.3,x:184,y:162},0).wait(1).to({regX:18,regY:35,rotation:-0.2,x:191.9,y:194.3},0).wait(1).to({rotation:0,x:191.8,y:193.9},0).wait(1).to({regX:10.2,regY:2.2,x:184,y:161},0).wait(2).to({regX:18,regY:35,x:191.8,y:193.9},0).wait(1).to({rotation:-0.1,x:191.9,y:194.2},0).wait(1).to({regX:10.2,regY:2.2,rotation:-0.3,x:184,y:162},0).wait(1).to({regX:18,regY:35,rotation:-0.2,x:191.9,y:194.3},0).wait(1).to({rotation:0,x:191.8,y:193.9},0).wait(1).to({regX:10.2,regY:2.2,x:184,y:161},0).wait(1).to({skewX:-4,skewY:-3.8,x:175.3,y:159.1},3,cjs.Ease.get(-1)).to({rotation:4.2,skewX:0,skewY:0,x:184.2,y:164.8},11).wait(1).to({regX:18,regY:35,x:189.6,y:198},0).wait(1).to({rotation:4.1,x:189.7,y:197.8},0).wait(1).to({rotation:3.8,x:189.8,y:197.6},0).wait(1).to({rotation:3.5,x:189.9,y:197.4},0).wait(1).to({rotation:3.1,x:190.2,y:196.9},0).wait(1).to({rotation:2.5,x:190.5,y:196.4},0).wait(1).to({rotation:2,x:190.7,y:195.9},0).wait(1).to({rotation:1.5,x:191,y:195.4},0).wait(1).to({rotation:1.1,x:191.2,y:195},0).wait(1).to({rotation:0.8,x:191.4,y:194.6},0).wait(1).to({rotation:0.6,x:191.5,y:194.3},0).wait(1).to({rotation:0.4,x:191.6,y:194.2},0).wait(1).to({rotation:0.2,x:191.7,y:194},0).wait(1).to({rotation:0.1,x:191.8,y:193.9},0).wait(1).to({rotation:0,y:193.8},0).wait(2).to({regX:10.2,regY:2.2,x:184,y:161},0).wait(16));

	// shared_gunfight_right_upper_arm
	this.instance_7 = new lib.shared_gunfight_right_upper_arm_1();
	this.instance_7.setTransform(66.4,102.4,1,1,0,0,0,35.6,18.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({rotation:7.4,x:66,y:100.9},0).to({rotation:0,x:66.4,y:102.4},4,cjs.Ease.get(1)).wait(4).to({rotation:12.7,y:100},6,cjs.Ease.get(0.01)).wait(4).to({rotation:7.4,x:66,y:100.9},9,cjs.Ease.get(-1)).to({regX:35.5,regY:18.7,scaleX:1,scaleY:1,rotation:11.6,x:65.9},4,cjs.Ease.get(-1)).to({regX:35.6,regY:18.6,scaleX:1,scaleY:1,rotation:7.4,x:66},4).wait(11).to({rotation:0,x:66.4,y:102.4},0).wait(1).to({regX:28,regY:45,x:58.8,y:128.9},0).wait(1).to({y:129.3},0).wait(1).to({regX:35.6,regY:18.6,x:66.4,y:103.4},0).wait(1).to({regX:28,regY:45,x:58.8,y:129.3},0).wait(1).to({y:128.9},0).wait(1).to({regX:35.6,regY:18.6,x:66.4,y:102.4},0).wait(2).to({regX:28,regY:45,x:58.8,y:128.9},0).wait(1).to({y:129.3},0).wait(1).to({regX:35.6,regY:18.6,x:66.4,y:103.4},0).wait(1).to({regX:28,regY:45,x:58.8,y:129.3},0).wait(1).to({y:128.9},0).wait(1).to({regX:35.6,regY:18.6,x:66.4,y:102.4},0).wait(1).to({skewX:-4,skewY:-3.8,x:54.2,y:108.7},3,cjs.Ease.get(-1)).to({regY:18.7,rotation:6,skewX:0,skewY:0,x:70.8,y:100.4},11).wait(1).to({regX:28,regY:45,rotation:5.9,x:60.5,y:125.7},0).wait(1).to({rotation:5.8,x:60.4,y:125.8},0).wait(1).to({rotation:5.5,x:60.3,y:126},0).wait(1).to({rotation:5,x:60.2,y:126.3},0).wait(1).to({rotation:4.4,x:60,y:126.6},0).wait(1).to({rotation:3.6,x:59.8,y:126.9},0).wait(1).to({rotation:2.9,x:59.6,y:127.3},0).wait(1).to({rotation:2.2,x:59.4,y:127.6},0).wait(1).to({rotation:1.6,x:59.3,y:128},0).wait(1).to({rotation:1.1,x:59.1,y:128.2},0).wait(1).to({rotation:0.8,x:59,y:128.4},0).wait(1).to({rotation:0.5,x:58.9,y:128.5},0).wait(1).to({rotation:0.3,y:128.6},0).wait(1).to({rotation:0.2,x:58.8,y:128.7},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:0},0).wait(1).to({regX:35.6,regY:18.6,x:66.4,y:102.4},0).wait(16));

	// shared_gunfight_right_hand
	this.instance_8 = new lib.shared_gunfight_right_hand_1();
	this.instance_8.setTransform(29.4,221.8,1,1,0,0,0,8.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({rotation:-16.7,x:35.4,y:221.4},0).to({regX:8.5,regY:-1.9,rotation:-19.7,x:36.9,y:224.9},4,cjs.Ease.get(1)).to({regX:8.6,regY:-2,rotation:0,x:29.4,y:221.8},3).wait(1).to({regX:8.5,rotation:8,x:20.4,y:215.3},6,cjs.Ease.get(0.01)).wait(4).to({regX:8.6,rotation:-16.7,x:35.4,y:221.4},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-21,x:29.8,y:220.1},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-16.7,x:35.4,y:221.4},4).wait(11).to({rotation:0,x:29.4,y:221.8},0).wait(1).to({regX:14,regY:19.5,x:34.7,y:243.4},0).wait(1).to({x:34.6,y:243.7},0).wait(1).to({regX:8.5,regY:-2,x:28.9,y:222.6},0).wait(1).to({regX:14,regY:19.5,x:34.6,y:243.7},0).wait(1).to({x:34.8,y:243.4},0).wait(1).to({regX:8.6,regY:-2,x:29.4,y:221.8},0).wait(2).to({regX:14,regY:19.5,x:34.7,y:243.4},0).wait(1).to({x:34.6,y:243.7},0).wait(1).to({regX:8.5,regY:-2,x:28.9,y:222.6},0).wait(1).to({regX:14,regY:19.5,x:34.6,y:243.7},0).wait(1).to({x:34.8,y:243.4},0).wait(1).to({regX:8.6,regY:-2,x:29.4,y:221.8},0).wait(1).to({regX:8.5,regY:-1.9,skewX:-6.1,skewY:-6,x:28,y:230.1},3,cjs.Ease.get(-1)).to({regX:8.6,regY:-2,rotation:-10.2,skewX:0,skewY:0,x:21.6,y:215.2},11).wait(1).to({regX:14,regY:19.5,rotation:-10.1,x:30.8,y:235.5},0).wait(1).to({rotation:-9.9,y:235.7},0).wait(1).to({rotation:-9.4,x:31,y:236.1},0).wait(1).to({rotation:-8.6,x:31.4,y:236.7},0).wait(1).to({rotation:-7.5,x:31.8,y:237.6},0).wait(1).to({rotation:-6.2,x:32.3,y:238.6},0).wait(1).to({rotation:-4.9,x:32.8,y:239.6},0).wait(1).to({rotation:-3.7,x:33.3,y:240.5},0).wait(1).to({rotation:-2.7,x:33.8,y:241.3},0).wait(1).to({rotation:-2,x:34,y:241.8},0).wait(1).to({rotation:-1.3,x:34.3,y:242.3},0).wait(1).to({rotation:-0.9,x:34.5,y:242.7},0).wait(1).to({rotation:-0.5,x:34.6,y:242.9},0).wait(1).to({rotation:-0.3,x:34.7,y:243.1},0).wait(1).to({rotation:-0.1,x:34.8,y:243.2},0).wait(1).to({rotation:0,y:243.3},0).wait(1).to({regX:8.6,regY:-2,x:29.4,y:221.8},0).wait(16));

	// shared_gunfight_right_forearm
	this.instance_9 = new lib.shared_gunfight_right_forearm_1();
	this.instance_9.setTransform(48.6,163.1,1,1,0,0,0,27.8,6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false},0).wait(23).to({rotation:-12.2,x:40.6,y:158.6},0).to({rotation:-6.5,x:49.4,y:164.3},4,cjs.Ease.get(1)).to({rotation:0,x:48.6,y:163.1},3).wait(1).to({regX:27.7,regY:6.4,rotation:-5.2,x:34.6,y:154.7},6,cjs.Ease.get(0.01)).wait(4).to({regX:27.8,regY:6.3,rotation:-12.2,x:40.6,y:158.6},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-11.3,x:36.1,y:157.5},4,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-12.2,x:40.6,y:158.6},4).wait(11).to({rotation:0,x:48.6,y:163.1},0).wait(1).to({regX:19.5,regY:36,x:40.3,y:192.9},0).wait(1).to({rotation:0.1,x:40.2,y:193.2},0).wait(1).to({regX:27.8,regY:6.3,rotation:0.3,x:48.6,y:164.1},0).wait(1).to({regX:19.5,regY:36,rotation:0.2,x:40.2,y:193.3},0).wait(1).to({rotation:0,x:40.3,y:192.9},0).wait(1).to({regX:27.8,regY:6.3,x:48.6,y:163.1},0).wait(2).to({regX:19.5,regY:36,x:40.3,y:192.9},0).wait(1).to({rotation:0.1,x:40.2,y:193.2},0).wait(1).to({regX:27.8,regY:6.3,rotation:0.3,x:48.6,y:164.1},0).wait(1).to({regX:19.5,regY:36,rotation:0.2,x:40.2,y:193.3},0).wait(1).to({rotation:0,x:40.3,y:192.9},0).wait(1).to({regX:27.8,regY:6.3,x:48.6,y:163.1},0).wait(1).to({regX:27.7,skewX:-6.1,skewY:-6,x:40.6,y:170.1},3,cjs.Ease.get(-1)).to({regY:6.4,rotation:6,skewX:0,skewY:0,x:46.7,y:158.9},11).wait(1).to({regX:19.5,regY:36,rotation:5.9,x:35.5,y:187.5},0).wait(1).to({rotation:5.8,x:35.6,y:187.6},0).wait(1).to({rotation:5.5,x:35.8,y:187.9},0).wait(1).to({rotation:5,x:36.2,y:188.3},0).wait(1).to({rotation:4.4,x:36.8,y:188.9},0).wait(1).to({rotation:3.6,x:37.3,y:189.6},0).wait(1).to({rotation:2.9,x:38,y:190.3},0).wait(1).to({rotation:2.2,x:38.6,y:190.8},0).wait(1).to({rotation:1.6,x:39,y:191.4},0).wait(1).to({rotation:1.1,x:39.4,y:191.8},0).wait(1).to({rotation:0.8,x:39.7,y:192.1},0).wait(1).to({rotation:0.5,x:39.9,y:192.3},0).wait(1).to({rotation:0.3,x:40.1,y:192.5},0).wait(1).to({rotation:0.2,x:40.2,y:192.6},0).wait(1).to({rotation:0.1,x:40.3,y:192.7},0).wait(1).to({rotation:0},0).wait(1).to({regX:27.8,regY:6.3,x:48.6,y:163.1},0).wait(16));

	// shared_gunfight_pants
	this.instance_10 = new lib.shared_gunfight_pants_1();
	this.instance_10.setTransform(112.4,206.2,1,1,0,0,0,58.6,31.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(8).to({_off:false},0).wait(70).to({regX:60.5,regY:147.5,x:114.3,y:322.4},0).wait(1).to({y:322.5},0).wait(1).to({regX:58.6,regY:31.4,x:112.3,y:206.6},0).wait(1).to({regX:60.5,regY:147.5,x:114.2,y:322.5},0).wait(1).to({x:114.3,y:322.4},0).wait(1).to({regX:58.6,regY:31.4,x:112.4,y:206.2},0).wait(2).to({regX:60.5,regY:147.5,x:114.3,y:322.4},0).wait(1).to({y:322.5},0).wait(1).to({regX:58.6,regY:31.4,x:112.3,y:206.6},0).wait(1).to({regX:60.5,regY:147.5,x:114.2,y:322.5},0).wait(1).to({x:114.3,y:322.4},0).wait(1).to({regX:58.6,regY:31.4,x:112.4,y:206.2},0).wait(1).to({skewX:-0.5,skewY:-0.3,x:107.9,y:206.1},3,cjs.Ease.get(-1)).to({skewX:0,skewY:0,x:112.4,y:206.2},15).wait(1).to({regX:60.5,regY:147.5,x:114.3,y:322.3},0).wait(12).to({regX:58.6,regY:31.4,x:112.4,y:206.2},0).wait(16));

	// shared_gunfight_shoes
	this.instance_11 = new lib.shared_gunfight_shoes_1();
	this.instance_11.setTransform(122.3,450.8,1,1,0,0,0,71.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(8).to({_off:false},0).wait(83).to({x:120.3},0).to({x:122.3},2).wait(45));

	// gunfight_platform
	this.instance_12 = new lib.gunfight_platform_1();
	this.instance_12.setTransform(120.1,485.6,1,1,0,0,0,78.5,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(8).to({_off:false},0).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.8,5.1,189,497.6);


(lib.AColonel_games = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start_song":1,"start_encore":9,"hide":19,"out":31,"over":35,"down":59,"wobble_off_screen":68,"wobble_on_screen":97,"bounceToHalt":136});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_9 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.stop();
	}
	this.frame_58 = function() {
		this.stop();
	}
	this.frame_67 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.gotoAndPlay('wobble_off_screen');
		this.dispatchEvent('wobble_off_screen_loop');
	}
	this.frame_135 = function() {
		this.gotoAndPlay('wobble_on_screen');
		this.dispatchEvent('wobble_on_screen_loop');
	}
	this.frame_156 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(8).call(this.frame_9).wait(10).call(this.frame_19).wait(11).call(this.frame_30).wait(4).call(this.frame_34).wait(24).call(this.frame_58).wait(9).call(this.frame_67).wait(29).call(this.frame_96).wait(39).call(this.frame_135).wait(21).call(this.frame_156).wait(1));

	// MOVIECLIPS
	this.main = new lib.games_main();
	this.main.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);

	this.encore = new lib.games_encore();
	this.encore.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.encore.alpha = 0;

	this.hide = new lib.games_hide();
	this.hide.setTransform(29.5,98.5,1,1,0,0,0,29.5,98.5);
	this.hide.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.main}]},1).to({state:[{t:this.encore}]},8).to({state:[{t:this.hide}]},10).to({state:[]},11).to({state:[]},1).wait(126));

	// Layer 2
	this.instance = new lib.rollover_light();
	this.instance.setTransform(110.6,-28.5,1,1,0,0,0,105.5,202);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31).to({_off:false},0).to({scaleX:0.75,y:-48.5,alpha:0},3).wait(1).to({scaleX:1,y:-28.5,alpha:1},21).wait(3).to({scaleX:0.75,y:-48.5,alpha:0},7).to({_off:true},1).wait(90));

	// 8bit_plaque
	this.instance_1 = new lib._8bit_plaque_1();
	this.instance_1.setTransform(92,471,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(8).to({_off:false},0).wait(148));

	// Layer 19
	this.instance_2 = new lib._8bit_overglow();
	this.instance_2.setTransform(85,250.5,1,1,0,0,0,86.5,245);
	this.instance_2.alpha = 0.32;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(31).to({_off:false},0).to({_off:true},3).wait(18).to({_off:false},0).to({_off:true},7).wait(98));

	// Layer 20
	this.instance_3 = new lib._8bit_hide1_1();
	this.instance_3.setTransform(85,250.5,1,1,0,0,0,86.5,245);

	this.instance_4 = new lib._8bit_hide2_1();
	this.instance_4.setTransform(74,236,2.747,0.717,0,0,0,12,204.4);
	this.instance_4._off = true;

	this.instance_5 = new lib._8bit_hide3_1();
	this.instance_5.setTransform(78,238.1,1,1,0,0,0,16.5,16.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},36).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},2).to({state:[]},2).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_3}]},2).to({state:[]},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(37).to({_off:false},0).to({regY:204.5,scaleX:0.5,scaleY:0.59,y:236.1},2).to({_off:true},1).wait(117));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40).to({_off:false},0).to({scaleX:0.7,scaleY:0.7},2).to({_off:true},2).wait(4).to({_off:false},0).wait(1).to({scaleX:2.15,scaleY:2.15},0).to({_off:true},2).wait(106));

	// 8bit_part9
	this.instance_6 = new lib._8bit_part9_2();
	this.instance_6.setTransform(84.5,56.5,1,1,0,0,0,50.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(1).to({x:94.5},0).wait(1).to({x:84.5},0).wait(82).to({x:64.5},3).wait(1).to({x:68.5},0).to({x:84.5},5).wait(12));

	// 8bit_part8
	this.instance_7 = new lib._8bit_part8_2();
	this.instance_7.setTransform(69,243.5,1,1,0,0,0,66,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(1).to({x:49},0).wait(2).to({x:69},0).wait(81).to({x:79},3).wait(1).to({x:69},0).wait(17));

	// 8bit_part7
	this.instance_8 = new lib._8bit_part7_2();
	this.instance_8.setTransform(84.5,175.5,1,1,0,0,0,84.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(36).to({x:64.5},0).wait(5).to({x:84.5},0).wait(26).to({x:64.5},0).wait(6).to({x:84.5},0).wait(11).to({x:104.5},3).wait(1).to({x:94.5},0).to({x:84.5},5).wait(12));

	// 8bit_part6
	this.instance_9 = new lib._8bit_part6_1();
	this.instance_9.setTransform(74.5,359.5,1,1,0,0,0,55.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(20).to({x:64.5},0).wait(4).to({x:74.5},0).wait(17).to({x:84.5},0).wait(4).to({x:74.5},0).wait(5).to({x:64.5},0).wait(8).to({x:74.5},0).wait(15).to({x:84.5},0).wait(11).to({x:74.5},0).to({x:54.5},3).wait(1).to({x:84.5},0).to({x:74.5},5).wait(12));

	// 8bit_part5
	this.instance_10 = new lib._8bit_part5_2();
	this.instance_10.setTransform(79,349.5,1,1,0,0,0,51,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(41).to({x:89},0).wait(4).to({x:79},0).wait(28).to({x:89},0).wait(11).to({x:79},0).to({x:69},3).wait(1).to({x:84},0).to({x:79},5).wait(12));

	// 8bit_part5_1
	this.instance_11 = new lib._8bit_part5_1_1();
	this.instance_11.setTransform(84.5,355.5,1,1,0,0,0,52.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(1).to({x:74.5},0).wait(2).to({x:84.5},0).wait(38).to({x:94.5},0).wait(4).to({x:84.5},0).wait(28).to({x:94.5},0).wait(11).to({x:84.5},0).to({x:50.5},3).wait(1).to({x:86.5},0).to({x:84.5},5).wait(12));

	// 8bit_part4
	this.instance_12 = new lib._8bit_part4_1();
	this.instance_12.setTransform(76.5,410.5,1,1,0,0,0,42.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(36).to({x:56.5},0).wait(5).to({x:96.5},0).wait(4).to({x:76.5},0).wait(22).to({x:56.5},0).wait(6).to({x:96.5},0).wait(11).to({x:76.5},0).wait(4).to({x:56.5},0).to({x:76.5},5).wait(12));

	// 8bit_part3
	this.instance_13 = new lib._8bit_part3_1();
	this.instance_13.setTransform(87.5,70.5,1,1,0,0,0,49.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(105));

	// 8bit_part2
	this.instance_14 = new lib._8bit_part2_1();
	this.instance_14.setTransform(80.5,31,1,1,0,0,0,46.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(3).to({y:41},0).wait(1).to({y:31},0).wait(20).to({x:70.5},0).wait(12).to({x:80.5},0).wait(22).to({x:70.5},0).wait(9).to({x:80.5},0).wait(17).to({x:70.5},3).wait(1).to({x:90.5},0).to({x:80.5},5).wait(12));

	// 8bit_part1
	this.instance_15 = new lib._8bit_part1_1();
	this.instance_15.setTransform(86.5,209.5,1,1,0,0,0,86.5,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(1).to({y:232.5},0).wait(2).to({y:209.5},0).wait(27).to({x:96.5},0).wait(6).to({x:86.5},0).wait(27).to({x:96.5},0).wait(4).to({x:86.5},0).wait(17).to({x:76.5},3).wait(1).to({x:89.5},0).to({x:86.5},5).wait(12));

	// 8bitbod
	this.instance_16 = new lib._8bitbod_1();
	this.instance_16.setTransform(84.5,275.5,1,1,0,0,0,84.5,221.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({_off:true},1).wait(8).to({_off:false},0).wait(26).to({_off:true},1).wait(16).to({_off:false},0).wait(105));

	// 8bit_stand
	this.instance_17 = new lib._8bit_stand_1();
	this.instance_17.setTransform(83.5,480.5,1,1,0,0,0,78.5,16.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({_off:true},1).wait(8).to({_off:false},0).wait(148));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7,173,490);


// stage content:



(lib.mandolin = function() {
	this.initialize();

	// AMandolin_karaoke
	this.karaoke = new lib.mandolin__karaoke();
	this.karaoke.setTransform(160.5,19.5,1,1,0,0,0,160.5,19.5);

	this.instance = new lib.Atest();
	this.instance.setTransform(2122.5,348.1,1,1,0,0,0,102,328.1);

	this.instance_1 = new lib.AMandolin_karaoke();

	// AColonel_mandolin
	this.instance_2 = new lib.AColonel_mandolin();
	this.instance_2.setTransform(548.5,362.2);

	// AColonel_loose_lips
	this.instance_3 = new lib.AColonel_loose_lips();
	this.instance_3.setTransform(683.6,318.6,1,1,0,0,0,37.5,102.5);

	// AColonel_games
	this.instance_4 = new lib.AColonel_games();
	this.instance_4.setTransform(812.5,304.1,1,1,0,0,0,32.5,102);

	// AColonel_gun_fight
	this.instance_5 = new lib.AColonel_gun_fight();
	this.instance_5.setTransform(346.6,191.5);

	// AColonel_early_years
	this.instance_6 = new lib.AColonel_early_years();
	this.instance_6.setTransform(117,236);

	// AColonel_loose_lips_broken
	this.instance_7 = new lib.AColonel_loose_lips_broken();
	this.instance_7.setTransform(1207.5,406.5,1,1,0,0,0,123,259);

	// AColonel_departed
	this.instance_8 = new lib.AColonel_departed();
	this.instance_8.setTransform(952.6,384.6,1,1,0,0,0,33.5,95.5);

	// ABucket
	this.instance_9 = new lib.ABucket();

	this.addChild(this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.karaoke);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(697.6,376.4,1403.5,892.6);

})(lib.mandolin = lib.mandolin||{}, images.mandolin = images.mandolin||{}, createjs = createjs||{});
var lib, images, createjs;
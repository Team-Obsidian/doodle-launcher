(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1400,
	height: 758,
	fps: 30,
	color: "#999999",
	manifest: [
		{src:"images/bgtouchups.png", id:"bgtouchups"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/box_shadow_01.png", id:"box_shadow_01"},
		{src:"images/buttonpixel.png", id:"buttonpixel"},
		{src:"images/cubadonkey2.png", id:"cubadonkey2"},
		{src:"images/cubadoneky2backlegs.png", id:"cubadoneky2backlegs"},
		{src:"images/cubadoneky3.png", id:"cubadoneky3"},
		{src:"images/cubadoneky4.png", id:"cubadoneky4"},
		{src:"images/cubadoneky4backlegs.png", id:"cubadoneky4backlegs"},
		{src:"images/cubadonkey1.png", id:"cubadonkey1"},
		{src:"images/cubadonkey1backlegs.png", id:"cubadonkey1backlegs"},
		{src:"images/cubadonkey3backlegs.png", id:"cubadonkey3backlegs"},
		{src:"images/cubahat.png", id:"cubahat"},
		{src:"images/cubaman.png", id:"cubaman"},
		{src:"images/cuba_donkey_f_legs.png", id:"cuba_donkey_f_legs"},
		{src:"images/early_l_arm_down.png", id:"early_l_arm_down"},
		{src:"images/early_l_hand.png", id:"early_l_hand"},
		{src:"images/early_pants1.png", id:"early_pants1"},
		{src:"images/early_plaque.png", id:"early_plaque"},
		{src:"images/early_platform.png", id:"early_platform"},
		{src:"images/early_r_forearm.png", id:"early_r_forearm"},
		{src:"images/early_r_hand.png", id:"early_r_hand"},
		{src:"images/early_r_upperarm.png", id:"early_r_upperarm"},
		{src:"images/early_s_browl.png", id:"early_s_browl"},
		{src:"images/early_s_browr.png", id:"early_s_browr"},
		{src:"images/early_s_chickenpointer.png", id:"early_s_chickenpointer"},
		{src:"images/early_s_eyel.png", id:"early_s_eyel"},
		{src:"images/early_s_eyer.png", id:"early_s_eyer"},
		{src:"images/early_s_head.png", id:"early_s_head"},
		{src:"images/early_s_jaw.png", id:"early_s_jaw"},
		{src:"images/early_s_l_fingers.png", id:"early_s_l_fingers"},
		{src:"images/early_s_l_forearm.png", id:"early_s_l_forearm"},
		{src:"images/early_s_l_hand.png", id:"early_s_l_hand"},
		{src:"images/early_s_l_upperarm.png", id:"early_s_l_upperarm"},
		{src:"images/early_s_lids.png", id:"early_s_lids"},
		{src:"images/early_s_mouth_l.png", id:"early_s_mouth_l"},
		{src:"images/early_s_mouth_r.png", id:"early_s_mouth_r"},
		{src:"images/early_s_neck.png", id:"early_s_neck"},
		{src:"images/early_s_top_lip2.png", id:"early_s_top_lip2"},
		{src:"images/early_shoes.png", id:"early_shoes"},
		{src:"images/early_vest.png", id:"early_vest"},
		{src:"images/edgeshad.png", id:"edgeshad"},
		{src:"images/ey_newtitle_tires_3.png", id:"ey_newtitle_tires_3"},
		{src:"images/ey_pole_end.png", id:"ey_pole_end"},
		{src:"images/ey_s_bm_s.png", id:"ey_s_bm_s"},
		{src:"images/ey_s_board.png", id:"ey_s_board"},
		{src:"images/ey_s_box_l.png", id:"ey_s_box_l"},
		{src:"images/ey_s_box_mid.png", id:"ey_s_box_mid"},
		{src:"images/ey_s_box_r.png", id:"ey_s_box_r"},
		{src:"images/ey_s_btn_back.png", id:"ey_s_btn_back"},
		{src:"images/ey_s_btn_scroll.png", id:"ey_s_btn_scroll"},
		{src:"images/ey_s_button_flickerz.png", id:"ey_s_button_flickerz"},
		{src:"images/ey_s_dark_bucket_01b.png", id:"ey_s_dark_bucket_01b"},
		{src:"images/ey_s_drag_sign.png", id:"ey_s_drag_sign"},
		{src:"images/ey_s_end_bg.png", id:"ey_s_end_bg"},
		{src:"images/ey_s_end_text.png", id:"ey_s_end_text"},
		{src:"images/ey_s_eye_l_school.png", id:"ey_s_eye_l_school"},
		{src:"images/ey_s_eye_r_school.png", id:"ey_s_eye_r_school"},
		{src:"images/ey_s_faceb.png", id:"ey_s_faceb"},
		{src:"images/ey_s_flicker.png", id:"ey_s_flicker"},
		{src:"images/ey_s_hole.png", id:"ey_s_hole"},
		{src:"images/ey_s_intro_slide.png", id:"ey_s_intro_slide"},
		{src:"images/ey_s_l_s.png", id:"ey_s_l_s"},
		{src:"images/ey_s_matte.jpg", id:"ey_s_matte"},
		{src:"images/ey_s_pole.png", id:"ey_s_pole"},
		{src:"images/ey_s_r_s.png", id:"ey_s_r_s"},
		{src:"images/ey_s_red_line.png", id:"ey_s_red_line"},
		{src:"images/ey_s_scroll_line.png", id:"ey_s_scroll_line"},
		{src:"images/ey_s_sroll_hide.png", id:"ey_s_sroll_hide"},
		{src:"images/ey_s_sroll_patch.png", id:"ey_s_sroll_patch"},
		{src:"images/ey_s_stage_fix.png", id:"ey_s_stage_fix"},
		{src:"images/ey_s_title_1.png", id:"ey_s_title_1"},
		{src:"images/ey_s_title_2.png", id:"ey_s_title_2"},
		{src:"images/ey_s_title_4.png", id:"ey_s_title_4"},
		{src:"images/ey_s_title_5_new.png", id:"ey_s_title_5_new"},
		{src:"images/ey_s_title_intro.png", id:"ey_s_title_intro"},
		{src:"images/ey_s_tweet.png", id:"ey_s_tweet"},
		{src:"images/ey_s_white_ng.png", id:"ey_s_white_ng"},
		{src:"images/fore_1.png", id:"fore_1"},
		{src:"images/fore_1sDropShadow.png", id:"fore_1sDropShadow"},
		{src:"images/fore_2.png", id:"fore_2"},
		{src:"images/fore_2sDropShadow.png", id:"fore_2sDropShadow"},
		{src:"images/garage_bg.png", id:"garage_bg"},
		{src:"images/garage_cat.png", id:"garage_cat"},
		{src:"images/garage_fire_1.png", id:"garage_fire_1"},
		{src:"images/garage_fire_2.png", id:"garage_fire_2"},
		{src:"images/garage_fire_3.png", id:"garage_fire_3"},
		{src:"images/garage_fore_1.png", id:"garage_fore_1"},
		{src:"images/garage_fore_1sDropShadow.png", id:"garage_fore_1sDropShadow"},
		{src:"images/garage_fore_2.png", id:"garage_fore_2"},
		{src:"images/garage_fore_2sDropShadow.png", id:"garage_fore_2sDropShadow"},
		{src:"images/garage_man_2.png", id:"garage_man_2"},
		{src:"images/garage_man_2_1.png", id:"garage_man_2_1"},
		{src:"images/garage_man_tyre.png", id:"garage_man_tyre"},
		{src:"images/garage_spark_1.png", id:"garage_spark_1"},
		{src:"images/garage_spark_2.png", id:"garage_spark_2"},
		{src:"images/garage_spark_3.png", id:"garage_spark_3"},
		{src:"images/garage_spark_4.png", id:"garage_spark_4"},
		{src:"images/garage_stick_01.png", id:"garage_stick_01"},
		{src:"images/garage_stick_01sDropShadow.png", id:"garage_stick_01sDropShadow"},
		{src:"images/garage_truck.png", id:"garage_truck"},
		{src:"images/garage_truckman.png", id:"garage_truckman"},
		{src:"images/hall_bucket.png", id:"hall_bucket"},
		{src:"images/hall_bucket_d.png", id:"hall_bucket_d"},
		{src:"images/hall_chicken_d.png", id:"hall_chicken_d"},
		{src:"images/homerockingchair.png", id:"homerockingchair"},
		{src:"images/home_boy_1.png", id:"home_boy_1"},
		{src:"images/home_broom.png", id:"home_broom"},
		{src:"images/home_building.png", id:"home_building"},
		{src:"images/home_cat_2.png", id:"home_cat_2"},
		{src:"images/home_chciken_3.png", id:"home_chciken_3"},
		{src:"images/home_chicken_1.png", id:"home_chicken_1"},
		{src:"images/home_chicken_2.png", id:"home_chicken_2"},
		{src:"images/home_dog.png", id:"home_dog"},
		{src:"images/home_dog_tail.png", id:"home_dog_tail"},
		{src:"images/home_fore_1.png", id:"home_fore_1"},
		{src:"images/home_fore_1sDropShadow.png", id:"home_fore_1sDropShadow"},
		{src:"images/home_man1.png", id:"home_man1"},
		{src:"images/home_smoke.png", id:"home_smoke"},
		{src:"images/home_snake.png", id:"home_snake"},
		{src:"images/home_stick_01.png", id:"home_stick_01"},
		{src:"images/home_stick_01sDropShadow.png", id:"home_stick_01sDropShadow"},
		{src:"images/home_woman2_arm_left.png", id:"home_woman2_arm_left"},
		{src:"images/home_woman_1.png", id:"home_woman_1"},
		{src:"images/home_woman_1_arms.png", id:"home_woman_1_arms"},
		{src:"images/home_woman_2.png", id:"home_woman_2"},
		{src:"images/school_bg_new_1.png", id:"school_bg_new_1"},
		{src:"images/school_chin.png", id:"school_chin"},
		{src:"images/school_eyebrowleft.png", id:"school_eyebrowleft"},
		{src:"images/school_eyebrowright.png", id:"school_eyebrowright"},
		{src:"images/school_eyeliddarkleft.png", id:"school_eyeliddarkleft"},
		{src:"images/school_eyeliddarkright.png", id:"school_eyeliddarkright"},
		{src:"images/school_eyelid_overlay.png", id:"school_eyelid_overlay"},
		{src:"images/school_head.png", id:"school_head"},
		{src:"images/steamduck.png", id:"steamduck"},
		{src:"images/steam_bg.png", id:"steam_bg"},
		{src:"images/steam_boat.png", id:"steam_boat"},
		{src:"images/steam_boy_1.png", id:"steam_boy_1"},
		{src:"images/steam_boy_2.png", id:"steam_boy_2"},
		{src:"images/steam_dog.png", id:"steam_dog"},
		{src:"images/steam_lad_1.png", id:"steam_lad_1"},
		{src:"images/steam_lighting_1.png", id:"steam_lighting_1"},
		{src:"images/steam_lighting_2.png", id:"steam_lighting_2"},
		{src:"images/steam_man.png", id:"steam_man"},
		{src:"images/steam_smoke.png", id:"steam_smoke"},
		{src:"images/stick_01.png", id:"stick_01"},
		{src:"images/stick_01sDropShadow.png", id:"stick_01sDropShadow"}
	]
};



// symbols:



(lib.bgtouchups = function() {
	this.initialize(img.bgtouchups);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,438);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,441);


(lib.box_shadow_01 = function() {
	this.initialize(img.box_shadow_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,495,367);


(lib.buttonpixel = function() {
	this.initialize(img.buttonpixel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,2);


(lib.cubadonkey2 = function() {
	this.initialize(img.cubadonkey2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,82);


(lib.cubadoneky2backlegs = function() {
	this.initialize(img.cubadoneky2backlegs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,31,39);


(lib.cubadoneky3 = function() {
	this.initialize(img.cubadoneky3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.cubadoneky4 = function() {
	this.initialize(img.cubadoneky4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,89);


(lib.cubadoneky4backlegs = function() {
	this.initialize(img.cubadoneky4backlegs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.cubadonkey1 = function() {
	this.initialize(img.cubadonkey1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,73);


(lib.cubadonkey1backlegs = function() {
	this.initialize(img.cubadonkey1backlegs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,17,28);


(lib.cubadonkey3backlegs = function() {
	this.initialize(img.cubadonkey3backlegs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,30);


(lib.cubahat = function() {
	this.initialize(img.cubahat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,18);


(lib.cubaman = function() {
	this.initialize(img.cubaman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,72);


(lib.cuba_donkey_f_legs = function() {
	this.initialize(img.cuba_donkey_f_legs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,38);


(lib.early_l_arm_down = function() {
	this.initialize(img.early_l_arm_down);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.early_l_hand = function() {
	this.initialize(img.early_l_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_pants1 = function() {
	this.initialize(img.early_pants1);
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


(lib.early_r_hand = function() {
	this.initialize(img.early_r_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_upperarm = function() {
	this.initialize(img.early_r_upperarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_s_browl = function() {
	this.initialize(img.early_s_browl);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,11);


(lib.early_s_browr = function() {
	this.initialize(img.early_s_browr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,9);


(lib.early_s_chickenpointer = function() {
	this.initialize(img.early_s_chickenpointer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,140);


(lib.early_s_eyel = function() {
	this.initialize(img.early_s_eyel);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_s_eyer = function() {
	this.initialize(img.early_s_eyer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_s_head = function() {
	this.initialize(img.early_s_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_s_jaw = function() {
	this.initialize(img.early_s_jaw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,20);


(lib.early_s_l_fingers = function() {
	this.initialize(img.early_s_l_fingers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,24);


(lib.early_s_l_forearm = function() {
	this.initialize(img.early_s_l_forearm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,50);


(lib.early_s_l_hand = function() {
	this.initialize(img.early_s_l_hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.early_s_l_upperarm = function() {
	this.initialize(img.early_s_l_upperarm);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,85);


(lib.early_s_lids = function() {
	this.initialize(img.early_s_lids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,9);


(lib.early_s_mouth_l = function() {
	this.initialize(img.early_s_mouth_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.early_s_mouth_r = function() {
	this.initialize(img.early_s_mouth_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.early_s_neck = function() {
	this.initialize(img.early_s_neck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,53,34);


(lib.early_s_top_lip2 = function() {
	this.initialize(img.early_s_top_lip2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,21);


(lib.early_shoes = function() {
	this.initialize(img.early_shoes);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,33);


(lib.early_vest = function() {
	this.initialize(img.early_vest);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,168);


(lib.edgeshad = function() {
	this.initialize(img.edgeshad);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1434,60);


(lib.ey_newtitle_tires_3 = function() {
	this.initialize(img.ey_newtitle_tires_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,101,95);


(lib.ey_pole_end = function() {
	this.initialize(img.ey_pole_end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,21);


(lib.ey_s_bm_s = function() {
	this.initialize(img.ey_s_bm_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,619,228);


(lib.ey_s_board = function() {
	this.initialize(img.ey_s_board);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,237,373);


(lib.ey_s_box_l = function() {
	this.initialize(img.ey_s_box_l);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,189,669);


(lib.ey_s_box_mid = function() {
	this.initialize(img.ey_s_box_mid);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,811,670);


(lib.ey_s_box_r = function() {
	this.initialize(img.ey_s_box_r);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,669);


(lib.ey_s_btn_back = function() {
	this.initialize(img.ey_s_btn_back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,48);


(lib.ey_s_btn_scroll = function() {
	this.initialize(img.ey_s_btn_scroll);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.ey_s_button_flickerz = function() {
	this.initialize(img.ey_s_button_flickerz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.ey_s_dark_bucket_01b = function() {
	this.initialize(img.ey_s_dark_bucket_01b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.ey_s_drag_sign = function() {
	this.initialize(img.ey_s_drag_sign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,108,37);


(lib.ey_s_end_bg = function() {
	this.initialize(img.ey_s_end_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,430);


(lib.ey_s_end_text = function() {
	this.initialize(img.ey_s_end_text);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,121);


(lib.ey_s_eye_l_school = function() {
	this.initialize(img.ey_s_eye_l_school);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,17);


(lib.ey_s_eye_r_school = function() {
	this.initialize(img.ey_s_eye_r_school);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,17);


(lib.ey_s_faceb = function() {
	this.initialize(img.ey_s_faceb);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,31);


(lib.ey_s_flicker = function() {
	this.initialize(img.ey_s_flicker);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,455);


(lib.ey_s_hole = function() {
	this.initialize(img.ey_s_hole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,30);


(lib.ey_s_intro_slide = function() {
	this.initialize(img.ey_s_intro_slide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,430);


(lib.ey_s_l_s = function() {
	this.initialize(img.ey_s_l_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,264);


(lib.ey_s_matte = function() {
	this.initialize(img.ey_s_matte);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,18);


(lib.ey_s_pole = function() {
	this.initialize(img.ey_s_pole);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,63,142);


(lib.ey_s_r_s = function() {
	this.initialize(img.ey_s_r_s);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,218,220);


(lib.ey_s_red_line = function() {
	this.initialize(img.ey_s_red_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,332,3);


(lib.ey_s_scroll_line = function() {
	this.initialize(img.ey_s_scroll_line);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,402,34);


(lib.ey_s_sroll_hide = function() {
	this.initialize(img.ey_s_sroll_hide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,421,59);


(lib.ey_s_sroll_patch = function() {
	this.initialize(img.ey_s_sroll_patch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,422,98);


(lib.ey_s_stage_fix = function() {
	this.initialize(img.ey_s_stage_fix);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,153,48);


(lib.ey_s_title_1 = function() {
	this.initialize(img.ey_s_title_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,54);


(lib.ey_s_title_2 = function() {
	this.initialize(img.ey_s_title_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,54);


(lib.ey_s_title_4 = function() {
	this.initialize(img.ey_s_title_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,54);


(lib.ey_s_title_5_new = function() {
	this.initialize(img.ey_s_title_5_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,54);


(lib.ey_s_title_intro = function() {
	this.initialize(img.ey_s_title_intro);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,86);


(lib.ey_s_tweet = function() {
	this.initialize(img.ey_s_tweet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,38);


(lib.ey_s_white_ng = function() {
	this.initialize(img.ey_s_white_ng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,346,3);


(lib.fore_1 = function() {
	this.initialize(img.fore_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,452,76);


(lib.fore_1sDropShadow = function() {
	this.initialize(img.fore_1sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,456,81);


(lib.fore_2 = function() {
	this.initialize(img.fore_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,546,115);


(lib.fore_2sDropShadow = function() {
	this.initialize(img.fore_2sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,551,120);


(lib.garage_bg = function() {
	this.initialize(img.garage_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,547,442);


(lib.garage_cat = function() {
	this.initialize(img.garage_cat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,20,22);


(lib.garage_fire_1 = function() {
	this.initialize(img.garage_fire_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,12,30);


(lib.garage_fire_2 = function() {
	this.initialize(img.garage_fire_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,29);


(lib.garage_fire_3 = function() {
	this.initialize(img.garage_fire_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,47);


(lib.garage_fore_1 = function() {
	this.initialize(img.garage_fore_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,527,171);


(lib.garage_fore_1sDropShadow = function() {
	this.initialize(img.garage_fore_1sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,530,175);


(lib.garage_fore_2 = function() {
	this.initialize(img.garage_fore_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,319,150);


(lib.garage_fore_2sDropShadow = function() {
	this.initialize(img.garage_fore_2sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,324,155);


(lib.garage_man_2 = function() {
	this.initialize(img.garage_man_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,95);


(lib.garage_man_2_1 = function() {
	this.initialize(img.garage_man_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,44);


(lib.garage_man_tyre = function() {
	this.initialize(img.garage_man_tyre);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,22);


(lib.garage_spark_1 = function() {
	this.initialize(img.garage_spark_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,14,23);


(lib.garage_spark_2 = function() {
	this.initialize(img.garage_spark_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,18);


(lib.garage_spark_3 = function() {
	this.initialize(img.garage_spark_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,22,26);


(lib.garage_spark_4 = function() {
	this.initialize(img.garage_spark_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,25);


(lib.garage_stick_01 = function() {
	this.initialize(img.garage_stick_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.garage_stick_01sDropShadow = function() {
	this.initialize(img.garage_stick_01sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.garage_truck = function() {
	this.initialize(img.garage_truck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,90,57);


(lib.garage_truckman = function() {
	this.initialize(img.garage_truckman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


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


(lib.homerockingchair = function() {
	this.initialize(img.homerockingchair);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.home_boy_1 = function() {
	this.initialize(img.home_boy_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,43);


(lib.home_broom = function() {
	this.initialize(img.home_broom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,46,27);


(lib.home_building = function() {
	this.initialize(img.home_building);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,244);


(lib.home_cat_2 = function() {
	this.initialize(img.home_cat_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.home_chciken_3 = function() {
	this.initialize(img.home_chciken_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,23,19);


(lib.home_chicken_1 = function() {
	this.initialize(img.home_chicken_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,20);


(lib.home_chicken_2 = function() {
	this.initialize(img.home_chicken_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,20);


(lib.home_dog = function() {
	this.initialize(img.home_dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,24);


(lib.home_dog_tail = function() {
	this.initialize(img.home_dog_tail);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.home_fore_1 = function() {
	this.initialize(img.home_fore_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,553,90);


(lib.home_fore_1sDropShadow = function() {
	this.initialize(img.home_fore_1sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,557,94);


(lib.home_man1 = function() {
	this.initialize(img.home_man1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,34,44);


(lib.home_smoke = function() {
	this.initialize(img.home_smoke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,87);


(lib.home_snake = function() {
	this.initialize(img.home_snake);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,26,38);


(lib.home_stick_01 = function() {
	this.initialize(img.home_stick_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.home_stick_01sDropShadow = function() {
	this.initialize(img.home_stick_01sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.home_woman2_arm_left = function() {
	this.initialize(img.home_woman2_arm_left);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,21);


(lib.home_woman_1 = function() {
	this.initialize(img.home_woman_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,48);


(lib.home_woman_1_arms = function() {
	this.initialize(img.home_woman_1_arms);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,21,20);


(lib.home_woman_2 = function() {
	this.initialize(img.home_woman_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,60);


(lib.school_bg_new_1 = function() {
	this.initialize(img.school_bg_new_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,747,475);


(lib.school_chin = function() {
	this.initialize(img.school_chin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,47);


(lib.school_eyebrowleft = function() {
	this.initialize(img.school_eyebrowleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,51,18);


(lib.school_eyebrowright = function() {
	this.initialize(img.school_eyebrowright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,16);


(lib.school_eyeliddarkleft = function() {
	this.initialize(img.school_eyeliddarkleft);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.school_eyeliddarkright = function() {
	this.initialize(img.school_eyeliddarkright);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,43,18);


(lib.school_eyelid_overlay = function() {
	this.initialize(img.school_eyelid_overlay);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,22);


(lib.school_head = function() {
	this.initialize(img.school_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,301,405);


(lib.steamduck = function() {
	this.initialize(img.steamduck);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,20);


(lib.steam_bg = function() {
	this.initialize(img.steam_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,562,449);


(lib.steam_boat = function() {
	this.initialize(img.steam_boat);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,351,106);


(lib.steam_boy_1 = function() {
	this.initialize(img.steam_boy_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,47);


(lib.steam_boy_2 = function() {
	this.initialize(img.steam_boy_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,40,61);


(lib.steam_dog = function() {
	this.initialize(img.steam_dog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.steam_lad_1 = function() {
	this.initialize(img.steam_lad_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,66);


(lib.steam_lighting_1 = function() {
	this.initialize(img.steam_lighting_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,54,103);


(lib.steam_lighting_2 = function() {
	this.initialize(img.steam_lighting_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,31);


(lib.steam_man = function() {
	this.initialize(img.steam_man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,52);


(lib.steam_smoke = function() {
	this.initialize(img.steam_smoke);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,144,136);


(lib.stick_01 = function() {
	this.initialize(img.stick_01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.stick_01sDropShadow = function() {
	this.initialize(img.stick_01sDropShadow);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.white_bg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-285.5,222.5).lineTo(-285.5,-222.5).lineTo(285.5,-222.5).lineTo(285.5,222.5).closePath();
	this.shape.setTransform(285.5,222.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,571,445);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_back();
	this.instance.setTransform(-25,-24);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25,-24,50,48);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_end_text();
	this.instance.setTransform(-71.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-60.5,143,121);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_end_text();
	this.instance.setTransform(-71.5,-60.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-60.5,143,121);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_lids();
	this.instance.setTransform(-16,-4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-4.5,32,9);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_lids();
	this.instance.setTransform(-16,-4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-4.5,32,9);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_lids();
	this.instance.setTransform(-16,-4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-4.5,32,9);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_lids();
	this.instance.setTransform(-16,-4.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,-4.5,32,9);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_top_lip2();
	this.instance.setTransform(-20.5,-10.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.5,-10.5,41,21);


(lib.textholder = function() {
	this.initialize();

	// Layer 1
	this.tf_copy = new cjs.Text("", "14px 'HelveticaNeueLT Std Lt'", "#999999");
	this.tf_copy.name = "tf_copy";
	this.tf_copy.textAlign = "center";
	this.tf_copy.lineHeight = 13;
	this.tf_copy.lineWidth = 142;
	this.tf_copy.setTransform(71,158);

	this.addChild(this.tf_copy);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,158,146.1,170);


(lib.Symbol5 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_box_mid();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,811,670);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-286.1,223).lineTo(-286.1,-223).lineTo(286.1,-223).lineTo(286.1,223).closePath();
	this.shape.setTransform(324.1,165.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(38,-58,572.2,446.1);


(lib.steamduck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steamduck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,20);


(lib.steam_smoke_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_smoke();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,144,136);


(lib.steam_man_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_man();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,52);


(lib.steam_lighting_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_lighting_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,31);


(lib.steam_lighting_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_lighting_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,103);


(lib.steam_lad_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_lad_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,66);


(lib.steam_dog_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_dog();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,36);


(lib.steam_boy_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_boy_2();
	this.instance.setTransform(-21,-31.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21,-31.5,40,61);


(lib.steam_boy_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_boy_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37,47);


(lib.steam_boat_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_boat();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,351,106);


(lib.steam_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.steam_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,562,449);


(lib.ey_s_stage_fix_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_stage_fix();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153,48);


(lib.ey_s_intro_slide_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_intro_slide();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,570,430);


(lib.ey_s_hole_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_hole();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,129,30);


(lib.ey_s_end_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_end_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,570,430);


(lib.ey_s_drag_sign_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_drag_sign();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,37);


(lib.school_head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,301,405);


(lib.school_eyeliddarkright_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_eyeliddarkright();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,18);


(lib.school_eyeliddarkleft_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_eyeliddarkleft();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,15);


(lib.school_eyelid_overlay_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_eyelid_overlay();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,116,22);


(lib.school_eyebrowright_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_eyebrowright();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,16);


(lib.school_eyebrowleft_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_eyebrowleft();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,18);


(lib.school_chin_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.school_chin();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66,47);


(lib.school_bg = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.school_bg_new_1();
	this.instance.setTransform(0,0.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.5,747,475);


(lib.ey_s_eye_r_school_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_eye_r_school();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,17);


(lib.ey_s_eye_l_school_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_eye_l_school();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,17);


(lib.homerockingchair_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.homerockingchair();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,40);


(lib.home_woman2_arm_left_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_woman2_arm_left();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,21);


(lib.home_woman_1_arms_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_woman_1_arms();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,20);


(lib.home_snake_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_snake();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,38);


(lib.home_smoke_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_smoke();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,87);


(lib.home_dog_tail_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_dog_tail();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.home_cat_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_cat_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,26);


(lib.home_building_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_building();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,394,244);


(lib.home_broom_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_broom();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,27);


(lib.bgtouchups_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgtouchups();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,553,438);


(lib.home_stick_01sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_stick_01sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.home_stick_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_stick_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.home_fore_1sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_fore_1sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,557,94);


(lib.home_fore_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_fore_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,553,90);


(lib.bucketMain = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.hall_bucket();
	this.instance.setTransform(-16,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16,0,655,643);


(lib.bucketChicken = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.hall_chicken_d();
	this.instance.setTransform(-20,-9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20,-9,587,134);


(lib.garage_truckman_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_truckman();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,25);


(lib.garage_truck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_truck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,57);


(lib.garage_spark_4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_spark_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,25);


(lib.garage_spark_3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_spark_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,26);


(lib.garage_spark_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_spark_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,18);


(lib.garage_spark_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_spark_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,23);


(lib.garage_fire_3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fire_3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,47);


(lib.garage_fire_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fire_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,29);


(lib.garage_fire_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fire_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,12,30);


(lib.garage_bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,547,442);


(lib.garage_stick_01sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_stick_01sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.garage_stick_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_stick_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.garage_fore_2sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fore_2sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,324,155);


(lib.garage_fore_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fore_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,319,150);


(lib.garage_fore_1sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fore_1sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,530,175);


(lib.garage_fore_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_fore_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,527,171);


(lib.flicker_ani = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_flicker();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,606,455);


(lib.ey_s_title_4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_title_4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,54);


(lib.ey_s_title_3 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.ey_newtitle_tires_3();
	this.instance.setTransform(-18,-29);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,-29,101,95);


(lib.ey_s_title_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_title_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93,54);


(lib.ey_s_title_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_title_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,54);


(lib.ey_s_title_5_new_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_title_5_new();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74,54);


(lib.edgeshad_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.edgeshad();
	this.instance.setTransform(0,1.2,1,1.527);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,1434,91.6);


(lib.ey_s_sroll_patch_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_sroll_patch();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,422,98);


(lib.ey_s_sroll_hide_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_sroll_hide();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,421,59);


(lib.ey_s_r_s_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_r_s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,218,220);


(lib.ey_s_l_s_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_l_s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,212,264);


(lib.ey_s_box_r_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_box_r();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181,669);


(lib.ey_s_box_l_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_box_l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,189,669);


(lib.ey_s_bm_s_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_bm_s();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,619,228);


(lib.ey_s_pole_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_pole();

	// ey_pole_end
	this.instance_1 = new lib.ey_pole_end();
	this.instance_1.setTransform(-29.2,121.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29.2,0,92.2,142.3);


(lib.ey_s_board_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_board();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,373);


(lib.ey_s_button_flickerz_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_button_flickerz();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,41);


(lib.ey_s_tweet_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_tweet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,38);


(lib.ey_s_faceb_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_faceb();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,31);


(lib.ey_s_scroll_line_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_scroll_line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402,34);


(lib.ey_s_white_ng_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_white_ng();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,346,3);


(lib.ey_s_red_line_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_red_line();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,332,3);


(lib.ey_s_matte_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_matte();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,18);


(lib.early_platform_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_platform();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,148,32);


(lib.early_plaque_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_plaque();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,32);


(lib.early_s_l_upperarm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_l_upperarm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,85);


(lib.early_s_l_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_l_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,32);


(lib.early_s_l_forearm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_l_forearm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64,50);


(lib.early_s_l_fingers_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_l_fingers();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,24);


(lib.early_s_chickenpointer_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_chickenpointer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,140);


(lib.doesntmatter = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.buttonpixel();
	this.instance.setTransform(47.9,665.8,644.215,46.377);

	this.instance_1 = new lib.buttonpixel();
	this.instance_1.setTransform(0.2,11.2,45.721,371.02);

	this.instance_2 = new lib.buttonpixel();
	this.instance_2.setTransform(-0.4,-2.1,163.288,76.499);

	this.instance_3 = new lib.buttonpixel();
	this.instance_3.setTransform(1073.9,-0.5,163.288,110.923);

	this.instance_4 = new lib.buttonpixel();
	this.instance_4.setTransform(1291.3,13.1,54.878,372.94);

	this.addChild(this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-2.1,1401.4,761.1);


(lib.dark_b = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.hall_bucket_d();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.cuba_donkey_f_legs_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cuba_donkey_f_legs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,38);


(lib.cubahat_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubahat();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,18);


(lib.cubadoneky4backlegs_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadoneky4backlegs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,39);


(lib.cubadoneky4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadoneky4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,84,89);


(lib.stick_01sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.stick_01sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.stick_01_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.stick_01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,87);


(lib.cubadonkey3backlegs_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadonkey3backlegs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,22,30);


(lib.cubadoneky3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadoneky3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,56);


(lib.cubadoneky2backlegs_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadoneky2backlegs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31,39);


(lib.cubadonkey2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadonkey2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,82);


(lib.cubadonkey1backlegs_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadonkey1backlegs();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,17,28);


(lib.cubadonkey1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubadonkey1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,73);


(lib.bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,553,441);


(lib.fore_2sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fore_2sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,551,120);


(lib.fore_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fore_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,546,115);


(lib.fore_1sDropShadow_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fore_1sDropShadow();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,456,81);


(lib.fore_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fore_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,452,76);


(lib.early_s_neck_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_neck();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53,34);


(lib.early_s_mouth_r_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_mouth_r();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.early_s_mouth_l_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_mouth_l();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,8);


(lib.early_s_jaw_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_jaw();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,20);


(lib.early_s_head_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_head();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52,67);


(lib.early_s_eyer_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_eyer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_s_eyel_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_eyel();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,11,12);


(lib.early_s_browr_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_browr();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,9);


(lib.early_s_browl_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_browl();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,11);


(lib.early_shoes_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_shoes();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,130,33);


(lib.early_r_upperarm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_upperarm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,88);


(lib.early_r_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,35);


(lib.early_r_forearm_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_r_forearm();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43,66);


(lib.early_pants = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_pants1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,106,220);


(lib.early_l_hand_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_l_hand();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,45);


(lib.early_l_arm_down_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_l_arm_down();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,29,155);


(lib.button = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ey_s_btn_scroll();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.box_shadow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.box_shadow_01();
	this.instance.setTransform(0,0,2.11,2.11);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1044.5,774.4);


(lib.Symbol10copy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.9
			}).wait(16).set({
				progress: 0.4
			}).wait(16).set({
				progress: 0.2
			}).wait(17).set({
				progress: 0.3
			}).wait(17).set({
				progress: 0.96
			}).wait(16).set({
				progress: 0.9
			}).wait(17).set({
				progress: 0.6
			}).wait(16).set({
				progress:0.001
			})
			
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.Symbol10copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.059998174122467704
			}).wait(15).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.1592742056018891
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.11377269117382093
			}).wait(17).set({
				progress: 0.10963618986217841
			}).wait(17).set({
				progress: 0.15100120297860406
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(18).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(18).set({
				progress: 0.2461407331463827
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(18).set({
				progress: 0.5770608380777871
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(18).set({
				progress: 0.6432448590640681
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(18).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(18).set({
				progress: 0.38678177774222955
			}).wait(18).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.43641979348194027
			}).wait(15).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.8459334233345532
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(18).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(16).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(18).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(16).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(16).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.08068068068068053
			}).wait(16).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.05172517149918266
			}).wait(17).set({
				progress: 0.05172517149918266
			}).wait(16).set({
				progress: 0.05586167281082518
			}).wait(17).set({
				progress: 0.08481718199232305
			}).wait(17).set({
				progress: 0.1427282003553188
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(18).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.15513770429024656
			}).wait(16).set({
				progress: 0.15513770429024656
			}).wait(17).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(16).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(18).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(18).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(16).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(16).set({
				progress: 0.04758867018754003
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
				progress: 0.010360158382757112
			}).wait(17).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(18).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(18).set({
				progress: 0.25027723445802524
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.1923662160950295
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.15513770429024656
			}).wait(16).set({
				progress: 0.13859169904367627
			}).wait(17).set({
				progress: 0.13859169904367627
			}).wait(17).set({
				progress: 0.13859169904367627
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(16).set({
				progress: 0.23786773052309745
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(16).set({
				progress: 0.6018798459476427
			}).wait(18).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(16).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.19650271740667202
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(16).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(18).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(16).set({
				progress: 0.1923662160950295
			}).wait(17).set({
				progress: 0.1923662160950295
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(18).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(17).set({
				progress: 0.8914349377626214
			}).wait(16).set({
				progress: 0.874888932516051
			}).wait(17).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.8045684102181275
			}).wait(18).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(18).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.20477572002995728
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(16).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.1427282003553188
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.10963618986217841
			}).wait(16).set({
				progress: 0.08895368330396579
			}).wait(17).set({
				progress: 0.05586167281082518
			}).wait(16).set({
				progress: 0.035179166252612463
			}).wait(17).set({
				progress: 0.014496659694399741
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
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.08481718199232305
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(18).set({
				progress: 0.6432448590640681
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(18).set({
				progress: 0.4777848065983657
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(16).set({
				progress: 0.16754720822517413
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(16).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.04758867018754003
			}).wait(17).set({
				progress: 0.02690616362932731
			}).wait(16).set({
				progress: 0.010360158382757112
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
				progress: 0.006223657071114482
			}).wait(17).set({
				progress: 0.10963618986217841
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(16).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(18).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(18).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(18).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.04758867018754003
			}).wait(16).set({
				progress: 0.0020871557594720667
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
			}).wait(17).set({
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.Symbol10copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.03104266494096983
			}).wait(16).set({
				progress: 0.03104266494096983
			}).wait(16).set({
				progress: 0.04758867018754003
			}).wait(17).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.1592742056018891
			}).wait(17).set({
				progress: 0.10963618986217841
			}).wait(17).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.07654417936903801
			}).wait(16).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.16341070691353163
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.39091827905387205
			}).wait(18).set({
				progress: 0.5150133184031488
			}).wait(16).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(16).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(18).set({
				progress: 0.6266988538174976
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(16).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.5108768170915063
			}).wait(18).set({
				progress: 0.6266988538174976
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(19).set({
				progress: 0.8872984364509786
			}).wait(16).set({
				progress: 0.8955714390742638
			}).wait(15).set({
				progress: 0.8914349377626214
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(18).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.21304872265324232
			}).wait(16).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.1427282003553188
			}).wait(17).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.11790919248546367
			}).wait(16).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(18).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(18).set({
				progress: 0.4984673131565785
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.11790919248546367
			}).wait(17).set({
				progress: 0.05172517149918266
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
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(16).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.8955714390742638
			}).wait(17).set({
				progress: 0.912117444320834
			}).wait(16).set({
				progress: 0.912117444320834
			}).wait(17).set({
				progress: 0.8872984364509786
			}).wait(16).set({
				progress: 0.8542064259578385
			}).wait(18).set({
				progress: 0.800431908906485
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(16).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8955714390742638
			}).wait(17).set({
				progress: 0.8914349377626214
			}).wait(16).set({
				progress: 0.8666159298927658
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.5853338407010721
			}).wait(18).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8666159298927658
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(16).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.9369364521906893
			}).wait(17).set({
				progress: 0.9493459561256169
			}).wait(16).set({
				progress: 0.9534824574372597
			}).wait(17).set({
				progress: 0.9410729535023321
			}).wait(17).set({
				progress: 0.9038444416975487
			}).wait(16).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.1923662160950295
			}).wait(17).set({
				progress: 0.1427282003553188
			}).wait(17).set({
				progress: 0.11377269117382093
			}).wait(17).set({
				progress: 0.0930901846156081
			}).wait(16).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(16).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(18).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(17).set({
				progress: 0.1468647016669613
			}).wait(16).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.1923662160950295
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(18).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(18).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(16).set({
				progress: 0.035179166252612463
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
				progress: 0.0020871557594720667
			}).wait(17).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(18).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.20477572002995728
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8624794285811233
			}).wait(16).set({
				progress: 0.8914349377626214
			}).wait(17).set({
				progress: 0.9162539456324768
			}).wait(17).set({
				progress: 0.9286634495674043
			}).wait(17).set({
				progress: 0.9327999508790468
			}).wait(16).set({
				progress: 0.9327999508790468
			}).wait(17).set({
				progress: 0.912117444320834
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.17995671216010192
			}).wait(16).set({
				progress: 0.15513770429024656
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.1468647016669613
			}).wait(16).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(18).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(18).set({
				progress: 0.3495532659374466
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(16).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(16).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.20477572002995728
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(18).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(17).set({
				progress: 0.13859169904367627
			}).wait(16).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.10963618986217841
			}).wait(16).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(17).set({
				progress: 0.0930901846156081
			}).wait(16).set({
				progress: 0.08481718199232305
			}).wait(17).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.07654417936903801
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(16).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(16).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.07654417936903801
			}).wait(17).set({
				progress: 0.0930901846156081
			}).wait(16).set({
				progress: 0.11790919248546367
			}).wait(18).set({
				progress: 0.17995671216010192
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(16).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.1592742056018891
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(16).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(17).set({
				progress: 0.08895368330396579
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.018633161006042155
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
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.Symbol10copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.010360158382757112
			}).wait(16).set({
				progress: 0.022769662317684788
			}).wait(16).set({
				progress: 0.05586167281082518
			}).wait(17).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.4901943105332935
			}).wait(16).set({
				progress: 0.5315593236497191
			}).wait(18).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(18).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(18).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(16).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(18).set({
				progress: 0.27095974101623804
			}).wait(15).set({
				progress: 0.21304872265324232
			}).wait(18).set({
				progress: 0.18409321347174445
			}).wait(16).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(19).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(15).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(16).set({
				progress: 0.06413467543411044
			}).wait(17).set({
				progress: 0.010360158382757112
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
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.03931566756425498
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(16).set({
				progress: 0.21304872265324232
			}).wait(18).set({
				progress: 0.25027723445802524
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.6597908643106382
			}).wait(18).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(16).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(16).set({
				progress: 0.5356958249613617
			}).wait(18).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(18).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(16).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(16).set({
				progress: 0.8707524312044086
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8542064259578385
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(18).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.680473370868851
			}).wait(18).set({
				progress: 0.6473813603757104
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(16).set({
				progress: 0.45710230004015306
			}).wait(18).set({
				progress: 0.5687878354545021
			}).wait(16).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(18).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(18).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(17).set({
				progress: 0.035179166252612463
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
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.1758202108484592
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(16).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.059998174122467704
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
				progress: 0.010360158382757112
			}).wait(17).set({
				progress: 0.11377269117382093
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.1468647016669613
			}).wait(17).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.11790919248546367
			}).wait(16).set({
				progress: 0.10963618986217841
			}).wait(18).set({
				progress: 0.10549968855053588
			}).wait(16).set({
				progress: 0.10549968855053588
			}).wait(17).set({
				progress: 0.10136318723889336
			}).wait(16).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(16).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(18).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(18).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.8666159298927658
			}).wait(16).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(16).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(16).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(16).set({
				progress: 0.8624794285811233
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.23786773052309745
			}).wait(17).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(16).set({
				progress: 0.08068068068068053
			}).wait(17).set({
				progress: 0.03931566756425498
			}).wait(17).set({
				progress: 0.010360158382757112
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.Symbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.12204569379710598
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(16).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.0930901846156081
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(17).set({
				progress: 0.15513770429024656
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.20477572002995728
			}).wait(16).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(18).set({
				progress: 0.7962954075948423
			}).wait(15).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(18).set({
				progress: 0.5646513341428593
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8459334233345532
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(18).set({
				progress: 0.38264527643058704
			}).wait(15).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(18).set({
				progress: 0.45710230004015306
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(20).set({
				progress: 0.18822971478338696
			}).wait(15).set({
				progress: 0.1758202108484592
			}).wait(15).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.8542064259578385
			}).wait(16).set({
				progress: 0.9286634495674043
			}).wait(17).set({
				progress: 0.912117444320834
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8459334233345532
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.014496659694399741
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
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
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
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(16).set({
				progress: 0.06413467543411044
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(16).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.5853338407010721
			}).wait(18).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8872984364509786
			}).wait(16).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(16).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(16).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(16).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8459334233345532
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(16).set({
				progress: 0.8624794285811233
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.912117444320834
			}).wait(17).set({
				progress: 0.9534824574372597
			}).wait(17).set({
				progress: 0.9286634495674043
			}).wait(16).set({
				progress: 0.8583429272694808
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.39505478036551483
			}).wait(16).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.25027723445802524
			}).wait(16).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(16).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.22959472789981242
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(18).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(17).set({
				progress: 0.1923662160950295
			}).wait(16).set({
				progress: 0.18822971478338696
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.21304872265324232
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(16).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(16).set({
				progress: 0.15513770429024656
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.5108768170915063
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.6266988538174976
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(18).set({
				progress: 0.29991525019773596
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(18).set({
				progress: 0.6763368695572085
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.16341070691353163
			}).wait(17).set({
				progress: 0.12204569379710598
			}).wait(17).set({
				progress: 0.08068068068068053
			}).wait(16).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(16).set({
				progress: 0.11377269117382093
			}).wait(17).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(16).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.1468647016669613
			}).wait(17).set({
				progress: 0.08895368330396579
			}).wait(17).set({
				progress: 0.05172517149918266
			}).wait(16).set({
				progress: 0.035179166252612463
			}).wait(17).set({
				progress: 0.05172517149918266
			}).wait(16).set({
				progress: 0.10963618986217841
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(16).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.20477572002995728
			}).wait(16).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.11790919248546367
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(17).set({
				progress: 0.11790919248546367
			}).wait(16).set({
				progress: 0.1592742056018891
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(16).set({
				progress: 0.5356958249613617
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.3288707593792338
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(17).set({
				progress: 0.5356958249613617
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(16).set({
				progress: 0.006223657071114482
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
				progress: 0.13859169904367627
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.1468647016669613
			}).wait(16).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(16).set({
				progress: 0.08481718199232305
			}).wait(17).set({
				progress: 0.1261821951087487
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.1592742056018891
			}).wait(17).set({
				progress: 0.08481718199232305
			}).wait(16).set({
				progress: 0.03931566756425498
			}).wait(17).set({
				progress: 0.010360158382757112
			}).wait(17).set({
				progress: 0.010360158382757112
			}).wait(16).set({
				progress: 0.03104266494096983
			}).wait(17).set({
				progress: 0.0930901846156081
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(16).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.38264527643058704
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.20063921871831453
			}).wait(17).set({
				progress: 0.1468647016669613
			}).wait(16).set({
				progress: 0.13445519773203374
			}).wait(17).set({
				progress: 0.16754720822517413
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.4943308118449362
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.15100120297860406
			}).wait(17).set({
				progress: 0.08481718199232305
			}).wait(16).set({
				progress: 0.02690616362932731
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.014496659694399741
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.1427282003553188
			}).wait(17).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.6970193761154211
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.5687878354545021
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.19650271740667202
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(16).set({
				progress: 0.16754720822517413
			}).wait(18).set({
				progress: 0.21718522396488485
			}).wait(16).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(18).set({
				progress: 0.6101528485709274
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(18).set({
				progress: 0.4116007856120849
			}).wait(16).set({
				progress: 0.5522418302079317
			}).wait(16).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(20).set({
				progress: 0.5067403157798636
			}).wait(13).set({
				progress: 0.4281467908586552
			}).wait(18).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.7425208905434892
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.4157372869237274
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.1758202108484592
			}).wait(16).set({
				progress: 0.13859169904367627
			}).wait(17).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.08895368330396579
			}).wait(16).set({
				progress: 0.07654417936903801
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(16).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(16).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.08068068068068053
			}).wait(16).set({
				progress: 0.20477572002995728
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.7094288800503487
			}).wait(16).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(18).set({
				progress: 0.3991912816771571
			}).wait(15).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(18).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.7714763997249874
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(16).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5646513341428593
			}).wait(16).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.4819213079100082
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(16).set({
				progress: 0.874888932516051
			}).wait(17).set({
				progress: 0.874888932516051
			}).wait(17).set({
				progress: 0.874888932516051
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(16).set({
				progress: 0.8500699246461957
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(16).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(16).set({
				progress: 0.5646513341428593
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.18409321347174445
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(16).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(16).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(16).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(16).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.10549968855053588
			}).wait(16).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(16).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(16).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.8500699246461957
			}).wait(16).set({
				progress: 0.8500699246461957
			}).wait(18).set({
				progress: 0.8335239193996257
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(17).set({
				progress: 0.6018798459476427
			}).wait(16).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(16).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.27095974101623804
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.6018798459476427
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.7714763997249874
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.7301113866085617
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.4901943105332935
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.6349718564407828
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.6556543629989957
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.20891222134159979
			}).wait(16).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.09722668592725084
			}).wait(16).set({
				progress: 0.07654417936903801
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.059998174122467704
			}).wait(17).set({
				progress: 0.06413467543411044
			}).wait(16).set({
				progress: 0.07240767805739548
			}).wait(17).set({
				progress: 0.08895368330396579
			}).wait(17).set({
				progress: 0.11790919248546367
			}).wait(17).set({
				progress: 0.1592742056018891
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(16).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(16).set({
				progress: 0.8335239193996257
			}).wait(18).set({
				progress: 0.8169779141530551
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.32059775675594876
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.2585502370813105
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.23786773052309745
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.25027723445802524
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(16).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(16).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.3991912816771571
			}).wait(16).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(18).set({
				progress: 0.7259748852969192
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.6349718564407828
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(18).set({
				progress: 0.5067403157798636
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.2957787488860934
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.4819213079100082
			}).wait(16).set({
				progress: 0.5398323262730039
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.8459334233345532
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.6266988538174976
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(16).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.7880224049715574
			}).wait(16).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(16).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(16).set({
				progress: 0.3702357724956595
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(17).set({
				progress: 0.4984673131565785
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.3619627698723742
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.5439688275846465
			}).wait(17).set({
				progress: 0.6597908643106382
			}).wait(16).set({
				progress: 0.7673398984133446
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(17).set({
				progress: 0.9162539456324768
			}).wait(17).set({
				progress: 0.9286634495674043
			}).wait(16).set({
				progress: 0.9327999508790468
			}).wait(17).set({
				progress: 0.9162539456324768
			}).wait(17).set({
				progress: 0.8790254338276934
			}).wait(16).set({
				progress: 0.8335239193996257
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.3785087751189445
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8252509167763403
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.5191498197147911
			}).wait(16).set({
				progress: 0.4322832921702977
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5853338407010721
			}).wait(17).set({
				progress: 0.6722003682455657
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(16).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.6432448590640681
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.47364830528672336
			}).wait(17).set({
				progress: 0.41987378823536997
			}).wait(16).set({
				progress: 0.4157372869237274
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.5232863210264339
			}).wait(16).set({
				progress: 0.6101528485709274
			}).wait(17).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7921589062832
			}).wait(16).set({
				progress: 0.8293874180879829
			}).wait(17).set({
				progress: 0.8376604207112679
			}).wait(16).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(16).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(17).set({
				progress: 0.2461407331463827
			}).wait(16).set({
				progress: 0.17995671216010192
			}).wait(17).set({
				progress: 0.10136318723889336
			}).wait(17).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.04345216887589761
			}).wait(16).set({
				progress: 0.03104266494096983
			}).wait(17).set({
				progress: 0.022769662317684788
			}).wait(16).set({
				progress: 0.022769662317684788
			}).wait(18).set({
				progress: 0.02690616362932731
			}).wait(16).set({
				progress: 0.035179166252612463
			}).wait(17).set({
				progress: 0.05172517149918266
			}).wait(16).set({
				progress: 0.06827117674575275
			}).wait(17).set({
				progress: 0.11377269117382093
			}).wait(17).set({
				progress: 0.1716837095368169
			}).wait(17).set({
				progress: 0.25441373576966775
			}).wait(16).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.6184258511942128
			}).wait(16).set({
				progress: 0.6887463734921359
			}).wait(17).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.6639273656222809
			}).wait(16).set({
				progress: 0.5811973393894299
			}).wait(17).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.44055629479358277
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.5481053288962893
			}).wait(16).set({
				progress: 0.6184258511942128
			}).wait(18).set({
				progress: 0.6722003682455657
			}).wait(16).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.7177018826736339
			}).wait(16).set({
				progress: 0.7094288800503487
			}).wait(17).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.374372273807302
			}).wait(17).set({
				progress: 0.32059775675594876
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.2875057462628084
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(18).set({
				progress: 0.2916422475744507
			}).wait(16).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(16).set({
				progress: 0.25441373576966775
			}).wait(17).set({
				progress: 0.24200423183474018
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(17).set({
				progress: 0.23373122921145514
			}).wait(16).set({
				progress: 0.2461407331463827
			}).wait(17).set({
				progress: 0.27923274363952333
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.7756129010366297
			}).wait(16).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8293874180879829
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.7549303944784168
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(16).set({
				progress: 0.5563783315195745
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(16).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(16).set({
				progress: 0.5191498197147911
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.7880224049715574
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(17).set({
				progress: 0.7962954075948423
			}).wait(16).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.7507938931667746
			}).wait(17).set({
				progress: 0.7011558774270639
			}).wait(17).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.43641979348194027
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.46951180397508063
			}).wait(17).set({
				progress: 0.5811973393894299
			}).wait(16).set({
				progress: 0.6680638669339233
			}).wait(18).set({
				progress: 0.7425208905434892
			}).wait(16).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.8417969220229105
			}).wait(17).set({
				progress: 0.8666159298927658
			}).wait(16).set({
				progress: 0.8707524312044086
			}).wait(17).set({
				progress: 0.8707524312044086
			}).wait(17).set({
				progress: 0.8666159298927658
			}).wait(16).set({
				progress: 0.8376604207112679
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(17).set({
				progress: 0.7590668957900594
			}).wait(16).set({
				progress: 0.7135653813619914
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.5894703420127146
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.4984673131565785
			}).wait(17).set({
				progress: 0.45710230004015306
			}).wait(17).set({
				progress: 0.4322832921702977
			}).wait(16).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.38678177774222955
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.3454167646258039
			}).wait(17).set({
				progress: 0.3412802633141616
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.3288707593792338
			}).wait(17).set({
				progress: 0.32473425806759126
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.31232475413266353
			}).wait(17).set({
				progress: 0.30818825282102097
			}).wait(17).set({
				progress: 0.30405175150937847
			}).wait(17).set({
				progress: 0.31232475413266353
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.4240102895470127
			}).wait(17).set({
				progress: 0.5274228223380764
			}).wait(17).set({
				progress: 0.6970193761154211
			}).wait(16).set({
				progress: 0.800431908906485
			}).wait(17).set({
				progress: 0.874888932516051
			}).wait(17).set({
				progress: 0.9203904469441192
			}).wait(16).set({
				progress: 0.9203904469441192
			}).wait(17).set({
				progress: 0.8831619351393362
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(18).set({
				progress: 0.5977433446359999
			}).wait(16).set({
				progress: 0.5108768170915063
			}).wait(16).set({
				progress: 0.43641979348194027
			}).wait(18).set({
				progress: 0.38264527643058704
			}).wait(16).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.33714376200251883
			}).wait(16).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.5687878354545021
			}).wait(18).set({
				progress: 0.6680638669339233
			}).wait(16).set({
				progress: 0.7756129010366297
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.7301113866085617
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.5522418302079317
			}).wait(17).set({
				progress: 0.46951180397508063
			}).wait(16).set({
				progress: 0.39505478036551483
			}).wait(17).set({
				progress: 0.3330072606908763
			}).wait(17).set({
				progress: 0.2916422475744507
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.46537530266343813
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.7135653813619914
			}).wait(16).set({
				progress: 0.7177018826736339
			}).wait(17).set({
				progress: 0.7052923787387063
			}).wait(17).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.5563783315195745
			}).wait(16).set({
				progress: 0.4777848065983657
			}).wait(17).set({
				progress: 0.40332778298879984
			}).wait(17).set({
				progress: 0.31646125544430626
			}).wait(16).set({
				progress: 0.2833692449511656
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(17).set({
				progress: 0.26682323970459554
			}).wait(16).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.3578262685607317
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(16).set({
				progress: 0.502603814468221
			}).wait(17).set({
				progress: 0.5729243367661445
			}).wait(17).set({
				progress: 0.6391083577524256
			}).wait(16).set({
				progress: 0.6515178616873529
			}).wait(17).set({
				progress: 0.6473813603757104
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(16).set({
				progress: 0.5232863210264339
			}).wait(17).set({
				progress: 0.44882929741686806
			}).wait(17).set({
				progress: 0.4074642843004424
			}).wait(17).set({
				progress: 0.3702357724956595
			}).wait(16).set({
				progress: 0.33714376200251883
			}).wait(17).set({
				progress: 0.29991525019773596
			}).wait(17).set({
				progress: 0.2833692449511656
			}).wait(16).set({
				progress: 0.27095974101623804
			}).wait(18).set({
				progress: 0.26268673839295303
			}).wait(16).set({
				progress: 0.25027723445802524
			}).wait(16).set({
				progress: 0.23786773052309745
			}).wait(18).set({
				progress: 0.22959472789981242
			}).wait(16).set({
				progress: 0.2254582265881701
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(16).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.21718522396488485
			}).wait(17).set({
				progress: 0.22132172527652735
			}).wait(17).set({
				progress: 0.2875057462628084
			}).wait(16).set({
				progress: 0.39091827905387205
			}).wait(17).set({
				progress: 0.5315593236497191
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.7673398984133446
			}).wait(16).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.7632033971017022
			}).wait(16).set({
				progress: 0.6763368695572085
			}).wait(17).set({
				progress: 0.5770608380777871
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.5150133184031488
			}).wait(17).set({
				progress: 0.606016347259285
			}).wait(16).set({
				progress: 0.7259748852969192
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(17).set({
				progress: 0.8045684102181275
			}).wait(16).set({
				progress: 0.7590668957900594
			}).wait(17).set({
				progress: 0.680473370868851
			}).wait(17).set({
				progress: 0.5936068433243574
			}).wait(16).set({
				progress: 0.5067403157798636
			}).wait(17).set({
				progress: 0.45296579872851034
			}).wait(17).set({
				progress: 0.4446927961052253
			}).wait(17).set({
				progress: 0.4860578092216509
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.61428934988257
			}).wait(17).set({
				progress: 0.6680638669339233
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(16).set({
				progress: 0.746657391855132
			}).wait(17).set({
				progress: 0.734247887920204
			}).wait(17).set({
				progress: 0.6928828748037785
			}).wait(16).set({
				progress: 0.6308353551291404
			}).wait(17).set({
				progress: 0.560514832831217
			}).wait(17).set({
				progress: 0.4612388013517956
			}).wait(16).set({
				progress: 0.4116007856120849
			}).wait(18).set({
				progress: 0.374372273807302
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(16).set({
				progress: 0.3536897672490892
			}).wait(17).set({
				progress: 0.36609927118401675
			}).wait(17).set({
				progress: 0.4116007856120849
			}).wait(17).set({
				progress: 0.5398323262730039
			}).wait(16).set({
				progress: 0.6391083577524256
			}).wait(17).set({
				progress: 0.7218383839852764
			}).wait(17).set({
				progress: 0.7797494023482722
			}).wait(16).set({
				progress: 0.8087049115297703
			}).wait(17).set({
				progress: 0.8128414128414128
			}).wait(17).set({
				progress: 0.8169779141530551
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(16).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8211144154646979
			}).wait(17).set({
				progress: 0.8087049115297703
			}).wait(16).set({
				progress: 0.783885903659915
			}).wait(17).set({
				progress: 0.7383843892318468
			}).wait(17).set({
				progress: 0.6846098721804935
			}).wait(17).set({
				progress: 0.6225623525058552
			}).wait(16).set({
				progress: 0.5481053288962893
			}).wait(17).set({
				progress: 0.4281467908586552
			}).wait(17).set({
				progress: 0.3495532659374466
			}).wait(17).set({
				progress: 0.2750962423278806
			}).wait(16).set({
				progress: 0.1758202108484592
			}).wait(17).set({
				progress: 0.13031869642039123
			}).wait(17).set({
				progress: 0.10136318723889336
			}).wait(16).set({
				progress: 0.07654417936903801
			}).wait(17).set({
				progress: 0.04758867018754003
			}).wait(17).set({
				progress: 0.03104266494096983
			}).wait(16).set({
				progress: 0.018633161006042155
			}).wait(17).set({
				progress: 0.006223657071114482
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.ey_s_end_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{start:0});

	// Layer 1
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(71.5,70.5);

	this.instance_1 = new lib.Tween7("synched",0);
	this.instance_1.setTransform(74.5,72.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:71.8,y:70.2},0).wait(1).to({x:72.2,y:69.8},0).wait(1).to({x:72.8,y:69.2},0).wait(1).to({x:73.2,y:68.8},0).wait(1).to({x:73.5,y:68.5},0).wait(1).to({x:73.1,y:69},0).wait(1).to({x:72.4,y:69.9},0).wait(1).to({x:71.5,y:71},0).wait(1).to({x:70.6,y:72.1},0).wait(1).to({x:69.9,y:73},0).wait(1).to({x:69.5,y:73.5},0).wait(1).to({x:69.3,y:73.2},0).wait(1).to({x:68.9,y:72.7},0).wait(1).to({x:68.5,y:72},0).wait(1).to({x:68.1,y:71.3},0).wait(1).to({x:67.7,y:70.8},0).wait(1).to({x:67.5,y:70.5},0).wait(1).to({x:68,y:70.6},0).wait(1).to({x:69.1,y:70.9},0).wait(1).to({x:70.3,y:71.3},0).wait(1).to({x:71.7,y:71.7},0).wait(1).to({x:72.9,y:72.1},0).wait(1).to({x:74,y:72.4},0).to({_off:true},1).wait(4).to({_off:false,x:71.5,y:70.5},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({x:74,y:72.1},0).wait(1).to({x:73,y:71.5},0).wait(1).to({x:72,y:70.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,10,143,121);


(lib.slide_intro = function() {
	this.initialize();

	// ey_s_intro_slide
	this.instance = new lib.ey_s_intro_slide_1();
	this.instance.setTransform(277.1,220,1,1,0,0,0,285,215);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,5,570,430);


(lib.slide_46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.the_end.gotoAndPlay('start');
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

	// ey_s_end_text
	this.the_end = new lib.ey_s_end_text_1();
	this.the_end.setTransform(269.5,213.5,1,1,0,0,0,71.5,60.5);

	this.timeline.addTween(cjs.Tween.get(this.the_end).wait(20));

	// ey_s_end_bg
	this.instance = new lib.ey_s_end_bg_1();
	this.instance.setTransform(277,220,1,1,0,0,0,285,215);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,5,570,430);


(lib.slide_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89));

	// school_eyebrow left
	this.instance = new lib.school_eyebrowleft_1();
	this.instance.setTransform(254.5,185,1,1,0,0,0,25.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-0.6,x:254.9,y:184.6},0).wait(1).to({rotation:-1.2,x:255.3,y:184.2},0).wait(1).to({rotation:-1.9,x:255.7,y:183.8},0).wait(1).to({rotation:-2.5,x:256.2,y:183.4},0).wait(1).to({rotation:-3.2,x:256.6,y:183},0).wait(1).to({rotation:-3.9,x:257,y:182.6},0).wait(1).to({rotation:-4.5,x:257.4,y:182.1},0).wait(1).to({rotation:-5.2,x:257.9,y:181.7},0).wait(1).to({rotation:-5.8,x:258.3,y:181.2},0).wait(1).to({rotation:-6.4,x:258.7,y:180.9},0).wait(1).to({rotation:-7,x:259.1,y:180.5},0).wait(1).to({rotation:-7.6,x:259.5,y:180.1},0).wait(1).to({rotation:-8.1,x:259.8,y:179.8},0).wait(1).to({rotation:-8.5,x:260.1,y:179.5},0).wait(1).to({rotation:-8.8,x:260.3,y:179.4},0).wait(1).to({rotation:-7.4,x:259.4,y:180.2},0).wait(1).to({rotation:-5.4,x:258.1,y:181.5},0).wait(1).to({rotation:-3.3,x:256.7,y:182.9},0).wait(1).to({rotation:-1.3,x:255.4,y:184.1},0).wait(1).to({rotation:0,x:254.5,y:185},0).wait(1).to({rotation:-0.7,x:254.7,y:184.8},0).wait(1).to({rotation:-1.5,x:254.9,y:184.5},0).wait(1).to({rotation:-2.3,x:255.1,y:184.2},0).wait(1).to({rotation:-3.1,x:255.3,y:183.9},0).wait(1).to({rotation:-3.9,x:255.4,y:183.6},0).wait(1).to({rotation:-4.7,x:255.6,y:183.3},0).wait(1).to({rotation:-5.5,x:255.9,y:183.1},0).wait(1).to({rotation:-6.3,x:256.1,y:182.8},0).wait(1).to({rotation:-7.1,x:256.2,y:182.5},0).wait(1).to({rotation:-7.9,x:256.4,y:182.2},0).wait(1).to({rotation:-8.6,x:256.6,y:182},0).wait(1).to({rotation:-9.3,x:256.8,y:181.7},0).wait(1).to({rotation:-10,x:256.9,y:181.5},0).wait(1).to({rotation:-10.5,x:257,y:181.3},0).wait(1).to({rotation:-10.8,x:257.2},0).wait(1).to({rotation:-9.1,x:256.8,y:181.9},0).wait(1).to({rotation:-6.7,x:256.2,y:182.7},0).wait(1).to({rotation:-4.1,x:255.5,y:183.7},0).wait(1).to({rotation:-1.6,x:254.9,y:184.5},0).wait(1).to({rotation:0,x:254.5,y:185},0).wait(4).to({rotation:-0.1,x:254.3,y:185.1},0).wait(1).to({rotation:-0.4,x:253.9,y:185.2},0).wait(1).to({rotation:-0.7,x:253.5,y:185.3},0).wait(1).to({rotation:-0.9,x:253.1,y:185.5},0).wait(1).to({rotation:-1.2,x:252.7,y:185.6},0).wait(1).to({regX:25.6,regY:9.1,rotation:-1.3,x:252.6,y:185.7},0).wait(1).to({regX:25.5,regY:9,x:252.5,y:185.6},0).wait(2).to({regX:25.6,regY:9.1,x:252.6,y:185.7},0).wait(1).to({regX:25.5,regY:9,rotation:-1.1,x:252.8,y:185.5},0).wait(1).to({rotation:-0.8,x:253.3,y:185.3},0).wait(1).to({rotation:-0.4,x:253.8,y:185.2},0).wait(1).to({rotation:-0.2,x:254.2,y:185},0).wait(1).to({rotation:0,x:254.5},0).wait(7).to({x:260.8},0).wait(1).to({x:269.3},0).wait(1).to({x:274.5},0).wait(7).to({x:281.9},0).wait(1).to({x:293.1},0).wait(1).to({x:303.6},0).wait(1).to({x:309.5},0).wait(5).to({x:325.2},0).wait(1).to({x:346.4},0).wait(1).to({x:359.5},0).wait(3).to({x:368.9},0).wait(1).to({x:381.7},0).wait(1).to({x:389.5},0).wait(1));

	// school_eyebrow right
	this.instance_1 = new lib.school_eyebrowright_1();
	this.instance_1.setTransform(323.5,188,1,1,0,0,0,22.5,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.7,x:323.9,y:187.7},0).wait(1).to({rotation:1.5,x:324.3,y:187.4},0).wait(1).to({rotation:2.3,x:324.7,y:187.1},0).wait(1).to({rotation:3.1,x:325.1,y:186.8},0).wait(1).to({rotation:3.9,x:325.6,y:186.5},0).wait(1).to({rotation:4.7,x:326,y:186.1},0).wait(1).to({rotation:5.5,x:326.5,y:185.8},0).wait(1).to({rotation:6.3,x:326.8,y:185.5},0).wait(1).to({rotation:7.1,x:327.3,y:185.2},0).wait(1).to({rotation:7.8,x:327.7,y:184.9},0).wait(1).to({rotation:8.6,x:328.1,y:184.6},0).wait(1).to({rotation:9.2,x:328.4,y:184.3},0).wait(1).to({rotation:9.9,x:328.8,y:184.1},0).wait(1).to({rotation:10.4,x:329.1,y:183.9},0).wait(1).to({rotation:10.7,x:329.2,y:183.8},0).wait(1).to({rotation:9,x:328.3,y:184.5},0).wait(1).to({rotation:6.6,x:327,y:185.4},0).wait(1).to({rotation:4.1,x:325.7,y:186.5},0).wait(1).to({rotation:1.6,x:324.4,y:187.4},0).wait(1).to({rotation:0,x:323.5,y:188},0).wait(1).to({rotation:0.6,x:323.7,y:187.6},0).wait(1).to({rotation:1.2,x:323.9,y:187.2},0).wait(1).to({rotation:1.8,x:324.1,y:186.8},0).wait(1).to({rotation:2.5,x:324.3,y:186.4},0).wait(1).to({rotation:3.2,x:324.4,y:185.9},0).wait(1).to({rotation:3.8,x:324.6,y:185.5},0).wait(1).to({rotation:4.5,x:324.9,y:185.1},0).wait(1).to({rotation:5.1,x:325.1,y:184.6},0).wait(1).to({rotation:5.7,x:325.3,y:184.2},0).wait(1).to({rotation:6.4,x:325.4,y:183.8},0).wait(1).to({rotation:7,x:325.6,y:183.4},0).wait(1).to({rotation:7.5,x:325.8,y:183.1},0).wait(1).to({rotation:8,x:326,y:182.7},0).wait(1).to({rotation:8.5,y:182.4},0).wait(1).to({rotation:8.7,x:326.2,y:182.3},0).wait(1).to({rotation:7.4,x:325.7,y:183.2},0).wait(1).to({rotation:5.4,x:325.1,y:184.4},0).wait(1).to({rotation:3.3,x:324.5,y:185.9},0).wait(1).to({rotation:1.3,x:323.9,y:187.1},0).wait(1).to({rotation:0,x:323.5,y:188},0).wait(4).to({rotation:-0.1,x:323.3,y:187.9},0).wait(1).to({rotation:-0.4,x:322.9,y:187.7},0).wait(1).to({rotation:-0.7,x:322.5,y:187.5},0).wait(1).to({rotation:-0.9,x:322.1,y:187.3},0).wait(1).to({rotation:-1.2,x:321.8,y:187.1},0).wait(1).to({regX:22.6,rotation:-1.3,x:321.7},0).wait(1).to({regX:22.5,x:321.6,y:187},0).wait(2).to({regX:22.6,x:321.7,y:187.1},0).wait(1).to({regX:22.5,rotation:-1.1,x:321.9,y:187.2},0).wait(1).to({rotation:-0.8,x:322.3,y:187.4},0).wait(1).to({rotation:-0.4,x:322.8,y:187.7},0).wait(1).to({rotation:-0.2,x:323.2,y:187.9},0).wait(1).to({rotation:0,x:323.5,y:188},0).wait(7).to({x:329.8},0).wait(1).to({x:338.3},0).wait(1).to({x:343.5},0).wait(7).to({x:350.9},0).wait(1).to({x:362.1},0).wait(1).to({x:372.6},0).wait(1).to({x:378.5},0).wait(5).to({x:394.2},0).wait(1).to({x:415.4},0).wait(1).to({x:428.5},0).wait(3).to({x:437.9},0).wait(1).to({x:450.7},0).wait(1).to({x:458.5},0).wait(1));

	// school_chin
	this.instance_2 = new lib.school_chin_1();
	this.instance_2.setTransform(286,286.5,1,1,0,0,0,33,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:0.1,x:286.2,y:286.3},0).wait(1).to({rotation:0.2,x:286.5,y:286.1},0).wait(1).to({rotation:0.3,x:286.8,y:285.9},0).wait(1).to({rotation:0.4,x:287,y:285.6},0).wait(1).to({x:287.3,y:285.4},0).wait(1).to({rotation:0.5,x:287.6,y:285.2},0).wait(1).to({rotation:0.6,x:287.8,y:284.9},0).wait(1).to({rotation:0.7,x:288.1,y:284.7},0).wait(1).to({rotation:0.8,x:288.3,y:284.5},0).wait(1).to({rotation:0.9,x:288.6,y:284.3},0).wait(1).to({rotation:1,x:288.8,y:284.1},0).wait(1).to({rotation:1.1,x:289.1,y:283.9},0).wait(1).to({x:289.3,y:283.7},0).wait(1).to({rotation:1.2,x:289.4,y:283.6},0).wait(1).to({x:289.6,y:283.5},0).wait(1).to({rotation:1,x:289,y:284},0).wait(1).to({rotation:0.8,x:288.2,y:284.7},0).wait(1).to({rotation:0.5,x:287.3,y:285.3},0).wait(1).to({rotation:0.2,x:286.5,y:286},0).wait(1).to({rotation:0,x:286,y:286.5},0).wait(1).to({rotation:-0.1,x:286.2,y:286.1},0).wait(1).to({x:286.6,y:285.8},0).wait(1).to({rotation:-0.2,x:286.8,y:285.4},0).wait(1).to({x:287.2,y:285},0).wait(1).to({rotation:-0.3,x:287.4,y:284.6},0).wait(1).to({x:287.8,y:284.2},0).wait(1).to({rotation:-0.4,x:288,y:283.8},0).wait(1).to({rotation:-0.5,x:288.4,y:283.5},0).wait(1).to({x:288.6,y:283.1},0).wait(1).to({rotation:-0.6,x:288.9,y:282.7},0).wait(1).to({x:289.2,y:282.4},0).wait(1).to({rotation:-0.7,x:289.5,y:282},0).wait(1).to({x:289.7,y:281.8},0).wait(1).to({rotation:-0.8,x:289.9,y:281.5},0).wait(1).to({regY:23.6,x:290,y:281.4},0).wait(1).to({regY:23.5,rotation:-0.7,x:289.3,y:282.1},0).wait(1).to({rotation:-0.5,x:288.5,y:283.2},0).wait(1).to({rotation:-0.3,x:287.5,y:284.5},0).wait(1).to({rotation:-0.1,x:286.6,y:285.7},0).wait(1).to({rotation:0,x:286,y:286.5},0).wait(4).to({rotation:-0.1},0).wait(1).to({rotation:-0.4,x:286.1},0).wait(1).to({rotation:-0.7,x:286.2,y:286.4},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.2,x:286.3},0).wait(1).to({rotation:-1.3,x:286.4},0).wait(1).to({x:286.3},0).wait(2).to({x:286.4},0).wait(1).to({rotation:-1.1,x:286.3},0).wait(1).to({rotation:-0.8,x:286.2},0).wait(1).to({rotation:-0.4,y:286.5},0).wait(1).to({rotation:-0.2,x:286.1},0).wait(1).to({rotation:0,x:286},0).wait(7).to({x:292.3},0).wait(1).to({x:300.8},0).wait(1).to({x:306},0).wait(7).to({x:313.4},0).wait(1).to({x:324.6},0).wait(1).to({x:335.1},0).wait(1).to({x:341},0).wait(5).to({x:356.7},0).wait(1).to({x:377.9},0).wait(1).to({x:391},0).wait(3).to({x:400.4},0).wait(1).to({x:413.2},0).wait(1).to({x:421},0).wait(1));

	// school_eyelid_overlay
	this.instance_3 = new lib.school_eyelid_overlay_1();
	this.instance_3.setTransform(288,197,1,1,0,0,0,58,11);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:0.1,x:288.4,y:196.7},0).wait(1).to({rotation:0.2,x:288.7,y:196.3},0).wait(1).to({rotation:0.3,x:289.2,y:195.9},0).wait(1).to({rotation:0.4,x:289.6,y:195.6},0).wait(1).to({x:290,y:195.2},0).wait(1).to({rotation:0.5,x:290.4,y:194.8},0).wait(1).to({rotation:0.6,x:290.9,y:194.5},0).wait(1).to({rotation:0.7,x:291.2,y:194.1},0).wait(1).to({rotation:0.8,x:291.7,y:193.7},0).wait(1).to({rotation:0.9,x:292.1,y:193.4},0).wait(1).to({rotation:1,x:292.4,y:193},0).wait(1).to({rotation:1.1,x:292.8,y:192.7},0).wait(1).to({x:293.1,y:192.4},0).wait(1).to({rotation:1.2,x:293.3,y:192.2},0).wait(1).to({regX:58.1,x:293.6,y:192.1},0).wait(1).to({regX:58,rotation:1,x:292.6,y:192.8},0).wait(1).to({rotation:0.8,x:291.4,y:193.9},0).wait(1).to({rotation:0.5,x:290,y:195.1},0).wait(1).to({rotation:0.2,x:288.8,y:196.3},0).wait(1).to({rotation:0,x:288,y:197},0).wait(1).to({rotation:-0.1,x:288.2,y:196.7},0).wait(1).to({x:288.4,y:196.3},0).wait(1).to({rotation:-0.2,x:288.6,y:195.9},0).wait(1).to({x:288.8,y:195.5},0).wait(1).to({rotation:-0.3,x:289,y:195.1},0).wait(1).to({x:289.2,y:194.7},0).wait(1).to({rotation:-0.4,x:289.4,y:194.3},0).wait(1).to({rotation:-0.5,x:289.6,y:194},0).wait(1).to({x:289.8,y:193.6},0).wait(1).to({rotation:-0.6,x:290,y:193.2},0).wait(1).to({x:290.2,y:192.8},0).wait(1).to({rotation:-0.7,x:290.4,y:192.5},0).wait(1).to({x:290.6,y:192.2},0).wait(1).to({rotation:-0.8,x:290.7,y:192},0).wait(1).to({regY:11.1,x:290.8,y:191.9},0).wait(1).to({regY:11,rotation:-0.7,x:290.4,y:192.6},0).wait(1).to({rotation:-0.5,x:289.7,y:193.7},0).wait(1).to({rotation:-0.3,x:289,y:195},0).wait(1).to({rotation:-0.1,x:288.4,y:196.2},0).wait(1).to({rotation:0,x:288,y:197},0).wait(4).to({rotation:-0.1,x:287.8},0).wait(1).to({rotation:-0.4,x:287.5},0).wait(1).to({rotation:-0.7,x:287.1,y:196.9},0).wait(1).to({rotation:-0.9,x:286.7},0).wait(1).to({rotation:-1.2,x:286.4},0).wait(1).to({regX:57.9,regY:11.1,rotation:-1.3,x:286.3,y:197},0).wait(1).to({regX:58,regY:11,y:196.8},0).wait(2).to({regX:57.9,regY:11.1,y:197},0).wait(1).to({regX:58,regY:11,rotation:-1.1,x:286.6,y:196.9},0).wait(1).to({rotation:-0.8,x:287},0).wait(1).to({rotation:-0.4,x:287.5},0).wait(1).to({rotation:-0.2,x:287.9},0).wait(1).to({rotation:0,x:288,y:197},0).wait(7).to({x:294.3},0).wait(1).to({x:302.8},0).wait(1).to({x:308},0).wait(7).to({x:315.4},0).wait(1).to({x:326.6},0).wait(1).to({x:337.1},0).wait(1).to({x:343},0).wait(5).to({x:358.7},0).wait(1).to({x:379.9},0).wait(1).to({x:393},0).wait(3).to({x:402.4},0).wait(1).to({x:415.2},0).wait(1).to({x:423},0).wait(1));

	// school_eyelid dark right
	this.instance_4 = new lib.school_eyeliddarkright_1();
	this.instance_4.setTransform(318.5,197,1,1,0,0,0,21.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:1.02,rotation:0.1,x:318.9,y:197.1},0).wait(1).to({scaleY:1.05,rotation:0,skewX:0.1,skewY:0.2,x:319.3,y:197.3},0).wait(1).to({scaleY:1.08,skewX:0.2,skewY:0.4,x:319.7,y:197.4},0).wait(1).to({scaleY:1.1,skewX:0.3,skewY:0.5,x:320.1,y:197.6},0).wait(1).to({scaleY:1.13,skewY:0.6,x:320.5,y:197.7},0).wait(1).to({scaleY:1.16,skewX:0.4,skewY:0.7,x:320.9,y:197.8},0).wait(1).to({scaleY:1.19,skewX:0.5,skewY:0.9,x:321.3,y:197.9},0).wait(1).to({scaleY:1.21,skewY:1,x:321.7,y:198},0).wait(1).to({scaleY:1.24,skewX:0.6,skewY:1.1,x:322.2,y:198.2},0).wait(1).to({scaleY:1.26,skewX:0.7,skewY:1.2,x:322.5,y:198.3},0).wait(1).to({scaleY:1.29,skewY:1.3,x:322.9,y:198.5},0).wait(1).to({scaleY:1.31,skewX:0.8,skewY:1.4,x:323.3,y:198.6},0).wait(1).to({scaleY:1.33,skewY:1.5,x:323.6,y:198.7},0).wait(1).to({scaleY:1.35,skewX:0.9,skewY:1.6,x:323.8,y:198.8},0).wait(1).to({scaleY:1.36,skewY:1.7,x:324,y:198.9},0).wait(1).to({scaleY:1.31,skewX:0.8,skewY:1.4,x:323.2,y:199.5},0).wait(1).to({scaleY:1.22,skewX:0.6,skewY:1,x:321.9,y:200.4},0).wait(1).to({scaleY:1.14,skewX:0.3,skewY:0.6,x:320.6,y:201.4},0).wait(1).to({scaleY:1.06,skewX:0.1,skewY:0.3,x:319.4,y:202.4},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:318.5,y:203},0).wait(1).to({scaleY:1.02,rotation:-0.1,x:318.7,y:202.6},0).wait(1).to({scaleY:1.05,rotation:0,skewX:-0.2,x:318.9,y:202.3},0).wait(1).to({scaleY:1.08,skewY:-0.1,x:319.1,y:201.8},0).wait(1).to({scaleY:1.1,skewX:-0.3,x:319.4,y:201.4},0).wait(1).to({scaleY:1.13,skewX:-0.4,x:319.6,y:201},0).wait(1).to({scaleY:1.16,skewX:-0.5,x:319.8,y:200.6},0).wait(1).to({scaleY:1.19,skewX:-0.6,skewY:-0.2,x:320,y:200.2},0).wait(1).to({scaleY:1.21,x:320.2,y:199.8},0).wait(1).to({scaleY:1.24,skewX:-0.7,x:320.5,y:199.4},0).wait(1).to({scaleY:1.26,skewX:-0.8,x:320.7,y:199},0).wait(1).to({scaleY:1.29,skewX:-0.9,skewY:-0.3,x:320.9,y:198.6},0).wait(1).to({scaleY:1.31,skewX:-1,x:321.1,y:198.3},0).wait(1).to({scaleY:1.33,x:321.2,y:197.9},0).wait(1).to({scaleY:1.35,skewX:-1.1,x:321.4,y:197.7},0).wait(1).to({scaleY:1.36,x:321.5,y:197.6},0).wait(1).to({scaleY:1.31,skewX:-0.9,x:321,y:198.4},0).wait(1).to({scaleY:1.22,skewX:-0.7,skewY:-0.2,x:320.4,y:199.6},0).wait(1).to({scaleY:1.14,skewX:-0.4,skewY:-0.1,x:319.6,y:200.9},0).wait(1).to({scaleY:1.06,skewX:-0.2,x:319,y:202.2},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:318.5,y:203},0).wait(1).to({y:201.2},0).wait(1).to({y:199.1},0).wait(1).to({y:197},0).wait(1).to({rotation:-0.1,x:318.3,y:196.9},0).wait(1).to({rotation:-0.4,x:317.9,y:196.7},0).wait(1).to({rotation:-0.7,x:317.6,y:196.6},0).wait(1).to({rotation:-0.9,x:317.2,y:196.4},0).wait(1).to({rotation:-1.2,x:316.9,y:196.2},0).wait(1).to({regX:21.4,rotation:-1.3,x:316.7},0).wait(1).to({regX:21.5,x:316.8,y:196.1},0).wait(2).to({regX:21.4,x:316.7,y:196.2},0).wait(1).to({regX:21.5,rotation:-1.1,x:317,y:196.3},0).wait(1).to({rotation:-0.8,x:317.5,y:196.5},0).wait(1).to({rotation:-0.4,x:317.9,y:196.7},0).wait(1).to({rotation:-0.2,x:318.3,y:196.9},0).wait(1).to({rotation:0,x:318.5,y:197},0).wait(7).to({x:324.8},0).wait(1).to({x:333.3},0).wait(1).to({x:338.5},0).wait(7).to({x:345.9},0).wait(1).to({x:357.1},0).wait(1).to({x:367.6},0).wait(1).to({x:373.5},0).wait(5).to({x:389.2},0).wait(1).to({x:410.4},0).wait(1).to({x:423.5},0).wait(3).to({x:432.9},0).wait(1).to({x:445.7},0).wait(1).to({x:453.5},0).wait(1));

	// school_eyelid dark left
	this.instance_5 = new lib.school_eyeliddarkleft_1();
	this.instance_5.setTransform(251,198.5,1,1,0,0,0,21,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleY:1.02,rotation:0.1,x:251.4,y:198.4},0).wait(1).to({scaleY:1.05,rotation:0,skewX:0.1,skewY:0.2,x:251.9,y:198.2},0).wait(1).to({scaleY:1.08,skewX:0.2,skewY:0.4,x:252.3,y:198},0).wait(1).to({scaleY:1.1,skewX:0.3,skewY:0.5,x:252.8,y:197.9},0).wait(1).to({scaleY:1.13,skewY:0.6,x:253.3,y:197.6},0).wait(1).to({scaleY:1.16,skewX:0.4,skewY:0.7,x:253.8,y:197.5},0).wait(1).to({scaleY:1.19,skewX:0.5,skewY:0.9,x:254.3,y:197.3},0).wait(1).to({scaleY:1.21,skewY:1,x:254.8,y:197.1},0).wait(1).to({scaleY:1.24,skewX:0.6,skewY:1.1,x:255.3,y:197},0).wait(1).to({scaleY:1.26,skewX:0.7,skewY:1.2,x:255.7,y:196.8},0).wait(1).to({scaleY:1.29,skewY:1.3,x:256.2,y:196.6},0).wait(1).to({scaleY:1.31,skewX:0.8,skewY:1.4,x:256.6,y:196.5},0).wait(1).to({scaleY:1.33,skewY:1.5,x:256.9,y:196.3},0).wait(1).to({scaleY:1.35,skewX:0.9,skewY:1.6,x:257.3},0).wait(1).to({scaleY:1.36,skewY:1.7,x:257.5,y:196.1},0).wait(1).to({scaleY:1.31,skewX:0.8,skewY:1.4,x:256.4,y:197.2},0).wait(1).to({scaleY:1.22,skewX:0.6,skewY:1,x:255,y:199},0).wait(1).to({scaleY:1.14,skewX:0.3,skewY:0.6,x:253.4,y:200.7},0).wait(1).to({scaleY:1.06,skewX:0.1,skewY:0.3,x:252,y:202.3},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:251,y:203.5},0).wait(1).to({scaleY:1.02,rotation:-0.1,x:251.2,y:203.3},0).wait(1).to({scaleY:1.05,rotation:0,skewX:-0.2,x:251.5,y:202.9},0).wait(1).to({scaleY:1.08,skewY:-0.1,x:251.9,y:202.5},0).wait(1).to({scaleY:1.1,skewX:-0.3,x:252.1,y:202.3},0).wait(1).to({scaleY:1.13,skewX:-0.4,x:252.4,y:201.9},0).wait(1).to({scaleY:1.16,skewX:-0.5,x:252.7,y:201.6},0).wait(1).to({scaleY:1.19,skewX:-0.6,skewY:-0.2,x:253,y:201.3},0).wait(1).to({scaleY:1.21,x:253.3,y:201},0).wait(1).to({scaleY:1.24,skewX:-0.7,x:253.6,y:200.6},0).wait(1).to({scaleY:1.26,skewX:-0.8,x:253.9,y:200.4},0).wait(1).to({scaleY:1.29,skewX:-0.9,skewY:-0.3,x:254.2,y:200},0).wait(1).to({scaleY:1.31,skewX:-1,x:254.4,y:199.8},0).wait(1).to({scaleY:1.33,x:254.7,y:199.5},0).wait(1).to({scaleY:1.35,skewX:-1.1,x:254.9,y:199.3},0).wait(1).to({scaleY:1.36,x:255,y:199.2},0).wait(1).to({scaleY:1.31,skewX:-0.9,x:254.3,y:199.5},0).wait(1).to({scaleY:1.22,skewX:-0.7,skewY:-0.2,x:253.4,y:200},0).wait(1).to({scaleY:1.14,skewX:-0.4,skewY:-0.1,x:252.5,y:200.6},0).wait(1).to({scaleY:1.06,skewX:-0.2,x:251.6,y:201.1},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:251,y:201.5},0).wait(1).to({y:200.6},0).wait(1).to({y:199.6},0).wait(1).to({y:198.5},0).wait(1).to({rotation:-0.1,x:250.8,y:198.6},0).wait(1).to({rotation:-0.4,x:250.5,y:198.7},0).wait(1).to({rotation:-0.7,x:250.1,y:198.9},0).wait(1).to({rotation:-0.9,x:249.8,y:199},0).wait(1).to({rotation:-1.2,x:249.5,y:199.1},0).wait(1).to({rotation:-1.3,x:249.4,y:199.2},0).wait(1).to({x:249.3},0).wait(2).to({x:249.4},0).wait(1).to({rotation:-1.1,x:249.6,y:199.1},0).wait(1).to({rotation:-0.8,x:250,y:198.9},0).wait(1).to({rotation:-0.4,x:250.4,y:198.7},0).wait(1).to({rotation:-0.2,x:250.8,y:198.6},0).wait(1).to({rotation:0,x:251,y:198.5},0).wait(7).to({x:257.3},0).wait(1).to({x:265.8},0).wait(1).to({x:271},0).wait(7).to({x:278.4},0).wait(1).to({x:289.6},0).wait(1).to({x:300.1},0).wait(1).to({x:306},0).wait(5).to({x:321.7},0).wait(1).to({x:342.9},0).wait(1).to({x:356},0).wait(3).to({x:365.4},0).wait(1).to({x:378.2},0).wait(1).to({x:386},0).wait(1));

	// ey_s_eye_r_school
	this.instance_6 = new lib.ey_s_eye_r_school_1();
	this.instance_6.setTransform(313,205.5,1,1,0,0,0,17,8.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(4).to({rotation:-0.1,x:312.5,y:205.4},0).wait(1).to({rotation:-0.4,x:311.7,y:205.3},0).wait(1).to({rotation:-0.7,x:310.8,y:205.2},0).wait(1).to({rotation:-0.9,x:310,y:205},0).wait(1).to({rotation:-1.2,x:309.3,y:204.9},0).wait(1).to({regY:8.6,rotation:-1.3,x:309},0).wait(1).to({regY:8.5,x:308.9,y:204.8},0).wait(2).to({regY:8.6,x:309,y:204.9},0).wait(1).to({regY:8.5,rotation:-1.1,x:310.3},0).wait(1).to({rotation:-0.8,x:312.5,y:205},0).wait(1).to({rotation:-0.4,x:314.9,y:205.2},0).wait(1).to({rotation:-0.2,x:316.9,y:205.4},0).wait(1).to({rotation:0,x:318,y:205.5},0).wait(7).to({x:324.3},0).wait(1).to({x:332.8},0).wait(1).to({x:338},0).wait(7).to({x:345.4},0).wait(1).to({x:356.6},0).wait(1).to({x:367.1},0).wait(1).to({x:373},0).wait(5).to({x:388.7},0).wait(1).to({x:409.9},0).wait(1).to({x:423},0).wait(3).to({x:432.4},0).wait(1).to({x:445.2},0).wait(1).to({x:453},0).wait(1));

	// ey_s_eye_l_school
	this.instance_7 = new lib.ey_s_eye_l_school_1();
	this.instance_7.setTransform(250,205.5,1,1,0,0,0,18,8.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).wait(4).to({rotation:-0.1,x:249.5,y:205.6},0).wait(1).to({rotation:-0.4,x:248.7,y:205.7},0).wait(1).to({rotation:-0.7,x:247.9,y:205.9},0).wait(1).to({rotation:-0.9,x:247,y:206},0).wait(1).to({rotation:-1.2,x:246.3,y:206.2},0).wait(1).to({rotation:-1.3,x:246,y:206.3},0).wait(1).to({y:206.2},0).wait(2).to({y:206.3},0).wait(1).to({rotation:-1.1,x:247.3,y:206.1},0).wait(1).to({rotation:-0.8,x:249.6,y:205.9},0).wait(1).to({rotation:-0.4,x:251.9,y:205.7},0).wait(1).to({rotation:-0.2,x:253.9,y:205.6},0).wait(1).to({rotation:0,x:255,y:205.5},0).wait(7).to({x:261.3},0).wait(1).to({x:269.8},0).wait(1).to({x:275},0).wait(7).to({x:282.4},0).wait(1).to({x:293.6},0).wait(1).to({x:304.1},0).wait(1).to({x:310},0).wait(5).to({x:325.7},0).wait(1).to({x:346.9},0).wait(1).to({x:360},0).wait(3).to({x:369.4},0).wait(1).to({x:382.2},0).wait(1).to({x:390},0).wait(1));

	// school_head
	this.instance_8 = new lib.school_head_1();
	this.instance_8.setTransform(280.5,274.5,1,1,0,0,0,150.5,202.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:0.1,x:280.7,y:274.2},0).wait(1).to({rotation:0.2,x:281,y:273.8},0).wait(1).to({rotation:0.3,x:281.3,y:273.4},0).wait(1).to({rotation:0.4,x:281.6,y:273.1},0).wait(1).to({x:281.9,y:272.6},0).wait(1).to({rotation:0.5,x:282.2,y:272.3},0).wait(1).to({rotation:0.6,x:282.5,y:271.9},0).wait(1).to({rotation:0.7,x:282.8,y:271.5},0).wait(1).to({rotation:0.8,x:283.1,y:271.2},0).wait(1).to({rotation:0.9,x:283.3,y:270.7},0).wait(1).to({rotation:1,x:283.6,y:270.4},0).wait(1).to({rotation:1.1,x:283.8,y:270.1},0).wait(1).to({x:284,y:269.8},0).wait(1).to({rotation:1.2,x:284.2,y:269.6},0).wait(1).to({regX:150.6,x:284.4,y:269.4},0).wait(1).to({regX:150.5,rotation:1,x:283.7,y:270.2},0).wait(1).to({rotation:0.8,x:282.8,y:271.4},0).wait(1).to({rotation:0.5,x:281.9,y:272.5},0).wait(1).to({rotation:0.2,x:281,y:273.7},0).wait(1).to({rotation:0,x:280.5,y:274.5},0).wait(1).to({rotation:-0.1,x:280.8,y:274.2},0).wait(1).to({x:281,y:273.8},0).wait(1).to({rotation:-0.2,x:281.3,y:273.4},0).wait(1).to({x:281.6,y:273},0).wait(1).to({rotation:-0.3,x:281.9,y:272.6},0).wait(1).to({x:282.2,y:272.3},0).wait(1).to({rotation:-0.4,x:282.5,y:271.9},0).wait(1).to({rotation:-0.5,x:282.8,y:271.5},0).wait(1).to({x:283.1,y:271.1},0).wait(1).to({rotation:-0.6,x:283.3,y:270.8},0).wait(1).to({x:283.6,y:270.4},0).wait(1).to({rotation:-0.7,x:283.8,y:270.1},0).wait(1).to({x:284.1,y:269.8},0).wait(1).to({rotation:-0.8,x:284.3,y:269.5},0).wait(1).to({regX:150.6,x:284.4,y:269.4},0).wait(1).to({regX:150.5,rotation:-0.7,x:283.7,y:270.2},0).wait(1).to({rotation:-0.5,x:282.8,y:271.4},0).wait(1).to({rotation:-0.3,x:281.9,y:272.6},0).wait(1).to({rotation:-0.1,x:281,y:273.7},0).wait(1).to({rotation:0,x:280.5,y:274.5},0).wait(4).to({rotation:-0.1},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1.2},0).wait(1).to({regY:202.6,rotation:-1.3,x:280.6,y:274.6},0).wait(1).to({regY:202.5,x:280.5,y:274.4},0).wait(2).to({regY:202.6,x:280.6,y:274.6},0).wait(1).to({regY:202.5,x:280.5,y:274.5},0).wait(1).to({rotation:-1.2},0).wait(2).to({rotation:-1.1},0).wait(1).to({rotation:-1},0).wait(2).to({rotation:-0.9,y:274.4},0).wait(1).to({x:280.6,y:274.5},0).wait(1).to({rotation:-0.8,y:274.4},0).wait(1).to({x:280.5},0).wait(1).to({regX:150.4,regY:202.6,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,rotation:-0.7,x:286.9,y:274.4},0).wait(1).to({rotation:-0.6,x:295.4,y:274.5},0).wait(1).to({regX:150.4,regY:202.6,rotation:-0.5,x:300.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:300.6,y:274.4},0).wait(5).to({regX:150.4,regY:202.6,x:300.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:308,y:274.4},0).wait(1).to({x:319.2},0).wait(1).to({x:329.7},0).wait(1).to({regX:150.4,regY:202.6,x:335.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:335.6,y:274.4},0).wait(3).to({regX:150.4,regY:202.6,x:335.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:351.3,y:274.4},0).wait(1).to({x:372.5},0).wait(1).to({regX:150.4,regY:202.6,x:385.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:385.6,y:274.4},0).wait(1).to({regX:150.4,regY:202.6,x:385.5,y:274.6},0).wait(1).to({regX:150.5,regY:202.5,x:395,y:274.4},0).wait(1).to({x:407.8},0).wait(1).to({regX:150.4,regY:202.6,x:415.5,y:274.6},0).wait(1));

	// school_bg
	this.instance_9 = new lib.school_bg();
	this.instance_9.setTransform(278.5,247.5,1,1,0,0,0,373.5,237.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95,10.5,747,475);


(lib.slide_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90));

	// steam_man
	this.instance = new lib.steam_man_1();
	this.instance.setTransform(434.5,215,1,1,0,0,0,12.5,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:416.5,y:216},3).wait(1).to({x:412.4,y:218.3},0).wait(1).to({x:407.9,y:220.8},0).wait(1).to({x:403.6,y:223.2},0).wait(1).to({x:400.2,y:225},0).wait(1).to({x:398.5,y:226},0).wait(1).to({rotation:0.1,x:396.1,y:227.7},0).wait(1).to({rotation:0.2,x:391.3,y:231.3},0).wait(1).to({rotation:0.4,x:384.5,y:236.2},0).wait(1).to({rotation:0.7,x:376.4,y:242.1},0).wait(1).to({rotation:0.9,x:367.3,y:248.7},0).wait(1).to({rotation:1.2,x:357.5,y:255.9},0).wait(1).to({rotation:1.5,x:347.2,y:263.4},0).wait(1).to({rotation:1.8,x:336.8,y:271},0).wait(1).to({rotation:2.1,x:326.4,y:278.5},0).wait(1).to({rotation:2.4,x:316.3,y:286},0).wait(1).to({rotation:2.7,x:306.6,y:292.9},0).wait(1).to({rotation:3,x:297.8,y:299.4},0).to({regY:25.9,rotation:2.8,y:300.8},6).to({regY:26,y:298.5},5).to({rotation:3,y:299.4},11).to({rotation:-0.2,x:396.3,y:232.3},11).to({rotation:-1.2,x:397.3,y:230.5},7).to({regY:26.1,rotation:0.3,x:395.8,y:233.3},7).to({regY:26,rotation:-1.2,x:397.3,y:230.5},5).to({regY:26.1,rotation:0.3,x:395.8,y:233.3},7).to({rotation:0.3,x:397.3,y:232.3},5).to({x:395.8,y:233.3},5).wait(1));

	// steam_boy_1
	this.instance_1 = new lib.steam_boy_1_1();
	this.instance_1.setTransform(135.5,383,1,1,0,0,0,18.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:202,y:368},15).to({y:364.5},7).to({x:209,y:361},4).to({x:226,y:303},6).to({y:299.5},5).wait(5).to({regX:18.4,regY:23.4,rotation:-3.2,x:324.6,y:236.3},11).wait(2).to({scaleX:0.85,scaleY:0.85,rotation:-3,x:398.9,y:217.6},6).to({regX:18.5,scaleX:0.74,scaleY:0.74,rotation:-3.2,x:444.7,y:215.9},6).to({rotation:-3.1,x:469.5,y:215.6},3).to({rotation:-3.2,x:494.2,y:221.4},3).to({y:218.9},6).to({rotation:-3.1,x:498.7,y:215.4},5).to({rotation:-3.2,x:494.2,y:218.9},5).wait(1));

	// steam_lad_1
	this.instance_2 = new lib.steam_lad_1_1();
	this.instance_2.setTransform(34,352,1,1,0,0,0,37,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:117,y:362},15).to({x:126,y:355},7).wait(7).to({x:160.5,y:295},7).to({y:298},6).to({rotation:-3.2,x:259.2,y:238.6},11).wait(4).to({regX:37.1,scaleX:0.85,scaleY:0.85,rotation:-3,x:343.3,y:222.5},6).to({regX:37,scaleX:0.74,scaleY:0.74,rotation:-3.2,x:396.1,y:217.6},6).to({rotation:-3.1,x:420.6,y:214.8},3).to({rotation:-3.2,x:445.1,y:217.1},3).to({x:447.1},4).to({rotation:-3.1,x:449.1,y:219},5).to({rotation:-3.2,x:447.1,y:217.1},5).wait(1));

	// steam_boy_2
	this.instance_3 = new lib.steam_boy_2_1();
	this.instance_3.setTransform(111,394,1,1,0,0,0,20,30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:190.5,y:385},15).to({x:189.5,y:393.5},7).wait(5).to({x:221.5,y:330.5},5).to({y:328.5},5).wait(5).to({rotation:-3.2,x:321.8,y:265.6},11).wait(3).to({regX:19.9,regY:30.6,scaleX:0.85,scaleY:0.85,rotation:-3,x:396.5,y:245.7},6).to({regY:30.5,scaleX:0.74,scaleY:0.74,rotation:-3.2,x:442.6,y:237.7},6).to({regY:30.4,rotation:-3.1,x:465.5,y:235.3},3).to({regY:30.5,rotation:-3.2,x:488.6,y:239.2},3).to({x:486.6,y:240.2},5).to({rotation:-3.1,x:487.1,y:239.2},5).to({rotation:-3.2,x:486.6,y:240.2},5).wait(1));

	// steam_dog
	this.instance_4 = new lib.steam_dog_1();
	this.instance_4.setTransform(185.1,373.5,1,1,0,0,0,18.5,18);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:253.5,y:362.5},15).to({x:243.5,y:359.5},7).wait(3).to({regX:18.6,regY:18.1,rotation:19.9,x:253.1,y:314.6},5).to({y:312.6},4).wait(8).to({rotation:16.7,x:352.4,y:248},11).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:16.6,x:422.7,y:230.6},6).to({regX:18.5,regY:18,scaleX:0.74,scaleY:0.74,rotation:16.7,x:465.3,y:224.5},6).to({regY:17.9,scaleX:0.74,scaleY:0.74,rotation:16.6,x:490.1,y:223.4},3).to({regY:18,scaleX:0.74,scaleY:0.74,rotation:16.7,x:514.8,y:227.5},3).to({y:226},7).to({y:227.5},5).to({y:226},5).wait(1));

	// steam- duck
	this.instance_5 = new lib.steamduck_1();
	this.instance_5.setTransform(389.5,325,1,1,0,0,0,13.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:421.6},22).to({x:430.3,y:329},6).to({x:436.1,y:327.2},4).to({x:474.1,y:326.1},24).to({x:478,y:327.5},3).to({x:504.5,y:325},20).to({x:507},6).to({x:509.5},4).wait(1));

	// steam_lighting_1
	this.instance_6 = new lib.steam_lighting_1_1();
	this.instance_6.setTransform(326.5,98.5,0.009,0.005,0,0,0,5.4,10.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({scaleX:1,scaleY:1},5).to({scaleX:0.01,scaleY:0.01},1).wait(13).to({scaleX:1,scaleY:1},5).to({scaleX:0.01,scaleY:0.01},1).wait(10).to({scaleX:1,scaleY:1},5).to({scaleX:0.01,scaleY:0.01},1).wait(17).to({scaleX:1,scaleY:1},5).to({scaleX:0.01,scaleY:0.01},1).wait(20));

	// steam_lighting_2
	this.instance_7 = new lib.steam_lighting_2_1();
	this.instance_7.setTransform(303.5,136,0.02,0.016,0,0,0,5,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(12).to({regX:5.5,regY:4,scaleX:1,scaleY:1},5).to({regX:5,regY:3.1,scaleX:0.02,scaleY:0.02},1).wait(21).to({regX:5.5,regY:4,scaleX:1,scaleY:1},5).to({regX:5,regY:3.1,scaleX:0.02,scaleY:0.02},1).wait(20).to({regX:5.5,regY:4,scaleX:1,scaleY:1},5).to({regX:5,regY:3.1,scaleX:0.02,scaleY:0.02},1).to({regX:5.5,regY:4,scaleX:1,scaleY:1},5).to({regX:5,regY:3.1,scaleX:0.02,scaleY:0.02},1).wait(6).to({regX:5.5,regY:4,scaleX:1,scaleY:1},4).to({regX:5,regY:3.1,scaleX:0.02,scaleY:0.02},1).wait(2));

	// steam_boat
	this.instance_8 = new lib.steam_boat_1();
	this.instance_8.setTransform(238.5,264,1,1,0,0,0,175.5,94);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:266.5},3).to({y:264},5).wait(1).to({regY:53,rotation:0.1,x:236.2,y:224.5},0).wait(1).to({rotation:0.2,x:231.3,y:227.7},0).wait(1).to({rotation:0.4,x:224.6,y:232},0).wait(1).to({rotation:0.7,x:216.5,y:237.3},0).wait(1).to({rotation:0.9,x:207.4,y:243.1},0).wait(1).to({rotation:1.2,x:197.7,y:249.5},0).wait(1).to({rotation:1.5,x:187.5,y:256.1},0).wait(1).to({rotation:1.8,x:177,y:262.8},0).wait(1).to({rotation:2.1,x:166.8,y:269.6},0).wait(1).to({rotation:2.4,x:156.6,y:276.1},0).wait(1).to({rotation:2.7,x:147,y:282.4},0).wait(1).to({regY:94,rotation:3,x:136,y:329.1},0).to({regX:175.6,rotation:2.8,x:136.1,y:330.6},6).to({y:328.1},5).to({regX:175.5,rotation:3,x:136,y:329.1},11).to({regX:175.6,rotation:-0.2,x:236.5,y:270.9},11).to({regX:175.5,rotation:-1.2,x:238.1,y:271.9},7).to({regY:93.9,rotation:0.3,x:235.6,y:270.4},7).to({regY:94,rotation:-1.2,x:238.1,y:271.9},5).to({regY:93.9,rotation:0.3,x:235.6,y:270.4},7).to({regY:94,rotation:-1.2,x:238.1,y:271.9},4).to({regY:93.9,rotation:0.3,x:235.6,y:270.4},6).wait(1));

	// steam_smoke
	this.instance_9 = new lib.steam_smoke_1();
	this.instance_9.setTransform(127,125,1,1,0,0,0,72,68);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({y:127},5).wait(1).to({rotation:0.1,x:124.8,y:128.4},0).wait(1).to({rotation:0.2,x:120.1,y:131.2},0).wait(1).to({rotation:0.4,x:113.7,y:135.2},0).wait(1).to({rotation:0.7,x:106.1,y:139.9},0).wait(1).to({rotation:0.9,x:97.4,y:145.3},0).wait(1).to({rotation:1.2,x:88.1,y:151},0).wait(1).to({rotation:1.5,x:78.3,y:157},0).wait(1).to({rotation:1.8,x:68.5,y:163.1},0).wait(1).to({rotation:2.1,x:58.6,y:169.2},0).wait(1).to({rotation:2.4,x:49,y:175.2},0).wait(1).to({rotation:2.7,x:39.8,y:180.8},0).wait(1).to({rotation:3,x:31.4,y:186},0).to({rotation:2.8,x:29.3},6).to({regX:72.1,x:31,y:186.6},5).to({regX:72,rotation:3,x:31.9,y:184.5},11).to({rotation:-0.2,x:124.4,y:132.4},11).to({rotation:-1.2,x:122.2,y:138.7},7).to({regX:72.1,rotation:0.3,x:124.4,y:132},7).to({regX:72,rotation:-1.2,x:123.7,y:139.2},5).to({regX:72.1,rotation:0.3,x:124.9,y:131},7).to({regX:72,rotation:-1.2,x:123.7,y:139.2},4).to({regX:72.1,rotation:0.3,x:124.9,y:131},6).wait(1));

	// steam_bg
	this.instance_10 = new lib.steam_bg_1();
	this.instance_10.setTransform(268,216.5,1,1,0,0,0,281,224.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13,-8,562,449);


(lib.mc_twitter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,down:7,out:14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(9).call(this.frame_12).wait(5).call(this.frame_17).wait(1));

	// Layer 2
	this.instance = new lib.ey_s_tweet_1();
	this.instance.setTransform(13,19,1,1,0,0,0,13,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:14.3},3).wait(11).to({x:13},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,38);


(lib.mc_facebook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1,"down":7,"out":14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(9).call(this.frame_12).wait(5).call(this.frame_17).wait(1));

	// Layer 1
	this.instance = new lib.ey_s_faceb_1();
	this.instance.setTransform(13,15.5,1,1,0,0,0,13,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:13.7},3).wait(11).to({x:13},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,31);


(lib.lipsync_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if (!this.initted) {
			this.initted = true;
			var tween = createjs.Tween.get({
				progress: 0
			}).wait(0).set({
				progress: 0.034263452221790794
			}).wait(15).set({
				progress: 0.04688136003959516
			}).wait(16).set({
				progress: 0.07211717567520368
			}).wait(17).set({
				progress: 0.11417686840121814
			}).wait(17).set({
				progress: 0.18147237676284114
			}).wait(16).set({
				progress: 0.27400370076007285
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.5137439492983547
			}).wait(17).set({
				progress: 0.5642155805695717
			}).wait(16).set({
				progress: 0.5978633347503832
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.6146872118407891
			}).wait(17).set({
				progress: 0.576833488387376
			}).wait(16).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.4422424716641303
			}).wait(16).set({
				progress: 0.3160633934860871
			}).wait(17).set({
				progress: 0.2571798236696671
			}).wait(17).set({
				progress: 0.2235320694888556
			}).wait(17).set({
				progress: 0.21091416167105104
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.3497111476668986
			}).wait(16).set({
				progress: 0.4632723180271374
			}).wait(17).set({
				progress: 0.6062752732955862
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(17).set({
				progress: 0.6946006280202165
			}).wait(16).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.6735707816572092
			}).wait(16).set({
				progress: 0.5810394576599777
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(17).set({
				progress: 0.467478287299739
			}).wait(16).set({
				progress: 0.4632723180271374
			}).wait(17).set({
				progress: 0.4548603794819345
			}).wait(17).set({
				progress: 0.4548603794819345
			}).wait(16).set({
				progress: 0.45065441020933306
			}).wait(17).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(16).set({
				progress: 0.39177084039291304
			}).wait(17).set({
				progress: 0.3497111476668986
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(16).set({
				progress: 0.286621608577877
			}).wait(17).set({
				progress: 0.27400370076007285
			}).wait(17).set({
				progress: 0.27400370076007285
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(16).set({
				progress: 0.4380365023915287
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(16).set({
				progress: 0.669364812384608
			}).wait(17).set({
				progress: 0.6819827202024121
			}).wait(17).set({
				progress: 0.6315110889311947
			}).wait(16).set({
				progress: 0.534773795661362
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.35391711693949995
			}).wait(17).set({
				progress: 0.2908275778504786
			}).wait(16).set({
				progress: 0.2824156393052756
			}).wait(17).set({
				progress: 0.2824156393052756
			}).wait(17).set({
				progress: 0.3034454856682827
			}).wait(16).set({
				progress: 0.35391711693949995
			}).wait(17).set({
				progress: 0.3833589018477101
			}).wait(17).set({
				progress: 0.4085947174833188
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(16).set({
				progress: 0.4422424716641303
			}).wait(17).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.4464484409367317
			}).wait(16).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.6146872118407891
			}).wait(17).set({
				progress: 0.6819827202024121
			}).wait(17).set({
				progress: 0.736660320746231
			}).wait(16).set({
				progress: 0.7661021056544407
			}).wait(17).set({
				progress: 0.7661021056544407
			}).wait(17).set({
				progress: 0.7492782285640351
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(16).set({
				progress: 0.6273051196585935
			}).wait(17).set({
				progress: 0.4716842565723402
			}).wait(16).set({
				progress: 0.39177084039291304
			}).wait(17).set({
				progress: 0.3497111476668986
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.35391711693949995
			}).wait(17).set({
				progress: 0.4085947174833188
			}).wait(16).set({
				progress: 0.49271410293534756
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.7114245051106223
			}).wait(16).set({
				progress: 0.7576901671092381
			}).wait(17).set({
				progress: 0.7703080749270425
			}).wait(17).set({
				progress: 0.7703080749270425
			}).wait(16).set({
				progress: 0.7450722592914337
			}).wait(17).set({
				progress: 0.7156304743832236
			}).wait(17).set({
				progress: 0.6777767509298107
			}).wait(17).set({
				progress: 0.6315110889311947
			}).wait(16).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5137439492983547
			}).wait(17).set({
				progress: 0.4716842565723402
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(16).set({
				progress: 0.4043887482107172
			}).wait(17).set({
				progress: 0.38756487112031146
			}).wait(17).set({
				progress: 0.38756487112031146
			}).wait(16).set({
				progress: 0.38756487112031146
			}).wait(17).set({
				progress: 0.4085947174833188
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.4800961951175432
			}).wait(16).set({
				progress: 0.593657365477782
			}).wait(17).set({
				progress: 0.6819827202024121
			}).wait(17).set({
				progress: 0.7408662900188321
			}).wait(16).set({
				progress: 0.7703080749270425
			}).wait(17).set({
				progress: 0.7661021056544407
			}).wait(17).set({
				progress: 0.7240424129284266
			}).wait(16).set({
				progress: 0.660952873839405
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.49271410293534756
			}).wait(17).set({
				progress: 0.4548603794819345
			}).wait(16).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(17).set({
				progress: 0.5137439492983547
			}).wait(16).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.660952873839405
			}).wait(17).set({
				progress: 0.7114245051106223
			}).wait(17).set({
				progress: 0.7450722592914337
			}).wait(17).set({
				progress: 0.7492782285640351
			}).wait(16).set({
				progress: 0.7114245051106223
			}).wait(16).set({
				progress: 0.6483349660216007
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.526361857116159
			}).wait(17).set({
				progress: 0.4716842565723402
			}).wait(16).set({
				progress: 0.42121262530112297
			}).wait(19).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(15).set({
				progress: 0.5515976727517675
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(16).set({
				progress: 0.6946006280202165
			}).wait(17).set({
				progress: 0.7576901671092381
			}).wait(16).set({
				progress: 0.795543890562651
			}).wait(17).set({
				progress: 0.7913379212900495
			}).wait(17).set({
				progress: 0.7703080749270425
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(16).set({
				progress: 0.6861886894750135
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.5726275191147747
			}).wait(17).set({
				progress: 0.5305678263887602
			}).wait(17).set({
				progress: 0.5011260414805505
			}).wait(16).set({
				progress: 0.47589022584494156
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(16).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.467478287299739
			}).wait(17).set({
				progress: 0.526361857116159
			}).wait(17).set({
				progress: 0.6104812425681878
			}).wait(16).set({
				progress: 0.719836443655825
			}).wait(17).set({
				progress: 0.7618961363818395
			}).wait(17).set({
				progress: 0.7661021056544407
			}).wait(17).set({
				progress: 0.7408662900188321
			}).wait(16).set({
				progress: 0.6399230274763976
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.47589022584494156
			}).wait(17).set({
				progress: 0.4548603794819345
			}).wait(17).set({
				progress: 0.47589022584494156
			}).wait(17).set({
				progress: 0.5305678263887602
			}).wait(16).set({
				progress: 0.602069304022985
			}).wait(17).set({
				progress: 0.6819827202024121
			}).wait(17).set({
				progress: 0.7787200134722452
			}).wait(16).set({
				progress: 0.7913379212900495
			}).wait(17).set({
				progress: 0.7661021056544407
			}).wait(17).set({
				progress: 0.6903946587476151
			}).wait(17).set({
				progress: 0.602069304022985
			}).wait(16).set({
				progress: 0.534773795661362
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(17).set({
				progress: 0.4800961951175432
			}).wait(16).set({
				progress: 0.48430216439014456
			}).wait(17).set({
				progress: 0.5053320107531517
			}).wait(17).set({
				progress: 0.5305678263887602
			}).wait(17).set({
				progress: 0.5515976727517675
			}).wait(16).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(17).set({
				progress: 0.39597680966551446
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.10576492985601538
			}).wait(17).set({
				progress: 0.025851513676587924
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
				progress: 0.025851513676587924
			}).wait(16).set({
				progress: 0.1562365611272326
			}).wait(17).set({
				progress: 0.3665350247573043
			}).wait(17).set({
				progress: 0.467478287299739
			}).wait(16).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.5600096112969706
			}).wait(16).set({
				progress: 0.5600096112969706
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.5179499185709561
			}).wait(16).set({
				progress: 0.45906634875453606
			}).wait(17).set({
				progress: 0.4043887482107172
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(16).set({
				progress: 0.278209670032674
			}).wait(17).set({
				progress: 0.21512013094365262
			}).wait(17).set({
				progress: 0.20250222312584826
			}).wait(17).set({
				progress: 0.21512013094365262
			}).wait(16).set({
				progress: 0.26979773148747127
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.6273051196585935
			}).wait(16).set({
				progress: 0.6651588431120061
			}).wait(17).set({
				progress: 0.669364812384608
			}).wait(17).set({
				progress: 0.5810394576599777
			}).wait(16).set({
				progress: 0.4716842565723402
			}).wait(17).set({
				progress: 0.3833589018477101
			}).wait(17).set({
				progress: 0.35391711693949995
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(16).set({
				progress: 0.4380365023915287
			}).wait(17).set({
				progress: 0.5600096112969706
			}).wait(17).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.7408662900188321
			}).wait(17).set({
				progress: 0.795543890562651
			}).wait(16).set({
				progress: 0.8081617983804551
			}).wait(16).set({
				progress: 0.7787200134722452
			}).wait(17).set({
				progress: 0.736660320746231
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(16).set({
				progress: 0.6357170582037965
			}).wait(17).set({
				progress: 0.602069304022985
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(16).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.48430216439014456
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(17).set({
				progress: 0.37074099402990573
			}).wait(17).set({
				progress: 0.3202693627586885
			}).wait(16).set({
				progress: 0.286621608577877
			}).wait(17).set({
				progress: 0.286621608577877
			}).wait(16).set({
				progress: 0.2908275778504786
			}).wait(18).set({
				progress: 0.3286813013038912
			}).wait(16).set({
				progress: 0.39597680966551446
			}).wait(17).set({
				progress: 0.5305678263887602
			}).wait(16).set({
				progress: 0.6062752732955862
			}).wait(17).set({
				progress: 0.660952873839405
			}).wait(17).set({
				progress: 0.6777767509298107
			}).wait(16).set({
				progress: 0.6777767509298107
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.4632723180271374
			}).wait(17).set({
				progress: 0.3665350247573043
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.3286813013038912
			}).wait(16).set({
				progress: 0.3244753320312901
			}).wait(17).set({
				progress: 0.36232905548470296
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.526361857116159
			}).wait(16).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.6988065972928177
			}).wait(17).set({
				progress: 0.736660320746231
			}).wait(16).set({
				progress: 0.7324543514736291
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(16).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.3581230862121016
			}).wait(17).set({
				progress: 0.3076514549408843
			}).wait(16).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.219326100216254
			}).wait(16).set({
				progress: 0.19829625385324687
			}).wait(17).set({
				progress: 0.18988431530804412
			}).wait(17).set({
				progress: 0.1856783460354425
			}).wait(17).set({
				progress: 0.1856783460354425
			}).wait(16).set({
				progress: 0.20250222312584826
			}).wait(17).set({
				progress: 0.24876788512446413
			}).wait(17).set({
				progress: 0.3202693627586885
			}).wait(16).set({
				progress: 0.4716842565723402
			}).wait(17).set({
				progress: 0.5600096112969706
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(16).set({
				progress: 0.5515976727517675
			}).wait(17).set({
				progress: 0.42541859457372455
			}).wait(17).set({
				progress: 0.33288727057649287
			}).wait(16).set({
				progress: 0.26559176221486985
			}).wait(18).set({
				progress: 0.22773803876145676
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.24876788512446413
			}).wait(18).set({
				progress: 0.2950335471230798
			}).wait(16).set({
				progress: 0.3497111476668986
			}).wait(16).set({
				progress: 0.39597680966551446
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.42121262530112297
			}).wait(17).set({
				progress: 0.42121262530112297
			}).wait(16).set({
				progress: 0.4128006867559202
			}).wait(17).set({
				progress: 0.36232905548470296
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(16).set({
				progress: 0.26979773148747127
			}).wait(17).set({
				progress: 0.23614997730665976
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(17).set({
				progress: 0.24035594657926135
			}).wait(16).set({
				progress: 0.2908275778504786
			}).wait(17).set({
				progress: 0.3833589018477101
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.660952873839405
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(16).set({
				progress: 0.6567469045668036
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.5011260414805505
			}).wait(17).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.3791529325751087
			}).wait(16).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.2950335471230798
			}).wait(17).set({
				progress: 0.2571798236696671
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(16).set({
				progress: 0.2235320694888556
			}).wait(17).set({
				progress: 0.2235320694888556
			}).wait(16).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(16).set({
				progress: 0.602069304022985
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.602069304022985
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(16).set({
				progress: 0.4043887482107172
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(16).set({
				progress: 0.3244753320312901
			}).wait(18).set({
				progress: 0.3034454856682827
			}).wait(16).set({
				progress: 0.26559176221486985
			}).wait(17).set({
				progress: 0.19829625385324687
			}).wait(16).set({
				progress: 0.11417686840121814
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
			}).wait(16).set({
				progress: 0
			}).wait(17).set({
				progress: 0
			}).wait(17).set({
				progress: 0.01743957513138505
			}).wait(17).set({
				progress: 0.21512013094365262
			}).wait(16).set({
				progress: 0.4085947174833188
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.6273051196585935
			}).wait(16).set({
				progress: 0.6146872118407891
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.5389797649339632
			}).wait(16).set({
				progress: 0.48430216439014456
			}).wait(17).set({
				progress: 0.4128006867559202
			}).wait(17).set({
				progress: 0.2908275778504786
			}).wait(16).set({
				progress: 0.21512013094365262
			}).wait(17).set({
				progress: 0.15203059185463103
			}).wait(17).set({
				progress: 0.10997089912861654
			}).wait(17).set({
				progress: 0.10155896058341378
			}).wait(16).set({
				progress: 0.14782462258202964
			}).wait(17).set({
				progress: 0.3034454856682827
			}).wait(17).set({
				progress: 0.42121262530112297
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(16).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.6062752732955862
			}).wait(17).set({
				progress: 0.5600096112969706
			}).wait(16).set({
				progress: 0.4800961951175432
			}).wait(17).set({
				progress: 0.4001827789381158
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.2950335471230798
			}).wait(16).set({
				progress: 0.2950335471230798
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.42121262530112297
			}).wait(17).set({
				progress: 0.5389797649339632
			}).wait(16).set({
				progress: 0.5978633347503832
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(16).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.5642155805695717
			}).wait(17).set({
				progress: 0.4969200722079487
			}).wait(17).set({
				progress: 0.4085947174833188
			}).wait(16).set({
				progress: 0.3244753320312901
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(16).set({
				progress: 0.24035594657926135
			}).wait(17).set({
				progress: 0.3034454856682827
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.5389797649339632
			}).wait(17).set({
				progress: 0.6819827202024121
			}).wait(16).set({
				progress: 0.7450722592914337
			}).wait(17).set({
				progress: 0.787131952017448
			}).wait(16).set({
				progress: 0.7997498598352522
			}).wait(18).set({
				progress: 0.7997498598352522
			}).wait(16).set({
				progress: 0.7745140441996436
			}).wait(17).set({
				progress: 0.736660320746231
			}).wait(16).set({
				progress: 0.6946006280202165
			}).wait(18).set({
				progress: 0.6441289967489993
			}).wait(16).set({
				progress: 0.5389797649339632
			}).wait(16).set({
				progress: 0.4548603794819345
			}).wait(17).set({
				progress: 0.37074099402990573
			}).wait(17).set({
				progress: 0.29923951639568136
			}).wait(17).set({
				progress: 0.24456191585186252
			}).wait(16).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(16).set({
				progress: 0.22773803876145676
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(16).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(16).set({
				progress: 0.24456191585186252
			}).wait(17).set({
				progress: 0.26979773148747127
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(17).set({
				progress: 0.5011260414805505
			}).wait(16).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.6567469045668036
			}).wait(16).set({
				progress: 0.6903946587476151
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(16).set({
				progress: 0.5053320107531517
			}).wait(18).set({
				progress: 0.41700665602852155
			}).wait(16).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.3118574242134855
			}).wait(16).set({
				progress: 0.3118574242134855
			}).wait(17).set({
				progress: 0.3202693627586885
			}).wait(17).set({
				progress: 0.39177084039291304
			}).wait(16).set({
				progress: 0.4716842565723402
			}).wait(17).set({
				progress: 0.5600096112969706
			}).wait(17).set({
				progress: 0.6441289967489993
			}).wait(17).set({
				progress: 0.6946006280202165
			}).wait(17).set({
				progress: 0.7114245051106223
			}).wait(16).set({
				progress: 0.669364812384608
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(17).set({
				progress: 0.5053320107531517
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(16).set({
				progress: 0.39597680966551446
			}).wait(17).set({
				progress: 0.39177084039291304
			}).wait(16).set({
				progress: 0.4296245638463259
			}).wait(18).set({
				progress: 0.4969200722079487
			}).wait(16).set({
				progress: 0.576833488387376
			}).wait(16).set({
				progress: 0.6819827202024121
			}).wait(17).set({
				progress: 0.7240424129284266
			}).wait(17).set({
				progress: 0.7408662900188321
			}).wait(16).set({
				progress: 0.719836443655825
			}).wait(17).set({
				progress: 0.660952873839405
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5053320107531517
			}).wait(16).set({
				progress: 0.42541859457372455
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(17).set({
				progress: 0.26559176221486985
			}).wait(17).set({
				progress: 0.24035594657926135
			}).wait(16).set({
				progress: 0.24035594657926135
			}).wait(17).set({
				progress: 0.2824156393052756
			}).wait(17).set({
				progress: 0.42541859457372455
			}).wait(16).set({
				progress: 0.5473917034791662
			}).wait(17).set({
				progress: 0.6441289967489993
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.7240424129284266
			}).wait(16).set({
				progress: 0.7282483822010279
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(16).set({
				progress: 0.719836443655825
			}).wait(17).set({
				progress: 0.6777767509298107
			}).wait(17).set({
				progress: 0.6273051196585935
			}).wait(16).set({
				progress: 0.5726275191147747
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(16).set({
				progress: 0.3202693627586885
			}).wait(17).set({
				progress: 0.26559176221486985
			}).wait(17).set({
				progress: 0.21512013094365262
			}).wait(16).set({
				progress: 0.21091416167105104
			}).wait(17).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.34550517839429723
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(16).set({
				progress: 0.6315110889311947
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(16).set({
				progress: 0.7282483822010279
			}).wait(18).set({
				progress: 0.7156304743832236
			}).wait(16).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.5179499185709561
			}).wait(16).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.3665350247573043
			}).wait(17).set({
				progress: 0.3244753320312901
			}).wait(16).set({
				progress: 0.2950335471230798
			}).wait(17).set({
				progress: 0.2908275778504786
			}).wait(17).set({
				progress: 0.2908275778504786
			}).wait(17).set({
				progress: 0.3118574242134855
			}).wait(16).set({
				progress: 0.39597680966551446
			}).wait(17).set({
				progress: 0.47589022584494156
			}).wait(17).set({
				progress: 0.5515976727517675
			}).wait(16).set({
				progress: 0.6146872118407891
			}).wait(17).set({
				progress: 0.6651588431120061
			}).wait(17).set({
				progress: 0.6735707816572092
			}).wait(16).set({
				progress: 0.6735707816572092
			}).wait(17).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.6104812425681878
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(16).set({
				progress: 0.4632723180271374
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.39177084039291304
			}).wait(17).set({
				progress: 0.37074099402990573
			}).wait(16).set({
				progress: 0.35391711693949995
			}).wait(17).set({
				progress: 0.3286813013038912
			}).wait(17).set({
				progress: 0.3118574242134855
			}).wait(16).set({
				progress: 0.29923951639568136
			}).wait(17).set({
				progress: 0.2908275778504786
			}).wait(17).set({
				progress: 0.27400370076007285
			}).wait(17).set({
				progress: 0.27400370076007285
			}).wait(16).set({
				progress: 0.278209670032674
			}).wait(17).set({
				progress: 0.3076514549408843
			}).wait(17).set({
				progress: 0.3791529325751087
			}).wait(16).set({
				progress: 0.4464484409367317
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.602069304022985
			}).wait(16).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.6146872118407891
			}).wait(17).set({
				progress: 0.576833488387376
			}).wait(17).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(16).set({
				progress: 0.3791529325751087
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(16).set({
				progress: 0.3286813013038912
			}).wait(18).set({
				progress: 0.3244753320312901
			}).wait(16).set({
				progress: 0.3244753320312901
			}).wait(16).set({
				progress: 0.34550517839429723
			}).wait(17).set({
				progress: 0.37074099402990573
			}).wait(17).set({
				progress: 0.4001827789381158
			}).wait(17).set({
				progress: 0.4380365023915287
			}).wait(16).set({
				progress: 0.47589022584494156
			}).wait(17).set({
				progress: 0.526361857116159
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.5684215498421735
			}).wait(16).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.45906634875453606
			}).wait(16).set({
				progress: 0.4043887482107172
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(17).set({
				progress: 0.38756487112031146
			}).wait(16).set({
				progress: 0.4296245638463259
			}).wait(17).set({
				progress: 0.4969200722079487
			}).wait(17).set({
				progress: 0.576833488387376
			}).wait(17).set({
				progress: 0.6861886894750135
			}).wait(16).set({
				progress: 0.719836443655825
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(17).set({
				progress: 0.7240424129284266
			}).wait(16).set({
				progress: 0.7114245051106223
			}).wait(17).set({
				progress: 0.7030125665654194
			}).wait(17).set({
				progress: 0.6946006280202165
			}).wait(16).set({
				progress: 0.6861886894750135
			}).wait(17).set({
				progress: 0.6735707816572092
			}).wait(17).set({
				progress: 0.6273051196585935
			}).wait(16).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.5053320107531517
			}).wait(17).set({
				progress: 0.4380365023915287
			}).wait(16).set({
				progress: 0.38756487112031146
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.286621608577877
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.1856783460354425
			}).wait(17).set({
				progress: 0.16885446894503678
			}).wait(17).set({
				progress: 0.1562365611272326
			}).wait(16).set({
				progress: 0.13941268403682688
			}).wait(17).set({
				progress: 0.13520671476422527
			}).wait(17).set({
				progress: 0.13520671476422527
			}).wait(16).set({
				progress: 0.1562365611272326
			}).wait(18).set({
				progress: 0.18147237676284114
			}).wait(16).set({
				progress: 0.20670819239844987
			}).wait(16).set({
				progress: 0.2908275778504786
			}).wait(17).set({
				progress: 0.38756487112031146
			}).wait(17).set({
				progress: 0.48850813366274615
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(16).set({
				progress: 0.5810394576599777
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(16).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.5558036420243692
			}).wait(17).set({
				progress: 0.5053320107531517
			}).wait(16).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(17).set({
				progress: 0.2571798236696671
			}).wait(16).set({
				progress: 0.219326100216254
			}).wait(17).set({
				progress: 0.21091416167105104
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(16).set({
				progress: 0.33288727057649287
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.4969200722079487
			}).wait(17).set({
				progress: 0.5642155805695717
			}).wait(17).set({
				progress: 0.6062752732955862
			}).wait(16).set({
				progress: 0.6188931811133905
			}).wait(17).set({
				progress: 0.6062752732955862
			}).wait(17).set({
				progress: 0.5642155805695717
			}).wait(16).set({
				progress: 0.4969200722079487
			}).wait(17).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(16).set({
				progress: 0.2950335471230798
			}).wait(17).set({
				progress: 0.29923951639568136
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.45906634875453606
			}).wait(16).set({
				progress: 0.5473917034791662
			}).wait(17).set({
				progress: 0.6273051196585935
			}).wait(17).set({
				progress: 0.6735707816572092
			}).wait(17).set({
				progress: 0.6861886894750135
			}).wait(16).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(17).set({
				progress: 0.5305678263887602
			}).wait(16).set({
				progress: 0.4548603794819345
			}).wait(17).set({
				progress: 0.4043887482107172
			}).wait(17).set({
				progress: 0.3581230862121016
			}).wait(17).set({
				progress: 0.3034454856682827
			}).wait(17).set({
				progress: 0.2571798236696671
			}).wait(16).set({
				progress: 0.21512013094365262
			}).wait(16).set({
				progress: 0.18988431530804412
			}).wait(17).set({
				progress: 0.18988431530804412
			}).wait(17).set({
				progress: 0.20670819239844987
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.35391711693949995
			}).wait(16).set({
				progress: 0.5011260414805505
			}).wait(17).set({
				progress: 0.576833488387376
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(16).set({
				progress: 0.6315110889311947
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.5179499185709561
			}).wait(17).set({
				progress: 0.42121262530112297
			}).wait(16).set({
				progress: 0.3286813013038912
			}).wait(17).set({
				progress: 0.24035594657926135
			}).wait(16).set({
				progress: 0.2235320694888556
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(17).set({
				progress: 0.26979773148747127
			}).wait(17).set({
				progress: 0.4085947174833188
			}).wait(16).set({
				progress: 0.5053320107531517
			}).wait(17).set({
				progress: 0.5852454269325791
			}).wait(17).set({
				progress: 0.6357170582037965
			}).wait(17).set({
				progress: 0.652540935294202
			}).wait(16).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.5894513962051806
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(16).set({
				progress: 0.4422424716641303
			}).wait(17).set({
				progress: 0.37074099402990573
			}).wait(17).set({
				progress: 0.3160633934860871
			}).wait(16).set({
				progress: 0.26559176221486985
			}).wait(17).set({
				progress: 0.23614997730665976
			}).wait(17).set({
				progress: 0.21512013094365262
			}).wait(17).set({
				progress: 0.20670819239844987
			}).wait(16).set({
				progress: 0.19829625385324687
			}).wait(17).set({
				progress: 0.18988431530804412
			}).wait(17).set({
				progress: 0.18147237676284114
			}).wait(16).set({
				progress: 0.17726640749023953
			}).wait(17).set({
				progress: 0.17306043821763836
			}).wait(17).set({
				progress: 0.17306043821763836
			}).wait(17).set({
				progress: 0.17306043821763836
			}).wait(16).set({
				progress: 0.16885446894503678
			}).wait(17).set({
				progress: 0.16885446894503678
			}).wait(17).set({
				progress: 0.16885446894503678
			}).wait(17).set({
				progress: 0.17726640749023953
			}).wait(16).set({
				progress: 0.20670819239844987
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(16).set({
				progress: 0.3833589018477101
			}).wait(17).set({
				progress: 0.48430216439014456
			}).wait(17).set({
				progress: 0.5642155805695717
			}).wait(17).set({
				progress: 0.6104812425681878
			}).wait(16).set({
				progress: 0.6230991503859922
			}).wait(18).set({
				progress: 0.5978633347503832
			}).wait(16).set({
				progress: 0.5473917034791662
			}).wait(17).set({
				progress: 0.4800961951175432
			}).wait(16).set({
				progress: 0.4128006867559202
			}).wait(18).set({
				progress: 0.3665350247573043
			}).wait(16).set({
				progress: 0.34550517839429723
			}).wait(17).set({
				progress: 0.36232905548470296
			}).wait(16).set({
				progress: 0.42121262530112297
			}).wait(17).set({
				progress: 0.5389797649339632
			}).wait(17).set({
				progress: 0.6104812425681878
			}).wait(16).set({
				progress: 0.6735707816572092
			}).wait(17).set({
				progress: 0.7156304743832236
			}).wait(17).set({
				progress: 0.7240424129284266
			}).wait(16).set({
				progress: 0.719836443655825
			}).wait(17).set({
				progress: 0.6988065972928177
			}).wait(17).set({
				progress: 0.6567469045668036
			}).wait(17).set({
				progress: 0.5978633347503832
			}).wait(17).set({
				progress: 0.49271410293534756
			}).wait(16).set({
				progress: 0.41700665602852155
			}).wait(17).set({
				progress: 0.36232905548470296
			}).wait(16).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(17).set({
				progress: 0.33709323984909423
			}).wait(16).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.5095379800257531
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(16).set({
				progress: 0.6735707816572092
			}).wait(17).set({
				progress: 0.6988065972928177
			}).wait(17).set({
				progress: 0.6988065972928177
			}).wait(16).set({
				progress: 0.669364812384608
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.5726275191147747
			}).wait(16).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.4548603794819345
			}).wait(17).set({
				progress: 0.43383053311892733
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(17).set({
				progress: 0.4296245638463259
			}).wait(16).set({
				progress: 0.4422424716641303
			}).wait(17).set({
				progress: 0.5095379800257531
			}).wait(16).set({
				progress: 0.5684215498421735
			}).wait(17).set({
				progress: 0.6230991503859922
			}).wait(17).set({
				progress: 0.6777767509298107
			}).wait(17).set({
				progress: 0.7114245051106223
			}).wait(16).set({
				progress: 0.7324543514736291
			}).wait(17).set({
				progress: 0.736660320746231
			}).wait(17).set({
				progress: 0.7324543514736291
			}).wait(16).set({
				progress: 0.6988065972928177
			}).wait(18).set({
				progress: 0.652540935294202
			}).wait(16).set({
				progress: 0.5515976727517675
			}).wait(17).set({
				progress: 0.4716842565723402
			}).wait(16).set({
				progress: 0.39177084039291304
			}).wait(17).set({
				progress: 0.3244753320312901
			}).wait(17).set({
				progress: 0.26979773148747127
			}).wait(16).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(17).set({
				progress: 0.2824156393052756
			}).wait(16).set({
				progress: 0.3665350247573043
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.6188931811133905
			}).wait(16).set({
				progress: 0.6903946587476151
			}).wait(17).set({
				progress: 0.6988065972928177
			}).wait(17).set({
				progress: 0.669364812384608
			}).wait(16).set({
				progress: 0.6062752732955862
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(17).set({
				progress: 0.42541859457372455
			}).wait(17).set({
				progress: 0.3076514549408843
			}).wait(16).set({
				progress: 0.2571798236696671
			}).wait(17).set({
				progress: 0.23194400803405837
			}).wait(17).set({
				progress: 0.2235320694888556
			}).wait(17).set({
				progress: 0.22773803876145676
			}).wait(16).set({
				progress: 0.29923951639568136
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(17).set({
				progress: 0.45065441020933306
			}).wait(16).set({
				progress: 0.5095379800257531
			}).wait(17).set({
				progress: 0.5431857342065646
			}).wait(17).set({
				progress: 0.5473917034791662
			}).wait(17).set({
				progress: 0.5221558878435576
			}).wait(16).set({
				progress: 0.42541859457372455
			}).wait(17).set({
				progress: 0.3412992091216958
			}).wait(17).set({
				progress: 0.2824156393052756
			}).wait(17).set({
				progress: 0.26138579294226827
			}).wait(16).set({
				progress: 0.27400370076007285
			}).wait(17).set({
				progress: 0.3749469633025073
			}).wait(16).set({
				progress: 0.4716842565723402
			}).wait(17).set({
				progress: 0.5726275191147747
			}).wait(17).set({
				progress: 0.652540935294202
			}).wait(17).set({
				progress: 0.6903946587476151
			}).wait(16).set({
				progress: 0.669364812384608
			}).wait(17).set({
				progress: 0.593657365477782
			}).wait(17).set({
				progress: 0.49271410293534756
			}).wait(16).set({
				progress: 0.3833589018477101
			}).wait(18).set({
				progress: 0.2824156393052756
			}).wait(16).set({
				progress: 0.17726640749023953
			}).wait(17).set({
				progress: 0.0006156980409793047
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
			}).wait(700).set({
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

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17));

	// Layer 4
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(31.5,-2.8,1,1,0,0,0,1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.85},16).wait(1));

	// early_s_mouth_r
	this.instance_1 = new lib.early_s_mouth_r_1();
	this.instance_1.setTransform(39.8,3.1,1,1,0,0,0,9.8,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.02,skewY:-10.7,y:5.1},16).wait(1));

	// early_s_mouth_l
	this.instance_2 = new lib.early_s_mouth_l_1();
	this.instance_2.setTransform(22.4,3.3,1,1,0,0,0,1.4,1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.04,skewY:16.7,y:4.3},16).wait(1));

	// early_s_jaw
	this.instance_3 = new lib.early_s_jaw_1();
	this.instance_3.setTransform(28.6,-0.4,1,1,0,0,0,22.6,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleY:1.13},16).wait(1));

	// early_s_head
	this.instance_4 = new lib.early_s_head_1();
	this.instance_4.setTransform(25,-17.5,1,1,0,0,0,26,33.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-51,52,67);


(lib.home_stick_01_2 = function() {
	this.initialize();

	// home_stick_01
	this.instance_1 = new lib.home_stick_01_1();
	this.instance_1.setTransform(7.5,48.5,1,1,0,0,0,3.5,43.5);

	// home_stick_01's Drop Shadow
	this.instance_2 = new lib.home_stick_01sDropShadow_1();
	this.instance_2.setTransform(7.5,47.5,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.home_man1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_man1();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(18.5,64.1,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,34,111.6);


(lib.home_fore_1_2 = function() {
	this.initialize();

	// home_fore_1
	this.instance_1 = new lib.home_fore_1_1();
	this.instance_1.setTransform(278.5,49,1,1,0,0,0,276.5,45);

	// home_fore_1's Drop Shadow
	this.instance_2 = new lib.home_fore_1sDropShadow_1();
	this.instance_2.setTransform(278.5,47,1,1,0,0,0,278.5,47);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,557,94);


(lib.home_dog_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_dog();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(18.5,53.3,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,26,100.8);


(lib.home_chicken_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_chicken_2();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(15.4,49.8,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,97.3);


(lib.home_chicken_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_chicken_1();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(10.5,50.8,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,98.3);


(lib.home_chciken_3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_chciken_3();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(14.7,48.7,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23,96.2);


(lib.home_boy_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_boy_1();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(13.6,65.9,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25,113.4);


(lib.garage_stick_01_2 = function() {
	this.initialize();

	// garage_stick_01
	this.instance_1 = new lib.garage_stick_01_1();
	this.instance_1.setTransform(6.5,46.5,1,1,0,0,0,3.5,43.5);

	// garage_stick_01's Drop Shadow
	this.instance_2 = new lib.garage_stick_01sDropShadow_1();
	this.instance_2.setTransform(7.5,47.5,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.garage_man_tyre_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_man_tyre();

	// garage_stick_01
	this.instance_1 = new lib.garage_stick_01_2();
	this.instance_1.setTransform(10.7,59.6,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21,107.1);


(lib.garage_man_2_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_man_2_1();

	// garage_stick_01
	this.instance_1 = new lib.garage_stick_01_2();
	this.instance_1.setTransform(13.2,67.3,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27,114.8);


(lib.garage_man_2_2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_man_2();

	// garage_stick_01
	this.instance_1 = new lib.garage_stick_01_2();
	this.instance_1.setTransform(32.7,67.9,1,1,8.2,0,0,8,11.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,151.9);


(lib.garage_fore_2_2 = function() {
	this.initialize();

	// garage_fore_2
	this.instance_1 = new lib.garage_fore_2_1();
	this.instance_1.setTransform(162.5,80,1,1,0,0,0,159.5,75);

	// garage_fore_2's Drop Shadow
	this.instance_2 = new lib.garage_fore_2sDropShadow_1();
	this.instance_2.setTransform(162,77.5,1,1,0,0,0,162,77.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,324,155);


(lib.garage_fore_1_2 = function() {
	this.initialize();

	// garage_fore_1
	this.instance_1 = new lib.garage_fore_1_1();
	this.instance_1.setTransform(265.5,89.5,1,1,0,0,0,263.5,85.5);

	// garage_fore_1's Drop Shadow
	this.instance_2 = new lib.garage_fore_1sDropShadow_1();
	this.instance_2.setTransform(265,87.5,1,1,0,0,0,265,87.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,530,175);


(lib.garage_cat_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.garage_cat();

	// garage_stick_01
	this.instance_1 = new lib.garage_stick_01_2();
	this.instance_1.setTransform(11.1,55.3,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20,102.8);


(lib.floor_sign = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":2,"out":16});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_13 = function() {
		this.stop();
	}
	this.frame_28 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(13).call(this.frame_13).wait(15).call(this.frame_28).wait(1));

	// ey_s_drag_sign
	this.instance = new lib.ey_s_drag_sign_1();
	this.instance.setTransform(586,712.5,1,1,0,0,0,54,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1).to({y:708.3},0).wait(1).to({y:700.4},0).wait(1).to({y:691.4},0).wait(1).to({y:682.7},0).wait(1).to({y:675.2},0).wait(1).to({y:671.5},0).wait(1).to({y:671.9},0).wait(1).to({y:672.5},0).wait(1).to({y:673.1},0).wait(1).to({y:673.5},0).wait(4).to({y:673.1},0).wait(1).to({y:672.5},0).wait(1).to({y:671.9},0).wait(1).to({y:671.5},0).wait(1).to({y:675.7},0).wait(1).to({y:683.6},0).wait(1).to({y:692.6},0).wait(1).to({y:701.3},0).wait(1).to({y:708.8},0).wait(1).to({y:712.5},0).to({_off:true},1).wait(2));

	// ey_s_hole
	this.instance_1 = new lib.ey_s_hole_1();
	this.instance_1.setTransform(581.5,686,1,1,0,0,0,64.5,15);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(25).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ey_s_title_5 = function() {
	this.initialize();

	// ey_s_title_5_new
	this.instance = new lib.ey_s_title_5_new_1();
	this.instance.setTransform(38,27,1,1,0,0,0,37,27);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,74,54);


(lib.ey_s_pointer = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_s_l_fingers_1();
	this.instance.setTransform(249.5,123.5,1,1,0,0,0,4.5,14.5);

	this.instance_1 = new lib.early_s_chickenpointer_1();
	this.instance_1.setTransform(252,122,1,1,0,0,0,11,116);

	this.instance_2 = new lib.early_s_l_hand_1();
	this.instance_2.setTransform(233,134,1,1,0,0,0,5,25);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(228,6,55,140);


(lib.ey_s_legs_all = function() {
	this.initialize();

	// early_pants
	this.instance = new lib.early_pants();
	this.instance.setTransform(111,219.5,1,1,0,0,0,49,15.5);

	// early_shoes
	this.instance_1 = new lib.early_shoes_1();
	this.instance_1.setTransform(113,430.5,1,1,0,0,0,65,16.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(48,204,130,243);


(lib.ey_s_arm_l = function() {
	this.initialize();

	// early_r_forearm
	this.instance = new lib.early_r_forearm_1();
	this.instance.setTransform(33,161,1,1,0,0,0,12,10);

	// early_r_upperarm
	this.instance_1 = new lib.early_r_upperarm_1();
	this.instance_1.setTransform(59.5,93.5,1,1,0,0,0,38.5,13.5);

	// early_r_hand
	this.instance_2 = new lib.early_r_hand_1();
	this.instance_2.setTransform(56,211,1,1,0,0,0,9,12);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(21,80,58,154);


(lib.ey_s_btn_back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"over":1,"down":7,"out":14});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(9).call(this.frame_12).wait(5).call(this.frame_17).wait(1));

	// button_l
	this.instance = new lib.Tween11("synched",0);
	this.instance.setTransform(25,24,0.95,0.95);

	this.instance_1 = new lib.Tween12("synched",0);
	this.instance_1.setTransform(25,24);

	this.instance_2 = new lib.Tween13("synched",0);
	this.instance_2.setTransform(25,24);

	this.instance_3 = new lib.Tween14("synched",0);
	this.instance_3.setTransform(25,24,0.94,0.94);

	this.instance_4 = new lib.Tween15("synched",0);
	this.instance_4.setTransform(25,24);

	this.instance_5 = new lib.Tween9("synched",0);
	this.instance_5.setTransform(25,24);

	this.instance_6 = new lib.Tween10("synched",0);
	this.instance_6.setTransform(25,24,0.95,0.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:0.95,scaleY:0.95}}]}).to({state:[{t:this.instance,p:{scaleX:0.964,scaleY:0.964}}]},1).to({state:[{t:this.instance,p:{scaleX:0.986,scaleY:0.986}}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1}}]},4).to({state:[{t:this.instance_2,p:{scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.94,scaleY:0.94}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.957,scaleY:0.957}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.983,scaleY:0.983}}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5,p:{scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_5,p:{scaleX:0.986,scaleY:0.986}}]},1).to({state:[{t:this.instance_5,p:{scaleX:0.964,scaleY:0.964}}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,1.2,47.5,45.6);


(lib.ey_s_board_2 = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.ey_s_board_1();
	this.instance_1.setTransform(118.5,186.5,1,1,0,0,0,118.5,186.5);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,237,373);


(lib.ey_s_progress = function() {
	this.initialize();

	// ey_s_matte
	this.instance = new lib.ey_s_matte_1();
	this.instance.setTransform(180,9,1,1,0,0,0,180,9);

	// ey_s_red_line
	this.instance_1 = new lib.ey_s_red_line_1();
	this.instance_1.setTransform(169,10.5,1,1,0,0,0,166,1.5);

	// ey_s_white_ng
	this.instance_2 = new lib.ey_s_white_ng_1();
	this.instance_2.setTransform(175,10.5,1,1,0,0,0,173,1.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,360,18);


(lib.ey_s_btn_scroll_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44));

	// Layer 1
	this.instance = new lib.button();
	this.instance.setTransform(28.4,21.9,1,1,0,0,0,28.4,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({regX:23,regY:23,x:24.2,y:23},0).wait(1).to({x:26.8},0).wait(1).to({x:29.7},0).wait(1).to({regX:28.4,regY:21.9,x:36.8,y:21.9},0).wait(1).to({regX:23,regY:23,x:30.6,y:23},0).wait(1).to({x:28.7},0).wait(1).to({x:26.4},0).wait(1).to({x:24.2},0).wait(1).to({regX:28.4,regY:21.9,x:28.4,y:21.9},0).wait(1).to({regX:23,regY:23,x:23.8,y:23},0).wait(1).to({x:25.7},0).wait(1).to({x:28},0).wait(1).to({x:30.2},0).wait(1).to({regX:28.4,regY:21.9,x:36.8,y:21.9},0).wait(1).to({regX:23,regY:23,x:30.6,y:23},0).wait(1).to({x:28.7},0).wait(1).to({x:26.4},0).wait(1).to({x:24.2},0).wait(1).to({regX:28.4,regY:21.9,x:28.4,y:21.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.fore_2_2 = function() {
	this.initialize();

	// fore_2
	this.instance_1 = new lib.fore_2_1();
	this.instance_1.setTransform(275,60.5,1,1,0,0,0,273,57.5);

	// fore_2's Drop Shadow
	this.instance_2 = new lib.fore_2sDropShadow_1();
	this.instance_2.setTransform(275.5,60,1,1,0,0,0,275.5,60);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,551,120);


(lib.fore_1_2 = function() {
	this.initialize();

	// fore_1
	this.instance_1 = new lib.fore_1_1();
	this.instance_1.setTransform(228,41,1,1,0,0,0,226,38);

	// fore_1's Drop Shadow
	this.instance_2 = new lib.fore_1sDropShadow_1();
	this.instance_2.setTransform(228,40.5,1,1,0,0,0,228,40.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,456,81);


(lib.stick_01_2 = function() {
	this.initialize();

	// stick_01
	this.instance_1 = new lib.stick_01_1();
	this.instance_1.setTransform(8.5,46.5,1,1,0,0,0,3.5,43.5);

	// stick_01's Drop Shadow
	this.instance_2 = new lib.stick_01sDropShadow_1();
	this.instance_2.setTransform(7.5,47.5,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_2,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15,95);


(lib.cuba_d2 = function() {
	this.initialize();

	// cuba-  donkey2
	this.instance = new lib.cubadonkey2_1();
	this.instance.setTransform(31.5,41,1,1,0,0,0,31.5,41);

	// cuba- doneky2 back legs
	this.instance_1 = new lib.cubadoneky2backlegs_1();
	this.instance_1.setTransform(22.5,65.5,1,1,0,0,0,15.5,19.5);

	// stick_01
	this.instance_2 = new lib.stick_01_2();
	this.instance_2.setTransform(40.5,92.5,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,63,140);


(lib.early_s_lids_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(Math.random()> .99){
		this.play();
		}else{
		this.gotoAndPlay(1);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50));

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(18.3,4.5);
	this.instance._off = true;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(17.3,9.4);

	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(17.3,9.4);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(18.3,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},38).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).to({_off:true,x:17.3,y:9.4},4).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({_off:true,x:18.3,y:4.5},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.early_vest_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.early_vest();

	// early_s_neck
	this.instance_1 = new lib.early_s_neck_1();
	this.instance_1.setTransform(55.5,10,1,1,0,0,0,26.5,17);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7,97,175);


(lib.bucketDark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{show:1,hide:17});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_15 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15).call(this.frame_15).wait(16).call(this.frame_31).wait(1));

	// Layer 1
	this.instance = new lib.dark_b();
	this.instance.setTransform(327.5,321.5,1,1,0,0,0,327.5,321.5);
	this.instance.alpha = 0.789;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(32));

	// Layer 2
	this.instance_1 = new lib.bucketMain();
	this.instance_1.setTransform(327.5,320.5,1,1,0,0,0,311.5,320.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,655,643);


(lib.bg_fliker_white = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.white_bg();
	this.instance.setTransform(285.4,222.5,1,1,0,0,0,285.4,222.5);
	this.instance.alpha = 0.301;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,571,445);


(lib.back_to_hall_area_button = function() {
	this.initialize();

	// Layer 2
	this.hitArea = new lib.doesntmatter();
	this.hitArea.setTransform(700,382.5,1,1,0,0,0,700,382.5);
	this.hitArea.visible = false;

	this.addChild(this.hitArea);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-2.1,1401.4,761.1);


(lib.titles_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8));

	// titles
	this.instance = new lib.ey_s_title_intro();
	this.instance.setTransform(62,238);

	this.instance_1 = new lib.ey_s_title_4_1();
	this.instance_1.setTransform(132,283,1,1,0,0,0,49,27);

	this.instance_2 = new lib.ey_s_title_2_1();
	this.instance_2.setTransform(132.5,283,1,1,0,0,0,46.5,27);

	this.instance_3 = new lib.ey_s_title_5();
	this.instance_3.setTransform(131.5,283,1,1,0,0,0,37.5,27);

	this.instance_4 = new lib.ey_s_title_3();
	this.instance_4.setTransform(132,283,1,1,0,0,0,35,27);

	this.instance_5 = new lib.ey_s_title_1_1();
	this.instance_5.setTransform(133,283,1,1,0,0,0,49,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(Math.random()> .90){
		this.play();
		}else{
		this.gotoAndPlay(1);
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(75));

	// ey_s_button_flickerz
	this.instance = new lib.ey_s_button_flickerz_1();
	this.instance.setTransform(-1,-1.4,1,1,0,0,0,20.5,20.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({scaleX:1.03,scaleY:1.03,x:-1.1,y:-1.5,alpha:1},5).to({scaleX:1,scaleY:1,x:-1,y:-1.4,alpha:0},5).wait(4).to({scaleX:1.01,scaleY:1.01,alpha:0.602},5).to({scaleX:1,scaleY:1,alpha:0},5).wait(1));

	// Layer 2
	this.button_ani = new lib.ey_s_btn_scroll_1();
	this.button_ani.setTransform(0,-0.1,1,1,0,0,0,20.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.button_ani).wait(52).to({scaleX:1.03,scaleY:1.03,x:-0.1},3).to({scaleX:1,scaleY:1,x:0},4).wait(7).to({scaleX:1.01,scaleY:1.01},3).to({scaleX:1,scaleY:1},4).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.9,46.6,47.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"hide":54,"show":2,"over":29,"down":37,"out":45});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_32 = function() {
		this.stop();
	}
	this.frame_38 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.stop();
	}
	this.frame_77 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(21).call(this.frame_21).wait(11).call(this.frame_32).wait(6).call(this.frame_38).wait(10).call(this.frame_48).wait(29).call(this.frame_77).wait(1));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(0,0,0.011,0.011);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(1).to({regX:6.1,regY:1.8,scaleX:0.14,scaleY:0.14,x:0.9,y:0.3},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:2.4,y:0.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:4,y:1.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:5.6,y:1.7},0).wait(1).to({regX:0,regY:0,scaleX:1.1,scaleY:1.1,x:0,y:0},0).wait(1).to({regX:6.1,regY:1.8,scaleX:1.07,scaleY:1.07,x:6.6,y:2},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:6.3,y:1.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:6,y:1.8},0).wait(1).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:0,y:0},0).wait(8).to({regX:6.1,regY:1.8,scaleX:0.96,scaleY:0.96,x:5.9,y:1.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:6.2},0).wait(1).to({regX:0,regY:0,scaleX:1.03,scaleY:1.03,x:0,y:0},0).wait(5).to({scaleX:1.05,scaleY:1.05},0).wait(7).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({regX:6.1,regY:1.8,scaleX:1.02,scaleY:1.02,x:6.2,y:1.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:6.1,y:1.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:5.9},0).wait(1).to({regX:0,regY:0,scaleX:0.95,scaleY:0.95,x:0,y:0},0).wait(7).to({regX:6.1,regY:1.8,scaleX:0.97,scaleY:0.97,x:5.9,y:1.8},0).wait(1).to({scaleX:1,scaleY:1,x:6.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:6.3,y:1.9},0).wait(1).to({regX:0,regY:0,scaleX:1.05,scaleY:1.05,x:0,y:0},0).wait(1).to({regX:6.1,regY:1.8,scaleX:0.87,scaleY:0.87,x:5.3,y:1.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:3.5,y:1.1},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:1.6,y:0.5},0).wait(1).to({regX:0,regY:0,scaleX:0.01,scaleY:0.01,x:0,y:0},0).to({_off:true},1).wait(15));

	// ey_s_sroll_patch
	this.instance_1 = new lib.ey_s_sroll_patch_1();
	this.instance_1.setTransform(170.5,-16.5,1,1,0,0,0,211,49);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},18).wait(40).to({_off:false},0).wait(20));

	// ey_s_sroll_hide
	this.instance_2 = new lib.ey_s_sroll_hide_1();
	this.instance_2.setTransform(169.5,6.5,1,1,0,0,0,210.5,29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({y:6.8},0).wait(1).to({y:7.2},0).wait(1).to({y:7.8},0).wait(1).to({y:8.2},0).wait(1).to({y:8.5},0).wait(1).to({y:6.7},0).wait(1).to({y:2.6},0).wait(1).to({y:-2.7},0).wait(1).to({y:-8.7},0).wait(1).to({y:-15},0).wait(1).to({y:-21.5},0).wait(1).to({y:-27.9},0).wait(1).to({y:-33.9},0).wait(1).to({y:-38.9},0).wait(1).to({y:-41.5},0).to({_off:true},1).wait(40).to({_off:false},0).wait(1).to({y:-38.1},0).wait(1).to({y:-31.6},0).wait(1).to({y:-23.7},0).wait(1).to({y:-15},0).wait(1).to({y:-6},0).wait(1).to({y:2.8},0).wait(1).to({y:9.5},0).wait(1).to({y:9.1},0).wait(1).to({y:8.3},0).wait(1).to({y:7.3},0).wait(1).to({y:6.5},0).wait(1).to({y:6.7},0).wait(1).to({y:7},0).wait(1).to({y:7.3},0).wait(1).to({y:7.5},0).wait(1).to({y:7.4},0).wait(1).to({y:7.1},0).wait(1).to({y:6.8},0).wait(1).to({y:6.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,-65.5,422.5,141.5);


(lib.ey_s_flicker_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"start":0});

	// Layer 1
	this.instance = new lib.flicker_ani();
	this.instance.setTransform(303,227.5,1,1,0,0,0,303,227.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({alpha:0.961},0).wait(3).to({alpha:0.98},0).wait(3).to({alpha:0.941},0).wait(3));

	// Layer 4
	this.instance_1 = new lib.bg_fliker_white();
	this.instance_1.setTransform(304.3,224.5,1,1,0,0,0,285.4,222.5);
	this.instance_1.alpha = 0.039;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({alpha:0},0).wait(3).to({alpha:0.031},0).wait(3).to({alpha:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,606,455);


(lib.slide_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89));

	// garage_fire_1
	this.instance = new lib.garage_fire_1_1();
	this.instance.setTransform(162.1,324.8,1,1,0,0,0,4.5,22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6,regY:15,x:163.5,y:317.7},0).wait(1).to({x:163.3,y:317.6},0).wait(1).to({x:163.1,y:317.5},0).wait(1).to({x:162.9,y:317.4},0).wait(1).to({x:162.7,y:317.2},0).wait(1).to({x:162.4,y:317},0).wait(1).to({regX:4.5,regY:22,x:160.6,y:323.8},0).wait(1).to({regX:6,regY:15,x:162.3,y:317.6},0).wait(1).to({x:162.6,y:318.5},0).wait(1).to({x:162.8,y:319.4},0).wait(1).to({x:163,y:320.3},0).wait(1).to({regX:4.5,regY:22,x:161.8,y:328.3},0).wait(1).to({regX:6,regY:15,x:163.6,y:320.6},0).wait(1).to({x:163.8,y:319.9},0).wait(1).to({x:164.1,y:319.2},0).wait(1).to({x:164.3,y:318.5},0).wait(1).to({regX:4.5,regY:22,x:163.1,y:324.8},0).wait(1).to({regX:6,regY:15,x:164.4,y:318.7},0).wait(1).to({x:164.1,y:319.7},0).wait(1).to({regX:4.5,regY:22,x:162.4,y:327.6},0).wait(1).to({regX:6,regY:15,x:163.6,y:319.9},0).wait(1).to({x:163.4,y:319.3},0).wait(1).to({x:163.1,y:318.6},0).wait(1).to({x:162.9,y:318},0).wait(1).to({regX:4.5,regY:22,x:161.1,y:324.3},0).wait(1).to({regX:6,regY:15,x:162.9,y:316.7},0).wait(1).to({x:163.2,y:316.1},0).wait(1).to({x:163.5,y:315.4},0).wait(1).to({regX:4.5,regY:22,x:162.4,y:321.8},0).wait(1).to({regX:6,regY:15,x:164.2,y:315.7},0).wait(1).to({x:164.5,y:316.5},0).wait(1).to({x:164.8,y:317.4},0).wait(1).to({regX:4.5,regY:22,x:163.6,y:325.3},0).wait(1).to({regX:6,regY:15,x:164.8,y:318.1},0).wait(1).to({x:164.5,y:318},0).wait(1).to({x:164.3,y:317.8},0).wait(1).to({x:164,y:317.6},0).wait(1).to({x:163.7,y:317.5},0).wait(1).to({x:163.4,y:317.3},0).wait(1).to({x:163.2,y:317.1},0).wait(1).to({x:162.9,y:317},0).wait(1).to({regX:4.5,regY:22,x:161.1,y:323.8},0).wait(1).to({regX:6,regY:15,x:163.4,y:317.1},0).wait(1).to({x:164.2,y:317.3},0).wait(1).to({x:165,y:317.6},0).wait(1).to({x:165.8,y:317.8},0).wait(1).to({regX:4.5,regY:22,x:165.1,y:325.1},0).wait(1).to({regX:6,regY:15,x:165.7,y:318.3},0).wait(1).to({x:164.9,y:318.6},0).wait(1).to({regX:4.5,regY:22,x:162.6,y:325.8},0).wait(1).to({regX:6,regY:15,x:164,y:319.2},0).wait(1).to({y:319.7},0).wait(1).to({x:163.9,y:320.1},0).wait(1).to({regX:4.5,regY:22,x:162.4,y:327.5},0).wait(1).to({regX:6,regY:15,x:163.8,y:319.4},0).wait(1).to({x:163.7,y:318.3},0).wait(1).to({y:317.3},0).wait(1).to({regX:4.5,regY:22,x:162.1,y:323.3},0).wait(1).to({regX:6,regY:15,x:163.4,y:316.1},0).wait(1).to({x:163.2,y:315.9},0).wait(1).to({x:163.1,y:315.8},0).wait(1).to({x:162.9,y:315.6},0).wait(1).to({x:162.8,y:315.5},0).wait(1).to({x:162.7,y:315.4},0).wait(1).to({regX:4.5,regY:22,x:161.1,y:322.3},0).to({x:165.1,y:325.1},4).wait(1).to({regX:6,regY:15,x:165.9,y:318.2},0).wait(1).to({x:165.3,y:318.4},0).wait(1).to({x:164.7,y:318.6},0).wait(1).to({regX:4.5,regY:22,x:162.6,y:325.8},0).wait(1).to({regX:6,regY:15,x:164,y:319.2},0).wait(1).to({y:319.7},0).wait(1).to({x:163.9,y:320.1},0).wait(1).to({regX:4.5,regY:22,x:162.4,y:327.5},0).wait(1).to({regX:6,regY:15,x:163.8,y:319.4},0).wait(1).to({x:163.7,y:318.3},0).wait(1).to({y:317.3},0).wait(1).to({regX:4.5,regY:22,x:162.1,y:323.3},0).wait(1).to({regX:6,regY:15,x:163.4,y:316.1},0).wait(1).to({x:163.2,y:315.9},0).wait(1).to({x:163.1,y:315.8},0).wait(1).to({x:162.9,y:315.6},0).wait(1).to({x:162.8,y:315.5},0).wait(1).to({x:162.7,y:315.4},0).wait(1).to({regX:4.5,regY:22,x:161.1,y:322.3},0).wait(1));

	// garage_fire_2
	this.instance_1 = new lib.garage_fire_2_1();
	this.instance_1.setTransform(167.1,310.3,1,1,0,0,0,9.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:310.1},0).wait(1).to({y:309.9},0).wait(1).to({y:309.6},0).wait(1).to({y:309.2},0).wait(1).to({y:308.8},0).wait(1).to({y:308.3},0).wait(1).to({x:167,y:308.4},0).wait(1).to({x:166.8,y:308.5},0).wait(1).to({x:166.6,y:308.6},0).wait(1).to({x:166.5,y:308.7},0).wait(1).to({x:166.3,y:308.8},0).wait(1).to({x:166.1,y:308.9},0).wait(1).to({x:166,y:309.1},0).wait(1).to({x:165.8,y:309.2},0).wait(1).to({x:165.6,y:309.3},0).wait(1).to({x:165.8,y:308.4},0).wait(1).to({x:166,y:307.5},0).wait(1).to({x:166.2,y:306.5},0).wait(1).to({x:166.4,y:305.6},0).wait(1).to({x:166.6,y:304.6},0).wait(1).to({x:166.7,y:306.3},0).wait(1).to({x:166.9,y:308.1},0).wait(1).to({x:167.1,y:309.8},0).wait(1).to({x:167,y:309.6},0).wait(1).to({y:309.4},0).wait(1).to({x:166.9,y:309.2},0).wait(1).to({x:166.8,y:308.9},0).wait(1).to({x:166.7,y:308.7},0).wait(1).to({y:308.5},0).wait(1).to({x:166.6,y:308.3},0).wait(1).to({y:308.5},0).wait(1).to({y:308.8},0).wait(1).to({y:309.1},0).wait(1).to({y:309.3},0).wait(1).to({y:309.6},0).wait(1).to({y:309.8},0).wait(1).to({x:166.2,y:309.5},0).wait(1).to({x:165.8,y:309.3},0).wait(1).to({x:165.5,y:309},0).wait(1).to({x:165.1,y:308.8},0).wait(1).to({y:308.5},0).wait(1).to({y:308.2},0).wait(1).to({y:307.8},0).wait(1).to({y:307.5},0).wait(1).to({y:307.2},0).wait(1).to({y:306.9},0).wait(1).to({y:306.6},0).wait(1).to({y:306.3},0).wait(1).to({y:306.7},0).wait(1).to({y:307},0).wait(1).to({y:307.4},0).wait(1).to({y:307.8},0).wait(1).to({y:308.1},0).wait(1).to({y:308.5},0).wait(1).to({y:308.8},0).wait(1).to({y:309.1},0).wait(1).to({y:309.3},0).wait(1).to({y:309.6},0).wait(1).to({y:309.8},0).wait(1).to({y:310.1},0).wait(1).to({y:310.3},0).wait(1).to({y:310.8},0).wait(1).to({y:311.2},0).wait(1).to({y:311.5},0).wait(1).to({y:311.8},0).to({y:306.3},7).wait(1).to({y:306.7},0).wait(1).to({y:307.2},0).wait(1).to({y:307.6},0).wait(1).to({y:308},0).wait(1).to({y:308.4},0).wait(1).to({y:308.8},0).wait(1).to({y:309.1},0).wait(1).to({y:309.3},0).wait(1).to({y:309.6},0).wait(1).to({y:309.8},0).wait(1).to({y:310.1},0).wait(1).to({y:310.3},0).wait(1).to({y:310.8},0).wait(1).to({y:311.2},0).wait(1).to({y:311.5},0).wait(1).to({y:311.8},0).wait(1));

	// garage_fire_3
	this.instance_2 = new lib.garage_fire_3_1();
	this.instance_2.setTransform(164.1,308.8,1,1,0,0,0,11.5,23.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({y:308.7},0).wait(1).to({y:308.5},0).wait(1).to({y:308.3},0).wait(1).to({y:308.1},0).wait(1).to({y:307.9},0).wait(1).to({y:307.6},0).wait(1).to({y:307.3},0).wait(1).to({x:164.3,y:308.3},0).wait(1).to({x:164.6,y:309.4},0).wait(1).to({x:164.8,y:310.5},0).wait(1).to({x:165.1,y:311.7},0).wait(1).to({x:164.8,y:311},0).wait(1).to({x:164.4,y:310.4},0).wait(1).to({x:164.1,y:309.8},0).wait(1).to({x:164.2,y:309.7},0).wait(1).to({x:164.3,y:309.6},0).wait(1).to({x:164.5,y:309.4},0).wait(1).to({x:164.6,y:309.3},0).wait(1).to({x:164.7,y:308.2},0).wait(1).to({x:164.8,y:307.1},0).wait(1).to({x:165,y:305.9},0).wait(1).to({x:165.1,y:304.8},0).wait(1).to({x:165,y:305.2},0).wait(1).to({y:305.5},0).wait(1).to({x:164.9,y:305.9},0).wait(1).to({x:164.8,y:306.2},0).wait(1).to({x:164.7,y:306.6},0).wait(1).to({y:306.9},0).wait(1).to({x:164.6,y:307.3},0).wait(1).to({x:164.9,y:308.4},0).wait(1).to({x:165.3,y:309.5},0).wait(1).to({x:165.6,y:310.7},0).wait(1).to({x:165.4,y:309.4},0).wait(1).to({x:165.1,y:308.2},0).wait(1).to({x:164.9,y:307},0).wait(1).to({x:164.6,y:305.8},0).wait(1).to({y:306.1},0).wait(1).to({y:306.5},0).wait(1).to({y:306.8},0).wait(1).to({x:163.8,y:306.5},0).wait(1).to({x:163,y:306.1},0).wait(1).to({x:162.2,y:305.8},0).wait(1).to({x:161.4,y:305.5},0).wait(1).to({x:161.9,y:305.1},0).wait(1).to({x:162.5,y:304.8},0).wait(1).to({x:163,y:304.5},0).wait(1).to({x:163.6,y:304.1},0).wait(1).to({x:164.1,y:303.8},0).wait(1).to({x:164.2,y:303.9},0).wait(1).to({y:304},0).wait(1).to({x:164.3,y:304.2},0).wait(1).to({y:304.3},0).wait(1).to({x:164.4,y:304.4},0).wait(1).to({x:164.5,y:304.5},0).wait(1).to({y:304.7},0).wait(1).to({x:164.6,y:304.8},0).wait(1).to({y:306.3},0).wait(1).to({y:307.9},0).wait(4).to({y:308},0).wait(1).to({y:307.1},0).wait(1).to({y:306.3},0).wait(1).to({y:305.8},0).to({x:164.1,y:303.8},6).wait(1).to({x:164.2,y:303.9},0).wait(1).to({y:304},0).wait(1).to({x:164.3,y:304.2},0).wait(1).to({y:304.3},0).wait(1).to({x:164.4,y:304.4},0).wait(1).to({x:164.5,y:304.5},0).wait(1).to({y:304.7},0).wait(1).to({x:164.6,y:304.8},0).wait(1).to({y:306.3},0).wait(1).to({y:307.9},0).wait(4).to({y:308},0).wait(1).to({y:307.1},0).wait(1).to({y:306.3},0).wait(1).to({y:305.8},0).wait(1));

	// garage_spark_1
	this.instance_3 = new lib.garage_spark_1_1();
	this.instance_3.setTransform(163.6,286.3,1,1,0,0,0,7,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:285.6},0).wait(1).to({y:284.4},0).wait(1).to({y:283},0).wait(1).to({y:281.3},0).wait(1).to({x:163.7,y:281.7},0).wait(1).to({x:163.8,y:282},0).wait(1).to({x:164,y:282.5},0).wait(1).to({x:164.1,y:282.9},0).wait(1).to({x:164.3,y:283.3},0).wait(1).to({x:164.4,y:283.8},0).wait(1).to({x:164.6,y:284.3},0).wait(1).to({x:164.7,y:283.8},0).wait(1).to({x:164.8,y:283.4},0).wait(1).to({x:164.9,y:282.9},0).wait(1).to({x:165,y:282.4},0).wait(1).to({x:165.1,y:281.9},0).wait(1).to({x:165.2,y:281.4},0).wait(1).to({x:165.3,y:280.9},0).wait(1).to({x:165.4,y:280.3},0).wait(1).to({x:165.5,y:279.8},0).wait(1).to({x:165.6,y:279.3},0).wait(1).to({y:279.8},0).wait(1).to({x:165.5,y:280.3},0).wait(1).to({y:280.8},0).wait(1).to({x:165.4,y:281.3},0).wait(1).to({y:281.8},0).wait(1).to({x:165.3,y:282.3},0).wait(1).to({y:282.8},0).wait(1).to({x:165.2,y:283.3},0).wait(1).to({y:283.8},0).wait(1).to({x:165.1,y:284.3},0).wait(1).to({x:165,y:283.8},0).wait(1).to({x:164.9,y:283.3},0).wait(1).to({x:164.8,y:282.8},0).wait(1).to({x:164.7,y:282.3},0).wait(1).to({x:164.6,y:281.8},0).wait(1).to({x:164.5,y:281.3},0).wait(1).to({x:164.4,y:280.8},0).wait(1).to({x:164.3,y:280.3},0).wait(1).to({x:164.2,y:279.8},0).wait(1).to({x:164.1,y:279.3},0).wait(1).to({x:164.2,y:278.7},0).wait(1).to({x:164.3,y:278.2},0).wait(1).to({x:164.4,y:277.6},0).wait(1).to({x:164.6,y:277},0).wait(1).to({x:164.7,y:276.5},0).wait(1).to({x:164.8,y:275.9},0).wait(1).to({x:164.9,y:275.4},0).wait(1).to({x:165,y:274.8},0).wait(1).to({x:165.1,y:274.3},0).wait(1).to({y:273.6},0).wait(1).to({y:273},0).wait(1).to({y:272.3},0).wait(1).to({y:271.6},0).wait(1).to({y:271},0).wait(1).to({y:270.4},0).wait(1).to({y:269.8},0).wait(1).to({y:269},0).wait(1).to({y:268.3},0).wait(1).to({y:267.6},0).wait(1).to({y:266.9},0).wait(1).to({y:266.3},0).wait(1).to({y:265.7},0).wait(1).to({y:265.2},0).wait(1).to({y:264.8},0).to({x:164.1,y:279.3},4).wait(1).to({x:164.4,y:278},0).wait(1).to({x:164.6,y:276.8},0).wait(1).to({x:164.9,y:275.5},0).wait(1).to({x:165.1,y:274.3},0).wait(1).to({y:273.6},0).wait(1).to({y:273},0).wait(1).to({y:272.3},0).wait(1).to({y:271.6},0).wait(1).to({y:271},0).wait(1).to({y:270.4},0).wait(1).to({y:269.8},0).wait(1).to({y:269},0).wait(1).to({y:268.3},0).wait(1).to({y:267.6},0).wait(1).to({y:266.9},0).wait(1).to({y:266.3},0).wait(1).to({y:265.7},0).wait(1).to({y:265.2},0).wait(1).to({y:264.8},0).wait(1));

	// garage_spark_2
	this.instance_4 = new lib.garage_spark_2_1();
	this.instance_4.setTransform(161.6,269.8,1,1,0,0,0,11,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({y:269.5},0).wait(1).to({y:269.1},0).wait(1).to({y:268.6},0).wait(1).to({y:268},0).wait(1).to({y:267.3},0).wait(1).to({y:266.6},0).wait(1).to({y:265.8},0).wait(1).to({x:161.5,y:266.6},0).wait(1).to({x:161.4,y:267.4},0).wait(1).to({y:268.2},0).wait(1).to({x:161.3,y:269},0).wait(1).to({x:161.2,y:269.9},0).wait(1).to({x:161.1,y:270.8},0).wait(1).to({x:161.2,y:270.3},0).wait(1).to({x:161.4,y:269.8},0).wait(1).to({x:161.5,y:269.4},0).wait(1).to({x:161.7,y:268.9},0).wait(1).to({x:161.8,y:268.4},0).wait(1).to({x:162,y:267.9},0).wait(1).to({x:162.1,y:267.4},0).wait(1).to({x:162.3,y:266.8},0).wait(1).to({x:162.4,y:266.3},0).wait(1).to({x:162.6,y:265.8},0).wait(1).to({x:162.8,y:266},0).wait(1).to({x:163,y:266.2},0).wait(1).to({x:163.2,y:266.4},0).wait(1).to({x:163.5,y:266.7},0).wait(1).to({x:163.7,y:266.9},0).wait(1).to({x:163.9,y:267.1},0).wait(1).to({x:164.1,y:267.3},0).wait(1).to({x:164,y:267.9},0).wait(1).to({y:268.6},0).wait(1).to({x:163.9,y:269.2},0).wait(1).to({x:163.8,y:269.8},0).wait(1).to({y:270.4},0).wait(1).to({x:163.7,y:271.1},0).wait(1).to({y:271.7},0).wait(1).to({x:163.6,y:272.3},0).wait(1).to({x:163.7,y:271.8},0).wait(1).to({y:271.3},0).wait(1).to({x:163.8,y:270.8},0).wait(1).to({y:270.3},0).wait(1).to({x:163.9,y:269.8},0).wait(1).to({y:269.3},0).wait(1).to({x:164,y:268.8},0).wait(1).to({y:268.3},0).wait(1).to({x:164.1,y:267.8},0).wait(1).to({y:267.3},0).wait(1).to({y:268},0).wait(1).to({y:268.8},0).wait(1).to({y:269.5},0).wait(1).to({y:270.2},0).wait(1).to({y:270.9},0).wait(1).to({y:271.6},0).wait(1).to({y:272.3},0).wait(1).to({y:271.7},0).wait(1).to({y:271},0).wait(1).to({y:270.5},0).wait(1).to({y:269.9},0).wait(1).to({y:269.4},0).wait(1).to({y:268.9},0).wait(1).to({y:268.4},0).wait(1).to({y:268},0).wait(1).to({y:267.6},0).wait(1).to({y:267.3},0).wait(8).to({y:268.2},0).wait(1).to({y:269},0).wait(1).to({y:269.9},0).wait(1).to({y:270.7},0).wait(1).to({y:271.5},0).wait(1).to({y:272.3},0).wait(1).to({y:271.7},0).wait(1).to({y:271},0).wait(1).to({y:270.5},0).wait(1).to({y:269.9},0).wait(1).to({y:269.4},0).wait(1).to({y:268.9},0).wait(1).to({y:268.4},0).wait(1).to({y:268},0).wait(1).to({y:267.6},0).wait(1).to({y:267.3},0).wait(1));

	// garage_spark_3
	this.instance_5 = new lib.garage_spark_3_1();
	this.instance_5.setTransform(164.6,252.8,1,1,0,0,0,11,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({y:252.5},0).wait(1).to({y:251.9},0).wait(1).to({y:251.3},0).wait(1).to({y:250.6},0).wait(1).to({y:249.7},0).wait(1).to({y:248.8},0).wait(1).to({x:164.3,y:249.2},0).wait(1).to({x:164,y:249.7},0).wait(1).to({x:163.7,y:250.2},0).wait(1).to({x:163.4,y:250.7},0).wait(1).to({x:163,y:251.2},0).wait(1).to({x:162.7,y:251.7},0).wait(1).to({x:162.3,y:252.2},0).wait(1).to({x:162,y:252.7},0).wait(1).to({x:161.6,y:253.3},0).wait(1).to({y:253.7},0).wait(1).to({y:254.1},0).wait(1).to({y:254.6},0).wait(1).to({y:255},0).wait(1).to({y:255.4},0).wait(1).to({y:255.9},0).wait(1).to({y:256.3},0).wait(1).to({x:162,y:255.5},0).wait(1).to({x:162.3,y:254.7},0).wait(1).to({x:162.7,y:254},0).wait(1).to({x:163,y:253.2},0).wait(1).to({x:163.4,y:252.4},0).wait(1).to({x:163.7,y:251.6},0).wait(1).to({x:164.1,y:250.8},0).wait(1).to({x:164,y:251.5},0).wait(1).to({x:163.8,y:252.2},0).wait(1).to({x:163.7,y:252.9},0).wait(1).to({x:163.5,y:253.7},0).wait(1).to({x:163.4,y:254.4},0).wait(1).to({x:163.2,y:255.1},0).wait(1).to({x:163.1,y:255.8},0).wait(1).to({y:255.1},0).wait(1).to({y:254.4},0).wait(1).to({y:253.6},0).wait(1).to({y:252.9},0).wait(1).to({y:252.2},0).wait(1).to({y:251.5},0).wait(1).to({y:250.8},0).wait(1).to({y:250.1},0).wait(1).to({y:249.3},0).wait(1).to({y:248.6},0).wait(1).to({y:247.9},0).wait(1).to({y:247.2},0).wait(1).to({y:246.5},0).wait(1).to({y:245.8},0).wait(1).to({y:246.5},0).wait(1).to({y:247.1},0).wait(1).to({y:247.8},0).wait(1).to({y:248.4},0).wait(1).to({y:249},0).wait(1).to({y:249.6},0).wait(1).to({y:250.2},0).wait(1).to({y:250.8},0).wait(1).to({y:249.9},0).wait(1).to({y:249},0).wait(1).to({y:248.3},0).wait(1).to({y:247.5},0).wait(1).to({y:246.9},0).wait(1).to({y:246.3},0).wait(1).to({y:245.8},0).to({y:250.8},5).wait(1).to({y:249.1},0).wait(1).to({y:247.4},0).wait(1).to({y:245.8},0).wait(1).to({y:246.5},0).wait(1).to({y:247.1},0).wait(1).to({y:247.8},0).wait(1).to({y:248.4},0).wait(1).to({y:249},0).wait(1).to({y:249.6},0).wait(1).to({y:250.2},0).wait(1).to({y:250.8},0).wait(1).to({y:249.9},0).wait(1).to({y:249},0).wait(1).to({y:248.3},0).wait(1).to({y:247.5},0).wait(1).to({y:246.9},0).wait(1).to({y:246.3},0).wait(1).to({y:245.8},0).wait(1));

	// garage_spark_4
	this.instance_6 = new lib.garage_spark_4_1();
	this.instance_6.setTransform(167.1,243.3,1,1,0,0,0,13.5,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:167.4,y:243},0).wait(1).to({x:167.8,y:242.6},0).wait(1).to({x:168.3,y:242.1},0).wait(1).to({x:168.9,y:241.5},0).wait(1).to({x:169.6,y:240.8},0).wait(1).to({y:242.6},0).wait(1).to({y:244.6},0).wait(1).to({y:246.7},0).wait(1).to({y:248.9},0).wait(1).to({y:251.1},0).wait(1).to({y:253.4},0).wait(1).to({y:255.8},0).wait(1).to({x:169.4,y:255.2},0).wait(1).to({x:169.1,y:254.5},0).wait(1).to({x:168.9,y:253.8},0).wait(1).to({x:168.6,y:253.2},0).wait(1).to({x:168.4,y:252.5},0).wait(1).to({x:168.1,y:251.8},0).wait(1).to({x:168.2,y:252.4},0).wait(1).to({x:168.4,y:252.9},0).wait(1).to({x:168.5,y:253.5},0).wait(1).to({x:168.7,y:254.1},0).wait(1).to({x:168.8,y:254.6},0).wait(1).to({x:169,y:255.2},0).wait(1).to({x:169.1,y:255.8},0).wait(1).to({x:168.8,y:255.3},0).wait(1).to({x:168.5,y:254.8},0).wait(1).to({x:168.2,y:254.3},0).wait(1).to({x:167.9,y:253.8},0).wait(1).to({x:167.6,y:253.3},0).wait(1).to({x:167.9,y:253.9},0).wait(1).to({x:168.1,y:254.6},0).wait(1).to({x:168.4,y:255.2},0).wait(1).to({x:168.6,y:255.8},0).wait(1).to({x:168.9,y:256.4},0).wait(1).to({x:169.1,y:257.1},0).wait(1).to({x:169.4,y:257.7},0).wait(1).to({x:169.6,y:258.3},0).wait(1).to({x:169.3,y:258.9},0).wait(1).to({x:169.1,y:259.5},0).wait(1).to({x:168.8,y:260.1},0).wait(1).to({x:168.6,y:260.6},0).wait(1).to({x:168.3,y:261.2},0).wait(1).to({x:168.1,y:261.8},0).wait(1).to({y:260.7},0).wait(1).to({y:259.6},0).wait(1).to({y:258.5},0).wait(1).to({y:257.4},0).wait(1).to({y:256.3},0).wait(1).to({y:257.3},0).wait(1).to({y:258.2},0).wait(1).to({y:259.2},0).wait(1).to({y:260.1},0).wait(1).to({y:261},0).wait(1).to({y:261.9},0).wait(1).to({y:262.8},0).wait(9).to({y:256.3},7).wait(1).to({y:257.3},0).wait(1).to({y:258.2},0).wait(1).to({y:259.2},0).wait(1).to({y:260.1},0).wait(1).to({y:261},0).wait(1).to({y:261.9},0).wait(1).to({y:262.8},0).wait(10));

	// garage_fore_1
	this.instance_7 = new lib.garage_fore_1_2();
	this.instance_7.setTransform(285.6,357.3,1,1,0,0,0,265,87.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89));

	// garage_cat
	this.instance_8 = new lib.garage_cat_1();
	this.instance_8.setTransform(42.6,334.8,1,1,0,0,0,10,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:51.4,x:42.8,y:341.4},0).wait(1).to({x:42.9,y:341.5},0).wait(1).to({x:43.1,y:341.7},0).wait(1).to({x:43.3,y:341.9},0).wait(1).to({x:43.6,y:342.2},0).wait(1).to({x:43.8,y:342.4},0).wait(1).to({x:44.1,y:342.7},0).wait(1).to({x:44.3,y:342.9},0).wait(1).to({regY:45,x:44.6,y:336.8},0).wait(1).to({regY:51.4,x:44.3,y:342.9},0).wait(1).to({x:44.1,y:342.7},0).wait(1).to({x:43.8,y:342.4},0).wait(1).to({x:43.5,y:342.1},0).wait(1).to({x:43.2,y:341.8},0).wait(1).to({x:42.9,y:341.5},0).wait(1).to({regY:45,x:42.6,y:334.8},0).wait(1).to({regY:51.4,x:43,y:341.1},0).wait(1).to({x:43.6,y:341},0).wait(1).to({x:44.1,y:340.9},0).wait(1).to({x:44.7,y:340.8},0).wait(1).to({x:45.4,y:340.6},0).wait(1).to({x:46.1,y:340.5},0).wait(1).to({x:46.8,y:340.3},0).wait(1).to({x:47.6,y:340.2},0).wait(1).to({x:48.4,y:340},0).wait(1).to({x:49.3,y:339.8},0).wait(1).to({x:50.2,y:339.7},0).wait(1).to({x:51.1,y:339.5},0).wait(1).to({x:52.1,y:339.3},0).wait(1).to({x:53.1,y:339.1},0).wait(1).to({x:54.1,y:338.9},0).wait(1).to({regY:45,x:55.2,y:332.3},0).wait(1).to({regY:51.4,x:56.1,y:338.7},0).wait(1).to({x:57},0).wait(1).to({x:58,y:338.8},0).wait(1).to({x:58.9},0).wait(1).to({x:59.8},0).wait(1).to({x:60.8,y:338.9},0).wait(1).to({x:61.7},0).wait(1).to({x:62.7,y:339},0).wait(1).to({x:63.6},0).wait(1).to({x:64.6},0).wait(1).to({x:65.6,y:339.1},0).wait(1).to({x:66.6},0).wait(1).to({x:67.5,y:339.2},0).wait(1).to({x:68.5},0).wait(1).to({regY:45,x:69.5,y:332.9},0).wait(1).to({regY:51.4,x:70.4,y:339},0).wait(1).to({x:71.3,y:338.8},0).wait(1).to({x:72.2,y:338.6},0).wait(1).to({x:73.1,y:338.3},0).wait(1).to({x:74.1,y:338.1},0).wait(1).to({x:75,y:337.9},0).wait(1).to({x:75.9,y:337.6},0).wait(1).to({x:76.8,y:337.4},0).wait(1).to({x:77.8,y:337.1},0).wait(1).to({x:78.7,y:336.9},0).wait(1).to({x:79.7,y:336.7},0).wait(1).to({x:80.6,y:336.4},0).wait(1).to({x:81.5,y:336.2},0).wait(1).to({x:82.5,y:336},0).wait(1).to({x:83.4,y:335.7},0).wait(1).to({x:84.4,y:335.5},0).wait(1).to({x:85.3,y:335.2},0).wait(1).to({x:86.3,y:335},0).wait(1).to({x:87.2,y:334.7},0).wait(1).to({regY:45,x:88.2,y:328.1},0).wait(1).to({regY:51.4,x:88.8,y:334.4},0).wait(1).to({x:89.4,y:334.3},0).wait(1).to({x:90},0).wait(1).to({x:90.6,y:334.2},0).wait(1).to({x:91.2,y:334.1},0).wait(1).to({x:91.8,y:334},0).wait(1).to({x:92.4,y:333.9},0).wait(1).to({x:93},0).wait(1).to({x:93.6,y:333.8},0).wait(1).to({x:94.2,y:333.7},0).wait(1).to({x:94.8,y:333.6},0).wait(1).to({regY:45,x:95.4,y:327.2},0).wait(1).to({regY:51.4,x:95.5,y:333.3},0).wait(1).to({x:95.7,y:333},0).wait(1).to({x:95.8,y:332.7},0).wait(1).to({x:96,y:332.4},0).wait(1).to({x:96.1,y:332.1},0).wait(1).to({x:96.3,y:331.8},0).wait(1).to({x:96.4,y:331.6},0).wait(1).to({x:96.6,y:331.3},0).wait(1).to({regY:45,x:96.7,y:324.6},0).wait(1));

	// garage_man_2
	this.instance_9 = new lib.garage_man_2_2();
	this.instance_9.setTransform(391.1,300.5,0.662,0.662,0,0,0,39,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:76,x:391.5,y:319.2},0).wait(1).to({x:391.9,y:319},0).wait(1).to({x:392.4,y:318.8},0).wait(1).to({x:392.9,y:318.6},0).wait(1).to({x:393.4,y:318.4},0).wait(1).to({x:394,y:318.2},0).wait(1).to({regY:47.5,x:394.6,y:299},0).wait(1).to({regY:76,x:394.8,y:318.2},0).wait(1).to({x:395,y:318.6},0).wait(1).to({x:395.2,y:319},0).wait(1).to({x:395.4,y:319.4},0).wait(1).to({x:395.6,y:319.8},0).wait(1).to({x:395.8,y:320.2},0).wait(1).to({x:396,y:320.6},0).wait(1).to({regY:47.5,x:396.3,y:302.2},0).wait(1).to({regY:76,x:396.7,y:320.6},0).wait(1).to({x:397.2,y:320.1},0).wait(1).to({x:397.7,y:319.6},0).wait(1).to({x:398.1,y:319.2},0).wait(1).to({x:398.6,y:318.7},0).wait(1).to({x:399.1,y:318.2},0).wait(1).to({x:399.6,y:317.7},0).wait(1).to({x:400.1,y:317.2},0).wait(1).to({x:400.6,y:316.7},0).wait(1).to({x:401.1,y:316.2},0).wait(1).to({regY:47.5,x:401.7,y:296.8},0).wait(1).to({regY:76,x:401,y:316.1},0).wait(1).to({x:400.3,y:316.6},0).wait(1).to({x:399.6,y:317},0).wait(1).to({x:398.9,y:317.5},0).wait(1).to({x:398.2,y:318},0).wait(1).to({x:397.5,y:318.4},0).wait(1).to({x:396.8,y:318.9},0).wait(1).to({regY:47.5,x:396.1,y:300.5},0).wait(1).to({regY:76,scaleX:0.66,scaleY:0.66,rotation:0.2,x:396.2,y:319.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:0.3,x:396.3,y:318.9},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:0.5,x:396.5,y:318.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:0.7,x:396.7,y:318.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:1,x:396.8,y:317.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:1.2,x:397,y:317.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:1.5,x:397.1,y:317.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:1.8,x:397.4,y:316.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:2.1,x:397.5,y:316.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:2.4,x:397.8,y:315.9},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:2.7,x:398,y:315.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:3,x:398.2,y:314.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:3.4,x:398.4,y:314.4},0).wait(1).to({regX:39.1,regY:47.5,scaleX:0.72,scaleY:0.72,rotation:3.7,x:400,y:293.3},0).wait(1).to({regX:39,regY:76,scaleX:0.73,scaleY:0.73,rotation:3,x:399.3,y:315},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:2.3,x:400,y:316.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:1.5,x:400.6,y:317.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:0.8,x:401.4,y:318.4},0).wait(1).to({regY:47.5,scaleX:0.75,scaleY:0.75,rotation:0,x:402.2,y:298.2},0).wait(1).to({regY:76,scaleX:0.75,scaleY:0.75,x:403.6,y:320.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:405,y:321.1},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:406.5,y:321.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:408,y:322.6},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:409.4,y:323.4},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:410.9,y:324.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:412.4,y:324.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:413.9,y:325.8},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:415.3,y:326.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:416.8,y:327.3},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:418.3,y:328.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:419.8,y:328.9},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:421.3,y:329.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:422.7,y:330.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:424.2,y:331.3},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:425.7,y:332},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:427.1,y:332.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:428.6,y:333.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:430,y:334.4},0).wait(1).to({regY:47.5,scaleX:0.87,scaleY:0.87,x:431.5,y:310.4},0).wait(1).to({regY:76,scaleX:0.87,scaleY:0.87,rotation:0.4,x:432.4,y:336.5},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:0.9,x:433.2,y:337.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:1.3,x:434.2,y:339.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:1.7,x:435,y:340.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:2.2,x:435.8,y:341.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:2.6,x:436.7,y:342.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:3,x:437.5,y:344.2},0).wait(1).to({regY:47.5,scaleX:0.9,scaleY:0.9,rotation:3.4,x:440,y:319.7},0).wait(1).to({regY:76,scaleX:0.91,scaleY:0.91,rotation:2.9,x:439.5,y:346.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:2.4,x:440.5,y:346.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:2,x:441.7,y:347.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:1.5,x:442.7,y:348.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:1,x:443.7,y:349.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:0.5,x:444.8,y:349.8},0).wait(1).to({regY:47.4,scaleX:0.92,scaleY:0.92,rotation:0,x:445.9,y:324.2},0).wait(1));

	// garage_fore_2
	this.instance_10 = new lib.garage_fore_2_2();
	this.instance_10.setTransform(409.6,367.3,1,1,0,0,0,162,77.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89));

	// garage_man_2_1
	this.instance_11 = new lib.garage_man_2_1_1();
	this.instance_11.setTransform(249.2,283.6,1,1,3.7,0,0,13.1,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:13.5,regY:57.4,x:250.2,y:285.3},0).wait(1).to({x:251,y:285.5},0).wait(1).to({x:252.1,y:285.9},0).wait(1).to({x:253.2,y:286.3},0).wait(1).to({x:254.5,y:286.7},0).wait(1).to({x:255.9,y:287.1},0).wait(1).to({x:257.4,y:287.6},0).wait(1).to({x:259,y:288.1},0).wait(1).to({x:260.6,y:288.7},0).wait(1).to({x:262.3,y:289.2},0).wait(1).to({x:264.1,y:289.8},0).wait(1).to({x:265.9,y:290.4},0).wait(1).to({x:267.8,y:291},0).wait(1).to({x:269.7,y:291.6},0).wait(1).to({regX:13,regY:56,x:271.3,y:290.9},0).wait(1).to({regX:13.5,regY:57.4,x:273.4,y:293.4},0).wait(1).to({x:275.1,y:294.5},0).wait(1).to({regX:13,regY:56.1,x:276.4,y:294.2},0).wait(1).to({regX:13.5,regY:57.4,x:278.2,y:294.7},0).wait(1).to({x:279.5,y:293.8},0).wait(1).to({x:280.9,y:292.9},0).wait(1).to({regX:13,regY:56.1,x:281.9,y:290.7},0).wait(1).to({regX:13.5,regY:57.4,x:284.7,y:292.5},0).wait(1).to({x:287,y:293},0).wait(1).to({x:289.4,y:293.5},0).wait(1).to({x:291.8,y:294},0).wait(1).to({x:294.2,y:294.5},0).wait(1).to({x:296.7,y:294.9},0).wait(1).to({x:299.1,y:295.4},0).wait(1).to({x:301.5,y:295.9},0).wait(1).to({x:303.9,y:296.4},0).wait(1).to({x:306.4,y:296.9},0).wait(1).to({x:308.8,y:297.4},0).wait(1).to({x:311.2,y:297.9},0).wait(1).to({x:313.7,y:298.4},0).wait(1).to({x:316.1,y:298.9},0).wait(1).to({x:318.5,y:299.4},0).wait(1).to({x:320.9,y:299.9},0).wait(1).to({x:323.4,y:300.4},0).wait(1).to({x:325.8,y:300.9},0).wait(1).to({x:328.2,y:301.4},0).wait(1).to({regX:13,regY:56,x:330.1,y:300.6},0).wait(1).to({regX:13.5,regY:57.4,x:332.9,y:302.1},0).wait(1).to({x:335.3},0).wait(1).to({x:337.7,y:302.2},0).wait(1).to({x:340,y:302.3},0).wait(1).to({x:342.4},0).wait(1).to({x:344.7,y:302.4},0).wait(1).to({x:347,y:302.5},0).wait(1).to({x:349.3},0).wait(1).to({x:351.5,y:302.6},0).wait(1).to({x:353.7,y:302.7},0).wait(1).to({x:355.9},0).wait(1).to({regX:13,regY:56,x:357.6,y:301.4},0).wait(1).to({regX:13.5,regY:57.4,x:358.3,y:302.6},0).wait(1).to({x:358.6,y:302.5},0).wait(1).to({x:358.8,y:302.3},0).wait(1).to({x:359.1,y:302.2},0).wait(1).to({x:359.4,y:302},0).wait(1).to({regX:13,regY:56,x:359.2,y:300.5},0).wait(1).to({regX:13.5,regY:57.4,x:359.4,y:302},0).wait(1).to({x:359.2,y:302.1},0).wait(1).to({x:359.1,y:302.2},0).wait(1).to({x:358.9,y:302.3},0).wait(1).to({x:358.7,y:302.4},0).wait(1).to({x:358.6,y:302.5},0).wait(1).to({x:358.4,y:302.6},0).wait(1).to({x:358.2,y:302.7},0).wait(1).to({regX:13,regY:56,x:357.6,y:301.4},0).wait(1).to({regX:13.5,regY:57.4,y:302.8},0).wait(1).to({x:357.2,y:302.7},0).wait(1).to({x:356.7},0).wait(1).to({x:356.3},0).wait(1).to({x:355.9},0).wait(1).to({x:355.4,y:302.6},0).wait(1).to({x:355},0).wait(1).to({x:354.6},0).wait(1).to({x:354.1},0).wait(1).to({x:353.7,y:302.5},0).wait(1).to({x:353.3},0).wait(1).to({x:352.8},0).wait(1).to({regX:13,regY:56,x:352,y:301},0).wait(1).to({regX:13.5,regY:57.4,x:351.9,y:302.3},0).wait(1).to({x:351.5,y:302.1},0).wait(1).to({x:351,y:302},0).wait(1).to({x:350.5,y:301.9},0).wait(1).to({x:350,y:301.8},0).wait(1).to({regX:13,regY:55.9,x:349.1,y:300.2},0).wait(1));

	// garage_man_tyre
	this.instance_12 = new lib.garage_man_tyre_1();
	this.instance_12.setTransform(269.6,294.4,1,1,3.7,0,0,11.1,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:10.5,regY:53.5,x:269.4,y:304.1},0).wait(1).to({rotation:3.8,x:270.9,y:304.4},0).wait(1).to({x:272.6,y:304.8},0).wait(1).to({x:274.6,y:305.2},0).wait(1).to({rotation:3.9,x:276.8,y:305.6},0).wait(1).to({x:279.1,y:306.1},0).wait(1).to({rotation:4,x:281.7,y:306.7},0).wait(1).to({x:284.3,y:307.3},0).wait(1).to({rotation:4.1,x:287.1,y:307.9},0).wait(1).to({rotation:4.2,x:290,y:308.5},0).wait(1).to({x:292.9,y:309.1},0).wait(1).to({regX:11,regY:44,rotation:4.3,x:297.3,y:300.3},0).wait(1).to({regX:10.5,regY:53.5,rotation:4.4,x:298.6,y:310.4},0).wait(1).to({rotation:4.5,x:301.1,y:311.1},0).wait(1).to({rotation:4.6,x:303.7,y:311.8},0).wait(1).to({rotation:4.7,x:306.3,y:312.4},0).wait(1).to({rotation:4.8,x:309,y:313.1},0).wait(1).to({rotation:4.9,x:311.6,y:313.9},0).wait(1).to({rotation:5,x:314.4,y:314.6},0).wait(1).to({rotation:5.1,x:317.1,y:315.3},0).wait(1).to({rotation:5.2,x:319.8,y:316},0).wait(1).to({rotation:5.3,x:322.6,y:316.7},0).wait(1).to({rotation:5.4,x:325.4,y:317.5},0).wait(1).to({rotation:5.5,x:328.2,y:318.2},0).wait(1).to({rotation:5.6,x:331.1,y:319},0).wait(1).to({regX:11,regY:44.1,rotation:5.7,x:335.4,y:310.4},0).wait(1).to({regX:10.5,regY:53.5,rotation:5.8,x:337.3,y:317.1},0).wait(1).to({rotation:5.9,x:340.6,y:314.5},0).wait(1).to({regX:11,regY:44,rotation:6,x:345.5,y:302.6},0).wait(1).to({regX:10.5,regY:53.5,rotation:6.1,x:346.7,y:312.7},0).wait(1).to({rotation:6.2,x:349.4,y:313.5},0).wait(1).to({rotation:6.3,x:352.1,y:314.2},0).wait(1).to({rotation:6.4,x:354.8,y:315},0).wait(1).to({rotation:6.5,x:357.5,y:315.8},0).wait(1).to({rotation:6.6,x:360.2,y:316.5},0).wait(1).to({rotation:6.7,x:362.8,y:317.3},0).wait(1).to({rotation:6.8,x:365.5,y:318.1},0).wait(1).to({rotation:6.9,x:368.2,y:318.9},0).wait(1).to({regX:11,regY:44,rotation:7,x:372.5,y:310.4},0).wait(1).to({regX:10.5,regY:53.5,rotation:7.1,x:371.2,y:319.7},0).wait(1).to({rotation:7.2,x:371.5,y:319.6},0).wait(1).to({rotation:7.3,x:371.8},0).wait(1).to({rotation:7.4,x:372.1},0).wait(1).to({rotation:7.5,x:372.4,y:319.5},0).wait(1).to({rotation:7.6,x:372.7},0).wait(1).to({rotation:7.7,x:373},0).wait(1).to({rotation:7.8,x:373.3},0).wait(1).to({rotation:7.9,x:373.6,y:319.4},0).wait(1).to({rotation:8,x:373.9,y:319.3},0).wait(1).to({rotation:8.1,x:374.2},0).wait(1).to({rotation:8.2,x:374.5},0).wait(1).to({rotation:8.3,x:374.8},0).wait(1).to({rotation:8.4,x:375,y:319.2},0).wait(1).to({regX:11,regY:44,rotation:8.5,x:377.2,y:309.8},0).wait(1).to({regX:10.5,regY:53.5,x:375.6,y:319},0).wait(1).to({x:375.9,y:318.8},0).wait(1).to({x:376.2,y:318.6},0).wait(1).to({x:376.4,y:318.5},0).wait(1).to({x:376.7,y:318.4},0).wait(1).to({regX:11,regY:44,x:378.8,y:308.9},0).wait(1).to({regX:10.5,regY:53.5,x:376.6,y:318.4},0).wait(1).to({x:376.4,y:318.5},0).wait(1).to({x:376.2,y:318.6},0).wait(1).to({x:376,y:318.7},0).wait(1).to({x:375.9,y:318.8},0).wait(1).to({x:375.7,y:318.9},0).wait(1).to({x:375.6,y:319},0).wait(1).to({x:375.4,y:319.1},0).wait(1).to({regX:11,regY:44,x:377.2,y:309.8},0).wait(1).to({regX:10.5,regY:53.5,x:374.2,y:319},0).wait(1).to({x:373.2,y:318.9},0).wait(1).to({x:372.2,y:318.8},0).wait(1).to({x:371.2,y:318.7},0).wait(1).to({x:370.2,y:318.5},0).wait(1).to({x:369.2,y:318.4},0).wait(1).to({x:368.2,y:318.3},0).wait(1).to({x:367.3,y:318.2},0).wait(1).to({x:366.4,y:318.1},0).wait(1).to({x:365.4,y:318},0).wait(1).to({x:364.5,y:317.9},0).wait(1).to({x:363.6,y:317.8},0).wait(1).to({regX:11,regY:44,scaleX:1,scaleY:1,x:364.6,y:308.4},0).wait(1).to({regX:10.5,regY:53.5,x:362.2,y:317.6},0).wait(1).to({x:361.6,y:317.4},0).wait(1).to({x:361.1,y:317.3},0).wait(1).to({x:360.6,y:317.2},0).wait(1).to({x:360.2,y:317.1},0).wait(1).to({regX:11,regY:44,x:361.7,y:307.7},0).wait(1));

	// garage_truck
	this.instance_13 = new lib.garage_truck_1();
	this.instance_13.setTransform(265.6,249.3,1,1,0,0,0,45,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({y:249.2},0).wait(2).to({y:249.1},0).wait(1).to({y:248.9},0).wait(1).to({y:248.8},0).to({y:249.8},6).to({y:248.8},4).to({y:248.3},6).to({y:248.8},5).to({y:247.8},5).to({y:248.3},4).to({y:248.8},6).to({y:248.3},4).to({y:248.8},7).wait(10).to({y:249},0).wait(1).to({y:249.1},0).wait(1).to({y:249.2},0).wait(1).to({y:249.3},0).to({y:248.3},6).to({y:248.8},4).wait(10).to({y:249},0).wait(1).to({y:249.1},0).wait(1).to({y:249.2},0).wait(1).to({y:249.3},0).wait(1));

	// garage_truckman
	this.instance_14 = new lib.garage_truckman_1();
	this.instance_14.setTransform(249.7,232.8,1,1,0,0,0,10.1,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:11.5,regY:12.5,x:250.9,y:228.3},0).wait(1).to({x:250.6},0).wait(1).to({x:250.3},0).wait(1).to({x:249.9},0).wait(1).to({x:249.5},0).wait(1).to({x:249},0).wait(1).to({x:248.5},0).wait(1).to({x:248},0).wait(1).to({x:247.4},0).wait(1).to({x:246.9},0).wait(1).to({x:246.3},0).wait(1).to({regX:10.1,regY:17,x:244.3,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:245.8,y:228.3},0).wait(1).to({x:245.9},0).wait(1).to({x:246},0).wait(1).to({x:246.2},0).wait(1).to({x:246.5},0).wait(1).to({regX:10.1,regY:17,x:245.3,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:247,y:228.3},0).wait(1).to({x:247.2},0).wait(1).to({x:247.5},0).wait(1).to({x:247.8},0).wait(1).to({x:248.1},0).wait(1).to({x:248.4},0).wait(1).to({x:248.7},0).wait(1).to({x:249},0).wait(1).to({x:249.3},0).wait(1).to({x:249.6},0).wait(1).to({x:250},0).wait(1).to({x:250.3},0).wait(1).to({x:250.6},0).wait(1).to({x:250.9},0).wait(1).to({x:251.3},0).wait(1).to({regX:10.1,regY:17,x:250.2,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:251.3,y:228.3},0).wait(1).to({x:250.9},0).wait(1).to({x:250.6},0).wait(1).to({x:250.3},0).wait(1).to({x:249.9},0).wait(1).to({regX:10.1,regY:17,x:248.2,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:249.6,y:228.3},0).wait(7).to({regX:10.1,regY:17,x:248.2,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:249.1,y:228.3},0).wait(1).to({x:248.6},0).wait(1).to({x:248.2},0).wait(1).to({x:247.7},0).wait(1).to({x:247.3},0).wait(1).to({x:246.8},0).wait(1).to({x:246.4},0).wait(1).to({x:245.9},0).wait(1).to({x:245.5},0).wait(1).to({x:245.1},0).wait(1).to({regX:10.1,regY:17,x:243.3,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:245,y:228.3},0).wait(1).to({x:245.3},0).wait(1).to({x:245.6},0).wait(1).to({x:245.8},0).wait(1).to({x:246},0).wait(1).to({regX:10.1,regY:17,x:244.8,y:232.8},0).to({x:248.2},7).wait(1).to({regX:11.5,regY:12.5,x:249.1,y:228.3},0).wait(1).to({x:248.6},0).wait(1).to({x:248},0).wait(1).to({x:247.5},0).wait(1).to({x:247},0).wait(1).to({x:246.5},0).wait(1).to({x:246.1},0).wait(1).to({x:245.6},0).wait(1).to({x:245.1},0).wait(1).to({regX:10.1,regY:17,x:243.3,y:232.8},0).wait(1).to({regX:11.5,regY:12.5,x:245,y:228.3},0).wait(1).to({x:245.3},0).wait(1).to({x:245.6},0).wait(1).to({x:245.8},0).wait(1).to({x:246},0).wait(1).to({regX:10.1,regY:17,x:244.8,y:232.8},0).wait(1));

	// garage_bg
	this.instance_15 = new lib.garage_bg_1();
	this.instance_15.setTransform(296.1,223.8,1,1,0,0,0,273.5,221);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.6,2.8,551,442);


(lib.MOUTHhOLDER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slide-1":1,"slide-2":12,"slide-3":22,"slide-4":34,"slide-5":48,"slide-6":60});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		
	}
	this.frame_21 = function() {
		this.stop();
	}
	this.frame_22 = function() {
		this.mc_mouth.initted=false;
	}
	this.frame_33 = function() {
		this.stop();
	}
	this.frame_34 = function() {
		this.mc_mouth.initted=false;
	}
	this.frame_47 = function() {
		this.stop();
	}
	this.frame_48 = function() {
		this.mc_mouth.initted=false;
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_60 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(2).call(this.frame_12).wait(9).call(this.frame_21).wait(1).call(this.frame_22).wait(11).call(this.frame_33).wait(1).call(this.frame_34).wait(13).call(this.frame_47).wait(1).call(this.frame_48).wait(11).call(this.frame_59).wait(1).call(this.frame_60).wait(9).call(this.frame_69).wait(1));

	// early_s_browl
	this.instance = new lib.early_s_browl_1();
	this.instance.setTransform(13.5,-19.5,1,1,0,0,0,9.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

	// early_s_browr
	this.instance_1 = new lib.early_s_browr_1();
	this.instance_1.setTransform(32,-18.5,1,1,0,0,0,7,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

	// lipsync
	this.mc_mouth = new lib.Symbol10copy10();
	this.mc_mouth.setTransform(18,1,1,1,0,0,0,26,1);

	this.mc_mouth_1 = new lib.lipsync_intro();
	this.mc_mouth_1.setTransform(18,1,1,1,0,0,0,26,1);

	this.mc_mouth_2 = new lib.Symbol10();
	this.mc_mouth_2.setTransform(18,1,1,1,0,0,0,26,1);

	this.mc_mouth_3 = new lib.Symbol10copy();
	this.mc_mouth_3.setTransform(18,1,1,1,0,0,0,26,1);

	this.mc_mouth_4 = new lib.Symbol10copy2();
	this.mc_mouth_4.setTransform(18,1,1,1,0,0,0,26,1);

	this.mc_mouth_5 = new lib.Symbol10copy3();
	this.mc_mouth_5.setTransform(-8,0);

	this.mc_mouth_6 = new lib.Symbol10copy4();
	this.mc_mouth_6.setTransform(18,1,1,1,0,0,0,26,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_mouth}]}).to({state:[{t:this.mc_mouth_1}]},1).to({state:[{t:this.mc_mouth_2}]},11).to({state:[{t:this.mc_mouth_3}]},11).to({state:[{t:this.mc_mouth_4}]},10).to({state:[{t:this.mc_mouth_5}]},12).to({state:[{t:this.mc_mouth_6}]},14).wait(11));

	// early_s_lids
	this.instance_2 = new lib.early_s_lids_1();
	this.instance_2.setTransform(21,-19.5,1,1,0,0,0,16,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70));

	// early_s_eyel
	this.instance_3 = new lib.early_s_eyel_1();
	this.instance_3.setTransform(15.5,-14,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70));

	// early_s_eyer
	this.instance_4 = new lib.early_s_eyer_1();
	this.instance_4.setTransform(30.5,-13,1,1,0,0,0,5.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9,-51,52,67);


(lib.home_woman_2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_woman_2();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(13.6,80.6,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,128.1);


(lib.home_woman_1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.home_woman_1();

	// Layer 2
	this.instance_1 = new lib.home_stick_01_2();
	this.instance_1.setTransform(24.8,64.8,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,112.3);


(lib.ey_s_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{label_show:0});

	// timeline functions:
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(1));

	// titles
	this.titles = new lib.titles_all();
	this.titles.setTransform(17,33.9,1,1,0,0,0,17,33.9);
	this.titles.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.titles).to({alpha:1},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ey_s_face = function() {
	this.initialize();

	// mc_mouth_holder
	this.mc_mouth_holder = new lib.MOUTHhOLDER();
	this.mc_mouth_holder.setTransform(106,49.9,1,1,0,0,0,21,2.3);

	this.addChild(this.mc_mouth_holder);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(76,-3.4,52,67);


(lib.ey_s_scroll_bg = function() {
	this.initialize();

	// ey_s_scroll_line
	this.instance = new lib.ey_s_scroll_line_1();
	this.instance.setTransform(201,17,1,1,0,0,0,201,17);

	// ey_s_progress
	this.instance_1 = new lib.ey_s_progress();
	this.instance_1.setTransform(201,15,1,1,0,0,0,180,9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402,34);


(lib.cubaman_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cubaman();

	// stick_01
	this.instance_1 = new lib.stick_01_2();
	this.instance_1.setTransform(26.5,67.5,1,1,0,0,0,7.5,47.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51,115);


(lib.AColonel_early_years = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"label_show":1,label_move_1:36,label_move_2:107,label_move_3:178,label_move_4:253,label_move_5:336,label_move_6:441,label_move_7:536,label_hide:645});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_30 = function() {
		this.stop();
	}
	this.frame_93 = function() {
		this.stop();
	}
	this.frame_164 = function() {
		this.stop();
	}
	this.frame_240 = function() {
		this.stop();
	}
	this.frame_323 = function() {
		this.stop();
	}
	this.frame_428 = function() {
		this.stop();
	}
	this.frame_523 = function() {
		this.stop();
	}
	this.frame_621 = function() {
		this.stop();
	}
	this.frame_667 = function() {
		this.stop();
		this.dispatchEvent('hide_complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30).call(this.frame_30).wait(63).call(this.frame_93).wait(71).call(this.frame_164).wait(76).call(this.frame_240).wait(83).call(this.frame_323).wait(105).call(this.frame_428).wait(95).call(this.frame_523).wait(98).call(this.frame_621).wait(46).call(this.frame_667).wait(1));

	// early_plaque
	this.instance = new lib.early_plaque_1();
	this.instance.setTransform(116.1,434.1,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(668));

	// ey_s_face
	this.ey_s_face = new lib.ey_s_face();
	this.ey_s_face.setTransform(103,62.5,1,1,0,0,0,103,62.5);

	this.timeline.addTween(cjs.Tween.get(this.ey_s_face).wait(1).to({regX:102,regY:31.1,rotation:0.2,x:101.2,y:31.2},0).wait(1).to({rotation:0.6,x:99.3,y:31.5},0).wait(1).to({rotation:1.2,x:97,y:31.7},0).wait(1).to({rotation:1.8,x:94.6,y:32},0).wait(1).to({rotation:2.3,x:92.4,y:32.3},0).wait(1).to({regX:102.9,regY:62.4,rotation:2.5,x:91,y:63.7},0).wait(1).to({regX:102,regY:31.1,rotation:2.1,x:92.4,y:32.4},0).wait(1).to({rotation:1.2,x:94.6,y:32.2},0).wait(1).to({rotation:0.1,x:97.3,y:31.9},0).wait(1).to({rotation:-1.2,x:100.3,y:31.6},0).wait(1).to({rotation:-2.4,x:103.2,y:31.4},0).wait(1).to({rotation:-3.5,x:105.5,y:31.2},0).wait(1).to({regX:103,regY:62.5,rotation:-4,x:109.8,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-3.7,x:105.7,y:31.1},0).wait(1).to({rotation:-3,x:103.6,y:31.2},0).wait(1).to({rotation:-2.2,x:101.2,y:31.4},0).wait(1).to({rotation:-1.3,x:98.5,y:31.5},0).wait(1).to({rotation:-0.6,x:96.2,y:31.7},0).wait(1).to({regX:103,regY:62.6,rotation:-0.2,y:63.2},0).wait(1).to({regX:102,regY:31.1,rotation:-0.1,x:95.9,y:31.7},0).wait(1).to({rotation:0.1,x:97.6,y:31.5},0).wait(1).to({rotation:0.3,x:99.8,y:31.4},0).wait(1).to({rotation:0.6,x:102.1,y:31.2},0).wait(1).to({rotation:0.9,x:104,y:31},0).wait(1).to({regX:103,regY:62.5,rotation:1,x:105.5,y:62.4},0).wait(1).to({regX:102,regY:31.1,rotation:0.9,x:104.7,y:31.1},0).wait(1).to({rotation:0.7,x:104},0).wait(1).to({rotation:0.4,x:103.2},0).wait(1).to({rotation:0.1,x:102.4},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(7).to({regX:102,regY:31.1,rotation:0.4,x:102.7,y:31.1},0).wait(1).to({rotation:1.3,x:104.3},0).wait(1).to({rotation:2.6,x:106.5},0).wait(1).to({rotation:3.9,x:108.9},0).wait(1).to({rotation:5.2,x:111.2,y:31},0).wait(1).to({rotation:6.3,x:113.1,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.8,x:111.3,y:62.4},0).wait(1).to({regX:102,regY:31.1,rotation:6.7,x:113.8,y:31.2},0).wait(1).to({rotation:6.4,x:113.4,y:31.1},0).wait(1).to({rotation:6,x:112.9,y:31.2},0).wait(1).to({rotation:5.5,x:112.1},0).wait(1).to({rotation:4.9,x:111.2},0).wait(1).to({rotation:4.1,x:110.1},0).wait(1).to({rotation:3.3,x:109,y:31.3},0).wait(1).to({rotation:2.4,x:107.7},0).wait(1).to({rotation:1.5,x:106.3,y:31.4},0).wait(1).to({rotation:0.5,x:104.9,y:31.5},0).wait(1).to({rotation:-0.6,x:103.3,y:31.6},0).wait(1).to({rotation:-1.7,x:101.8,y:31.7},0).wait(1).to({rotation:-2.8,x:100.2,y:31.8},0).wait(1).to({rotation:-4,x:98.6,y:32},0).wait(1).to({rotation:-5.1,x:96.9,y:32.1},0).wait(1).to({rotation:-6.3,x:95.2,y:32.3},0).wait(1).to({rotation:-7.5,x:93.4,y:32.5},0).wait(1).to({rotation:-8.7,x:91.7,y:32.8},0).wait(1).to({rotation:-10,x:90,y:33},0).wait(1).to({rotation:-11.2,x:88.2,y:33.2},0).wait(1).to({rotation:-12.4,x:86.6,y:33.5},0).wait(1).to({rotation:-13.5,x:84.8,y:33.7},0).wait(1).to({rotation:-14.7,x:83.3,y:34},0).wait(1).to({rotation:-15.8,x:81.7,y:34.3},0).wait(1).to({rotation:-16.9,x:80.1,y:34.5},0).wait(1).to({rotation:-17.9,x:78.8,y:34.8},0).wait(1).to({rotation:-18.8,x:77.4,y:35.1},0).wait(1).to({rotation:-19.7,x:76.2,y:35.3},0).wait(1).to({rotation:-20.5,x:75.1,y:35.5},0).wait(1).to({rotation:-21.1,x:74.2,y:35.7},0).wait(1).to({rotation:-21.7,x:73.5,y:35.9},0).wait(1).to({rotation:-22,x:72.9,y:36},0).wait(1).to({regX:103.1,regY:62.4,rotation:-22.1,x:85.5,y:64.7},0).wait(1).to({regX:102,regY:31.1,rotation:-19.9,x:75.7,y:35.4},0).wait(1).to({rotation:-14.9,x:82.3,y:34.1},0).wait(1).to({rotation:-8.7,x:90.7,y:32.7},0).wait(1).to({rotation:-2.2,x:99.4,y:31.7},0).wait(1).to({rotation:3.4,x:107,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.2,x:108.6,y:62.2},0).wait(1).to({regX:102,regY:31.1,rotation:5.4,x:110,y:30.9},0).wait(1).to({rotation:3.5,x:107.6},0).wait(1).to({rotation:1.2,x:104.7,y:31},0).wait(1).to({rotation:-1.2,x:101.8,y:31.2},0).wait(1).to({rotation:-3.4,x:99.1,y:31.4},0).wait(1).to({regX:103,regY:62.5,rotation:-4.4,x:101.2,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:98.3,y:31.4},0).wait(1).to({rotation:-2.9,x:99.3,y:31.3},0).wait(1).to({rotation:-1.7,x:100.4,y:31.2},0).wait(1).to({rotation:-0.6,x:101.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(15).to({regX:102,regY:31.1,rotation:-0.4,x:102.5,y:31.1},0).wait(1).to({rotation:-1.3,x:103.6},0).wait(1).to({rotation:-2.4,x:104.8,y:31},0).wait(1).to({rotation:-3.4,x:106},0).wait(1).to({regX:103,regY:62.5,rotation:-4,x:109.8,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:106.4,y:31.1},0).wait(1).to({rotation:-3.8,x:106.2},0).wait(1).to({rotation:-3.6,x:105.7},0).wait(1).to({rotation:-3.3,x:105.1,y:31.2},0).wait(1).to({rotation:-3,x:104.4},0).wait(1).to({rotation:-2.7,x:103.6,y:31.3},0).wait(1).to({rotation:-2.3,x:102.7,y:31.4},0).wait(1).to({rotation:-1.9,x:101.9,y:31.5},0).wait(1).to({regX:103,regY:62.6,rotation:-1.5,x:102.7,y:63},0).wait(1).to({regX:102,regY:31.1,rotation:-3.1,x:98.7,y:31.7},0).wait(1).to({rotation:-4.7,x:96.4,y:32},0).wait(1).to({rotation:-6.3,x:94.2,y:32.2},0).wait(1).to({rotation:-8,x:91.9,y:32.5},0).wait(1).to({rotation:-9.6,x:89.7,y:32.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.2,x:87.5,y:33.1},0).wait(1).to({rotation:-12.8,x:85.3,y:33.4},0).wait(1).to({rotation:-14.3,x:83.2,y:33.8},0).wait(1).to({rotation:-15.7,x:81.3,y:34.1},0).wait(1).to({rotation:-17.1,x:79.4,y:34.5},0).wait(1).to({rotation:-18.4,x:77.7,y:34.9},0).wait(1).to({regX:103,regY:62.6,rotation:-19.5,x:87.5,y:64.5},0).wait(1).to({regX:102,regY:31.1,rotation:-19.9,x:75.6,y:35.3},0).wait(1).to({rotation:-20.3,x:75.2},0).wait(1).to({rotation:-20.6,x:74.8,y:35.5},0).wait(1).to({rotation:-20.9,x:74.4,y:35.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-21.1,x:74},0).wait(1).to({rotation:-21.4,x:73.7,y:35.7},0).wait(1).to({rotation:-21.6,x:73.4},0).wait(1).to({rotation:-21.8,x:73.2,y:35.8},0).wait(1).to({rotation:-21.9,x:73},0).wait(1).to({rotation:-22.1,x:72.9},0).wait(1).to({x:72.8,y:35.9},0).wait(1).to({regX:103.1,regY:62.4,x:85.5,y:64.7},0).wait(1).to({regX:102,regY:31.1,rotation:-20.8,x:74.5,y:35.7},0).wait(1).to({rotation:-17.6,x:78.7,y:34.8},0).wait(1).to({rotation:-13.4,x:84.3,y:33.7},0).wait(1).to({rotation:-8.7,x:90.7,y:32.7},0).wait(1).to({rotation:-3.8,x:97.2,y:31.9},0).wait(1).to({rotation:0.8,x:103.5,y:31.3},0).wait(1).to({rotation:4.5,x:108.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.2,x:108.6,y:62.2},0).wait(1).to({regX:102,regY:31.1,rotation:5.4,x:110,y:30.9},0).wait(1).to({rotation:3.5,x:107.6},0).wait(1).to({rotation:1.2,x:104.7,y:31},0).wait(1).to({rotation:-1.2,x:101.8,y:31.2},0).wait(1).to({rotation:-3.4,x:99.1,y:31.4},0).wait(1).to({regX:103,regY:62.5,rotation:-4.4,x:101.2,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:98.3,y:31.4},0).wait(1).to({rotation:-2.9,x:99.3,y:31.3},0).wait(1).to({rotation:-1.7,x:100.4,y:31.2},0).wait(1).to({rotation:-0.6,x:101.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(15).to({regX:102,regY:31.1,rotation:-0.2,x:102.2,y:31.1},0).wait(1).to({rotation:-0.6,x:102.8},0).wait(1).to({rotation:-1.2,x:103.4},0).wait(1).to({rotation:-1.9,x:104.2},0).wait(1).to({rotation:-2.6,x:105,y:31},0).wait(1).to({rotation:-3.2,x:105.8},0).wait(1).to({rotation:-3.7,x:106.4,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:-4,x:109.8,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:106.6,y:31.1},0).wait(1).to({rotation:-3.6,x:106.7},0).wait(1).to({rotation:-3.2,x:106.9,y:31},0).wait(1).to({rotation:-2.7,x:107.1,y:31.1},0).wait(1).to({rotation:-2,x:107.3},0).wait(1).to({rotation:-1.4,x:107.6},0).wait(1).to({rotation:-0.6,x:107.9},0).wait(1).to({rotation:0.2,x:108.1,y:31.2},0).wait(1).to({regX:103.1,regY:62.6,rotation:1,x:109,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:1.3,x:109.4,y:31.2},0).wait(1).to({rotation:1.6,x:110.4},0).wait(1).to({rotation:1.9,x:111.3},0).wait(1).to({rotation:2.3,x:112.4,y:31.1},0).wait(1).to({rotation:2.6,x:113.3,y:31.2},0).wait(1).to({rotation:2.9,x:114.3},0).wait(1).to({rotation:3.2,x:115.2},0).wait(1).to({rotation:3.5,x:116.1},0).wait(1).to({rotation:3.8,x:117},0).wait(1).to({regX:103,regY:62.6,rotation:4,x:116.6,y:62.6},0).wait(1).to({regX:102,regY:31.1,rotation:5,x:118.6,y:31.1},0).wait(1).to({rotation:6,x:119.5,y:31.2},0).wait(1).to({rotation:6.9,x:120.2},0).wait(1).to({rotation:7.6,x:120.9,y:31.3},0).wait(1).to({rotation:8.2,x:121.4},0).wait(1).to({rotation:8.7,x:121.8,y:31.4},0).wait(1).to({rotation:9,x:122},0).wait(1).to({regX:103,regY:62.6,rotation:9.1,x:118.2,y:62.7},0).wait(10).to({regX:102,regY:31.1,rotation:6.8,x:119.3,y:31.3},0).wait(1).to({rotation:4.4,x:116.6,y:31.1},0).wait(1).to({rotation:2.1,x:113.8},0).wait(1).to({rotation:0,x:111.2,y:31},0).wait(1).to({rotation:-1.9,x:109},0).wait(1).to({rotation:-3.3,x:107.3},0).wait(1).to({regX:103,regY:62.5,rotation:-4,x:109.8,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-3.7,x:105.7,y:31.1},0).wait(1).to({rotation:-3.3,x:103.7,y:31.2},0).wait(1).to({rotation:-2.7,x:101.3,y:31.3},0).wait(1).to({rotation:-2.2,x:99,y:31.4},0).wait(1).to({rotation:-1.8,x:97.4,y:31.5},0).wait(1).to({regX:103,regY:62.5,rotation:-1.7,x:98.7,y:62.9},0).wait(1).to({regX:102,regY:31.1,rotation:-1.5,x:97.5,y:31.5},0).wait(1).to({rotation:-1,x:98.9,y:31.3},0).wait(1).to({rotation:-0.5,x:100.4,y:31.2},0).wait(1).to({rotation:-0.2,x:101.6},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(14).to({regX:102,regY:31.1,rotation:-0.5,x:101.1,y:31.2},0).wait(1).to({rotation:-1,x:100.1,y:31.3},0).wait(1).to({rotation:-1.5,x:98.9,y:31.4},0).wait(1).to({rotation:-2,x:97.9,y:31.6},0).wait(1).to({rotation:-2.6,x:96.7,y:31.7},0).wait(1).to({rotation:-3.2,x:95.5,y:31.8},0).wait(1).to({rotation:-3.7,x:94.3,y:32},0).wait(1).to({rotation:-4.4,x:93,y:32.1},0).wait(1).to({rotation:-5,x:91.7,y:32.3},0).wait(1).to({rotation:-5.7,x:90.3,y:32.5},0).wait(1).to({rotation:-6.3,x:89,y:32.6},0).wait(1).to({rotation:-7,x:87.5,y:32.8},0).wait(1).to({rotation:-7.7,x:86.1,y:33},0).wait(1).to({rotation:-8.5,x:84.5,y:33.3},0).wait(1).to({rotation:-9.2,x:83,y:33.5},0).wait(1).to({regX:103,regY:62.5,rotation:-10,x:87.8,y:64.5},0).wait(1).to({regX:102,regY:31.1,rotation:-10.4,x:81.2,y:33.8},0).wait(1).to({rotation:-11,x:80.8},0).wait(1).to({regX:103,regY:62.6,rotation:-12,x:87.7,y:64.5},0).wait(1).to({regX:102,regY:31.1,rotation:-11.9,x:80.3,y:33.9},0).wait(1).to({y:33.8},0).wait(1).to({rotation:-11.8,y:33.9},0).wait(1).to({rotation:-11.7,x:80.4},0).wait(1).to({rotation:-11.6,y:33.8},0).wait(1).to({rotation:-11.5,x:80.5},0).wait(1).to({rotation:-11.4,x:80.6,y:33.9},0).wait(1).to({rotation:-11.3,x:80.7,y:33.8},0).wait(1).to({rotation:-11.2},0).wait(1).to({rotation:-11,x:80.8},0).wait(1).to({rotation:-10.9},0).wait(1).to({rotation:-10.7,x:81,y:33.7},0).wait(1).to({rotation:-10.6},0).wait(1).to({rotation:-10.4,x:81.1},0).wait(1).to({rotation:-10.2,x:81.2},0).wait(1).to({rotation:-10,x:81.3},0).wait(1).to({rotation:-9.8,x:81.4,y:33.6},0).wait(1).to({rotation:-9.6,x:81.5},0).wait(1).to({rotation:-9.4,x:81.6},0).wait(1).to({rotation:-9.2,x:81.8},0).wait(1).to({rotation:-9},0).wait(1).to({rotation:-8.8,x:82},0).wait(1).to({rotation:-8.5,x:82.1,y:33.5},0).wait(1).to({rotation:-8.3,x:82.2},0).wait(1).to({regX:103,regY:62.5,rotation:-8,x:87.8,y:64.4},0).wait(1).to({regX:102,regY:31.1,rotation:-7.9,x:82.2,y:33.6},0).wait(1).to({rotation:-7.7,x:81.8},0).wait(1).to({rotation:-7.4,x:81.3,y:33.8},0).wait(1).to({regX:103,regY:62.6,rotation:-7,x:85.4,y:65},0).wait(1).to({regX:102,regY:31.1,rotation:-6.5,x:81.7,y:33.7},0).wait(1).to({rotation:-5.9,x:83.2,y:33.5},0).wait(1).to({rotation:-5.1,x:85,y:33.2},0).wait(1).to({rotation:-4.2,x:87.1,y:33},0).wait(1).to({rotation:-3.1,x:89.5,y:32.8},0).wait(1).to({rotation:-1.9,x:92.3,y:32.4},0).wait(1).to({rotation:-0.6,x:95.5,y:32.1},0).wait(1).to({rotation:0.9,x:98.8,y:31.8},0).wait(1).to({rotation:2.6,x:102.6,y:31.4},0).wait(1).to({rotation:4.3,x:106.6,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.2,x:108.6,y:62.2},0).wait(1).to({regX:102,regY:31.1,rotation:5.4,x:110,y:30.9},0).wait(1).to({rotation:3.5,x:107.6},0).wait(1).to({rotation:1.2,x:104.7,y:31},0).wait(1).to({rotation:-1.2,x:101.8,y:31.2},0).wait(1).to({rotation:-3.4,x:99.1,y:31.4},0).wait(1).to({regX:103,regY:62.5,rotation:-4.4,x:101.2,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:98.3,y:31.4},0).wait(1).to({rotation:-2.9,x:99.3,y:31.3},0).wait(1).to({rotation:-1.7,x:100.4,y:31.2},0).wait(1).to({rotation:-0.6,x:101.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(14).to({regX:102,regY:31.1,rotation:0.4,x:102.7,y:31.1},0).wait(1).to({rotation:1.3,x:104.3},0).wait(1).to({rotation:2.6,x:106.5},0).wait(1).to({rotation:3.9,x:108.9},0).wait(1).to({rotation:5.2,x:111.2,y:31},0).wait(1).to({rotation:6.3,x:113.1,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.8,x:111.3,y:62.4},0).wait(1).to({regX:102,regY:31.1,rotation:6.6,x:113.7,y:31.1},0).wait(1).to({rotation:6.2,x:113.1},0).wait(1).to({rotation:5.5,x:112.1,y:31.2},0).wait(1).to({rotation:4.6,x:110.9},0).wait(1).to({rotation:3.6,x:109.4,y:31.3},0).wait(1).to({rotation:2.5,x:107.7,y:31.4},0).wait(1).to({rotation:1.2,x:105.9,y:31.5},0).wait(1).to({rotation:-0.2,x:103.9,y:31.6},0).wait(1).to({rotation:-1.6,x:101.9,y:31.7},0).wait(1).to({rotation:-3.1,x:99.7,y:31.9},0).wait(1).to({rotation:-4.7,x:97.5,y:32.2},0).wait(1).to({rotation:-6.2,x:95.2,y:32.4},0).wait(1).to({rotation:-7.8,x:92.9,y:32.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.5,x:90.6,y:32.9},0).wait(1).to({regX:103.1,regY:62.5,rotation:-11,x:95.4,y:63.9},0).wait(1).to({regX:102,regY:31.1,rotation:-12.3,x:86.6,y:33.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.4,x:84.9,y:33.8},0).wait(1).to({rotation:-14.6,x:83.3,y:34},0).wait(1).to({rotation:-15.7,x:81.7,y:34.3},0).wait(1).to({rotation:-16.8,x:80.2,y:34.6},0).wait(1).to({rotation:-17.8,x:78.7,y:34.8},0).wait(1).to({rotation:-18.8,x:77.4,y:35.1},0).wait(1).to({rotation:-19.7,x:76.2,y:35.3},0).wait(1).to({rotation:-20.5,x:75,y:35.5},0).wait(1).to({rotation:-21.1,x:74.1,y:35.7},0).wait(1).to({rotation:-21.7,x:73.4,y:35.9},0).wait(1).to({rotation:-22,x:72.9,y:36},0).wait(1).to({regX:103.1,regY:62.4,rotation:-22.1,x:85.5,y:64.7},0).wait(1).to({regX:102,regY:31.1,rotation:-22.3,x:72.4,y:36.2},0).wait(1).to({rotation:-22.5,x:71.5,y:36.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.9,x:70.5,y:36.7},0).wait(1).to({rotation:-23.2,x:69.5,y:37},0).wait(1).to({rotation:-23.4,x:68.7,y:37.2},0).wait(1).to({regX:103,regY:62.4,rotation:-23.5,x:81.8,y:65.5},0).wait(1).to({regX:102,regY:31.1,x:68.6,y:37.2},0).wait(1).to({rotation:-23.2,x:69.4,y:37},0).wait(1).to({rotation:-22.9,x:70.3,y:36.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6,x:71.4,y:36.4},0).wait(1).to({rotation:-22.3,x:72.3,y:36.1},0).wait(1).to({regX:103.1,regY:62.4,rotation:-22.1,x:85.5,y:64.7},0).wait(1).to({regX:102,regY:31.1,rotation:-22,x:72.9,y:36.1},0).wait(1).to({rotation:-21.7,x:73.4,y:36},0).wait(1).to({scaleX:1,scaleY:1,rotation:-21.1,x:74.1,y:35.8},0).wait(1).to({regX:103.1,regY:62.4,rotation:-20.3,x:87,y:64.5},0).wait(1).to({regX:102,regY:31.1,rotation:-18.3,x:77.2,y:35.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16,x:79.3,y:34.6},0).wait(1).to({regX:103,regY:62.3,rotation:-13.6,x:90,y:64.3},0).wait(1).to({regX:102,regY:31.1,rotation:-13,x:83.3,y:34},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.4,x:84.9,y:33.9},0).wait(1).to({rotation:-11.7,x:86.6,y:33.6},0).wait(1).to({regX:103.1,regY:62.5,rotation:-11,x:95.4,y:63.9},0).wait(1).to({regX:102,regY:31.1,rotation:-10.3,x:89.4,y:33.1},0).wait(1).to({rotation:-9.6,x:90.3,y:33},0).wait(1).to({rotation:-8.9,x:91.3,y:32.9},0).wait(1).to({rotation:-8.2,x:92.3,y:32.7},0).wait(1).to({rotation:-7.5,x:93.3,y:32.6},0).wait(1).to({rotation:-6.8,x:94.3,y:32.5},0).wait(1).to({rotation:-6.1,x:95.3,y:32.4},0).wait(1).to({rotation:-5.5,x:96.2,y:32.3},0).wait(1).to({regX:103.1,regY:62.5,rotation:-4.8,x:100.8,y:63.4},0).wait(1).to({regX:102,regY:31.1,rotation:-8.5,x:92.3,y:32.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.1,x:87.7,y:33.4},0).wait(1).to({rotation:-15.3,x:83.5,y:34.1},0).wait(1).to({rotation:-18.3,x:79.6,y:34.8},0).wait(1).to({rotation:-20.9,x:76.4,y:35.5},0).wait(1).to({rotation:-22.9,x:73.7,y:36.1},0).wait(1).to({rotation:-24.3,x:72,y:36.5},0).wait(1).to({regX:103.1,regY:62.4,rotation:-24.9,x:85.6,y:64.7},0).wait(1).to({regX:102,regY:31.1,rotation:-22.4,x:74.4,y:35.9},0).wait(1).to({rotation:-17,x:81.2,y:34.4},0).wait(1).to({rotation:-10.1,x:89.9,y:32.8},0).wait(1).to({rotation:-3,x:99,y:31.7},0).wait(1).to({rotation:3.1,x:106.9,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:6.2,x:108.6,y:62.2},0).wait(1).to({regX:102,regY:31.1,rotation:5.4,x:110,y:30.9},0).wait(1).to({rotation:3.5,x:107.6},0).wait(1).to({rotation:1.2,x:104.7,y:31},0).wait(1).to({rotation:-1.2,x:101.8,y:31.2},0).wait(1).to({rotation:-3.4,x:99.1,y:31.4},0).wait(1).to({regX:103,regY:62.5,rotation:-4.4,x:101.2,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:98.3,y:31.4},0).wait(1).to({rotation:-2.9,x:99.3,y:31.3},0).wait(1).to({rotation:-1.7,x:100.4,y:31.2},0).wait(1).to({rotation:-0.6,x:101.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(14).to({regX:102,regY:31.1,rotation:0.1,y:31.2},0).wait(1).to({rotation:0.4,x:105.4},0).wait(1).to({rotation:0.8,x:108.7},0).wait(1).to({rotation:1.2,x:112.4,y:31.3},0).wait(1).to({rotation:1.7,x:116.3},0).wait(1).to({rotation:2.1,x:120.3,y:31.4},0).wait(1).to({rotation:2.5,x:123.9},0).wait(1).to({rotation:2.8,x:126.7},0).wait(1).to({regX:102.9,regY:62.5,rotation:3,x:127.4,y:62.9},0).wait(1).to({regX:102,regY:31.1,rotation:3.4,x:128.3,y:31.5},0).wait(1).to({rotation:4.2,x:128.7},0).wait(1).to({regX:102.9,regY:62.5,rotation:4.7,x:127.4,y:62.9},0).wait(1).to({regX:102,regY:31.1,x:129,y:31.6},0).wait(1).to({x:128.8},0).wait(1).to({rotation:4.6,x:128.6},0).wait(1).to({x:128.4,y:31.5},0).wait(1).to({rotation:4.5,x:127.9},0).wait(1).to({rotation:4.4,x:127.5,y:31.6},0).wait(1).to({rotation:4.3,x:127},0).wait(1).to({rotation:4.1,x:126.5},0).wait(1).to({rotation:4,x:125.9},0).wait(1).to({rotation:3.8,x:125.2},0).wait(1).to({rotation:3.7,x:124.5},0).wait(1).to({rotation:3.5,x:123.8},0).wait(1).to({rotation:3.3,x:123},0).wait(1).to({rotation:3.2,x:122.2},0).wait(1).to({rotation:3,x:121.4},0).wait(1).to({rotation:2.8,x:120.5},0).wait(1).to({rotation:2.6,x:119.6},0).wait(1).to({rotation:2.4,x:118.7},0).wait(1).to({rotation:2.1,x:117.8,y:31.7},0).wait(1).to({rotation:1.9,x:116.8},0).wait(1).to({rotation:1.7,x:115.9},0).wait(1).to({rotation:1.5,x:114.9},0).wait(1).to({rotation:1.2,x:113.9},0).wait(1).to({rotation:1,x:112.9},0).wait(1).to({rotation:0.8,x:111.9,y:31.8},0).wait(1).to({rotation:0.5,x:110.9},0).wait(1).to({regX:102.9,regY:62.4,rotation:0.3,x:110.6,y:63.1},0).wait(1).to({regX:102,regY:31.1,rotation:1.5,x:109.6,y:31.9},0).wait(1).to({rotation:2.8,x:109.3},0).wait(1).to({rotation:4,x:109.1,y:32},0).wait(1).to({regX:102.9,regY:62.5,rotation:5.2,x:107,y:63.3},0).wait(1).to({regX:102,regY:31.1,rotation:3.6,x:107.1,y:32},0).wait(1).to({rotation:1.9,x:105.3,y:31.9},0).wait(1).to({rotation:0.3,x:103.6},0).wait(1).to({regX:103,regY:62.4,rotation:-1.3,x:103.5,y:63.3},0).wait(1).to({regX:102,regY:31.1,rotation:-1.5,x:100.9,y:32.1},0).wait(1).to({rotation:-1.7,x:99.9},0).wait(1).to({rotation:-2,x:98.9},0).wait(1).to({rotation:-2.2,x:98},0).wait(1).to({rotation:-2.4,x:97,y:32.2},0).wait(1).to({rotation:-2.6,x:96.1},0).wait(1).to({rotation:-2.8,x:95.2},0).wait(1).to({rotation:-3,x:94.4},0).wait(1).to({rotation:-3.2,x:93.6,y:32.3},0).wait(1).to({rotation:-3.4,x:92.8},0).wait(1).to({rotation:-3.5,x:92.1},0).wait(1).to({rotation:-3.7,x:91.4},0).wait(1).to({rotation:-3.8,x:90.8},0).wait(1).to({rotation:-3.9,x:90.3,y:32.4},0).wait(1).to({rotation:-4.1,x:89.8},0).wait(1).to({rotation:-4.2,x:89.4,y:32.3},0).wait(1).to({x:89.1,y:32.4},0).wait(1).to({rotation:-4.3,x:88.9},0).wait(1).to({regX:102.9,regY:62.5,x:92.1,y:63.6},0).wait(1).to({regX:102,regY:31.1,rotation:-3.1,x:91.2,y:32.1},0).wait(1).to({rotation:-0.7,x:96.4,y:31.7},0).wait(1).to({rotation:2.1,x:102.4,y:31.3},0).wait(1).to({rotation:4.8,x:108.1,y:31},0).wait(1).to({regX:103,regY:62.5,rotation:6.2,x:108.6,y:62.2},0).wait(1).to({regX:102,regY:31.1,rotation:5.4,x:110,y:30.9},0).wait(1).to({rotation:3.5,x:107.6},0).wait(1).to({rotation:1.2,x:104.7,y:31},0).wait(1).to({rotation:-1.2,x:101.8,y:31.2},0).wait(1).to({rotation:-3.4,x:99.1,y:31.4},0).wait(1).to({regX:103,regY:62.5,rotation:-4.4,x:101.2,y:62.7},0).wait(1).to({regX:102,regY:31.1,rotation:-3.9,x:98.3,y:31.4},0).wait(1).to({rotation:-2.9,x:99.3,y:31.3},0).wait(1).to({rotation:-1.7,x:100.4,y:31.2},0).wait(1).to({rotation:-0.6,x:101.5,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(14).to({regX:102,regY:31.1,rotation:0.3,x:102.6,y:31.1},0).wait(1).to({rotation:1.2,x:104.2},0).wait(1).to({rotation:2.5,x:106.5},0).wait(1).to({rotation:4.1,x:109.2},0).wait(1).to({rotation:5.8,x:112.3,y:31.2},0).wait(1).to({rotation:7.7,x:115.5},0).wait(1).to({rotation:9.6,x:118.8,y:31.4},0).wait(1).to({rotation:11.5,x:122.3,y:31.5},0).wait(1).to({rotation:13.4,x:125.6,y:31.7},0).wait(1).to({rotation:15.1,x:128.6,y:31.9},0).wait(1).to({rotation:16.6,x:131.2,y:32.1},0).wait(1).to({rotation:17.7,x:133.1,y:32.2},0).wait(1).to({regX:103,regY:62.5,rotation:18.2,x:125.1,y:62.4},0).wait(1).to({regX:102,regY:31.1,rotation:17.9,x:133.5,y:32.3},0).wait(1).to({rotation:17.2,x:132.4,y:32.2},0).wait(1).to({rotation:16.2,x:130.8,y:32.1},0).wait(1).to({rotation:14.9,x:128.7,y:32},0).wait(1).to({rotation:13.5,x:126.3,y:31.9},0).wait(1).to({rotation:11.8,x:123.6,y:31.8},0).wait(1).to({rotation:10,x:120.7,y:31.7},0).wait(1).to({rotation:8.1,x:117.6},0).wait(1).to({rotation:6.2,x:114.5,y:31.6},0).wait(1).to({rotation:4.2,x:111.2},0).wait(1).to({rotation:2.2,x:108,y:31.7},0).wait(1).to({rotation:0.3,x:104.8},0).wait(1).to({rotation:-1.7,x:101.7,y:31.9},0).wait(1).to({rotation:-3.5,x:98.8,y:32},0).wait(1).to({rotation:-5.2,x:96,y:32.2},0).wait(1).to({rotation:-6.7,x:93.6,y:32.4},0).wait(1).to({rotation:-8,x:91.5,y:32.5},0).wait(1).to({rotation:-8.8,x:90.1,y:32.7},0).wait(1).to({regX:102.9,regY:62.6,rotation:-9.2,x:95.5,y:63.6},0).wait(1).to({regX:102,regY:31.1,rotation:-9,x:89.9,y:32.6},0).wait(1).to({rotation:-8.5,x:90.8,y:32.5},0).wait(1).to({rotation:-7.7,x:92,y:32.4},0).wait(1).to({rotation:-6.8,x:93.6,y:32.3},0).wait(1).to({rotation:-5.8,x:95.2,y:32.2},0).wait(1).to({rotation:-4.7,x:97.1,y:32},0).wait(1).to({rotation:-3.5,x:98.9},0).wait(1).to({rotation:-2.4,x:100.8,y:31.8},0).wait(1).to({rotation:-1.3,x:102.7,y:31.7},0).wait(1).to({rotation:-0.3,x:104.3},0).wait(1).to({rotation:0.6,x:105.8},0).wait(1).to({rotation:1.3,x:106.9},0).wait(1).to({regX:103,regY:62.5,rotation:1.6,x:107.5,y:63},0).wait(1).to({regX:102,regY:31.1,rotation:1.3,x:106.8,y:31.7},0).wait(1).to({rotation:0.6,x:105.5},0).wait(1).to({rotation:-0.3,x:103.7},0).wait(1).to({rotation:-1.3,x:101.7,y:31.8},0).wait(1).to({rotation:-2.5,x:99.4,y:31.9},0).wait(1).to({rotation:-3.7,x:97.2,y:32.1},0).wait(1).to({rotation:-4.8,x:94.9,y:32.2},0).wait(1).to({rotation:-5.8,x:92.9,y:32.4},0).wait(1).to({rotation:-6.6,x:91.3},0).wait(1).to({regX:102.8,regY:62.5,rotation:-7,x:95.4,y:63.6},0).wait(1).to({regX:102,regY:31.1,rotation:-6.6,x:91.5,y:32.5},0).wait(1).to({rotation:-5.8,x:93.2,y:32.3},0).wait(1).to({rotation:-4.5,x:95.6,y:32.1},0).wait(1).to({rotation:-3,x:98.5,y:31.9},0).wait(1).to({rotation:-1.3,x:101.9,y:31.7},0).wait(1).to({rotation:0.6,x:105.3,y:31.6},0).wait(1).to({rotation:2.5,x:108.9,y:31.4},0).wait(1).to({rotation:4.4,x:112.6,y:31.3},0).wait(1).to({rotation:6.2,x:116.2,y:31.2},0).wait(1).to({rotation:7.9,x:119.4},0).wait(1).to({rotation:9.4,x:122.3},0).wait(1).to({rotation:10.5,x:124.4,y:31.1},0).wait(1).to({regX:102.9,regY:62.6,rotation:11,x:120.1,y:62.1},0).wait(1).to({regX:102,regY:31.1,rotation:10.5,x:124.2,y:31},0).wait(1).to({rotation:9.3,x:121.8},0).wait(1).to({rotation:7.7,x:118.6},0).wait(1).to({rotation:5.8,x:114.7},0).wait(1).to({rotation:3.8,x:110.5,y:31.1},0).wait(1).to({rotation:1.7,x:106.2,y:31.2},0).wait(1).to({rotation:-0.4,x:102.1,y:31.3},0).wait(1).to({rotation:-2.2,x:98.5,y:31.5},0).wait(1).to({rotation:-3.6,x:95.5,y:31.6},0).wait(1).to({regX:103,regY:62.5,rotation:-4.2,x:97.5,y:63.1},0).wait(1).to({regX:102,regY:31.1,rotation:-4,x:94.7,y:31.7},0).wait(1).to({rotation:-3.4,x:95.8,y:31.6},0).wait(1).to({rotation:-2.6,x:97.1,y:31.5},0).wait(1).to({rotation:-1.8,x:98.7,y:31.4},0).wait(1).to({rotation:-1,x:100.2,y:31.3},0).wait(1).to({rotation:-0.3,x:101.5,y:31.2},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(25).to({regX:102,regY:31.1,rotation:-0.4,x:102.5,y:31.1},0).wait(1).to({rotation:-1.3,x:103.6},0).wait(1).to({rotation:-2.4,x:104.8,y:31},0).wait(1).to({rotation:-3.4,x:106},0).wait(1).to({regX:103,regY:62.5,rotation:-4,x:109.8,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-3.6,x:105.7,y:31.1},0).wait(1).to({rotation:-2.7,x:103.6,y:31.2},0).wait(1).to({rotation:-1.5,x:100.8,y:31.5},0).wait(1).to({rotation:-0.2,x:97.9,y:31.7},0).wait(1).to({rotation:1,x:95,y:32},0).wait(1).to({rotation:2,x:92.5,y:32.3},0).wait(1).to({regX:102.9,regY:62.4,rotation:2.5,x:91,y:63.7},0).wait(1).to({regX:102,regY:31.1,rotation:1.9,x:92.4,y:32.3},0).wait(1).to({rotation:0.5,x:94.4,y:32},0).wait(1).to({rotation:-1.3,x:96.9,y:31.8},0).wait(1).to({rotation:-3.1,x:99.5,y:31.5},0).wait(1).to({rotation:-4.7,x:101.7,y:31.3},0).wait(1).to({regX:103,regY:62.6,rotation:-5.5,x:106.7,y:62.3},0).wait(1).to({regX:102,regY:31.1,rotation:-4.6,x:102.6,y:31},0).wait(1).to({rotation:-2.9,x:102.4},0).wait(1).to({rotation:-1.1,x:102.2,y:31.1},0).wait(1).to({regX:103,regY:62.5,rotation:0,x:103,y:62.5},0).wait(1));

	// early_vest
	this.instance_1 = new lib.early_vest_1();
	this.instance_1.setTransform(112.5,209.5,1,1,0,0,0,56.5,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:48.5,regY:80.5,rotation:-0.4,x:104,y:137.6},0).wait(1).to({rotation:-1.2,x:103,y:137.7},0).wait(1).to({rotation:-2.2,x:101.7,y:137.8},0).wait(1).to({rotation:-3.3,x:100.3,y:138},0).wait(1).to({rotation:-4.3,x:99.1,y:138.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:-4.7,x:112.5,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-4.3,x:99.1,y:138.2},0).wait(1).to({rotation:-3.4,x:100.3,y:138},0).wait(1).to({rotation:-2.3,x:101.9,y:137.8},0).wait(1).to({rotation:-1,x:103.6,y:137.6},0).wait(1).to({rotation:0.3,x:105.3,y:137.4},0).wait(1).to({rotation:1.3,x:106.8,y:137.3},0).wait(1).to({regX:56.4,regY:152.5,rotation:1.8,x:113.2,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.4,x:107.1,y:137.2},0).wait(1).to({rotation:0.6,x:105.9,y:137.4},0).wait(1).to({rotation:-0.4,x:104.6,y:137.5},0).wait(1).to({rotation:-1.4,x:103.2,y:137.7},0).wait(1).to({rotation:-2.3,x:102,y:137.8},0).wait(1).to({regX:56.6,regY:152.5,rotation:-2.7,x:112.7,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-2.4,x:101.5,y:137.9},0).wait(1).to({rotation:-1.8,x:102.3,y:137.8},0).wait(1).to({rotation:-1,x:103.3,y:137.7},0).wait(1).to({rotation:-0.1,x:104.3,y:137.5},0).wait(1).to({rotation:0.6,x:105.2,y:137.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:1,x:112.5,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:0.9,x:105.6,y:137.5},0).wait(1).to({rotation:0.7,x:105.3},0).wait(1).to({rotation:0.4,x:105},0).wait(1).to({rotation:0.1,x:104.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(7).to({regX:48.5,regY:80.5,rotation:0.2,x:104.8,y:137.5},0).wait(1).to({rotation:0.6,x:105.3},0).wait(1).to({rotation:1.2,x:106},0).wait(1).to({rotation:1.9,x:106.8,y:137.4},0).wait(1).to({rotation:2.5,x:107.5},0).wait(1).to({rotation:3,x:108.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:3.2,x:112.4,y:209.8},0).wait(1).to({regX:48.5,regY:80.5,x:108.5,y:137.4},0).wait(1).to({rotation:3.1,x:108.4},0).wait(1).to({rotation:3,x:108.2},0).wait(1).to({rotation:2.8,x:108},0).wait(1).to({rotation:2.6,x:107.7},0).wait(1).to({rotation:2.3,x:107.3,y:137.5},0).wait(1).to({rotation:2,x:107},0).wait(1).to({rotation:1.7,x:106.6},0).wait(1).to({rotation:1.4,x:106.2,y:137.6},0).wait(1).to({rotation:1,x:105.8},0).wait(1).to({rotation:0.6,x:105.3},0).wait(1).to({rotation:0.3,x:104.9,y:137.7},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({rotation:-0.6,x:103.9,y:137.8},0).wait(1).to({rotation:-1,x:103.4,y:137.9},0).wait(1).to({rotation:-1.4,x:102.9},0).wait(1).to({rotation:-1.8,x:102.4},0).wait(1).to({rotation:-2.2,x:101.8,y:138.1},0).wait(1).to({rotation:-2.7,x:101.3},0).wait(1).to({rotation:-3.1,x:100.8,y:138.2},0).wait(1).to({rotation:-3.5,x:100.3,y:138.3},0).wait(1).to({rotation:-3.9,x:99.8},0).wait(1).to({rotation:-4.3,x:99.3,y:138.5},0).wait(1).to({rotation:-4.7,x:98.9},0).wait(1).to({rotation:-5.1,x:98.3,y:138.7},0).wait(1).to({rotation:-5.5,x:97.9,y:138.8},0).wait(1).to({rotation:-5.8,x:97.5},0).wait(1).to({rotation:-6.1,x:97.1,y:138.9},0).wait(1).to({rotation:-6.4,x:96.8,y:139},0).wait(1).to({rotation:-6.6,x:96.6},0).wait(1).to({rotation:-6.8,x:96.3,y:139.1},0).wait(1).to({rotation:-6.9,x:96.2},0).wait(1).to({regX:56.5,regY:152.6,rotation:-7,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.3,x:97,y:138.8},0).wait(1).to({rotation:-4.6,x:99,y:138.4},0).wait(1).to({rotation:-2.6,x:101.4,y:137.9},0).wait(1).to({rotation:-0.5,x:103.9,y:137.4},0).wait(1).to({rotation:1.3,x:106.1,y:137.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:2.2,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:1.5,x:106.3},0).wait(1).to({rotation:0.8,x:105.5,y:137.4},0).wait(1).to({rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:-0.4,x:104,y:137.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:-0.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-0.6,x:103.7,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(15).to({regX:48.5,regY:80.5,rotation:0.2,x:104.8,y:137.5},0).wait(1).to({rotation:0.6,x:105.5,y:137.4},0).wait(1).to({rotation:1.1,x:106.2},0).wait(1).to({rotation:1.6,x:107,y:137.2},0).wait(1).to({regX:56.4,regY:152.5,rotation:1.8,x:113.2,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.7,x:107.5,y:137.2},0).wait(1).to({rotation:1.6,x:107.3},0).wait(1).to({rotation:1.4,x:107},0).wait(1).to({rotation:1.2,x:106.7,y:137.3},0).wait(1).to({rotation:0.9,x:106.3},0).wait(1).to({rotation:0.6,x:105.8,y:137.4},0).wait(1).to({rotation:0.2,x:105.3},0).wait(1).to({rotation:-0.2,x:104.8,y:137.5},0).wait(1).to({regX:56.4,regY:152.5,rotation:-0.5,x:112.9,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-1,x:103.7,y:137.7},0).wait(1).to({rotation:-1.5,x:103.1},0).wait(1).to({rotation:-2,x:102.4,y:137.8},0).wait(1).to({rotation:-2.5,x:101.8,y:137.9},0).wait(1).to({rotation:-3,x:101.1,y:138},0).wait(1).to({rotation:-3.5,x:100.6,y:138.2},0).wait(1).to({rotation:-4,x:100,y:138.3},0).wait(1).to({rotation:-4.4,x:99.4,y:138.4},0).wait(1).to({rotation:-4.9,x:98.8,y:138.5},0).wait(1).to({rotation:-5.3,x:98.3,y:138.6},0).wait(1).to({rotation:-5.7,x:97.8,y:138.7},0).wait(1).to({regX:56.4,regY:152.5,rotation:-6,x:112.8,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.2,x:97.2,y:138.9},0).wait(1).to({rotation:-6.3,x:97.1},0).wait(1).to({rotation:-6.4,x:97},0).wait(1).to({rotation:-6.5,x:96.9},0).wait(1).to({rotation:-6.6,x:96.7},0).wait(1).to({rotation:-6.7,x:96.6,y:139},0).wait(1).to({rotation:-6.8,x:96.5},0).wait(1).to({rotation:-6.9,x:96.4},0).wait(2).to({x:96.3},0).wait(1).to({rotation:-7},0).wait(1).to({regX:56.5,regY:152.6,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.5,x:96.7,y:138.8},0).wait(1).to({rotation:-5.5,x:97.9,y:138.6},0).wait(1).to({rotation:-4.2,x:99.5,y:138.2},0).wait(1).to({rotation:-2.6,x:101.4,y:137.9},0).wait(1).to({rotation:-1,x:103.3,y:137.5},0).wait(1).to({rotation:0.5,x:105.1,y:137.3},0).wait(1).to({rotation:1.7,x:106.6,y:137.1},0).wait(1).to({regX:56.5,regY:152.5,rotation:2.2,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:1.5,x:106.3},0).wait(1).to({rotation:0.8,x:105.5,y:137.4},0).wait(1).to({rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:-0.4,x:104,y:137.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:-0.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-0.6,x:103.7,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(15).to({regX:48.5,regY:80.5,rotation:0.1,x:104.7,y:137.5},0).wait(1).to({rotation:0.3,x:105},0).wait(1).to({rotation:0.6,x:105.4,y:137.4},0).wait(1).to({rotation:0.8,x:105.9,y:137.3},0).wait(1).to({rotation:1.2,x:106.3},0).wait(1).to({rotation:1.4,x:106.8,y:137.2},0).wait(1).to({rotation:1.7,x:107.2},0).wait(1).to({regX:56.4,regY:152.5,rotation:1.8,x:113.2,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,x:107.5,y:137.2},0).wait(1).to({x:107.4},0).wait(4).to({rotation:1.9},0).wait(1).to({x:107.3},0).wait(2).to({regX:56.4,regY:152.5,x:112.8,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:2.2,x:107.7,y:137.2},0).wait(1).to({rotation:2.6,x:108.1,y:137.1},0).wait(1).to({rotation:2.9,x:108.5},0).wait(1).to({rotation:3.2,x:108.8},0).wait(1).to({rotation:3.6,x:109.2,y:137},0).wait(1).to({rotation:3.9,x:109.6},0).wait(1).to({rotation:4.2,x:110},0).wait(1).to({rotation:4.5,x:110.4},0).wait(1).to({rotation:4.7,x:110.7,y:136.9},0).wait(1).to({regX:56.4,regY:152.5,rotation:5,x:112.5,y:209.3},0).wait(1).to({regX:48.5,regY:80.5,rotation:5.1,x:111.1,y:136.9},0).wait(1).to({rotation:5.2,x:111.2},0).wait(1).to({rotation:5.3,x:111.3},0).wait(1).to({rotation:5.4,x:111.4},0).wait(1).to({rotation:5.5,x:111.5},0).wait(1).to({rotation:5.6,x:111.6},0).wait(2).to({regX:56.3,regY:152.4,x:112.5,y:209.3},0).wait(10).to({regX:48.5,regY:80.5,rotation:4.9,x:110.9,y:137.1},0).wait(1).to({rotation:4.2,x:110.2},0).wait(1).to({rotation:3.6,x:109.5},0).wait(1).to({rotation:2.9,x:108.8,y:137.2},0).wait(1).to({rotation:2.4,x:108.2,y:137.3},0).wait(1).to({rotation:2,x:107.7},0).wait(1).to({regX:56.4,regY:152.5,rotation:1.8,x:113.2,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.5,x:107.1,y:137.2},0).wait(1).to({rotation:0.8,x:106.1,y:137.4},0).wait(1).to({rotation:-0.1,x:104.9,y:137.5},0).wait(1).to({rotation:-0.9,x:103.7,y:137.6},0).wait(1).to({rotation:-1.5,x:103,y:137.7},0).wait(1).to({regX:56.5,regY:152.5,rotation:-1.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-1.5,x:102.7,y:137.7},0).wait(1).to({rotation:-1,x:103.3,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.2,x:104.3,y:137.5},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(14).to({regX:48.5,regY:80.5,rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.6,x:103.8,y:137.6},0).wait(1).to({rotation:-0.9,x:103.4},0).wait(1).to({rotation:-1.2,x:103,y:137.7},0).wait(1).to({rotation:-1.6,x:102.7},0).wait(1).to({rotation:-1.9,x:102.2,y:137.8},0).wait(1).to({rotation:-2.3,x:101.8,y:137.9},0).wait(1).to({rotation:-2.6,x:101.4},0).wait(1).to({rotation:-3,x:100.9,y:138},0).wait(1).to({rotation:-3.4,x:100.4,y:138.1},0).wait(1).to({rotation:-3.8,x:100,y:138.2},0).wait(1).to({rotation:-4.2,x:99.5},0).wait(1).to({rotation:-4.7,x:99,y:138.3},0).wait(1).to({rotation:-5.1,x:98.4,y:138.5},0).wait(1).to({rotation:-5.6,x:97.9,y:138.6},0).wait(1).to({regX:56.5,regY:152.3,rotation:-6,x:112.9,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,x:97.3,y:138.8},0).wait(2).to({regX:56.5,regY:152.3,x:112.9,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,x:97.3,y:138.8},0).wait(24).to({regX:56.5,regY:152.3,x:112.9,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.1,x:97.2,y:138.8},0).wait(1).to({rotation:-6.3,x:97,y:138.9},0).wait(1).to({rotation:-6.6,x:96.7,y:139},0).wait(1).to({regX:56.5,regY:152.3,rotation:-7,x:112.9,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.6,x:96.6,y:139.1},0).wait(1).to({rotation:-6.2,x:97.2,y:138.9},0).wait(1).to({rotation:-5.7,x:97.8,y:138.8},0).wait(1).to({rotation:-5,x:98.6,y:138.6},0).wait(1).to({rotation:-4.3,x:99.4,y:138.4},0).wait(1).to({rotation:-3.4,x:100.4,y:138.2},0).wait(1).to({rotation:-2.5,x:101.5,y:138},0).wait(1).to({rotation:-1.5,x:102.8,y:137.8},0).wait(1).to({rotation:-0.3,x:104.1,y:137.6},0).wait(1).to({rotation:0.9,x:105.6,y:137.5},0).wait(1).to({regX:56.5,regY:152.5,rotation:2.2,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:1.5,x:106.3},0).wait(1).to({rotation:0.8,x:105.5,y:137.4},0).wait(1).to({rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:-0.4,x:104,y:137.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:-0.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-0.6,x:103.7,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(14).to({regX:48.5,regY:80.5,rotation:0.2,x:104.8,y:137.5},0).wait(1).to({rotation:0.6,x:105.3},0).wait(1).to({rotation:1.2,x:106},0).wait(1).to({rotation:1.9,x:106.8,y:137.4},0).wait(1).to({rotation:2.5,x:107.5},0).wait(1).to({rotation:3,x:108.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:3.2,x:112.4,y:209.8},0).wait(1).to({regX:48.5,regY:80.5,x:108.4,y:137.4},0).wait(1).to({rotation:3,x:108.3},0).wait(1).to({rotation:2.8,x:107.9},0).wait(1).to({rotation:2.5,x:107.6},0).wait(1).to({rotation:2.1,x:107.1,y:137.5},0).wait(1).to({rotation:1.7,x:106.7},0).wait(1).to({rotation:1.3,x:106.1,y:137.6},0).wait(1).to({rotation:0.8,x:105.5},0).wait(1).to({rotation:0.3,x:104.9},0).wait(1).to({rotation:-0.2,x:104.3,y:137.7},0).wait(1).to({rotation:-0.8,x:103.6,y:137.8},0).wait(1).to({rotation:-1.3,x:103},0).wait(1).to({rotation:-1.9,x:102.2,y:137.9},0).wait(1).to({rotation:-2.5,x:101.5,y:138},0).wait(1).to({regX:56.5,regY:152.4,rotation:-3,x:112.7,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-3.5,x:100.4,y:138.3},0).wait(1).to({rotation:-3.9,x:99.9},0).wait(1).to({rotation:-4.3,x:99.4,y:138.5},0).wait(1).to({rotation:-4.7,x:99},0).wait(1).to({rotation:-5.1,x:98.4,y:138.6},0).wait(1).to({rotation:-5.4,x:98.1,y:138.7},0).wait(1).to({rotation:-5.8,x:97.6,y:138.8},0).wait(1).to({rotation:-6.1,x:97.2,y:138.9},0).wait(1).to({rotation:-6.4,x:96.9,y:139},0).wait(1).to({rotation:-6.6,x:96.7},0).wait(1).to({rotation:-6.8,x:96.4,y:139.1},0).wait(1).to({rotation:-6.9,x:96.2},0).wait(1).to({regX:56.5,regY:152.6,rotation:-7,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-7.1,x:96.1,y:139},0).wait(1).to({rotation:-7.3,x:95.8,y:139.2},0).wait(1).to({rotation:-7.7,x:95.4},0).wait(1).to({rotation:-8,x:95,y:139.4},0).wait(1).to({rotation:-8.2,x:94.8,y:139.5},0).wait(1).to({regX:56.4,regY:152.6,rotation:-8.3,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-8.2,x:94.8,y:139.4},0).wait(1).to({rotation:-8,x:95,y:139.3},0).wait(1).to({rotation:-7.7,x:95.3,y:139.2},0).wait(1).to({rotation:-7.4,x:95.7,y:139.1},0).wait(1).to({rotation:-7.1,x:96,y:139},0).wait(1).to({regX:56.5,regY:152.6,rotation:-7,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.9,x:96.2,y:139},0).wait(1).to({rotation:-6.8,x:96.3},0).wait(1).to({rotation:-6.6,x:96.6,y:138.9},0).wait(1).to({rotation:-6.4,x:96.9,y:138.8},0).wait(1).to({rotation:-6,x:97.3},0).wait(1).to({rotation:-5.7,x:97.7,y:138.6},0).wait(1).to({rotation:-5.2,x:98.3,y:138.5},0).wait(1).to({rotation:-4.7,x:98.8,y:138.4},0).wait(1).to({rotation:-4.2,x:99.4,y:138.3},0).wait(1).to({rotation:-3.6,x:100.2,y:138.1},0).wait(1).to({regX:56.5,regY:152.4,rotation:-3,x:112.7,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-2.8,x:101.3,y:138.1},0).wait(1).to({rotation:-2.5,x:101.6,y:138},0).wait(1).to({rotation:-2.3,x:101.8},0).wait(1).to({rotation:-2,x:102.1},0).wait(1).to({rotation:-1.8,x:102.4,y:137.9},0).wait(1).to({rotation:-1.5,x:102.7},0).wait(1).to({rotation:-1.3,x:103},0).wait(1).to({rotation:-1,x:103.4,y:137.8},0).wait(1).to({regX:56.5,regY:152.4,rotation:-0.8,x:112.6,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-1.9,x:102.2,y:138},0).wait(1).to({rotation:-3,x:100.9,y:138.2},0).wait(1).to({rotation:-4,x:99.7,y:138.4},0).wait(1).to({rotation:-5,x:98.6,y:138.6},0).wait(1).to({rotation:-5.7,x:97.6,y:138.8},0).wait(1).to({rotation:-6.4,x:96.9,y:139},0).wait(1).to({rotation:-6.8,x:96.4,y:139.1},0).wait(1).to({regX:56.5,regY:152.6,rotation:-7,x:112.9,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-6.3,x:97,y:138.8},0).wait(1).to({rotation:-4.6,x:99,y:138.4},0).wait(1).to({rotation:-2.6,x:101.4,y:137.9},0).wait(1).to({rotation:-0.5,x:103.9,y:137.4},0).wait(1).to({rotation:1.3,x:106.1,y:137.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:2.2,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:1.5,x:106.3},0).wait(1).to({rotation:0.8,x:105.5,y:137.4},0).wait(1).to({rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:-0.4,x:104,y:137.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:-0.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-0.6,x:103.7,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(14).to({regX:48.5,regY:80.5,rotation:0.4,x:105,y:137.4},0).wait(1).to({rotation:1.3,x:106.1,y:137.3},0).wait(1).to({rotation:2.5,x:107.5,y:137.2},0).wait(1).to({rotation:3.9,x:109.2,y:137},0).wait(1).to({rotation:5.4,x:111,y:136.9},0).wait(1).to({rotation:6.8,x:112.7},0).wait(1).to({rotation:8.2,x:114.3,y:137},0).wait(1).to({rotation:9.2,x:115.6},0).wait(1).to({regX:56.4,regY:152.5,rotation:9.7,x:112,y:209.3},0).wait(1).to({regX:48.5,regY:80.5,x:116.4,y:137.1},0).wait(2).to({regX:56.4,regY:152.5,x:112,y:209.3},0).wait(1).to({regX:48.5,regY:80.5,x:116.4,y:137},0).wait(1).to({x:116.3},0).wait(1).to({rotation:9.6,x:116.2},0).wait(1).to({rotation:9.5,x:116.1},0).wait(1).to({rotation:9.4,x:116},0).wait(1).to({rotation:9.2,x:115.8},0).wait(1).to({rotation:9.1,x:115.6},0).wait(1).to({rotation:8.9,x:115.4},0).wait(1).to({rotation:8.7,x:115.2,y:136.9},0).wait(1).to({rotation:8.5,x:114.9,y:137},0).wait(1).to({rotation:8.3,x:114.7,y:136.9},0).wait(1).to({rotation:8.1,x:114.4},0).wait(1).to({rotation:7.8,x:114.1},0).wait(1).to({rotation:7.6,x:113.8},0).wait(1).to({rotation:7.3,x:113.5},0).wait(1).to({rotation:7,x:113.2},0).wait(1).to({rotation:6.8,x:112.8},0).wait(1).to({rotation:6.5,x:112.5},0).wait(1).to({rotation:6.2,x:112.1},0).wait(1).to({rotation:5.9,x:111.7},0).wait(1).to({rotation:5.6,x:111.3},0).wait(1).to({rotation:5.2,x:111},0).wait(1).to({rotation:4.9,x:110.6},0).wait(1).to({rotation:4.6,x:110.2},0).wait(1).to({rotation:4.3,x:109.8},0).wait(1).to({rotation:3.9,x:109.4,y:137},0).wait(1).to({rotation:3.6,x:109},0).wait(1).to({rotation:3.3,x:108.6},0).wait(1).to({rotation:2.9,x:108.2},0).wait(1).to({rotation:2.6,x:107.8},0).wait(1).to({rotation:2.3,x:107.4,y:137.1},0).wait(1).to({rotation:1.9,x:106.9},0).wait(1).to({rotation:1.6,x:106.5},0).wait(1).to({rotation:1.2,x:106.2},0).wait(1).to({rotation:0.9,x:105.8,y:137.2},0).wait(1).to({rotation:0.6,x:105.3},0).wait(1).to({rotation:0.2,x:105,y:137.3},0).wait(1).to({rotation:-0.1,x:104.6},0).wait(1).to({rotation:-0.4,x:104.2,y:137.4},0).wait(1).to({rotation:-0.8,x:103.8},0).wait(1).to({rotation:-1.1,x:103.4},0).wait(1).to({rotation:-1.4,x:103,y:137.5},0).wait(1).to({rotation:-1.7,x:102.6},0).wait(1).to({rotation:-2,x:102.3,y:137.6},0).wait(1).to({rotation:-2.3,x:102,y:137.7},0).wait(1).to({rotation:-2.6,x:101.6},0).wait(1).to({rotation:-2.8,x:101.3,y:137.8},0).wait(1).to({rotation:-3.1,x:100.9},0).wait(1).to({rotation:-3.3,x:100.7,y:137.9},0).wait(1).to({rotation:-3.6,x:100.4},0).wait(1).to({rotation:-3.8,x:100.2},0).wait(1).to({rotation:-4,x:99.9,y:138},0).wait(1).to({rotation:-4.1,x:99.7},0).wait(1).to({regX:56.4,regY:152.5,rotation:-4.3,x:112.9,y:209.3},0).wait(1).to({regX:48.5,regY:80.5,rotation:-3.6,x:100.4,y:138},0).wait(1).to({rotation:-2.1,x:102.2,y:137.7},0).wait(1).to({rotation:-0.3,x:104.3,y:137.4},0).wait(1).to({rotation:1.3,x:106.3,y:137.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:2.2,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:1.5,x:106.3},0).wait(1).to({rotation:0.8,x:105.5,y:137.4},0).wait(1).to({rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:-0.4,x:104,y:137.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:-0.7,x:112.6,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-0.6,x:103.7,y:137.6},0).wait(1).to({rotation:-0.5,x:103.9},0).wait(1).to({rotation:-0.3,x:104.2,y:137.5},0).wait(1).to({rotation:-0.1,x:104.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(14).to({regX:48.5,regY:80.5,rotation:0.2,x:104.7,y:137.5},0).wait(1).to({rotation:0.6,x:105.2,y:137.4},0).wait(1).to({rotation:1.2,x:106,y:137.3},0).wait(1).to({rotation:2,x:106.9,y:137.2},0).wait(1).to({rotation:2.8,x:107.9,y:137},0).wait(1).to({rotation:3.7,x:109},0).wait(1).to({rotation:4.6,x:110.2,y:136.9},0).wait(1).to({rotation:5.5,x:111.3,y:136.8},0).wait(1).to({rotation:6.4,x:112.4,y:136.7},0).wait(1).to({rotation:7.3,x:113.4},0).wait(1).to({rotation:8,x:114.3,y:136.6},0).wait(1).to({rotation:8.5,x:114.9},0).wait(1).to({regX:56.5,regY:152.5,rotation:8.7,x:112.2,y:209.1},0).wait(1).to({regX:48.5,regY:80.5,rotation:8.6,x:115.1,y:136.7},0).wait(1).to({rotation:8.3,x:114.7},0).wait(1).to({rotation:7.9,x:114.2},0).wait(1).to({rotation:7.3,x:113.5,y:136.8},0).wait(1).to({rotation:6.7,x:112.7},0).wait(1).to({rotation:6,x:111.9},0).wait(1).to({rotation:5.2,x:110.9,y:136.9},0).wait(1).to({rotation:4.4,x:109.9,y:137},0).wait(1).to({rotation:3.6,x:108.9,y:137.1},0).wait(1).to({rotation:2.7,x:107.9,y:137.2},0).wait(1).to({rotation:1.9,x:106.8,y:137.3},0).wait(1).to({rotation:1.1,x:105.8,y:137.5},0).wait(1).to({rotation:0.2,x:104.8,y:137.6},0).wait(1).to({rotation:-0.6,x:103.9,y:137.8},0).wait(1).to({rotation:-1.3,x:103,y:137.9},0).wait(1).to({rotation:-1.9,x:102.1,y:138.1},0).wait(1).to({rotation:-2.5,x:101.5,y:138.2},0).wait(1).to({rotation:-2.8,x:101.1,y:138.3},0).wait(1).to({regX:56.5,regY:152.5,rotation:-3,x:112.7,y:209.9},0).wait(1).to({regX:48.5,regY:80.5,rotation:-2.9,x:101.1,y:138.3},0).wait(1).to({rotation:-2.7,x:101.3},0).wait(1).to({rotation:-2.4,x:101.7,y:138.2},0).wait(1).to({rotation:-2,x:102.1,y:138.1},0).wait(1).to({rotation:-1.5,x:102.7,y:138},0).wait(1).to({rotation:-1.1,x:103.3,y:137.9},0).wait(1).to({rotation:-0.6,x:103.9,y:137.8},0).wait(1).to({rotation:-0.1,x:104.4,y:137.7},0).wait(1).to({rotation:0.4,x:105,y:137.6},0).wait(1).to({rotation:0.8,x:105.6,y:137.5},0).wait(1).to({rotation:1.2,x:106},0).wait(1).to({rotation:1.4,x:106.3,y:137.4},0).wait(1).to({regX:56.6,regY:152.5,rotation:1.6,x:112.5,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.4,x:106.2,y:137.4},0).wait(1).to({rotation:1.1,x:105.8,y:137.5},0).wait(1).to({rotation:0.6,x:105.2,y:137.6},0).wait(1).to({rotation:0,x:104.5,y:137.7},0).wait(1).to({rotation:-0.6,x:103.8,y:137.8},0).wait(1).to({rotation:-1.2,x:103,y:137.9},0).wait(1).to({rotation:-1.8,x:102.2,y:138.1},0).wait(1).to({rotation:-2.4,x:101.6,y:138.2},0).wait(1).to({rotation:-2.8,x:101.1,y:138.3},0).wait(1).to({regX:56.5,regY:152.5,rotation:-3,x:112.7,y:209.9},0).wait(1).to({regX:48.5,regY:80.5,rotation:-2.8,x:101.2,y:138.3},0).wait(1).to({rotation:-2.3,x:101.7,y:138.2},0).wait(1).to({rotation:-1.6,x:102.6,y:138},0).wait(1).to({rotation:-0.8,x:103.6,y:137.8},0).wait(1).to({rotation:0.1,x:104.7,y:137.6},0).wait(1).to({rotation:1.1,x:106,y:137.4},0).wait(1).to({rotation:2.1,x:107.2,y:137.2},0).wait(1).to({rotation:3.2,x:108.5,y:137.1},0).wait(1).to({rotation:4.2,x:109.7,y:137},0).wait(1).to({rotation:5.1,x:110.8,y:136.8},0).wait(1).to({rotation:5.9,x:111.8,y:136.7},0).wait(1).to({rotation:6.5,x:112.6},0).wait(1).to({regX:56.5,regY:152.5,rotation:6.8,x:112.3,y:209.1},0).wait(1).to({regX:48.5,regY:80.5,rotation:6.5,x:112.5,y:136.7},0).wait(1).to({rotation:5.8,x:111.6},0).wait(1).to({rotation:4.8,x:110.5,y:136.8},0).wait(1).to({rotation:3.7,x:109.1,y:136.9},0).wait(1).to({rotation:2.5,x:107.6,y:137},0).wait(1).to({rotation:1.3,x:106.1,y:137.2},0).wait(1).to({rotation:0.1,x:104.6,y:137.4},0).wait(1).to({rotation:-1,x:103.3,y:137.7},0).wait(1).to({rotation:-1.8,x:102.3,y:137.8},0).wait(1).to({regX:56.5,regY:152.5,rotation:-2.2,x:112.7,y:209.6},0).wait(1).to({regX:48.5,regY:80.5,rotation:-2.1,x:102,y:137.9},0).wait(1).to({rotation:-1.8,x:102.4,y:137.8},0).wait(1).to({rotation:-1.4,x:102.9},0).wait(1).to({rotation:-0.9,x:103.4,y:137.7},0).wait(1).to({rotation:-0.5,x:103.9,y:137.6},0).wait(1).to({rotation:-0.2,x:104.3,y:137.5},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(25).to({regX:48.5,regY:80.5,rotation:0.2,x:104.8,y:137.5},0).wait(1).to({rotation:0.6,x:105.5,y:137.4},0).wait(1).to({rotation:1.1,x:106.2},0).wait(1).to({rotation:1.6,x:107,y:137.2},0).wait(1).to({regX:56.4,regY:152.5,rotation:1.8,x:113.2,y:209.4},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.4,x:107,y:137.3},0).wait(1).to({rotation:0.5,x:105.8},0).wait(1).to({rotation:-0.7,x:104.2,y:137.5},0).wait(1).to({rotation:-1.9,x:102.5,y:137.7},0).wait(1).to({rotation:-3.2,x:100.8,y:138},0).wait(1).to({rotation:-4.2,x:99.4,y:138.2},0).wait(1).to({regX:56.5,regY:152.5,rotation:-4.7,x:112.5,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:-4.2,x:99.2,y:138.2},0).wait(1).to({rotation:-3.1,x:100.6,y:138},0).wait(1).to({rotation:-1.8,x:102.3,y:137.7},0).wait(1).to({rotation:-0.4,x:104,y:137.5},0).wait(1).to({rotation:0.9,x:105.6,y:137.4},0).wait(1).to({regX:56.5,regY:152.5,rotation:1.5,x:112.4,y:209.5},0).wait(1).to({regX:48.5,regY:80.5,rotation:1.2,x:106,y:137.4},0).wait(1).to({rotation:0.8,x:105.4},0).wait(1).to({rotation:0.3,x:104.8,y:137.5},0).wait(1).to({regX:56.5,regY:152.5,rotation:0,x:112.5,y:209.5},0).wait(1));

	// early_l_arm_down
	this.instance_2 = new lib.early_l_arm_down_1();
	this.instance_2.setTransform(153.5,94,1,1,0,0,0,12.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:14.5,regY:77.5,rotation:-0.8,x:154.9,y:162},0).wait(1).to({rotation:-2.2,x:153.7,y:161},0).wait(1).to({rotation:-3.8,x:152.3,y:159.8},0).wait(1).to({regX:12.7,regY:9,rotation:-4.7,x:144,y:91},0).wait(1).to({regX:14.5,regY:77.5,rotation:-7.5,x:154.9,y:158},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.4,x:162.5,y:155.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-20.3,x:171.1,y:151},0).wait(1).to({regX:12.7,regY:9.1,scaleX:1,scaleY:1,rotation:-26.8,x:146.4,y:86.2},0).to({_off:true},1).wait(646).to({_off:false},0).wait(1).to({regX:14.5,regY:77.5,scaleX:1,scaleY:1,rotation:-23.3,x:175,y:148.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.3,x:167.4,y:153.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9,x:158.9,y:157.3},0).wait(1).to({regX:12.7,regY:9,rotation:-4.7,x:146.5,y:91},0).wait(1).to({regX:14.5,regY:77.5,rotation:-3.6,x:154.1,y:159.9},0).wait(1).to({rotation:-1.2,x:154.5,y:161.4},0).wait(1).to({rotation:1.2,x:154.9,y:162.9},0).wait(1).to({regX:12.5,regY:9,rotation:2.7,x:156.5,y:95.2},0).wait(1).to({regX:14.5,regY:77.5,rotation:2.2,x:155.3,y:163.5},0).wait(1).to({rotation:1.4,x:155.4,y:163.2},0).wait(1).to({rotation:0.5,x:155.5,y:162.8},0).wait(1).to({regX:12.5,regY:9,rotation:0,x:153.5,y:94},0).wait(1));

	// early_l_hand
	this.instance_3 = new lib.early_l_hand_1();
	this.instance_3.setTransform(157,234.5,1,1,0,0,0,10,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:9.5,regY:22.5,rotation:2.1,x:156,y:256.9},0).wait(1).to({rotation:6.2,x:155,y:255.5},0).wait(1).to({rotation:10.5,x:153.9,y:253.9},0).wait(1).to({regX:10,regY:-0.6,rotation:13,x:159,y:230.6},0).wait(1).to({regX:9.5,regY:22.5,rotation:8,x:162.2,y:250.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.6,x:181.4,y:244.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.1,x:204,y:236.7},0).wait(1).to({regX:10,regY:-0.5,scaleX:1,scaleY:1,rotation:-26.8,x:214.9,y:207.6},0).to({_off:true},1).wait(646).to({_off:false},0).wait(1).to({regX:9.5,regY:22.5,scaleX:1,scaleY:1,rotation:-20.5,x:214,y:232.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.9,x:192.2,y:241.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.4,x:169.1,y:249.1},0).wait(1).to({regX:10,regY:-0.6,rotation:13,x:161.5,y:230.6},0).wait(1).to({regX:9.5,regY:22.5,rotation:9.6,x:155.8,y:254.1},0).wait(1).to({rotation:2.8,x:156.1,y:256},0).wait(1).to({rotation:-4.4,x:156.3,y:257.7},0).wait(1).to({regX:10.1,regY:-0.5,rotation:-8.6,x:153.6,y:235.6},0).wait(1).to({regX:9.5,regY:22.5,rotation:-7.2,x:156.4,y:258.3},0).wait(1).to({rotation:-4.5,y:258},0).wait(1).to({rotation:-1.6,y:257.7},0).wait(1).to({regX:10,regY:-0.5,rotation:0,x:157,y:234.5},0).wait(1));

	// early_s_l_forearm
	this.instance_4 = new lib.early_s_l_forearm_1();
	this.instance_4.setTransform(179.1,150.9,0.998,0.998,79.3,0,0,9.5,38.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:58.7,x:215.4,y:155.6},0).wait(1).to({rotation:39.3,x:230.6,y:140.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:23.6,x:240.8,y:127.4},0).wait(1).to({regX:9.5,regY:38.5,rotation:16.3,x:219.5,y:128.1},0).wait(1).to({regX:32,regY:25,rotation:14.4,x:240.9,y:123.4},0).wait(1).to({rotation:10.3,x:232.1,y:127.6},0).wait(1).to({rotation:5,x:220.8,y:133.1},0).wait(1).to({rotation:-0.4,x:208.8,y:138.8},0).wait(1).to({rotation:-5.1,x:198.2,y:143.9},0).wait(1).to({regX:9.5,regY:38.5,rotation:-7.5,x:172.4,y:162.8},0).wait(1).to({regX:32,regY:25,rotation:-6.4,x:194.5,y:146.8},0).wait(1).to({rotation:-3.9,x:198.2,y:147.4},0).wait(1).to({rotation:-0.8,x:202.6,y:148.2},0).wait(1).to({rotation:2.4,x:207.1,y:149.1},0).wait(1).to({rotation:5.2,x:211,y:149.9},0).wait(1).to({regX:9.5,regY:38.5,rotation:6.6,x:189.1,y:161.1},0).wait(1).to({regX:32,regY:25,rotation:6.2,x:212.1,y:150.3},0).wait(1).to({rotation:5.4,x:210.2,y:150.5},0).wait(1).to({rotation:4.4,x:208,y:150.7},0).wait(1).to({rotation:3.5,x:205.8,y:150.9},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(7).to({regX:32,regY:25,rotation:3.6,x:204.3,y:151.6},0).wait(1).to({rotation:4.8,x:203.5,y:153},0).wait(1).to({rotation:6.3,x:202.4,y:155},0).wait(1).to({rotation:8,x:201.2,y:157},0).wait(1).to({rotation:9.7,x:200,y:159.1},0).wait(1).to({rotation:11.1,x:199,y:160.9},0).wait(1).to({regX:9.5,regY:38.6,rotation:11.8,x:173.8,y:170.4},0).wait(1).to({regX:32,regY:25,rotation:11.5,x:198.8,y:161.4},0).wait(1).to({rotation:10.9,x:199.4,y:160.7},0).wait(1).to({rotation:9.9,x:200.2,y:159.5},0).wait(1).to({rotation:8.6,x:201.4,y:158.1},0).wait(1).to({regX:9.6,regY:38.6,rotation:7,x:178.8,y:167.1},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:8.1,x:203.5,y:156},0).wait(1).to({rotation:9.2,x:204.5,y:155.4},0).wait(1).to({rotation:10.5,x:205.5,y:154.9},0).wait(1).to({regX:9.6,regY:38.6,rotation:11.8,x:182,y:163.1},0).wait(1).to({regX:32,regY:25,rotation:9.3,x:207.2,y:151.9},0).wait(1).to({rotation:6.8,x:207.8,y:149.3},0).wait(1).to({rotation:4.1,x:208.3,y:146.6},0).wait(1).to({regX:9.6,regY:38.6,rotation:1.3,x:186.2,y:157.1},0).wait(1).to({regX:32,regY:25,rotation:1.1,x:210.1,y:142},0).wait(1).to({rotation:0.8,x:211.4,y:140},0).wait(1).to({rotation:0.5,x:212.8,y:138},0).wait(1).to({rotation:0.3,x:214.2,y:135.9},0).wait(1).to({rotation:0,x:215.5,y:133.8},0).wait(1).to({rotation:-0.3,x:216.8,y:131.7},0).wait(1).to({regX:9.5,regY:38.6,rotation:-0.5,x:195.8,y:143.5},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:1.9,x:219.5,y:129.1},0).wait(1).to({rotation:4.2,x:220.8,y:128.6},0).wait(1).to({rotation:6.5,x:222.1,y:128.1},0).wait(1).to({regX:9.6,regY:38.5,rotation:8.6,x:199,y:137.7},0).wait(1).to({regX:32,regY:25,rotation:4.5,x:223,y:123.8},0).wait(1).to({rotation:0.7,x:222.7,y:120.1},0).wait(1).to({rotation:-2.8,x:222.4,y:116.8},0).wait(1).to({regX:9.6,regY:38.6,rotation:-6,x:201.2,y:129.7},0).wait(1).to({regX:32,regY:25,rotation:-5.7,x:222,y:112.7},0).wait(1).to({rotation:-5.4,x:221.9,y:111.7},0).wait(1).to({rotation:-5.3,y:110.9},0).wait(1).to({rotation:-5.1,y:110.4},0).wait(1).to({regX:9.7,regY:38.5,x:200.8,y:125.7},0).wait(1).to({regX:32,regY:25,rotation:-4.3,x:220.2,y:113.9},0).wait(1).to({rotation:-2.5,x:216.8,y:121.9},0).wait(1).to({rotation:-0.2,x:212.6,y:131.9},0).wait(1).to({rotation:2.2,x:208.1,y:142.3},0).wait(1).to({rotation:4.2,x:204.1,y:151.4},0).wait(1).to({regX:9.4,regY:38.6,rotation:5.2,x:178.7,y:167.4},0).wait(1).to({regX:32,regY:25,rotation:5.1,x:202.8,y:155.4},0).wait(1).to({rotation:4.7,x:203.6,y:154.2},0).wait(1).to({rotation:4.3,x:204.5,y:152.7},0).wait(1).to({rotation:3.9,x:205.6,y:151.2},0).wait(1).to({rotation:3.5,x:206.5,y:149.8},0).wait(1).to({regX:9.5,regY:38.7,rotation:3.3,x:183.7,y:161.4},0).wait(1).to({regX:32,regY:25,rotation:3.2,x:206.7,y:149.2},0).wait(1).to({x:206.1,y:149.6},0).wait(1).to({rotation:3.1,x:205.6,y:150.1},0).wait(1).to({x:205,y:150.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(15).to({regX:32,regY:25,rotation:4.5,x:208.8,y:147.4},0).wait(1).to({rotation:7.5,x:217.4,y:140.2},0).wait(1).to({rotation:11.2,x:227.6,y:131.6},0).wait(1).to({rotation:14.5,x:237,y:123.6},0).wait(1).to({regX:9.5,regY:38.5,rotation:16.3,x:216.5,y:126.1},0).wait(1).to({regX:32,regY:25,rotation:17.7,x:241.2,y:120.6},0).wait(1).to({rotation:21.3,x:239.4,y:123.6},0).wait(1).to({rotation:26.3,x:236.6,y:127.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:32.4,x:233.2,y:133},0).wait(1).to({rotation:39.1,x:228.9,y:138.7},0).wait(1).to({rotation:46.2,x:224,y:144.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:53.4,x:218.6,y:150.7},0).wait(1).to({rotation:60.5,x:213,y:156.4},0).wait(1).to({regX:9.5,regY:38.5,rotation:67.2,x:186.2,y:146.2},0).wait(1).to({regX:32,regY:25,rotation:60.2,x:210.4,y:156.9},0).wait(1).to({rotation:53.4,x:213.2,y:152.2},0).wait(1).to({rotation:46.8,x:215.5,y:147.5},0).wait(1).to({rotation:40.4,x:217.4,y:142.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:34.3,x:219,y:138.3},0).wait(1).to({rotation:28.5,x:220.2,y:134},0).wait(1).to({rotation:23,x:221.1,y:130},0).wait(1).to({rotation:17.8,x:221.6,y:126.2},0).wait(1).to({rotation:13.1,x:222,y:122.7},0).wait(1).to({rotation:8.7,x:222.2,y:119.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.8,y:116.9},0).wait(1).to({regX:9.5,regY:38.6,rotation:1.5,x:199.4,y:127.6},0).wait(1).to({regX:32,regY:25,rotation:0.5,x:222.2,y:113.9},0).wait(1).to({rotation:-0.4,y:113.3},0).wait(1).to({rotation:-1.2,y:112.7},0).wait(1).to({rotation:-2,x:222.1,y:112.2},0).wait(1).to({rotation:-2.7,x:222,y:111.7},0).wait(1).to({rotation:-3.3,x:222.1,y:111.3},0).wait(1).to({rotation:-3.8,x:222,y:111},0).wait(1).to({rotation:-4.3,y:110.7},0).wait(1).to({rotation:-4.6,y:110.5},0).wait(1).to({rotation:-4.9,x:221.9,y:110.3},0).wait(1).to({rotation:-5,y:110.2},0).wait(1).to({regX:9.7,regY:38.5,rotation:-5.1,x:200.8,y:125.7},0).wait(1).to({regX:32,regY:25,rotation:-4.6,x:220.9,y:112.4},0).wait(1).to({rotation:-3.4,x:218.7,y:117.5},0).wait(1).to({rotation:-1.9,x:215.9,y:124.3},0).wait(1).to({rotation:-0.2,x:212.6,y:131.9},0).wait(1).to({rotation:1.6,x:209.2,y:139.8},0).wait(1).to({rotation:3.3,x:206,y:147.2},0).wait(1).to({rotation:4.6,x:203.4,y:153.2},0).wait(1).to({regX:9.4,regY:38.6,rotation:5.2,x:178.7,y:167.4},0).wait(1).to({regX:32,regY:25,rotation:5.1,x:202.8,y:155.4},0).wait(1).to({rotation:4.7,x:203.6,y:154.2},0).wait(1).to({rotation:4.3,x:204.5,y:152.7},0).wait(1).to({rotation:3.9,x:205.6,y:151.2},0).wait(1).to({rotation:3.5,x:206.5,y:149.8},0).wait(1).to({regX:9.5,regY:38.7,rotation:3.3,x:183.7,y:161.4},0).wait(1).to({regX:32,regY:25,rotation:3.2,x:206.7,y:149.2},0).wait(1).to({x:206.1,y:149.6},0).wait(1).to({rotation:3.1,x:205.6,y:150.1},0).wait(1).to({x:205,y:150.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(15).to({regX:32,regY:25,rotation:3.7,x:206.5,y:149.4},0).wait(1).to({rotation:5.1,x:210.6,y:145.8},0).wait(1).to({rotation:7.1,x:216.2,y:141.2},0).wait(1).to({rotation:9.3,x:222.5,y:135.9},0).wait(1).to({rotation:11.6,x:228.9,y:130.5},0).wait(1).to({rotation:13.8,x:234.9,y:125.4},0).wait(1).to({rotation:15.5,x:239.7,y:121.3},0).wait(1).to({regX:9.5,regY:38.5,rotation:16.3,x:216.5,y:126.1},0).wait(1).to({regX:32,regY:25,rotation:17.8,x:241.3,y:120.7},0).wait(1).to({rotation:21.5,x:239.7,y:124},0).wait(1).to({rotation:26.8,x:237.2,y:128.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:33.1,x:234,y:134.4},0).wait(1).to({rotation:40.2,x:230,y:140.7},0).wait(1).to({rotation:47.6,x:225.4,y:147.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:55.2,x:220.2,y:153.8},0).wait(1).to({rotation:62.7,x:214.7,y:160},0).wait(1).to({regX:9.5,regY:38.5,rotation:69.7,x:188.8,y:149.4},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:70.1,x:209.4,y:166.4},0).wait(1).to({rotation:70.5,x:209.6,y:167.1},0).wait(1).to({rotation:70.9,x:209.9,y:167.7},0).wait(1).to({rotation:71.2,x:210.1,y:168.2},0).wait(1).to({rotation:71.6,x:210.3,y:168.9},0).wait(1).to({rotation:71.9,x:210.4,y:169.4},0).wait(1).to({rotation:72.2,x:210.6,y:169.9},0).wait(1).to({rotation:72.5,x:210.8,y:170.4},0).wait(1).to({rotation:72.7,x:210.9,y:170.8},0).wait(1).to({regX:9.5,regY:38.5,rotation:73,x:191.7,y:153.7},0).wait(1).to({regX:32,regY:25,x:211.2,y:171.3},0).wait(1).to({rotation:73.1,x:211.3,y:171.6},0).wait(1).to({rotation:73.2,x:211.4,y:171.7},0).wait(1).to({rotation:73.3,y:171.8},0).wait(2).to({x:211.5,y:172},0).wait(1).to({scaleX:1,scaleY:1,rotation:73.4},0).wait(1).to({regX:9.5,regY:38.6,x:192.2,y:154.4},0).wait(10).to({regX:32,regY:25,rotation:61,x:220.2,y:161.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:49.5,x:227.3,y:150.8},0).wait(1).to({rotation:39.1,x:232.8,y:141},0).wait(1).to({rotation:30.1,x:236.9,y:132.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:23,x:239.7,y:125.7},0).wait(1).to({rotation:18.1,x:241.3,y:121.1},0).wait(1).to({regX:9.5,regY:38.5,rotation:16.3,x:216.5,y:126.1},0).wait(1).to({regX:32,regY:25,rotation:15,x:238.5,y:122},0).wait(1).to({rotation:11.9,x:230.5,y:127.9},0).wait(1).to({rotation:8.2,x:221,y:135},0).wait(1).to({rotation:4.7,x:212,y:141.6},0).wait(1).to({rotation:2.2,x:205.4,y:146.4},0).wait(1).to({regX:9.5,regY:38.5,rotation:1.3,x:180.1,y:161.3},0).wait(1).to({regX:32,regY:25,rotation:1.5,x:203.2,y:148.6},0).wait(1).to({rotation:2,x:203.6,y:149.3},0).wait(1).to({rotation:2.5,x:204.1,y:150.1},0).wait(1).to({rotation:2.9,x:204.5,y:150.7},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(13).to({regY:38.5},0).wait(1).to({regX:32,regY:25,rotation:-0.6,x:205.6,y:146.1},0).wait(1).to({rotation:-4.3,x:206.4,y:141.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.2,x:207.2,y:136.1},0).wait(1).to({rotation:-12.2,x:207.9,y:130.8},0).wait(1).to({rotation:-16.4,x:208.5,y:125.5},0).wait(1).to({rotation:-20.7,x:209.2,y:120.1},0).wait(1).to({rotation:-25.2,x:209.6,y:114.7},0).wait(1).to({rotation:-29.8,x:210,y:109.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-34.6,x:210.4,y:103.6},0).wait(1).to({rotation:-39.5,x:210.7,y:98.1},0).wait(1).to({regX:9.5,regY:38.6,rotation:-44.6,x:204.5,y:118},0).wait(1).to({regX:32,regY:25,rotation:-49.8,x:209.6,y:87.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-55.2,x:208.3,y:81.7},0).wait(1).to({rotation:-60.7,x:206.8,y:76.3},0).wait(1).to({rotation:-66.4,x:205.4,y:71.2},0).wait(1).to({regX:9.5,regY:38.5,rotation:-72.2,x:209.9,y:91.7},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,x:203.9,y:66.2},0).wait(2).to({regX:9.5,regY:38.5,scaleX:1,scaleY:1,x:209.9,y:91.7},0).wait(1).to({regX:32,regY:25,rotation:-71.8,x:204,y:66.2},0).wait(1).to({rotation:-71.5,x:204.1,y:66.3},0).wait(1).to({rotation:-71.1,x:204.2,y:66.4},0).wait(1).to({rotation:-70.7,x:204.3,y:66.5},0).wait(1).to({regX:9.5,regY:38.5,rotation:-70.3,x:209.6,y:92.3},0).wait(1).to({regX:32,regY:25,rotation:-70.4,x:204.4,y:66.5},0).wait(1).to({rotation:-70.7,x:204.3},0).wait(1).to({rotation:-71.1,x:204.2,y:66.4},0).wait(1).to({rotation:-71.6,x:204.1,y:66.3},0).wait(1).to({regX:9.5,regY:38.5,rotation:-72.2,x:209.9,y:91.7},0).wait(1).to({regX:32,regY:25,rotation:-71.8,x:204,y:66.2},0).wait(1).to({rotation:-71.5,x:204.1,y:66.3},0).wait(1).to({rotation:-71.1,x:204.2,y:66.4},0).wait(1).to({rotation:-70.7,x:204.3,y:66.5},0).wait(1).to({regX:9.5,regY:38.5,rotation:-70.3,x:209.6,y:92.3},0).wait(1).to({regX:32,regY:25,rotation:-70.4,x:204.4,y:66.5},0).wait(1).to({rotation:-70.6,x:204.3},0).wait(1).to({rotation:-70.9,y:66.4},0).wait(1).to({rotation:-71.3,x:204.2,y:66.3},0).wait(1).to({rotation:-71.7,x:204},0).wait(1).to({regX:9.5,regY:38.5,rotation:-72.2,x:209.9,y:91.7},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,x:203.9,y:66.2},0).wait(3).to({regX:9.5,regY:38.5,scaleX:1,scaleY:1,x:209.9,y:91.7},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:-72.4,x:203.3,y:65.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-72.7,x:202.7,y:65.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-72.9,x:202.2,y:65.1},0).wait(1).to({regX:9.6,regY:38.5,rotation:-73.2,x:208.1,y:90.1},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:-66.3,x:203.8,y:69.5},0).wait(1).to({rotation:-59.3,x:206.1,y:74.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-52,x:208.5,y:80.7},0).wait(1).to({regX:9.5,regY:38.6,rotation:-44.6,x:204.5,y:112.5},0).wait(1).to({regX:32,regY:25,rotation:-37.9,x:210.4,y:95.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-31.1,x:209.7,y:104.2},0).wait(1).to({rotation:-24.1,x:208.9,y:113.5},0).wait(1).to({rotation:-17,x:207.8,y:123.4},0).wait(1).to({rotation:-9.7,x:206.3,y:133.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:204.5,y:144.6},0).wait(1).to({regX:9.4,regY:38.6,rotation:5.2,x:178.7,y:167.4},0).wait(1).to({regX:32,regY:25,rotation:5.1,x:202.8,y:155.4},0).wait(1).to({rotation:4.7,x:203.6,y:154.2},0).wait(1).to({rotation:4.3,x:204.5,y:152.7},0).wait(1).to({rotation:3.9,x:205.6,y:151.2},0).wait(1).to({rotation:3.5,x:206.5,y:149.8},0).wait(1).to({regX:9.5,regY:38.7,rotation:3.3,x:183.7,y:161.4},0).wait(1).to({regX:32,regY:25,rotation:3.2,x:206.7,y:149.2},0).wait(1).to({x:206.1,y:149.6},0).wait(1).to({rotation:3.1,x:205.6,y:150.1},0).wait(1).to({x:205,y:150.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(14).to({regX:32,regY:25,rotation:3.6,x:204.3,y:151.6},0).wait(1).to({rotation:4.8,x:203.5,y:153},0).wait(1).to({rotation:6.3,x:202.4,y:155},0).wait(1).to({rotation:8,x:201.2,y:157},0).wait(1).to({rotation:9.7,x:200,y:159.1},0).wait(1).to({rotation:11.1,x:199,y:160.9},0).wait(1).to({regX:9.5,regY:38.6,rotation:11.8,x:173.8,y:170.4},0).wait(1).to({regX:32,regY:25,rotation:11.7,x:198.7,y:161.5},0).wait(1).to({rotation:11.5,x:199,y:161},0).wait(1).to({rotation:11.2,x:199.6,y:160.1},0).wait(1).to({rotation:10.7,x:200.3,y:158.9},0).wait(1).to({rotation:10.2,x:201.2,y:157.4},0).wait(1).to({rotation:9.5,x:202.3,y:155.7},0).wait(1).to({rotation:8.7,x:203.5,y:153.7},0).wait(1).to({rotation:7.9,x:205,y:151.5},0).wait(1).to({rotation:6.9,x:206.5,y:148.9},0).wait(1).to({rotation:5.9,x:208.1,y:146.2},0).wait(1).to({rotation:4.7,x:210,y:143.3},0).wait(1).to({rotation:3.5,x:211.9,y:140.2},0).wait(1).to({rotation:2.3,x:213.8,y:136.8},0).wait(1).to({rotation:0.9,x:216,y:133.3},0).wait(1).to({regX:9.5,regY:38.6,scaleX:1,scaleY:1,rotation:-0.5,x:195.8,y:143.5},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:1.9,x:219.5,y:129.1},0).wait(1).to({rotation:4.2,x:220.8,y:128.6},0).wait(1).to({rotation:6.5,x:222.1,y:128.1},0).wait(1).to({regX:9.6,regY:38.5,rotation:8.6,x:199,y:137.7},0).wait(1).to({regX:32,regY:25,rotation:4.5,x:223,y:123.8},0).wait(1).to({rotation:0.7,x:222.7,y:120.1},0).wait(1).to({rotation:-2.8,x:222.4,y:116.8},0).wait(1).to({regX:9.6,regY:38.6,rotation:-6,x:201.2,y:129.7},0).wait(1).to({regX:32,regY:25,rotation:-5.7,x:222,y:112.7},0).wait(1).to({rotation:-5.4,x:221.9,y:111.7},0).wait(1).to({rotation:-5.3,y:110.9},0).wait(1).to({rotation:-5.1,y:110.4},0).wait(1).to({regX:9.7,regY:38.5,x:200.8,y:125.7},0).wait(1).to({regX:32,regY:25,rotation:-5.2,x:221.6,y:110},0).wait(1).to({rotation:-5.5,x:221.1,y:109.5},0).wait(1).to({rotation:-5.8,x:220.5,y:108.8},0).wait(1).to({rotation:-6.2,x:219.9,y:108.2},0).wait(1).to({rotation:-6.4,x:219.5,y:107.7},0).wait(1).to({regX:9.7,regY:38.5,rotation:-6.5,x:198.7,y:123.5},0).wait(1).to({regX:32,regY:25,rotation:-6.4,x:219.4,y:107.7},0).wait(1).to({rotation:-6.2,x:219.8,y:108.1},0).wait(1).to({rotation:-5.9,x:220.3,y:108.7},0).wait(1).to({rotation:-5.5,x:221,y:109.4},0).wait(1).to({rotation:-5.2,x:221.5,y:110},0).wait(1).to({regX:9.7,regY:38.5,rotation:-5.1,x:200.8,y:125.7},0).wait(1).to({regX:32,regY:25,x:221.8,y:110.6},0).wait(1).to({rotation:-5.3,y:111.3},0).wait(1).to({rotation:-5.6,x:221.9,y:112.4},0).wait(1).to({regX:9.6,regY:38.6,rotation:-6,x:201.2,y:129.7},0).wait(1).to({regX:32,regY:25,rotation:1.5,x:222.8,y:120.9},0).wait(1).to({rotation:6.7,x:223.1,y:125.7},0).wait(1).to({regX:9.6,regY:38.5,rotation:8.6,x:199,y:137.7},0).wait(1).to({regX:32,regY:25,rotation:6.1,x:221.8,y:128.3},0).wait(1).to({rotation:3.7,x:220.5,y:128.8},0).wait(1).to({rotation:1.5,x:219.2,y:129.3},0).wait(1).to({regX:9.5,regY:38.6,scaleX:1,scaleY:1,rotation:-0.5,x:195.8,y:143.5},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:-0.2,x:217.6,y:130.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:217.1,y:131.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.5,x:216.5,y:132.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.9,x:215.9,y:133.4},0).wait(1).to({rotation:1.2,x:215.4,y:134.3},0).wait(1).to({rotation:1.5,x:214.8,y:135.2},0).wait(1).to({rotation:1.9,x:214.2,y:136.1},0).wait(1).to({rotation:2.2,x:213.7,y:137},0).wait(1).to({regX:9.5,regY:38.6,rotation:2.5,x:190.1,y:150.5},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:1.6,x:214.2,y:134.3},0).wait(1).to({rotation:0.6,x:215.4,y:130.7},0).wait(1).to({rotation:-0.4,x:216.5,y:127.2},0).wait(1).to({rotation:-1.4,x:217.7,y:123.6},0).wait(1).to({rotation:-2.3,x:218.7,y:120.1},0).wait(1).to({rotation:-3.2,x:219.8,y:116.8},0).wait(1).to({rotation:-4.2,x:220.9,y:113.4},0).wait(1).to({regX:9.7,regY:38.5,rotation:-5.1,x:200.8,y:125.7},0).wait(1).to({regX:32,regY:25,rotation:-4.3,x:220.2,y:113.9},0).wait(1).to({rotation:-2.5,x:216.8,y:121.9},0).wait(1).to({rotation:-0.2,x:212.6,y:131.9},0).wait(1).to({rotation:2.2,x:208.1,y:142.3},0).wait(1).to({rotation:4.2,x:204.1,y:151.4},0).wait(1).to({regX:9.4,regY:38.6,rotation:5.2,x:178.7,y:167.4},0).wait(1).to({regX:32,regY:25,rotation:5.1,x:202.8,y:155.4},0).wait(1).to({rotation:4.7,x:203.6,y:154.2},0).wait(1).to({rotation:4.3,x:204.5,y:152.7},0).wait(1).to({rotation:3.9,x:205.6,y:151.2},0).wait(1).to({rotation:3.5,x:206.5,y:149.8},0).wait(1).to({regX:9.5,regY:38.7,rotation:3.3,x:183.7,y:161.4},0).wait(1).to({regX:32,regY:25,rotation:3.2,x:206.7,y:149.2},0).wait(1).to({x:206.1,y:149.6},0).wait(1).to({rotation:3.1,x:205.6,y:150.1},0).wait(1).to({x:205,y:150.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(14).to({regX:32,regY:25,rotation:3.2,x:205.3,y:151.3},0).wait(1).to({rotation:3.5,x:206.7,y:152.4},0).wait(1).to({rotation:3.9,x:208.6,y:153.8},0).wait(1).to({rotation:4.4,x:210.9,y:155.4},0).wait(1).to({rotation:5,x:213.3,y:157.2},0).wait(1).to({rotation:5.5,x:215.6,y:158.9},0).wait(1).to({rotation:6,x:217.7,y:160.5},0).wait(1).to({rotation:6.4,x:219.4,y:161.7},0).wait(1).to({regX:9.6,regY:38.6,rotation:6.6,x:196.4,y:173.2},0).wait(1).to({regX:32,regY:25,rotation:7.2,x:220.3,y:162.5},0).wait(1).to({rotation:8.6,x:220.7,y:163.1},0).wait(1).to({rotation:10.3,x:221.1,y:163.8},0).wait(1).to({rotation:12.2,x:221.5,y:164.6},0).wait(1).to({rotation:13.7,x:221.8,y:165.3},0).wait(1).to({regX:9.6,regY:38.6,rotation:14.5,x:196.9,y:173.2},0).wait(1).to({regX:32,regY:25,x:222,y:165.6},0).wait(1).to({rotation:14.4,x:221.9,y:165.5},0).wait(1).to({rotation:14.3,x:221.8,y:165.3},0).wait(1).to({rotation:14.2,x:221.7,y:165.1},0).wait(1).to({rotation:13.9,x:221.5,y:164.8},0).wait(1).to({rotation:13.7,x:221.4,y:164.6},0).wait(1).to({rotation:13.4,x:221.2,y:164.2},0).wait(1).to({rotation:13.1,x:221,y:163.8},0).wait(1).to({rotation:12.8,x:220.8,y:163.4},0).wait(1).to({rotation:12.5,x:220.6,y:162.9},0).wait(1).to({rotation:12.1,x:220.4,y:162.4},0).wait(1).to({rotation:11.7,x:220.1,y:161.9},0).wait(1).to({rotation:11.3,x:219.8,y:161.3},0).wait(1).to({rotation:10.8,x:219.5,y:160.8},0).wait(1).to({rotation:10.4,x:219.2,y:160.2},0).wait(1).to({rotation:9.9,x:218.9,y:159.6},0).wait(1).to({rotation:9.4,x:218.6,y:159},0).wait(1).to({rotation:9,x:218.2,y:158.4},0).wait(1).to({rotation:8.4,x:217.9,y:157.7},0).wait(1).to({rotation:7.9,x:217.6,y:157},0).wait(1).to({rotation:7.4,x:217.2,y:156.3},0).wait(1).to({rotation:6.9,x:216.8,y:155.7},0).wait(1).to({rotation:6.3,x:216.5,y:155},0).wait(1).to({regX:9.6,regY:38.6,rotation:5.8,x:192.4,y:165.5},0).wait(1).to({regX:32,regY:25,rotation:5.3,x:217.6,y:152.4},0).wait(1).to({rotation:4.8,x:219.2,y:150.4},0).wait(1).to({rotation:4.3,x:220.9,y:148.5},0).wait(1).to({regX:9.6,regY:38.5,scaleX:1,scaleY:1,rotation:3.8,x:199.2,y:158.8},0).wait(1).to({regX:32,regY:25,scaleX:1,scaleY:1,rotation:3.2,x:220,y:147.2},0).wait(1).to({rotation:2.5,x:217.6,y:147.6},0).wait(1).to({rotation:1.9,x:215.2,y:148.1},0).wait(1).to({regX:9.6,regY:38.6,rotation:1.3,x:190.1,y:161.6},0).wait(1).to({regX:32,regY:25,rotation:0.7,x:212.4,y:147.8},0).wait(1).to({rotation:0.2,x:212,y:147.1},0).wait(1).to({rotation:-0.4,x:211.6,y:146.4},0).wait(1).to({rotation:-0.9,x:211.2,y:145.7},0).wait(1).to({rotation:-1.4,x:210.8,y:145},0).wait(1).to({rotation:-1.9,x:210.3,y:144.3},0).wait(1).to({rotation:-2.5,x:209.9,y:143.7},0).wait(1).to({rotation:-3,x:209.6,y:143},0).wait(1).to({rotation:-3.5,x:209.2,y:142.4},0).wait(1).to({rotation:-3.9,x:208.8,y:141.8},0).wait(1).to({rotation:-4.4,x:208.5,y:141.2},0).wait(1).to({rotation:-4.8,x:208.1,y:140.6},0).wait(1).to({rotation:-5.3,x:207.8,y:140.1},0).wait(1).to({rotation:-5.7,x:207.5,y:139.6},0).wait(1).to({rotation:-6,x:207.2,y:139.1},0).wait(1).to({rotation:-6.4,x:206.9,y:138.7},0).wait(1).to({rotation:-6.7,x:206.6,y:138.2},0).wait(1).to({rotation:-7,x:206.4,y:137.9},0).wait(1).to({regX:9.6,regY:38.6,rotation:-7.3,x:185.7,y:153.9},0).wait(1).to({regX:32,regY:25,rotation:-5.9,x:205.8,y:139.5},0).wait(1).to({rotation:-3,x:205,y:143.7},0).wait(1).to({rotation:0.4,x:203.9,y:148.7},0).wait(1).to({rotation:3.6,x:202.8,y:153.4},0).wait(1).to({regX:9.4,regY:38.6,rotation:5.2,x:178.7,y:167.4},0).wait(1).to({regX:32,regY:25,rotation:5.1,x:202.8,y:155.4},0).wait(1).to({rotation:4.7,x:203.6,y:154.2},0).wait(1).to({rotation:4.3,x:204.5,y:152.7},0).wait(1).to({rotation:3.9,x:205.6,y:151.2},0).wait(1).to({rotation:3.5,x:206.5,y:149.8},0).wait(1).to({regX:9.5,regY:38.7,rotation:3.3,x:183.7,y:161.4},0).wait(1).to({regX:32,regY:25,rotation:3.2,x:206.7,y:149.2},0).wait(1).to({x:206.1,y:149.6},0).wait(1).to({rotation:3.1,x:205.6,y:150.1},0).wait(1).to({x:205,y:150.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(14).to({regX:32,regY:25,rotation:3.9,x:205.2,y:151.4},0).wait(1).to({rotation:6,x:206.3,y:152.6},0).wait(1).to({rotation:9.1,x:207.9,y:154.5},0).wait(1).to({rotation:12.9,x:209.8,y:156.7},0).wait(1).to({rotation:17.1,x:211.7,y:159.3},0).wait(1).to({rotation:21.6,x:213.6,y:162.1},0).wait(1).to({rotation:26.2,x:215.4,y:165.1},0).wait(1).to({rotation:30.9,x:217.1,y:167.9},0).wait(1).to({rotation:35.4,x:218.5,y:170.8},0).wait(1).to({rotation:39.6,x:219.7,y:173.4},0).wait(1).to({rotation:43.2,x:220.7,y:175.7},0).wait(1).to({rotation:45.9,x:221.3,y:177.3},0).wait(1).to({regX:9.6,regY:38.6,rotation:47,x:196.3,y:170.8},0).wait(1).to({regX:32,regY:25,rotation:46.7,x:221.7,y:177.6},0).wait(1).to({rotation:46,x:222,y:176.5},0).wait(1).to({rotation:44.9,x:222.5,y:174.9},0).wait(1).to({rotation:43.5,x:223.1,y:172.9},0).wait(1).to({rotation:41.8,x:223.7,y:170.6},0).wait(1).to({rotation:40,x:224.4,y:167.9},0).wait(1).to({rotation:38,x:225.2,y:165.1},0).wait(1).to({rotation:36,x:225.9,y:162.2},0).wait(1).to({rotation:33.9,x:226.6,y:159.1},0).wait(1).to({rotation:31.7,x:227.3,y:156},0).wait(1).to({rotation:29.5,x:228,y:152.9},0).wait(1).to({rotation:27.3,x:228.7,y:149.8},0).wait(1).to({rotation:25.2,x:229.2,y:146.7},0).wait(1).to({rotation:23.2,x:229.8,y:143.8},0).wait(1).to({rotation:21.4,x:230.2,y:141.2},0).wait(1).to({rotation:19.7,x:230.6,y:138.9},0).wait(1).to({rotation:18.3,x:230.9,y:136.9},0).wait(1).to({rotation:17.4,x:231.1,y:135.5},0).wait(1).to({regX:9.5,regY:38.6,rotation:17,x:205.8,y:141.4},0).wait(1).to({regX:32,regY:25,rotation:17.2,x:231.1,y:135.3},0).wait(1).to({rotation:17.8,x:231,y:136.2},0).wait(1).to({rotation:18.7,x:230.8,y:137.4},0).wait(1).to({rotation:19.7,x:230.6,y:138.9},0).wait(1).to({rotation:20.8,x:230.4,y:140.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:22.1,x:230.1,y:142.3},0).wait(1).to({rotation:23.4,x:229.7,y:144.1},0).wait(1).to({rotation:24.6,x:229.4,y:146},0).wait(1).to({rotation:25.9,x:229.1,y:147.7},0).wait(1).to({rotation:27,x:228.7,y:149.4},0).wait(1).to({rotation:28,x:228.4,y:150.8},0).wait(1).to({rotation:28.8,x:228.3,y:151.9},0).wait(1).to({regX:9.6,regY:38.5,rotation:29.1,x:202,y:153.3},0).wait(1).to({regX:32,regY:25,rotation:28.7,x:228.2,y:151.8},0).wait(1).to({rotation:27.8,x:228.5,y:150.5},0).wait(1).to({rotation:26.5,x:228.8,y:148.6},0).wait(1).to({rotation:25,x:229.3,y:146.5},0).wait(1).to({rotation:23.3,x:229.7,y:144.1},0).wait(1).to({rotation:21.7,x:230.1,y:141.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:20.1,x:230.5,y:139.4},0).wait(1).to({rotation:18.6,x:230.8,y:137.4},0).wait(1).to({rotation:17.5,x:231,y:135.7},0).wait(1).to({regX:9.5,regY:38.6,rotation:17,x:205.8,y:141.4},0).wait(1).to({regX:32,regY:25,rotation:17.5,x:231.1,y:135.8},0).wait(1).to({rotation:18.9,x:230.7,y:137.7},0).wait(1).to({rotation:20.9,x:230.1,y:140.4},0).wait(1).to({rotation:23.3,x:229.4,y:143.8},0).wait(1).to({rotation:25.9,x:228.5,y:147.5},0).wait(1).to({rotation:28.8,x:227.5,y:151.5},0).wait(1).to({rotation:31.8,x:226.3,y:155.7},0).wait(1).to({rotation:34.7,x:225.1,y:159.9},0).wait(1).to({rotation:37.6,x:223.9,y:163.9},0).wait(1).to({rotation:40.3,x:222.7,y:167.6},0).wait(1).to({rotation:42.6,x:221.7,y:170.9},0).wait(1).to({rotation:44.3,x:220.8,y:173.3},0).wait(1).to({regX:9.6,regY:38.6,rotation:45,x:195.1,y:168},0).wait(1).to({regX:32,regY:25,rotation:43.6,x:220.2,y:173.3},0).wait(1).to({rotation:39.9,x:219.6,y:171},0).wait(1).to({rotation:34.9,x:218.5,y:167.8},0).wait(1).to({rotation:29,x:217,y:164.1},0).wait(1).to({rotation:22.7,x:215,y:160},0).wait(1).to({rotation:16.2,x:212.7,y:155.9},0).wait(1).to({rotation:9.9,x:210.1,y:152.1},0).wait(1).to({rotation:4.2,x:207.5,y:148.7},0).wait(1).to({rotation:-0.2,x:205.4,y:146.1},0).wait(1).to({regX:9.6,regY:38.7,rotation:-2.1,x:182.5,y:159.5},0).wait(1).to({regX:32,regY:25,rotation:-1.8,x:204.4,y:145.3},0).wait(1).to({rotation:-1.1,y:146.1},0).wait(1).to({rotation:-0.2,x:204.5,y:147.1},0).wait(1).to({rotation:0.8,x:204.6,y:148.2},0).wait(1).to({rotation:1.8,y:149.4},0).wait(1).to({rotation:2.6,y:150.3},0).wait(1).to({regX:9.5,regY:38.6,rotation:3,x:181.5,y:163.3},0).wait(25).to({regX:32,regY:25,rotation:4.5,x:208.8,y:147.4},0).wait(1).to({rotation:7.5,x:217.4,y:140.2},0).wait(1).to({rotation:11.2,x:227.6,y:131.6},0).wait(1).to({rotation:14.5,x:237,y:123.6},0).wait(1).to({regX:9.5,regY:38.5,rotation:16.3,x:216.5,y:126.1},0).wait(1).to({regX:32,regY:25,rotation:26.3,x:236.7,y:127.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:46.2,x:224.1,y:144.7},0).wait(1).to({rotation:67.2,x:207.4,y:161.6},0).wait(1).to({regX:9.5,regY:38.4,scaleX:1,scaleY:1,rotation:79.3,x:179.1,y:150.9},0).to({_off:true},1).wait(13));

	// ey_s_pointer
	this.instance_5 = new lib.ey_s_pointer();
	this.instance_5.setTransform(212.3,189.4,0.998,0.998,79.3,0,0,233.2,133.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:55.4,x:290.3,y:153.7},0).wait(1).to({rotation:31.8,x:297.5,y:110},0).wait(1).to({regX:233.1,regY:133.4,rotation:9.8,x:265.2,y:127},0).to({regX:233.2,scaleX:1,scaleY:1,rotation:-4.8,x:267.3,y:119.4},1).to({scaleX:1,scaleY:1,rotation:-18.3,x:265.3,y:120},1).to({scaleX:1,scaleY:1,rotation:-30.2,x:259.7,y:121.3},1).wait(1).to({regX:255.5,regY:76,rotation:-24.3,x:249.2,y:61.2},0).wait(1).to({rotation:-12.8,x:247.2,y:64.5},0).wait(1).to({rotation:-0.5,x:244.8,y:70.9},0).wait(1).to({regX:233.3,regY:133.4,rotation:6.5,x:214.2,y:130.1},0).wait(1).to({regX:255.5,regY:76,x:244.6,y:76.4},0).wait(1).to({x:248.7,y:78},0).wait(1).to({x:253.9,y:80},0).wait(1).to({x:259.2,y:82.2},0).wait(1).to({x:263.9,y:84},0).wait(1).to({regX:233.2,regY:133.4,rotation:6.6,x:237.6,y:139.3},0).wait(1).to({regX:255.5,regY:76,rotation:6.2,x:265,y:84.6},0).wait(1).to({rotation:5.4,x:262.1,y:84},0).wait(1).to({rotation:4.4,x:258.7,y:83.4},0).wait(1).to({rotation:3.5,x:255.5,y:82.7},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(7).to({regX:255.5,regY:76,rotation:3.6,x:254.1,y:83.5},0).wait(1).to({rotation:4.8,x:254.6,y:86.1},0).wait(1).to({rotation:6.3,x:255.3,y:89.5},0).wait(1).to({rotation:8,x:256.1,y:93.1},0).wait(1).to({rotation:9.7,x:256.7,y:96.8},0).wait(1).to({rotation:11.1,x:257.2,y:99.9},0).wait(1).to({regX:233.2,regY:133.4,rotation:11.8,x:224,y:153.1},0).wait(1).to({regX:255.5,regY:76,rotation:11.6,x:257.5,y:101},0).wait(1).to({rotation:11.1,y:99.7},0).wait(1).to({rotation:10.4,x:257.6,y:97.8},0).wait(1).to({rotation:9.4,y:95.3},0).wait(1).to({regX:233.3,regY:133.6,scaleX:1,scaleY:1,rotation:8.3,x:227.3,y:145.9},0).wait(1).to({regX:255.5,regY:76,rotation:11.5,x:261.6,y:94},0).wait(1).to({rotation:15,x:265.8,y:96.3},0).wait(1).to({rotation:18.9,x:270.4,y:98.9},0).wait(1).to({regX:233.2,regY:133.6,rotation:23.1,x:232,y:146.1},0).wait(1).to({regX:255.5,regY:76,rotation:18.1,x:271.1,y:94.9},0).wait(1).to({rotation:13,x:266.7,y:88},0).wait(1).to({rotation:7.6,x:261.9,y:81.2},0).wait(1).to({regX:233.2,regY:133.6,rotation:2.1,x:232.2,y:131.4},0).wait(1).to({regX:255.5,regY:76,rotation:3.4,x:259,y:73.2},0).wait(1).to({rotation:4.6,x:261.5,y:71.7},0).wait(1).to({rotation:5.9,x:264,y:70.1},0).wait(1).to({rotation:7.2,x:266.5,y:68.5},0).wait(1).to({rotation:8.5,x:269,y:67},0).wait(1).to({rotation:9.7,x:271.5,y:65.6},0).wait(1).to({regX:233.3,regY:133.7,rotation:11,x:241.1,y:116.3},0).wait(1).to({regX:255.5,regY:76,rotation:14.4,x:278.7,y:66.4},0).wait(1).to({rotation:17.7,x:283.4,y:69},0).wait(1).to({rotation:20.9,x:287.8,y:71.6},0).wait(1).to({regX:233.1,regY:133.8,rotation:24,x:248.1,y:117.8},0).wait(1).to({regX:255.5,regY:76,rotation:19.1,x:286.9,y:65.1},0).wait(1).to({rotation:14.4,x:281.8,y:56.7},0).wait(1).to({rotation:10.2,x:276.9,y:49.4},0).wait(1).to({regX:233.1,regY:133.7,rotation:6.3,x:243.7,y:97.9},0).wait(1).to({regX:255.5,regY:76,rotation:8.4,x:274.3,y:43.1},0).wait(1).to({rotation:10.2,x:275.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.6,x:277.2,y:43.2},0).wait(1).to({rotation:12.5,x:278.1,y:43.3},0).wait(1).to({regX:233.2,regY:133.4,rotation:12.8,x:243.7,y:94.6},0).wait(1).to({regX:255.5,regY:76,rotation:11.3,x:275.5,y:46.6},0).wait(1).to({rotation:7.9,x:269.4,y:53.5},0).wait(1).to({rotation:3.7,x:261.6,y:62.4},0).wait(1).to({rotation:-0.7,x:253.4,y:72},0).wait(1).to({rotation:-4.6,x:246.2,y:80.5},0).wait(1).to({regX:233.3,regY:133.4,rotation:-6.5,x:226.8,y:144.5},0).wait(1).to({regX:255.5,regY:76,rotation:-5.7,x:243.5,y:84.5},0).wait(1).to({rotation:-4,x:246,y:83.7},0).wait(1).to({rotation:-1.9,x:249,y:82.7},0).wait(1).to({rotation:0.4,x:252.2,y:81.8},0).wait(1).to({rotation:2.3,x:254.8,y:81.1},0).wait(1).to({regX:233.3,regY:133.6,rotation:3.3,x:230.8,y:136.9},0).wait(1).to({regX:255.5,regY:76,rotation:3.2,x:256,y:80.8},0).wait(1).to({x:255.4,y:81.2},0).wait(1).to({rotation:3.1,x:254.7,y:81.7},0).wait(1).to({x:254.1,y:82.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(15).to({regX:255.5,regY:76,rotation:2.2,x:256.8,y:79.8},0).wait(1).to({rotation:0.4,x:263.3,y:74.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:270.9,y:67.6},0).wait(1).to({rotation:-3.7,x:277.9,y:61.5},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:-4.8,x:264.3,y:117.4},0).wait(1).to({regX:255.5,regY:76,rotation:-2.9,x:282.4,y:60.7},0).wait(1).to({rotation:1.8,x:284.2,y:66.6},0).wait(1).to({rotation:8.6,x:286.5,y:75.5},0).wait(1).to({rotation:16.6,x:288.7,y:87.3},0).wait(1).to({rotation:25.6,x:290.3,y:101.4},0).wait(1).to({rotation:35.1,x:290.7,y:117.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:44.8,x:289.7,y:134.8},0).wait(1).to({rotation:54.3,x:287.2,y:152.6},0).wait(1).to({regX:233.1,regY:133.4,rotation:63.2,x:222.2,y:175.5},0).wait(1).to({regX:255.5,regY:76,rotation:58.3,x:285.6,y:156.6},0).wait(1).to({rotation:53.5,x:287.5,y:144},0).wait(1).to({rotation:48.9,x:288.9,y:131.9},0).wait(1).to({rotation:44.5,x:289.9,y:120.4},0).wait(1).to({rotation:40.2,x:290.5,y:109.5},0).wait(1).to({rotation:36.2,x:290.8,y:99.2},0).wait(1).to({regX:233.1,regY:133.4,rotation:32.3,x:241.4,y:126},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:28.7,x:288.9,y:80.8},0).wait(1).to({rotation:25.4,x:286.9,y:72.7},0).wait(1).to({rotation:22.4,x:285,y:65.6},0).wait(1).to({rotation:19.6,x:283.2,y:59.3},0).wait(1).to({regX:233.1,regY:133.4,rotation:17.3,x:243.2,y:101.9},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:16.6,x:281.1,y:52.3},0).wait(1).to({rotation:16,x:280.6,y:50.9},0).wait(1).to({rotation:15.5,x:280.2,y:49.6},0).wait(1).to({rotation:14.9,x:279.8,y:48.4},0).wait(1).to({rotation:14.5,x:279.5,y:47.3},0).wait(1).to({rotation:14.1,x:279.2,y:46.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.7,x:278.9,y:45.6},0).wait(1).to({rotation:13.4,x:278.7,y:44.9},0).wait(1).to({rotation:13.2,x:278.5,y:44.3},0).wait(1).to({rotation:13,x:278.4,y:43.9},0).wait(1).to({rotation:12.9,x:278.3,y:43.7},0).wait(1).to({regX:233.2,regY:133.4,rotation:12.8,x:243.7,y:94.6},0).wait(1).to({regX:255.5,regY:76,rotation:11.9,x:276.6,y:45.4},0).wait(1).to({rotation:9.8,x:272.7,y:49.8},0).wait(1).to({rotation:6.9,x:267.5,y:55.6},0).wait(1).to({rotation:3.7,x:261.6,y:62.4},0).wait(1).to({rotation:0.4,x:255.4,y:69.6},0).wait(1).to({rotation:-2.8,x:249.6,y:76.4},0).wait(1).to({rotation:-5.3,x:244.7,y:82.2},0).wait(1).to({regX:233.3,regY:133.4,rotation:-6.5,x:226.8,y:144.5},0).wait(1).to({regX:255.5,regY:76,rotation:-5.7,x:243.5,y:84.5},0).wait(1).to({rotation:-4,x:246,y:83.7},0).wait(1).to({rotation:-1.9,x:249,y:82.7},0).wait(1).to({rotation:0.4,x:252.2,y:81.8},0).wait(1).to({rotation:2.3,x:254.8,y:81.1},0).wait(1).to({regX:233.3,regY:133.6,rotation:3.3,x:230.8,y:136.9},0).wait(1).to({regX:255.5,regY:76,rotation:3.2,x:256,y:80.8},0).wait(1).to({x:255.4,y:81.2},0).wait(1).to({rotation:3.1,x:254.7,y:81.7},0).wait(1).to({x:254.1,y:82.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(15).to({regX:255.5,regY:76,rotation:2.7,x:255.1,y:81.3},0).wait(1).to({rotation:1.8,x:258.2,y:78.6},0).wait(1).to({rotation:0.6,x:262.4,y:74.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.7,x:267,y:70.9},0).wait(1).to({rotation:-2,x:271.8,y:66.8},0).wait(1).to({rotation:-3.3,x:276.3,y:62.9},0).wait(1).to({rotation:-4.3,x:279.9,y:59.8},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:-4.8,x:264.3,y:117.4},0).wait(1).to({regX:255.5,regY:76,rotation:-2.8,x:282.5,y:60.8},0).wait(1).to({rotation:2.1,x:284.6,y:67.1},0).wait(1).to({rotation:9,x:287.2,y:76.7},0).wait(1).to({rotation:17.4,x:289.8,y:89.2},0).wait(1).to({rotation:26.7,x:291.7,y:104.4},0).wait(1).to({rotation:36.6,x:292.4,y:121.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:46.6,x:291.4,y:140.1},0).wait(1).to({rotation:56.4,x:288.9,y:159},0).wait(1).to({regX:233.2,regY:133.3,rotation:65.7,x:223.6,y:180.3},0).wait(1).to({regX:255.5,regY:76,rotation:66,x:284.9,y:177.9},0).wait(1).to({rotation:66.2,x:285.1,y:178.7},0).wait(1).to({rotation:66.5,x:285.2,y:179.6},0).wait(1).to({rotation:66.8,y:180.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:67.1,x:285.4,y:181.3},0).wait(1).to({rotation:67.4,x:285.5,y:182.1},0).wait(1).to({rotation:67.7,x:285.6,y:182.9},0).wait(1).to({rotation:67.9,y:183.7},0).wait(1).to({rotation:68.2,x:285.7,y:184.5},0).wait(1).to({regX:233.2,regY:133.4,rotation:68.4,x:224.6,y:185.5},0).wait(1).to({regX:255.5,regY:76,rotation:68.6,x:286},0).wait(1).to({rotation:68.7,y:185.9},0).wait(1).to({rotation:68.8,x:286.1,y:186.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:68.9,y:186.6},0).wait(1).to({rotation:69,y:187},0).wait(1).to({rotation:69.1,x:286.2,y:187.4},0).wait(1).to({rotation:69.2,y:187.7},0).wait(1).to({regX:233.1,regY:133.4,rotation:69.4,x:224.9,y:187.4},0).wait(10).to({regX:255.5,regY:76,rotation:57.6,x:291.4,y:164.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:46.2,x:293.9,y:142.1},0).wait(1).to({rotation:35.1,x:294.3,y:121.1},0).wait(1).to({rotation:24.4,x:292.8,y:102.1},0).wait(1).to({rotation:14.2,x:289.9,y:85.3},0).wait(1).to({rotation:4.4,x:286.1,y:70.7},0).wait(1).to({regX:233.2,regY:133.4,rotation:-4.8,x:264.3,y:117.4},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:-4.2,x:278.8,y:60.2},0).wait(1).to({rotation:-3,x:272.3,y:64.2},0).wait(1).to({rotation:-1.5,x:264.5,y:69.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:257.3,y:73.8},0).wait(1).to({rotation:0.9,x:252.1,y:77.1},0).wait(1).to({regX:233.2,regY:133.5,rotation:1.3,x:226.4,y:135.2},0).wait(1).to({regX:255.5,regY:76,rotation:1.5,x:250.5,y:78.7},0).wait(1).to({rotation:2,x:251.5,y:79.9},0).wait(1).to({rotation:2.5,x:252.7,y:81.1},0).wait(1).to({rotation:2.9,x:253.5,y:82},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(13).to({y:138.6},0).wait(1).to({regX:255.5,regY:76,rotation:-1.6,x:248.2,y:75.8},0).wait(1).to({rotation:-6.3,x:242.2,y:69.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-11.3,x:235.9,y:63.2},0).wait(1).to({rotation:-16.4,x:229.2,y:57.3},0).wait(1).to({rotation:-21.7,x:222.2,y:51.6},0).wait(1).to({rotation:-27.2,x:215,y:46.3},0).wait(1).to({rotation:-32.9,x:207.6,y:41.3},0).wait(1).to({rotation:-38.8,x:200.1,y:36.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-44.9,x:192.5,y:32.9},0).wait(1).to({rotation:-51.2,x:185.1,y:29.6},0).wait(1).to({regX:233.2,regY:133.4,rotation:-57.7,x:214.2,y:76.2},0).wait(1).to({regX:255.5,regY:76,rotation:-64.3,x:169.1,y:24.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-71.2,x:160.9,y:22.7},0).wait(1).to({rotation:-78.2,x:153.1,y:21.5},0).wait(1).to({rotation:-85.5,x:146,y:20.9},0).wait(1).to({regX:233.2,regY:133.6,scaleX:1,scaleY:1,rotation:-92.9,x:198.1,y:39.9},0).wait(1).to({regX:255.5,regY:76,x:139.5,y:20.6},0).wait(2).to({regX:233.2,regY:133.6,x:198.1,y:39.9},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:-91.9,x:140.1,y:19.7},0).wait(1).to({rotation:-91,x:140.8,y:18.9},0).wait(1).to({rotation:-90,x:141.4,y:18},0).wait(1).to({rotation:-88.9,x:142.1,y:17},0).wait(1).to({regX:233.2,regY:133.6,rotation:-87.9,x:199.5,y:40.6},0).wait(1).to({regX:255.5,regY:76,rotation:-88.4,x:142.4,y:16.6},0).wait(1).to({rotation:-89.1,x:142,y:17.3},0).wait(1).to({rotation:-90.2,x:141.3,y:18.2},0).wait(1).to({rotation:-91.4,x:140.4,y:19.3},0).wait(1).to({regX:233.2,regY:133.6,scaleX:1,scaleY:1,rotation:-92.9,x:198.1,y:39.9},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:-91.9,x:140.1,y:19.7},0).wait(1).to({rotation:-91,x:140.8,y:18.9},0).wait(1).to({rotation:-90,x:141.4,y:18},0).wait(1).to({rotation:-88.9,x:142.1,y:17},0).wait(1).to({regX:233.2,regY:133.6,rotation:-87.9,x:199.5,y:40.6},0).wait(1).to({regX:255.5,regY:76,rotation:-88.3,x:142.5,y:16.5},0).wait(1).to({rotation:-88.9,x:142.2,y:17},0).wait(1).to({rotation:-89.6,x:141.6,y:17.7},0).wait(1).to({rotation:-90.5,x:141,y:18.6},0).wait(1).to({rotation:-91.6,x:140.3,y:19.5},0).wait(1).to({regX:233.2,regY:133.6,scaleX:1,scaleY:1,rotation:-92.9,x:198.1,y:39.9},0).wait(1).to({regX:255.5,regY:76,x:139.5,y:20.6},0).wait(3).to({regX:233.2,regY:133.6,x:198.1,y:39.9},0).wait(1).to({regX:255.5,regY:76,rotation:-93.1,x:138.7,y:20.5},0).wait(1).to({rotation:-93.4,x:138,y:20.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-93.6,x:137.1,y:20.3},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:-93.9,x:195.2,y:38.6},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:-85.2,x:144.5,y:19.2},0).wait(1).to({rotation:-76.2,x:154.1,y:18.9},0).wait(1).to({rotation:-67.1,x:165.2,y:19.5},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:-57.7,x:214.2,y:70.7},0).wait(1).to({regX:255.5,regY:76,rotation:-50.8,x:185.6,y:27.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-43.8,x:194.1,y:33.9},0).wait(1).to({rotation:-36.6,x:203.1,y:41.7},0).wait(1).to({rotation:-29.3,x:212.6,y:50.7},0).wait(1).to({rotation:-21.8,x:222.4,y:60.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.2,x:232.4,y:72.2},0).wait(1).to({regX:233.3,regY:133.4,rotation:-6.5,x:226.8,y:144.5},0).wait(1).to({regX:255.5,regY:76,rotation:-5.7,x:243.5,y:84.5},0).wait(1).to({rotation:-4,x:246,y:83.7},0).wait(1).to({rotation:-1.9,x:249,y:82.7},0).wait(1).to({rotation:0.4,x:252.2,y:81.8},0).wait(1).to({rotation:2.3,x:254.8,y:81.1},0).wait(1).to({regX:233.3,regY:133.6,rotation:3.3,x:230.8,y:136.9},0).wait(1).to({regX:255.5,regY:76,rotation:3.2,x:256,y:80.8},0).wait(1).to({x:255.4,y:81.2},0).wait(1).to({rotation:3.1,x:254.7,y:81.7},0).wait(1).to({x:254.1,y:82.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(14).to({regX:255.5,regY:76,rotation:3.6,x:254.1,y:83.5},0).wait(1).to({rotation:4.8,x:254.6,y:86.1},0).wait(1).to({rotation:6.3,x:255.3,y:89.5},0).wait(1).to({rotation:8,x:256.1,y:93.1},0).wait(1).to({rotation:9.7,x:256.7,y:96.8},0).wait(1).to({rotation:11.1,x:257.2,y:99.9},0).wait(1).to({regX:233.2,regY:133.4,rotation:11.8,x:224,y:153.1},0).wait(1).to({regX:255.5,regY:76,x:257.6,y:101.3},0).wait(1).to({rotation:11.7,x:257.9,y:100.6},0).wait(1).to({x:258.3,y:99.6},0).wait(1).to({x:258.9,y:98.3},0).wait(1).to({x:259.7,y:96.6},0).wait(1).to({rotation:11.6,x:260.6,y:94.6},0).wait(1).to({x:261.6,y:92.2},0).wait(1).to({rotation:11.5,x:262.7,y:89.7},0).wait(1).to({scaleX:1,scaleY:1,x:264,y:86.8},0).wait(1).to({rotation:11.4,x:265.4,y:83.6},0).wait(1).to({rotation:11.3,x:266.8,y:80.2},0).wait(1).to({x:268.5,y:76.5},0).wait(1).to({rotation:11.2,x:270.1,y:72.6},0).wait(1).to({rotation:11.1,x:272,y:68.5},0).wait(1).to({regX:233.3,regY:133.7,rotation:11,x:241.1,y:116.3},0).wait(1).to({regX:255.5,regY:76,rotation:14.4,x:278.7,y:66.4},0).wait(1).to({rotation:17.7,x:283.4,y:69},0).wait(1).to({rotation:20.9,x:287.8,y:71.6},0).wait(1).to({regX:233.1,regY:133.8,rotation:24,x:248.1,y:117.8},0).wait(1).to({regX:255.5,regY:76,rotation:19.1,x:286.9,y:65.1},0).wait(1).to({rotation:14.4,x:281.8,y:56.7},0).wait(1).to({rotation:10.2,x:276.9,y:49.4},0).wait(1).to({regX:233.1,regY:133.7,rotation:6.3,x:243.7,y:97.9},0).wait(1).to({regX:255.5,regY:76,rotation:8.4,x:274.3,y:43.1},0).wait(1).to({rotation:10.2,x:275.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.6,x:277.2,y:43.2},0).wait(1).to({rotation:12.5,x:278.1,y:43.3},0).wait(1).to({regX:233.2,regY:133.4,rotation:12.8,x:243.7,y:94.6},0).wait(1).to({regX:255.5,regY:76,rotation:12.7,x:277.8,y:43.2},0).wait(1).to({rotation:12.4,x:277,y:42.4},0).wait(1).to({rotation:12,x:276,y:41.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.7,x:274.9,y:40.4},0).wait(1).to({rotation:11.4,x:274.2,y:39.7},0).wait(1).to({regX:233.3,regY:133.4,rotation:11.3,x:240.9,y:91.2},0).wait(1).to({regX:255.5,regY:76,rotation:11.4,x:274.1,y:39.6},0).wait(1).to({rotation:11.6,x:274.8,y:40.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:12,x:275.7,y:41.2},0).wait(1).to({rotation:12.3,x:276.8,y:42.1},0).wait(1).to({rotation:12.7,x:277.7,y:43.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:12.8,x:243.7,y:94.6},0).wait(1).to({regX:255.5,regY:76,rotation:12.4,x:277.8,y:43.6},0).wait(1).to({rotation:11,x:276.5,y:43.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:9,x:274.6},0).wait(1).to({regX:233.1,regY:133.7,rotation:6.3,x:243.7,y:97.9},0).wait(1).to({regX:255.5,regY:76,rotation:15.4,x:282.8,y:58.5},0).wait(1).to({rotation:21.7,x:289.5,y:69.8},0).wait(1).to({regX:233.1,regY:133.8,rotation:24,x:248.1,y:117.8},0).wait(1).to({regX:255.5,regY:76,rotation:20.4,x:287.2,y:71.2},0).wait(1).to({rotation:17,x:282.5,y:68.4},0).wait(1).to({rotation:13.8,x:278.1,y:66},0).wait(1).to({regX:233.3,regY:133.7,rotation:11,x:241.1,y:116.3},0).wait(1).to({regX:255.5,regY:76,x:273.4,y:65.1},0).wait(1).to({x:272.9,y:66.2},0).wait(1).to({x:272.4,y:67.2},0).wait(1).to({x:271.9,y:68.3},0).wait(1).to({scaleX:1,scaleY:1,x:271.4,y:69.4},0).wait(1).to({x:270.8,y:70.4},0).wait(1).to({rotation:11.1,x:270.4,y:71.5},0).wait(1).to({x:269.9,y:72.5},0).wait(1).to({regX:233.2,regY:133.7,x:236.6,y:125.9},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:11.3,x:270.6,y:69.7},0).wait(1).to({rotation:11.5,x:271.7,y:65.8},0).wait(1).to({rotation:11.7,x:272.9,y:61.9},0).wait(1).to({rotation:12,x:274,y:58.1},0).wait(1).to({rotation:12.2,x:275,y:54.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.4,x:276.1,y:50.6},0).wait(1).to({rotation:12.6,x:277.2,y:46.9},0).wait(1).to({regX:233.2,regY:133.4,rotation:12.8,x:243.7,y:94.6},0).wait(1).to({regX:255.5,regY:76,rotation:11.3,x:275.5,y:46.6},0).wait(1).to({rotation:7.9,x:269.4,y:53.5},0).wait(1).to({rotation:3.7,x:261.6,y:62.4},0).wait(1).to({rotation:-0.7,x:253.4,y:72},0).wait(1).to({rotation:-4.6,x:246.2,y:80.5},0).wait(1).to({regX:233.3,regY:133.4,rotation:-6.5,x:226.8,y:144.5},0).wait(1).to({regX:255.5,regY:76,rotation:-5.7,x:243.5,y:84.5},0).wait(1).to({rotation:-4,x:246,y:83.7},0).wait(1).to({rotation:-1.9,x:249,y:82.7},0).wait(1).to({rotation:0.4,x:252.2,y:81.8},0).wait(1).to({rotation:2.3,x:254.8,y:81.1},0).wait(1).to({regX:233.3,regY:133.6,rotation:3.3,x:230.8,y:136.9},0).wait(1).to({regX:255.5,regY:76,rotation:3.2,x:256,y:80.8},0).wait(1).to({x:255.4,y:81.2},0).wait(1).to({rotation:3.1,x:254.7,y:81.7},0).wait(1).to({x:254.1,y:82.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(14).to({regX:255.5,regY:76,rotation:3.2,x:254.6,y:83},0).wait(1).to({rotation:3.5,x:256.3,y:84.3},0).wait(1).to({rotation:3.9,x:258.9,y:86.1},0).wait(1).to({rotation:4.4,x:261.7,y:88.2},0).wait(1).to({rotation:5,x:264.7,y:90.4},0).wait(1).to({rotation:5.5,x:267.6,y:92.6},0).wait(1).to({rotation:6,x:270.4,y:94.6},0).wait(1).to({rotation:6.4,x:272.5,y:96.2},0).wait(1).to({regX:233.2,regY:133.4,rotation:6.6,x:244.8,y:151.4},0).wait(1).to({regX:255.5,regY:76,rotation:7.2,x:274.4,y:97.8},0).wait(1).to({rotation:8.6,x:276.3,y:99.8},0).wait(1).to({rotation:10.3,x:278.5,y:102.3},0).wait(1).to({rotation:12.2,x:280.9,y:104.9},0).wait(1).to({rotation:13.7,x:282.9,y:107.2},0).wait(1).to({regX:233.2,regY:133.4,rotation:14.5,x:247.8,y:158.3},0).wait(1).to({regX:255.5,regY:76,x:283.8,y:108.3},0).wait(1).to({rotation:14.4,x:283.7,y:108.2},0).wait(1).to({rotation:14.3,x:283.4,y:107.9},0).wait(1).to({rotation:14.2,x:283.1,y:107.5},0).wait(1).to({rotation:13.9,x:282.8,y:107.1},0).wait(1).to({rotation:13.7,x:282.3,y:106.5},0).wait(1).to({rotation:13.4,x:281.9,y:105.9},0).wait(1).to({rotation:13.1,x:281.3,y:105.2},0).wait(1).to({rotation:12.8,x:280.7,y:104.4},0).wait(1).to({rotation:12.5,x:280.1,y:103.6},0).wait(1).to({rotation:12.1,x:279.4,y:102.8},0).wait(1).to({rotation:11.7,x:278.6,y:101.9},0).wait(1).to({rotation:11.3,x:277.9,y:100.9},0).wait(1).to({rotation:10.8,x:277.1,y:100},0).wait(1).to({rotation:10.4,x:276.3,y:99},0).wait(1).to({rotation:9.9,x:275.4,y:97.9},0).wait(1).to({rotation:9.4,x:274.5,y:96.8},0).wait(1).to({rotation:9,x:273.6,y:95.7},0).wait(1).to({rotation:8.4,x:272.6,y:94.6},0).wait(1).to({rotation:7.9,x:271.7,y:93.5},0).wait(1).to({rotation:7.4,x:270.7,y:92.3},0).wait(1).to({rotation:6.9,x:269.7,y:91.1},0).wait(1).to({rotation:6.3,x:268.7,y:89.9},0).wait(1).to({regX:233.1,regY:133.4,rotation:5.8,x:239.7,y:143.6},0).wait(1).to({regX:255.5,regY:76,rotation:7.9,x:271.3,y:87.8},0).wait(1).to({rotation:10.1,x:274.9,y:86.9},0).wait(1).to({rotation:12.3,x:278.4,y:86.1},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:14.5,x:245.9,y:135.3},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:11.2,x:276.3,y:83.5},0).wait(1).to({rotation:7.9,x:270.7,y:81.9},0).wait(1).to({rotation:4.6,x:264.9,y:80.4},0).wait(1).to({regX:233.1,regY:133.5,rotation:1.3,x:235.7,y:136.1},0).wait(1).to({regX:255.5,regY:76,rotation:0.7,x:258.2,y:77.9},0).wait(1).to({rotation:0.2,x:257.2,y:76.7},0).wait(1).to({rotation:-0.4,x:256.1,y:75.5},0).wait(1).to({rotation:-0.9,x:255.1,y:74.4},0).wait(1).to({rotation:-1.4,x:254.1,y:73.3},0).wait(1).to({rotation:-1.9,x:253.1,y:72.2},0).wait(1).to({rotation:-2.5,x:252,y:71.2},0).wait(1).to({rotation:-3,x:251.1,y:70.1},0).wait(1).to({rotation:-3.5,x:250,y:69.1},0).wait(1).to({rotation:-3.9,x:249.2,y:68.1},0).wait(1).to({rotation:-4.4,x:248.2,y:67.2},0).wait(1).to({rotation:-4.8,x:247.3,y:66.3},0).wait(1).to({rotation:-5.3,x:246.5,y:65.4},0).wait(1).to({rotation:-5.7,x:245.7,y:64.6},0).wait(1).to({rotation:-6,x:244.9,y:63.8},0).wait(1).to({rotation:-6.4,x:244.2,y:63},0).wait(1).to({rotation:-6.7,x:243.6,y:62.4},0).wait(1).to({rotation:-7,x:243,y:61.8},0).wait(1).to({regX:233.1,regY:133.5,rotation:-7.3,x:227.5,y:121.1},0).wait(1).to({regX:255.5,regY:76,rotation:-7.2,x:242.5,y:63.8},0).wait(1).to({rotation:-7,y:69.2},0).wait(1).to({rotation:-6.8,x:242.6,y:75.7},0).wait(1).to({rotation:-6.6,y:81.6},0).wait(1).to({regX:233.3,regY:133.4,rotation:-6.5,x:226.8,y:144.5},0).wait(1).to({regX:255.5,regY:76,rotation:-5.7,x:243.5,y:84.5},0).wait(1).to({rotation:-4,x:246,y:83.7},0).wait(1).to({rotation:-1.9,x:249,y:82.7},0).wait(1).to({rotation:0.4,x:252.2,y:81.8},0).wait(1).to({rotation:2.3,x:254.8,y:81.1},0).wait(1).to({regX:233.3,regY:133.6,rotation:3.3,x:230.8,y:136.9},0).wait(1).to({regX:255.5,regY:76,rotation:3.2,x:256,y:80.8},0).wait(1).to({x:255.4,y:81.2},0).wait(1).to({rotation:3.1,x:254.7,y:81.7},0).wait(1).to({x:254.1,y:82.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(14).to({regX:255.5,regY:76,rotation:4.6,x:255.7,y:84},0).wait(1).to({rotation:8.6,x:260.4,y:88.4},0).wait(1).to({rotation:14.3,x:266.9,y:95},0).wait(1).to({rotation:21.3,x:274.3,y:103.7},0).wait(1).to({rotation:29,x:281.8,y:114.3},0).wait(1).to({rotation:37.4,x:289,y:126.3},0).wait(1).to({rotation:46,x:295.2,y:139.5},0).wait(1).to({rotation:54.6,x:300.1,y:153.3},0).wait(1).to({rotation:62.9,x:303.6,y:166.9},0).wait(1).to({rotation:70.7,x:305.7,y:179.7},0).wait(1).to({rotation:77.4,x:306.6,y:190.8},0).wait(1).to({rotation:82.4,y:199},0).wait(1).to({regX:233.2,regY:133.4,rotation:84.5,x:247.3,y:185.6},0).wait(1).to({regX:255.5,regY:76,rotation:83.8,x:306.8,y:201.1},0).wait(1).to({rotation:82.1,x:307.5,y:198},0).wait(1).to({rotation:79.6,x:308.5,y:193.2},0).wait(1).to({rotation:76.5,x:309.5,y:187.2},0).wait(1).to({rotation:72.8,x:310.4,y:180.2},0).wait(1).to({rotation:68.7,x:311.2,y:172.3},0).wait(1).to({rotation:64.3,x:311.6,y:163.9},0).wait(1).to({rotation:59.7,x:311.7,y:155.1},0).wait(1).to({rotation:54.9,x:311.4,y:146},0).wait(1).to({rotation:50,x:310.6,y:136.9},0).wait(1).to({rotation:45.1,x:309.5,y:127.8},0).wait(1).to({rotation:40.3,x:308,y:119.1},0).wait(1).to({rotation:35.5,x:306.1,y:110.7},0).wait(1).to({rotation:31,x:303.9,y:103},0).wait(1).to({rotation:26.8,x:301.6,y:96},0).wait(1).to({rotation:23.1,x:299.4,y:90},0).wait(1).to({rotation:20,x:297.4,y:85.1},0).wait(1).to({rotation:17.8,x:295.9,y:81.8},0).wait(1).to({regX:233.2,regY:133.4,rotation:17,x:257.3,y:128.8},0).wait(1).to({regX:255.5,regY:76,rotation:17.5,x:295.7,y:81.3},0).wait(1).to({rotation:18.8,x:296.7,y:83.3},0).wait(1).to({rotation:20.8,x:297.9,y:86.3},0).wait(1).to({rotation:23.1,x:299.4,y:90},0).wait(1).to({scaleX:1,scaleY:1,rotation:25.7,x:301,y:94.2},0).wait(1).to({rotation:28.5,x:302.5,y:98.7},0).wait(1).to({rotation:31.4,x:304.1,y:103.6},0).wait(1).to({rotation:34.3,x:305.4,y:108.5},0).wait(1).to({rotation:37.1,x:306.6,y:113.4},0).wait(1).to({rotation:39.7,x:307.6,y:118},0).wait(1).to({scaleX:1,scaleY:1,rotation:42,x:308.4,y:122.1},0).wait(1).to({rotation:43.6,x:309,y:125.1},0).wait(1).to({regX:233.2,regY:133.4,rotation:44.3,x:253.2,y:151.8},0).wait(1).to({regX:255.5,regY:76,rotation:43.5,x:309,y:124.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:41.4,x:308.3,y:121},0).wait(1).to({rotation:38.5,x:307.2,y:115.9},0).wait(1).to({rotation:35.1,x:305.8,y:109.9},0).wait(1).to({rotation:31.4,x:304.1,y:103.6},0).wait(1).to({rotation:27.6,x:302,y:97.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:23.9,x:300,y:91.4},0).wait(1).to({rotation:20.7,x:297.9,y:86.1},0).wait(1).to({rotation:18.1,x:296.2,y:82.2},0).wait(1).to({regX:233.2,regY:133.4,rotation:17,x:257.3,y:128.8},0).wait(1).to({regX:255.5,regY:76,rotation:18.2,x:296.2,y:82.4},0).wait(1).to({rotation:21.5,x:298.3,y:87.2},0).wait(1).to({rotation:26.1,x:301,y:94.4},0).wait(1).to({rotation:31.6,x:304,y:103.3},0).wait(1).to({rotation:37.9,x:306.7,y:113.9},0).wait(1).to({rotation:44.6,x:308.9,y:125.6},0).wait(1).to({rotation:51.5,x:310.4,y:138.1},0).wait(1).to({rotation:58.4,x:311,y:150.8},0).wait(1).to({rotation:65.2,x:310.8,y:163.3},0).wait(1).to({rotation:71.4,x:309.8,y:175},0).wait(1).to({rotation:76.8,x:308.4,y:185.1},0).wait(1).to({rotation:80.8,x:307,y:192.5},0).wait(1).to({regX:233.2,regY:133.4,rotation:82.5,x:246.5,y:181},0).wait(1).to({regX:255.5,regY:76,rotation:79.8,x:306.3,y:191.2},0).wait(1).to({rotation:73.1,x:305.8,y:180.2},0).wait(1).to({rotation:63.9,x:303.7,y:164.9},0).wait(1).to({rotation:53,x:299.2,y:147.2},0).wait(1).to({rotation:41.3,x:292,y:128.7},0).wait(1).to({rotation:29.4,x:282.2,y:111.1},0).wait(1).to({rotation:17.8,x:270.8,y:95.6},0).wait(1).to({rotation:7.4,x:259.2,y:83.3},0).wait(1).to({rotation:-0.7,x:249.5,y:75},0).wait(1).to({regX:233.2,regY:133.4,rotation:-4.3,x:227.1,y:130.6},0).wait(1).to({regX:255.5,regY:76,rotation:-3.9,x:245.6,y:72.3},0).wait(1).to({rotation:-2.8,x:246.8,y:73.7},0).wait(1).to({rotation:-1.5,x:248.4,y:75.6},0).wait(1).to({rotation:-0.1,x:250.2,y:77.7},0).wait(1).to({rotation:1.3,x:251.8,y:79.8},0).wait(1).to({rotation:2.5,x:253.1,y:81.7},0).wait(1).to({regX:233.2,regY:133.4,rotation:3,x:228.5,y:138.5},0).wait(25).to({regX:255.5,regY:76,rotation:2.2,x:256.8,y:79.8},0).wait(1).to({rotation:0.4,x:263.3,y:74.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:270.9,y:67.6},0).wait(1).to({rotation:-3.7,x:277.9,y:61.5},0).wait(1).to({regX:233.2,regY:133.4,scaleX:1,scaleY:1,rotation:-4.8,x:264.3,y:117.4},0).wait(1).to({regX:255.5,regY:76,scaleX:1,scaleY:1,rotation:8.6,x:286.5,y:75.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:35.1,x:290.8,y:117.5},0).wait(1).to({rotation:63.1,x:283.4,y:169.6},0).wait(1).to({regX:233.2,regY:133.4,rotation:79.3,x:212.3,y:189.4},0).to({_off:true},1).wait(13));

	// early_s_l_upperarm
	this.instance_6 = new lib.early_s_l_upperarm_1();
	this.instance_6.setTransform(134.9,97.9,1,1,19.5,0,0,11.9,13.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).wait(1).to({regX:29,regY:42.5,rotation:12.8,x:147.9,y:129.9},0).wait(1).to({rotation:6.4,x:154.1,y:128.6},0).wait(1).to({rotation:0.7,x:159.5,y:127.1},0).wait(1).to({rotation:-3.8,x:163.6,y:125.7},0).wait(1).to({regX:12,regY:13.6,rotation:-5.8,x:145.5,y:98},0).wait(1).to({regX:29,regY:42.5,rotation:-15,x:173.1,y:122.4},0).wait(1).to({rotation:-23.7,x:179.8,y:119.3},0).wait(1).to({rotation:-30.7,x:184.9,y:116.6},0).wait(1).to({regX:12.1,regY:13.7,rotation:-34,x:156.9,y:100.8},0).wait(1).to({regX:29,regY:42.5,rotation:-30.8,x:184.8,y:116.6},0).wait(1).to({rotation:-23.7,x:179.7,y:119.6},0).wait(1).to({rotation:-14.9,x:172.7,y:122.9},0).wait(1).to({rotation:-5.8,x:164.9,y:125.7},0).wait(1).to({rotation:2.2,x:157.7,y:127.6},0).wait(1).to({regX:12,regY:13.5,rotation:6.2,x:140.3,y:97.8},0).wait(1).to({regX:29,regY:42.5,rotation:5.7,x:155,y:128.6},0).wait(1).to({rotation:4.4,x:157.4},0).wait(1).to({rotation:2.8,x:160.2,y:128.9},0).wait(1).to({rotation:1.2,x:163.2,y:129},0).wait(1).to({rotation:-0.2,x:165.8,y:129.1},0).wait(1).to({regX:12,regY:13.6,rotation:-1,x:149.6,y:100.5},0).wait(1).to({regX:29,regY:42.5,rotation:-0.5,x:166.5,y:129.1},0).wait(1).to({rotation:0.6,x:165.4,y:129.2},0).wait(1).to({rotation:1.8,x:164},0).wait(1).to({rotation:2.9,x:162.7,y:129.3},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(7).to({regX:29,regY:42.5,rotation:4.2,x:162,y:129.6},0).wait(1).to({rotation:5.8,x:161.9,y:130.2},0).wait(1).to({rotation:7.8,x:161.8,y:131},0).wait(1).to({rotation:10,x:161.6,y:131.8},0).wait(1).to({rotation:12.1,x:161.4,y:132.5},0).wait(1).to({rotation:13.9,x:161.2,y:133.1},0).wait(1).to({regX:12,regY:13.7,rotation:14.7,x:152.1,y:101.1},0).wait(1).to({regX:29,regY:42.5,rotation:14.6,x:161.2,y:133.3},0).wait(1).to({rotation:14.1,x:161.3,y:133.1},0).wait(1).to({rotation:13.4,x:161.5,y:133},0).wait(1).to({rotation:12.5,x:161.7,y:132.7},0).wait(1).to({rotation:11.5,x:161.9,y:132.4},0).wait(1).to({rotation:10.2,x:162.2,y:132.1},0).wait(1).to({rotation:8.8,x:162.6,y:131.7},0).wait(1).to({rotation:7.3,x:162.9,y:131.2},0).wait(1).to({rotation:5.7,x:163.2,y:130.7},0).wait(1).to({rotation:4,x:163.6,y:130.1},0).wait(1).to({rotation:2.2,x:163.9,y:129.4},0).wait(1).to({rotation:0.3,x:164.2,y:128.7},0).wait(1).to({rotation:-1.6,x:164.6,y:128},0).wait(1).to({rotation:-3.5,x:164.9,y:127.2},0).wait(1).to({rotation:-5.5,x:165.2,y:126.4},0).wait(1).to({rotation:-7.6,x:165.5,y:125.5},0).wait(1).to({rotation:-9.6,x:165.8,y:124.6},0).wait(1).to({rotation:-11.7,x:166,y:123.6},0).wait(1).to({rotation:-13.7,x:166.2,y:122.6},0).wait(1).to({rotation:-15.8,x:166.4,y:121.6},0).wait(1).to({rotation:-17.8,x:166.5,y:120.5},0).wait(1).to({rotation:-19.8,x:166.6,y:119.5},0).wait(1).to({rotation:-21.7,x:166.7,y:118.4},0).wait(1).to({rotation:-23.6,y:117.4},0).wait(1).to({rotation:-25.4,x:166.8,y:116.3},0).wait(1).to({rotation:-27.2,x:166.7,y:115.3},0).wait(1).to({rotation:-28.8,y:114.4},0).wait(1).to({rotation:-30.3,y:113.5},0).wait(1).to({rotation:-31.6,x:166.6,y:112.7},0).wait(1).to({rotation:-32.7,y:112},0).wait(1).to({rotation:-33.6,x:166.5,y:111.5},0).wait(1).to({rotation:-34.2,y:111.2},0).wait(1).to({regX:12.1,regY:13.5,rotation:-34.4,x:136.2,y:96.9},0).wait(1).to({regX:29,regY:42.5,rotation:-31,x:166.7,y:113.3},0).wait(1).to({rotation:-23.3,x:166.9,y:117.7},0).wait(1).to({rotation:-13.7,x:166.3,y:122.7},0).wait(1).to({rotation:-3.8,x:165.1,y:127.2},0).wait(1).to({rotation:4.9,x:163.6,y:130.4},0).wait(1).to({regX:12,regY:13.5,rotation:9.2,x:150.7,y:100.4},0).wait(1).to({regX:29,regY:42.5,rotation:8.5,x:162.8,y:131.5},0).wait(1).to({rotation:7,y:131},0).wait(1).to({rotation:5.1,x:162.7,y:130.3},0).wait(1).to({rotation:3.1,x:162.6,y:129.6},0).wait(1).to({rotation:1.4,x:162.5,y:128.9},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.6,x:145.7,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:0.9,x:162.3,y:128.5},0).wait(1).to({rotation:1.6,y:128.7},0).wait(1).to({rotation:2.4,x:162.1,y:128.9},0).wait(1).to({rotation:3.1,x:162,y:129.2},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(15).to({regX:29,regY:42.5,rotation:-0.5,x:164.9,y:128.1},0).wait(1).to({rotation:-9.2,x:170.7,y:125},0).wait(1).to({rotation:-19.4,x:176.8,y:120.6},0).wait(1).to({rotation:-28.9,x:181.8,y:115.9},0).wait(1).to({regX:12.1,regY:13.7,rotation:-34,x:153.9,y:98.8},0).wait(1).to({regX:29,regY:42.5,rotation:-33.3,x:183.6,y:113.5},0).wait(1).to({rotation:-31.7,x:182.7,y:114.3},0).wait(1).to({rotation:-29.5,x:181.4,y:115.4},0).wait(1).to({rotation:-26.7,x:179.7,y:116.7},0).wait(1).to({rotation:-23.7,x:177.8,y:118.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-20.5,x:175.7,y:119.5},0).wait(1).to({rotation:-17.3,x:173.5,y:120.8},0).wait(1).to({rotation:-14.1,x:171.2,y:122},0).wait(1).to({regX:12.1,regY:13.7,rotation:-11.1,x:147,y:98.2},0).wait(1).to({regX:29,regY:42.5,rotation:-13.3,x:169,y:122.1},0).wait(1).to({rotation:-15.5,x:168.9,y:121.1},0).wait(1).to({rotation:-17.7,x:168.8,y:120},0).wait(1).to({rotation:-19.7,x:168.6,y:119},0).wait(1).to({rotation:-21.7,x:168.4,y:118},0).wait(1).to({rotation:-23.6,x:168.2,y:117},0).wait(1).to({rotation:-25.4,x:167.9,y:116.1},0).wait(1).to({rotation:-27,x:167.7,y:115.2},0).wait(1).to({rotation:-28.6,x:167.5,y:114.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30,x:167.2,y:113.6},0).wait(1).to({rotation:-31.2,x:166.9,y:112.9},0).wait(1).to({regX:12.1,regY:13.7,rotation:-32.3,x:137.1,y:97},0).wait(1).to({regX:29,regY:42.5,scaleX:1,scaleY:1,rotation:-32.6,x:166.7,y:112.1},0).wait(1).to({rotation:-32.9,x:166.6,y:111.9},0).wait(1).to({rotation:-33.2,y:111.8},0).wait(1).to({rotation:-33.4,x:166.5,y:111.6},0).wait(1).to({rotation:-33.7,y:111.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-33.9,x:166.4,y:111.3},0).wait(1).to({rotation:-34,y:111.2},0).wait(1).to({rotation:-34.2},0).wait(1).to({rotation:-34.3,y:111.1},0).wait(1).to({rotation:-34.4},0).wait(1).to({x:166.3,y:111},0).wait(1).to({regX:12.1,regY:13.5,x:136.2,y:96.9},0).wait(1).to({regX:29,regY:42.5,rotation:-32.4,x:166.6,y:112.4},0).wait(1).to({rotation:-27.5,x:166.9,y:115.3},0).wait(1).to({rotation:-21,x:166.8,y:118.9},0).wait(1).to({rotation:-13.7,x:166.3,y:122.7},0).wait(1).to({rotation:-6.2,x:165.5,y:126.2},0).wait(1).to({rotation:0.8,x:164.4,y:129},0).wait(1).to({rotation:6.5,x:163.3,y:130.9},0).wait(1).to({regX:12,regY:13.5,rotation:9.2,x:150.7,y:100.4},0).wait(1).to({regX:29,regY:42.5,rotation:8.5,x:162.8,y:131.5},0).wait(1).to({rotation:7,y:131},0).wait(1).to({rotation:5.1,x:162.7,y:130.3},0).wait(1).to({rotation:3.1,x:162.6,y:129.6},0).wait(1).to({rotation:1.4,x:162.5,y:128.9},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.6,x:145.7,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:0.9,x:162.3,y:128.5},0).wait(1).to({rotation:1.6,y:128.7},0).wait(1).to({rotation:2.4,x:162.1,y:128.9},0).wait(1).to({rotation:3.1,x:162,y:129.2},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(15).to({regX:29,regY:42.5,rotation:1.8,x:163.3,y:128.8},0).wait(1).to({rotation:-2.4,x:166.2,y:127.5},0).wait(1).to({rotation:-8,x:169.9,y:125.5},0).wait(1).to({rotation:-14.2,x:173.8,y:122.9},0).wait(1).to({rotation:-20.7,x:177.5,y:120},0).wait(1).to({rotation:-26.8,x:180.7,y:117},0).wait(1).to({rotation:-31.7,x:183.1,y:114.4},0).wait(1).to({regX:12.1,regY:13.7,rotation:-34,x:153.9,y:98.8},0).wait(1).to({regX:29,regY:42.5,rotation:-33.3,x:183.7,y:113.6},0).wait(1).to({rotation:-31.5,x:183.1,y:114.6},0).wait(1).to({rotation:-29,x:182.1,y:115.9},0).wait(1).to({rotation:-26,x:180.9,y:117.5},0).wait(1).to({rotation:-22.6,x:179.5,y:119.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-19.1,x:178,y:121},0).wait(1).to({rotation:-15.5,x:176.2,y:122.7},0).wait(1).to({rotation:-11.9,x:174.4,y:124.2},0).wait(1).to({regX:12.1,regY:13.7,rotation:-8.6,x:151.7,y:99.7},0).wait(1).to({regX:29,regY:42.5,rotation:-8.2,x:173.3,y:126.1},0).wait(1).to({rotation:-7.8,x:173.7,y:126.5},0).wait(1).to({rotation:-7.4,x:174.3,y:126.8},0).wait(1).to({rotation:-7,x:174.7,y:127.3},0).wait(1).to({rotation:-6.7,x:175.2,y:127.7},0).wait(1).to({rotation:-6.3,x:175.6,y:128},0).wait(1).to({rotation:-6,x:176,y:128.3},0).wait(1).to({rotation:-5.8,x:176.4,y:128.7},0).wait(1).to({rotation:-5.5,x:176.7,y:128.9},0).wait(1).to({regX:12,regY:13.7,rotation:-5.3,x:157.5,y:102.1},0).wait(1).to({regX:29,regY:42.5,rotation:-5.2,x:177.2,y:129.3},0).wait(1).to({rotation:-5.1,x:177.4},0).wait(1).to({x:177.5,y:129.4},0).wait(1).to({rotation:-5,x:177.6,y:129.5},0).wait(2).to({rotation:-4.9,x:177.7},0).wait(1).to({x:177.8,y:129.6},0).wait(1).to({regX:12.1,regY:13.7,x:158.4,y:102.4},0).wait(10).to({regX:29,regY:42.5,rotation:-11.2,x:179.6,y:126.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.1,x:181.1,y:123.4},0).wait(1).to({rotation:-22.4,x:182.2,y:120.4},0).wait(1).to({rotation:-26.9,x:183,y:117.6},0).wait(1).to({rotation:-30.6,x:183.5,y:115.3},0).wait(1).to({rotation:-33,x:183.8,y:113.8},0).wait(1).to({regX:12.1,regY:13.7,rotation:-34,x:153.9,y:98.8},0).wait(1).to({regX:29,regY:42.5,rotation:-30.8,x:182.2,y:114.8},0).wait(1).to({rotation:-23.4,x:177.7,y:118.4},0).wait(1).to({rotation:-14.6,x:171.9,y:122.3},0).wait(1).to({rotation:-6.4,x:165.9,y:125.4},0).wait(1).to({rotation:-0.4,x:161.4,y:127.2},0).wait(1).to({regX:12,regY:13.6,rotation:1.8,x:143.7,y:98.5},0).wait(1).to({regX:29,regY:42.5,rotation:2,x:160.1,y:128},0).wait(1).to({rotation:2.5,x:160.6,y:128.4},0).wait(1).to({rotation:3,x:161.4,y:128.8},0).wait(1).to({rotation:3.4,x:161.9,y:129.1},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(13).to({x:146.8,y:99.5},0).wait(1).to({regX:29,regY:42.5,rotation:0.5,x:163.2,y:128.2},0).wait(1).to({rotation:-2.7,x:164.2,y:126.9},0).wait(1).to({rotation:-5.9,x:165.3,y:125.5},0).wait(1).to({rotation:-9.3,x:166.4,y:123.9},0).wait(1).to({rotation:-12.9,x:167.3,y:122.2},0).wait(1).to({rotation:-16.5,x:168.3,y:120.4},0).wait(1).to({rotation:-20.3,x:169.2,y:118.3},0).wait(1).to({rotation:-24.2,x:170,y:116.1},0).wait(1).to({rotation:-28.2,x:170.7,y:113.7},0).wait(1).to({rotation:-32.4,x:171.2,y:111.2},0).wait(1).to({rotation:-36.7,x:171.7,y:108.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-41.1,x:171.9,y:105.6},0).wait(1).to({rotation:-45.6,y:102.7},0).wait(1).to({rotation:-50.3,x:171.8,y:99.5},0).wait(1).to({rotation:-55.1,x:171.4,y:96.3},0).wait(1).to({regX:12,regY:13.6,rotation:-60,x:137.2,y:93.2},0).wait(1).to({regX:29,regY:42.5,x:170.7,y:92.9},0).wait(2).to({regX:12,regY:13.6,x:137.2,y:93.2},0).wait(1).to({regX:29,regY:42.5,x:170.7,y:92.9},0).wait(24).to({regX:12,regY:13.6,x:137.2,y:93.2},0).wait(1).to({regX:29,regY:42.5,rotation:-60.1,x:170.5,y:92.7},0).wait(1).to({rotation:-60.3,x:170,y:92.6},0).wait(1).to({rotation:-60.6,x:169.5,y:92.3},0).wait(1).to({regX:12,regY:13.6,rotation:-60.9,x:135.3,y:92.8},0).wait(1).to({regX:29,regY:42.5,rotation:-58.4,x:169.4,y:93.7},0).wait(1).to({rotation:-55,x:170,y:96},0).wait(1).to({rotation:-50.9,x:170.7,y:98.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-46,x:171.2,y:102.2},0).wait(1).to({rotation:-40.3,x:171.5,y:106.1},0).wait(1).to({rotation:-33.9,x:171.4,y:110.2},0).wait(1).to({rotation:-26.8,x:171,y:114.6},0).wait(1).to({rotation:-18.9,x:170,y:119.2},0).wait(1).to({rotation:-10.3,x:168.3,y:123.7},0).wait(1).to({rotation:-0.9,x:165.9,y:127.9},0).wait(1).to({regX:12,regY:13.5,rotation:9.2,x:150.7,y:100.4},0).wait(1).to({regX:29,regY:42.5,rotation:8.5,x:162.8,y:131.5},0).wait(1).to({rotation:7,y:131},0).wait(1).to({rotation:5.1,x:162.7,y:130.3},0).wait(1).to({rotation:3.1,x:162.6,y:129.6},0).wait(1).to({rotation:1.4,x:162.5,y:128.9},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.6,x:145.7,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:0.9,x:162.3,y:128.5},0).wait(1).to({rotation:1.6,y:128.7},0).wait(1).to({rotation:2.4,x:162.1,y:128.9},0).wait(1).to({rotation:3.1,x:162,y:129.2},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(14).to({regX:29,regY:42.5,rotation:4.2,x:162,y:129.6},0).wait(1).to({rotation:5.8,x:161.9,y:130.2},0).wait(1).to({rotation:7.8,x:161.8,y:131},0).wait(1).to({rotation:10,x:161.6,y:131.8},0).wait(1).to({rotation:12.1,x:161.4,y:132.5},0).wait(1).to({rotation:13.9,x:161.2,y:133.1},0).wait(1).to({regX:12,regY:13.7,rotation:14.7,x:152.1,y:101.1},0).wait(1).to({regX:29,regY:42.5,rotation:14.5,x:161.3,y:133.2},0).wait(1).to({rotation:13.7,x:161.4,y:133},0).wait(1).to({rotation:12.5,x:161.7,y:132.7},0).wait(1).to({rotation:11.1,x:162,y:132.3},0).wait(1).to({rotation:9.3,x:162.4,y:131.8},0).wait(1).to({rotation:7.3,x:162.9,y:131.2},0).wait(1).to({rotation:5.1,x:163.3,y:130.5},0).wait(1).to({rotation:2.8,x:163.8,y:129.6},0).wait(1).to({rotation:0.3,x:164.3,y:128.8},0).wait(1).to({rotation:-2.2,x:164.7,y:127.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:165.1,y:126.6},0).wait(1).to({rotation:-7.6,x:165.5,y:125.5},0).wait(1).to({rotation:-10.3,x:165.8,y:124.2},0).wait(1).to({rotation:-13,x:166.2,y:122.9},0).wait(1).to({regX:12.1,regY:13.7,rotation:-15.8,x:142.3,y:98.4},0).wait(1).to({regX:29,regY:42.5,rotation:-17.8,x:166.5,y:120.5},0).wait(1).to({rotation:-19.8,x:166.6,y:119.4},0).wait(1).to({rotation:-21.7,y:118.3},0).wait(1).to({rotation:-23.6,x:166.7,y:117.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-25.4,y:116.3},0).wait(1).to({rotation:-27.2,y:115.3},0).wait(1).to({rotation:-28.8,x:166.6,y:114.4},0).wait(1).to({rotation:-30.3,y:113.5},0).wait(1).to({rotation:-31.6,x:166.5,y:112.7},0).wait(1).to({rotation:-32.7,y:112},0).wait(1).to({rotation:-33.6,x:166.4,y:111.5},0).wait(1).to({rotation:-34.2,y:111.1},0).wait(1).to({regX:12.1,regY:13.5,rotation:-34.4,x:136.2,y:96.9},0).wait(1).to({regX:29,regY:42.5,rotation:-34.6,x:166.3,y:111.1},0).wait(1).to({rotation:-34.8,x:165.8,y:110.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-35.2,x:165.2,y:110.5},0).wait(1).to({rotation:-35.5,x:164.6,y:110.2},0).wait(1).to({rotation:-35.7,x:164.1,y:110},0).wait(1).to({regX:12.1,regY:13.5,scaleX:1,scaleY:1,rotation:-35.8,x:133.3,y:96.3},0).wait(1).to({regX:29,regY:42.5,scaleX:1,scaleY:1,x:164.1,y:110},0).wait(1).to({rotation:-35.5,x:164.4,y:110.1},0).wait(1).to({rotation:-35.2,x:165,y:110.4},0).wait(1).to({rotation:-34.9,x:165.6,y:110.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-34.6,x:166.2,y:111},0).wait(1).to({regX:12.1,regY:13.5,rotation:-34.4,x:136.2,y:96.9},0).wait(1).to({regX:29,regY:42.5,rotation:-34.3,x:166.5,y:111.4},0).wait(1).to({rotation:-33.7,x:166.6,y:111.6},0).wait(1).to({rotation:-32.8,y:112.2},0).wait(1).to({rotation:-31.6,x:166.7,y:112.9},0).wait(1).to({rotation:-30,y:113.9},0).wait(1).to({rotation:-28.3,x:166.8,y:115},0).wait(1).to({rotation:-26.2,y:116.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-23.9,y:117.4},0).wait(1).to({rotation:-21.4,x:166.7,y:118.8},0).wait(1).to({rotation:-18.7,x:166.6,y:120.2},0).wait(1).to({regX:12.1,regY:13.7,rotation:-15.8,x:142.3,y:98.4},0).wait(1).to({regX:29,regY:42.5,rotation:-14.5,x:166.2,y:122.1},0).wait(1).to({rotation:-13.3,x:166.1,y:122.6},0).wait(1).to({rotation:-12.1,x:165.9,y:123.2},0).wait(1).to({rotation:-10.9,x:165.8,y:123.8},0).wait(1).to({rotation:-9.7,x:165.7,y:124.4},0).wait(1).to({rotation:-8.6,x:165.5,y:124.9},0).wait(1).to({rotation:-7.4,x:165.3,y:125.4},0).wait(1).to({rotation:-6.2,x:165.1,y:125.9},0).wait(1).to({regX:12,regY:13.7,rotation:-5.1,x:145.6,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:-10.5,x:165.8,y:124},0).wait(1).to({rotation:-15.7,x:166.3,y:121.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-20.5,x:166.6,y:119},0).wait(1).to({rotation:-24.9,x:166.7,y:116.6},0).wait(1).to({rotation:-28.6,y:114.4},0).wait(1).to({rotation:-31.6,x:166.6,y:112.7},0).wait(1).to({rotation:-33.7,x:166.5,y:111.4},0).wait(1).to({regX:12.1,regY:13.5,rotation:-34.4,x:136.2,y:96.9},0).wait(1).to({regX:29,regY:42.5,rotation:-31,x:166.7,y:113.3},0).wait(1).to({rotation:-23.3,x:166.9,y:117.7},0).wait(1).to({rotation:-13.7,x:166.3,y:122.7},0).wait(1).to({rotation:-3.8,x:165.1,y:127.2},0).wait(1).to({rotation:4.9,x:163.6,y:130.4},0).wait(1).to({regX:12,regY:13.5,rotation:9.2,x:150.7,y:100.4},0).wait(1).to({regX:29,regY:42.5,rotation:8.5,x:162.8,y:131.5},0).wait(1).to({rotation:7,y:131},0).wait(1).to({rotation:5.1,x:162.7,y:130.3},0).wait(1).to({rotation:3.1,x:162.6,y:129.6},0).wait(1).to({rotation:1.4,x:162.5,y:128.9},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.6,x:145.7,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:0.9,x:162.3,y:128.5},0).wait(1).to({rotation:1.6,y:128.7},0).wait(1).to({rotation:2.4,x:162.1,y:128.9},0).wait(1).to({rotation:3.1,x:162,y:129.2},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(14).to({regX:29,regY:42.5,rotation:3.7,x:162.7,y:129.6},0).wait(1).to({rotation:4,x:164.3,y:130.4},0).wait(1).to({rotation:4.4,x:166.4,y:131.5},0).wait(1).to({rotation:5,x:168.9,y:132.8},0).wait(1).to({rotation:5.5,x:171.4,y:134.1},0).wait(1).to({rotation:6,x:174,y:135.5},0).wait(1).to({rotation:6.5,x:176.4,y:136.7},0).wait(1).to({rotation:6.9,x:178.2,y:137.7},0).wait(1).to({regX:12.1,regY:13.6,rotation:7.1,x:165.8,y:107.4},0).wait(1).to({regX:29,regY:42.5,x:179,y:138.1},0).wait(2).to({regX:12.1,regY:13.6,x:165.8,y:107.4},0).wait(1).to({regX:29,regY:42.5,x:179,y:138.1},0).wait(1).to({rotation:7,x:178.9},0).wait(1).to({rotation:6.9,x:178.8,y:138},0).wait(1).to({rotation:6.8,x:178.7,y:137.9},0).wait(1).to({rotation:6.7,x:178.6,y:137.8},0).wait(1).to({rotation:6.6,x:178.4,y:137.6},0).wait(1).to({rotation:6.4,x:178.2,y:137.5},0).wait(1).to({rotation:6.2,x:178,y:137.3},0).wait(1).to({rotation:6,x:177.7,y:137.1},0).wait(1).to({rotation:5.8,x:177.5,y:137},0).wait(1).to({rotation:5.6,x:177.2,y:136.8},0).wait(1).to({rotation:5.4,x:176.9,y:136.5},0).wait(1).to({rotation:5.1,x:176.6,y:136.3},0).wait(1).to({rotation:4.9,x:176.3,y:136},0).wait(1).to({rotation:4.6,x:175.9,y:135.8},0).wait(1).to({rotation:4.3,x:175.5,y:135.6},0).wait(1).to({rotation:4,x:175.2,y:135.3},0).wait(1).to({rotation:3.7,x:174.9,y:135},0).wait(1).to({rotation:3.4,x:174.4,y:134.7},0).wait(1).to({rotation:3.1,x:174.1,y:134.4},0).wait(1).to({rotation:2.8,x:173.6,y:134.1},0).wait(1).to({rotation:2.5,x:173.2,y:133.8},0).wait(1).to({rotation:2.1,x:172.8,y:133.5},0).wait(1).to({rotation:1.8,x:172.4,y:133.1},0).wait(1).to({rotation:1.5,x:172,y:132.8},0).wait(1).to({rotation:1.1,x:171.5,y:132.5},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.8,x:154.6,y:103},0).wait(1).to({regX:29,regY:42.5,rotation:-1.1,x:171.7,y:131.4},0).wait(1).to({rotation:-3.1,x:172.2,y:130.5},0).wait(1).to({rotation:-5,x:172.8,y:129.7},0).wait(1).to({regX:12.1,regY:13.5,rotation:-7,x:153.1,y:102.2},0).wait(1).to({regX:29,regY:42.5,rotation:-5.7,x:171.8,y:129.1},0).wait(1).to({rotation:-4.4,x:170.3,y:129.2},0).wait(1).to({rotation:-3.1,x:168.8,y:129.4},0).wait(1).to({regX:12.1,regY:13.6,rotation:-1.8,x:149.5,y:101.1},0).wait(1).to({regX:29,regY:42.5,rotation:-2.1,x:166.8,y:129.1},0).wait(1).to({rotation:-2.5,x:166.4,y:128.7},0).wait(1).to({rotation:-2.8,x:165.9,y:128.4},0).wait(1).to({rotation:-3.1,x:165.5,y:128},0).wait(1).to({rotation:-3.4,x:165.1,y:127.7},0).wait(1).to({rotation:-3.8,x:164.7,y:127.4},0).wait(1).to({rotation:-4.1,x:164.2,y:127.1},0).wait(1).to({rotation:-4.4,x:163.8,y:126.7},0).wait(1).to({rotation:-4.7,x:163.4,y:126.4},0).wait(1).to({rotation:-5,x:163.1,y:126.2},0).wait(1).to({rotation:-5.3,x:162.6,y:125.8},0).wait(1).to({rotation:-5.5,x:162.3,y:125.5},0).wait(1).to({rotation:-5.8,x:162,y:125.3},0).wait(1).to({rotation:-6,x:161.6,y:125},0).wait(1).to({rotation:-6.3,x:161.3,y:124.8},0).wait(1).to({rotation:-6.5,x:161,y:124.5},0).wait(1).to({rotation:-6.7,x:160.8,y:124.4},0).wait(1).to({rotation:-6.9,x:160.5,y:124.2},0).wait(1).to({regX:12.1,regY:13.7,rotation:-7,x:140,y:97.4},0).wait(1).to({regX:29,regY:42.5,rotation:-5.2,x:160.6,y:124.9},0).wait(1).to({rotation:-1.5,x:161.3,y:126.8},0).wait(1).to({rotation:2.9,x:161.9,y:128.9},0).wait(1).to({rotation:7,x:162.5,y:130.7},0).wait(1).to({regX:12,regY:13.5,rotation:9.2,x:150.7,y:100.4},0).wait(1).to({regX:29,regY:42.5,rotation:8.5,x:162.8,y:131.5},0).wait(1).to({rotation:7,y:131},0).wait(1).to({rotation:5.1,x:162.7,y:130.3},0).wait(1).to({rotation:3.1,x:162.6,y:129.6},0).wait(1).to({rotation:1.4,x:162.5,y:128.9},0).wait(1).to({regX:12.1,regY:13.6,rotation:0.6,x:145.7,y:99.3},0).wait(1).to({regX:29,regY:42.5,rotation:0.9,x:162.3,y:128.5},0).wait(1).to({rotation:1.6,y:128.7},0).wait(1).to({rotation:2.4,x:162.1,y:128.9},0).wait(1).to({rotation:3.1,x:162,y:129.2},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(14).to({regX:29,regY:42.5,rotation:3.6,x:162.4,y:129.4},0).wait(1).to({rotation:3.8,x:163.1,y:129.8},0).wait(1).to({rotation:4,x:164.2,y:130.4},0).wait(1).to({rotation:4.3,x:165.5,y:131},0).wait(1).to({rotation:4.6,x:166.9,y:131.7},0).wait(1).to({rotation:4.9,x:168.5,y:132.6},0).wait(1).to({rotation:5.3,x:170.1,y:133.3},0).wait(1).to({rotation:5.6,x:171.7,y:134.2},0).wait(1).to({rotation:5.9,x:173.3,y:134.9},0).wait(1).to({rotation:6.2,x:174.8,y:135.6},0).wait(1).to({rotation:6.5,x:176,y:136.3},0).wait(1).to({rotation:6.7,x:176.9,y:136.7},0).wait(1).to({regX:12,regY:13.6,rotation:6.8,x:163.9,y:106.2},0).wait(1).to({regX:29,regY:42.5,rotation:6.5,x:177.3,y:136.7},0).wait(1).to({rotation:5.8,x:177.2,y:136.4},0).wait(1).to({rotation:4.8,x:177.1,y:135.9},0).wait(1).to({rotation:3.5,x:176.9,y:135.2},0).wait(1).to({rotation:2,x:176.6,y:134.4},0).wait(1).to({rotation:0.3,x:176.3,y:133.5},0).wait(1).to({rotation:-1.5,x:176,y:132.5},0).wait(1).to({rotation:-3.4,x:175.7,y:131.4},0).wait(1).to({rotation:-5.4,x:175.3,y:130.2},0).wait(1).to({rotation:-7.4,x:174.9,y:129},0).wait(1).to({rotation:-9.4,x:174.4,y:127.8},0).wait(1).to({rotation:-11.4,x:174.1,y:126.5},0).wait(1).to({rotation:-13.3,x:173.5,y:125.1},0).wait(1).to({rotation:-15.2,x:173.1,y:123.9},0).wait(1).to({rotation:-16.9,x:172.6,y:122.8},0).wait(1).to({rotation:-18.4,x:172.1,y:121.7},0).wait(1).to({rotation:-19.7,x:171.8,y:120.8},0).wait(1).to({rotation:-20.6,x:171.6,y:120.2},0).wait(1).to({regX:12,regY:13.5,rotation:-20.9,x:145.3,y:99},0).wait(1).to({regX:29,regY:42.5,rotation:-20.7,x:171.6,y:120.1},0).wait(1).to({rotation:-20.2,x:171.7,y:120.5},0).wait(1).to({rotation:-19.4,x:172,y:121.1},0).wait(1).to({rotation:-18.4,x:172.2,y:121.8},0).wait(1).to({rotation:-17.3,x:172.6,y:122.5},0).wait(1).to({rotation:-16.1,x:172.8,y:123.3},0).wait(1).to({rotation:-14.9,x:173.1,y:124.2},0).wait(1).to({rotation:-13.7,x:173.4,y:124.9},0).wait(1).to({rotation:-12.6,x:173.7,y:125.7},0).wait(1).to({rotation:-11.5,x:173.9,y:126.5},0).wait(1).to({rotation:-10.5,x:174.2,y:127},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.9,x:174.3,y:127.5},0).wait(1).to({regX:12,regY:13.6,rotation:-9.6,x:152.8,y:101.9},0).wait(1).to({regX:29,regY:42.5,rotation:-9.9,x:174.2,y:127.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.8,x:174,y:126.8},0).wait(1).to({rotation:-12,x:173.8,y:126},0).wait(1).to({rotation:-13.4,x:173.5,y:125},0).wait(1).to({rotation:-15,x:173.1,y:124},0).wait(1).to({rotation:-16.5,x:172.7,y:123},0).wait(1).to({rotation:-18,x:172.3,y:121.9},0).wait(1).to({rotation:-19.4,x:171.9,y:121},0).wait(1).to({rotation:-20.5,x:171.6,y:120.2},0).wait(1).to({regX:12,regY:13.5,rotation:-20.9,x:145.3,y:99},0).wait(1).to({regX:29,regY:42.5,rotation:-20.4,x:171.6,y:120.3},0).wait(1).to({rotation:-19.2,x:171.9,y:121.2},0).wait(1).to({rotation:-17.4,x:172.3,y:122.3},0).wait(1).to({rotation:-15.2,x:172.7,y:123.7},0).wait(1).to({rotation:-12.7,x:173.1,y:125.2},0).wait(1).to({rotation:-10.1,x:173.5,y:126.9},0).wait(1).to({rotation:-7.4,x:173.8,y:128.5},0).wait(1).to({rotation:-4.6,x:174.2,y:130},0).wait(1).to({rotation:-2,x:174.5,y:131.4},0).wait(1).to({rotation:0.5,x:174.6,y:132.7},0).wait(1).to({rotation:2.6,x:174.8,y:133.7},0).wait(1).to({rotation:4.2,y:134.5},0).wait(1).to({regX:12,regY:13.6,rotation:4.8,x:160.4,y:104.5},0).wait(1).to({regX:29,regY:42.5,rotation:4.6,x:174.4,y:134.4},0).wait(1).to({rotation:4.2,x:173.3,y:133.9},0).wait(1).to({rotation:3.6,x:171.8,y:133},0).wait(1).to({rotation:2.9,x:170,y:132.1},0).wait(1).to({rotation:2.1,x:168.2,y:131},0).wait(1).to({rotation:1.3,x:166.2,y:130},0).wait(1).to({rotation:0.6,x:164.3,y:129},0).wait(1).to({rotation:-0.1,x:162.5,y:128.1},0).wait(1).to({rotation:-0.6,x:161.2,y:127.3},0).wait(1).to({regX:12.1,regY:13.6,rotation:-0.9,x:143.2,y:98.4},0).wait(1).to({regX:29,regY:42.5,rotation:-0.6,x:160.6,y:127.2},0).wait(1).to({rotation:0,x:160.8,y:127.5},0).wait(1).to({rotation:0.8,x:161.1,y:127.9},0).wait(1).to({rotation:1.7,x:161.4,y:128.4},0).wait(1).to({rotation:2.5,x:161.7,y:128.8},0).wait(1).to({rotation:3.2,x:161.9,y:129.1},0).wait(1).to({regX:12,regY:13.6,rotation:3.5,x:146.9,y:99.4},0).wait(25).to({regX:29,regY:42.5,rotation:-0.5,x:164.9,y:128.1},0).wait(1).to({rotation:-9.2,x:170.7,y:125},0).wait(1).to({rotation:-19.4,x:176.8,y:120.6},0).wait(1).to({rotation:-28.9,x:181.8,y:115.9},0).wait(1).to({regX:12.1,regY:13.7,rotation:-34,x:153.9,y:98.8},0).wait(1).to({regX:29,regY:42.5,rotation:-29.5,x:181.4,y:115.4},0).wait(1).to({rotation:-20.6,x:175.8,y:119.4},0).wait(1).to({rotation:-11.2,x:169.2,y:123.1},0).wait(1).to({regX:12,regY:13.6,rotation:-5.8,x:145.5,y:98},0).wait(1).to({regX:29,regY:42.5,rotation:-3,x:162.8,y:125.9},0).wait(1).to({rotation:2.8,x:157.5,y:127.6},0).wait(1).to({rotation:9.7,x:151,y:129.3},0).wait(1).to({rotation:16.1,x:144.7,y:130.4},0).wait(1).to({regX:11.9,regY:13.6,rotation:19.5,x:134.9,y:97.9},0).to({_off:true},1).wait(8));

	// ey_s_arm_l
	this.instance_7 = new lib.ey_s_arm_l();
	this.instance_7.setTransform(57.7,84.4,1,1,0,0,0,57.7,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:50,regY:157,rotation:-0.3,x:49.6,y:157.4},0).wait(1).to({rotation:-1,x:48.8,y:158.4},0).wait(1).to({rotation:-1.9,x:47.6,y:159.5},0).wait(1).to({rotation:-2.8,x:46.5,y:160.7},0).wait(1).to({rotation:-3.6,x:45.6,y:161.7},0).wait(1).to({regX:57.6,regY:84.3,rotation:-4,x:47.6,y:89.3},0).wait(1).to({regX:50,regY:157,rotation:-3.7,x:45.6,y:161.9},0).wait(1).to({rotation:-2.9,x:46.6,y:160.8},0).wait(1).to({rotation:-1.9,x:48,y:159.4},0).wait(1).to({rotation:-0.9,x:49.5,y:158},0).wait(1).to({rotation:0.2,x:50.9,y:156.5},0).wait(1).to({rotation:1.1,x:52.1,y:155.2},0).wait(1).to({regX:57.6,regY:84.4,rotation:1.5,x:62.2,y:82.1},0).wait(1).to({regX:50,regY:157,rotation:1.1,x:52.3,y:154.9},0).wait(1).to({rotation:0.4,x:51.4,y:155.9},0).wait(1).to({rotation:-0.5,x:50.4,y:157.1},0).wait(1).to({rotation:-1.5,x:49.3,y:158.4},0).wait(1).to({rotation:-2.3,x:48.3,y:159.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-2.7,x:51.9,y:87.2},0).wait(1).to({regX:50,regY:157,rotation:-2.4,x:48,y:159.7},0).wait(1).to({rotation:-1.8,x:48.5,y:159},0).wait(1).to({rotation:-1,x:49.3,y:158.2},0).wait(1).to({rotation:-0.1,x:50,y:157.2},0).wait(1).to({rotation:0.6,x:50.6,y:156.4},0).wait(1).to({regX:57.8,regY:84.4,rotation:1,x:60,y:83.5},0).wait(1).to({regX:50,regY:157,rotation:0.9,x:50.8,y:156.2},0).wait(1).to({rotation:0.7,x:50.6,y:156.4},0).wait(1).to({rotation:0.4,x:50.3,y:156.7},0).wait(1).to({rotation:0.1,x:50.1,y:156.9},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(7).to({regX:50,regY:157,rotation:0.2,x:50.3,y:156.9},0).wait(1).to({rotation:0.5,x:50.8,y:156.5},0).wait(1).to({rotation:1,x:51.5,y:155.9},0).wait(1).to({rotation:1.5,x:52.3,y:155.3},0).wait(1).to({rotation:2,x:53,y:154.7},0).wait(1).to({rotation:2.4,x:53.6,y:154.1},0).wait(1).to({regX:57.8,regY:84.4,rotation:2.6,x:64.9,y:81.7},0).wait(1).to({regX:50,regY:157,rotation:2.5,x:53.8,y:154},0).wait(1).to({x:53.7,y:154.1},0).wait(1).to({rotation:2.3,x:53.5,y:154.2},0).wait(1).to({rotation:2.2,x:53.3,y:154.5},0).wait(1).to({rotation:2,x:53.1,y:154.7},0).wait(1).to({rotation:1.8,x:52.9,y:155},0).wait(1).to({rotation:1.5,x:52.6,y:155.4},0).wait(1).to({rotation:1.3,x:52.2,y:155.7},0).wait(1).to({rotation:1,x:51.9,y:156.1},0).wait(1).to({rotation:0.7,x:51.5,y:156.5},0).wait(1).to({rotation:0.4,x:51.1,y:156.9},0).wait(1).to({rotation:0.1,x:50.7,y:157.3},0).wait(1).to({rotation:-0.3,x:50.4,y:157.8},0).wait(1).to({rotation:-0.6,x:49.9,y:158.2},0).wait(1).to({rotation:-1,x:49.5,y:158.7},0).wait(1).to({rotation:-1.3,x:49.1,y:159.1},0).wait(1).to({rotation:-1.7,x:48.7,y:159.6},0).wait(1).to({rotation:-2,x:48.1,y:160.1},0).wait(1).to({rotation:-2.4,x:47.7,y:160.5},0).wait(1).to({rotation:-2.8,x:47.3,y:161},0).wait(1).to({rotation:-3.1,x:46.9,y:161.4},0).wait(1).to({rotation:-3.5,x:46.4,y:161.8},0).wait(1).to({rotation:-3.8,x:46,y:162.3},0).wait(1).to({rotation:-4.1,x:45.6,y:162.7},0).wait(1).to({rotation:-4.5,x:45.2,y:163.1},0).wait(1).to({rotation:-4.8,x:44.9,y:163.5},0).wait(1).to({rotation:-5,x:44.5,y:163.8},0).wait(1).to({rotation:-5.3,x:44.2,y:164.2},0).wait(1).to({rotation:-5.5,x:43.9,y:164.4},0).wait(1).to({rotation:-5.7,x:43.7,y:164.6},0).wait(1).to({rotation:-5.9,x:43.5,y:164.8},0).wait(1).to({rotation:-6,x:43.4,y:165},0).wait(1).to({regX:57.8,regY:84.5,y:92.1},0).wait(1).to({regX:50,regY:157,rotation:-5.4,x:44,y:164.2},0).wait(1).to({rotation:-4,x:45.6,y:162.4},0).wait(1).to({rotation:-2.3,x:47.6,y:160.2},0).wait(1).to({rotation:-0.4,x:49.6,y:157.8},0).wait(1).to({rotation:1.1,x:51.4,y:155.7},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.9,x:62.5,y:82.3},0).wait(1).to({regX:50,regY:157,rotation:1.7,x:52.1,y:154.9},0).wait(1).to({rotation:1.3,x:51.5,y:155.5},0).wait(1).to({rotation:0.7,x:50.9,y:156.2},0).wait(1).to({rotation:0.1,x:50.2,y:156.9},0).wait(1).to({rotation:-0.4,x:49.7,y:157.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-0.7,x:56.2,y:85.1},0).wait(1).to({regX:50,regY:157,rotation:-0.6,x:49.5,y:157.7},0).wait(1).to({rotation:-0.5,x:49.7,y:157.5},0).wait(1).to({rotation:-0.3,x:49.8,y:157.3},0).wait(1).to({rotation:-0.1,x:50,y:157.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(15).to({regX:50,regY:157,rotation:0.2,x:50.3,y:156.8},0).wait(1).to({rotation:0.5,x:50.9,y:156.2},0).wait(1).to({rotation:0.9,x:51.6,y:155.5},0).wait(1).to({rotation:1.3,x:52.3,y:154.8},0).wait(1).to({regX:57.6,regY:84.4,rotation:1.5,x:62.2,y:82.1},0).wait(1).to({regX:50,regY:157,rotation:1.4,x:52.6,y:154.5},0).wait(1).to({rotation:1.3,x:52.5,y:154.7},0).wait(1).to({rotation:1.2,x:52.2,y:154.9},0).wait(1).to({rotation:0.9,x:51.9,y:155.3},0).wait(1).to({rotation:0.7,x:51.5,y:155.7},0).wait(1).to({rotation:0.4,x:51.1,y:156.1},0).wait(1).to({rotation:0.1,x:50.7,y:156.5},0).wait(1).to({rotation:-0.2,x:50.2,y:157},0).wait(1).to({regX:57.6,regY:84.5,rotation:-0.5,x:56.6,y:84.9},0).wait(1).to({regX:50,regY:157,rotation:-0.9,x:49.3,y:158},0).wait(1).to({rotation:-1.4,x:48.8,y:158.6},0).wait(1).to({rotation:-1.8,x:48.2,y:159.3},0).wait(1).to({rotation:-2.2,x:47.7,y:159.9},0).wait(1).to({rotation:-2.7,x:47.2,y:160.5},0).wait(1).to({rotation:-3.1,x:46.7,y:161},0).wait(1).to({rotation:-3.5,x:46.2,y:161.6},0).wait(1).to({rotation:-3.9,x:45.7,y:162.2},0).wait(1).to({rotation:-4.3,x:45.3,y:162.7},0).wait(1).to({rotation:-4.6,x:44.9,y:163.2},0).wait(1).to({rotation:-5,x:44.5,y:163.6},0).wait(1).to({regX:57.7,regY:84.5,rotation:-5.3,x:45,y:91.2},0).wait(1).to({regX:50,regY:157,rotation:-5.4,x:43.9,y:164.2},0).wait(1).to({rotation:-5.5,y:164.4},0).wait(1).to({rotation:-5.6,x:43.8,y:164.5},0).wait(1).to({rotation:-5.7,x:43.7},0).wait(1).to({x:43.6,y:164.6},0).wait(1).to({rotation:-5.8,y:164.7},0).wait(1).to({rotation:-5.9,x:43.5,y:164.8},0).wait(1).to({x:43.4,y:164.9},0).wait(1).to({rotation:-6},0).wait(1).to({x:43.3},0).wait(1).to({y:165},0).wait(1).to({regX:57.8,regY:84.5,x:43.4,y:92.1},0).wait(1).to({regX:50,regY:157,rotation:-5.7,x:43.7,y:164.5},0).wait(1).to({rotation:-4.8,x:44.7,y:163.4},0).wait(1).to({rotation:-3.6,x:46,y:161.9},0).wait(1).to({rotation:-2.3,x:47.6,y:160.2},0).wait(1).to({rotation:-0.9,x:49.1,y:158.4},0).wait(1).to({rotation:0.4,x:50.5,y:156.7},0).wait(1).to({rotation:1.4,x:51.8,y:155.3},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.9,x:62.5,y:82.3},0).wait(1).to({regX:50,regY:157,rotation:1.7,x:52.1,y:154.9},0).wait(1).to({rotation:1.3,x:51.5,y:155.5},0).wait(1).to({rotation:0.7,x:50.9,y:156.2},0).wait(1).to({rotation:0.1,x:50.2,y:156.9},0).wait(1).to({rotation:-0.4,x:49.7,y:157.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-0.7,x:56.2,y:85.1},0).wait(1).to({regX:50,regY:157,rotation:-0.6,x:49.5,y:157.7},0).wait(1).to({rotation:-0.5,x:49.7,y:157.5},0).wait(1).to({rotation:-0.3,x:49.8,y:157.3},0).wait(1).to({rotation:-0.1,x:50,y:157.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(15).to({regX:50,regY:157,rotation:0.1,x:50.1,y:156.9},0).wait(1).to({rotation:0.2,x:50.4,y:156.6},0).wait(1).to({rotation:0.5,x:50.8,y:156.3},0).wait(1).to({rotation:0.7,x:51.3,y:155.8},0).wait(1).to({rotation:1,x:51.7,y:155.4},0).wait(1).to({rotation:1.2,x:52.2,y:155},0).wait(1).to({rotation:1.4,x:52.5,y:154.6},0).wait(1).to({regX:57.6,regY:84.4,rotation:1.5,x:62.2,y:82.1},0).wait(1).to({regX:50,regY:157,x:52.7,y:154.5},0).wait(1).to({x:52.6},0).wait(1).to({rotation:1.6},0).wait(1).to({x:52.5,y:154.6},0).wait(1).to({rotation:1.7,x:52.4},0).wait(1).to({x:52.3,y:154.7},0).wait(1).to({rotation:1.8,x:52.1},0).wait(1).to({rotation:1.9,x:52,y:154.8},0).wait(1).to({regX:57.6,regY:84.5,x:62,y:82.5},0).wait(1).to({regX:50,regY:157,rotation:2.3,x:52.2,y:154.4},0).wait(1).to({rotation:2.6,x:52.5,y:154.1},0).wait(1).to({rotation:2.9,x:52.8,y:153.8},0).wait(1).to({rotation:3.2,x:53.1,y:153.4},0).wait(1).to({rotation:3.6,x:53.4,y:153},0).wait(1).to({rotation:3.9,x:53.6,y:152.7},0).wait(1).to({rotation:4.2,x:53.9,y:152.4},0).wait(1).to({rotation:4.5,x:54.2,y:152.1},0).wait(1).to({rotation:4.8,x:54.5,y:151.8},0).wait(1).to({regX:57.6,regY:84.4,rotation:5,x:68.6,y:79.9},0).wait(1).to({regX:50,regY:157,rotation:5.1,x:54.8,y:151.4},0).wait(1).to({rotation:5.3,x:55,y:151.3},0).wait(1).to({rotation:5.4,y:151.2},0).wait(1).to({rotation:5.5,x:55.1,y:151.1},0).wait(1).to({x:55.2,y:151},0).wait(1).to({rotation:5.6},0).wait(2).to({regX:57.6,regY:84.4,x:70,y:79.4},0).wait(10).to({regX:50,regY:157,rotation:4.9,x:54.8,y:151.6},0).wait(1).to({rotation:4.1,x:54.3,y:152.3},0).wait(1).to({rotation:3.4,x:53.9,y:152.8},0).wait(1).to({rotation:2.7,x:53.5,y:153.4},0).wait(1).to({rotation:2.1,x:53.1,y:154},0).wait(1).to({rotation:1.7,x:52.8,y:154.3},0).wait(1).to({regX:57.6,regY:84.4,rotation:1.5,x:62.2,y:82.1},0).wait(1).to({regX:50,regY:157,rotation:1.2,x:52.3,y:154.9},0).wait(1).to({rotation:0.5,x:51.5,y:155.8},0).wait(1).to({rotation:-0.2,x:50.5,y:156.9},0).wait(1).to({rotation:-1,x:49.6,y:157.9},0).wait(1).to({rotation:-1.5,x:48.9,y:158.6},0).wait(1).to({regX:57.6,regY:84.4,rotation:-1.7,x:54,y:86.1},0).wait(1).to({regX:50,regY:157,rotation:-1.5,x:48.8,y:158.7},0).wait(1).to({rotation:-1,x:49.2,y:158.1},0).wait(1).to({rotation:-0.5,x:49.6,y:157.6},0).wait(1).to({rotation:-0.2,x:50,y:157.2},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(14).to({regX:50,regY:157,rotation:-0.3,x:49.8,y:157.4},0).wait(1).to({rotation:-0.6,x:49.6,y:157.7},0).wait(1).to({rotation:-0.9,x:49.3,y:158},0).wait(1).to({rotation:-1.2,x:49.1,y:158.5},0).wait(1).to({rotation:-1.6,x:48.8,y:158.9},0).wait(1).to({rotation:-1.9,x:48.5,y:159.3},0).wait(1).to({rotation:-2.3,x:48.2,y:159.7},0).wait(1).to({rotation:-2.6,x:47.9,y:160.1},0).wait(1).to({rotation:-3,x:47.6,y:160.5},0).wait(1).to({rotation:-3.4,x:47.3,y:161},0).wait(1).to({rotation:-3.8,x:47,y:161.5},0).wait(1).to({rotation:-4.2,x:46.6,y:161.9},0).wait(1).to({rotation:-4.7,x:46.2,y:162.4},0).wait(1).to({rotation:-5.1,x:45.9,y:162.9},0).wait(1).to({rotation:-5.6,x:45.5,y:163.4},0).wait(1).to({regX:57.8,regY:84.4,rotation:-6,x:45.2,y:91},0).wait(1).to({regX:50,regY:157,x:45,y:163.9},0).wait(2).to({regX:57.8,regY:84.4,x:45.2,y:91},0).wait(1).to({regX:50,regY:157,x:45,y:163.9},0).wait(24).to({regX:57.8,regY:84.4,x:45.2,y:91},0).wait(1).to({regX:50,regY:157,rotation:-6.1,x:45,y:164.1},0).wait(1).to({rotation:-6.3,x:44.9,y:164.4},0).wait(1).to({rotation:-6.6,x:44.6,y:164.7},0).wait(1).to({regX:57.8,regY:84.4,rotation:-7,x:43.3,y:92.1},0).wait(1).to({regX:50,regY:157,rotation:-6.6,x:44.6,y:164.7},0).wait(1).to({rotation:-6.2,x:45,y:164.2},0).wait(1).to({rotation:-5.7,x:45.5,y:163.7},0).wait(1).to({rotation:-5.1,x:46.1,y:163},0).wait(1).to({rotation:-4.4,x:46.7,y:162.2},0).wait(1).to({rotation:-3.5,x:47.4,y:161.2},0).wait(1).to({rotation:-2.6,x:48.3,y:160.2},0).wait(1).to({rotation:-1.6,x:49.1,y:159},0).wait(1).to({rotation:-0.5,x:50.1,y:157.8},0).wait(1).to({rotation:0.6,x:51.1,y:156.3},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.9,x:62.5,y:82.3},0).wait(1).to({regX:50,regY:157,rotation:1.7,x:52.1,y:154.9},0).wait(1).to({rotation:1.3,x:51.5,y:155.5},0).wait(1).to({rotation:0.7,x:50.9,y:156.2},0).wait(1).to({rotation:0.1,x:50.2,y:156.9},0).wait(1).to({rotation:-0.4,x:49.7,y:157.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-0.7,x:56.2,y:85.1},0).wait(1).to({regX:50,regY:157,rotation:-0.6,x:49.5,y:157.7},0).wait(1).to({rotation:-0.5,x:49.7,y:157.5},0).wait(1).to({rotation:-0.3,x:49.8,y:157.3},0).wait(1).to({rotation:-0.1,x:50,y:157.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(14).to({regX:50,regY:157,rotation:0.2,x:50.3,y:156.9},0).wait(1).to({rotation:0.5,x:50.8,y:156.5},0).wait(1).to({rotation:1,x:51.5,y:155.9},0).wait(1).to({rotation:1.5,x:52.3,y:155.3},0).wait(1).to({rotation:2,x:53,y:154.7},0).wait(1).to({rotation:2.4,x:53.6,y:154.1},0).wait(1).to({regX:57.8,regY:84.4,rotation:2.6,x:64.9,y:81.7},0).wait(1).to({regX:50,regY:157,rotation:2.5,x:53.8,y:154},0).wait(1).to({rotation:2.4,x:53.6,y:154.2},0).wait(1).to({rotation:2.2,x:53.3,y:154.5},0).wait(1).to({rotation:1.9,x:53,y:154.8},0).wait(1).to({rotation:1.6,x:52.6,y:155.3},0).wait(1).to({rotation:1.3,x:52.2,y:155.7},0).wait(1).to({rotation:0.9,x:51.7,y:156.2},0).wait(1).to({rotation:0.5,x:51.2,y:156.8},0).wait(1).to({rotation:0.1,x:50.7,y:157.3},0).wait(1).to({rotation:-0.4,x:50.1,y:157.9},0).wait(1).to({rotation:-0.9,x:49.6,y:158.5},0).wait(1).to({rotation:-1.3,x:49,y:159.2},0).wait(1).to({rotation:-1.8,x:48.4,y:159.8},0).wait(1).to({rotation:-2.3,x:47.8,y:160.4},0).wait(1).to({regX:57.7,regY:84.5,rotation:-2.8,x:51.4,y:88.3},0).wait(1).to({regX:50,regY:157,rotation:-3.1,x:46.8,y:161.4},0).wait(1).to({rotation:-3.5,x:46.4,y:161.9},0).wait(1).to({rotation:-3.8,x:46,y:162.3},0).wait(1).to({rotation:-4.1,x:45.6,y:162.7},0).wait(1).to({rotation:-4.5,x:45.2,y:163},0).wait(1).to({rotation:-4.8,x:44.8,y:163.4},0).wait(1).to({rotation:-5,x:44.5,y:163.8},0).wait(1).to({rotation:-5.3,x:44.2,y:164.1},0).wait(1).to({rotation:-5.5,x:43.9,y:164.4},0).wait(1).to({rotation:-5.7,x:43.7,y:164.6},0).wait(1).to({rotation:-5.9,x:43.5,y:164.8},0).wait(1).to({rotation:-6,x:43.4,y:165},0).wait(1).to({regX:57.8,regY:84.5,y:92.1},0).wait(1).to({regX:50,regY:157,rotation:-6.1,x:43.2,y:165.1},0).wait(1).to({rotation:-6.4,x:43,y:165.5},0).wait(1).to({rotation:-6.8,x:42.7,y:165.9},0).wait(1).to({rotation:-7.1,x:42.5,y:166.3},0).wait(1).to({rotation:-7.4,x:42.3,y:166.6},0).wait(1).to({regX:57.8,regY:84.4,rotation:-7.5,x:40.4,y:93.8},0).wait(1).to({regX:50,regY:157,rotation:-7.4,x:42.2,y:166.7},0).wait(1).to({rotation:-7.2,x:42.4,y:166.4},0).wait(1).to({rotation:-6.9,x:42.7,y:166},0).wait(1).to({rotation:-6.5,x:42.9,y:165.6},0).wait(1).to({rotation:-6.2,x:43.1,y:165.2},0).wait(1).to({regX:57.8,regY:84.5,rotation:-6,x:43.4,y:92.1},0).wait(1).to({regX:50,regY:157,x:43.3,y:165},0).wait(1).to({rotation:-5.9,x:43.5,y:164.8},0).wait(1).to({rotation:-5.7,x:43.6,y:164.6},0).wait(1).to({rotation:-5.5,x:43.8,y:164.4},0).wait(1).to({rotation:-5.3,x:44.2,y:164.1},0).wait(1).to({rotation:-4.9,x:44.6,y:163.7},0).wait(1).to({rotation:-4.6,x:45,y:163.3},0).wait(1).to({rotation:-4.2,x:45.5,y:162.7},0).wait(1).to({rotation:-3.7,x:46,y:162.2},0).wait(1).to({rotation:-3.3,x:46.6,y:161.6},0).wait(1).to({regX:57.7,regY:84.5,rotation:-2.8,x:51.4,y:88.3},0).wait(1).to({regX:50,regY:157,rotation:-2.5,x:47.5,y:160.7},0).wait(1).to({rotation:-2.3,x:47.7,y:160.5},0).wait(1).to({rotation:-2.1,x:47.9,y:160.2},0).wait(1).to({rotation:-1.9,x:48.2,y:159.9},0).wait(1).to({rotation:-1.6,x:48.4,y:159.6},0).wait(1).to({rotation:-1.4,x:48.7,y:159.3},0).wait(1).to({rotation:-1.2,x:48.9,y:159.1},0).wait(1).to({rotation:-1,x:49.1,y:158.8},0).wait(1).to({regX:57.8,regY:84.4,rotation:-0.8,x:56.1,y:85.9},0).wait(1).to({regX:50,regY:157,rotation:-1.8,x:48.2,y:159.8},0).wait(1).to({rotation:-2.7,x:47.1,y:161},0).wait(1).to({rotation:-3.5,x:46.1,y:162},0).wait(1).to({rotation:-4.3,x:45.3,y:163},0).wait(1).to({rotation:-5,x:44.4,y:163.8},0).wait(1).to({rotation:-5.5,x:43.8,y:164.4},0).wait(1).to({rotation:-5.9,x:43.4,y:164.8},0).wait(1).to({regX:57.8,regY:84.5,rotation:-6,y:92.1},0).wait(1).to({regX:50,regY:157,rotation:-5.4,x:44,y:164.2},0).wait(1).to({rotation:-4,x:45.6,y:162.4},0).wait(1).to({rotation:-2.3,x:47.6,y:160.2},0).wait(1).to({rotation:-0.4,x:49.6,y:157.8},0).wait(1).to({rotation:1.1,x:51.4,y:155.7},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.9,x:62.5,y:82.3},0).wait(1).to({regX:50,regY:157,rotation:1.7,x:52.1,y:154.9},0).wait(1).to({rotation:1.3,x:51.5,y:155.5},0).wait(1).to({rotation:0.7,x:50.9,y:156.2},0).wait(1).to({rotation:0.1,x:50.2,y:156.9},0).wait(1).to({rotation:-0.4,x:49.7,y:157.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-0.7,x:56.2,y:85.1},0).wait(1).to({regX:50,regY:157,rotation:-0.6,x:49.5,y:157.7},0).wait(1).to({rotation:-0.5,x:49.7,y:157.5},0).wait(1).to({rotation:-0.3,x:49.8,y:157.3},0).wait(1).to({rotation:-0.1,x:50,y:157.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(14).to({regX:50,regY:157,rotation:0.4,x:50.4,y:156.7},0).wait(1).to({rotation:1.3,x:51.2,y:155.9},0).wait(1).to({rotation:2.5,x:52.3,y:154.7},0).wait(1).to({rotation:3.9,x:53.7,y:153.4},0).wait(1).to({rotation:5.4,x:55.1,y:151.8},0).wait(1).to({rotation:6.8,x:56.5,y:150.3},0).wait(1).to({rotation:8.2,x:57.8,y:148.8},0).wait(1).to({rotation:9.2,x:58.8,y:147.6},0).wait(1).to({regX:57.7,regY:84.4,rotation:9.7,x:79.1,y:76.8},0).wait(1).to({regX:50,regY:157,x:59.3,y:147.1},0).wait(2).to({regX:57.7,regY:84.4,x:79.1,y:76.8},0).wait(1).to({regX:50,regY:157,x:59.3,y:147.1},0).wait(1).to({x:59.2},0).wait(1).to({rotation:9.6,y:147.3},0).wait(1).to({rotation:9.5,x:59.1,y:147.4},0).wait(1).to({rotation:9.4,x:59,y:147.5},0).wait(1).to({rotation:9.2,x:58.8,y:147.7},0).wait(1).to({rotation:9.1,x:58.7,y:147.9},0).wait(1).to({rotation:8.9,x:58.5,y:148},0).wait(1).to({rotation:8.7,x:58.3,y:148.3},0).wait(1).to({rotation:8.5,x:58.2,y:148.5},0).wait(1).to({rotation:8.3,x:57.9,y:148.7},0).wait(1).to({rotation:8.1,x:57.7,y:149},0).wait(1).to({rotation:7.8,x:57.5,y:149.3},0).wait(1).to({rotation:7.6,x:57.2,y:149.6},0).wait(1).to({rotation:7.3,x:57,y:149.9},0).wait(1).to({rotation:7,x:56.7,y:150.2},0).wait(1).to({rotation:6.8,x:56.5,y:150.6},0).wait(1).to({rotation:6.5,x:56.2,y:150.9},0).wait(1).to({rotation:6.2,x:55.9,y:151.3},0).wait(1).to({rotation:5.9,x:55.7,y:151.5},0).wait(1).to({rotation:5.6,x:55.4,y:151.9},0).wait(1).to({rotation:5.2,x:55.1,y:152.2},0).wait(1).to({rotation:4.9,x:54.8,y:152.6},0).wait(1).to({rotation:4.6,x:54.5,y:153},0).wait(1).to({rotation:4.3,x:54.2,y:153.3},0).wait(1).to({rotation:3.9,x:53.9,y:153.7},0).wait(1).to({rotation:3.6,x:53.6,y:154},0).wait(1).to({rotation:3.3,x:53.3,y:154.4},0).wait(1).to({rotation:2.9,x:53,y:154.7},0).wait(1).to({rotation:2.6,x:52.7,y:155.1},0).wait(1).to({rotation:2.3,x:52.3,y:155.4},0).wait(1).to({rotation:1.9,x:52,y:155.8},0).wait(1).to({rotation:1.6,x:51.7,y:156.1},0).wait(1).to({rotation:1.2,x:51.4,y:156.5},0).wait(1).to({rotation:0.9,x:51.1,y:156.9},0).wait(1).to({rotation:0.6,x:50.8,y:157.2},0).wait(1).to({rotation:0.2,x:50.5,y:157.5},0).wait(1).to({rotation:-0.1,x:50.2,y:157.8},0).wait(1).to({rotation:-0.4,x:49.9,y:158.1},0).wait(1).to({rotation:-0.8,x:49.6,y:158.4},0).wait(1).to({rotation:-1.1,x:49.4,y:158.7},0).wait(1).to({rotation:-1.4,x:49.1,y:159},0).wait(1).to({rotation:-1.7,x:48.7,y:159.4},0).wait(1).to({rotation:-2,x:48.5,y:159.6},0).wait(1).to({rotation:-2.3,x:48.2,y:159.9},0).wait(1).to({rotation:-2.6,x:48,y:160.1},0).wait(1).to({rotation:-2.8,x:47.7,y:160.4},0).wait(1).to({rotation:-3.1,x:47.5,y:160.6},0).wait(1).to({rotation:-3.3,x:47.3,y:160.9},0).wait(1).to({rotation:-3.6,x:47.1,y:161.1},0).wait(1).to({rotation:-3.8,x:46.9,y:161.2},0).wait(1).to({rotation:-4,x:46.7,y:161.5},0).wait(1).to({rotation:-4.1,x:46.5,y:161.6},0).wait(1).to({regX:57.8,regY:84.4,rotation:-4.3,x:48.7,y:88.8},0).wait(1).to({regX:50,regY:157,rotation:-3.6,x:47,y:161},0).wait(1).to({rotation:-2.2,x:48.4,y:159.4},0).wait(1).to({rotation:-0.5,x:50,y:157.5},0).wait(1).to({rotation:1.1,x:51.5,y:155.6},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.9,x:62.5,y:82.3},0).wait(1).to({regX:50,regY:157,rotation:1.7,x:52.1,y:154.9},0).wait(1).to({rotation:1.3,x:51.5,y:155.5},0).wait(1).to({rotation:0.7,x:50.9,y:156.2},0).wait(1).to({rotation:0.1,x:50.2,y:156.9},0).wait(1).to({rotation:-0.4,x:49.7,y:157.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-0.7,x:56.2,y:85.1},0).wait(1).to({regX:50,regY:157,rotation:-0.6,x:49.5,y:157.7},0).wait(1).to({rotation:-0.5,x:49.7,y:157.5},0).wait(1).to({rotation:-0.3,x:49.8,y:157.3},0).wait(1).to({rotation:-0.1,x:50,y:157.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(14).to({regX:50,regY:157,rotation:0.2,x:50.2,y:156.9},0).wait(1).to({rotation:0.6,x:50.6,y:156.5},0).wait(1).to({rotation:1.2,x:51.2,y:155.8},0).wait(1).to({rotation:2,x:51.8,y:155.1},0).wait(1).to({rotation:2.8,x:52.6,y:154.3},0).wait(1).to({rotation:3.7,x:53.5,y:153.3},0).wait(1).to({rotation:4.6,x:54.4,y:152.3},0).wait(1).to({rotation:5.5,x:55.3,y:151.3},0).wait(1).to({rotation:6.4,x:56.2,y:150.3},0).wait(1).to({rotation:7.3,x:57,y:149.4},0).wait(1).to({rotation:8,x:57.7,y:148.6},0).wait(1).to({rotation:8.5,x:58.2,y:148},0).wait(1).to({regX:57.7,regY:84.4,rotation:8.7,x:77.1,y:77.1},0).wait(1).to({regX:50,regY:157,rotation:8.6,x:58.3,y:147.9},0).wait(1).to({rotation:8.3,x:58,y:148.3},0).wait(1).to({rotation:7.9,x:57.6,y:148.8},0).wait(1).to({rotation:7.3,x:57.1,y:149.5},0).wait(1).to({rotation:6.7,x:56.5,y:150.3},0).wait(1).to({rotation:6,x:55.8,y:151.1},0).wait(1).to({rotation:5.2,x:55.1,y:152},0).wait(1).to({rotation:4.4,x:54.4,y:152.9},0).wait(1).to({rotation:3.6,x:53.6,y:153.9},0).wait(1).to({rotation:2.7,x:52.8,y:154.8},0).wait(1).to({rotation:1.9,x:52,y:155.7},0).wait(1).to({rotation:1.1,x:51.2,y:156.6},0).wait(1).to({rotation:0.2,x:50.5,y:157.5},0).wait(1).to({rotation:-0.6,x:49.8,y:158.3},0).wait(1).to({rotation:-1.3,x:49.1,y:159},0).wait(1).to({rotation:-1.9,x:48.5,y:159.6},0).wait(1).to({rotation:-2.5,x:48.1,y:160.2},0).wait(1).to({rotation:-2.8,x:47.7,y:160.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-3,x:51.4,y:87.8},0).wait(1).to({regX:50,regY:157,rotation:-2.9,x:47.7,y:160.6},0).wait(1).to({rotation:-2.7,x:47.9,y:160.4},0).wait(1).to({rotation:-2.4,x:48.2,y:160},0).wait(1).to({rotation:-2,x:48.6,y:159.6},0).wait(1).to({rotation:-1.5,x:49.1,y:159.2},0).wait(1).to({rotation:-1.1,x:49.5,y:158.7},0).wait(1).to({rotation:-0.6,x:50,y:158.2},0).wait(1).to({rotation:-0.1,x:50.4,y:157.7},0).wait(1).to({rotation:0.4,x:50.9,y:157.2},0).wait(1).to({rotation:0.8,x:51.4,y:156.8},0).wait(1).to({rotation:1.2,x:51.8,y:156.3},0).wait(1).to({rotation:1.4,x:52.1,y:156},0).wait(1).to({regX:57.8,regY:84.4,rotation:1.6,x:61.9,y:83.5},0).wait(1).to({regX:50,regY:157,rotation:1.4,x:52,y:156.1},0).wait(1).to({rotation:1.1,x:51.6,y:156.4},0).wait(1).to({rotation:0.6,x:51.1,y:157},0).wait(1).to({rotation:0,x:50.5,y:157.5},0).wait(1).to({rotation:-0.6,x:50,y:158.2},0).wait(1).to({rotation:-1.2,x:49.3,y:158.9},0).wait(1).to({rotation:-1.8,x:48.7,y:159.5},0).wait(1).to({rotation:-2.4,x:48.1,y:160},0).wait(1).to({rotation:-2.8,x:47.7,y:160.5},0).wait(1).to({regX:57.7,regY:84.4,rotation:-3,x:51.4,y:87.8},0).wait(1).to({regX:50,regY:157,rotation:-2.8,x:47.8,y:160.5},0).wait(1).to({rotation:-2.3,x:48.1,y:159.9},0).wait(1).to({rotation:-1.6,x:48.8,y:159.3},0).wait(1).to({rotation:-0.8,x:49.6,y:158.4},0).wait(1).to({rotation:0.1,x:50.4,y:157.4},0).wait(1).to({rotation:1.1,x:51.2,y:156.3},0).wait(1).to({rotation:2.1,x:52.2,y:155.1},0).wait(1).to({rotation:3.2,x:53.1,y:153.9},0).wait(1).to({rotation:4.2,x:54,y:152.8},0).wait(1).to({rotation:5.1,x:54.9,y:151.7},0).wait(1).to({rotation:5.9,x:55.6,y:150.7},0).wait(1).to({rotation:6.5,x:56.2,y:149.9},0).wait(1).to({regX:57.6,regY:84.4,rotation:6.8,x:72.6,y:78.4},0).wait(1).to({regX:50,regY:157,rotation:6.5,x:56.2,y:150},0).wait(1).to({rotation:5.8,x:55.6,y:150.8},0).wait(1).to({rotation:4.8,x:54.6,y:151.9},0).wait(1).to({rotation:3.7,x:53.6,y:153.2},0).wait(1).to({rotation:2.5,x:52.5,y:154.6},0).wait(1).to({rotation:1.3,x:51.4,y:155.9},0).wait(1).to({rotation:0.1,x:50.3,y:157.1},0).wait(1).to({rotation:-1,x:49.4,y:158.3},0).wait(1).to({rotation:-1.8,x:48.6,y:159.1},0).wait(1).to({regX:57.7,regY:84.4,rotation:-2.2,x:53.1,y:86.7},0).wait(1).to({regX:50,regY:157,rotation:-2.1,x:48.3,y:159.4},0).wait(1).to({rotation:-1.8,x:48.6,y:159},0).wait(1).to({rotation:-1.4,x:48.9,y:158.6},0).wait(1).to({rotation:-0.9,x:49.3,y:158.1},0).wait(1).to({rotation:-0.5,x:49.6,y:157.6},0).wait(1).to({rotation:-0.2,x:49.9,y:157.2},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(25).to({regX:50,regY:157,rotation:0.2,x:50.3,y:156.8},0).wait(1).to({rotation:0.5,x:50.9,y:156.2},0).wait(1).to({rotation:0.9,x:51.6,y:155.5},0).wait(1).to({rotation:1.3,x:52.3,y:154.8},0).wait(1).to({regX:57.6,regY:84.4,rotation:1.5,x:62.2,y:82.1},0).wait(1).to({regX:50,regY:157,rotation:1.1,x:52.2,y:154.9},0).wait(1).to({rotation:0.4,x:51.2,y:156.1},0).wait(1).to({rotation:-0.6,x:49.9,y:157.5},0).wait(1).to({rotation:-1.7,x:48.4,y:159},0).wait(1).to({rotation:-2.7,x:46.9,y:160.5},0).wait(1).to({rotation:-3.6,x:45.7,y:161.6},0).wait(1).to({regX:57.6,regY:84.3,rotation:-4,x:47.6,y:89.3},0).wait(1).to({regX:50,regY:157,rotation:-3.6,x:45.6,y:161.8},0).wait(1).to({rotation:-2.6,x:46.7,y:160.6},0).wait(1).to({rotation:-1.4,x:48.1,y:159.1},0).wait(1).to({rotation:-0.2,x:49.5,y:157.6},0).wait(1).to({rotation:0.9,x:50.7,y:156.3},0).wait(1).to({regX:57.7,regY:84.4,rotation:1.5,x:60.9,y:83},0).wait(1).to({regX:50,regY:157,rotation:1.2,x:51.1,y:155.7},0).wait(1).to({rotation:0.8,x:50.7,y:156.2},0).wait(1).to({rotation:0.3,x:50.2,y:156.7},0).wait(1).to({regX:57.7,regY:84.4,rotation:0,x:57.7,y:84.4},0).wait(1));

	// ey_s_legs_all
	this.instance_8 = new lib.ey_s_legs_all();
	this.instance_8.setTransform(11.5,22.7,1,1,0,0,0,11.5,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(668));

	// early_platform
	this.instance_9 = new lib.early_platform_1();
	this.instance_9.setTransform(113.1,447.1,1,1,0,0,0,74,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(668));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21,-3.4,166.1,466.5);


(lib.slide_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89));

	// fore_1
	this.instance = new lib.fore_1_2();
	this.instance.setTransform(237,412.5,1,1,0,0,0,228,40.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89));

	// cuba- man
	this.instance_1 = new lib.cubaman_1();
	this.instance_1.setTransform(161.1,348.5,1,1,0,0,0,25.5,36);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:57.5,x:160.7,y:369.9},0).wait(1).to({x:160.2,y:369.6},0).wait(1).to({x:159.6,y:369.4},0).wait(1).to({x:159,y:369.1},0).wait(1).to({x:158.4,y:368.9},0).wait(1).to({x:157.9,y:368.6},0).wait(1).to({regY:36,x:157.6,y:347},0).wait(1).to({regY:57.5,x:157.7,y:368.4},0).wait(1).to({x:158,y:368.2},0).wait(1).to({x:158.3,y:368},0).wait(1).to({x:158.6,y:367.8},0).wait(1).to({x:158.9,y:367.6},0).wait(1).to({regY:36,x:159.1,y:346},0).wait(1).to({regY:57.5,x:159.2,y:367.6},0).wait(1).to({x:159.4,y:367.9},0).wait(1).to({x:159.6,y:368.2},0).wait(1).to({x:159.8,y:368.5},0).wait(1).to({x:160.1,y:368.8},0).wait(1).to({x:160.3,y:369},0).wait(1).to({x:160.5,y:369.3},0).wait(1).to({x:160.7,y:369.6},0).wait(1).to({x:160.9,y:369.9},0).wait(1).to({regY:36,x:161.1,y:348.5},0).wait(1).to({regY:57.5,rotation:-0.1,x:162.4,y:370},0).wait(1).to({rotation:-0.3,x:164.7,y:370.1},0).wait(1).to({rotation:-0.5,x:167.3},0).wait(1).to({rotation:-0.7,x:170.2,y:370.2},0).wait(1).to({rotation:-0.9,x:173.1},0).wait(1).to({rotation:-1.1,x:176.1,y:370.3},0).wait(1).to({rotation:-1.3,x:179.1,y:370.4},0).wait(1).to({rotation:-1.5,x:181.9},0).wait(1).to({rotation:-1.7,x:184.6,y:370.5},0).wait(1).to({rotation:-1.9,x:186.9},0).wait(1).to({regY:36,rotation:-2,x:187.5,y:349.1},0).wait(1).to({regY:57.5,rotation:-1.1,x:189.7,y:370.9},0).wait(1).to({rotation:0.2,x:192.1,y:371.5},0).wait(1).to({rotation:1.6,x:194.7,y:372.1},0).wait(1).to({rotation:3,x:197.2,y:372.7},0).wait(1).to({rotation:4.3,x:199.6,y:373.3},0).wait(1).to({regY:36.1,rotation:5.2,x:203.1,y:352.3},0).wait(1).to({regY:57.5,rotation:4.7,x:202.2,y:373.4},0).wait(1).to({rotation:3.9,x:204,y:373},0).wait(1).to({rotation:3,x:205.8,y:372.7},0).wait(1).to({rotation:2.2,x:207.8,y:372.3},0).wait(1).to({rotation:1.3,x:209.6,y:371.9},0).wait(1).to({rotation:0.5,x:211.3,y:371.6},0).wait(1).to({regY:36,rotation:0,x:212.4,y:349.9},0).wait(1).to({regY:57.5,x:215.3,y:371},0).wait(1).to({x:219.5,y:370.4},0).wait(1).to({x:223.6,y:369.9},0).wait(1).to({regY:36,x:226.6,y:348},0).wait(1).to({regY:57.5,x:227.6,y:369.6},0).wait(1).to({x:229.6,y:369.8},0).wait(1).to({x:231.8,y:370.1},0).wait(1).to({x:234.1,y:370.4},0).wait(1).to({x:236.5,y:370.7},0).wait(1).to({x:239,y:370.9},0).wait(1).to({x:241.4,y:371.2},0).wait(1).to({x:243.7,y:371.5},0).wait(1).to({x:245.9,y:371.8},0).wait(1).to({x:247.9,y:372},0).wait(1).to({regY:36,x:249,y:350.7},0).wait(1).to({regY:57.5,x:250.8,y:371.8},0).wait(1).to({x:253.6,y:371.2},0).wait(1).to({x:256.5,y:370.6},0).wait(1).to({x:259.2,y:370.1},0).wait(1).to({regY:36,x:261.1,y:348.2},0).wait(1).to({regY:57.5,x:262.1,y:370.1},0).wait(1).to({x:263.7,y:370.8},0).wait(1).to({x:265.6,y:371.6},0).wait(1).to({x:267.6,y:372.4},0).wait(1).to({x:269.5,y:373.3},0).wait(1).to({x:271.5,y:374.1},0).wait(1).to({x:273.4,y:374.9},0).wait(1).to({x:275,y:375.6},0).wait(1).to({regY:36,x:276,y:354.5},0).wait(1).to({regY:57.5,x:276.8,y:376},0).wait(1).to({x:277.7},0).wait(1).to({x:278.6},0).wait(1).to({x:279.5},0).wait(1).to({x:280.4},0).wait(1).to({x:281.3},0).wait(1).to({x:282.2},0).wait(1).to({x:283},0).wait(1).to({x:283.9},0).wait(1).to({x:284.7},0).wait(1).to({x:285.5},0).wait(1).to({regY:36,x:286,y:354.5},0).wait(1));

	// cuba- hat
	this.instance_2 = new lib.cubahat_1();
	this.instance_2.setTransform(186.5,331,1,1,0,0,0,11.5,9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:186.2,y:330.9},0).wait(1).to({x:185.6,y:330.6},0).wait(1).to({x:185,y:330.4},0).wait(1).to({x:184.5,y:330.1},0).wait(1).to({x:183.9,y:329.9},0).wait(1).to({x:183.3,y:329.6},0).wait(1).to({x:183,y:329.5},0).wait(1).to({x:183.2,y:329.4},0).wait(1).to({x:183.5,y:329.2},0).wait(1).to({x:183.8,y:329},0).wait(1).to({x:184,y:328.8},0).wait(1).to({x:184.3,y:328.6},0).wait(1).to({x:184.5,y:328.5},0).wait(1).to({x:184.6,y:328.6},0).wait(1).to({x:184.8,y:328.9},0).wait(1).to({x:185,y:329.2},0).wait(1).to({x:185.3,y:329.5},0).wait(1).to({x:185.5,y:329.8},0).wait(1).to({x:185.7,y:330},0).wait(1).to({x:186,y:330.3},0).wait(1).to({x:186.2,y:330.6},0).wait(1).to({x:186.4,y:330.9},0).wait(1).to({x:186.5,y:331},0).wait(1).to({rotation:0.5,x:189.2,y:332.4},0).wait(1).to({rotation:1.4,x:193.7,y:334.6},0).wait(1).to({rotation:2.3,x:198.7,y:337.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:3.3,x:203.9,y:339.8},0).wait(1).to({rotation:4.3,x:209.1,y:342.4},0).wait(1).to({rotation:5.2,x:214.1,y:344.9},0).wait(1).to({rotation:6,x:218.5,y:347.2},0).wait(1).to({rotation:6.5,x:221.3,y:348.6},0).wait(1).to({rotation:7,x:222.6,y:348.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.8,x:225,y:347.9},0).wait(1).to({rotation:8.8,x:227.8,y:347.4},0).wait(1).to({rotation:9.8,x:230.7,y:346.9},0).wait(1).to({rotation:10.8,x:233.7,y:346.3},0).wait(1).to({rotation:11.8,x:236.7,y:345.8},0).wait(1).to({rotation:12.8,x:239.6,y:345.2},0).wait(1).to({rotation:13.7,x:242.4,y:344.7},0).wait(1).to({rotation:14.6,x:244.8,y:344.3},0).wait(1).to({rotation:15,x:246.3,y:344},0).wait(1).to({rotation:15.5,x:247.5,y:343.9},0).wait(1).to({rotation:16.3,x:249.7,y:343.7},0).wait(1).to({rotation:17.2,x:252.2,y:343.6},0).wait(1).to({rotation:18.2,x:254.8,y:343.4},0).wait(1).to({rotation:19.2,x:257.6,y:343.1},0).wait(1).to({rotation:20.2,x:260.3,y:342.9},0).wait(1).to({rotation:21.2,x:263.1,y:342.7},0).wait(1).to({rotation:22.2,x:265.7,y:342.5},0).wait(1).to({rotation:23.1,x:268.2,y:342.3},0).wait(1).to({rotation:23.9,x:270.4,y:342.1},0).wait(1).to({regX:14.2,regY:8.8,rotation:24.3,x:271.6},0).wait(1).to({regX:11.5,regY:9,rotation:20,x:270.4,y:339.7},0).wait(1).to({rotation:13.4,x:272.4,y:337.4},0).wait(1).to({rotation:6.2,x:274.7,y:335.1},0).wait(1).to({rotation:-1,x:277,y:332.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.6,x:279.2,y:330.4},0).wait(1).to({rotation:-11.9,x:283.2,y:328.3},0).wait(1).to({rotation:-10.1,x:284,y:328.7},0).wait(1).to({rotation:-6.8,x:285.4,y:329.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.9,x:287.1,y:330.5},0).wait(1).to({rotation:1.3,x:289,y:331.6},0).wait(1).to({rotation:5.7,x:290.9,y:332.7},0).wait(1).to({rotation:10.2,x:292.9,y:333.8},0).wait(1).to({rotation:14.7,x:294.8,y:334.9},0).wait(1).to({rotation:19.3,x:296.9,y:336.1},0).wait(1).to({rotation:23.8,x:298.9,y:337.2},0).wait(1).to({rotation:28.2,x:300.7,y:338.2},0).wait(1).to({rotation:32.4,x:302.6,y:339.3},0).wait(1).to({rotation:36.3,x:304.3,y:340.3},0).wait(1).to({rotation:39.6,x:305.8,y:341},0).wait(1).to({rotation:41.4,x:306.5,y:341.6},0).wait(1).to({rotation:41.7,x:307,y:341.1},0).wait(1).to({rotation:42.4,x:308.1,y:340.3},0).wait(1).to({rotation:43.3,x:309.3,y:339.4},0).wait(1).to({rotation:44.2,x:310.7,y:338.3},0).wait(1).to({rotation:45.1,x:312.1,y:337.3},0).wait(1).to({rotation:46.1,x:313.5,y:336.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:47.1,x:315,y:334.9},0).wait(1).to({rotation:48.2,x:316.5,y:333.8},0).wait(1).to({rotation:49.2,x:318,y:332.7},0).wait(1).to({rotation:50.2,x:319.5,y:331.5},0).wait(1).to({rotation:51.2,x:321,y:330.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:52.1,x:322.4,y:329.3},0).wait(1).to({rotation:53.1,x:323.7,y:328.2},0).wait(1).to({rotation:53.9,x:325,y:327.3},0).wait(1).to({rotation:54.6,x:326,y:326.5},0).wait(1).to({rotation:55,x:326.6,y:326},0).wait(1));

	// fore_2
	this.instance_3 = new lib.fore_2_2();
	this.instance_3.setTransform(284.5,393,1,1,0,0,0,275.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

	// cuba- donkey1
	this.instance_4 = new lib.cubadonkey1_1();
	this.instance_4.setTransform(168,300.5,1,1,0,0,0,31,36.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({x:167.9},0).wait(1).to({x:167.5,y:300.4},0).wait(1).to({x:167.1,y:300.3},0).wait(1).to({x:166.6,y:300.2},0).wait(1).to({x:165.9,y:300.1},0).wait(1).to({x:165.3,y:300},0).wait(1).to({x:164.6,y:299.8},0).wait(1).to({x:163.8,y:299.7},0).wait(1).to({x:163,y:299.5},0).wait(1).to({x:163.3},0).wait(1).to({x:163.5},0).wait(1).to({x:163.8},0).wait(1).to({x:164.1},0).wait(1).to({x:164.3},0).wait(1).to({x:164.6},0).wait(1).to({x:164.9},0).wait(1).to({x:165.2},0).wait(1).to({x:165.5},0).wait(1).to({rotation:2.1,x:167.1,y:299},0).wait(1).to({rotation:4.3,x:168.6,y:298.5},0).wait(1).to({rotation:6.4,x:170.1,y:298},0).wait(1).to({rotation:8.6,x:171.7,y:297.6},0).wait(1).to({rotation:10.7,x:173.3,y:297.2},0).wait(1).to({rotation:8.6,x:171.3,y:296.6},0).wait(1).to({rotation:6.5,x:169.4,y:296.1},0).wait(1).to({rotation:4.5,x:167.6,y:295.7},0).wait(1).to({rotation:2.6,x:165.8,y:295.2},0).wait(1).to({rotation:0.9,x:164.3,y:294.8},0).wait(1).to({rotation:0,x:163.5,y:294.5},0).wait(1).to({x:163.8,y:295.2},0).wait(1).to({x:164.1,y:295.9},0).wait(1).to({x:164.4,y:296.6},0).wait(1).to({x:164.6,y:297.3},0).wait(1).to({x:164.9,y:298.1},0).wait(1).to({x:165.2,y:298.8},0).wait(1).to({x:165.5,y:299.5},0).wait(1).to({rotation:-0.2,x:165.8,y:298.9},0).wait(1).to({rotation:-0.3,x:166.1,y:298.4},0).wait(1).to({rotation:-0.5,x:166.4,y:297.9},0).wait(1).to({rotation:-0.6,x:166.7,y:297.3},0).wait(1).to({rotation:-0.8,x:167,y:296.7},0).wait(1).to({rotation:-1,x:167.3,y:296.2},0).wait(1).to({rotation:-1.1,x:167.6,y:295.6},0).wait(1).to({rotation:-1.3,x:167.9,y:295.1},0).wait(1).to({rotation:-1.4,x:168.2,y:294.5},0).wait(1).to({rotation:-1,x:167.8,y:295.1},0).wait(1).to({rotation:-0.6,x:167.4,y:295.6},0).wait(1).to({rotation:-0.1,x:167,y:296.2},0).wait(1).to({rotation:0.3,x:166.6,y:296.8},0).wait(1).to({rotation:0.7,x:166.3,y:297.3},0).wait(1).to({rotation:1.2,x:165.9,y:297.9},0).wait(1).to({rotation:1.6,x:165.5,y:298.5},0).wait(1).to({rotation:2,x:165.2,y:299.1},0).wait(1).to({rotation:1.6,y:299.5},0).wait(1).to({rotation:1.2,x:165.4,y:299.9},0).wait(1).to({rotation:0.7,x:165.5,y:300.3},0).wait(1).to({rotation:0.3,x:165.6,y:300.7},0).wait(1).to({rotation:-0.1,x:165.7,y:301.2},0).wait(1).to({rotation:-0.6,x:165.8,y:301.6},0).wait(1).to({rotation:-1,x:166,y:302.1},0).wait(1).to({rotation:-1.4,x:166.1,y:302.5},0).wait(1).to({rotation:-1.9,x:166.2,y:303},0).wait(1).to({rotation:-2.3,x:166.3,y:303.3},0).wait(1).to({rotation:-2.8,x:166.4,y:303.8},0).wait(1).to({regX:30.9,rotation:-3.2,x:166.6,y:304.3},0).to({regX:31,rotation:2,x:165.2,y:299.1},11).wait(1).to({rotation:1.6,y:299.5},0).wait(1).to({rotation:1.2,x:165.4,y:299.9},0).wait(1).to({rotation:0.7,x:165.5,y:300.3},0).wait(1).to({rotation:0.3,x:165.6,y:300.7},0).wait(1).to({rotation:-0.1,x:165.7,y:301.2},0).wait(1).to({rotation:-0.6,x:165.8,y:301.6},0).wait(1).to({rotation:-1,x:166,y:302.1},0).wait(1).to({rotation:-1.4,x:166.1,y:302.5},0).wait(1).to({rotation:-1.9,x:166.2,y:303},0).wait(1).to({rotation:-2.3,x:166.3,y:303.3},0).wait(1).to({rotation:-2.8,x:166.4,y:303.8},0).wait(1).to({regX:30.9,rotation:-3.2,x:166.6,y:304.3},0).wait(1));

	// cuba- donkey1 back legs
	this.instance_5 = new lib.cubadonkey1backlegs_1();
	this.instance_5.setTransform(162,315.5,1,1,0,0,0,11,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:8.5,regY:14,x:159.4,y:325},0).wait(1).to({x:159,y:324.9},0).wait(1).to({x:158.6,y:324.8},0).wait(1).to({x:158.1,y:324.7},0).wait(1).to({x:157.4,y:324.6},0).wait(1).to({x:156.8,y:324.5},0).wait(1).to({x:156.1,y:324.3},0).wait(1).to({x:155.3,y:324.2},0).wait(1).to({regX:11,regY:4.5,x:157,y:314.5},0).wait(1).to({regX:8.5,regY:14,x:154.8,y:324},0).wait(1).to({x:155},0).wait(1).to({x:155.3},0).wait(1).to({x:155.6},0).wait(1).to({x:155.8},0).wait(1).to({x:156.1},0).wait(1).to({x:156.4},0).wait(1).to({x:156.7},0).wait(1).to({regX:11,regY:4.5,x:159.5,y:314.5},0).wait(1).to({regX:8.5,regY:14,rotation:9.7,x:156.5,y:322.7},0).wait(1).to({rotation:19.4,x:156,y:321.2},0).wait(1).to({rotation:29.2,x:155.7,y:319.3},0).wait(1).to({rotation:39.1,x:155.6,y:317.3},0).wait(1).to({regX:11,regY:4.5,rotation:48.9,x:164.6,y:310.8},0).wait(1).to({regX:8.5,regY:14,rotation:39.3,x:155.2,y:316.3},0).wait(1).to({rotation:29.7,x:154.9,y:317.3},0).wait(1).to({rotation:20.4,x:154.8,y:318},0).wait(1).to({rotation:11.8,y:318.6},0).wait(1).to({rotation:4.2,x:154.9,y:318.9},0).wait(1).to({regX:11,regY:4.5,rotation:0,x:157.5,y:309.5},0).wait(1).to({regX:8.5,regY:14,x:155.3,y:319.7},0).wait(1).to({x:155.6,y:320.4},0).wait(1).to({x:155.9,y:321.1},0).wait(1).to({x:156.1,y:321.8},0).wait(1).to({x:156.4,y:322.6},0).wait(1).to({x:156.7,y:323.3},0).wait(1).to({regX:11,regY:4.5,x:159.5,y:314.5},0).wait(1).to({regX:8.5,regY:14,rotation:-0.2,x:157.4,y:323.5},0).wait(1).to({rotation:-0.3,x:157.8,y:323},0).wait(1).to({rotation:-0.5,x:158.1,y:322.5},0).wait(1).to({rotation:-0.6,x:158.5,y:321.9},0).wait(1).to({rotation:-0.8,x:158.8,y:321.4},0).wait(1).to({rotation:-1,x:159.2,y:320.9},0).wait(1).to({rotation:-1.1,x:159.6,y:320.4},0).wait(1).to({rotation:-1.3,x:159.9,y:319.8},0).wait(1).to({regX:11.1,regY:4.5,rotation:-1.4,x:162.6,y:309.7},0).wait(1).to({regX:8.5,regY:14,rotation:-1,x:159.7,y:319.7},0).wait(1).to({rotation:-0.6,x:159.1,y:320.2},0).wait(1).to({rotation:-0.1,x:158.6,y:320.7},0).wait(1).to({rotation:0.3,x:158,y:321.2},0).wait(1).to({rotation:0.7,x:157.4,y:321.7},0).wait(1).to({rotation:1.2,x:156.8,y:322.2},0).wait(1).to({rotation:1.6,x:156.3,y:322.7},0).wait(1).to({regX:11,regY:4.5,rotation:2,x:158.6,y:313.9},0).wait(1).to({regX:8.5,regY:14,rotation:1.6,x:156,y:323.8},0).wait(1).to({rotation:1.2,x:156.4,y:324.3},0).wait(1).to({rotation:0.7,x:156.7,y:324.8},0).wait(1).to({rotation:0.3,x:157,y:325.3},0).wait(1).to({rotation:-0.1,x:157.3,y:325.8},0).wait(1).to({rotation:-0.6,x:157.6,y:326.2},0).wait(1).to({rotation:-1,x:157.9,y:326.7},0).wait(1).to({rotation:-1.4,x:158.2,y:327.3},0).wait(1).to({rotation:-1.9,x:158.5,y:327.7},0).wait(1).to({rotation:-2.3,x:158.8,y:328.2},0).wait(1).to({rotation:-2.8,x:159.1,y:328.7},0).wait(1).to({regX:11,regY:4.5,rotation:-3.2,x:161.5,y:319.6},0).to({rotation:2,x:158.6,y:313.9},11).wait(1).to({regX:8.5,regY:14,rotation:1.6,x:156,y:323.8},0).wait(1).to({rotation:1.2,x:156.4,y:324.3},0).wait(1).to({rotation:0.7,x:156.7,y:324.8},0).wait(1).to({rotation:0.3,x:157,y:325.3},0).wait(1).to({rotation:-0.1,x:157.3,y:325.8},0).wait(1).to({rotation:-0.6,x:157.6,y:326.2},0).wait(1).to({rotation:-1,x:157.9,y:326.7},0).wait(1).to({rotation:-1.4,x:158.2,y:327.3},0).wait(1).to({rotation:-1.9,x:158.5,y:327.7},0).wait(1).to({rotation:-2.3,x:158.8,y:328.2},0).wait(1).to({rotation:-2.8,x:159.1,y:328.7},0).wait(1).to({regX:11,regY:4.5,rotation:-3.2,x:161.5,y:319.6},0).wait(1));

	// stick_01
	this.instance_6 = new lib.stick_01_2();
	this.instance_6.setTransform(177.5,356.5,1,1,0,0,0,7.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:177.4},0).wait(1).to({x:177,y:356.4},0).wait(1).to({x:176.6,y:356.3},0).wait(1).to({x:176.1,y:356.2},0).wait(1).to({x:175.4,y:356.1},0).wait(1).to({x:174.8,y:356},0).wait(1).to({x:174.1,y:355.8},0).wait(1).to({x:173.3,y:355.7},0).wait(1).to({x:172.5,y:355.5},0).wait(1).to({x:172.8},0).wait(1).to({x:173},0).wait(1).to({x:173.3},0).wait(1).to({x:173.6},0).wait(1).to({x:173.8},0).wait(1).to({x:174.1},0).wait(1).to({x:174.4},0).wait(1).to({x:174.7},0).wait(1).to({x:175},0).wait(1).to({rotation:2.1,x:174.5,y:355.2},0).wait(1).to({rotation:4.3,x:173.9,y:354.8},0).wait(1).to({rotation:6.4,x:173.3,y:354.6},0).wait(1).to({rotation:8.6,x:172.7,y:354.2},0).wait(1).to({rotation:10.7,x:172.1,y:353.9},0).wait(1).to({rotation:8.6,x:172.3,y:353.2},0).wait(1).to({rotation:6.5,x:172.4,y:352.6},0).wait(1).to({rotation:4.5,x:172.6,y:351.9},0).wait(1).to({rotation:2.6,x:172.7,y:351.3},0).wait(1).to({rotation:0.9,x:172.9,y:350.8},0).wait(1).to({rotation:0,x:173,y:350.5},0).wait(1).to({x:173.3,y:351.2},0).wait(1).to({x:173.6,y:351.9},0).wait(1).to({x:173.9,y:352.6},0).wait(1).to({x:174.1,y:353.3},0).wait(1).to({x:174.4,y:354.1},0).wait(1).to({x:174.7,y:354.8},0).wait(1).to({x:175,y:355.5},0).wait(1).to({rotation:-0.2,x:175.5,y:354.9},0).wait(1).to({rotation:-0.3,x:175.9,y:354.3},0).wait(1).to({rotation:-0.5,x:176.3,y:353.8},0).wait(1).to({rotation:-0.6,x:176.8,y:353.2},0).wait(1).to({rotation:-0.8,x:177.2,y:352.6},0).wait(1).to({rotation:-1,x:177.7,y:352},0).wait(1).to({rotation:-1.1,x:178.2,y:351.5},0).wait(1).to({rotation:-1.3,x:178.6,y:350.9},0).wait(1).to({regY:47.6,rotation:-1.4,x:179.1,y:350.4},0).wait(1).to({regY:47.5,rotation:-1,x:178.3,y:350.9},0).wait(1).to({rotation:-0.6,x:177.5,y:351.5},0).wait(1).to({rotation:-0.1,x:176.6,y:352.2},0).wait(1).to({rotation:0.3,x:175.8,y:352.8},0).wait(1).to({rotation:0.7,x:175,y:353.4},0).wait(1).to({rotation:1.2,x:174.2,y:354.1},0).wait(1).to({rotation:1.6,x:173.4,y:354.7},0).wait(1).to({rotation:2,x:172.7,y:355.4},0).wait(1).to({rotation:1.6,x:173.2,y:355.7},0).wait(1).to({rotation:1.2,x:173.8,y:356.1},0).wait(1).to({rotation:0.7,x:174.3,y:356.5},0).wait(1).to({rotation:0.3,x:174.8,y:356.8},0).wait(1).to({rotation:-0.1,x:175.4,y:357.2},0).wait(1).to({rotation:-0.6,x:175.9,y:357.5},0).wait(1).to({rotation:-1,x:176.5,y:357.9},0).wait(1).to({rotation:-1.4,x:177,y:358.2},0).wait(1).to({rotation:-1.9,x:177.6,y:358.6},0).wait(1).to({rotation:-2.3,x:178.1,y:358.9},0).wait(1).to({rotation:-2.8,x:178.7,y:359.3},0).wait(1).to({regY:47.6,rotation:-3.2,x:179.3,y:359.8},0).to({regY:47.5,rotation:2,x:172.7,y:355.4},11).wait(1).to({rotation:1.6,x:173.2,y:355.7},0).wait(1).to({rotation:1.2,x:173.8,y:356.1},0).wait(1).to({rotation:0.7,x:174.3,y:356.5},0).wait(1).to({rotation:0.3,x:174.8,y:356.8},0).wait(1).to({rotation:-0.1,x:175.4,y:357.2},0).wait(1).to({rotation:-0.6,x:175.9,y:357.5},0).wait(1).to({rotation:-1,x:176.5,y:357.9},0).wait(1).to({rotation:-1.4,x:177,y:358.2},0).wait(1).to({rotation:-1.9,x:177.6,y:358.6},0).wait(1).to({rotation:-2.3,x:178.1,y:358.9},0).wait(1).to({rotation:-2.8,x:178.7,y:359.3},0).wait(1).to({regY:47.6,rotation:-3.2,x:179.3,y:359.8},0).wait(1));

	// cuba_d2
	this.instance_7 = new lib.cuba_d2();
	this.instance_7.setTransform(229.5,299.5,1,1,0,0,0,31.5,42.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:70,x:229.6,y:327},0).wait(1).to({x:229.8},0).wait(1).to({x:230,y:326.9},0).wait(1).to({x:230.4},0).wait(1).to({x:230.7},0).wait(1).to({x:231.1,y:326.8},0).wait(1).to({x:231.6},0).wait(1).to({x:232,y:326.7},0).wait(1).to({x:232.5},0).wait(1).to({x:233,y:326.6},0).wait(1).to({x:233.5},0).wait(1).to({regY:42.5,x:234,y:299},0).wait(1).to({regY:70,x:233.6,y:326.9},0).wait(1).to({x:233.1,y:327.3},0).wait(1).to({x:232.7,y:327.6},0).wait(1).to({x:232.3,y:328},0).wait(1).to({x:231.8,y:328.4},0).wait(1).to({x:231.4,y:328.8},0).wait(1).to({x:230.9,y:329.3},0).wait(1).to({x:230.4,y:329.7},0).wait(1).to({x:230,y:330.1},0).wait(1).to({regY:42.5,x:229.5,y:303},0).wait(1).to({regY:70,x:229.2,y:330.3},0).wait(1).to({x:228.9,y:330},0).wait(1).to({x:228.6,y:329.8},0).wait(1).to({x:228.3,y:329.5},0).wait(1).to({x:228.1,y:329.3},0).wait(1).to({x:227.8,y:329},0).wait(1).to({x:227.5,y:328.8},0).wait(1).to({x:227.2,y:328.5},0).wait(1).to({x:226.9,y:328.3},0).wait(1).to({x:226.6,y:328},0).wait(1).to({x:226.3,y:327.8},0).wait(1).to({regY:42.5,x:226,y:300},0).wait(1).to({regY:70,x:226.6,y:327.7},0).wait(1).to({x:227.2,y:327.8},0).wait(1).to({x:227.8,y:328},0).wait(1).to({x:228.4,y:328.1},0).wait(1).to({x:229,y:328.3},0).wait(1).to({x:229.6,y:328.4},0).wait(1).to({x:230.2,y:328.6},0).wait(1).to({x:230.8,y:328.7},0).wait(1).to({x:231.4,y:328.9},0).wait(1).to({regY:42.5,x:232,y:301.5},0).wait(1).to({regY:70,x:231.5,y:329},0).wait(1).to({x:231,y:328.9},0).wait(1).to({x:230.5},0).wait(1).to({x:230,y:328.8},0).wait(1).to({x:229.6},0).wait(1).to({regY:42.5,x:229.1,y:301.3},0).wait(1).to({regY:70,x:228.6,y:328.7},0).wait(1).to({x:228.2},0).wait(1).to({x:227.7,y:328.6},0).wait(1).to({x:227.3},0).wait(1).to({x:226.8},0).wait(1).to({x:226.4,y:328.5},0).wait(1).to({regY:42.5,x:226,y:301},0).wait(1).to({regY:70,x:226.3,y:328.9},0).wait(1).to({x:226.6,y:329.3},0).wait(1).to({x:226.9,y:329.7},0).wait(1).to({x:227.2,y:330},0).wait(1).to({x:227.5,y:330.3},0).wait(1).to({x:227.7,y:330.6},0).wait(1).to({x:227.9,y:330.8},0).wait(1).to({regY:42.5,x:228,y:303.5},0).to({x:229.1,y:301.3},8).wait(1).to({regY:70,x:228.6,y:328.7},0).wait(1).to({x:228.2},0).wait(1).to({x:227.7,y:328.6},0).wait(1).to({x:227.3},0).wait(1).to({x:226.8},0).wait(1).to({x:226.4,y:328.5},0).wait(1).to({regY:42.5,x:226,y:301},0).wait(1).to({regY:70,x:226.3,y:328.9},0).wait(1).to({x:226.6,y:329.3},0).wait(1).to({x:226.9,y:329.7},0).wait(1).to({x:227.2,y:330},0).wait(1).to({x:227.5,y:330.3},0).wait(1).to({x:227.7,y:330.6},0).wait(1).to({x:227.9,y:330.8},0).wait(1).to({regY:42.5,x:228,y:303.5},0).wait(1));

	// cuba- doneky3
	this.instance_8 = new lib.cubadoneky3_1();
	this.instance_8.setTransform(355,312,1,1,0,0,0,46,28);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:-0.1,x:354.5},0).wait(1).to({rotation:-0.3,x:353.7},0).wait(1).to({rotation:-0.5,x:352.7},0).wait(1).to({rotation:-0.7,x:351.5},0).wait(1).to({rotation:-1,x:350.4},0).wait(1).to({rotation:-1.2,x:349.2},0).wait(1).to({rotation:-1.5,x:348},0).wait(1).to({rotation:-1.7,x:346.8,y:312.1},0).wait(1).to({rotation:-2,x:345.6},0).wait(1).to({rotation:-2.2,x:344.4},0).wait(1).to({rotation:-2.5,x:343.3,y:312},0).wait(1).to({rotation:-2.7,x:342.3,y:312.1},0).wait(1).to({rotation:-2.9,x:341.5},0).wait(1).to({regY:28.1,rotation:-3,x:341},0).wait(1).to({regY:28,rotation:-2.8,x:341.2,y:312},0).wait(1).to({rotation:-2.5,x:341.7,y:312.1},0).wait(1).to({rotation:-2.1,x:342.4},0).wait(1).to({rotation:-1.5,x:343.2,y:312.2},0).wait(1).to({rotation:-0.9,x:344.1},0).wait(1).to({rotation:-0.2,x:345,y:312.3},0).wait(1).to({rotation:0.4,x:346.1,y:312.4},0).wait(1).to({rotation:1.2,x:347.2,y:312.5},0).wait(1).to({rotation:1.9,x:348.3,y:312.6},0).wait(1).to({rotation:2.7,x:349.5},0).wait(1).to({regY:28.1,rotation:3.5,x:350.7,y:312.8},0).wait(1).to({regY:28,rotation:3.2,x:349.8,y:312.7},0).wait(1).to({rotation:2.8,x:349},0).wait(1).to({rotation:2.4,x:348.1,y:312.8},0).wait(1).to({rotation:2,x:347.3,y:312.7},0).wait(1).to({rotation:1.7,x:346.5},0).wait(1).to({regX:46.1,rotation:1.3,x:345.7,y:312.8},0).wait(1).to({regX:46,rotation:-1.7,x:342.5,y:312.4},0).wait(1).to({rotation:-4.8,x:339.4,y:312},0).wait(1).to({rotation:-7.8,x:336.2,y:311.6},0).wait(1).to({rotation:-10.9,x:333.2,y:311.2},0).wait(1).to({regX:46.1,rotation:-13.9,x:330.1,y:310.8},0).wait(1).to({regX:46,rotation:-10.4,x:333.7,y:311.3},0).wait(1).to({rotation:-6.8,x:337.2,y:311.7},0).wait(1).to({rotation:-3.5,x:340.7,y:312.1},0).wait(1).to({rotation:-0.5,x:343.7,y:312.5},0).wait(1).to({regX:46.1,rotation:1.3,x:345.7,y:312.8},0).wait(1).to({regX:46,rotation:1.6},0).wait(1).to({rotation:2,x:345.9,y:312.9},0).wait(1).to({rotation:2.4,x:346.1,y:313},0).wait(1).to({rotation:2.7,x:346.3},0).wait(1).to({rotation:3.1,x:346.6,y:313.1},0).wait(1).to({rotation:3.4,x:346.7,y:313.2},0).wait(1).to({rotation:3.8,x:347,y:313.3},0).wait(1).to({rotation:4.2,x:347.1},0).wait(1).to({rotation:4.5,x:347.5,y:313.4},0).wait(1).to({rotation:4.8,x:348.2,y:313.3},0).wait(1).to({rotation:5,x:348.9},0).wait(1).to({rotation:5.3,x:349.6,y:313.2},0).wait(1).to({rotation:5.5,x:350.3,y:313.1},0).wait(1).to({rotation:5.8,x:351},0).wait(1).to({rotation:6,x:351.7,y:313},0).wait(1).to({rotation:6.3,x:352.4},0).wait(1).to({regX:46.1,rotation:6.5,x:353.2,y:312.9},0).wait(1).to({regX:46,rotation:6,x:352,y:312.7},0).wait(1).to({rotation:5.5,x:351,y:312.5},0).wait(1).to({rotation:5,x:349.8,y:312.3},0).wait(1).to({rotation:4.5,x:348.8,y:312.1},0).wait(1).to({rotation:4,x:347.7,y:311.9},0).wait(1).to({rotation:3.5,x:346.6,y:311.7},0).wait(1).to({regX:46.1,rotation:3,x:345.6,y:311.5},0).to({regX:46,rotation:4.5,x:347.5,y:313.4},8).wait(1).to({rotation:4.8,x:348.2,y:313.3},0).wait(1).to({rotation:5,x:348.9},0).wait(1).to({rotation:5.3,x:349.6,y:313.2},0).wait(1).to({rotation:5.5,x:350.3,y:313.1},0).wait(1).to({rotation:5.8,x:351},0).wait(1).to({rotation:6,x:351.7,y:313},0).wait(1).to({rotation:6.3,x:352.4},0).wait(1).to({regX:46.1,rotation:6.5,x:353.2,y:312.9},0).wait(1).to({regX:46,rotation:6,x:352,y:312.7},0).wait(1).to({rotation:5.5,x:351,y:312.5},0).wait(1).to({rotation:5,x:349.8,y:312.3},0).wait(1).to({rotation:4.5,x:348.8,y:312.1},0).wait(1).to({rotation:4,x:347.7,y:311.9},0).wait(1).to({rotation:3.5,x:346.6,y:311.7},0).wait(1).to({regX:46.1,rotation:3,x:345.6,y:311.5},0).wait(1));

	// cuba- donkey3 back legs
	this.instance_9 = new lib.cubadonkey3backlegs_1();
	this.instance_9.setTransform(386.5,314.5,1,1,0,0,0,12.5,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:11,regY:15,rotation:-0.1,x:384.6,y:328},0).wait(1).to({rotation:-0.3,x:383.7,y:327.9},0).wait(1).to({rotation:-0.5,x:382.8,y:327.7},0).wait(1).to({rotation:-0.7,x:381.7,y:327.6},0).wait(1).to({rotation:-1,x:380.6,y:327.5},0).wait(1).to({rotation:-1.2,x:379.5,y:327.3},0).wait(1).to({rotation:-1.5,x:378.4,y:327.2},0).wait(1).to({rotation:-1.7,x:377.3,y:327.1},0).wait(1).to({rotation:-2,x:376.1,y:326.9},0).wait(1).to({rotation:-2.2,x:375.1,y:326.8},0).wait(1).to({rotation:-2.5,x:374,y:326.7},0).wait(1).to({rotation:-2.7,x:373.1,y:326.6},0).wait(1).to({rotation:-2.9,x:372.3,y:326.5},0).wait(1).to({regX:12.6,regY:1.5,rotation:-3,x:372.7,y:312.9},0).wait(1).to({regX:11,regY:15,rotation:-2.8,x:372,y:326.5},0).wait(1).to({rotation:-2.5,x:372.3,y:326.7},0).wait(1).to({rotation:-2.1,x:372.9,y:327},0).wait(1).to({rotation:-1.5,x:373.5,y:327.4},0).wait(1).to({rotation:-0.9,x:374.3,y:327.8},0).wait(1).to({rotation:-0.2,x:375,y:328.2},0).wait(1).to({rotation:0.4,x:375.9,y:328.6},0).wait(1).to({rotation:1.2,x:376.8,y:329.1},0).wait(1).to({rotation:1.9,x:377.7,y:329.5},0).wait(1).to({rotation:2.7,x:378.6,y:330},0).wait(1).to({regX:12.5,regY:1.6,rotation:3.5,x:382,y:317.2},0).wait(1).to({regX:11,regY:15,rotation:3.2,x:378.9,y:330.3},0).wait(1).to({rotation:2.8,x:378.2,y:330.2},0).wait(1).to({rotation:2.4,x:377.5,y:329.9},0).wait(1).to({rotation:2,x:376.7,y:329.8},0).wait(1).to({rotation:1.7,x:376,y:329.5},0).wait(1).to({regX:12.6,regY:1.5,rotation:1.3,x:377.1,y:316},0).wait(1).to({regX:11,regY:15,rotation:-9.7,x:374.1,y:327},0).wait(1).to({rotation:-20.6,x:373.1,y:324},0).wait(1).to({rotation:-31.7,x:371.9,y:320.5},0).wait(1).to({rotation:-42.8,x:370.4,y:316.6},0).wait(1).to({regX:12.6,regY:1.6,rotation:-53.9,x:358.8,y:303.1},0).wait(1).to({regX:11,regY:15,rotation:-40.9,x:370.7,y:317.3},0).wait(1).to({rotation:-28.1,x:372.2,y:321.7},0).wait(1).to({rotation:-15.9,x:373.5,y:325.3},0).wait(1).to({rotation:-5.1,x:374.5,y:328},0).wait(1).to({regX:12.6,regY:1.5,rotation:1.3,x:377.1,y:316},0).wait(1).to({regX:11,regY:15,rotation:1.6,x:375.2,y:329.6},0).wait(1).to({rotation:2,x:375.4,y:329.9},0).wait(1).to({rotation:2.4,x:375.5,y:330.2},0).wait(1).to({rotation:2.7,x:375.6,y:330.4},0).wait(1).to({rotation:3.1,x:375.7,y:330.7},0).wait(1).to({rotation:3.4,x:375.8,y:330.9},0).wait(1).to({rotation:3.8,y:331.2},0).wait(1).to({rotation:4.2,x:375.9,y:331.5},0).wait(1).to({regX:12.6,regY:1.5,rotation:4.5,x:378.7,y:318.5},0).wait(1).to({regX:11,regY:15,rotation:4.8,x:376.7,y:331.8},0).wait(1).to({rotation:5,x:377.3,y:331.9},0).wait(1).to({rotation:5.3,x:377.9,y:332},0).wait(1).to({rotation:5.5,x:378.6},0).wait(1).to({rotation:5.8,x:379.2},0).wait(1).to({rotation:6,x:379.9,y:332.1},0).wait(1).to({rotation:6.3,x:380.5,y:332.2},0).wait(1).to({regX:12.6,regY:1.6,rotation:6.5,x:384.2,y:319.1},0).wait(1).to({regX:11,regY:15,rotation:6,x:380.2,y:331.7},0).wait(1).to({rotation:5.5,x:379.3,y:331.3},0).wait(1).to({rotation:5,x:378.3,y:330.8},0).wait(1).to({rotation:4.5,x:377.4,y:330.3},0).wait(1).to({rotation:4,x:376.4,y:329.9},0).wait(1).to({rotation:3.5,x:375.5,y:329.4},0).wait(1).to({regX:12.5,regY:1.6,rotation:3,x:376.9,y:315.7},0).to({regX:12.6,regY:1.5,rotation:4.5,x:378.7,y:318.5},8).wait(1).to({regX:11,regY:15,rotation:4.8,x:376.7,y:331.8},0).wait(1).to({rotation:5,x:377.3,y:331.9},0).wait(1).to({rotation:5.3,x:377.9,y:332},0).wait(1).to({rotation:5.5,x:378.6},0).wait(1).to({rotation:5.8,x:379.2},0).wait(1).to({rotation:6,x:379.9,y:332.1},0).wait(1).to({rotation:6.3,x:380.5,y:332.2},0).wait(1).to({regX:12.6,regY:1.6,rotation:6.5,x:384.2,y:319.1},0).wait(1).to({regX:11,regY:15,rotation:6,x:380.2,y:331.7},0).wait(1).to({rotation:5.5,x:379.3,y:331.3},0).wait(1).to({rotation:5,x:378.3,y:330.8},0).wait(1).to({rotation:4.5,x:377.4,y:330.3},0).wait(1).to({rotation:4,x:376.4,y:329.9},0).wait(1).to({rotation:3.5,x:375.5,y:329.4},0).wait(1).to({regX:12.5,regY:1.6,rotation:3,x:376.9,y:315.7},0).wait(1));

	// stick_01
	this.instance_10 = new lib.stick_01_2();
	this.instance_10.setTransform(363.5,350.5,1,1,0,0,0,7.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:-0.1,x:363.1},0).wait(1).to({rotation:-0.3,x:362.4,y:350.4},0).wait(1).to({rotation:-0.5,x:361.5},0).wait(1).to({rotation:-0.7,x:360.5},0).wait(1).to({rotation:-1,x:359.5,y:350.3},0).wait(1).to({rotation:-1.2,x:358.5},0).wait(1).to({rotation:-1.5,x:357.5},0).wait(1).to({rotation:-1.7,x:356.5,y:350.2},0).wait(1).to({rotation:-2,x:355.4},0).wait(1).to({rotation:-2.2,x:354.4,y:350.1},0).wait(1).to({rotation:-2.5,x:353.5},0).wait(1).to({rotation:-2.7,x:352.6},0).wait(1).to({rotation:-2.9,x:351.9,y:350},0).wait(1).to({rotation:-3,x:351.5,y:350.1},0).wait(1).to({rotation:-2.8,x:351.6},0).wait(1).to({rotation:-2.5,x:351.9},0).wait(1).to({rotation:-2.1,x:352.3,y:350.3},0).wait(1).to({rotation:-1.5,x:352.7,y:350.4},0).wait(1).to({rotation:-0.9,x:353.2,y:350.6},0).wait(1).to({rotation:-0.2,x:353.7,y:350.7},0).wait(1).to({rotation:0.4,x:354.3,y:350.9},0).wait(1).to({rotation:1.2,x:354.9,y:351.1},0).wait(1).to({rotation:1.9,x:355.5,y:351.3},0).wait(1).to({rotation:2.7,x:356.1,y:351.5},0).wait(1).to({rotation:3.5,x:356.8,y:351.7},0).wait(1).to({rotation:3.2,x:356.2},0).wait(1).to({rotation:2.8,x:355.7,y:351.6},0).wait(1).to({rotation:2.4,x:355.1},0).wait(1).to({rotation:2,x:354.4,y:351.5},0).wait(1).to({rotation:1.7,x:353.9},0).wait(1).to({rotation:1.3,x:353.2},0).wait(1).to({rotation:-1.7,x:352.1,y:350.4},0).wait(1).to({rotation:-4.8,x:350.9,y:349.3},0).wait(1).to({rotation:-7.8,x:349.8,y:348.2},0).wait(1).to({rotation:-10.9,x:348.7,y:347.2},0).wait(1).to({rotation:-13.9,x:347.6,y:346.1},0).wait(1).to({rotation:-10.4,x:348.9,y:347.3},0).wait(1).to({rotation:-6.8,x:350.2,y:348.6},0).wait(1).to({rotation:-3.5,x:351.4,y:349.8},0).wait(1).to({rotation:-0.5,x:352.5,y:350.8},0).wait(1).to({rotation:1.3,x:353.2,y:351.5},0).wait(1).to({rotation:1.6,y:351.6},0).wait(1).to({rotation:2,x:353.1},0).wait(1).to({rotation:2.4,y:351.7},0).wait(1).to({rotation:2.7,x:353,y:351.9},0).wait(1).to({rotation:3.1},0).wait(1).to({rotation:3.4,y:352.1},0).wait(1).to({rotation:3.8,x:352.9,y:352.2},0).wait(1).to({rotation:4.2,y:352.3},0).wait(1).to({rotation:4.5,x:352.8,y:352.4},0).wait(1).to({rotation:4.8,x:353.3},0).wait(1).to({rotation:5,x:353.9,y:352.3},0).wait(1).to({rotation:5.3,x:354.4},0).wait(1).to({rotation:5.5,x:355,y:352.2},0).wait(1).to({rotation:5.8,x:355.5},0).wait(1).to({rotation:6,x:356.1},0).wait(1).to({rotation:6.3,x:356.6,y:352.1},0).wait(1).to({rotation:6.5,x:357.3,y:352.2},0).wait(1).to({rotation:6,x:356.5,y:352},0).wait(1).to({rotation:5.5,x:355.8,y:351.7},0).wait(1).to({rotation:5,x:355,y:351.4},0).wait(1).to({rotation:4.5,x:354.3,y:351.2},0).wait(1).to({rotation:4,x:353.5,y:350.9},0).wait(1).to({rotation:3.5,x:352.7,y:350.6},0).wait(1).to({regY:47.4,rotation:3,x:352,y:350.4},0).to({regY:47.5,rotation:4.5,x:352.8,y:352.4},8).wait(1).to({rotation:4.8,x:353.3},0).wait(1).to({rotation:5,x:353.9,y:352.3},0).wait(1).to({rotation:5.3,x:354.4},0).wait(1).to({rotation:5.5,x:355,y:352.2},0).wait(1).to({rotation:5.8,x:355.5},0).wait(1).to({rotation:6,x:356.1},0).wait(1).to({rotation:6.3,x:356.6,y:352.1},0).wait(1).to({rotation:6.5,x:357.3,y:352.2},0).wait(1).to({rotation:6,x:356.5,y:352},0).wait(1).to({rotation:5.5,x:355.8,y:351.7},0).wait(1).to({rotation:5,x:355,y:351.4},0).wait(1).to({rotation:4.5,x:354.3,y:351.2},0).wait(1).to({rotation:4,x:353.5,y:350.9},0).wait(1).to({rotation:3.5,x:352.7,y:350.6},0).wait(1).to({regY:47.4,rotation:3,x:352,y:350.4},0).wait(1));

	// cuba- doneky4 back legs
	this.instance_11 = new lib.cubadoneky4backlegs_1();
	this.instance_11.setTransform(541.5,349.5,1,1,0,0,0,21.5,6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:14,regY:19.5,x:533,y:362.7},0).wait(1).to({x:531.3,y:362.1},0).wait(1).to({x:529.3,y:361.4},0).wait(1).to({x:527.1,y:360.7},0).wait(1).to({x:524.9,y:359.9},0).wait(1).to({x:522.6,y:359.1},0).wait(1).to({x:520.3,y:358.4},0).wait(1).to({x:518,y:357.6},0).wait(1).to({x:515.8,y:356.8},0).wait(1).to({x:513.6,y:356.1},0).wait(1).to({x:511.6,y:355.4},0).wait(1).to({x:509.9,y:354.8},0).wait(1).to({regX:21.5,regY:6,x:516.5,y:341},0).wait(1).to({regX:14,regY:19.5,x:508.5,y:354.4},0).wait(1).to({x:507.7,y:354.2},0).wait(1).to({x:506.7,y:354},0).wait(1).to({x:505.6,y:353.8},0).wait(1).to({x:504.4,y:353.6},0).wait(1).to({x:503.2,y:353.4},0).wait(1).to({x:502,y:353.1},0).wait(1).to({x:500.9,y:352.9},0).wait(1).to({x:499.7,y:352.6},0).wait(1).to({x:498.5,y:352.4},0).wait(1).to({x:497.3,y:352.2},0).wait(1).to({x:496.2,y:352},0).wait(1).to({x:495.2,y:351.8},0).wait(1).to({x:494.4,y:351.6},0).wait(1).to({regX:21.5,regY:6,x:501.5,y:338},0).wait(1).to({regX:14,regY:19.5,x:493.5,y:351.4},0).wait(1).to({x:492.8,y:351.1},0).wait(1).to({x:491.9,y:350.8},0).wait(1).to({x:490.9,y:350.4},0).wait(1).to({x:489.9,y:350.1},0).wait(1).to({x:489,y:349.8},0).wait(1).to({x:488,y:349.4},0).wait(1).to({x:487,y:349.1},0).wait(1).to({x:486,y:348.7},0).wait(1).to({x:485.1,y:348.4},0).wait(1).to({x:484.4,y:348.1},0).wait(1).to({regX:21.5,regY:6,x:491.5,y:334.5},0).wait(1).to({regX:14,regY:19.5,x:483.8,y:348.1},0).wait(1).to({x:483.7,y:348.2},0).wait(1).to({x:483.4,y:348.3},0).wait(1).to({regX:21.5,regY:6,x:490.7,y:335},0).wait(1).to({regX:14,regY:19.5,rotation:2.5,x:482.5,y:349.4},0).wait(1).to({rotation:5.1,x:481.6,y:350.3},0).wait(1).to({rotation:7.7,x:480.9,y:351.2},0).wait(1).to({rotation:10.2,x:480.2,y:352.1},0).wait(1).to({regX:21.6,regY:6,rotation:12.7,x:489.8,y:341.5},0).wait(1).to({regX:14,regY:19.5,rotation:8.6,x:480.8,y:351.5},0).wait(1).to({rotation:4.8,x:482.1,y:350},0).wait(1).to({rotation:1.7,x:483.3,y:348.7},0).wait(1).to({regX:21.5,regY:6,rotation:0,x:491.5,y:334.5},0).wait(1).to({regX:14,regY:19.5,rotation:-4.7,x:484.4,y:347.7},0).wait(1).to({rotation:-13.5,x:485.4,y:346.9},0).wait(1).to({rotation:-24,x:486.7,y:345.5},0).wait(1).to({rotation:-35.4,x:488.1,y:343.4},0).wait(1).to({regX:21.5,regY:6,rotation:-47.4,x:484.7,y:325.8},0).wait(1).to({regX:14,regY:19.5,rotation:-43.3,x:488.9,y:341.7},0).wait(1).to({rotation:-36.6,x:487.8,y:343.4},0).wait(1).to({rotation:-29.2,x:486.4,y:345.1},0).wait(1).to({rotation:-21.5,x:485,y:346.7},0).wait(1).to({rotation:-13.9,x:483.7,y:347.9},0).wait(1).to({rotation:-6.5,x:482.4,y:348.8},0).wait(1).to({regX:21.5,regY:6,rotation:0,x:489,y:336},0).to({regX:21.6,rotation:12.7,x:489.8,y:341.5},7).wait(1).to({regX:14,regY:19.5,rotation:8.6,x:480.8,y:351.5},0).wait(1).to({rotation:4.8,x:482.1,y:350},0).wait(1).to({rotation:1.7,x:483.3,y:348.7},0).wait(1).to({regX:21.5,regY:6,rotation:0,x:491.5,y:334.5},0).wait(1).to({regX:14,regY:19.5,rotation:-4.7,x:484.4,y:347.7},0).wait(1).to({rotation:-13.5,x:485.4,y:346.9},0).wait(1).to({rotation:-24,x:486.7,y:345.5},0).wait(1).to({rotation:-35.4,x:488.1,y:343.4},0).wait(1).to({regX:21.5,regY:6,rotation:-47.4,x:484.7,y:325.8},0).wait(1).to({regX:14,regY:19.5,rotation:-43.3,x:488.9,y:341.7},0).wait(1).to({rotation:-36.6,x:487.8,y:343.4},0).wait(1).to({rotation:-29.2,x:486.4,y:345.1},0).wait(1).to({rotation:-21.5,x:485,y:346.7},0).wait(1).to({rotation:-13.9,x:483.7,y:347.9},0).wait(1).to({rotation:-6.5,x:482.4,y:348.8},0).wait(1).to({regX:21.5,regY:6,rotation:0,x:489,y:336},0).wait(1));

	// cuba_donkey_f _legs
	this.instance_12 = new lib.cuba_donkey_f_legs_2();
	this.instance_12.setTransform(493,336.5,1,1,0,0,0,15,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:11.5,regY:19,x:488.5,y:350.2},0).wait(1).to({x:486.8,y:349.6},0).wait(1).to({x:484.8,y:348.9},0).wait(1).to({x:482.6,y:348.2},0).wait(1).to({x:480.4,y:347.4},0).wait(1).to({x:478.1,y:346.6},0).wait(1).to({x:475.8,y:345.9},0).wait(1).to({x:473.5,y:345.1},0).wait(1).to({x:471.3,y:344.3},0).wait(1).to({x:469.1,y:343.6},0).wait(1).to({x:467.1,y:342.9},0).wait(1).to({x:465.4,y:342.3},0).wait(1).to({regX:15,regY:5,x:468,y:328},0).wait(1).to({regX:11.5,regY:19,x:464,y:341.9},0).wait(1).to({x:463.2,y:341.7},0).wait(1).to({x:462.2,y:341.5},0).wait(1).to({x:461.1,y:341.3},0).wait(1).to({x:459.9,y:341.1},0).wait(1).to({x:458.7,y:340.9},0).wait(1).to({x:457.5,y:340.6},0).wait(1).to({x:456.4,y:340.4},0).wait(1).to({x:455.2,y:340.1},0).wait(1).to({x:454,y:339.9},0).wait(1).to({x:452.8,y:339.7},0).wait(1).to({x:451.7,y:339.5},0).wait(1).to({x:450.7,y:339.3},0).wait(1).to({x:449.9,y:339.1},0).wait(1).to({regX:15,regY:5,x:453,y:325},0).wait(1).to({regX:11.5,regY:19,x:449,y:338.9},0).wait(1).to({x:448.3,y:338.6},0).wait(1).to({x:447.4,y:338.3},0).wait(1).to({x:446.4,y:337.9},0).wait(1).to({x:445.4,y:337.6},0).wait(1).to({x:444.5,y:337.3},0).wait(1).to({x:443.5,y:336.9},0).wait(1).to({x:442.5,y:336.6},0).wait(1).to({x:441.5,y:336.2},0).wait(1).to({x:440.6,y:335.9},0).wait(1).to({x:439.9,y:335.6},0).wait(1).to({regX:15,regY:5,x:443,y:321.5},0).wait(1).to({regX:11.5,regY:19,x:439.3,y:335.6},0).wait(1).to({x:439.2,y:335.7},0).wait(1).to({x:438.9,y:335.8},0).wait(1).to({regX:15,regY:5,x:442.2,y:322},0).wait(1).to({regX:11.5,regY:19,rotation:8.5,x:437.7,y:334.5},0).wait(1).to({rotation:17.2,x:436.8,y:332.7},0).wait(1).to({rotation:25.9,x:436,y:330.6},0).wait(1).to({rotation:34.4,x:435.5,y:328.4},0).wait(1).to({regX:15,regY:5,rotation:42.7,x:447.3,y:318.1},0).wait(1).to({regX:11.5,regY:19,rotation:28.8,x:436,y:329.8},0).wait(1).to({rotation:16.1,x:437.3,y:332.7},0).wait(1).to({rotation:5.6,x:438.7,y:334.7},0).wait(1).to({regX:15,regY:5,rotation:0,x:443,y:321.5},0).wait(1).to({regX:11.5,regY:19,rotation:-1.7,x:439.3,y:336.5},0).wait(1).to({rotation:-5,x:438.9,y:338.4},0).wait(1).to({rotation:-8.9,x:438.5,y:340.5},0).wait(1).to({rotation:-13.2,x:438.1,y:342.8},0).wait(1).to({regX:15,regY:5,rotation:-17.7,x:436.7,y:330.7},0).wait(1).to({regX:11.5,regY:19,rotation:-16.1,x:437.6,y:344.5},0).wait(1).to({rotation:-13.7,x:437.4,y:343.4},0).wait(1).to({rotation:-10.9,y:342.2},0).wait(1).to({rotation:-8,x:437.2,y:340.9},0).wait(1).to({rotation:-5.2,x:437.1,y:339.5},0).wait(1).to({rotation:-2.4,x:437,y:338.2},0).wait(1).to({regX:15,regY:5,rotation:0,x:440.5,y:323},0).to({rotation:42.7,x:447.3,y:318.1},7).wait(1).to({regX:11.5,regY:19,rotation:28.8,x:436,y:329.8},0).wait(1).to({rotation:16.1,x:437.3,y:332.7},0).wait(1).to({rotation:5.6,x:438.7,y:334.7},0).wait(1).to({regX:15,regY:5,rotation:0,x:443,y:321.5},0).wait(1).to({regX:11.5,regY:19,rotation:-1.7,x:439.3,y:336.5},0).wait(1).to({rotation:-5,x:438.9,y:338.4},0).wait(1).to({rotation:-8.9,x:438.5,y:340.5},0).wait(1).to({rotation:-13.2,x:438.1,y:342.8},0).wait(1).to({regX:15,regY:5,rotation:-17.7,x:436.7,y:330.7},0).wait(1).to({regX:11.5,regY:19,rotation:-16.1,x:437.6,y:344.5},0).wait(1).to({rotation:-13.7,x:437.4,y:343.4},0).wait(1).to({rotation:-10.9,y:342.2},0).wait(1).to({rotation:-8,x:437.2,y:340.9},0).wait(1).to({rotation:-5.2,x:437.1,y:339.5},0).wait(1).to({rotation:-2.4,x:437,y:338.2},0).wait(1).to({regX:15,regY:5,rotation:0,x:440.5,y:323},0).wait(1));

	// cuba- doneky4
	this.instance_13 = new lib.cubadoneky4_1();
	this.instance_13.setTransform(516,328,1,1,0,0,0,42,44.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({x:515,y:327.7},0).wait(1).to({x:513.3,y:327.1},0).wait(1).to({x:511.3,y:326.4},0).wait(1).to({x:509.1,y:325.7},0).wait(1).to({x:506.9,y:324.9},0).wait(1).to({x:504.6,y:324.1},0).wait(1).to({x:502.3,y:323.4},0).wait(1).to({x:500,y:322.6},0).wait(1).to({x:497.8,y:321.8},0).wait(1).to({x:495.6,y:321.1},0).wait(1).to({x:493.6,y:320.4},0).wait(1).to({x:491.9,y:319.8},0).wait(1).to({x:491,y:319.5},0).wait(1).to({x:490.5,y:319.4},0).wait(1).to({x:489.7,y:319.2},0).wait(1).to({x:488.7,y:319},0).wait(1).to({x:487.6,y:318.8},0).wait(1).to({x:486.4,y:318.6},0).wait(1).to({x:485.2,y:318.4},0).wait(1).to({x:484,y:318.1},0).wait(1).to({x:482.9,y:317.9},0).wait(1).to({x:481.7,y:317.6},0).wait(1).to({x:480.5,y:317.4},0).wait(1).to({x:479.3,y:317.2},0).wait(1).to({x:478.2,y:317},0).wait(1).to({x:477.2,y:316.8},0).wait(1).to({x:476.4,y:316.6},0).wait(1).to({x:476,y:316.5},0).wait(1).to({x:475.5,y:316.4},0).wait(1).to({x:474.8,y:316.1},0).wait(1).to({x:473.9,y:315.8},0).wait(1).to({x:472.9,y:315.4},0).wait(1).to({x:471.9,y:315.1},0).wait(1).to({x:471,y:314.8},0).wait(1).to({x:470,y:314.4},0).wait(1).to({x:469,y:314.1},0).wait(1).to({x:468,y:313.7},0).wait(1).to({x:467.1,y:313.4},0).wait(1).to({x:466.4,y:313.1},0).wait(1).to({x:466,y:313},0).wait(1).to({x:465.8,y:313.1},0).wait(1).to({x:465.7,y:313.2},0).wait(1).to({x:465.4,y:313.3},0).wait(1).to({x:465.2,y:313.5},0).wait(1).to({rotation:2.5,x:466.1,y:313.7},0).wait(1).to({rotation:5.1,x:467,y:314},0).wait(1).to({rotation:7.7,x:467.8,y:314.3},0).wait(1).to({rotation:10.2,x:468.7,y:314.5},0).wait(1).to({rotation:12.7,x:469.6,y:314.8},0).wait(1).to({rotation:8.6,x:468.4,y:314.2},0).wait(1).to({rotation:4.8,x:467.4,y:313.7},0).wait(1).to({rotation:1.7,x:466.5,y:313.2},0).wait(1).to({rotation:0,x:466,y:313},0).wait(1).to({rotation:-1.7,x:465,y:313.3},0).wait(1).to({rotation:-5,x:463.1,y:313.8},0).wait(1).to({rotation:-8.9,x:460.9,y:314.3},0).wait(1).to({rotation:-13.2,x:458.6,y:314.9},0).wait(1).to({regX:42.1,rotation:-17.7,x:456.1,y:315.7},0).wait(1).to({regX:42,rotation:-16.1,x:456.6,y:315.5},0).wait(1).to({rotation:-13.7,x:457.7,y:315.4},0).wait(1).to({rotation:-10.9,x:458.8,y:315.2},0).wait(1).to({rotation:-8,x:460,y:315},0).wait(1).to({rotation:-5.2,x:461.3,y:314.8},0).wait(1).to({rotation:-2.4,x:462.4,y:314.6},0).wait(1).to({rotation:0,x:463.5,y:314.5},0).to({rotation:12.7,x:469.6,y:314.8},7).wait(1).to({rotation:8.6,x:468.4,y:314.2},0).wait(1).to({rotation:4.8,x:467.4,y:313.7},0).wait(1).to({rotation:1.7,x:466.5,y:313.2},0).wait(1).to({rotation:0,x:466,y:313},0).wait(1).to({rotation:-1.7,x:465,y:313.3},0).wait(1).to({rotation:-5,x:463.1,y:313.8},0).wait(1).to({rotation:-8.9,x:460.9,y:314.3},0).wait(1).to({rotation:-13.2,x:458.6,y:314.9},0).wait(1).to({regX:42.1,rotation:-17.7,x:456.1,y:315.7},0).wait(1).to({regX:42,rotation:-16.1,x:456.6,y:315.5},0).wait(1).to({rotation:-13.7,x:457.7,y:315.4},0).wait(1).to({rotation:-10.9,x:458.8,y:315.2},0).wait(1).to({rotation:-8,x:460,y:315},0).wait(1).to({rotation:-5.2,x:461.3,y:314.8},0).wait(1).to({rotation:-2.4,x:462.4,y:314.6},0).wait(1).to({rotation:0,x:463.5,y:314.5},0).wait(1));

	// stick_01
	this.instance_14 = new lib.stick_01_2();
	this.instance_14.setTransform(514.5,376,1,1,0,0,0,7.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({x:513.5,y:375.7},0).wait(1).to({x:511.8,y:375.1},0).wait(1).to({x:509.8,y:374.4},0).wait(1).to({x:507.6,y:373.7},0).wait(1).to({x:505.4,y:372.9},0).wait(1).to({x:503.1,y:372.1},0).wait(1).to({x:500.8,y:371.4},0).wait(1).to({x:498.5,y:370.6},0).wait(1).to({x:496.3,y:369.8},0).wait(1).to({x:494.1,y:369.1},0).wait(1).to({x:492.1,y:368.4},0).wait(1).to({x:490.4,y:367.8},0).wait(1).to({x:489.5,y:367.5},0).wait(1).to({x:489,y:367.4},0).wait(1).to({x:488.2,y:367.2},0).wait(1).to({x:487.2,y:367},0).wait(1).to({x:486.1,y:366.8},0).wait(1).to({x:484.9,y:366.6},0).wait(1).to({x:483.7,y:366.4},0).wait(1).to({x:482.5,y:366.1},0).wait(1).to({x:481.4,y:365.9},0).wait(1).to({x:480.2,y:365.6},0).wait(1).to({x:479,y:365.4},0).wait(1).to({x:477.8,y:365.2},0).wait(1).to({x:476.7,y:365},0).wait(1).to({x:475.7,y:364.8},0).wait(1).to({x:474.9,y:364.6},0).wait(1).to({x:474.5,y:364.5},0).wait(1).to({x:474,y:364.4},0).wait(1).to({x:473.3,y:364.1},0).wait(1).to({x:472.4,y:363.8},0).wait(1).to({x:471.4,y:363.4},0).wait(1).to({x:470.4,y:363.1},0).wait(1).to({x:469.5,y:362.8},0).wait(1).to({x:468.5,y:362.4},0).wait(1).to({x:467.5,y:362.1},0).wait(1).to({x:466.5,y:361.7},0).wait(1).to({x:465.6,y:361.4},0).wait(1).to({x:464.9,y:361.1},0).wait(1).to({x:464.5,y:361},0).wait(1).to({x:464.3,y:361.1},0).wait(1).to({x:464.2,y:361.2},0).wait(1).to({x:463.9,y:361.3},0).wait(1).to({x:463.7,y:361.5},0).wait(1).to({rotation:2.5,x:462.5,y:361.4},0).wait(1).to({rotation:5.1,x:461.2,y:361.3},0).wait(1).to({rotation:7.7,x:460},0).wait(1).to({rotation:10.2,x:458.7},0).wait(1).to({rotation:12.7,x:457.6},0).wait(1).to({rotation:8.6,x:459.8,y:361.2},0).wait(1).to({rotation:4.8,x:461.9,y:361.1},0).wait(1).to({rotation:1.7,x:463.6,y:361},0).wait(1).to({rotation:0,x:464.5},0).wait(1).to({rotation:-1.7,x:464.9,y:361.1},0).wait(1).to({rotation:-5,x:465.8,y:361.2},0).wait(1).to({rotation:-8.9,x:466.8,y:361.4},0).wait(1).to({rotation:-13.2,x:468,y:361.6},0).wait(1).to({rotation:-17.7,x:469.2,y:361.8},0).wait(1).to({rotation:-16.1,x:468.5,y:361.9},0).wait(1).to({rotation:-13.7,x:467.5,y:362},0).wait(1).to({rotation:-10.9,x:466.4,y:362.1},0).wait(1).to({rotation:-8,x:465.3,y:362.2},0).wait(1).to({rotation:-5.2,x:464.1,y:362.3},0).wait(1).to({rotation:-2.4,x:462.9,y:362.4},0).wait(1).to({rotation:0,x:462,y:362.5},0).to({rotation:12.7,x:457.6,y:361.3},7).wait(1).to({rotation:8.6,x:459.8,y:361.2},0).wait(1).to({rotation:4.8,x:461.9,y:361.1},0).wait(1).to({rotation:1.7,x:463.6,y:361},0).wait(1).to({rotation:0,x:464.5},0).wait(1).to({rotation:-1.7,x:464.9,y:361.1},0).wait(1).to({rotation:-5,x:465.8,y:361.2},0).wait(1).to({rotation:-8.9,x:466.8,y:361.4},0).wait(1).to({rotation:-13.2,x:468,y:361.6},0).wait(1).to({rotation:-17.7,x:469.2,y:361.8},0).wait(1).to({rotation:-16.1,x:468.5,y:361.9},0).wait(1).to({rotation:-13.7,x:467.5,y:362},0).wait(1).to({rotation:-10.9,x:466.4,y:362.1},0).wait(1).to({rotation:-8,x:465.3,y:362.2},0).wait(1).to({rotation:-5.2,x:464.1,y:362.3},0).wait(1).to({rotation:-2.4,x:462.9,y:362.4},0).wait(1).to({rotation:0,x:462,y:362.5},0).wait(1));

	// bg
	this.instance_15 = new lib.bg_1();
	this.instance_15.setTransform(287.5,230.5,1,1,0,0,0,276.5,220.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,10,555,443);


(lib.slide_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89));

	// home_snake
	this.instance = new lib.home_snake_1();
	this.instance.setTransform(236.5,427.1,1,1,0,0,0,13,19);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:236.3},0).wait(1).to({x:236.1},0).wait(1).to({x:236,y:427.2},0).wait(1).to({x:235.8},0).wait(1).to({x:235.6},0).wait(1).to({x:235.4,y:427.3},0).wait(1).to({x:235.2},0).wait(1).to({x:235},0).wait(1).to({x:234.8},0).wait(1).to({x:234.5,y:427.4},0).wait(1).to({x:234.3},0).wait(1).to({y:427.1},0).wait(1).to({y:426.8},0).wait(1).to({y:426.5},0).wait(1).to({y:426.1},0).wait(1).to({x:234.4,y:425.8},0).wait(1).to({y:425.4},0).wait(1).to({y:425},0).wait(1).to({y:424.7},0).wait(1).to({y:424.3},0).wait(1).to({y:423.9},0).wait(1).to({y:423.4},0).wait(1).to({x:234.5,y:423},0).wait(1).to({y:422.6},0).wait(1).to({y:422.1},0).wait(1).to({x:234.6,y:422.4},0).wait(1).to({x:234.7,y:422.6},0).wait(1).to({x:234.8,y:422.9},0).wait(1).to({x:235,y:423.2},0).wait(1).to({x:235.1,y:423.6},0).wait(1).to({x:235.2,y:423.9},0).wait(1).to({x:235.4,y:424.3},0).wait(1).to({x:235.5,y:424.7},0).wait(1).to({x:235.7,y:425.1},0).wait(1).to({x:235.9,y:425.6},0).wait(1).to({x:236.1,y:426},0).wait(1).to({x:236.3,y:426.6},0).wait(1).to({x:236.5,y:427.1},0).wait(1).to({rotation:-0.3,x:236.6,y:426.9},0).wait(1).to({rotation:-0.6,x:236.7,y:426.6},0).wait(1).to({rotation:-0.9,x:236.9,y:426.4},0).wait(1).to({rotation:-1.3,x:237,y:426.1},0).wait(1).to({rotation:-1.7,x:237.2,y:425.8},0).wait(1).to({rotation:-2.1,x:237.4,y:425.4},0).wait(1).to({rotation:-2.6,x:237.6,y:425.1},0).wait(1).to({rotation:-3.2,x:237.8,y:424.7},0).wait(1).to({rotation:-3.7,x:238,y:424.2},0).wait(1).to({rotation:-3.1,x:238.3,y:423.7},0).wait(1).to({rotation:-2.5,x:238.5,y:423.3},0).wait(1).to({rotation:-1.8,x:238.8,y:422.8},0).wait(1).to({rotation:-1.1,x:239,y:422.2},0).wait(1).to({rotation:-0.4,x:239.3,y:421.7},0).wait(1).to({rotation:0.3,x:239.6,y:421.2},0).wait(1).to({rotation:1,x:239.9,y:420.7},0).wait(1).to({rotation:1.7,x:240.2,y:420.1},0).wait(1).to({rotation:2.4,x:240.5,y:419.5},0).wait(1).to({rotation:3.2,x:240.8,y:418.9},0).wait(1).to({rotation:3.9,x:241,y:418.4},0).wait(1).to({rotation:4.7,x:241.3,y:417.8},0).wait(1).to({rotation:5.4,x:241.6,y:417.3},0).wait(1).to({regY:18.9,rotation:6.2,x:241.9,y:416.7},0).wait(1).to({regY:19,rotation:5.4,x:242.3,y:416.1},0).wait(1).to({rotation:4.5,x:242.5,y:415.6},0).wait(1).to({rotation:3.7,x:242.8,y:415},0).wait(1).to({rotation:2.8,x:243.2,y:414.5},0).wait(1).to({rotation:2,x:243.5,y:413.8},0).wait(1).to({rotation:1.1,x:243.8,y:413.2},0).wait(1).to({rotation:0.3,x:244.1,y:412.6},0).wait(1).to({rotation:-0.6,x:244.4,y:412.1},0).wait(1).to({rotation:-1.5,x:244.7,y:411.5},0).wait(1).to({rotation:-2.3,x:245,y:410.9},0).wait(1).to({rotation:-3.2,x:245.4,y:410.3},0).wait(1).to({rotation:-4,x:245.7,y:409.7},0).wait(1).to({rotation:-4.9,x:246,y:409.1},0).wait(1).to({rotation:-5.8,x:246.3,y:408.5},0).wait(1).to({rotation:-6.6,x:246.6,y:407.9},0).wait(1).to({regX:13.1,rotation:-7.5,x:247,y:407.3},0).wait(1).to({regX:13,rotation:-5.6,x:247.2,y:406.7},0).wait(1).to({rotation:-3.8,x:247.5,y:406.1},0).wait(1).to({rotation:-2,x:247.8,y:405.5},0).wait(1).to({rotation:-0.1,x:248.1,y:404.9},0).wait(1).to({rotation:1.7,x:248.4,y:404.4},0).wait(1).to({regX:13.1,rotation:3.5,x:248.9,y:403.8},0).wait(1).to({regX:13,rotation:2.8,x:249,y:403.3},0).wait(1).to({rotation:2,x:249.3,y:402.6},0).wait(1).to({rotation:1.3,x:249.6,y:402.1},0).wait(1).to({rotation:0.6,x:249.9,y:401.5},0).wait(1).to({regY:18.9,rotation:-0.1,x:250.2,y:400.9},0).wait(1));

	// home_fore_1
	this.instance_1 = new lib.home_fore_1_2();
	this.instance_1.setTransform(286.1,400.6,1,1,0,0,0,278.5,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(89));

	// home_chicken_1
	this.instance_2 = new lib.home_chicken_1_1();
	this.instance_2.setTransform(405.8,366.3,1,1,0,0,0,10.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:49.1,x:405.9,y:405.3},0).wait(1).to({x:406,y:405.1},0).wait(1).to({x:406.2,y:405},0).wait(1).to({x:406.4,y:404.8},0).wait(1).to({x:406.6,y:404.6},0).wait(1).to({regY:10,x:406.8,y:365.3},0).wait(1).to({regY:49.1,x:406.7,y:404.5},0).wait(1).to({x:406.6,y:404.6},0).wait(1).to({x:406.5,y:404.7},0).wait(1).to({x:406.4,y:404.8},0).wait(1).to({x:406.2,y:404.9},0).wait(1).to({x:406.1,y:405},0).wait(1).to({x:406,y:405.1},0).wait(1).to({x:405.9,y:405.3},0).wait(1).to({regY:10,x:405.8,y:366.3},0).wait(1).to({regY:49.1,x:405.9,y:405.3},0).wait(1).to({x:406,y:405.2},0).wait(1).to({x:406.1,y:405.1},0).wait(1).to({x:406.2,y:405},0).wait(1).to({x:406.3,y:404.8},0).wait(1).to({x:406.5,y:404.7},0).wait(1).to({x:406.6,y:404.6},0).wait(1).to({regY:10,x:406.8,y:365.3},0).wait(1).to({regY:49.1,x:406.6,y:404.5},0).wait(1).to({x:406.5,y:404.6},0).wait(1).to({x:406.4,y:404.8},0).wait(1).to({x:406.2,y:404.9},0).wait(1).to({x:406.1,y:405.1},0).wait(1).to({x:405.9,y:405.2},0).wait(1).to({regY:10,x:405.8,y:366.3},0).wait(1).to({regY:49.1,x:406.5,y:405.5},0).wait(1).to({x:407.3},0).wait(1).to({x:408.1,y:405.6},0).wait(1).to({x:409},0).wait(1).to({x:409.9,y:405.7},0).wait(1).to({x:410.9,y:405.8},0).wait(1).to({x:411.9},0).wait(1).to({x:413.1,y:405.9},0).wait(1).to({x:414.2,y:406},0).wait(1).to({x:415.5,y:406.1},0).wait(1).to({x:416.8,y:406.2},0).wait(1).to({x:418.2,y:406.3},0).wait(1).to({x:419.7,y:406.4},0).wait(1).to({regY:10,x:421.3,y:367.4},0).wait(1).to({regY:49.1,x:423.4,y:406.2},0).wait(1).to({x:425.6,y:405.9},0).wait(1).to({x:427.9,y:405.6},0).wait(1).to({x:430.2,y:405.3},0).wait(1).to({x:432.6,y:405},0).wait(1).to({regY:10,x:435.1,y:365.6},0).wait(1).to({regY:49.1,x:435.4,y:404.5},0).wait(1).to({x:435.7,y:404.3},0).wait(1).to({x:436,y:404.1},0).wait(1).to({x:436.3,y:403.9},0).wait(1).to({x:436.6,y:403.7},0).wait(1).to({x:436.9,y:403.5},0).wait(1).to({x:437.2,y:403.3},0).wait(1).to({x:437.5,y:403.1},0).wait(1).to({x:437.8,y:402.9},0).wait(1).to({regY:10,x:438.1,y:363.6},0).wait(1).to({regY:49.1,x:437.4,y:403},0).wait(1).to({x:436.6,y:403.3},0).wait(1).to({x:435.9,y:403.6},0).wait(1).to({x:435.2,y:403.8},0).wait(1).to({x:434.5,y:404.1},0).wait(1).to({x:433.7,y:404.4},0).wait(1).to({regY:10,x:433,y:365.6},0).wait(1).to({regY:49.1,x:433.2,y:404.8},0).wait(1).to({x:433.4,y:404.9},0).wait(1).to({x:433.6,y:405},0).wait(1).to({x:433.8,y:405.1},0).wait(1).to({x:434},0).wait(1).to({x:434.2,y:405.2},0).wait(1).to({x:434.5,y:405.3},0).wait(1).to({x:434.7,y:405.4},0).wait(1).to({x:434.9,y:405.5},0).wait(1).to({x:435.1,y:405.6},0).wait(1).to({x:435.3,y:405.7},0).wait(1).to({regY:10,x:435.5,y:366.7},0).wait(1).to({regY:49.1,x:435.3,y:405.6},0).wait(1).to({x:435.2,y:405.5},0).wait(1).to({x:435,y:405.3},0).wait(1).to({x:434.9,y:405.2},0).wait(1).to({x:434.8,y:405.1},0).wait(1).to({x:434.6,y:404.9},0).wait(1).to({x:434.5,y:404.8},0).wait(1).to({regY:10,x:434.4,y:365.6},0).to({x:434.5},1).wait(1));

	// home_chicken_2
	this.instance_3 = new lib.home_chicken_2_1();
	this.instance_3.setTransform(514.2,363.5,1,1,0,0,0,12.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:48.6,x:514.1,y:402.2},0).wait(1).to({x:514,y:402.4},0).wait(1).to({x:513.9,y:402.5},0).wait(1).to({x:513.8,y:402.7},0).wait(1).to({x:513.7,y:402.9},0).wait(1).to({regY:10,y:364.5},0).wait(1).to({regY:48.6,y:403},0).wait(1).to({y:402.9},0).wait(1).to({x:513.8,y:402.8},0).wait(1).to({y:402.7},0).wait(1).to({x:513.9,y:402.6},0).wait(1).to({x:514,y:402.5},0).wait(1).to({y:402.4},0).wait(1).to({x:514.1,y:402.2},0).wait(1).to({regY:10,x:514.2,y:363.5},0).wait(1).to({regY:48.6,x:514.1,y:402.2},0).wait(1).to({x:514,y:402.3},0).wait(1).to({y:402.4},0).wait(1).to({x:513.9,y:402.5},0).wait(1).to({y:402.7},0).wait(1).to({x:513.8,y:402.8},0).wait(1).to({x:513.7,y:402.9},0).wait(1).to({regY:10,y:364.5},0).wait(1).to({regY:48.6,y:403},0).wait(1).to({x:513.8,y:402.9},0).wait(1).to({y:402.7},0).wait(1).to({x:513.9,y:402.6},0).wait(1).to({x:514,y:402.4},0).wait(1).to({x:514.1,y:402.3},0).wait(1).to({regY:10,x:514.2,y:363.5},0).wait(1).to({regY:48.6,x:513,y:402.3},0).wait(1).to({x:511.8,y:402.5},0).wait(1).to({x:510.6,y:402.6},0).wait(1).to({x:509.2,y:402.8},0).wait(1).to({x:507.8,y:403},0).wait(1).to({x:506.4,y:403.3},0).wait(1).to({x:504.8,y:403.5},0).wait(1).to({x:503.1,y:403.8},0).wait(1).to({x:501.4,y:404},0).wait(1).to({x:499.5,y:404.3},0).wait(1).to({x:497.6,y:404.6},0).wait(1).to({x:495.5,y:404.9},0).wait(1).to({x:493.3,y:405.2},0).wait(1).to({x:491,y:405.6},0).wait(1).to({regY:10,x:488.6,y:367.4},0).wait(1).to({regY:48.6,x:487.6,y:406.2},0).wait(1).to({x:486.7,y:406.5},0).wait(1).to({x:485.7,y:406.8},0).wait(1).to({x:484.7,y:407},0).wait(1).to({x:483.8,y:407.3},0).wait(1).to({x:482.8,y:407.6},0).wait(1).to({x:481.8,y:407.8},0).wait(1).to({x:480.8,y:408.1},0).wait(1).to({x:479.8,y:408.4},0).wait(1).to({x:478.8,y:408.7},0).wait(1).to({regY:10,x:477.8,y:370.4},0).wait(1).to({regY:48.6,x:478.3,y:408.6},0).wait(1).to({x:478.9,y:408.2},0).wait(1).to({x:479.5,y:407.9},0).wait(1).to({x:480,y:407.5},0).wait(1).to({x:480.6,y:407.2},0).wait(1).to({x:481.1,y:406.8},0).wait(1).to({x:481.7,y:406.5},0).wait(1).to({x:482.2,y:406.1},0).wait(1).to({x:482.8,y:405.8},0).wait(1).to({x:483.4,y:405.4},0).wait(1).to({x:483.9,y:405},0).wait(1).to({x:484.5,y:404.7},0).wait(1).to({x:485,y:404.3},0).wait(1).to({regY:10,x:485.6,y:365.4},0).wait(1).to({regY:48.6,x:485.5,y:403.9},0).wait(1).to({x:485.4,y:403.8},0).wait(1).to({y:403.7},0).wait(1).to({x:485.3,y:403.6},0).wait(1).to({x:485.2,y:403.5},0).wait(1).to({x:485.1},0).wait(1).to({x:485,y:403.4},0).wait(1).to({x:484.9,y:403.3},0).wait(1).to({y:403.2},0).wait(1).to({x:484.8,y:403.1},0).wait(1).to({x:484.7,y:403},0).wait(1).to({regY:10,x:484.6,y:364.4},0).wait(1).to({regY:48.6,y:403.1},0).wait(1).to({y:403.3},0).wait(1).to({y:403.5},0).wait(1).to({x:484.7,y:403.7},0).wait(1).to({y:403.9},0).wait(1).to({regY:10,y:365.6},0).wait(1));

	// home_chciken_3
	this.instance_4 = new lib.home_chciken_3_1();
	this.instance_4.setTransform(548.6,351.2,1,1,0,0,0,11.5,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:48.1,x:548.3,y:389.9},0).wait(1).to({x:548},0).wait(1).to({x:547.7,y:390},0).wait(1).to({x:547.4,y:390.1},0).wait(1).to({x:547,y:390.2},0).wait(1).to({regY:9.5,x:546.6,y:351.7},0).wait(1).to({regY:48.1,x:546.8,y:390.3},0).wait(1).to({x:547,y:390.2},0).wait(1).to({x:547.2},0).wait(1).to({x:547.4,y:390.1},0).wait(1).to({x:547.6,y:390},0).wait(1).to({x:547.9},0).wait(1).to({x:548.1,y:389.9},0).wait(1).to({x:548.3},0).wait(1).to({regY:9.5,x:548.6,y:351.2},0).wait(1).to({regY:48.1,x:548.4,y:389.9},0).wait(1).to({x:548.2},0).wait(1).to({x:547.9,y:390},0).wait(1).to({x:547.7},0).wait(1).to({x:547.5,y:390.1},0).wait(1).to({x:547.2,y:390.2},0).wait(1).to({x:546.9},0).wait(1).to({regY:9.5,x:546.6,y:351.7},0).wait(1).to({regY:48.1,x:546.8,y:390.2},0).wait(1).to({x:547.1},0).wait(1).to({x:547.4,y:390.1},0).wait(1).to({x:547.7,y:390},0).wait(1).to({x:548},0).wait(1).to({x:548.3,y:389.9},0).wait(1).to({regY:9.5,x:548.6,y:351.2},0).wait(1).to({regY:48.1,x:547.2,y:390.3},0).wait(1).to({x:545.8,y:390.8},0).wait(1).to({x:544.4,y:391.3},0).wait(1).to({x:542.9,y:391.8},0).wait(1).to({x:541.3,y:392.3},0).wait(1).to({x:539.6,y:392.9},0).wait(1).to({x:537.8,y:393.5},0).wait(1).to({x:535.9,y:394.2},0).wait(1).to({x:534,y:394.9},0).wait(1).to({x:531.9,y:395.6},0).wait(1).to({x:529.7,y:396.4},0).wait(1).to({x:527.5,y:397.1},0).wait(1).to({x:525.1,y:398},0).wait(1).to({x:522.6,y:398.8},0).wait(1).to({x:520,y:399.8},0).wait(1).to({x:517.2,y:400.7},0).wait(1).to({regY:9.5,x:514.4,y:363.1},0).wait(1).to({regY:48.1,x:514.2,y:401.8},0).wait(1).to({x:514.1},0).wait(1).to({x:513.9,y:401.9},0).wait(1).to({x:513.8},0).wait(1).to({x:513.6,y:402},0).wait(1).to({x:513.5},0).wait(1).to({x:513.3,y:402.1},0).wait(1).to({x:513.2,y:402.2},0).wait(1).to({x:513},0).wait(1).to({x:512.9,y:402.3},0).wait(1).to({x:512.7},0).wait(1).to({regY:9.5,x:512.6,y:363.8},0).wait(1).to({regY:48.1,x:512.9,y:402.1},0).wait(1).to({x:513.2,y:401.9},0).wait(1).to({x:513.4,y:401.6},0).wait(1).to({x:513.7,y:401.3},0).wait(1).to({x:514,y:401},0).wait(1).to({x:514.3,y:400.8},0).wait(1).to({x:514.6,y:400.5},0).wait(1).to({regY:9.5,x:514.9,y:361.6},0).wait(1).to({regY:48.1,x:514.5,y:400.4},0).wait(1).to({x:514.2,y:400.7},0).wait(1).to({x:513.8,y:400.9},0).wait(1).to({x:513.5,y:401.2},0).wait(1).to({x:513.1,y:401.4},0).wait(1).to({x:512.8,y:401.7},0).wait(1).to({x:512.4,y:401.9},0).wait(1).to({x:512.1,y:402.2},0).wait(1).to({x:511.7,y:402.4},0).wait(1).to({regY:9.5,x:511.4,y:364.1},0).wait(1).to({regY:48.1,x:511.7,y:402.7},0).wait(1).to({x:512},0).wait(1).to({x:512.4},0).wait(1).to({x:512.7},0).wait(1).to({x:513},0).wait(1).to({x:513.3},0).wait(1).to({x:513.6},0).wait(1).to({x:513.9},0).wait(1).to({x:514.2},0).wait(1).to({x:514.4},0).wait(1).to({regY:9.5,x:514.7,y:364.1},0).wait(1));

	// home_man1
	this.instance_5 = new lib.home_man1_1();
	this.instance_5.setTransform(185.3,347.5,1,1,4.7,0,0,17,22);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:55.8,x:182.3,y:380.8},0).wait(1).to({x:182.1,y:380.5},0).wait(1).to({rotation:4.6,x:181.9,y:380.2},0).wait(1).to({x:181.6,y:379.9},0).wait(1).to({x:181.4,y:379.6},0).wait(1).to({x:181.2,y:379.2},0).wait(1).to({x:180.9,y:378.9},0).wait(1).to({regX:17.1,regY:22,x:183.4,y:344.9},0).wait(1).to({regX:17,regY:55.8,rotation:4.5,x:180.8,y:378.9},0).wait(1).to({x:181,y:379.2},0).wait(1).to({x:181.2,y:379.6},0).wait(1).to({x:181.4,y:379.9},0).wait(1).to({x:181.6,y:380.3},0).wait(1).to({x:181.9,y:380.7},0).wait(1).to({x:182.1,y:381.1},0).wait(1).to({x:182.3,y:381.5},0).wait(1).to({regY:22.1,x:185.3,y:348.3},0).wait(1).to({regY:55.8,rotation:4.6,x:182.6,y:381.8},0).wait(1).to({y:381.6},0).wait(1).to({y:381.5},0).wait(1).to({y:381.3},0).wait(1).to({rotation:4.7,x:182.5,y:381.2},0).wait(1).to({regY:22,x:185.3,y:347.5},0).wait(1).to({regY:55.8,rotation:4.6,x:181.9,y:381},0).wait(1).to({x:181.3},0).wait(1).to({rotation:4.5,x:180.7,y:381.1},0).wait(1).to({rotation:4.4,x:180,y:381},0).wait(1).to({rotation:4.3,x:179.4},0).wait(1).to({x:178.6},0).wait(1).to({rotation:4.2,x:177.9},0).wait(1).to({rotation:4.1,x:177.1,y:380.9},0).wait(1).to({rotation:4,x:176.3},0).wait(1).to({rotation:3.9,x:175.4},0).wait(1).to({rotation:3.8,x:174.5,y:380.8},0).wait(1).to({rotation:3.7,x:173.6,y:380.9},0).wait(1).to({rotation:3.6,x:172.6,y:380.8},0).wait(1).to({rotation:3.5,x:171.6},0).wait(1).to({rotation:3.3,x:170.5},0).wait(1).to({rotation:3.2,x:169.4,y:380.7},0).wait(1).to({rotation:3.1,x:168.2},0).wait(1).to({rotation:2.9,x:167,y:380.6},0).wait(1).to({regY:22,rotation:2.8,x:167.5,y:346.9},0).wait(1).to({regY:55.8,rotation:2.6,x:164.2,y:381.8},0).wait(1).to({rotation:2.4,x:162.5,y:382.9},0).wait(1).to({regX:17.1,regY:22,rotation:2.3,x:162.3,y:350.4},0).wait(1).to({regX:17,regY:55.8,rotation:2.1,x:159.1,y:384.4},0).wait(1).to({rotation:1.9,x:157.3,y:384.7},0).wait(1).to({rotation:1.8,x:155.6,y:385},0).wait(1).to({rotation:1.6,x:153.8,y:385.3},0).wait(1).to({rotation:1.4,x:151.9,y:385.6},0).wait(1).to({rotation:1.3,x:150.1,y:386},0).wait(1).to({rotation:1.1,x:148.3,y:386.2},0).wait(1).to({rotation:0.9,x:146.5,y:386.5},0).wait(1).to({regY:22,rotation:0.8,x:145.2,y:353.1},0).wait(1).to({regY:55.8,rotation:0.5,x:142.3,y:386.8},0).wait(1).to({rotation:0.2,x:139.9},0).wait(1).to({rotation:0,x:137.4},0).wait(1).to({rotation:-0.3,x:135,y:386.7},0).wait(1).to({rotation:-0.5,x:132.6},0).wait(1).to({rotation:-0.8,x:130.1},0).wait(1).to({rotation:-1,x:127.7,y:386.6},0).wait(1).to({rotation:-1.3,x:125.3},0).wait(1).to({rotation:-1.5,x:122.9,y:386.5},0).wait(1).to({rotation:-1.8,x:120.5},0).wait(1).to({rotation:-2,x:118.1},0).wait(1).to({rotation:-2.3,x:115.7,y:386.4},0).wait(1).to({rotation:-2.5,x:113.3},0).wait(1).to({rotation:-2.8,x:111},0).wait(1).to({regX:16.9,regY:22,rotation:-3,x:106.8,y:352.6},0).wait(1).to({regX:17,regY:55.8,rotation:-3.2,x:106.9,y:386.7},0).wait(1).to({rotation:-3.4,x:105.3,y:387.1},0).wait(1).to({rotation:-3.6,x:103.7,y:387.4},0).wait(1).to({rotation:-3.7,x:102.2,y:387.7},0).wait(1).to({rotation:-3.9,x:100.6,y:388.1},0).wait(1).to({rotation:-4.1,x:99.2,y:388.4},0).wait(1).to({rotation:-4.2,x:97.8,y:388.7},0).wait(1).to({rotation:-4.4,x:96.4,y:389.1},0).wait(1).to({rotation:-4.5,x:95,y:389.3},0).wait(1).to({rotation:-4.7,x:93.7,y:389.6},0).wait(1).to({rotation:-4.8,x:92.4,y:389.9},0).wait(1).to({rotation:-4.9,x:91.1,y:390.2},0).wait(1).to({rotation:-5.1,x:89.9,y:390.5},0).wait(1).to({rotation:-5.2,x:88.7,y:390.7},0).wait(1).to({rotation:-5.3,x:87.5,y:391},0).wait(1).to({rotation:-5.4,x:86.4,y:391.2},0).wait(1).to({rotation:-5.6,x:85.3,y:391.5},0).wait(1).to({rotation:-5.7,x:84.3,y:391.7},0).wait(1).to({regY:21.9,rotation:-5.8,x:80.1,y:358.2},0).wait(1));

	// home- rocking chair
	this.instance_6 = new lib.homerockingchair_1();
	this.instance_6.setTransform(159.6,317.6,1,1,0,0,0,15,20);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89));

	// home_woman_1_arms
	this.instance_7 = new lib.home_woman_1_arms_1();
	this.instance_7.setTransform(330.1,340.6,1,1,0,0,0,10.5,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:329.9},0).wait(1).to({x:329.7,y:340.5},0).wait(1).to({x:329.5},0).wait(1).to({x:329.2,y:340.4},0).wait(1).to({x:329},0).wait(1).to({x:328.8},0).wait(1).to({x:328.5,y:340.3},0).wait(1).to({x:328.2},0).wait(1).to({x:328,y:340.2},0).wait(1).to({x:327.7,y:340.1},0).wait(1).to({x:327.3},0).wait(1).to({x:327,y:340},0).wait(1).to({x:326.7},0).wait(1).to({x:326.3,y:339.9},0).wait(1).to({x:325.9,y:339.8},0).wait(1).to({x:325.5},0).wait(1).to({x:325.1,y:339.7},0).wait(1).to({x:324.7,y:339.6},0).wait(1).to({x:325.1,y:339.7},0).wait(1).to({x:325.5,y:339.8},0).wait(1).to({x:325.9},0).wait(1).to({x:326.3,y:339.9},0).wait(1).to({x:326.7,y:340},0).wait(1).to({x:327.1,y:340.1},0).wait(1).to({x:327.5,y:340.2},0).wait(1).to({x:327.9,y:340.3},0).wait(1).to({x:328.3},0).wait(1).to({x:328.8,y:340.4},0).wait(1).to({x:329.2,y:340.5},0).wait(1).to({x:329.6,y:340.6},0).wait(1).to({y:340.7},0).wait(1).to({x:329.5,y:340.8},0).wait(1).to({y:340.9},0).wait(1).to({y:341},0).wait(2).to({x:329.4,y:341.1},0).wait(1).to({y:341.2},0).wait(1).to({y:341.3},0).wait(1).to({x:329.3,y:341.4},0).wait(1).to({y:341.5},0).wait(1).to({y:341.6},0).wait(1).to({x:329.2,y:341.7},0).wait(1).to({y:341.8},0).wait(2).to({y:341.9},0).wait(1).to({x:329.1,y:342},0).wait(1).to({y:342.1},0).wait(1).to({x:329.2,y:342.4},0).wait(1).to({x:329.4,y:342.7},0).wait(1).to({x:329.5,y:343},0).wait(1).to({x:329.6,y:343.3},0).wait(1).to({x:329.7,y:343.6},0).wait(1).to({x:329.8,y:343.8},0).wait(1).to({x:329.9,y:344.1},0).wait(1).to({x:330,y:344.4},0).wait(1).to({x:330.2,y:344.6},0).wait(1).to({x:330,y:344.3},0).wait(1).to({x:329.9,y:344},0).wait(1).to({x:329.8,y:343.7},0).wait(1).to({x:329.6,y:343.4},0).wait(1).to({x:329.5,y:343.1},0).wait(1).to({x:329.4,y:342.8},0).wait(1).to({x:329.3,y:342.5},0).wait(1).to({x:329.2,y:342.3},0).wait(1).to({x:329.1,y:342.1},0).wait(1).to({x:329.2,y:342.4},0).wait(1).to({x:329.4,y:342.7},0).wait(1).to({x:329.5,y:343},0).wait(1).to({x:329.6,y:343.3},0).wait(1).to({x:329.7,y:343.6},0).wait(1).to({x:329.8,y:343.8},0).wait(1).to({x:329.9,y:344.1},0).wait(1).to({x:330,y:344.4},0).wait(1).to({x:330.2,y:344.6},0).wait(1).to({x:330.1,y:344.4},0).wait(1).to({y:344.2},0).wait(1).to({y:344},0).wait(1).to({y:343.8},0).wait(1).to({y:343.6},0).wait(1).to({y:343.4},0).wait(1).to({y:343.2},0).wait(1).to({y:343},0).wait(1).to({y:342.9},0).wait(1).to({y:342.7},0).wait(1).to({y:342.5},0).wait(1).to({y:342.4},0).wait(1).to({y:342.2},0).wait(1).to({y:342.1},0).wait(1));

	// home_broom
	this.instance_8 = new lib.home_broom_1();
	this.instance_8.setTransform(327,348.8,1,1,-57,0,0,22.9,13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:23,rotation:-58.9,y:348.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-61.1,x:326.9,y:348.6},0).wait(1).to({rotation:-63.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-67.4,x:326.8,y:348.8},0).wait(1).to({rotation:-64.7,x:326.6,y:348.7},0).wait(1).to({rotation:-61.5,x:326.4},0).wait(1).to({rotation:-57.8,x:326.2,y:348.6},0).wait(1).to({rotation:-53.7,x:325.9,y:348.5},0).wait(1).to({regX:22.9,scaleX:1,scaleY:1,rotation:-49.2,x:325.5},0).wait(1).to({regX:23,scaleX:1,scaleY:1,rotation:-50.5,x:325.2,y:348.3},0).wait(1).to({rotation:-51.8,x:324.9,y:348.2},0).wait(1).to({rotation:-53.3,x:324.5},0).wait(1).to({rotation:-54.8,x:324.1,y:348.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-56.4,x:323.6,y:348},0).wait(1).to({rotation:-58,x:323.2,y:347.9},0).wait(1).to({rotation:-59.8,x:322.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-61.6,x:322.2,y:347.7},0).wait(1).to({rotation:-63.4,x:321.7,y:347.8},0).wait(1).to({rotation:-63.5,x:322.1,y:347.7},0).wait(1).to({scaleX:1,scaleY:1,x:322.5,y:347.8},0).wait(1).to({rotation:-63.6,x:322.8,y:347.9},0).wait(1).to({rotation:-63.7,x:323.2,y:348},0).wait(1).to({x:323.5,y:348.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-63.8,x:324,y:348.2},0).wait(1).to({x:324.3,y:348.3},0).wait(1).to({regX:22.9,rotation:-63.9,x:324.7,y:348.4},0).wait(1).to({regX:23,rotation:-59.4,x:325.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-54.8,x:325.7,y:348.5},0).wait(1).to({rotation:-50.1,x:326.2},0).wait(1).to({regY:13.6,scaleX:1,scaleY:1,rotation:-45.3,x:326.7,y:348.7},0).wait(1).to({regY:13.5,rotation:-48.1,x:326.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-50.9,y:348.8},0).wait(1).to({rotation:-53.8,y:348.9},0).wait(1).to({rotation:-56.7,x:326.4,y:349},0).wait(1).to({rotation:-59.7,y:349.1},0).wait(1).to({regX:22.9,regY:13.6,scaleX:1,scaleY:1,rotation:-62.7,y:349.3},0).wait(1).to({regX:23,regY:13.5,rotation:-60.3,y:349.2},0).wait(1).to({rotation:-57.8,x:326.3,y:349.3},0).wait(1).to({rotation:-55.4,x:326.4,y:349.4},0).wait(1).to({rotation:-53,x:326.3,y:349.5},0).wait(1).to({rotation:-50.5,y:349.6},0).wait(1).to({regX:22.9,rotation:-48,y:349.8},0).wait(1).to({regX:23,rotation:-51.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-54.3},0).wait(1).to({rotation:-57.5,y:349.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-60.7,x:326.2,y:350},0).wait(1).to({regX:22.9,regY:13.6,rotation:-64,x:326.1,y:350.3},0).wait(1).to({regX:23,regY:13.5,rotation:-63,y:350.2},0).wait(1).to({rotation:-62,x:326.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-61,x:326.3},0).wait(1).to({rotation:-60},0).wait(1).to({rotation:-59,x:326.4},0).wait(1).to({rotation:-58},0).wait(1).to({rotation:-57,x:326.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-56,x:326.6},0).wait(1).to({rotation:-55},0).wait(1).to({rotation:-54,x:326.7},0).wait(1).to({rotation:-53},0).wait(1).to({rotation:-52,x:326.8},0).wait(1).to({rotation:-51},0).wait(1).to({regY:13.6,scaleX:1,scaleY:1,rotation:-50,x:326.9,y:350.3},0).wait(1).to({regY:13.5,scaleX:1,scaleY:1,rotation:-54.2,x:326.6,y:350.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-57.9,x:326.4},0).wait(1).to({rotation:-61.3,x:326.2},0).wait(1).to({regX:22.9,regY:13.6,scaleX:1,scaleY:1,rotation:-64,x:326.1,y:350.3},0).wait(1).to({regX:23,regY:13.5,rotation:-63,y:350.2},0).wait(1).to({rotation:-62,x:326.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-61,x:326.3},0).wait(1).to({rotation:-60},0).wait(1).to({rotation:-59,x:326.4},0).wait(1).to({rotation:-58},0).wait(1).to({rotation:-57,x:326.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-56,x:326.6},0).wait(1).to({rotation:-55},0).wait(1).to({rotation:-54,x:326.7},0).wait(1).to({rotation:-53},0).wait(1).to({rotation:-52,x:326.8},0).wait(1).to({rotation:-51},0).wait(1).to({regY:13.6,scaleX:1,scaleY:1,rotation:-50,x:326.9,y:350.3},0).wait(1).to({regY:13.5,scaleX:1,scaleY:1,rotation:-51.6,x:326.8,y:350.2},0).wait(1).to({rotation:-53.1,x:326.9},0).wait(1).to({rotation:-54.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-55.9},0).wait(1).to({rotation:-57.2},0).wait(1).to({rotation:-58.4,x:327},0).wait(1).to({scaleX:1,scaleY:1,rotation:-59.5},0).wait(1).to({rotation:-60.6,y:350.1},0).wait(1).to({rotation:-61.5,x:327.1,y:350.2},0).wait(1));

	// home_woman_1
	this.instance_9 = new lib.home_woman_1_1();
	this.instance_9.setTransform(324.1,346.6,1,1,0,0,0,16.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:56.1,x:323.9,y:378.7},0).wait(1).to({x:323.7,y:378.6},0).wait(1).to({x:323.5},0).wait(1).to({x:323.2,y:378.5},0).wait(1).to({x:323},0).wait(1).to({x:322.8},0).wait(1).to({x:322.5,y:378.4},0).wait(1).to({x:322.2},0).wait(1).to({x:322,y:378.3},0).wait(1).to({x:321.7,y:378.2},0).wait(1).to({x:321.3},0).wait(1).to({x:321,y:378.1},0).wait(1).to({x:320.7},0).wait(1).to({x:320.3,y:378},0).wait(1).to({x:319.9,y:377.9},0).wait(1).to({x:319.5},0).wait(1).to({x:319.1,y:377.8},0).wait(1).to({regY:24,x:318.7,y:345.6},0).wait(1).to({regY:56.1,x:319,y:377.8},0).wait(1).to({x:319.4},0).wait(1).to({x:319.8,y:377.9},0).wait(1).to({x:320.1,y:378},0).wait(1).to({x:320.5,y:378.1},0).wait(1).to({x:320.9,y:378.2},0).wait(1).to({x:321.4},0).wait(1).to({x:321.8,y:378.3},0).wait(1).to({x:322.2,y:378.4},0).wait(1).to({x:322.7,y:378.5},0).wait(1).to({x:323.1,y:378.6},0).wait(1).to({regY:24,x:323.6,y:346.6},0).wait(1).to({regY:56.1,y:378.8},0).wait(1).to({x:323.5,y:378.9},0).wait(2).to({y:379},0).wait(1).to({y:379.1},0).wait(1).to({x:323.4,y:379.2},0).wait(1).to({y:379.3},0).wait(1).to({y:379.4},0).wait(1).to({x:323.3,y:379.5},0).wait(1).to({y:379.6},0).wait(2).to({y:379.7},0).wait(1).to({x:323.2,y:379.8},0).wait(1).to({y:379.9},0).wait(1).to({y:380},0).wait(1).to({x:323.1,y:380.1},0).wait(1).to({regY:24,y:348.1},0).wait(1).to({regY:56.1,y:380.2},0).wait(1).to({y:380.1},0).wait(3).to({y:380},0).wait(3).to({y:379.9},0).wait(4).to({y:379.8},0).wait(4).to({y:379.7},0).wait(2).to({regY:24,y:347.6},0).to({x:323.6,y:347.1},11).to({x:323.1,y:348.1},12).wait(1));

	// home_dog_tail
	this.instance_10 = new lib.home_dog_tail_1();
	this.instance_10.setTransform(372.4,360.6,1,1,0,0,0,5.8,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:7.5,regY:7.5,rotation:-2.1,x:373.9,y:358.1},0).wait(1).to({rotation:-4.6,x:373.8,y:358},0).wait(1).to({rotation:-7.7,x:373.5},0).wait(1).to({regX:5.8,regY:10,rotation:-11.5,x:372.1,y:360.8},0).wait(1).to({regX:7.5,regY:7.5,rotation:-6,x:373.3,y:358.2},0).wait(1).to({rotation:0.6,y:358.5},0).wait(1).to({rotation:8.5,y:358.9},0).wait(1).to({regX:5.8,regY:10,rotation:17.4,x:371.1,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:13.7,x:372.9,y:359.4},0).wait(1).to({rotation:9.6,x:372.4},0).wait(1).to({rotation:5,x:371.8},0).wait(1).to({regX:5.8,regY:10,rotation:0,x:369.4,y:362.1},0).wait(1).to({regX:7.5,regY:7.5,rotation:1.5,x:371.3,y:359.5},0).wait(1).to({rotation:3.1,x:371.4,y:359.3},0).wait(1).to({rotation:4.8,x:371.6,y:359.2},0).wait(1).to({rotation:6.5,x:371.8,y:359.1},0).wait(1).to({regX:5.8,regY:10,rotation:8.2,x:369.9,y:361.2},0).wait(1).to({regX:7.5,regY:7.5,rotation:4,x:371.9,y:358.6},0).wait(1).to({rotation:-0.4,x:371.8,y:358.2},0).wait(1).to({rotation:-4.9,y:357.8},0).wait(1).to({regX:5.8,regY:10,rotation:-9.5,x:370.4,y:360.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:-2.9,x:372.1,y:357.4},0).wait(1).to({rotation:3.8,x:372.5},0).wait(1).to({regX:5.8,regY:9.9,rotation:10.7,x:370.8,y:359.6},0).wait(1).to({regX:7.5,regY:7.5,rotation:6.3,x:372.9,y:357},0).wait(1).to({rotation:1.7,x:372.8,y:356.7},0).wait(1).to({rotation:-2.9,y:356.2},0).wait(1).to({regX:5.8,regY:10,rotation:-7.7,x:371.4,y:358.5},0).wait(1).to({regX:7.5,regY:7.5,rotation:-4.9,x:372.8,y:355.9},0).wait(1).to({rotation:-2,x:372.9,y:356.2},0).wait(1).to({rotation:0.8,x:373,y:356.4},0).wait(1).to({rotation:3.8,y:356.6},0).wait(1).to({rotation:6.7,x:373.1,y:356.8},0).wait(1).to({rotation:9.7,x:373.2,y:357},0).wait(1).to({regX:5.8,regY:10,rotation:12.7,x:371.1,y:359.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:9.2,x:373.1,y:357.2},0).wait(1).to({rotation:5.7,x:372.9},0).wait(1).to({rotation:2.2,x:372.7},0).wait(1).to({rotation:-1.4,x:372.5},0).wait(1).to({rotation:-5.1,x:372.3},0).wait(1).to({regX:5.8,regY:10,rotation:-8.7,x:370.8,y:360},0).wait(1).to({regX:7.5,regY:7.5,rotation:-2.2,x:372.4,y:357.6},0).wait(1).to({rotation:4.5,x:372.6,y:357.9},0).wait(1).to({regX:5.8,regY:10,rotation:11.2,x:370.7,y:360.4},0).wait(1).to({regX:7.5,regY:7.5,rotation:4.7,x:372.5,y:358.1},0).wait(1).to({rotation:-1.8,x:372.2,y:358},0).wait(1).to({regX:5.7,regY:10,rotation:-8.5,x:370.5,y:360.8},0).wait(1).to({regX:7.5,regY:7.5,rotation:-6.4,x:371.9,y:358.2},0).wait(1).to({rotation:-4.3,x:372,y:358.5},0).wait(1).to({rotation:-2.1,y:358.6},0).wait(1).to({regX:5.8,regY:10,rotation:0,x:370.3,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:2.6,x:372.4,y:358.9},0).wait(1).to({rotation:5.2,x:372.8,y:359},0).wait(1).to({rotation:7.9,x:373.3,y:359.1},0).wait(1).to({rotation:10.5,x:373.7},0).wait(1).to({regX:5.8,regY:10,rotation:13.2,x:371.9,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:2.6,x:374.1,y:358.9},0).wait(1).to({rotation:-8,x:374,y:358.6},0).wait(1).to({regX:5.7,regY:10,rotation:-18.7,x:373,y:361.2},0).wait(1).to({regX:7.5,regY:7.5,rotation:-8.4,x:374.7,y:358.5},0).wait(1).to({rotation:2,x:375.6,y:358.8},0).wait(1).to({regX:5.8,regY:10,rotation:12.5,x:374.1,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:7.5,x:376.5,y:359.1},0).wait(1).to({rotation:3.3,x:376.7,y:358.9},0).wait(1).to({regX:5.8,regY:10,rotation:0,x:375.2,y:361.3},0).to({x:370.3},9).wait(1).to({regX:7.5,regY:7.5,rotation:2.6,x:372.4,y:358.9},0).wait(1).to({rotation:5.2,x:372.8,y:359},0).wait(1).to({rotation:7.9,x:373.3,y:359.1},0).wait(1).to({rotation:10.5,x:373.7},0).wait(1).to({regX:5.8,regY:10,rotation:13.2,x:371.9,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:2.6,x:374.1,y:358.9},0).wait(1).to({rotation:-8,x:374,y:358.6},0).wait(1).to({regX:5.7,regY:10,rotation:-18.7,x:373,y:361.2},0).wait(1).to({regX:7.5,regY:7.5,rotation:-8.4,x:374.7,y:358.5},0).wait(1).to({rotation:2,x:375.6,y:358.8},0).wait(1).to({regX:5.8,regY:10,rotation:12.5,x:374.1,y:361.3},0).wait(1).to({regX:7.5,regY:7.5,rotation:7.5,x:376.5,y:359.1},0).wait(1).to({rotation:3.3,x:376.7,y:358.9},0).wait(1).to({regX:5.8,regY:10,rotation:0,x:375.2,y:361.3},0).wait(1));

	// home_dog
	this.instance_11 = new lib.home_dog_1();
	this.instance_11.setTransform(361.6,362.6,1,1,0,0,0,13,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regY:50.4,x:361.4,y:401.1},0).wait(1).to({x:361.3,y:401.2},0).wait(1).to({x:361.1,y:401.3},0).wait(1).to({x:360.9,y:401.4},0).wait(1).to({x:360.6,y:401.5},0).wait(1).to({x:360.4,y:401.6},0).wait(1).to({x:360.2,y:401.7},0).wait(1).to({x:359.9,y:401.9},0).wait(1).to({x:359.6,y:402},0).wait(1).to({x:359.3,y:402.2},0).wait(1).to({x:359,y:402.3},0).wait(1).to({regY:12,x:358.6,y:364.1},0).wait(1).to({regY:50.4,x:358.7,y:402.3},0).wait(1).to({x:358.8,y:402.1},0).wait(1).to({x:358.9,y:401.9},0).wait(1).to({x:359,y:401.7},0).wait(1).to({x:359.2,y:401.5},0).wait(1).to({x:359.3,y:401.3},0).wait(1).to({x:359.4,y:401},0).wait(1).to({x:359.5,y:400.8},0).wait(1).to({x:359.6,y:400.6},0).wait(1).to({x:359.8,y:400.4},0).wait(1).to({x:359.9,y:400.1},0).wait(1).to({x:360,y:399.9},0).wait(1).to({x:360.1,y:399.6},0).wait(1).to({x:360.3,y:399.4},0).wait(1).to({x:360.4,y:399.2},0).wait(1).to({regY:12,x:360.6,y:360.5},0).wait(1).to({regY:50.4,x:360.5,y:399},0).wait(1).to({y:399.1},0).wait(1).to({x:360.4,y:399.2},0).wait(1).to({y:399.4},0).wait(1).to({x:360.3,y:399.5},0).wait(1).to({y:399.6},0).wait(1).to({x:360.2,y:399.7},0).wait(1).to({y:399.8},0).wait(1).to({y:400},0).wait(1).to({x:360.1,y:400.1},0).wait(1).to({y:400.2},0).wait(1).to({x:360,y:400.3},0).wait(1).to({y:400.4},0).wait(1).to({x:359.9,y:400.6},0).wait(1).to({y:400.7},0).wait(1).to({x:359.8,y:400.8},0).wait(1).to({y:400.9},0).wait(1).to({x:359.7,y:401.1},0).wait(1).to({y:401.2},0).wait(1).to({x:359.6,y:401.3},0).wait(1).to({y:401.4},0).wait(1).to({x:359.5,y:401.6},0).wait(1).to({regY:12,y:363.3},0).wait(1).to({regY:50.4,x:359.9,y:401.7},0).wait(1).to({x:360.4},0).wait(1).to({x:360.8},0).wait(1).to({x:361.2},0).wait(1).to({x:361.5},0).wait(1).to({x:361.9},0).wait(1).to({x:362.3},0).wait(1).to({x:362.6},0).wait(1).to({x:362.9},0).wait(1).to({x:363.3},0).wait(1).to({x:363.6},0).wait(1).to({x:363.9},0).wait(1).to({x:364.1},0).wait(1).to({regY:12,x:364.4,y:363.3},0).to({x:359.5},9).wait(1).to({regY:50.4,x:359.9,y:401.7},0).wait(1).to({x:360.4},0).wait(1).to({x:360.8},0).wait(1).to({x:361.2},0).wait(1).to({x:361.5},0).wait(1).to({x:361.9},0).wait(1).to({x:362.3},0).wait(1).to({x:362.6},0).wait(1).to({x:362.9},0).wait(1).to({x:363.3},0).wait(1).to({x:363.6},0).wait(1).to({x:363.9},0).wait(1).to({x:364.1},0).wait(1).to({regY:12,x:364.4,y:363.3},0).wait(1));

	// home_woman2_arm_left
	this.instance_12 = new lib.home_woman2_arm_left_1();
	this.instance_12.setTransform(462.1,330.1,1,1,0,0,0,7.5,10.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({x:461.9},0).wait(1).to({x:461.7},0).wait(1).to({x:461.4},0).wait(1).to({x:461.2},0).wait(1).to({x:460.9},0).wait(1).to({x:460.7},0).wait(1).to({x:460.4},0).wait(1).to({x:460},0).wait(1).to({x:459.7},0).wait(1).to({x:459.3},0).wait(1).to({x:458.9},0).wait(1).to({x:458.5},0).wait(1).to({x:458.1},0).wait(1).to({x:458,y:330.3},0).wait(1).to({y:330.6},0).wait(1).to({x:457.9,y:330.8},0).wait(1).to({y:331.1},0).wait(1).to({x:457.8,y:331.3},0).wait(1).to({x:457.7,y:331.6},0).wait(1).to({y:331.8},0).wait(1).to({x:457.6,y:332.1},0).wait(1).to({x:457.7,y:332},0).wait(1).to({x:457.8,y:331.9},0).wait(1).to({x:457.9},0).wait(1).to({x:458.1,y:331.8},0).wait(1).to({x:458.2,y:331.7},0).wait(1).to({x:458.3,y:331.6},0).wait(1).to({x:458.4},0).wait(1).to({x:458.5,y:331.5},0).wait(1).to({x:458.6,y:331.4},0).wait(1).to({x:458.7,y:331.3},0).wait(1).to({x:458.9},0).wait(1).to({x:459,y:331.2},0).wait(1).to({x:459.1,y:331.1},0).wait(1).to({y:331.3},0).wait(1).to({x:459,y:331.6},0).wait(1).to({y:331.8},0).wait(1).to({x:458.9,y:332.1},0).wait(1).to({y:332.3},0).wait(1).to({x:458.8,y:332.6},0).wait(1).to({y:332.8},0).wait(1).to({x:458.7,y:333.1},0).wait(1).to({y:333.3},0).wait(1).to({x:458.6,y:333.6},0).wait(1).to({x:458.7,y:333.5},0).wait(2).to({x:458.8,y:333.4},0).wait(2).to({x:458.9,y:333.3},0).wait(2).to({x:459,y:333.2},0).wait(2).to({x:459.1,y:333.1},0).wait(2).to({x:459.2,y:333},0).wait(2).to({x:459.3,y:332.9},0).wait(2).to({x:459.4,y:332.8},0).wait(2).to({x:459.5,y:332.7},0).wait(3).to({x:459.6,y:332.6},0).wait(1).to({x:458.6,y:333.6},13).wait(1).to({x:458.7,y:333.5},0).wait(1).to({x:458.8,y:333.4},0).wait(1).to({x:459,y:333.2},0).wait(1).to({x:459.1,y:333.1},0).wait(1).to({x:459.2,y:333},0).wait(1).to({x:459.3,y:332.9},0).wait(1).to({x:459.4,y:332.8},0).wait(1).to({x:459.5,y:332.7},0).wait(2).to({x:459.6,y:332.6},0).wait(1));

	// home_woman_2
	this.instance_13 = new lib.home_woman_2_1();
	this.instance_13.setTransform(469.1,338.6,1,1,0,0,0,16.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regY:64,x:468.9,y:372.6},0).wait(1).to({x:468.7},0).wait(1).to({x:468.4},0).wait(1).to({x:468.2},0).wait(1).to({x:467.9},0).wait(1).to({x:467.7},0).wait(1).to({x:467.4},0).wait(1).to({x:467},0).wait(1).to({x:466.7},0).wait(1).to({x:466.3},0).wait(1).to({x:465.9},0).wait(1).to({x:465.5},0).wait(1).to({regY:30,x:465.1,y:338.6},0).wait(1).to({regY:64,x:465,y:372.8},0).wait(1).to({y:373.1},0).wait(1).to({x:464.9,y:373.3},0).wait(1).to({y:373.6},0).wait(1).to({x:464.8,y:373.8},0).wait(1).to({x:464.7,y:374.1},0).wait(1).to({y:374.3},0).wait(1).to({regY:30,x:464.6,y:340.6},0).wait(1).to({regY:64,x:464.7,y:374.5},0).wait(1).to({x:464.8,y:374.4},0).wait(1).to({x:464.9},0).wait(1).to({x:465.1,y:374.3},0).wait(1).to({x:465.2,y:374.2},0).wait(1).to({x:465.3,y:374.1},0).wait(1).to({x:465.4},0).wait(1).to({x:465.5,y:374},0).wait(1).to({x:465.6,y:373.9},0).wait(1).to({x:465.7,y:373.8},0).wait(1).to({x:465.9},0).wait(1).to({x:466,y:373.7},0).wait(1).to({regY:30,x:466.1,y:339.6},0).wait(1).to({regY:64,y:373.8},0).wait(1).to({x:466,y:374.1},0).wait(1).to({y:374.3},0).wait(1).to({x:465.9,y:374.6},0).wait(1).to({y:374.8},0).wait(1).to({x:465.8,y:375.1},0).wait(1).to({y:375.3},0).wait(1).to({x:465.7,y:375.6},0).wait(1).to({y:375.8},0).wait(1).to({regY:30,x:465.6,y:342.1},0).wait(1).to({regY:64,x:465.7,y:376},0).wait(2).to({x:465.8,y:375.9},0).wait(2).to({x:465.9,y:375.8},0).wait(2).to({x:466,y:375.7},0).wait(2).to({x:466.1,y:375.6},0).wait(2).to({x:466.2,y:375.5},0).wait(2).to({x:466.3,y:375.4},0).wait(2).to({x:466.4,y:375.3},0).wait(2).to({x:466.5,y:375.2},0).wait(3).to({x:466.6,y:375.1},0).wait(1).to({regY:30,y:341.1},0).to({x:465.6,y:342.1},13).wait(1).to({regY:64,x:465.7,y:376},0).wait(1).to({x:465.8,y:375.9},0).wait(1).to({x:466,y:375.7},0).wait(1).to({x:466.1,y:375.6},0).wait(1).to({x:466.2,y:375.5},0).wait(1).to({x:466.3,y:375.4},0).wait(1).to({x:466.4,y:375.3},0).wait(1).to({x:466.5,y:375.2},0).wait(2).to({regY:30,x:466.6,y:341.1},0).wait(1));

	// home_boy_1
	this.instance_14 = new lib.home_boy_1_1();
	this.instance_14.setTransform(499.1,333.1,1,1,0,0,0,12.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:56.7,x:499.4,y:368},0).wait(1).to({x:499.7,y:367.7},0).wait(1).to({x:500.1,y:367.3},0).wait(1).to({x:500.5,y:366.9},0).wait(1).to({x:500.9,y:366.5},0).wait(1).to({x:501.4,y:366},0).wait(1).to({x:501.9,y:365.5},0).wait(1).to({x:502.5,y:364.9},0).wait(1).to({regY:21.5,x:503.1,y:329.1},0).wait(1).to({regY:56.7,x:502.9,y:364.7},0).wait(1).to({x:502.7,y:365.2},0).wait(1).to({x:502.5,y:365.7},0).wait(1).to({x:502.3,y:366.1},0).wait(1).to({x:502.1,y:366.6},0).wait(1).to({x:501.9,y:367.1},0).wait(1).to({x:501.7,y:367.6},0).wait(1).to({x:501.5,y:368.1},0).wait(1).to({x:501.2,y:368.7},0).wait(1).to({x:501,y:369.2},0).wait(1).to({x:500.8,y:369.7},0).wait(1).to({x:500.6,y:370.2},0).wait(1).to({x:500.3,y:370.8},0).wait(1).to({regY:21.5,x:500.1,y:336.1},0).wait(1).to({regY:56.7,x:499.9,y:371.2},0).wait(1).to({x:499.8,y:371.1},0).wait(1).to({x:499.6},0).wait(1).to({x:499.5,y:371},0).wait(1).to({x:499.3,y:370.9},0).wait(1).to({x:499.2,y:370.8},0).wait(1).to({x:499},0).wait(1).to({x:498.9,y:370.7},0).wait(1).to({x:498.7,y:370.6},0).wait(1).to({x:498.6,y:370.5},0).wait(1).to({x:498.4},0).wait(1).to({x:498.3,y:370.4},0).wait(1).to({regY:21.5,x:498.1,y:335.1},0).wait(1).to({regY:56.7,y:370.1},0).wait(1).to({y:369.9},0).wait(1).to({y:369.6},0).wait(1).to({y:369.4},0).wait(1).to({y:369.2},0).wait(1).to({y:369},0).wait(1).to({y:368.8},0).wait(1).to({y:368.6},0).wait(1).to({y:368.3},0).wait(1).to({y:368.1},0).wait(1).to({y:367.9},0).wait(1).to({y:367.7},0).wait(1).to({y:367.5},0).wait(1).to({regY:21.5,y:332.1},0).wait(1).to({regY:56.7,x:498.3,y:367.4},0).wait(1).to({x:498.5,y:367.5},0).wait(1).to({x:498.8,y:367.6},0).wait(1).to({x:499,y:367.7},0).wait(1).to({x:499.2,y:367.8},0).wait(1).to({x:499.4,y:367.9},0).wait(1).to({x:499.6,y:368},0).wait(1).to({x:499.7,y:368.1},0).wait(1).to({x:499.9,y:368.2},0).wait(1).to({regY:21.5,x:500.1,y:333.1},0).wait(1).to({regY:56.7,x:500.3,y:368.8},0).wait(1).to({x:500.6,y:369.2},0).wait(1).to({x:500.8,y:369.6},0).wait(1).to({x:501,y:370},0).wait(1).to({regY:21.5,x:501.1,y:335.1},0).to({x:498.1,y:332.1},8).wait(1).to({regY:56.7,x:498.3,y:367.4},0).wait(1).to({x:498.5,y:367.5},0).wait(1).to({x:498.8,y:367.6},0).wait(1).to({x:499,y:367.7},0).wait(1).to({x:499.2,y:367.8},0).wait(1).to({x:499.4,y:367.9},0).wait(1).to({x:499.6,y:368},0).wait(1).to({x:499.7,y:368.1},0).wait(1).to({x:499.9,y:368.2},0).wait(1).to({regY:21.5,x:500.1,y:333.1},0).wait(1).to({regY:56.7,x:500.3,y:368.8},0).wait(1).to({x:500.6,y:369.2},0).wait(1).to({x:500.8,y:369.6},0).wait(1).to({x:501,y:370},0).wait(1).to({regY:21.5,x:501.1,y:335.1},0).wait(1));

	// home_cat_2
	this.instance_15 = new lib.home_cat_2_1();
	this.instance_15.setTransform(289.6,126,1,1,0,0,0,14,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({x:290.5,y:125.9},0).wait(1).to({x:291.4,y:125.8},0).wait(1).to({x:292.3,y:125.7},0).wait(1).to({x:293.3,y:125.6},0).wait(1).to({x:294.3,y:125.5},0).wait(1).to({x:295.4,y:125.4},0).wait(1).to({x:296.5,y:125.3},0).wait(1).to({x:297.6,y:125.2},0).wait(1).to({x:298.8,y:125.1},0).wait(1).to({x:300.1,y:124.9},0).wait(1).to({x:301.4,y:124.8},0).wait(1).to({x:302.8,y:124.7},0).wait(1).to({x:304.2,y:124.5},0).wait(1).to({x:305.7,y:124.4},0).wait(1).to({x:307.2,y:124.2},0).wait(1).to({x:308.8,y:124.1},0).wait(1).to({x:310.5,y:123.9},0).wait(1).to({x:312.3,y:123.7},0).wait(1).to({x:314.1,y:123.5},0).wait(1).to({x:316,y:123.4},0).wait(1).to({x:317.8,y:123.7},0).wait(1).to({x:319.8,y:124.2},0).wait(1).to({x:321.7,y:124.6},0).wait(1).to({x:322.9,y:124.7},0).wait(1).to({x:324.1,y:124.8},0).wait(1).to({x:325.3,y:124.9},0).wait(1).to({x:326.6,y:125},0).wait(1).to({x:327.8,y:125.1},0).wait(1).to({x:329,y:125.2},0).wait(1).to({x:330.2,y:125.3},0).wait(1).to({x:331.3,y:125.4},0).wait(1).to({x:332.5,y:125.5},0).wait(1).to({x:333.6,y:125.6},0).wait(1).to({x:335.3,y:125.5},0).wait(1).to({x:337,y:125.4},0).wait(1).to({x:338.6,y:125.2},0).wait(1).to({x:340.2,y:125.1},0).wait(1).to({x:341.7,y:125},0).wait(1).to({x:343.1,y:124.9},0).wait(1).to({x:344.4,y:124.8},0).wait(1).to({x:345.6,y:124.7},0).wait(1).to({x:346.6},0).wait(1).to({x:347.3,y:124.6},0).wait(1).to({x:347.6},0).wait(1).to({x:347.7},0).wait(1).to({x:347.9},0).wait(1).to({x:348.1},0).wait(1).to({x:348.3},0).wait(1).to({x:348.5},0).wait(1).to({x:348.8},0).wait(1).to({x:349.1},0).wait(1).to({x:349.3},0).wait(1).to({x:349.6},0).wait(1).to({x:349.4,y:124.9},0).wait(1).to({x:349.2,y:125.2},0).wait(1).to({x:349,y:125.5},0).wait(1).to({x:348.8,y:125.8},0).wait(1).to({x:348.6,y:126},0).wait(1).to({x:348.4,y:126.3},0).wait(1).to({x:348.3,y:126.6},0).wait(1).to({x:348.1,y:126.1},0).wait(1).to({x:347.9,y:125.7},0).wait(1).to({x:347.8,y:125.3},0).wait(1).to({x:347.7,y:124.9},0).wait(1).to({x:347.6,y:124.6},0).wait(1).to({x:347.7},0).wait(1).to({x:347.9},0).wait(1).to({x:348.1},0).wait(1).to({x:348.3},0).wait(1).to({x:348.5},0).wait(1).to({x:348.8},0).wait(1).to({x:349.1},0).wait(1).to({x:349.3},0).wait(1).to({x:349.6},0).wait(1).to({x:349.4,y:124.9},0).wait(1).to({x:349.2,y:125.2},0).wait(1).to({x:349,y:125.5},0).wait(1).to({x:348.8,y:125.8},0).wait(1).to({x:348.6,y:126},0).wait(1).to({x:348.4,y:126.3},0).wait(1).to({x:348.3,y:126.6},0).wait(1).to({x:348.1,y:126.2},0).wait(1).to({x:348,y:125.9},0).wait(1).to({x:347.9,y:125.6},0).wait(1).to({x:347.8,y:125.3},0).wait(1).to({x:347.7,y:125.1},0).wait(1).to({y:124.8},0).wait(1).to({x:347.6,y:124.6},0).wait(1));

	// home_building
	this.instance_16 = new lib.home_building_1();
	this.instance_16.setTransform(242.6,237.6,1,1,0,0,0,197,122);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(89));

	// home_smoke
	this.instance_17 = new lib.home_smoke_1();
	this.instance_17.setTransform(380.9,120.6,1,1,0,0,0,14.3,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:38,regY:43.5,rotation:-0.2,x:404.5,y:87.2},0).wait(1).to({rotation:-0.4,x:404.4},0).wait(1).to({rotation:-0.6,x:404.2,y:87.3},0).wait(1).to({rotation:-0.8,x:404.1,y:87.4},0).wait(1).to({rotation:-1.1,x:403.9,y:87.5},0).wait(1).to({rotation:-1.4,x:403.8,y:87.6},0).wait(1).to({rotation:-1.7,x:403.6,y:87.7},0).wait(1).to({rotation:-2,x:403.4},0).wait(1).to({rotation:-2.3,x:403.2,y:87.9},0).wait(1).to({regX:14.3,regY:77,rotation:-2.7,x:380.9,y:122.6},0).wait(1).to({regX:38,regY:43.5,rotation:-2.5,x:403.1,y:88},0).wait(1).to({rotation:-2.4,x:403.2,y:87.9},0).wait(1).to({rotation:-2.2,x:403.3,y:87.8},0).wait(1).to({rotation:-2,x:403.4},0).wait(1).to({rotation:-1.8,x:403.5},0).wait(1).to({rotation:-1.6,x:403.7,y:87.7},0).wait(1).to({rotation:-1.4,x:403.8,y:87.6},0).wait(1).to({rotation:-1.2,x:403.9},0).wait(1).to({rotation:-1,x:404,y:87.5},0).wait(1).to({rotation:-0.8,x:404.1,y:87.4},0).wait(1).to({rotation:-0.6,x:404.2},0).wait(1).to({rotation:-0.4,x:404.3,y:87.3},0).wait(1).to({rotation:-0.2,x:404.5,y:87.2},0).wait(1).to({regX:14.3,regY:77,rotation:0,x:380.9,y:120.6},0).wait(1).to({regX:38,regY:43.5,x:404.5,y:87.3},0).wait(1).to({x:404.3,y:87.5},0).wait(1).to({x:404.2,y:87.7},0).wait(1).to({x:404,y:88},0).wait(1).to({x:403.9,y:88.2},0).wait(1).to({x:403.7,y:88.4},0).wait(1).to({x:403.6,y:88.6},0).wait(1).to({x:403.5,y:88.8},0).wait(1).to({x:403.3,y:89},0).wait(1).to({x:403.2,y:89.2},0).wait(1).to({x:403,y:89.5},0).wait(1).to({x:402.9,y:89.7},0).wait(1).to({x:402.7,y:89.9},0).wait(1).to({regX:14.3,regY:77,x:378.9,y:123.6},0).wait(1).to({regX:38,regY:43.5,rotation:-0.1,x:402.6,y:89.8},0).wait(1).to({rotation:-0.2,y:89.6},0).wait(1).to({rotation:-0.4,y:89.3},0).wait(1).to({rotation:-0.5,y:89.1},0).wait(1).to({rotation:-0.6,y:88.8},0).wait(1).to({rotation:-0.7,y:88.6},0).wait(1).to({rotation:-0.8,y:88.3},0).wait(1).to({rotation:-1,y:88},0).wait(1).to({rotation:-1.1,y:87.8},0).wait(1).to({rotation:-1.2,y:87.6},0).wait(1).to({rotation:-1.3,y:87.3},0).wait(1).to({rotation:-1.4,y:87.1},0).wait(1).to({rotation:-1.5,y:86.9},0).wait(1).to({rotation:-1.6,y:86.6},0).wait(1).to({regX:14.3,regY:77,rotation:-1.7,x:380,y:120.6},0).wait(1).to({regX:38,regY:43.5,rotation:-1.5,x:402.8,y:86.5},0).wait(1).to({rotation:-1.4,x:403,y:86.6},0).wait(1).to({rotation:-1.2,x:403.2,y:86.7},0).wait(1).to({rotation:-1,x:403.4},0).wait(1).to({rotation:-0.9,x:403.6,y:86.8},0).wait(1).to({rotation:-0.7,x:403.7},0).wait(1).to({rotation:-0.6,x:403.9,y:86.9},0).wait(1).to({rotation:-0.5,x:404.1,y:87},0).wait(1).to({rotation:-0.3,x:404.2},0).wait(1).to({rotation:-0.2,x:404.3,y:87.1},0).wait(1).to({rotation:-0.1,x:404.5},0).wait(1).to({regX:14.3,regY:77,rotation:0,x:380.9,y:120.6},0).to({rotation:-1.7,x:380},11).wait(1).to({regX:38,regY:43.5,rotation:-1.5,x:402.8,y:86.5},0).wait(1).to({rotation:-1.4,x:403,y:86.6},0).wait(1).to({rotation:-1.2,x:403.2,y:86.7},0).wait(1).to({rotation:-1,x:403.4},0).wait(1).to({rotation:-0.9,x:403.6,y:86.8},0).wait(1).to({rotation:-0.7,x:403.7},0).wait(1).to({rotation:-0.6,x:403.9,y:86.9},0).wait(1).to({rotation:-0.5,x:404.1,y:87},0).wait(1).to({rotation:-0.3,x:404.2},0).wait(1).to({rotation:-0.2,x:404.3,y:87.1},0).wait(1).to({rotation:-0.1,x:404.5},0).wait(1).to({regX:14.3,regY:77,rotation:0,x:380.9,y:120.6},0).wait(1));

	// bg touch ups
	this.instance_18 = new lib.bgtouchups_1();
	this.instance_18.setTransform(286.1,228.6,1,1,0,0,0,276.5,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.6,9.6,557,445);


(lib.mc_viewfinder_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"label_show":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_16 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(16).call(this.frame_16).wait(1));

	// mc_twitter
	this.mc_twitter = new lib.mc_twitter();
	this.mc_twitter.setTransform(167.5,114.5,1,1,0,0,0,0.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.mc_twitter).wait(1).to({regX:13.7,regY:19,x:180.7,y:116.3},0).wait(1).to({y:117},0).wait(1).to({y:117.6},0).wait(1).to({regX:0.5,regY:17.5,x:167.5,y:116.5},0).wait(1).to({regX:13.7,regY:19,x:180.7,y:117.5},0).wait(1).to({y:116.5},0).wait(1).to({y:115.5},0).wait(1).to({regX:0.5,regY:17.5,x:167.5,y:113.5},0).wait(1).to({regX:13.7,regY:19,x:180.7,y:115.3},0).wait(1).to({y:115.7},0).wait(1).to({y:116.2},0).wait(1).to({regX:0.5,regY:17.5,x:167.5,y:115},0).wait(1).to({regX:13.7,regY:19,x:180.7,y:116.4},0).wait(1).to({y:116.3},0).wait(1).to({y:116.1},0).wait(1).to({regX:0.5,regY:17.5,x:167.5,y:114.5},0).wait(1));

	// mc_facebook
	this.mc_facebook = new lib.mc_facebook();
	this.mc_facebook.setTransform(167,81.8,1,1,0,0,0,0,15.8);

	this.timeline.addTween(cjs.Tween.get(this.mc_facebook).wait(1).to({regX:13.4,regY:15.5,x:180.4},0).wait(1).to({y:82.5},0).wait(1).to({y:83.1},0).wait(1).to({regX:0,regY:15.8,x:167,y:83.8},0).wait(1).to({regX:13.4,regY:15.5,x:180.4,y:83},0).wait(1).to({y:82},0).wait(1).to({y:81},0).wait(1).to({regX:0,regY:15.8,x:167,y:80.8},0).wait(1).to({regX:13.4,regY:15.5,x:180.4},0).wait(1).to({y:81.2},0).wait(1).to({y:81.7},0).wait(1).to({regX:0,regY:15.8,x:167,y:82.3},0).wait(1).to({regX:13.4,regY:15.5,x:180.4,y:81.9},0).wait(1).to({y:81.8},0).wait(1).to({y:81.6},0).wait(1).to({regX:0,regY:15.8,x:167,y:81.8},0).wait(1));

	// titles
	this.titles_ani = new lib.ey_s_base();
	this.titles_ani.setTransform(69,200.5,1,1,0,0,0,127,367.5);

	this.timeline.addTween(cjs.Tween.get(this.titles_ani).wait(1).to({regY:275.5,y:108.9},0).wait(1).to({y:109.5},0).wait(1).to({y:110.2},0).wait(1).to({regY:367.5,y:202.5},0).wait(1).to({regY:275.5,y:110},0).wait(1).to({y:109.1},0).wait(1).to({y:108.1},0).wait(1).to({regY:367.5,y:199.5},0).wait(1).to({regY:275.5,y:107.8},0).wait(1).to({y:108.3},0).wait(1).to({y:108.8},0).wait(1).to({regY:367.5,y:201},0).wait(1).to({regY:275.5,y:109},0).wait(1).to({y:108.8},0).wait(1).to({y:108.6},0).wait(1).to({regY:367.5,y:200.5},0).wait(1));

	// text
	this.mc_text_holder = new lib.textholder();
	this.mc_text_holder.setTransform(73,174.6,1,1,0,0,0,73,160.6);
	this.mc_text_holder.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.mc_text_holder).wait(1).to({regY:243,y:257.3},0).wait(1).to({y:258},0).wait(1).to({y:258.6},0).wait(1).to({regY:160.6,y:176.6},0).wait(1).to({regY:243,y:258.5},0).wait(1).to({y:257.5},0).wait(1).to({y:256.5},0).wait(1).to({regY:160.6,y:173.6},0).wait(1).to({regY:243,y:256.3},0).wait(1).to({y:256.7},0).wait(1).to({y:257.2},0).wait(1).to({regY:160.6,y:175.1},0).wait(1).to({regY:243,y:257.4,alpha:0.171},0).wait(1).to({y:257.3,alpha:0.494},0).wait(1).to({y:257.1,alpha:0.82},0).wait(1).to({regY:160.6,y:174.6,alpha:1},0).wait(1));

	// sign
	this.instance = new lib.ey_s_board_2();
	this.instance.setTransform(63,259,1,1,0,0,0,118.5,245);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:186.5,y:200.8},0).wait(1).to({y:201.5},0).wait(1).to({y:202.1},0).wait(1).to({regY:245,y:261},0).wait(1).to({regY:186.5,y:202},0).wait(1).to({y:201},0).wait(1).to({y:200},0).wait(1).to({regY:245,y:258},0).wait(1).to({regY:186.5,y:199.8},0).wait(1).to({y:200.2},0).wait(1).to({y:200.7},0).wait(1).to({regY:245,y:259.5},0).wait(1).to({regY:186.5,y:200.9},0).wait(1).to({y:200.8},0).wait(1).to({y:200.6},0).wait(1).to({regY:245,y:259},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,14,248.5,373);


(lib.mc_slides_holder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"slide-1":1,"slide-2":13,"slide-3":31,"slide-4":44,"slide-5":56,"slide-6":70,"slide-7":82});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_1;
		this.dispatchEvent(e);
	}
	this.frame_13 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_2;
		this.dispatchEvent(e);
	}
	this.frame_31 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_3;
		this.dispatchEvent(e);
	}
	this.frame_44 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_4;
		this.dispatchEvent(e);
	}
	this.frame_56 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_5;
		this.dispatchEvent(e);
	}
	this.frame_70 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_6;
		this.dispatchEvent(e);
	}
	this.frame_82 = function() {
		this.stop();
		var e = new createjs.Event('active_slide', true);
		e.slide = this.mc_slide_7;
		this.dispatchEvent(e);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(18).call(this.frame_31).wait(13).call(this.frame_44).wait(12).call(this.frame_56).wait(14).call(this.frame_70).wait(12).call(this.frame_82).wait(19));

	// Layer 5
	this.mc_slide_1 = new lib.slide_intro();
	this.mc_slide_1.setTransform(386.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_2 = new lib.slide_1();
	this.mc_slide_2.setTransform(363.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_3 = new lib.slide_5();
	this.mc_slide_3.setTransform(363.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_4 = new lib.slide_3();
	this.mc_slide_4.setTransform(363.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_5 = new lib.slide_1copy();
	this.mc_slide_5.setTransform(363.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_6 = new lib.slide_4();
	this.mc_slide_6.setTransform(386.1,145.1,1,1,0,0,0,322.1,197.1);

	this.mc_slide_7 = new lib.slide_46();
	this.mc_slide_7.setTransform(386.1,145.1,1,1,0,0,0,322.1,197.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_slide_1}]},1).to({state:[{t:this.mc_slide_2}]},12).to({state:[{t:this.mc_slide_3}]},18).to({state:[{t:this.mc_slide_4}]},13).to({state:[{t:this.mc_slide_5}]},12).to({state:[{t:this.mc_slide_6}]},14).to({state:[{t:this.mc_slide_7}]},12).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.mc_slider_bar = function() {
	this.initialize();

	// Layer 2
	this.mc_slider_bar_stipe = new lib.ey_s_scroll_bg();
	this.mc_slider_bar_stipe.setTransform(201,17,1,1,0,0,0,201,17);

	this.addChild(this.mc_slider_bar_stipe);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,402,34);


(lib.mc_slider_holder = function() {
	this.initialize();

	// Layer 2
	this.mc_slider_head = new lib.Symbol2();
	this.mc_slider_head.setTransform(0.5,-0.5);

	// Layer 1
	this.mc_slider_bar = new lib.mc_slider_bar();
	this.mc_slider_bar.setTransform(248.1,-18,1,1,0,0,0,280.1,0);

	this.addChild(this.mc_slider_bar,this.mc_slider_head);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-40.5,-66,422.5,101.5);


(lib.ey_s_box_mid_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{label_next_slide:7});

	// timeline functions:
	this.frame_0 = function() {
		
	}
	this.frame_7 = function() {
		this.flicker.gotoAndPlay('start');
	}
	this.frame_9 = function() {
		this.dispatchEvent(new createjs.Event('swap_slide',true));
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(2).call(this.frame_9).wait(10).call(this.frame_19).wait(1));

	// ey_s_btn_next
	this.mc_next = new lib.ey_s_btn_back_1();
	this.mc_next.setTransform(759,624,1,1,0,0,180,25,24);

	this.timeline.addTween(cjs.Tween.get(this.mc_next).wait(20));

	// ey_s_btn_back
	this.mc_prev = new lib.ey_s_btn_back_1();
	this.mc_prev.setTransform(248,624,1,1,0,0,0,25,24);

	this.timeline.addTween(cjs.Tween.get(this.mc_prev).wait(20));

	// mc_slider holder
	this.mc_slider_holder = new lib.mc_slider_holder();
	this.mc_slider_holder.setTransform(615.1,625,1,1,0,0,0,280.1,0);

	this.timeline.addTween(cjs.Tween.get(this.mc_slider_holder).wait(20));

	// floor_sign
	this.floor_sign = new lib.floor_sign();
	this.floor_sign.setTransform(-174.5,67,1,1,0,0,0,34.5,51);

	this.timeline.addTween(cjs.Tween.get(this.floor_sign).wait(20));

	// box
	this.instance = new lib.Symbol5();
	this.instance.setTransform(405.5,335,1,1,0,0,0,405.5,335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// ey_s_flicker
	this.flicker = new lib.ey_s_flicker_1();
	this.flicker.setTransform(498.1,352.5,1,1,0,0,0,303,227.5);

	this.timeline.addTween(cjs.Tween.get(this.flicker).wait(20));

	// animation
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(495.1,382.1,1,1,0,0,0,317.1,195.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({alpha:0},11).to({_off:true},1).wait(1));

	// slides
	this.mc_slides_holder = new lib.mc_slides_holder();
	this.mc_slides_holder.setTransform(602.1,470.1,1,1,0,0,0,434.1,289.1);

	this.timeline.addTween(cjs.Tween.get(this.mc_slides_holder).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,811,670);


(lib.ABucket = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"label_show":1,"label_hide":52});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_17 = function() {
		window.project_colonel_archive_canvas.slideBucket(this,'centerToLeft') ; 
		 
		 window.project_colonel_archive_canvas.consoleForward();
	}
	this.frame_23 = function() {
		window.project_colonel_archive_canvas.rachet();
	}
	this.frame_48 = function() {
		this.stop();
		window.project_colonel_archive_canvas.showBackButton();
		this.dispatchEvent('show_complete');
	}
	this.frame_58 = function() {
		window.project_colonel_archive_canvas.slideBucket(this,'leftToCenter') ;
	}
	this.frame_89 = function() {
		this.stop();
		this.dispatchEvent('hide_complete');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(6).call(this.frame_23).wait(25).call(this.frame_48).wait(10).call(this.frame_58).wait(31).call(this.frame_89).wait(1));

	// menu
	this.mc_viewfinder_menu_panel = new lib.mc_viewfinder_text();
	this.mc_viewfinder_menu_panel.setTransform(1529.4,522.5,0.848,0.848,0,0,0,76.5,370.5);
	this.mc_viewfinder_menu_panel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_viewfinder_menu_panel).wait(9).to({_off:false},0).wait(1).to({regX:69.4,regY:201,scaleX:0.85,scaleY:0.85,x:1520.8,y:378.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1514.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1505.5,y:379.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1494.6,y:379.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1482.4,y:379.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1468.9,y:379.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1454.7,y:379.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1439.7,y:380},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1424.1,y:380.2},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1408,y:380.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1391.5,y:380.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1374.7,y:380.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1357.6,y:381.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1340.4,y:381.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1323.1,y:381.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1305.7,y:381.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1288.4,y:382.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1271.2,y:382.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1254.1,y:382.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1237.4,y:382.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1221,y:383},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1205.3,y:383.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1190.3,y:383.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1176.4,y:383.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1164.3,y:383.8},0).wait(1).to({scaleX:1,scaleY:1,x:1154.8,y:383.9},0).wait(1).to({regX:76.5,regY:370.5,scaleX:1,scaleY:1,x:1157.5,y:553.5},0).wait(1).to({regX:69.4,regY:201,x:1151.2,y:384},0).wait(1).to({x:1152.4},0).wait(1).to({regX:76.5,regY:370.5,x:1160.5,y:553.5},0).wait(17).to({regX:69.4,regY:201,x:1152.6,y:384},0).wait(1).to({x:1151.4},0).wait(1).to({regX:76.5,regY:370.5,x:1157.5,y:553.5},0).wait(1).to({regX:69.4,regY:201,scaleX:1,scaleY:1,x:1153.6,y:384},0).wait(1).to({scaleX:1,scaleY:1,x:1161.4,y:383.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1172.2,y:383.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1185.1,y:383.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1199.7,y:383.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1215.4,y:383.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1232.2,y:382.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1249.7,y:382.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1267.8,y:382.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1286.5,y:382.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1305.5,y:381.8},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1324.7,y:381.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1344.2,y:381.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1363.7,y:381.1},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1383.2,y:380.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1402.6,y:380.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1421.8,y:380.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1440.5,y:380},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1458.7,y:379.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1476.1,y:379.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1492.3,y:379.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1506.7,y:379.1},0).wait(1).to({regX:76.5,regY:370.6,scaleX:0.85,scaleY:0.85,x:1524.1,y:523},0).to({_off:true},1).wait(8));

	// pole
	this.instance = new lib.ey_s_pole_1();
	this.instance.setTransform(1528.6,628,0.848,0.848,0,0,0,10.5,127);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({regX:16.9,regY:71.2,scaleX:0.85,scaleY:0.85,x:1531.4,y:581},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1525.1,y:581.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1516.1,y:582.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1505.3,y:583.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1493.1,y:585.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1479.8,y:586.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1465.6,y:588.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1450.7,y:590},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1435.1,y:591.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1419.1,y:593.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1402.8,y:595.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1386,y:597.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1369,y:599.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1352,y:601},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1334.7,y:603},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1317.5,y:604.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1300.2,y:606.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1283,y:608.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1266.1,y:610.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1249.4,y:612.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1233.2,y:614.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1217.5,y:616.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1202.6,y:617.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1188.8,y:619.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1176.7,y:620.7},0).wait(1).to({scaleX:1,scaleY:1,x:1167.2,y:621.7},0).wait(1).to({regX:10.5,regY:127,scaleX:1,scaleY:1,x:1156.5,y:678},0).wait(1).to({regX:16.9,regY:71.2,x:1163.7,y:622.2},0).wait(1).to({x:1164.9},0).wait(1).to({regX:10.5,regY:127,x:1159.5,y:678},0).wait(17).to({regX:16.9,regY:71.2,x:1165.1,y:622.2},0).wait(1).to({x:1163.9},0).wait(1).to({regX:10.5,regY:127,x:1156.5,y:678},0).wait(1).to({regX:16.9,regY:71.2,scaleX:1,scaleY:1,x:1166.1,y:621.8},0).wait(1).to({scaleX:1,scaleY:1,x:1173.8,y:621},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1184.6,y:619.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:1197.4,y:618.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:1211.9,y:616.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1227.6,y:615},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1244.3,y:613.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:1261.7,y:611.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:1279.8,y:609.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1298.3,y:607.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:1317.2,y:605},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:1336.3,y:602.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:1355.7,y:600.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1375.1,y:598.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:1394.5,y:596.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:1413.8,y:594.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:1432.9,y:592},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:1451.5,y:589.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1469.6,y:587.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:1486.9,y:586},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:1503,y:584.2},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:1517.3,y:582.6},0).wait(1).to({regX:10.5,regY:127.1,scaleX:0.85,scaleY:0.85,x:1523.2,y:628.8},0).to({_off:true},1).wait(8));

	// bucket_side_shadow
	this.instance_1 = new lib.box_shadow();
	this.instance_1.setTransform(-417.9,369,2.22,1.48,0,0,0,522.2,387.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:-412.9,y:371,alpha:0.328},8).to({x:-417.9,y:369,alpha:0.699},9).wait(43).to({alpha:0.211},14).to({alpha:0},6).wait(1));

	// bucket_new
	this.bucket = new lib.bucketDark();
	this.bucket.setTransform(698.5,674.5,1,1,0,0,0,326.5,620.5);

	this.timeline.addTween(cjs.Tween.get(this.bucket).wait(11).to({regX:327.5,regY:321.5,x:700.2,y:375.5},0).wait(1).to({x:702.4},0).wait(1).to({x:705.8},0).wait(1).to({regX:326.5,regY:620.5,x:709.5,y:674.5},0).wait(1).to({regX:327.5,regY:321.5,x:707,y:375.6},0).wait(1).to({scaleX:1,scaleY:1,x:697.2,y:375.8},0).wait(1).to({scaleX:1,scaleY:1,x:681.6,y:376},0).wait(1).to({scaleX:1,scaleY:1,x:661.1,y:376.4},0).wait(1).to({scaleX:0.99,scaleY:1,x:636,y:376.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:607.1,y:377.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:574.6,y:378},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:538.9,y:378.6},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:500.4,y:379.3},0).wait(1).to({scaleX:0.97,scaleY:0.99,x:459.6,y:380.1},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:416.5,y:380.8},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:371.6,y:381.6},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:325.1,y:382.5},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:277.5,y:383.4},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:228.8,y:384.3},0).wait(1).to({scaleX:0.94,scaleY:0.97,x:179.4,y:385.1},0).wait(1).to({scaleX:0.94,scaleY:0.97,x:129.6,y:386.1},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:79.7,y:386.9},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:30.1,y:387.9},0).wait(1).to({scaleX:0.92,scaleY:0.96,x:-18.9,y:388.8},0).wait(1).to({scaleX:0.92,scaleY:0.95,x:-67,y:389.6},0).wait(1).to({scaleX:0.91,scaleY:0.95,x:-113.4,y:390.5},0).wait(1).to({scaleX:0.91,scaleY:0.95,x:-157.8,y:391.2},0).wait(1).to({scaleX:0.9,scaleY:0.95,x:-199.4,y:392},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-237.4,y:392.7},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-270.6,y:393.3},0).wait(1).to({scaleX:0.89,scaleY:0.94,x:-297.6,y:393.8},0).wait(1).to({scaleX:0.89,scaleY:0.94,x:-316.3,y:394.1},0).wait(1).to({regX:326.4,regY:620.5,scaleX:0.89,scaleY:0.94,x:-324.4,y:674.5},0).wait(12).to({regX:327.5,regY:321.5,scaleX:0.89,x:-320.4,y:394.2},0).wait(1).to({scaleX:0.89,scaleY:0.94,x:-311.7,y:394.1},0).wait(1).to({scaleX:0.89,scaleY:0.94,x:-297.9,y:393.8},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-279.7,y:393.5},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-257.3,y:393.1},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-231.4,y:392.6},0).wait(1).to({scaleX:0.9,scaleY:0.94,x:-202.2,y:392.1},0).wait(1).to({scaleX:0.91,scaleY:0.95,x:-170.2,y:391.5},0).wait(1).to({scaleX:0.91,scaleY:0.95,x:-135.5,y:390.9},0).wait(1).to({scaleX:0.91,scaleY:0.95,x:-98.5,y:390.2},0).wait(1).to({scaleX:0.92,scaleY:0.95,x:-59.4,y:389.5},0).wait(1).to({scaleX:0.92,scaleY:0.96,x:-18.6,y:388.7},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:23.9,y:388},0).wait(1).to({scaleX:0.93,scaleY:0.96,x:67.6,y:387.2},0).wait(1).to({scaleX:0.94,scaleY:0.96,x:112.4,y:386.4},0).wait(1).to({scaleX:0.94,scaleY:0.97,x:158.1,y:385.5},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:204.4,y:384.7},0).wait(1).to({scaleX:0.95,scaleY:0.97,x:251.1,y:383.9},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:297.9,y:383},0).wait(1).to({scaleX:0.96,scaleY:0.98,x:344.6,y:382.2},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:390.8,y:381.3},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:436.2,y:380.5},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:480.6,y:379.7},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:523.3,y:379},0).wait(1).to({scaleX:0.98,scaleY:0.99,x:563.9,y:378.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:601.9,y:377.5},0).wait(1).to({scaleX:0.99,scaleY:1,x:636.3,y:376.9},0).wait(1).to({scaleX:1,scaleY:1,x:666.3,y:376.4},0).wait(1).to({scaleX:1,scaleY:1,x:690.6,y:375.9},0).wait(1).to({scaleX:1,scaleY:1,x:707.2,y:375.6},0).wait(1).to({regX:326.5,regY:620.5,scaleX:1,x:712.5,y:674.5},0).wait(1).to({regX:327.5,regY:321.5,x:711.5,y:375.5},0).wait(1).to({x:707.3},0).wait(1).to({x:702.5},0).wait(1).to({regX:326.5,regY:620.5,x:698.5,y:674.5},0).wait(1));

	// bucketChicken
	this.instance_2 = new lib.bucketChicken();
	this.instance_2.setTransform(700,100.5,1,1,0,0,0,272,93.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:273.5,regY:58,x:701.5,y:64.5},0).wait(1).to({y:63.5},0).wait(1).to({y:62.5},0).wait(1).to({regX:272,regY:93.5,x:700,y:97.5},0).wait(1).to({regX:273.5,regY:58,x:701.5,y:62.5},0).wait(1).to({y:63.9},0).wait(1).to({y:66.1},0).wait(1).to({y:68.9},0).wait(1).to({y:72.4},0).wait(1).to({regX:272,regY:93.5,x:700,y:111.8},0).wait(1).to({regX:273.5,regY:58,x:702.3,y:76.3},0).wait(1).to({x:704.7},0).wait(1).to({x:708.4},0).wait(1).to({regX:272,regY:93.5,x:712,y:111.8},0).wait(1).to({regX:273.5,regY:58,scaleX:1,scaleY:1,x:710,y:76.3},0).wait(1).to({scaleX:1,scaleY:1,x:700,y:76.6},0).wait(1).to({scaleX:1,scaleY:1,x:684.4,y:76.8},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:663.7,y:77.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:638.5,y:77.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:609.2,y:78.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:576.5,y:78.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:540.5,y:79.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:501.8,y:80.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:460.6,y:80.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:417.2,y:81.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:372,y:82.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:325.1,y:83.3},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:277.1,y:84.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:228,y:85.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:178.2,y:86},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:128,y:86.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:77.8,y:87.8},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:27.7,y:88.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-21.7,y:89.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-70.1,y:90.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-116.9,y:91.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-161.6,y:92.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-203.5,y:92.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-241.9,y:93.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-275.3,y:94.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-302.5,y:94.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-321.4,y:95.1},0).wait(1).to({regX:272.1,regY:93.5,scaleX:0.83,scaleY:0.83,x:-329.9,y:124.8},0).wait(12).to({regX:273.5,regY:58,scaleX:0.84,scaleY:0.84,x:-325.6,y:95.1},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-316.8,y:94.9},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-303,y:94.6},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:-284.6,y:94.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-262.1,y:93.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-236,y:93},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:-206.6,y:92.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-174.2,y:91.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:-139.3,y:90.6},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-102,y:89.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-62.6,y:88.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-21.5,y:87.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:21.3,y:86.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:65.4,y:85.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:110.6,y:84.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:156.6,y:83.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:203.3,y:82.5},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:250.3,y:81.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:297.5,y:80.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:344.5,y:79.2},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:391.1,y:78},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:436.9,y:77},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:481.6,y:75.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:524.6,y:74.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:565.6,y:73.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:603.8,y:73},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:638.5,y:72.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:668.8,y:71.4},0).wait(1).to({scaleX:1,scaleY:1,x:693.2,y:70.9},0).wait(1).to({scaleX:1,scaleY:1,x:710,y:70.5},0).wait(1).to({regX:272,regY:93.5,scaleX:1,scaleY:1,x:715,y:105.8},0).wait(1).to({regX:273.5,regY:58,x:714.4,y:69.6},0).wait(1).to({x:709.9,y:68},0).wait(1).to({x:704.7,y:66.1},0).wait(1).to({regX:272,regY:93.5,x:700,y:100.5},0).wait(1));

	// top_fade
	this.instance_3 = new lib.edgeshad_1();
	this.instance_3.setTransform(717,54.9,1,2.455,0,0,0,717,48);
	this.instance_3.alpha = 0.34;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({y:96.9,alpha:1},13).wait(60).to({y:54.9,alpha:0.34},15).wait(1));

	// box_shadow
	this.instance_4 = new lib.box_shadow();
	this.instance_4.setTransform(679.1,369,0.89,0.89,0,0,0,522.2,387.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({alpha:0.801},6).to({scaleX:1,scaleY:1,x:678.5,y:359,alpha:0},16).wait(22).to({scaleX:1,scaleY:1,y:359.1,alpha:0.013},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:359.5,alpha:0.044},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:360.1,alpha:0.087},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:678.6,y:360.7,alpha:0.138},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:361.4,alpha:0.195},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:678.7,y:362.2,alpha:0.255},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:363,alpha:0.318},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:678.8,y:363.8,alpha:0.381},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:364.5,alpha:0.445},0).wait(1).to({scaleX:0.93,scaleY:0.93,y:365.3,alpha:0.508},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:678.9,y:366,alpha:0.568},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:679,y:366.8,alpha:0.626},0).wait(1).to({scaleX:0.91,scaleY:0.91,y:367.4,alpha:0.679},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:368,alpha:0.725},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:679.1,y:368.5,alpha:0.764},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:368.8,alpha:0.79},0).wait(1).to({scaleX:0.89,scaleY:0.89,y:369,alpha:0.801},0).to({alpha:0},6).to({_off:true},1).wait(6));

	// ey_s_box_r
	this.instance_5 = new lib.ey_s_box_r_1();
	this.instance_5.setTransform(919.4,395.3,0.04,0.715,0,0,0,-1.3,336.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).wait(1).to({regX:90.5,regY:334.5,scaleX:0.05,scaleY:0.72,x:924.5,y:393.2},0).wait(1).to({scaleX:0.07,scaleY:0.73,x:928.3,y:391.8},0).wait(1).to({scaleX:0.09,scaleY:0.74,x:933.7,y:389.6},0).wait(1).to({scaleX:0.12,scaleY:0.75,x:940.2,y:387.1},0).wait(1).to({scaleX:0.16,scaleY:0.76,x:947.6,y:384.1},0).wait(1).to({scaleX:0.19,scaleY:0.78,x:955.6,y:380.9},0).wait(1).to({scaleX:0.23,scaleY:0.79,x:964.2,y:377.6},0).wait(1).to({scaleX:0.28,scaleY:0.81,x:973,y:374.1},0).wait(1).to({scaleX:0.32,scaleY:0.83,x:982.1,y:370.5},0).wait(1).to({scaleX:0.36,scaleY:0.85,x:991.3,y:366.9},0).wait(1).to({scaleX:0.41,scaleY:0.86,x:1000.6,y:363.2},0).wait(1).to({scaleX:0.45,scaleY:0.88,x:1009.8,y:359.6},0).wait(1).to({scaleX:0.49,scaleY:0.9,x:1018.8,y:356},0).wait(1).to({scaleX:0.53,scaleY:0.91,x:1027.6,y:352.5},0).wait(1).to({scaleX:0.57,scaleY:0.93,x:1036.1,y:349.1},0).wait(1).to({scaleX:0.61,scaleY:0.95,x:1044.2,y:346},0).wait(1).to({scaleX:0.65,scaleY:0.96,x:1051.6,y:343.1},0).wait(1).to({scaleX:0.68,scaleY:0.97,x:1058.4,y:340.4},0).wait(1).to({scaleX:0.71,scaleY:0.98,x:1064.2,y:338.1},0).wait(1).to({scaleX:0.73,scaleY:0.99,x:1068.9,y:336.2},0).wait(1).to({scaleX:0.74,scaleY:1,x:1072,y:335},0).wait(1).to({regX:-1.6,regY:336.5,scaleX:0.75,scaleY:1,x:1004.4,y:336.5},0).wait(1).to({regX:90.5,regY:334.5,scaleX:0.77,x:1075.3,y:334.5},0).wait(1).to({scaleX:0.8,x:1078.2},0).wait(1).to({scaleX:0.84,x:1081.3},0).wait(1).to({scaleX:0.87,x:1084.4},0).wait(1).to({scaleX:0.9,x:1087.5},0).wait(1).to({scaleX:0.93,x:1090.4},0).wait(1).to({scaleX:0.96,x:1093.1},0).wait(1).to({scaleX:0.99,x:1095.4},0).wait(1).to({regX:-1.7,regY:336.5,scaleX:1,x:1004.4,y:336.5},0).wait(5).to({regX:90.5,regY:334.5,scaleX:0.99,x:1095.8,y:334.5},0).wait(1).to({scaleX:0.97,x:1093.8},0).wait(1).to({scaleX:0.94,x:1091},0).wait(1).to({scaleX:0.9,x:1087.6},0).wait(1).to({scaleX:0.86,x:1084},0).wait(1).to({scaleX:0.82,x:1080.2},0).wait(1).to({scaleX:0.78,x:1076.7},0).wait(1).to({regX:-1.6,regY:336.5,scaleX:0.75,x:1004.4,y:336.5},0).wait(1).to({regX:90.5,regY:334.5,scaleX:0.74,scaleY:1,x:1072.1,y:335.1},0).wait(1).to({scaleX:0.73,scaleY:0.99,x:1068.6,y:336.4},0).wait(1).to({scaleX:0.7,scaleY:0.98,x:1063.6,y:338.4},0).wait(1).to({scaleX:0.68,scaleY:0.97,x:1057.5,y:340.8},0).wait(1).to({scaleX:0.64,scaleY:0.96,x:1050.6,y:343.5},0).wait(1).to({scaleX:0.61,scaleY:0.94,x:1043,y:346.5},0).wait(1).to({scaleX:0.57,scaleY:0.93,x:1034.9,y:349.7},0).wait(1).to({scaleX:0.53,scaleY:0.91,x:1026.6,y:353},0).wait(1).to({scaleX:0.49,scaleY:0.9,x:1017.9,y:356.4},0).wait(1).to({scaleX:0.45,scaleY:0.88,x:1009.2,y:359.9},0).wait(1).to({scaleX:0.4,scaleY:0.86,x:1000.3,y:363.4},0).wait(1).to({scaleX:0.36,scaleY:0.85,x:991.5,y:366.9},0).wait(1).to({scaleX:0.32,scaleY:0.83,x:982.7,y:370.3},0).wait(1).to({scaleX:0.28,scaleY:0.81,x:974.1,y:373.7},0).wait(1).to({scaleX:0.24,scaleY:0.8,x:965.8,y:377},0).wait(1).to({scaleX:0.2,scaleY:0.78,x:957.8,y:380.1},0).wait(1).to({scaleX:0.17,scaleY:0.77,x:950.2,y:383.1},0).wait(1).to({scaleX:0.14,scaleY:0.75,x:943.2,y:385.9},0).wait(1).to({scaleX:0.11,scaleY:0.74,x:936.9,y:388.4},0).wait(1).to({scaleX:0.08,scaleY:0.73,x:931.5,y:390.5},0).wait(1).to({scaleX:0.06,scaleY:0.72,x:927.1,y:392.2},0).wait(1).to({scaleX:0.05,scaleY:0.72,x:924.2,y:393.4},0).wait(1).to({regX:-1.3,regY:336.5,scaleX:0.04,scaleY:0.72,x:919.4,y:395.3},0).to({_off:true},1).wait(6));

	// ey_s_box_l
	this.instance_6 = new lib.ey_s_box_l_1();
	this.instance_6.setTransform(478.7,393.8,0.04,0.715,0,0,0,186.3,334.4);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(17).to({_off:false},0).wait(1).to({regX:94.5,regY:334.5,scaleX:0.05,scaleY:0.72,x:473.5,y:393.2},0).wait(1).to({scaleX:0.07,scaleY:0.73,x:469.5,y:391.8},0).wait(1).to({scaleX:0.09,scaleY:0.74,x:463.8,y:389.6},0).wait(1).to({scaleX:0.12,scaleY:0.75,x:457,y:387.1},0).wait(1).to({scaleX:0.16,scaleY:0.76,x:449.2,y:384.1},0).wait(1).to({scaleX:0.19,scaleY:0.78,x:440.7,y:381},0).wait(1).to({scaleX:0.23,scaleY:0.79,x:431.7,y:377.6},0).wait(1).to({scaleX:0.28,scaleY:0.81,x:422.4,y:374.1},0).wait(1).to({scaleX:0.32,scaleY:0.83,x:412.8,y:370.5},0).wait(1).to({scaleX:0.36,scaleY:0.85,x:403,y:366.9},0).wait(1).to({scaleX:0.41,scaleY:0.86,x:393.3,y:363.2},0).wait(1).to({scaleX:0.45,scaleY:0.88,x:383.6,y:359.6},0).wait(1).to({scaleX:0.49,scaleY:0.9,x:374,y:356},0).wait(1).to({scaleX:0.53,scaleY:0.91,x:364.8,y:352.6},0).wait(1).to({scaleX:0.57,scaleY:0.93,x:355.8,y:349.2},0).wait(1).to({scaleX:0.61,scaleY:0.95,x:347.4,y:346},0).wait(1).to({scaleX:0.65,scaleY:0.96,x:339.5,y:343.1},0).wait(1).to({scaleX:0.68,scaleY:0.97,x:332.3,y:340.4},0).wait(1).to({scaleX:0.71,scaleY:0.98,x:326.2,y:338.1},0).wait(1).to({scaleX:0.73,scaleY:0.99,x:321.3,y:336.3},0).wait(1).to({scaleX:0.74,scaleY:1,x:317.9,y:335},0).wait(1).to({regX:186.6,scaleX:0.75,scaleY:1,x:385.6,y:334.5},0).wait(1).to({regX:94.5,scaleX:0.77,x:314.5},0).wait(1).to({scaleX:0.8,x:311.5},0).wait(1).to({scaleX:0.84,x:308.3},0).wait(1).to({scaleX:0.87,x:305.1},0).wait(1).to({scaleX:0.9,x:301.8},0).wait(1).to({scaleX:0.93,x:298.8},0).wait(1).to({scaleX:0.96,x:296},0).wait(1).to({scaleX:0.99,x:293.7},0).wait(1).to({regX:186.5,scaleX:1,x:384.5},0).wait(5).to({regX:94.5,scaleX:0.99,x:293.3},0).wait(1).to({scaleX:0.97,x:295.4},0).wait(1).to({scaleX:0.94,x:298.3},0).wait(1).to({scaleX:0.9,x:301.8},0).wait(1).to({scaleX:0.86,x:305.6},0).wait(1).to({scaleX:0.82,x:309.5},0).wait(1).to({scaleX:0.78,x:313.2},0).wait(1).to({regX:186.6,scaleX:0.75,x:385.6},0).wait(1).to({regX:94.5,scaleX:0.74,scaleY:1,x:317.9,y:335.1},0).wait(1).to({scaleX:0.73,scaleY:0.99,x:321.6,y:336.4},0).wait(1).to({scaleX:0.7,scaleY:0.98,x:326.9,y:338.4},0).wait(1).to({scaleX:0.68,scaleY:0.97,x:333.3,y:340.8},0).wait(1).to({scaleX:0.64,scaleY:0.96,x:340.6,y:343.5},0).wait(1).to({scaleX:0.61,scaleY:0.94,x:348.6,y:346.5},0).wait(1).to({scaleX:0.57,scaleY:0.93,x:357.1,y:349.7},0).wait(1).to({scaleX:0.53,scaleY:0.91,x:365.9,y:353},0).wait(1).to({scaleX:0.49,scaleY:0.9,x:375,y:356.4},0).wait(1).to({scaleX:0.45,scaleY:0.88,x:384.3,y:359.9},0).wait(1).to({scaleX:0.4,scaleY:0.86,x:393.6,y:363.4},0).wait(1).to({scaleX:0.36,scaleY:0.85,x:403,y:366.9},0).wait(1).to({scaleX:0.32,scaleY:0.83,x:412.2,y:370.3},0).wait(1).to({scaleX:0.28,scaleY:0.81,x:421.2,y:373.7},0).wait(1).to({scaleX:0.24,scaleY:0.8,x:430,y:377},0).wait(1).to({scaleX:0.2,scaleY:0.78,x:438.5,y:380.1},0).wait(1).to({scaleX:0.17,scaleY:0.77,x:446.4,y:383.1},0).wait(1).to({scaleX:0.14,scaleY:0.75,x:453.8,y:385.8},0).wait(1).to({scaleX:0.11,scaleY:0.74,x:460.5,y:388.3},0).wait(1).to({scaleX:0.08,scaleY:0.73,x:466.2,y:390.5},0).wait(1).to({scaleX:0.06,scaleY:0.72,x:470.8,y:392.2},0).wait(1).to({scaleX:0.05,scaleY:0.72,x:473.8,y:393.3},0).wait(1).to({regX:186.3,regY:334.4,scaleX:0.04,scaleY:0.72,x:478.7,y:393.8},0).to({_off:true},1).wait(6));

	// ey_s_stage_fix
	this.instance_7 = new lib.ey_s_stage_fix_1();
	this.instance_7.setTransform(582.5,732,1,1,0,0,0,76.5,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},84).wait(6));

	// ey_s_box_mid
	this.mc_view_finder = new lib.ey_s_box_mid_1();
	this.mc_view_finder.setTransform(708.6,631,0.715,0.715,0,0,0,515.5,666);
	this.mc_view_finder._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_view_finder).wait(17).to({_off:false},0).wait(1).to({regX:430.5,regY:373.5,scaleX:0.72,scaleY:0.72,x:647.6,y:421.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:647.1,y:420.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:646.3,y:418.3},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:645.4,y:416.2},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:644.3,y:413.9},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:643.2,y:411.3},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:642,y:408.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:640.7,y:405.7},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:639.4,y:402.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:638.1,y:399.8},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:636.8,y:396.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:635.5,y:393.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:634.2,y:391},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:633,y:388.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:631.8,y:385.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:630.6,y:382.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:629.6,y:380.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:628.6,y:378.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:627.8,y:376.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:627.1,y:375},0).wait(1).to({scaleX:1,scaleY:1,x:626.7,y:373.9},0).wait(1).to({regX:515.5,regY:666.1,scaleX:1,scaleY:1,x:711.5,y:666.1},0).wait(22).to({regX:430.5,regY:373.5,scaleX:1,scaleY:1,x:626.7,y:374},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:627.2,y:375},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:627.9,y:376.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:628.8,y:378.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:629.7,y:380.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:630.8,y:383.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:632,y:385.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:633.1,y:388.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:634.4,y:391.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:635.6,y:394.1},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:636.9,y:396.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:638.1,y:399.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:639.4,y:402.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:640.6,y:405.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:641.7,y:408},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:642.9,y:410.6},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:644,y:413},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:645,y:415.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:645.8,y:417.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:646.6,y:419},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:647.2,y:420.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:647.6,y:421.3},0).wait(1).to({regX:515.5,regY:666,scaleX:0.72,scaleY:0.72,x:708.6,y:631},0).to({_off:true},1).wait(6));

	// ey_s_r_s
	this.instance_8 = new lib.ey_s_r_s_1();
	this.instance_8.setTransform(922.9,620.3,0.267,0.715,0,0,0,0,113);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(17).to({_off:false},0).wait(1).to({regX:109,regY:110,scaleX:0.27,scaleY:0.72,x:953.3,y:618.4,alpha:0.01},0).wait(1).to({scaleX:0.28,scaleY:0.73,x:956.9,y:619.2,alpha:0.035},0).wait(1).to({scaleX:0.3,scaleY:0.74,x:961.9,y:620.2,alpha:0.071},0).wait(1).to({scaleX:0.33,scaleY:0.75,x:968,y:621.5,alpha:0.114},0).wait(1).to({scaleX:0.35,scaleY:0.76,x:975,y:623,alpha:0.163},0).wait(1).to({scaleX:0.38,scaleY:0.78,x:982.6,y:624.6,alpha:0.217},0).wait(1).to({scaleX:0.41,scaleY:0.79,x:990.6,y:626.3,alpha:0.274},0).wait(1).to({scaleX:0.44,scaleY:0.81,x:998.9,y:628,alpha:0.333},0).wait(1).to({scaleX:0.48,scaleY:0.83,x:1007.5,y:629.8,alpha:0.393},0).wait(1).to({scaleX:0.51,scaleY:0.85,x:1016.1,y:631.7,alpha:0.454},0).wait(1).to({scaleX:0.54,scaleY:0.86,x:1024.8,y:633.5,alpha:0.516},0).wait(1).to({scaleX:0.57,scaleY:0.88,x:1033.5,y:635.3,alpha:0.577},0).wait(1).to({scaleX:0.61,scaleY:0.9,x:1042,y:637.2,alpha:0.638},0).wait(1).to({scaleX:0.64,scaleY:0.91,x:1050.2,y:638.9,alpha:0.696},0).wait(1).to({scaleX:0.67,scaleY:0.93,x:1058.2,y:640.6,alpha:0.753},0).wait(1).to({scaleX:0.7,scaleY:0.95,x:1065.8,y:642.2,alpha:0.806},0).wait(1).to({scaleX:0.72,scaleY:0.96,x:1072.8,y:643.7,alpha:0.856},0).wait(1).to({scaleX:0.75,scaleY:0.97,x:1079.1,y:645,alpha:0.901},0).wait(1).to({scaleX:0.77,scaleY:0.98,x:1084.6,y:646.2,alpha:0.94},0).wait(1).to({scaleX:0.78,scaleY:0.99,x:1089,y:647.1,alpha:0.971},0).wait(1).to({scaleX:0.8,scaleY:1,x:1092,y:647.8,alpha:0.992},0).wait(1).to({regX:-0.1,regY:113,scaleX:0.8,scaleY:1,x:1006,y:651,alpha:1},0).wait(1).to({regX:109,regY:110,scaleX:0.82,x:1095,y:648},0).wait(1).to({scaleX:0.84,x:1097.7},0).wait(1).to({scaleX:0.87,x:1100.7},0).wait(1).to({scaleX:0.9,x:1103.6},0).wait(1).to({scaleX:0.92,x:1106.5},0).wait(1).to({scaleX:0.95,x:1109.3},0).wait(1).to({scaleX:0.97,x:1111.9},0).wait(1).to({scaleX:0.99,x:1114},0).wait(1).to({regX:-0.1,regY:113,scaleX:1,x:1006,y:651},0).wait(5).to({regX:109,regY:110,scaleX:0.99,x:1114.3,y:648},0).wait(1).to({scaleX:0.98,x:1112.4},0).wait(1).to({scaleX:0.95,x:1109.7},0).wait(1).to({scaleX:0.92,x:1106.5},0).wait(1).to({scaleX:0.89,x:1103.1},0).wait(1).to({scaleX:0.86,x:1099.6},0).wait(1).to({scaleX:0.83,x:1096.2},0).wait(1).to({regX:-0.1,regY:113,scaleX:0.8,x:1005.9,y:651},0).wait(1).to({regX:109,regY:110,scaleX:0.8,scaleY:1,x:1091.9,y:647.7,alpha:0.991},0).wait(1).to({scaleX:0.78,scaleY:0.99,x:1088.6,y:647,alpha:0.968},0).wait(1).to({scaleX:0.77,scaleY:0.98,x:1084,y:646,alpha:0.935},0).wait(1).to({scaleX:0.74,scaleY:0.97,x:1078.2,y:644.8,alpha:0.894},0).wait(1).to({scaleX:0.72,scaleY:0.96,x:1071.7,y:643.5,alpha:0.848},0).wait(1).to({scaleX:0.69,scaleY:0.94,x:1064.6,y:641.9,alpha:0.797},0).wait(1).to({scaleX:0.66,scaleY:0.93,x:1057,y:640.4,alpha:0.744},0).wait(1).to({scaleX:0.63,scaleY:0.91,x:1049.1,y:638.7,alpha:0.688},0).wait(1).to({scaleX:0.6,scaleY:0.9,x:1041,y:637,alpha:0.631},0).wait(1).to({scaleX:0.57,scaleY:0.88,x:1032.8,y:635.2,alpha:0.572},0).wait(1).to({scaleX:0.54,scaleY:0.86,x:1024.4,y:633.4,alpha:0.513},0).wait(1).to({scaleX:0.51,scaleY:0.85,x:1016.2,y:631.7,alpha:0.455},0).wait(1).to({scaleX:0.48,scaleY:0.83,x:1007.9,y:629.9,alpha:0.396},0).wait(1).to({scaleX:0.45,scaleY:0.81,x:999.9,y:628.2,alpha:0.339},0).wait(1).to({scaleX:0.42,scaleY:0.8,x:992.1,y:626.6,alpha:0.284},0).wait(1).to({scaleX:0.39,scaleY:0.78,x:984.5,y:625,alpha:0.231},0).wait(1).to({scaleX:0.36,scaleY:0.77,x:977.4,y:623.5,alpha:0.18},0).wait(1).to({scaleX:0.34,scaleY:0.75,x:970.8,y:622.1,alpha:0.134},0).wait(1).to({scaleX:0.32,scaleY:0.74,x:964.9,y:620.9,alpha:0.092},0).wait(1).to({scaleX:0.3,scaleY:0.73,x:959.8,y:619.8,alpha:0.056},0).wait(1).to({scaleX:0.28,scaleY:0.72,x:955.8,y:618.9,alpha:0.027},0).wait(1).to({scaleX:0.27,scaleY:0.72,x:953,y:618.3,alpha:0.007},0).wait(1).to({regX:0,regY:113,scaleX:0.27,scaleY:0.72,x:922.9,y:620.3,alpha:0},0).to({_off:true},1).wait(6));

	// ey_s_l_s
	this.instance_9 = new lib.ey_s_l_s_1();
	this.instance_9.setTransform(473.9,604.6,0.284,0.715,0,0,0,210,135.1);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(17).to({_off:false},0).wait(1).to({regX:106,regY:132,scaleX:0.29,scaleY:0.72,x:443,y:602.6,alpha:0.01},0).wait(1).to({scaleX:0.3,scaleY:0.73,x:439.4,y:603.2,alpha:0.035},0).wait(1).to({scaleX:0.32,scaleY:0.74,x:434.3,y:604,alpha:0.071},0).wait(1).to({scaleX:0.34,scaleY:0.75,x:428.2,y:605,alpha:0.114},0).wait(1).to({scaleX:0.37,scaleY:0.76,x:421.3,y:606.2,alpha:0.163},0).wait(1).to({scaleX:0.4,scaleY:0.78,x:413.7,y:607.5,alpha:0.217},0).wait(1).to({scaleX:0.43,scaleY:0.79,x:405.6,y:608.8,alpha:0.274},0).wait(1).to({scaleX:0.46,scaleY:0.81,x:397.3,y:610.2,alpha:0.333},0).wait(1).to({scaleX:0.49,scaleY:0.83,x:388.7,y:611.6,alpha:0.393},0).wait(1).to({scaleX:0.52,scaleY:0.85,x:380,y:613,alpha:0.454},0).wait(1).to({scaleX:0.55,scaleY:0.86,x:371.3,y:614.5,alpha:0.516},0).wait(1).to({scaleX:0.58,scaleY:0.88,x:362.6,y:615.9,alpha:0.577},0).wait(1).to({scaleX:0.61,scaleY:0.9,x:354.1,y:617.4,alpha:0.638},0).wait(1).to({scaleX:0.64,scaleY:0.91,x:345.8,y:618.8,alpha:0.696},0).wait(1).to({scaleX:0.67,scaleY:0.93,x:337.8,y:620.1,alpha:0.753},0).wait(1).to({scaleX:0.7,scaleY:0.95,x:330.3,y:621.3,alpha:0.806},0).wait(1).to({scaleX:0.73,scaleY:0.96,x:323.2,y:622.5,alpha:0.856},0).wait(1).to({scaleX:0.75,scaleY:0.97,x:316.9,y:623.6,alpha:0.901},0).wait(1).to({scaleX:0.77,scaleY:0.98,x:311.4,y:624.5,alpha:0.94},0).wait(1).to({scaleX:0.79,scaleY:0.99,x:307,y:625.2,alpha:0.971},0).wait(1).to({scaleX:0.8,scaleY:1,x:304,y:625.7,alpha:0.992},0).wait(1).to({regX:210,regY:135,scaleX:0.8,scaleY:1,x:386,y:629,alpha:1},0).wait(1).to({regX:106,regY:132,scaleX:0.82,x:301,y:626},0).wait(1).to({scaleX:0.84,x:298.3},0).wait(1).to({scaleX:0.87,x:295.4},0).wait(1).to({scaleX:0.9,x:292.4},0).wait(1).to({scaleX:0.92,x:289.5},0).wait(1).to({scaleX:0.95,x:286.7},0).wait(1).to({scaleX:0.97,x:284.2},0).wait(1).to({scaleX:0.99,x:282.1},0).wait(1).to({regX:210,regY:135,scaleX:1,x:385,y:629},0).wait(5).to({regX:106,regY:132,scaleX:0.99,x:281.7,y:626},0).wait(1).to({scaleX:0.98,x:283.6},0).wait(1).to({scaleX:0.95,x:286.3},0).wait(1).to({scaleX:0.92,x:289.5},0).wait(1).to({scaleX:0.89,x:292.9},0).wait(1).to({scaleX:0.86,x:296.5},0).wait(1).to({scaleX:0.83,x:299.8},0).wait(1).to({regX:210.1,regY:135,scaleX:0.8,x:386,y:629},0).wait(1).to({regX:106,regY:132,scaleX:0.8,scaleY:1,x:304,y:625.8,alpha:0.991},0).wait(1).to({scaleX:0.78,scaleY:0.99,x:307.3,y:625.3,alpha:0.968},0).wait(1).to({scaleX:0.77,scaleY:0.98,x:312,y:624.5,alpha:0.935},0).wait(1).to({scaleX:0.75,scaleY:0.97,x:317.8,y:623.5,alpha:0.894},0).wait(1).to({scaleX:0.72,scaleY:0.96,x:324.3,y:622.4,alpha:0.848},0).wait(1).to({scaleX:0.7,scaleY:0.94,x:331.4,y:621.2,alpha:0.797},0).wait(1).to({scaleX:0.67,scaleY:0.93,x:339,y:620,alpha:0.744},0).wait(1).to({scaleX:0.64,scaleY:0.91,x:346.9,y:618.7,alpha:0.688},0).wait(1).to({scaleX:0.61,scaleY:0.9,x:355,y:617.3,alpha:0.631},0).wait(1).to({scaleX:0.58,scaleY:0.88,x:363.3,y:615.9,alpha:0.572},0).wait(1).to({scaleX:0.55,scaleY:0.86,x:371.6,y:614.5,alpha:0.513},0).wait(1).to({scaleX:0.52,scaleY:0.85,x:380,y:613.1,alpha:0.455},0).wait(1).to({scaleX:0.49,scaleY:0.83,x:388.2,y:611.7,alpha:0.396},0).wait(1).to({scaleX:0.46,scaleY:0.81,x:396.3,y:610.4,alpha:0.339},0).wait(1).to({scaleX:0.43,scaleY:0.8,x:404.1,y:609.1,alpha:0.284},0).wait(1).to({scaleX:0.4,scaleY:0.78,x:411.7,y:607.8,alpha:0.231},0).wait(1).to({scaleX:0.38,scaleY:0.77,x:418.8,y:606.7,alpha:0.18},0).wait(1).to({scaleX:0.35,scaleY:0.75,x:425.4,y:605.6,alpha:0.134},0).wait(1).to({scaleX:0.33,scaleY:0.74,x:431.3,y:604.6,alpha:0.092},0).wait(1).to({scaleX:0.31,scaleY:0.73,x:436.4,y:603.7,alpha:0.056},0).wait(1).to({scaleX:0.3,scaleY:0.72,x:440.5,y:603,alpha:0.027},0).wait(1).to({scaleX:0.29,scaleY:0.72,x:443.3,y:602.6,alpha:0.007},0).wait(1).to({regX:210,regY:135.1,scaleX:0.28,scaleY:0.72,x:473.9,y:604.6,alpha:0},0).to({_off:true},1).wait(6));

	// ey_s_bm_s
	this.instance_10 = new lib.ey_s_bm_s_1();
	this.instance_10.setTransform(697.9,615.3,0.715,0.715,0,0,0,309.4,114);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(17).to({_off:false},0).wait(1).to({regX:309.5,scaleX:0.72,scaleY:0.72,y:615.6,alpha:0.01},0).wait(1).to({scaleX:0.73,scaleY:0.73,y:616.3,alpha:0.035},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:697.8,y:617.3,alpha:0.071},0).wait(1).to({scaleX:0.75,scaleY:0.75,y:618.5,alpha:0.114},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:697.7,y:619.9,alpha:0.163},0).wait(1).to({scaleX:0.78,scaleY:0.78,y:621.5,alpha:0.217},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:697.5,y:623.1,alpha:0.274},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:697.4,y:624.8,alpha:0.333},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:626.5,alpha:0.393},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:697.3,y:628.3,alpha:0.454},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:697.2,y:630.1,alpha:0.516},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:697.1,y:631.9,alpha:0.577},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:633.6,alpha:0.638},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:697,y:635.3,alpha:0.696},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:696.9,y:636.9,alpha:0.753},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:696.8,y:638.4,alpha:0.806},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:696.7,y:639.9,alpha:0.856},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:641.2,alpha:0.901},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:696.6,y:642.3,alpha:0.94},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:643.2,alpha:0.971},0).wait(1).to({scaleX:1,scaleY:1,y:643.8,alpha:0.992},0).wait(1).to({scaleX:1,scaleY:1,x:696.5,y:644,alpha:1},0).wait(22).to({scaleX:1,scaleY:1,y:643.7,alpha:0.991},0).wait(1).to({scaleX:0.99,scaleY:0.99,y:643.1,alpha:0.968},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:696.6,y:642.1,alpha:0.935},0).wait(1).to({scaleX:0.97,scaleY:0.97,y:640.9,alpha:0.894},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:696.7,y:639.6,alpha:0.848},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:696.8,y:638.2,alpha:0.797},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:696.9,y:636.6,alpha:0.744},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:697,y:635.1,alpha:0.688},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:633.4,alpha:0.631},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:697.1,y:631.7,alpha:0.572},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:697.2,y:630,alpha:0.513},0).wait(1).to({scaleX:0.85,scaleY:0.85,y:628.3,alpha:0.455},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:697.4,y:626.6,alpha:0.396},0).wait(1).to({scaleX:0.81,scaleY:0.81,y:625,alpha:0.339},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:697.5,y:623.4,alpha:0.284},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:697.6,y:621.9,alpha:0.231},0).wait(1).to({scaleX:0.77,scaleY:0.77,y:620.4,alpha:0.18},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:697.7,y:619.1,alpha:0.134},0).wait(1).to({scaleX:0.74,scaleY:0.74,y:617.9,alpha:0.092},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:697.8,y:616.8,alpha:0.056},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:697.9,y:616.1,alpha:0.027},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:615.5,alpha:0.007},0).wait(1).to({regX:309.4,scaleX:0.72,scaleY:0.72,y:615.3,alpha:0},0).to({_off:true},1).wait(6));

	// mc_back_to_hall_hitarea
	this.mc_back_to_hall_hitarea = new lib.back_to_hall_area_button();
	this.mc_back_to_hall_hitarea.setTransform(700,378,1,1,0,0,0,700,378);

	this.timeline.addTween(cjs.Tween.get(this.mc_back_to_hall_hitarea).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-2.1,1401.4,761.1);


// stage content:
(lib.earlyyears = function() {
	this.initialize();

	// ey_s_all
	this.instance = new lib.AColonel_early_years();
	this.instance.setTransform(82,191.6);

	// ABucket
	this.instance_1 = new lib.ABucket();
	this.instance_1.setTransform(161,181.5,1,1,0,0,0,161,181.5);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(699.6,376.9,1401.4,761.1);

})(lib.earlyyears = lib.earlyyears||{}, images.earlyyears = images.earlyyears||{}, createjs = createjs||{});
var lib, images, createjs;
define(["jquery","libs/mocha"],function(e,t){return function(){t.ui("bdd"),describe("Base Tests",function(){describe("Framework Tests",function(){it("load requirejs",function(e){this.timeout(5e3),this.slow(1e3);var t=setInterval(function(){try{requirejs(["model/app_model"],function(){clearInterval(t),e()},function(){})}catch(n){}},100)})})})}});
System.register("chunks:///_virtual/main",["./Main.ts","./Test1.ts","./Test2.ts"],(function(){return{setters:[null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Main.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,c,r;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy,o=t._decorator,c=t.director,r=t.Component}],execute:function(){var i;n._RF.push({},"0dbffaagVtE/ps2opmNa5pt","Main",void 0);var s=o.ccclass;o.property,t("Main",s("Main")(i=function(t){function n(){return t.apply(this,arguments)||this}e(n,t);var o=n.prototype;return o.test1Click=function(){c.loadScene("Test1")},o.test2Click=function(){c.loadScene("Test2")},n}(r))||i);n._RF.pop()}}}));

System.register("chunks:///_virtual/Test1.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,i,s,o;return{setters:[function(t){n=t.inheritsLoose},function(t){e=t.cclegacy,i=t._decorator,s=t.director,o=t.Component}],execute:function(){var r;e._RF.push({},"580014knuhH+LdOwks/BC7d","Test1",void 0);var a=i.ccclass;i.property,t("Test1",a("Test1")(r=function(t){function e(){for(var n,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return(n=t.call.apply(t,[this].concat(i))||this).radius=200,n.angle=0,n.speed=.02,n.rotationOn=!1,n}n(e,t);var i=e.prototype;return i.click=function(){this.rotationOn=!0},i.update=function(t){if(this.rotationOn){this.angle+=this.speed,this.angle>=360&&(this.angle=0);var n=this.radius*Math.cos(this.angle),e=this.radius*Math.sin(this.angle);this.node.setPosition(n,e,0)}},i.backButton=function(){s.loadScene("Main")},e}(o))||r);e._RF.pop()}}}));

System.register("chunks:///_virtual/Test2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,r,o,i,a,c,l,u,s,f,h,p,d,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.Node,u=t.Color,s=t.instantiate,f=t.Label,h=t.Sprite,p=t.macro,d=t.director,g=t.Component}],execute:function(){var y,m,v,b,C,M,R;i._RF.push({},"73feeJwfXxP5rR3KDkOcgU+","Test2",void 0);var T=a.ccclass,w=a.property;t("Test2",(y=T("Test2"),m=w(c),v=w(l),y((M=e((C=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,r(e,"cell",M,o(e)),r(e,"layout",R,o(e)),e.count=0,e}n(e,t);var i=e.prototype;return i.start=function(){for(var t=0;t<21;t++)this.creatingCells()},i.getRandomColor=function(){var t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return new u(t,e,n)},i.creatingCells=function(){this.count+=1;var t=s(this.cell);t.parent=this.node,t.children[0].getComponent(f).string=this.count.toString(),t.getComponent(h).color=this.getRandomColor()},i.buttonOn=function(){var t=this;this.schedule((function(){t.node.children[0].active=!1,t.scheduleOnce((function(){t.node.children[0].destroy(),t.creatingCells()}),.8)}),.5,p.REPEAT_FOREVER,.5)},i.backButton=function(){d.loadScene("Main")},e}(g)).prototype,"cell",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=e(C.prototype,"layout",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=C))||b));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
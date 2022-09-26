System.register("chunks:///_virtual/ClickFishCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./MyFish.ts"],(function(t){"use strict";var i,e,n,o,r,c,s,a,h,l,u,y,C,p;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,n=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,c=t._decorator,s=t.Camera,a=t.CCFloat,h=t.geometry,l=t.input,u=t.Input,y=t.PhysicsSystem,C=t.Component},function(t){p=t.MyFish}],execute:function(){var f,d,_,k,v,m,T;r._RF.push({},"742afIBq/ZNo7glNtjbTUz3","ClickFishCtr",void 0);var b=c.ccclass,g=c.property;t("ClickFishCtr",(f=b("ClickFishCtr"),d=g({type:s,visible:!0,displayName:"相机"}),_=g({type:a,visible:!0,displayName:"点击冷却时间"}),f((m=i((v=function(t){function i(){for(var i,e=arguments.length,r=new Array(e),c=0;c<e;c++)r[c]=arguments[c];return(i=t.call.apply(t,[this].concat(r))||this)._canCheck=void 0,n(i,"_cam",m,o(i)),i._ray=void 0,i._isInCd=void 0,n(i,"_cdDuration",T,o(i)),i}e(i,t);var r=i.prototype;return r.start=function(){this.init()},r.onDestroy=function(){this.myDestroy()},r.update=function(t){},r.init=function(){this._ray=new h.Ray,l.on(u.EventType.TOUCH_START,this.onTouchStart,this),this.enableClickCheck(),this.exitCd()},r.myDestroy=function(){l.off(u.EventType.TOUCH_START,this.onTouchStart,this)},r.enableClickCheck=function(){this._canCheck=!0},r.disableClickCheck=function(){this._canCheck=!1},r.onTouchStart=function(t){if(this._canCheck&&!this._isInCd&&(this._cam.screenPointToRay(t.getLocation().x,t.getLocation().y,this._ray),y.instance.raycast(this._ray)))for(var i=y.instance.raycastResults,e=0;e<i.length;e++){var n=i[e].collider.node.getComponent(p);if(n){n.click(),this.enterCd();break}}},r.enterCd=function(){var t=this;this._isInCd=!0,setTimeout((function(){t.exitCd()}),1e3*this._cdDuration)},r.exitCd=function(){this._isInCd=!1},i}(C)).prototype,"_cam",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=i(v.prototype,"_cdDuration",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.8}}),k=v))||k));r._RF.pop()}}}));

System.register("chunks:///_virtual/FanTest.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var t,n,i,o,s,r,c,a,l,u,p;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy,i=e._decorator,o=e.input,s=e.Input,r=e.director,c=e.KeyCode,a=e.randomRangeInt,l=e.Vec2,u=e.Component},function(e){p=e.Level}],execute:function(){var y;n._RF.push({},"2702c9Y5pdM3LOEca2AcbPK","FanTest",void 0);var h=i.ccclass;i.property,e("FanTest",h("FanTest")(y=function(e){function n(){for(var t,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=e.call.apply(e,[this].concat(i))||this)._level=void 0,t}t(n,e);var i=n.prototype;return i.start=function(){this.init()},i.onDestroy=function(){this.myDestroy()},i.update=function(e){},i.init=function(){o.on(s.EventType.KEY_DOWN,this.onKeyDown,this),this._level=r.getScene().getComponentInChildren(p)},i.myDestroy=function(){o.off(s.EventType.KEY_DOWN,this.onKeyDown,this),this._level&&(this._level=null)},i.onKeyDown=function(e){e.keyCode==c.SPACE&&this.setMapSizeRandomly()},i.setMapSizeRandomly=function(){var e=a(p.MapMinSizeX,p.MapMaxSizeX+1),t=a(p.MapMinSizeY,p.MapMaxSizeY+1);this._level.setSize(new l(e,t))},n}(u))||y);n._RF.pop()}}}));

System.register("chunks:///_virtual/Fish.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,n,i,r,a,o,u,s,c,l,h,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,r=e.assertThisInitialized,a=e.createClass},function(e){o=e.cclegacy,u=e._decorator,s=e.animation,c=e.SkinnedMeshRenderer,l=e.Material,h=e.CCFloat,p=e.Component}],execute:function(){var f,d,_,y,b,v,m,g,x,I,w,T,k;o._RF.push({},"40006aUPbVJsbybdoemAh+E","Fish",void 0);var z=u.ccclass,A=u.property;e("Fish",(f=z("Fish"),d=A({type:s.AnimationController,visible:!0}),_=A({type:c,visible:!0}),y=A({type:[l],visible:!0}),b=A({type:h,visible:!0}),v=A({type:s.AnimationController,visible:!0}),f((x=t((g=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,i(t,"_ac",x,r(t)),i(t,"_skinRenderer",I,r(t)),i(t,"_mats",w,r(t)),t._curIndex=0,i(t,"_interval",T,r(t)),t._canTurnOver=void 0,i(t,"_shadowAc",k,r(t)),t}n(t,e);var o=t.prototype;return o.onLoad=function(){this.init()},o.start=function(){},o.update=function(e){},o.onDestroy=function(){this.myDestroy()},o.turnOver=function(){this.curIndex++,this._ac.setValue("TurnOver",this.curIndex),this._shadowAc.setValue("TurnOver",this.curIndex),this.changeMat(300)},o.init=function(){this._curIndex=0,this.changeMat(),this._canTurnOver=!0,this._canTurnOver=!1},o.myDestroy=function(){},o.onTouchStart=function(e){},o.changeMat=function(e){var t=this;setTimeout((function(){return t._skinRenderer.setMaterial(t._mats[t._curIndex],0)}),300)},a(t,[{key:"maxIndex",get:function(){return this._mats.length-1}},{key:"curIndex",get:function(){return this._curIndex},set:function(e){(e<0||e>this.maxIndex)&&(e=0),this._curIndex=e}}]),t}(p)).prototype,"_ac",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=t(g.prototype,"_skinRenderer",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=t(g.prototype,"_mats",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(g.prototype,"_interval",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.5}}),k=t(g.prototype,"_shadowAc",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=g))||m));o._RF.pop()}}}));

System.register("chunks:///_virtual/FishGroup.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts","./MyFish.ts"],(function(i){"use strict";var e,t,s,r,n,o,h,a,u,l,c,f,d;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,s=i.initializerDefineProperty,r=i.assertThisInitialized,n=i.createForOfIteratorHelperLoose},function(i){o=i.cclegacy,h=i._decorator,a=i.Prefab,u=i.Vec2,l=i.instantiate,c=i.Component},function(i){f=i.Level},function(i){d=i.MyFish}],execute:function(){var y,v,p,F,m;o._RF.push({},"0e635cFw5JOq55YwCuPCtqk","FishGroup",void 0);var _=h.ccclass,b=h.property,w=(i("FishGroup",(y=_("FishGroup"),v=b({type:a,visible:!0}),y((m=e((F=function(i){function e(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=i.call.apply(i,[this].concat(n))||this)._fishes=void 0,s(e,"_myFishPrefab",m,r(e)),e}t(e,i);var o=e.prototype;return o.init=function(){this._fishes=new Array},o.myDestroy=function(){this.destroyAllFishes()},o.createFishes=function(i){this.destroyAllFishes(),this._fishes=new Array;for(var e=0;e<i.x;e++)for(var t=0;t<i.y;t++){var s=new u(e,t),r=(this.idToKey(s),l(this._myFishPrefab).getComponent(d));r.init(s,this),this.node.addChild(r.node),this._fishes.push(new w(s,r))}},o.destroyAllFishes=function(){this._fishes.splice(0,this._fishes.length),this._fishes=null,this.node.removeAllChildren()},o.idToKey=function(i){return 100*i.x+i.y},o.keyToId=function(i){return new u(Number((i/100).toFixed(0)),i%100)},o.turnover=function(i,e){var t=this;if(void 0===e&&(e=.001),this.isValidId(i)){var s=this.idToFish(i);s&&(s.turnOver(),setTimeout((function(){for(var e,s=t.getNeighborIds(i),r=n(s);!(e=r()).done;){var o=e.value,h=t.idToFish(o);h&&h.turnOver()}}),1e3*e))}},o.isValidId=function(i){return i.x>=0&&i.y>=0&&i.x<f.instance.mapSize.x&&i.y<f.instance.mapSize.y},o.getNeighborIds=function(i){for(var e=[new u(i.x-1,i.y),new u(i.x+1,i.y),new u(i.x,i.y-1),new u(i.x,i.y+1)],t=e.length-1;t>=0;t--){var s=e[t];this.isValidId(s)||e.splice(t,1)}return e},o.idToFish=function(i){for(var e,t=null,s=n(this._fishes);!(e=s()).done;){var r=e.value;if(r.id.equals(i)){t=r.myFish;break}}return t},e}(c)).prototype,"_myFishPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),p=F))||p)),function(i,e){this.id=void 0,this.myFish=void 0,this.id=i,this.myFish=e});o._RF.pop()}}}));

System.register("chunks:///_virtual/Level.ts",["./rollupPluginModLoBabelHelpers.js","cc","./FishGroup.ts"],(function(e){"use strict";var i,t,n,a,r,s,p,o,u,h,z,c,m,S,l;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,a=e.assertThisInitialized,r=e.createClass},function(e){s=e.cclegacy,p=e._decorator,o=e.CCInteger,u=e.CCFloat,h=e.Vec2,z=e.randomRangeInt,c=e.EventTarget,m=e.Vec3,S=e.Component},function(e){l=e.FishGroup}],execute:function(){var _,f,v,y,M,g,X,Y,d,b;s._RF.push({},"081f4vBtXVEgpn8VG2jEJsI","Level",void 0);var w=p.ccclass,E=p.property;e("Level",(_=w("Level"),f=E({type:o,visible:!0,displayName:"地图 宽"}),v=E({type:o,visible:!0,displayName:"地图 高"}),y=E({type:u,visible:!0,displayName:"地图单元格边长"}),_(((b=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return i=e.call.apply(e,[this].concat(r))||this,n(i,"_mapSizeX",X,a(i)),n(i,"_mapSizeY",Y,a(i)),n(i,"_mapElementSize",d,a(i)),i._fishGroup=void 0,i._eventTarget=void 0,i}t(i,e);var s=i.prototype;return s.start=function(){this.init()},s.onDestroy=function(){this.myDestroy()},s.createLv=function(){this._fishGroup.createFishes(new h(this._mapSizeX,this._mapSizeY));for(var e=z(this._mapSizeX+this._mapSizeY,this._mapSizeX*this._mapSizeY),i=0;i<e;i++){var t=new h(z(0,this._mapSizeX),z(0,this._mapSizeY));this._fishGroup.turnover(t)}},s.init=function(){var e=this;i._instance=this,this._fishGroup=this.getComponent(l),this._fishGroup.init(),this._eventTarget=new c,setTimeout((function(){e.setSize(new h(e.mapSizeX,e.mapSizeY))}),1)},s.myDestroy=function(){this._fishGroup.myDestroy(),this._eventTarget=null},s.getElementPosById=function(e){return this.getElementPos(e.x,e.y)},s.getElementPos=function(e,i){return new m(e*this._mapElementSize,i*this._mapElementSize,0)},s.setSizeX=function(e){this.setSize(new h(e,this.mapSizeY))},s.setSizeY=function(e){this.setSize(new h(this.mapSizeX,e))},s.setSize=function(e){var t=Math.round(e.x);t<i.MapMinSizeX?t=i.MapMinSizeX:t>i.MapMaxSizeX&&(t=i.MapMaxSizeX);var n=Math.round(e.y);n<i.MapMinSizeY?n=i.MapMinSizeY:n>i.MapMaxSizeY&&(n=i.MapMaxSizeY),this._mapSizeX=t,this._mapSizeY=n,this.createLv(),this._eventTarget.emit(i.LevelMapSizeChangeEvent,new h(this.mapSizeX,this.mapSizeY))},r(i,[{key:"mapSizeX",get:function(){return this._mapSizeX}},{key:"mapSizeY",get:function(){return this._mapSizeY}},{key:"mapSize",get:function(){return new h(this._mapSizeX,this._mapSizeY)}},{key:"eventTarget",get:function(){return this._eventTarget}}],[{key:"instance",get:function(){return i._instance}}]),i}(S))._instance=void 0,b.MapMinSizeX=3,b.MapMaxSizeX=5,b.MapMinSizeY=3,b.MapMaxSizeY=6,b.LevelMapSizeChangeEvent="LevelMapSizeChangeEvent",X=i((g=b).prototype,"_mapSizeX",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),Y=i(g.prototype,"_mapSizeY",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),d=i(g.prototype,"_mapElementSize",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),M=g))||M));s._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./FanTest.ts","./ClickFishCtr.ts","./Fish.ts","./FishGroup.ts","./Level.ts","./MapSizeListenerTransCtr.ts","./MyFish.ts","./SetMapSizeCtr.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/MapSizeListenerTransCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var t,i,n,r,a,o,s,l,u,c,p,f,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.createClass,n=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized,o=e.createForOfIteratorHelperLoose},function(e){s=e.cclegacy,l=e._decorator,u=e.Vec2,c=e.Vec3,p=e.director,f=e.Component},function(e){h=e.Level}],execute:function(){var v,y,d,_,b,m,g,z,D,T,L,C,S,w,M,N,k,j;s._RF.push({},"d596eTq+v5DJ5c4ef7jo9HQ","MapSizeListenerTransCtr",void 0);var q=l.ccclass,E=l.property,A=e("MapSizeTransformData",(v=q("MapSizeTransformData"),y=E({visible:!0,displayName:"地图宽高"}),d=E({visible:!0,displayName:"位置"}),_=E({visible:!0,displayName:"角度"}),b=E({visible:!0,displayName:"缩放"}),v((z=t((g=function(){function e(){r(this,"_size",z,this),r(this,"_pos",D,this),r(this,"_rotation",T,this),r(this,"_scale",L,this)}return e.prototype.isEqual=function(e){return this._size.equals(e)},i(e,[{key:"pos",get:function(){return this._pos}},{key:"rotation",get:function(){return this._rotation}},{key:"scale",get:function(){return this._scale}}]),e}()).prototype,"_size",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u}}),D=t(g.prototype,"_pos",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),T=t(g.prototype,"_rotation",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(0,0,0)}}),L=t(g.prototype,"_scale",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new c(1,1,1)}}),m=g))||m));e("MapSizeListenerTransCtr",(C=q("MapSizeListenerTransCtr"),S=E({type:A,visible:!0,displayName:"默认"}),w=E({type:[A],visible:!0,displayName:"各种情况"}),C((k=t((N=function(e){function t(){for(var t,i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this)._level=void 0,r(t,"_defaultTransformData",k,a(t)),r(t,"_transformData",j,a(t)),t}n(t,e);var i=t.prototype;return i.start=function(){this.init(p.getScene().getComponentInChildren(h))},i.onDestroy=function(){this.myDestroy()},i.update=function(e){},i.init=function(e){this._level=e,this._level.eventTarget.on(h.LevelMapSizeChangeEvent,this.onLevelMapSizeChanged,this)},i.myDestroy=function(){this._level&&(this._level.eventTarget.off(h.LevelMapSizeChangeEvent,this.onLevelMapSizeChanged,this),this._level=null)},i.onLevelMapSizeChanged=function(e){this.adjustTrans(e)},i.adjustTrans=function(e){for(var t,i=this._defaultTransformData,n=o(this._transformData);!(t=n()).done;){var r=t.value;if(r.isEqual(e)){i=r;break}}this.node.position=i.pos,this.node.eulerAngles=i.rotation,this.node.scale=i.scale},t}(f)).prototype,"_defaultTransformData",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=t(N.prototype,"_transformData",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new Array}}),M=N))||M));s._RF.pop()}}}));

System.register("chunks:///_virtual/MyFish.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Fish.ts","./Level.ts"],(function(i){"use strict";var e,t,r,n,s,o,u,l,c,a,h;return{setters:[function(i){e=i.applyDecoratedDescriptor,t=i.inheritsLoose,r=i.initializerDefineProperty,n=i.assertThisInitialized,s=i.createClass},function(i){o=i.cclegacy,u=i._decorator,l=i.CCFloat,c=i.Component},function(i){a=i.Fish},function(i){h=i.Level}],execute:function(){var y,p,f,v,_,d,m;o._RF.push({},"00c26tkJxxJWa830jKiSBWP","MyFish",void 0);var b=u.ccclass,g=u.property;i("MyFish",(y=b("MyFish"),p=g({type:l,visible:!0,displayName:"自己翻身后，邻居等多久才翻身"}),f=g({type:a,visible:!0}),y((d=e((_=function(i){function e(){for(var e,t=arguments.length,s=new Array(t),o=0;o<t;o++)s[o]=arguments[o];return(e=i.call.apply(i,[this].concat(s))||this)._myId=void 0,r(e,"_neighborDelayTurnOverTime",d,n(e)),r(e,"_fish",m,n(e)),e._fishGroup=void 0,e}t(e,i);var o=e.prototype;return o.init=function(i,e){this._myId=i,this._fishGroup=e,this.node.setPosition(h.instance.getElementPosById(this._myId))},o.myDestroy=function(){this._fishGroup=null},o.turnOver=function(){this._fish.turnOver()},o.click=function(){this._fishGroup.turnover(this._myId,this._neighborDelayTurnOverTime)},s(e,[{key:"id",get:function(){return this._myId}}]),e}(c)).prototype,"_neighborDelayTurnOverTime",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.2}}),m=e(_.prototype,"_fish",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=_))||v));o._RF.pop()}}}));

System.register("chunks:///_virtual/SetMapSizeCtr.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Level.ts"],(function(e){"use strict";var i,t,n,o,s,r,l,a,d,h;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){s=e.cclegacy,r=e._decorator,l=e.EditBox,a=e.director,d=e.Component},function(e){h=e.Level}],execute:function(){var p,c,u,v,f,_,g;s._RF.push({},"7aff0vIc1VMWpV31YRKuvcM","SetMapSizeCtr",void 0);var y=r.ccclass,S=r.property;e("SetMapSizeCtr",(p=y("SetMapSizeCtr"),c=S({type:l,visible:!0,displayName:"设置地图 宽"}),u=S({type:l,visible:!0,displayName:"设置地图 高"}),p((_=i((f=function(e){function i(){for(var i,t=arguments.length,s=new Array(t),r=0;r<t;r++)s[r]=arguments[r];return i=e.call.apply(e,[this].concat(s))||this,n(i,"_editBoxX",_,o(i)),n(i,"_editBoxY",g,o(i)),i._level=void 0,i}t(i,e);var s=i.prototype;return s.start=function(){this.init(a.getScene().getComponentInChildren(h))},s.onDestroy=function(){this.myDestroy()},s.update=function(e){},s.init=function(e){this._level=e,this._level.eventTarget.on(h.LevelMapSizeChangeEvent,this.onlevelMapSizeChanged,this),this._editBoxX.node.on("editing-did-ended",this.onEndEditX,this),this._editBoxY.node.on("editing-did-ended",this.onEndEditY,this)},s.myDestroy=function(){this._level&&(this._level.eventTarget.off(h.LevelMapSizeChangeEvent,this.onlevelMapSizeChanged,this),this._level=null),this._editBoxX.node.off("editing-did-ended",this.onEndEditX,this),this._editBoxY.node.off("editing-did-ended",this.onEndEditY,this)},s.onEndEditX=function(e){var i=parseInt(e.string);i?this._level.setSizeX(i):this.refreshMapSizeDisplay()},s.onEndEditY=function(e){var i=parseInt(e.string);i?this._level.setSizeY(i):this.refreshMapSizeDisplay()},s.refreshMapSizeDisplay=function(){this._editBoxX.string=this._level.mapSizeX+"",this._editBoxY.string=this._level.mapSizeY+""},s.onlevelMapSizeChanged=function(e){this.refreshMapSizeDisplay()},i}(d)).prototype,"_editBoxX",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=i(f.prototype,"_editBoxY",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=f))||v));s._RF.pop()}}}));

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
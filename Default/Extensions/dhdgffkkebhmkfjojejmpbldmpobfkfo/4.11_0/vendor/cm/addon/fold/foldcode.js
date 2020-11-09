'use strict';(function(d){"object"==typeof exports&&"object"==typeof module?d(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],d):d(CodeMirror)})(function(d){function p(a,b,c,e){function f(l){var g=q(a,b);if(!g||g.to.line-g.from.line<u)return null;for(var n=a.findMarksAt(g.from),m=0;m<n.length;++m)if(n[m].__isFold&&"fold"!==e){if(!l)return null;g.cleared=!0;n[m].clear()}return g}if(c&&c.call){var q=c;c=null}else q=k(a,c,"rangeFinder");"number"==
typeof b&&(b=d.Pos(b,0));var u=k(a,c,"minFoldSize"),h=f(!0);if(k(a,c,"scanUp"))for(;!h&&b.line>a.firstLine();)b=d.Pos(b.line-1,0),h=f(!1);if(h&&!h.cleared&&"unfold"!==e){var r=v(a,c);d.on(r,"mousedown",function(l){t.clear();d.e_preventDefault(l)});var t=a.markText(h.from,h.to,{replacedWith:r,clearOnEnter:k(a,c,"clearOnEnter"),__isFold:!0});t.on("clear",function(l,g){d.signal(a,"unfold",a,l,g)});d.signal(a,"fold",a,h.from,h.to)}}function v(a,b){a=k(a,b,"widget");"string"==typeof a?(b=document.createTextNode(a),
a=document.createElement("span"),a.appendChild(b),a.className="CodeMirror-foldmarker"):a&&(a=a.cloneNode(!0));return a}function k(a,b,c){return b&&void 0!==b[c]?b[c]:(a=a.options.foldOptions)&&void 0!==a[c]?a[c]:w[c]}d.newFoldFunction=function(a,b){return function(c,e){p(c,e,{rangeFinder:a,widget:b})}};d.defineExtension("foldCode",function(a,b,c){p(this,a,b,c)});d.defineExtension("isFolded",function(a){a=this.findMarksAt(a);for(var b=0;b<a.length;++b)if(a[b].__isFold)return!0});d.commands.toggleFold=
function(a){a.foldCode(a.getCursor())};d.commands.fold=function(a){a.foldCode(a.getCursor(),null,"fold")};d.commands.unfold=function(a){a.foldCode(a.getCursor(),null,"unfold")};d.commands.foldAll=function(a){a.operation(function(){for(var b=a.firstLine(),c=a.lastLine();b<=c;b++)a.foldCode(d.Pos(b,0),null,"fold")})};d.commands.unfoldAll=function(a){a.operation(function(){for(var b=a.firstLine(),c=a.lastLine();b<=c;b++)a.foldCode(d.Pos(b,0),null,"unfold")})};d.registerHelper("fold","combine",function(){var a=
Array.prototype.slice.call(arguments,0);return function(b,c){for(var e=0;e<a.length;++e){var f=a[e](b,c);if(f)return f}}});d.registerHelper("fold","auto",function(a,b){for(var c=a.getHelpers(b,"fold"),e=0;e<c.length;e++){var f=c[e](a,b);if(f)return f}});var w={rangeFinder:d.fold.auto,widget:"\u2194",minFoldSize:0,scanUp:!1,clearOnEnter:!0};d.defineOption("foldOptions",null);d.defineExtension("foldOption",function(a,b){return k(this,a,b)})});

(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return f}),a.d(t,"query",function(){return p});var i=a(7),r=a.n(i),s=a(0),n=a(156),o=a.n(n),l=a(149),d=a(166),c=a.n(d),u=a(151),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).posts=a.props.data.allMarkdownRemark.edges,a}return r()(t,e),t.prototype.render=function(){return s.createElement(u.a,null,s.createElement(o.a,{title:"My First Blog"}),s.createElement("div",{style:{fontWeight:"bold"}},"新着記事"),this.posts.map(function(e){return s.createElement("div",{key:e.node.id},s.createElement(l.a,{to:e.node.frontmatter.path},e.node.frontmatter.title),s.createElement(c.a,{fluid:e.node.frontmatter.image.childImageSharp.fluid,style:{width:"120px"}}))}))},t}(s.Component),p="426475551"},148:function(e,t,a){var i;e.exports=(i=a(150))&&i.default||i},149:function(e,t,a){"use strict";var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(148),r.a.createContext({});n.a.object,n.a.string.isRequired,n.a.func,n.a.func},150:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},151:function(e,t,a){"use strict";var i=a(7),r=a.n(i),s=a(0),n=(a(152),a(153)),o=a.n(n),l=a(149),d=a(154),c=a.n(d),u=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.createElement("div",{className:c.a.header},s.createElement("div",{className:c.a.content},s.createElement(l.a,{to:"/"},"My Blog")))},t}(s.Component),f=a(155),p=a.n(f),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.createElement("div",{className:p.a.footer},s.createElement("div",{className:p.a.content},"My Blog"))},t}(s.Component);a.d(t,"a",function(){return g});var g=function(e){function t(t){return e.call(this,t)||this}return r()(t,e),t.prototype.render=function(){return s.createElement("div",null,s.createElement(u,null),s.createElement("div",{className:o.a.content},this.props.children),s.createElement(h,null))},t}(s.Component)},166:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(35)),o=i(a(75)),l=i(a(76)),d=i(a(0)),c=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(h.has(e.target)){var t=h.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),h.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),h.set(e,t)),function(){a.unobserve(e),h.delete(e)}},m=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+l+a+r+t+n+s+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,s=e.style,n=e.onLoad,c=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:r},u,{onLoad:n,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},s)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.Tag,S=e.itemProp,w="boolean"==typeof b?"lightgray":b,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),R={title:t,alt:this.state.isVisible?"":a,style:E,className:p};if(h){var I=h;return d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(I.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/I.aspectRatio+"%"}}),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),I.base64&&d.default.createElement(y,(0,l.default)({src:I.base64},R)),I.tracedSVG&&d.default.createElement(y,(0,l.default)({src:I.tracedSVG},R)),this.state.isVisible&&d.default.createElement("picture",null,I.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),d.default.createElement(y,{alt:a,title:t,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t},I))}}))}if(g){var z=g,O=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},s);return"inherit"===s.display&&delete O.display,d.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:O,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:z.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:z.height}}),z.base64&&d.default.createElement(y,(0,l.default)({src:z.base64},R)),z.tracedSVG&&d.default.createElement(y,(0,l.default)({src:z.tracedSVG},R)),this.state.isVisible&&d.default.createElement("picture",null,z.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:z.srcSetWebp,sizes:z.sizes}),d.default.createElement(y,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:m((0,l.default)({alt:a,title:t,width:z.width,height:z.height},z))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),S=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-index-tsx-6b1f42c2e18b061bb928.js.map
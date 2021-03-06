/**
 * 编辑配置js -- handx
 */

function noteConfig() {

	var self = this;
	var m_editormd;

	this.init = function() {

		m_editormd = editormd("m_editormd", {
			toolbarIcons: function() {
				return ["undo", "redo", "|", "bold", "del", "italic", "quote", "ucwords", "uppercase", "lowercase", /*"|","h1","h2","h3","h4","h5","h6",*/ "|", "list-ul", "list-ol", "hr", "|", "link" /*,"reference-link"*/ , "image",
					"code", /*"preformatted-text",*/ "code-block", "table", "datetime", "emoji" /*,"html-entities"*/ , "|", /*"goto-line",*/ "search", "preview", "watch", /* "|", "fullscreen",*/ "file", "faicon"
				]
			},
			width: "100%",
			height: "100%",
			//						autoHeight: true,
			path: '../plugins/editor/lib/',
			//			theme: "dark",
			//			previewTheme: "dark",
			//			editorTheme: "pastel-on-dark",
			//			markdown: md,
			codeFold: true,
			//			syncScrolling : false,
			saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
			searchReplace: true,
			watch: false, // 关闭实时预览
			//			htmlDecode: "style,script,iframe|on*", // 开启 HTML 标签解析，为了安全性，默认不开启    
			//toolbar  : false,             //关闭工具栏
			//			previewCodeHighlight : true, // 关闭预览 HTML 的代码块高亮，默认开启
			emoji: true,
			taskList: true,
			tocm: true, // Using [TOCM]
			tex: true, // 开启科学公式TeX语言支持，默认关闭
			flowChart: true, // 开启流程图支持，默认关闭
			sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
			dialogLockScreen: false, // 设置弹出层对话框不锁屏，全局通用，默认为true
			//dialogShowMask : false,     // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
			dialogDraggable: false, // 设置弹出层对话框不可拖动，全局通用，默认为true
			//dialogMaskOpacity : 0.4,    // 设置透明遮罩层的透明度，全局通用，默认值为0.1
			//dialogMaskBgColor : "#000", // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
			imageUpload: true,
			imageFormats: ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
			imageUploadURL: "./php/upload.php",
			onload: function() {
				console.log('onload', this);
				//this.fullscreen();
				//this.unwatch();
				//this.watch().fullscreen();
				//this.setMarkdown("#PHP");
				//this.width("100%");
				//this.height(480);
				//this.resize("100%", 640);
				var keyMap = {
					"Ctrl-S": function(cm) {
					}
				};
				this.addKeyMap(keyMap);
			}
		});
	}

	
	self.init();

}
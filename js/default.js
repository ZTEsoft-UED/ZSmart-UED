(function($){$.fn.autogrow=function(options){return this.filter("textarea").each(function(){var self=this;var $self=$(self);var minHeight=$self.height();var noFlickerPad=$self.hasClass("autogrow-short")?0:parseInt($self.css("lineHeight"))||0;var shadow=$("<div></div>").css({position:"absolute",top:-1E4,left:-1E4,width:$self.width(),fontSize:$self.css("fontSize"),fontFamily:$self.css("fontFamily"),fontWeight:$self.css("fontWeight"),lineHeight:$self.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(document.body);
var update=function(event){var times=function(string,number){for(var i=0,r="";i<number;i++)r+=string;return r};var val=self.value.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;").replace(/\n$/,"<br/>&nbsp;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(space){return times("&nbsp;",space.length-1)+" "});if(event&&event.data&&event.data.event==="keydown"&&event.keyCode===13)val+="<br />";shadow.css("width",$self.width());shadow.html(val+(noFlickerPad===0?"...":""));$self.height(Math.max(shadow.height()+
noFlickerPad,minHeight))};$self.change(update).keyup(update).keydown({event:"keydown"},update);$(window).resize(update);update()})}})(jQuery);

$(function() {

	/**
	 * 添加焦点指示
	 * 
	 */

	$(".row").on('blur', 'input, textarea, select', function() {
	    $('span.active').remove();
	});

	$(".row:not('.clients, .agencies')").on('focus', "input:not('.submit'), textarea, select", function() {
		if($('span.active').length==0){
			$(this).parent().append('<span class="active"></span>');
		}
	    
	});

	/**
	 *移动端导航控制
	 * 
	 */

	$("#mobile-nav").click(function() {
	    $(this).toggleClass('open');
	    $('header nav').toggleClass('open');
	    $('body').toggleClass('nav-open');
	});

	$('article').click(function() {

		$('header nav').removeClass('open');
		$('body').removeClass('nav-open');

	}); 

}); 

/*
	function resizedw(){
	    $('#calendars').css('left', 0);
	    count = 0;
	}
	$(window).resize(function() { 
	    clearTimeout(doit);
	    doit = setTimeout(function() {
	        resizedw();
	    }, 200);
	});

*/  

 
 

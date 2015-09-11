$().ready(function () {
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
})

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); 
+(function ($) {
	
	
	
	
	
  var ImgChanger   = function (el,option) {
    $(el).on('click',$.proxy(this.mychange,this));
        this.$el=$(el);
    this.imgindex=0;
    this.preimgindex=-1;
    this.imgarr=[];
	this.arr=[];
    $.extend(true, this, option);
    $(el).css('background-image',"url('" + (this.imgarr[0]) +"')");


  }
	
	
	
	
	




	ImgChanger.prototype.mychange = function() {
	


	
	
	
	
	if (this.arr.length>0) {
		return
	}
	
	
	this.$el.html('<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
	
	this.$el.find('div').each(function (index,element) {
		$(this).css('background-position-y',-$('#continer').height()*index/10);
	});
	
	
	this.imgindex+=1;
	if (this.imgindex>=this.imgarr.length) {
		this.imgindex=0;
	}
	this.preimgindex+=1;
	if (this.preimgindex>=this.imgarr.length) {
		this.preimgindex=0;
	}
	
	this.$el.css('background-image',"url('" + (this.imgarr[this.imgindex]) +"')");
	var self=this;
		this.$el.find('div').each(function (index,element) {
			
//		$(this).show();
		
		var temp=$(this);
		temp.css('background-image',"url('" + (self.imgarr[self.preimgindex]) +"')");
		temp.css('visibility','visible');
//		temp.css('transition-property','transform,opacity');
		setTimeout(function() {
//			temp.animate({transform:'translateZ(300px)'},'500');
			self.arr.push(temp);
			temp.css('transform','translateZ(300px)');
			console.log(temp);
			
			
		}, index*50);
		setTimeout(function() {
//			temp.animate({opacity:'0'},250);
			temp.css('opacity','0');
			console.log(temp);
			
			
		}, index*50+250);
		setTimeout(function() {
////			arr.shift();
//			temp.css('visibility','hidden');
////			temp.css('transition-property','');
//			temp.css('opacity','1');
//			temp.css('transform','');
//			temp.css('background-image',"url('img/" + imgindex +".jpg')");
			self.arr.shift();
			
		}, index*50+500);

	});
	
	
}
	
	
	
	
	
	
	
	
	
	
  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data  = $this.data('my.imgchanger');
      var options = typeof option == 'object' && option;
      if (!data) $this.data('my.imgchanger', (data = new ImgChanger(this,options)));
      if (typeof option == 'string') data[option]()
    })
  }
	
	
	$.fn.imgChanger=Plugin;
	$.fn.imgChanger.Constructor=ImgChanger;
	
	
	
	
	
})(jQuery)


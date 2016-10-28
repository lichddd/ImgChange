$().ready(function () {
	
	
	
	
	
	
	

	
	
	
	
	
	
	
	
})

if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); 
+(function ($) {
	
	
	
	
	
  var ImgChanger   = function (el,option) {
//  $(el).on('click',$.proxy(this.mychange,this));
    this.$el=$(el);
    this.$eel=$('<div class="imgchanger_continer" style="width:100%;height:100%"></div>').appendTo(this.$el);
    this.$progress=$('<div class="imgchanger_progress" style="width:0%;height:2px;background-color:#0086B3"></div>').appendTo(this.$el);
    this.$pager=$('<div class="imgchanger_pager"></div>').appendTo(this.$el);
    this.imgindex=0;
    this.preimgindex=-1;
    this.imgarr=[];
	this.arr=[];
	this.houkou="migi";
	this.changetime=5000;
    $.extend(true, this, option);
    for (var i = 0; i < this.imgarr.length; i++) {
    	this.$pager.append("<div style='width: "+ 90/this.imgarr.length +"%;margin:"+5/this.imgarr.length+"%'></div>");
    }
    var self=this;
    this.$pager.children('div').on('click',function () {
    	
    	self.jumpin(self.$pager.children('div').index($(this)));
    	
    })
    $(el).css('background-image',"url('" + (this.imgarr[0]) +"')");
	$(this.$el.children('.imgchanger_pager').children('div')[0]).css('box-shadow','0px 0px 4px 5px rgba(255,255,255,0.5)');
	
	this.run();

  }
	
	
	
	ImgChanger.prototype.run = function() {
		var self=this;
		this.$progress.animate({width:'100%'},this.changetime,function () {
			self.$progress.css('width','0%');
//			self.$progress.animate({width:'0%'},0);

		});
		
		setTimeout(function () {

			
			self.mychange();
			
			self.run();
		},this.changetime)
		
	}
	

	ImgChanger.prototype.pre = function() {
		var self=this;
		this.houkou="hitari"
			self.mychange();


		
	}
	ImgChanger.prototype.next = function() {
		var self=this;
		this.houkou="migi"
			self.mychange();


		
	}
	
	ImgChanger.prototype.jumpin = function (index) {
		
	
	
	
	if (this.arr.length>0) {
		return
	}

	this.houkou="migi"
		this.$eel.html('<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
	
	this.$eel.find('div').each(function (index,element) {
		$(this).css('background-position-y',-$('#continer').height()*index/10);
	});
	this.preimgindex=this.imgindex;
	this.imgindex=index;
	
	
	this.$el.css('background-image',"url('" + (this.imgarr[this.imgindex]) +"')");
	var self=this;
		this.$eel.find('div').each(function (index,element) {
			
//		$(this).show();
		
		var temp=$(this);
		temp.css('background-image',"url('" + (self.imgarr[self.preimgindex]) +"')");
		temp.css('visibility','visible');
//		temp.css('transition-property','transform,opacity');
		setTimeout(function() {
//			temp.animate({transform:'translateZ(300px)'},'500');
			self.arr.push(temp);
			temp.css('transform','translateZ(300px)');
//			console.log(temp);
			
			
		}, index*50);
		setTimeout(function() {
//			temp.animate({opacity:'0'},250);
			temp.css('opacity','0');
//			console.log(temp);
			
			
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
	
	
	this.$el.children('.imgchanger_pager').children('div').css('box-shadow','');
	$(this.$el.children('.imgchanger_pager').children('div')[this.imgindex]).css('box-shadow','0px 0px 4px 5px rgba(255,255,255,0.5)');
	
	}


	ImgChanger.prototype.mychange = function() {
	


	
	
	
	
	if (this.arr.length>0) {
		return
	}
	
	
	
	
	
	
	if (this.houkou=="migi") {
		this.$eel.html('<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>');
	
	this.$eel.find('div').each(function (index,element) {
		$(this).css('background-position-y',-$('#continer').height()*index/10);
	});
	this.preimgindex=this.imgindex;
		this.imgindex+=1;
	if (this.imgindex>=this.imgarr.length) {
		this.imgindex=0;
	}
	
	if (this.preimgindex>=this.imgarr.length) {
		this.preimgindex=0;
	}
	
	this.$el.css('background-image',"url('" + (this.imgarr[this.imgindex]) +"')");
	var self=this;
		this.$eel.find('div').each(function (index,element) {
			
//		$(this).show();
		
		var temp=$(this);
		temp.css('background-image',"url('" + (self.imgarr[self.preimgindex]) +"')");
		temp.css('visibility','visible');
//		temp.css('transition-property','transform,opacity');
		setTimeout(function() {
//			temp.animate({transform:'translateZ(300px)'},'500');
			self.arr.push(temp);
			temp.css('transform','translateZ(300px)');
//			console.log(temp);
			
			
		}, index*50);
		setTimeout(function() {
//			temp.animate({opacity:'0'},250);
			temp.css('opacity','0');
//			console.log(temp);
			
			
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
	} else{
		this.$eel.html('<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'
		+'<div style="transform:translateZ(300px);opacity:0"></div>'

		);
	
	this.$eel.find('div').each(function (index,element) {
		$(this).css('background-position-y',-$('#continer').height()*index/10);
	});
		this.imgindex-=1;
	if (this.imgindex<0) {
		this.imgindex=this.imgarr.length-1;
	}
	this.preimgindex=this.imgindex;
	if (this.preimgindex<0) {
		this.preimgindex=this.imgarr.length-1;
	}
	

	var self=this;
		this.$eel.find('div').each(function (index,element) {
			
//		$(this).show();
		
		var temp=$(this);
		temp.css('background-image',"url('" + (self.imgarr[self.preimgindex]) +"')");
		temp.css('visibility','visible');

		
		
//		temp.css('transition-property','transform,opacity');
		setTimeout(function() {
//			temp.animate({transform:'translateZ(300px)'},'500');
			self.arr.push(temp);
			temp.css('transform','translateZ(0px)');
//			console.log(temp);
			
			
		}, index*50);
		setTimeout(function() {
//			temp.animate({opacity:'0'},250);
			temp.css('opacity','1');
//			console.log(temp);
			
			
		}, index*50);
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
	
	setTimeout(function() {
////			arr.shift();
//			temp.css('visibility','hidden');
////			temp.css('transition-property','');
//			temp.css('opacity','1');
//			temp.css('transform','');
//			temp.css('background-image',"url('img/" + imgindex +".jpg')");
			self.$el.css('background-image',"url('" + (self.imgarr[self.imgindex]) +"')");
			
		}, 9*50+500);
		
	}
	
	this.$el.children('.imgchanger_pager').children('div').css('box-shadow','');
	$(this.$el.children('.imgchanger_pager').children('div')[this.imgindex]).css('box-shadow','0px 0px 4px 5px rgba(255,255,255,0.5)');
	
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


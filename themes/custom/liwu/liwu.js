// jQuery for Drupal 7 [BEGIN]

(function ($) {

var tmp;
var selected;

function changeClass(div, title) {
	div.removeClass();
	div.addClass(title);
}

function is_touch_device() {
  return 'ontouchstart' in window        // works on most browsers 
      || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

function displayAttestations() {
	$('.view-attestation > .view-content > .item-list > ul > li').each(function() {
		attestation = $(this);
		displayFieldAttestation(attestation, 'title');
		displayFieldAttestation(attestation, 'date');
		displayFieldAttestation(attestation, 'cours');
		displayFieldAttestation(attestation, 'module');
		displayFieldAttestation(attestation, 'tags');
		displayFieldAttestation(attestation, 'doc');
		displayFieldAttestation(attestation, 'section');
		displayFieldAttestation(attestation, 'resume');
		displayStamp(attestation)
		
	});
}

function changeEchangeMenu() {
	$('.link-universites  a').html("Universités")
}

function displayStamp(div) {
	up = div.find('.attestation-vote').find('.thumb-up').find('.percent').html();
	down = div.find('.attestation-vote').find('.thumb-down').find('.percent').html();
	
	if(up>=down) {
		div.find('.stamp').html("<img src='sites/all/themes/custom/liwu/images/pages/view-attestations/thumb-down.png' />")
	} else {
		div.find('.stamp').html("<img src='sites/all/themes/custom/liwu/images/pages/view-attestations/thumb-up.png' />")
	}
}

function setListHover() {
	$('.view-attestation > .view-content > .item-list > ul > li').each(function() {
		$(this).mouseover(function() {

			element = $(this);
			element.find('.preview').css('display', 'block')
		})
		 .mouseleave(function() {
			element.find('.preview').css('display', 'none')
		});

	});	
}

function displayFieldAttestation(div, field) {
	content = div.find('.attestation-' + field).html();
	if(field=='resume' || field=='tags') {
		redBand = div.find('.preview');
	} else {
		redBand = div.find('.red-band');
	}
	
	redBand.find('.'+field).html(content);
}

function onResizeWindow() {
  $( window ).resize(function() {
    sizeFooter();
    displayIndex();
  });
}

function displayTools() {
  $('.tool').each(function() {
    //$(this).attr('href', '?q='+ $(this).attr('name'));
    $(this).css('background-image', 'url(files/img/pages/'+ $(this).attr('name') +'.png)');
    $(this).hover(
    	function() {
	      	$(this).css('background-image', 'url(files/img/pages/'+  $(this).attr('name') +'Hover.png)');
	    }, 
    	function() {
    		$(this).css('background-image', 'url(files/img/pages/'+  $(this).attr('name') +'.png)');
    	});
    
  })
}

function displayIndex() {
  if ($(window).width()<1350) {
    $('.toc-filter').css('display', 'none');  
  } else {
    $('.toc-filter').css('display', 'block');  
  }
}

function sizeFooter() {
    $('#main-wrapper').css('min-height', $(window).height() - 300 + "px");
}

function addLittleCourseHandler() {
	 $('.listTop > ul > li').click(function(){
	      
	      selected = $(this);
	      selected.css('display', 'none')
	      $('.accroche').html(selected.html());
	      $('.accroche').css('display', 'block')
	      $('.accroche > .liens').css('display', 'block')
	      
	      
	      module = selected.attr('class');
	            
	      lastChar = module[2];Homepag
	      
	      urlImg = 'files/img/css/modules/module_' + lastChar + '_hover.png';
	      
	      $('.accroche').css('background-image', 'url(' + urlImg + ')');
	      $('.accroche').css('background-size', '281px 300px');
	      
	      
	     
	      //$('.coursesList > ul > li').each(function( index ) {
	       $('.listTop > ul > li').each(function( index ) {
	         $(this).addClass('coursesListSmall');
	         if(index+1 != lastChar) $(this).css('display', 'block');
	      });
	      
	      selected.css('display', 'none');
	      
	      $('.coursesList > ul > li > a').last().css('margin-left', '0px');
      
      
      
				
    })
}

function addCoursesHandler() {	
	// Quand on clique sur un grand drapeau
	  $('.coursesList > ul > li').click(function(){
	      $('.accroche > .module').remove()
	      
	      
	      // C'EST LA QUE CA MERDE !!
	      selected = $(this);
	      // on le met dans le div accroche et on affiche tout
	      $('.accroche').html(selected.html());
	      $('.accroche').css('display', 'block')
	      $('.accroche > .liens').css('display', 'block')
	      
	      // On le cache dans la liste
	      selected.css('display', 'none')
	      
	      // Ecrit dans le header du haut tous les modules
	      $('.listTop').html('<ul>' + $('.coursesList').find('ul').html() + '</ul>');
	      $('.coursesList > ul').remove();
	      
	      var module = selected.attr('class');
	            
	      var lastChar = module[2];
	      
	      urlImg = 'files/img/css/modules/module_' + lastChar + '_hover.png';
	      
	      $('.accroche').css('background-image', 'url(' + urlImg + ')');
	      $('.accroche').css('background-size', '281px 300px');
	      
	      $('.listTop > ul > li').each(function( index ) {
	         $(this).addClass('coursesListSmall');
	         if(index+1 != lastChar) $(this).css('display', 'block');
	      });
	      
	      $('.coursesList > ul > li > a').last().css('margin-left', '0px');
	      
	      addLittleCourseHandler()
				
    })
	
}

function formatFlags() {
	flag = $('.countryFlag').parent().parent();
	//alert(flag.html());
	flag.css('float', 'left')
	flag.css('width', '260px')
}

function addSmallFlagHandler(div) {	

// Quand on clique sur un petit drapeau
	$(div).click(function(){

			changeClass(selected, "smallFlag");
			selected.find('.coursesList').css("display", "none");
			changeClass(div, "bigFlag")
			$(this).find('.coursesList').css("display", "block");
			addSmallFlagHandler(selected);
			selected = div;

	})
}

//display front page
function displayFrontPage() {
    contentWidth = $('#block-system-main').width();
    spacing = (contentWidth - 100) / 3;
    $('.bienvenue > div').css('width', spacing - 4 + "px");
    $('.coreen').css('margin-right', "0px");
    
}

function addHandlerForeignUni() {
	$('.countryFlag > a').click(function(){
	    var dropdown = $(this).attr("id")
	    //alert(dropdown);
	    
	    if(dropdown=="echange") {
	      $('#coree').hide("slow");
	      $('#japan').hide("slow");
	    } 
	    
	    if(dropdown=="coree") {
	      
	      $('#echange').hide("slow");
	      $('#japan').hide("slow");
	      
	    } 
	    if(dropdown=="japan") {
	      $('#coree').hide("slow");
	      $('#echange').hide("slow");
	      
	    } 
	    
	    $('.pane-universites-'+dropdown).show("slow", function() {
			$(this).css('float', 'left');
			$(this).css('width', '650px');
		});
		
	    $('#panels-ipe-paneid-3').css('width', '250px');
	    $('#panels-ipe-paneid-3').css('float', 'left');
	  
	    formatFlags();	  
	})

	$('.countryFlag > a').hover(
	function(){
    	$(this).find("img").css('display', 'block');
	}, function(){
    	$(this).find("img").css('display', 'none');
	})



}

function displayViewSelectorFixed(div) {
  if($(window).width() > 980) {
    selector = div.find('.views-exposed-widgets')
    selector.css('position', 'fixed');
    marginLeft = ($(window).width() - 930)/2
    selector.css('left', marginLeft - 120 + 'px');
    selector.find('.views-submit-button').css('float', 'none')
    selector.find('#edit-term-node-tid-depth').css('width', '114px');
  }
}

function setAttestation() {
  selectform = $('#views-exposed-form-attestation-page').find('select');
  selectform.find('option').each(function() {
    twoFirstChar = $(this).text().substr(0, 2)
    secondChar = $(this).text().substr(2, 2)
    
    //console.log(twoFirstChar);
    /*if(secondChar =! '-') {
      $(this).css('');
    }*/
    if(twoFirstChar == '--') {
      $(this).remove();
    }
    
  })
  $( document ).ajaxComplete(function() {
      setAttestation();
  });
  
  //displayViewSelectorFixed($('#views-exposed-form-attestation-page'));
}
function setTabsAttestation() {
	if($(".page-attestations .tabs li:last-child").attr("class")=="active"){
		console.log($(".page-attestations .views-exposed-form").attr("class"))
		$(".page-attestations .views-exposed-form").css('background', 'url("http://www.liwu.ch/sites/all/themes/custom/liwu/images/pages/view-attestations/background-tabs-middle.png") no-repeat right -41px')
	}
}
function handlerLogin() {

	divLogo = $(document).find(".header-log").find("a");
	if (divLogo.attr('href')=="#login") {

		divLogo.click(function(){
			divpos = divLogo.offset();
			displayLogin(divpos, $(document).find(".hidden"));
		});
		/*divLogo.clickOutsideThisElement(function() {
		    $(document).find(".hidden").css("display", "hidden")
		});*/

	};
	
}

function displayLogin(divpos, div) {

	div.css('display', 'block');
	div.css('position', 'absolute');
	div.css('left', divpos.left);
	div.css('top', divpos.top);
	div.css('background', "white");

}

function mapsHandler() {
	createLinks();
	country = "none"
	maps = $(document).find('.maps');

	$(document).find('.maps').children().each(function() {
		//console.log($(this).attr("class"));
		div = $(this);
		$(this).click(function(){
			if(country == "none" || country != $(this).attr("class").match("^[a-zA-z]*")) {
				country = $(this).attr("class");
				$(this).toggleClass(country + "-selected")
				unselectMaps(div, country);
			}
		});
	});

}
function unselectMaps(div, country) {
	if (country == "china") {
		$(".korea-selected").removeClass("korea-selected");
		$(".korea-selected").addClass("korea");
		$(".japan-selected").removeClass("japan-selected");
		$(".japan-selected").addClass("japan");
		$(".view-exchange-cities").slideDown();
		$(".view-exchange-korea").slideUp();
		$(".view-exchange-japan").slideUp();
	}
	if (country == "korea") {
		$(".china-selected").removeClass("china-selected");
		$(".china-selected").addClass("china");
		$(".japan-selected").removeClass("japan-selected");
		$(".japan-selected").addClass("japan");
		$(".view-exchange-cities").slideUp(function() {
			$(".view-exchange-korea").slideDown();
			$(".view-exchange-japan").slideUp();
		});
	}
	if (country == "japan") {
		$(".china-selected").removeClass("china-selected");
		$(".china-selected").addClass("china");
		$(".korea-selected").removeClass("korea-selected");
		$(".korea-selected").addClass("korea");
		$(".view-exchange-cities").slideUp(function(){
			$(".view-exchange-korea").slideUp();
			$(".view-exchange-japan").slideDown();
		});
	}
}
function createLinks() {
	title = $(document).find('.cities h3');
	title.each(function() {
		titleWithoutAccent = removeAccents($(this).text())
		$(this).replaceWith( "<a href='" + titleWithoutAccent + "'>" + $(this).text() + "</a>" );
	});

}
// A voir si nécessaire
/*function currentPageLink () {
  var $this;
  $("ul > li").each(function(){
    $this = $(this);
   
    if($this.find("> li.active").length) {
      $this.addClass("active");
    }
  })
}*/

function removeAccents(strAccents) {
	var strAccents = strAccents.split('');
	var strAccentsOut = new Array();
	var strAccentsLen = strAccents.length;
	var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
	var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
	for (var y = 0; y < strAccentsLen; y++) {
		if (accents.indexOf(strAccents[y]) != -1) {
			strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
		} else
			strAccentsOut[y] = strAccents[y];
	}
	strAccentsOut = strAccentsOut.join('');
	return strAccentsOut;
}

function displayCloud() {
	newCanvas =  $('<canvas/>',{'id':'myCanvas'}).width(310).height(310);
	can = $('#block-tagadelic-taxonomy-tagadelic-taxonomy');
	can.find('.content').attr('id', 'tag-cloud')
	can.append(newCanvas);
	$('#myCanvas').add('<p>');
	try {
      TagCanvas.Start('myCanvas', 'tag-cloud', {
		shape: 'vcylinder',
		textColour : '#000000',
		outlineThickness : 1,
		maxSpeed : 0.13,
		depth : 0.75
		});
    } catch(e) {
    // To check later
    	//alert(e)
      // something went wrong, hide the canvas container
      //document.getElementById('block-tagadelic-taxonomy-tagadelic-taxonomy').style.display = 'none';
    }
    $('#block-tagadelic-taxonomy-tagadelic-taxonomy').appendTo('#cloudy');
    $('#tag-cloud').css('display', 'block');
}

function displayMenuUni() {
	$('.pane-node-field-boutique a').text("Boutique");
	$('.pane-node-field-bons-plans a').text("Bons Plans");

}

function makeLinksUni() {
	$('.view-pane-universites').each(function() {
		$(this).find('.views-row').each(function() {
			ville = $(this).find('.displayNone').text();
			link = $(this).find('.linkUni > a').attr('href');
			$(this).find('.linkUni > a').attr('href', link+"/"+ville);
		});
	});
}

function setBonsPlans() {
	var plop = false
	$('.view-bons-plans').find("table").each(function() {
		$(this).find("caption").click(function(){
			if($(this).next().css("display") == "none") {
				$(this).next().show();	
				if(plop) {
					plop.hide();	
				}
				plop = $(this).next();
			} else {
				$(this).next().hide();
			}
			
		});
		$(this).before($(this).find("caption"))
	})
}

function setMenuForTouch() {
	$(".sf-depth-1").each(function(){
		if ($(this).attr("class").match("menuparent")=="menuparent") {
			$(this).attr("href", "#");
		};
	})
	$(".sf-depth-1").click(function(){
		$(this).find("ul").css("display", "block");
	})
}
function setHome() {
	$(".grenouilles td").each(function(){
		if($(this).find("div").attr("class")!="reponse-liwu") {
			$(this).mouseover(function(){
				divClass = $(this).find("div").attr("class")
				divClass = divClass.substr(-1)
				$(".grenouilles .reponse-liwu .reponse-"+divClass).css("display", "block");
				$("#cloudy").css('display', 'none');
			}).mouseout(function(){
				$(".grenouilles .reponse-liwu .reponse-"+divClass).css("display", "none");
				$("#cloudy").css('display', 'block');
			})
		}
	})
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
function setBlurDate() {
	ex = 'Ex : 2015, 02/2015'
	input = $("#edit-field-date-value");
	input.attr("placeholder", ex);
	input.focus(function(){
		if($(this).val() == ex) {
			$(this).val('');
		}
	});
}
function setBlogSortSelection() {
	switch(getUrlParameter('sort_by')) {
    case 'title':
        $(".header-view .view-filters a img.sorte-name").attr("class", "selected");
        break;
    case 'comment_count':
        $(".header-view .view-filters a img.sort-comment").attr("class", "selected");
        break;
    default:
        $(".header-view .view-filters a img.sort-date").attr("class", "selected");
	}
}

function setForum() {
	setForumRawsColors();
	deleteForumDateForum();
	deleteForumBySubject();
	changeForumDate();
	deleteForumBrSubject();
}

function setForumRawsColors() {
	$(".forum-table tbody tr").each(function() {
		if($(this).find("td:first-child").attr("class") == "forum-list-icon forum-list-icon-default") {
			$(this).find("td:first-child").nextAll().addClass("lightbg")
		}
		if($(this).find("td:first-child a").attr("name") == "new") {
			$(this).find("td:first-child").css("background-color", "rgba(14, 37, 63, 1)");
			$(this).find("td:first-child").nextAll().css("background-color", "rgba(14, 37, 63, 0.8)");
			$(this).addClass("new-message");
		}
	})
}

function deleteForumDateForum() {
	str   = $(".forum-last-reply").html();
	regex = /<br>\d.*$/;
	if(str!=null) {
    	$(".forum-last-reply").html(str.replace(regex, ""));
    }
}
function deleteForumBySubject() {
	regex = /by/;
	$(".forum-table-topics .views-field-title").each(function(){
		str = $(this).html();	
    	$(this).html(str.replace(regex, ""));
	})
	$(".forum-table-topics .views-field-last-updated").each(function(){
		str = $(this).html();	
    	$(this).html(str.replace(regex, ""));
	})
	$(".forum-table .forum-last-reply").each(function(){
		str = $(this).html();	
    	$(this).html(str.replace(regex, ""));
	})
}
function deleteForumBrSubject() {
	regex = /<br>/;
	$(".forum-table-topics .views-field-title").each(function(){
		str = $(this).html();	
    	$(this).html(str.replace(regex, ""));
	})
}
function changeForumDate() {
	regex = /on \w{3}, (\d{2})\/(\d{2})\/(\d{4}) - \d{2}:\d{2}/;
	regex2 = /» \w{3}, (\d{2})\/(\d{2})\/(\d{4}) - \d{2}:\d{2}/;
	regex3 = /\w{3}, (\d{2})\/(\d{2})\/(\d{4}) - \d{2}:\d{2}/;
	$(".forum-table-topics .views-field-title").each(function(){
		str = $(this).html();	
    	$(this).html(str.replace(regex, "<span class='date'>$1 $2 $3</span>"));
    	$(this).html(str.replace(regex2, "<span class='date'>$1 $2 $3</span>"));
	})
	$(".forum-table-topics .views-field-last-updated").each(function(){
		str = $(this).html();
		$(this).html(str.replace(regex3, "<span class='date'>$1 $2 $3</span>"));
	})
	$(".forum-table-topics .views-field-title").each(function(){
		str = $(this).html();
		$(this).html(str.replace(regex, "<span class='date'>$1 $2 $3</span>"));
	})
}
function addToolsHandler() {
	$('.page-outils-list .header-tools a').each(function(){
		$(this).click(function(){
			$('.page-outils-list .header-tools a').removeClass('active');
			$(this).addClass("active");
			link = $(this).attr('href').substr(1);
			if(link == "All") {
				$('.page-outils-list .all').show()
				$('.page-outils-list .view-outils-sorted h3').each(function() {
					$(this).hide();
				})
				
				$('.page-outils-list .view-outils-sorted div.views-row').each(function() {
					$(this).hide();
				})
			}
			else {
				$('.page-outils-list .all').hide();

				$('.page-outils-list .view-outils-sorted h3').each(function() {
					$(this).hide();
				})
				
				$('.page-outils-list .view-outils-sorted div.views-row').each(function() {
					$(this).hide();
				})
				
				switch(link) {
					case "Chinois":
						$('.page-outils-list .view-outils-sorted h3').each(function() {
							if($(this).find('a').html()=="Chinois") {
								$(this).nextUntil("h3").show().children().show();
							}
						})
						break;
					case "Coreen":
						$('.page-outils-list .view-outils-sorted h3').each(function() {
							if($(this).find('a').html()=="Coreen") {
								$(this).nextUntil("h3").show().children().show();
							}
						})
						break;
					case "Japonais":
						$('.page-outils-list .view-outils-sorted h3').each(function() {
							if($(this).find('a').html()=="Japonais") {
								$(this).nextUntil("h3").show().children().show();
							}
						})
						break;
				}
			}
		})
		
	})
}

// [jQuery BEGIN] début des fonctions
$(document).ready(function() {
// ****************************************************************
  $(document).ready(function() {     
	addCoursesHandler();
	addToolsHandler();
    onResizeWindow();
    sizeFooter();
    displayIndex();
    displayFrontPage();
    addHandlerForeignUni();
    setAttestation();      
    displayTools();
    displayAttestations();
    setTabsAttestation();
    setListHover();
    handlerLogin();
    mapsHandler();
    displayCloud();
    displayMenuUni();
    makeLinksUni();
    setBonsPlans();
    changeEchangeMenu()
    setHome();
   	setBlurDate();
   	setBlogSortSelection();
   	setForum();

    if (is_touch_device()) {
    	setMenuForTouch();
    };
  });  

// ****************************************************************
// [jQuery END] fin des fonctions
});


  
// jQuery for Drupal 7 [END]
}(jQuery));
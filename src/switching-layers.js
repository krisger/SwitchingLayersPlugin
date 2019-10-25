$.fn.switchinglayers = function(options) {
	
    var mainLayer, switchArea, layerCounter = [];
    var sett = $.extend({
        container: $("[data-switch='container']"),
        mainLayer: $("[data-switch='main-layer']"),
        parentSwitch: $("[data-switch='switch-parent']"),
	activeClassName: "active",
        switchingTime: 3 //seconds
    });

    changeLayer(sett, true);
    setInterval
    (
        function()
        {

            if(sett.container.length > 0)
            {
                changeLayer(sett, false);
            }
        }, 
        (sett.switchingTime * 1000)
    )
    
    function changeLayer(sett, firstLoad)
    {
        var sCount = 0;
        for(var j = 0; j < layerCounter.length; j++)
        {  
            layerCounter[j] += 1; 
        }

        $(sett.container).each(function() {
		
            mainLayer = $(this).find(sett.mainLayer);
            $(mainLayer).each(function() {  
		    
                switchArea = $(this).find(sett.parentSwitch);	  
                switchArea.each(function() {
                    
		    sCount++; 

                    if(firstLoad){
                        layerCounter.push(0);
                    } 

                    if($(this).children("div").eq(layerCounter[sCount - 1]).length == 0)
                    {
                        layerCounter[sCount - 1] = 0;
                    }

                    $(this).children("div").removeClass(sett.activeClassName)
                    $(this).children("div").eq(layerCounter[sCount-1]).addClass(sett.activeClassName);   
                });
            });
        });	
    }   
}

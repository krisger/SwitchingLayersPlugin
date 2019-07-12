<h2>Instalation</h2>
<p>Get from "src" folder plugin "switching-layers.js" add it to you header under jQuery library included</p>
<p>This plugin requires jQuery to be included </p>
<p>In example used bootstrap, but you can build layout without it</p>
<p>Have in mind what each data-switch="switch-parent" children top div elements should be absolute and top on each other to show as in example</p>
<p>In your css, you will need to hide with css (display: none) data-switch="switch-parent" children top div elements and show (display: block) when active class added</p>
<p>
	Call plugin with:
</p>
<p>
<pre lang="no-highlight">
<code>
$(function(){
	$().switchinglayers({});
});

//or if you want change options

$(function(){
	$().switchinglayers({
		mainLayer: $("[data-switch='main-layer']"), //you can change el selectors
        	parentSwitch: $("[data-switch='switch-parent']"), //you can change el selectors
        	switchingTime: 3, //pass seconds, it will slow down or increase speed of switching layers
		activeClassName: "active" //you can change active class name
	});
});
</code>
</pre>
</p>
<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"></a>License</h2>
<p>This project is licensed under the MIT License - for this read License.md file</p>

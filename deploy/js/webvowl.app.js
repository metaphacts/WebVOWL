webvowl.app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(314);
	__webpack_require__(316);
	
	module.exports = __webpack_require__(317);


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

	module.exports = d3;

/***/ }),

/***/ 314:
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

	/* Taken from here: http://stackoverflow.com/a/17907562 */
	function getInternetExplorerVersion() {
		var ua,
			re,
			rv = -1;
	
		// check for edge
		var isEdge=/(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/.test(navigator.userAgent);
		if (isEdge){
			rv  = parseInt("12");
			return rv;
		}
	
		var isIE11 = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
		if (isIE11){
			rv  = parseInt("11");
			return rv;
		}
		if (navigator.appName === "Microsoft Internet Explorer") {
			ua = navigator.userAgent;
			re = new RegExp("MSIE ([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		} else if (navigator.appName === "Netscape") {
			ua = navigator.userAgent;
			re = new RegExp("Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})");
			if (re.exec(ua) !== null) {
				rv = parseFloat(RegExp.$1);
			}
		}
		return rv;
	}
	
	function showBrowserWarningIfRequired() {
	
		var version = getInternetExplorerVersion();
		if (version > 0 && version <= 12) {
			document.write("<div id=\"browserCheck\">WebVOWL does not work properly in Internet Explorer and Microsoft Edge. Please use another browser, such as <a href=\"http://www.mozilla.org/firefox/\">Mozilla Firefox</a> or <a href=\"https://www.google.com/chrome/\">Google Chrome</a>, to run WebVOWL.</div>");
			// hiding any additional menus and features
			var canvasArea = document.getElementById("canvasArea"),
				detailsArea = document.getElementById("detailsArea"),
				optionsArea = document.getElementById("optionsArea");
			canvasArea.className = "hidden";
			detailsArea.className = "hidden";
			optionsArea.className = "hidden";
		}
	}
	
	
	module.exports = showBrowserWarningIfRequired;
	showBrowserWarningIfRequired();

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {module.exports = function () {
	
		var app = {},
			graph = webvowl.graph(),
			options = graph.graphOptions(),
			languageTools = webvowl.util.languageTools(),
			GRAPH_SELECTOR = "#graph",
		// Modules for the webvowl app
			exportMenu = __webpack_require__(318)(graph),
			filterMenu = __webpack_require__(319)(graph),
			gravityMenu = __webpack_require__(320)(graph),
			modeMenu = __webpack_require__(321)(graph),
			//ontologyMenu = require("./menu/ontologyMenu")(graph),
			pauseMenu = __webpack_require__(322)(graph),
			resetMenu = __webpack_require__(323)(graph),
			searchMenu = __webpack_require__(324)(graph),
			navigationMenu = __webpack_require__(325)(graph),
			sidebar = __webpack_require__(326)(graph),
		// Graph modules
			colorExternalsSwitch = webvowl.modules.colorExternalsSwitch(graph),
			compactNotationSwitch = webvowl.modules.compactNotationSwitch(graph),
			datatypeFilter = webvowl.modules.datatypeFilter(),
			disjointFilter = webvowl.modules.disjointFilter(),
			focuser = webvowl.modules.focuser(),
			emptyLiteralFilter=webvowl.modules.emptyLiteralFilter(),
			nodeDegreeFilter = webvowl.modules.nodeDegreeFilter(filterMenu),
			nodeScalingSwitch = webvowl.modules.nodeScalingSwitch(graph),
			objectPropertyFilter = webvowl.modules.objectPropertyFilter(),
			pickAndPin = webvowl.modules.pickAndPin(),
			selectionDetailDisplayer = webvowl.modules.selectionDetailsDisplayer(sidebar.updateSelectionInformation),
			statistics = webvowl.modules.statistics(),
			subclassFilter = webvowl.modules.subclassFilter(),
			progress=document.getElementById("myProgress"),
			setOperatorFilter = webvowl.modules.setOperatorFilter();
	
		app.initialize = function (data) {
			options.graphContainerSelector(GRAPH_SELECTOR);
			options.selectionModules().push(focuser);
			options.selectionModules().push(selectionDetailDisplayer);
			options.selectionModules().push(pickAndPin);
			options.filterModules().push(emptyLiteralFilter);
			options.filterModules().push(statistics);
			options.filterModules().push(datatypeFilter);
			options.filterModules().push(objectPropertyFilter);
			options.filterModules().push(subclassFilter);
			options.filterModules().push(disjointFilter);
			options.filterModules().push(setOperatorFilter);
			options.filterModules().push(nodeScalingSwitch);
			options.filterModules().push(nodeDegreeFilter);
			options.filterModules().push(compactNotationSwitch);
			options.filterModules().push(colorExternalsSwitch);
	
	
			d3.select(window).on("resize", adjustSize);
	
			exportMenu.setup();
			gravityMenu.setup();
			filterMenu.setup(datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter);
			modeMenu.setup(pickAndPin, nodeScalingSwitch, compactNotationSwitch, colorExternalsSwitch);
			pauseMenu.setup();
			sidebar.setup();
			//ontologyMenu.setup(loadOntologyFromText);
			resetMenu.setup([gravityMenu, filterMenu, modeMenu, focuser, selectionDetailDisplayer, pauseMenu]);
			searchMenu.setup();
			navigationMenu.setup();
	
			// give the options the pointer to the some menus for import and export
			options.literalFilter(emptyLiteralFilter);
			options.filterMenu(filterMenu);
			options.modeMenu(modeMenu);
			options.gravityMenu(gravityMenu);
			options.pausedMenu(pauseMenu);
			options.pickAndPinModule(pickAndPin);
			options.resetMenu(resetMenu);
			options.searchMenu(searchMenu);
			//options.ontologyMenu(ontologyMenu);
			options.navigationMenu(navigationMenu);
			options.sidebar(sidebar);
			options.data(data);
			graph.start();
			adjustSize();
			sidebar.updateOntologyInformation(data, statistics);
			adjustSize();
		};
	
		function loadOntologyFromText(jsonText, filename, alternativeFilename) {
			pauseMenu.reset();
	
			if (jsonText===undefined && filename===undefined){
				console.log("Nothing to load");
				return;
			}
	
			var data;
			if (jsonText) {
				// validate JSON FILE
				var validJSON;
				try {
					data =JSON.parse(jsonText);
					validJSON=true;
				} catch (e){
					validJSON=false;
				}
				if (validJSON===false){
					// the server output is not a valid json file
					console.log("Retrieved data is not valid! (JSON.parse Error)");
					//ontologyMenu.emptyGraphError();
					return;
				}
	
				if (!filename) {
					// First look if an ontology title exists, otherwise take the alternative filename
					var ontologyNames = data.header ? data.header.title : undefined;
					var ontologyName = languageTools.textInLanguage(ontologyNames);
	
					if (ontologyName) {
						filename = ontologyName;
					} else {
						filename = alternativeFilename;
					}
				}
			}
	
			//@WORKAROUND
			// check if data has classes and properties;
			var classCount				  = parseInt(data.metrics.classCount);
			var objectPropertyCount		  = parseInt(data.metrics.objectPropertyCount);
			var datatypePropertyCount	  = parseInt(data.metrics.datatypePropertyCount);
	
			if (classCount === 0 && objectPropertyCount===0 && datatypePropertyCount===0 ){
				// generate message for the user;
				//ontologyMenu.emptyGraphError();
			}
	
			exportMenu.setJsonText(jsonText);
			options.data(datatypeFilter);
			graph.load();
			
			sidebar.updateOntologyInformation(data, statistics);
			exportMenu.setFilename(filename);
		}
	
		function adjustSize() {
			var graphContainer = d3.select(GRAPH_SELECTOR),
				svg = graphContainer.select("svg"),
				// height = window.innerHeight - 40,
				// width = window.innerWidth - (window.innerWidth * 0.22);
				height = d3.select('.webvowl-import').node().getBoundingClientRect().height,
				width = d3.select('.webvowl-import').node().getBoundingClientRect().width;
	
			graphContainer.style("height", "auto");
			svg.attr("width", width)
				.attr("height", height);
	
			options.width(width)
				.height(height);
			graph.updateStyle();
			navigationMenu.updateVisibilityStatus();
		}
		return app;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the export button.
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var exportMenu = {},
			exportSvgButton,
			exportFilename,
			exportJsonButton,
			exportableJsonText;
	
		/**
		 * Adds the export button to the website.
		 */
		exportMenu.setup = function () {
			exportSvgButton = d3.select("#exportSvg")
				.on("click", exportSvg);
			exportJsonButton = d3.select("#exportJson")
				.on("click", exportJson);
	
			var menuEntry= d3.select("#export");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
		};
	
		exportMenu.setFilename = function (filename) {
			exportFilename = filename || "export";
		};
	
		exportMenu.setJsonText = function (jsonText) {
			exportableJsonText = jsonText;
		};
	
		function exportSvg() {
			// Get the d3js SVG element
			var graphSvg = d3.select(graph.options().graphContainerSelector()).select("svg"),
				graphSvgCode,
				escapedGraphSvgCode,
				dataURI;
	
			// inline the styles, so that the exported svg code contains the css rules
			inlineVowlStyles();
			hideNonExportableElements();
	
			graphSvgCode = graphSvg.attr("version", 1.1)
				.attr("xmlns", "http://www.w3.org/2000/svg")
				.node().parentNode.innerHTML;
	
			// Insert the reference to VOWL
			graphSvgCode = "<!-- Created with WebVOWL (version " + webvowl.version + ")" +
			               ", http://vowl.visualdataweb.org -->\n" + graphSvgCode;
	
			escapedGraphSvgCode = escapeUnicodeCharacters(graphSvgCode);
			//btoa(); Creates a base-64 encoded ASCII string from a "string" of binary data.
			dataURI = "data:image/svg+xml;base64," + btoa(escapedGraphSvgCode);
	
			exportSvgButton.attr("href", dataURI)
				.attr("download", exportFilename + ".svg");
	
			// remove graphic styles for interaction to go back to normal
			removeVowlInlineStyles();
			showNonExportableElements();
		}
	
		function escapeUnicodeCharacters(text) {
			var textSnippets = [],
				i, textLength = text.length,
				character,
				charCode;
	
			for (i = 0; i < textLength; i++) {
				character = text.charAt(i);
				charCode = character.charCodeAt(0);
	
				if (charCode < 128) {
					textSnippets.push(character);
				} else {
					textSnippets.push("&#" + charCode + ";");
				}
			}
	
			return textSnippets.join("");
		}
	
		function inlineVowlStyles() {
			setStyleSensitively(".text", [{name: "font-family", value: "Helvetica, Arial, sans-serif"}, {name: "font-size", value: "12px"}]);
			setStyleSensitively(".subtext", [{name: "font-size", value: "9px"}]);
			setStyleSensitively(".text.instance-count", [{name: "fill", value: "#666"}]);
			setStyleSensitively(".external + text .instance-count", [{name: "fill", value: "#aaa"}]);
			setStyleSensitively(".cardinality", [{name: "font-size", value: "10px"}]);
			setStyleSensitively(".text, .embedded", [{name: "pointer-events", value: "none"}]);
			setStyleSensitively(".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{name: "fill", value: "#acf"}]);
			setStyleSensitively(".label .datatype, .datatypeproperty", [{name: "fill", value: "#9c6"}]);
			setStyleSensitively(".rdf, .rdfproperty", [{name: "fill", value: "#c9c"}]);
			setStyleSensitively(".literal, .node .datatype", [{name: "fill", value: "#fc3"}]);
			setStyleSensitively(".deprecated, .deprecatedproperty", [{name: "fill", value: "#ccc"}]);
			setStyleSensitively(".external, .externalproperty", [{name: "fill", value: "#36c"}]);
			setStyleSensitively("path, .nofill", [{name: "fill", value: "none"}]);
			setStyleSensitively("marker path", [{name: "fill", value: "#000"}]);
			setStyleSensitively(".class, path, line, .fineline", [{name: "stroke", value: "#000"}]);
			setStyleSensitively(".white, .subclass, .subclassproperty, .external + text", [{name: "fill", value: "#fff"}]);
			setStyleSensitively(".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{name: "fill", value: "#f00"}, {name: "cursor", value: "pointer"}]);
			setStyleSensitively(".focused, path.hovered", [{name: "stroke", value: "#f00"}]);
			setStyleSensitively(".indirect-highlighting, .feature:hover", [{name: "fill", value: "#f90"}]);
			setStyleSensitively(".values-from", [{name: "stroke", value: "#69c"}]);
			setStyleSensitively(".symbol, .values-from.filled", [{name: "fill", value: "#69c"}]);
			setStyleSensitively(".class, path, line", [{name: "stroke-width", value: "2"}]);
			setStyleSensitively(".fineline", [{name: "stroke-width", value: "1"}]);
			setStyleSensitively(".dashed, .anonymous", [{name: "stroke-dasharray", value: "8"}]);
			setStyleSensitively(".dotted", [{name: "stroke-dasharray", value: "3"}]);
			setStyleSensitively("rect.focused, circle.focused", [{name: "stroke-width", value: "4px"}]);
			setStyleSensitively(".nostroke", [{name: "stroke", value: "none"}]);
			setStyleSensitively("marker path", [{name: "stroke-dasharray", value: "100"}]);
		}
	
		function setStyleSensitively(selector, styles) {
			var elements = d3.selectAll(selector);
			if (elements.empty()) {
				return;
			}
	
			styles.forEach(function (style) {
				elements.each(function () {
					var element = d3.select(this);
					if (!shouldntChangeInlineCss(element, style.name)) {
						element.style(style.name, style.value);
					}
				});
			});
		}
	
		function shouldntChangeInlineCss(element, style) {
			return style === "fill" && hasBackgroundColorSet(element);
		}
	
		function hasBackgroundColorSet(element) {
			var data = element.datum();
			return data.backgroundColor && !!data.backgroundColor();
		}
	
		/**
		 * For example the pin of the pick&pin module should be invisible in the exported graphic.
		 */
		function hideNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", "none");
		}
	
		function removeVowlInlineStyles() {
			d3.selectAll(".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path")
				.each(function () {
					var element = d3.select(this);
	
					var inlineStyles = element.node().style;
					for (var styleName in inlineStyles) {
						if (inlineStyles.hasOwnProperty(styleName)) {
							if (shouldntChangeInlineCss(element, styleName)) {
								continue;
							}
							element.style(styleName, null);
						}
					}
					if (element.datum && element.datum().type){
						if (element.datum().type()==="rdfs:subClassOf") {
							element.style("fill", null);
						}
					}
				});
		}
	
		function showNonExportableElements() {
			d3.selectAll(".hidden-in-export").style("display", null);
		}
	
		function exportJson() {
			/**  check if there is data **/
			if (!exportableJsonText) {
				alert("No graph data available.");
				// Stop the redirection to the path of the href attribute
				d3.event.preventDefault();
				return;
			}
	
			var i; // an index variable for the for-loops
	
			/** get data for exporter **/
			var nodeElements = graph.graphNodeElements();  // get visible nodes
			var propElements = graph.graphLabelElements(); // get visible labels
			var jsonObj = JSON.parse(exportableJsonText);	   // reparse the original input json
	
			/** modify comment **/
			var comment = jsonObj._comment;
			var additionalString = " [Additional Information added by WebVOWL Exporter Version: " + "1.0.3" + "]";
			// adding new string to comment only if it does not exist
			if (comment.indexOf(additionalString) === -1) {
				jsonObj._comment = comment + " [Additional Information added by WebVOWL Exporter Version: " + "1.0.3" + "]";
			}
	
			var classAttribute = jsonObj.classAttribute;
			var propAttribute = jsonObj.propertyAttribute;
			/**  remove previously stored variables **/
			for (i = 0; i < classAttribute.length; i++) {
				var classObj = classAttribute[i];
				delete classObj.pos;
				delete classObj.pinned;
			}
			var propertyObj;
			for (i = 0; i < propAttribute.length; i++) {
				propertyObj = propAttribute[i];
				delete propertyObj.pos;
				delete propertyObj.pinned;
			}
			/**  add new variables to jsonObj  **/
			// class attribute variables
			nodeElements.each(function (node) {
				var nodeId = node.id();
				for (i = 0; i < classAttribute.length; i++) {
					var classObj = classAttribute[i];
					if (classObj.id === nodeId) {
						// store relative positions
						classObj.pos = [node.x, node.y];
						if (node.pinned())
							classObj.pinned = true;
						break;
					}
				}
			});
			// property attribute variables
			for (var j = 0; j < propElements.length; j++) {
				var correspondingProp = propElements[j].property();
				for (i = 0; i < propAttribute.length; i++) {
					propertyObj = propAttribute[i];
					if (propertyObj.id === correspondingProp.id()) {
						propertyObj.pos = [propElements[j].x, propElements[j].y];
						if (propElements[j].pinned())
							propertyObj.pinned = true;
						break;
					}
				}
			}
			/** create the variable for settings and set their values **/
			jsonObj.settings = {};
	
			// Global Settings
			var zoom = graph.scaleFactor();
			var paused = graph.paused();
			var translation = graph.translation();
			jsonObj.settings.global = {};
			jsonObj.settings.global.zoom = zoom;
			jsonObj.settings.global.translation = translation;
			jsonObj.settings.global.paused = paused;
	
			// shared variable declaration
			var cb_text;
			var isEnabled;
			var cb_obj;
	
			// Gravity Settings
			var classDistance = graph.options().classDistance();
			var datatypeDistance = graph.options().datatypeDistance();
			jsonObj.settings.gravity = {};
			jsonObj.settings.gravity.classDistance = classDistance;
			jsonObj.settings.gravity.datatypeDistance = datatypeDistance;
	
			// Filter Settings
			var fMenu = graph.options().filterMenu();
			var fContainer = fMenu.getCheckBoxContainer();
			var cbCont = [];
			for (i = 0; i < fContainer.length; i++) {
				cb_text = fContainer[i].checkbox.attr("id");
				isEnabled = fContainer[i].checkbox.property("checked");
				cb_obj = {};
				cb_obj.id = cb_text;
				cb_obj.checked = isEnabled;
				cbCont.push(cb_obj);
			}
			var degreeSliderVal = fMenu.getDegreeSliderValue();
			jsonObj.settings.filter = {};
			jsonObj.settings.filter.checkBox = cbCont;
			jsonObj.settings.filter.degreeSliderValue = degreeSliderVal;
	
			// Modes Settings
			var mMenu = graph.options().modeMenu();
			var mContainer = mMenu.getCheckBoxContainer();
			var cb_modes = [];
			for (i = 0; i < mContainer.length; i++) {
				cb_text = mContainer[i].attr("id");
				isEnabled = mContainer[i].property("checked");
				cb_obj = {};
				cb_obj.id = cb_text;
				cb_obj.checked = isEnabled;
				cb_modes.push(cb_obj);
			}
			var colorSwitchState = mMenu.colorModeState();
			jsonObj.settings.modes = {};
			jsonObj.settings.modes.checkBox = cb_modes;
			jsonObj.settings.modes.colorSwitchState = colorSwitchState;
	
			var exportObj = {};
			// todo: [ ] find better way for ordering the objects
			// hack for ordering of objects, so settings is after metrics
			exportObj._comment = jsonObj._comment;
			exportObj.header = jsonObj.header;
			exportObj.namespace = jsonObj.namespace;
			exportObj.metrics = jsonObj.metrics;
			exportObj.settings = jsonObj.settings;
			exportObj.class = jsonObj.class;
			exportObj.classAttribute = jsonObj.classAttribute;
			exportObj.property = jsonObj.property;
			exportObj.propertyAttribute = jsonObj.propertyAttribute;
	
	
			// make a string again;
			var exportText = JSON.stringify(exportObj, null, '  ');
			// write the data
			var dataURI = "data:text/json;charset=utf-8," + encodeURIComponent(exportText);
			exportJsonButton.attr("href", dataURI)
				.attr("download", exportFilename + ".json");
		}
	
		return exportMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the filters with the website.
	 *
	 * @param graph required for calling a refresh after a filter change
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var filterMenu = {},
			checkboxData = [],
			menuElement = d3.select("#filterOption a"),
			nodeDegreeContainer = d3.select("#nodeDegreeFilteringOption"),
			graphDegreeLevel,
			degreeSlider;
	
	
		/** some getter function  **/
		filterMenu.getCheckBoxContainer = function () {
			return checkboxData;
		};
	
		filterMenu.getDegreeSliderValue = function () {
			return degreeSlider.property("value");
		};
		/**
		 * Connects the website with graph filters.
		 * @param datatypeFilter filter for all datatypes
		 * @param objectPropertyFilter filter for all object properties
		 * @param subclassFilter filter for all subclasses
		 * @param disjointFilter filter for all disjoint with properties
		 * @param setOperatorFilter filter for all set operators with properties
		 * @param nodeDegreeFilter filters nodes by their degree
		 */
		filterMenu.setup = function (datatypeFilter, objectPropertyFilter, subclassFilter, disjointFilter, setOperatorFilter, nodeDegreeFilter) {
			var menuEntry= d3.select("#filterOption");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			menuElement.on("mouseleave", function () {
				filterMenu.highlightForDegreeSlider(false);
			});
	
			addFilterItem(datatypeFilter, "datatype", "Datatype properties", "#datatypeFilteringOption");
			addFilterItem(objectPropertyFilter, "objectProperty", "Object properties", "#objectPropertyFilteringOption");
			addFilterItem(subclassFilter, "subclass", "Solitary subclasses", "#subclassFilteringOption");
			addFilterItem(disjointFilter, "disjoint", "Class disjointness", "#disjointFilteringOption");
			addFilterItem(setOperatorFilter, "setoperator", "Set operators", "#setOperatorFilteringOption");
	
			addNodeDegreeFilter(nodeDegreeFilter, nodeDegreeContainer);
	
		};
	
	
		function addFilterItem(filter, identifier, pluralNameOfFilteredItems, selector) {
			var filterContainer,
				filterCheckbox;
	
			filterContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true);
	
			filterCheckbox = filterContainer.append("input")
				.classed("filterCheckbox", true)
				.attr("id", identifier + "FilterCheckbox")
				.attr("type", "checkbox")
				.property("checked", filter.enabled());
	
			// Store for easier resetting
			checkboxData.push({checkbox: filterCheckbox, defaultState: filter.enabled()});
	
			filterCheckbox.on("click", function (silent) {
				// There might be no parameters passed because of a manual
				// invocation when resetting the filters
				var isEnabled = filterCheckbox.property("checked");
				filter.enabled(isEnabled);
				if (silent !== true) {
					// updating graph when silent is false or the parameter is not given.
					graph.update();
				}
			});
	
			filterContainer.append("label")
				.attr("for", identifier + "FilterCheckbox")
				.text(pluralNameOfFilteredItems);
		}
	
		function addNodeDegreeFilter(nodeDegreeFilter, container) {
			nodeDegreeFilter.setMaxDegreeSetter(function (maxDegree) {
				degreeSlider.attr("max", maxDegree);
				setSliderValue(degreeSlider, Math.min(maxDegree, degreeSlider.property("value")));
			});
	
			nodeDegreeFilter.setDegreeGetter(function () {
				return +degreeSlider.property("value");
			});
	
			nodeDegreeFilter.setDegreeSetter(function (value) {
				setSliderValue(degreeSlider, value);
			});
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = container.append("div")
				.classed("distanceSliderContainer", true);
	
			degreeSlider = sliderContainer.append("input")
				.attr("id", "nodeDegreeDistanceSlider")
				.attr("type", "range")
				.attr("min", 0)
				.attr("step", 1);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text("Degree of collapsing");
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", "nodeDegreeDistanceSlider")
				.text(0);
	
	
	
			degreeSlider.on("change", function (silent) {
				if (silent !== true) {
					graph.update();
					graphDegreeLevel=degreeSlider.property("value");
				}
			});
	
	
			degreeSlider.on("input", function () {
				var degree = degreeSlider.property("value");
				sliderValueLabel.text(degree);
			});
	
	
			// adding wheel events
			degreeSlider.on("wheel",handleWheelEvent);
			degreeSlider.on("focusout",function(){
				if (degreeSlider.property("value")!==graphDegreeLevel) {
					graph.update();
				}
			});
		}
	
		function handleWheelEvent(){
			var wheelEvent=d3.event;
	
			var offset;
			if (wheelEvent.deltaY<0) offset=1;
			if (wheelEvent.deltaY>0) offset=-1;
	
			var oldVal=parseInt(degreeSlider.property("value"));
			var newSliderValue=oldVal+offset;
			if (oldVal!==newSliderValue) {
				// only update when they are different [reducing redundant updates]
				// set the new value and emit an update signal
				degreeSlider.property("value", newSliderValue);
				degreeSlider.on("input")();// <<-- sets the text value
				graph.update();
			}
		}
		
		function setSliderValue(slider, value) {
			slider.property("value", value).on("input")();
		}
	
		/**
		 * Resets the filters (and also filtered elements) to their default.
		 */
		filterMenu.reset = function () {
			checkboxData.forEach(function (checkboxData) {
				var checkbox = checkboxData.checkbox,
					enabledByDefault = checkboxData.defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== enabledByDefault) {
					checkbox.property("checked", enabledByDefault);
					// Call onclick event handlers programmatically
					checkbox.on("click")();
				}
			});
	
			setSliderValue(degreeSlider, 0);
			degreeSlider.on("change")();
		};
	
	
		filterMenu.highlightForDegreeSlider = function (enable) {
			if (!arguments.length) {
				enable = true;
			}
			menuElement.classed("highlighted", enable);
			nodeDegreeContainer.classed("highlighted", enable);
	
			// pulse button handling
			if (menuElement.classed("buttonPulse")===true && enable===true){
				menuElement.classed("buttonPulse", false);
				var timer= setTimeout(function() {
					menuElement.classed("buttonPulse", enable);
					clearTimeout(timer);
				}, 100);
			}else {
				menuElement.classed("buttonPulse", enable);
			}
		};
	
	
		/** importer functions **/
		// setting manually the values of the filter
		// no update of the gui settings, these are updated in updateSettings
		filterMenu.setCheckBoxValue = function (id, checked) {
			for (var i = 0; i < checkboxData.length; i++) {
				var cbdId = checkboxData[i].checkbox.attr("id");
				if (cbdId === id) {
					checkboxData[i].checkbox.property("checked", checked);
					break;
				}
			}
		};
		// set the value of the slider
		filterMenu.setDegreeSliderValue = function (val) {
			degreeSlider.property("value", val);
		};
		// update the gui without invoking graph update (calling silent onclick function)
		filterMenu.updateSettings = function () {
			var silent = true;
			var sliderValue = degreeSlider.property("value");
			if (sliderValue > 0) {
				filterMenu.highlightForDegreeSlider(true);
			} else{
				filterMenu.highlightForDegreeSlider(false);
			}
	
			checkboxData.forEach(function (checkboxData) {
				var checkbox = checkboxData.checkbox;
				checkbox.on("click")(silent);
			});
	
			degreeSlider.on("input")();
			degreeSlider.on("change")(silent);
	
		};
	
		return filterMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for setting up the gravity sliders.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var gravityMenu = {},
			sliders = [],
			options = graph.graphOptions(),
			defaultCharge = options.charge();
	
	
		/**
		 * Adds the gravity sliders to the website.
		 */
		gravityMenu.setup = function () {
			var menuEntry= d3.select("#gravityOption");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			addDistanceSlider("#classSliderOption", "class", "Class distance", options.classDistance);
			addDistanceSlider("#datatypeSliderOption", "datatype", "Datatype distance", options.datatypeDistance);
		};
	
		function addDistanceSlider(selector, identifier, label, distanceFunction) {
			var defaultLinkDistance = distanceFunction();
	
			var sliderContainer,
				sliderValueLabel;
	
			sliderContainer = d3.select(selector)
				.append("div")
				.datum({distanceFunction: distanceFunction}) // connect the options-function with the slider
				.classed("distanceSliderContainer", true);
	
			var slider = sliderContainer.append("input")
				.attr("id", identifier + "DistanceSlider")
				.attr("type", "range")
				.attr("min", 10)
				.attr("max", 600)
				.attr("value", distanceFunction())
				.attr("step", 10);
	
			sliderContainer.append("label")
				.classed("description", true)
				.attr("for", identifier + "DistanceSlider")
				.text(label);
	
			sliderValueLabel = sliderContainer.append("label")
				.classed("value", true)
				.attr("for", identifier + "DistanceSlider")
				.text(distanceFunction());
	
			// Store slider for easier resetting
			sliders.push(slider);
	
			slider.on("focusout",function(){
				graph.updateStyle();
			});
	
			slider.on("input", function () {
				var distance = slider.property("value");
				distanceFunction(distance);
				adjustCharge(defaultLinkDistance);
				sliderValueLabel.text(distance);
				graph.updateStyle();
			});
	
			// add wheel event to the slider
			slider.on("wheel",function(){
				var wheelEvent=d3.event;
				var offset;
				if (wheelEvent.deltaY<0) offset=10;
				if (wheelEvent.deltaY>0) offset=-10;
				var oldVal=parseInt(slider.property("value"));
				var newSliderValue=oldVal+offset;
				if (newSliderValue!==oldVal){
					slider.property("value",newSliderValue);
					distanceFunction(newSliderValue);
					slider.on("input")(); // << set text and update the graphStyles
				}
			});
		}
	
		function adjustCharge(defaultLinkDistance) {
			var greaterDistance = Math.max(options.classDistance(), options.datatypeDistance()),
				ratio = greaterDistance / defaultLinkDistance,
				newCharge = defaultCharge * ratio;
	
			options.charge(newCharge);
		}
	
		/**
		 * Resets the gravity sliders to their default.
		 */
		gravityMenu.reset = function () {
			sliders.forEach(function (slider) {
				slider.property("value", function (d) {
					// Simply reload the distance from the options
					return d.distanceFunction();
				});
				slider.on("input")();
			});
		};
	
	
		return gravityMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for connecting the modes with the website.
	 *
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var SAME_COLOR_MODE = {text: "Multicolor", type: "same"};
		var GRADIENT_COLOR_MODE = {text: "Multicolor", type: "gradient"};
	
		var modeMenu = {},
			checkboxes = [],
			colorModeSwitch;
	
		// getter and setter for the state of color modes
		modeMenu.colorModeState = function (s) {
			if (!arguments.length) return colorModeSwitch.datum().active;
			colorModeSwitch.datum().active = s;
			return modeMenu;
		};
	
		// getter for checkboxes
		modeMenu.getCheckBoxContainer = function () {
			return checkboxes;
		};
		// getter for the color switch [needed? ]
		modeMenu.colorModeSwitch = function () {
			return colorModeSwitch;
		};
	
		/**
		 * Connects the website with the available graph modes.
		 */
		modeMenu.setup = function (pickAndPin, nodeScaling, compactNotation, colorExternals) {
			var menuEntry= d3.select("#moduleOption");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			addModeItem(pickAndPin, "pickandpin", "Pick & pin", "#pickAndPinOption", false);
			addModeItem(nodeScaling, "nodescaling", "Node scaling", "#nodeScalingOption", true);
			addModeItem(compactNotation, "compactnotation", "Compact notation", "#compactNotationOption", true);
	
			var container = addModeItem(colorExternals, "colorexternals", "Color externals", "#colorExternalsOption", true);
			colorModeSwitch = addExternalModeSelection(container, colorExternals);
		};
	
		function addModeItem(module, identifier, modeName, selector, updateGraphOnClick) {
			var moduleOptionContainer,
				moduleCheckbox;
	
			moduleOptionContainer = d3.select(selector)
				.append("div")
				.classed("checkboxContainer", true)
				.datum({module: module, defaultState: module.enabled()});
	
			moduleCheckbox = moduleOptionContainer.append("input")
				.classed("moduleCheckbox", true)
				.attr("id", identifier + "ModuleCheckbox")
				.attr("type", "checkbox")
				.property("checked", module.enabled());
	
			// Store for easier resetting all modes
			checkboxes.push(moduleCheckbox);
	
			moduleCheckbox.on("click", function (d, silent) {
				var isEnabled = moduleCheckbox.property("checked");
				d.module.enabled(isEnabled);
				if (updateGraphOnClick && silent !== true) {
					graph.update();
				}
			});
	
			moduleOptionContainer.append("label")
				.attr("for", identifier + "ModuleCheckbox")
				.text(modeName);
	
			return moduleOptionContainer;
		}
	
		function addExternalModeSelection(container, colorExternalsMode) {
			var button = container.append("button").datum({active: false}).classed("color-mode-switch", true);
			applyColorModeSwitchState(button, colorExternalsMode);
	
			button.on("click", function (silent) {
				var data = button.datum();
				data.active = !data.active;
				applyColorModeSwitchState(button, colorExternalsMode);
				if (colorExternalsMode.enabled() && silent !== true) {
					graph.update();
				}
			});
	
			return button;
		}
	
		function applyColorModeSwitchState(element, colorExternalsMode) {
			var isActive = element.datum().active;
			var activeColorMode = getColorModeByState(isActive);
	
			element.classed("active", isActive)
				.text(activeColorMode.text);
	
			if (colorExternalsMode) {
				colorExternalsMode.colorModeType(activeColorMode.type);
			}
		}
	
		function getColorModeByState(isActive) {
			return isActive ? GRADIENT_COLOR_MODE : SAME_COLOR_MODE;
		}
	
		/**
		 * Resets the modes to their default.
		 */
		modeMenu.reset = function () {
			checkboxes.forEach(function (checkbox) {
				var defaultState = checkbox.datum().defaultState,
					isChecked = checkbox.property("checked");
	
				if (isChecked !== defaultState) {
					checkbox.property("checked", defaultState);
					// Call onclick event handlers programmatically
					checkbox.on("click")(checkbox.datum());
				}
	
				// Reset the module that is connected with the checkbox
				checkbox.datum().module.reset();
			});
	
			// set the switch to active and simulate disabling
			colorModeSwitch.datum().active = true;
			colorModeSwitch.on("click")();
		};
	
		/** importer functions **/
		// setting manually the values of the filter
		// no update of the gui settings, these are updated in updateSettings
		modeMenu.setCheckBoxValue = function (id, checked) {
			for (var i = 0; i < checkboxes.length; i++) {
				var cbdId = checkboxes[i].attr("id");
				if (cbdId === id) {
					checkboxes[i].property("checked", checked);
					break;
				}
			}
		};
	
		modeMenu.setColorSwitchState = function (state) {
			// need the !state because we simulate later a click
			modeMenu.colorModeState(!state);
		};
	
		modeMenu.updateSettings = function () {
			var silent = true;
			checkboxes.forEach(function (checkbox) {
				checkbox.on("click")(checkbox.datum(), silent);
			});
			// this simulates onclick and inverts its state
			colorModeSwitch.on("click")(silent);
		};
		return modeMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the pause and resume button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var pauseMenu = {},
			pauseButton;
	
	
		/**
		 * Adds the pause button to the website.
		 */
		pauseMenu.setup = function () {
			var menuEntry = d3.select("#pauseOption");
			menuEntry.on("mouseover", function () {
				var searchMenu = graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			pauseButton = d3.select("#pause-button")
				.datum({paused: false})
				.on("click", function (d) {
					graph.paused(!d.paused);
					d.paused = !d.paused;
					updatePauseButton();
					pauseButton.classed("highlighted", d.paused);
					graph.options().navigationMenu().updateVisibilityStatus();
				});
			// Set these properties the first time manually
			updatePauseButton();
		};
	
		pauseMenu.setPauseValue = function (value) {
			pauseButton.datum().paused = value;
			graph.paused(value);
			pauseButton.classed("highlighted", value);
			updatePauseButton();
		};
	
		function updatePauseButton() {
			updatePauseButtonClass();
			updatePauseButtonText();
		}
	
		function updatePauseButtonClass() {
			pauseButton.classed("paused", function (d) {
				return d.paused;
			});
		}
	
		function updatePauseButtonText() {
			if (pauseButton.datum().paused) {
				pauseButton.text("Resume");
			} else {
				pauseButton.text("Pause");
			}
		}
	
		pauseMenu.reset = function () {
			// resuming
			pauseMenu.setPauseValue(false);
		};
	
	
		return pauseMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the reset button.
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var resetMenu = {},
			options = graph.graphOptions(),
			resettableModules,
			untouchedOptions = webvowl.options();
	
	
		/**
		 * Adds the reset button to the website.
		 * @param _resettableModules modules that can be resetted
		 */
		resetMenu.setup = function (_resettableModules) {
			resettableModules = _resettableModules;
			d3.select("#reset-button").on("click", resetGraph);
			var menuEntry= d3.select("#resetOption");
			menuEntry.on("mouseover",function(){
				var searchMenu=graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
		};
	
		function resetGraph() {
			options.classDistance(untouchedOptions.classDistance());
			options.datatypeDistance(untouchedOptions.datatypeDistance());
			options.charge(untouchedOptions.charge());
			options.gravity(untouchedOptions.gravity());
			options.linkStrength(untouchedOptions.linkStrength());
			graph.reset();
	
			resettableModules.forEach(function (module) {
				module.reset();
			});
	
			graph.updateStyle();
		}
	
	
		return resetMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the search "engine"
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
		var searchMenu = {},
			dictionary = [],
			entryNames = [],
			searchLineEdit,
			dropDownContainer,
			mergedStringsList,
			mergedIdList,
			maxEntries = 6,
			dictionaryUpdateRequired = true,
			labelDictionary,
			inputText,
			viewStatusOfSearchEntries = false;
	
		String.prototype.beginsWith = function (string) {
			return(this.indexOf(string) === 0);
		};
	
		searchMenu.requestDictionaryUpdate = function () {
			dictionaryUpdateRequired = true;
			// clear possible pre searched entries
			var htmlCollection = dropDownContainer.node().children;
			var numEntries = htmlCollection.length;
	
			for (var i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
			searchLineEdit.node().value = "";
		};
	
	
		function updateSearchDictionary() {
			labelDictionary = graph.getUpdateDictionary();
			dictionaryUpdateRequired = false;
			dictionary = [];
			entryNames = [];
			var idList = [];
			var stringList = [];
	
			var i;
			for (i = 0; i < labelDictionary.length; i++) {
				var lEntry = labelDictionary[i].labelForCurrentLanguage();
				idList.push(labelDictionary[i].id());
				stringList.push(lEntry);
	
			}
			mergedStringsList = [];
			mergedIdList = [];
			var indexInStringList=-1;
			var currentString;
			var currentObjectId;
	
			for (i = 0; i < stringList.length; i++) {
				if (i === 0) {
					// just add the elements
					mergedStringsList.push(stringList[i]);
					mergedIdList.push([]);
					mergedIdList[0].push(idList[i]);
					continue;
				}
				else {
					currentString = stringList[i];
					currentObjectId = idList[i];
					indexInStringList = mergedStringsList.indexOf(currentString);
				}
				if (indexInStringList === -1) {
					mergedStringsList.push(stringList[i]);
					mergedIdList.push([]);
					var lastEntry = mergedIdList.length;
					mergedIdList[lastEntry - 1].push(currentObjectId);
				} else {
					mergedIdList[indexInStringList].push(currentObjectId);
				}
			}
	
			for (i = 0; i < mergedStringsList.length; i++) {
				var aString = mergedStringsList[i];
				var correspondingIdList = mergedIdList[i];
				var idListResult = "[ ";
				for (var j = 0; j < correspondingIdList.length; j++) {
					idListResult = idListResult + correspondingIdList[j].toString();
					idListResult = idListResult + ", ";
				}
				idListResult = idListResult.substring(0, idListResult.length - 2);
				idListResult = idListResult + " ]";
				if (correspondingIdList.length > 1)
					dictionary.push(aString + " (" + correspondingIdList.length + ")");
				else
					dictionary.push(aString);
				entryNames.push(aString);
			}
		}
	
		searchMenu.setup = function () {
			// clear dictionary;
			dictionary = [];
			searchLineEdit = d3.select("#search-input-text");
			dropDownContainer = d3.select("#searchEntryContainer");
			searchLineEdit.on("input", userInput);
			searchLineEdit.on("keydown", userNavigation);
			searchLineEdit.on("click", toggleSearchEntryView);
			searchLineEdit.on("mouseover", hoverSearchEntryView);
	        var locateButton= d3.select("#locateSearchResult");
	        locateButton.on("click",function(){
	            graph.locateSearchResult();
	        });
	
	        locateButton.on("mouseover",function(){
	            searchMenu.hideSearchEntries();
	        });
	
	    };
	
		function hoverSearchEntryView() {
			searchMenu.showSearchEntries();
		}
	
		function toggleSearchEntryView() {
			if (viewStatusOfSearchEntries) {
				searchMenu.hideSearchEntries();
			} else {
				searchMenu.showSearchEntries();
			}
		}
	
		searchMenu.hideSearchEntries = function () {
			dropDownContainer.style("display", "none");
			viewStatusOfSearchEntries = false;
		};
	
		searchMenu.showSearchEntries = function () {
			dropDownContainer.style("display", "block");
			viewStatusOfSearchEntries = true;
		};
	
		function ValidURL(str) {
			var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
			return urlregex.test(str);
	
		}
	
	
		function userNavigation() {
			if (dictionaryUpdateRequired) {
				updateSearchDictionary();
			}
	
			var htmlCollection = dropDownContainer.node().children;
			var numEntries = htmlCollection.length;
	
	
			var move = 0;
			var i;
			var selectedEntry = -1;
			for (i = 0; i < numEntries; i++) {
				var atr = htmlCollection[i].getAttribute('class');
				if (atr === "dbEntrySelected") {
					selectedEntry = i;
				}
			}
			if (d3.event.keyCode === 13) {
				if (selectedEntry >= 0 && selectedEntry < numEntries) {
					// simulate onClick event
					htmlCollection[selectedEntry].onclick();
					searchMenu.hideSearchEntries();
				}
				else if (numEntries===0){
					inputText = searchLineEdit.node().value;
					// check if input text ends or begins with with space
					// remove first spaces
					var clearedText=inputText.replace(/%20/g," ");
					while (clearedText.beginsWith(" ")){
						clearedText=clearedText.substr(1,clearedText.length);
					}
					// remove ending spaces
					while (clearedText.endsWith(" ")){
						clearedText=clearedText.substr(0,clearedText.length-1);
					}
					var iri=clearedText.replace(/ /g,"%20");
	
					var valid=ValidURL(iri);
					// validate url:
					if (valid){
						var ontM=graph.options().ontologyMenu();
						ontM.setIriText(iri);
						searchLineEdit.node().value="";
					}
					else{
						console.log(iri+" is not a valid URL!");
					}
				}
			}
			if (d3.event.keyCode === 38) {
				move = -1;
				searchMenu.showSearchEntries();
			}
			if (d3.event.keyCode === 40) {
				move = +1;
				searchMenu.showSearchEntries();
			}
	
			var newSelection = selectedEntry + move;
			if (newSelection !== selectedEntry) {
	
				if (newSelection < 0 && selectedEntry <= 0) {
					htmlCollection[0].setAttribute('class', "dbEntrySelected");
				}
	
				if (newSelection >= numEntries) {
					htmlCollection[selectedEntry].setAttribute('class', "dbEntrySelected");
				}
				if (newSelection >= 0 && newSelection < numEntries) {
					htmlCollection[newSelection].setAttribute('class', "dbEntrySelected");
					if (selectedEntry >= 0)
						htmlCollection[selectedEntry].setAttribute('class', "dbEntry");
				}
			}
		}
	
		function handleAutoCompletion() {
			/**  pre condition: autoCompletion has already a valid text**/
			var htmlCollection;
			var numEntries;
			inputText = searchLineEdit.node().value;
	
			var results = [];
			var resultID = [];
			var i;
			var lc_text = inputText.toLowerCase();
			var token;
	
			for (i = 0; i < dictionary.length; i++) {
				var tokenElement = dictionary[i];
				if (tokenElement === undefined){
					//@WORKAROUND : nodes with undefined labels are skipped
					//@FIX: these nodes are now not added to the dictionary
					continue;
				}
				token = dictionary[i].toLowerCase();
				if (token.indexOf(lc_text) > -1) {
					results.push(dictionary[i]);
					resultID.push(i);
				}
			}
	
			// update the entries in the gui
			htmlCollection = dropDownContainer.node().children;
			numEntries = htmlCollection.length;
			for (i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
	
	
			// reorder the results and its ids
			//******************************************
			// create a copy of results;;
			var copyRes = results;
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
	
			var newResults = [];
			var newResultsIds = [];
	
			for (i = 0; i < numEntries; i++) {
				// search for the best entry
				var indexElement  = 1000000;
				var lengthElement = 1000000;
				var bestElement = -1;
				for (var j = 0; j < copyRes.length; j++) {
					token = copyRes[j].toLowerCase();
					var tIe = token.indexOf(lc_text);
					var tLe = token.length;
					if (tIe > -1 && tIe <= indexElement && tLe <= lengthElement) {
						bestElement = j;
						indexElement = tIe;
						lengthElement = tLe;
					}
				}
				newResults.push(copyRes[bestElement]);
				newResultsIds.push(resultID[bestElement]);
				copyRes[bestElement] = "";
			}
	
			// add the results to the entry menu
			//******************************************
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
			for (i = 0; i < numEntries; i++) {
				//add results to the dropdown menu
				var testEntry = document.createElement('li');
				testEntry.setAttribute('elementID', newResultsIds[i]);
				testEntry.onclick= handleClick (newResultsIds[i]);
				testEntry.setAttribute('class', "dbEntry");
				var createAText = document.createTextNode(newResults[i]);
				testEntry.appendChild(createAText);
				dropDownContainer.node().appendChild(testEntry);
			}
		}
	
		function userInput() {
	
			if (dictionaryUpdateRequired) {
				updateSearchDictionary();
			}
			graph.resetSearchHighlight();
	
			if (dictionary.length === 0) {
				console.log("dictionary is empty");
				return;
			}
			var i;
			var htmlCollection = dropDownContainer.node().children;
			var numEntries = htmlCollection.length;
			inputText = searchLineEdit.node().value;
			d3.select("#locateSearchResult").classed("highlighted", false);
	        d3.select("#locateSearchResult").node().title="Nothing to locate, enter search term.";
			if (inputText.length === 0) {
				for (i = 0; i < numEntries; i++)
					htmlCollection[0].remove();
	
				return;
			}
			// search in list
			var results = [];
			var resultID = [];
	
			var lc_text = inputText.toLowerCase();
			var token;
	
			for (i = 0; i < dictionary.length; i++) {
				var tokenElement = dictionary[i];
				if (tokenElement === undefined){
					//@WORKAROUND : nodes with undefined labels are skipped
					//@FIX: these nodes are now not added to the dictionary
					continue;
				}
				token = dictionary[i].toLowerCase();
				if (token.indexOf(lc_text) > -1) {
					results.push(dictionary[i]);
					resultID.push(i);
				}
			}
	
			//clear the list;
			htmlCollection = dropDownContainer.node().children;
			numEntries = htmlCollection.length;
			for (i = 0; i < numEntries; i++)
				htmlCollection[0].remove();
	
			// reorder the results and its ids
			//******************************************
			// create a copy of results;;
			var copyRes = results;
			numEntries = results.length;
			if (numEntries > maxEntries)
				numEntries = maxEntries;
	
	
			var newResults = [];
			var newResultsIds = [];
	
			for (i = 0; i < numEntries; i++) {
				// search for the best entry
				var indexElement  = 100000000;
				var lengthElement = 100000000;
				var bestElement = -1;
				for (var j = 0; j < copyRes.length; j++) {
					token = copyRes[j].toLowerCase();
					var tIe = token.indexOf(lc_text);
					var tLe = token.length;
					if (tIe > -1 && tIe <= indexElement && tLe <= lengthElement) {
						bestElement = j;
						indexElement = tIe;
						lengthElement = tLe;
					}
				}
				newResults.push(copyRes[bestElement]);
				newResultsIds.push(resultID[bestElement]);
				copyRes[bestElement] = "";
			}
	
			// add the results to the entry menu
			//******************************************
			for (i = 0; i < numEntries; i++) {
				//add results to the dropdown menu
				var testEntry;
				testEntry= document.createElement('li');
				testEntry.setAttribute('elementID', newResultsIds[i]);
				testEntry.setAttribute('class', "dbEntry");
				testEntry.onclick= handleClick (newResultsIds[i]);
				var createAText = document.createTextNode(newResults[i]);
				testEntry.appendChild(createAText);
				dropDownContainer.node().appendChild(testEntry);
			}
			searchMenu.showSearchEntries();
		}
	
		function handleClick(elementId){
	
			return function(){
				var id = elementId;
				var correspondingIds = mergedIdList[id];
	
				// autoComplete the text for the user
				var autoComStr = entryNames[id];
				searchLineEdit.node().value = autoComStr;
	
				graph.resetSearchHighlight();
				graph.highLightNodes(correspondingIds);
	            d3.select("#locateSearchResult").node().title="Locate search term";
				if (autoComStr !== inputText) {
					handleAutoCompletion();
				}
				searchMenu.hideSearchEntries();
			};
		}
	
		searchMenu.clearText=function(){
			searchLineEdit.node().value="";
	        d3.select("#locateSearchResult").classed("highlighted", false);
	        d3.select("#locateSearchResult").node().title="Nothing to locate, enter search term.";
			var htmlCollection = dropDownContainer.node().children;
			var numEntries = htmlCollection.length;
			for (var i = 0; i < numEntries; i++){
				htmlCollection[0].remove();
			}
		};
	
		return searchMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the navigation "engine"
	 *
	 * @param graph the associated webvowl graph
	 * @returns {{}}
	 */
	module.exports = function (graph) {
		var navigationMenu = {},
			allMenuEntries = [],
			visibleEntries = [],
			objectContainer = d3.select("#optionsMenu"),
			buttonLeft = d3.select("#LeftButton"),
			buttonRight = d3.select("#RightButton");
	
		navigationMenu.setup = function () {
			var objects = objectContainer.node().children;
			var i;
			for (i = 0; i < objects.length; i++) {
				allMenuEntries.push(objects[i]);
			}
			setupButtons();
			for (i = 0; i < allMenuEntries.length - 2; i++) {
				allMenuEntries[i].style.display = "block";
				visibleEntries[i] = 1;
			}
		};
	
		function setupButtons() {
			buttonLeft.on("mouseover", function () {
				var searchMenu = graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
			buttonRight.on("mouseover", function () {
				var searchMenu = graph.options().searchMenu();
				searchMenu.hideSearchEntries();
			});
	
			buttonLeft.on("click", function () {
				var i;
				var currentTopValue;
				var objTopValue;
				if (visibleEntries[0] === 1) {
					return;
				} else {
					var elementToShow = visibleEntries.indexOf(1) - 1;
					var anchorLeft = visibleEntries.indexOf(1);
					for (i = anchorLeft + 1; i < visibleEntries.length; i++) {
						visibleEntries[i] = 0;
						allMenuEntries[i].style.display = "none";
					}
					visibleEntries[elementToShow] = 1;
					allMenuEntries[elementToShow].style.display = "block";
					// try to fill from right now;
					for (i = anchorLeft + 1; i < visibleEntries.length; i++) {
						visibleEntries[i] = 0;
						allMenuEntries[i].style.display = "block";
						currentTopValue = allMenuEntries[elementToShow].getBoundingClientRect().top;
						objTopValue = allMenuEntries[i].getBoundingClientRect().top;
						if (currentTopValue === objTopValue) {
							visibleEntries[i] = 1;
						} else {
							allMenuEntries[i].style.display = "none";
							visibleEntries[i] = 0;
							break;
						}
					}
				 	// repair if needed;
					checkArrowRequirement();
	
					var bothVisible=checkBothArrows();
					var lastIndex=visibleEntries.lastIndexOf(1);
	
					if (!bothVisible){
						// disable the last entry;
						visibleEntries[lastIndex]=0;
						allMenuEntries[lastIndex].style.display="none";
					}
	
					 	// try to fill from left ; now
					var anchorRight=visibleEntries.lastIndexOf(1);
					for (i=anchorRight-1;i>=0;i--){
						visibleEntries[i]=0;
						allMenuEntries[i].style.display="block";
						currentTopValue = allMenuEntries[elementToShow].getBoundingClientRect().top;
						objTopValue= allMenuEntries[i].getBoundingClientRect().top;
						if (currentTopValue===objTopValue){
							visibleEntries[i]=1;
						}else{
							allMenuEntries[i].style.display="none";
							visibleEntries[i]=0;
							break;
						}
					}
					// repair if needed;
					checkArrowRequirement();
					bothVisible=checkBothArrows();
					if (!bothVisible){
						// disable the last entry;
						lastIndex=visibleEntries.indexOf(1);
						if (lastIndex!==-1) {
							visibleEntries[lastIndex] = 0;
							allMenuEntries[lastIndex].style.display = "none";
						}
					}
					// todo: check why we need 3 times this;
					checkArrowRequirement();
					bothVisible=checkBothArrows();
					if (!bothVisible){
						// disable the last entry;
						lastIndex=visibleEntries.indexOf(1);
						if (lastIndex!==-1) {
							visibleEntries[lastIndex] = 0;
							allMenuEntries[lastIndex].style.display = "none";
						}
					}
					checkArrowRequirement();
					bothVisible=checkBothArrows();
					if (!bothVisible){
						// disable the last entry;
						lastIndex=visibleEntries.indexOf(1);
						if (lastIndex!==-1) {
							visibleEntries[lastIndex] = 0;
							allMenuEntries[lastIndex].style.display = "none";
						}
					}
					checkArrowRequirement();
				}
	   		    setArrowHighlighting();
			});
			buttonRight.on("click", function () {
				// set the first 0 to zero;
				// check if last element is 1;
				if (visibleEntries[visibleEntries.length - 1] === 1) {
					return;
				} else {
					var elementToShow=visibleEntries.lastIndexOf(1)+1;
	
					var anchorRight=visibleEntries.lastIndexOf(1);
					// hide everything from anchorRight
					var i;
					for (i=anchorRight-1;i>=0;i--){
						visibleEntries[i]=0;
						allMenuEntries[i].style.display="none";
					}
					visibleEntries[elementToShow]=1;
					allMenuEntries[elementToShow].style.display="block";
	
					for (i=anchorRight-1;i>=0;i--){
						visibleEntries[i]=0;
						allMenuEntries[i].style.display="block";
	
						var currentTopValue = allMenuEntries[elementToShow].getBoundingClientRect().top;
						var objTopValue= allMenuEntries[i].getBoundingClientRect().top;
						if (currentTopValue===objTopValue){
							visibleEntries[i]=1;
						}else{
							allMenuEntries[i].style.display="none";
							visibleEntries[i]=0;
							break;
						}
	
					}
					// repair if needed;
					checkArrowRequirement();
					var bothVisible=checkBothArrows();
					if (!bothVisible){
						// disable the last entry;
						var lastIndex=visibleEntries.indexOf(1);
						if (lastIndex!==-1) {
							visibleEntries[lastIndex] = 0;
							allMenuEntries[lastIndex].style.display = "none";
						}
					}
				}
				setArrowHighlighting();
			});
		}
	
	
		navigationMenu.updateVisibilityStatus = function () {
			// assumptions:
			// about is always first element, we take its top pos
			// we neglect the last 2 value because it is the arrow object
			var i;
			var firstOne = visibleEntries.indexOf(1);
			if (firstOne===-1){
				fillFromBeginning();
				firstOne = visibleEntries.indexOf(1);
			}
			var currentTopValue = allMenuEntries[firstOne].getBoundingClientRect().top;
			var objTopValue;
			for (i = 0; i < allMenuEntries.length - 2; i++) {
				objTopValue = allMenuEntries[i].getBoundingClientRect().top;
	
				if (objTopValue === currentTopValue) {
					visibleEntries[i] = 1;
				} else {
					visibleEntries[i] = 0;
					allMenuEntries[i].style.display = "none";
				}
			}
			// get anchors;
			var anchorLeft=visibleEntries.indexOf(1);
			var anchorRight=visibleEntries.lastIndexOf(1);
	
			if (anchorLeft===-1 && anchorRight===-1){
				fillFromBeginning();
				anchorLeft=visibleEntries.indexOf(1);
				anchorRight=visibleEntries.lastIndexOf(1);
			}
			// try to add more entries;
			for (i = anchorLeft+1; i < allMenuEntries.length - 2; i++) {
				// enable the value;
				allMenuEntries[i].style.display="block";
				currentTopValue = allMenuEntries[anchorLeft].getBoundingClientRect().top;
				objTopValue= allMenuEntries[i].getBoundingClientRect().top;
	
				if (currentTopValue===objTopValue){
					visibleEntries[i]=1;
				}else{
					allMenuEntries[i].style.display="none";
					visibleEntries[i]=0;
					break;
				}
			}
			checkArrowRequirement();
	
			var bothVisible=checkBothArrows();
			var lastIndex;
			if (!bothVisible && anchorLeft===0){
				// disable the last entry;
				lastIndex=visibleEntries.lastIndexOf(1);
				if (lastIndex!==-1) {
					visibleEntries[lastIndex] = 0;
					allMenuEntries[lastIndex].style.display="none";
				}
			}
	
			if (anchorLeft!==0 || anchorRight!==visibleEntries.length){
				 //try to add elements to menu
				anchorRight=visibleEntries.lastIndexOf(1);
	
				if (anchorRight>=1){
					// hide everything from anchorRight
					for (i=anchorRight-1;i>=0;i--){
						visibleEntries[i]=0;
						allMenuEntries[i].style.display="none";
					}
					for (i=anchorRight-1;i>=0;i--) {
						visibleEntries[i] = 0;
						allMenuEntries[i].style.display = "block";
	
						currentTopValue = allMenuEntries[anchorRight].getBoundingClientRect().top;
						objTopValue = allMenuEntries[i].getBoundingClientRect().top;
						if (currentTopValue === objTopValue) {
							visibleEntries[i] = 1;
						} else {
							allMenuEntries[i].style.display = "none";
							visibleEntries[i] = 0;
							break;
						}
					}
				}
				// repair if needed;
				checkArrowRequirement();
				bothVisible=checkBothArrows();
				if (!bothVisible){
					// disable the last entry;
					lastIndex=visibleEntries.indexOf(1);
					if (lastIndex!==-1) {
						visibleEntries[lastIndex] = 0;
						allMenuEntries[lastIndex].style.display = "none";
					}
				}
			}
			// sanity check
			if (visibleEntries.indexOf(1)===-1){
				fillFromBeginning();
			}
	
			setArrowHighlighting();
		};
	
		function fillFromBeginning() {
			visibleEntries[0]=1;
			allMenuEntries[0].style.display="block";
		}
	
		function checkArrowRequirement(){
			// hides if not needed
			var leftArrowId = allMenuEntries.length - 2;
			var rightArrowId = allMenuEntries.length - 1;
			allMenuEntries[leftArrowId].style.display = "none";
			allMenuEntries[rightArrowId].style.display = "none";
			if (visibleEntries.indexOf(0) !== -1) {
				allMenuEntries[leftArrowId].style.display = "block";
				allMenuEntries[rightArrowId].style.display = "block";
			}
		}
	
		function checkBothArrows(){
			if (visibleEntries.indexOf(0) === -1) {
				return true; // no need to show them
			}
			var leftArrowId = allMenuEntries.length - 2;
			var rightArrowId = allMenuEntries.length - 1;
			var firstElement=visibleEntries.indexOf(1);
			if (firstElement===-1){
				fillFromBeginning(); // panic: no elements are visible
				firstElement=visibleEntries.indexOf(1);
			}
	
			var currentTopValue = allMenuEntries[firstElement].getBoundingClientRect().top;
			var leftTopValue= allMenuEntries[leftArrowId].getBoundingClientRect().top;
			var rightTopValue= allMenuEntries[rightArrowId].getBoundingClientRect().top;
	
			allMenuEntries[leftArrowId].style.display = "block";
			allMenuEntries[rightArrowId].style.display = "block";
	
			var bothVisible=false;
			if (currentTopValue===leftTopValue && currentTopValue === rightTopValue){
				bothVisible=true;
			}
			return bothVisible;
		}
	
	
		function setArrowHighlighting() {
			if (visibleEntries[visibleEntries.length - 1] !== 1) {
				buttonRight.classed("highlighted", true);
			} else {
				buttonRight.classed("highlighted", false);
			}
			if (visibleEntries[0] !== 1) {
				buttonLeft.classed("highlighted", true);
			} else {
				buttonLeft.classed("highlighted", false);
			}
		}
	
		return navigationMenu;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(d3) {/**
	 * Contains the logic for the sidebar.
	 * @param graph the graph that belongs to these controls
	 * @returns {{}}
	 */
	module.exports = function (graph) {
	
		var sidebar = {},
			languageTools = webvowl.util.languageTools(),
			elementTools = webvowl.util.elementTools(),
		// Required for reloading when the language changes
			ontologyInfo,
			lastSelectedElement;
	
	
		/**
		 * Setup the menu bar.
		 */
		sidebar.setup = function () {
			setupCollapsing();
		};
	
		function setupCollapsing() {
			// adapted version of this example: http://www.normansblog.de/simple-jquery-accordion/
			function collapseContainers(containers) {
				containers.classed("hidden", true);
			}
	
			function expandContainers(containers) {
				containers.classed("hidden", false);
			}
	
			var triggers = d3.selectAll(".accordion-trigger");
	
			// Collapse all inactive triggers on startup
			collapseContainers(d3.selectAll(".accordion-trigger:not(.accordion-trigger-active) + div"));
	
			triggers.on("click", function () {
				var selectedTrigger = d3.select(this),
					activeTriggers = d3.selectAll(".accordion-trigger-active");
	
				if (selectedTrigger.classed("accordion-trigger-active")) {
					// Collapse the active (which is also the selected) trigger
					collapseContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", false);
				} else {
					// Collapse the other trigger ...
					collapseContainers(d3.selectAll(".accordion-trigger-active + div"));
					activeTriggers.classed("accordion-trigger-active", false);
					// ... and expand the selected one
					expandContainers(d3.select(selectedTrigger.node().nextElementSibling));
					selectedTrigger.classed("accordion-trigger-active", true);
				}
			});
		}
	
		sidebar.clearOntologyInformation= function(){
	
			d3.select("#title").text("No title available");
			d3.select("#about").attr("href", "#").attr("target", "_blank").text("not given");
			d3.select("#version").text("--");
			d3.select("#authors").text("--");
			d3.select("#description").text("No description available.");
			var container = d3.select("#ontology-metadata");
			container.selectAll("*").remove();
			d3.select("#classCount")
				.text("0");
			d3.select("#objectPropertyCount")
				.text("0");
			d3.select("#datatypePropertyCount")
				.text("0");
			d3.select("#individualCount")
				.text("0");
			d3.select("#nodeCount")
				.text("0");
			d3.select("#edgeCount")
				.text("0");
	
			// clear selectedNode info
			var isTriggerActive = d3.select("#selection-details-trigger").classed("accordion-trigger-active");
			if (isTriggerActive){
				// close accordion
				d3.select("#selection-details-trigger").node().click();
			}
			showSelectionAdvice();
	
		};
	
		/**
		 * Updates the information of the passed ontology.
		 * @param data the graph data
		 * @param statistics the statistics module
		 */
		sidebar.updateOntologyInformation = function (data, statistics) {
			data = data || {};
			ontologyInfo = data.header || {};
	
			updateGraphInformation();
			displayGraphStatistics(data.metrics, statistics);
			displayMetadata(ontologyInfo.other);
	
			// Reset the sidebar selection
			sidebar.updateSelectionInformation(undefined);
	
			setLanguages(ontologyInfo.languages);
		};
	
		function setLanguages(languages) {
			languages = languages || [];
	
			// Put the default and unset label on top of the selection labels
			languages.sort(function (a, b) {
				if (a === webvowl.util.constants().LANG_IRIBASED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_IRIBASED) {
					return 1;
				}
				if (a === webvowl.util.constants().LANG_UNDEFINED) {
					return -1;
				} else if (b === webvowl.util.constants().LANG_UNDEFINED) {
					return 1;
				}
				return a.localeCompare(b);
			});
	
			var languageSelection = d3.select("#language")
				.on("change", function () {
					graph.language(d3.event.target.value);
					updateGraphInformation();
					sidebar.updateSelectionInformation(lastSelectedElement);
				});
	
			languageSelection.selectAll("option").remove();
			languageSelection.selectAll("option")
				.data(languages)
				.enter().append("option")
				.attr("value", function (d) {
					return d;
				})
				.text(function (d) {
					return d;
				});
	
			if (!trySelectDefaultLanguage(languageSelection, languages, "en")) {
				if (!trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_UNDEFINED)) {
					trySelectDefaultLanguage(languageSelection, languages, webvowl.util.constants().LANG_IRIBASED);
				}
			}
		}
	
		function trySelectDefaultLanguage(selection, languages, language) {
			var langIndex = languages.indexOf(language);
			if (langIndex >= 0) {
				selection.property("selectedIndex", langIndex);
				graph.language(language);
				return true;
			}
	
			return false;
		}
	
		function updateGraphInformation() {
			var title = languageTools.textInLanguage(ontologyInfo.title, graph.language());
			d3.select("#title").text(title || "No title available");
			d3.select("#about").attr("href", ontologyInfo.iri).attr("target", "_blank").text(ontologyInfo.iri);
			d3.select("#version").text(ontologyInfo.version || "--");
			var authors = ontologyInfo.author;
			if (typeof authors === "string") {
				// Stay compatible with author info as strings after change in january 2015
				d3.select("#authors").text(authors);
			} else if (authors instanceof Array) {
				d3.select("#authors").text(authors.join(", "));
			} else {
				d3.select("#authors").text("--");
			}
	
			var description = languageTools.textInLanguage(ontologyInfo.description, graph.language());
			d3.select("#description").text(description || "No description available.");
		}
	
		function displayGraphStatistics(deliveredMetrics, statistics) {
			// Metrics are optional and may be undefined
			deliveredMetrics = deliveredMetrics || {};
	
			d3.select("#classCount")
				.text(deliveredMetrics.classCount || statistics.classCount());
			d3.select("#objectPropertyCount")
				.text(deliveredMetrics.objectPropertyCount || statistics.objectPropertyCount());
			d3.select("#datatypePropertyCount")
				.text(deliveredMetrics.datatypePropertyCount || statistics.datatypePropertyCount());
			d3.select("#individualCount")
				.text(deliveredMetrics.totalIndividualCount || statistics.totalIndividualCount());
			d3.select("#nodeCount")
				.text(statistics.nodeCount());
			d3.select("#edgeCount")
				.text(statistics.edgeCount());
		}
	
		function displayMetadata(metadata) {
			var container = d3.select("#ontology-metadata");
			container.selectAll("*").remove();
	
			listAnnotations(container, metadata);
	
			if (container.selectAll(".annotation").size() <= 0) {
				container.append("p").text("No annotations available.");
			}
		}
	
		function listAnnotations(container, annotationObject) {
			annotationObject = annotationObject || {};  //todo
	
			// Collect the annotations in an array for simpler processing
			var annotations = [];
			for (var annotation in annotationObject) {
				if (annotationObject.hasOwnProperty(annotation)) {
					annotations.push(annotationObject[annotation][0]);
				}
			}
	
			container.selectAll(".annotation").remove();
			container.selectAll(".annotation").data(annotations).enter().append("p")
				.classed("annotation", true)
				.classed("statisticDetails", true)
				.text(function (d) {
					return d.identifier + ":";
				})
				.append("span")
				.each(function (d) {
					appendIriLabel(d3.select(this), d.value, d.type === "iri" ? d.value : undefined);
				});
		}
	
		/**
		 * Update the information of the selected node.
		 * @param selectedElement the selection or null if nothing is selected
		 */
		sidebar.updateSelectionInformation = function (selectedElement) {
			lastSelectedElement = selectedElement;
	
			// Click event was prevented when dragging
			if (d3.event && d3.event.defaultPrevented) {
				return;
			}
	
	
			var isTriggerActive = d3.select("#selection-details-trigger").classed("accordion-trigger-active");
			if (selectedElement && !isTriggerActive) {
				d3.select("#selection-details-trigger").node().click();
			} else if (!selectedElement && isTriggerActive) {
				showSelectionAdvice();
				return;
			}
	
			if (elementTools.isProperty(selectedElement)) {
				displayPropertyInformation(selectedElement);
			} else if (elementTools.isNode(selectedElement)) {
				displayNodeInformation(selectedElement);
			}
		};
	
		function showSelectionAdvice() {
			setSelectionInformationVisibility(false, false, true);
		}
	
		function setSelectionInformationVisibility(showClasses, showProperties, showAdvice) {
			d3.select("#classSelectionInformation").classed("hidden", !showClasses);
			d3.select("#propertySelectionInformation").classed("hidden", !showProperties);
			d3.select("#noSelectionInformation").classed("hidden", !showAdvice);
		}
	
		function displayPropertyInformation(property) {
			showPropertyInformations();
	
			setIriLabel(d3.select("#propname"), property.labelForCurrentLanguage(), property.iri());
			d3.select("#typeProp").text(property.type());
	
			if (property.inverse() !== undefined) {
				d3.select("#inverse").classed("hidden", false);
				setIriLabel(d3.select("#inverse span"), property.inverse().labelForCurrentLanguage(), property.inverse().iri());
			} else {
				d3.select("#inverse").classed("hidden", true);
			}
	
			var equivalentIriSpan = d3.select("#propEquivUri");
			listNodeArray(equivalentIriSpan, property.equivalents());
	
			listNodeArray(d3.select("#subproperties"), property.subproperties());
			listNodeArray(d3.select("#superproperties"), property.superproperties());
	
			if (property.minCardinality() !== undefined) {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", false);
				d3.select("#minCardinality span").text(property.minCardinality());
				d3.select("#maxCardinality").classed("hidden", false);
	
				if (property.maxCardinality() !== undefined) {
					d3.select("#maxCardinality span").text(property.maxCardinality());
				} else {
					d3.select("#maxCardinality span").text("*");
				}
	
			} else if (property.cardinality() !== undefined) {
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
				d3.select("#infoCardinality").classed("hidden", false);
				d3.select("#infoCardinality span").text(property.cardinality());
			} else {
				d3.select("#infoCardinality").classed("hidden", true);
				d3.select("#minCardinality").classed("hidden", true);
				d3.select("#maxCardinality").classed("hidden", true);
			}
	
			setIriLabel(d3.select("#domain"), property.domain().labelForCurrentLanguage(), property.domain().iri());
			setIriLabel(d3.select("#range"), property.range().labelForCurrentLanguage(), property.range().iri());
	
			displayAttributes(property.attributes(), d3.select("#propAttributes"));
	
			setTextAndVisibility(d3.select("#propDescription"), property.descriptionForCurrentLanguage());
			setTextAndVisibility(d3.select("#propComment"), property.commentForCurrentLanguage());
	
			listAnnotations(d3.select("#propertySelectionInformation"), property.annotations());
		}
	
		function showPropertyInformations() {
			setSelectionInformationVisibility(false, true, false);
		}
	
		function setIriLabel(element, name, iri) {
			var parent = d3.select(element.node().parentNode);
	
			if (name) {
				element.selectAll("*").remove();
				appendIriLabel(element, name, iri);
				parent.classed("hidden", false);
			} else {
				parent.classed("hidden", true);
			}
		}
	
		function appendIriLabel(element, name, iri) {
			var tag;
	
			if (iri) {
				tag = element.append("a")
					.attr("href", iri)
					.attr("title", iri)
					.attr("target", "_blank");
			} else {
				tag = element.append("span");
			}
			tag.text(name);
		}
	
		function displayAttributes(attributes, textSpan) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (attributes && attributes.length > 0) {
				// Remove redundant redundant attributes for sidebar
				removeElementFromArray("object", attributes);
				removeElementFromArray("datatype", attributes);
				removeElementFromArray("rdf", attributes);
			}
	
			if (attributes && attributes.length > 0) {
				textSpan.text(attributes.join(", "));
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function removeElementFromArray(element, array) {
			var index = array.indexOf(element);
			if (index > -1) {
				array.splice(index, 1);
			}
		}
	
		function displayNodeInformation(node) {
			showClassInformations();
	
			setIriLabel(d3.select("#name"), node.labelForCurrentLanguage(), node.iri());
	
			/* Equivalent stuff. */
			var equivalentIriSpan = d3.select("#classEquivUri");
			listNodeArray(equivalentIriSpan, node.equivalents());
	
			d3.select("#typeNode").text(node.type());
			listNodeArray(d3.select("#individuals"), node.individuals());
	
			/* Disjoint stuff. */
			var disjointNodes = d3.select("#disjointNodes");
			var disjointNodesParent = d3.select(disjointNodes.node().parentNode);
	
			if (node.disjointWith() !== undefined) {
				disjointNodes.selectAll("*").remove();
	
				node.disjointWith().forEach(function (element, index) {
					if (index > 0) {
						disjointNodes.append("span").text(", ");
					}
					appendIriLabel(disjointNodes, element.labelForCurrentLanguage(), element.iri());
				});
	
				disjointNodesParent.classed("hidden", false);
			} else {
				disjointNodesParent.classed("hidden", true);
			}
	
			displayAttributes(node.attributes(), d3.select("#classAttributes"));
	
			setTextAndVisibility(d3.select("#nodeDescription"), node.descriptionForCurrentLanguage());
			setTextAndVisibility(d3.select("#nodeComment"), node.commentForCurrentLanguage());
	
			listAnnotations(d3.select("#classSelectionInformation"), node.annotations());
		}
	
		function showClassInformations() {
			setSelectionInformationVisibility(true, false, false);
		}
	
		function listNodeArray(textSpan, nodes) {
			var spanParent = d3.select(textSpan.node().parentNode);
	
			if (nodes && nodes.length) {
				textSpan.selectAll("*").remove();
				nodes.forEach(function (element, index) {
					if (index > 0) {
						textSpan.append("span").text(", ");
					}
					appendIriLabel(textSpan, element.labelForCurrentLanguage(), element.iri());
				});
	
				spanParent.classed("hidden", false);
			} else {
				spanParent.classed("hidden", true);
			}
		}
	
		function setTextAndVisibility(label, value) {
			var parentNode = d3.select(label.node().parentNode);
			var hasValue = !!value;
			if (value) {
				label.text(value);
			}
			parentNode.classed("hidden", !hasValue);
		}
	
	
		return sidebar;
	};
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ })

/******/ });
//# sourceMappingURL=webvowl.app.js.map
/*
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
Description: A plugin that adds all the necessary microdata to your recipes, so they will show up in Google's Recipe Search
Version: 2.6
Author: ZipList.com
Author URI: http://www.ziplist.com/
License: CC 3.0 http://creativecommons.org/licenses/by/3.0/

Copyright 2011, 2012 ZipList, Inc.
This code is derived from an example provided by Ulrik D. Hansen and licensed under the Creative Commons Attribution License.
You can see the original post at http://www.808.dk/?code-javascript-print
*/

/*
    This section refers to any extensions made to the original work.

    This file is part of ZipList Recipe Plugin.

    ZipList Recipe Plugin is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    ZipList Recipe Plugin is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with ZipList Recipe Plugin. If not, see <http://www.gnu.org/licenses/>.
*/

var win=null;
function zlrPrint(id)
{
	var content = document.getElementById(id).innerHTML;
	win = window.open();
	self.focus();
	win.document.open();
	win.document.write('<html><head>');
	win.document.write('<link charset=\'utf-8\' href=\'http://www.zlcdn.com/stylesheets/minibox/zlrecipe-print.css\' rel=\'stylesheet\' type=\'text/css\' />');
	/* win.document.write('<link charset=\'utf-8\' href=\'http://dev.ziplist.com.s3.amazonaws.com/zlrecipe-print.css\' rel=\'stylesheet\' type=\'text/css\' />'); */
	win.document.write('</head><body onload="print();">');
	win.document.write('<div id=\'zlrecipe-print-container\' >');
	win.document.write(content);
	win.document.write('</div>');
	win.document.write('</body></html>');
	win.document.close();
}

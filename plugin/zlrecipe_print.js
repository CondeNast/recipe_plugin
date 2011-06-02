/*
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Description: A plugin that adds all the necessary microdata to your recipes, so they will show up in Google's Recipe Search
Version: 0.9
Author: ZipList.com
Author URI: http://www.ziplist.com/
License: CC 3.0 http://creativecommons.org/licenses/by/3.0/

This code is derived from an example provided by Ulrik D. Hansen and licensed under the Creative Commons Attribution License.
You can see the original post at http://www.808.dk/?code-javascript-print
*/

/*
This section refers to any extensions made to the original work.

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

var win=null;
function zlrPrint(id)
{
	var content = document.getElementById(id).innerHTML;
	win = window.open();
	self.focus();
	win.document.open();
	win.document.write('<html><head>');
	// win.document.write('<link charset=\'utf-8\' href=\'http://www.zlcdn.com/stylesheets/minibox/zlrecipe-print.css\' rel=\'stylesheet\' type=\'text/css\' />');
	win.document.write('<link charset=\'utf-8\' href=\'http://test.images.ziplist.com.s3.amazonaws.com/recipe_plugin/zlrecipe-print.css\' rel=\'stylesheet\' type=\'text/css\' />');
	win.document.write('</head><body>');
	win.document.write('<div id=\'zlrecipe-page-container\' ><div id=\'zlrecipe-print-container\' >');
	win.document.write(content);
	win.document.write('</div></div>');
	win.document.write('</body></html>');
	win.document.close();
	win.print();
	// win.close();
}

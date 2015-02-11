/*
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
Description: A plugin that adds all the necessary microdata to your recipes, so they will show up in Google's Recipe Search
Version: 3.1
Author: ZipList.com
Author URI: http://www.ziplist.com/
License: GPLv3 or later

Copyright 2011, 2012, 2013, 2014 ZipList, Inc.
This code is derived from the 1.3.1 build of RecipeSEO released by codeswan: http://sushiday.com/recipe-seo-plugin/
*/

/*
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

(function() {

	tinymce.create('tinymce.plugins.amdEditZLRecipe', {
		init: function( editor, url ) {
			var t = this;
			t.url = url;

			//replace shortcode before editor content set
			editor.onBeforeSetContent.add(function(ed, o) {
				o.content = t._convert_codes_to_imgs(o.content);
			});

			/* FIXME
			editor.on('BeforeSetcontent', function(event){
				//console.log(event);
				event.content = t._convert_codes_to_imgs(event.content);
				//console.log('post');
			});
			*/

			//replace shortcode as its inserted into editor (which uses the exec command)
			editor.onExecCommand.add(function(ed, cmd) {
				if (cmd ==='mceInsertContent') {
					var bm = tinyMCE.activeEditor.selection.getBookmark();
					tinyMCE.activeEditor.setContent( t._convert_codes_to_imgs(tinyMCE.activeEditor.getContent()) );
					tinyMCE.activeEditor.selection.moveToBookmark(bm);
				}
			});

			/* FIXME
			editor.on('ExecCommand', function(e) {
				console.log('ExecCommand event', e);
				something happens
			});
			*/

			//replace the image back to shortcode on save
			editor.onPostProcess.add(function(ed, o) {
				if (o.get)
					o.content = t._convert_imgs_to_codes(o.content);
			});

			editor.addButton( 'amdzlrecipe', {
				title: 'ZipList Recipe',
				image: url + '/zlrecipe.png',
				onclick: function() {
					var recipe_id = null;
					if (recipe = editor.dom.select('img.amd-zlrecipe-recipe')[0]) {
						editor.selection.select(recipe);
						recipe_id = /amd-zlrecipe-recipe-([0-9]+)/i.exec(editor.selection.getNode().id);
					}
					var iframe_url = baseurl + '/wp-admin/media-upload.php?post_id=' + ((recipe_id) ? '1-' + recipe_id[1] : zl_post_id) + '&type=amd_zlrecipe&tab=amd_zlrecipe&TB_iframe=true&width=640&height=523';
					editor.windowManager.open( {
						title: 'Edit Recipe',
						url: iframe_url,
						width: 700,
						height: 600,
						scrollbars : "yes",
						inline : 1,
						onsubmit: function( e ) {
							editor.insertContent( '<h3>' + e.data.title + '</h3>');
						}
					});
				}
			});
    	},

		_convert_codes_to_imgs : function(co) {
            return co.replace(/\[amd-zlrecipe-recipe:([0-9]+)\]/g, function(a, b) {
								return '<img id="amd-zlrecipe-recipe-'+b+'" class="amd-zlrecipe-recipe" src="' + plugindir + '/zlrecipe-placeholder.png" alt="" />';
            });
		},

		_convert_imgs_to_codes : function(co) {
			return co.replace(/\<img[^>]*?\sid="amd-zlrecipe-recipe-([0-9]+)[^>]*?\>/g, function(a, b){
                return '[amd-zlrecipe-recipe:'+b+']';
            });
		},

		getInfo : function() {
            return {
                longname : "ZipList Recipe Plugin",
                author : 'ZipList, Inc.',
                authorurl : 'http://www.ziplist.com/',
                infourl : 'http://www.ziplist.com/recipe_plugin',
                version : "3.1"
            };
        }
	});

	tinymce.PluginManager.add('amdzlrecipe', tinymce.plugins.amdEditZLRecipe);

})();

/*
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
Description: A plugin that adds all the necessary microdata to your recipes, so they will show up in Google's Recipe Search
Version: 1.1
Author: ZipList.com
Author URI: http://www.ziplist.com/
License: GPLv2 or later

This code is derived from the 1.3.1 build of RecipeSEO released by codeswan: http://sushiday.com/recipe-seo-plugin/
*/

/*
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
(function() {

	tinymce.create('tinymce.plugins.amdEditZLRecipe', {
        
        init : function(ed, url) {
            var t = this;

            t.url = url;
            t._createButtons();

            // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('...');
            ed.addCommand('WP_EditRecipe', function() {
                var el = ed.selection.getNode(), vp = tinymce.DOM.getViewPort(), H = vp.h, W = ( 720 < vp.w ) ? 720 : vp.w, cls = ed.dom.getAttrib(el, 'class'), id = ed.dom.getAttrib(el, 'id').replace('amd-zlrecipe-recipe-', '');

                if ( cls.indexOf('mceItem') != -1 || cls.indexOf('wpGallery') != -1 || el.nodeName != 'IMG' )
                    return;

                tb_show('', baseurl + '/wp-admin/media-upload.php?post_id=1-' + id + '&type=amd_zlrecipe&tab=amd_zlrecipe&TB_iframe=true&width=640&height=523');
                // tb_show('', url + '/editimage.html?ver=321&TB_iframe=true');
                tinymce.DOM.setStyles('TB_window', {
                    'width':( W - 50 )+'px',
                    'height':( H - 45 )+'px',
                    'margin-left':'-'+parseInt((( W - 50 ) / 2),10) + 'px'
                });

                if ( ! tinymce.isIE6 ) {
                    tinymce.DOM.setStyles('TB_window', {
                        'top':'20px',
                        'marginTop':'0'
                    });
                }

                tinymce.DOM.setStyles('TB_iframeContent', {
                    'width':( W - 50 )+'px',
                    'height':( H - 75 )+'px'
                });
                tinymce.DOM.setStyle( ['TB_overlay','TB_window','TB_load'], 'z-index', '999999' );
            });


            ed.onInit.add(function(ed) {
                tinymce.dom.Event.add(ed.getBody(), 'dragstart', function(e) {
                    if ( !tinymce.isGecko && e.target.nodeName == 'IMG' && ed.dom.getParent(e.target, 'dl.wp-caption') )
                    return tinymce.dom.Event.cancel(e);
                });
            });

            // show editimage buttons
            ed.onMouseDown.add(function(ed, e) {
                var p;

                if ( e.target.nodeName == 'IMG' && ed.dom.getAttrib(e.target, 'class').indexOf('mceItem') == -1 && ed.dom.getAttrib(e.target, 'class').indexOf('amd-zlrecipe-recipe') === 0) {

                    ed.plugins.wordpress._hideButtons();
                    t._showButtons(e.target, 'wp_editrecipebtns');
                    if ( tinymce.isGecko && (p = ed.dom.getParent(e.target, 'dl.wp-caption')) && ed.dom.hasClass(p.parentNode, 'mceTemp') ) {
                        ed.selection.select(p.parentNode);
                    }
                } else {
                    t._hideButtons();
                }
            });

            // when pressing Return inside a caption move the cursor to a new parapraph under it
            ed.onKeyPress.add(function(ed, e) {
                var n, DL, DIV, P;

                if ( e.keyCode == 13 ) {
                    n = ed.selection.getNode();
                    DL = ed.dom.getParent(n, 'dl.wp-caption');
                    DIV = ed.dom.getParent(DL, 'div.mceTemp');

                    if ( DL && DIV ) {
                        P = ed.dom.create('p', {}, '&nbsp;');
                        ed.dom.insertAfter( P, DIV );

                        if ( P.firstChild )
                            ed.selection.select(P.firstChild);
                        else
                            ed.selection.select(P);

                        tinymce.dom.Event.cancel(e);
                        
                        return false;
                    }
                }
            });

            ed.onInit.add(function(ed) {
                tinymce.dom.Event.add(ed.getWin(), 'scroll', function(e) {
                    t._hideButtons();
                });
                tinymce.dom.Event.add(ed.getBody(), 'dragstart', function(e) {
                    t._hideButtons();
                });
            });

            ed.onBeforeExecCommand.add(function(ed, cmd, ui, val) {
                t._hideButtons();
            });

            ed.onSaveContent.add(function(ed, o) {
                t._hideButtons();
            });
            
            ed.onMouseDown.add(function(ed, e) {
                if ( e.target.nodeName != 'IMG' )
                    t._hideButtons();
            });

            ed.onBeforeSetContent.add(function(ed, o) {
                o.content = t._do_shcode(o.content);
            });

            ed.onPostProcess.add(function(ed, o) {
                if (o.get) {
                    o.content = t._get_shcode(o.content);
                }
            });
        },

        _showButtons : function(n, id) {
            var ed = tinyMCE.activeEditor, p1, p2, vp, DOM = tinymce.DOM, X, Y;

            vp = ed.dom.getViewPort(ed.getWin());
            p1 = DOM.getPos(ed.getContentAreaContainer());
            p2 = ed.dom.getPos(n);

            X = Math.max(p2.x - vp.x, 0) + p1.x;
            Y = Math.max(p2.y - vp.y, 0) + p1.y;

            DOM.setStyles(id, {
                'top' : Y+59+'px',
                'left' : X+87+'px',
                'display' : 'block'
            });
        },

        _hideButtons : function() {
            if (document.getElementById('wp_editrecipebtns'))
                tinymce.DOM.hide('wp_editrecipebtns');
        },

        _do_shcode : function(co) {
            return co.replace(/\[amd-zlrecipe-recipe:([0-9]+)\]/g, function(a, b) {
                return '<img id="amd-zlrecipe-recipe-'+b+'" class="amd-zlrecipe-recipe" src="' + baseurl + '/wp-content/plugins/' + dirname + '/zlrecipe-placeholder.png" alt="" />';
            });
        },

        _get_shcode : function(co) {
            return co.replace(/\<img id="amd-zlrecipe-recipe-([0-9]+).*?\>/g, function(a, b){
                
                return '[amd-zlrecipe-recipe:'+b+']';
            });
        },

        _createButtons : function() {
            var t = this, ed = tinyMCE.activeEditor, DOM = tinymce.DOM, editButton, deleteRecipeButton;

            DOM.remove('wp_editrecipebtns');

            DOM.add(document.body, 'div', {
                id : 'wp_editrecipebtns',
                style : 'display:none;'
            });

            editRecipeButton = DOM.add('wp_editrecipebtns', 'img', {
                src : t.url+'/edit.png',
                id : 'wp_editrecipebtn',
                width : '96',
                height : '96',
                title : 'Edit Recipe'
            });

            tinymce.dom.Event.add(editRecipeButton, 'mousedown', function(e) {
                var ed = tinyMCE.activeEditor;
                ed.windowManager.bookmark = ed.selection.getBookmark('simple');
                ed.execCommand("WP_EditRecipe");
            });
            
            deleteRecipeButton = DOM.add('wp_editrecipebtns', 'img', {
                src : t.url+'/delete.png',
                id : 'wp_delrecipebtn',
                width : '96',
                height : '96',
                title : 'Delete Recipe'
            });

            tinymce.dom.Event.add(deleteRecipeButton, 'mousedown', function(e) {
                if (confirm("Are you sure you want to delete this recipe?")) {
                    var ed = tinyMCE.activeEditor, el = ed.selection.getNode(), p;

                    if ( el.nodeName == 'IMG' && ed.dom.getAttrib(el, 'class').indexOf('mceItem') == -1 ) {
                        if ( (p = ed.dom.getParent(el, 'div')) && ed.dom.hasClass(p, 'mceTemp') )
                            ed.dom.remove(p);
                        else if ( (p = ed.dom.getParent(el, 'A')) && p.childNodes.length == 1 )
                            ed.dom.remove(p);
                        else
                            ed.dom.remove(el);

                        ed.execCommand('mceRepaint');
                    }                    
                }
                
                return false;
            });
        },

        getInfo : function() {
            return {
                longname : "ZipList Recipe Plugin",
                author : 'ZipList, Inc.',
                authorurl : 'http://www.ziplist.com/',
                infourl : 'http://www.ziplist.com/recipe_plugin',
                version : "1.1"
            };
        }
    });

    tinymce.PluginManager.add('amdzlrecipe', tinymce.plugins.amdEditZLRecipe);
})();
=== ZipList Recipe Plugin ===
Contributors: ZipList Inc., codeswan
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
License: GPLv3 or later
Author URI: http://www.ziplist.com/
Author: ZipList, Inc.
Donate link: http://sushiday.com/recipe-seo-plugin/
Tags: google rich snippets, hrecipe, print recipe, recipe, recipe card, recipe seo, schema.org, seo
Requires at least: 3.1
Tested up to: 4.1
Stable tag: 3.1
Version: 3.1

Formats recipes so they are SEO-friendly. Now fully supports WordPress 4.0.1.

== Description ==

ZipList brings your recipes right to your readers’ tables!

Make your recipes SEO-friendly and more likely to appear in [Google's Recipe View](http://googleblog.blogspot.com/2011/02/slice-and-dice-your-recipe-search.html) search. No need to hand-code your recipes into a sophisticated recipe structure when the ZipList Recipe Plugin will do all the heavy lifting for you, enhancing the findability of your recipe website.

If you’re familiar with the open-source [RecipeSEO](http://recipeseo.com/) plugin built by Allison Day, you’ll quickly note that the ZipList Recipe Plugin is an extension of this plugin.

Among the new features added by ZipList are:

**Works with WordPress 4.0.1:** Updated for full compatibility with WordPress 4.0.1.

**Schema/Recipe Support:** Automatically integrate Schema.org's Recipe mark-up into your recipe posts to make them more findable by search engines. 

**Recipe Image Support:** Add images within the plugin to appear with your recipe or in your Google Rich Snippet.

**Copy/Paste Ingredients:** Simply cut a block of ingredients and paste them into one field. No need to add each ingredient one by one into separate fields.

**Auto-Populate Recipe Name:** The recipe name is automatically replicated inside the plugin, taking the name from the post name, which further enhances SEO.

**Add Links to Ingredients or Instructions:** Attach affiliate links or links to related recipes from the Ingredients, Instructions or Summary fields with ease. No other plugin enables you to do this.

**Bold and Asterisk Styling:** Add bold or italicized styling to words or phrases within the Ingredients, Instructions, Summary and Notes sections. 

**Modified Image Display:** Add a recipe image to the plugin so that it displays in a user’s recipe box, but then choose to hide it from view on your recipe post and/or print view.

**Incorporate Images into Instructions:** Now you can easily add step-by-step images to your instructions (or ingredients) from within the plugin.

**Notes Field:** Add notes to your recipes, such as optional ingredients, required kitchen tools and equipment and/or additional instructions (e.g., freezing, microwave, etc.)

**Enhanced Printing Capabilities:** Add a copyright statement or URL to appear at the bottom of your printed recipes. Also, display a permalink at the bottom of printed recipes so users can easily find individual recipes on your website.

**Multiple Paragraph Support in Summary Section:** Users can now add multiple paragraphs to the Summary field within the plugin.

The ZipList Recipe Plugin is very easy use, however we also provide enhanced [step-by-step instructions](http://marketing.ziplist.com.s3.amazonaws.com/plugin_instructions.pdf). Please note that the ZipList Recipe Plugin is no longer actively maintained and may not be updated in the future.
== Installation ==

You can download and install the ZipList Recipe Plugin using the built-in WordPress plugin installer. If you download the ZipList Recipe Plugin manually, make sure it is uploaded to "/wp-content/plugins/ziplist-recipe-plugin/".

Activate the ZipList Recipe Plugin in the "Plugins" admin panel using the "Activate" link.

To use the plugin, click the little ZipList Recipe icon on the "Edit Post" pages, right next to the other editor toolbar buttons at the top of the text editor box. Then enter the details about your recipe into the appropriate boxes, and then click the "Add Recipe" button. This will save your recipe, and insert it into your blog post.

The ZipList Recipe Plugin is very easy use, however we also provide enhanced [step-by-step instructions](http://marketing.ziplist.com.s3.amazonaws.com/plugin_instructions.pdf). Please note that the ZipList Recipe Plugin is no longer actively maintained and may not be updated in the future.

== Frequently Asked Questions ==

= What happened to the Save Recipe button that was on my recipes? =

The save recipe button, recipe box and shopping list are no longer available in the plugin, however, the plugin will continue to display your recipes.

= How do I edit a recipe with the ZipList Recipe Plugin? =

Starting with version 2.4, you'll want to click the spoon and fork icon on the visual editor toolbar to both create and edit a recipe. You no longer need to click on the image placeholder within the blog post to edit a recipe.

= Can I use the plugin to add multiple recipes to one post or page? =

There should only be one recipe per post or page. The plugin does allow for compound recipes which is one way to include multiple lists of ingredients in your post (e.g., for a salad and a salad dressing).Simply enter your instructions for the main recipe, then start the next line with an exclamation point to create a label, like "!For the Salad Dressing". Then, add the instructions for the secondary recipe. Starting with version 2.4, we no longer support multiple ZipList-formatted recipes within a single post.

= When I use ZipList's plugin, where are the recipes stored? =

With the ZipList Recipe Plugin, your recipes are stored safely in a separate DB table in your main WP database. The recipe table is named wp_amd_zlrecipe_recipes and you can take a look at it yourself using any WordPress database tools at your disposal.

= What happens to my recipes now that ZipList has gone away =

The short answer is "nothing"! :) The ZipList Recipe Plugin simply takes the recipe information from your own database and displays it with SEO annotation. It does this without any connection or communication with the ZipList service and is completely independent. You will continue to enjoy SEO-friendly display of your recipes without any connection to ZipList. Please note that the ZipList Recipe Plugin is no longer actively maintained and may not be updated in the future.

= Why do you put a placeholder image into my Edit Post page, instead of my actual recipe? =

Because of the way the WordPress text editor works, if you decide to add or remove something from your recipe using the text editor, it can very easily mess up the markup of the code - so the ZipList plugin prevents that from happening by not allowing you to edit the recipe in the text editor.

== Screenshots ==

1. The ZipList Recipe Plugin icon appears as a fork and spoon on the visual editor toolbar.
2. It's easy to enter the basic information for your recipes: the title, the ingredients and the instructions for preparing the recipe.
3. There is no limit to the number of ingredients you can add.
4. And if you want to add even more information about your recipe, such as your rating of the recipe, or the serving size, all you have to do is click the "More Options" link, and you can!
5. You can fill out as many or as few additional options as you would like.
6. Once you click the "Add Recipe" button, a placeholder image will be inserted into your post where your recipe will go. If you need to edit your recipe, simply click on the spoon and fork icon in the visual editor toolbar (you do not need to click on the recipe placeholder as you did in previous releases of the plugin).
7. Once you preview or publish the post, your recipe will be there with all your microformats... without any extra work from you!

== Changelog ==
3.1 Documentation Update
* Update readme to advise users of the end of maintenance support
* Incorporated direct license for print support - thanks [Ulrik](http://www.808.dk/)

3.0 Final Release

* Remove Save Recipe button connection to ZipList service
* Reduce possibility of JS var collision

2.6 Maintenance Release

* Fix for blank Print page in some browsers
* Support for custom post types
* Support for SSL - thanks [jspuij!](https://github.com/jspuij)
* Support for custom content directories - thanks [derekhubbard!](https://github.com/derekhubbard)

2.5 Bugfix Release

* Fixes problem of not properly opening recipe dialog in separate window on some sites
* Documentation updates for new editing method

2.4 Editor Upgrade, Performance and Bugfix Release

* Simpler, single-button recipe add/edit button in post edit
* Improved mobile compatibility with mobile-based Add Recipe popup
* Easier recipe/print button customizations for web output
* Improved character encoding and handling - thanks [smerriman!](http://github.com/smerriman)
* Improved blogger site performance with CDN cached assets

2.3 Emergency Fix for WordPress 3.9 upgrade to TinyMCE v4

* Editor disabled, view recipes only
* Early introductions of v2.4 features

2.1/2.2 Bugfix Releases

* Fixes issues with the recipe placeholder introduced in WordPress v3.5

2.0 Features Release

* Move to Schema.org/Recipe from hrecipe microformat
* Bold and Italic formatting of ingredients, instructions, summary and notes
* Confirm stability on WP 3.3.1

1.41 Bugfix Release

* Fix for repeating dbDelta database error
* UI Improvement to avoid "placeholder" image in post
* Recipe links now open in new tabs

1.4 Features Release

* Control display of recipe images on both web and print screens without manual styles or degrading SEO
* Support for optional recipe Notes field with user-definable label
* Easier partner registration for branded recipe display
* Iniital RSS/email support
* Various bugfixes

1.3 Features Release

* Printing support for multiple recipes on a page
* Button support for multiple recipe posts displayed on a single page
* User-definable copyright statement or site promotion on print page
* Optional recipe permalink displayed on print page
* Support for multiple summary paragraphs

1.2 Features Release

* Support for multiple recipes per page
* Support for labels in instructions
* Support for images images in ingredients and instructions
* Support for hyperlinks in summary, ingredients and instructions
* Removal of "\" characters introduced by entity encoding

1.1 Address problem with wp-content reachability of the edit form on some blogs.

1.0 Initial Release

* We're now on GitHub at https://github.com/Ziplist/recipe_plugin
* Recipe print support
* Improved time formatting
* Label support for ingredients !tagged with an exclamation point
* Automatic inclusion of appropriate javascript and css

0.9 First iteration, derived from Recipe SEO 1.3.1 -- thanks for the jump-start Allison!  (http://sushiday.com/recipe-seo-plugin/)

== Upgrade Notice ==

= 1.1 =
Addresses problem of not being able to edit existing recipes on some blogs. Upgrade if you have this problem.

= 1.2 =
Feature update. Upgrade to gain access to hyperlink, image and label markup in recipes.

= 1.3 =
Feature update. Upgrade when the home page of your blog displays multiple recipe posts or to add a copyright/promotional statement and/or permalink to the print output.

= 1.4 =
Feature update. Upgrade to add an additional notes recipe field or for better control over image display in web and print.

= 1.41 =
Bugfix update. Upgrade if you are experiencing repeating DB errors regarding a call to "dbDelta" by the plugin.

= 2.0 =
Feature update. Upgrade for the benefits of Schema.org/Recipe and bold/italic formatting

= 3.0 =
Final Update. This update removes the ZipList Save Recipe button but will continue to display your recipes. Update immediately to avoid errors. 

== Other Notes ==

The save recipe button, recipe box and shopping list features are no longer available or supported in the plugin.

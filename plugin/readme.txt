=== ZipList Recipe Plugin ===
Contributors: ZipList Inc., codeswan
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
License: GPLv3 or later
Tags: recipe, hrecipe, google rich snippets, seo
Author URI: http://www.ziplist.com/
Author: ZipList, Inc.
Donate link: http://sushiday.com/recipe-seo-plugin/
Tags: recipes, seo, hrecipe, Recipe View
Requires at least: 3.1
Tested up to: 3.6
Stable tag: 2.3
Version: 2.3

Formats recipes so they are SEO-friendly. Now fully supports WordPress 3.5.

== Description ==

Make your recipes SEO-friendly and more likely to appear in [Google's Recipe View](http://googleblog.blogspot.com/2011/02/slice-and-dice-your-recipe-search.html) search. No need to hand-code your recipes into a sophisticated recipe structure when the ZipList Recipe Plugin will do all the heavy lifting for you, enhancing the findability of your recipe website.

As a bonus, the ZipList Recipe Plugin enables you to add a "Save Recipe" button to each recipe so that readers can add favorite recipes to a universal recipe box and shopping list directly from your site. Each recipe they add includes a link back to your site so readers always go back to you for instructions.

If you're familiar with the open-source [RecipeSEO](http://recipeseo.com/) plugin built by Allison Day, you will quickly note that the ZipList Recipe Plugin is an extension of this plugin. Among the new features added by ZipList are:

**Works with WordPress 3.5:** Updated for full compatibility with WordPress 3.5.

**Bold and Asterisk Styling:** Add bold or italicized styling to words or phrases within the Ingredients, Instructions, Summary and Notes sections. 

**Schema/Recipe Support:** Automatically integrate Schema.org's Recipe mark-up into your recipe posts to make them more findable by search engines. 

**Notes Field:** Add notes to your recipes, such as optional ingredients, required kitchen tools and equipment and/or additional instructions (e.g., freezing, microwave, etc.)

**Modified Image Display:** Add a recipe image to the plugin so that it displays in a user’s recipe box, but then choose to hide it from view on your recipe post and/or print view.

**Simplified Partner Registration:** Self-service user interface for partner key registration so that your logo and website name sit next to recipes that appear in user recipe boxes and in the ZipList recipe search index.

**Recipe Image Support:** Add images within the plugin to appear with your recipe.

**Copy/Paste Ingredients:** Simply cut a block of ingredients and paste them into one field. No need to add each ingredient one by one into separate fields.

**Auto-Populate Recipe Name:** The recipe name is automatically replicated inside the plugin, taking the name from the post name, which further enhances SEO.

**Integrated Recipe Box and Shopping List:** Turn on a feature that allows readers to save their favorite recipes to an online recipe box, and then add recipe ingredients to their shopping list with one click. Used by over 2,000 bloggers, it also supports ZipList's full shopping list and recipe box capabilities as used on [RecipeGirl](http://www.recipegirl.com/), [Skinnytaste](http://skinnytaste.com/), [Southern Plate](http://southernplate.com/) and over 100 other leading food and lifestyle web sites.

**Add Links to Ingredients or Instructions:** Attach affiliate links or links to related recipes from the Ingredients, Instructions or Summary fields with ease. No other plugin enables you to do this.

**Incorporate Images into Instructions:** Now you can easily add step-by-step images to your instructions (or ingredients) from within the plugin.

**Enhanced Printing Capabilities:** Add a copyright statement or URL to appear at the bottom of your printed recipes. Also, display a permalink at the bottom of printed recipes so users can easily find individual recipes on your website.

**Multiple Paragraph Support in Summary Section:** Users can now add multiple paragraphs to the Summary field within the plugin.

The ZipList Recipe Plugin is very easy to use and you can find step-by-step instructions [here](http://marketing.ziplist.com.s3.amazonaws.com/plugin_instructions.pdf). If you have more questions on how to use the plugin, feel free to reach out to ZipList at [plugins@ziplist.com](mailto:plugins@ziplist.com).

== Installation ==

You can download and install the ZipList Recipe Plugin using the built-in WordPress plugin installer. If you download the Ziplist Recipe Plugin manually, make sure it is uploaded to "/wp-content/plugins/ziplist-recipe-plugin/".

Activate the ZipList Recipe Plugin in the "Plugins" admin panel using the "Activate" link.

To use the plugin, click the little ZipList Recipe icon on the "Edit Post" pages, right next to the other "Upload/Insert" links at the top of the text editor box. Then enter the details about your recipe into the appropriate boxes, and then click the "Add Recipe" button. This will save your recipe, and insert it into your blog post.

== Frequently Asked Questions ==

= When I use ZipList's plugin or button code, where are the recipes stored? =

Whether you use the ZipList recipe plugin or you simply add the ZipList button script to your website, your recipes are always stored on your own website.

Even with the ZipList Recipe Plugin, your recipes are stored safely in a separate DB table in your main WP database. The recipe table is named wp_amd_zlrecipe_recipes and you can take a look at it yourself using any WordPress database tools at your disposal.

Much like Google, ZipList creates a simplified "index" entry of your recipes for use in presenting recipe search results, but this is not a full "copy" of the recipe and serves only to hold a representation of the partner website. For example, if you change a recipe on your website that you published months ago, ZipList will shortly "notice" this and update the recipe search and all of the information in user recipe boxes that link back to the original recipe.

In short, your website keeps your recipes and ZipList refers all recipe "view" traffic back to the original partner content.

= If the ZipList service were to go down, what would happen to my recipes? =

The short answer is "nothing"! :) The display of your recipes on your site has nothing to do with the ZipList service and the only thing that would change is that the ZipList "Save Recipe" button would no longer function.

The ZipList Recipe Plugin simply takes the recipe information from your own database and displays it with the SEO annotation and it does this without any connection or communication with the ZipList service itself as the two really are completely independent. The only time there is communication between ZipList and your website is when one of your customers clicks the Save Recipe button, at which time a reference to the recipe and your website is saved in the user's recipe box on ZipList.

If ZipList ever does "go away", you can simply uncheck the option to show the ZipList button and you will continue to enjoy SEO-friendly display of your recipes without any connection to ZipList.

= Why do you put a placeholder image into my Edit Post page, instead of my actual recipe? =

Because of the way WordPress' text editor works, if you decide to add or remove something from your recipe using the text editor, it can very easily mess up the markup of the code - so the ZipList plugin prevents that from happening by not allowing you to edit the recipe in the text editor.

= How can I request a feature to be added in future versions of the ZipList Recipe Plugin? =

You can email mailto:support@ziplist.com with your requests.

== Screenshots ==

1. The ZipList Recipe Plugin icon is located next to the other "Upload/Insert" media icons.
2. It's easy to enter the basic information for your recipes: the title, the ingredients, and the instructions for preparing the recipe.
3. There is no limit on the number of ingredients you can add.
4. And if you want to add even more information about your recipe, such as your rating of the recipe, or the serving size, all you have to do is click the "More Options" link, and you can!
5. You can fill out as many or as few additional options as you would like.
6. Once you click the "Add Recipe" button, a placeholder image will be inserted into your post where your recipe will go.
7. Once you preview or publish the post, your recipe will be there with all your microformats... without any extra work from you!
8. Voila! Your new recipe can easily be styled with CSS, to look however you would like.
9. But what if you want to make changes to the recipe you just entered?  All you have to do is click on the placeholder image, and then click on the big fat edit image (the left-hand one).
10. Make your changes and click the "Update Recipe" button...
11. Edited!  Easy as can be.

== Changelog ==

2.1/2.2 Bugfix Releases

* Fixes issues with the recipe placeholder introduced in WordPress v3.5

2.0 Features Release

* Move to Schema.org/Recipe from hrecipe microformat
* Bold and Italic formatting of ingredients, instructions, summary and note
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
Feature update. Upgrapde for the benefits of Schema.org/Recipe and bold/italic formatting

== Features that will be added in upcoming versions of the ZipList Recipe Plugin ==

* Have a suggestion for a feature we should add? [Drop us a line](mailto:support@ziplist.com)
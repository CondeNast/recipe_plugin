=== ZipList Recipe Plugin ===
Contributors: ZipList Inc., codeswan
Plugin Name: ZipList Recipe Plugin
Plugin URI: http://www.ziplist.com/recipe_plugin
Plugin GitHub: https://github.com/Ziplist/recipe_plugin
License: GPLv2 or later
Tags: recipe, hrecipe, google rich snippets, seo
Author URI: http://www.ziplist.com/
Author: ZipList, Inc.
Donate link: http://sushiday.com/recipe-seo-plugin/
Tags: recipes, seo, hrecipe, Recipe View
Requires at least: 3.1
Tested up to: 3.2.1
Stable tag: 1.41
Version: 1.41

Formats recipes so they are SEO-friendly. New features include a Notes field and enhanced image display options.

== Description ==

Make your recipes SEO-friendly and more likely to appear in [Google's Recipe View](http://googleblog.blogspot.com/2011/02/slice-and-dice-your-recipe-search.html) search. No need to hand-code your recipes into the sophisticated hRecipe microformat when the ZipList Recipe Plugin will do all the heavy lifting for you, enhancing the findability of your recipe website.

As a bonus, the ZipList Recipe Plugin enables you to add a "Save Recipe" button to each recipe so that readers can add favorite recipes to a universal recipe box and shopping list directly from your site. Each recipe they add includes a link back to your site so readers always go back to you for instructions.

If you're familiar with the open-source [RecipeSEO](http://recipeseo.com/) plugin built by Allison Day, you will quickly note that the ZipList Recipe Plugin is an extension of this plugin. Among the new features added by ZipList are:

**NEW: Notes Field: Add notes to your recipes, such as optional ingredients, required kitchen tools and equipment and/or additional instructions (e.g., freezing, microwave, etc.)

**NEW: Modified Image Display: Add a recipe image to the plugin so that it displays in a user’s recipe box, but then choose to hide it from view on your recipe post and/or print view.

**NEW: Simplified Partner Registration: New self-service user interface to register for a partner key so that your logo and website name sit next to recipes that appear in user recipe boxes and in the ZipList recipe search index.

**Recipe Image Support:** Add images within the plugin to appear with your recipe.

**Copy/Paste Ingredients:** Simply cut a block of ingredients and paste them into one field. No need to add each ingredient one by one into separate fields.

**Auto-Populate Recipe Name:** The recipe name is automatically replicated inside the plugin, taking the name from the post name, which further enhances SEO.

**Integrated Recipe Box and Shopping List:** Turn on a feature that allows readers to save their favorite recipes to an online recipe box, and then add recipe ingredients to their shopping list with one click. Used by over 2,000 bloggers, it also supports ZipList's full shopping list and recipe box capabilities as used on [RecipeGirl](http://www.recipegirl.com/), [Joy of Baking](http://www.joyofbaking.com/), [Skinnytaste](http://skinnytaste.com/), [Southern Plate](http://southernplate.com/) and over 50 other leading food and lifestyle web sites.

**Add Links to Ingredients or Instructions:** Attach affiliate links or links to related recipes from the Ingredients, Instructions or Summary fields with ease. No other plugin enables you to do this.

**Incorporate Images into Instructions:** Now you can easily add step-by-step images to your instructions (or ingredients) from within the plugin.

**Enhanced Printing Capabilities: Add a copyright statement or URL to appear at the bottom of your printed recipes. Also, display a permalink at the bottom of printed recipes so users can easily find individual recipes on your website.

**Multiple Recipe Support: The recipe plugin now fully supports the display and printing of multiple recipe posts on a single page.

**Multiple Paragraph Support in Summary Section: Users can now add multiple paragraphs to the Summary field within the plugin.

The ZipList Recipe Plugin is very easy to use and you can find step-by-step instructions [here](http://marketing.ziplist.com.s3.amazonaws.com/plugin_instructions.pdf). If you have more questions on how to use the plugin, feel free to reach out to ZipList at [plugins@ziplist.com](mailto:plugins@ziplist.com).

== Installation ==

You can download and install the ZipList Recipe Plugin using the built-in WordPress plugin installer. If you download the Ziplist Recipe Plugin manually, make sure it is uploaded to "/wp-content/plugins/ziplist-recipe-plugin/".

Activate the ZipList Recipe Plugin in the "Plugins" admin panel using the "Activate" link.

To use the plugin, click the little ZipList Recipe icon on the "Edit Post" pages, right next to the other "Upload/Insert" links at the top of the text editor box. Then enter the details about your recipe into the appropriate boxes, and then click the "Add Recipe" button. This will save your recipe, and insert it into your blog post.

== Frequently Asked Questions ==

= Why do you put a placeholder image into my Edit Post page, instead of my actual recipe? =

Because of the way WordPress' text editor works, if you decide to add or remove something from your recipe using the text editor, it can very easily mess up the markup of the code - so the ZipList plugin prevents that from happening by not allowing you to edit the recipe in the text editor.

= What if my site is in HTML5? =

We will have a version that uses microdata (instead of microformats) for websites that use HTML5 very soon! But for now, the microformats that we use should work just fine for all HTML5 sites.

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

1.0 First iteration, derived from Recipe SEO 1.3.1 -- thanks for the jump-start Allison!  (http://sushiday.com/recipe-seo-plugin/)

1.1 Includes the ZipList Recipe button.

1.2 Pre-populates the recipe title with the post title; adds an optional recipe image.

1.3 ZipList Recipe attribution, and settings to hide ZipList attribution or button.

1.4 New Add a Recipe icon; new place-holder recipe art; updated settings button text; updated Instructions default; added ziplist_partner_key, debugged settings.

1.5 Remove "amount" from ingredients; first step toward copy&paste support.

2.0 Collapse "ingredients" into primary database; full break in compatibility with RecipeSEO data structures; single ingredients field to allow users to copy&paste their recipes.

2.1 textarea-based ingredients editing debugged.

2.2 Overhaul to add RecipeSEO attribution in all code.

2.3 New recipeseo-placeholder.png; new hrecipe structure from Dave; new UI text for instructions. 

2.4 Rename filenames, code and DB: recipeseo to zlrecipe; RecipeSeo -> ZLRecipe; RECIPESEO -> ZLRECIPE.

2.5 DB versioning moved from 2.0 to 3.0 for the new name.

(Numbering reset for ZipList launch)

0.4 New and improved: Upgrade to add the ZipList recipe button to your recipes, and also get the same great RecipeSEO 1.3.1 features: Users can now choose what format they want their ingredients and instructions in, as well as change or remove all of the labels. Times will now display in ISO 8601 formats.

0.6 New output format to support styling

0.7 Ratings combo-box, full support for hrecipe review, trimmed timing options down to hours & minutes.

0.8 Title display, Ratings label and display

0.9 Image sizing & borders

1.0 Initial Release

* We're now on GitHub at https://github.com/Ziplist/recipe_plugin
* Recipe print support
* Improved time formatting
* Label support for ingredients !tagged with an exclamation point
* Automatic inclusion of appropriate javascript and css

1.1 Address problem with wp-content reachability of the edit form on some blogs.

1.2 Features Release

* Support for multiple recipes per page
* Support for labels in instructions
* Support for images images in ingredients and instructions
* Support for hyperlinks in summary, ingredients and instructions
* Removal of "\" characters introduced by entity encoding

1.3 Features Release

* Printing support for multiple recipes on a page
* Button support for multiple recipe posts displayed on a single page
* User-definable copyright statement or site promotion on print page
* Optional recipe permalink displayed on print page
* Support for multiple summary paragraphs

1.4 Features Release

* Control display of recipe images on both web and print screens without manual styles or degrading SEO
* Support for optional recipe Notes field with user-definable label
* Easier partner registration for branded recipe display
* Iniital RSS/email support
* Various bugfixes

1.41 Bugfix Release

* Fix for repeating dbDelta database error
* UI Improvement to avoid "placeholder" image in post
* Recipe links now open in new tabs


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

== Features that will be added in upcoming versions of the ZipList Recipe Plugin ==

* Have a suggestion for a feature we should add? [Drop us a line](mailto:support@ziplist.com)
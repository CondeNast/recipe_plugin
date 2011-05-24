=== ZipList Recipe Plugin ===
Contributors: ZipList Inc., codeswan
Plugin URI: http://www.ziplist.com/recipe_plugin
Donate link: http://sushiday.com/recipe-seo-plugin/
Tags: recipes, seo, hrecipe, Recipe View
Requires at least: 3.1
Tested up to: 3.1
Stable tag: 0.9

ZipList recipe formatting for WordPress.

This code is derived from the 1.3.1 build of RecipeSEO released by codeswan: http://sushiday.com/recipe-seo-plugin/

Recipe SEO made simple. Formats your recipes with the appropriate microformats, so they are more likely to appear in Google's Recipe View. Allows you to customize styling too, making posts visually attractive. 

== Description ==

With the introduction of [Google's Recipe View](http://googleblog.blogspot.com/2011/02/slice-and-dice-your-recipe-search.html), suddenly microformats became incredibly important to food bloggers. If you don't use microformats for your recipes (or microdata, for those using HTML5), then your blog most likely won't show up in Recipe View searches.

But most people don't want to spend the time and effort to hand-code microformats into their recipes every single time they publish a blog post. It's a lot of work, and quite frankly a pain in the rear, especially if you're not familiar with HTML.

That's where this plugin comes in.

The ZipList Recipe Plugin gives you the power to take full advantage of the benefits of microformats, without having to deal with HTML and the messy microformat code at all. All you have to do is enter the information about your recipe, and the plugin will automatically add all the necessary code to your recipe.

It's quick. It's simple. And best of all, your recipes now have a much better chance of showing up in Google's Recipe View, with very little additional work from you!

(If you don't use WordPress.org, or would rather be able to edit the formatted HTML on your own, check out my [RecipeSEO App!](http://recipeseo.com/))

== Installation ==

You can download and install the ZipList Recipe Plugin using the built-in WordPress plugin installer. If you download the Ziplist Recipe Plugin manually, make sure it is uploaded to "/wp-content/plugins/ziplist-recipe-plugin/".

Activate the ZipList Recipe Plugin in the "Plugins" admin panel using the "Activate" link.

To use the plugin, click the [little ZipList Recipe icon](http://sushiday.com/wp-content/themes/sushiday/images/recipeseo.gif) on the "Edit Post" pages, right next to the other "Upload/Insert" links at the top of the text editor box. Then enter the details about your recipe into the appropriate boxes, and then click the "Add Recipe" button. This will save your recipe, and insert it into your blog post.

== Frequently Asked Questions ==

= Why do you put a placeholder image into my Edit Post page, instead of my actual recipe? =

Because of the way WordPress' text editor works, if you decide to add or remove something from your recipe using the text editor, it can very easily mess up the markup of the code - so the ZipList plugin prevents that from happening by not allowing you to edit the recipe in the text editor.

= What if my site is in HTML5? =

We will have a version that uses microdata (instead of microformats) for websites that use HTML5 very soon! But for now, the microformats that we use should work just fine for all HTML5 sites.

= How can I request a feature to be added in future versions of the ZipList Recipe Plugin? =

You can email mailto:support@ziplist.com with your requests.

== Screenshots ==

1. The RecipeSEO Plugin icon is located next to the other "Upload/Insert" media icons.
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

== (Numbering reset for ZipList launch)

0.4 New and improved: Upgrade to add the ZipList recipe button to your recipes, and also get the same great RecipeSEO 1.3.1 features: Users can now choose what format they want their ingredients and instructions in, as well as change or remove all of the labels. Times will now display in ISO 8601 formats.
0.6 New output format to support styling
0.7 Ratings combo-box, full support for hrecipe review, trimmed timing options down to hours & minutes.
0.8 Title display, Ratings label and display
0.9 Image sizing & borders

== Features that will be added in upcoming versions of the ZipList Recipe Plugin ==

* Theme selection
* Print support
* ((Have a suggestion for a feature we should add? mailto:support@ziplist.com ))
#JCrew-Bot Description
========
When loaded as a Chrome extension, the JS script automatically selects specified sizes.

There are five values set inside [auto-size.js](/chrome-extension/auto-size.js).

        var pants_size = "31/32";
        var shorts_size = "31";
        var shirt_size = "MEDIUM";
        var shoe_size = "10H MEDIUM"
        var autoBuy = false; 

The first four are the sizes you prefer. The last variables is an option to automate adding the item to the shopping cart. 

You don't have to worry about selecting the wrong size everytime you select and item (as long as you input them correctly in the script!). It also saves a few seconds :D 

Set Up
========
1. Fork the repo or download the .ZIP
2. Unzip. It contains 1 folder, JCrew-bot
2. Open Google Chrome. 
3. Go to Settings > Extensions. Tick the box next to 'Developer mode'.
4. Click on 'Load Unpacked Extension' button to the left.
5. Double click JCrew-bot. Click the chrome-extension extension folder and then the select button, which will load it as a Chrome extension.

That's all it take to set up. Now just visit J Crew or J Crew Factory and try it out.

NOTE: If you edit [auto-size.js](/chrome-extension/autocart.js) at all, such as modifying sizes, you'll need to go back into Chrome > Settings > Extensions and click 'Reload' under JCrew-bot.

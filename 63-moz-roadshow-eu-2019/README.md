# Understanding modern CSS layouts with Firefox DevTools

*For the Mozilla Developer Europe Roadshow 2019.*

Topics covered (depending on time):
- Content-based sizing
- Flexbox sizing
- Grid features

Event website: [https://mozilla-tito-devr.netlify.com/](https://mozilla-tito-devr.netlify.com/)

*This is a sort-of transcript plus my notes for the talk at the Munich stop*

Hello everyone! And thank you all for coming out this evening. We're going to have a packed line-up of talks so I'm going to get straight into things. I'm going to be sharing with you some of my favourite things about the Firefox DevTools and how they've helped me better understand some of the powerful, new CSS features and layout techniques.

We'll be covering what I consider the 3 cornerstones of modern CSS layouts, Flexbox, Grid and Box alignment.

## Flexbox, where nobody knows the size of anything

- Firefox is the only browser with a Flexbox inspector, locate it at the *Layout* tab, possible to change colour of overlay
- overlay shows you outlines of each flex item, and the free space available as a texture
- will tell you the flex direction, and the wrap status
- more importantly, it tells you what the browser does when it grows or shrinks the flex item

---

- one thing to note is that the specification recommends you use the keywords because they cover the most common use cases, they are `initial`, `none`. `auto` and any `<positive integer>` *(show where to see computed values)*
- sizing of flex items depends on a number of factors, like the amount of free space available, the amount of content in the flex item and the starting width of the flex item
- the exact algorithm is sort of complicated but is outlined in the specification if you're interested
- the key to figuring out flexbox is understanding how the `flex-basis` property works
- say I put a fixed value of `100px` as the `flex-basis` of a flex item, intuitively, many people expect to see a box of width `100px`, because we're used to being in control of our sizing instructions
- but `flex-basis` is actually the starting point from which the size of the box is calculated, key here is **starting point**, because if flex items are allowed to grow or shrink, odds are the final size will **not** be `100px`

---

- so we've got 2 flex containers with 3 flex items each, first 2 items have the same content, much longer content for the second container's last item
- both only have `display: flex` set on the parent element and nothing on the children
- this means all children have the values of `0 1 auto`, meaning the items won't grow beyond their starting widths *(resize until enough room for all content)*
- a `flex-shrink` value of `1` means all the items will shrink at the same rate if there isn't enough space for all the content to be a single line
- this is why the the second flex item in the second container takes up less space at this point, because it started shrinking first
- a flex basis of `auto` resolves to `content`, which is an automatic size based on the content within the flex item, typically equivalent to `max-content` width 
- when there is no explicit width set on a flex item, i.e. its value is `auto`, and the `flex-basis` is also `auto`, the browser will use content size as the starting point *(make sure to show flex item diagram in Layout panel)*
- if there is an explicit width set *(set width to 200px)*, then that becomes the starting point of size calculation, and because the `flex-grow` factor is `0`, this item ends up being `200px`
- when there is an explicit `flex-basis` value, even if there is a width on the flex item, the `flex-basis` value trumps it and that value becomes the starting point, and this item ends up being `300px`
- first column can't shrink any more, but second and third start shrinking at the same time, then second column hits `min-content` and only the third column continues to shrink until `min-content`
- eventually both sets of content's first and second column are the same width at `min-content`

---

- the next bit I want to cover is understanding the difference between having a `flex-basis` of `auto` versus a `flex-basis` of `0`
- again, I have 2 sets of 3 items, but this time, with exactly the same content
- the items are allowed to both grow and shrink, but each item in the set has a different `flex-grow` factor
- `flex-shrink` is `1` for all the items to make things easier to observe
- the key difference between both sets is that the first set uses `auto` as the `flex-basis`, which means the starting width for each item is the width of its content
- the available free space is the total width of the container minus the widths of the content within the 3 flex items
- that free space is distributed between items 1 and 2 in the ratio of 1:2, respectively
- inspector shows you that item 1 grew by x, and item 2 grew by 2x, and also shows you the starting width of each item
- the second set has `flex-basis` set to `0`, that means there is no starting width for each item
- the free space available is equivalent to the total width of the container minus the `min-content` width of the third item, because again, the browser doesn't break words so that's as small as it can go
- then that free space is divided between item 1 and 2 in the ratio of 1:2 as well
- the second item's size is exactly double that of the first item, but this is not the case when `flex-basis` is set to `auto`, because content widths are a factor in that scenario

---

- aligning items with the box alignment properties is also a big plus
- the flex inspector allows us to visualise free space is distributed for all the different values *(activate flexbox inspector)*
- box alignment properties are meant to be used across layout models, although for now, they can only be used with flex and grid
- `justify-content` lets us adjust flex items along the **main axis**, which is the direction flex items are laid out
- `start`, `center` and `end` are **positional** keywords, which adjust the flex children's absolute position within the flex container
- `space-around`, `space-between` and `space-evenly` are **distribution** keywords, which disperse extra space between the flex children
- if we change the `flex-direction` to `column`, `justify-content` still adjusts the flex items along the **main axis** *(remember to also add a height less than viewport height)*
- it's just that the main axis is now flowing from top to bottom, so the flex items move along this direction instead

---

- the cross axis is perpendicular to the main axis
- items are stretched along the cross axis to the full height of the flex line once you apply `display: flex`
- once the `align-self` or `align-items` property is applied though, the items revert to their original heights
- an interesting value for `align-items` is `baseline`, which is useful when you have text within flex items of varying sizes and positions
- `baseline` lines them all up, so if the text within each item is related, it becomes much easier to read

---

- if there is more space in the flex container than the total height of all the flex lines *(set container height to more than 75vh)*, you'll end up with these gaps, that maybe you don't want
- Using `align-content` lets you pack your items together and align the whole block of items within the container

## Grid, where we finally have real rows and columns

- *(ask about people using Grid)*
- whether you're just starting out with grid, or already using it in production, Firefox's grid inspector is still the best tool available at the moment
- toggle the overlay by clicking the grid tag on the *Inspector*, the waffle icon in *Rules*, or select your grid of choice from the *Layout* panel
- like the Flexbox inspector, you can change the colour of the overlay
- particularly helpful because Firefox now supports multiple grid overlays
- great if you are using nested grids or have more than 1 grid on the same page
- extending grid lines infinitely becomes quite helpful if you want to check on the alignment of multiple grids *(toggle grid1 and grid4)*
- additional options include displaying line numbers and grid area names

---

- most basic usage of laying out items with grid is setting the track sizes of your rows and columns
- the browser will automatically place items into the grid using a very well thought through algorithm, which is defined in the specification
- but things being placed one after another is behaviour most of us are fairly familiar with already

---

- what's special about grid is how simple it is to manually place items in both dimensions
- since my favourite analogy for this is placing pieces on a chessboard, that's what this is
- this is a simple 3x3 grid, with 3 grid items
- the properties which control their position will be `grid-row` and `grid-column`
- so here is where the ability to see the line numbers comes in very handy, especially if you have more complex layouts involving lots of columns

---

- using `grid-template-areas` to name grid areas is structurally similar to what we see rendered on the page
- each line surrounded with quotes represents a grid row, every value in the line makes up the grid column
- every line must have the same number of columns otherwise the whole thing is moot
- change your layout without having to touch the code for the grid items, only the grid areas *(change grid area of banana)*
- *(Switch to Braun poster example)*
- here I've named the key areas of the grid to match what content is in it, like *title*, *text*, and so on
- when the viewport size changes, I adjust the positions of the elements by touching the CSS for only the grid container *(proceed to resize browser and hit 3 layouts)*
- you can see how the grid area names, and hence the grid item assigned to it, have been tweaked
- non-rectangular or disconnected regions may be permitted in future, but for now, just rectangles, no Tetris shapes or that sort of thing

---

- like Flexbox, Grid can also use the box alignment properties
- for Grid, we can use `justify-items` and `justify-self` to adjust content within its grid cell along the inline axis *(do start, center, end)*
- another category of alignment properties that I didn't mention earlier, are **overflow** alignment keywords
- sometimes there will be situations where the total size of the grid items is larger than the grid container, causing overflow
- for example, in this case, if the `align-content` value is set to `end`, you will end up with data loss, because it's impossible to scroll to the overflowed content
- `unsafe` will honour the specified alignment even if this scenario occurs, while `safe` will change the alignment to one that avoids data loss

---

- for the keyword values of `auto-fit` and `auto-fill`, the inspector also makes it much easier to understand what they actually do
- they are used in the context of the `repeat()` function and make use of the fact that the browser knows how large its own viewport is and hence, is best positioned to generate the perfect number of grid tracks to fill up that space
- the example here asks the browser to generate as many columns with a minimum width of 6ems that can fit into the available space
- there are only has 5 grid items though, so when the viewport is much larger than 30ems, we can see the difference between the 2 values
- with `auto-fill`, empty tracks still take up space on the grid
- with `auto-fit` though, these empty tracks are collapsed and the grid items grow, because of the max value of `1fr`, and fill up the empty space instead
- so depending on what design you have in mind, you've got options

---

- relatively new feature that Firefox started supporting since version 66 is the ability to animate grid columns and rows
- this was always written into the specification but it took some time for implementation
- previously only animation of the `gap` property had been supported
- intuitively, some of us might picture the grid items moving across tracks when animated but that's not the case at all
- inspecting with DevTools will show exactly what the browser is animating *(trigger grid overlay for grid5.board)*
- this example consists of a grid container with 1 grid item
- the CSS animation keyframes are interpolating between the different values of `grid-template-columns` and `grid-template-rows`
- the grid item's alignment has been set to the bottom-right corner of the grid cell it was placed in

## Wrapping up

Because of time constraints, I didn't get the chance to cover things like subgrid, or the fact that the newer sizing units allow for elements on the page to grow or shrink at different rates, and so on. The fact is, we have so many more possibilities for web layouts now.

These new layout techniques allow designers and developers to spend less time wrangling their code and focus their efforts on the actual design of more innovative and adaptive layouts that work well across as many devices and browsers as possible.

And I want to end off by saying, if you've been on the fence about trying out these new features because they seem complicated and hard, just go for it.
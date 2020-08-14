---
title: How i built the blog
date: "2020-08-15"
description: "How i built the blog"
---

I have never written a blog before, but when the thought of trying it out struck me, i decided that building that blog myself
was the least i could do.

When i started to sketch out the technical requirements i wanted the application to fullfil, the list became something like this:

The blog should be built using React ⚛️ since this is the frontend library i have the most experience using.

This will be a static single page application (written as SPA from here on out) where every blog post would be sorted by date in descending order.

Users would not have to deal with too much loadingtimes just to get to the index-page and blog-pages.

A couple of hours later exploring what tools to use to easily build an application like this, 
i landed on building the blog using GatsbyJS.
This was a good thing since i have heard of gatsby before and wanted to learn to build with it, but not having much freetime at that point in time.

What made me think Gatsby would be a good choice for the blog, is that it consists of 
static SPA's which generates static html from already defined templates and components. 
Thanks to this, i can rather write reusable React components instead of repeatedly writing 
html pages for every single page i would need for the whole site. Also that would become a quite tedious 
and old-fashioned way of writing a website today.

Gatsby comes with a lot of support for accessibility already built in, so i dont have to manually 
set this up and constantly test for screenreaders and text to speach functionality for every component i make. 
In the time of writing this, i have not tested this thouroughly but i 
will make sure to write more about accessibility once i have more knowledge on this.

For storing blog-posts i dont have to set up a database.
Instead i have a setup which makes it possible for me to create a new directory with a blog-posts 
name as its name and write out my whole post in a `.md` file. Gatsby has a GraphQL query for every directory 
in a blog directory which converts the content into JSON and inserts this into a template-component 
i have setup for rendering a blog post as static html. 

For styling the components the way i wanted, i used sass which is just a css-preprocessor which includes a 
lot of functionality normal css does not have (yet! I can hope this maybe is supported in css one day) 
like storing variables, importing styling from other files, nesting and more syntactic sugar. 
You can read more about sass [here](https://sass-lang.com/).

Learning to build pages in gatsby is really fun, and i am far from a professional in using it, but trying it out for 
myself made me want to stick to it and maybe learn more.

If you are in need of building a static page for someone, make sure to see if gatsby would fills out your requirements as well.
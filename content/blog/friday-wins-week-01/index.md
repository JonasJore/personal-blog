---
title: Friday Wins 01
date: "2021-04-23"
description: "Trying out a new format for fridays"
---

## Hey, takk for sist

I've been a bit lazy with this blog for a while, 8 months to be exact.
So now i am trying to fix that with a new format i'd like to call `friday wins`!

Inspired by the place where i work, we have a meeting every monday called `monday commitments`.
This is where every team agree upon what type of goals they would like to achieve that week. And then on the following friday
we have these meetings where we celebrate everything we have achieved through the course of that week with no focus on goals we did not manage to reach.

In this blog though i am putting my own personal twist on things on that concept by telling all of you about all the amazing things i have learned this week and do a celebration of my own.

Things i found interesting this week:

---

* <https://www.snowpack.dev/> - A build tool with a really friendly config step for getting started, unlike some other build tools
* <https://principlesofchaos.org/> - I spent some hours of my evenings this week researching chaos-engineering and how to apply this to an organization, and get more and more interested the more i read about it. Give it a read.
* <https://nextjs.org/> - The production-ready framework that builds upon react, i have become quite fond of while working on it for some days now.


This week i have tried a lot of stuff out, everything from deploying a nextjs app to production using netlify which was not as straight-forward as i thought at first.And i have also gotten to try out setting up and writing integration tests for an app at work. I realize now that most of the work with integration testing now is getting the setup for running the tests in the first place takes up the most time. Actually writing the tests and doing assertions i actually pretty quick.

Also i pleasantly surprised at how quick the SSR (Server Side Rendering) hooks for NextJS was putting to good use.
In my case i had to fetch all my images in the public folder of the application, and display all of these in a grid for a gallerypage for the application i was working on, for this i did something like this:

```js
// /app/pages/galleryPage.js
import fetchImages from 'pages/api/fetchImages'

export default function Gallery(props) {
  const { images } = props

  return (
    <div className="imageGrid">
      {images && 
        images.map((path, index) =>
          <img
            className="gridImage"
            alt="image in grid"
            src={path}
            key={index}
          >
        )}
    </div>
  )
}

export async function getServerSideProps() {
  const data = fetchImages()
  return {
    props: { data }
  }
}
```

When this code is deployed to Netlify, the functions that is fetching data will be deployed as full API endpoints.
The function name `getServerSideProps` tells NextJS that this function will do its rendering on the serverside of the deployed app.
which is cool since this makes building a server side manually for this app not neccessary, thus saving a lot of time.
So when this the photos page of the app is loaded,
this page will make a call to its now generated server side function for getting the images it needs through as a props for the page component to populate the page with images.

---
Joke of the week:

Does british websites use biscuits? (I thought this was really funny)

---

If you found this blog post amusing and/or you would like to give me feedback.
feel free to reach out to me on twitter @JonasJore

Thanks for reading about my friday wins this week. See you next week 😄

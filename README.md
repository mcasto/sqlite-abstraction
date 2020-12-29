# sqlite-abstraction

## Caveat
If you're seeing this, you're early to the party.

## A Little History
I've spent the past year learning about and developing with Vue, VueJS, Electron, and NodeJS, along with the HTML, CSS, and PHP I've used for decades. For most of my projects, whether web-based or desktop, I've used [neDB](https://github.com/louischatriot/nedb) for my database, and it works for most projects. Then I started working on an Electron app that uses a database with 2.4 million records. neDB worked, but, since it reads all the data into memory, it bogged everything down.

I switched to SQLite. I've been using SQL for over twenty years, so I'm comfortable with it, but, recently, I've been using [Opis Database](https://opis.io/database) for my SQL interactions in PHP. Between that and working with various NoSQL tools, like neDB, I have grown fond of the structure they use. I found nothing similar for SQLite in Javascript, so I decided to write my own.

## My Overview
I want a DAL I can use for SQLite in NodeJS projects, and I am modeling it on Opis Database. This way, if I'm developing, for example, an Electron desktop app that syncs its data with an online tool I also create, if both the JS and PHP use similar code structure, it will mean less mental gear switching as I go from one environment to the other.

## Its Current Status
I am going step-by-step through the Opis documentation and building my tool so it looks similar. I've built all the basic methods to retrieve data from a database. My next step is to work on table joins. I will *try* to remember to update this README as I complete sections, but it may fall behind from time to time. The quickest way to see where I am is to look in `index.js` for the `// mc-todo: ...` note. That's where I write a reminder to myself about the next section I plan to develop.

The end result won't be exactly the same framework as Opis. Some of this will result in differences between JS and PHP. Other changes I'm making just because they suit me better.

## Remaining Sections To Build
  1. Joins
  2. Working with aggregates
  3. Insert records
  4. Update records
  5. Delete records
  6. Transactions
  7. Creating tables
  8. Modifying tables

## Contributions
I don't expect anyone will chime in on this any time soon. I don't even know if anyone will find it before I finish, but, if you're reading this and want to contribute, feel free to send me a pull request for review.
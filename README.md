# sqlite-abstraction

## Caveat
If you're seeing this, you're early to the party.

## A Little History
I've spent the past year learning about and developing with Vue, VueJS, Electron, and NodeJS, along with the HTML, CSS, and PHP I've used for decades. For most of my projects, whether web-based or desktop, I've used [neDB](https://github.com/louischatriot/nedb) for my database, and it works for most projects. Then I started working on an Electron app that uses a database with 2.4 million records. neDB worked, but, since it reads all the data into memory, it bogged everything down.

I switched to SQLite. I've been using SQL for over twenty years, so I'm comfortable with it, but, recently, I've been using [Opis Database](https://opis.io/database) for my SQL interactions in PHP. Between that and working with various NoSQL tools, like neDB, I have grown fond of the structure they use. I found nothing similar for SQLite in Javascript, so I decided to write my own.

## My Overview
I want a DAL I can use for SQLite in NodeJS projects, and I am modeling it on Opis Database. This way, if I'm developing, for example, an Electron desktop app that syncs its data with an online tool I also create, if both the JS and PHP use similar code structure, it will mean less mental gear switching as I go from one environment to the other.

## Its Current Status
I will *try* to remember to update this README as I complete sections, but it may fall behind from time to time.

The end result won't be exactly the same framework as Opis. Some of this will result in differences between JS and PHP. Some are the result of Opis targeting multiple DB types and my tool only targeting SQLite. Other changes I'm making just because they suit me better.

## Remaining Sections To Build
  1. Modify all methods to use prepared statements (also use backticks around column names)
  1. Update records
  1. Delete records
  1. Transactions
  1. Creating tables
  1. Modifying tables

  > **Having** (clause of *groupBy*)
  > 
  > I'm unsure how to handle this one right now, so I'll come back to it at the end.

## Contributions
I don't expect anyone will chime in on this any time soon. I don't even know if anyone will find it before I finish, but, if you're reading this and want to contribute, feel free to send me a pull request for review.
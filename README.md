This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find information on how to start the app, or different aspects of the code.

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).

## Table of Contents
- [How to start SFDates](#how-to-start-sfdates)
- [Updating to New Releases](#updating-to-new-releases)

## How to start SFDates
  ### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

  ### `rails db seed`
  
  This will seed the app with the data from the website. The csv can be found at `lib/sees/Date_Ideas.csv`
  
  If you having issues running `rails db seed` try running `rails db:reset`. **Be careful running `rails db:reset` for it will completely reset the database**
  For the purpose of this website that is fine because the user is not adding any of their own data yet.
## Updating to New Releases

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.


# angularcrumbtrail
A simple AngularJS breadcrumb trail system that allows custom steps/URLs not automatic generated based on location or router.
In each controller view you have full control to set the steps you want the breadcrumb trail show.

# Demo
See an example of the bradcrumb trail working here: http://pitymaia.github.io/

# Install
Add angularcrumbtrail.js into your project like this:

    <script src="angularcrumbtrail.js"></script>

Add the Angular crumb trail as a dependency in your Angular app like this:

    var app = angular.module('app', ['ngRoute', 'angularCrumbtrail']);

You need define in your controller a variable to hold the steps data like this:

    $rootScope.angularCrumbTrailData = [];

    *See more details about this variable in the next section "How to use"

Add the directive tag in your view like this:

    <angular-crumbtrail data="angularCrumbTrailData" separator="|"></angular-crumbtrail>

    *Get notice about the data attribute where we put the $rootScope.angularCrumbTrailData list.
    That way the breadcrumb trail will use it and you will be free to use two or more breadcrumb tails.
    To do that, just add the second directive with a diferent list in the data attibute.

You also can use the directive as attribute like this:

    <div angular-crumbtrail data="angularCrumbTrailData" separator="|"></div>

You can add the CSS style sheet:

    <link rel="stylesheet" type="text/css" href="angularcrumbtrail.css">

But if you use bootstrap as template you dont need the above CSS:

    <div angular-crumbtrail data="angularCrumbTrailData" template="bootstrap"></div>

    *Notice the template attribute, that tell the breadcrumb trail to use bootstrap style

# How to use
All you need is to populate a $rootScope list named angularCrumbTrailData with objects for your trail steps containing a label and a URL for each trail step.

Just do like this:

    $rootScope.angularCrumbTrailData = [
        {label: 'Home', url: '#/someUrl'},
        {label: 'Info', url: ''},
    ];

This list creates 2 trails steps one called "Home" with a link to #/someUrl and a second step called "Info" with is the ACTIVE step, that is why this have a empty link/url.

For each page or view you need add a new step, just populate the list with the steps you need:

    $rootScope.angularCrumbTrailData = [
        {label: 'Home', url: '#/someUrl'},
        {label: 'Info', url: '#/someOhterUrl'},
        {label: 'Help', url: ''},
    ];

Now we have a 3 steps breadcrumb trail with the "Help" as the ACTIVE step.

If you use just one step, that will be the begining of the trail:

    $rootScope.angularCrumbTrailData = [
        {label: 'Home', url: ''},
    ];

This will show just the label "Home" as ACTIVE step with no navigation option.

If you dont want any step, just empty the list like this:

    $rootScope.angularCrumbTrailData = [];

# Customize

To use any custom separator use the attribute "separator" like this:

    <angular-crumbtrail separator="|"></angular-crumbtrail>

As I said before you can use bootstrap style as a template just add the atrribute "template" on the directive with boostrap flag.
Ifo you use bootstrap template, dont use the "separator" attribute.

    <angular-crumbtrail template="bootstrap"></angular-crumbtrail>

If you dont use bootstrap, just add a CSS file and custom style your breadcrumb trails. Use the class angularcrumbtrail like this:

    .angularcrumbtrail {
        background-color: white;
        padding: 0.5em !important;
    }

You need style the li tag to make it inline-block like this:

    .angularcrumbtrail li {
        display: inline-block;
        margin-right: 0.5em;
    }

To style the links do this:

    .angularcrumbtrail a {
        color: orange;
        text-decoration: none;
        font-size: 10pt;
    }

    .angularcrumbtrail a:hover {
        color: red;
        text-decoration: underline;
    }

The active links can be also changed:

    .angularcrumbtrail .active {
        color: black !important;
        text-decoration: none !important;
        cursor: default;
    }


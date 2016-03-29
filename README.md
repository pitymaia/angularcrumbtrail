# angularcrumbtrail
A simple Angular breadcrumb trail system that allows custom steps/URLs not based on location or router.

# Install
Add angularcrumbtrail.js into your project like this:

    <script src="angularcrumbtrail.js"></script>

Add the Angular crumb trail as a dependency in your Angular app like this:

    var app = angular.module('app', ['ngRoute', 'angularCrumbtrail']);

Add the directive tag in your view like this:

    <angular-crumbtrail template="false" separator="|"></angular-crumbtrail>

You also can use the directive as attribute like this:

    <div angular-crumbtrail template="false" separator="|"></div>

# How to use
All you need is to populate a $rootScope list named angularBreadcrumbData with objects for your trail steps containing a label and a URL for each trail step.

Just do like this:

    $rootScope.angularBreadcrumbData = [
        {label: 'Home', url: '#/someUrl'},
        {label: 'Info', url: ''},
    ];

This list creates 2 trails steps one called "Home" with a link to #/someUrl and a second step called "Info" with is the ACTIVE step, that is why this have a empty link/url.

For each page or view you need add a new step, just populate the list with the steps you need:

    $rootScope.angularBreadcrumbData = [
        {label: 'Home', url: '#/someUrl'},
        {label: 'Info', url: '#/someOhterUrl'},
        {label: 'Help', url: ''},
    ];

Now we have a 3 steps breadcrumb trail with the "Help" as the ACTIVE step.

If you use just one step, that will be the begining of the trail:

    $rootScope.angularBreadcrumbData = [
        {label: 'Home', url: ''},
    ];

This will show just the label "Home" as ACTIVE step with no navigation option.

If you dont want any step, just empty the list like this:

    $rootScope.angularBreadcrumbData = [];

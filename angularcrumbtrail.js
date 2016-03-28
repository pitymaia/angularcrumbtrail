'use strict';

app.directive('angularCrumbtrail', function () {
	return {
		scope: true,
		restrict: 'AE',
		template:   '<ol class="breadcrumb">' +
					'<li data-ng-repeat="breadcrumb in breadcrumbs.get()">' +
						'<a href="" data-ng-bind="breadcrumb" data-ng-class="{ active: $last }"></a>' +
					'</li>' +
					'</ol>',
		link: function ($scope, element, attrs) {
			console.log("Carregado!");
			$scope.breadcrumbs = {};
			$scope.breadcrumbs.get = (function () {
				return ['Home', 'Propertie', 'Room'];
			});
		},
	};
});

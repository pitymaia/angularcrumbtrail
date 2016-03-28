'use strict';

app.directive('angularCrumbtrail', function () {
	return {
		scope: true,
		restrict: 'AE',
		template:   '<ol class="breadcrumb" style="margin-bottom: 5px;">' +
					'<li data-ng-repeat="breadcrumb in breadcrumbs.get()" data-ng-class="{ active: $last }">' +
						'<a href="#" data-ng-bind="breadcrumb"></a>' +
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

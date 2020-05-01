'use strict';

export function instantiateAngularCrumbtrail() {
	angular.module('angularCrumbtrail', []).directive('angularCrumbtrail', function ($compile) {
		return {
			scope: true,
			restrict: 'AE',
			link: function ($scope, element, attrs) {

				if (!attrs.data) {
					console.log("AngularCrumbTrail need a data attribute!");
					return;
				}

				$scope.angularbreadcrumbs = {};

				if (attrs.template == 'bootstrap') $scope.angularbreadcrumbs.template = 'breadcrumb';
				else $scope.angularbreadcrumbs.template = 'angularcrumbtrail';
				if (attrs.separator) $scope.angularbreadcrumbs.separator = " " + attrs.separator;

				var template = '<ol class="{{angularbreadcrumbs.template}}" data-ng-if="' + attrs.data + '.length">';

				if (attrs.template != 'bootstrap') {
					template +=	'<li data-ng-repeat="breadcrumb in ' + attrs.data + '">' +
							'<a data-ng-href="{{breadcrumb.url}}" data-ng-bind="breadcrumb.label" data-ng-class="{ active: $last }"></a><span data-ng-if="!$last &amp;&amp; angularbreadcrumbs.separator" data-ng-bind="angularbreadcrumbs.separator"></span>';

				} else {
				// bootstrap way
					template += '<li data-ng-repeat="breadcrumb in ' + attrs.data + '"  data-ng-class="{ active: $last }">' +
						'<a data-ng-if="!$last" data-ng-href="{{breadcrumb.url}}" data-ng-bind="breadcrumb.label"></a><span data-ng-if="$last" data-ng-bind="breadcrumb.label"></span>';
				}
				template += '</li></ol>';


				var linkFn = $compile(template);
				var content = linkFn($scope);
				element.append(content);
			},
		};
	});
}

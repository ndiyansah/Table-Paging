var app = angular.module ('myApp',[]);

app.controller('Myctrl', function($scope)
{
	$scope.students=students;
	$scope.pagesizes=[5,10,15,20];
	$scope.pagesize= $scope.pagesizes[0];//jumlah baris damal 1 halaman
	$scope.currentpage = 0;//lokasi halaman sekarang
	$scope.pagenumber = Math.ceil($scope.students.length / $scope.pagesize); // jumlah total halaman

	$scope.paging = function(type)
	{
		if (type == 0 && $scope.currentpage > 0)
		{
			--$scope.currentpage;
		}
		else if (type==1 && $scope.currentpage < $scope.pagenumber)
		{
		++$scope.currentpage;s	
		}
	}

	$scope.$watchCollection('results', function(){
		if ($scope/results ==  undefined) return;
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);
	})

	$scope.changeAction = function (p)
	{
		$scope.pagesize=p;
		$scope.currentpage = 0;
		$scope.pagenumber = Math.ceil($scope.results.length / $scope.pagesize);

	}
	$scope.ordering = function (ordvar, by)
	{
		ordvar = !ordvar;
		$scope.ordstatus=ordvar;
		$scope.ord = by;
		return ordvar;
	}
	
	$scope.getNumber=function(n)
	{
		return new Array(n);
	}

	$scope.getPage=function(i)
	{
		$scope.currentpage = i;
	}

});

var students=[{
		name: 'handi',
		class: '2A',
		score: 90

	},
	{
		name: 'jaka',
		class: '3A',
		score: 20

	},
	{
		name: 'jerry',
		class: '9A',
		score: 30

	},
	{
		name: 'prima',
		class: '1A',
		score: 100

	},
	{
		name: 'anti',
		class: '1A',
		score: 30

	},
	{
		name: 'dhina',
		class: '10C',
		score: 10

	},
	{
		name: 'thomas',
		class: '6P',
		score: 65

	},
	{
		name: 'prima',
		class: '1A',
		score: 100

	},
	{
		name: 'rasya',
		class: '3A',
		score: 55

	},
	{
		name: 'ogi',
		class: '2C',
		score: 66

	},
	{
		name: 'hendy',
		class: '3K',
		score: 76

	},{
		name: 'resty',
		class: '1A',
		score: 88

	},
	{
		name: 'dinan',
		class: '8E',
		score: 44

	},
	{
		name: 'wahyu',
		class: '4A',
		score: 78

	},
	{
		name: 'regista',
		class: '9P',
		score: 99

	},
	{
		name: 'kim',
		class: '8A',
		score: 55

	}];
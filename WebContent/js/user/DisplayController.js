app.controller("DisplayController", function($scope, $http,$cookies) {
	$scope.searchtext=null;
	$scope.searchalphabet=null;
	$scope.searchdetails=[];
	$scope.productdetails=[];
	$scope.mobileList = null;
	$scope.newMobileList = [];
	$scope.mobile1=null;
	$scope.mobile2=null;
	$scope.mobile3=null;
	$scope.mobile4=null;
	$scope.productList=[];
	$scope.list1=[];
    $scope.listb=[];

	$scope.username=null;
	$scope.message = null;
	$scope.mobile1='null';$scope.mobile2='null';$scope.mobile3='null';$scope.mobile4='null';
	$scope.cameraList=[];
	$scope.productListLength=$scope.productList.length;
	$scope.showValue=false;
	$scope.brand1=null;	$scope.brand2=null;	$scope.brand3=null;	$scope.brand4=null;	$scope.brand5=null;	$scope.brand6=null;	$scope.brand7=null;	$scope.brand8=null;
	$scope.brandList=[];
	$scope.price=null;
	$scope.pixel1=null;	$scope.pixel2=null;	$scope.pixel3=null;
	$scope.pixelList=[];
	$scope.rom1=null;$scope.rom2=null;$scope.rom3=null;$scope.rom4=null;$scope.rom5=null;
	$scope.romList=[];
	$scope.Battery1=null;$scope.Battery2=null;$scope.Battery3=null;$scope.Battery4=null;$scope.Battery5=null;
	$scope.batteryList=[];
	$scope.iOS1=0;
	$scope.iOS2=0;
	$scope.iOS3=0;

	
	$scope.clearBrand=function(){
		$scope.brand1=null;	$scope.brand2=null;	$scope.brand3=null;	$scope.brand4=null;	$scope.brand5=null;	$scope.brand6=null;	$scope.brand7=null;	$scope.brand8=null;
		$scope.filterData();
	};
	$scope.clearPrice=function(){
		$scope.price=null;	
		$scope.filterData();
	}; 
	$scope.clearPixel=function(){
		$scope.pixel1=null;	$scope.pixel2=null;	$scope.pixel3=null;
		$scope.filterData();
	};
	$scope.clearRom=function(){
		$scope.rom1=null;$scope.rom2=null;$scope.rom3=null;$scope.rom4=null;$scope.rom5=null;
		$scope.filterData();
	};
	$scope.clearBattery=function(){
		$scope.Battery1=null;$scope.Battery2=null;$scope.Battery3=null;$scope.Battery4=null;$scope.Battery5=null;
		$scope.filterData();
	};
	
	$scope.getMobiles = function() {
		$scope.message = null;
		$http.get(URI + "MobileAPI/products").then(function(response) {
			$scope.mobileList = response.data;
			$scope.newMobileList = $scope.mobileList;
			$scope.filteredListByBrand=$scope.mobileList;
			$scope.filteredListByPrice=$scope.mobileList;
			
			$scope.message = null;
		}, function(response) {
			$scope.message = response.data.message;
			$scope.mobileList = null;
		});
	}
	
	$scope.comparingMobiles=function(){
		
		
		var data=$scope.mobile1+":"+$scope.mobile2+":"+$scope.mobile3+":"+$scope.mobile4;
		
		$http.post(URI + "MobileAPI/compare/",data).then(function(response){
			
			$scope.message=response.data.message;
		},function(response){
			 $scope.productList=null;
			$scope.message=response.data.message;
		});
		
	}
	
 $scope.showResults=function(){
	
	 $scope.showValue=true;
	 var data=$scope.mobile1+":"+$scope.mobile2+":"+$scope.mobile3+":"+$scope.mobile4;
	 $http.post(URI+"MobileAPI/find",data).then(function(response){
		 $scope.productList=response.data;
	 },function(response){
		 $scope.productList=null;
		 $scope.message=response.data.message;
	 })
 }
 
  $scope.getUserName = function() {
	  
                if($cookies.get('name')==null){
                      window.location="../error.html";
                }
                else{
                      $scope.username = $cookies.get('name');
                }
         }
  $scope.logout = function() {
        	
                $cookies.remove('name');
                window.location="../index.html";
   }
   $scope.getSpecifications = function(data) {
        	 $scope.data=data;
   }

$scope.filterData=function(){
	$scope.newMobileList = $scope.mobileList;

	$scope.brandList=[$scope.brand1,$scope.brand2,$scope.brand3,$scope.brand4,$scope.brand5,$scope.brand6,$scope.brand7,$scope.brand8];

	$scope.priceList=[$scope.price1,$scope.price2,$scope.price3];
	$scope.pixelList=[$scope.pixel1,$scope.pixel2,$scope.pixel3];
	$scope.osList=[$scope.iOS1,$scope.iOS2,$scope.iOS3];
	$scope.romList=[$scope.rom1,$scope.rom2,$scope.rom3,$scope.rom4,$scope.rom5];	var newList=[];
	var list1=[];	var list2=[];	var list3=[]; var list4=[];
	var count1=0;	var count2=0;	var count3=0;	var count4=0;
	for(i=0;i<$scope.brandList.length;i++){
	 if($scope.brandList[i]!=null){		
		for (j = 0; j < $scope.mobileList.length; j++) {
			if (($scope.mobileList[j].brand.search($scope.brandList[i])) != -1) {				
				newList.push($scope.mobileList[j]);
			}
		}		
	}
	 else{
		 count1+=1;
	 }
	}
	
	if(count1==8){
		newList=$scope.newMobileList;
	}
	$scope.newMobileList=newList;

	var originalList=$scope.newMobileList;

	if($scope.price!=null){
		
		if($scope.price=="<10000"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].cost<10000){
					list1.push(originalList[i]);
				}
			}
		}
		if($scope.price=="10000-30000"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].cost>=10000 && originalList[i].cost<=30000){
					list1.push(originalList[i]);
				}
			}
		}
		if($scope.price==">30000"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].cost>30000){
					list1.push(originalList[i]);
				}
			}
	}
	
	}
	else{
		count2+=1;
	}
	if(count2==1){
		list1=$scope.newMobileList;
	}
	$scope.newMobileList=list1;
	var originalList=$scope.newMobileList;

	for(m=0;m<$scope.pixelList.length;m++){
	if($scope.pixelList[m]!=null){		
		if($scope.pixelList[m]=="<5"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].camera<5){
					list2.push(originalList[i]);
				}
			}
		}
		if($scope.pixelList[m]=="5-10"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].camera>=5 && originalList[i].camera<=10){
					list2.push(originalList[i]);
				}
			}
		}
		if($scope.pixelList[m]==">10"){
			for(i=0;i<originalList.length;i++){
				if(originalList[i].camera>10){
					list2.push(originalList[i]);
				}
			}
		}
		
	}
	else{
		count3+=1;
	}
	}
	if(count3==3){
		list2=$scope.newMobileList;
	}
	$scope.newMobileList=list2;
	var originalList=$scope.newMobileList;
	for(p=0;p<$scope.romList.length;p++){
		if($scope.romList[p]!=null){		
			if($scope.romList[p]=="8 GB"){
				for(i=0;i<originalList.length;i++){
					if(originalList[i].rom=="8 GB"){
						list3.push(originalList[i]);
					}
				}
			}
			if($scope.romList[p]=="16 GB"){
				for(i=0;i<originalList.length;i++){
					if(originalList[i].rom=="16 GB"){
						list3.push(originalList[i]);
					}
				}
			}
			if($scope.romList[p]=="32 GB"){
				for(i=0;i<originalList.length;i++){
					if(originalList[i].rom=="32 GB"){
						list3.push(originalList[i]);
					}
				}
			}
			if($scope.romList[p]=="64 GB"){
				for(i=0;i<originalList.length;i++){
					if(originalList[i].rom=="64 GB"){
						list3.push(originalList[i]);
					}
				}
			}
			if($scope.romList[p]=="128 GB"){
				for(i=0;i<originalList.length;i++){
					if(originalList[i].rom=="128 GB"){
						list3.push(originalList[i]);
					}
				}
			}
			
		}
		else{
			count4+=1;
		}
		}
	
		if(count4==5){
			list3=$scope.newMobileList;
		}
		$scope.newMobileList=list3;	
		var originalList=$scope.newMobileList;
		if($scope.osList[2]!=0 ){ 
			
            for (j in originalList) {
            	
                 if (originalList[j].name.search("Microsoft")==0) {                     
                        list4.push(originalList[j]);
                       
                 }
            }          
       }
		
       if($scope.osList[0]!=0 ){     
    	   
    	   
                 for (j in originalList) {
                	  if (originalList[j].name.search("IPHONE")==0) {                     
                          
                            list4.push(originalList[j]);
                            
                       }
                 }          
            }
      
        if($scope.osList[1]!=0 ){  
            
                 for (j in originalList) {
                       
                       if (originalList[j].specification.search("Android")!=-1) {
                            
                            list4.push(originalList[j]);
                       }
                       
                 }          
            }
       
       

       if($scope.osList[2]==0 && $scope.osList[1]==0 && $scope.osList[0]==0){
          
            list4=$scope.newMobileList;
            
       }
      
       $scope.newMobileList=list4;
       var originalList=$scope.newMobileList;
       
       for(j=0;j<$scope.batteryList.length;j++){
       if($scope.batteryList[j]!=null){
            
            if($scope.batteryList[j]=="<2000"){
                 for(i=0;i<originalList.length;i++){
                       if(originalList[i].battery<2000){
                         
                            $scope.listb.push(originalList[i]);
                       }
                 }
            }
            if($scope.batteryList[j]=="2000-3000"){
                 for(i=0;i<originalList.length;i++){
                       if(originalList[i].battery>=2000 && originalList[i].battery<=3000){
                            $scope.listb.push(originalList[i]);
                       }
                 }
            }
            if($scope.batteryList[j]==">3000"){
                 for(i=0;i<originalList.length;i++){
                       if(originalList[i].battery>3000){
                            $scope.listb.push(originalList[i]);
                       }
                 }
            }
            
            
       }
       
       }
       if($scope.batteryList[0]==null && $scope.batteryList[1]==null &&$scope.batteryList[2]==null){
            $scope.listb=$scope.newMobileList;
       }
       $scope.newMobileList=$scope.listb;
       

	if(count1==8 && count2==1 && count3==3 && count4==5){
		$scope.newMobileList=[];
	}
	if($scope.newMobileList.length==0){
		$scope.message="No mobiles available for your search criteria";
	}	
	return $scope.newMobileList;
}	
 $scope.getsearchdetails=function(){

	var data=$scope.searchtext;
	
	$http.post(URI+"MobileAPI/search",data).then(function(response){
		$scope.searchdetails=response.data;
		$scope.message = null;
	},function(response){
		 $scope.message=response.data.message;
		 $scope.searchdetails=null;
		 $scope.productdetails = null;
	 });
 }


 $scope.getsearchUsingAlphabet=function(data){

                 var data=data;
                 
                 $http.post(URI+"MobileAPI/alphabet",data).then(function(response){
                	 
                                 $scope.newMobileList=response.data;
                                 
                                 $scope.message = null;
                 },function(response){
                	 
                                 $scope.message=response.data.message;
                                 $scope.newMobileList=null;
                                 $scope.productdetails = null;
                 });
 }

 $scope.getproductsbyprice=function(){
     var data=JSON.stringify($scope.productprice);
     $http.post(URI + "MobileAPI/PriceAPI",data).then(function(response) {
          $scope.productdetails = response.data;
          $scope.message = null;
   }, function(response) {
          $scope.message = response.data.message;
          $scope.productdetails = $scope.productdetails;
   });
     
  }
 
});
(function() {

	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();

// mobiscroll.settings = {
//     theme: 'ios'
// };

var obj=angular.module("chatbot",['mobiscroll-select', 'mobiscroll-calendar', 'mobiscroll-form']);
var c=0,p=false,seat=false,pnrno=1234567890,train,source,dest,header,selectedVal;
obj.controller("cont",($scope,$http)=>{
  $scope.headerSettings = {
            theme: 'ios',
            headerText: '{value}'
        };

        $scope.external = new Date();

        $scope.externalSettings = {
            showOnTap: false,
            showOnFocus: false
          };
  $scope.count=0;
  $scope.user='Annonomous User';
  $scope.trainNumber=12001;
  $scope.source="";
  $scope.dest="";
  $scope.header="16-07-2017";
  $scope.selectedVal="2S";

//select
$scope.selVal = 1;
$scope.selectVal = 1;
$scope.external = 1;



//select end


  $scope.ansSub=()=>{
      if($scope.answer!==undefined && $scope.count==0){
        $scope.data.questions[1].question='hello '+$scope.answer+', how can I assist you with?';
        $scope.user=$scope.answer;
      }
      if($scope.answer!==undefined && $scope.count<$scope.data.questions.length){
         $scope.data.questions[$scope.count].answer=$scope.answer;
        $scope.answer='';
        $scope.count++;c++;}
				if(p&&$scope.count==3){
	        $scope.pnr();p=false;pnrno=$scope.answer;
					
	      }
				if(seat){
					seat=false;
		      $scope.seatAvail();
	      }


  }
  $scope.checkpnr=()=>{
    $scope.data.questions[$scope.count+1].question='Enter PNR number';
    $scope.count++;c++;
    p=true;
  }
  $scope.checkseat=(trainNumber,source,dest,selectedVal,header)=>{
    seat=true;
		this.train=trainNumber;
		this.source=source;
		this.dest=dest;
		this.selectedVal=selectedVal;
		this.header=header;
		$scope.ansSub();
  }
  $scope.pnr=()=>{
    $http.get("https://api.railwayapi.com/v2/pnr-status/pnr/"+pnrno+"/apikey/7hlhv854wv/")
      .then((res)=>{
        $scope.pnrData=res.data;
        $scope.data.questions[$scope.count].question=
                                          "From: "+res.data.from_station.name+
                                          "\nTo: "+res.data.to_station.name+
                                          "\nTrain: "+res.data.train.name+
                                          "\nTotal Passengers: "+res.data.total_passengers+
                                          "\nBoarding Point: "+res.data.boarding_point.name+
                                          "\nReservation Upto: "+res.data.reservation_upto.name+
                                          "\nChart Prepared: "+res.data.chart_prepared+
                                          "\nPassenger: "+ res.data.passengers.map((val)=>{
                                                                return (
                                                                  "no: "+val.no
                                                                  +"\nCurrent Status: "+val.current_status
                                                                  +"\nBooking Status: "+val.booking_status
                                                                  +""
                                                                )
                                                              });
      }
    );
  }
  $scope.seatAvail=()=>{
    $http.get("https://api.railwayapi.com/v2/check-seat/train/"+train+"/source/"+source+"/dest/"+dest+"/date/"+header+"/pref/"+selectedVal+"/quota/GN/apikey/7hlhv854wv/")
      .then((res)=>{console.log(res.data);
        $scope.data.questions[$scope.count].question=
																								"Here are Some Information \n"+ res.data.availability
																																.map((val)=>{
																																	return (
																																		"\nDate: "+val.date
																																		+"\nStatus: "+val.status
																																		+""
																																	)
																																});
      }
    );
  }
  $scope.data={
      "questions": [
                    {

                            "id":1,
                            "question": "Hello Please Enter your name",
                            "answer": ""

                    },
                    {

                            "id":2,
                            "question": "hello ",
                            "answer": ""

                    },
                    {

                            "id":3,
                            "question": "Please Wait!",
                            "answer": ""

                    },
                    {

                            "id":4,
                            "question": "Please Wait!",
                            "answer": ""

                    },
                    {

                            "id":5,
                            "question": "Please Wait!",
                            "answer": ""

                    },
                    {

                            "id":6,
                            "question": "Please Wait!",
                            "answer": ""

                    }

      ]
  }


});

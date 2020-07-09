var correctCards = 0;
$( init );

function init() {
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );


  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  numbers.sort( function() { return Math.random() - .5 } );
  //上面電腦元件 
  window.onload = function (){
		for ( var i=0; i<10; i++ ) {
                var bigImg = document.createElement("img");
                bigImg.src="./images/game/element/"+numbers[i]+".png";
                var myDiv = document.getElementById('card'+numbers[i]);
                bigImg.width="75";
                bigImg.height="75";
                myDiv.appendChild(bigImg);
		}
        };

  for ( var i=0; i<10; i++ ) {
    $('<div></div>').data( 'number', numbers[i] ).attr( 'id', 'card'+numbers[i] ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

   if (correctCards === 0){
	var face = 0;
        images(face);
   }
   else if (correctCards === 1){
        var face = 1;
        images(face);
   }

function images(face){
   var Img = document.createElement("img");
   Img.src="./images/game/face/M"+face+".gif";
   Img.id="imgs";
   Img.name="imgs";
   var Div = document.getElementById('cardSlots');
   Img.style="position: absolute;display:block; margin-left:350px;margin-top:80px"
   Img.width="400";
   Img.height="400";
   Div.appendChild(Img);
}

  var words = [ '電源供應器', '主機板', 'CPU', '硬碟', '記憶體', '顯示卡', '網路卡', '光碟機', '音效卡', '作業系統' ];
  for ( var i=1; i<=10; i++ ) {
    $('<div style="font-size:15px;">' + words[i-1] + '</div>').data( 'number', i ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop(event, ui) {
  var slotNumber = $(this).data('number');
  var cardNumber = ui.draggable.data('number');

  if (slotNumber === cardNumber) {
    ui.draggable.addClass('correct');
    ui.draggable.draggable('disable');
    $(this).droppable('disable');
    ui.draggable.position({
      of: $(this), my: 'left top', at: 'left top'
    });

    ui.draggable.draggable('option', 'revert', false);
    correctCards++; //increment keep track correct cards
    $("#imgs").attr("src","./images/game/face/M"+correctCards+".gif");
  }

  if (correctCards === 10) {
	$("#myModal3").modal({backdrop: "static"});
  }
}
 

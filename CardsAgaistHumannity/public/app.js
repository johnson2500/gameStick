socket.emit("fillDeck")

//===============================================================
//=== Black Card Controller =====================================
//===============================================================

app.controller('blackCardController', ($scope) => {

  function update() {
    $scope.$apply(() => {
      console.log("test")
    })
  }
  $scope.userName = user.userName;
  $scope.turn = user.userName;
  $scope.label = "Testing";
  $scope.whiteCards = 0;

  socket.on('card', (msg) => {
    $scope.label = msg;
    $scope.$apply();
  })

  socket.on('filledDeck', (msg) => {
    user.fillHand(msg);
    $scope.label = user.deck.blackCards[user.deck.ind].label;
    $scope.$apply();
  })

  socket.on('newBlackCard', (msg) => {
    console.log("Card R = ", msg)
    $scope.label = msg;
    user.deck.insertNewCard(msg);
    $scope.$apply();
  })

  //=== User InterFace ================================

  $("#blackCard").on("swipeleft", () => {
    $("#blackCard").animate({
      left: "-100%"
    }, 200, () => {
      var left = ($("body").width() - $("#blackCard").width()) / 2;
      $("#blackCard").css({
        'left': '100%'
      })
      $("#blackCard").animate({
        "left": "0" + left + "px"
      }, 200);
      $scope.label = user.getNextCard();
      $scope.$apply();
    });
    $scope.label = user.getNextCard();
    $scope.$apply();
  });
  $("#blackCard").on("swiperight", () => {
    $("#blackCard").animate({
      left: "100%"
    }, 200, () => {
      var left = ($("body").width() - $("#blackCard").width()) / 2;
      $("#blackCard").css({
        'left': '-100%'
      })
      $("#blackCard").animate({
        "left": "0" + left + "px"
      }, 200);
      $scope.label = user.getPreviousCard();
      $scope.$apply();
    });
  })
  $("#submitCard").click(() => {
    user.submitCardToTable();
  });
  //=== FUNCTIONS ======================================
});

//===============================================================
//=== White Card Controller =====================================
//===============================================================

app.controller('whiteCardController', ($scope) => {
  $scope.whiteCardLabel = "testing"
  socket.emit('getWhiteCard');
  socket.on('whiteCard', (msg) => {
    $scope.whiteCardLabel = msg;
    $scope.$apply();
  });

});

//===============================================================
//=== Bottom Nav Controller =====================================
//===============================================================

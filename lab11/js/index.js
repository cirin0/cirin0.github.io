$(document).ready(function () {
   $("#chan").click(function () {
      $("#pChan").html("Це замінені<b> пагаграфи</b>");
      $("#pChan2").html("Це замінені<b> пагаграфи</b>");
   });
   // *************************************************
   $("#sStyle").click(function () {
      $("#pStyle").css({ "background-color": "blue", "font-size": "22px" });
      $("#pStyle1").css({ "background-color": "yellow", "font-size": "25px" });
      $("#pStyle2").css({ "background-color": "orange", "font-size": "28px" });
   });
   // *************************************************
   $("#sVal").click(function () {
      $("input:text").val("Артур Нерчук");
   });
   // *************************************************
   $("#sAttr").click(function () {
      $("#image").attr("width", "300");
   });
   // *************************************************
   $("#dAttr").click(function () {
      $("#image").removeAttr("width");
   });
   // *************************************************
   $("#pTo").click(function () {
      $("<b>Елемете доданий prependTo() </b>").prependTo("#pToP");
   });
   // *************************************************
   $("#eElem").click(function () {
      $("#div2").empty();
   });
   // *************************************************
   $("#dWidth").click(function () {
      $("#oWidth").text("Ширина зображеня: " + $("#image2").width());
   });
   // *************************************************
   $("#dPos").click(function () {
      let pos = $("#image2").position();
      $("#oPos").text("Позиція зверху:" + pos.top + " Позиція з ліва: " + pos.left);
   });
   // *************************************************
   $('#closestBtn').click(function () {
      $('p').closest('#task3').css({ "background-color": "lightblue", "border-radius": "10px" });
   });
   // *************************************************
   $('#mapBtn').click(function () {
      let items = $('p').map(function () {
         return $(this).text();
      }).get();
      alert(items.join(', '));
   });
   // *************************************************
   $('#prevAllBtn').click(function () {
      $('p').prevAll().css({ "color": "red", "border": "2px solid red" });
   });
   // *************************************************
   $('#endBtn').click(function () {
      $('p').css('font-weight', 'bold').end().css('border', '2px solid green');
   });
   // *************************************************
   $('#nextUntilBtn').click(function () {
      $("p.start").nextUntil("p.stop").css({ "color": "red", "font-style": "italic" });
   });

   // *************************************************
   // *************************************************
   // *************************************************
   // *************************************************
   // *************************************************

});
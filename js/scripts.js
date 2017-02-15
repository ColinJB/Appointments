$(function() {
  $("form#aptSetter").submit(function(event) {
    console.log("this part is working");

    var name = $("#name").val();
    var describe = $("#describeApt").val();
    var date = $("#dateApt").val();
    var time = $("#timeApt").val();

    $(".outputName").text(name);
    $(".outputDescribe").text(describe);
    $(".outputDate").text(date);
    $(".outputTime").text(time);

    $(".result").show();
    event.preventDefault();
  });
});

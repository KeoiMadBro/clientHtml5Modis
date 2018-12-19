
$(document).ready(
    function(){
        loadData();
        $("#studentPost").on('submit',function(e){
            e.preventDefault();
            var result = { };
           $.each($(this).serializeArray(), function() {
               result[this.name] = this.value;
           });
           result = JSON.stringify(result,null,' ');

           console.log(result);
           //$.post("https://modisapi20181211015957.azurewebsites.net/api/Studenti",result,"json");
           $.ajax({
               type: 'POST',
               url: 'https://modisapi20181211015957.azurewebsites.net/api/Studenti',
               data: result,
               contentType: "application/json",
               dataType: 'json',
               statusCode: {
                   200: function() {
                   loadData();
                   $("#studentPost")[0].reset();
                   },
                   400: function() {
                       alert( "Bad Request 404" );
                   }
               }
           });
            //$.post("https://modisapi20181211015957.azurewebsites.net/api/Studenti",data,
            //function(e){
            //    alert('tutto apposto');
            //    console.log(e);
            });
       



        
    });

    function createRow(student){
        return "<tr class='rigaTabella'>"+createColumn(student.id)+createColumn(student.nomeCompleto)+
                createColumn(student.corsi.length)+"</tr>";
    }

    function createColumn(data){
        return "<td>"+data+"</td>";
    }

    function loadData(){
        $(".rigaTabella").html("");
        
        $.get("https://modisapi20181211015957.azurewebsites.net/api/Studenti",function(data){
            for(var i=0;i<data.length; i++){
                //alert(data[i].nomeCompleto);
                $("#studentTable").append(
                    createRow(data[i])
                );

            }
                
        });
    }
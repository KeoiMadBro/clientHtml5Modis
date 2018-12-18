
$(document).ready(
    function(){

        $("#studentPost").on('submit',function(e){
            e.preventDefault();
            var data = $(this).serialize();
            var json = JSON.stringify($(this));
            alert(data);
            $.post("https://modisapi20181211015957.azurewebsites.net/api/Studenti",data,
            function(e){
                alert('tutto apposto');
                console.log(e);
            });
        });



        $.get("https://modisapi20181211015957.azurewebsites.net/api/Studenti",function(data){
            for(var i=0;i<data.length; i++){
                //alert(data[i].nomeCompleto);
                $("#studentTable").append(
                    createRow(data[i])
                );

            }
                
        });
    });

    function createRow(student){
        return "<tr>"+createColumn(student.id)+createColumn(student.nomeCompleto)+
                createColumn(student.corsi.length)+"</tr>";
    }

    function createColumn(data){
        return "<td>"+data+"</td>";
    }
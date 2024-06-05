var loader = document.querySelector('.s_myloader');
loader.classList.add('invisible')

document.querySelector('.s_getauthor').addEventListener('click',function(){
    if(loader.classList.contains('invisible')){
        loader.classList.remove('invisible');
        loader.classList.add("visible");
    }else{
        loader.classList.remove('visible');
        loader.classList.add("invisible");
    }

    let po = new Promise(function(resolve, reject){
        $.ajax({
            url:'https://fakerestapi.azurewebsites.net/api/v1/Authors',
            type:'GET',
            success:function(result,status,xhr){
                console.log(result);
                resolve(result);
            },
            error:function(result,status,xhr){
                reject(error);
            }
    
        })
    });
    
    po.then(function(data){
        loader.classList.remove('visible');
        console.log(data);
        var tr = `<table class="table">
                        <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">firstName</th>
                            <th scope="col">lastName</th>
                            <th scope="col">idBook</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>`;
        data.forEach(element => {
            console.log(element);
            tr += `<tr>
                        <td>`+ element.id +`</td>
                        <td>`+ element.firstName +`</td>
                        <td>`+ element.secondName +`</td>
                        <td>`+ element.idBook +`</td>
                        <td>
                            <button class="btn btn-success btn-sm">View</button>
                            <button class="btn btn-info btn-sm">Edit</button>
                            <button class="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>`;
        });

        tr += ` </tbody>
            </table>`;

        document.body.innerHTML += tr;
    }).catch(function(error){
        
    });
})



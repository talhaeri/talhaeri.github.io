const table=document.getElementById("userTable");


getUserList();

function refrshData(){
    getUserList();
}

function createUser(){
    let data={
        first_name:document.getElementById("first_name").value || "empty",
        last_name:document.getElementById("last_name").value || "empty",
        email:document.getElementById("email").value || "empty",
    };
    fetch("https://reqres.in/api/users", {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        table.innerHTML+=`
        <tr> 
            <><td>
                <input type="text" class="form-control" id="" value="${data.first_name}" />
            </td><><td>
                <input type="text" class="form-control" id="" value="${data.last_name}" />
            </td><td>
                        <input type="text" class="form-control" id="" value="${data.email}" />
                    </td><td>
                        <a href="" class="btn btn-warning" onclick="updateUser(${data.id})">Update</a>
                        <a href="" class="btn btn-danger" onclick="deleteUser(${data.id})">Delete</a>
                    </td></></>
            </tr>`
    }) 
}
$(document).ready(function () {
    var table = $('#myTable').DataTable();

    $('#example tbody').on('click', 'tr', function () {
        var data = table.row(this).data();
        console.log(table.cell(this).data());
        console.log("Done");
        alert('You clicked on ' + data[0] + "'s row");
    });
});


//Fetch calls
// let obj, obj1;

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => {
//     obj = data;
//   })
//   .then(() => {
//     console.log(obj);
//   });

// fetch(`https://jsonplaceholder.typicode.com/posts`, {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: '0',
//   }),
//   header: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })

//   .then(res => res.json())
//   .then(data => console.log(data));

// fetch(`https://jsonplaceholder.typicode.com/posts`, {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: '0',
//   }),
//   header: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then(res => res.json())
//   .then(data => console.log(data));

//  fetch(`https://jsonplaceholder.typicode.com/posts/0`, {
//    method: 'DELETE'
//  })
//  .then((res) => res.json())
//  .then((data) => console.log(data))
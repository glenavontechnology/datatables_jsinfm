let table;

//https://datatables.net/reference/option/
//https://datatables.net/examples/index

window.loadTable = (json) => {
  const columns = [
    {title: "First Name", data: "firstName"},
    {title: "Last Name", data: "lastName"},
    {title: "Position", data: "position", searchable: false},
  ];
  const data = [
    {firstName: "James", lastName: "Glendinning", position: "Big Chief", id: "DSHFLJGLDKFHG"},
    {firstName: "George", lastName: "Glendinning", position: "Big Dog"},
    {firstName: "Kat", lastName: "Glendinning", position: "Top Lady"}
];

  table = $("#dtable").DataTable({
  //  paging: false,
  //  ordering: false,
    searching: true,
    dom: 'B<"clear">lfrtip',
    buttons: true,


    columns: columns,
    data: data,
  });
};

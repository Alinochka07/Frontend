var ref = firebase.database().ref("dinosaurs");
ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
  console.log(snapshot.key);
});